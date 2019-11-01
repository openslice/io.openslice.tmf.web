import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ServiceSpecification, ServiceSpecCharacteristic, ServiceSpecCharacteristicValue } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { EditServiceSpecCharacteristicsComponent } from './edit-service-spec-characteristics/edit-service-spec-characteristics.component';
import { DeleteServiceSpecCharacteristicsComponent } from './delete-service-spec-characteristics/delete-service-spec-characteristics.component';


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
    categoryIDs: new FormControl([]),
    description: new FormControl(),
    lifecycleStatus: new FormControl(),
    name: new FormControl(),
    relatedParty: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(),
      startDateTime: new FormControl()
    }),
    version: new FormControl(),
    serviceSpecCharacteristicValue: new FormArray([])
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]


  displayedColumnsCharacteristics = ['name', 'type', 'configurable', 'actions']
  dataSource  = new MatTableDataSource<ServiceSpecCharacteristic>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  createNewCharacteristic = false

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) 
    {
      this.specID = this.activatedRoute.snapshot.params.id
      this.retrieveServiceSpec()
    } else {
      this.createNewCharacteristic = true
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

  openCharacteristicDesignDialog(characteristic) {
    const dialogRef = this.dialog.open(EditServiceSpecCharacteristicsComponent, {data: characteristic, disableClose: true})

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
      }
    )
  }

  openCharacteristicDeleteDialog(characteristic) {
    const dialogRef = this.dialog.open(DeleteServiceSpecCharacteristicsComponent, {data: characteristic})

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
      }
    )
  }

  updateServiceSpec() {
    console.log('submit')
  }

}
