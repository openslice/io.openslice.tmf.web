/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourceSpecification } from '../models/resource-specification';
import { JsonNode } from '../models/json-node';
import { ResourceSpecificationUpdate } from '../models/resource-specification-update';
import { ByteArrayResource } from '../models/byte-array-resource';
@Injectable({
  providedIn: 'root',
})
class ResourceSpecificationService extends __BaseService {
  static readonly listResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification';
  static readonly createResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification';
  static readonly retrieveResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}';
  static readonly deleteResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}';
  static readonly patchResourceSpecificationPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}';
  static readonly addAttachmentToResourceSpecPath = '/resourceCatalogManagement/v4/resourceSpecification/{id}/attachment';
  static readonly getAttachment1Path = '/resourceCatalogManagement/v4/resourceSpecification/{id}/attachment/{attid}';
  static readonly getAttachmentWithFilename1Path = '/resourceCatalogManagement/v4/resourceSpecification/{id}/attachment/{attid}/{afilename}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
   * @param jsonNode The ResourceSpecification to be created
   * @return OK or Created
   */
  createResourceSpecificationResponse(jsonNode: JsonNode): __Observable<__StrictHttpResponse<ResourceSpecification | ResourceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = jsonNode;
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
   * @param jsonNode The ResourceSpecification to be created
   * @return OK or Created
   */
  createResourceSpecification(jsonNode: JsonNode): __Observable<ResourceSpecification | ResourceSpecification> {
    return this.createResourceSpecificationResponse(jsonNode).pipe(
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
   * @return Deleted
   */
  deleteResourceSpecificationResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
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
        return _r as __StrictHttpResponse<{}>;
      })
    );
  }
  /**
   * Deletes a ResourceSpecification
   *
   * This operation deletes a ResourceSpecification entity.
   * @param id Identifier of the ResourceSpecification
   * @return Deleted
   */
  deleteResourceSpecification(id: string): __Observable<{}> {
    return this.deleteResourceSpecificationResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ResourceSpecification
   *
   * This operation updates partially a ResourceSpecification entity.
   * @param params The `ResourceSpecificationService.PatchResourceSpecificationParams` containing the following parameters:
   *
   * - `serviceSpecification`: The ResourceSpecification to be updated
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * @return Updated
   */
  patchResourceSpecificationResponse(params: ResourceSpecificationService.PatchResourceSpecificationParams): __Observable<__StrictHttpResponse<ResourceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serviceSpecification;

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
   * - `serviceSpecification`: The ResourceSpecification to be updated
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
   * Adds an attachment to a 'ResourceSpecification'
   *
   * This operation adds an attachment to a ResourceSpecification
   * @param params The `ResourceSpecificationService.AddAttachmentToResourceSpecParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `afile`: The Attachment file to be added
   *
   * @return OK or Created
   */
  addAttachmentToResourceSpecResponse(params: ResourceSpecificationService.AddAttachmentToResourceSpecParams): __Observable<__StrictHttpResponse<ResourceSpecification | ResourceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    
    // EDIT: editing auto-generated services from ng-swagger-gen
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
        return _r as __StrictHttpResponse<ResourceSpecification | ResourceSpecification>;
      })
    );
  }
  /**
   * Adds an attachment to a 'ResourceSpecification'
   *
   * This operation adds an attachment to a ResourceSpecification
   * @param params The `ResourceSpecificationService.AddAttachmentToResourceSpecParams` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `afile`: The Attachment file to be added
   *
   * @return OK or Created
   */
  addAttachmentToResourceSpec(params: ResourceSpecificationService.AddAttachmentToResourceSpecParams): __Observable<ResourceSpecification | ResourceSpecification> {
    return this.addAttachmentToResourceSpecResponse(params).pipe(
      __map(_r => _r.body as ResourceSpecification | ResourceSpecification)
    );
  }

  /**
   * Get an attachment from a 'ResourceSpecification'
   *
   * This operation gets an attachment
   * @param params The `ResourceSpecificationService.GetAttachment1Params` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * @return Success
   */
  getAttachment1Response(params: ResourceSpecificationService.GetAttachment1Params): __Observable<__StrictHttpResponse<ByteArrayResource>> {
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ByteArrayResource>;
      })
    );
  }
  /**
   * Get an attachment from a 'ResourceSpecification'
   *
   * This operation gets an attachment
   * @param params The `ResourceSpecificationService.GetAttachment1Params` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * @return Success
   */
  getAttachment1(params: ResourceSpecificationService.GetAttachment1Params): __Observable<ByteArrayResource> {
    return this.getAttachment1Response(params).pipe(
      __map(_r => _r.body as ByteArrayResource)
    );
  }

  /**
   * Get an attachment from a 'ResourceSpecification' with filename
   *
   * This operation gets an attachment
   * @param params The `ResourceSpecificationService.GetAttachmentWithFilename1Params` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * - `afilename`: Identifier of the Filename
   *
   * @return Success
   */
  getAttachmentWithFilename1Response(params: ResourceSpecificationService.GetAttachmentWithFilename1Params): __Observable<__StrictHttpResponse<ByteArrayResource>> {
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
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ByteArrayResource>;
      })
    );
  }
  /**
   * Get an attachment from a 'ResourceSpecification' with filename
   *
   * This operation gets an attachment
   * @param params The `ResourceSpecificationService.GetAttachmentWithFilename1Params` containing the following parameters:
   *
   * - `id`: Identifier of the ResourceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * - `afilename`: Identifier of the Filename
   *
   * @return Success
   */
  getAttachmentWithFilename1(params: ResourceSpecificationService.GetAttachmentWithFilename1Params): __Observable<ByteArrayResource> {
    return this.getAttachmentWithFilename1Response(params).pipe(
      __map(_r => _r.body as ByteArrayResource)
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
    serviceSpecification: ResourceSpecificationUpdate;

    /**
     * Identifier of the ResourceSpecification
     */
    id: string;
  }

  /**
   * Parameters for addAttachmentToResourceSpec
   */
  export interface AddAttachmentToResourceSpecParams {

    /**
     * Identifier of the ResourceSpecification
     */
    id: string;

    /**
     * The Attachment file to be added
     */

    //EDIT: Manually editing auto-generated property
    afile: Blob;
  }

  /**
   * Parameters for getAttachment1
   */
  export interface GetAttachment1Params {

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
   * Parameters for getAttachmentWithFilename1
   */
  export interface GetAttachmentWithFilename1Params {

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
