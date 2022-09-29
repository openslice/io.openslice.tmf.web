/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AckAlarms } from '../models/ack-alarms';
import { AckAlarmsCreate } from '../models/ack-alarms-create';
@Injectable({
  providedIn: 'root',
})
class AckAlarmsService extends __BaseService {
  static readonly listAckAlarmsPath = '/alarmManagement/v4/ackAlarms';
  static readonly createAckAlarmsPath = '/alarmManagement/v4/ackAlarms';
  static readonly retrieveAckAlarmsPath = '/alarmManagement/v4/ackAlarms/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find AckAlarms objects
   *
   * This operation list or find AckAlarms entities
   * @param params The `AckAlarmsService.ListAckAlarmsParams` containing the following parameters:
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
  listAckAlarmsResponse(params: AckAlarmsService.ListAckAlarmsParams): __Observable<__StrictHttpResponse<Array<AckAlarms>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.allParams != null) __params = __params.set('allParams', params.allParams.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/ackAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AckAlarms>>;
      })
    );
  }
  /**
   * List or find AckAlarms objects
   *
   * This operation list or find AckAlarms entities
   * @param params The `AckAlarmsService.ListAckAlarmsParams` containing the following parameters:
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
  listAckAlarms(params: AckAlarmsService.ListAckAlarmsParams): __Observable<Array<AckAlarms>> {
    return this.listAckAlarmsResponse(params).pipe(
      __map(_r => _r.body as Array<AckAlarms>)
    );
  }

  /**
   * Creates a AckAlarms
   *
   * This operation creates a AckAlarms entity.
   * @param body The AckAlarms to be created
   * @return OK or Created
   */
  createAckAlarmsResponse(body: AckAlarmsCreate): __Observable<__StrictHttpResponse<AckAlarms | AckAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/alarmManagement/v4/ackAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AckAlarms | AckAlarms>;
      })
    );
  }
  /**
   * Creates a AckAlarms
   *
   * This operation creates a AckAlarms entity.
   * @param body The AckAlarms to be created
   * @return OK or Created
   */
  createAckAlarms(body: AckAlarmsCreate): __Observable<AckAlarms | AckAlarms> {
    return this.createAckAlarmsResponse(body).pipe(
      __map(_r => _r.body as AckAlarms | AckAlarms)
    );
  }

  /**
   * Retrieves a AckAlarms by ID
   *
   * This operation retrieves a AckAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `AckAlarmsService.RetrieveAckAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the AckAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveAckAlarmsResponse(params: AckAlarmsService.RetrieveAckAlarmsParams): __Observable<__StrictHttpResponse<AckAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/ackAlarms/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AckAlarms>;
      })
    );
  }
  /**
   * Retrieves a AckAlarms by ID
   *
   * This operation retrieves a AckAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `AckAlarmsService.RetrieveAckAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the AckAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveAckAlarms(params: AckAlarmsService.RetrieveAckAlarmsParams): __Observable<AckAlarms> {
    return this.retrieveAckAlarmsResponse(params).pipe(
      __map(_r => _r.body as AckAlarms)
    );
  }
}

module AckAlarmsService {

  /**
   * Parameters for listAckAlarms
   */
  export interface ListAckAlarmsParams {

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
   * Parameters for retrieveAckAlarms
   */
  export interface RetrieveAckAlarmsParams {

    /**
     * Identifier of the AckAlarms
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { AckAlarmsService }
