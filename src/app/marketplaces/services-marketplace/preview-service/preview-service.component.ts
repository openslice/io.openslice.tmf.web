import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource, MatSort, MatCheckboxChange } from '@angular/material';
import { ServiceCandidate, ServiceSpecification, ServiceSpecCharacteristicValue, ServiceSpecCharacteristic } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { RequesterService } from 'src/app/requester/services/requester.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) { }

  candidate: ServiceCandidate
  spec: ServiceSpecification


  displayedColumns = ['name', 'defaultValues']
  dataSource  = new MatTableDataSource<ServiceSpecification>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  orderView = false

  ngOnInit() {
    this.candidate = this.data.serviceCandidate
    this.retrieveServiceSpec(this.data.serviceCandidate)

  }

  configurableFilterChanged(event:MatCheckboxChange) {
    if (event.checked) this.dataSource.data = this.spec.serviceSpecCharacteristic.filter(spec => spec.configurable)
    else this.dataSource.data = this.spec.serviceSpecCharacteristic
  }

  retrieveServiceSpec(candidate: ServiceCandidate) {
    this.specService.retrieveServiceSpecification({id: candidate.serviceSpecification.id}).subscribe(
      data => this.spec = data,
      error => console.error(error),
      () => {
        this.dataSource.data = this.spec.serviceSpecCharacteristic.filter(spec => spec.configurable)
        this.dataSource.sort = this.sort  
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
      initialCharValues.push({
        name: confSpecChar.name,
        valueType: confSpecChar.valueType,
        value: charDefaultValueArray
      })
    })


    console.log(initialCharValues)
    return initialCharValues
  }

}
