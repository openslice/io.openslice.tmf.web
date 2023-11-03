/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CancelResourceOrder } from '../models/cancel-resource-order';
import { CancelResourceOrderCreate } from '../models/cancel-resource-order-create';
@Injectable({
  providedIn: 'root',
})
class CancelResourceOrderService extends __BaseService {
  static readonly listCancelResourceOrderPath = '/tmf-api/cancelResourceOrder';
  static readonly createCancelResourceOrderPath = '/tmf-api/cancelResourceOrder';
  static readonly retrieveCancelResourceOrderPath = '/tmf-api/cancelResourceOrder/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find CancelResourceOrder objects
   *
   * This operation list or find CancelResourceOrder entities
   * @param params The `CancelResourceOrderService.ListCancelResourceOrderParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listCancelResourceOrderResponse(params: CancelResourceOrderService.ListCancelResourceOrderParams): __Observable<__StrictHttpResponse<Array<CancelResourceOrder>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/tmf-api/cancelResourceOrder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CancelResourceOrder>>;
      })
    );
  }
  /**
   * List or find CancelResourceOrder objects
   *
   * This operation list or find CancelResourceOrder entities
   * @param params The `CancelResourceOrderService.ListCancelResourceOrderParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listCancelResourceOrder(params: CancelResourceOrderService.ListCancelResourceOrderParams): __Observable<Array<CancelResourceOrder>> {
    return this.listCancelResourceOrderResponse(params).pipe(
      __map(_r => _r.body as Array<CancelResourceOrder>)
    );
  }

  /**
   * Creates a CancelResourceOrder
   *
   * This operation creates a CancelResourceOrder entity.
   * @param body The CancelResourceOrder to be created
   * @return OK or Created
   */
  createCancelResourceOrderResponse(body: CancelResourceOrderCreate): __Observable<__StrictHttpResponse<CancelResourceOrder | CancelResourceOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/cancelResourceOrder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CancelResourceOrder | CancelResourceOrder>;
      })
    );
  }
  /**
   * Creates a CancelResourceOrder
   *
   * This operation creates a CancelResourceOrder entity.
   * @param body The CancelResourceOrder to be created
   * @return OK or Created
   */
  createCancelResourceOrder(body: CancelResourceOrderCreate): __Observable<CancelResourceOrder | CancelResourceOrder> {
    return this.createCancelResourceOrderResponse(body).pipe(
      __map(_r => _r.body as CancelResourceOrder | CancelResourceOrder)
    );
  }

  /**
   * Retrieves a CancelResourceOrder by ID
   *
   * This operation retrieves a CancelResourceOrder entity. Attribute selection is enabled for all first level attributes.
   * @param params The `CancelResourceOrderService.RetrieveCancelResourceOrderParams` containing the following parameters:
   *
   * - `id`: Identifier of the CancelResourceOrder
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveCancelResourceOrderResponse(params: CancelResourceOrderService.RetrieveCancelResourceOrderParams): __Observable<__StrictHttpResponse<CancelResourceOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/tmf-api/cancelResourceOrder/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CancelResourceOrder>;
      })
    );
  }
  /**
   * Retrieves a CancelResourceOrder by ID
   *
   * This operation retrieves a CancelResourceOrder entity. Attribute selection is enabled for all first level attributes.
   * @param params The `CancelResourceOrderService.RetrieveCancelResourceOrderParams` containing the following parameters:
   *
   * - `id`: Identifier of the CancelResourceOrder
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveCancelResourceOrder(params: CancelResourceOrderService.RetrieveCancelResourceOrderParams): __Observable<CancelResourceOrder> {
    return this.retrieveCancelResourceOrderResponse(params).pipe(
      __map(_r => _r.body as CancelResourceOrder)
    );
  }
}

module CancelResourceOrderService {

  /**
   * Parameters for listCancelResourceOrder
   */
  export interface ListCancelResourceOrderParams {

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
  }

  /**
   * Parameters for retrieveCancelResourceOrder
   */
  export interface RetrieveCancelResourceOrderParams {

    /**
     * Identifier of the CancelResourceOrder
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { CancelResourceOrderService }
