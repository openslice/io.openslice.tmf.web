/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Catalog } from '../models/catalog';
import { CatalogCreate } from '../models/catalog-create';
import { CatalogUpdate } from '../models/catalog-update';
@Injectable({
  providedIn: 'root',
})
class CatalogService extends __BaseService {
  static readonly listCatalogPath = '/productCatalogManagement/v4/catalog';
  static readonly createCatalogPath = '/productCatalogManagement/v4/catalog';
  static readonly retrieveCatalogPath = '/productCatalogManagement/v4/catalog/{id}';
  static readonly deleteCatalogPath = '/productCatalogManagement/v4/catalog/{id}';
  static readonly patchCatalogPath = '/productCatalogManagement/v4/catalog/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find Catalog objects
   *
   * This operation list or find Catalog entities
   * @param params The `CatalogService.ListCatalogParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listCatalogResponse(params: CatalogService.ListCatalogParams): __Observable<__StrictHttpResponse<Array<Catalog>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/catalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Catalog>>;
      })
    );
  }
  /**
   * List or find Catalog objects
   *
   * This operation list or find Catalog entities
   * @param params The `CatalogService.ListCatalogParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listCatalog(params: CatalogService.ListCatalogParams): __Observable<Array<Catalog>> {
    return this.listCatalogResponse(params).pipe(
      __map(_r => _r.body as Array<Catalog>)
    );
  }

  /**
   * Creates a Catalog
   *
   * This operation creates a Catalog entity.
   * @param catalog The Catalog to be created
   * @return OK or Created
   */
  createCatalogResponse(catalog: CatalogCreate): __Observable<__StrictHttpResponse<Catalog | Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = catalog;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/catalog`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Catalog | Catalog>;
      })
    );
  }
  /**
   * Creates a Catalog
   *
   * This operation creates a Catalog entity.
   * @param catalog The Catalog to be created
   * @return OK or Created
   */
  createCatalog(catalog: CatalogCreate): __Observable<Catalog | Catalog> {
    return this.createCatalogResponse(catalog).pipe(
      __map(_r => _r.body as Catalog | Catalog)
    );
  }

  /**
   * Retrieves a Catalog by ID
   *
   * This operation retrieves a Catalog entity. Attribute selection is enabled for all first level attributes.
   * @param params The `CatalogService.RetrieveCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the Catalog
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveCatalogResponse(params: CatalogService.RetrieveCatalogParams): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/catalog/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Catalog>;
      })
    );
  }
  /**
   * Retrieves a Catalog by ID
   *
   * This operation retrieves a Catalog entity. Attribute selection is enabled for all first level attributes.
   * @param params The `CatalogService.RetrieveCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the Catalog
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveCatalog(params: CatalogService.RetrieveCatalogParams): __Observable<Catalog> {
    return this.retrieveCatalogResponse(params).pipe(
      __map(_r => _r.body as Catalog)
    );
  }

  /**
   * Deletes a Catalog
   *
   * This operation deletes a Catalog entity.
   * @param id Identifier of the Catalog
   * @return Deleted
   */
  deleteCatalogResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/productCatalogManagement/v4/catalog/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Deletes a Catalog
   *
   * This operation deletes a Catalog entity.
   * @param id Identifier of the Catalog
   * @return Deleted
   */
  deleteCatalog(id: string): __Observable<{}> {
    return this.deleteCatalogResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a Catalog
   *
   * This operation updates partially a Catalog entity.
   * @param params The `CatalogService.PatchCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the Catalog
   *
   * - `catalog`: The Catalog to be updated
   *
   * @return Updated
   */
  patchCatalogResponse(params: CatalogService.PatchCatalogParams): __Observable<__StrictHttpResponse<Catalog>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.catalog;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/productCatalogManagement/v4/catalog/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Catalog>;
      })
    );
  }
  /**
   * Updates partially a Catalog
   *
   * This operation updates partially a Catalog entity.
   * @param params The `CatalogService.PatchCatalogParams` containing the following parameters:
   *
   * - `id`: Identifier of the Catalog
   *
   * - `catalog`: The Catalog to be updated
   *
   * @return Updated
   */
  patchCatalog(params: CatalogService.PatchCatalogParams): __Observable<Catalog> {
    return this.patchCatalogResponse(params).pipe(
      __map(_r => _r.body as Catalog)
    );
  }
}

module CatalogService {

  /**
   * Parameters for listCatalog
   */
  export interface ListCatalogParams {

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
   * Parameters for retrieveCatalog
   */
  export interface RetrieveCatalogParams {

    /**
     * Identifier of the Catalog
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchCatalog
   */
  export interface PatchCatalogParams {

    /**
     * Identifier of the Catalog
     */
    id: string;

    /**
     * The Catalog to be updated
     */
    catalog: CatalogUpdate;
  }
}

export { CatalogService }
