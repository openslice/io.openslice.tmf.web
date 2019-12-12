import { Component, OnInit } from '@angular/core';
import { RequesterService, serviceConfigurationItem } from '../services/requester.service';
import { ServiceSpecification, ServiceSpecCharacteristic, ServiceSpecCharacteristicValue } from 'src/app/openApis/ServiceCatalogManagement/models';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { ServiceOrder, ServiceOrderCreate, ServiceOrderItem } from 'src/app/openApis/ServiceOrderingManagement/models';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-service-order-checkout',
  templateUrl: './service-order-checkout.component.html',
  styleUrls: ['./service-order-checkout.component.scss']
})
export class ServiceOrderCheckoutComponent implements OnInit {

  constructor(
    public requesterService: RequesterService,
    private authService: AuthService
  ) { }

  serviceNoteCtrl = new FormControl('')

  specCharFormArray = new FormArray([])

  configurableSpecChar: ServiceSpecCharacteristic[] = []


  ngOnInit() {
    this.requesterService.selectedSpecToView = this.requesterService.serviceConfigurationList[0]
    
    if (this.requesterService.serviceConfigurationList.length) 
      this.initValuesForm()
  }

  viewAndConfigureSpec(item: serviceConfigurationItem) {
    
    this.updateActiveServiceInList()

    this.requesterService.selectedSpecToView = item
    this.initValuesForm()
  }

  removeSpecFromCart(spec: ServiceSpecification) {
    const toBeRemovedSpecIndex = this.requesterService.serviceConfigurationList.findIndex(el => el === spec)
    this.requesterService.selectedSpecToView = null
    this.requesterService.serviceConfigurationList.splice(toBeRemovedSpecIndex, 1)
    if (toBeRemovedSpecIndex === this.requesterService.serviceConfigurationList.length) {
      this.requesterService.selectedSpecToView = this.requesterService.serviceConfigurationList[toBeRemovedSpecIndex-1]
    } else {
      this.requesterService.selectedSpecToView = this.requesterService.serviceConfigurationList[toBeRemovedSpecIndex]
    }
  }


  initValuesForm() {
    // console.log(this.requesterService.serviceConfigurationList)

    this.specCharFormArray = new FormArray([])
    
    const formArray = this.specCharFormArray as FormArray
    
    this.configurableSpecChar = this.requesterService.selectedSpecToView.spec.serviceSpecCharacteristic.filter(specChar => specChar.configurable)
    
    this.configurableSpecChar.forEach( (confSpecChar, charIndex) => {
      formArray.push(this.updateFormArrayItem(confSpecChar, charIndex))
    })

  }

  updateFormArrayItem( specChar: ServiceSpecCharacteristic, index: number): FormGroup {

    // const charValueArray = specChar.serviceSpecCharacteristicValue.filter( val => val.isDefault )
    const charValueArray = this.requesterService.serviceConfigurationList.find(listItem => listItem.spec.id === this.requesterService.selectedSpecToView.spec.id).specCharacteristics[index].value
    
    // let controlValue: ServiceSpecCharacteristicValue[] | ServiceSpecCharacteristicValue
    // if (charValueArray.value.length === 1) controlValue = charValueArray.value
    // if (charValueArray.value.length > 1) controlValue = charValueArray.value
    // controlValue = charValueArray.value

    return new FormGroup({
      name: new FormControl(specChar.name),
      valueType: new FormControl(specChar.valueType),
      value: new FormControl(charValueArray)
    })
  }

  submitOrder() {

    this.updateActiveServiceInList()
    
    console.log(this.requesterService.serviceConfigurationList)
    
    let newOrder: ServiceOrderCreate = {orderItem:[]}


    let newOrderItem: ServiceOrderItem = { service: {}, action: 'add'}
    this.requesterService.serviceConfigurationList.forEach(serviceItem => {
      console.log(serviceItem)
      newOrderItem.service['serviceSpecification'] = {id: serviceItem.spec.id}
      serviceItem.specCharacteristics.forEach(characteristic => {
        console.log(characteristic)
        newOrderItem.service['serviceCharacteristic'] = []
        if (characteristic.value.length > 1) {
          newOrderItem.service['serviceCharacteristic'].push(
            {
              name: characteristic.name,
              valueType: characteristic.valueType,
              value: characteristic.value.map(el => el.value)
              // value: characteristic.value.map(char => {return})
            }
          )
        } else {
          newOrderItem.service['serviceCharacteristic'].push(
            {
              name: characteristic.name,
              valueType: characteristic.valueType,
              value: characteristic.value[0].value
              // value: characteristic.value.map(char => {return})
            }
          )
        }

        newOrder.orderItem.push(newOrderItem)
      })
      console.log(newOrderItem)
    })

    console.log(newOrder)

    // newOrder['note'].push({author: this.authService.portalUser.username, text: this.serviceNoteCtrl.value })
    
  }

  updateActiveServiceInList() {
    this.requesterService.serviceConfigurationList.find(listItem => listItem.spec.id === this.requesterService.selectedSpecToView.spec.id).specCharacteristics = this.specCharFormArray.value
  }

}
