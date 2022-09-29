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
import { Attachment } from '../models/attachment';
import { ByteArrayResource } from '../models/byte-array-resource';
@Injectable({
  providedIn: 'root',
})
class ServiceSpecificationService extends __BaseService {
  static readonly listServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification';
  static readonly createServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification';
  static readonly cloneGSTServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/cloneGST';
  static readonly cloneVINNIServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/cloneVINNI';
  static readonly createServiceSpecificationFromNSDIDPath = '/serviceCatalogManagement/v4/serviceSpecification/specFromNSDID/{id}';
  static readonly createServiceSpecificationFromServiceTestSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/specFromTestSpec/{id}';
  static readonly retrieveServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}';
  static readonly deleteServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}';
  static readonly patchServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}';
  static readonly addAttachmentToServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}/attachment';
  static readonly getAttachmentPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}/attachment/{attid}';
  static readonly getAttachmentWithFilenamePath = '/serviceCatalogManagement/v4/serviceSpecification/{id}/attachment/{attid}/{afilename}';
  static readonly cloneServiceSpecificationPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}/clone';
  static readonly retrieveServiceSpecificationDescriptorPath = '/serviceCatalogManagement/v4/serviceSpecification/{id}/sd';

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
  listServiceSpecification(params: ServiceSpecificationService.ListServiceSpecificationParams): __Observable<Array<ServiceSpecification>> {
    return this.listServiceSpecificationResponse(params).pipe(
      __map(_r => _r.body as Array<ServiceSpecification>)
    );
  }

  /**
   * Creates a ServiceSpecification
   *
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
   * Creates a ServiceSpecification
   *
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
   * Clones a GST ServiceSpecification
   *
   * This operation clones a ServiceSpecification GST entity. The response is the cloned spec
   * @param serviceName A name of the cloned GST
   * @return Cloned
   */
  cloneGSTServiceSpecificationResponse(serviceName: string): __Observable<__StrictHttpResponse<ServiceSpecification>> {
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
   * Clones a GST ServiceSpecification
   *
   * This operation clones a ServiceSpecification GST entity. The response is the cloned spec
   * @param serviceName A name of the cloned GST
   * @return Cloned
   */
  cloneGSTServiceSpecification(serviceName: string): __Observable<ServiceSpecification> {
    return this.cloneGSTServiceSpecificationResponse(serviceName).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * Clones a VINNI ServiceSpecification
   *
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
   * Clones a VINNI ServiceSpecification
   *
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
   * Creates a ServiceSpecification from an NSD id. It retreives the NSD from  the NSD/VNF catalog
   *
   * This operation creates a ServiceSpecification from an NSD id. It retreives the NSD from  the NSD/VNF catalog. The response is the cloned spec
   * @param id Identifier of the NSD id from the NSD/VNF catalog
   * @return Created
   */
  createServiceSpecificationFromNSDIDResponse(id: string): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/specFromNSDID/${encodeURIComponent(id)}`,
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
   * Creates a ServiceSpecification from an NSD id. It retreives the NSD from  the NSD/VNF catalog
   *
   * This operation creates a ServiceSpecification from an NSD id. It retreives the NSD from  the NSD/VNF catalog. The response is the cloned spec
   * @param id Identifier of the NSD id from the NSD/VNF catalog
   * @return Created
   */
  createServiceSpecificationFromNSDID(id: string): __Observable<ServiceSpecification> {
    return this.createServiceSpecificationFromNSDIDResponse(id).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * Creates a ServiceSpecification from an ServiceTestSpecification id. It retreives the ServicTestSpecification from  the ServiceTestSpecification catalog
   *
   * This operation creates a ServiceSpecification from a ServiceTestSpecification id. It retreives the ServiceTestSpecification from  the ServiceTestSpecification catalog. The response is the Service Spec
   * @param id Identifier of the ServiceTestSpecification id from the ServiceTestSpecification catalog
   * @return Created
   */
  createServiceSpecificationFromServiceTestSpecificationResponse(id: string): __Observable<__StrictHttpResponse<ServiceSpecification>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/specFromTestSpec/${encodeURIComponent(id)}`,
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
   * Creates a ServiceSpecification from an ServiceTestSpecification id. It retreives the ServicTestSpecification from  the ServiceTestSpecification catalog
   *
   * This operation creates a ServiceSpecification from a ServiceTestSpecification id. It retreives the ServiceTestSpecification from  the ServiceTestSpecification catalog. The response is the Service Spec
   * @param id Identifier of the ServiceTestSpecification id from the ServiceTestSpecification catalog
   * @return Created
   */
  createServiceSpecificationFromServiceTestSpecification(id: string): __Observable<ServiceSpecification> {
    return this.createServiceSpecificationFromServiceTestSpecificationResponse(id).pipe(
      __map(_r => _r.body as ServiceSpecification)
    );
  }

  /**
   * Retrieves a ServiceSpecification by ID
   *
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
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${encodeURIComponent(params.id)}`,
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
   * Retrieves a ServiceSpecification by ID
   *
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
   * Deletes a ServiceSpecification
   *
   * This operation deletes a ServiceSpecification entity.
   * @param id Identifier of the ServiceSpecification
   * @return Deleted
   */
  deleteServiceSpecificationResponse(id: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${encodeURIComponent(id)}`,
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
   * Deletes a ServiceSpecification
   *
   * This operation deletes a ServiceSpecification entity.
   * @param id Identifier of the ServiceSpecification
   * @return Deleted
   */
  deleteServiceSpecification(id: string): __Observable<{}> {
    return this.deleteServiceSpecificationResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * Updates partially a ServiceSpecification
   *
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
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${encodeURIComponent(params.id)}`,
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
   * Updates partially a ServiceSpecification
   *
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
   * Adds an attachment to a ServiceSpecification
   *
   * This operation adds an attachment to a ServiceSpecification and updates partially a ServiceSpecification entity
   * @param params The `ServiceSpecificationService.AddAttachmentToServiceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `afile`: The Attachment file to be added
   *
   * @return Success
   */
  addAttachmentToServiceSpecificationResponse(params: ServiceSpecificationService.AddAttachmentToServiceSpecificationParams): __Observable<__StrictHttpResponse<Attachment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.afile != null) { __formData.append('afile', params.afile as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${encodeURIComponent(params.id)}/attachment`,
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
   * Adds an attachment to a ServiceSpecification
   *
   * This operation adds an attachment to a ServiceSpecification and updates partially a ServiceSpecification entity
   * @param params The `ServiceSpecificationService.AddAttachmentToServiceSpecificationParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `afile`: The Attachment file to be added
   *
   * @return Success
   */
  addAttachmentToServiceSpecification(params: ServiceSpecificationService.AddAttachmentToServiceSpecificationParams): __Observable<Attachment> {
    return this.addAttachmentToServiceSpecificationResponse(params).pipe(
      __map(_r => _r.body as Attachment)
    );
  }

  /**
   * Get an attachment
   *
   * This operation gets an attachment
   * @param params The `ServiceSpecificationService.GetAttachmentParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * @return Success
   */
  getAttachmentResponse(params: ServiceSpecificationService.GetAttachmentParams): __Observable<__StrictHttpResponse<ByteArrayResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${encodeURIComponent(params.id)}/attachment/${encodeURIComponent(params.attid)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

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
   * @param params The `ServiceSpecificationService.GetAttachmentParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * @return Success
   */
  getAttachment(params: ServiceSpecificationService.GetAttachmentParams): __Observable<Blob> {
    return this.getAttachmentResponse(params).pipe(
      __map(_r => _r.body as Blob)
    );
  }

  /**
   * Get an attachment with filename
   *
   * This operation gets an attachment
   * @param params The `ServiceSpecificationService.GetAttachmentWithFilenameParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * - `afilename`: Identifier of the Filename
   *
   * @return Success
   */
  getAttachmentWithFilenameResponse(params: ServiceSpecificationService.GetAttachmentWithFilenameParams): __Observable<__StrictHttpResponse<ByteArrayResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${encodeURIComponent(params.id)}/attachment/${encodeURIComponent(params.attid)}/${encodeURIComponent(params.afilename)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'blob'
      });

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
   * @param params The `ServiceSpecificationService.GetAttachmentWithFilenameParams` containing the following parameters:
   *
   * - `id`: Identifier of the ServiceSpecification
   *
   * - `attid`: Identifier of the Attachment
   *
   * - `afilename`: Identifier of the Filename
   *
   * @return Success
   */
  getAttachmentWithFilename(params: ServiceSpecificationService.GetAttachmentWithFilenameParams): __Observable<ByteArrayResource> {
    return this.getAttachmentWithFilenameResponse(params).pipe(
      __map(_r => _r.body as ByteArrayResource)
    );
  }

  /**
   * Clones a ServiceSpecification
   *
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
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${encodeURIComponent(id)}/clone`,
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
   * Clones a ServiceSpecification
   *
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
   * Retrieves a ServiceDescriptor by ServiceSpecification  ID
   *
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
      this.rootUrl + `/serviceCatalogManagement/v4/serviceSpecification/${encodeURIComponent(id)}/sd`,
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
   * Retrieves a ServiceDescriptor by ServiceSpecification  ID
   *
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
     * The Attachment file to be added
     */
    afile: Blob;
  }

  /**
   * Parameters for getAttachment
   */
  export interface GetAttachmentParams {

    /**
     * Identifier of the ServiceSpecification
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
     * Identifier of the ServiceSpecification
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

export { ServiceSpecificationService }
