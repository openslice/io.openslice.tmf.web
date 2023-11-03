import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ResourceSpecification, ResourceSpecificationCharacteristicValue, ResourceSpecificationUpdate, AttachmentRefOrValue, ResourceSpecificationCharacteristicRes, ResourceSpecificationRelationshipRes, ResourceSpecificationCharacteristicReq } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EditResourceSpecCharacteristicsComponent } from './edit-resource-spec-characteristics/edit-resource-spec-characteristics.component';
import { DeleteResourceSpecCharacteristicsComponent } from './delete-resource-spec-characteristics/delete-resource-spec-characteristics.component';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, timer } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AssignResourceSpecRelationshipsComponent } from './assign-resource-spec-relationships/assign-resource-spec-relationships.component';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { DeleteResourceSpecAttachmentComponent } from './delete-resource-spec-attachment/delete-resource-spec-attachment.component';
import { AppService } from 'src/app/shared/services/app.service';


@Component({
  selector: 'app-edit-resource-specs',
  templateUrl: './edit-resource-spec.component.html',
  styleUrls: ['./edit-resource-spec.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class EditResourceSpecsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private specResource: ResourceSpecificationService,
    private dialog: MatDialog,
    private toast: ToastrService,
    private router: Router,
    public appService: AppService
  ) { }

  specID: string
  spec: ResourceSpecification
  specNotFound: boolean = false
  finishedLoading: boolean = false

  editForm =  new FormGroup({
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    isBundle: new FormControl(false),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    version: new FormControl("0.1.0"),
    category: new FormControl("resource")
  })

  listItems = ["Main Properties", "Resource Specification Relationships", "Related Parties", "Resource Specification Characteristics", "Attachments"]
  activeListItem = "Main Properties"

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]


  displayedColumnsCharacteristics = ['name', 'type', 'defaultValues', 'configurable', 'actions']
  dataSource  = new MatTableDataSource<ResourceSpecificationCharacteristicValue>()

  specCharacteristicsTags: string[] = ["All"]
  tagFiltervalue:string = "All"



  @ViewChild('specSort') set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  }
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild('specRelationshipsPanel') specRelationshipsPanel: MatExpansionPanel

  newSpecification = false

  resourceRelatedSpecsFilterCtrl = new FormControl();
  filteredRelatedSpecs$: Observable<ResourceSpecificationRelationshipRes[]>

  attachmentFilesCtrl = new FileUploadControl( null, FileUploadValidators.accept(['.jpeg', '.jpg', '.png', '.zip', '.pdf', '.yaml', '.json', '.xml', '.txt', '.gz', 'application/gzip', 'application/x-gzip']))


  dataUrlConverting = false
  specResourceRootUrl : string

  subscriptions = new Subscription()

  ngOnInit() {
    this.specResourceRootUrl = this.specResource.rootUrl

    this.initSubscriptions()
    if (this.activatedRoute.snapshot.params.id)
    {
      this.specID = this.activatedRoute.snapshot.params.id
      this.retrieveResourceSpec()
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
          this.retrieveResourceSpec()
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
        if (this.spec) {
          this.finishedLoading = true

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
          // this.dataSource.data = this.spec.resourceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
          
          // update 17/10/2023: This filter was applied for the GST parent characteristic like "energy efficiency", not to show. But the designer/admin would need to see/edit these also
          this.dataSource.data = this.spec.resourceSpecCharacteristic.slice()
          
          // this.dataSource.paginator = this.paginator;


          this.specCharacteristicsTags = ["All"]
          this.tagFiltervalue = "All"
          this.specCharacteristicsTags = this.retrieveSpecCharaceristicsTags(this.dataSource.data)

          //populate Resource Descriptor Panel Info
          // this.retrieveResourceDesriptor(this.spec.id)
        }
        else {
          this.specNotFound = true
        }
      }
    )
  }

  retrieveSpecCharaceristicsTags(dataSource: ResourceSpecificationCharacteristicRes[]) {
    let tagsArray = this.specCharacteristicsTags
    dataSource.forEach(char => {
      char.resourceSpecCharRelationship.filter( e => e.relationshipType === "tag").forEach(rel => {
        if (!tagsArray.includes(rel.name)) tagsArray.push(rel.name)
      })
    });
    return tagsArray
  }

  retrieveResourceDesriptor(specId) {
    this.specResource.retrieveResourceSpecification(specId).subscribe(
      data => {},
      error => console.error(error)
    )
  }

  bundleCheckboxChanged(event:MatCheckboxChange) {
    // if (!event.checked) this.specRelationshipsPanel.close()
    if(!event.checked)
      this.spec.resourceSpecRelationship=null
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
    const dialogRef = this.dialog.open(AssignResourceSpecRelationshipsComponent, {
      data: {
        resourceSpec: this.spec
      },
      autoFocus: false,
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Resource Specification Relationship list was successfully updated")
          this.retrieveResourceSpec()
        }
      }
    )
  }

  openCharacteristicDesignDialog(characteristic: ResourceSpecificationCharacteristicRes) {
    const dialogRef = this.dialog.open(EditResourceSpecCharacteristicsComponent, {
      data: {
        resourceSpec: this.spec,
        specToBeUpdated: characteristic
      },
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Resource Specification Characteristics list was successfully updated")
          this.retrieveResourceSpec()
        }
      }
    )
  }

  openCharacteristicDeleteDialog(characteristic: ResourceSpecificationCharacteristicRes) {
    const specToBeDeletedIndex = this.spec.resourceSpecCharacteristic.findIndex(char => char.uuid === characteristic.uuid)

    const newSpecCharacteristicArray: ResourceSpecificationCharacteristicRes[] = this.spec.resourceSpecCharacteristic.slice()

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
        if (result){
          this.toast.success("Resource Specification Characteristics list was successfully updated")
          this.retrieveResourceSpec()
        }
      }
    )
  }

  cloneResourceSpecCharacteristic(characteristic: ResourceSpecificationCharacteristicRes) {

    const cloneCharacteristic: ResourceSpecificationCharacteristicReq = {
      name: `Copy of ${characteristic.name}`,
      description: characteristic.description,
      configurable: characteristic.configurable,
      extensible: characteristic.extensible,
      minCardinality: characteristic.minCardinality,
      maxCardinality: characteristic.maxCardinality,
      resourceSpecCharRelationship: characteristic.resourceSpecCharRelationship,
      resourceSpecificationCharacteristicValue: characteristic.resourceSpecCharacteristicValue,
      validFor: characteristic.validFor,
      valueType: characteristic.valueType
    }

    this.spec.resourceSpecCharacteristic.push(cloneCharacteristic)

    const updateCharacteristicObj: ResourceSpecificationUpdate = {
      resourceSpecCharacteristic: this.spec.resourceSpecCharacteristic
    }

    this.specResource.patchResourceSpecification({id: this.specID, serviceSpecification: updateCharacteristicObj}).subscribe(
      data => {},
      error => console.error(error),
      () => {
        this.toast.success("Resource Specification Characteristics list was successfully updated")
        this.retrieveResourceSpec()
      }
    )
  }

  updateResourceSpecGeneral() {
    const updateObj: ResourceSpecification = {
      isBundle: this.editForm.value.isBundle,
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version,
      category: this.editForm.value.category
    }

    let updatedSpec: ResourceSpecification

    if (this.newSpecification) {
      this.specResource.createResourceSpecification(updateObj).subscribe(
        data => { updatedSpec = data },
        error => {
          console.error(error)
          this.toast.error("An error occurred while creating the new Resource Specification")
        },
        () => {
          this.newSpecification = false
          this.toast.success("Resource Specification was successfully created")
          this.router.navigate([updatedSpec.id], {relativeTo: this.activatedRoute})
          this.refreshResourceSpecification(updatedSpec)
        }
      )
    }
    else {
      this.specResource.patchResourceSpecification({ id: this.specID, serviceSpecification: updateObj }).subscribe(
        data => { updatedSpec = data },
        error => {
          console.error(error)
          this.toast.error("An error occurred while updating the Resource Specification")
        },
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
      // const reader = new FileReader();
      // tmp: File
      // reader.readAsBinaryString(this.attachmentFilesCtrl.value[0])
      // this.specResource.addAttachmentToResourceSpec({id: this.specID, afile: reader.result as string}).subscribe(
      this.specResource.addAttachmentToResourceSpec({id: this.specID, afile: this.attachmentFilesCtrl.value[0]}).subscribe(
        data => { },
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
    this.dataUrlConverting = true

    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (_event) => {
      this.dataUrlConverting = false
    }
  }

  openAttachmentDeleteDialog(attachmentRef: AttachmentRefOrValue) {
    const attToBeDeletedIndex = this.spec.attachment.findIndex(char => char.id === attachmentRef.id)

    const newSpecAttArray: AttachmentRefOrValue[] = this.spec.attachment.slice()

    newSpecAttArray.splice(attToBeDeletedIndex, 1)

    const dialogRef = this.dialog.open(DeleteResourceSpecAttachmentComponent, {
      data: {
        resourceSpec: this.spec,
        resourceSpecAttachmentArray: newSpecAttArray,
        attachmentToBeDeleted: this.spec.attachment[attToBeDeletedIndex]
      }
    })

    dialogRef.afterClosed().subscribe (
      result => {
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
