/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LCMRuleSpecification } from '../models/lcmrule-specification';
import { LCMRuleSpecificationCreate } from '../models/lcmrule-specification-create';
import { LCMRuleSpecificationUpdate } from '../models/lcmrule-specification-update';
@Injectable({
  providedIn: 'root',
})
class LcmRuleSpecificationService extends __BaseService {
  static readonly listLCMRuleSpecificationPath = '/lcmrulesmanagement/v1/lcmRuleSpecification';
  static readonly listLCMRuleSpecificationByServiceSpecIdPath = '/lcmrulesmanagement/v1/lcmRuleSpecification/serviceSpec/{id}';
  static readonly createLCMRuleSpecificationPath = '/lcmrulesmanagement/v1/lcmRuleSpecification';
  static readonly retrieveLCMRuleSpecificationPath = '/lcmrulesmanagement/v1/lcmRuleSpecification/{id}';
  static readonly deleteLCMRuleSpecificationPath = '/lcmrulesmanagement/v1/lcmRuleSpecification/{id}';
  static readonly patchLCMRuleSpecificationPath = '/lcmrulesmanagement/v1/lcmRuleSpecification/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find LCM RuleSpecification objects
   *
   * This operation list or find LCM RuleSpecification entities
   * @param params The `LcmRuleSpecificationService.ListLCMRuleSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listLCMRuleSpecificationResponse(params: LcmRuleSpecificationService.ListLCMRuleSpecificationParams): __Observable<__StrictHttpResponse<Array<LCMRuleSpecification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lcmrulesmanagement/v1/lcmRuleSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LCMRuleSpecification>>;
      })
    );
  }
  /**
   * List or find LCM RuleSpecification objects
   *
   * This operation list or find LCM RuleSpecification entities
   * @param params The `LcmRuleSpecificationService.ListLCMRuleSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listLCMRuleSpecification(params: LcmRuleSpecificationService.ListLCMRuleSpecificationParams): __Observable<Array<LCMRuleSpecification>> {
    return this.listLCMRuleSpecificationResponse(params).pipe(
      __map(_r => _r.body as Array<LCMRuleSpecification>)
    );
  }


  /**
   * List or find LCM RuleSpecification objects
   *
   * This operation list or find LCM RuleSpecification entities
   * @param params The `LcmRuleSpecificationService.ListLCMRuleSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
   listLCMRuleSpecificationByServiceSpecIdResponse(params: LcmRuleSpecificationService.ListLCMRuleSpecificationByServiceSpecIDParams): __Observable<__StrictHttpResponse<Array<LCMRuleSpecification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lcmrulesmanagement/v1/lcmRuleSpecification/serviceSpec/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LCMRuleSpecification>>;
      })
    );
  }
  /**
   * List or find LCM RuleSpecification objects
   *
   * This operation list or find LCM RuleSpecification entities
   * @param params The `LcmRuleSpecificationService.ListLCMRuleSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listLCMRuleSpecificationByServiceSpecId(params: LcmRuleSpecificationService.ListLCMRuleSpecificationByServiceSpecIDParams): __Observable<Array<LCMRuleSpecification>> {
    return this.listLCMRuleSpecificationByServiceSpecIdResponse(params).pipe(
      __map(_r => _r.body as Array<LCMRuleSpecification>)
    );
  }



  /**
   * Creates a LCM RuleSpecification
   *
   * This operation creates a LCM RuleSpecification entity.
   * @param body The RuleSpecification to be created
   * @return OK or Created
   */
  createLCMRuleSpecificationResponse(body: LCMRuleSpecificationCreate): __Observable<__StrictHttpResponse<LCMRuleSpecification | LCMRuleSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/lcmrulesmanagement/v1/lcmRuleSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LCMRuleSpecification | LCMRuleSpecification>;
      })
    );
  }
  /**
   * Creates a LCM RuleSpecification
   *
   * This operation creates a LCM RuleSpecification entity.
   * @param body The RuleSpecification to be created
   * @return OK or Created
   */
  createLCMRuleSpecification(body: LCMRuleSpecificationCreate): __Observable<LCMRuleSpecification | LCMRuleSpecification> {
    return this.createLCMRuleSpecificationResponse(body).pipe(
      __map(_r => _r.body as LCMRuleSpecification | LCMRuleSpecification)
    );
  }

  /**
   * Retrieves a LCM RuleSpecification by ID
   *
   * This operation retrieves a LCM RuleSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `LcmRuleSpecificationService.RetrieveLCMRuleSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the LCM RuleSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveLCMRuleSpecificationResponse(params: LcmRuleSpecificationService.RetrieveLCMRuleSpecificationParams): __Observable<__StrictHttpResponse<LCMRuleSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/lcmrulesmanagement/v1/lcmRuleSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LCMRuleSpecification>;
      })
    );
  }
  /**
   * Retrieves a LCM RuleSpecification by ID
   *
   * This operation retrieves a LCM RuleSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `LcmRuleSpecificationService.RetrieveLCMRuleSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the LCM RuleSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveLCMRuleSpecification(params: LcmRuleSpecificationService.RetrieveLCMRuleSpecificationParams): __Observable<LCMRuleSpecification> {
    return this.retrieveLCMRuleSpecificationResponse(params).pipe(
      __map(_r => _r.body as LCMRuleSpecification)
    );
  }

  /**
   * Deletes a LCM RuleSpecification
   *
   * This operation deletes a LCM RuleSpecification entity.
   * @param id Identifier of the RuleSpecification
   * @return Deleted
   */
  deleteLCMRuleSpecificationResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/lcmrulesmanagement/v1/lcmRuleSpecification/${encodeURIComponent(id)}`,
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
   * Deletes a LCM RuleSpecification
   *
   * This operation deletes a LCM RuleSpecification entity.
   * @param id Identifier of the RuleSpecification
   * @return Deleted
   */
  deleteLCMRuleSpecification(id: string): __Observable<{}> {
    return this.deleteLCMRuleSpecificationResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a LCM RuleSpecification
   *
   * This operation updates partially a LCM RuleSpecification entity.
   * @param params The `LcmRuleSpecificationService.PatchLCMRuleSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the LCM RuleSpecification
   *
   * - `body`: The LCM RuleSpecification to be updated
   *
   * @return Updated
   */
  patchLCMRuleSpecificationResponse(params: LcmRuleSpecificationService.PatchLCMRuleSpecificationParams): __Observable<__StrictHttpResponse<LCMRuleSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/lcmrulesmanagement/v1/lcmRuleSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LCMRuleSpecification>;
      })
    );
  }
  /**
   * Updates partially a LCM RuleSpecification
   *
   * This operation updates partially a LCM RuleSpecification entity.
   * @param params The `LcmRuleSpecificationService.PatchLCMRuleSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the LCM RuleSpecification
   *
   * - `body`: The LCM RuleSpecification to be updated
   *
   * @return Updated
   */
  patchLCMRuleSpecification(params: LcmRuleSpecificationService.PatchLCMRuleSpecificationParams): __Observable<LCMRuleSpecification> {
    return this.patchLCMRuleSpecificationResponse(params).pipe(
      __map(_r => _r.body as LCMRuleSpecification)
    );
  }
}

module LcmRuleSpecificationService {

  /**
   * Parameters for listLCMRuleSpecification
   */
  export interface ListLCMRuleSpecificationParams {

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
   * Parameters for listLCMRuleSpecificationByServiceSpecID
   */
   export interface ListLCMRuleSpecificationByServiceSpecIDParams {

    /**
     * Identifier of the ServiceSpecID
     */
     id: string;

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
   * Parameters for retrieveLCMRuleSpecification
   */
  export interface RetrieveLCMRuleSpecificationParams {

    /**
     * Identifier of the LCM RuleSpecification
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchLCMRuleSpecification
   */
  export interface PatchLCMRuleSpecificationParams {

    /**
     * Identifier of the LCM RuleSpecification
     */
    id: string;

    /**
     * The LCM RuleSpecification to be updated
     */
    body: LCMRuleSpecificationUpdate;
  }
}

export { LcmRuleSpecificationService }
