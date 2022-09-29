/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServiceCatalog } from '../models/service-catalog';
import { ServiceCatalogCreate } from '../models/service-catalog-create';
import { ServiceCatalogUpdate } from '../models/service-catalog-update';
@Injectable({
  providedIn: 'root',
})
class ServiceCatalogService extends __BaseService {
  static readonly listServiceCatalogPath = '/serviceCatalogManagement/v4/serviceCatalog';
  static readonly createServiceCatalogPath = '/serviceCatalogManagement/v4/serviceCatalog';
  static readonly retrieveServiceCatalogPath = '/serviceCatalogManagement/v4/serviceCatalog/{id}';
  static readonly deleteServiceCatalogPath = '/serviceCatalogManagement/v4/serviceCatalog/{id}';
  static readonly patchServiceCatalogPath = '/serviceCatalogManagement/v4/serviceCatalog/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ServiceCatalog objects
   *
   * This operation list or find ServiceCatalog entities
   * @param params The `ServiceCatalogService.ListServiceCatalogParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceCatalogResponse(params: ServiceCatalogService.ListServiceCatalogParams): __Observable<__StrictHttpResponse<Array<ServiceCatalog>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCatalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServiceCatalog>>;
      })
    );
  }
  /**
   * List or find ServiceCatalog objects
   *
   * This operation list or find ServiceCatalog entities
   * @param params The `ServiceCatalogService.ListServiceCatalogParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceCatalog(params: ServiceCatalogService.ListServiceCatalogParams): __Observable<Array<ServiceCatalog>> {
    return this.listServiceCatalogResponse(params).pipe(
      __map(_r => _r.body as Array<ServiceCatalog>)
    );
  }

  /**
   * Creates a ServiceCatalog
   *
   * This operation creates a ServiceCatalog entity.
   * @param serviceCatalog The ServiceCatalog to be created
   * @return OK or Created
   */
  createServiceCatalogResponse(serviceCatalog: ServiceCatalogCreate): __Observable<__StrictHttpResponse<ServiceCatalog | ServiceCatalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = serviceCatalog;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCatalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCatalog | ServiceCatalog>;
      })
    );
  }
  /**
   * Creates a ServiceCatalog
   *
   * This operation creates a ServiceCatalog entity.
   * @param serviceCatalog The ServiceCatalog to be created
   * @return OK or Created
   */
  createServiceCatalog(serviceCatalog: ServiceCatalogCreate): __Observable<ServiceCatalog | ServiceCatalog> {
    return this.createServiceCatalogResponse(serviceCatalog).pipe(
      __map(_r => _r.body as ServiceCatalog | ServiceCatalog)
    );
  }

  /**
   * Retrieves a ServiceCatalog by ID
   *
   * This operation retrieves a ServiceCatalog entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceCatalogService.RetrieveServiceCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceCatalog
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceCatalogResponse(params: ServiceCatalogService.RetrieveServiceCatalogParams): __Observable<__StrictHttpResponse<ServiceCatalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCatalog/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCatalog>;
      })
    );
  }
  /**
   * Retrieves a ServiceCatalog by ID
   *
   * This operation retrieves a ServiceCatalog entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceCatalogService.RetrieveServiceCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceCatalog
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceCatalog(params: ServiceCatalogService.RetrieveServiceCatalogParams): __Observable<ServiceCatalog> {
    return this.retrieveServiceCatalogResponse(params).pipe(
      __map(_r => _r.body as ServiceCatalog)
    );
  }

  /**
   * Deletes a ServiceCatalog
   *
   * This operation deletes a ServiceCatalog entity.
   * @param id Identifier of the ServiceCatalog
   */
  deleteServiceCatalogResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCatalog/${encodeURIComponent(id)}`,
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
   * Deletes a ServiceCatalog
   *
   * This operation deletes a ServiceCatalog entity.
   * @param id Identifier of the ServiceCatalog
   */
  deleteServiceCatalog(id: string): __Observable<null> {
    return this.deleteServiceCatalogResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a ServiceCatalog
   *
   * This operation updates partially a ServiceCatalog entity.
   * @param params The `ServiceCatalogService.PatchServiceCatalogParams` containing the following parameters:
   *
   * - `serviceCatalog`: The ServiceCatalog to be updated
   *
   * - `id`: Identifier of the ServiceCatalog
   *
   * @return Updated
   */
  patchServiceCatalogResponse(params: ServiceCatalogService.PatchServiceCatalogParams): __Observable<__StrictHttpResponse<ServiceCatalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serviceCatalog;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCatalog/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCatalog>;
      })
    );
  }
  /**
   * Updates partially a ServiceCatalog
   *
   * This operation updates partially a ServiceCatalog entity.
   * @param params The `ServiceCatalogService.PatchServiceCatalogParams` containing the following parameters:
   *
   * - `serviceCatalog`: The ServiceCatalog to be updated
   *
   * - `id`: Identifier of the ServiceCatalog
   *
   * @return Updated
   */
  patchServiceCatalog(params: ServiceCatalogService.PatchServiceCatalogParams): __Observable<ServiceCatalog> {
    return this.patchServiceCatalogResponse(params).pipe(
      __map(_r => _r.body as ServiceCatalog)
    );
  }
}

module ServiceCatalogService {

  /**
   * Parameters for listServiceCatalog
   */
  export interface ListServiceCatalogParams {

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
   * Parameters for retrieveServiceCatalog
   */
  export interface RetrieveServiceCatalogParams {

    /**
     * Identifier of the ServiceCatalog
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchServiceCatalog
   */
  export interface PatchServiceCatalogParams {

    /**
     * The ServiceCatalog to be updated
     */
    serviceCatalog: ServiceCatalogUpdate;

    /**
     * Identifier of the ServiceCatalog
     */
    id: string;
  }
}

export { ServiceCatalogService }
