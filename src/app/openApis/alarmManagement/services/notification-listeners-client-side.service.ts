/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { AckAlarmsCreateEvent } from '../models/ack-alarms-create-event';
import { AckAlarmsStateChangeEvent } from '../models/ack-alarms-state-change-event';
import { AlarmAttributeValueChangeEvent } from '../models/alarm-attribute-value-change-event';
import { AlarmCreateEvent } from '../models/alarm-create-event';
import { AlarmDeleteEvent } from '../models/alarm-delete-event';
import { AlarmStateChangeEvent } from '../models/alarm-state-change-event';
import { ClearAlarmsCreateEvent } from '../models/clear-alarms-create-event';
import { ClearAlarmsStateChangeEvent } from '../models/clear-alarms-state-change-event';
import { CommentAlarmsCreateEvent } from '../models/comment-alarms-create-event';
import { CommentAlarmsStateChangeEvent } from '../models/comment-alarms-state-change-event';
import { GroupAlarmsCreateEvent } from '../models/group-alarms-create-event';
import { GroupAlarmsStateChangeEvent } from '../models/group-alarms-state-change-event';
import { UnAckAlarmsCreateEvent } from '../models/un-ack-alarms-create-event';
import { UnAckAlarmsStateChangeEvent } from '../models/un-ack-alarms-state-change-event';
import { UnGroupAlarmsCreateEvent } from '../models/un-group-alarms-create-event';
import { UnGroupAlarmsStateChangeEvent } from '../models/un-group-alarms-state-change-event';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToAckAlarmsCreateEventPath = '/listener/ackAlarmsCreateEvent';
  static readonly listenToAckAlarmsStateChangeEventPath = '/listener/ackAlarmsStateChangeEvent';
  static readonly listenToAlarmAttributeValueChangeEventPath = '/listener/alarmAttributeValueChangeEvent';
  static readonly listenToAlarmCreateEventPath = '/listener/alarmCreateEvent';
  static readonly listenToAlarmDeleteEventPath = '/listener/alarmDeleteEvent';
  static readonly listenToAlarmStateChangeEventPath = '/listener/alarmStateChangeEvent';
  static readonly listenToClearAlarmsCreateEventPath = '/listener/clearAlarmsCreateEvent';
  static readonly listenToClearAlarmsStateChangeEventPath = '/listener/clearAlarmsStateChangeEvent';
  static readonly listenToCommentAlarmsCreateEventPath = '/listener/commentAlarmsCreateEvent';
  static readonly listenToCommentAlarmsStateChangeEventPath = '/listener/commentAlarmsStateChangeEvent';
  static readonly listenToGroupAlarmsCreateEventPath = '/listener/groupAlarmsCreateEvent';
  static readonly listenToGroupAlarmsStateChangeEventPath = '/listener/groupAlarmsStateChangeEvent';
  static readonly listenToUnAckAlarmsCreateEventPath = '/listener/unAckAlarmsCreateEvent';
  static readonly listenToUnAckAlarmsStateChangeEventPath = '/listener/unAckAlarmsStateChangeEvent';
  static readonly listenToUnGroupAlarmsCreateEventPath = '/listener/unGroupAlarmsCreateEvent';
  static readonly listenToUnGroupAlarmsStateChangeEventPath = '/listener/unGroupAlarmsStateChangeEvent';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Client listener for entity AckAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification AckAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAckAlarmsCreateEventResponse(body: AckAlarmsCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/ackAlarmsCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity AckAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification AckAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAckAlarmsCreateEvent(body: AckAlarmsCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToAckAlarmsCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity AckAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification AckAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAckAlarmsStateChangeEventResponse(body: AckAlarmsStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/ackAlarmsStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity AckAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification AckAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAckAlarmsStateChangeEvent(body: AckAlarmsStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToAckAlarmsStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity AlarmAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification AlarmAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAlarmAttributeValueChangeEventResponse(body: AlarmAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/alarmAttributeValueChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity AlarmAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification AlarmAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAlarmAttributeValueChangeEvent(body: AlarmAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToAlarmAttributeValueChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity AlarmCreateEvent
   *
   * Example of a client listener for receiving the notification AlarmCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAlarmCreateEventResponse(body: AlarmCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/alarmCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity AlarmCreateEvent
   *
   * Example of a client listener for receiving the notification AlarmCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAlarmCreateEvent(body: AlarmCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToAlarmCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity AlarmDeleteEvent
   *
   * Example of a client listener for receiving the notification AlarmDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAlarmDeleteEventResponse(body: AlarmDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/alarmDeleteEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity AlarmDeleteEvent
   *
   * Example of a client listener for receiving the notification AlarmDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAlarmDeleteEvent(body: AlarmDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToAlarmDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity AlarmStateChangeEvent
   *
   * Example of a client listener for receiving the notification AlarmStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAlarmStateChangeEventResponse(body: AlarmStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/alarmStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity AlarmStateChangeEvent
   *
   * Example of a client listener for receiving the notification AlarmStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToAlarmStateChangeEvent(body: AlarmStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToAlarmStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ClearAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification ClearAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToClearAlarmsCreateEventResponse(body: ClearAlarmsCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/clearAlarmsCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ClearAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification ClearAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToClearAlarmsCreateEvent(body: ClearAlarmsCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToClearAlarmsCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ClearAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification ClearAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToClearAlarmsStateChangeEventResponse(body: ClearAlarmsStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/clearAlarmsStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ClearAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification ClearAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToClearAlarmsStateChangeEvent(body: ClearAlarmsStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToClearAlarmsStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity CommentAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification CommentAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCommentAlarmsCreateEventResponse(body: CommentAlarmsCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/commentAlarmsCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity CommentAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification CommentAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCommentAlarmsCreateEvent(body: CommentAlarmsCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCommentAlarmsCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity CommentAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification CommentAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCommentAlarmsStateChangeEventResponse(body: CommentAlarmsStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/commentAlarmsStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity CommentAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification CommentAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCommentAlarmsStateChangeEvent(body: CommentAlarmsStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCommentAlarmsStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity GroupAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification GroupAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToGroupAlarmsCreateEventResponse(body: GroupAlarmsCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/groupAlarmsCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity GroupAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification GroupAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToGroupAlarmsCreateEvent(body: GroupAlarmsCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToGroupAlarmsCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity GroupAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification GroupAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToGroupAlarmsStateChangeEventResponse(body: GroupAlarmsStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/groupAlarmsStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity GroupAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification GroupAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToGroupAlarmsStateChangeEvent(body: GroupAlarmsStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToGroupAlarmsStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity UnAckAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification UnAckAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToUnAckAlarmsCreateEventResponse(body: UnAckAlarmsCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/unAckAlarmsCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity UnAckAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification UnAckAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToUnAckAlarmsCreateEvent(body: UnAckAlarmsCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToUnAckAlarmsCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity UnAckAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification UnAckAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToUnAckAlarmsStateChangeEventResponse(body: UnAckAlarmsStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/unAckAlarmsStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity UnAckAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification UnAckAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToUnAckAlarmsStateChangeEvent(body: UnAckAlarmsStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToUnAckAlarmsStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity UnGroupAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification UnGroupAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToUnGroupAlarmsCreateEventResponse(body: UnGroupAlarmsCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/unGroupAlarmsCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity UnGroupAlarmsCreateEvent
   *
   * Example of a client listener for receiving the notification UnGroupAlarmsCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToUnGroupAlarmsCreateEvent(body: UnGroupAlarmsCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToUnGroupAlarmsCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity UnGroupAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification UnGroupAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToUnGroupAlarmsStateChangeEventResponse(body: UnGroupAlarmsStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/unGroupAlarmsStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity UnGroupAlarmsStateChangeEvent
   *
   * Example of a client listener for receiving the notification UnGroupAlarmsStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToUnGroupAlarmsStateChangeEvent(body: UnGroupAlarmsStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToUnGroupAlarmsStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
