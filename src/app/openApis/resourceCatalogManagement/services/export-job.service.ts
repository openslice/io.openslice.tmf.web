/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ExportJob } from '../models/export-job';
import { ExportJobCreate } from '../models/export-job-create';
import { Error } from '../models/error';
@Injectable({
  providedIn: 'root',
})
class ExportJobService extends __BaseService {
  static readonly listExportJob2Path = '/exportJob';
  static readonly createExportJob2Path = '/exportJob';
  static readonly retrieveExportJob2Path = '/exportJob/{id}';
  static readonly deleteExportJob2Path = '/exportJob/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ExportJob objects
   *
   * This operation list or find ExportJob entities
   * @param params The `ExportJobService.ListExportJob2Params` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listExportJob2Response(params: ExportJobService.ListExportJob2Params): __Observable<__StrictHttpResponse<Array<ExportJob>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/exportJob`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ExportJob>>;
      })
    );
  }
  /**
   * List or find ExportJob objects
   *
   * This operation list or find ExportJob entities
   * @param params The `ExportJobService.ListExportJob2Params` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listExportJob2(params: ExportJobService.ListExportJob2Params): __Observable<Array<ExportJob>> {
    return this.listExportJob2Response(params).pipe(
      __map(_r => _r.body as Array<ExportJob>)
    );
  }

  /**
   * Creates a ExportJob
   *
   * This operation creates a ExportJob entity.
   * @param body The ExportJob to be created
   * @return OK or Created
   */
  createExportJob2Response(body: ExportJobCreate): __Observable<__StrictHttpResponse<ExportJob | ExportJob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/exportJob`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ExportJob | ExportJob>;
      })
    );
  }
  /**
   * Creates a ExportJob
   *
   * This operation creates a ExportJob entity.
   * @param body The ExportJob to be created
   * @return OK or Created
   */
  createExportJob2(body: ExportJobCreate): __Observable<ExportJob | ExportJob> {
    return this.createExportJob2Response(body).pipe(
      __map(_r => _r.body as ExportJob | ExportJob)
    );
  }

  /**
   * Retrieves a ExportJob by ID
   *
   * This operation retrieves a ExportJob entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ExportJobService.RetrieveExportJob2Params` containing the following parameters:
   *
   * - `id`: Identifier of the ExportJob
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveExportJob2Response(params: ExportJobService.RetrieveExportJob2Params): __Observable<__StrictHttpResponse<ExportJob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/exportJob/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ExportJob>;
      })
    );
  }
  /**
   * Retrieves a ExportJob by ID
   *
   * This operation retrieves a ExportJob entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ExportJobService.RetrieveExportJob2Params` containing the following parameters:
   *
   * - `id`: Identifier of the ExportJob
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveExportJob2(params: ExportJobService.RetrieveExportJob2Params): __Observable<ExportJob> {
    return this.retrieveExportJob2Response(params).pipe(
      __map(_r => _r.body as ExportJob)
    );
  }

  /**
   * Deletes a ExportJob
   *
   * This operation deletes a ExportJob entity.
   * @param id Identifier of the ExportJob
   * @return Deleted
   */
  deleteExportJob2Response(id: string): __Observable<__StrictHttpResponse<Error>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/exportJob/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Error>;
      })
    );
  }
  /**
   * Deletes a ExportJob
   *
   * This operation deletes a ExportJob entity.
   * @param id Identifier of the ExportJob
   * @return Deleted
   */
  deleteExportJob2(id: string): __Observable<Error> {
    return this.deleteExportJob2Response(id).pipe(
      __map(_r => _r.body as Error)
    );
  }
}

module ExportJobService {

  /**
   * Parameters for listExportJob2
   */
  export interface ListExportJob2Params {

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
   * Parameters for retrieveExportJob2
   */
  export interface RetrieveExportJob2Params {

    /**
     * Identifier of the ExportJob
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { ExportJobService }
