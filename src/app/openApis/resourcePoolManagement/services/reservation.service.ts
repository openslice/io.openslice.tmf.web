/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Reservation } from '../models/reservation';
import { ReservationCreate } from '../models/reservation-create';
import { ReservationUpdate } from '../models/reservation-update';
@Injectable({
  providedIn: 'root',
})
class ReservationService extends __BaseService {
  static readonly listReservationPath = 'resourcePoolManagement/v1/reservation';
  static readonly createReservationPath = '/resourcePoolManagement/v1/reservation';
  static readonly retrieveReservationPath = '/resourcePoolManagement/v1/reservation/{id}';
  static readonly patchReservationPath = '/resourcePoolManagement/v1/reservation/{id}';
  static readonly deleteReservationPoolPath = '/resourcePoolManagement/v1/reservation/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find 'Reservation' objects
   * @param params The `ReservationService.ListReservationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `name`:
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma separated properties to display in response
   *
   * @return Ok
   */
  listReservationResponse(params: ReservationService.ListReservationParams): __Observable<__StrictHttpResponse<Array<Reservation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourcePoolManagement/v1/reservation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Reservation>>;
      })
    );
  }
  /**
   * List or find 'Reservation' objects
   * @param params The `ReservationService.ListReservationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `name`:
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma separated properties to display in response
   *
   * @return Ok
   */
  listReservation(params: ReservationService.ListReservationParams): __Observable<Array<Reservation>> {
    return this.listReservationResponse(params).pipe(
      __map(_r => _r.body as Array<Reservation>)
    );
  }

  /**
   * Creates a 'Reservation'
   * @param params The `ReservationService.CreateReservationParams` containing the following parameters:
   *
   * - `body`: The Reservation to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createReservationResponse(params: ReservationService.CreateReservationParams): __Observable<__StrictHttpResponse<Reservation | Reservation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.body;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourcePoolManagement/v1/reservation`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reservation | Reservation>;
      })
    );
  }
  /**
   * Creates a 'Reservation'
   * @param params The `ReservationService.CreateReservationParams` containing the following parameters:
   *
   * - `body`: The Reservation to be created
   *
   * - `name`:
   *
   * @return OK or Created
   */
  createReservation(params: ReservationService.CreateReservationParams): __Observable<Reservation | Reservation> {
    return this.createReservationResponse(params).pipe(
      __map(_r => _r.body as Reservation | Reservation)
    );
  }

  /**
   * Retrieves a 'Reservation' by Id
   * @param params The `ReservationService.RetrieveReservationParams` containing the following parameters:
   *
   * - `id`: Identifier of the Reservation
   *
   * - `name`:
   *
   * @return Ok
   */
  retrieveReservationResponse(params: ReservationService.RetrieveReservationParams): __Observable<__StrictHttpResponse<Array<Reservation>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourcePoolManagement/v1/reservation/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Reservation>>;
      })
    );
  }
  /**
   * Retrieves a 'Reservation' by Id
   * @param params The `ReservationService.RetrieveReservationParams` containing the following parameters:
   *
   * - `id`: Identifier of the Reservation
   *
   * - `name`:
   *
   * @return Ok
   */
  retrieveReservation(params: ReservationService.RetrieveReservationParams): __Observable< Reservation> {
    return this.retrieveReservationResponse(params).pipe(
      __map(_r => _r.body as Reservation)
    );
  }

  /**
   * Updates partially a 'Reservation' by Id
   * @param params The `ReservationService.PatchReservationParams` containing the following parameters:
   *
   * - `id`: Identifier of the Reservation
   *
   * - `body`: The Reservation to be updated
   *
   * - `name`:
   *
   * @return Updated
   */
  patchReservationResponse(params: ReservationService.PatchReservationParams): __Observable<__StrictHttpResponse<Reservation>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/resourcePoolManagement/v1/reservation/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Reservation>;
      })
    );
  }
  /**
   * Updates partially a 'Reservation' by Id
   * @param params The `ReservationService.PatchReservationParams` containing the following parameters:
   *
   * - `id`: Identifier of the Reservation
   *
   * - `body`: The Reservation to be updated
   *
   * - `name`:
   *
   * @return Updated
   */
  patchReservation(params: ReservationService.PatchReservationParams): __Observable<Reservation> {
    return this.patchReservationResponse(params).pipe(
      __map(_r => _r.body as Reservation)
    );
  }



   /**
   * Deletes a 'Reservation' by Id
   * @param params The `ReservationService.DeleteReservationParams` containing the following parameters:
   *
   * - `id`: Identifier of the Resource Pool
   *
   * - `name`:
   *
   * @return Deleted
   */
    deleteReservationResponse(params: ReservationService.DeleteReservationParams): __Observable<__StrictHttpResponse<Error>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;
  
      if (params.name != null) __params = __params.set('name', params.name.toString());
      let req = new HttpRequest<any>(
        'DELETE',
        this.rootUrl + `/resourcePoolManagement/v1/reservation/${encodeURIComponent(params.id)}`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'json'
        });
  
      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<Error>;
        })
      );
    }
    /**
     * Deletes a 'Reservation' by Id
     * @param params The `ReservationService.DeleteReservationParams` containing the following parameters:
     *
     * - `id`: Identifier of the Resource Pool
     *
     * - `name`:
     *
     * @return Deleted
     */
    deleteReservation(params: ReservationService.DeleteReservationParams): __Observable<Error> {
      return this.deleteReservationResponse(params).pipe(
        __map(_r => _r.body as Error)
      );
    }
}

module ReservationService {

  /**
   * Parameters for listReservation
   */
  export interface ListReservationParams {

    /**
     * Requested index for start of resources to be provided in response
     */
    offset?: number;
    name?: string;

    /**
     * Requested number of resources to be provided in response
     */
    limit?: number;

    /**
     * Comma separated properties to display in response
     */
    fields?: string;
  }

  /**
   * Parameters for createReservation
   */
  export interface CreateReservationParams {

    /**
     * The Reservation to be created
     */
    body: ReservationCreate;
    name?: string;
  }

  /**
   * Parameters for retrieveReservation
   */
  export interface RetrieveReservationParams {

    /**
     * Identifier of the Reservation
     */
    id: string;
    name?: string;
  }

    /**
   * Parameters for deleteReservation
   */
     export interface DeleteReservationParams {

      /**
       * Identifier of the Reservation
       */
      id: string;
      name?: string;
    }

  /**
   * Parameters for patchReservation
   */
  export interface PatchReservationParams {

    /**
     * Identifier of the Reservation
     */
    id: string;

    /**
     * The Reservation to be updated
     */
    body: ReservationUpdate;
    name?: string;
  }
}

export { ReservationService }
