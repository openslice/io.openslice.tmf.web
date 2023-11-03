import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/core';
import { ToastrService } from 'ngx-toastr';
import { Reservation, ResourcePool } from 'src/app/openApis/resourcePoolManagement/models';
import { ReservationService, ResourcePoolService } from 'src/app/openApis/resourcePoolManagement/services';
import { ResourceRef } from 'src/app/openApis/serviceOrderingManagement/models';
import { AppService } from 'src/app/shared/services/app.service';
import { DeleteResourceReservationComponent } from '../delete-resource-reservation/delete-resource-reservation.component';

@Component({
  selector: 'app-list-resource-reservations',
  templateUrl: './list-resource-reservations.component.html',
  styleUrls: ['./list-resource-reservations.component.scss']
})
export class ListResourceReservationsComponent implements OnInit {

  constructor(
    private reservationService: ReservationService, 
    public dialog: MatDialog, 
    private toast: ToastrService,
    public appService: AppService,
    private resourcePoolService: ResourcePoolService, 
    private router: Router
  ) { }

  displayedColumns = [  'name', 'requestedPeriodStartDateTime', 'requestedPeriodEndDateTime',  'actions']
  dataSource  = new MatTableDataSource<Reservation>()
  reservations: Reservation[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    //------------------------Calendar Start ----------------------------

  
    resourcePools: ResourcePool[]

    calendarOptions: CalendarOptions = {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'resourceTimelineMonth,resourceTimelineWeek,resourceTimelineDay,listWeek'
      },
      initialView: 'resourceTimelineMonth',
      resourceAreaWidth: "200px",
  
      schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      //schedulerLicenseKey: 'XXX',
      //initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      select: this.handleDateSelect.bind(this),
      eventClick: this.handleEventClick.bind(this),
      eventsSet: this.handleEvents.bind(this),
      /* you can update a remote database when these fire:
      eventAdd:
      eventChange:
      eventRemove:
      */
      resourceGroupField: 'groupId',
      refetchResourcesOnNavigate: true,
  
      // resources: [
      //   {
      //     id: '0',
      //     groupId: 'Group 1',
      //     title: 'Resource A'
      //   },
      //   {
      //     id: '1',
      //     groupId: 'Group 1',
      //     title: 'Resource B'
      //   },
      //   {
      //     id: '2',
      //     groupId: 'Group 2',
      //     title: 'Resource C'
      //   }
      // ],
  
      resources: function( fetchInfo, successCallback, failureCallback) {
  
        if ( this == null){
          console.info("this is null")
          return
        }
  
        var str = fetchInfo.start.valueOf();
        const adate = new Date(str);
        adate.setDate(adate.getDate() - 30);
        const dateTimeNow = adate.toISOString();
  
        this.resourcePoolService.listResourcePool({ }).subscribe(
          
          data => { this.resourcePools = data },
          error => { 
              console.error(error)
              failureCallback(error)
            },
          () => {
  
            var calRes = new Array();
            // calRes.push(  {
            //   id: '2',
            //   groupId:  'rpool',
            //   title: 'atitle'                  
            // })
            
            this.resourcePools.forEach( function( rp: ResourcePool) {              
                
              if (rp.capacity){
  
                 rp.capacity.resources.forEach( function(rRef: ResourceRef) {  
                  // console.info("this is Resource generated: " + rRef.id +", name= " + rRef.name  )
                  calRes.push(  {
                    id: rRef.id,
                    groupId:  rp.name,
                    title: rRef.name                  
                  })
  
                })
              }
            });  
            // console.info("this is Resource calRes: " + calRes  )
            successCallback(  calRes  )  
          }
        )
      }.bind(this),
  
      events: function(info, successCallback, failureCallback) {
  
        if ( this == null){
          console.info("this is null")
          return
        }
  
        var str = info.start.valueOf();
        const adate = new Date(str);
        adate.setDate(adate.getDate() - 30);
        const dateTimeNow = adate.toISOString();
  
        this.reservationService.listReservation ({ }).subscribe(
          
          data => { this.reservations = data },
          error => { 
              console.error(error)
              failureCallback(error)
            },
          () => {
            var calEvents = new Array();
  
            this.reservations.forEach( function( resrv: Reservation ) {     
              resrv.reservationItem[0].appliedCapacityAmount.resourceCapacityDemand.resources.forEach( function( eventEl: ResourceRef ) {  
                calEvents.push( {
                    title: resrv.name ,
                    extendedProps: resrv ,
                    start: resrv.requestedPeriodStartDateTime,
                    end:  resrv.requestedPeriodEndDateTime,
                    resourceId: eventEl.id
                  });
                }
              )
  
            })
            successCallback( calEvents )  
          }
        )
      }.bind(this)
    };
    currentEvents: EventApi[] = [];
  
    handleCalendarToggle() {
    }
  
    handleWeekendsToggle() {
      const { calendarOptions } = this;
      calendarOptions.weekends = !calendarOptions.weekends;
    }
  
    handleDateSelect(selectInfo: DateSelectArg) {
      // const title = prompt('Please enter a new title for your event');
      // const calendarApi = selectInfo.view.calendar;
  
      // calendarApi.unselect(); // clear date selection
  
      // if (title) {
      //   calendarApi.addEvent({
      //     id: createEventId(),
      //     title,
      //     start: selectInfo.startStr,
      //     end: selectInfo.endStr,
      //     allDay: selectInfo.allDay
      //   });
      // }
    }
  
    handleEventClick(clickInfo: EventClickArg) {
      this.router.navigate([`resources/resource_reservation_update/${clickInfo.event.extendedProps.id}`]); 
    }
  
    handleEvents(events: EventApi[]) {
      this.currentEvents = events;
    }
  
    //------------------------Calendar END

  ngOnInit(): void {
    this.retrieveReservationsList()
  }

  retrieveReservationsList() {
    this.reservationService.listReservation({}).subscribe(
      data => { this.reservations = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.reservations
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'lastUpdate': return new Date(item.lastUpdate).getTime();
            default: return item[property];
          }
        }
      }
    )
  }

  openResourceReservationDeleteDialog(element: Reservation) {
    const dialogRef = this.dialog.open(DeleteResourceReservationComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Reservations list is successfully updated")
          this.retrieveReservationsList()
        }
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
