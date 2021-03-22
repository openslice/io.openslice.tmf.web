import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedAlarmService {

  constructor() { }

  returnSeverityIconClass(severity: "critical"|"major"|"minor"|"warning"|"indeterminate"|"cleared") {
    let cssClass = 'mr-2 fa-lg '
    switch (severity) {
      case 'critical':
        cssClass += 'fas fa-arrow-alt-circle-up major_alarm_color'
        break;
      case 'major':
        cssClass += 'fas fa-chevron-circle-up major_alarm_color'
        break;
      case 'minor':
        cssClass += 'fas fa-chevron-circle-down cleared_alarm_color'
        break;
      case 'warning':
        cssClass += 'fas fa-arrow-alt-circle-down cleared_alarm_color'
        break;  
      case 'cleared':
        cssClass += 'far fa-check-circle cleared_alarm_color'
        break;
      default:
        cssClass += 'fas fa-minus-circle indeterminate_alarm_color'
        break;
    }
    return cssClass
  }

  returnStateIconClass(state: "raised"|"updated"|"cleared") {
    let cssClass = 'mr-1 '
    switch (state) {
      case 'raised':
        cssClass += 'far fa-bell major_alarm_color'
        break;
      case 'updated':
        cssClass += 'fas fa-pencil-alt minor_alarm_color'
        break;
      case 'cleared':
        cssClass += 'fas fa-check-double cleared_alarm_color'
        break;
      default:
        cssClass += 'fas fa-minus indeterminate_alarm_color'
        break;
    }
    return cssClass
  }
}
