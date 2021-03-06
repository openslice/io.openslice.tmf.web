/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ActionSpecification } from '../models/action-specification';
import { ActionSpecificationCreate } from '../models/action-specification-create';
import { ActionSpecificationUpdate } from '../models/action-specification-update';
@Injectable({
  providedIn: 'root',
})
class ActionSpecificationService extends __BaseService {
  static readonly listActionSpecificationPath = '/assuranceServicesManagement/v1/actionSpecification';
  static readonly createActionSpecificationPath = '/assuranceServicesManagement/v1/actionSpecification';
  static readonly retrieveActionSpecificationPath = '/assuranceServicesManagement/v1/actionSpecification/{id}';
  static readonly deleteActionSpecificationPath = '/assuranceServicesManagement/v1/actionSpecification/{id}';
  static readonly patchActionSpecificationPath = '/assuranceServicesManagement/v1/actionSpecification/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ActionSpecification objects
   *
   * This operation list or find ActionSpecification entities
   * @param params The `ActionSpecificationService.ListActionSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listActionSpecificationResponse(params: ActionSpecificationService.ListActionSpecificationParams): __Observable<__StrictHttpResponse<Array<ActionSpecification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assuranceServicesManagement/v1/actionSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ActionSpecification>>;
      })
    );
  }
  /**
   * List or find ActionSpecification objects
   *
   * This operation list or find ActionSpecification entities
   * @param params The `ActionSpecificationService.ListActionSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listActionSpecification(params: ActionSpecificationService.ListActionSpecificationParams): __Observable<Array<ActionSpecification>> {
    return this.listActionSpecificationResponse(params).pipe(
      __map(_r => _r.body as Array<ActionSpecification>)
    );
  }

  /**
   * Creates an ActionSpecification
   *
   * This operation creates an ActionSpecification entity.
   * @param body The ActionSpecification to be created
   * @return OK or Created
   */
  createActionSpecificationResponse(body: ActionSpecificationCreate): __Observable<__StrictHttpResponse<ActionSpecification | ActionSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/assuranceServicesManagement/v1/actionSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActionSpecification | ActionSpecification>;
      })
    );
  }
  /**
   * Creates an ActionSpecification
   *
   * This operation creates an ActionSpecification entity.
   * @param body The ActionSpecification to be created
   * @return OK or Created
   */
  createActionSpecification(body: ActionSpecificationCreate): __Observable<ActionSpecification | ActionSpecification> {
    return this.createActionSpecificationResponse(body).pipe(
      __map(_r => _r.body as ActionSpecification | ActionSpecification)
    );
  }

  /**
   * Retrieves an ActionSpecification by ID
   *
   * This operation retrieves an ActionSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ActionSpecificationService.RetrieveActionSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ActionSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * - `allParams`: allParams
   *
   * @return Success
   */
  retrieveActionSpecificationResponse(params: ActionSpecificationService.RetrieveActionSpecificationParams): __Observable<__StrictHttpResponse<ActionSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.allParams != null) __params = __params.set('allParams', params.allParams.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assuranceServicesManagement/v1/actionSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActionSpecification>;
      })
    );
  }
  /**
   * Retrieves an ActionSpecification by ID
   *
   * This operation retrieves an ActionSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ActionSpecificationService.RetrieveActionSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ActionSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * - `allParams`: allParams
   *
   * @return Success
   */
  retrieveActionSpecification(params: ActionSpecificationService.RetrieveActionSpecificationParams): __Observable<ActionSpecification> {
    return this.retrieveActionSpecificationResponse(params).pipe(
      __map(_r => _r.body as ActionSpecification)
    );
  }

  /**
   * Deletes an ActionSpecification
   *
   * This operation deletes a ActionSpecification entity.
   * @param id Identifier of the ActionSpecification
   */
  deleteActionSpecificationResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/assuranceServicesManagement/v1/actionSpecification/${encodeURIComponent(id)}`,
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
   * Deletes an ActionSpecification
   *
   * This operation deletes a ActionSpecification entity.
   * @param id Identifier of the ActionSpecification
   */
  deleteActionSpecification(id: string): __Observable<null> {
    return this.deleteActionSpecificationResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially an ActionSpecification
   *
   * This operation updates partially an ActionSpecification entity.
   * @param params The `ActionSpecificationService.PatchActionSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ActionSpecification
   *
   * - `body`: The ActionSpecification to be updated
   *
   * @return Updated
   */
  patchActionSpecificationResponse(params: ActionSpecificationService.PatchActionSpecificationParams): __Observable<__StrictHttpResponse<ActionSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/assuranceServicesManagement/v1/actionSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ActionSpecification>;
      })
    );
  }
  /**
   * Updates partially an ActionSpecification
   *
   * This operation updates partially an ActionSpecification entity.
   * @param params The `ActionSpecificationService.PatchActionSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ActionSpecification
   *
   * - `body`: The ActionSpecification to be updated
   *
   * @return Updated
   */
  patchActionSpecification(params: ActionSpecificationService.PatchActionSpecificationParams): __Observable<ActionSpecification> {
    return this.patchActionSpecificationResponse(params).pipe(
      __map(_r => _r.body as ActionSpecification)
    );
  }
}

module ActionSpecificationService {

  /**
   * Parameters for listActionSpecification
   */
  export interface ListActionSpecificationParams {

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
   * Parameters for retrieveActionSpecification
   */
  export interface RetrieveActionSpecificationParams {

    /**
     * Identifier of the ActionSpecification
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;

    /**
     * allParams
     */
    allParams?: any;
  }

  /**
   * Parameters for patchActionSpecification
   */
  export interface PatchActionSpecificationParams {

    /**
     * Identifier of the ActionSpecification
     */
    id: string;

    /**
     * The ActionSpecification to be updated
     */
    body: ActionSpecificationUpdate;
  }
}

export { ActionSpecificationService }
