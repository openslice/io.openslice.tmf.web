/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GroupAlarms } from '../models/group-alarms';
import { GroupAlarmsCreate } from '../models/group-alarms-create';
@Injectable({
  providedIn: 'root',
})
class GroupAlarmsService extends __BaseService {
  static readonly listGroupAlarmsPath = '/alarmManagement/v4/groupAlarms';
  static readonly createGroupAlarmsPath = '/alarmManagement/v4/groupAlarms';
  static readonly retrieveGroupAlarmsPath = '/alarmManagement/v4/groupAlarms/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find GroupAlarms objects
   *
   * This operation list or find GroupAlarms entities
   * @param params The `GroupAlarmsService.ListGroupAlarmsParams` containing the following parameters:
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
  listGroupAlarmsResponse(params: GroupAlarmsService.ListGroupAlarmsParams): __Observable<__StrictHttpResponse<Array<GroupAlarms>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.allParams != null) __params = __params.set('allParams', params.allParams.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/groupAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GroupAlarms>>;
      })
    );
  }
  /**
   * List or find GroupAlarms objects
   *
   * This operation list or find GroupAlarms entities
   * @param params The `GroupAlarmsService.ListGroupAlarmsParams` containing the following parameters:
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
  listGroupAlarms(params: GroupAlarmsService.ListGroupAlarmsParams): __Observable<Array<GroupAlarms>> {
    return this.listGroupAlarmsResponse(params).pipe(
      __map(_r => _r.body as Array<GroupAlarms>)
    );
  }

  /**
   * Creates a GroupAlarms
   *
   * This operation creates a GroupAlarms entity.
   * @param body The GroupAlarms to be created
   * @return OK or Created
   */
  createGroupAlarmsResponse(body: GroupAlarmsCreate): __Observable<__StrictHttpResponse<GroupAlarms | GroupAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/alarmManagement/v4/groupAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupAlarms | GroupAlarms>;
      })
    );
  }
  /**
   * Creates a GroupAlarms
   *
   * This operation creates a GroupAlarms entity.
   * @param body The GroupAlarms to be created
   * @return OK or Created
   */
  createGroupAlarms(body: GroupAlarmsCreate): __Observable<GroupAlarms | GroupAlarms> {
    return this.createGroupAlarmsResponse(body).pipe(
      __map(_r => _r.body as GroupAlarms | GroupAlarms)
    );
  }

  /**
   * Retrieves a GroupAlarms by ID
   *
   * This operation retrieves a GroupAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `GroupAlarmsService.RetrieveGroupAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the GroupAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveGroupAlarmsResponse(params: GroupAlarmsService.RetrieveGroupAlarmsParams): __Observable<__StrictHttpResponse<GroupAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/groupAlarms/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupAlarms>;
      })
    );
  }
  /**
   * Retrieves a GroupAlarms by ID
   *
   * This operation retrieves a GroupAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `GroupAlarmsService.RetrieveGroupAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the GroupAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveGroupAlarms(params: GroupAlarmsService.RetrieveGroupAlarmsParams): __Observable<GroupAlarms> {
    return this.retrieveGroupAlarmsResponse(params).pipe(
      __map(_r => _r.body as GroupAlarms)
    );
  }
}

module GroupAlarmsService {

  /**
   * Parameters for listGroupAlarms
   */
  export interface ListGroupAlarmsParams {

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
   * Parameters for retrieveGroupAlarms
   */
  export interface RetrieveGroupAlarmsParams {

    /**
     * Identifier of the GroupAlarms
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { GroupAlarmsService }
