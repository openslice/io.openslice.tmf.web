/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { ResourceAttributeValueChangeEvent } from '../models/resource-attribute-value-change-event';
import { ResourceCreateEvent } from '../models/resource-create-event';
import { ResourceDeleteEvent } from '../models/resource-delete-event';
import { ResourceStateChangeEvent } from '../models/resource-state-change-event';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToResourceAttributeValueChangeEventPath = '/listener/resourceAttributeValueChangeEvent';
  static readonly listenToResourceCreateEventPath = '/listener/resourceCreateEvent';
  static readonly listenToResourceDeleteEventPath = '/listener/resourceDeleteEvent';
  static readonly listenToResourceStateChangeEventPath = '/listener/resourceStateChangeEvent';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Client listener for entity ResourceAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceAttributeValueChangeEventResponse(body: ResourceAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/resourceAttributeValueChangeEvent`,
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
   * Client listener for entity ResourceAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceAttributeValueChangeEvent(body: ResourceAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceAttributeValueChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCreateEventResponse(body: ResourceCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/resourceCreateEvent`,
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
   * Client listener for entity ResourceCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCreateEvent(body: ResourceCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceDeleteEventResponse(body: ResourceDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/resourceDeleteEvent`,
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
   * Client listener for entity ResourceDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceDeleteEvent(body: ResourceDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceStateChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceStateChangeEventResponse(body: ResourceStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/resourceStateChangeEvent`,
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
   * Client listener for entity ResourceStateChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceStateChangeEvent(body: ResourceStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
