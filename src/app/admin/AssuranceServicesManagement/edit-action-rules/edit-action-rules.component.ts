import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActionSpecification, RuleSpecification, RuleSpecificationCreate, RuleSpecificationUpdate } from 'src/app/openApis/AssuranceServicesManagementAPI/models';
import { ActionSpecificationService, RuleSpecificationService } from 'src/app/openApis/AssuranceServicesManagementAPI/services';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-edit-action-rules',
  templateUrl: './edit-action-rules.component.html',
  styleUrls: ['./edit-action-rules.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditActionRulesComponent implements OnInit {

  constructor(
    private actionSpecService: ActionSpecificationService,
    private ruleSpecService: RuleSpecificationService,
    private toast: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  newActionRule = false
  alarmNotFound: boolean
  actionRule: RuleSpecification
  actionRuleId: string

  actions: ActionSpecification[]

  editForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    eventType: new FormControl(""),
    condition: new FormArray([]),
    scope: new FormControl(""),
    actions: new FormControl([])
  })

  availableEventTypes = ['EVENT_ALARM_CREATE']
  availableAttrNameConditions = ['sourceSystemId', 'perceivedSeverity', 'alarmType', 'probableCause']
  availableConditions = {
    sourceSystemId: ['NFVOp'],
    perceivedSeverity: ["critical","major","minor","warning","indeterminate","cleared"],
    // ackState: ["unacknowledged", "acknowledged"],
    // state: ["raised", "updated", "cleared"],
    alarmType: ["qualityOfServiceAlarm"],
    probableCause: ["thresholdCrossed"]
  }
  booleanOperators = ["AND", "OR"]
  comparisonOperators = ["EQUALS", "NOTEQUAL","GREATER_THAN","LESS_THAN"]
  
  ngOnInit() {
    this.retrieveActionsList()
  }

  retrieveActionsList() {
    this.actionSpecService.listActionSpecification({}).subscribe(
      data => this.actions = data,
      error => console.error(error),
      () => {
        this.actionRuleId = this.activatedRoute.snapshot.params.id 
        if (this.actionRuleId) {
          this.retrieveActionRule() 
        } else {
          this.newActionRule = true
        }
      }
    )
  }

  retrieveActionRule() {
    this.ruleSpecService.retrieveRuleSpecification({id: this.actionRuleId}).subscribe(
      data => this.actionRule = data,
      error => console.error(error),
      () => {
        if (this.actionRule) {
          this.editForm.patchValue(this.actionRule)
          this.editForm.patchValue({
            scope: this.actionRule.scope.entityUUID,
            actions: this.actions.filter( action => this.actionRule.actions.map( actionRuleAction => actionRuleAction.actionId).includes(action.uuid))
          })
          this.initConditionsValueFA()
        } else {
          this.alarmNotFound = true
        }
      }
    )
  }

  initConditionsValueFA() {
    this.editForm.setControl('condition', new FormArray([]))
    const formArray = this.editForm.get('condition') as FormArray

    this.actionRule.condition.forEach( (condition) => {
      formArray.push(
        new FormGroup({
          booleanOperator: new FormControl(condition.booleanOperator),
          eventAttributeName: new FormControl(condition.eventAttributeName),
          eventAttributeValue: new FormControl(condition.eventAttributeValue),
          operator: new FormControl(condition.operator)
        })
      )
    })
  }

  addToActionRuleConditionsArray() {
    const formArray = this.editForm.get('condition') as FormArray
    
    formArray.push(
      new FormGroup({
        booleanOperator: new FormControl(),
        eventAttributeName: new FormControl(),
        eventAttributeValue: new FormControl(),
        operator: new FormControl()
      })
    )
  }

  deleteFromActionRuleConditionsArray(conditionIndex: number) {
    const formArray = this.editForm.get('condition') as FormArray
    formArray.removeAt(conditionIndex)
  }

  updateActionRule() {
    // console.log(this.editForm.value)

    const updateObj: RuleSpecificationCreate | RuleSpecificationUpdate = {
      actions: this.editForm.value.actions.map( act => { return {actionId: act.uuid, uuid: act.uuid}} ),
      // actions: this.editForm.value.actions,
      condition: this.editForm.value.condition,
      description: this.editForm.value.description,
      eventType: this.editForm.value.eventType,
      name: this.editForm.value.name,
      scope: {"entityUUID": this.editForm.value.scope}
    }

    // console.log(updateObj)

    if (this.newActionRule) {
      this.ruleSpecService.createRuleSpecification(updateObj).subscribe(
        data => { this.actionRuleId = data.uuid },
        error => { console.error(error) },
        () => {
          this.toast.success("Action Rule is successfully created")
          this.router.navigate(["action_rule", this.actionRuleId])

          // this.retrieveActionRule()
        }
      )
    } else {
      this.ruleSpecService.patchRuleSpecification({id: this.actionRuleId, body: updateObj}).subscribe(
        data => { },
        error => {console.error(error)},
        () => {
          this.toast.success("Action Rule is successfully updated")
          this.retrieveActionRule()
        }
      )
    }

  }

}
