/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ImportJob } from '../models/import-job';
import { ImportJobCreate } from '../models/import-job-create';
import { Error } from '../models/error';
@Injectable({
  providedIn: 'root',
})
class ImportJobService extends __BaseService {
  static readonly listImportJobPath = '/productCatalogManagement/v4/importJob';
  static readonly createImportJobPath = '/productCatalogManagement/v4/importJob';
  static readonly retrieveImportJobPath = '/productCatalogManagement/v4/importJob/{id}';
  static readonly deleteImportJobPath = '/productCatalogManagement/v4/importJob/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ImportJob objects
   *
   * This operation list or find ImportJob entities
   * @param params The `ImportJobService.ListImportJobParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listImportJobResponse(params: ImportJobService.ListImportJobParams): __Observable<__StrictHttpResponse<Array<ImportJob>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/importJob`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImportJob>>;
      })
    );
  }
  /**
   * List or find ImportJob objects
   *
   * This operation list or find ImportJob entities
   * @param params The `ImportJobService.ListImportJobParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listImportJob(params: ImportJobService.ListImportJobParams): __Observable<Array<ImportJob>> {
    return this.listImportJobResponse(params).pipe(
      __map(_r => _r.body as Array<ImportJob>)
    );
  }

  /**
   * Creates a ImportJob
   *
   * This operation creates a ImportJob entity.
   * @param importJob The ImportJob to be created
   * @return OK or Created
   */
  createImportJobResponse(importJob: ImportJobCreate): __Observable<__StrictHttpResponse<ImportJob | ImportJob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = importJob;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/importJob`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImportJob | ImportJob>;
      })
    );
  }
  /**
   * Creates a ImportJob
   *
   * This operation creates a ImportJob entity.
   * @param importJob The ImportJob to be created
   * @return OK or Created
   */
  createImportJob(importJob: ImportJobCreate): __Observable<ImportJob | ImportJob> {
    return this.createImportJobResponse(importJob).pipe(
      __map(_r => _r.body as ImportJob | ImportJob)
    );
  }

  /**
   * Retrieves a ImportJob by ID
   *
   * This operation retrieves a ImportJob entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ImportJobService.RetrieveImportJobParams` containing the following parameters:
   *
   * - `id`: Identifier of the ImportJob
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveImportJobResponse(params: ImportJobService.RetrieveImportJobParams): __Observable<__StrictHttpResponse<ImportJob>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/importJob/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ImportJob>;
      })
    );
  }
  /**
   * Retrieves a ImportJob by ID
   *
   * This operation retrieves a ImportJob entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ImportJobService.RetrieveImportJobParams` containing the following parameters:
   *
   * - `id`: Identifier of the ImportJob
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveImportJob(params: ImportJobService.RetrieveImportJobParams): __Observable<ImportJob> {
    return this.retrieveImportJobResponse(params).pipe(
      __map(_r => _r.body as ImportJob)
    );
  }

  /**
   * Deletes a ImportJob
   *
   * This operation deletes a ImportJob entity.
   * @param id Identifier of the ImportJob
   * @return OK or Deleted
   */
  deleteImportJobResponse(id: string): __Observable<__StrictHttpResponse<Error | {}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/productCatalogManagement/v4/importJob/${encodeURIComponent(String(id))}`,
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
   * Deletes a ImportJob
   *
   * This operation deletes a ImportJob entity.
   * @param id Identifier of the ImportJob
   * @return OK or Deleted
   */
  deleteImportJob(id: string): __Observable<Error | {}> {
    return this.deleteImportJobResponse(id).pipe(
      __map(_r => _r.body as Error | {})
    );
  }
}

module ImportJobService {

  /**
   * Parameters for listImportJob
   */
  export interface ListImportJobParams {

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
   * Parameters for retrieveImportJob
   */
  export interface RetrieveImportJobParams {

    /**
     * Identifier of the ImportJob
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { ImportJobService }
