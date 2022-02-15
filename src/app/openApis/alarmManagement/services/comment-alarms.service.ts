/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CommentAlarms } from '../models/comment-alarms';
import { CommentAlarmsCreate } from '../models/comment-alarms-create';
@Injectable({
  providedIn: 'root',
})
class CommentAlarmsService extends __BaseService {
  static readonly listCommentAlarmsPath = '/alarmManagement/v4/commentAlarms';
  static readonly createCommentAlarmsPath = '/alarmManagement/v4/commentAlarms';
  static readonly retrieveCommentAlarmsPath = '/alarmManagement/v4/commentAlarms/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find CommentAlarms objects
   *
   * This operation list or find CommentAlarms entities
   * @param params The `CommentAlarmsService.ListCommentAlarmsParams` containing the following parameters:
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
  listCommentAlarmsResponse(params: CommentAlarmsService.ListCommentAlarmsParams): __Observable<__StrictHttpResponse<Array<CommentAlarms>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.allParams != null) __params = __params.set('allParams', params.allParams.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/commentAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<CommentAlarms>>;
      })
    );
  }
  /**
   * List or find CommentAlarms objects
   *
   * This operation list or find CommentAlarms entities
   * @param params The `CommentAlarmsService.ListCommentAlarmsParams` containing the following parameters:
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
  listCommentAlarms(params: CommentAlarmsService.ListCommentAlarmsParams): __Observable<Array<CommentAlarms>> {
    return this.listCommentAlarmsResponse(params).pipe(
      __map(_r => _r.body as Array<CommentAlarms>)
    );
  }

  /**
   * Creates a CommentAlarms
   *
   * This operation creates a CommentAlarms entity.
   * @param body The CommentAlarms to be created
   * @return OK or Created
   */
  createCommentAlarmsResponse(body: CommentAlarmsCreate): __Observable<__StrictHttpResponse<CommentAlarms | CommentAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/alarmManagement/v4/commentAlarms`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentAlarms | CommentAlarms>;
      })
    );
  }
  /**
   * Creates a CommentAlarms
   *
   * This operation creates a CommentAlarms entity.
   * @param body The CommentAlarms to be created
   * @return OK or Created
   */
  createCommentAlarms(body: CommentAlarmsCreate): __Observable<CommentAlarms | CommentAlarms> {
    return this.createCommentAlarmsResponse(body).pipe(
      __map(_r => _r.body as CommentAlarms | CommentAlarms)
    );
  }

  /**
   * Retrieves a CommentAlarms by ID
   *
   * This operation retrieves a CommentAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `CommentAlarmsService.RetrieveCommentAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the CommentAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveCommentAlarmsResponse(params: CommentAlarmsService.RetrieveCommentAlarmsParams): __Observable<__StrictHttpResponse<CommentAlarms>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/alarmManagement/v4/commentAlarms/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CommentAlarms>;
      })
    );
  }
  /**
   * Retrieves a CommentAlarms by ID
   *
   * This operation retrieves a CommentAlarms entity. Attribute selection is enabled for all first level attributes.
   * @param params The `CommentAlarmsService.RetrieveCommentAlarmsParams` containing the following parameters:
   *
   * - `id`: Identifier of the CommentAlarms
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveCommentAlarms(params: CommentAlarmsService.RetrieveCommentAlarmsParams): __Observable<CommentAlarms> {
    return this.retrieveCommentAlarmsResponse(params).pipe(
      __map(_r => _r.body as CommentAlarms)
    );
  }
}

module CommentAlarmsService {

  /**
   * Parameters for listCommentAlarms
   */
  export interface ListCommentAlarmsParams {

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
   * Parameters for retrieveCommentAlarms
   */
  export interface RetrieveCommentAlarmsParams {

    /**
     * Identifier of the CommentAlarms
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }
}

export { CommentAlarmsService }
