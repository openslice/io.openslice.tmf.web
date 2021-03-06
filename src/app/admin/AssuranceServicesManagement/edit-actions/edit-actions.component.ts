import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActionSpecification, ActionSpecificationCreate, ActionSpecificationUpdate } from 'src/app/openApis/AssuranceServicesManagementAPI/models';
import { ActionSpecificationService } from 'src/app/openApis/AssuranceServicesManagementAPI/services';

@Component({
  selector: 'app-edit-actions',
  templateUrl: './edit-actions.component.html',
  styleUrls: ['./edit-actions.component.scss']
})
export class EditActionsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ActionSpecification,
    private actionSpecificationService: ActionSpecificationService,
    private dialogRef: MatDialogRef<EditActionsComponent>
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
        data => console.log(data),
        error => console.error(error),
        () => this.dialogRef.close('created')
      )
    } 
    
    else {
      this.actionSpecificationService.patchActionSpecification({id: this.actionId, body: updateObj}).subscribe(
        data => console.log(data),
        error => console.error(error),
        () => this.dialogRef.close('updated')
      )
    }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

}
