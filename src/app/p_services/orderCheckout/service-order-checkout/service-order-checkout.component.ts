import { Component, OnInit } from '@angular/core';
import { RequesterService, serviceSpecConfigurationListItem } from '../services/requester.service';
import { ServiceSpecCharacteristic, ServiceSpecCharacteristicValue } from 'src/app/openApis/serviceCatalogManagement/models';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { ServiceOrderCreate, ServiceOrderItem } from 'src/app/openApis/serviceOrderingManagement/models';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ServiceOrderService } from 'src/app/openApis/serviceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/shared/services/app.service';

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
    private router: Router,
    private sortingService: SortingService,
    private appService: AppService
  ) { }
  
  subscription = new Subscription

  serviceNoteCtrl = new FormControl('')
  reqStartDate = new FormControl(new Date())
  reqCompletionDate = new FormControl(new Date(new Date().setDate(today.getDate()+1)))

  specCharFormArray = new FormArray([])

  configurableSpecChar: ServiceSpecCharacteristic[] = []

  orderedSpecsConfigurationList: serviceSpecConfigurationListItem[] = []
  selectedOrderSpecToView: serviceSpecConfigurationListItem

  
  ngOnInit() {
    
    if (this.requesterService.orderedSpecsList.length === 0) {
      this.freshLoadOrderListChanges()
    }
    
    this.populateOrderedSpecsConfigurationList()
  }

  freshLoadOrderListChanges () {
    let storageOrderArray = []
    storageOrderArray = JSON.parse(localStorage.getItem('orderedSpecsList')) || []
    
    this.subscription = this.requesterService.orderListUpdated$.subscribe(
      () => {
        if (storageOrderArray.length && (storageOrderArray.length === this.requesterService.orderedSpecsList.length)){ 
          this.populateOrderedSpecsConfigurationList()
        }
      }
    )
  }

  populateOrderedSpecsConfigurationList() {
    this.requesterService.orderedSpecsList.forEach( orderedSpec => {
      this.orderedSpecsConfigurationList.push({
        spec: orderedSpec,
        checked: false,
        specCharacteristics:  this.initCharacteristicsValue(orderedSpec)
      })      
    })

    this.selectedOrderSpecToView = this.orderedSpecsConfigurationList[0]
    
    if (this.orderedSpecsConfigurationList.length) {
      this.initValuesForm()
    }
  }

  initCharacteristicsValue(orderedSpec) {
    let initialCharValues: {
      name: string,
      valueType: string,
      value: ServiceSpecCharacteristicValue[]
    }[] = []

    const configurableSpecChar = orderedSpec.serviceSpecCharacteristic.filter(specChar => specChar.configurable)

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


    // initialCharValues.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

    return initialCharValues
  }

  initValuesForm() {
    // console.log(this.requesterService.serviceConfigurationList)
    this.specCharFormArray = new FormArray([])
    
    const formArray = this.specCharFormArray as FormArray
    
    this.configurableSpecChar = this.selectedOrderSpecToView.spec.serviceSpecCharacteristic.filter(specChar => specChar.configurable)
    
    //Sort Configurable Characteristics by Asc Name Order
    this.configurableSpecChar.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
    
    this.configurableSpecChar.forEach( (confSpecChar) => {
      formArray.push(this.updateFormArrayItem(confSpecChar))
    })
    
  }

  updateFormArrayItem( specChar: ServiceSpecCharacteristic): FormGroup {
    const charValueArray = this.orderedSpecsConfigurationList.find(listItem => listItem.spec.id === this.selectedOrderSpecToView.spec.id).specCharacteristics.find(char => char.name === specChar.name).value
    
    return new FormGroup({
      name: new FormControl(specChar.name),
      valueType: new FormControl(specChar.valueType),
      value: new FormControl(charValueArray)
    })
  }

  addToArrayCharacteristicValue(characteristic: ServiceSpecCharacteristic) {
    this.orderedSpecsConfigurationList.find(listItem => listItem.spec.id === this.selectedOrderSpecToView.spec.id).specCharacteristics.find(char => char.name === characteristic.name).value.push(
      {
        isDefault: true,
        valueType: characteristic.serviceSpecCharacteristicValue[0].valueType,
        value: {value: '', alias: ''}
      }
    )
  }

  deleteFromArrayCharacteristicValue(characteristic: ServiceSpecCharacteristic, index) {
    this.orderedSpecsConfigurationList.find(listItem => listItem.spec.id === this.selectedOrderSpecToView.spec.id).specCharacteristics.find(char => char.name === characteristic.name).value.splice(index, 1)
  }


  viewAndConfigureSpec(item: serviceSpecConfigurationListItem) {
    
    this.updateActiveServiceInList()

    this.selectedOrderSpecToView = item
    this.initValuesForm()
  }

  removeSpecFromCart(item: serviceSpecConfigurationListItem) {
    const toBeRemovedSpecIndex = this.orderedSpecsConfigurationList.findIndex(el => el.spec.id === item.spec.id)
    this.selectedOrderSpecToView = null
    
    this.orderedSpecsConfigurationList.splice(toBeRemovedSpecIndex, 1)
    this.requesterService.orderedSpecsList.splice(toBeRemovedSpecIndex, 1)
    this.removeOrderFromLocalStorage(item.spec.id)
    
    if (toBeRemovedSpecIndex === this.orderedSpecsConfigurationList.length) {
      this.selectedOrderSpecToView = this.orderedSpecsConfigurationList[toBeRemovedSpecIndex-1]
    } else {
      this.selectedOrderSpecToView = this.orderedSpecsConfigurationList[toBeRemovedSpecIndex]
    }
  }

  removeOrderFromLocalStorage(specId) {
    let orderArray = []
    orderArray = JSON.parse(localStorage.getItem('orderedSpecsList')) || []
    if (orderArray.length){
      orderArray.splice(orderArray.findIndex(el => el === specId), 1)
    }

    localStorage.setItem('orderedSpecsList', JSON.stringify(orderArray))
  }


  submitOrder() {

    this.updateActiveServiceInList()
    let newOrder: ServiceOrderCreate = {
      orderItem:[], 
      requestedStartDate: this.reqStartDate.value,
      requestedCompletionDate: this.reqCompletionDate.value
    }

    if (this.serviceNoteCtrl.value) {
      newOrder.note = [{
        author:this.authService.portalUserJWT.preferred_username,
        text: this.serviceNoteCtrl.value,
        date: new Date().toISOString()
      }]
    }

    let newOrderItem: ServiceOrderItem 
    // = { service: {}, action: 'add'}
    this.orderedSpecsConfigurationList.forEach(serviceItem => {
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
    // console.log(newOrderItem)
    
    // console.log(newOrder)


    this.orderService.createServiceOrder(newOrder).subscribe(
      response => { },
      error => { console.error(error); this.toast.error("An error occurred while processing your Service Order") },
      () => {
        this.toast.success("Service Order was successfully placed")
        
        // clear order lists
        this.orderedSpecsConfigurationList = []
        this.requesterService.orderedSpecsList = []
        localStorage.removeItem('orderedSpecsList')

        this.router.navigate([this.appService.portalDomain, 'services_marketplace'])
      }
    )
  }

  updateActiveServiceInList() {
    this.orderedSpecsConfigurationList.find(listItem => listItem.spec.id === this.selectedOrderSpecToView.spec.id).specCharacteristics = this.specCharFormArray.value
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
