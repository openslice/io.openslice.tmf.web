import { LcmRuleSpecificationService } from 'src/app/openApis/lcmRuleSpecificationAPI/services';
import { LCMRuleSpecification } from 'src/app/openApis/lcmRuleSpecificationAPI/models/lcmrule-specification';
import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ServiceSpecification, ServiceSpecCharacteristic, ServiceSpecificationUpdate, ServiceSpecificationCreate, ServiceSpecRelationship, AttachmentRef, Attachment, ResourceSpecificationRef } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditServiceSpecCharacteristicsComponent } from './edit-service-spec-characteristics/edit-service-spec-characteristics.component';
import { DeleteServiceSpecCharacteristicsComponent } from './delete-service-spec-characteristics/delete-service-spec-characteristics.component';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, timer } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AssignServiceRelationshipsComponent } from './assign-service-relationships/assign-service-relationships.component';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { DeleteAttachmentComponent } from './delete-attachment/delete-attachment.component';
import { DeleteLcmruleComponent } from './delete-lcmrule/delete-lcmrule.component';
import { AppService } from 'src/app/shared/services/app.service';
import { ImportLcmruleComponent } from './import-lcmrule/import-lcmrule.component';
import { AssignResourceRelationshipsComponent } from './assign-resource-relationships/assign-resource-relationships.component';


@Component({
  selector: 'app-edit-service-specs',
  templateUrl: './edit-service-specs.component.html',
  styleUrls: ['./edit-service-specs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class EditServiceSpecsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private specService: ServiceSpecificationService,
    private lcmRulesService: LcmRuleSpecificationService,
    private dialog: MatDialog,
    private toast: ToastrService,
    private router: Router,
    public appService: AppService
  ) { }

  specID: string
  spec: ServiceSpecification
  specNotFound: boolean = false
  finishedLoading: boolean = false

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

  listItems = ["Main Properties", "Service Specification Relationships", "Resource Specification Relationships", "Related Parties", "Service Specification Characteristics", "Logo", "Attachments", "Life Cycle Rules"]
  activeListItem = "Main Properties"

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]


  ruleSpecsOfServiceSpec: LCMRuleSpecification[];
  displayedColumnsCharacteristics = ['name', 'type', 'defaultValues', 'configurable', 'actions']
  dataSource  = new MatTableDataSource<ServiceSpecCharacteristic>()
  displayedColumnsLCMRules = ['name', 'lcmrulephase', 'description', 'priority', 'actions']
  dataSourceLCMRules  = new MatTableDataSource<LCMRuleSpecification>()

  specCharacteristicsTags: string[] = ["All"]
  tagFiltervalue:string = "All"


  lcmRulesTags: string[] = ["Creation", "Pre-Provision", "After-Activation", "Supervision", "After-Deactivation"]
  lcmRulesTagValue:string = "All"

@ViewChild('specSort') set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild('specRelationshipsPanel') specRelationshipsPanel: MatExpansionPanel

  newSpecification = false

  relatedServiceSpecsFilterCtrl = new FormControl();
  
  filteredRelatedServiceSpecs$: Observable<ServiceSpecRelationship[]>

  relatedResourceSpecsFilterCtrl = new FormControl();

  filteredRelatedResourceSpecs$: Observable<ResourceSpecificationRef[]>

  attachmentFilesCtrl = new FileUploadControl(null, FileUploadValidators.accept(['.jpeg', '.jpg', '.png', '.zip', '.pdf', '.yaml', '.json', '.xml', '.txt', '.gz', 'application/gzip', 'application/x-gzip']))
  logoImageCtrl = new FileUploadControl(null, FileUploadValidators.accept(['image/*']))

  specLogoRef: AttachmentRef
  currentSpecLogoAsDataUrl: string | ArrayBuffer
  currentSpecRelationshipsUrl: string | ArrayBuffer

  dataUrlConverting = false
  specLogoAsDataUrl: string | ArrayBuffer
  specServiceRootUrl : string

  subscriptions = new Subscription()

  ngOnInit() {
    this.specServiceRootUrl = this.specService.rootUrl

    this.initSubscriptions()
    this.subscribeToLogoUploadEvent()

    if (this.activatedRoute.snapshot.params.id)
    {
      this.specID = this.activatedRoute.snapshot.params.id
      this.retrieveServiceSpec()
    } else {
      this.newSpecification = true
      this.finishedLoading = true
    }
  }

  initSubscriptions() {
    this.subscriptions.add(this.router.events.subscribe(
      event => {
        if (event instanceof ActivationEnd && event.snapshot.params && event.snapshot.params.id) {
          this.specID = this.activatedRoute.snapshot.params.id
          this.retrieveServiceSpec()
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


  retrieveServiceSpec() {
    this.specService.retrieveServiceSpecification({id: this.specID}).subscribe(
      data => this.spec = data,
      error => console.error(error),
      () => {
        //populate General Panel Info
        if (this.spec) {
          this.finishedLoading = true

          if (!this.spec.validFor) this.spec.validFor = {endDateTime:null, startDateTime:null}

          this.editForm.patchValue(this.spec)
          this.editForm.markAsPristine()
          //populate Specification Relationships Panel Info
          this.filteredRelatedServiceSpecs$ = this.relatedServiceSpecsFilterCtrl.valueChanges.pipe(
            startWith(null),
            map( (value:null | string) => value ? this._filterOnRelatedServiceSpecs(value) : this.spec.serviceSpecRelationship.slice() )
          )

          //populate Resource Specification Relationships Panel Info
          this.filteredRelatedResourceSpecs$ = this.relatedResourceSpecsFilterCtrl.valueChanges.pipe(
            startWith(null),
            map( (value:null | string) => value ? this._filterOnRelatedResourceSpecs(value) : this.spec.resourceSpecification.slice() )
          )

          //populate Specification Characteristic Panel Info
          // filter Spec Characteristic that does not have defined Value Type (parent spec char)
          this.dataSource.data = this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
          // this.dataSource.paginator = this.paginator;


          this.specCharacteristicsTags = ["All"]
          this.tagFiltervalue = "All"
          this.specCharacteristicsTags = this.retrieveSpecCharaceristicsTags(this.dataSource.data)

          // Check if spec has a defined logo already
          this.specLogoRef = this.spec.attachment.find( att => att.name.includes('logo') )
          if (this.specLogoRef) {
            this.currentSpecLogoAsDataUrl = this.specServiceRootUrl+this.specLogoRef.url
          }

          //http://portal.openslice.io/tmf-api/serviceCatalogManagement/v4/serviceSpecification/123/relationship_graph
          this.currentSpecRelationshipsUrl = this.specServiceRootUrl + "/serviceCatalogManagement/v4/serviceSpecification/" + this.specID + "/relationship_graph";

          
          this.retrieveLCMRulesSpecs();
  
          if (localStorage.getItem('previous_navigation_state') === 'lcm_tab') {
            this.activeListItem = 'Life Cycle Rules'
            localStorage.removeItem('previous_navigation_state')
          }
          //populate Service Descriptor Panel Info
          // this.retrieveServiceDesriptor(this.spec.id)
        }
        else {
          this.specNotFound = true
        }
      }
    )
  }

  retrieveSpecCharaceristicsTags(dataSource: ServiceSpecCharacteristic[]) {
    let tagsArray = this.specCharacteristicsTags
    dataSource.forEach(char => {
      char.serviceSpecCharRelationship.filter( e => e.relationshipType === "tag").forEach(rel => {
        if (!tagsArray.includes(rel.name)) tagsArray.push(rel.name)
      })
    });
    return tagsArray
  }

  retrieveServiceDesriptor(specId) {
    this.specService.retrieveServiceSpecificationDescriptor(specId).subscribe(
      data => {},
      error => console.error(error)
    )
  }

  bundleCheckboxChanged(event:MatCheckboxChange) {
    // if (!event.checked) this.specRelationshipsPanel.close()
  }

  private _filterOnRelatedServiceSpecs(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.spec.serviceSpecRelationship.filter( relatedSpec =>  relatedSpec.name.toLowerCase().includes(filterValue) )
  }

  private _filterOnRelatedResourceSpecs(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.spec.resourceSpecification.filter( relatedSpec =>  relatedSpec.name.toLowerCase().includes(filterValue) )
  }


  applySpecCharFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  filterCharacteristicsByTag(tagName) {
    this.tagFiltervalue = tagName
    if (tagName === "All") {
      this.dataSource.data = this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
    } else {
      this.dataSource.data = this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
      .filter(specChar => specChar.serviceSpecCharRelationship.some( rel => rel.name === tagName ))
    }
  }

  openAssignServiceSpecRelationshipDialog() {
    const dialogRef = this.dialog.open(AssignServiceRelationshipsComponent, {
      data: {
        serviceSpec: this.spec
      },
      autoFocus: false,
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) { 
          this.toast.success("Service Specification Relationship list was successfully updated")
          this.retrieveServiceSpec()
        }
      }
    )
  }

  openAssignResourceSpecRelationshipDialog() {
    const dialogRef = this.dialog.open(AssignResourceRelationshipsComponent, {
      data: {
        serviceSpec: this.spec
      },
      autoFocus: false,
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) { 
          this.toast.success("Resource Specification Relationship list was successfully updated")
          this.retrieveServiceSpec()
        }
      }
    )
  }

  openCharacteristicDesignDialog(characteristic: ServiceSpecCharacteristic) {
    const dialogRef = this.dialog.open(EditServiceSpecCharacteristicsComponent, {
      data: {
        serviceSpec: this.spec,
        specToBeUpdated: characteristic
      },
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) { 
          this.toast.success("Service Specification Characteristics list was successfully updated")
          this.retrieveServiceSpec()
        }
      }
    )
  }

  openCharacteristicDeleteDialog(characteristic: ServiceSpecCharacteristic) {
    const specToBeDeletedIndex = this.spec.serviceSpecCharacteristic.findIndex(char => char.id === characteristic.id)

    const newSpecCharacteristicArray: ServiceSpecCharacteristic[] = this.spec.serviceSpecCharacteristic.slice()

    newSpecCharacteristicArray.splice(specToBeDeletedIndex, 1)

    const dialogRef = this.dialog.open(DeleteServiceSpecCharacteristicsComponent, {
      data: {
        serviceSpec: this.spec,
        serviceSpecCharacteristicArray: newSpecCharacteristicArray,
        specToBeDeleted: this.spec.serviceSpecCharacteristic[specToBeDeletedIndex]
      }
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result){ 
          this.toast.success("Service Specification Characteristics list was successfully updated")
          this.retrieveServiceSpec()
        }
      }
    )
  }

  cloneServiceSpecCharacteristic(characteristic: ServiceSpecCharacteristic) {

    const cloneCharacteristic: ServiceSpecCharacteristic = {
      name: `Copy of ${characteristic.name}`,
      description: characteristic.description,
      configurable: characteristic.configurable,
      extensible: characteristic.extensible,
      minCardinality: characteristic.minCardinality,
      maxCardinality: characteristic.maxCardinality,
      serviceSpecCharRelationship: characteristic.serviceSpecCharRelationship,
      serviceSpecCharacteristicValue: characteristic.serviceSpecCharacteristicValue,
      validFor: characteristic.validFor,
      valueType: characteristic.valueType
    }

    this.spec.serviceSpecCharacteristic.push(cloneCharacteristic)

    const updateCharacteristicObj: ServiceSpecificationUpdate = {
      serviceSpecCharacteristic: this.spec.serviceSpecCharacteristic
    }

    this.specService.patchServiceSpecification({id: this.spec.id, serviceSpecification: updateCharacteristicObj}).subscribe(
      data => {},
      error => console.error(error),
      () => {
        this.toast.success("Service Specification Characteristics list was successfully updated")
        this.retrieveServiceSpec()
      }
    )
  }

  updateServiceSpecGeneral() {
    const updateObj: ServiceSpecificationUpdate | ServiceSpecificationCreate = {
      isBundle: this.editForm.value.isBundle,
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    let updatedSpec: ServiceSpecification

    if (this.newSpecification) {
      this.specService.createServiceSpecification(updateObj).subscribe(
        data => { updatedSpec = data },
        error => console.error(error),
        () => {
          this.newSpecification = false
          this.toast.success("Service Specification was successfully created")
          this.router.navigate([updatedSpec.id], {relativeTo: this.activatedRoute})
          this.refreshServiceSpecification(updatedSpec)
        }
      )
    }
    else {
      this.specService.patchServiceSpecification({ id: this.specID, serviceSpecification: updateObj }).subscribe(
        data => { updatedSpec = data },
        error => console.error(error),
        () => {
          this.toast.success("Service Specification was successfully updated")
          this.refreshServiceSpecification(updatedSpec)
        }
      )
    }
  }

  refreshServiceSpecification(updatedSpec : ServiceSpecification) {
    this.specID = updatedSpec.id
    this.retrieveServiceSpec()
  }

  submitAttachments() {
    if (this.attachmentFilesCtrl.valid) {
      this.specService.addAttachmentToServiceSpecification({id: this.specID, afile: this.attachmentFilesCtrl.value[0]}).subscribe(
        data => { },
        error => {
          console.error(error)
          this.toast.error("An error occurred while uploading attachment")
        },
        () => {
          this.toast.success("Attachment was successfully uploaded")
          this.clearAttachmentsList()
          this.retrieveServiceSpec()
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
      this.specService.addAttachmentToServiceSpecification({id: this.specID, afile: new File(this.logoImageCtrl.value, preDefinedLogoFilename, {type:tempFile.type})}).subscribe(
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

            const updateSpecObj: ServiceSpecificationUpdate = {
              attachment: newSpecAttArray
            }

            this.specService.patchServiceSpecification({ id: this.specID, serviceSpecification: updateSpecObj}).subscribe(
              data => {},
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
    this.toast.success("Service Specification logo was successfully uploaded")
    this.clearLogoList()
    this.retrieveServiceSpec()
  }

  openAttachmentDeleteDialog(attachmentRef: AttachmentRef) {
    const attToBeDeletedIndex = this.spec.attachment.findIndex(char => char.id === attachmentRef.id)

    const newSpecAttArray: AttachmentRef[] = this.spec.attachment.slice()

    newSpecAttArray.splice(attToBeDeletedIndex, 1)

    const dialogRef = this.dialog.open(DeleteAttachmentComponent, {
      data: {
        serviceSpec: this.spec,
        serviceSpecAttachmentArray: newSpecAttArray,
        attachmentToBeDeleted: this.spec.attachment[attToBeDeletedIndex]
      }
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result){ 
          this.toast.success("Service Specification Characteristics list was successfully updated")
          this.retrieveServiceSpec()
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }




  applyLCMRuleFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    //this.dataSource.filter = filterValue;
  }
  
  filterCMRuleByTag(tagName:string) {
    this.lcmRulesTagValue = tagName
    const sanitizedTag = tagName.replace('-','_').toUpperCase()
    if (sanitizedTag === "ALL") {
      this.dataSourceLCMRules.data = this.ruleSpecsOfServiceSpec
    } else {
      this.dataSourceLCMRules.data = this.ruleSpecsOfServiceSpec.filter(ruleSpec => ruleSpec.lcmrulephase === sanitizedTag)
    }
  }


  retrieveLCMRulesSpecs() {
    this.lcmRulesService.listLCMRuleSpecificationByServiceSpecId ({id: this.specID}).subscribe(
      data => this.ruleSpecsOfServiceSpec  = data,
      error => console.error(error),
      () => {

        //populate LCMRules

        this.dataSourceLCMRules.data = this.ruleSpecsOfServiceSpec;

      }
    )
  }



  openLCMRuleDeleteDialog( lcmrule: LCMRuleSpecification) {

    const dialogRef = this.dialog.open(DeleteLcmruleComponent, {data: lcmrule})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occurred while attempting to delete LCM rule")
          } else {
            this.toast.success("LCM Rules list is successfully updated")
            this.retrieveLCMRulesSpecs()
          }
        }
      }
    )
  }

  openImportLCMruleDialog() {
    const dialogRef = this.dialog.open(ImportLcmruleComponent, {data: this.spec})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occurred while attempting to import LCM rule")
          } else {
            this.toast.success("LCM Rules list is successfully updated")
            this.retrieveLCMRulesSpecs()
          }
        }
      }
    )

  }

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
