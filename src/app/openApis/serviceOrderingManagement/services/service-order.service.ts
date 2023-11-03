/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServiceOrder } from '../models/service-order';
import { ServiceOrderCreate } from '../models/service-order-create';
import { ServiceOrderUpdate } from '../models/service-order-update';
@Injectable({
  providedIn: 'root',
})
class ServiceOrderService extends __BaseService {
  static readonly listServiceOrderPath = '/serviceOrdering/v4/serviceOrder';
  static readonly createServiceOrderPath = '/serviceOrdering/v4/serviceOrder';
  static readonly retrieveServiceOrderPath = '/serviceOrdering/v4/serviceOrder/{id}';
  static readonly deleteServiceOrderPath = '/serviceOrdering/v4/serviceOrder/{id}';
  static readonly patchServiceOrderPath = '/serviceOrdering/v4/serviceOrder/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This operation list or find ServiceOrder entities
   * @param params The `ServiceOrderService.ListServiceOrderParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceOrderResponse(params: ServiceOrderService.ListServiceOrderParams): __Observable<__StrictHttpResponse<Array<ServiceOrder>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.starttime != null) __params = __params.set('starttime', params.starttime.toString());
    if (params.endtime != null) __params = __params.set('endtime', params.endtime.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceOrdering/v4/serviceOrder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServiceOrder>>;
      })
    );
  }
  /**
   * This operation list or find ServiceOrder entities
   * @param params The `ServiceOrderService.ListServiceOrderParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceOrder(params: ServiceOrderService.ListServiceOrderParams): __Observable<Array<ServiceOrder>> {
    return this.listServiceOrderResponse(params).pipe(
      __map(_r => _r.body as Array<ServiceOrder>)
    );
  }

  /**
   * This operation creates a ServiceOrder entity.
   * @param serviceOrder The ServiceOrder to be created
   * @return OK or Created
   */
  createServiceOrderResponse(serviceOrder: ServiceOrderCreate): __Observable<__StrictHttpResponse<ServiceOrder | ServiceOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = serviceOrder;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceOrdering/v4/serviceOrder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceOrder | ServiceOrder>;
      })
    );
  }
  /**
   * This operation creates a ServiceOrder entity.
   * @param serviceOrder The ServiceOrder to be created
   * @return OK or Created
   */
  createServiceOrder(serviceOrder: ServiceOrderCreate): __Observable<ServiceOrder | ServiceOrder> {
    return this.createServiceOrderResponse(serviceOrder).pipe(
      __map(_r => _r.body as ServiceOrder | ServiceOrder)
    );
  }

  /**
   * This operation retrieves a ServiceOrder entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceOrderService.RetrieveServiceOrderParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceOrder
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceOrderResponse(params: ServiceOrderService.RetrieveServiceOrderParams): __Observable<__StrictHttpResponse<ServiceOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceOrdering/v4/serviceOrder/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceOrder>;
      })
    );
  }
  /**
   * This operation retrieves a ServiceOrder entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceOrderService.RetrieveServiceOrderParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceOrder
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceOrder(params: ServiceOrderService.RetrieveServiceOrderParams): __Observable<ServiceOrder> {
    return this.retrieveServiceOrderResponse(params).pipe(
      __map(_r => _r.body as ServiceOrder)
    );
  }

  /**
   * This operation deletes a ServiceOrder entity.
   * @param id Identifier of the ServiceOrder
   */
  deleteServiceOrderResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceOrdering/v4/serviceOrder/${id}`,
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
   * This operation deletes a ServiceOrder entity.
   * @param id Identifier of the ServiceOrder
   */
  deleteServiceOrder(id: string): __Observable<null> {
    return this.deleteServiceOrderResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This operation updates partially a ServiceOrder entity.
   * @param params The `ServiceOrderService.PatchServiceOrderParams` containing the following parameters:
   *
   * - `serviceOrder`: The ServiceOrder to be updated
   *
   * - `id`: Identifier of the ServiceOrder
   *
   * @return Updated
   */
  patchServiceOrderResponse(params: ServiceOrderService.PatchServiceOrderParams): __Observable<__StrictHttpResponse<ServiceOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serviceOrder;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serviceOrdering/v4/serviceOrder/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceOrder>;
      })
    );
  }
  /**
   * This operation updates partially a ServiceOrder entity.
   * @param params The `ServiceOrderService.PatchServiceOrderParams` containing the following parameters:
   *
   * - `serviceOrder`: The ServiceOrder to be updated
   *
   * - `id`: Identifier of the ServiceOrder
   *
   * @return Updated
   */
  patchServiceOrder(params: ServiceOrderService.PatchServiceOrderParams): __Observable<ServiceOrder> {
    return this.patchServiceOrderResponse(params).pipe(
      __map(_r => _r.body as ServiceOrder)
    );
  }
}

module ServiceOrderService {

  /**
   * Parameters for listServiceOrder
   */
  export interface ListServiceOrderParams {

    /**
     * Requested index for start of resources to be provided in response
     */
    offset?: number;

    /**
     * Requested number of resources to be provided in response
     */
    limit?: number;

    /**
     * Comma-separated properties to be provided in response
     */
    fields?: string;

    
    /**
     * Requested starttime for start of resources to be provided in response
     */
     starttime?: string;

     
    /**
     * Requested endtime for end of resources to be provided in response
     */
     endtime?: string;
  }

  /**
   * Parameters for retrieveServiceOrder
   */
  export interface RetrieveServiceOrderParams {

    /**
     * Identifier of the ServiceOrder
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchServiceOrder
   */
  export interface PatchServiceOrderParams {

    /**
     * The ServiceOrder to be updated
     */
    serviceOrder: ServiceOrderUpdate;

    /**
     * Identifier of the ServiceOrder
     */
    id: string;
  }
}

export { ServiceOrderService }
