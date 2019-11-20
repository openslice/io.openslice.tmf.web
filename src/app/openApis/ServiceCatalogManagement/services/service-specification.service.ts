/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ServiceSpecification } from '../models/service-specification';
import { ServiceSpecificationCreate } from '../models/service-specification-create';
import { ServiceSpecificationUpdate } from '../models/service-specification-update';
@Injectable({
  providedIn: 'root',
})
class ServiceSpecificationService extends __BaseService {
  static readonly listServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification';
  static readonly createServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification';
  static readonly cloneGSTServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/cloneGST';
  static readonly cloneVINNIServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/cloneVINNI';
  static readonly retrieveServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}';
  static readonly deleteServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}';
  static readonly patchServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}';
  static readonly addAttachmentToServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}/attachment';
  static readonly cloneServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}/clone';
  static readonly retrieveServiceSpecificationDescriptorPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}/sd';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
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
  listServiceSpecificationResponse(params: ServiceSpecificationService.ListServiceSpecificationParams): __Observable<__StrictHttpResponse<Array<ServiceSpecification>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.offset != null) __params = __params.set('offset', params.offset.toString());
    if (params.limit != null) __params = __params.set('limit', params.limit.toString());
    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ServiceSpecification>>;
      })
    );
  }
  /**
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
  listServiceSpecification(params: ServiceSpecificationService.ListServiceSpecificationParams): __Observable<Array<ServiceSpecification>> {
    return this.listServiceSpecificationResponse(params).pipe(
      __map(_r => _r.body as Array<ServiceSpecification>)
    );
  }

  /**
   * This operation creates a ServiceSpecification entity.
   * @param serviceSpecification The ServiceSpecification to be created
   * @return OK or Created
   */
  createServiceSpecificationResponse(serviceSpecification: ServiceSpecificationCreate): __Observable<__StrictHttpResponse<ServiceSpecification | ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = serviceSpecification;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceSpecification | ServiceSpecification>;
      })
    );
  }
  /**
   * This operation creates a ServiceSpecification entity.
   * @param serviceSpecification The ServiceSpecification to be created
   * @return OK or Created
   */
  createServiceSpecification(serviceSpecification: ServiceSpecificationCreate): __Observable<ServiceSpecification | ServiceSpecification> {
    return this.createServiceSpecificationResponse(serviceSpecification).pipe(
      __map(_r => _r.body as ServiceSpecification | ServiceSpecification)
    );
  }

  /**
   * This operation clones a ServiceSpecification GST entity. The response is the cloned spec
   * @param serviceName A name of the cloned GST
   * @return Cloned
   */
  cloneGSTServiceSpecificationResponse(serviceName?: string): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (serviceName != null) __params = __params.set('serviceName', serviceName.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/cloneGST`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceSpecification>;
      })
    );
  }
  /**
   * This operation clones a ServiceSpecification GST entity. The response is the cloned spec
   * @param serviceName A name of the cloned GST
   * @return Cloned
   */
  cloneGSTServiceSpecification(serviceName?: string): __Observable<ServiceSpecification> {
    return this.cloneGSTServiceSpecificationResponse(serviceName).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * This operation clones a ServiceSpecification 5G-VINNI entity. The response is the cloned spec
   * @param params The `ServiceSpecificationService.CloneVINNIServiceSpecificationParams` containing the following parameters:
   *
   * - `serviceName`: A name of the cloned VINNI Template
   *
   * - `addServiceVNF`: If true adds a Service 3rd party VNF Spec in the Bundle
   *
   * - `addServiceTopology`: If true adds a Service Topology Spec in the Bundle
   *
   * - `addServiceTesting`: If true adds a Service Testing Spec in the Bundle
   *
   * - `addServiceRequirements`: If true adds a Service Requirements Spec in the Bundle
   *
   * - `addServiceNSD`: If true adds a Service 3rd party NSD Spec in the Bundle
   *
   * - `addServiceMonitoring`: If true adds a Service Monitoring Spec in the Bundle
   *
   * - `addServiceExposureLevel4`: If true adds a Service Exposure Level4 Spec in the Bundle
   *
   * - `addServiceExposureLevel3`: If true adds a Service Exposure Level3 Spec in the Bundle
   *
   * - `addServiceExposureLevel2`: If true adds a Service Exposure Level2 Spec in the Bundle
   *
   * - `addServiceExposureLevel1`: If true adds a Service Exposure Level1 Spec in the Bundle
   *
   * @return Cloned
   */
  cloneVINNIServiceSpecificationResponse(params: ServiceSpecificationService.CloneVINNIServiceSpecificationParams): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.serviceName != null) __params = __params.set('serviceName', params.serviceName.toString());
    if (params.addServiceVNF != null) __params = __params.set('addServiceVNF', params.addServiceVNF.toString());
    if (params.addServiceTopology != null) __params = __params.set('addServiceTopology', params.addServiceTopology.toString());
    if (params.addServiceTesting != null) __params = __params.set('addServiceTesting', params.addServiceTesting.toString());
    if (params.addServiceRequirements != null) __params = __params.set('addServiceRequirements', params.addServiceRequirements.toString());
    if (params.addServiceNSD != null) __params = __params.set('addServiceNSD', params.addServiceNSD.toString());
    if (params.addServiceMonitoring != null) __params = __params.set('addServiceMonitoring', params.addServiceMonitoring.toString());
    if (params.addServiceExposureLevel4 != null) __params = __params.set('addServiceExposureLevel4', params.addServiceExposureLevel4.toString());
    if (params.addServiceExposureLevel3 != null) __params = __params.set('addServiceExposureLevel3', params.addServiceExposureLevel3.toString());
    if (params.addServiceExposureLevel2 != null) __params = __params.set('addServiceExposureLevel2', params.addServiceExposureLevel2.toString());
    if (params.addServiceExposureLevel1 != null) __params = __params.set('addServiceExposureLevel1', params.addServiceExposureLevel1.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/cloneVINNI`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceSpecification>;
      })
    );
  }
  /**
   * This operation clones a ServiceSpecification 5G-VINNI entity. The response is the cloned spec
   * @param params The `ServiceSpecificationService.CloneVINNIServiceSpecificationParams` containing the following parameters:
   *
   * - `serviceName`: A name of the cloned VINNI Template
   *
   * - `addServiceVNF`: If true adds a Service 3rd party VNF Spec in the Bundle
   *
   * - `addServiceTopology`: If true adds a Service Topology Spec in the Bundle
   *
   * - `addServiceTesting`: If true adds a Service Testing Spec in the Bundle
   *
   * - `addServiceRequirements`: If true adds a Service Requirements Spec in the Bundle
   *
   * - `addServiceNSD`: If true adds a Service 3rd party NSD Spec in the Bundle
   *
   * - `addServiceMonitoring`: If true adds a Service Monitoring Spec in the Bundle
   *
   * - `addServiceExposureLevel4`: If true adds a Service Exposure Level4 Spec in the Bundle
   *
   * - `addServiceExposureLevel3`: If true adds a Service Exposure Level3 Spec in the Bundle
   *
   * - `addServiceExposureLevel2`: If true adds a Service Exposure Level2 Spec in the Bundle
   *
   * - `addServiceExposureLevel1`: If true adds a Service Exposure Level1 Spec in the Bundle
   *
   * @return Cloned
   */
  cloneVINNIServiceSpecification(params: ServiceSpecificationService.CloneVINNIServiceSpecificationParams): __Observable<ServiceSpecification> {
    return this.cloneVINNIServiceSpecificationResponse(params).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * This operation retrieves a ServiceSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceSpecificationService.RetrieveServiceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceSpecificationResponse(params: ServiceSpecificationService.RetrieveServiceSpecificationParams): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.fields != null) __params = __params.set('fields', params.fields.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceSpecification>;
      })
    );
  }
  /**
   * This operation retrieves a ServiceSpecification entity. Attribute selection is enabled for all first level attributes.
   * @param params The `ServiceSpecificationService.RetrieveServiceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `fields`: Comma-separated properties to provide in response
   *
   * @return Success
   */
  retrieveServiceSpecification(params: ServiceSpecificationService.RetrieveServiceSpecificationParams): __Observable<ServiceSpecification> {
    return this.retrieveServiceSpecificationResponse(params).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * This operation deletes a ServiceSpecification entity.
   * @param id Identifier of the ServiceSpecification
   */
  deleteServiceSpecificationResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${id}`,
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
   * This operation deletes a ServiceSpecification entity.
   * @param id Identifier of the ServiceSpecification
   */
  deleteServiceSpecification(id: string): __Observable<null> {
    return this.deleteServiceSpecificationResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This operation updates partially a ServiceSpecification entity.
   * @param params The `ServiceSpecificationService.PatchServiceSpecificationParams` containing the following parameters:
   *
   * - `serviceSpecification`: The ServiceSpecification to be updated
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * @return Updated
   */
  patchServiceSpecificationResponse(params: ServiceSpecificationService.PatchServiceSpecificationParams): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.serviceSpecification;

    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceSpecification>;
      })
    );
  }
  /**
   * This operation updates partially a ServiceSpecification entity.
   * @param params The `ServiceSpecificationService.PatchServiceSpecificationParams` containing the following parameters:
   *
   * - `serviceSpecification`: The ServiceSpecification to be updated
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * @return Updated
   */
  patchServiceSpecification(params: ServiceSpecificationService.PatchServiceSpecificationParams): __Observable<ServiceSpecification> {
    return this.patchServiceSpecificationResponse(params).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * This operation adds an attachment to a ServiceSpecification and updates partially a ServiceSpecification entity
   * @param params The `ServiceSpecificationService.AddAttachmentToServiceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `attachment`: The Attachment object to be added
   *
   * - `afile`: The Attachment file to be added
   *
   * @return Success
   */
  addAttachmentToServiceSpecificationResponse(params: ServiceSpecificationService.AddAttachmentToServiceSpecificationParams): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    __body = params.attachment;
    if (params.afile != null) { __formData.append('afile', params.afile as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${params.id}/attachment`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceSpecification>;
      })
    );
  }
  /**
   * This operation adds an attachment to a ServiceSpecification and updates partially a ServiceSpecification entity
   * @param params The `ServiceSpecificationService.AddAttachmentToServiceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `attachment`: The Attachment object to be added
   *
   * - `afile`: The Attachment file to be added
   *
   * @return Success
   */
  addAttachmentToServiceSpecification(params: ServiceSpecificationService.AddAttachmentToServiceSpecificationParams): __Observable<ServiceSpecification> {
    return this.addAttachmentToServiceSpecificationResponse(params).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * This operation clones a ServiceSpecification entity. The response is the cloned spec
   * @param id Identifier of the ServiceSpecification to clone
   * @return Cloned
   */
  cloneServiceSpecificationResponse(id: string): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${id}/clone`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceSpecification>;
      })
    );
  }
  /**
   * This operation clones a ServiceSpecification entity. The response is the cloned spec
   * @param id Identifier of the ServiceSpecification to clone
   * @return Cloned
   */
  cloneServiceSpecification(id: string): __Observable<ServiceSpecification> {
    return this.cloneServiceSpecificationResponse(id).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * This operation retrieves a Service Descriptor entity. Attribute selection is enabled for all first level attributes.
   * @param id Identifier of the ServiceSpecification
   * @return Success
   */
  retrieveServiceSpecificationDescriptorResponse(id: string): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${id}/sd`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ServiceSpecification>;
      })
    );
  }
  /**
   * This operation retrieves a Service Descriptor entity. Attribute selection is enabled for all first level attributes.
   * @param id Identifier of the ServiceSpecification
   * @return Success
   */
  retrieveServiceSpecificationDescriptor(id: string): __Observable<ServiceSpecification> {
    return this.retrieveServiceSpecificationDescriptorResponse(id).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }
}

module ServiceSpecificationService {

  /**
   * Parameters for listServiceSpecification
   */
  export interface ListServiceSpecificationParams {

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
   * Parameters for cloneVINNIServiceSpecification
   */
  export interface CloneVINNIServiceSpecificationParams {

    /**
     * A name of the cloned VINNI Template
     */
    serviceName?: string;

    /**
     * If true adds a Service 3rd party VNF Spec in the Bundle
     */
    addServiceVNF?: boolean;

    /**
     * If true adds a Service Topology Spec in the Bundle
     */
    addServiceTopology?: boolean;

    /**
     * If true adds a Service Testing Spec in the Bundle
     */
    addServiceTesting?: boolean;

    /**
     * If true adds a Service Requirements Spec in the Bundle
     */
    addServiceRequirements?: boolean;

    /**
     * If true adds a Service 3rd party NSD Spec in the Bundle
     */
    addServiceNSD?: boolean;

    /**
     * If true adds a Service Monitoring Spec in the Bundle
     */
    addServiceMonitoring?: boolean;

    /**
     * If true adds a Service Exposure Level4 Spec in the Bundle
     */
    addServiceExposureLevel4?: boolean;

    /**
     * If true adds a Service Exposure Level3 Spec in the Bundle
     */
    addServiceExposureLevel3?: boolean;

    /**
     * If true adds a Service Exposure Level2 Spec in the Bundle
     */
    addServiceExposureLevel2?: boolean;

    /**
     * If true adds a Service Exposure Level1 Spec in the Bundle
     */
    addServiceExposureLevel1?: boolean;
  }

  /**
   * Parameters for retrieveServiceSpecification
   */
  export interface RetrieveServiceSpecificationParams {

    /**
     * Identifier of the ServiceSpecification
     */
    id: string;

    /**
     * Comma-separated properties to provide in response
     */
    fields?: string;
  }

  /**
   * Parameters for patchServiceSpecification
   */
  export interface PatchServiceSpecificationParams {

    /**
     * The ServiceSpecification to be updated
     */
    serviceSpecification: ServiceSpecificationUpdate;

    /**
     * Identifier of the ServiceSpecification
     */
    id: string;
  }

  /**
   * Parameters for addAttachmentToServiceSpecification
   */
  export interface AddAttachmentToServiceSpecificationParams {

    /**
     * Identifier of the ServiceSpecification
     */
    id: string;

    /**
     * The Attachment object to be added
     */
    attachment?: string;

    /**
     * The Attachment file to be added
     */
    afile?: Blob;
  }
}

export { ServiceSpecificationService }
