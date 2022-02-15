/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Individual } from '../models/individual';
import { IndividualCreate } from '../models/individual-create';
import { IndividualUpdate } from '../models/individual-update';
@Injectable({
  providedIn: 'root',
})
class IndividualService extends __BaseService {
  static readonly listIndividualPath = '/party/v4/individual';
  static readonly createIndividualPath = '/party/v4/individual';
  static readonly retrieveIndividualPath = '/party/v4/individual/{id}';
  static readonly deleteIndividualPath = '/party/v4/individual/{id}';
  static readonly patchIndividualPath = '/party/v4/individual/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find Individual objects
   *
   * This operation list or find Individual entities
   * @param params The `IndividualService.ListIndividualParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listIndividualResponse(params: IndividualService.ListIndividualParams): __Observable<__StrictHttpResponse<Array<Individual>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/party/v4/individual`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Individual>>;
      })
    );
  }
  /**
   * List or find Individual objects
   *
   * This operation list or find Individual entities
   * @param params The `IndividualService.ListIndividualParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listIndividual(params: IndividualService.ListIndividualParams): __Observable<Array<Individual>> {
    return this.listIndividualResponse(params).pipe(
      __map(_r => _r.body as Array<Individual>)
    );
  }

  /**
   * Creates a Individual
   *
   * This operation creates a Individual entity.
   * @param individual The Individual to be created
   * @return OK or Created
   */
  createIndividualResponse(individual: IndividualCreate): __Observable<__StrictHttpResponse<Individual | Individual>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = individual;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/individual`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Individual | Individual>;
      })
    );
  }
  /**
   * Creates a Individual
   *
   * This operation creates a Individual entity.
   * @param individual The Individual to be created
   * @return OK or Created
   */
  createIndividual(individual: IndividualCreate): __Observable<Individual | Individual> {
    return this.createIndividualResponse(individual).pipe(
      __map(_r => _r.body as Individual | Individual)
    );
  }

  /**
   * Retrieves a Individual by ID
   *
   * This operation retrieves a Individual entity. Attribute selection is enabled for all first level attributes.
   * @param params The `IndividualService.RetrieveIndividualParams` containing the following parameters:
   *
   * - `id`: Identifier of the Individual
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveIndividualResponse(params: IndividualService.RetrieveIndividualParams): __Observable<__StrictHttpResponse<Individual>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/party/v4/individual/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Individual>;
      })
    );
  }
  /**
   * Retrieves a Individual by ID
   *
   * This operation retrieves a Individual entity. Attribute selection is enabled for all first level attributes.
   * @param params The `IndividualService.RetrieveIndividualParams` containing the following parameters:
   *
   * - `id`: Identifier of the Individual
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveIndividual(params: IndividualService.RetrieveIndividualParams): __Observable<Individual> {
    return this.retrieveIndividualResponse(params).pipe(
      __map(_r => _r.body as Individual)
    );
  }

  /**
   * Deletes a Individual
   *
   * This operation deletes a Individual entity.
   * @param id Identifier of the Individual
   */
  deleteIndividualResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/party/v4/individual/${encodeURIComponent(id)}`,
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
   * Deletes a Individual
   *
   * This operation deletes a Individual entity.
   * @param id Identifier of the Individual
   */
  deleteIndividual(id: string): __Observable<null> {
    return this.deleteIndividualResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a Individual
   *
   * This operation updates partially a Individual entity.
   * @param params The `IndividualService.PatchIndividualParams` containing the following parameters:
   *
   * - `individual`: The Individual to be updated
   *
   * - `id`: Identifier of the Individual
   *
   * @return Updated
   */
  patchIndividualResponse(params: IndividualService.PatchIndividualParams): __Observable<__StrictHttpResponse<Individual>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.individual;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/party/v4/individual/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Individual>;
      })
    );
  }
  /**
   * Updates partially a Individual
   *
   * This operation updates partially a Individual entity.
   * @param params The `IndividualService.PatchIndividualParams` containing the following parameters:
   *
   * - `individual`: The Individual to be updated
   *
   * - `id`: Identifier of the Individual
   *
   * @return Updated
   */
  patchIndividual(params: IndividualService.PatchIndividualParams): __Observable<Individual> {
    return this.patchIndividualResponse(params).pipe(
      __map(_r => _r.body as Individual)
    );
  }
}

module IndividualService {

  /**
   * Parameters for listIndividual
   */
  export interface ListIndividualParams {

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
   * Parameters for retrieveIndividual
   */
  export interface RetrieveIndividualParams {

    /**
     * Identifier of the Individual
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchIndividual
   */
  export interface PatchIndividualParams {

    /**
     * The Individual to be updated
     */
    individual: IndividualUpdate;

    /**
     * Identifier of the Individual
     */
    id: string;
  }
}

export { IndividualService }
