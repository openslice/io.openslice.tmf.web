/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServiceTestSpecification } from '../models/service-test-specification';
import { ServiceTestSpecificationCreate } from '../models/service-test-specification-create';
import { ServiceTestSpecificationUpdate } from '../models/service-test-specification-update';
import { Attachment } from '../models/attachment';
import { ByteArrayResource } from '../models/byte-array-resource';
@Injectable({
  providedIn: 'root',
})
class ServiceTestSpecificationService extends __BaseService {
  static readonly listServiceTestSpecificationPath = '/serviceTestManagement/v4/serviceTestSpecification';
  static readonly createServiceTestSpecificationPath = '/serviceTestManagement/v4/serviceTestSpecification';
  static readonly retrieveServiceTestSpecificationPath = '/serviceTestManagement/v4/serviceTestSpecification/{id}';
  static readonly deleteServiceTestSpecificationPath = '/serviceTestManagement/v4/serviceTestSpecification/{id}';
  static readonly patchServiceTestSpecificationPath = '/serviceTestManagement/v4/serviceTestSpecification/{id}';
  static readonly addAttachmentToServiceTestSpecificationPath = '/serviceTestManagement/v4/serviceTestSpecification/{id}/attachment';
  static readonly getAttachment2Path = '/serviceTestManagement/v4/serviceTestSpecification/{id}/attachment/{attid}';
  static readonly getAttachmentWithFilename2Path = '/serviceTestManagement/v4/serviceTestSpecification/{id}/attachment/{attid}/{afilename}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * List or find ServiceTestSpecification objects
   *
   * This operation list or find ServiceTestSpecification entities
   * @param params The `ServiceTestSpecificationService.ListServiceTestSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceTestSpecificationResponse(params: ServiceTestSpecificationService.ListServiceTestSpecificationParams): __Observable<__StrictHttpResponse<Array<ServiceTestSpecification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceTestManagement/v4/serviceTestSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServiceTestSpecification>>;
      })
    );
  }
  /**
   * List or find ServiceTestSpecification objects
   *
   * This operation list or find ServiceTestSpecification entities
   * @param params The `ServiceTestSpecificationService.ListServiceTestSpecificationParams` containing the following parameters:
   *
   * - `offset`: Requested index for start of resources to be provided in response
   *
   * - `limit`: Requested number of resources to be provided in response
   *
   * - `fields`: Comma-separated properties to be provided in response
   *
   * @return Success
   */
  listServiceTestSpecification(params: ServiceTestSpecificationService.ListServiceTestSpecificationParams): __Observable<Array<ServiceTestSpecification>> {
    return this.listServiceTestSpecificationResponse(params).pipe(
      __map(_r => _r.body as Array<ServiceTestSpecification>)
    );
  }

  /**
   * Creates a ServiceTestSpecification
   *
   * This operation creates a ServiceTestSpecification entity.
   * @param serviceSpecification The ServiceTestSpecification to be created
   * @return OK or Created
   */
  createServiceTestSpecificationResponse(serviceSpecification: ServiceTestSpecificationCreate): __Observable<__StrictHttpResponse<ServiceTestSpecification | ServiceTestSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = serviceSpecification;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/serviceTestSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceTestSpecification | ServiceTestSpecification>;
      })
    );
  }
  /**
   * Creates a ServiceTestSpecification
   *
   * This operation creates a ServiceTestSpecification entity.
   * @param serviceSpecification The ServiceTestSpecification to be created
   * @return OK or Created
   */
  createServiceTestSpecification(serviceSpecification: ServiceTestSpecificationCreate): __Observable<ServiceTestSpecification | ServiceTestSpecification> {
    return this.createServiceTestSpecificationResponse(serviceSpecification).pipe(
      __map(_r => _r.body as ServiceTestSpecification | ServiceTestSpecification)
    );
  }

  /**
   * Retrieves a ServiceTestSpecification by ID
   *
   * This operation retrieves a ServiceTestSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceTestSpecificationService.RetrieveServiceTestSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceTestSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceTestSpecificationResponse(params: ServiceTestSpecificationService.RetrieveServiceTestSpecificationParams): __Observable<__StrictHttpResponse<ServiceTestSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceTestManagement/v4/serviceTestSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceTestSpecification>;
      })
    );
  }
  /**
   * Retrieves a ServiceTestSpecification by ID
   *
   * This operation retrieves a ServiceTestSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceTestSpecificationService.RetrieveServiceTestSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceTestSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceTestSpecification(params: ServiceTestSpecificationService.RetrieveServiceTestSpecificationParams): __Observable<ServiceTestSpecification> {
    return this.retrieveServiceTestSpecificationResponse(params).pipe(
      __map(_r => _r.body as ServiceTestSpecification)
    );
  }

  /**
   * Deletes a ServiceTestSpecification
   *
   * This operation deletes a ServiceTestSpecification entity.
   * @param id Identifier of the ServiceTestSpecification
   * @return Deleted
   */
  deleteServiceTestSpecificationResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceTestManagement/v4/serviceTestSpecification/${encodeURIComponent(id)}`,
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
   * Deletes a ServiceTestSpecification
   *
   * This operation deletes a ServiceTestSpecification entity.
   * @param id Identifier of the ServiceTestSpecification
   * @return Deleted
   */
  deleteServiceTestSpecification(id: string): __Observable<{}> {
    return this.deleteServiceTestSpecificationResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ServiceTestSpecification
   *
   * This operation updates partially a ServiceTestSpecification entity.
   * @param params The `ServiceTestSpecificationService.PatchServiceTestSpecificationParams` containing the following parameters:
   *
   * - `serviceSpecification`: The ServiceTestSpecification to be updated
   *
   * - `id`: Identifier of the ServiceTestSpecification
   *
   * @return Updated
   */
  patchServiceTestSpecificationResponse(params: ServiceTestSpecificationService.PatchServiceTestSpecificationParams): __Observable<__StrictHttpResponse<ServiceTestSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serviceSpecification;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serviceTestManagement/v4/serviceTestSpecification/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceTestSpecification>;
      })
    );
  }
  /**
   * Updates partially a ServiceTestSpecification
   *
   * This operation updates partially a ServiceTestSpecification entity.
   * @param params The `ServiceTestSpecificationService.PatchServiceTestSpecificationParams` containing the following parameters:
   *
   * - `serviceSpecification`: The ServiceTestSpecification to be updated
   *
   * - `id`: Identifier of the ServiceTestSpecification
   *
   * @return Updated
   */
  patchServiceTestSpecification(params: ServiceTestSpecificationService.PatchServiceTestSpecificationParams): __Observable<ServiceTestSpecification> {
    return this.patchServiceTestSpecificationResponse(params).pipe(
      __map(_r => _r.body as ServiceTestSpecification)
    );
  }

  /**
   * Adds an attachment to a ServiceTestSpecification
   *
   * This operation adds an attachment to a ServiceTestSpecification and updates partially a ServiceTestSpecification entity
   * @param params The `ServiceTestSpecificationService.AddAttachmentToServiceTestSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceTestSpecification
   *
   * - `afile`: The Attachment file to be added
   *
   * @return Success
   */
  addAttachmentToServiceTestSpecificationResponse(params: ServiceTestSpecificationService.AddAttachmentToServiceTestSpecificationParams): __Observable<__StrictHttpResponse<Attachment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    
    // custom_code
    let __formData = new FormData();
    __body = __formData;

    if (params.afile != null) { __formData.append('afile', params.afile as string | Blob);}
    // /custom_code

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceTestManagement/v4/serviceTestSpecification/${encodeURIComponent(params.id)}/attachment`,
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
   * Adds an attachment to a ServiceTestSpecification
   *
   * This operation adds an attachment to a ServiceTestSpecification and updates partially a ServiceTestSpecification entity
   * @param params The `ServiceTestSpecificationService.AddAttachmentToServiceTestSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceTestSpecification
   *
   * - `afile`: The Attachment file to be added
   *
   * @return Success
   */
  addAttachmentToServiceTestSpecification(params: ServiceTestSpecificationService.AddAttachmentToServiceTestSpecificationParams): __Observable<Attachment> {
    return this.addAttachmentToServiceTestSpecificationResponse(params).pipe(
      __map(_r => _r.body as Attachment)
    );
  }

  /**
   * Get an attachment
   *
   * This operation gets an attachment
   * @param params The `ServiceTestSpecificationService.GetAttachment2Params` containing the following parameters:
   *
   * - `id`: Identifier of the serviceTestSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * @return Success
   */
  getAttachment2Response(params: ServiceTestSpecificationService.GetAttachment2Params): __Observable<__StrictHttpResponse<ByteArrayResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceTestManagement/v4/serviceTestSpecification/${encodeURIComponent(params.id)}/attachment/${encodeURIComponent(params.attid)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });
      // custom_code: responseType to 'blob'

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ByteArrayResource>;
      })
    );
  }
  /**
   * Get an attachment
   *
   * This operation gets an attachment
   * @param params The `ServiceTestSpecificationService.GetAttachment2Params` containing the following parameters:
   *
   * - `id`: Identifier of the serviceTestSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * @return Success
   */
  getAttachment2(params: ServiceTestSpecificationService.GetAttachment2Params): __Observable<Blob> {
    return this.getAttachment2Response(params).pipe(
      __map(_r => _r.body as Blob)
    );

    // custom_code: changed response type to 'blob'
  }

  /**
   * Get an attachment with filename
   *
   * This operation gets an attachment
   * @param params The `ServiceTestSpecificationService.GetAttachmentWithFilename2Params` containing the following parameters:
   *
   * - `id`: Identifier of the serviceTestSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * - `afilename`: Identifier of the Filename
   *
   * @return Success
   */
  getAttachmentWithFilename2Response(params: ServiceTestSpecificationService.GetAttachmentWithFilename2Params): __Observable<__StrictHttpResponse<ByteArrayResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceTestManagement/v4/serviceTestSpecification/${encodeURIComponent(params.id)}/attachment/${encodeURIComponent(params.attid)}/${encodeURIComponent(params.afilename)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

      // custom_code: changed response type to 'blob'


    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ByteArrayResource>;
      })
    );
  }
  /**
   * Get an attachment with filename
   *
   * This operation gets an attachment
   * @param params The `ServiceTestSpecificationService.GetAttachmentWithFilename2Params` containing the following parameters:
   *
   * - `id`: Identifier of the serviceTestSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * - `afilename`: Identifier of the Filename
   *
   * @return Success
   */
  getAttachmentWithFilename2(params: ServiceTestSpecificationService.GetAttachmentWithFilename2Params): __Observable<ByteArrayResource> {
    return this.getAttachmentWithFilename2Response(params).pipe(
      __map(_r => _r.body as ByteArrayResource)
    );
  }
}

module ServiceTestSpecificationService {

  /**
   * Parameters for listServiceTestSpecification
   */
  export interface ListServiceTestSpecificationParams {

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
   * Parameters for retrieveServiceTestSpecification
   */
  export interface RetrieveServiceTestSpecificationParams {

    /**
     * Identifier of the ServiceTestSpecification
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchServiceTestSpecification
   */
  export interface PatchServiceTestSpecificationParams {

    /**
     * The ServiceTestSpecification to be updated
     */
    serviceSpecification: ServiceTestSpecificationUpdate;

    /**
     * Identifier of the ServiceTestSpecification
     */
    id: string;
  }

  /**
   * Parameters for addAttachmentToServiceTestSpecification
   */
  export interface AddAttachmentToServiceTestSpecificationParams {

    /**
     * Identifier of the ServiceTestSpecification
     */
    id: string;

    /**
     * The Attachment file to be added
     */
    afile: Blob;

    // custom_code: changed response type to 'blob'

  }

  /**
   * Parameters for getAttachment2
   */
  export interface GetAttachment2Params {

    /**
     * Identifier of the serviceTestSpecification
     */
    id: string;

    /**
     * Identifier of the Attachment
     */
    attid: string;
  }

  /**
   * Parameters for getAttachmentWithFilename2
   */
  export interface GetAttachmentWithFilename2Params {

    /**
     * Identifier of the serviceTestSpecification
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

export { ServiceTestSpecificationService }
