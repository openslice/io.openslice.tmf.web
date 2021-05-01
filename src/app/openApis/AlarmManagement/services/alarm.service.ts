/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Alarm } from '../models/alarm';
import { AlarmCreate } from '../models/alarm-create';
import { AlarmUpdate } from '../models/alarm-update';
@Injectable({
  providedIn: 'root',
})
class AlarmService extends __BaseService {
  static readonly listAlarmPath = '/alarmManagement/v4/alarm';
  static readonly createAlarmPath = '/alarmManagement/v4/alarm';
  static readonly retrieveAlarmPath = '/alarmManagement/v4/alarm/{id}';
  static readonly deleteAlarmPath = '/alarmManagement/v4/alarm/{id}';
  static readonly patchAlarmPath = '/alarmManagement/v4/alarm/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find Alarm objects
   *
   * This operation list or find Alarm entities
   * @param params The `AlarmService.ListAlarmParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listAlarmResponse(params: AlarmService.ListAlarmParams): __Observable<__StrictHttpResponse<Array<Alarm>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/alarm`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Alarm>>;
      })
    );
  }
  /**
   * List or find Alarm objects
   *
   * This operation list or find Alarm entities
   * @param params The `AlarmService.ListAlarmParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listAlarm(params: AlarmService.ListAlarmParams): __Observable<Array<Alarm>> {
    return this.listAlarmResponse(params).pipe(
      __map(_r => _r.body as Array<Alarm>)
    );
  }

  /**
   * Creates a Alarm
   *
   * This operation creates a Alarm entity.
   * @param body The Alarm to be created
   * @return OK or Created
   */
  createAlarmResponse(body: AlarmCreate): __Observable<__StrictHttpResponse<Alarm | Alarm>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/alarmManagement/v4/alarm`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Alarm | Alarm>;
      })
    );
  }
  /**
   * Creates a Alarm
   *
   * This operation creates a Alarm entity.
   * @param body The Alarm to be created
   * @return OK or Created
   */
  createAlarm(body: AlarmCreate): __Observable<Alarm | Alarm> {
    return this.createAlarmResponse(body).pipe(
      __map(_r => _r.body as Alarm | Alarm)
    );
  }

  /**
   * Retrieves a Alarm by ID
   *
   * This operation retrieves a Alarm entity. Attribute selection is enabled for all first level attributes.
   * @param params The `AlarmService.RetrieveAlarmParams` containing the following parameters:
   *
   * - `id`: Identifier of the Alarm
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveAlarmResponse(params: AlarmService.RetrieveAlarmParams): __Observable<__StrictHttpResponse<Alarm>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/alarm/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Alarm>;
      })
    );
  }
  /**
   * Retrieves a Alarm by ID
   *
   * This operation retrieves a Alarm entity. Attribute selection is enabled for all first level attributes.
   * @param params The `AlarmService.RetrieveAlarmParams` containing the following parameters:
   *
   * - `id`: Identifier of the Alarm
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveAlarm(params: AlarmService.RetrieveAlarmParams): __Observable<Alarm> {
    return this.retrieveAlarmResponse(params).pipe(
      __map(_r => _r.body as Alarm)
    );
  }

  /**
   * Deletes a Alarm
   *
   * This operation deletes a Alarm entity.
   * @param id Identifier of the Alarm
   */
  deleteAlarmResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/alarmManagement/v4/alarm/${encodeURIComponent(id)}`,
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
   * Deletes a Alarm
   *
   * This operation deletes a Alarm entity.
   * @param id Identifier of the Alarm
   */
  deleteAlarm(id: string): __Observable<null> {
    return this.deleteAlarmResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a Alarm
   *
   * This operation updates partially a Alarm entity.
   * @param params The `AlarmService.PatchAlarmParams` containing the following parameters:
   *
   * - `id`: Identifier of the Alarm
   *
   * - `body`: The Alarm to be updated
   *
   * @return Updated
   */
  patchAlarmResponse(params: AlarmService.PatchAlarmParams): __Observable<__StrictHttpResponse<Alarm>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/alarmManagement/v4/alarm/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Alarm>;
      })
    );
  }
  /**
   * Updates partially a Alarm
   *
   * This operation updates partially a Alarm entity.
   * @param params The `AlarmService.PatchAlarmParams` containing the following parameters:
   *
   * - `id`: Identifier of the Alarm
   *
   * - `body`: The Alarm to be updated
   *
   * @return Updated
   */
  patchAlarm(params: AlarmService.PatchAlarmParams): __Observable<Alarm> {
    return this.patchAlarmResponse(params).pipe(
      __map(_r => _r.body as Alarm)
    );
  }
}

module AlarmService {

  /**
   * Parameters for listAlarm
   */
  export interface ListAlarmParams {

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
   * Parameters for retrieveAlarm
   */
  export interface RetrieveAlarmParams {

    /**
     * Identifier of the Alarm
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchAlarm
   */
  export interface PatchAlarmParams {

    /**
     * Identifier of the Alarm
     */
    id: string;

    /**
     * The Alarm to be updated
     */
    body: AlarmUpdate;
  }
}

export { AlarmService }
