import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LCMRuleSpecification } from 'src/app/openApis/lcmRuleSpecificationAPI/models/lcmrule-specification';
import { LcmRuleSpecificationService } from 'src/app/openApis/lcmRuleSpecificationAPI/services/lcm-rule-specification.service';



@Component({
  selector: 'app-delete-lcmrule',
  templateUrl: './delete-lcmrule.component.html',
  styleUrls: ['./delete-lcmrule.component.scss']
})
export class DeleteLcmruleComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: LCMRuleSpecification,
    private dialogRef: MatDialogRef<DeleteLcmruleComponent>,
    private lcmRulesService: LcmRuleSpecificationService

  ) { }

  ngOnInit() {
  }

  
  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.lcmRulesService.deleteLCMRuleSpecification(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
