/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Organization } from '../models/organization';
import { OrganizationCreate } from '../models/organization-create';
import { OrganizationUpdate } from '../models/organization-update';
@Injectable({
  providedIn: 'root',
})
class OrganizationService extends __BaseService {
  static readonly listOrganizationPath = '/party/v4/organization';
  static readonly createOrganizationPath = '/party/v4/organization';
  static readonly retrieveOrganizationPath = '/party/v4/organization/{id}';
  static readonly deleteOrganizationPath = '/party/v4/organization/{id}';
  static readonly patchOrganizationPath = '/party/v4/organization/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find Organization objects
   *
   * This operation list or find Organization entities
   * @param params The `OrganizationService.ListOrganizationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listOrganizationResponse(params: OrganizationService.ListOrganizationParams): __Observable<__StrictHttpResponse<Array<Organization>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/party/v4/organization`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Organization>>;
      })
    );
  }
  /**
   * List or find Organization objects
   *
   * This operation list or find Organization entities
   * @param params The `OrganizationService.ListOrganizationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listOrganization(params: OrganizationService.ListOrganizationParams): __Observable<Array<Organization>> {
    return this.listOrganizationResponse(params).pipe(
      __map(_r => _r.body as Array<Organization>)
    );
  }

  /**
   * Creates a Organization
   *
   * This operation creates a Organization entity.
   * @param organization The Organization to be created
   * @return OK or Created
   */
  createOrganizationResponse(organization: OrganizationCreate): __Observable<__StrictHttpResponse<Organization | Organization>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = organization;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/party/v4/organization`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Organization | Organization>;
      })
    );
  }
  /**
   * Creates a Organization
   *
   * This operation creates a Organization entity.
   * @param organization The Organization to be created
   * @return OK or Created
   */
  createOrganization(organization: OrganizationCreate): __Observable<Organization | Organization> {
    return this.createOrganizationResponse(organization).pipe(
      __map(_r => _r.body as Organization | Organization)
    );
  }

  /**
   * Retrieves a Organization by ID
   *
   * This operation retrieves a Organization entity. Attribute selection is enabled for all first level attributes.
   * @param params The `OrganizationService.RetrieveOrganizationParams` containing the following parameters:
   *
   * - `id`: Identifier of the Organization
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveOrganizationResponse(params: OrganizationService.RetrieveOrganizationParams): __Observable<__StrictHttpResponse<Organization>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/party/v4/organization/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Organization>;
      })
    );
  }
  /**
   * Retrieves a Organization by ID
   *
   * This operation retrieves a Organization entity. Attribute selection is enabled for all first level attributes.
   * @param params The `OrganizationService.RetrieveOrganizationParams` containing the following parameters:
   *
   * - `id`: Identifier of the Organization
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveOrganization(params: OrganizationService.RetrieveOrganizationParams): __Observable<Organization> {
    return this.retrieveOrganizationResponse(params).pipe(
      __map(_r => _r.body as Organization)
    );
  }

  /**
   * Deletes a Organization
   *
   * This operation deletes a Organization entity.
   * @param id Identifier of the Organization
   */
  deleteOrganizationResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/party/v4/organization/${encodeURIComponent(id)}`,
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
   * Deletes a Organization
   *
   * This operation deletes a Organization entity.
   * @param id Identifier of the Organization
   */
  deleteOrganization(id: string): __Observable<null> {
    return this.deleteOrganizationResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a Organization
   *
   * This operation updates partially a Organization entity.
   * @param params The `OrganizationService.PatchOrganizationParams` containing the following parameters:
   *
   * - `organization`: The Organization to be updated
   *
   * - `id`: Identifier of the Organization
   *
   * @return Updated
   */
  patchOrganizationResponse(params: OrganizationService.PatchOrganizationParams): __Observable<__StrictHttpResponse<Organization>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.organization;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/party/v4/organization/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Organization>;
      })
    );
  }
  /**
   * Updates partially a Organization
   *
   * This operation updates partially a Organization entity.
   * @param params The `OrganizationService.PatchOrganizationParams` containing the following parameters:
   *
   * - `organization`: The Organization to be updated
   *
   * - `id`: Identifier of the Organization
   *
   * @return Updated
   */
  patchOrganization(params: OrganizationService.PatchOrganizationParams): __Observable<Organization> {
    return this.patchOrganizationResponse(params).pipe(
      __map(_r => _r.body as Organization)
    );
  }
}

module OrganizationService {

  /**
   * Parameters for listOrganization
   */
  export interface ListOrganizationParams {

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
   * Parameters for retrieveOrganization
   */
  export interface RetrieveOrganizationParams {

    /**
     * Identifier of the Organization
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchOrganization
   */
  export interface PatchOrganizationParams {

    /**
     * The Organization to be updated
     */
    organization: OrganizationUpdate;

    /**
     * Identifier of the Organization
     */
    id: string;
  }
}

export { OrganizationService }
