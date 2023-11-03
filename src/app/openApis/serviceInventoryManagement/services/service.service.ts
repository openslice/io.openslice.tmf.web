/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Service } from '../models/service';
import { ServiceCreate } from '../models/service-create';
import { ServiceUpdate } from '../models/service-update';
@Injectable({
  providedIn: 'root',
})
class ServiceService extends __BaseService {
  static readonly listServicePath = '/serviceInventory/v4/service';
  static readonly createServicePath = '/serviceInventory/v4/service';
  static readonly retrieveServicePath = '/serviceInventory/v4/service/{id}';
  static readonly deleteServicePath = '/serviceInventory/v4/service/{id}';
  static readonly patchServicePath = '/serviceInventory/v4/service/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This operation list or find Service entities
   * @param params The `ServiceService.ListServiceParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceResponse(params: ServiceService.ListServiceParams): __Observable<__StrictHttpResponse<Array<Service>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceInventory/v4/service`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Service>>;
      })
    );
  }
  /**
   * This operation list or find Service entities
   * @param params The `ServiceService.ListServiceParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listService(params: ServiceService.ListServiceParams): __Observable<Array<Service>> {
    return this.listServiceResponse(params).pipe(
      __map(_r => _r.body as Array<Service>)
    );
  }

  /**
   * This operation creates a Service entity.
   * @param service The Service to be created
   * @return OK or Created
   */
  createServiceResponse(service: ServiceCreate): __Observable<__StrictHttpResponse<Service | Service>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = service;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceInventory/v4/service`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Service | Service>;
      })
    );
  }
  /**
   * This operation creates a Service entity.
   * @param service The Service to be created
   * @return OK or Created
   */
  createService(service: ServiceCreate): __Observable<Service | Service> {
    return this.createServiceResponse(service).pipe(
      __map(_r => _r.body as Service | Service)
    );
  }

  /**
   * This operation retrieves a Service entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceService.RetrieveServiceParams` containing the following parameters:
   *
   * - `id`: Identifier of the Service
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceResponse(params: ServiceService.RetrieveServiceParams): __Observable<__StrictHttpResponse<Service>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceInventory/v4/service/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Service>;
      })
    );
  }
  /**
   * This operation retrieves a Service entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceService.RetrieveServiceParams` containing the following parameters:
   *
   * - `id`: Identifier of the Service
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveService(params: ServiceService.RetrieveServiceParams): __Observable<Service> {
    return this.retrieveServiceResponse(params).pipe(
      __map(_r => _r.body as Service)
    );
  }

  /**
   * This operation deletes a Service entity.
   * @param id Identifier of the Service
   */
  deleteServiceResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceInventory/v4/service/${id}`,
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
   * This operation deletes a Service entity.
   * @param id Identifier of the Service
   */
  deleteService(id: string): __Observable<null> {
    return this.deleteServiceResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This operation updates partially a Service entity.
   * @param params The `ServiceService.PatchServiceParams` containing the following parameters:
   *
   * - `service`: The Service to be updated
   *
   * - `id`: Identifier of the Service
   *
   * @return Updated
   */
  patchServiceResponse(params: ServiceService.PatchServiceParams): __Observable<__StrictHttpResponse<Service>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.service;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serviceInventory/v4/service/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Service>;
      })
    );
  }
  /**
   * This operation updates partially a Service entity.
   * @param params The `ServiceService.PatchServiceParams` containing the following parameters:
   *
   * - `service`: The Service to be updated
   *
   * - `id`: Identifier of the Service
   *
   * @return Updated
   */
  patchService(params: ServiceService.PatchServiceParams): __Observable<Service> {
    return this.patchServiceResponse(params).pipe(
      __map(_r => _r.body as Service)
    );
  }
}

module ServiceService {

  /**
   * Parameters for listService
   */
  export interface ListServiceParams {

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
   * Parameters for retrieveService
   */
  export interface RetrieveServiceParams {

    /**
     * Identifier of the Service
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchService
   */
  export interface PatchServiceParams {

    /**
     * The Service to be updated
     */
    service: ServiceUpdate;

    /**
     * Identifier of the Service
     */
    id: string;
  }
}

export { ServiceService }
