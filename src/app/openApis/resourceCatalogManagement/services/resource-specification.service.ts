/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourceSpecification } from '../models/resource-specification';
import { ResourceSpecificationCreate } from '../models/resource-specification-create';
import { ResourceSpecificationUpdate } from '../models/resource-specification-update';
import { Attachment } from '../models/attachment';
import { Resource } from '../models/resource';
@Injectable({
  providedIn: 'root',
})
class ResourceSpecificationService extends __BaseService {
  static readonly listResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification';
  static readonly createResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification';
  //static readonly cloneGSTServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/cloneGST';
  //static readonly cloneVINNIServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/cloneVINNI';
  //static readonly createServiceSpecificationFromNSDIDPath = '/serviceCatalogManagement/v4/serviceSpecification/specFromNSDID/{id}';
  static readonly retrieveResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}';
  static readonly deleteResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}';
  static readonly patchResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}';
  static readonly addAttachmentToResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}/attachment';
  static readonly getAttachmentPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}/attachment/{attid}';
  static readonly getAttachmentWithFilenamePath = '/resourceCatalogManagement/v4/resourceSpecification/{id}/attachment/{attid}/{afilename}';
  static readonly cloneResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}/clone';
  static readonly retrieveResourceSpecificationDescriptorPath = '/resourceCatalogManagement/v4/serviceSpecification/{id}/sd';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ServiceSpecification objects
   *
   * This operation list or find ServiceSpecification entities
   * @param params The `ServiceSpecificationService.ListServiceSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceSpecificationResponse(params: ResourceSpecificationService.ListResourceSpecificationParams): __Observable<__StrictHttpResponse<Array<ResourceSpecification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ResourceSpecification>>;
      })
    );
  }
  /**
   * List or find ResourceSpecification objects
   *
   * This operation list or find ResourceSpecification entities
   * @param params The `ResourceSpecificationService.ListResourceSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listResourceSpecification(params: ResourceSpecificationService.ListResourceSpecificationParams): __Observable<Array<ResourceSpecification>> {
    return this.listResourceSpecificationResponse(params).pipe(
      __map(_r => _r.body as Array<ResourceSpecification>)
    );
  }

  /**
   * Creates a ResourceSpecification
   *
   * This operation creates a ResourceSpecification entity.
   * @param resourceSpecification The ResourceSpecification to be created
   * @return OK or Created
   */
  createResourceSpecificationResponse(resourceSpecification: ResourceSpecificationCreate): __Observable<__StrictHttpResponse<ResourceSpecification | ResourceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = resourceSpecification;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceSpecification | ResourceSpecification>;
      })
    );
  }
  /**
   * Creates a ResourceSpecification
   *
   * This operation creates a ResourceSpecification entity.
   * @param resourceSpecification The ResourceSpecification to be created
   * @return OK or Created
   */
  createResourceSpecification(resourceSpecification: ResourceSpecificationCreate): __Observable<ResourceSpecification | ResourceSpecification> {
    return this.createResourceSpecificationResponse(resourceSpecification).pipe(
      __map(_r => _r.body as ResourceSpecification | ResourceSpecification)
    );
  }

  /**
   * Retrieves a ResourceSpecification by ID
   *
   * This operation retrieves a ResourceSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceSpecificationService.RetrieveResourceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceSpecificationResponse(params: ResourceSpecificationService.RetrieveResourceSpecificationParams): __Observable<__StrictHttpResponse<ResourceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceSpecification>;
      })
    );
  }
  /**
   * Retrieves a ResourceSpecification by ID
   *
   * This operation retrieves a ResourceSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ResourceSpecificationService.RetrieveResourceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveResourceSpecification(params: ResourceSpecificationService.RetrieveResourceSpecificationParams): __Observable<ResourceSpecification> {
    return this.retrieveResourceSpecificationResponse(params).pipe(
      __map(_r => _r.body as ResourceSpecification)
    );
  }

  /**
   * Deletes a ResourceSpecification
   *
   * This operation deletes a ResourceSpecification entity.
   * @param id Identifier of the ResourceSpecification
   */
  deleteResourceSpecificationResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceSpecification/${encodeURIComponent(id)}`,
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
   * Deletes a ResourceSpecification
   *
   * This operation deletes a ResourceSpecification entity.
   * @param id Identifier of the ResourceSpecification
   */
  deleteResourceSpecification(id: string): __Observable<null> {
    return this.deleteResourceSpecificationResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates partially a ResourceSpecification
   *
   * This operation updates partially a ResourceSpecification entity.
   * @param params The `ResourceSpecificationService.PatchResourceSpecificationParams` containing the following parameters:
   *
   * - `resourceSpecification`: The ResourceSpecification to be updated
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * @return Updated
   */
  patchResourceSpecificationResponse(params: ResourceSpecificationService.PatchResourceSpecificationParams): __Observable<__StrictHttpResponse<ResourceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.resourceSpecification;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourceSpecification>;
      })
    );
  }
  /**
   * Updates partially a ResourceSpecification
   *
   * This operation updates partially a ResourceSpecification entity.
   * @param params The `ResourceSpecificationService.PatchResourceSpecificationParams` containing the following parameters:
   *
   * - `resourceSpecification`: The ResourceSpecification to be updated
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * @return Updated
   */
  patchResourceSpecification(params: ResourceSpecificationService.PatchResourceSpecificationParams): __Observable<ResourceSpecification> {
    return this.patchResourceSpecificationResponse(params).pipe(
      __map(_r => _r.body as ResourceSpecification)
    );
  }

  /**
   * Adds an attachment to a ResourceSpecification
   *
   * This operation adds an attachment to a ResourceSpecification and updates partially a ResourceSpecification entity
   * @param params The `ResourceSpecificationService.AddAttachmentToResourceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `afile`: The Attachment file to be added
   *
   * @return Success
   */
  addAttachmentToResourceSpecificationResponse(params: ResourceSpecificationService.AddAttachmentToResourceSpecificationParams): __Observable<__StrictHttpResponse<Attachment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.afile != null) { __formData.append('afile', params.afile as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/resourceSpecification/${encodeURIComponent(params.id)}/attachment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Attachment>;
      })
    );
  }
  /**
   * Adds an attachment to a ResourceSpecification
   *
   * This operation adds an attachment to a ResourceSpecification and updates partially a ResourceSpecification entity
   * @param params The `ResourceSpecificationService.AddAttachmentToResourceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `afile`: The Attachment file to be added
   *
   * @return Success
   */
  addAttachmentToResourceSpecification(params: ResourceSpecificationService.AddAttachmentToResourceSpecificationParams): __Observable<Attachment> {
    return this.addAttachmentToResourceSpecificationResponse(params).pipe(
      __map(_r => _r.body as Attachment)
    );
  }
   /**
   * Get an attachment
   *
   * This operation gets an attachment
   * @param params The `ResourceSpecificationService.GetAttachmentParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * @return Success
   */
    getAttachmentResponse(params: ResourceSpecificationService.GetAttachmentParams): __Observable<__StrictHttpResponse<Resource>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;


      let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + `/resourceCatalogManagement/v4/resourceSpecification/${encodeURIComponent(params.id)}/attachment/${encodeURIComponent(params.attid)}`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'blob'
        });

      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<Resource>;
        })
      );
    }

    /**
     * Get an attachment
     *
     * This operation gets an attachment
     * @param params The `ResourceSpecificationService.GetAttachmentParams` containing the following parameters:
     *
     * - `id`: Identifier of the ResourceSpecification
     *
     * - `attid`: Identifier of the Attachment
     *
     * @return Success
     */
    getAttachment(params: ResourceSpecificationService.GetAttachmentParams): __Observable<Blob> {
      return this.getAttachmentResponse(params).pipe(
        __map(_r => _r.body as Blob)
      );
    }

    /**
     * Get an attachment with filename
     *
     * This operation gets an attachment
     * @param params The `ResourceSpecificationService.GetAttachmentWithFilenameParams` containing the following parameters:
     *
     * - `id`: Identifier of the ResourceSpecification
     *
     * - `attid`: Identifier of the Attachment
     *
     * - `afilename`: Identifier of the Filename
     *
     * @return Success
     */
    getAttachmentWithFilenameResponse(params: ResourceSpecificationService.GetAttachmentWithFilenameParams): __Observable<__StrictHttpResponse<Resource>> {
      let __params = this.newParams();
      let __headers = new HttpHeaders();
      let __body: any = null;



      let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + `/resourceCatalogManagement/v4/resourceSpecification/${encodeURIComponent(params.id)}/attachment/${encodeURIComponent(params.attid)}/${encodeURIComponent(params.afilename)}`,
        __body,
        {
          headers: __headers,
          params: __params,
          responseType: 'blob'
        });

      return this.http.request<any>(req).pipe(
        __filter(_r => _r instanceof HttpResponse),
        __map((_r) => {
          return _r as __StrictHttpResponse<Resource>;
        })
      );
    }
    /**
     * Get an attachment with filename
     *
     * This operation gets an attachment
     * @param params The `ResourceSpecificationService.GetAttachmentWithFilenameParams` containing the following parameters:
     *
     * - `id`: Identifier of the ResourceSpecification
     *
     * - `attid`: Identifier of the Attachment
     *
     * - `afilename`: Identifier of the Filename
     *
     * @return Success
     */
    getAttachmentWithFilename(params: ResourceSpecificationService.GetAttachmentWithFilenameParams): __Observable<Resource> {
      return this.getAttachmentWithFilenameResponse(params).pipe(
        __map(_r => _r.body as Resource)
      );
    }
}


module ResourceSpecificationService {

  /**
   * Parameters for listResourceSpecification
   */
  export interface ListResourceSpecificationParams {

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
   * Parameters for retrieveResourceSpecification
   */
  export interface RetrieveResourceSpecificationParams {

    /**
     * Identifier of the ResourceSpecification
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchResourceSpecification
   */
  export interface PatchResourceSpecificationParams {

    /**
     * The ResourceSpecification to be updated
     */
    resourceSpecification: ResourceSpecificationUpdate;

    /**
     * Identifier of the ResourceSpecification
     */
    id: string;
  }

  /**
   * Parameters for addAttachmentToResourceSpecification
   */
  export interface AddAttachmentToResourceSpecificationParams {

    /**
     * Identifier of the ResourceSpecification
     */
    id: string;

    /**
     * The Attachment file to be added
     */
    afile?: Blob;
  }

  /**
   * Parameters for getAttachment
   */
  export interface GetAttachmentParams {

    /**
     * Identifier of the ResourceSpecification
     */
    id: string;

    /**
     * Identifier of the Attachment
     */
    attid: string;
  }

  /**
   * Parameters for getAttachmentWithFilename
   */
  export interface GetAttachmentWithFilenameParams {

    /**
     * Identifier of the ResourceSpecification
     */
    id: string;

    /**
     * Identifier of the Attachment
     */
    attid: string;

    /**
     * Identifier of the Filename
     */
    afilename: string;
  }
}

export { ResourceSpecificationService }
