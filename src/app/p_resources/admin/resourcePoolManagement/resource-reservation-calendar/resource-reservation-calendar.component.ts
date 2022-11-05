import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Reservation } from '../../../../openApis/resourcePoolManagement/models/reservation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { ReservationService, ResourcePoolService } from 'src/app/openApis/resourcePoolManagement/services';
import { EditResourcePoolComponent } from '../edit-resource-pool/edit-resource-pool.component';
import { DeleteResourcePoolComponent } from '../delete-resource-pool/delete-resource-pool.component';
import { ResourcePool } from 'src/app/openApis/resourcePoolManagement/models';
import { AppService } from 'src/app/shared/services/app.service';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { ResourceRef } from 'src/app/openApis/serviceOrderingManagement/models';

@Component({
    selector: 'resource-reservation-calendar',
    templateUrl: './resource-reservation-calendar.component.html',
    styleUrls: ['./resource-reservation-calendar.component.scss']
  })
export class ResourceReservationCalendarComponent implements OnInit {

  

  constructor(
    private reservationService: ReservationService, 
    public dialog: MatDialog, 
    public appService: AppService,
    private router: Router
    ) { }


  reservations: Reservation[]
  resourcePools: ResourcePool[]
  dataSource  = new MatTableDataSource<Reservation>()

  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
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
          successCallback(
            Array.prototype.slice.call( // convert to array
            this.reservations
            ).map(function(eventEl: Reservation) {
              
              console.info("this is event: " + eventEl.id +" " + eventEl.requestedPeriodStartDateTime  )
              // var result = new Date(eventEl.startDate);
              // var evd = result.toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
              
              return {
                title: eventEl.name ,
                start: eventEl.requestedPeriodStartDateTime,
                end:  eventEl.requestedPeriodEndDateTime
              }
            })
          )  
          
        }
      )

    }.bind(this)



  };
  currentEvents: EventApi[] = [];



  

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {

  }

  handleEventClick(clickInfo: EventClickArg) {
    this.router.navigate([`resources/resource_reservation_update/${clickInfo.event.title}`]); 
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }



  
    ngOnInit() {
       
    
      }


}