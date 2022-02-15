/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { IndividualAttributeValueChangeEvent } from '../models/individual-attribute-value-change-event';
import { IndividualCreateEvent } from '../models/individual-create-event';
import { IndividualDeleteEvent } from '../models/individual-delete-event';
import { IndividualStateChangeEvent } from '../models/individual-state-change-event';
import { OrganizationAttributeValueChangeEvent } from '../models/organization-attribute-value-change-event';
import { OrganizationCreateEvent } from '../models/organization-create-event';
import { OrganizationDeleteEvent } from '../models/organization-delete-event';
import { OrganizationStateChangeEvent } from '../models/organization-state-change-event';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToIndividualAttributeValueChangeEventPath = '/party/v4/listener/individualAttributeValueChangeEvent';
  static readonly listenToIndividualCreateEventPath = '/party/v4/listener/individualCreateEvent';
  static readonly listenToIndividualDeleteEventPath = '/party/v4/listener/individualDeleteEvent';
  static readonly listenToIndividualStateChangeEventPath = '/party/v4/listener/individualStateChangeEvent';
  static readonly listenToOrganizationAttributeValueChangeEventPath = '/party/v4/listener/organizationAttributeValueChangeEvent';
  static readonly listenToOrganizationCreateEventPath = '/party/v4/listener/organizationCreateEvent';
  static readonly listenToOrganizationDeleteEventPath = '/party/v4/listener/organizationDeleteEvent';
  static readonly listenToOrganizationStateChangeEventPath = '/party/v4/listener/organizationStateChangeEvent';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Client listener for entity IndividualAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification IndividualAttributeValueChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToIndividualAttributeValueChangeEventResponse(data: IndividualAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/listener/individualAttributeValueChangeEvent`,
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
   * Client listener for entity IndividualAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification IndividualAttributeValueChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToIndividualAttributeValueChangeEvent(data: IndividualAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToIndividualAttributeValueChangeEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity IndividualCreateEvent
   *
   * Example of a client listener for receiving the notification IndividualCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToIndividualCreateEventResponse(data: IndividualCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/listener/individualCreateEvent`,
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
   * Client listener for entity IndividualCreateEvent
   *
   * Example of a client listener for receiving the notification IndividualCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToIndividualCreateEvent(data: IndividualCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToIndividualCreateEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity IndividualDeleteEvent
   *
   * Example of a client listener for receiving the notification IndividualDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToIndividualDeleteEventResponse(data: IndividualDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/listener/individualDeleteEvent`,
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
   * Client listener for entity IndividualDeleteEvent
   *
   * Example of a client listener for receiving the notification IndividualDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToIndividualDeleteEvent(data: IndividualDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToIndividualDeleteEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity IndividualStateChangeEvent
   *
   * Example of a client listener for receiving the notification IndividualStateChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToIndividualStateChangeEventResponse(data: IndividualStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/listener/individualStateChangeEvent`,
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
   * Client listener for entity IndividualStateChangeEvent
   *
   * Example of a client listener for receiving the notification IndividualStateChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToIndividualStateChangeEvent(data: IndividualStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToIndividualStateChangeEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity OrganizationAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification OrganizationAttributeValueChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToOrganizationAttributeValueChangeEventResponse(data: OrganizationAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/listener/organizationAttributeValueChangeEvent`,
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
   * Client listener for entity OrganizationAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification OrganizationAttributeValueChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToOrganizationAttributeValueChangeEvent(data: OrganizationAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToOrganizationAttributeValueChangeEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity OrganizationCreateEvent
   *
   * Example of a client listener for receiving the notification OrganizationCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToOrganizationCreateEventResponse(data: OrganizationCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/listener/organizationCreateEvent`,
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
   * Client listener for entity OrganizationCreateEvent
   *
   * Example of a client listener for receiving the notification OrganizationCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToOrganizationCreateEvent(data: OrganizationCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToOrganizationCreateEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity OrganizationDeleteEvent
   *
   * Example of a client listener for receiving the notification OrganizationDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToOrganizationDeleteEventResponse(data: OrganizationDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/listener/organizationDeleteEvent`,
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
   * Client listener for entity OrganizationDeleteEvent
   *
   * Example of a client listener for receiving the notification OrganizationDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToOrganizationDeleteEvent(data: OrganizationDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToOrganizationDeleteEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity OrganizationStateChangeEvent
   *
   * Example of a client listener for receiving the notification OrganizationStateChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToOrganizationStateChangeEventResponse(data: OrganizationStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/listener/organizationStateChangeEvent`,
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
   * Client listener for entity OrganizationStateChangeEvent
   *
   * Example of a client listener for receiving the notification OrganizationStateChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToOrganizationStateChangeEvent(data: OrganizationStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToOrganizationStateChangeEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
