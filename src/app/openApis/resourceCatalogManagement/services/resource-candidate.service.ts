/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourceCandidate } from '../models/resource-candidate';
import { ResourceCandidateCreate } from '../models/resource-candidate-create';
import { ResourceCandidateUpdate } from '../models/resource-candidate-update';
@Injectable({
  providedIn: 'root',
})
class ResourceCandidateService extends __BaseService {
  static readonly listResourceCandidatePath = '/resourceCatalogManagement/v4/resourceCandidate';
  static readonly createResourceCandidatePath = '/resourceCatalogManagement/v4/resourceCandidate';
  static readonly retrieveResourceCandidatePath = '/resourceCatalogManagement/v4/resourceCandidate/{id}';
  static readonly deleteResourceCandidatePath = '/resourceCatalogManagement/v4/resourceCandidate/{id}';
  static readonly patchResourceCandidatePath = '/resourceCatalogManagement/v4/resourceCandidate/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ResourceCandidate objects
   *
   * This operation list or find ResourceCandidate entities
   * @param params The `ResourceCandidateService.ListResourceCandidateParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceCandidateResponse(params: ResourceCandidateService.ListResourceCandidateParams): __Observable<__StrictHttpResponse<Array<ResourceCandidate>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCandidate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResourceCandidate>>;
      })
    );
  }
  /**
   * List or find ResourceCandidate objects
   *
   * This operation list or find ResourceCandidate entities
   * @param params The `ResourceCandidateService.ListResourceCandidateParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceCandidate(params: ResourceCandidateService.ListResourceCandidateParams): __Observable<Array<ResourceCandidate>> {
    return this.listResourceCandidateResponse(params).pipe(
      __map(_r => _r.body as Array<ResourceCandidate>)
    );
  }

  /**
   * Creates a ResourceCandidate
   *
   * This operation creates a ResourceCandidate entity.
   * @param body The ResourceCandidate to be created
   * @return OK or Created
   */
  createResourceCandidateResponse(body: ResourceCandidateCreate): __Observable<__StrictHttpResponse<ResourceCandidate | ResourceCandidate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCandidate`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCandidate | ResourceCandidate>;
      })
    );
  }
  /**
   * Creates a ResourceCandidate
   *
   * This operation creates a ResourceCandidate entity.
   * @param body The ResourceCandidate to be created
   * @return OK or Created
   */
  createResourceCandidate(body: ResourceCandidateCreate): __Observable<ResourceCandidate | ResourceCandidate> {
    return this.createResourceCandidateResponse(body).pipe(
      __map(_r => _r.body as ResourceCandidate | ResourceCandidate)
    );
  }

  /**
   * Retrieves a ResourceCandidate by ID
   *
   * This operation retrieves a ResourceCandidate entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceCandidateService.RetrieveResourceCandidateParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCandidate
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceCandidateResponse(params: ResourceCandidateService.RetrieveResourceCandidateParams): __Observable<__StrictHttpResponse<ResourceCandidate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCandidate/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCandidate>;
      })
    );
  }
  /**
   * Retrieves a ResourceCandidate by ID
   *
   * This operation retrieves a ResourceCandidate entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceCandidateService.RetrieveResourceCandidateParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCandidate
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceCandidate(params: ResourceCandidateService.RetrieveResourceCandidateParams): __Observable<ResourceCandidate> {
    return this.retrieveResourceCandidateResponse(params).pipe(
      __map(_r => _r.body as ResourceCandidate)
    );
  }

  /**
   * Deletes a ResourceCandidate
   *
   * This operation deletes a ResourceCandidate entity.
   * @param id Identifier of the ResourceCandidate
   * @return Deleted
   */
  deleteResourceCandidateResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCandidate/${encodeURIComponent(id)}`,
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
   * Deletes a ResourceCandidate
   *
   * This operation deletes a ResourceCandidate entity.
   * @param id Identifier of the ResourceCandidate
   * @return Deleted
   */
  deleteResourceCandidate(id: string): __Observable<{}> {
    return this.deleteResourceCandidateResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ResourceCandidate
   *
   * This operation updates partially a ResourceCandidate entity.
   * @param params The `ResourceCandidateService.PatchResourceCandidateParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCandidate
   *
   * - `body`: The ResourceCandidate to be updated
   *
   * @return Updated
   */
  patchResourceCandidateResponse(params: ResourceCandidateService.PatchResourceCandidateParams): __Observable<__StrictHttpResponse<ResourceCandidate>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceCandidate/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceCandidate>;
      })
    );
  }
  /**
   * Updates partially a ResourceCandidate
   *
   * This operation updates partially a ResourceCandidate entity.
   * @param params The `ResourceCandidateService.PatchResourceCandidateParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceCandidate
   *
   * - `body`: The ResourceCandidate to be updated
   *
   * @return Updated
   */
  patchResourceCandidate(params: ResourceCandidateService.PatchResourceCandidateParams): __Observable<ResourceCandidate> {
    return this.patchResourceCandidateResponse(params).pipe(
      __map(_r => _r.body as ResourceCandidate)
    );
  }
}

module ResourceCandidateService {

  /**
   * Parameters for listResourceCandidate
   */
  export interface ListResourceCandidateParams {

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
   * Parameters for retrieveResourceCandidate
   */
  export interface RetrieveResourceCandidateParams {

    /**
     * Identifier of the ResourceCandidate
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchResourceCandidate
   */
  export interface PatchResourceCandidateParams {

    /**
     * Identifier of the ResourceCandidate
     */
    id: string;

    /**
     * The ResourceCandidate to be updated
     */
    body: ResourceCandidateUpdate;
  }
}

export { ResourceCandidateService }
