import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionSpecification } from 'src/app/openApis/assuranceServicesManagementAPI/models';
import { ActionSpecificationService } from 'src/app/openApis/assuranceServicesManagementAPI/services';

@Component({
  selector: 'app-delete-actions',
  templateUrl: './delete-action-spec.component.html',
  styleUrls: ['./delete-action-spec.component.scss']
})
export class DeleteActionSpecComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ActionSpecification,
    private actionSpecificationService: ActionSpecificationService,
    private dialogRef: MatDialogRef<DeleteActionSpecComponent>
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
