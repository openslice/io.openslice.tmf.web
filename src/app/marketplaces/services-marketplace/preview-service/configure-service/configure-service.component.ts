import { Component, OnInit, Input } from '@angular/core';
import { ServiceSpecification, ServiceCandidate, ServiceSpecCharacteristic } from 'src/app/openApis/ServiceCatalogManagement/models';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-configure-service',
  templateUrl: './configure-service.component.html',
  styleUrls: ['./configure-service.component.scss']
})
export class ConfigureServiceComponent implements OnInit {

  constructor() { }

  @Input() spec: ServiceSpecification
  @Input() candidate: ServiceCandidate
  
  specCharFormArray = new FormArray([])

  configurableSpecChar: ServiceSpecCharacteristic[] = []
  ngOnInit() {
    console.log(this.spec)
    console.log(this.candidate)
    const formArray = this.specCharFormArray as FormArray
    
    this.configurableSpecChar = this.spec.serviceSpecCharacteristic.filter(specChar => specChar.configurable)
    
    this.configurableSpecChar.forEach( confSpecChar => {
      formArray.push(this.updateFormArrayItem(confSpecChar))
    })


    console.log(this.specCharFormArray)
  }

  updateFormArrayItem( specChar: ServiceSpecCharacteristic): FormGroup {

    const charValueArray = specChar.serviceSpecCharacteristicValue.filter( val => val.isDefault )
    
    console.log(charValueArray);
    let controlValue
    if (charValueArray.length === 1) controlValue = charValueArray[0]
    if (charValueArray.length > 1) controlValue = charValueArray

    return new FormGroup({
      name: new FormControl(specChar.name),
      valueType: new FormControl(specChar.valueType),
      value: new FormControl(controlValue)
    })
  }

  placeOrder() {
    console.log(this.specCharFormArray)
  } 

}
