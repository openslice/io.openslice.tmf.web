//import { LcmRuleSpecificationService } from 'src/app/openApis/LcmRuleSpecificationAPI/services';
//import { LCMRuleSpecification } from './../../../openApis/LcmRuleSpecificationAPI/models/lcmrule-specification';
import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ResourceSpecification, ResourceSpecCharacteristic, ResourceSpecificationUpdate, ResourceSpecificationCreate, ResourceSpecRelationship, AttachmentRef, Attachment } from 'src/app/openApis/ResourceCatalogManagement/models';
import { ResourceSpecificationService } from 'src/app/openApis/ResourceCatalogManagement/services';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatCheckboxChange, MatExpansionPanel, MatDialogRef } from '@angular/material';
import { EditResourceSpecCharacteristicsComponent } from './edit-resource-spec-characteristics/edit-resource-spec-characteristics.component';
import { DeleteResourceSpecCharacteristicsComponent } from './delete-resource-spec-characteristics/delete-resource-spec-characteristics.component';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, timer } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AssignResourceRelationshipsComponent } from './assign-resource-relationships/assign-resource-relationships.component';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { DeleteAttachmentComponent } from './delete-attachment/delete-attachment.component';
//import { DeleteLcmruleComponent } from './delete-lcmrule/delete-lcmrule.component';


@Component({
  selector: 'app-edit-service-specs',
  templateUrl: './edit-resource-specs.component.html',
  styleUrls: ['./edit-resource-specs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class EditResourceSpecsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private specResource: ResourceSpecificationService,
    //private lcmRulesService: LcmRuleSpecificationService,
    private dialog: MatDialog,
    private toast: ToastrService,
    private router: Router
  ) { }

  specID: string
  spec: ResourceSpecification

  editForm =  new FormGroup({
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    isBundle: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    version: new FormControl("0.1.0")
  })

  listItems = ["Main Properties", "Resource Specification Relationships","Related Parties", "Resource Specification Characteristics", "Logo", "Attachments"]
  activeListItem = "Main Properties"

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]


  //ruleSpecsOfServiceSpec: LCMRuleSpecification[];
  displayedColumnsCharacteristics = ['name', 'type', 'defaultValues', 'configurable', 'actions']
  dataSource  = new MatTableDataSource<ResourceSpecCharacteristic>()
  displayedColumnsLCMRules = ['name', 'lcmrulephase', 'description', 'priority', 'actions']
  //dataSourceLCMRules  = new MatTableDataSource<LCMRuleSpecification>()

  specCharacteristicsTags: string[] = ["All"]
  tagFiltervalue:string = "All"


  lcmRulesTags: string[] = ["All", "Pre-provision phase", "Activation phase", "Supervision phase", "De-activation phase"]
  lcmRulesTagValue:string = "All"

@ViewChild('specSort', {static: false}) set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  } 
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild('specRelationshipsPanel', {static: false}) specRelationshipsPanel: MatExpansionPanel

  newSpecification = false

  resourceRelatedSpecsFilterCtrl = new FormControl();
  filteredRelatedSpecs$: Observable<ResourceSpecRelationship[]>

  attachmentFilesCtrl = new FileUploadControl(FileUploadValidators.accept(['.jpeg', '.jpg', '.png', '.zip', '.pdf', '.yaml', '.json', '.xml', '.txt', '.tar.gz']))
  logoImageCtrl = new FileUploadControl(FileUploadValidators.accept(['image/*']))
  
  specLogoRef: AttachmentRef
  currentSpecLogoAsDataUrl: string | ArrayBuffer

  dataUrlConverting = false
  specLogoAsDataUrl: string | ArrayBuffer
  specResourceRootUrl : string

  subscriptions = new Subscription()

  ngOnInit() {
    this.specResourceRootUrl = this.specResource.rootUrl

    this.initSubscriptions()
    this.subscribeToLogoUploadEvent()
    
    if (this.activatedRoute.snapshot.params.id) 
    {
      this.specID = this.activatedRoute.snapshot.params.id
      this.retrieveResourceSpec()
    } else {
      this.newSpecification = true
    }
  }

  initSubscriptions() {
    this.subscriptions.add(this.router.events.subscribe(
      event => {
        if (event instanceof ActivationEnd) {
          console.log(event.snapshot.params.id)
          this.specID = this.activatedRoute.snapshot.params.id
          this.retrieveResourceSpec()
        }
      }
    ))
  }

  subscribeToLogoUploadEvent() {
    this.subscriptions.add(this.logoImageCtrl.valueChanges.subscribe(
      files => {
        this.logoImageCtrl.setValidators(FileUploadValidators.accept(['image/*']))
        if (files.length) {
          let img = new Image()
          img.src = window.URL.createObjectURL(files[0])
          img.onload = () => {
            if (img.height === 150 && img.width === 150) {
              this.convertImageToDataUrl(files[0])
            } else {
              // this.toast.error('Please upload a logo of supported type and resolution')
              this.logoImageCtrl.setValidators(FileUploadValidators.filesLimit(0))
            }
          }
        }
      }
    ))
  }

  selectListitem(item: string) {
    if (this.editForm.pristine) {
      this.activeListItem = item
    } else {
      const dialogRef = this.dialog.open(DiscardChangesComponent, {autoFocus: true})
    
      dialogRef.afterClosed().subscribe (discardChanges => {
        if (discardChanges) {
          this.editForm.patchValue(this.spec)
          this.editForm.markAsPristine()  
          this.activeListItem = item
        }
      })
    }
  } 


  retrieveResourceSpec() {
    this.specResource.retrieveResourceSpecification({id: this.specID}).subscribe(
      data => this.spec = data,
      error => console.error(error),
      () => {
        //populate General Panel Info
        if (!this.spec.validFor) this.spec.validFor = {endDateTime:null, startDateTime:null}

        this.editForm.patchValue(this.spec)
        this.editForm.markAsPristine()

        //populate Specification Relationships Panel Info
        this.filteredRelatedSpecs$ = this.resourceRelatedSpecsFilterCtrl.valueChanges.pipe(
          startWith(null),
          map( (value:null | string) => value ? this._filterOnRelatedSpecs(value) : this.spec.resourceSpecRelationship.slice() )
        )

        //populate Specification Characteristic Panel Info
        // filter Spec Characteristic that does not have defined Value Type (parent spec char)
        //this.dataSource.data = this.spec.resourceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
        // this.dataSource.paginator = this.paginator;
        this.dataSource.data = this.spec.resourceSpecCharacteristic

        this.specCharacteristicsTags = ["All"]
        this.tagFiltervalue = "All"
        this.specCharacteristicsTags = this.retrieveSpecCharaceristicsTags(this.dataSource.data)

        // Check if spec has a defined logo already
        this.specLogoRef = this.spec.attachment.find( att => att.name.includes('logo') )
        if (this.specLogoRef) {
          this.currentSpecLogoAsDataUrl = this.specResourceRootUrl+this.specLogoRef.url
        }

        //this.retrieveLCMRulesSpecs();

        //populate Resource Descriptor Panel Info
        // this.retrieveResourceDesriptor(this.spec.id)
      }
    )
  }

  retrieveSpecCharaceristicsTags(dataSource: ResourceSpecCharacteristic[]) {
    let tagsArray = this.specCharacteristicsTags
    dataSource.forEach(char => {
      char.resourceSpecCharRelationship.filter( e => e.relationshipType === "tag").forEach(rel => {
        if (!tagsArray.includes(rel.name)) tagsArray.push(rel.name)
      })
    });
    return tagsArray
  }

  // retrieveResourceDesriptor(specId) {
  //   this.specResource.retrieveResourceSpecificationDescriptor(specId).subscribe(
  //     data => console.log(data),
  //     error => console.error(error)
  //   )
  // }

  bundleCheckboxChanged(event:MatCheckboxChange) {
    // if (!event.checked) this.specRelationshipsPanel.close()
  }

  private _filterOnRelatedSpecs(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.spec.resourceSpecRelationship.filter( relatedSpec =>  relatedSpec.name.toLowerCase().includes(filterValue) )
  }


  applySpecCharFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  filterCharacteristicsByTag(tagName) {
    this.tagFiltervalue = tagName
    if (tagName === "All") {
      this.dataSource.data = this.spec.resourceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
    } else {
      this.dataSource.data = this.spec.resourceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
      .filter(specChar => specChar.resourceSpecCharRelationship.some( rel => rel.name === tagName ))
    }
  }

  openAssignSpecRelationshipDialog() {
    const dialogRef = this.dialog.open(AssignResourceRelationshipsComponent, {
      data: {
        resourceSpec: this.spec
      },
      autoFocus: false,
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
        if (result) { 
          this.toast.success("Resource Specification Relationship list was successfully updated")
          this.retrieveResourceSpec() 
        }
      }
    )
  }

  openCharacteristicDesignDialog(characteristic: ResourceSpecCharacteristic) {
    const dialogRef = this.dialog.open(EditResourceSpecCharacteristicsComponent, {
      data: {
        resourceSpec: this.spec,
        specToBeUpdated: characteristic
      }, 
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
        if (result) { 
          this.toast.success("Resource Specification Characteristics list was successfully updated")
          this.retrieveResourceSpec() 
        }
      }
    )
  }

  openCharacteristicDeleteDialog(characteristic: ResourceSpecCharacteristic) {
    const specToBeDeletedIndex = this.spec.resourceSpecCharacteristic.findIndex(char => char.id === characteristic.id)

    const newSpecCharacteristicArray: ResourceSpecCharacteristic[] = this.spec.resourceSpecCharacteristic.slice()
    
    newSpecCharacteristicArray.splice(specToBeDeletedIndex, 1)

    const dialogRef = this.dialog.open(DeleteResourceSpecCharacteristicsComponent, {
      data: {
        resourceSpec: this.spec,
        resourceSpecCharacteristicArray: newSpecCharacteristicArray, 
        specToBeDeleted: this.spec.resourceSpecCharacteristic[specToBeDeletedIndex]
      }
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
        if (result){ 
          this.toast.success("Resource Specification Characteristics list was successfully updated")
          this.retrieveResourceSpec()
        }
      }
    )
  }

  cloneResourceSpecCharacteristic(characteristic: ResourceSpecCharacteristic) {
    
    const cloneCharacteristic: ResourceSpecCharacteristic = {
      name: `Copy of ${characteristic.name}`,
      description: characteristic.description,
      configurable: characteristic.configurable,
      extensible: characteristic.extensible,
      minCardinality: characteristic.minCardinality,
      maxCardinality: characteristic.maxCardinality,
      resourceSpecCharRelationship: characteristic.resourceSpecCharRelationship,
      resourceSpecCharacteristicValue: characteristic.resourceSpecCharacteristicValue,
      validFor: characteristic.validFor,
      valueType: characteristic.valueType
    }

    console.log(cloneCharacteristic)
    this.spec.resourceSpecCharacteristic.push(cloneCharacteristic)

    const updateCharacteristicObj: ResourceSpecificationUpdate = {
      resourceSpecCharacteristic: this.spec.resourceSpecCharacteristic
    }

    this.specResource.patchResourceSpecification({id: this.spec.id, resourceSpecification: updateCharacteristicObj}).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => { 
        this.toast.success("Resource Specification Characteristics list was successfully updated")
        this.retrieveResourceSpec() 
      }
    )
  }

  updateResourceSpecGeneral() {
    const updateObj: ResourceSpecificationUpdate | ResourceSpecificationCreate = {
      isBundle: this.editForm.value.isBundle,
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    let updatedSpec: ResourceSpecification

    if (this.newSpecification) {
      this.specResource.createResourceSpecification(updateObj).subscribe(
        data => { updatedSpec = data },
        error => console.error(error),
        () => { 
          this.newSpecification = false
          this.toast.success("Resource Specification was successfully created") 
          this.refreshResourceSpecification(updatedSpec)
        }
      )
    }
    else {
      this.specResource.patchResourceSpecification({ id: this.specID, resourceSpecification: updateObj }).subscribe(
        data => { updatedSpec = data },
        error => console.error(error),
        () => { 
          this.toast.success("Resource Specification was successfully updated") 
          this.refreshResourceSpecification(updatedSpec) 
        }
      )
    }
  }

  refreshResourceSpecification(updatedSpec : ResourceSpecification) {
    this.specID = updatedSpec.id
    this.retrieveResourceSpec()
  }

  submitAttachments() {
    if (this.attachmentFilesCtrl.valid) {
      this.specResource.addAttachmentToResourceSpecification({id: this.specID, afile: this.attachmentFilesCtrl.value[0]}).subscribe(
        data => { console.log(data) },
        error => {
          console.error(error)
          this.toast.error("An error occurred while uploading attachment")
        },
        () => {
          this.toast.success("Attachment was successfully uploaded")
          this.clearAttachmentsList()
          this.retrieveResourceSpec()
        }
      )
    }
  }

  clearAttachmentsList() {
    this.attachmentFilesCtrl.clear()
  }

  convertImageToDataUrl (file) {
    this.specLogoAsDataUrl = ''
    this.dataUrlConverting = true

    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (_event) => {
      this.specLogoAsDataUrl = reader.result
      this.dataUrlConverting = false
    }
  }
  
  submitLogo() {
    if (this.logoImageCtrl.valid) {
      let tempFile = this.logoImageCtrl.value[0]
      const fileExtension = tempFile.name.split('.').pop()
      const preDefinedLogoFilename = `logo.${fileExtension}` 

      let newAttachment: Attachment
      this.specResource.addAttachmentToResourceSpecification({id: this.specID, afile: new File(this.logoImageCtrl.value, preDefinedLogoFilename, {type:tempFile.type})}).subscribe(
        data => { newAttachment = data },
        error => {
          console.error(error)
          this.toast.error("An error occurred while uploading attachment")
        },
        () => {
          if (this.specLogoRef) { // If there is a logo defined already, delete it 
            const attToBeDeletedIndex = this.spec.attachment.findIndex(char => char.id === this.specLogoRef.id)
            const newSpecAttArray: AttachmentRef[] = this.spec.attachment.slice()
            newSpecAttArray.splice(attToBeDeletedIndex, 1) // remove previously defined logo from attachment Array
            newSpecAttArray.push({id: newAttachment.id}) // add newly added logo to attachment Array

            const updateSpecObj: ResourceSpecificationUpdate = {
              attachment: newSpecAttArray
            }

            this.specResource.patchResourceSpecification({ id: this.specID, resourceSpecification: updateSpecObj}).subscribe(
              data => console.log(data),
              error => console.error(error),
              () => {
                this.logoUpdatedSuccessfully()
              }
            )
          } else {
            this.logoUpdatedSuccessfully()
          }
        }
      )
    }
  }
  
  clearLogoList() {
    this.logoImageCtrl.clear()
  }
  
  logoUpdatedSuccessfully() {
    this.toast.success("Resource Specification logo was successfully uploaded")
    this.clearLogoList()
    this.retrieveResourceSpec()
  }
  
  openAttachmentDeleteDialog(attachmentRef: AttachmentRef) {
    const attToBeDeletedIndex = this.spec.attachment.findIndex(char => char.id === attachmentRef.id)

    const newSpecAttArray: AttachmentRef[] = this.spec.attachment.slice()
    
    newSpecAttArray.splice(attToBeDeletedIndex, 1)

    const dialogRef = this.dialog.open(DeleteAttachmentComponent, {
      data: {
        resourceSpec: this.spec,
        resourceSpecAttachmentArray: newSpecAttArray, 
        attachmentToBeDeleted: this.spec.attachment[attToBeDeletedIndex]
      }
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
        if (result){ 
          this.toast.success("Resource Specification Characteristics list was successfully updated")
          this.retrieveResourceSpec()
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }


  
  
  // applyLCMRuleFilter(filterValue: string) {
  //   filterValue = filterValue.trim();
  //   filterValue = filterValue.toLowerCase();
  //   //this.dataSource.filter = filterValue;
  // }
  
  filterCMRuleByTag(tagName) {
    this.tagFiltervalue = tagName
    if (tagName === "All") {
      this.dataSource.data = this.spec.resourceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
    } else {
      this.dataSource.data = this.spec.resourceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
      .filter(specChar => specChar.resourceSpecCharRelationship.some( rel => rel.name === tagName ))
    }
  }


  // retrieveLCMRulesSpecs() {
  //   this.lcmRulesService.listLCMRuleSpecificationByServiceSpecId ({id: this.specID}).subscribe(
  //     data => this.ruleSpecsOfServiceSpec  = data,
  //     error => console.error(error),
  //     () => {
        
  //       //populate LCMRules
        
  //       this.dataSourceLCMRules.data = this.ruleSpecsOfServiceSpec;

  //     }
  //   )
  // }



  // openLCMRuleDeleteDialog( lcmrule: LCMRuleSpecification) {

  //   const dialogRef = this.dialog.open(DeleteLcmruleComponent, {data: lcmrule})

  //   dialogRef.afterClosed().subscribe (
  //     result => {
  //       console.log(result)
  //       if (result) {
  //         if (result instanceof HttpErrorResponse) {
  //           this.toast.error("An error occurred while attempting to delete Service Specification")
  //         } else {
  //           this.toast.success("LCM Rules list is successfully updated")
  //           this.retrieveLCMRulesSpecs()
  //         }
  //       }
  //     }
  //   )
  // }

}

@Component({
  selector: 'app-discard-changes',
  templateUrl: 'discard-changes.component.html',
})
export class DiscardChangesComponent {

  constructor(
    public dialogRef: MatDialogRef<DiscardChangesComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true)
  }





}