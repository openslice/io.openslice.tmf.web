import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActionSpecification } from 'src/app/openApis/assuranceServicesManagementAPI/models';
import { RuleSpecificationService } from 'src/app/openApis/assuranceServicesManagementAPI/services';

@Component({
  selector: 'app-delete-action-rules',
  templateUrl: './delete-action-rules.component.html',
  styleUrls: ['./delete-action-rules.component.scss']
})
export class DeleteActionRulesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ActionSpecification,
    private ruleSpecService: RuleSpecificationService,
    private dialogRef: MatDialogRef<DeleteActionRulesComponent>
  ) { }

  ngOnInit() {
  }

  confirmDeletion() { 
    this.ruleSpecService.deleteRuleSpecification(this.data.uuid).subscribe(
      data => {},
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }


}
