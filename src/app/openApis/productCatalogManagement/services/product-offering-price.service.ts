/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductOfferingPrice } from '../models/product-offering-price';
import { ProductOfferingPriceCreate } from '../models/product-offering-price-create';
import { ProductOfferingPriceUpdate } from '../models/product-offering-price-update';
@Injectable({
  providedIn: 'root',
})
class ProductOfferingPriceService extends __BaseService {
  static readonly listProductOfferingPricePath = '/productCatalogManagement/v4/productOfferingPrice';
  static readonly createProductOfferingPricePath = '/productCatalogManagement/v4/productOfferingPrice';
  static readonly retrieveProductOfferingPricePath = '/productCatalogManagement/v4/productOfferingPrice/{id}';
  static readonly deleteProductOfferingPricePath = '/productCatalogManagement/v4/productOfferingPrice/{id}';
  static readonly patchProductOfferingPricePath = '/productCatalogManagement/v4/productOfferingPrice/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ProductOfferingPrice objects
   *
   * This operation list or find ProductOfferingPrice entities
   * @param params The `ProductOfferingPriceService.ListProductOfferingPriceParams` containing the following parameters:
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
  listProductOfferingPriceResponse(params: ProductOfferingPriceService.ListProductOfferingPriceParams): __Observable<__StrictHttpResponse<Array<ProductOfferingPrice>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    if (params.allParams != null) __params = __params.set('allParams', params.allParams.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/productOfferingPrice`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductOfferingPrice>>;
      })
    );
  }
  /**
   * List or find ProductOfferingPrice objects
   *
   * This operation list or find ProductOfferingPrice entities
   * @param params The `ProductOfferingPriceService.ListProductOfferingPriceParams` containing the following parameters:
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
  listProductOfferingPrice(params: ProductOfferingPriceService.ListProductOfferingPriceParams): __Observable<Array<ProductOfferingPrice>> {
    return this.listProductOfferingPriceResponse(params).pipe(
      __map(_r => _r.body as Array<ProductOfferingPrice>)
    );
  }

  /**
   * Creates a ProductOfferingPrice
   *
   * This operation creates a ProductOfferingPrice entity.
   * @param productOfferingPrice The ProductOfferingPrice to be created
   * @return OK or Created
   */
  createProductOfferingPriceResponse(productOfferingPrice: ProductOfferingPriceCreate): __Observable<__StrictHttpResponse<ProductOfferingPrice | ProductOfferingPrice>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productOfferingPrice;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/productOfferingPrice`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductOfferingPrice | ProductOfferingPrice>;
      })
    );
  }
  /**
   * Creates a ProductOfferingPrice
   *
   * This operation creates a ProductOfferingPrice entity.
   * @param productOfferingPrice The ProductOfferingPrice to be created
   * @return OK or Created
   */
  createProductOfferingPrice(productOfferingPrice: ProductOfferingPriceCreate): __Observable<ProductOfferingPrice | ProductOfferingPrice> {
    return this.createProductOfferingPriceResponse(productOfferingPrice).pipe(
      __map(_r => _r.body as ProductOfferingPrice | ProductOfferingPrice)
    );
  }

  /**
   * Retrieves a ProductOfferingPrice by ID
   *
   * This operation retrieves a ProductOfferingPrice entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ProductOfferingPriceService.RetrieveProductOfferingPriceParams` containing the following parameters:
   *
   * - `id`: Identifier of the ProductOfferingPrice
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveProductOfferingPriceResponse(params: ProductOfferingPriceService.RetrieveProductOfferingPriceParams): __Observable<__StrictHttpResponse<ProductOfferingPrice>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/productOfferingPrice/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductOfferingPrice>;
      })
    );
  }
  /**
   * Retrieves a ProductOfferingPrice by ID
   *
   * This operation retrieves a ProductOfferingPrice entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ProductOfferingPriceService.RetrieveProductOfferingPriceParams` containing the following parameters:
   *
   * - `id`: Identifier of the ProductOfferingPrice
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveProductOfferingPrice(params: ProductOfferingPriceService.RetrieveProductOfferingPriceParams): __Observable<ProductOfferingPrice> {
    return this.retrieveProductOfferingPriceResponse(params).pipe(
      __map(_r => _r.body as ProductOfferingPrice)
    );
  }

  /**
   * Deletes a ProductOfferingPrice
   *
   * This operation deletes a ProductOfferingPrice entity.
   * @param id Identifier of the ProductOfferingPrice
   * @return Deleted
   */
  deleteProductOfferingPriceResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/productCatalogManagement/v4/productOfferingPrice/${encodeURIComponent(String(id))}`,
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
   * Deletes a ProductOfferingPrice
   *
   * This operation deletes a ProductOfferingPrice entity.
   * @param id Identifier of the ProductOfferingPrice
   * @return Deleted
   */
  deleteProductOfferingPrice(id: string): __Observable<{}> {
    return this.deleteProductOfferingPriceResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ProductOfferingPrice
   *
   * This operation updates partially a ProductOfferingPrice entity.
   * @param params The `ProductOfferingPriceService.PatchProductOfferingPriceParams` containing the following parameters:
   *
   * - `productOfferingPrice`: The ProductOfferingPrice to be updated
   *
   * - `id`: Identifier of the ProductOfferingPrice
   *
   * @return Updated
   */
  patchProductOfferingPriceResponse(params: ProductOfferingPriceService.PatchProductOfferingPriceParams): __Observable<__StrictHttpResponse<ProductOfferingPrice>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productOfferingPrice;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/productCatalogManagement/v4/productOfferingPrice/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductOfferingPrice>;
      })
    );
  }
  /**
   * Updates partially a ProductOfferingPrice
   *
   * This operation updates partially a ProductOfferingPrice entity.
   * @param params The `ProductOfferingPriceService.PatchProductOfferingPriceParams` containing the following parameters:
   *
   * - `productOfferingPrice`: The ProductOfferingPrice to be updated
   *
   * - `id`: Identifier of the ProductOfferingPrice
   *
   * @return Updated
   */
  patchProductOfferingPrice(params: ProductOfferingPriceService.PatchProductOfferingPriceParams): __Observable<ProductOfferingPrice> {
    return this.patchProductOfferingPriceResponse(params).pipe(
      __map(_r => _r.body as ProductOfferingPrice)
    );
  }
}

module ProductOfferingPriceService {

  /**
   * Parameters for listProductOfferingPrice
   */
  export interface ListProductOfferingPriceParams {

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
    allParams?: string;
  }

  /**
   * Parameters for retrieveProductOfferingPrice
   */
  export interface RetrieveProductOfferingPriceParams {

    /**
     * Identifier of the ProductOfferingPrice
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchProductOfferingPrice
   */
  export interface PatchProductOfferingPriceParams {

    /**
     * The ProductOfferingPrice to be updated
     */
    productOfferingPrice: ProductOfferingPriceUpdate;

    /**
     * Identifier of the ProductOfferingPrice
     */
    id: string;
  }
}

export { ProductOfferingPriceService }
