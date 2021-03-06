/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { RuleSpecification } from '../models/rule-specification';
import { RuleSpecificationCreate } from '../models/rule-specification-create';
import { RuleSpecificationUpdate } from '../models/rule-specification-update';
@Injectable({
  providedIn: 'root',
})
class RuleSpecificationService extends __BaseService {
  static readonly listRuleSpecificationPath = '/assuranceServicesManagement/v1/ruleSpecification';
  static readonly createRuleSpecificationPath = '/assuranceServicesManagement/v1/ruleSpecification';
  static readonly retrieveRuleSpecificationPath = '/assuranceServicesManagement/v1/ruleSpecification/{id}';
  static readonly deleteRuleSpecificationPath = '/assuranceServicesManagement/v1/ruleSpecification/{id}';
  static readonly patchRuleSpecificationPath = '/assuranceServicesManagement/v1/ruleSpecification/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find RuleSpecification objects
   *
   * This operation list or find RuleSpecification entities
   * @param params The `RuleSpecificationService.ListRuleSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listRuleSpecificationResponse(params: RuleSpecificationService.ListRuleSpecificationParams): __Observable<__StrictHttpResponse<Array<RuleSpecification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assuranceServicesManagement/v1/ruleSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RuleSpecification>>;
      })
    );
  }
  /**
   * List or find RuleSpecification objects
   *
   * This operation list or find RuleSpecification entities
   * @param params The `RuleSpecificationService.ListRuleSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listRuleSpecification(params: RuleSpecificationService.ListRuleSpecificationParams): __Observable<Array<RuleSpecification>> {
    return this.listRuleSpecificationResponse(params).pipe(
      __map(_r => _r.body as Array<RuleSpecification>)
    );
  }

  /**
   * Creates a RuleSpecification
   *
   * This operation creates a RuleSpecification entity.
   * @param body The RuleSpecification to be created
   * @return OK or Created
   */
  createRuleSpecificationResponse(body: RuleSpecificationCreate): __Observable<__StrictHttpResponse<RuleSpecification | RuleSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/assuranceServicesManagement/v1/ruleSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RuleSpecification | RuleSpecification>;
      })
    );
  }
  /**
   * Creates a RuleSpecification
   *
   * This operation creates a RuleSpecification entity.
   * @param body The RuleSpecification to be created
   * @return OK or Created
   */
  createRuleSpecification(body: RuleSpecificationCreate): __Observable<RuleSpecification | RuleSpecification> {
    return this.createRuleSpecificationResponse(body).pipe(
      __map(_r => _r.body as RuleSpecification | RuleSpecification)
    );
  }

  /**
   * Retrieves a RuleSpecification by ID
   *
   * This operation retrieves a RuleSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `RuleSpecificationService.RetrieveRuleSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the RuleSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveRuleSpecificationResponse(params: RuleSpecificationService.RetrieveRuleSpecificationParams): __Observable<__StrictHttpResponse<RuleSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/assuranceServicesManagement/v1/ruleSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RuleSpecification>;
      })
    );
  }
  /**
   * Retrieves a RuleSpecification by ID
   *
   * This operation retrieves a RuleSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `RuleSpecificationService.RetrieveRuleSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the RuleSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveRuleSpecification(params: RuleSpecificationService.RetrieveRuleSpecificationParams): __Observable<RuleSpecification> {
    return this.retrieveRuleSpecificationResponse(params).pipe(
      __map(_r => _r.body as RuleSpecification)
    );
  }

  /**
   * Deletes a RuleSpecification
   *
   * This operation deletes a RuleSpecification entity.
   * @param id Identifier of the RuleSpecification
   */
  deleteRuleSpecificationResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/assuranceServicesManagement/v1/ruleSpecification/${encodeURIComponent(id)}`,
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
   * Deletes a RuleSpecification
   *
   * This operation deletes a RuleSpecification entity.
   * @param id Identifier of the RuleSpecification
   */
  deleteRuleSpecification(id: string): __Observable<null> {
    return this.deleteRuleSpecificationResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a RuleSpecification
   *
   * This operation updates partially a RuleSpecification entity.
   * @param params The `RuleSpecificationService.PatchRuleSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the RuleSpecification
   *
   * - `body`: The RuleSpecification to be updated
   *
   * @return Updated
   */
  patchRuleSpecificationResponse(params: RuleSpecificationService.PatchRuleSpecificationParams): __Observable<__StrictHttpResponse<RuleSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/assuranceServicesManagement/v1/ruleSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RuleSpecification>;
      })
    );
  }
  /**
   * Updates partially a RuleSpecification
   *
   * This operation updates partially a RuleSpecification entity.
   * @param params The `RuleSpecificationService.PatchRuleSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the RuleSpecification
   *
   * - `body`: The RuleSpecification to be updated
   *
   * @return Updated
   */
  patchRuleSpecification(params: RuleSpecificationService.PatchRuleSpecificationParams): __Observable<RuleSpecification> {
    return this.patchRuleSpecificationResponse(params).pipe(
      __map(_r => _r.body as RuleSpecification)
    );
  }
}

module RuleSpecificationService {

  /**
   * Parameters for listRuleSpecification
   */
  export interface ListRuleSpecificationParams {

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
   * Parameters for retrieveRuleSpecification
   */
  export interface RetrieveRuleSpecificationParams {

    /**
     * Identifier of the RuleSpecification
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchRuleSpecification
   */
  export interface PatchRuleSpecificationParams {

    /**
     * Identifier of the RuleSpecification
     */
    id: string;

    /**
     * The RuleSpecification to be updated
     */
    body: RuleSpecificationUpdate;
  }
}

export { RuleSpecificationService }
