/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Monitor } from '../models/monitor';
@Injectable({
  providedIn: 'root',
})
class MonitorService extends __BaseService {
  static readonly listMonitorPath = '/monitor';
  static readonly retrieveMonitorPath = '/monitor/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find Monitor objects
   *
   * This operation list or find Monitor entities
   * @param params The `MonitorService.ListMonitorParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listMonitorResponse(params: MonitorService.ListMonitorParams): __Observable<__StrictHttpResponse<Array<Monitor>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/monitor`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Monitor>>;
      })
    );
  }
  /**
   * List or find Monitor objects
   *
   * This operation list or find Monitor entities
   * @param params The `MonitorService.ListMonitorParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listMonitor(params: MonitorService.ListMonitorParams): __Observable<Array<Monitor>> {
    return this.listMonitorResponse(params).pipe(
      __map(_r => _r.body as Array<Monitor>)
    );
  }

  /**
   * Retrieves a Monitor by ID
   *
   * This operation retrieves a Monitor entity. Attribute selection is enabled for all first level attributes.
   * @param params The `MonitorService.RetrieveMonitorParams` containing the following parameters:
   *
   * - `id`: Identifier of the Monitor
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveMonitorResponse(params: MonitorService.RetrieveMonitorParams): __Observable<__StrictHttpResponse<Monitor>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/monitor/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Monitor>;
      })
    );
  }
  /**
   * Retrieves a Monitor by ID
   *
   * This operation retrieves a Monitor entity. Attribute selection is enabled for all first level attributes.
   * @param params The `MonitorService.RetrieveMonitorParams` containing the following parameters:
   *
   * - `id`: Identifier of the Monitor
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveMonitor(params: MonitorService.RetrieveMonitorParams): __Observable<Monitor> {
    return this.retrieveMonitorResponse(params).pipe(
      __map(_r => _r.body as Monitor)
    );
  }
}

module MonitorService {

  /**
   * Parameters for listMonitor
   */
  export interface ListMonitorParams {

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
   * Parameters for retrieveMonitor
   */
  export interface RetrieveMonitorParams {

    /**
     * Identifier of the Monitor
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { MonitorService }
