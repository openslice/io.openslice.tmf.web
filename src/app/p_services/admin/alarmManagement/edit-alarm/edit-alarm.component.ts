import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { stricterDefinedAlarm } from 'src/app/shared/models/augmentedOpenAPImodels/stricter-defined-alarm-management.model';
import { AlarmUpdate } from 'src/app/openApis/alarmManagement/models';
import { AlarmService } from 'src/app/openApis/alarmManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SharedAlarmService } from '../shared/shared-alarm.service';

@Component({
  selector: 'app-edit-alarm',
  templateUrl: './edit-alarm.component.html',
  styleUrls: ['./edit-alarm.component.scss'],
  animations: [ 
    trigger('fadeIn', fadeIn())
   ]
})
export class EditAlarmComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alarmService: AlarmService,
    private authService: AuthService,
    private toast: ToastrService,
    private sortingService: SortingService,
    public sharedAlarmService: SharedAlarmService
  ) { }

  alarmId: string
  alarmNotFound: boolean
  alarm: stricterDefinedAlarm

  editForm = new FormGroup({
    ackState: new FormControl(),
    perceivedSeverity: new FormControl(),
    state: new FormControl(),
    comment: new FormControl()
  })

  severitiesList = ["critical", "major", "minor", "warning", "indeterminate", "cleared"]
  ackStateList = ["unacknowledged", "acknowledged"]
  stateList = ["raised", "updated", "cleared"]

  addCommentModeActive = false

  ngOnInit() {
    this.alarmId = this.activatedRoute.snapshot.params.id

    if (this.alarmId) {
      this.retrieveAlarm()
    } else {
      this.router.navigate(['../alarms'],  { relativeTo: this.activatedRoute})
    }
  }

  retrieveAlarm() {
    this.alarmService.retrieveAlarm({id: this.alarmId}).subscribe(
      (data:stricterDefinedAlarm) => this.alarm = data,
      (error) => { console.error(error) },
      () => {
        if (this.alarm) {
          this.editForm.patchValue({
            state: this.alarm.state,
            perceivedSeverity: this.alarm.perceivedSeverity,
            ackState: this.alarm.ackState     
          })
          this.alarm.comment.sort(this.sortingService.ascDateSortingFuncByTimeProperty())
        } else {
          this.alarmNotFound = true
        }
      }
    )
  }

  onAlarmClearSelection(event: MatSelectChange) {
    if (event.value === "cleared") {
      this.editForm.patchValue({
        state: "cleared",
        perceivedSeverity: "cleared"
      })
    }
  }

  onAlarmStateUpdateSelection(event: MatSelectChange) {
    if (this.editForm.get('state').value === "raised") {
      this.editForm.patchValue({
        state:"updated"
      })
    }
  }

  triggerNewComment() {
    this.addCommentModeActive = !this.addCommentModeActive
    this.editForm.get("comment").reset()
  }

  updateAlarm() {
    this.addCommentModeActive = false
    let alarmUpdate: AlarmUpdate = {
      state: this.editForm.get('state').value,
      perceivedSeverity: this.editForm.get('perceivedSeverity').value,
      ackState: this.editForm.get('ackState').value
    }

    if (this.editForm.get('comment').value) {
      alarmUpdate.comment = [{
        comment: this.editForm.get('comment').value,
        userId: this.authService.portalUserJWT.preferred_username,
        time: new Date().toISOString()
      }]
    }

    this.alarmService.patchAlarm({body: alarmUpdate, id: this.alarmId}).subscribe(
      data => { this.toast.success("Alarm was successfully updated")},
      error => {console.error(error); this.toast.error("An error occurred while editing alarm")},
      () => {
        this.retrieveAlarm()
      }
    )
  }

}
