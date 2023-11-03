/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourceCatalog } from '../models/resource-catalog';
import { ResourceCatalogCreate } from '../models/resource-catalog-create';
import { ResourceCatalogUpdate } from '../models/resource-catalog-update';
@Injectable({
  providedIn: 'root',
})
class ResourceCatalogService extends __BaseService {
  static readonly listResourceCatalogPath = '/resourceCatalogManagement/v4/resourceCatalog';
  static readonly createResourceCatalogPath = '/resourceCatalogManagement/v4/resourceCatalog';
  static readonly retrieveResourceCatalogPath = '/resourceCatalogManagement/v4/resourceCatalog/{id}';
  static readonly deleteResourceCatalogPath = '/resourceCatalogManagement/v4/resourceCatalog/{id}';
  static readonly patchResourceCatalogPath = '/resourceCatalogManagement/v4/resourceCatalog/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ResourceCatalog objects
   *
   * This operation list or find ResourceCatalog entities
   * @param params The `ResourceCatalogService.ListResourceCatalogParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceCatalogResponse(params: ResourceCatalogService.ListResourceCatalogParams): __Observable<__StrictHttpResponse<Array<ResourceCatalog>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCatalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResourceCatalog>>;
      })
    );
  }
  /**
   * List or find ResourceCatalog objects
   *
   * This operation list or find ResourceCatalog entities
   * @param params The `ResourceCatalogService.ListResourceCatalogParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceCatalog(params: ResourceCatalogService.ListResourceCatalogParams): __Observable<Array<ResourceCatalog>> {
    return this.listResourceCatalogResponse(params).pipe(
      __map(_r => _r.body as Array<ResourceCatalog>)
    );
  }

  /**
   * Creates a ResourceCatalog
   *
   * This operation creates a ResourceCatalog entity.
   * @param resourceCatalog The Resource Catalog to be created
   * @return OK or Created
   */
  createResourceCatalogResponse(resourceCatalog: ResourceCatalogCreate): __Observable<__StrictHttpResponse<ResourceCatalog | ResourceCatalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = resourceCatalog;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCatalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCatalog | ResourceCatalog>;
      })
    );
  }
  /**
   * Creates a ResourceCatalog
   *
   * This operation creates a ResourceCatalog entity.
   * @param resourceCatalog The Resource Catalog to be created
   * @return OK or Created
   */
  createResourceCatalog(resourceCatalog: ResourceCatalogCreate): __Observable<ResourceCatalog | ResourceCatalog> {
    return this.createResourceCatalogResponse(resourceCatalog).pipe(
      __map(_r => _r.body as ResourceCatalog | ResourceCatalog)
    );
  }

  /**
   * Retrieves a ResourceCatalog by ID
   *
   * This operation retrieves a ResourceCatalog entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceCatalogService.RetrieveResourceCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCatalog
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceCatalogResponse(params: ResourceCatalogService.RetrieveResourceCatalogParams): __Observable<__StrictHttpResponse<ResourceCatalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCatalog/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCatalog>;
      })
    );
  }
  /**
   * Retrieves a ResourceCatalog by ID
   *
   * This operation retrieves a ResourceCatalog entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceCatalogService.RetrieveResourceCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCatalog
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceCatalog(params: ResourceCatalogService.RetrieveResourceCatalogParams): __Observable<ResourceCatalog> {
    return this.retrieveResourceCatalogResponse(params).pipe(
      __map(_r => _r.body as ResourceCatalog)
    );
  }

  /**
   * Deletes a ResourceCatalog
   *
   * This operation deletes a ResourceCatalog entity.
   * @param id Identifier of the ResourceCatalog
   * @return Deleted
   */
  deleteResourceCatalogResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCatalog/${encodeURIComponent(id)}`,
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
   * Deletes a ResourceCatalog
   *
   * This operation deletes a ResourceCatalog entity.
   * @param id Identifier of the ResourceCatalog
   * @return Deleted
   */
  deleteResourceCatalog(id: string): __Observable<{}> {
    return this.deleteResourceCatalogResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ResourceCatalog
   *
   * This operation updates partially a ResourceCatalog entity.
   * @param params The `ResourceCatalogService.PatchResourceCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCatalog
   *
   * - `body`: The ResourceCatalog to be updated
   *
   * @return Updated
   */
  patchResourceCatalogResponse(params: ResourceCatalogService.PatchResourceCatalogParams): __Observable<__StrictHttpResponse<ResourceCatalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCatalog/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCatalog>;
      })
    );
  }
  /**
   * Updates partially a ResourceCatalog
   *
   * This operation updates partially a ResourceCatalog entity.
   * @param params The `ResourceCatalogService.PatchResourceCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCatalog
   *
   * - `body`: The ResourceCatalog to be updated
   *
   * @return Updated
   */
  patchResourceCatalog(params: ResourceCatalogService.PatchResourceCatalogParams): __Observable<ResourceCatalog> {
    return this.patchResourceCatalogResponse(params).pipe(
      __map(_r => _r.body as ResourceCatalog)
    );
  }
}

module ResourceCatalogService {

  /**
   * Parameters for listResourceCatalog
   */
  export interface ListResourceCatalogParams {

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
   * Parameters for retrieveResourceCatalog
   */
  export interface RetrieveResourceCatalogParams {

    /**
     * Identifier of the ResourceCatalog
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchResourceCatalog
   */
  export interface PatchResourceCatalogParams {

    /**
     * Identifier of the ResourceCatalog
     */
    id: string;

    /**
     * The ResourceCatalog to be updated
     */
    body: ResourceCatalogUpdate;
  }
}

export { ResourceCatalogService }
