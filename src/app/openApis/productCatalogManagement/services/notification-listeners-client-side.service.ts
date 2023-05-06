/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { CatalogBatchEvent } from '../models/catalog-batch-event';
import { CatalogCreateEvent } from '../models/catalog-create-event';
import { CatalogDeleteEvent } from '../models/catalog-delete-event';
import { CategoryCreateEvent } from '../models/category-create-event';
import { CategoryDeleteEvent } from '../models/category-delete-event';
import { ProductOfferingAttributeValueChangeEvent } from '../models/product-offering-attribute-value-change-event';
import { ProductOfferingCreateEvent } from '../models/product-offering-create-event';
import { ProductOfferingDeleteEvent } from '../models/product-offering-delete-event';
import { ProductOfferingPriceAttributeValueChangeEvent } from '../models/product-offering-price-attribute-value-change-event';
import { ProductOfferingPriceCreateEvent } from '../models/product-offering-price-create-event';
import { ProductOfferingPriceDeleteEvent } from '../models/product-offering-price-delete-event';
import { ProductOfferingPriceStateChangeEvent } from '../models/product-offering-price-state-change-event';
import { ProductOfferingStateChangeEvent } from '../models/product-offering-state-change-event';
import { ProductSpecificationCreateEvent } from '../models/product-specification-create-event';
import { ProductSpecificationDeleteEvent } from '../models/product-specification-delete-event';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToCatalogBatchEventPath = '/productCatalogManagement/v4/listener/catalogBatchEvent';
  static readonly listenToCatalogCreateEventPath = '/productCatalogManagement/v4/listener/catalogCreateEvent';
  static readonly listenToCatalogDeleteEventPath = '/productCatalogManagement/v4/listener/catalogDeleteEvent';
  static readonly listenToCategoryCreateEventPath = '/productCatalogManagement/v4/listener/categoryCreateEvent';
  static readonly listenToCategoryDeleteEventPath = '/productCatalogManagement/v4/listener/categoryDeleteEvent';
  static readonly listenToProductOfferingAttributeValueChangeEventPath = '/productCatalogManagement/v4/listener/productOfferingAttributeValueChangeEvent';
  static readonly listenToProductOfferingCreateEventPath = '/productCatalogManagement/v4/listener/productOfferingCreateEvent';
  static readonly listenToProductOfferingDeleteEventPath = '/productCatalogManagement/v4/listener/productOfferingDeleteEvent';
  static readonly listenToProductOfferingPriceAttributeValueChangeEventPath = '/productCatalogManagement/v4/listener/productOfferingPriceAttributeValueChangeEvent';
  static readonly listenToProductOfferingPriceCreateEventPath = '/productCatalogManagement/v4/listener/productOfferingPriceCreateEvent';
  static readonly listenToProductOfferingPriceDeleteEventPath = '/productCatalogManagement/v4/listener/productOfferingPriceDeleteEvent';
  static readonly listenToProductOfferingPriceStateChangeEventPath = '/productCatalogManagement/v4/listener/productOfferingPriceStateChangeEvent';
  static readonly listenToProductOfferingStateChangeEventPath = '/productCatalogManagement/v4/listener/productOfferingStateChangeEvent';
  static readonly listenToProductSpecificationCreateEventPath = '/productCatalogManagement/v4/listener/productSpecificationCreateEvent';
  static readonly listenToProductSpecificationDeleteEventPath = '/productCatalogManagement/v4/listener/productSpecificationDeleteEvent';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Client listener for entity CatalogBatchEvent
   *
   * Example of a client listener for receiving the notification CatalogBatchEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCatalogBatchEventResponse(data: CatalogBatchEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/catalogBatchEvent`,
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
   * Client listener for entity CatalogBatchEvent
   *
   * Example of a client listener for receiving the notification CatalogBatchEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCatalogBatchEvent(data: CatalogBatchEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCatalogBatchEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity CatalogCreateEvent
   *
   * Example of a client listener for receiving the notification CatalogCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCatalogCreateEventResponse(data: CatalogCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/catalogCreateEvent`,
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
   * Client listener for entity CatalogCreateEvent
   *
   * Example of a client listener for receiving the notification CatalogCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCatalogCreateEvent(data: CatalogCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCatalogCreateEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity CatalogDeleteEvent
   *
   * Example of a client listener for receiving the notification CatalogDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCatalogDeleteEventResponse(data: CatalogDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/catalogDeleteEvent`,
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
   * Client listener for entity CatalogDeleteEvent
   *
   * Example of a client listener for receiving the notification CatalogDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCatalogDeleteEvent(data: CatalogDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCatalogDeleteEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity CategoryCreateEvent
   *
   * Example of a client listener for receiving the notification CategoryCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCategoryCreateEventResponse(data: CategoryCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/categoryCreateEvent`,
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
   * Client listener for entity CategoryCreateEvent
   *
   * Example of a client listener for receiving the notification CategoryCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCategoryCreateEvent(data: CategoryCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCategoryCreateEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity CategoryDeleteEvent
   *
   * Example of a client listener for receiving the notification CategoryDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCategoryDeleteEventResponse(data: CategoryDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/categoryDeleteEvent`,
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
   * Client listener for entity CategoryDeleteEvent
   *
   * Example of a client listener for receiving the notification CategoryDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToCategoryDeleteEvent(data: CategoryDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToCategoryDeleteEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductOfferingAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingAttributeValueChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingAttributeValueChangeEventResponse(data: ProductOfferingAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productOfferingAttributeValueChangeEvent`,
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
   * Client listener for entity ProductOfferingAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingAttributeValueChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingAttributeValueChangeEvent(data: ProductOfferingAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductOfferingAttributeValueChangeEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductOfferingCreateEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingCreateEventResponse(data: ProductOfferingCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productOfferingCreateEvent`,
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
   * Client listener for entity ProductOfferingCreateEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingCreateEvent(data: ProductOfferingCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductOfferingCreateEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductOfferingDeleteEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingDeleteEventResponse(data: ProductOfferingDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productOfferingDeleteEvent`,
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
   * Client listener for entity ProductOfferingDeleteEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingDeleteEvent(data: ProductOfferingDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductOfferingDeleteEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductOfferingPriceAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingPriceAttributeValueChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingPriceAttributeValueChangeEventResponse(data: ProductOfferingPriceAttributeValueChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productOfferingPriceAttributeValueChangeEvent`,
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
   * Client listener for entity ProductOfferingPriceAttributeValueChangeEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingPriceAttributeValueChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingPriceAttributeValueChangeEvent(data: ProductOfferingPriceAttributeValueChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductOfferingPriceAttributeValueChangeEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductOfferingPriceCreateEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingPriceCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingPriceCreateEventResponse(data: ProductOfferingPriceCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productOfferingPriceCreateEvent`,
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
   * Client listener for entity ProductOfferingPriceCreateEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingPriceCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingPriceCreateEvent(data: ProductOfferingPriceCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductOfferingPriceCreateEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductOfferingPriceDeleteEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingPriceDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingPriceDeleteEventResponse(data: ProductOfferingPriceDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productOfferingPriceDeleteEvent`,
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
   * Client listener for entity ProductOfferingPriceDeleteEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingPriceDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingPriceDeleteEvent(data: ProductOfferingPriceDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductOfferingPriceDeleteEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductOfferingPriceStateChangeEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingPriceStateChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingPriceStateChangeEventResponse(data: ProductOfferingPriceStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productOfferingPriceStateChangeEvent`,
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
   * Client listener for entity ProductOfferingPriceStateChangeEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingPriceStateChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingPriceStateChangeEvent(data: ProductOfferingPriceStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductOfferingPriceStateChangeEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductOfferingStateChangeEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingStateChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingStateChangeEventResponse(data: ProductOfferingStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productOfferingStateChangeEvent`,
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
   * Client listener for entity ProductOfferingStateChangeEvent
   *
   * Example of a client listener for receiving the notification ProductOfferingStateChangeEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductOfferingStateChangeEvent(data: ProductOfferingStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductOfferingStateChangeEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductSpecificationCreateEvent
   *
   * Example of a client listener for receiving the notification ProductSpecificationCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductSpecificationCreateEventResponse(data: ProductSpecificationCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productSpecificationCreateEvent`,
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
   * Client listener for entity ProductSpecificationCreateEvent
   *
   * Example of a client listener for receiving the notification ProductSpecificationCreateEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductSpecificationCreateEvent(data: ProductSpecificationCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductSpecificationCreateEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ProductSpecificationDeleteEvent
   *
   * Example of a client listener for receiving the notification ProductSpecificationDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductSpecificationDeleteEventResponse(data: ProductSpecificationDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = data;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/listener/productSpecificationDeleteEvent`,
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
   * Client listener for entity ProductSpecificationDeleteEvent
   *
   * Example of a client listener for receiving the notification ProductSpecificationDeleteEvent
   * @param data The event data
   * @return OK or Notified
   */
  listenToProductSpecificationDeleteEvent(data: ProductSpecificationDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToProductSpecificationDeleteEventResponse(data).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
