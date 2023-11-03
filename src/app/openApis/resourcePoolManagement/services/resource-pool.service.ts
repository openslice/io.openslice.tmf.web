/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourcePool } from '../models/resource-pool';
import { ResourcePoolCreate } from '../models/resource-pool-create';
import { Error } from '../models/error';
import { ResourcePoolUpdate } from '../models/resource-pool-update';
@Injectable({
  providedIn: 'root',
})
class ResourcePoolService extends __BaseService {
  static readonly listResourcePoolPath = '/resourcePoolManagement/v1/resourcePool';
  static readonly createResourcePoolPath = '/resourcePoolManagement/v1/resourcePool';
  static readonly retrieveResourcePoolPath = '/resourcePoolManagement/v1/resourcePool/{id}';
  static readonly deleteResourcePoolPath = '/resourcePoolManagement/v1/resourcePool/{id}';
  static readonly patchResourcePoolPath = '/resourcePoolManagement/v1/resourcePool/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ResourcePool objects
   *
   * This operation list or find ResourcePool entities
   * @param params The `ResourcePoolService.ListResourcePoolParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `name`:
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourcePoolResponse(params: ResourcePoolService.ListResourcePoolParams): __Observable<__StrictHttpResponse<Array<ResourcePool>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourcePoolManagement/v1/resourcePool`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResourcePool>>;
      })
    );
  }
  /**
   * List or find ResourcePool objects
   *
   * This operation list or find ResourcePool entities
   * @param params The `ResourcePoolService.ListResourcePoolParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `name`:
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourcePool(params: ResourcePoolService.ListResourcePoolParams): __Observable<Array<ResourcePool>> {
    return this.listResourcePoolResponse(params).pipe(
      __map(_r => _r.body as Array<ResourcePool>)
    );
  }

  /**
   * Creates a 'ResourcePool'
   * @param params The `ResourcePoolService.CreateResourcePoolParams` containing the following parameters:
   *
   * - `body`: The Resource Pool to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createResourcePoolResponse(params: ResourcePoolService.CreateResourcePoolParams): __Observable<__StrictHttpResponse<ResourcePool | ResourcePool>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.body;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourcePoolManagement/v1/resourcePool`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcePool | ResourcePool>;
      })
    );
  }
  /**
   * Creates a 'ResourcePool'
   * @param params The `ResourcePoolService.CreateResourcePoolParams` containing the following parameters:
   *
   * - `body`: The Resource Pool to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createResourcePool(params: ResourcePoolService.CreateResourcePoolParams): __Observable<ResourcePool | ResourcePool> {
    return this.createResourcePoolResponse(params).pipe(
      __map(_r => _r.body as ResourcePool | ResourcePool)
    );
  }

  /**
   * Retrieves a ResourcePool by ID
   *
   * This operation retrieves a ResourcePool entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourcePoolService.RetrieveResourcePoolParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourcePool
   *
   * - `name`:
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourcePoolResponse(params: ResourcePoolService.RetrieveResourcePoolParams): __Observable<__StrictHttpResponse<ResourcePool>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourcePoolManagement/v1/resourcePool/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcePool>;
      })
    );
  }
  /**
   * Retrieves a ResourcePool by ID
   *
   * This operation retrieves a ResourcePool entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourcePoolService.RetrieveResourcePoolParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourcePool
   *
   * - `name`:
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourcePool(params: ResourcePoolService.RetrieveResourcePoolParams): __Observable<ResourcePool> {
    return this.retrieveResourcePoolResponse(params).pipe(
      __map(_r => _r.body as ResourcePool)
    );
  }

  /**
   * Deletes a 'ResourcePool' by Id
   * @param params The `ResourcePoolService.DeleteResourcePoolParams` containing the following parameters:
   *
   * - `id`: Identifier of the Resource Pool
   *
   * - `name`:
   *
   * @return Deleted
   */
  deleteResourcePoolResponse(params: ResourcePoolService.DeleteResourcePoolParams): __Observable<__StrictHttpResponse<Error>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/resourcePoolManagement/v1/resourcePool/${encodeURIComponent(params.id)}`,
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
   * Deletes a 'ResourcePool' by Id
   * @param params The `ResourcePoolService.DeleteResourcePoolParams` containing the following parameters:
   *
   * - `id`: Identifier of the Resource Pool
   *
   * - `name`:
   *
   * @return Deleted
   */
  deleteResourcePool(params: ResourcePoolService.DeleteResourcePoolParams): __Observable<Error> {
    return this.deleteResourcePoolResponse(params).pipe(
      __map(_r => _r.body as Error)
    );
  }

  /**
   * Updates partially a 'ResourcePool' by Id
   * @param params The `ResourcePoolService.PatchResourcePoolParams` containing the following parameters:
   *
   * - `id`: Identifier of the Resource Pool
   *
   * - `body`: The Resource Pool to be updated
   *
   * - `name`:
   *
   * @return Updated
   */
  patchResourcePoolResponse(params: ResourcePoolService.PatchResourcePoolParams): __Observable<__StrictHttpResponse<ResourcePool>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/resourcePoolManagement/v1/resourcePool/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcePool>;
      })
    );
  }
  /**
   * Updates partially a 'ResourcePool' by Id
   * @param params The `ResourcePoolService.PatchResourcePoolParams` containing the following parameters:
   *
   * - `id`: Identifier of the Resource Pool
   *
   * - `body`: The Resource Pool to be updated
   *
   * - `name`:
   *
   * @return Updated
   */
  patchResourcePool(params: ResourcePoolService.PatchResourcePoolParams): __Observable<ResourcePool> {
    return this.patchResourcePoolResponse(params).pipe(
      __map(_r => _r.body as ResourcePool)
    );
  }
}

module ResourcePoolService {

  /**
   * Parameters for listResourcePool
   */
  export interface ListResourcePoolParams {

    /**
     * Requested index for start of resources to be provided in response
     */
    offset?: number;
    name?: string;

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
   * Parameters for createResourcePool
   */
  export interface CreateResourcePoolParams {

    /**
     * The Resource Pool to be created
     */
    body: ResourcePoolCreate;
    name?: string;
  }

  /**
   * Parameters for retrieveResourcePool
   */
  export interface RetrieveResourcePoolParams {

    /**
     * Identifier of the ResourcePool
     */
    id: string;
    name?: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for deleteResourcePool
   */
  export interface DeleteResourcePoolParams {

    /**
     * Identifier of the Resource Pool
     */
    id: string;
    name?: string;
  }

  /**
   * Parameters for patchResourcePool
   */
  export interface PatchResourcePoolParams {

    /**
     * Identifier of the Resource Pool
     */
    id: string;

    /**
     * The Resource Pool to be updated
     */
    body: ResourcePoolUpdate;
    name?: string;
  }
}

export { ResourcePoolService }
