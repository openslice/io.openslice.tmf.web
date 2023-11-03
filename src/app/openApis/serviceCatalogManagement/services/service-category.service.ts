/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServiceCategory } from '../models/service-category';
import { ServiceCategoryCreate } from '../models/service-category-create';
import { ServiceCategoryUpdate } from '../models/service-category-update';
@Injectable({
  providedIn: 'root',
})
class ServiceCategoryService extends __BaseService {
  static readonly listServiceCategoryPath = '/serviceCatalogManagement/v4/serviceCategory';
  static readonly createServiceCategoryPath = '/serviceCatalogManagement/v4/serviceCategory';
  static readonly retrieveServiceCategoryPath = '/serviceCatalogManagement/v4/serviceCategory/{id}';
  static readonly deleteServiceCategoryPath = '/serviceCatalogManagement/v4/serviceCategory/{id}';
  static readonly patchServiceCategoryPath = '/serviceCatalogManagement/v4/serviceCategory/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ServiceCategory objects
   *
   * This operation list or find ServiceCategory entities
   * @param params The `ServiceCategoryService.ListServiceCategoryParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceCategoryResponse(params: ServiceCategoryService.ListServiceCategoryParams): __Observable<__StrictHttpResponse<Array<ServiceCategory>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServiceCategory>>;
      })
    );
  }
  /**
   * List or find ServiceCategory objects
   *
   * This operation list or find ServiceCategory entities
   * @param params The `ServiceCategoryService.ListServiceCategoryParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceCategory(params: ServiceCategoryService.ListServiceCategoryParams): __Observable<Array<ServiceCategory>> {
    return this.listServiceCategoryResponse(params).pipe(
      __map(_r => _r.body as Array<ServiceCategory>)
    );
  }

  /**
   * Creates a ServiceCategory
   *
   * This operation creates a ServiceCategory entity.
   * @param serviceCategory The ServiceCategory to be created
   * @return OK or Created
   */
  createServiceCategoryResponse(serviceCategory: ServiceCategoryCreate): __Observable<__StrictHttpResponse<ServiceCategory | ServiceCategory>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = serviceCategory;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCategory`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCategory | ServiceCategory>;
      })
    );
  }
  /**
   * Creates a ServiceCategory
   *
   * This operation creates a ServiceCategory entity.
   * @param serviceCategory The ServiceCategory to be created
   * @return OK or Created
   */
  createServiceCategory(serviceCategory: ServiceCategoryCreate): __Observable<ServiceCategory | ServiceCategory> {
    return this.createServiceCategoryResponse(serviceCategory).pipe(
      __map(_r => _r.body as ServiceCategory | ServiceCategory)
    );
  }

  /**
   * Retrieves a ServiceCategory by ID
   *
   * This operation retrieves a ServiceCategory entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceCategoryService.RetrieveServiceCategoryParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceCategory
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceCategoryResponse(params: ServiceCategoryService.RetrieveServiceCategoryParams): __Observable<__StrictHttpResponse<ServiceCategory>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCategory/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCategory>;
      })
    );
  }
  /**
   * Retrieves a ServiceCategory by ID
   *
   * This operation retrieves a ServiceCategory entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceCategoryService.RetrieveServiceCategoryParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceCategory
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceCategory(params: ServiceCategoryService.RetrieveServiceCategoryParams): __Observable<ServiceCategory> {
    return this.retrieveServiceCategoryResponse(params).pipe(
      __map(_r => _r.body as ServiceCategory)
    );
  }

  /**
   * Deletes a ServiceCategory
   *
   * This operation deletes a ServiceCategory entity.
   * @param id Identifier of the ServiceCategory
   */
  deleteServiceCategoryResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCategory/${encodeURIComponent(id)}`,
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
   * Deletes a ServiceCategory
   *
   * This operation deletes a ServiceCategory entity.
   * @param id Identifier of the ServiceCategory
   */
  deleteServiceCategory(id: string): __Observable<null> {
    return this.deleteServiceCategoryResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a ServiceCategory
   *
   * This operation updates partially a ServiceCategory entity.
   * @param params The `ServiceCategoryService.PatchServiceCategoryParams` containing the following parameters:
   *
   * - `serviceCategory`: The ServiceCategory to be updated
   *
   * - `id`: Identifier of the ServiceCategory
   *
   * @return Updated
   */
  patchServiceCategoryResponse(params: ServiceCategoryService.PatchServiceCategoryParams): __Observable<__StrictHttpResponse<ServiceCategory>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serviceCategory;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCategory/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCategory>;
      })
    );
  }
  /**
   * Updates partially a ServiceCategory
   *
   * This operation updates partially a ServiceCategory entity.
   * @param params The `ServiceCategoryService.PatchServiceCategoryParams` containing the following parameters:
   *
   * - `serviceCategory`: The ServiceCategory to be updated
   *
   * - `id`: Identifier of the ServiceCategory
   *
   * @return Updated
   */
  patchServiceCategory(params: ServiceCategoryService.PatchServiceCategoryParams): __Observable<ServiceCategory> {
    return this.patchServiceCategoryResponse(params).pipe(
      __map(_r => _r.body as ServiceCategory)
    );
  }
}

module ServiceCategoryService {

  /**
   * Parameters for listServiceCategory
   */
  export interface ListServiceCategoryParams {

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
   * Parameters for retrieveServiceCategory
   */
  export interface RetrieveServiceCategoryParams {

    /**
     * Identifier of the ServiceCategory
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchServiceCategory
   */
  export interface PatchServiceCategoryParams {

    /**
     * The ServiceCategory to be updated
     */
    serviceCategory: ServiceCategoryUpdate;

    /**
     * Identifier of the ServiceCategory
     */
    id: string;
  }
}

export { ServiceCategoryService }
