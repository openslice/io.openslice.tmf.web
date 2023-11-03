import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LCMRuleSpecification, LCMRuleSpecificationCreate } from 'src/app/openApis/lcmRuleSpecificationAPI/models';
import { LcmRuleSpecificationService } from 'src/app/openApis/lcmRuleSpecificationAPI/services';
import { ServiceSpecification } from 'src/app/openApis/serviceCatalogManagement/models';

@Component({
  selector: 'app-import-lcmrule',
  templateUrl: './import-lcmrule.component.html',
  styleUrls: ['./import-lcmrule.component.scss']
})
export class ImportLcmruleComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public serviceSpec: ServiceSpecification,
    private dialogRef: MatDialogRef<ImportLcmruleComponent>,
    private lcmRulesService: LcmRuleSpecificationService
  ) { }

  allRules: LCMRuleSpecification[] = []
  allRulesForServiceSpec: LCMRuleSpecification[] = []
  displayedRules: LCMRuleSpecification[] = []
  checked: boolean = true
  
  ruleToImport = new FormControl()


  ngOnInit() {
    this.retrieveAllRules()
    this.retrieveAllRulesForServiceSpec()
  }

  retrieveAllRules() {
    this.lcmRulesService.listLCMRuleSpecification({}).subscribe(
      data => this.allRules = data,
      error => {this.dialogRef.close(error), console.error(error)},
      () => {}
    )
  }

  retrieveAllRulesForServiceSpec() {
    this.lcmRulesService.listLCMRuleSpecificationByServiceSpecId({id: this.serviceSpec.id}).subscribe(
      data => this.allRulesForServiceSpec = this.displayedRules = data,
      error => {this.dialogRef.close(error), console.error(error)},
      () => { }
    )
  }

  checkboxChanged (event: MatCheckboxChange) {
    if (event.checked) {
      this.displayedRules = this.allRulesForServiceSpec
    } else {
      this.displayedRules = this.allRules
    }
    this.ruleToImport.reset()
  }

  onSubmit() {
    if (this.ruleToImport.value) {
      let ruleSpec: LCMRuleSpecification
      this.lcmRulesService.retrieveLCMRuleSpecification({id: this.ruleToImport.value.id}).subscribe(
        data => ruleSpec = data,
        error => {this.dialogRef.close(error), console.error(error)},
        () => {
          const importedRulePayload:LCMRuleSpecificationCreate = {
            code: ruleSpec.code,
            lcmrulephase: ruleSpec.lcmrulephase,
            priority: ruleSpec.priority,
            version: ruleSpec.version,
            content: ruleSpec.content,
            description: ruleSpec.description,
            name: `Import of ${ruleSpec.name}`,
            serviceSpecs: [{
              id: this.serviceSpec.id,
              name: this.serviceSpec.name
            }]
          }
      
          this.lcmRulesService.createLCMRuleSpecification(importedRulePayload).subscribe(
            data => {},
            error => {this.dialogRef.close(error), console.error(error)},
            () => {this.dialogRef.close('imported')}
          )
        }
      )
    }
  }

  onCancel() {
    this.dialogRef.close()
  }

}
