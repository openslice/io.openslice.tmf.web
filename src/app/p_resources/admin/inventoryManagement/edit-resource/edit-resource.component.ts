import { Component, OnInit, Inject } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';
import { ResourceSpecificationRef , Characteristic, ResourceUpdate, Resource} from 'src/app/openApis/resourceInventoryManagement/models';
import { ResourceSpecification, ResourceSpecificationCharacteristicReq, ResourceSpecificationCharacteristicRes } from 'src/app/openApis/resourceCatalogManagement/models';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { ToastrService } from 'ngx-toastr';
import { Console } from 'console';

@Component({
  selector: 'app-edit-resource',
  templateUrl: './edit-resource.component.html',
  styleUrls: ['./edit-resource.component.scss'],
  animations: [
    trigger('fadeIn', fadeIn()),
  ]
})
export class EditResourceComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public injectedData: { resource: Resource},
    private dialogRef: MatDialogRef<EditResourceComponent>,
    private resourceService: ResourceService,
    private specService: ResourceSpecificationService,
    private sortingService: SortingService,
    private toastService: ToastrService
  ) { }

  resourceSpec: ResourceSpecification

  servCharFormArray = new FormArray([])
  specCharFormArray = new FormArray([])

  resourceCharacteristics: Characteristic[] = []
  specificationCharacteristics: ResourceSpecificationCharacteristicRes[] = []

  ngOnInit() {
    this.retrieveResourceSpec()
  }

  retrieveResourceSpec() {
    console.log("Asking for resource specification with id "+ JSON.stringify(this.injectedData.resource))
    this.specService.retrieveResourceSpecification({id: this.injectedData.resource.resourceSpecification.id}).subscribe(
      data => this.resourceSpec = data,
      error => console.error(error),
      () => {
        this.initValuesForm()
      }
    )
  }

  initValuesForm() {
    const specCharFA = this.specCharFormArray as FormArray
    const servCharFA = this.servCharFormArray as FormArray

    this.specificationCharacteristics = this.resourceSpec.resourceSpecCharacteristic.filter( char => {return this.injectedData.resource.resourceCharacteristic.some (specChar => specChar.name === char.name) })
    this.specificationCharacteristics.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

    this.resourceCharacteristics = this.injectedData.resource.resourceCharacteristic.filter( char => {return !this.resourceSpec.resourceSpecCharacteristic.some (specChar => specChar.name === char.name) })
    this.resourceCharacteristics.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

    this.specificationCharacteristics.forEach ( specChar => {
      // if (this.injectedData.resourceCharacteristic.some(char => char.name === specChar.name)) {
        specCharFA.push(this.updateFAItem(specChar))
      // }
    })
  }

  updateFAItem (characteristic: ResourceSpecificationCharacteristicReq): FormGroup {

    const specCharacteristic = this.injectedData.resource.resourceCharacteristic.find( char => char.name === characteristic.name)

    let charValueArray = specCharacteristic.value

    if (['SET', 'ARRAY', 'ENUMERABLE'].includes(this.injectedData.resource.resourceCharacteristic.find(char => char.name === characteristic.name).valueType)) {
      charValueArray = JSON.parse(specCharacteristic.value.value)
    }

    return new FormGroup({
      name: new FormControl(characteristic.name),
      valueType: new FormControl(characteristic.valueType),
      value: new FormControl(charValueArray)
    })
  }

  addToArrayCharacteristicValue(characteristic: ResourceSpecificationCharacteristicReq) {
    this.specCharFormArray.value.find(char => char.name === characteristic.name).value.push(
      {
        value: '',
        alias: ''
      }
    )
  }

  deleteFromArrayCharacteristicValue(characteristic: ResourceSpecificationCharacteristicReq, index) {
    this.specCharFormArray.value.find(char => char.name === characteristic.name).value.splice(index, 1)
  }


  compareFn( optionOne, optionTwo ) : boolean {
    return (optionOne.value === optionTwo.value) || (optionOne.alias === optionTwo.alias);
  }

  submitDialog() {

    //editable resource spec characteristics
    let editedCharValue;
    this.specCharFormArray.value.forEach( editedChar => {
      console.log(editedChar)
      editedCharValue = { 'value': editedChar.value.value, 'alias': editedChar.value.alias }
      if (editedChar.valueType  === "SET" || editedChar.valueType === "ARRAY") {
        editedCharValue = {
          value: JSON.stringify( editedChar.value.map(el => {return {'value': el.value, 'alias': el.alias}}) ),
          alias: ''
        }
      }
      editedChar.value = editedCharValue
    })


    //read only resource characteristics
    let resourceChars: Characteristic[] = []
    this.resourceCharacteristics.forEach ( readOnlyChar => {
      resourceChars.push({
        name: readOnlyChar.name,
        value: readOnlyChar.value,
        valueType: readOnlyChar.valueType
      })
    })


    let resourceUpdate: ResourceUpdate = {
      resourceCharacteristic: resourceChars.concat(this.specCharFormArray.value)
    }

    console.log(resourceUpdate)

    this.resourceService.patchResource({resource: resourceUpdate, id: this.injectedData.resource.id}).subscribe(
      data => { console.log(data) },
      error => { console.error(error); this.toastService.error("An error occurred upon updating Service")},
      () => { this.dialogRef.close('updated') }
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
