/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { ServiceCandidateChangeNotification } from '../models/service-candidate-change-notification';
import { ServiceCandidateCreateNotification } from '../models/service-candidate-create-notification';
import { ServiceCandidateDeleteNotification } from '../models/service-candidate-delete-notification';
import { ServiceCatalogBatchNotification } from '../models/service-catalog-batch-notification';
import { ServiceCatalogChangeNotification } from '../models/service-catalog-change-notification';
import { ServiceCatalogCreateNotification } from '../models/service-catalog-create-notification';
import { ServiceCatalogDeleteNotification } from '../models/service-catalog-delete-notification';
import { ServiceCategoryChangeNotification } from '../models/service-category-change-notification';
import { ServiceCategoryCreateNotification } from '../models/service-category-create-notification';
import { ServiceCategoryDeleteNotification } from '../models/service-category-delete-notification';
import { ServiceSpecificationChangeNotification } from '../models/service-specification-change-notification';
import { ServiceSpecificationCreateNotification } from '../models/service-specification-create-notification';
import { ServiceSpecificationDeleteNotification } from '../models/service-specification-delete-notification';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToServiceCandidateChangeNotificationPath = '/listener/serviceCandidateChangeNotification';
  static readonly listenToServiceCandidateCreateNotificationPath = '/listener/serviceCandidateCreateNotification';
  static readonly listenToServiceCandidateDeleteNotificationPath = '/listener/serviceCandidateDeleteNotification';
  static readonly listenToServiceCatalogBatchNotificationPath = '/listener/serviceCatalogBatchNotification';
  static readonly listenToServiceCatalogChangeNotificationPath = '/listener/serviceCatalogChangeNotification';
  static readonly listenToServiceCatalogCreateNotificationPath = '/listener/serviceCatalogCreateNotification';
  static readonly listenToServiceCatalogDeleteNotificationPath = '/listener/serviceCatalogDeleteNotification';
  static readonly listenToServiceCategoryChangeNotificationPath = '/listener/serviceCategoryChangeNotification';
  static readonly listenToServiceCategoryCreateNotificationPath = '/listener/serviceCategoryCreateNotification';
  static readonly listenToServiceCategoryDeleteNotificationPath = '/listener/serviceCategoryDeleteNotification';
  static readonly listenToServiceSpecificationChangeNotificationPath = '/listener/serviceSpecificationChangeNotification';
  static readonly listenToServiceSpecificationCreateNotificationPath = '/listener/serviceSpecificationCreateNotification';
  static readonly listenToServiceSpecificationDeleteNotificationPath = '/listener/serviceSpecificationDeleteNotification';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Example of a client listener for receiving the notification ServiceCandidateChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCandidateChangeNotificationResponse(data: ServiceCandidateChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCandidateChangeNotification`,
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
   * Example of a client listener for receiving the notification ServiceCandidateChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCandidateChangeNotification(data: ServiceCandidateChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCandidateChangeNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCandidateCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCandidateCreateNotificationResponse(data: ServiceCandidateCreateNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCandidateCreateNotification`,
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
   * Example of a client listener for receiving the notification ServiceCandidateCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCandidateCreateNotification(data: ServiceCandidateCreateNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCandidateCreateNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCandidateDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCandidateDeleteNotificationResponse(data: ServiceCandidateDeleteNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCandidateDeleteNotification`,
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
   * Example of a client listener for receiving the notification ServiceCandidateDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCandidateDeleteNotification(data: ServiceCandidateDeleteNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCandidateDeleteNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCatalogBatchNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCatalogBatchNotificationResponse(data: ServiceCatalogBatchNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCatalogBatchNotification`,
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
   * Example of a client listener for receiving the notification ServiceCatalogBatchNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCatalogBatchNotification(data: ServiceCatalogBatchNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCatalogBatchNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCatalogChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCatalogChangeNotificationResponse(data: ServiceCatalogChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCatalogChangeNotification`,
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
   * Example of a client listener for receiving the notification ServiceCatalogChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCatalogChangeNotification(data: ServiceCatalogChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCatalogChangeNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCatalogCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCatalogCreateNotificationResponse(data: ServiceCatalogCreateNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCatalogCreateNotification`,
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
   * Example of a client listener for receiving the notification ServiceCatalogCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCatalogCreateNotification(data: ServiceCatalogCreateNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCatalogCreateNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCatalogDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCatalogDeleteNotificationResponse(data: ServiceCatalogDeleteNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCatalogDeleteNotification`,
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
   * Example of a client listener for receiving the notification ServiceCatalogDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCatalogDeleteNotification(data: ServiceCatalogDeleteNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCatalogDeleteNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCategoryChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCategoryChangeNotificationResponse(data: ServiceCategoryChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCategoryChangeNotification`,
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
   * Example of a client listener for receiving the notification ServiceCategoryChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCategoryChangeNotification(data: ServiceCategoryChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCategoryChangeNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCategoryCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCategoryCreateNotificationResponse(data: ServiceCategoryCreateNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCategoryCreateNotification`,
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
   * Example of a client listener for receiving the notification ServiceCategoryCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCategoryCreateNotification(data: ServiceCategoryCreateNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCategoryCreateNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceCategoryDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCategoryDeleteNotificationResponse(data: ServiceCategoryDeleteNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceCategoryDeleteNotification`,
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
   * Example of a client listener for receiving the notification ServiceCategoryDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceCategoryDeleteNotification(data: ServiceCategoryDeleteNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceCategoryDeleteNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceSpecificationChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceSpecificationChangeNotificationResponse(data: ServiceSpecificationChangeNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceSpecificationChangeNotification`,
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
   * Example of a client listener for receiving the notification ServiceSpecificationChangeNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceSpecificationChangeNotification(data: ServiceSpecificationChangeNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceSpecificationChangeNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceSpecificationCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceSpecificationCreateNotificationResponse(data: ServiceSpecificationCreateNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceSpecificationCreateNotification`,
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
   * Example of a client listener for receiving the notification ServiceSpecificationCreateNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceSpecificationCreateNotification(data: ServiceSpecificationCreateNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceSpecificationCreateNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Example of a client listener for receiving the notification ServiceSpecificationDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceSpecificationDeleteNotificationResponse(data: ServiceSpecificationDeleteNotification): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/listener/serviceSpecificationDeleteNotification`,
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
   * Example of a client listener for receiving the notification ServiceSpecificationDeleteNotification
   * @param data The event data
   * @return OK or Notified
   */
  listenToServiceSpecificationDeleteNotification(data: ServiceSpecificationDeleteNotification): __Observable<EventSubscription | EventSubscription> {
    return this.listenToServiceSpecificationDeleteNotificationResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
