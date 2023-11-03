import { Component, OnInit, Inject } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceSpecCharacteristic, ServiceSpecCharacteristicValue, ServiceSpecification, ServiceSpecificationUpdate } from 'src/app/openApis/serviceCatalogManagement/models';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { trigger } from '@angular/animations';
import { fadeIn, simpleFade } from 'src/app/shared/animations/animations';


@Component({
  selector: 'app-edit-service-spec-characteristics',
  templateUrl: './edit-service-spec-characteristics.component.html',
  styleUrls: ['./edit-service-spec-characteristics.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()), trigger('simpleFade', simpleFade()) ]
})
export class EditServiceSpecCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceSpec: ServiceSpecification,
      specToBeUpdated: ServiceSpecCharacteristic,
    },
    private dialogRef: MatDialogRef<EditServiceSpecCharacteristicsComponent>,
    private specService: ServiceSpecificationService,
    private toast: ToastrService
    ) { }

  editFormCharacteristic = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    configurable: new FormControl(),
    extensible: new FormControl(),
    maxCardinality: new FormControl(1),
    minCardinality: new FormControl(0),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    valueType: new FormControl(),
    serviceSpecCharacteristicValue: new FormArray([])
  })

  subValueTypeCtrl = new FormControl('INTEGER')

  valueTypes = ['INTEGER', 'SMALLINT', 'LONGINT', 'FLOAT', 'BINARY', 'BOOLEAN', 'ARRAY', 'SET', 'TEXT', 'LONGTEXT', 'ENUM', 'TIMESTAMP']
  subValueTypes = ['INTEGER', 'SMALLINT', 'LONGINT', 'FLOAT', 'BINARY', 'BOOLEAN', 'TEXT', 'LONGTEXT', 'TIMESTAMP']

  // valueSubType = new FormControl()
  subTypeSelection: boolean = false

  newSpec: boolean = false

  compDestroy$ = new Subject()

  isCharValueBlockExpanded: boolean[] = []

  ngOnInit() {
    if (this.data.specToBeUpdated) {
      if (!this.data.specToBeUpdated.validFor) this.data.specToBeUpdated.validFor = {endDateTime:null, startDateTime:null}
      this.editFormCharacteristic.patchValue(this.data.specToBeUpdated)
      
      const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
      this.data.specToBeUpdated.serviceSpecCharacteristicValue.forEach( val => {
        formArray.push(this.updateFormArrayItem(val))
        this.isCharValueBlockExpanded.push(false)
      })

      this.subValueTypeCtrl.patchValue(this.data.specToBeUpdated.serviceSpecCharacteristicValue[0].valueType)
      if (['SET', 'ARRAY', 'ENUM'].includes(this.data.specToBeUpdated.valueType)) {
        this.subTypeSelection = true
      }
    }
    
    else { this.newSpec = true }

    this.editFormCharacteristic.get('valueType').valueChanges.pipe(
      takeUntil(this.compDestroy$)
    )
    .subscribe(
      val => {
        this.editFormCharacteristic.setControl('serviceSpecCharacteristicValue', new FormArray([]))
        this.createFormArrayItem()


        if (['SET', 'ARRAY', 'ENUM'].includes(val)) {
          this.subTypeSelection = true
          this.subValueTypeCtrl.valueChanges.pipe(
            takeUntil(this.compDestroy$)
          )
          .subscribe (
            subVal => {
              this.editFormCharacteristic.setControl('serviceSpecCharacteristicValue', new FormArray([]))
              this.createFormArrayItem()
            }
          )
        } else {
          this.subTypeSelection = false
        }
        // const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
        // if (val !== 'ARRAY' && val !=='ENUM' && val !=='SET') {       
        //   this.subTypeSelection = false   
        //   formArray.setControl(0,       
        //     new FormGroup({
        //     value: new FormGroup({
        //       alias: new FormControl(),
        //       value: new FormControl(),
        //     }),
        //     unitOfMeasure: new FormControl(),
        //     isDefault: new FormControl(),
        //     valueType: new FormControl(this.editFormCharacteristic.get('valueType').value)
        //   }))
        // }
      }
    )
  }


  updateFormArrayItem(CharValue: ServiceSpecCharacteristicValue): FormGroup {
    return new FormGroup({
      value: new FormGroup({
        alias: new FormControl(CharValue.value.alias),
        value: new FormControl(CharValue.value.value),
      }),
      unitOfMeasure: new FormControl(CharValue.unitOfMeasure),
      isDefault: new FormControl({value: (CharValue.isDefault || this.data.specToBeUpdated.valueType === 'ARRAY'), disabled: this.data.specToBeUpdated.valueType === 'ARRAY'}),
      valueType: new FormControl(CharValue.valueType)
    })
  }

  
  createFormArrayItem() {
    const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
    
    // let isDisabled: boolean = true
    let subType: string = this.editFormCharacteristic.get('valueType').value

    if (['SET', 'ARRAY', 'ENUM'].includes(this.editFormCharacteristic.get('valueType').value)) {
      // isDisabled = false
      subType = this.subValueTypeCtrl.value
    }
    
    formArray.push(
      new FormGroup({
        value: new FormGroup({
          alias: new FormControl(),
          value: new FormControl(),
        }),
        unitOfMeasure: new FormControl(),
        isDefault: new FormControl({value: this.editFormCharacteristic.get('valueType').value === 'ARRAY', disabled: this.editFormCharacteristic.get('valueType').value === 'ARRAY'}),
        valueType: new FormControl(subType)
      })
    )
    this.isCharValueBlockExpanded.push(false)
  }

  deleteFormArrayItem(index) {
    const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
    formArray.removeAt(index)
    this.isCharValueBlockExpanded.splice(index, 1)
  }

  expandCharValueBlock(index) {
    this.isCharValueBlockExpanded[index] = !this.isCharValueBlockExpanded[index] 
  }

  isDefaultCheckboxChanged(index, event: MatCheckboxChange) {
    if (this.editFormCharacteristic.get('valueType').value === "ENUM" && event.checked) {
      const formArray = this.editFormCharacteristic.get('serviceSpecCharacteristicValue') as FormArray
      for (let i = 0; i < formArray.controls.length; i++) {
        if (i !== index) formArray.controls[i].get('isDefault').setValue(false)
      }     
    }
  }


  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    
    if (this.newSpec) {
      this.data.serviceSpec.serviceSpecCharacteristic.push(this.editFormCharacteristic.getRawValue())
    } else {
      const updateCharacteristIndex = this.data.serviceSpec.serviceSpecCharacteristic.findIndex(char => char.id === this.data.specToBeUpdated.id)
      this.data.serviceSpec.serviceSpecCharacteristic[updateCharacteristIndex] = this.editFormCharacteristic.getRawValue()
    }

    const updateCharacteristicObj: ServiceSpecificationUpdate = {
      serviceSpecCharacteristic: this.data.serviceSpec.serviceSpecCharacteristic
    }

    this.specService.patchServiceSpecification({id: this.data.serviceSpec.id, serviceSpecification: updateCharacteristicObj}).subscribe(
      data => {},
      error => { console.error(error); this.toast.error("An error occurred upon updating Spec Characteristics") },
      () => {this.dialogRef.close('updated')}
    )
  }
  
  ngOnDestroy(): void {
    this.compDestroy$.next()    
  }

}
