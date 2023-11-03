/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Resource } from '../models/resource';
import { ResourceCreate } from '../models/resource-create';
import { ResourceUpdate } from '../models/resource-update';
@Injectable({
  providedIn: 'root',
})
class ResourceService extends __BaseService {
  static readonly listResourcePath = '/resourceInventoryManagement/v4/resource';
  static readonly createResourcePath = '/resourceInventoryManagement/v4/resource';
  static readonly retrieveResourcePath = '/resourceInventoryManagement/v4/resource/{id}';
  static readonly deleteResourcePath = '/resourceInventoryManagement/v4/resource/{id}';
  static readonly patchResourcePath = '/resourceInventoryManagement/v4/resource/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find Resource objects
   *
   * This operation list or find Resource entities
   * @param params The `ResourceService.ListResourceParams` containing the following parameters:
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
  listResourceResponse(params: ResourceService.ListResourceParams): __Observable<__StrictHttpResponse<Array<Resource>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceInventoryManagement/v4/resource`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Resource>>;
      })
    );
  }
  /**
   * List or find Resource objects
   *
   * This operation list or find Resource entities
   * @param params The `ResourceService.ListResourceParams` containing the following parameters:
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
  listResource(params: ResourceService.ListResourceParams): __Observable<Array<Resource>> {
    return this.listResourceResponse(params).pipe(
      __map(_r => _r.body as Array<Resource>)
    );
  }

  /**
   * Creates a Resource
   *
   * This operation creates a Resource entity.
   * @param params The `ResourceService.CreateResourceParams` containing the following parameters:
   *
   * - `resource`: The Resource to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createResourceResponse(params: ResourceService.CreateResourceParams): __Observable<__StrictHttpResponse<Resource | Resource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.resource;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceInventoryManagement/v4/resource`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Resource | Resource>;
      })
    );
  }
  /**
   * Creates a Resource
   *
   * This operation creates a Resource entity.
   * @param params The `ResourceService.CreateResourceParams` containing the following parameters:
   *
   * - `resource`: The Resource to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createResource(params: ResourceService.CreateResourceParams): __Observable<Resource | Resource> {
    return this.createResourceResponse(params).pipe(
      __map(_r => _r.body as Resource | Resource)
    );
  }

  /**
   * Retrieves a Resource by ID
   *
   * This operation retrieves a Resource entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceService.RetrieveResourceParams` containing the following parameters:
   *
   * - `id`: Identifier of the Resource
   *
   * - `name`:
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceResponse(params: ResourceService.RetrieveResourceParams): __Observable<__StrictHttpResponse<Resource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceInventoryManagement/v4/resource/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Resource>;
      })
    );
  }
  /**
   * Retrieves a Resource by ID
   *
   * This operation retrieves a Resource entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceService.RetrieveResourceParams` containing the following parameters:
   *
   * - `id`: Identifier of the Resource
   *
   * - `name`:
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResource(params: ResourceService.RetrieveResourceParams): __Observable<Resource> {
    return this.retrieveResourceResponse(params).pipe(
      __map(_r => _r.body as Resource)
    );
  }

  /**
   * Deletes a Resource
   *
   * This operation deletes a Resource entity.
   * @param id Identifier of the Resource
   * @return Deleted
   */
  deleteResourceResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/resourceInventoryManagement/v4/resource/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Deletes a Resource
   *
   * This operation deletes a Resource entity.
   * @param id Identifier of the Resource
   * @return Deleted
   */
  deleteResource(id: string): __Observable<{}> {
    return this.deleteResourceResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a Resource
   *
   * This operation updates partially a Resource entity.
   * @param params The `ResourceService.PatchResourceParams` containing the following parameters:
   *
   * - `resource`: The Resource to be updated
   *
   * - `id`: Identifier of the Resource
   *
   * - `name`:
   *
   * @return Updated
   */
  patchResourceResponse(params: ResourceService.PatchResourceParams): __Observable<__StrictHttpResponse<Resource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.resource;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/resourceInventoryManagement/v4/resource/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Resource>;
      })
    );
  }
  /**
   * Updates partially a Resource
   *
   * This operation updates partially a Resource entity.
   * @param params The `ResourceService.PatchResourceParams` containing the following parameters:
   *
   * - `resource`: The Resource to be updated
   *
   * - `id`: Identifier of the Resource
   *
   * - `name`:
   *
   * @return Updated
   */
  patchResource(params: ResourceService.PatchResourceParams): __Observable<Resource> {
    return this.patchResourceResponse(params).pipe(
      __map(_r => _r.body as Resource)
    );
  }
}

module ResourceService {

  /**
   * Parameters for listResource
   */
  export interface ListResourceParams {

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
   * Parameters for createResource
   */
  export interface CreateResourceParams {

    /**
     * The Resource to be created
     */
    resource: ResourceCreate;
    name?: string;
  }

  /**
   * Parameters for retrieveResource
   */
  export interface RetrieveResourceParams {

    /**
     * Identifier of the Resource
     */
    id: string;
    name?: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchResource
   */
  export interface PatchResourceParams {

    /**
     * The Resource to be updated
     */
    resource: ResourceUpdate;

    /**
     * Identifier of the Resource
     */
    id: string;
    name?: string;
  }
}

export { ResourceService }
