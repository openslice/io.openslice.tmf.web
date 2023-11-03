import { Router } from '@angular/router';
import { startWith } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceOrder } from 'src/app/openApis/serviceOrderingManagement/models';
import { ServiceOrderService } from 'src/app/openApis/serviceOrderingManagement/services';

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { formatDate } from '@angular/common';

@Component({
    selector: 'service-order-calendar',
    templateUrl: './service-order-calendar.component.html',
    styleUrls: ['./service-order-calendar.component.scss']
  })
export class ServiceOrdersCalendarComponent implements OnInit {

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

      this.serviceOrder.listServiceOrder({ starttime: `${dateTimeNow}` }).subscribe(
        
      //this.serviceOrder.listServiceOrder({  }).subscribe(
        data => { this.serviceOrders = data },
        error => { 
            console.error(error)
            failureCallback(error)
          },
        () => {
          successCallback(
            Array.prototype.slice.call( // convert to array
            this.serviceOrders
            ).map(function(eventEl: ServiceOrder) {
              
              console.info("this is event: " + eventEl.id +" " + eventEl.requestedStartDate )
              // var result = new Date(eventEl.startDate);
              // var evd = result.toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
              
              return {
                title: eventEl.id ,
                start: eventEl.startDate,
                end:  eventEl.expectedCompletionDate
              }
            })
          )  
          
        }
      )

    }.bind(this)
  
  };
  currentEvents: EventApi[] = [];


  constructor(
    private serviceOrder: ServiceOrderService,
    private router: Router
  ) { }


  serviceOrders: ServiceOrder[]
  dataSource  = new MatTableDataSource<ServiceOrder>()

  retrieveOrderList() {
    this.serviceOrder.listServiceOrder({}).subscribe(
      data => { this.serviceOrders = data },
      error => { console.error(error) },
      () => {
        
        
      }
    )
  }


  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
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
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove();
    // }

    ///services/service_order/{{element.id}}
    this.router.navigate([`services/service_order/${clickInfo.event.title}`]); 


  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }



  
    ngOnInit() {
       
    

      }


}