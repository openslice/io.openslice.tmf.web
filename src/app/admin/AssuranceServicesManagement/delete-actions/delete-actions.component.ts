import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActionSpecification } from 'src/app/openApis/AssuranceServicesManagementAPI/models';
import { ActionSpecificationService } from 'src/app/openApis/AssuranceServicesManagementAPI/services';

@Component({
  selector: 'app-delete-actions',
  templateUrl: './delete-actions.component.html',
  styleUrls: ['./delete-actions.component.scss']
})
export class DeleteActionsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ActionSpecification,
    private actionSpecificationService: ActionSpecificationService,
    private dialogRef: MatDialogRef<DeleteActionsComponent>
  ) { }

  ngOnInit() {
  }

  confirmDeletion() { 
    this.actionSpecificationService.deleteActionSpecification(this.data.uuid).subscribe(
      data => {},
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
