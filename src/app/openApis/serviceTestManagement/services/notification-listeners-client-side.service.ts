/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { ServiceTestAttributeValueChangeEvent } from '../models/service-test-attribute-value-change-event';
import { ServiceTestCreateEvent } from '../models/service-test-create-event';
import { ServiceTestDeleteEvent } from '../models/service-test-delete-event';
import { ServiceTestSpecificationAttributeValueChangeEvent } from '../models/service-test-specification-attribute-value-change-event';
import { ServiceTestSpecificationCreateEvent } from '../models/service-test-specification-create-event';
import { ServiceTestSpecificationDeleteEvent } from '../models/service-test-specification-delete-event';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToServiceTestAttributeValueChangeEventPath = '/serviceTestManagement/v4/listener/serviceTestAttributeValueChangeEvent';
  static readonly listenToServiceTestCreateEventPath = '/serviceTestManagement/v4/listener/serviceTestCreateEvent';
  static readonly listenToServiceTestDeleteEventPath = '/serviceTestManagement/v4/listener/serviceTestDeleteEvent';
  static readonly listenToServiceTestSpecificationAttributeValueChangeEventPath = '/serviceTestManagement/v4/listener/serviceTestSpecificationAttributeValueChangeEvent';
  static readonly listenToServiceTestSpecificationCreateEventPath = '/serviceTestManagement/v4/listener/serviceTestSpecificationCreateEvent';
  static readonly listenToServiceTestSpecificationDeleteEventPath = '/serviceTestManagement/v4/listener/serviceTestSpecificationDeleteEvent';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Client listener for entity ServiceTestAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ServiceTestAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestAttributeValueChangeEventResponse(body: ServiceTestAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/listener/serviceTestAttributeValueChangeEvent`,
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
   * Client listener for entity ServiceTestAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ServiceTestAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestAttributeValueChangeEvent(body: ServiceTestAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceTestAttributeValueChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceTestCreateEvent
   *
   * Example of a client listener for receiving the notification ServiceTestCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestCreateEventResponse(body: ServiceTestCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/listener/serviceTestCreateEvent`,
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
   * Client listener for entity ServiceTestCreateEvent
   *
   * Example of a client listener for receiving the notification ServiceTestCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestCreateEvent(body: ServiceTestCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceTestCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceTestDeleteEvent
   *
   * Example of a client listener for receiving the notification ServiceTestDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestDeleteEventResponse(body: ServiceTestDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/listener/serviceTestDeleteEvent`,
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
   * Client listener for entity ServiceTestDeleteEvent
   *
   * Example of a client listener for receiving the notification ServiceTestDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestDeleteEvent(body: ServiceTestDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceTestDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceTestSpecificationAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ServiceTestSpecificationAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestSpecificationAttributeValueChangeEventResponse(body: ServiceTestSpecificationAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/listener/serviceTestSpecificationAttributeValueChangeEvent`,
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
   * Client listener for entity ServiceTestSpecificationAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ServiceTestSpecificationAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestSpecificationAttributeValueChangeEvent(body: ServiceTestSpecificationAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceTestSpecificationAttributeValueChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceTestSpecificationCreateEvent
   *
   * Example of a client listener for receiving the notification ServiceTestSpecificationCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestSpecificationCreateEventResponse(body: ServiceTestSpecificationCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/listener/serviceTestSpecificationCreateEvent`,
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
   * Client listener for entity ServiceTestSpecificationCreateEvent
   *
   * Example of a client listener for receiving the notification ServiceTestSpecificationCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestSpecificationCreateEvent(body: ServiceTestSpecificationCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceTestSpecificationCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceTestSpecificationDeleteEvent
   *
   * Example of a client listener for receiving the notification ServiceTestSpecificationDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestSpecificationDeleteEventResponse(body: ServiceTestSpecificationDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/listener/serviceTestSpecificationDeleteEvent`,
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
   * Client listener for entity ServiceTestSpecificationDeleteEvent
   *
   * Example of a client listener for receiving the notification ServiceTestSpecificationDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceTestSpecificationDeleteEvent(body: ServiceTestSpecificationDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceTestSpecificationDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
