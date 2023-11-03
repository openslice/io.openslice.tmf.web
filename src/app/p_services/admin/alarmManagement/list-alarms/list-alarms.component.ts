import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { stricterDefinedAlarmCreate } from 'src/app/shared/models/augmentedOpenAPImodels/stricter-defined-alarm-management.model';
import { Alarm, AlarmCreate } from 'src/app/openApis/alarmManagement/models';
import { AlarmService } from 'src/app/openApis/alarmManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { DeleteAlarmComponent } from '../delete-alarm/delete-alarm.component';
import { SharedAlarmService } from '../shared/shared-alarm.service';

@Component({
  selector: 'app-list-alarms',
  templateUrl: './list-alarms.component.html',
  styleUrls: ['./list-alarms.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListAlarmsComponent implements OnInit {

  constructor(
    private alarmService: AlarmService,
    public dialog: MatDialog,
    private toast: ToastrService,
    public sharedAlarmService: SharedAlarmService,
    public appService: AppService
  ) { }

  displayedColumns = ['sourceSystemId', 'perceivedSeverity', 'ackState', 'state',  'alarmType', 'probableCause', 'alarmRaisedTime', 'actions']
  dataSource  = new MatTableDataSource<Alarm>()

  alarms: Alarm[]
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.retrieveAlarmsList()
  }

  retrieveAlarmsList() {
    this.alarmService.listAlarm({}).subscribe(
      data => { this.alarms = data },
      error => console.error(error),
      () => {
        this.dataSource.data = this.alarms
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'alarmRaisedTime': return new Date(item.alarmRaisedTime).getTime()
            default: return item[property]
          }
        }
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  //toBeDeleted
  //
  createDummyAlarm() {
    const severities: Array<"critical"|"major"|"minor"|"warning"|"indeterminate"|"cleared"> = ["critical","major","minor","warning","indeterminate"]

    let dummyAlarm: stricterDefinedAlarmCreate = {
      alarmRaisedTime: new Date(new Date().setSeconds(new Date().getSeconds()-30)).toISOString(),
      alarmReportingTime: new Date().toISOString(),
      state: "raised",
      alarmType: "qualityOfServiceAlarm",
      probableCause: "thresholdCrossed",
      ackState: "unacknowledged",
      perceivedSeverity: severities[Math.floor(Math.random()*5)],
      sourceSystemId: "mano-client-service-test",
      alarmDetails: "NSID=a1dqw1eqw2e21asdg2opoqwe1,DeploymentRequestID=sd23d1ed221he2g2opo11eaa",
      specificProblem: "action=scaledOut"
    }

    this.alarmService.createAlarm(dummyAlarm).subscribe(
      data => {},
      error => console.error(error),
      () => this.retrieveAlarmsList()
    )
  }
  //
  //

  openDeleteAlarmDialog(alarm: Alarm) {
    const dialogRef = this.dialog.open(DeleteAlarmComponent, {data: alarm})

    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.toast.success("Alarm is successfully deleted")
          this.retrieveAlarmsList()
        }
      }
    )
  }
}
