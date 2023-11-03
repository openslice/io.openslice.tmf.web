/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourceCategory } from '../models/resource-category';
import { ResourceCategoryCreate } from '../models/resource-category-create';
import { ResourceCategoryUpdate } from '../models/resource-category-update';
@Injectable({
  providedIn: 'root',
})
class ResourceCategoryService extends __BaseService {
  static readonly listResourceCategoryPath = '/resourceCatalogManagement/v4/resourceCategory';
  static readonly createResourceCategoryPath = '/resourceCatalogManagement/v4/resourceCategory';
  static readonly retrieveResourceCategoryPath = '/resourceCatalogManagement/v4/resourceCategory/{id}';
  static readonly deleteResourceCategoryPath = '/resourceCatalogManagement/v4/resourceCategory/{id}';
  static readonly patchResourceCategoryPath = '/resourceCatalogManagement/v4/resourceCategory/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ResourceCategory objects
   *
   * This operation list or find ResourceCategory entities
   * @param params The `ResourceCategoryService.ListResourceCategoryParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceCategoryResponse(params: ResourceCategoryService.ListResourceCategoryParams): __Observable<__StrictHttpResponse<Array<ResourceCategory>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResourceCategory>>;
      })
    );
  }
  /**
   * List or find ResourceCategory objects
   *
   * This operation list or find ResourceCategory entities
   * @param params The `ResourceCategoryService.ListResourceCategoryParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceCategory(params: ResourceCategoryService.ListResourceCategoryParams): __Observable<Array<ResourceCategory>> {
    return this.listResourceCategoryResponse(params).pipe(
      __map(_r => _r.body as Array<ResourceCategory>)
    );
  }

  /**
   * Creates a ResourceCategory
   *
   * This operation creates a ResourceCategory entity.
   * @param resCategory The ServiceCategory to be created
   * @return OK or Created
   */
  createResourceCategoryResponse(resCategory: ResourceCategoryCreate): __Observable<__StrictHttpResponse<ResourceCategory | ResourceCategory>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = resCategory;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCategory | ResourceCategory>;
      })
    );
  }
  /**
   * Creates a ResourceCategory
   *
   * This operation creates a ResourceCategory entity.
   * @param resCategory The ServiceCategory to be created
   * @return OK or Created
   */
  createResourceCategory(resCategory: ResourceCategoryCreate): __Observable<ResourceCategory | ResourceCategory> {
    return this.createResourceCategoryResponse(resCategory).pipe(
      __map(_r => _r.body as ResourceCategory | ResourceCategory)
    );
  }

  /**
   * Retrieves a ResourceCategory by ID
   *
   * This operation retrieves a ResourceCategory entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceCategoryService.RetrieveResourceCategoryParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCategory
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceCategoryResponse(params: ResourceCategoryService.RetrieveResourceCategoryParams): __Observable<__StrictHttpResponse<ResourceCategory>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCategory/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCategory>;
      })
    );
  }
  /**
   * Retrieves a ResourceCategory by ID
   *
   * This operation retrieves a ResourceCategory entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceCategoryService.RetrieveResourceCategoryParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCategory
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceCategory(params: ResourceCategoryService.RetrieveResourceCategoryParams): __Observable<ResourceCategory> {
    return this.retrieveResourceCategoryResponse(params).pipe(
      __map(_r => _r.body as ResourceCategory)
    );
  }

  /**
   * Deletes a ResourceCategory
   *
   * This operation deletes a ResourceCategory entity.
   * @param id Identifier of the Resource Category
   * @return Deleted
   */
  deleteResourceCategoryResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCategory/${encodeURIComponent(id)}`,
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
   * Deletes a ResourceCategory
   *
   * This operation deletes a ResourceCategory entity.
   * @param id Identifier of the Resource Category
   * @return Deleted
   */
  deleteResourceCategory(id: string): __Observable<{}> {
    return this.deleteResourceCategoryResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ResourceCategory
   *
   * This operation updates partially a ResourceCategory entity.
   * @param params The `ResourceCategoryService.PatchResourceCategoryParams` containing the following parameters:
   *
   * - `resourceCategory`: The ResourceCategory to be updated
   *
   * - `id`: Identifier of the ResourceCategory
   *
   * @return Updated
   */
  patchResourceCategoryResponse(params: ResourceCategoryService.PatchResourceCategoryParams): __Observable<__StrictHttpResponse<ResourceCategory>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.resourceCategory;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCategory/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCategory>;
      })
    );
  }
  /**
   * Updates partially a ResourceCategory
   *
   * This operation updates partially a ResourceCategory entity.
   * @param params The `ResourceCategoryService.PatchResourceCategoryParams` containing the following parameters:
   *
   * - `resourceCategory`: The ResourceCategory to be updated
   *
   * - `id`: Identifier of the ResourceCategory
   *
   * @return Updated
   */
  patchResourceCategory(params: ResourceCategoryService.PatchResourceCategoryParams): __Observable<ResourceCategory> {
    return this.patchResourceCategoryResponse(params).pipe(
      __map(_r => _r.body as ResourceCategory)
    );
  }
}

module ResourceCategoryService {

  /**
   * Parameters for listResourceCategory
   */
  export interface ListResourceCategoryParams {

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
   * Parameters for retrieveResourceCategory
   */
  export interface RetrieveResourceCategoryParams {

    /**
     * Identifier of the ResourceCategory
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchResourceCategory
   */
  export interface PatchResourceCategoryParams {

    /**
     * The ResourceCategory to be updated
     */
    resourceCategory: ResourceCategoryUpdate;

    /**
     * Identifier of the ResourceCategory
     */
    id: string;
  }
}

export { ResourceCategoryService }
