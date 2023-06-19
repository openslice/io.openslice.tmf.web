import { Component, OnInit } from '@angular/core';
import { ServiceCandidate, ServiceCandidateRef, ServiceCatalog, ServiceCategory, ServiceSpecification, ServiceSpecificationCreate } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceCandidateService, ServiceCatalogService, ServiceCategoryService, ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { Observable, Subscription } from 'rxjs';
import { ThemingService } from 'src/app/theming/theming.service';
import { ServiceCandidateWithLogo } from 'src/app/shared/models/service-candidate-with-logo.model';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { simpleFade } from 'src/app/shared/animations/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { PreviewMarketplaceItemComponent } from 'src/app/p_services/marketplace/preview-marketplace-item/preview-marketplace-item.component';
import { MatDialog } from '@angular/material/dialog';
import { ArtifactsApiControllerService, PortalRepositoryApiImplService } from 'src/app/openApis/portalRepositoryAPI/services';
import { MANOplatform } from 'src/app/openApis/portalRepositoryAPI/models';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { ServiceTestSpecification, ServiceTestSpecificationCreate } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';
import { ToastrService } from 'ngx-toastr';
import { PortalRepositoryAPIAuthService } from '../shared/portal-repository-api-auth.service';
import { forkJoin } from 'rxjs'
import { MatCheckboxChange } from '@angular/material/checkbox';


@Component({
  selector: 'app-service-design',
  templateUrl: './service-design.component.html',
  styleUrls: ['./service-design.component.scss'],
  animations: [ trigger('simpleFade', simpleFade()) ]
})
export class ServiceDesignComponent implements OnInit {

  constructor(
    private toast: ToastrService,
    private dialog: MatDialog,
    private themingService: ThemingService,
    private sortingService: SortingService,
    private portalRepositoryAPIAuthService: PortalRepositoryAPIAuthService,
    private catalogService: ServiceCatalogService,
    private categoryService: ServiceCategoryService,
    private candidateService: ServiceCandidateService,
    private specificationService: ServiceSpecificationService,
    private artifactsControllerService: ArtifactsApiControllerService,
    private testSpecService: ServiceTestSpecificationService
    ) { }

  step = 0;
  subscriptions = new Subscription()
  testSpecServiceRootUrl: string

  ngOnInit(): void {
    this.retrieveCatalogsList()
    this.retrieveCategoriesList()
    
    this.retrieveMANOPlatforms()
    this.retrieveUserInfoForNFVArtifacts()

    this.retrieveAvailableTestSpecs()
    this.testSpecServiceRootUrl = this.testSpecService.rootUrl
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    if ( 
        (this.step === 0 && this.networkSliceSelection.value) || 
        (this.step === 1 && this.uploadedNSpackages.length > 0) ||
        (this.step === 2 && this.testSpecification && this.testSpecification.attachment.length > 0)
      ) {
        this.step++;
      }
    
  }

  prevStep() {
    this.step--;
  }
  
  //NetworkSlices - Step 0 Panel functions
  //

  serviceCatalogs: ServiceCatalog[] = []
  serviceCategories: ServiceCategory[] = []
  serviceCandidates: ServiceCandidateWithLogo[] = []
  serviceSpecifications: ServiceSpecification[] = []
  networkSliceSelection = new FormControl(null, Validators.required)

  networkSliceCardSelected = [];
  onSelectNetworkSliceCard(index) {
    this.networkSliceCardSelected.fill(false)
    this.networkSliceCardSelected[index] = !this.networkSliceCardSelected[index];
    this.networkSliceSelection.setValue(this.serviceCandidates[index])
  }

  onSelectNetworkSlice(event: MatAutocompleteSelectedEvent) {
    const cardIndex = this.serviceCandidates.findIndex( (element:ServiceCandidateWithLogo) => element.id === event.option.value.id)
    this.onSelectNetworkSliceCard(cardIndex)
  }

  displayFn(candidate?: ServiceCandidate): string | undefined {
    return candidate ? candidate.name : undefined;
  }

  retrieveCatalogsList() {
    this.catalogService.listServiceCatalog({}).subscribe(
      data => { this.serviceCatalogs = data },
      error => { console.error(error) },
      () => {
      }
    )
  }

  retrieveCategoriesList() {
    this.categoryService.listServiceCategory({}).subscribe(
      data => { this.serviceCategories = data },
      error => { console.error(error) },
      () => {
        this.retrieveNetworkSlices()
      }
    )
  }

  retrieveNetworkSlices() {
    let networkSliceCategory = this.serviceCategories.find(cat => cat.name.toLowerCase().includes("network slices"))
    if (networkSliceCategory) {
      networkSliceCategory.serviceCandidate.forEach( (candidateRef) => {
        this.retrieveCandidateFromRef(candidateRef)
      })
    }
  }

  retrieveCandidateFromRef(candidateRef: ServiceCandidateRef) {
    
    this.subscriptions.add(this.candidateService.retrieveServiceCandidate({ id: candidateRef.id }).subscribe(
      data => { 
        let candidate: ServiceCandidateWithLogo = data
        candidate.fetchingLogo = true
        candidate.logo = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH //set Default App Image, path defined in theming.service.ts

        this.serviceCandidates.push(candidate)
        this.networkSliceCardSelected.push(false)

        this.specificationService.getAttachment({id: data.serviceSpecification.id, attid:'logo'}).subscribe(
          data => {
            const reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = (__event) => {
              const base64data = reader.result;
              this.serviceCandidates.find(cand => cand.id === candidateRef.id).logo = base64data
              candidate.fetchingLogo = false
            }
          },
          error => {
            candidate.fetchingLogo = false
          }
        )

      },
      error => { console.error(error) },
      () => {
        this.serviceCandidates.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
        // this.filteredServiceCandidates$ = this.serviceCandidatesFilterCtrl.valueChanges.pipe(
        //   startWith(null),
        //   map( (value:null | string) => value ? this._filterOnServiceCandidates(value) : this.serviceCandidates.slice() )
        // )
      }
    ))
  }

  previewServiceSpec(candidate: ServiceCandidate) {
    const dialogRef = this.dialog.open(PreviewMarketplaceItemComponent, {
      data: {
        serviceCandidate: candidate,
        mode: 'preview'
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(
      result => {
        // console.log(result);
      }
    )
  }

  //
  //NetworkSlices - Step 0 Panel functions

  //NFV Artifacts - Step 1 Panel functions
  //

  manoPlatforms: MANOplatform
  manoPlatformSelection = new FormControl(null, Validators.required)

  vnfUploadController = new FileUploadControl(null, FileUploadValidators.accept(['.gz', '.tgz', 'application/gzip', 'application/x-gzip', 'application/x-compressed']))
  nsUploadController = new FileUploadControl(null, FileUploadValidators.accept(['.gz', '.tgz', 'application/gzip', 'application/x-gzip', 'application/x-compressed']))

  uploadedVNFpackages = []
  uploadedNSpackages = []

  uploadedNSDID: string

  retrieveMANOPlatforms() {
    this.artifactsControllerService.getMANOplatformsUsingGET().subscribe(
      data => {
        this.manoPlatforms = data
      }
    )
  }

  retrieveUserInfoForNFVArtifacts() {
    this.portalRepositoryAPIAuthService.fetchPortalRepositoryUserInfo()
  }

  submitVNFpackages() {

    if (this.vnfUploadController.valid) {
      this.vnfUploadController.value.forEach( vnfPackage => {
        const vnfObj: ArtifactsApiControllerService.AddVxFMetadataUsingPOSTParams = {
          vxf: JSON.stringify({"owner":this.portalRepositoryAPIAuthService.portalRepositoryUser,"extensions":[],"packagingFormat":this.manoPlatformSelection.value}),
          prodFile: vnfPackage
        }

        let vnfResponse;
        this.artifactsControllerService.addVxFMetadataUsingPOST(vnfObj).subscribe(
          data => {vnfResponse = data},
          error => {
            if (error.error && error.error.message.includes("already exists")) {
              this.toast.error(`The VNF package(s) under the name ${vnfPackage.name} already exists. Please use a different name.`)
            } else {
              this.toast.error("Please check the VNF package(s) format and reassure it meets the selected NFV Package format")
            }
          },
          () => {
            vnfPackage['location'] = vnfResponse.packageLocation
            this.uploadedVNFpackages.push(vnfPackage)
            this.toast.success("VNF package(s) was successfully uploaded")
            this.manoPlatformSelection.disable()   
          }
        ) 

      })  
    }

  }

  submitNSpackages() {
    if (this.nsUploadController.valid) {
      this.nsUploadController.value.forEach( nsPackage => {
        const nsObj: ArtifactsApiControllerService.AddExperimentMetadataUsingPOSTParams = {
          exprm: JSON.stringify({"owner":this.portalRepositoryAPIAuthService.portalRepositoryUser,"extensions":[],"packagingFormat":this.manoPlatformSelection.value}),
          prodFile: nsPackage
        }

        let nsResponse;
        this.artifactsControllerService.addExperimentMetadataUsingPOST(nsObj).subscribe(
          data => {nsResponse = data},
          error => {
            if (error.error && error.error.message.includes("already exists")) {
              this.toast.error(`The NS package(s) under the name ${nsPackage.name} already exists. Please use a different name.`)
            } else {
              this.toast.error("Please check the NS package(s) format and reassure it meets the selected NFV Package format")
            }
          },
          () => {
            nsPackage['location'] = nsResponse.packageLocation
            this.uploadedNSpackages.push(nsPackage)
            this.toast.success("NS package was successfully uploaded")
            this.manoPlatformSelection.disable()
            this.uploadedNSDID = nsResponse.id
          }
        )
      })
    }
  }


  //
  // NFV Artifacts - Step 1 Panel functions

  
  //Test Artifacts - Step 2 Panel functions
  //

  reuseExistingTestsChecked: boolean = false
  reuseExistingTestsDisabled: boolean = false

  testSpecification: ServiceTestSpecification
  testSpecificationID: string

  availableTestSpecifications: ServiceTestSpecification[]
  availableTestSpecSelection = new FormControl(null, Validators.required)

  reuseExistingTestCheckboxChanged(event: MatCheckboxChange) {
    console.log(event.checked)
    if (!event.checked) {
      this.testSpecification = null
      this.testSpecificationID = null
    }
  }

  retrieveAvailableTestSpecs() {
    this.testSpecService.listServiceTestSpecification({}).subscribe(
      data => {this.availableTestSpecifications = data},
      error => {console.error(error)}
    )
  }

  onSelectAvailableTestSpec(event) {
    console.log(event)
    this.testSpecification = event.option.value
    this.testSpecificationID = event.option.value.id
    console.log(this.testSpecification)
    console.log(this.testSpecificationID)
  }

  testSpecMainPropertiesForm = new FormGroup ({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    version: new FormControl("0.1.0", Validators.required),
  })
  
  refreshTestSpecificationEvent(event: ServiceTestSpecification) {
    this.testSpecification = event
  }

  submitServiceTestMainProperties() {
    if (this.testSpecMainPropertiesForm.valid) {
      const createObj: ServiceTestSpecificationCreate = {
        name: this.testSpecMainPropertiesForm.value.name,
        description: this.testSpecMainPropertiesForm.value.description,
        version: this.testSpecMainPropertiesForm.value.version
      }
  
      let createdSpec: ServiceTestSpecification
   
      this.testSpecService.createServiceTestSpecification(createObj).subscribe(
        data => { createdSpec = data },
        error => console.error(error),
        () => {
          this.toast.success("Service Test Suite was successfully created")
          this.testSpecificationID = createdSpec.id
          this.retrieveTestSpec()
          this.reuseExistingTestsDisabled = true
        }
      )
      
    }
  }

  retrieveTestSpec() {
    this.testSpecService.retrieveServiceTestSpecification({id: this.testSpecificationID}).subscribe(
      data => this.testSpecification = data,
      error => console.error(error),
      () => {
        if (this.testSpecification) {

          if (!this.testSpecification.validFor) this.testSpecification.validFor = {endDateTime:null, startDateTime:null}
           
          this.testSpecMainPropertiesForm.patchValue(this.testSpecification)
          this.testSpecMainPropertiesForm.markAsPristine()
        }
      }
    )
  }

  //
  //Test Artifacts - Step 2 Panel functions


  //Confirm Submission - Step 3 Panel functions
  //

  bundleServiceSpecificationMainPropertiesForm = new FormGroup ({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    version: new FormControl("0.1.0", Validators.required),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    })
  })

  createdBundle: ServiceSpecification
  defaultCardLogo = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH


  submitBundleCreation() {
    if (this.bundleServiceSpecificationMainPropertiesForm.valid) {
      let serviceSpecsToBeImportedObj = {
        nfv: this.specificationService.createServiceSpecificationFromNSDID(this.uploadedNSDID),
      }
      
      if (this.testSpecification && this.testSpecification.relatedServiceSpecification.length === 0) {
        serviceSpecsToBeImportedObj['test'] = this.specificationService.createServiceSpecificationFromServiceTestSpecification(this.testSpecification.id)
      }

      const importServiceSpecifications$: Observable <{nfv: ServiceSpecification; test?: ServiceSpecification;}> = forkJoin(serviceSpecsToBeImportedObj)
  
      importServiceSpecifications$.subscribe(
        importedServiceSpecs => {  
          const selectedNetworkSliceCandidate: ServiceCandidate = this.networkSliceSelection.value
          
          let bundleSpecCreationObj: ServiceSpecificationCreate = {
            name: this.bundleServiceSpecificationMainPropertiesForm.get('name').value,
            description: this.bundleServiceSpecificationMainPropertiesForm.get('description').value,
            version: this.bundleServiceSpecificationMainPropertiesForm.get('version').value,
            isBundle: true,
            validFor: this.bundleServiceSpecificationMainPropertiesForm.get('validFor').value,
            serviceSpecRelationship: [
              {id: importedServiceSpecs.nfv.id, name:importedServiceSpecs.nfv.name},
              {id: selectedNetworkSliceCandidate.serviceSpecification.id, name: selectedNetworkSliceCandidate.serviceSpecification.name}
            ]
          }

          if (importedServiceSpecs.test) {
            bundleSpecCreationObj.serviceSpecRelationship.push({id: importedServiceSpecs.test.id, name:importedServiceSpecs.test.name})
          } else {
            bundleSpecCreationObj.serviceSpecRelationship.push({id: this.testSpecification.relatedServiceSpecification[0].id, name: this.testSpecification.name})
          }
          
          this.specificationService.createServiceSpecification(bundleSpecCreationObj).subscribe(
            data => {this.createdBundle = data},
            error => console.error(error),
            () => {
              this.toast.success("Service bundle was successfully created")
            }
          )
        },
        error => {console.error(error)}
      )
  

    }    
  }

  //
  //Confirm Submission - Step 3 Panel functions

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
