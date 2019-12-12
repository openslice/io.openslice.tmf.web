import { Component, OnInit, Input } from '@angular/core';
import { ServiceSpecification, ServiceCandidate, ServiceSpecCharacteristic, ServiceSpecCharacteristicValue } from 'src/app/openApis/ServiceCatalogManagement/models';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { RequesterService } from 'src/app/requester/services/requester.service';

@Component({
  selector: 'app-configure-service',
  templateUrl: './configure-service.component.html',
  styleUrls: ['./configure-service.component.scss']
})
export class ConfigureServiceComponent implements OnInit {

  constructor(
    private requesterService: RequesterService
  ) { }

  @Input() spec: ServiceSpecification
  
  specCharFormArray = new FormArray([])

  configurableSpecChar: ServiceSpecCharacteristic[] = []
  ngOnInit() {
    // this.requesterService.newSpecSelected$.subscribe(
    //   val => {
    //     console.log('newSpecSelected')
    //     this.requesterService.serviceConfigurationList.find(listItem => listItem.spec.id === val.previousSpec.id).specCharacteristics = this.specCharFormArray.value
    //     console.log(this.requesterService.serviceConfigurationList)
    //   }
    // )
  }
    
  

  ngOnChanges() {
    console.log('ngOnChanges')
    this.initForm()
  }

  initForm() {

    this.specCharFormArray = new FormArray([])
    
    const formArray = this.specCharFormArray as FormArray
    
    this.configurableSpecChar = this.spec.serviceSpecCharacteristic.filter(specChar => specChar.configurable)
    
    this.configurableSpecChar.forEach( confSpecChar => {
      formArray.push(this.updateFormArrayItem(confSpecChar))
    })
  }

  updateFormArrayItem( specChar: ServiceSpecCharacteristic): FormGroup {

    // const charValueArray = specChar.serviceSpecCharacteristicValue.filter( val => val.isDefault )
    const charValueArray = this.requesterService.serviceConfigurationList.find(listItem => listItem.spec.id === this.spec.id).specCharacteristics
    console.log(charValueArray)
    
    let controlValue: ServiceSpecCharacteristicValue[] | ServiceSpecCharacteristicValue
    // if (charValueArray.length === 1) controlValue = charValueArray
    // if (charValueArray.length > 1) controlValue = charValueArray

    return new FormGroup({
      name: new FormControl(specChar.name),
      valueType: new FormControl(specChar.valueType),
      value: new FormControl(controlValue)
    })
  }

  configCharacteristic() {
    console.log(this.specCharFormArray)
    console.log(this.requesterService.serviceConfigurationList)
  }
  
  ngOnDestroy() {
    console.log(this.specCharFormArray)
  }

}
