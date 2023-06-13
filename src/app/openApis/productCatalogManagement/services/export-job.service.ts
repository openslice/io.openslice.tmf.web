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
  static readonly listExportJobPath = '/productCatalogManagement/v4/exportJob';
  static readonly createExportJobPath = '/productCatalogManagement/v4/exportJob';
  static readonly retrieveExportJobPath = '/productCatalogManagement/v4/exportJob/{id}';
  static readonly deleteExportJobPath = '/productCatalogManagement/v4/exportJob/{id}';

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
   * @param params The `ExportJobService.ListExportJobParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listExportJobResponse(params: ExportJobService.ListExportJobParams): __Observable<__StrictHttpResponse<Array<ExportJob>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/exportJob`,
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
   * @param params The `ExportJobService.ListExportJobParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listExportJob(params: ExportJobService.ListExportJobParams): __Observable<Array<ExportJob>> {
    return this.listExportJobResponse(params).pipe(
      __map(_r => _r.body as Array<ExportJob>)
    );
  }

  /**
   * Creates a ExportJob
   *
   * This operation creates a ExportJob entity.
   * @param exportJob The ExportJob to be created
   * @return OK or Created
   */
  createExportJobResponse(exportJob: ExportJobCreate): __Observable<__StrictHttpResponse<ExportJob | ExportJob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = exportJob;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/exportJob`,
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
   * @param exportJob The ExportJob to be created
   * @return OK or Created
   */
  createExportJob(exportJob: ExportJobCreate): __Observable<ExportJob | ExportJob> {
    return this.createExportJobResponse(exportJob).pipe(
      __map(_r => _r.body as ExportJob | ExportJob)
    );
  }

  /**
   * Retrieves a ExportJob by ID
   *
   * This operation retrieves a ExportJob entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ExportJobService.RetrieveExportJobParams` containing the following parameters:
   *
   * - `id`: Identifier of the ExportJob
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveExportJobResponse(params: ExportJobService.RetrieveExportJobParams): __Observable<__StrictHttpResponse<ExportJob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/exportJob/${encodeURIComponent(String(params.id))}`,
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
   * @param params The `ExportJobService.RetrieveExportJobParams` containing the following parameters:
   *
   * - `id`: Identifier of the ExportJob
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveExportJob(params: ExportJobService.RetrieveExportJobParams): __Observable<ExportJob> {
    return this.retrieveExportJobResponse(params).pipe(
      __map(_r => _r.body as ExportJob)
    );
  }

  /**
   * Deletes a ExportJob
   *
   * This operation deletes a ExportJob entity.
   * @param id Identifier of the ExportJob
   * @return OK or Deleted
   */
  deleteExportJobResponse(id: string): __Observable<__StrictHttpResponse<Error | {}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/productCatalogManagement/v4/exportJob/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Error | {}>;
      })
    );
  }
  /**
   * Deletes a ExportJob
   *
   * This operation deletes a ExportJob entity.
   * @param id Identifier of the ExportJob
   * @return OK or Deleted
   */
  deleteExportJob(id: string): __Observable<Error | {}> {
    return this.deleteExportJobResponse(id).pipe(
      __map(_r => _r.body as Error | {})
    );
  }
}

module ExportJobService {

  /**
   * Parameters for listExportJob
   */
  export interface ListExportJobParams {

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
   * Parameters for retrieveExportJob
   */
  export interface RetrieveExportJobParams {

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
