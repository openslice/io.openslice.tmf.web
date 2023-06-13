/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductOffering } from '../models/product-offering';
import { ProductOfferingCreate } from '../models/product-offering-create';
import { Error } from '../models/error';
import { ProductOfferingUpdate } from '../models/product-offering-update';
@Injectable({
  providedIn: 'root',
})
class ProductOfferingService extends __BaseService {
  static readonly listProductOfferingPath = '/productCatalogManagement/v4/productOffering';
  static readonly createProductOfferingPath = '/productCatalogManagement/v4/productOffering';
  static readonly retrieveProductOfferingPath = '/productCatalogManagement/v4/productOffering/{id}';
  static readonly deleteProductOfferingPath = '/productCatalogManagement/v4/productOffering/{id}';
  static readonly patchProductOfferingPath = '/productCatalogManagement/v4/productOffering/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ProductOffering objects
   *
   * This operation list or find ProductOffering entities
   * @param params The `ProductOfferingService.ListProductOfferingParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listProductOfferingResponse(params: ProductOfferingService.ListProductOfferingParams): __Observable<__StrictHttpResponse<Array<ProductOffering>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/productOffering`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductOffering>>;
      })
    );
  }
  /**
   * List or find ProductOffering objects
   *
   * This operation list or find ProductOffering entities
   * @param params The `ProductOfferingService.ListProductOfferingParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listProductOffering(params: ProductOfferingService.ListProductOfferingParams): __Observable<Array<ProductOffering>> {
    return this.listProductOfferingResponse(params).pipe(
      __map(_r => _r.body as Array<ProductOffering>)
    );
  }

  /**
   * Creates a ProductOffering
   *
   * This operation creates a ProductOffering entity.
   * @param productOffering The ProductOffering to be created
   * @return OK or Created
   */
  createProductOfferingResponse(productOffering: ProductOfferingCreate): __Observable<__StrictHttpResponse<ProductOffering | ProductOffering>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productOffering;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/productOffering`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductOffering | ProductOffering>;
      })
    );
  }
  /**
   * Creates a ProductOffering
   *
   * This operation creates a ProductOffering entity.
   * @param productOffering The ProductOffering to be created
   * @return OK or Created
   */
  createProductOffering(productOffering: ProductOfferingCreate): __Observable<ProductOffering | ProductOffering> {
    return this.createProductOfferingResponse(productOffering).pipe(
      __map(_r => _r.body as ProductOffering | ProductOffering)
    );
  }

  /**
   * Retrieves a ProductOffering by ID
   *
   * This operation retrieves a ProductOffering entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ProductOfferingService.RetrieveProductOfferingParams` containing the following parameters:
   *
   * - `id`: Identifier of the ProductOffering
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveProductOfferingResponse(params: ProductOfferingService.RetrieveProductOfferingParams): __Observable<__StrictHttpResponse<ProductOffering>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/productOffering/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductOffering>;
      })
    );
  }
  /**
   * Retrieves a ProductOffering by ID
   *
   * This operation retrieves a ProductOffering entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ProductOfferingService.RetrieveProductOfferingParams` containing the following parameters:
   *
   * - `id`: Identifier of the ProductOffering
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveProductOffering(params: ProductOfferingService.RetrieveProductOfferingParams): __Observable<ProductOffering> {
    return this.retrieveProductOfferingResponse(params).pipe(
      __map(_r => _r.body as ProductOffering)
    );
  }

  /**
   * Deletes a ProductOffering
   *
   * This operation deletes a ProductOffering entity.
   * @param id Identifier of the ProductOffering
   * @return Deleted
   */
  deleteProductOfferingResponse(id: string): __Observable<__StrictHttpResponse<Error>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/productCatalogManagement/v4/productOffering/${encodeURIComponent(String(id))}`,
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
   * Deletes a ProductOffering
   *
   * This operation deletes a ProductOffering entity.
   * @param id Identifier of the ProductOffering
   * @return Deleted
   */
  deleteProductOffering(id: string): __Observable<Error> {
    return this.deleteProductOfferingResponse(id).pipe(
      __map(_r => _r.body as Error)
    );
  }

  /**
   * Updates partially a ProductOffering
   *
   * This operation updates partially a ProductOffering entity.
   * @param params The `ProductOfferingService.PatchProductOfferingParams` containing the following parameters:
   *
   * - `productOffering`: The ProductOffering to be updated
   *
   * - `id`: Identifier of the ProductOffering
   *
   * @return Updated
   */
  patchProductOfferingResponse(params: ProductOfferingService.PatchProductOfferingParams): __Observable<__StrictHttpResponse<ProductOffering>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productOffering;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/productCatalogManagement/v4/productOffering/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductOffering>;
      })
    );
  }
  /**
   * Updates partially a ProductOffering
   *
   * This operation updates partially a ProductOffering entity.
   * @param params The `ProductOfferingService.PatchProductOfferingParams` containing the following parameters:
   *
   * - `productOffering`: The ProductOffering to be updated
   *
   * - `id`: Identifier of the ProductOffering
   *
   * @return Updated
   */
  patchProductOffering(params: ProductOfferingService.PatchProductOfferingParams): __Observable<ProductOffering> {
    return this.patchProductOfferingResponse(params).pipe(
      __map(_r => _r.body as ProductOffering)
    );
  }
}

module ProductOfferingService {

  /**
   * Parameters for listProductOffering
   */
  export interface ListProductOfferingParams {

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
   * Parameters for retrieveProductOffering
   */
  export interface RetrieveProductOfferingParams {

    /**
     * Identifier of the ProductOffering
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchProductOffering
   */
  export interface PatchProductOfferingParams {

    /**
     * The ProductOffering to be updated
     */
    productOffering: ProductOfferingUpdate;

    /**
     * Identifier of the ProductOffering
     */
    id: string;
  }
}

export { ProductOfferingService }
