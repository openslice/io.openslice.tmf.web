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
  static readonly listService1Path = '/ServiceActivationAndConfiguration/v3/service';
  static readonly createService1Path = '/ServiceActivationAndConfiguration/v3/service';
  static readonly retrieveService1Path = '/ServiceActivationAndConfiguration/v3/service/{id}';
  static readonly deleteService1Path = '/ServiceActivationAndConfiguration/v3/service/{id}';
  static readonly patchService1Path = '/ServiceActivationAndConfiguration/v3/service/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find Service objects
   *
   * This operation list or find Service entities
   * @param params The `ServiceService.ListService1Params` containing the following parameters:
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
  listService1Response(params: ServiceService.ListService1Params): __Observable<__StrictHttpResponse<Array<Service>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/service`,
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
   * List or find Service objects
   *
   * This operation list or find Service entities
   * @param params The `ServiceService.ListService1Params` containing the following parameters:
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
  listService1(params: ServiceService.ListService1Params): __Observable<Array<Service>> {
    return this.listService1Response(params).pipe(
      __map(_r => _r.body as Array<Service>)
    );
  }

  /**
   * Creates a Service
   *
   * This operation creates a Service entity.
   * @param params The `ServiceService.CreateService1Params` containing the following parameters:
   *
   * - `service`: The Service to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createService1Response(params: ServiceService.CreateService1Params): __Observable<__StrictHttpResponse<Service | Service>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.service;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/service`,
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
   * Creates a Service
   *
   * This operation creates a Service entity.
   * @param params The `ServiceService.CreateService1Params` containing the following parameters:
   *
   * - `service`: The Service to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createService1(params: ServiceService.CreateService1Params): __Observable<Service | Service> {
    return this.createService1Response(params).pipe(
      __map(_r => _r.body as Service | Service)
    );
  }

  /**
   * Retrieves a Service by ID
   *
   * This operation retrieves a Service entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceService.RetrieveService1Params` containing the following parameters:
   *
   * - `id`: Identifier of the Service
   *
   * - `name`:
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveService1Response(params: ServiceService.RetrieveService1Params): __Observable<__StrictHttpResponse<Service>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/service/${encodeURIComponent(params.id)}`,
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
   * Retrieves a Service by ID
   *
   * This operation retrieves a Service entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceService.RetrieveService1Params` containing the following parameters:
   *
   * - `id`: Identifier of the Service
   *
   * - `name`:
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveService1(params: ServiceService.RetrieveService1Params): __Observable<Service> {
    return this.retrieveService1Response(params).pipe(
      __map(_r => _r.body as Service)
    );
  }

  /**
   * Deletes a Service
   *
   * This operation deletes a Service entity.
   * @param id Identifier of the Service
   */
  deleteService1Response(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/service/${encodeURIComponent(id)}`,
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
   * Deletes a Service
   *
   * This operation deletes a Service entity.
   * @param id Identifier of the Service
   */
  deleteService1(id: string): __Observable<null> {
    return this.deleteService1Response(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a Service
   *
   * This operation updates partially a Service entity.
   * @param params The `ServiceService.PatchService1Params` containing the following parameters:
   *
   * - `service`: The Service to be updated
   *
   * - `id`: Identifier of the Service
   *
   * - `name`:
   *
   * @return Updated
   */
  patchService1Response(params: ServiceService.PatchService1Params): __Observable<__StrictHttpResponse<Service>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.service;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/ServiceActivationAndConfiguration/v3/service/${encodeURIComponent(params.id)}`,
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
   * Updates partially a Service
   *
   * This operation updates partially a Service entity.
   * @param params The `ServiceService.PatchService1Params` containing the following parameters:
   *
   * - `service`: The Service to be updated
   *
   * - `id`: Identifier of the Service
   *
   * - `name`:
   *
   * @return Updated
   */
  patchService1(params: ServiceService.PatchService1Params): __Observable<Service> {
    return this.patchService1Response(params).pipe(
      __map(_r => _r.body as Service)
    );
  }
}

module ServiceService {

  /**
   * Parameters for listService1
   */
  export interface ListService1Params {

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
   * Parameters for createService1
   */
  export interface CreateService1Params {

    /**
     * The Service to be created
     */
    service: ServiceCreate;
    name?: string;
  }

  /**
   * Parameters for retrieveService1
   */
  export interface RetrieveService1Params {

    /**
     * Identifier of the Service
     */
    id: string;
    name?: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchService1
   */
  export interface PatchService1Params {

    /**
     * The Service to be updated
     */
    service: ServiceUpdate;

    /**
     * Identifier of the Service
     */
    id: string;
    name?: string;
  }
}

export { ServiceService }
