import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ServiceSpecification, ServiceSpecCharacteristic, ServiceSpecificationUpdate, ServiceSpecificationCreate } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { EditServiceSpecCharacteristicsComponent } from './edit-service-spec-characteristics/edit-service-spec-characteristics.component';
import { DeleteServiceSpecCharacteristicsComponent } from './delete-service-spec-characteristics/delete-service-spec-characteristics.component';

const today = new Date()

@Component({
  selector: 'app-edit-service-specs',
  templateUrl: './edit-service-specs.component.html',
  styleUrls: ['./edit-service-specs.component.scss']
})
export class EditServiceSpecsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private specService: ServiceSpecificationService,
    private dialog: MatDialog
  ) { }

  specID: string
  spec: ServiceSpecification

  editForm =  new FormGroup({
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    isBundle: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(today.getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    version: new FormControl('1.0.0')
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]


  displayedColumnsCharacteristics = ['name', 'type', 'configurable', 'actions']
  dataSource  = new MatTableDataSource<ServiceSpecCharacteristic>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  newSpecification = false

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) 
    {
      this.specID = this.activatedRoute.snapshot.params.id
      this.retrieveServiceSpec()
    } else {
      this.newSpecification = true
    }
  }

  retrieveServiceSpec() {
    this.specService.retrieveServiceSpecification({id: this.specID}).subscribe(
      data => this.spec = data,
      error => console.error(error),
      () => {
        if (!this.spec.validFor) this.spec.validFor = {endDateTime:null, startDateTime:null}
        this.editForm.patchValue(this.spec)
        this.dataSource.data = this.spec.serviceSpecCharacteristic
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
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
        console.log(result)
        if (result) this.retrieveServiceSpec()
      }
    )
  }

  openCharacteristicDeleteDialog(characteristic: ServiceSpecCharacteristic) {
    const specToBeDeletedIndex = this.spec.serviceSpecCharacteristic.findIndex(char => char.uuid === characteristic.uuid)

    const newSpecCharacteristicArray: ServiceSpecCharacteristic[] = this.spec.serviceSpecCharacteristic.slice()
    
    newSpecCharacteristicArray.splice(specToBeDeletedIndex, 1)

    // this.spec.serviceSpecCharacteristic.splice(this.spe, 1)
    const dialogRef = this.dialog.open(DeleteServiceSpecCharacteristicsComponent, {
      data: {
        serviceSpec: this.spec,
        serviceSpecCharacteristicArray: newSpecCharacteristicArray, 
        specToBeDeleted: this.spec.serviceSpecCharacteristic[specToBeDeletedIndex]
      }
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
        if (result) this.retrieveServiceSpec()
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

    console.log(cloneCharacteristic)
    this.spec.serviceSpecCharacteristic.push(cloneCharacteristic)

    const updateCharacteristicObj: ServiceSpecificationUpdate = {
      serviceSpecCharacteristic: this.spec.serviceSpecCharacteristic
    }

    this.specService.patchServiceSpecification({id: this.spec.id, serviceSpecification: updateCharacteristicObj}).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => { this.retrieveServiceSpec() }
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
          this.refreshServiceSpecification(updatedSpec)
        }
      )
    }
    else {
      this.specService.patchServiceSpecification({ id: this.specID, serviceSpecification: updateObj }).subscribe(
        data => { updatedSpec = data },
        error => console.error(error),
        () => { this.refreshServiceSpecification(updatedSpec) }
      )
    }

  }

  refreshServiceSpecification(updatedSpec : ServiceSpecification) {
    this.specID = updatedSpec.id
    this.retrieveServiceSpec()
  }

}
