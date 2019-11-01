import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ServiceSpecCharacteristic, ServiceSpecCharacteristicValue } from 'src/app/openApis/ServiceCatalogManagement/models';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-edit-service-spec-characteristics',
  templateUrl: './edit-service-spec-characteristics.component.html',
  styleUrls: ['./edit-service-spec-characteristics.component.scss']
})
export class EditServiceSpecCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceSpecCharacteristic,
    private dialogRef: MatDialogRef<EditServiceSpecCharacteristicsComponent>
    ) { }

  editFormCharacteristic = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    configurable: new FormControl(),
    extensible: new FormControl(),
    maxCardinality: new FormControl(),
    minCardinality: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(),
      startDateTime: new FormControl()
    }),
    valueType: new FormControl(),
    serviceSpecCharacteristicValue: new FormArray([])
  })

  valueTypes = ['INTEGER', 'FLOAT', 'BINARY', 'ARRAY', 'ENUM']

  newSpec: boolean = false
  ngOnInit() {
    if (this.data) {
      console.log(this.data)
      if (!this.data.validFor) this.data.validFor = {endDateTime:null, startDateTime:null}
      this.editFormCharacteristic.patchValue(this.data)
      
      const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
      this.data.serviceSpecCharacteristicValue.forEach( val => {
        formArray.push(this.updateFormArrayItem(val))
      })

      console.log(this.editFormCharacteristic)
    }
    
    else { this.newSpec = true }

    this.editFormCharacteristic.get('valueType').valueChanges.subscribe(
      val => {
        this.editFormCharacteristic.setControl('serviceSpecCharacteristicValue', new FormArray([]))
        this.createFormArrayItem()
        console.log(this.editFormCharacteristic.value)
        const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
        console.log(formArray)
        if (val !== 'ARRAY' && val !=='ENUM') {
          console.log(val)
          console.log(formArray)
          console.log(formArray[0])
          formArray.setControl(0,       
            new FormGroup({
            value: new FormGroup({
              alias: new FormControl(),
              value: new FormControl(),
            }),
            unitOfMeasure: new FormControl(),
            isDefault: new FormControl(),
            valueType: new FormControl({value: this.editFormCharacteristic.get('valueType').value, disabled: true})
          }))
        } 
      }
    )
  }

  updateFormArrayItem(CharValue: ServiceSpecCharacteristicValue): FormGroup {
    return new FormGroup({
      value: new FormGroup({
        alias: new FormControl(CharValue.value.value),
        value: new FormControl(CharValue.value.alias),
      }),
      unitOfMeasure: new FormControl(CharValue.unitOfMeasure),
      isDefault: new FormControl(CharValue.isDefault),
      valueType: new FormControl(CharValue.valueType)
    })
  }

  
  createFormArrayItem() {
    const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
    formArray.push(
      new FormGroup({
        value: new FormGroup({
          alias: new FormControl(),
          value: new FormControl(),
        }),
        unitOfMeasure: new FormControl(),
        isDefault: new FormControl(),
        valueType: new FormControl()
      })
    )
  }

  deleteFormArrayItem(index) {
    const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
    formArray.removeAt(index)
  }


  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    console.log('submit')
  }

}
