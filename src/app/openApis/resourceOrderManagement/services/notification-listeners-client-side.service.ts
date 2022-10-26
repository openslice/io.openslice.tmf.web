/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { CancelResourceOrderCreateEvent } from '../models/cancel-resource-order-create-event';
import { CancelResourceOrderInformationRequiredEvent } from '../models/cancel-resource-order-information-required-event';
import { CancelResourceOrderStateChangeEvent } from '../models/cancel-resource-order-state-change-event';
import { ResourceOrderAttributeValueChangeEvent } from '../models/resource-order-attribute-value-change-event';
import { ResourceOrderCreateEvent } from '../models/resource-order-create-event';
import { ResourceOrderDeleteEvent } from '../models/resource-order-delete-event';
import { ResourceOrderInformationRequiredEvent } from '../models/resource-order-information-required-event';
import { ResourceOrderStateChangeEvent } from '../models/resource-order-state-change-event';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToCancelResourceOrderCreateEventPath = '/tmf-api/resourceOrderingManagement/v4/listener/cancelResourceOrderCreateEvent';
  static readonly listenToCancelResourceOrderInformationRequiredEventPath = '/tmf-api/resourceOrderingManagement/v4/listener/cancelResourceOrderInformationRequiredEvent';
  static readonly listenToCancelResourceOrderStateChangeEventPath = '/tmf-api/resourceOrderingManagement/v4/listener/cancelResourceOrderStateChangeEvent';
  static readonly listenToResourceOrderAttributeValueChangeEventPath = '/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderAttributeValueChangeEvent';
  static readonly listenToResourceOrderCreateEventPath = '/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderCreateEvent';
  static readonly listenToResourceOrderDeleteEventPath = '/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderDeleteEvent';
  static readonly listenToResourceOrderInformationRequiredEventPath = '/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderInformationRequiredEvent';
  static readonly listenToResourceOrderStateChangeEventPath = '/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderStateChangeEvent';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Client listener for entity CancelResourceOrderCreateEvent
   *
   * Example of a client listener for receiving the notification CancelResourceOrderCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCancelResourceOrderCreateEventResponse(body: CancelResourceOrderCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/listener/cancelResourceOrderCreateEvent`,
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
   * Client listener for entity CancelResourceOrderCreateEvent
   *
   * Example of a client listener for receiving the notification CancelResourceOrderCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCancelResourceOrderCreateEvent(body: CancelResourceOrderCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCancelResourceOrderCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity CancelResourceOrderInformationRequiredEvent
   *
   * Example of a client listener for receiving the notification CancelResourceOrderInformationRequiredEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCancelResourceOrderInformationRequiredEventResponse(body: CancelResourceOrderInformationRequiredEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/listener/cancelResourceOrderInformationRequiredEvent`,
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
   * Client listener for entity CancelResourceOrderInformationRequiredEvent
   *
   * Example of a client listener for receiving the notification CancelResourceOrderInformationRequiredEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCancelResourceOrderInformationRequiredEvent(body: CancelResourceOrderInformationRequiredEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCancelResourceOrderInformationRequiredEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity CancelResourceOrderStateChangeEvent
   *
   * Example of a client listener for receiving the notification CancelResourceOrderStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCancelResourceOrderStateChangeEventResponse(body: CancelResourceOrderStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/listener/cancelResourceOrderStateChangeEvent`,
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
   * Client listener for entity CancelResourceOrderStateChangeEvent
   *
   * Example of a client listener for receiving the notification CancelResourceOrderStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToCancelResourceOrderStateChangeEvent(body: CancelResourceOrderStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCancelResourceOrderStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceOrderAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderAttributeValueChangeEventResponse(body: ResourceOrderAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderAttributeValueChangeEvent`,
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
   * Client listener for entity ResourceOrderAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderAttributeValueChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderAttributeValueChangeEvent(body: ResourceOrderAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceOrderAttributeValueChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceOrderCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderCreateEventResponse(body: ResourceOrderCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderCreateEvent`,
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
   * Client listener for entity ResourceOrderCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderCreateEvent(body: ResourceOrderCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceOrderCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceOrderDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderDeleteEventResponse(body: ResourceOrderDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderDeleteEvent`,
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
   * Client listener for entity ResourceOrderDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderDeleteEvent(body: ResourceOrderDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceOrderDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceOrderInformationRequiredEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderInformationRequiredEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderInformationRequiredEventResponse(body: ResourceOrderInformationRequiredEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderInformationRequiredEvent`,
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
   * Client listener for entity ResourceOrderInformationRequiredEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderInformationRequiredEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderInformationRequiredEvent(body: ResourceOrderInformationRequiredEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceOrderInformationRequiredEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceOrderStateChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderStateChangeEventResponse(body: ResourceOrderStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/listener/resourceOrderStateChangeEvent`,
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
   * Client listener for entity ResourceOrderStateChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceOrderStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceOrderStateChangeEvent(body: ResourceOrderStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceOrderStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
