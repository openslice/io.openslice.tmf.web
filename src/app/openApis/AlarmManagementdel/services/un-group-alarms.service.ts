/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UnGroupAlarms } from '../models/un-group-alarms';
import { UnGroupAlarmsCreate } from '../models/un-group-alarms-create';
@Injectable({
  providedIn: 'root',
})
class UnGroupAlarmsService extends __BaseService {
  static readonly listUnGroupAlarmsPath = '/alarmManagement/v4/unGroupAlarms';
  static readonly createUnGroupAlarmsPath = '/alarmManagement/v4/unGroupAlarms';
  static readonly retrieveUnGroupAlarmsPath = '/alarmManagement/v4/unGroupAlarms/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find UnGroupAlarms objects
   *
   * This operation list or find UnGroupAlarms entities
   * @param params The `UnGroupAlarmsService.ListUnGroupAlarmsParams` containing the following parameters:
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
  listUnGroupAlarmsResponse(params: UnGroupAlarmsService.ListUnGroupAlarmsParams): __Observable<__StrictHttpResponse<Array<UnGroupAlarms>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.allParams != null) __params = __params.set('allParams', params.allParams.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/unGroupAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UnGroupAlarms>>;
      })
    );
  }
  /**
   * List or find UnGroupAlarms objects
   *
   * This operation list or find UnGroupAlarms entities
   * @param params The `UnGroupAlarmsService.ListUnGroupAlarmsParams` containing the following parameters:
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
  listUnGroupAlarms(params: UnGroupAlarmsService.ListUnGroupAlarmsParams): __Observable<Array<UnGroupAlarms>> {
    return this.listUnGroupAlarmsResponse(params).pipe(
      __map(_r => _r.body as Array<UnGroupAlarms>)
    );
  }

  /**
   * Creates a UnGroupAlarms
   *
   * This operation creates a UnGroupAlarms entity.
   * @param body The UnGroupAlarms to be created
   * @return OK or Created
   */
  createUnGroupAlarmsResponse(body: UnGroupAlarmsCreate): __Observable<__StrictHttpResponse<UnGroupAlarms | UnGroupAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/alarmManagement/v4/unGroupAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UnGroupAlarms | UnGroupAlarms>;
      })
    );
  }
  /**
   * Creates a UnGroupAlarms
   *
   * This operation creates a UnGroupAlarms entity.
   * @param body The UnGroupAlarms to be created
   * @return OK or Created
   */
  createUnGroupAlarms(body: UnGroupAlarmsCreate): __Observable<UnGroupAlarms | UnGroupAlarms> {
    return this.createUnGroupAlarmsResponse(body).pipe(
      __map(_r => _r.body as UnGroupAlarms | UnGroupAlarms)
    );
  }

  /**
   * Retrieves a UnGroupAlarms by ID
   *
   * This operation retrieves a UnGroupAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `UnGroupAlarmsService.RetrieveUnGroupAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the UnGroupAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveUnGroupAlarmsResponse(params: UnGroupAlarmsService.RetrieveUnGroupAlarmsParams): __Observable<__StrictHttpResponse<UnGroupAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/unGroupAlarms/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UnGroupAlarms>;
      })
    );
  }
  /**
   * Retrieves a UnGroupAlarms by ID
   *
   * This operation retrieves a UnGroupAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `UnGroupAlarmsService.RetrieveUnGroupAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the UnGroupAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveUnGroupAlarms(params: UnGroupAlarmsService.RetrieveUnGroupAlarmsParams): __Observable<UnGroupAlarms> {
    return this.retrieveUnGroupAlarmsResponse(params).pipe(
      __map(_r => _r.body as UnGroupAlarms)
    );
  }
}

module UnGroupAlarmsService {

  /**
   * Parameters for listUnGroupAlarms
   */
  export interface ListUnGroupAlarmsParams {

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
   * Parameters for retrieveUnGroupAlarms
   */
  export interface RetrieveUnGroupAlarmsParams {

    /**
     * Identifier of the UnGroupAlarms
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { UnGroupAlarmsService }
