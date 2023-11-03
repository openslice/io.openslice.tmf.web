/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProductSpecification } from '../models/product-specification';
import { ProductSpecificationCreate } from '../models/product-specification-create';
import { ProductSpecificationUpdate } from '../models/product-specification-update';
@Injectable({
  providedIn: 'root',
})
class ProductSpecificationService extends __BaseService {
  static readonly listProductSpecificationPath = '/productCatalogManagement/v4/productSpecification';
  static readonly createProductSpecificationPath = '/productCatalogManagement/v4/productSpecification';
  static readonly retrieveProductSpecificationPath = '/productCatalogManagement/v4/productSpecification/{id}';
  static readonly deleteProductSpecificationPath = '/productCatalogManagement/v4/productSpecification/{id}';
  static readonly patchProductSpecificationPath = '/productCatalogManagement/v4/productSpecification/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ProductSpecification objects
   *
   * This operation list or find ProductSpecification entities
   * @param params The `ProductSpecificationService.ListProductSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listProductSpecificationResponse(params: ProductSpecificationService.ListProductSpecificationParams): __Observable<__StrictHttpResponse<Array<ProductSpecification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/productSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProductSpecification>>;
      })
    );
  }
  /**
   * List or find ProductSpecification objects
   *
   * This operation list or find ProductSpecification entities
   * @param params The `ProductSpecificationService.ListProductSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listProductSpecification(params: ProductSpecificationService.ListProductSpecificationParams): __Observable<Array<ProductSpecification>> {
    return this.listProductSpecificationResponse(params).pipe(
      __map(_r => _r.body as Array<ProductSpecification>)
    );
  }

  /**
   * Creates a ProductSpecification
   *
   * This operation creates a ProductSpecification entity.
   * @param productSpecification The ProductSpecification to be created
   * @return OK or Created
   */
  createProductSpecificationResponse(productSpecification: ProductSpecificationCreate): __Observable<__StrictHttpResponse<ProductSpecification | ProductSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = productSpecification;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/productSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductSpecification | ProductSpecification>;
      })
    );
  }
  /**
   * Creates a ProductSpecification
   *
   * This operation creates a ProductSpecification entity.
   * @param productSpecification The ProductSpecification to be created
   * @return OK or Created
   */
  createProductSpecification(productSpecification: ProductSpecificationCreate): __Observable<ProductSpecification | ProductSpecification> {
    return this.createProductSpecificationResponse(productSpecification).pipe(
      __map(_r => _r.body as ProductSpecification | ProductSpecification)
    );
  }

  /**
   * Retrieves a ProductSpecification by ID
   *
   * This operation retrieves a ProductSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ProductSpecificationService.RetrieveProductSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ProductSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveProductSpecificationResponse(params: ProductSpecificationService.RetrieveProductSpecificationParams): __Observable<__StrictHttpResponse<ProductSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/productSpecification/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductSpecification>;
      })
    );
  }
  /**
   * Retrieves a ProductSpecification by ID
   *
   * This operation retrieves a ProductSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ProductSpecificationService.RetrieveProductSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ProductSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveProductSpecification(params: ProductSpecificationService.RetrieveProductSpecificationParams): __Observable<ProductSpecification> {
    return this.retrieveProductSpecificationResponse(params).pipe(
      __map(_r => _r.body as ProductSpecification)
    );
  }

  /**
   * Deletes a ProductSpecification
   *
   * This operation deletes a ProductSpecification entity.
   * @param id Identifier of the ProductSpecification
   * @return Deleted
   */
  deleteProductSpecificationResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/productCatalogManagement/v4/productSpecification/${encodeURIComponent(String(id))}`,
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
   * Deletes a ProductSpecification
   *
   * This operation deletes a ProductSpecification entity.
   * @param id Identifier of the ProductSpecification
   * @return Deleted
   */
  deleteProductSpecification(id: string): __Observable<{}> {
    return this.deleteProductSpecificationResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ProductSpecification
   *
   * This operation updates partially a ProductSpecification entity.
   * @param params The `ProductSpecificationService.PatchProductSpecificationParams` containing the following parameters:
   *
   * - `productSpecification`: The ProductSpecification to be updated
   *
   * - `id`: Identifier of the ProductSpecification
   *
   * @return Updated
   */
  patchProductSpecificationResponse(params: ProductSpecificationService.PatchProductSpecificationParams): __Observable<__StrictHttpResponse<ProductSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.productSpecification;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/productCatalogManagement/v4/productSpecification/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProductSpecification>;
      })
    );
  }
  /**
   * Updates partially a ProductSpecification
   *
   * This operation updates partially a ProductSpecification entity.
   * @param params The `ProductSpecificationService.PatchProductSpecificationParams` containing the following parameters:
   *
   * - `productSpecification`: The ProductSpecification to be updated
   *
   * - `id`: Identifier of the ProductSpecification
   *
   * @return Updated
   */
  patchProductSpecification(params: ProductSpecificationService.PatchProductSpecificationParams): __Observable<ProductSpecification> {
    return this.patchProductSpecificationResponse(params).pipe(
      __map(_r => _r.body as ProductSpecification)
    );
  }
}

module ProductSpecificationService {

  /**
   * Parameters for listProductSpecification
   */
  export interface ListProductSpecificationParams {

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
   * Parameters for retrieveProductSpecification
   */
  export interface RetrieveProductSpecificationParams {

    /**
     * Identifier of the ProductSpecification
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchProductSpecification
   */
  export interface PatchProductSpecificationParams {

    /**
     * The ProductSpecification to be updated
     */
    productSpecification: ProductSpecificationUpdate;

    /**
     * Identifier of the ProductSpecification
     */
    id: string;
  }
}

export { ProductSpecificationService }
