import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource, MatSort, MatCheckboxChange } from '@angular/material';
import { ServiceCandidate, ServiceSpecification, ServiceSpecCharacteristicValue, ServiceSpecCharacteristic } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { RequesterService } from 'src/app/requester/services/requester.service';
import { ToastrService } from 'ngx-toastr';
import { SortingService } from 'src/app/shared/functions/sorting.service';

@Component({
  selector: 'app-preview-service',
  templateUrl: './preview-service.component.html',
  styleUrls: ['./preview-service.component.scss']
})
export class PreviewServiceComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceCandidate: ServiceCandidate
    },
    private dialogRef: MatDialogRef<PreviewServiceComponent>,
    private specService: ServiceSpecificationService,
    private requesterService: RequesterService,
    private toastr: ToastrService,
    private sortingService: SortingService
  ) { }

  candidate: ServiceCandidate
  spec: ServiceSpecification


  displayedColumns = ['name', 'defaultValues']
  dataSourceConf  = new MatTableDataSource<ServiceSpecification>()

  dataSourceNonConf  = new MatTableDataSource<ServiceSpecification>()

  @ViewChild('sort1', {static: true}) sort1: MatSort;
  @ViewChild('sort2', {static: true}) sort2: MatSort;


  orderView = false

  ngOnInit() {
    this.candidate = this.data.serviceCandidate
    this.retrieveServiceSpec(this.data.serviceCandidate)

  }

  configurableFilterChanged(event:MatCheckboxChange) {
    if (event.checked) this.dataSourceConf.data = this.spec.serviceSpecCharacteristic.filter(spec => spec.configurable)
    else this.dataSourceConf.data = this.spec.serviceSpecCharacteristic
  }

  retrieveServiceSpec(candidate: ServiceCandidate) {
    this.specService.retrieveServiceSpecification({id: candidate.serviceSpecification.id}).subscribe(
      data => this.spec = data,
      error => console.error(error),
      () => {
        this.dataSourceConf.data = this.spec.serviceSpecCharacteristic.filter(spec => spec.configurable)
        this.dataSourceConf.sort = this.sort1
        this.dataSourceNonConf.data = this.spec.serviceSpecCharacteristic.filter(spec => !spec.configurable)
        this.dataSourceNonConf.sort = this.sort2
      }
    )
  }

  closeDialog() {
    if (this.orderView) 
      this.orderView = false
    else 
      this.dialogRef.close()
  }

  startConfiguration() {
    this.orderView = true
  }

  placeInOrderList() {
    if (!this.requesterService.serviceConfigurationList.some(el => el.spec.id === this.spec.id)) {
      // this.requesterService.serviceSpecsCart.push(this.spec)
      this.requesterService.serviceConfigurationList.push({
        spec: this.spec,
        checked: false,
        specCharacteristics:  this.initCharacteristicsValue()
      })      
      this.dialogRef.close("list_added")
    } else {
      this.toastr.warning("This Service is already in your Service List")
    }
    
  }

  initCharacteristicsValue() {
    let initialCharValues: {
      name: string,
      valueType: string,
      value: ServiceSpecCharacteristicValue[]
    }[] =[]

    const configurableSpecChar = this.spec.serviceSpecCharacteristic.filter(specChar => specChar.configurable)

    configurableSpecChar.forEach( confSpecChar => {
      
      const charDefaultValueArray = confSpecChar.serviceSpecCharacteristicValue.filter( val => val.isDefault )
      
      //In case there are no Default Values assigned, initiate Default Value Array with null values
      if (charDefaultValueArray.length === 0) {charDefaultValueArray[0] = {value: {value:'' , alias:''}}}
      
      initialCharValues.push({
        name: confSpecChar.name,
        valueType: confSpecChar.valueType,
        value: charDefaultValueArray
      })
    })


    initialCharValues.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

    

    return initialCharValues
  }

}
