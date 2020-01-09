import { Component, OnInit } from '@angular/core';
import { RequesterService, serviceConfigurationItem } from '../services/requester.service';
import { ServiceSpecCharacteristic } from 'src/app/openApis/ServiceCatalogManagement/models';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { ServiceOrderCreate, ServiceOrderItem } from 'src/app/openApis/ServiceOrderingManagement/models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ServiceOrderService } from 'src/app/openApis/ServiceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const today = new Date()

@Component({
  selector: 'app-service-order-checkout',
  templateUrl: './service-order-checkout.component.html',
  styleUrls: ['./service-order-checkout.component.scss']
})
export class ServiceOrderCheckoutComponent implements OnInit {

  constructor(
    public requesterService: RequesterService,
    private authService: AuthService,
    private orderService: ServiceOrderService,
    private toast: ToastrService,
    private router: Router
  ) { }

  serviceNoteCtrl = new FormControl('')
  reqStartDate = new FormControl(new Date())
  reqCompletionDate = new FormControl(new Date(new Date().setDate(today.getDate()+1)))

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

  removeSpecFromCart(item: serviceConfigurationItem) {
    const toBeRemovedSpecIndex = this.requesterService.serviceConfigurationList.findIndex(el => el.spec.id === item.spec.id)
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
    console.log(this.configurableSpecChar)
    this.configurableSpecChar.forEach( (confSpecChar, charIndex) => {
      formArray.push(this.updateFormArrayItem(confSpecChar, charIndex))
    })
    
  }

  updateFormArrayItem( specChar: ServiceSpecCharacteristic, index: number): FormGroup {

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
    
    let newOrder: ServiceOrderCreate = {
      orderItem:[], 
      note: [{
        author:this.authService.portalUser.username,
        text: this.serviceNoteCtrl.value,
        date: new Date().toISOString()
      }],
      requestedStartDate: this.reqStartDate.value,
      requestedCompletionDate: this.reqCompletionDate.value
    }

    let newOrderItem: ServiceOrderItem 
    // = { service: {}, action: 'add'}
    this.requesterService.serviceConfigurationList.forEach(serviceItem => {
      // console.log(serviceItem)
      newOrderItem = { service: {
        serviceSpecification: {
          id: serviceItem.spec.id,
          name: serviceItem.spec.name,
          version: serviceItem.spec.version
        },
        serviceCharacteristic: []
      }, action: 'add'}

      serviceItem.specCharacteristics.forEach( (characteristic, index) => {
        newOrderItem.service.serviceCharacteristic.push({
          name: characteristic.name,
          valueType: characteristic.valueType,
          value: undefined
        })

        // if (characteristic.value.length > 1) {
        if (characteristic.valueType === "SET" || characteristic.valueType === "ARRAY") {
          newOrderItem.service.serviceCharacteristic[index].value = {
            value: JSON.stringify( characteristic.value.map(el => {return {'value': el.value.value, 'alias': el.value.alias}}) )
          }
        } else {
          newOrderItem.service.serviceCharacteristic[index].value = characteristic.value[0].value
        }
      })
      newOrder.orderItem.push(newOrderItem)
    })
    
    console.log(newOrder)


    this.orderService.createServiceOrder(newOrder).subscribe(
      response => { console.log(response) },
      error => { console.error(error); this.toast.error("An error occurred while processing your Service Order") },
      () => {
        this.toast.success("Service Order was successfully placed")
        this.requesterService.serviceConfigurationList = []
        this.router.navigate(['services_marketplace'])
      }
    )
  }

  updateActiveServiceInList() {
    this.requesterService.serviceConfigurationList.find(listItem => listItem.spec.id === this.requesterService.selectedSpecToView.spec.id).specCharacteristics = this.specCharFormArray.value
  }

}
