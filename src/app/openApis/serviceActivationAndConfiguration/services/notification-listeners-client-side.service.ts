/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { MonitorAttributeValueChangeNotification } from '../models/monitor-attribute-value-change-notification';
import { MonitorCreateNotification } from '../models/monitor-create-notification';
import { MonitorDeleteNotification } from '../models/monitor-delete-notification';
import { MonitorStateChangeNotification } from '../models/monitor-state-change-notification';
import { ServiceAttributeValueChangeNotification } from '../models/service-attribute-value-change-notification';
import { ServiceCreateNotification } from '../models/service-create-notification';
import { ServiceDeleteNotification } from '../models/service-delete-notification';
import { ServiceStateChangeNotification } from '../models/service-state-change-notification';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToMonitorAttributeValueChangeNotificationPath = '/ServiceActivationAndConfiguration/v3/listener/monitorAttributeValueChangeNotification';
  static readonly listenToMonitorCreateNotificationPath = '/ServiceActivationAndConfiguration/v3/listener/monitorCreateNotification';
  static readonly listenToMonitorDeleteNotificationPath = '/ServiceActivationAndConfiguration/v3/listener/monitorDeleteNotification';
  static readonly listenToMonitorStateChangeNotificationPath = '/ServiceActivationAndConfiguration/v3/listener/monitorStateChangeNotification';
  static readonly listenToServiceAttributeValueChangeNotification1Path = '/ServiceActivationAndConfiguration/v3/listener/serviceAttributeValueChangeNotification';
  static readonly listenToServiceCreateNotification1Path = '/ServiceActivationAndConfiguration/v3/listener/serviceCreateNotification';
  static readonly listenToServiceDeleteNotification1Path = '/ServiceActivationAndConfiguration/v3/listener/serviceDeleteNotification';
  static readonly listenToServiceStateChangeNotification1Path = '/ServiceActivationAndConfiguration/v3/listener/serviceStateChangeNotification';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Client listener for entity MonitorAttributeValueChangeNotification
   *
   * Example of a client listener for receiving the notification MonitorAttributeValueChangeNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToMonitorAttributeValueChangeNotificationResponse(body: MonitorAttributeValueChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/listener/monitorAttributeValueChangeNotification`,
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
   * Client listener for entity MonitorAttributeValueChangeNotification
   *
   * Example of a client listener for receiving the notification MonitorAttributeValueChangeNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToMonitorAttributeValueChangeNotification(body: MonitorAttributeValueChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToMonitorAttributeValueChangeNotificationResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity MonitorCreateNotification
   *
   * Example of a client listener for receiving the notification MonitorCreateNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToMonitorCreateNotificationResponse(body: MonitorCreateNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/listener/monitorCreateNotification`,
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
   * Client listener for entity MonitorCreateNotification
   *
   * Example of a client listener for receiving the notification MonitorCreateNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToMonitorCreateNotification(body: MonitorCreateNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToMonitorCreateNotificationResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity MonitorDeleteNotification
   *
   * Example of a client listener for receiving the notification MonitorDeleteNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToMonitorDeleteNotificationResponse(body: MonitorDeleteNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/listener/monitorDeleteNotification`,
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
   * Client listener for entity MonitorDeleteNotification
   *
   * Example of a client listener for receiving the notification MonitorDeleteNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToMonitorDeleteNotification(body: MonitorDeleteNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToMonitorDeleteNotificationResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity MonitorStateChangeNotification
   *
   * Example of a client listener for receiving the notification MonitorStateChangeNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToMonitorStateChangeNotificationResponse(body: MonitorStateChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/listener/monitorStateChangeNotification`,
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
   * Client listener for entity MonitorStateChangeNotification
   *
   * Example of a client listener for receiving the notification MonitorStateChangeNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToMonitorStateChangeNotification(body: MonitorStateChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToMonitorStateChangeNotificationResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceAttributeValueChangeNotification
   *
   * Example of a client listener for receiving the notification ServiceAttributeValueChangeNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceAttributeValueChangeNotification1Response(body: ServiceAttributeValueChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/listener/serviceAttributeValueChangeNotification`,
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
   * Client listener for entity ServiceAttributeValueChangeNotification
   *
   * Example of a client listener for receiving the notification ServiceAttributeValueChangeNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceAttributeValueChangeNotification1(body: ServiceAttributeValueChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceAttributeValueChangeNotification1Response(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceCreateNotification
   *
   * Example of a client listener for receiving the notification ServiceCreateNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceCreateNotification1Response(body: ServiceCreateNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/listener/serviceCreateNotification`,
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
   * Client listener for entity ServiceCreateNotification
   *
   * Example of a client listener for receiving the notification ServiceCreateNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceCreateNotification1(body: ServiceCreateNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCreateNotification1Response(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceDeleteNotification
   *
   * Example of a client listener for receiving the notification ServiceDeleteNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceDeleteNotification1Response(body: ServiceDeleteNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/listener/serviceDeleteNotification`,
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
   * Client listener for entity ServiceDeleteNotification
   *
   * Example of a client listener for receiving the notification ServiceDeleteNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceDeleteNotification1(body: ServiceDeleteNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceDeleteNotification1Response(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ServiceStateChangeNotification
   *
   * Example of a client listener for receiving the notification ServiceStateChangeNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceStateChangeNotification1Response(body: ServiceStateChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/listener/serviceStateChangeNotification`,
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
   * Client listener for entity ServiceStateChangeNotification
   *
   * Example of a client listener for receiving the notification ServiceStateChangeNotification
   * @param body The event data
   * @return OK or Notified
   */
  listenToServiceStateChangeNotification1(body: ServiceStateChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceStateChangeNotification1Response(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
