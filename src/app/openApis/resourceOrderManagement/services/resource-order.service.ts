/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourceOrder } from '../models/resource-order';
import { ResourceOrderCreate } from '../models/resource-order-create';
import { Error } from '../models/error';
import { ResourceOrderUpdate } from '../models/resource-order-update';
@Injectable({
  providedIn: 'root',
})
class ResourceOrderService extends __BaseService {
  static readonly listResourceOrderPath = '/tmf-api/resourceOrderingManagement/v4/resourceOrder';
  static readonly createResourceOrderPath = '/tmf-api/resourceOrderingManagement/v4/resourceOrder';
  static readonly retrieveResourceOrderPath = '/tmf-api/resourceOrderingManagement/v4/resourceOrder/{id}';
  static readonly deleteResourceOrderPath = '/tmf-api/resourceOrderingManagement/v4/resourceOrder/{id}';
  static readonly patchResourceOrderPath = '/tmf-api/resourceOrderingManagement/v4/resourceOrder/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ResourceOrder objects
   *
   * This operation list or find ResourceOrder entities
   * @param params The `ResourceOrderService.ListResourceOrderParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceOrderResponse(params: ResourceOrderService.ListResourceOrderParams): __Observable<__StrictHttpResponse<Array<ResourceOrder>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/resourceOrder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResourceOrder>>;
      })
    );
  }
  /**
   * List or find ResourceOrder objects
   *
   * This operation list or find ResourceOrder entities
   * @param params The `ResourceOrderService.ListResourceOrderParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceOrder(params: ResourceOrderService.ListResourceOrderParams): __Observable<Array<ResourceOrder>> {
    return this.listResourceOrderResponse(params).pipe(
      __map(_r => _r.body as Array<ResourceOrder>)
    );
  }

  /**
   * Creates a ResourceOrder
   *
   * This operation creates a ResourceOrder entity.
   * @param params The `ResourceOrderService.CreateResourceOrderParams` containing the following parameters:
   *
   * - `roCreate`: The ResourceOrder to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createResourceOrderResponse(params: ResourceOrderService.CreateResourceOrderParams): __Observable<__StrictHttpResponse<ResourceOrder | ResourceOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.roCreate;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/resourceOrder`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceOrder | ResourceOrder>;
      })
    );
  }
  /**
   * Creates a ResourceOrder
   *
   * This operation creates a ResourceOrder entity.
   * @param params The `ResourceOrderService.CreateResourceOrderParams` containing the following parameters:
   *
   * - `roCreate`: The ResourceOrder to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createResourceOrder(params: ResourceOrderService.CreateResourceOrderParams): __Observable<ResourceOrder | ResourceOrder> {
    return this.createResourceOrderResponse(params).pipe(
      __map(_r => _r.body as ResourceOrder | ResourceOrder)
    );
  }

  /**
   * Retrieves a ResourceOrder by ID
   *
   * This operation retrieves a ResourceOrder entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceOrderService.RetrieveResourceOrderParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceOrder
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceOrderResponse(params: ResourceOrderService.RetrieveResourceOrderParams): __Observable<__StrictHttpResponse<ResourceOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/resourceOrder/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceOrder>;
      })
    );
  }
  /**
   * Retrieves a ResourceOrder by ID
   *
   * This operation retrieves a ResourceOrder entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceOrderService.RetrieveResourceOrderParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceOrder
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceOrder(params: ResourceOrderService.RetrieveResourceOrderParams): __Observable<ResourceOrder> {
    return this.retrieveResourceOrderResponse(params).pipe(
      __map(_r => _r.body as ResourceOrder)
    );
  }

  /**
   * Deletes a ResourceOrder
   *
   * This operation deletes a ResourceOrder entity.
   * @param id Identifier of the ResourceOrder
   * @return Deleted
   */
  deleteResourceOrderResponse(id: string): __Observable<__StrictHttpResponse<Error>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/resourceOrder/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Error>;
      })
    );
  }
  /**
   * Deletes a ResourceOrder
   *
   * This operation deletes a ResourceOrder entity.
   * @param id Identifier of the ResourceOrder
   * @return Deleted
   */
  deleteResourceOrder(id: string): __Observable<Error> {
    return this.deleteResourceOrderResponse(id).pipe(
      __map(_r => _r.body as Error)
    );
  }

  /**
   * Updates partially a ResourceOrder
   *
   * This operation updates partially a ResourceOrder entity.
   * @param params The `ResourceOrderService.PatchResourceOrderParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceOrder
   *
   * - `body`: The ResourceOrder to be updated
   *
   * @return Updated
   */
  patchResourceOrderResponse(params: ResourceOrderService.PatchResourceOrderParams): __Observable<__StrictHttpResponse<ResourceOrder>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/tmf-api/resourceOrderingManagement/v4/resourceOrder/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceOrder>;
      })
    );
  }
  /**
   * Updates partially a ResourceOrder
   *
   * This operation updates partially a ResourceOrder entity.
   * @param params The `ResourceOrderService.PatchResourceOrderParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceOrder
   *
   * - `body`: The ResourceOrder to be updated
   *
   * @return Updated
   */
  patchResourceOrder(params: ResourceOrderService.PatchResourceOrderParams): __Observable<ResourceOrder> {
    return this.patchResourceOrderResponse(params).pipe(
      __map(_r => _r.body as ResourceOrder)
    );
  }
}

module ResourceOrderService {

  /**
   * Parameters for listResourceOrder
   */
  export interface ListResourceOrderParams {

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
   * Parameters for createResourceOrder
   */
  export interface CreateResourceOrderParams {

    /**
     * The ResourceOrder to be created
     */
    roCreate: ResourceOrderCreate;
    name?: string;
  }

  /**
   * Parameters for retrieveResourceOrder
   */
  export interface RetrieveResourceOrderParams {

    /**
     * Identifier of the ResourceOrder
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchResourceOrder
   */
  export interface PatchResourceOrderParams {

    /**
     * Identifier of the ResourceOrder
     */
    id: string;

    /**
     * The ResourceOrder to be updated
     */
    body: ResourceOrderUpdate;
  }
}

export { ResourceOrderService }
