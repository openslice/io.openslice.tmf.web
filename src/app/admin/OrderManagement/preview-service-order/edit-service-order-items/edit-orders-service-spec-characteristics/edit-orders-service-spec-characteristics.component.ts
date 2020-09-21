import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { ToastrService } from 'ngx-toastr';
import { ServiceOrderItem } from 'src/app/openApis/ServiceOrderingManagement/models';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ServiceSpecification, ServiceSpecCharacteristic } from 'src/app/openApis/ServiceCatalogManagement/models';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { fadeIn, simpleFade } from 'src/app/shared/animations/animations';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-edit-orders-service-spec-characteristics',
  templateUrl: './edit-orders-service-spec-characteristics.component.html',
  styleUrls: ['./edit-orders-service-spec-characteristics.component.scss'],
  animations: [ 
    trigger('fadeIn', fadeIn()),
    trigger('simpleFade', simpleFade())
  ]

})
export class EditOrdersServiceSpecCharacteristicsComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditOrdersServiceSpecCharacteristicsComponent>,
    private specService: ServiceSpecificationService,
    private toastr: ToastrService,
    private sortingService: SortingService,
    private authService: AuthService
  ) { }

  isAdminUser: boolean = false

  @Input() set _activeListItem(activeItem: {orderItem: ServiceOrderItem,  serviceSpec: ServiceSpecification}) {
    this.orderItem = activeItem.orderItem
    this.serviceSpec = activeItem.serviceSpec
    this.isAdminUser = this.authService.portalUserJWT.realm_access.roles.includes('ADMIN')
    this.initValuesForm()
  }
  @Output() characteristicsWasEdited = new EventEmitter<{orderItemID: string, serviceSpecChars:[]}>()

  orderItem: ServiceOrderItem
  serviceSpec: ServiceSpecification
  
  confSpecFormArray = new FormArray([])
  nonConfSpecFormArray = new FormArray([])

  confSpecCharacteristics: ServiceSpecCharacteristic[] = []
  nonConfSpecCharacteristics: ServiceSpecCharacteristic[] = []

  ngOnInit() {  }

  retrieveServiceSpec() {
    this.specService.retrieveServiceSpecification({id: this.orderItem.service.serviceSpecification.id}).subscribe(
      data => { this.serviceSpec = data },
      error => this.toastr.error("An error occurred retrieving Service Specification Characteristics information"),
      () => {
        this.initValuesForm()
      }
    )
  }

  initValuesForm() {
    this.confSpecFormArray = new FormArray([])
    this.nonConfSpecFormArray = new FormArray([])

    const confSpecFA = this.confSpecFormArray as FormArray
    const nonConfSpecFA = this.nonConfSpecFormArray as FormArray

    this.confSpecCharacteristics = this.serviceSpec.serviceSpecCharacteristic.filter(specChar => {return specChar.configurable && this.orderItem.service.serviceCharacteristic.some( item => item.name === specChar.name) } )
    this.confSpecCharacteristics.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
    
    if (this.isAdminUser) {
      this.nonConfSpecCharacteristics = this.serviceSpec.serviceSpecCharacteristic.filter(specChar => {return !specChar.configurable && this.orderItem.service.serviceCharacteristic.some( item => item.name === specChar.name) })
      this.nonConfSpecCharacteristics.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
    }

    this.confSpecCharacteristics.forEach ( (confSpecChar) => {
      confSpecFA.push(this.updateFormArrayItem(confSpecChar, this.confSpecCharacteristics))
    })

    this.nonConfSpecCharacteristics.forEach((nonConfSpecChar) => {
      nonConfSpecFA.push(this.updateFormArrayItem(nonConfSpecChar, this.nonConfSpecCharacteristics))
    })    
  }

  updateFormArrayItem( specChar: ServiceSpecCharacteristic, specCharList: ServiceSpecCharacteristic[]): FormGroup {
    
    const orderedServiceCharacteristic = this.orderItem.service.serviceCharacteristic.find(char => char.name === specChar.name)

    let charValueArray = orderedServiceCharacteristic.value
    
    if (['SET', 'ARRAY', 'ENUMERABLE'].includes(this.orderItem.service.serviceCharacteristic.find(char => char.name === specChar.name).valueType)) {
      charValueArray = JSON.parse(orderedServiceCharacteristic.value.value)
    }
  
    return new FormGroup({
      name: new FormControl(specChar.name),
      valueType: new FormControl(specChar.valueType),
      value: new FormControl(charValueArray)
    })
  }

  addToArrayCharacteristicValue(characteristic: ServiceSpecCharacteristic) {
    this.confSpecFormArray.value.concat(this.nonConfSpecFormArray.value).find(char => char.name === characteristic.name).value.push(
      {
        value: '',
        alias: ''
      }
    )
  }

  deleteFromArrayCharacteristicValue(characteristic: ServiceSpecCharacteristic, index) {
    this.confSpecFormArray.value.concat(this.nonConfSpecFormArray.value).find(char => char.name === characteristic.name).value.splice(index, 1)
  }

  compareFn( optionOne, optionTwo ) : boolean {
    return (optionOne.value === optionTwo.value) || (optionOne.alias === optionTwo.alias);
  }


  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    // console.log(this.confSpecFormArray.value)
    // console.log(this.nonConfSpecFormArray.value)
    const editedCharsFA = this.confSpecFormArray.value.concat(this.nonConfSpecFormArray.value)
    // console.log(editedCharsFA)

    let newServiceCharacteristics = []
    let editedCharValue 
    editedCharsFA.forEach( editedChar => {
      editedCharValue = editedChar.value
      if (editedChar.valueType  === "SET" || editedChar.valueType === "ARRAY") {
        editedCharValue = {
          value: JSON.stringify( editedChar.value.map(el => {return {'value': el.value, 'alias': el.alias}}) ),
          alias: ''
        }
      }
      editedChar.value = editedCharValue
    })

    this.characteristicsWasEdited.emit({
      orderItemID: this.orderItem.id,
      serviceSpecChars: editedCharsFA
    })
  }

  ngOnDestroy() {
    this.submitDialog()
  }

}
