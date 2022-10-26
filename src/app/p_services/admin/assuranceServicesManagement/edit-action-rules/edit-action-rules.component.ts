import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Action, ActionSpecification, RuleSpecification, RuleSpecificationCreate, RuleSpecificationUpdate } from 'src/app/openApis/assuranceServicesManagementAPI/models';
import { ActionSpecificationService, RuleSpecificationService } from 'src/app/openApis/assuranceServicesManagementAPI/services';
import { Service } from 'src/app/openApis/serviceInventoryManagement/models';
import { ServiceService } from 'src/app/openApis/serviceInventoryManagement/services';
import { ServiceOrderService } from 'src/app/openApis/serviceOrderingManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { SortingService } from 'src/app/shared/functions/sorting.service';

@Component({
  selector: 'app-edit-action-rules',
  templateUrl: './edit-action-rules.component.html',
  styleUrls: ['./edit-action-rules.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditActionRulesComponent implements OnInit {

  constructor(
    private actionSpecService: ActionSpecificationService,
    private serviceService: ServiceService,
    private ruleSpecService: RuleSpecificationService,
    private serviceOrderService: ServiceOrderService,
    private toast: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sortingService: SortingService
  ) { }

  newActionRule = false
  alarmNotFound: boolean
  actionRule: RuleSpecification
  actionRuleId: string

  actionSpecs: ActionSpecification[]
  selectedActionSpec: ActionSpecification

  activeRFSsFromInventory: Service[]
  scopeRelatedSupportingServices = []

  editForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    eventType: new FormControl(""),
    condition: new FormArray([]),
    scope: new FormControl(""),
    actions: new FormArray([])
  })

  availableEventTypes = ['AlarmCreateEvent', 'AlarmAttributeValueChangeEvent', 'AlarmStateChangeEvent', 'AlarmDeleteEvent']
  availableAttrNameConditions = ['sourceSystemId', 'perceivedSeverity', 'alarmType', 'probableCause']
  availableConditions = {
    sourceSystemId: ['mano-client-service'],
    perceivedSeverity: ["critical","major","minor","warning","indeterminate","cleared"],
    // ackState: ["unacknowledged", "acknowledged"],
    // state: ["raised", "updated", "cleared"],
    alarmType: ["communicationsAlarm","environmentalAlarm","equipmentAlarm","integrityViolation","mechanismViolation","operationalViolation","physicalViolation","processingErrorAlarm","qualityOfServiceAlarm","securityService","timeDomainViolation", "ANY"],
    probableCause: ["antennaFailure","communicationsSubsystemFailure","connectionEstablishmentError","cpuCyclesLimitExceeded","denialOfService","diskFailure","excessiveResponseTime","other","outOfCpuCycles","outOfMemory","outOfService","performanceDegraded","resourceAtOrNearingCapacity","systemResourcesOverload","thresholdCrossed", "ANY"]
  }
  booleanOperators = ["AND", "OR"]
  comparisonOperators = ["EQUALS", "NOTEQUAL","GREATER_THAN","LESS_THAN"]
  
  ngOnInit() {
    this.retrieveActionsList()
    this.retrieveActiveRFSs()
  }

  retrieveActionsList() {
    this.actionSpecService.listActionSpecification({}).subscribe(
      data => this.actionSpecs = data,
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

  retrieveActiveRFSs() {
    let serviceInventory: Service[]
    this.serviceService.listService({}).subscribe(
      data => { serviceInventory = data },
      error => { console.error(error) },
      () => {
        this.activeRFSsFromInventory = serviceInventory.filter( serv => serv.state === "active" && serv.category === "ResourceFacingServiceSpecification")
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
            // actions: this.actions.filter( action => this.actionRule.actions.map( actionRuleAction => actionRuleAction.actionId).includes(action.uuid))
          })
          this.initConditionsValueFA()
          this.initActionsValueFA()
          // this.initSelectedActionSpec()
        } else {
          this.alarmNotFound = true
        }
      }
    )
  }

  // initSelectedActionSpec() {
  //   this.selectedActionSpecs =  this.actionSpecs.filter( actionSpec => this.actionRule.actions.some( actionRuleAction => actionRuleAction.actionSpecificationRef.actionId === actionSpec.uuid))
  // }

  initActionsValueFA() {
    this.editForm.setControl('actions', new FormArray([]))
    const formArray = this.editForm.get('actions') as FormArray

    this.actionRule.actions.forEach( (action) => {
      formArray.push(
        new FormGroup({
          name: new FormControl(action.name),
          actionSpecificationRef: new FormControl({actionId:action.actionSpecificationRef.actionId}),
          actionCharacteristics: pushToActionCharArray(action, this.sortingService)
        })
      )
    })


    function pushToActionCharArray(action: Action, sortingService: SortingService) {
      let charArr = new FormArray([])
  
      action.actionCharacteristics.sort(sortingService.ascStringSortingFunctionByNameProperty())
      action.actionCharacteristics.forEach(char => {
        charArr.push(
          new FormGroup({
            name: new FormControl(char.name),
            value: new FormControl(char.value)
          })
        )
      })
      return charArr
    }
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

  onScopeSelect(event:MatOptionSelectionChange) {
    if (event.isUserInput) {
      this.scopeRelatedSupportingServices = []
      const selectedRFS = this.activeRFSsFromInventory.find(el => el.id === event.source.value)
  
      selectedRFS.serviceOrder.forEach (so => {
        this.serviceOrderService.retrieveServiceOrder({id: so.id}).subscribe(
          data => {
            if (data && data.orderItem) {
              data.orderItem.forEach(orderItem => {
                orderItem.service.supportingService.forEach( suppService => {
                  this.scopeRelatedSupportingServices.push(suppService)
                })
              })
            }
          },
          error => console.error(error)
        )
      })

    }
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

  addToActionList(actionSpec: ActionSpecification) {
    if (actionSpec) {
      this.addToActionSpecArray(actionSpec)
      this.selectedActionSpec = null
    }
  }

  removeFromActionList(index: number) {
    this.deleteFromSpecArray(index)
  }

  addToActionSpecArray(actionSpec: ActionSpecification) {
    const formArray = this.editForm.get('actions') as FormArray

    formArray.push(
      new FormGroup({
        name: new FormControl(actionSpec.name),
        actionSpecificationRef: new FormControl({actionId:actionSpec.uuid}),
        actionCharacteristics: pushToActionCharArray()
      })
    )

    function pushToActionCharArray() {
      let paramsArr = new FormArray([])
      actionSpec.params.forEach(param => {
        paramsArr.push(
          new FormGroup({
            name: new FormControl(param.paramName),
            value: new FormControl(param.paramValue)
          })
        )
      })
      return paramsArr
    }
  }

  deleteFromSpecArray(index: number) {
    const formArray = this.editForm.get('actions') as FormArray
    formArray.removeAt(index)
  }

  updateActionRule() {

    const updateObj: RuleSpecificationCreate | RuleSpecificationUpdate = {
      // actions: this.editForm.value.actions.map( act => { return {actionId: act.uuid, uuid: act.uuid}} ),
      actions: this.editForm.value.actions,
      condition: this.editForm.value.condition,
      description: this.editForm.value.description,
      eventType: this.editForm.value.eventType,
      name: this.editForm.value.name,
      scope: {"entityUUID": this.editForm.value.scope}
    }

    if (this.newActionRule) {
      this.ruleSpecService.createRuleSpecification(updateObj).subscribe(
        data => { this.actionRuleId = data.uuid },
        error => { console.error(error) },
        () => {
          this.toast.success("Action Rule is successfully created")
          this.router.navigate([this.actionRuleId],  { relativeTo: this.activatedRoute})

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
