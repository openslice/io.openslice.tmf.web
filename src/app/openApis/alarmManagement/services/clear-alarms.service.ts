/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ClearAlarms } from '../models/clear-alarms';
import { ClearAlarmsCreate } from '../models/clear-alarms-create';
@Injectable({
  providedIn: 'root',
})
class ClearAlarmsService extends __BaseService {
  static readonly listClearAlarmsPath = '/alarmManagement/v4/clearAlarms';
  static readonly createClearAlarmsPath = '/alarmManagement/v4/clearAlarms';
  static readonly retrieveClearAlarmsPath = '/alarmManagement/v4/clearAlarms/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ClearAlarms objects
   *
   * This operation list or find ClearAlarms entities
   * @param params The `ClearAlarmsService.ListClearAlarmsParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * - `allParams`: allParams
   *
   * @return Success
   */
  listClearAlarmsResponse(params: ClearAlarmsService.ListClearAlarmsParams): __Observable<__StrictHttpResponse<Array<ClearAlarms>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.allParams != null) __params = __params.set('allParams', params.allParams.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/clearAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ClearAlarms>>;
      })
    );
  }
  /**
   * List or find ClearAlarms objects
   *
   * This operation list or find ClearAlarms entities
   * @param params The `ClearAlarmsService.ListClearAlarmsParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * - `allParams`: allParams
   *
   * @return Success
   */
  listClearAlarms(params: ClearAlarmsService.ListClearAlarmsParams): __Observable<Array<ClearAlarms>> {
    return this.listClearAlarmsResponse(params).pipe(
      __map(_r => _r.body as Array<ClearAlarms>)
    );
  }

  /**
   * Creates a ClearAlarms
   *
   * This operation creates a ClearAlarms entity.
   * @param body The ClearAlarms to be created
   * @return OK or Created
   */
  createClearAlarmsResponse(body: ClearAlarmsCreate): __Observable<__StrictHttpResponse<ClearAlarms | ClearAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/alarmManagement/v4/clearAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClearAlarms | ClearAlarms>;
      })
    );
  }
  /**
   * Creates a ClearAlarms
   *
   * This operation creates a ClearAlarms entity.
   * @param body The ClearAlarms to be created
   * @return OK or Created
   */
  createClearAlarms(body: ClearAlarmsCreate): __Observable<ClearAlarms | ClearAlarms> {
    return this.createClearAlarmsResponse(body).pipe(
      __map(_r => _r.body as ClearAlarms | ClearAlarms)
    );
  }

  /**
   * Retrieves a ClearAlarms by ID
   *
   * This operation retrieves a ClearAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ClearAlarmsService.RetrieveClearAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the ClearAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveClearAlarmsResponse(params: ClearAlarmsService.RetrieveClearAlarmsParams): __Observable<__StrictHttpResponse<ClearAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/clearAlarms/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ClearAlarms>;
      })
    );
  }
  /**
   * Retrieves a ClearAlarms by ID
   *
   * This operation retrieves a ClearAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ClearAlarmsService.RetrieveClearAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the ClearAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveClearAlarms(params: ClearAlarmsService.RetrieveClearAlarmsParams): __Observable<ClearAlarms> {
    return this.retrieveClearAlarmsResponse(params).pipe(
      __map(_r => _r.body as ClearAlarms)
    );
  }
}

module ClearAlarmsService {

  /**
   * Parameters for listClearAlarms
   */
  export interface ListClearAlarmsParams {

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

    /**
     * allParams
     */
    allParams?: any;
  }

  /**
   * Parameters for retrieveClearAlarms
   */
  export interface RetrieveClearAlarmsParams {

    /**
     * Identifier of the ClearAlarms
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { ClearAlarmsService }
