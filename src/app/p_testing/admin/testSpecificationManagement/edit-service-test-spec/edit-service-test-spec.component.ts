import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ServiceSpecificationRef } from 'src/app/openApis/serviceCatalogManagement/models';
import { AttachmentRefOrValue, CharacteristicSpecificationRes, ServiceTestSpecification, ServiceTestSpecificationCreate, ServiceTestSpecificationUpdate } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { DeleteServiceRelationshipComponent } from './delete-service-relationship/delete-service-relationship.component';
import { DeleteTestSpecAttachmentComponent } from './delete-test-spec-attachment/delete-test-spec-attachment.component';
import { DeleteTestSpecCharacteristicComponent } from './delete-test-spec-characteristic/delete-test-spec-characteristic.component';
import { EditTestSpecCharacteristicComponent } from './edit-test-spec-characteristic/edit-test-spec-characteristic.component';
import { ImportCharacteristicsFromYamlComponent } from './import-characteristics-from-yaml/import-characteristics-from-yaml.component';

@Component({
  selector: 'app-edit-service-test-spec',
  templateUrl: './edit-service-test-spec.component.html',
  styleUrls: ['./edit-service-test-spec.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class EditServiceTestSpecComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private testSpecService: ServiceTestSpecificationService,
    private dialog: MatDialog,
    private toast: ToastrService,
    private router: Router

  ) { }

  testSpecID: string
  testSpec: ServiceTestSpecification
  newTestSpec = false

  testSpecNotFound: boolean = false
  finishedLoading: boolean = false

  editForm = new FormGroup ({
    name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    version: new FormControl("0.1.0", Validators.required),
    lifecycleStatus: new FormControl("In design", Validators.required),
    // validFor: new FormGroup({
    //   endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20)), Validators.required),
    //   startDateTime: new FormControl(new Date(), Validators.required)
    // })
  })

  listItems: ("Main Properties"|"Attachments"|"Test Specification Characteristics"|"Related Service Specification")[] = ["Main Properties", "Attachments","Test Specification Characteristics", "Related Service Specification"]
  activeListItem: "Main Properties"|"Attachments"|"Test Specification Characteristics"|"Related Service Specification" = "Main Properties"

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  displayedColumnsCharacteristics = ['name', 'description', 'actions']
  dataSource = new MatTableDataSource<CharacteristicSpecificationRes>()

  @ViewChild('charSort') set matSort(ms: MatSort) {
    this.dataSource.sort = ms;
  } 


  subscriptions = new Subscription()

  ngOnInit() {

    const urlParam = this.activatedRoute.snapshot.params.id
    if (urlParam) {
      this.testSpecID = urlParam
      this.retrieveTestSpec()
    } 
    else {
      this.newTestSpec = true
      this.finishedLoading = true
    }
  }


  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

  retrieveTestSpec() {
    this.testSpecService.retrieveServiceTestSpecification({id: this.testSpecID}).subscribe(
      data => this.testSpec = data,
      error => console.error(error),
      () => {
        if (this.testSpec) {
          // populate Main Properties Panel Info
          this.finishedLoading = true 

          if (!this.testSpec.validFor) this.testSpec.validFor = {endDateTime:null, startDateTime:null}
          
          this.dataSource.data = this.testSpec.specCharacteristic
  
          this.editForm.patchValue(this.testSpec)
          this.editForm.markAsPristine()

          // populate Attachments Panel Info
          // if (this.testSpec.attachment.length > 1) {
          //   this.testType.setValue('developerDefined')
          // }
          // EDIT: This is handled by the discrete component 'manage-service-test-spec-attachments'
        }
        else {
          this.testSpecNotFound = true
        }
      }
    )
  }

  updateServiceTestMainProperties() {
    if (this.editForm.valid) {
      const updateObj: ServiceTestSpecificationUpdate | ServiceTestSpecificationCreate = {
        name: this.editForm.value.name,
        description: this.editForm.value.description,
        lifecycleStatus: this.editForm.value.lifecycleStatus,
        // validFor: this.editForm.value.validFor,
        version: this.editForm.value.version
      }
  
      let updatedSpec: ServiceTestSpecification
  
      if (this.newTestSpec) {
        this.testSpecService.createServiceTestSpecification(updateObj).subscribe(
          data => { updatedSpec = data },
          error => console.error(error),
          () => { 
            this.newTestSpec = false
            this.toast.success("Service Test Specification was successfully created") 
            this.testSpecID = updatedSpec.id
            this.retrieveTestSpec()
          }
        )
      }
      else {
        this.testSpecService.patchServiceTestSpecification({ id: this.testSpecID, serviceSpecification: updateObj }).subscribe(
          data => { updatedSpec = data },
          error => console.error(error),
          () => { 
            this.toast.success("Service Test Specification was successfully updated") 
            this.retrieveTestSpec()
          }
        )
      }
    }
  }

  selectListItem(item: "Main Properties"|"Attachments"|"Test Specification Characteristics"|"Related Service Specification") {
    if (this.editForm.pristine) {
      this.activeListItem = item 
    } else {
      const dialogRef = this.dialog.open(DiscardChangesComponent, {autoFocus: true})

      dialogRef.afterClosed().subscribe (discardChanges => {
        if (discardChanges) {
          this.editForm.patchValue(this.testSpec)
          this.editForm.markAsPristine()
          this.activeListItem = item
        }
      })
    }

    if (this.activeListItem === "Test Specification Characteristics") {
      this.retrieveTestSpec()
    }
  }

  applyTestSpecCharFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openCharacteristicDesignDialog(characteristic: CharacteristicSpecificationRes) {
    const dialogRef = this.dialog.open(EditTestSpecCharacteristicComponent, {
      data: {
        serviceTestSpec: this.testSpec,
        characteristicToBeUpdated: characteristic
      }
    })

    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.toast.success("Service Test Specification characteristics list was successfully updated")
          this.retrieveTestSpec()
        }
      }
    )
  }

  cloneTestSpecificationCharacteristic(characteristic: CharacteristicSpecificationRes) {
    const cloneCharacteristic: CharacteristicSpecificationRes = {
      name: `Copy of ${characteristic.name}`,
      description: characteristic.description,
      validFor: characteristic.validFor,
      valueType: characteristic.valueType
    }

    let newCharacteristicsArray = this.testSpec.specCharacteristic.slice()
    newCharacteristicsArray.push(cloneCharacteristic)
    
    const updateCharacteristicObj: ServiceTestSpecificationUpdate = {
      specCharacteristic: newCharacteristicsArray
    }

    this.testSpecService.patchServiceTestSpecification({id: this.testSpec.id, serviceSpecification: updateCharacteristicObj}).subscribe(
      data => {},
      error => console.error(error),
      () => {
        this.toast.success("Service Test Specification characteristics list was successfully updated")
        this.retrieveTestSpec()
      }
    )
  }

  openCharacteristicDeleteDialog(characteristic: CharacteristicSpecificationRes) {
    const specIndex = this.testSpec.specCharacteristic.findIndex (char => char.id === characteristic.id)
    
    // remove Characteristic from Characteristic's array to send at PATCH request, upon confirmation
    const newSpecCharacteristicArray: CharacteristicSpecificationRes[] = this.testSpec.specCharacteristic.slice()
    newSpecCharacteristicArray.splice(specIndex, 1)

    const dialogRef = this.dialog.open(DeleteTestSpecCharacteristicComponent, {
      data: {
        serviceTestSpec: this.testSpec,
        newCharacteristicsArray: newSpecCharacteristicArray,
        charToBeDeleted: characteristic
      }
    })

    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.toast.success("Service Test Specification characteristics list was successfully updated")
          this.retrieveTestSpec()
        }
      }
    )
  }

  openServiceRelationshipDeleteDialog(relatedService: ServiceSpecificationRef) {
    const relatedServiceIndex = this.testSpec.relatedServiceSpecification.findIndex (service => service.id === relatedService.id)
    
    // remove Characteristic from Characteristic's array to send at PATCH request, upon confirmation
    const newServiceTestRelatedServicesArray: ServiceSpecificationRef[] = this.testSpec.relatedServiceSpecification.slice()
    newServiceTestRelatedServicesArray.splice(relatedServiceIndex, 1)

    const dialogRef = this.dialog.open(DeleteServiceRelationshipComponent, {
      data: {
        newServiceTestRelatedServicesArray: newServiceTestRelatedServicesArray, 
        serviceRelationshipToBeDeleted: relatedService,
        serviceTestSpec: this.testSpec
        }
    })

    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.toast.success("Service Test Specification related services list was successfully updated")
          this.retrieveTestSpec()
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