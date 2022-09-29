/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { UnAckAlarms } from '../models/un-ack-alarms';
import { UnAckAlarmsCreate } from '../models/un-ack-alarms-create';
@Injectable({
  providedIn: 'root',
})
class UnAckAlarmsService extends __BaseService {
  static readonly listUnAckAlarmsPath = '/alarmManagement/v4/unAckAlarms';
  static readonly createUnAckAlarmsPath = '/alarmManagement/v4/unAckAlarms';
  static readonly retrieveUnAckAlarmsPath = '/alarmManagement/v4/unAckAlarms/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find UnAckAlarms objects
   *
   * This operation list or find UnAckAlarms entities
   * @param params The `UnAckAlarmsService.ListUnAckAlarmsParams` containing the following parameters:
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
  listUnAckAlarmsResponse(params: UnAckAlarmsService.ListUnAckAlarmsParams): __Observable<__StrictHttpResponse<Array<UnAckAlarms>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.allParams != null) __params = __params.set('allParams', params.allParams.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/unAckAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UnAckAlarms>>;
      })
    );
  }
  /**
   * List or find UnAckAlarms objects
   *
   * This operation list or find UnAckAlarms entities
   * @param params The `UnAckAlarmsService.ListUnAckAlarmsParams` containing the following parameters:
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
  listUnAckAlarms(params: UnAckAlarmsService.ListUnAckAlarmsParams): __Observable<Array<UnAckAlarms>> {
    return this.listUnAckAlarmsResponse(params).pipe(
      __map(_r => _r.body as Array<UnAckAlarms>)
    );
  }

  /**
   * Creates a UnAckAlarms
   *
   * This operation creates a UnAckAlarms entity.
   * @param body The UnAckAlarms to be created
   * @return OK or Created
   */
  createUnAckAlarmsResponse(body: UnAckAlarmsCreate): __Observable<__StrictHttpResponse<UnAckAlarms | UnAckAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/alarmManagement/v4/unAckAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UnAckAlarms | UnAckAlarms>;
      })
    );
  }
  /**
   * Creates a UnAckAlarms
   *
   * This operation creates a UnAckAlarms entity.
   * @param body The UnAckAlarms to be created
   * @return OK or Created
   */
  createUnAckAlarms(body: UnAckAlarmsCreate): __Observable<UnAckAlarms | UnAckAlarms> {
    return this.createUnAckAlarmsResponse(body).pipe(
      __map(_r => _r.body as UnAckAlarms | UnAckAlarms)
    );
  }

  /**
   * Retrieves a UnAckAlarms by ID
   *
   * This operation retrieves a UnAckAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `UnAckAlarmsService.RetrieveUnAckAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the UnAckAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveUnAckAlarmsResponse(params: UnAckAlarmsService.RetrieveUnAckAlarmsParams): __Observable<__StrictHttpResponse<UnAckAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/unAckAlarms/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UnAckAlarms>;
      })
    );
  }
  /**
   * Retrieves a UnAckAlarms by ID
   *
   * This operation retrieves a UnAckAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `UnAckAlarmsService.RetrieveUnAckAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the UnAckAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveUnAckAlarms(params: UnAckAlarmsService.RetrieveUnAckAlarmsParams): __Observable<UnAckAlarms> {
    return this.retrieveUnAckAlarmsResponse(params).pipe(
      __map(_r => _r.body as UnAckAlarms)
    );
  }
}

module UnAckAlarmsService {

  /**
   * Parameters for listUnAckAlarms
   */
  export interface ListUnAckAlarmsParams {

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
   * Parameters for retrieveUnAckAlarms
   */
  export interface RetrieveUnAckAlarmsParams {

    /**
     * Identifier of the UnAckAlarms
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { UnAckAlarmsService }
