/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { EventSubscriptionInput } from '../models/event-subscription-input';
@Injectable({
  providedIn: 'root',
})
class EventsSubscriptionService extends __BaseService {
  static readonly registerListenerPath = '/hub';
  static readonly unregisterListenerPath = '/hub/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   * @param data Data containing the callback endpoint to deliver the information
   * @return OK or Subscribed
   */
  registerListenerResponse(data: EventSubscriptionInput): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/hub`,
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
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   * @param data Data containing the callback endpoint to deliver the information
   * @return OK or Subscribed
   */
  registerListener(data: EventSubscriptionInput): __Observable<EventSubscription | EventSubscription> {
    return this.registerListenerResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   * @param id The id of the registered listener
   */
  unregisterListenerResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/hub/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   * @param id The id of the registered listener
   */
  unregisterListener(id: string): __Observable<null> {
    return this.unregisterListenerResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module EventsSubscriptionService {
}

export { EventsSubscriptionService }
