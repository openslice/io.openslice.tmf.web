import { trigger } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CharacteristicSpecificationRes, ServiceTestSpecification, ServiceTestSpecificationUpdate } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-edit-test-spec-characteristic',
  templateUrl: './edit-test-spec-characteristic.component.html',
  styleUrls: ['./edit-test-spec-characteristic.component.scss'],
  animations: [trigger('fadeIn', fadeIn())]
})
export class EditTestSpecCharacteristicComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceTestSpec: ServiceTestSpecification,
      characteristicToBeUpdated: CharacteristicSpecificationRes,
    },
    private dialogRef: MatDialogRef<EditTestSpecCharacteristicComponent>,
    private testSpecService: ServiceTestSpecificationService,
    private toast: ToastrService
  ) { }

  editCharacteristicForm = new FormGroup({
    name: new FormControl("", Validators.required),
    description: new FormControl(""),
    valueType: new FormControl()
  })

  valueTypes = ['INTEGER', 'SMALLINT', 'LONGINT', 'FLOAT', 'BINARY', 'BOOLEAN', 'ARRAY', 'SET', 'TEXT', 'LONGTEXT', 'ENUM', 'TIMESTAMP']

  newCharacteristic = false

  ngOnInit() {
    if (this.data.characteristicToBeUpdated) {
      this.editCharacteristicForm.patchValue(this.data.characteristicToBeUpdated)
    }
    else { this.newCharacteristic = true }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    if (this.newCharacteristic) {
      this.data.serviceTestSpec.specCharacteristic.push(this.editCharacteristicForm.value)
    } else {
      const updateCharIndex = this.data.serviceTestSpec.specCharacteristic.findIndex(char => char.id === this.data.characteristicToBeUpdated.id)
      this.data.serviceTestSpec.specCharacteristic[updateCharIndex] = this.editCharacteristicForm.value
    }

    const updateCharacteristicObj: ServiceTestSpecificationUpdate = {
      specCharacteristic: this.data.serviceTestSpec.specCharacteristic
    }

    
    this.testSpecService.patchServiceTestSpecification({id: this.data.serviceTestSpec.id, serviceSpecification: updateCharacteristicObj}).subscribe(
      data => {},
      error => { console.error(error); this.toast.error("An error occurred upon updating Test Specification Characteristics") },
      () => {this.dialogRef.close('updated')}
    )
  }
  }
