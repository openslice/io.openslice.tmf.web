import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionSpecification, ActionSpecificationCreate, ActionSpecificationUpdate } from 'src/app/openApis/assuranceServicesManagementAPI/models';
import { ActionSpecificationService } from 'src/app/openApis/assuranceServicesManagementAPI/services';

@Component({
  selector: 'app-edit-actions',
  templateUrl: './edit-action-specs.component.html',
  styleUrls: ['./edit-action-specs.component.scss']
})
export class EditActionSpecsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ActionSpecification,
    private actionSpecificationService: ActionSpecificationService,
    private dialogRef: MatDialogRef<EditActionSpecsComponent>
  ) { }

  editForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    params: new FormArray([])
  })

  actionId: string
  action: ActionSpecification
  newAction = false

  ngOnInit() {
    if (this.data) {
      this.actionId = this.data.uuid
      this.retrieveAction()
    } else {
      this.newAction = true
    }
  }

  retrieveAction() {
    this.actionSpecificationService.retrieveActionSpecification({id: this.actionId}).subscribe(
      data => this.action = data,
      error => console.error(error),
      () => {
        this.editForm.patchValue(this.action)
        this.initValuesFA()
      }
    )
  }

  initValuesFA() {
    const formArray = this.editForm.get('params') as FormArray
    
    this.action.params.forEach( (actionParam) => {
      formArray.push(
        new FormGroup({
          paramName: new FormControl(actionParam.paramName),
          paramValue: new FormControl(actionParam.paramValue)
        })
      )
    })
  }

  addToActionParamsArray() {
    const formArray = this.editForm.get('params') as FormArray
    
    formArray.push(
      new FormGroup({
        paramName: new FormControl(),
        paramValue: new FormControl()
      })
    )
  }

  deleteFromActionParamsArray(actionParamIndex: number) {
    const formArray = this.editForm.get('params') as FormArray
    formArray.removeAt(actionParamIndex)
  }

  submitDialog() {

    const updateObj: ActionSpecificationCreate | ActionSpecificationUpdate = {
      description: this.editForm.value.description,
      name: this.editForm.value.name,
      params: this.editForm.value.params
    }

    if (this.newAction) {
      this.actionSpecificationService.createActionSpecification(updateObj).subscribe(
        data => {},
        error => console.error(error),
        () => this.dialogRef.close('created')
      )
    } 
    
    else {
      this.actionSpecificationService.patchActionSpecification({id: this.actionId, body: updateObj}).subscribe(
        data => {},
        error => console.error(error),
        () => this.dialogRef.close('updated')
      )
    }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

}
