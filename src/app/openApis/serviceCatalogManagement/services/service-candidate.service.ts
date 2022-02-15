/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServiceCandidate } from '../models/service-candidate';
import { ServiceCandidateCreate } from '../models/service-candidate-create';
import { ServiceCandidateUpdate } from '../models/service-candidate-update';
@Injectable({
  providedIn: 'root',
})
class ServiceCandidateService extends __BaseService {
  static readonly listServiceCandidatePath = '/serviceCatalogManagement/v4/serviceCandidate';
  static readonly createServiceCandidatePath = '/serviceCatalogManagement/v4/serviceCandidate';
  static readonly retrieveServiceCandidatePath = '/serviceCatalogManagement/v4/serviceCandidate/{id}';
  static readonly deleteServiceCandidatePath = '/serviceCatalogManagement/v4/serviceCandidate/{id}';
  static readonly patchServiceCandidatePath = '/serviceCatalogManagement/v4/serviceCandidate/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ServiceCandidate objects
   *
   * This operation list or find ServiceCandidate entities
   * @param params The `ServiceCandidateService.ListServiceCandidateParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceCandidateResponse(params: ServiceCandidateService.ListServiceCandidateParams): __Observable<__StrictHttpResponse<Array<ServiceCandidate>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCandidate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServiceCandidate>>;
      })
    );
  }
  /**
   * List or find ServiceCandidate objects
   *
   * This operation list or find ServiceCandidate entities
   * @param params The `ServiceCandidateService.ListServiceCandidateParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceCandidate(params: ServiceCandidateService.ListServiceCandidateParams): __Observable<Array<ServiceCandidate>> {
    return this.listServiceCandidateResponse(params).pipe(
      __map(_r => _r.body as Array<ServiceCandidate>)
    );
  }

  /**
   * Creates a ServiceCandidate
   *
   * This operation creates a ServiceCandidate entity.
   * @param serviceCandidate The ServiceCandidate to be created
   * @return OK or Created
   */
  createServiceCandidateResponse(serviceCandidate: ServiceCandidateCreate): __Observable<__StrictHttpResponse<ServiceCandidate | ServiceCandidate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = serviceCandidate;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCandidate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCandidate | ServiceCandidate>;
      })
    );
  }
  /**
   * Creates a ServiceCandidate
   *
   * This operation creates a ServiceCandidate entity.
   * @param serviceCandidate The ServiceCandidate to be created
   * @return OK or Created
   */
  createServiceCandidate(serviceCandidate: ServiceCandidateCreate): __Observable<ServiceCandidate | ServiceCandidate> {
    return this.createServiceCandidateResponse(serviceCandidate).pipe(
      __map(_r => _r.body as ServiceCandidate | ServiceCandidate)
    );
  }

  /**
   * Retrieves a ServiceCandidate by ID
   *
   * This operation retrieves a ServiceCandidate entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceCandidateService.RetrieveServiceCandidateParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceCandidate
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceCandidateResponse(params: ServiceCandidateService.RetrieveServiceCandidateParams): __Observable<__StrictHttpResponse<ServiceCandidate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCandidate/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCandidate>;
      })
    );
  }
  /**
   * Retrieves a ServiceCandidate by ID
   *
   * This operation retrieves a ServiceCandidate entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceCandidateService.RetrieveServiceCandidateParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceCandidate
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceCandidate(params: ServiceCandidateService.RetrieveServiceCandidateParams): __Observable<ServiceCandidate> {
    return this.retrieveServiceCandidateResponse(params).pipe(
      __map(_r => _r.body as ServiceCandidate)
    );
  }

  /**
   * Deletes a ServiceCandidate
   *
   * This operation deletes a ServiceCandidate entity.
   * @param id Identifier of the ServiceCandidate
   */
  deleteServiceCandidateResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCandidate/${encodeURIComponent(id)}`,
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
   * Deletes a ServiceCandidate
   *
   * This operation deletes a ServiceCandidate entity.
   * @param id Identifier of the ServiceCandidate
   */
  deleteServiceCandidate(id: string): __Observable<null> {
    return this.deleteServiceCandidateResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a ServiceCandidate
   *
   * This operation updates partially a ServiceCandidate entity.
   * @param params The `ServiceCandidateService.PatchServiceCandidateParams` containing the following parameters:
   *
   * - `serviceCandidate`: The ServiceCandidate to be updated
   *
   * - `id`: Identifier of the ServiceCandidate
   *
   * @return Updated
   */
  patchServiceCandidateResponse(params: ServiceCandidateService.PatchServiceCandidateParams): __Observable<__StrictHttpResponse<ServiceCandidate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serviceCandidate;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceCandidate/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceCandidate>;
      })
    );
  }
  /**
   * Updates partially a ServiceCandidate
   *
   * This operation updates partially a ServiceCandidate entity.
   * @param params The `ServiceCandidateService.PatchServiceCandidateParams` containing the following parameters:
   *
   * - `serviceCandidate`: The ServiceCandidate to be updated
   *
   * - `id`: Identifier of the ServiceCandidate
   *
   * @return Updated
   */
  patchServiceCandidate(params: ServiceCandidateService.PatchServiceCandidateParams): __Observable<ServiceCandidate> {
    return this.patchServiceCandidateResponse(params).pipe(
      __map(_r => _r.body as ServiceCandidate)
    );
  }
}

module ServiceCandidateService {

  /**
   * Parameters for listServiceCandidate
   */
  export interface ListServiceCandidateParams {

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
   * Parameters for retrieveServiceCandidate
   */
  export interface RetrieveServiceCandidateParams {

    /**
     * Identifier of the ServiceCandidate
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchServiceCandidate
   */
  export interface PatchServiceCandidateParams {

    /**
     * The ServiceCandidate to be updated
     */
    serviceCandidate: ServiceCandidateUpdate;

    /**
     * Identifier of the ServiceCandidate
     */
    id: string;
  }
}

export { ServiceCandidateService }
