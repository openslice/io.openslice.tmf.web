/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { ServiceOrderAttributeValueChangeNotification } from '../models/service-order-attribute-value-change-notification';
import { ServiceOrderCreateNotification } from '../models/service-order-create-notification';
import { ServiceOrderDeleteNotification } from '../models/service-order-delete-notification';
import { ServiceOrderStateChangeNotification } from '../models/service-order-state-change-notification';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToServiceOrderAttributeValueChangeNotificationPath = '/serviceOrdering/v4/listener/serviceOrderAttributeValueChangeNotification';
  static readonly listenToServiceOrderCreateNotificationPath = '/serviceOrdering/v4/listener/serviceOrderCreateNotification';
  static readonly listenToServiceOrderDeleteNotificationPath = '/serviceOrdering/v4/listener/serviceOrderDeleteNotification';
  static readonly listenToServiceOrderStateChangeNotificationPath = '/serviceOrdering/v4/listener/serviceOrderStateChangeNotification';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Example of a client listener for receiving the notification ServiceOrderAttributeValueChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceOrderAttributeValueChangeNotificationResponse(data: ServiceOrderAttributeValueChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceOrdering/v4/listener/serviceOrderAttributeValueChangeNotification`,
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
   * Example of a client listener for receiving the notification ServiceOrderAttributeValueChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceOrderAttributeValueChangeNotification(data: ServiceOrderAttributeValueChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceOrderAttributeValueChangeNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceOrderCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceOrderCreateNotificationResponse(data: ServiceOrderCreateNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceOrdering/v4/listener/serviceOrderCreateNotification`,
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
   * Example of a client listener for receiving the notification ServiceOrderCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceOrderCreateNotification(data: ServiceOrderCreateNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceOrderCreateNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceOrderDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceOrderDeleteNotificationResponse(data: ServiceOrderDeleteNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceOrdering/v4/listener/serviceOrderDeleteNotification`,
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
   * Example of a client listener for receiving the notification ServiceOrderDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceOrderDeleteNotification(data: ServiceOrderDeleteNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceOrderDeleteNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceOrderStateChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceOrderStateChangeNotificationResponse(data: ServiceOrderStateChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceOrdering/v4/listener/serviceOrderStateChangeNotification`,
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
   * Example of a client listener for receiving the notification ServiceOrderStateChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceOrderStateChangeNotification(data: ServiceOrderStateChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceOrderStateChangeNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
