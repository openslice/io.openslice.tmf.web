import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { ToastrService } from 'ngx-toastr';
import { ServiceOrderItem } from 'src/app/openApis/ServiceOrderingManagement/models';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { ServiceSpecification, ServiceSpecCharacteristic } from 'src/app/openApis/ServiceCatalogManagement/models';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-edit-orders-service-spec-characteristics',
  templateUrl: './edit-orders-service-spec-characteristics.component.html',
  styleUrls: ['./edit-orders-service-spec-characteristics.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class EditOrdersServiceSpecCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      orderItem: ServiceOrderItem
    },
    private dialogRef: MatDialogRef<EditOrdersServiceSpecCharacteristicsComponent>,
    private specService: ServiceSpecificationService,
    private toastr: ToastrService,
    private sortingService: SortingService,
    private authService: AuthService
  ) { }

  isAdminUser: boolean = false

  serviceSpec: ServiceSpecification
  
  confSpecFormArray = new FormArray([])
  nonConfSpecFormArray = new FormArray([])

  confSpecCharacteristics: ServiceSpecCharacteristic[] = []
  nonConfSpecCharacteristics: ServiceSpecCharacteristic[] = []

  ngOnInit() {
    // console.log("this.data.orderItem.service")
    // console.log(this.data.orderItem.service)
    this.isAdminUser = this.authService.portalUserJWT.realm_access.roles.includes('ADMIN')

    this.retrieveServiceSpec()
  }

  retrieveServiceSpec() {
    this.specService.retrieveServiceSpecification({id: this.data.orderItem.service.serviceSpecification.id}).subscribe(
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

    this.confSpecCharacteristics = this.serviceSpec.serviceSpecCharacteristic.filter(specChar => {return specChar.configurable && this.data.orderItem.service.serviceCharacteristic.some( item => item.name === specChar.name) } )
    this.confSpecCharacteristics.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
    
    if (this.isAdminUser) {
      this.nonConfSpecCharacteristics = this.serviceSpec.serviceSpecCharacteristic.filter(specChar => {return !specChar.configurable && this.data.orderItem.service.serviceCharacteristic.some( item => item.name === specChar.name) })
      this.nonConfSpecCharacteristics.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
    }

    this.confSpecCharacteristics.forEach ( (confSpecChar) => {
      confSpecFA.push(this.updateFormArrayItem(confSpecChar, this.confSpecCharacteristics))
    })

    this.nonConfSpecCharacteristics.forEach ( (nonConfSpecChar) => {
      nonConfSpecFA.push(this.updateFormArrayItem(nonConfSpecChar, this.nonConfSpecCharacteristics))
    })
  }

  updateFormArrayItem( specChar: ServiceSpecCharacteristic, specCharList: ServiceSpecCharacteristic[]): FormGroup {
    
    const orderedServiceCharacteristic = this.data.orderItem.service.serviceCharacteristic.find(char => char.name === specChar.name)

    let charValueArray = orderedServiceCharacteristic.value
    
    if (['SET', 'ARRAY', 'ENUMERABLE'].includes(this.data.orderItem.service.serviceCharacteristic.find(char => char.name === specChar.name).valueType)) {
      charValueArray = JSON.parse(orderedServiceCharacteristic.value.value)
    }
  
    return new FormGroup({
      name: new FormControl(specChar.name),
      valueType: new FormControl(specChar.valueType),
      value: new FormControl(charValueArray)
    })
  }

  compareFn( optionOne, optionTwo ) : boolean {
    return (optionOne.value === optionTwo.value) || (optionOne.alias === optionTwo.alias);
  }

  closeDialog() { 
    this.dialogRef.close()
    console.log(this.confSpecFormArray.value)
    console.log(this.nonConfSpecFormArray.value)
  }

  submitDialog() {
    
    // console.log(this.confSpecFormArray.value)
    // console.log(this.nonConfSpecFormArray.value)
    const editedCharsFA = this.confSpecFormArray.value.concat(this.nonConfSpecFormArray.value)
    console.log(editedCharsFA.slice())

    let newServiceCharacteristics = []
    let editedCharValue 
    editedCharsFA.forEach( editedChar => {
      let editedCharValue = editedChar.value
      if (editedChar.valueType  === "SET" || editedChar.valueType === "ARRAY") {
        editedCharValue = {
          value: JSON.stringify( editedChar.value.map(el => {return {'value': el.value, 'alias': el.alias}}) ),
          alias: ''
        }
      }
      editedChar.value = editedCharValue
    })

    console.log(editedCharsFA)
    this.dialogRef.close(editedCharsFA)
  }

}
