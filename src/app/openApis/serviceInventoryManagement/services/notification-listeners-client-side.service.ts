/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { ServiceAttributeValueChangeNotification } from '../models/service-attribute-value-change-notification';
import { ServiceBatchNotification } from '../models/service-batch-notification';
import { ServiceCreateNotification } from '../models/service-create-notification';
import { ServiceDeleteNotification } from '../models/service-delete-notification';
import { ServiceStateChangeNotification } from '../models/service-state-change-notification';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToServiceAttributeValueChangeNotificationPath = '/serviceInventory/v4/listener/serviceAttributeValueChangeNotification';
  static readonly listenToServiceBatchNotificationPath = '/serviceInventory/v4/listener/serviceBatchNotification';
  static readonly listenToServiceCreateNotificationPath = '/serviceInventory/v4/listener/serviceCreateNotification';
  static readonly listenToServiceDeleteNotificationPath = '/serviceInventory/v4/listener/serviceDeleteNotification';
  static readonly listenToServiceStateChangeNotificationPath = '/serviceInventory/v4/listener/serviceStateChangeNotification';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Example of a client listener for receiving the notification ServiceAttributeValueChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceAttributeValueChangeNotificationResponse(data: ServiceAttributeValueChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceInventory/v4/listener/serviceAttributeValueChangeNotification`,
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
   * Example of a client listener for receiving the notification ServiceAttributeValueChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceAttributeValueChangeNotification(data: ServiceAttributeValueChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceAttributeValueChangeNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceBatchNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceBatchNotificationResponse(data: ServiceBatchNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceInventory/v4/listener/serviceBatchNotification`,
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
   * Example of a client listener for receiving the notification ServiceBatchNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceBatchNotification(data: ServiceBatchNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceBatchNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCreateNotificationResponse(data: ServiceCreateNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceInventory/v4/listener/serviceCreateNotification`,
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
   * Example of a client listener for receiving the notification ServiceCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCreateNotification(data: ServiceCreateNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCreateNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceDeleteNotificationResponse(data: ServiceDeleteNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceInventory/v4/listener/serviceDeleteNotification`,
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
   * Example of a client listener for receiving the notification ServiceDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceDeleteNotification(data: ServiceDeleteNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceDeleteNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceStateChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceStateChangeNotificationResponse(data: ServiceStateChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceInventory/v4/listener/serviceStateChangeNotification`,
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
   * Example of a client listener for receiving the notification ServiceStateChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceStateChangeNotification(data: ServiceStateChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceStateChangeNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
