import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alarm } from 'src/app/openApis/alarmManagement/models';
import { AlarmService } from 'src/app/openApis/alarmManagement/services';

@Component({
  selector: 'app-delete-alarm',
  templateUrl: './delete-alarm.component.html',
  styleUrls: ['./delete-alarm.component.scss']
})
export class DeleteAlarmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Alarm,
    private alarmService: AlarmService,
    private dialogRef: MatDialogRef<DeleteAlarmComponent>
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    this.alarmService.deleteAlarm(this.data.id).subscribe(
      data => {},
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
