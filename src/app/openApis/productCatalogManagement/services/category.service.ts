/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Category } from '../models/category';
import { CategoryCreate } from '../models/category-create';
import { CategoryUpdate } from '../models/category-update';
@Injectable({
  providedIn: 'root',
})
class CategoryService extends __BaseService {
  static readonly listCategoryPath = '/productCatalogManagement/v4/category';
  static readonly createCategoryPath = '/productCatalogManagement/v4/category';
  static readonly retrieveCategoryPath = '/productCatalogManagement/v4/category/{id}';
  static readonly deleteCategoryPath = '/productCatalogManagement/v4/category/{id}';
  static readonly patchCategoryPath = '/productCatalogManagement/v4/category/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find Category objects
   *
   * This operation list or find Category entities
   * @param params The `CategoryService.ListCategoryParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listCategoryResponse(params: CategoryService.ListCategoryParams): __Observable<__StrictHttpResponse<Array<Category>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/category`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Category>>;
      })
    );
  }
  /**
   * List or find Category objects
   *
   * This operation list or find Category entities
   * @param params The `CategoryService.ListCategoryParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listCategory(params: CategoryService.ListCategoryParams): __Observable<Array<Category>> {
    return this.listCategoryResponse(params).pipe(
      __map(_r => _r.body as Array<Category>)
    );
  }

  /**
   * Creates a Category
   *
   * This operation creates a Category entity.
   * @param category The Category to be created
   * @return OK or Created
   */
  createCategoryResponse(category: CategoryCreate): __Observable<__StrictHttpResponse<Category | Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = category;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/productCatalogManagement/v4/category`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category | Category>;
      })
    );
  }
  /**
   * Creates a Category
   *
   * This operation creates a Category entity.
   * @param category The Category to be created
   * @return OK or Created
   */
  createCategory(category: CategoryCreate): __Observable<Category | Category> {
    return this.createCategoryResponse(category).pipe(
      __map(_r => _r.body as Category | Category)
    );
  }

  /**
   * Retrieves a Category by ID
   *
   * This operation retrieves a Category entity. Attribute selection is enabled for all first level attributes.
   * @param params The `CategoryService.RetrieveCategoryParams` containing the following parameters:
   *
   * - `id`: Identifier of the Category
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveCategoryResponse(params: CategoryService.RetrieveCategoryParams): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/productCatalogManagement/v4/category/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * Retrieves a Category by ID
   *
   * This operation retrieves a Category entity. Attribute selection is enabled for all first level attributes.
   * @param params The `CategoryService.RetrieveCategoryParams` containing the following parameters:
   *
   * - `id`: Identifier of the Category
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveCategory(params: CategoryService.RetrieveCategoryParams): __Observable<Category> {
    return this.retrieveCategoryResponse(params).pipe(
      __map(_r => _r.body as Category)
    );
  }

  /**
   * Deletes a Category
   *
   * This operation deletes a Category entity.
   * @param id Identifier of the Category
   * @return Deleted
   */
  deleteCategoryResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/productCatalogManagement/v4/category/${encodeURIComponent(String(id))}`,
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
   * Deletes a Category
   *
   * This operation deletes a Category entity.
   * @param id Identifier of the Category
   * @return Deleted
   */
  deleteCategory(id: string): __Observable<{}> {
    return this.deleteCategoryResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a Category
   *
   * This operation updates partially a Category entity.
   * @param params The `CategoryService.PatchCategoryParams` containing the following parameters:
   *
   * - `id`: Identifier of the Category
   *
   * - `category`: The Category to be updated
   *
   * @return Updated
   */
  patchCategoryResponse(params: CategoryService.PatchCategoryParams): __Observable<__StrictHttpResponse<Category>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.category;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/productCatalogManagement/v4/category/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Category>;
      })
    );
  }
  /**
   * Updates partially a Category
   *
   * This operation updates partially a Category entity.
   * @param params The `CategoryService.PatchCategoryParams` containing the following parameters:
   *
   * - `id`: Identifier of the Category
   *
   * - `category`: The Category to be updated
   *
   * @return Updated
   */
  patchCategory(params: CategoryService.PatchCategoryParams): __Observable<Category> {
    return this.patchCategoryResponse(params).pipe(
      __map(_r => _r.body as Category)
    );
  }
}

module CategoryService {

  /**
   * Parameters for listCategory
   */
  export interface ListCategoryParams {

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
   * Parameters for retrieveCategory
   */
  export interface RetrieveCategoryParams {

    /**
     * Identifier of the Category
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchCategory
   */
  export interface PatchCategoryParams {

    /**
     * Identifier of the Category
     */
    id: string;

    /**
     * The Category to be updated
     */
    category: CategoryUpdate;
  }
}

export { CategoryService }
