import { Component, OnInit, Inject } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceService } from 'src/app/openApis/serviceActivationAndConfiguration/services';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { ServiceSpecificationRef , Characteristic, ServiceUpdate, Service} from 'src/app/openApis/serviceActivationAndConfiguration/models';
import { ServiceSpecification, ServiceSpecCharacteristic } from 'src/app/openApis/serviceCatalogManagement/models';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-service-characteristics',
  templateUrl: './edit-service-characteristics.component.html',
  styleUrls: ['./edit-service-characteristics.component.scss'],
  animations: [ 
    trigger('fadeIn', fadeIn()),
  ]
})
export class EditServiceCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public injectedData: { service: Service},
    private dialogRef: MatDialogRef<EditServiceCharacteristicsComponent>,
    private serviceService: ServiceService,
    private specService: ServiceSpecificationService,
    private sortingService: SortingService,
    private toastService: ToastrService
  ) { }

  serviceSpec: ServiceSpecification

  servCharFormArray = new FormArray([])
  specCharFormArray = new FormArray([])

  serviceCharacteristics: Characteristic[] = []
  specificationCharacteristics: ServiceSpecCharacteristic[] = []

  ngOnInit() {
    this.retrieveServiceSpec()
  }

  retrieveServiceSpec() {
    this.specService.retrieveServiceSpecification({id: this.injectedData.service.serviceSpecification.id}).subscribe(
      data => this.serviceSpec = data,
      error => console.error(error),
      () => {
        this.initValuesForm()
      }
    )
  }

  initValuesForm() {
    const specCharFA = this.specCharFormArray as FormArray
    const servCharFA = this.servCharFormArray as FormArray

    this.specificationCharacteristics = this.serviceSpec.serviceSpecCharacteristic.filter( char => {return this.injectedData.service.serviceCharacteristic.some (specChar => specChar.name === char.name) })
    this.specificationCharacteristics.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
    
    this.serviceCharacteristics = this.injectedData.service.serviceCharacteristic.filter( char => {return !this.serviceSpec.serviceSpecCharacteristic.some (specChar => specChar.name === char.name) })
    this.serviceCharacteristics.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

    this.specificationCharacteristics.forEach ( specChar => {
      // if (this.injectedData.serviceCharacteristic.some(char => char.name === specChar.name)) {
        specCharFA.push(this.updateFAItem(specChar))
      // }
    })
  }

  updateFAItem (characteristic: ServiceSpecCharacteristic): FormGroup {

    const specCharacteristic = this.injectedData.service.serviceCharacteristic.find( char => char.name === characteristic.name)

    let charValueArray = specCharacteristic.value
    
    if (['SET', 'ARRAY', 'ENUMERABLE'].includes(this.injectedData.service.serviceCharacteristic.find(char => char.name === characteristic.name).valueType)) {
      charValueArray = JSON.parse(specCharacteristic.value.value)
    }

    return new FormGroup({
      name: new FormControl(characteristic.name),
      valueType: new FormControl(characteristic.valueType),
      value: new FormControl(charValueArray)
    })
  }

  addToArrayCharacteristicValue(characteristic: ServiceSpecCharacteristic) {
    this.specCharFormArray.value.find(char => char.name === characteristic.name).value.push(
      {
        value: '',
        alias: ''
      }
    )
  }

  deleteFromArrayCharacteristicValue(characteristic: ServiceSpecCharacteristic, index) {
    this.specCharFormArray.value.find(char => char.name === characteristic.name).value.splice(index, 1)
  }


  compareFn( optionOne, optionTwo ) : boolean {
    return (optionOne.value === optionTwo.value) || (optionOne.alias === optionTwo.alias);
  }

  submitDialog() {

    //editable service spec characteristics
    let editedCharValue;
    this.specCharFormArray.value.forEach( editedChar => {
      editedCharValue = { 'value': editedChar.value.value, 'alias': editedChar.value.alias }
      if (editedChar.valueType  === "SET" || editedChar.valueType === "ARRAY") {
        editedCharValue = {
          value: JSON.stringify( editedChar.value.map(el => {return {'value': el.value, 'alias': el.alias}}) ),
          alias: ''
        }
      }
      editedChar.value = editedCharValue
    })


    //read only service characteristics
    let serviceChars: Characteristic[] = []
    this.serviceCharacteristics.forEach ( readOnlyChar => {
      serviceChars.push({
        name: readOnlyChar.name,
        value: readOnlyChar.value,
        valueType: readOnlyChar.valueType
      })
    })


    let serviceUpdate: ServiceUpdate = {
      serviceCharacteristic: serviceChars.concat(this.specCharFormArray.value)
    }

    this.serviceService.patchService1({service: serviceUpdate, id: this.injectedData.service.id}).subscribe(
      data => { },
      error => { console.error(error); this.toastService.error("An error occurred upon updating Service")},
      () => { this.dialogRef.close('updated') }
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
