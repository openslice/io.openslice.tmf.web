/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServiceTest } from '../models/service-test';
import { ServiceTestCreate } from '../models/service-test-create';
import { ServiceTestUpdate } from '../models/service-test-update';
@Injectable({
  providedIn: 'root',
})
class ServiceTestService extends __BaseService {
  static readonly listServiceTestPath = '/serviceTestManagement/v4/serviceTest';
  static readonly createServiceTestPath = '/serviceTestManagement/v4/serviceTest';
  static readonly retrieveServiceTestPath = '/serviceTestManagement/v4/serviceTest/{id}';
  static readonly deleteServiceTestPath = '/serviceTestManagement/v4/serviceTest/{id}';
  static readonly patchServiceTestPath = '/serviceTestManagement/v4/serviceTest/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ServiceTest objects
   *
   * This operation list or find ServiceTest entities
   * @param params The `ServiceTestService.ListServiceTestParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceTestResponse(params: ServiceTestService.ListServiceTestParams): __Observable<__StrictHttpResponse<Array<ServiceTest>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceTestManagement/v4/serviceTest`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServiceTest>>;
      })
    );
  }
  /**
   * List or find ServiceTest objects
   *
   * This operation list or find ServiceTest entities
   * @param params The `ServiceTestService.ListServiceTestParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceTest(params: ServiceTestService.ListServiceTestParams): __Observable<Array<ServiceTest>> {
    return this.listServiceTestResponse(params).pipe(
      __map(_r => _r.body as Array<ServiceTest>)
    );
  }

  /**
   * Creates a ServiceTest
   *
   * This operation creates a ServiceTest entity.
   * @param serviceTest The ServiceTest to be created
   * @return OK or Created
   */
  createServiceTestResponse(serviceTest: ServiceTestCreate): __Observable<__StrictHttpResponse<ServiceTest | ServiceTest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = serviceTest;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/serviceTest`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceTest | ServiceTest>;
      })
    );
  }
  /**
   * Creates a ServiceTest
   *
   * This operation creates a ServiceTest entity.
   * @param serviceTest The ServiceTest to be created
   * @return OK or Created
   */
  createServiceTest(serviceTest: ServiceTestCreate): __Observable<ServiceTest | ServiceTest> {
    return this.createServiceTestResponse(serviceTest).pipe(
      __map(_r => _r.body as ServiceTest | ServiceTest)
    );
  }

  /**
   * Retrieves a ServiceTest by ID
   *
   * This operation retrieves a ServiceTest entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceTestService.RetrieveServiceTestParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceTest
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceTestResponse(params: ServiceTestService.RetrieveServiceTestParams): __Observable<__StrictHttpResponse<ServiceTest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceTestManagement/v4/serviceTest/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceTest>;
      })
    );
  }
  /**
   * Retrieves a ServiceTest by ID
   *
   * This operation retrieves a ServiceTest entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceTestService.RetrieveServiceTestParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceTest
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceTest(params: ServiceTestService.RetrieveServiceTestParams): __Observable<ServiceTest> {
    return this.retrieveServiceTestResponse(params).pipe(
      __map(_r => _r.body as ServiceTest)
    );
  }

  /**
   * Deletes a ServiceTest
   *
   * This operation deletes a ServiceTest entity.
   * @param id Identifier of the ServiceTest
   * @return Deleted
   */
  deleteServiceTestResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceTestManagement/v4/serviceTest/${encodeURIComponent(id)}`,
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
   * Deletes a ServiceTest
   *
   * This operation deletes a ServiceTest entity.
   * @param id Identifier of the ServiceTest
   * @return Deleted
   */
  deleteServiceTest(id: string): __Observable<{}> {
    return this.deleteServiceTestResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ServiceTest
   *
   * This operation updates partially a ServiceTest entity.
   * @param params The `ServiceTestService.PatchServiceTestParams` containing the following parameters:
   *
   * - `serviceSpecification`: The ServiceTest to be updated
   *
   * - `id`: Identifier of the ServiceTest
   *
   * @return Updated
   */
  patchServiceTestResponse(params: ServiceTestService.PatchServiceTestParams): __Observable<__StrictHttpResponse<ServiceTest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serviceSpecification;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serviceTestManagement/v4/serviceTest/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceTest>;
      })
    );
  }
  /**
   * Updates partially a ServiceTest
   *
   * This operation updates partially a ServiceTest entity.
   * @param params The `ServiceTestService.PatchServiceTestParams` containing the following parameters:
   *
   * - `serviceSpecification`: The ServiceTest to be updated
   *
   * - `id`: Identifier of the ServiceTest
   *
   * @return Updated
   */
  patchServiceTest(params: ServiceTestService.PatchServiceTestParams): __Observable<ServiceTest> {
    return this.patchServiceTestResponse(params).pipe(
      __map(_r => _r.body as ServiceTest)
    );
  }
}

module ServiceTestService {

  /**
   * Parameters for listServiceTest
   */
  export interface ListServiceTestParams {

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
   * Parameters for retrieveServiceTest
   */
  export interface RetrieveServiceTestParams {

    /**
     * Identifier of the ServiceTest
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchServiceTest
   */
  export interface PatchServiceTestParams {

    /**
     * The ServiceTest to be updated
     */
    serviceSpecification: ServiceTestUpdate;

    /**
     * Identifier of the ServiceTest
     */
    id: string;
  }
}

export { ServiceTestService }
