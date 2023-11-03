/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { DeploymentDescriptor } from '../models/deployment-descriptor';
import { ExperimentMetadata } from '../models/experiment-metadata';
import { ExperimentOnBoardDescriptor } from '../models/experiment-on-board-descriptor';
import { Infrastructure } from '../models/infrastructure';
import { MANOplatform } from '../models/manoplatform';
import { MANOprovider } from '../models/manoprovider';
import { PortalProperty } from '../models/portal-property';
import { ValidationJobResult } from '../models/validation-job-result';
import { VxFMetadata } from '../models/vx-fmetadata';
import { VxFOnBoardedDescriptor } from '../models/vx-fon-boarded-descriptor';
import { ByteArrayResource } from '../models/byte-array-resource';

/**
 * Artifacts API Controller
 */
@Injectable({
  providedIn: 'root',
})
class ArtifactsApiControllerService extends __BaseService {
  static readonly getAllDeploymentsUsingGETPath = '/admin/deployments';
  static readonly addDeploymentUsingPOSTPath = '/admin/deployments';
  static readonly getAllScheduledDeploymentsofUserUsingGETPath = '/admin/deployments/scheduled';
  static readonly getAllDeploymentsofUserUsingGETPath = '/admin/deployments/user';
  static readonly getDeploymentByIdUsingGETPath = '/admin/deployments/{id}';
  static readonly updateDeploymentUsingPUTPath = '/admin/deployments/{id}';
  static readonly deleteDeploymentUsingDELETEPath = '/admin/deployments/{id}';
  static readonly getExperimentOnBoardDescriptorsUsingGETPath = '/admin/experimentobds';
  static readonly addExperimentOnBoardDescriptorUsingPOSTPath = '/admin/experimentobds/';
  static readonly getExperimentOnBoardDescriptorByIdUsingGETPath = '/admin/experimentobds/{mpid}';
  static readonly updateExperimentOnBoardDescriptorUsingPUTPath = '/admin/experimentobds/{mpid}';
  static readonly deleteExperimentOnBoardDescriptorUsingDELETEPath = '/admin/experimentobds/{mpid}';
  static readonly offBoardExperimentDescriptorUsingPUTPath = '/admin/experimentobds/{mpid}/offboard';
  static readonly onExperimentBoardDescriptorUsingPUTPath = '/admin/experimentobds/{mpid}/onboard';
  static readonly getExperimentOnBoardDescriptorByIdCheckMANOProviderUsingGETPath = '/admin/experimentobds/{mpid}/status';
  static readonly getAppsUsingGETPath = '/admin/experiments';
  static readonly addExperimentMetadataUsingPOSTPath = '/admin/experiments';
  static readonly getAllDeployableExperimentsUsingGETPath = '/admin/experiments/deployable';
  static readonly updateExperimentMetadataUsingPUTPath = '/admin/experiments/{aid}';
  static readonly getAdminExperimentMetadataByIDUsingGETPath = '/admin/experiments/{appid}';
  static readonly deleteExperimentUsingDELETEPath = '/admin/experiments/{appid}';
  static readonly getAdminInfrastructuresUsingGETPath = '/admin/infrastructures';
  static readonly addInfrastructureUsingPOSTPath = '/admin/infrastructures';
  static readonly getInfrastructureByIdUsingGETPath = '/admin/infrastructures/{infraid}';
  static readonly updateInfrastructureUsingPUTPath = '/admin/infrastructures/{infraid}';
  static readonly deleteInfrastructureUsingDELETEPath = '/admin/infrastructures/{infraid}';
  static readonly addImageToInfrastructureUsingPOSTPath = '/admin/infrastructures/{infraid}/images/{vfimageid}';
  static readonly getAdminMANOplatformsUsingGETPath = '/admin/manoplatforms';
  static readonly addMANOplatformUsingPOSTPath = '/admin/manoplatforms';
  static readonly getAdminMANOplatformByIdUsingGETPath = '/admin/manoplatforms/{mpid}';
  static readonly updateMANOplatformUsingPUTPath = '/admin/manoplatforms/{mpid}';
  static readonly deleteMANOplatformUsingDELETEPath = '/admin/manoplatforms/{mpid}';
  static readonly getOSMNSDMetadataUsingGETPath = '/admin/manoprovider/{mpid}/nsds';
  static readonly getOSMNSDMetadataByKOSMMANOIDUsingGETPath = '/admin/manoprovider/{mpid}/nsds/{nsdid}';
  static readonly getOSMVNFMetadataUsingGETPath = '/admin/manoprovider/{mpid}/vnfds';
  static readonly getAdminMANOprovidersUsingGETPath = '/admin/manoproviders';
  static readonly addMANOproviderUsingPOSTPath = '/admin/manoproviders';
  static readonly getAdminMANOproviderByIdUsingGETPath = '/admin/manoproviders/{mpid}';
  static readonly updateMANOproviderUsingPUTPath = '/admin/manoproviders/{mpid}';
  static readonly deleteMANOproviderUsingDELETEPath = '/admin/manoproviders/{mpid}';
  static readonly getPropertiesUsingGETPath = '/admin/properties';
  static readonly getPropertyByIdUsingGETPath = '/admin/properties/{propid}';
  static readonly updatePropertyUsingPUTPath = '/admin/properties/{propid}';
  static readonly updateUvalidationjobUsingPUTPath = '/admin/validationjobs/{vxf_id}';
  static readonly getVxFOnBoardedDescriptorsUsingGETPath = '/admin/vxfobds';
  static readonly addVxFOnBoardedDescriptorUsingPOSTPath = '/admin/vxfobds/';
  static readonly getVxFOnBoardedDescriptorByIdUsingGETPath = '/admin/vxfobds/{mpid}';
  static readonly updateVxFOnBoardedDescriptorUsingPUTPath = '/admin/vxfobds/{mpid}';
  static readonly deleteVxFOnBoardedDescriptorUsingDELETEPath = '/admin/vxfobds/{mpid}';
  static readonly offBoardDescriptorUsingPUTPath = '/admin/vxfobds/{mpid}/offboard';
  static readonly onBoardDescriptorUsingPUTPath = '/admin/vxfobds/{mpid}/onboard';
  static readonly getVxFOnBoardedDescriptorByIdCheckMANOProviderUsingGETPath = '/admin/vxfobds/{mpid}/status';
  static readonly getVxFsUsingGETPath = '/admin/vxfs';
  static readonly addVxFMetadataUsingPOSTPath = '/admin/vxfs';
  static readonly updateVxFMetadataUsingPUTPath = '/admin/vxfs/{bid}';
  static readonly getAdminVxFMetadataByIDUsingGETPath = '/admin/vxfs/{vxfid}';
  static readonly deleteVxFUsingDELETEPath = '/admin/vxfs/{vxfid}';
  static readonly getAllAppsUsingGETPath = '/experiments';
  static readonly getAppMetadataByUUIDUsingGETPath = '/experiments/uuid/{uuid}';
  static readonly getExperimentMetadataByIDUsingGETPath = '/experiments/{appid}';
  static readonly getEntityImageUsingGETPath = '/images/{uuid}/{imgfile}';
  static readonly getMANOplatformsUsingGETPath = '/manoplatforms';
  static readonly getMANOplatformByIdUsingGETPath = '/manoplatforms/{mpid}';
  static readonly getOSMVNFMetadataByKOSMMANOIDUsingGETPath = '/manoprovider/{mpid}/vnfds/{vxfid}';
  static readonly downloadVxFPackageUsingGETPath = '/packages/{uuid}/{vxffile}';
  static readonly getAllVxFsUsingGETPath = '/vxfs';
  static readonly getVxFMetadataByUUIDUsingGETPath = '/vxfs/uuid/{uuid}';
  static readonly getVxFMetadataByIDUsingGETPath = '/vxfs/{vxfid}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param status status
   * @return OK
   */
  getAllDeploymentsUsingGETResponse(status?: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (status != null) __params = __params.set('status', status.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/deployments`,
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
   * @param status status
   * @return OK
   */
  getAllDeploymentsUsingGET(status?: string): __Observable<{}> {
    return this.getAllDeploymentsUsingGETResponse(status).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param deployment deployment
   * @return OK
   */
  addDeploymentUsingPOSTResponse(deployment: DeploymentDescriptor): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = deployment;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/deployments`,
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
   * @param deployment deployment
   * @return OK
   */
  addDeploymentUsingPOST(deployment: DeploymentDescriptor): __Observable<{}> {
    return this.addDeploymentUsingPOSTResponse(deployment).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getAllScheduledDeploymentsofUserUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/deployments/scheduled`,
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
   * @return OK
   */
  getAllScheduledDeploymentsofUserUsingGET(): __Observable<{}> {
    return this.getAllScheduledDeploymentsofUserUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param status status
   * @return OK
   */
  getAllDeploymentsofUserUsingGETResponse(status?: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (status != null) __params = __params.set('status', status.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/deployments/user`,
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
   * @param status status
   * @return OK
   */
  getAllDeploymentsofUserUsingGET(status?: string): __Observable<{}> {
    return this.getAllDeploymentsofUserUsingGETResponse(status).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getDeploymentByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/deployments/${id}`,
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
   * @param id id
   * @return OK
   */
  getDeploymentByIdUsingGET(id: number): __Observable<{}> {
    return this.getDeploymentByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateDeploymentUsingPUTParams` containing the following parameters:
   *
   * - `receivedDeployment`: receivedDeployment
   *
   * - `id`: id
   *
   * @return OK
   */
  updateDeploymentUsingPUTResponse(params: ArtifactsApiControllerService.UpdateDeploymentUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.receivedDeployment;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/deployments/${params.id}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateDeploymentUsingPUTParams` containing the following parameters:
   *
   * - `receivedDeployment`: receivedDeployment
   *
   * - `id`: id
   *
   * @return OK
   */
  updateDeploymentUsingPUT(params: ArtifactsApiControllerService.UpdateDeploymentUsingPUTParams): __Observable<{}> {
    return this.updateDeploymentUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id id
   * @return OK
   */
  deleteDeploymentUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/deployments/${id}`,
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
   * @param id id
   * @return OK
   */
  deleteDeploymentUsingDELETE(id: number): __Observable<{}> {
    return this.deleteDeploymentUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getExperimentOnBoardDescriptorsUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/experimentobds`,
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
   * @return OK
   */
  getExperimentOnBoardDescriptorsUsingGET(): __Observable<{}> {
    return this.getExperimentOnBoardDescriptorsUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param exp exp
   * @return OK
   */
  addExperimentOnBoardDescriptorUsingPOSTResponse(exp: ExperimentMetadata): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = exp;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/experimentobds/`,
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
   * @param exp exp
   * @return OK
   */
  addExperimentOnBoardDescriptorUsingPOST(exp: ExperimentMetadata): __Observable<{}> {
    return this.addExperimentOnBoardDescriptorUsingPOSTResponse(exp).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  getExperimentOnBoardDescriptorByIdUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/experimentobds/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  getExperimentOnBoardDescriptorByIdUsingGET(mpid: number): __Observable<{}> {
    return this.getExperimentOnBoardDescriptorByIdUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateExperimentOnBoardDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateExperimentOnBoardDescriptorUsingPUTResponse(params: ArtifactsApiControllerService.UpdateExperimentOnBoardDescriptorUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.c;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/experimentobds/${params.mpid}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateExperimentOnBoardDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateExperimentOnBoardDescriptorUsingPUT(params: ArtifactsApiControllerService.UpdateExperimentOnBoardDescriptorUsingPUTParams): __Observable<{}> {
    return this.updateExperimentOnBoardDescriptorUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  deleteExperimentOnBoardDescriptorUsingDELETEResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/experimentobds/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  deleteExperimentOnBoardDescriptorUsingDELETE(mpid: number): __Observable<{}> {
    return this.deleteExperimentOnBoardDescriptorUsingDELETEResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.OffBoardExperimentDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  offBoardExperimentDescriptorUsingPUTResponse(params: ArtifactsApiControllerService.OffBoardExperimentDescriptorUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.c;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/experimentobds/${params.mpid}/offboard`,
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
   * @param params The `ArtifactsApiControllerService.OffBoardExperimentDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  offBoardExperimentDescriptorUsingPUT(params: ArtifactsApiControllerService.OffBoardExperimentDescriptorUsingPUTParams): __Observable<{}> {
    return this.offBoardExperimentDescriptorUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.OnExperimentBoardDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `experimentonboarddescriptor`: experimentonboarddescriptor
   *
   * @return OK
   */
  onExperimentBoardDescriptorUsingPUTResponse(params: ArtifactsApiControllerService.OnExperimentBoardDescriptorUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.experimentonboarddescriptor;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/experimentobds/${params.mpid}/onboard`,
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
   * @param params The `ArtifactsApiControllerService.OnExperimentBoardDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `experimentonboarddescriptor`: experimentonboarddescriptor
   *
   * @return OK
   */
  onExperimentBoardDescriptorUsingPUT(params: ArtifactsApiControllerService.OnExperimentBoardDescriptorUsingPUTParams): __Observable<{}> {
    return this.onExperimentBoardDescriptorUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  getExperimentOnBoardDescriptorByIdCheckMANOProviderUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/experimentobds/${mpid}/status`,
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
   * @param mpid mpid
   * @return OK
   */
  getExperimentOnBoardDescriptorByIdCheckMANOProviderUsingGET(mpid: number): __Observable<{}> {
    return this.getExperimentOnBoardDescriptorByIdCheckMANOProviderUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param categoryid categoryid
   * @return OK
   */
  getAppsUsingGETResponse(categoryid?: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (categoryid != null) __params = __params.set('categoryid', categoryid.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/experiments`,
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
   * @param categoryid categoryid
   * @return OK
   */
  getAppsUsingGET(categoryid?: number): __Observable<{}> {
    return this.getAppsUsingGETResponse(categoryid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.AddExperimentMetadataUsingPOSTParams` containing the following parameters:
   *
   * - `screenshots`: screenshots
   *
   * - `prodIcon`: prodIcon
   *
   * - `prodFile`: prodFile
   *
   * - `exprm`: exprm
   *
   * @return OK
   */
  addExperimentMetadataUsingPOSTResponse(params: ArtifactsApiControllerService.AddExperimentMetadataUsingPOSTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    (params.screenshots || []).forEach(val => {if (val != null) __formData.append('screenshots', val as string | Blob)});
    if (params.prodIcon != null) { __formData.append('prodIcon', params.prodIcon as string | Blob);}
    if (params.prodFile != null) { __formData.append('prodFile', params.prodFile as string | Blob);}
    __body = params.exprm;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/experiments`,
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
   * @param params The `ArtifactsApiControllerService.AddExperimentMetadataUsingPOSTParams` containing the following parameters:
   *
   * - `screenshots`: screenshots
   *
   * - `prodIcon`: prodIcon
   *
   * - `prodFile`: prodFile
   *
   * - `exprm`: exprm
   *
   * @return OK
   */
  addExperimentMetadataUsingPOST(params: ArtifactsApiControllerService.AddExperimentMetadataUsingPOSTParams): __Observable<{}> {
    return this.addExperimentMetadataUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getAllDeployableExperimentsUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/experiments/deployable`,
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
   * @return OK
   */
  getAllDeployableExperimentsUsingGET(): __Observable<{}> {
    return this.getAllDeployableExperimentsUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateExperimentMetadataUsingPUTParams` containing the following parameters:
   *
   * - `aid`: aid
   *
   * - `screenshots`: screenshots
   *
   * - `prodIcon`: prodIcon
   *
   * - `prodFile`: prodFile
   *
   * - `exprm`: exprm
   *
   * @return OK
   */
  updateExperimentMetadataUsingPUTResponse(params: ArtifactsApiControllerService.UpdateExperimentMetadataUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    (params.screenshots || []).forEach(val => {if (val != null) __formData.append('screenshots', val as string | Blob)});
    if (params.prodIcon != null) { __formData.append('prodIcon', params.prodIcon as string | Blob);}
    if (params.prodFile != null) { __formData.append('prodFile', params.prodFile as string | Blob);}
    __body = params.exprm;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/experiments/${params.aid}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateExperimentMetadataUsingPUTParams` containing the following parameters:
   *
   * - `aid`: aid
   *
   * - `screenshots`: screenshots
   *
   * - `prodIcon`: prodIcon
   *
   * - `prodFile`: prodFile
   *
   * - `exprm`: exprm
   *
   * @return OK
   */
  updateExperimentMetadataUsingPUT(params: ArtifactsApiControllerService.UpdateExperimentMetadataUsingPUTParams): __Observable<{}> {
    return this.updateExperimentMetadataUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param appid appid
   * @return OK
   */
  getAdminExperimentMetadataByIDUsingGETResponse(appid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/experiments/${appid}`,
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
   * @param appid appid
   * @return OK
   */
  getAdminExperimentMetadataByIDUsingGET(appid: number): __Observable<{}> {
    return this.getAdminExperimentMetadataByIDUsingGETResponse(appid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param appid appid
   * @return OK
   */
  deleteExperimentUsingDELETEResponse(appid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/experiments/${appid}`,
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
   * @param appid appid
   * @return OK
   */
  deleteExperimentUsingDELETE(appid: number): __Observable<{}> {
    return this.deleteExperimentUsingDELETEResponse(appid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getAdminInfrastructuresUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/infrastructures`,
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
   * @return OK
   */
  getAdminInfrastructuresUsingGET(): __Observable<{}> {
    return this.getAdminInfrastructuresUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param c c
   * @return OK
   */
  addInfrastructureUsingPOSTResponse(c: Infrastructure): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = c;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/infrastructures`,
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
   * @param c c
   * @return OK
   */
  addInfrastructureUsingPOST(c: Infrastructure): __Observable<{}> {
    return this.addInfrastructureUsingPOSTResponse(c).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param infraid infraid
   * @return OK
   */
  getInfrastructureByIdUsingGETResponse(infraid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/infrastructures/${infraid}`,
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
   * @param infraid infraid
   * @return OK
   */
  getInfrastructureByIdUsingGET(infraid: number): __Observable<{}> {
    return this.getInfrastructureByIdUsingGETResponse(infraid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateInfrastructureUsingPUTParams` containing the following parameters:
   *
   * - `infraid`: infraid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateInfrastructureUsingPUTResponse(params: ArtifactsApiControllerService.UpdateInfrastructureUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.c;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/infrastructures/${params.infraid}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateInfrastructureUsingPUTParams` containing the following parameters:
   *
   * - `infraid`: infraid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateInfrastructureUsingPUT(params: ArtifactsApiControllerService.UpdateInfrastructureUsingPUTParams): __Observable<{}> {
    return this.updateInfrastructureUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param infraid infraid
   * @return OK
   */
  deleteInfrastructureUsingDELETEResponse(infraid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/infrastructures/${infraid}`,
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
   * @param infraid infraid
   * @return OK
   */
  deleteInfrastructureUsingDELETE(infraid: number): __Observable<{}> {
    return this.deleteInfrastructureUsingDELETEResponse(infraid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.AddImageToInfrastructureUsingPOSTParams` containing the following parameters:
   *
   * - `vfimageid`: vfimageid
   *
   * - `infraid`: infraid
   *
   * @return OK
   */
  addImageToInfrastructureUsingPOSTResponse(params: ArtifactsApiControllerService.AddImageToInfrastructureUsingPOSTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/infrastructures/${params.infraid}/images/${params.vfimageid}`,
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
   * @param params The `ArtifactsApiControllerService.AddImageToInfrastructureUsingPOSTParams` containing the following parameters:
   *
   * - `vfimageid`: vfimageid
   *
   * - `infraid`: infraid
   *
   * @return OK
   */
  addImageToInfrastructureUsingPOST(params: ArtifactsApiControllerService.AddImageToInfrastructureUsingPOSTParams): __Observable<{}> {
    return this.addImageToInfrastructureUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getAdminMANOplatformsUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/manoplatforms`,
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
   * @return OK
   */
  getAdminMANOplatformsUsingGET(): __Observable<{}> {
    return this.getAdminMANOplatformsUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param c c
   * @return OK
   */
  addMANOplatformUsingPOSTResponse(c: MANOplatform): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = c;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/manoplatforms`,
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
   * @param c c
   * @return OK
   */
  addMANOplatformUsingPOST(c: MANOplatform): __Observable<{}> {
    return this.addMANOplatformUsingPOSTResponse(c).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  getAdminMANOplatformByIdUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/manoplatforms/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  getAdminMANOplatformByIdUsingGET(mpid: number): __Observable<{}> {
    return this.getAdminMANOplatformByIdUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateMANOplatformUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateMANOplatformUsingPUTResponse(params: ArtifactsApiControllerService.UpdateMANOplatformUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.c;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/manoplatforms/${params.mpid}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateMANOplatformUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateMANOplatformUsingPUT(params: ArtifactsApiControllerService.UpdateMANOplatformUsingPUTParams): __Observable<{}> {
    return this.updateMANOplatformUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  deleteMANOplatformUsingDELETEResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/manoplatforms/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  deleteMANOplatformUsingDELETE(mpid: number): __Observable<{}> {
    return this.deleteMANOplatformUsingDELETEResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  getOSMNSDMetadataUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/manoprovider/${mpid}/nsds`,
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
   * @param mpid mpid
   * @return OK
   */
  getOSMNSDMetadataUsingGET(mpid: number): __Observable<{}> {
    return this.getOSMNSDMetadataUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.GetOSMNSDMetadataByKOSMMANOIDUsingGETParams` containing the following parameters:
   *
   * - `vxfid`: vxfid
   *
   * - `mpid`: mpid
   *
   * @return OK
   */
  // getOSMNSDMetadataByKOSMMANOIDUsingGETResponse(params: ArtifactsApiControllerService.GetOSMNSDMetadataByKOSMMANOIDUsingGETParams): __Observable<__StrictHttpResponse<{}>> {
  //   let __params = this.newParams();
  //   let __headers = new HttpHeaders();
  //   let __body: any = null;


  //   let req = new HttpRequest<any>(
  //     'GET',
  //     this.rootUrl + `/admin/manoprovider/${params.mpid}/nsds/${params.nsdid}`,
  //     __body,
  //     {
  //       headers: __headers,
  //       params: __params,
  //       responseType: 'json'
  //     });

  //   return this.http.request<any>(req).pipe(
  //     __filter(_r => _r instanceof HttpResponse),
  //     __map((_r) => {
  //       return _r as __StrictHttpResponse<{}>;
  //     })
  //   );
  // }
  // /**
  //  * @param params The `ArtifactsApiControllerService.GetOSMNSDMetadataByKOSMMANOIDUsingGETParams` containing the following parameters:
  //  *
  //  * - `vxfid`: vxfid
  //  *
  //  * - `mpid`: mpid
  //  *
  //  * @return OK
  //  */
  // getOSMNSDMetadataByKOSMMANOIDUsingGET(params: ArtifactsApiControllerService.GetOSMNSDMetadataByKOSMMANOIDUsingGETParams): __Observable<{}> {
  //   return this.getOSMNSDMetadataByKOSMMANOIDUsingGETResponse(params).pipe(
  //     __map(_r => _r.body as {})
  //   );
  // }

  /**
   * @param mpid mpid
   * @return OK
   */
  getOSMVNFMetadataUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/manoprovider/${mpid}/vnfds`,
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
   * @param mpid mpid
   * @return OK
   */
  getOSMVNFMetadataUsingGET(mpid: number): __Observable<{}> {
    return this.getOSMVNFMetadataUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getAdminMANOprovidersUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/manoproviders`,
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
   * @return OK
   */
  getAdminMANOprovidersUsingGET(): __Observable<{}> {
    return this.getAdminMANOprovidersUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param c c
   * @return OK
   */
  addMANOproviderUsingPOSTResponse(c: MANOprovider): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = c;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/manoproviders`,
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
   * @param c c
   * @return OK
   */
  addMANOproviderUsingPOST(c: MANOprovider): __Observable<{}> {
    return this.addMANOproviderUsingPOSTResponse(c).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  getAdminMANOproviderByIdUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/manoproviders/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  getAdminMANOproviderByIdUsingGET(mpid: number): __Observable<{}> {
    return this.getAdminMANOproviderByIdUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateMANOproviderUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateMANOproviderUsingPUTResponse(params: ArtifactsApiControllerService.UpdateMANOproviderUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.c;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/manoproviders/${params.mpid}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateMANOproviderUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateMANOproviderUsingPUT(params: ArtifactsApiControllerService.UpdateMANOproviderUsingPUTParams): __Observable<{}> {
    return this.updateMANOproviderUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  deleteMANOproviderUsingDELETEResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/manoproviders/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  deleteMANOproviderUsingDELETE(mpid: number): __Observable<{}> {
    return this.deleteMANOproviderUsingDELETEResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getPropertiesUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/properties`,
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
   * @return OK
   */
  getPropertiesUsingGET(): __Observable<{}> {
    return this.getPropertiesUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param propid propid
   * @return OK
   */
  getPropertyByIdUsingGETResponse(propid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/properties/${propid}`,
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
   * @param propid propid
   * @return OK
   */
  getPropertyByIdUsingGET(propid: number): __Observable<{}> {
    return this.getPropertyByIdUsingGETResponse(propid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdatePropertyUsingPUTParams` containing the following parameters:
   *
   * - `propid`: propid
   *
   * - `p`: p
   *
   * @return OK
   */
  updatePropertyUsingPUTResponse(params: ArtifactsApiControllerService.UpdatePropertyUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.p;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/properties/${params.propid}`,
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
   * @param params The `ArtifactsApiControllerService.UpdatePropertyUsingPUTParams` containing the following parameters:
   *
   * - `propid`: propid
   *
   * - `p`: p
   *
   * @return OK
   */
  updatePropertyUsingPUT(params: ArtifactsApiControllerService.UpdatePropertyUsingPUTParams): __Observable<{}> {
    return this.updatePropertyUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateUvalidationjobUsingPUTParams` containing the following parameters:
   *
   * - `vxf_id`: vxf_id
   *
   * - `vresult`: vresult
   *
   * @return OK
   */
  updateUvalidationjobUsingPUTResponse(params: ArtifactsApiControllerService.UpdateUvalidationjobUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.vresult;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/validationjobs/${params.vxfId}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateUvalidationjobUsingPUTParams` containing the following parameters:
   *
   * - `vxf_id`: vxf_id
   *
   * - `vresult`: vresult
   *
   * @return OK
   */
  updateUvalidationjobUsingPUT(params: ArtifactsApiControllerService.UpdateUvalidationjobUsingPUTParams): __Observable<{}> {
    return this.updateUvalidationjobUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getVxFOnBoardedDescriptorsUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/vxfobds`,
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
   * @return OK
   */
  getVxFOnBoardedDescriptorsUsingGET(): __Observable<{}> {
    return this.getVxFOnBoardedDescriptorsUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param aVxF aVxF
   * @return OK
   */
  addVxFOnBoardedDescriptorUsingPOSTResponse(aVxF: VxFMetadata): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = aVxF;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/vxfobds/`,
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
   * @param aVxF aVxF
   * @return OK
   */
  addVxFOnBoardedDescriptorUsingPOST(aVxF: VxFMetadata): __Observable<{}> {
    return this.addVxFOnBoardedDescriptorUsingPOSTResponse(aVxF).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  getVxFOnBoardedDescriptorByIdUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/vxfobds/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  getVxFOnBoardedDescriptorByIdUsingGET(mpid: number): __Observable<{}> {
    return this.getVxFOnBoardedDescriptorByIdUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateVxFOnBoardedDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateVxFOnBoardedDescriptorUsingPUTResponse(params: ArtifactsApiControllerService.UpdateVxFOnBoardedDescriptorUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.c;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/vxfobds/${params.mpid}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateVxFOnBoardedDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateVxFOnBoardedDescriptorUsingPUT(params: ArtifactsApiControllerService.UpdateVxFOnBoardedDescriptorUsingPUTParams): __Observable<{}> {
    return this.updateVxFOnBoardedDescriptorUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  deleteVxFOnBoardedDescriptorUsingDELETEResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/vxfobds/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  deleteVxFOnBoardedDescriptorUsingDELETE(mpid: number): __Observable<{}> {
    return this.deleteVxFOnBoardedDescriptorUsingDELETEResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.OffBoardDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `clobd`: clobd
   *
   * @return OK
   */
  offBoardDescriptorUsingPUTResponse(params: ArtifactsApiControllerService.OffBoardDescriptorUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.clobd;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/vxfobds/${params.mpid}/offboard`,
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
   * @param params The `ArtifactsApiControllerService.OffBoardDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `mpid`: mpid
   *
   * - `clobd`: clobd
   *
   * @return OK
   */
  offBoardDescriptorUsingPUT(params: ArtifactsApiControllerService.OffBoardDescriptorUsingPUTParams): __Observable<{}> {
    return this.offBoardDescriptorUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.OnBoardDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `vxfobd`: vxfobd
   *
   * - `mpid`: mpid
   *
   * @return OK
   */
  onBoardDescriptorUsingPUTResponse(params: ArtifactsApiControllerService.OnBoardDescriptorUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.vxfobd;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/vxfobds/${params.mpid}/onboard`,
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
   * @param params The `ArtifactsApiControllerService.OnBoardDescriptorUsingPUTParams` containing the following parameters:
   *
   * - `vxfobd`: vxfobd
   *
   * - `mpid`: mpid
   *
   * @return OK
   */
  onBoardDescriptorUsingPUT(params: ArtifactsApiControllerService.OnBoardDescriptorUsingPUTParams): __Observable<{}> {
    return this.onBoardDescriptorUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  getVxFOnBoardedDescriptorByIdCheckMANOProviderUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/vxfobds/${mpid}/status`,
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
   * @param mpid mpid
   * @return OK
   */
  getVxFOnBoardedDescriptorByIdCheckMANOProviderUsingGET(mpid: number): __Observable<{}> {
    return this.getVxFOnBoardedDescriptorByIdCheckMANOProviderUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param categoryid categoryid
   * @return OK
   */
  getVxFsUsingGETResponse(categoryid?: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (categoryid != null) __params = __params.set('categoryid', categoryid.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/vxfs`,
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
   * @param categoryid categoryid
   * @return OK
   */
  getVxFsUsingGET(categoryid?: number): __Observable<{}> {
    return this.getVxFsUsingGETResponse(categoryid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.AddVxFMetadataUsingPOSTParams` containing the following parameters:
   *
   * - `prodFile`: prodFile
   *
   * - `vxf`: vxf
   *
   * - `screenshots`: screenshots
   *
   * - `prodIcon`: prodIcon
   *
   * @return OK
   */
  addVxFMetadataUsingPOSTResponse(params: ArtifactsApiControllerService.AddVxFMetadataUsingPOSTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.prodFile != null) { __formData.append('prodFile', params.prodFile as string | Blob);}
    __body = params.vxf;
    (params.screenshots || []).forEach(val => {if (val != null) __formData.append('screenshots', val as string | Blob)});
    if (params.prodIcon != null) { __formData.append('prodIcon', params.prodIcon as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/vxfs`,
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
   * @param params The `ArtifactsApiControllerService.AddVxFMetadataUsingPOSTParams` containing the following parameters:
   *
   * - `prodFile`: prodFile
   *
   * - `vxf`: vxf
   *
   * - `screenshots`: screenshots
   *
   * - `prodIcon`: prodIcon
   *
   * @return OK
   */
  addVxFMetadataUsingPOST(params: ArtifactsApiControllerService.AddVxFMetadataUsingPOSTParams): __Observable<{}> {
    return this.addVxFMetadataUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.UpdateVxFMetadataUsingPUTParams` containing the following parameters:
   *
   * - `bid`: bid
   *
   * - `vxf`: vxf
   *
   * - `screenshots`: screenshots
   *
   * - `prodIcon`: prodIcon
   *
   * - `prodFile`: prodFile
   *
   * @return OK
   */
  updateVxFMetadataUsingPUTResponse(params: ArtifactsApiControllerService.UpdateVxFMetadataUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    __body = params.vxf;
    (params.screenshots || []).forEach(val => {if (val != null) __formData.append('screenshots', val as string | Blob)});
    if (params.prodIcon != null) { __formData.append('prodIcon', params.prodIcon as string | Blob);}
    if (params.prodFile != null) { __formData.append('prodFile', params.prodFile as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/vxfs/${params.bid}`,
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
   * @param params The `ArtifactsApiControllerService.UpdateVxFMetadataUsingPUTParams` containing the following parameters:
   *
   * - `bid`: bid
   *
   * - `vxf`: vxf
   *
   * - `screenshots`: screenshots
   *
   * - `prodIcon`: prodIcon
   *
   * - `prodFile`: prodFile
   *
   * @return OK
   */
  updateVxFMetadataUsingPUT(params: ArtifactsApiControllerService.UpdateVxFMetadataUsingPUTParams): __Observable<{}> {
    return this.updateVxFMetadataUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param vxfid vxfid
   * @return OK
   */
  getAdminVxFMetadataByIDUsingGETResponse(vxfid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/vxfs/${vxfid}`,
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
   * @param vxfid vxfid
   * @return OK
   */
  getAdminVxFMetadataByIDUsingGET(vxfid: number): __Observable<{}> {
    return this.getAdminVxFMetadataByIDUsingGETResponse(vxfid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param vxfid vxfid
   * @return OK
   */
  deleteVxFUsingDELETEResponse(vxfid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/vxfs/${vxfid}`,
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
   * @param vxfid vxfid
   * @return OK
   */
  deleteVxFUsingDELETE(vxfid: number): __Observable<{}> {
    return this.deleteVxFUsingDELETEResponse(vxfid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param categoryid categoryid
   * @return OK
   */
  getAllAppsUsingGETResponse(categoryid?: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (categoryid != null) __params = __params.set('categoryid', categoryid.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/experiments`,
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
   * @param categoryid categoryid
   * @return OK
   */
  getAllAppsUsingGET(categoryid?: number): __Observable<{}> {
    return this.getAllAppsUsingGETResponse(categoryid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param uuid uuid
   * @return OK
   */
  getAppMetadataByUUIDUsingGETResponse(uuid: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/experiments/uuid/${uuid}`,
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
   * @param uuid uuid
   * @return OK
   */
  getAppMetadataByUUIDUsingGET(uuid: string): __Observable<{}> {
    return this.getAppMetadataByUUIDUsingGETResponse(uuid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param appid appid
   * @return OK
   */
  getExperimentMetadataByIDUsingGETResponse(appid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/experiments/${appid}`,
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
   * @param appid appid
   * @return OK
   */
  getExperimentMetadataByIDUsingGET(appid: number): __Observable<{}> {
    return this.getExperimentMetadataByIDUsingGETResponse(appid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.GetEntityImageUsingGETParams` containing the following parameters:
   *
   * - `uuid`: uuid
   *
   * - `imgfile`: imgfile
   *
   * @return OK
   */
  getEntityImageUsingGETResponse(params: ArtifactsApiControllerService.GetEntityImageUsingGETParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/images/${params.uuid}/${params.imgfile}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param params The `ArtifactsApiControllerService.GetEntityImageUsingGETParams` containing the following parameters:
   *
   * - `uuid`: uuid
   *
   * - `imgfile`: imgfile
   *
   * @return OK
   */
  getEntityImageUsingGET(params: ArtifactsApiControllerService.GetEntityImageUsingGETParams): __Observable<string> {
    return this.getEntityImageUsingGETResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @return OK
   */
  getMANOplatformsUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/manoplatforms`,
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
   * @return OK
   */
  getMANOplatformsUsingGET(): __Observable<{}> {
    return this.getMANOplatformsUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param mpid mpid
   * @return OK
   */
  getMANOplatformByIdUsingGETResponse(mpid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/manoplatforms/${mpid}`,
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
   * @param mpid mpid
   * @return OK
   */
  getMANOplatformByIdUsingGET(mpid: number): __Observable<{}> {
    return this.getMANOplatformByIdUsingGETResponse(mpid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.GetOSMVNFMetadataByKOSMMANOIDUsingGETParams` containing the following parameters:
   *
   * - `vxfid`: vxfid
   *
   * - `mpid`: mpid
   *
   * @return OK
   */
  getOSMVNFMetadataByKOSMMANOIDUsingGETResponse(params: ArtifactsApiControllerService.GetOSMVNFMetadataByKOSMMANOIDUsingGETParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/manoprovider/${params.mpid}/vnfds/${params.vxfid}`,
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
   * @param params The `ArtifactsApiControllerService.GetOSMVNFMetadataByKOSMMANOIDUsingGETParams` containing the following parameters:
   *
   * - `vxfid`: vxfid
   *
   * - `mpid`: mpid
   *
   * @return OK
   */
  getOSMVNFMetadataByKOSMMANOIDUsingGET(params: ArtifactsApiControllerService.GetOSMVNFMetadataByKOSMMANOIDUsingGETParams): __Observable<{}> {
    return this.getOSMVNFMetadataByKOSMMANOIDUsingGETResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `ArtifactsApiControllerService.DownloadVxFPackageUsingGETParams` containing the following parameters:
   *
   * - `vxffile`: vxffile
   *
   * - `uuid`: uuid
   *
   * @return OK
   */
  downloadVxFPackageUsingGETResponse(params: ArtifactsApiControllerService.DownloadVxFPackageUsingGETParams): __Observable<__StrictHttpResponse<ByteArrayResource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/packages/${params.uuid}/${params.vxffile}`,
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
   * @param params The `ArtifactsApiControllerService.DownloadVxFPackageUsingGETParams` containing the following parameters:
   *
   * - `vxffile`: vxffile
   *
   * - `uuid`: uuid
   *
   * @return OK
   */
  downloadVxFPackageUsingGET(params: ArtifactsApiControllerService.DownloadVxFPackageUsingGETParams): __Observable<ByteArrayResource> {
    return this.downloadVxFPackageUsingGETResponse(params).pipe(
      __map(_r => _r.body as ByteArrayResource)
    );
  }

  /**
   * @param categoryid categoryid
   * @return OK
   */
  getAllVxFsUsingGETResponse(categoryid?: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (categoryid != null) __params = __params.set('categoryid', categoryid.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vxfs`,
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
   * @param categoryid categoryid
   * @return OK
   */
  getAllVxFsUsingGET(categoryid?: number): __Observable<{}> {
    return this.getAllVxFsUsingGETResponse(categoryid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param uuid uuid
   * @return OK
   */
  getVxFMetadataByUUIDUsingGETResponse(uuid: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vxfs/uuid/${uuid}`,
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
   * @param uuid uuid
   * @return OK
   */
  getVxFMetadataByUUIDUsingGET(uuid: string): __Observable<{}> {
    return this.getVxFMetadataByUUIDUsingGETResponse(uuid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param vxfid vxfid
   * @return OK
   */
  getVxFMetadataByIDUsingGETResponse(vxfid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vxfs/${vxfid}`,
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
   * @param vxfid vxfid
   * @return OK
   */
  getVxFMetadataByIDUsingGET(vxfid: number): __Observable<{}> {
    return this.getVxFMetadataByIDUsingGETResponse(vxfid).pipe(
      __map(_r => _r.body as {})
    );
  }
}

module ArtifactsApiControllerService {

  /**
   * Parameters for updateDeploymentUsingPUT
   */
  export interface UpdateDeploymentUsingPUTParams {

    /**
     * receivedDeployment
     */
    receivedDeployment: DeploymentDescriptor;

    /**
     * id
     */
    id: number;
  }

  /**
   * Parameters for updateExperimentOnBoardDescriptorUsingPUT
   */
  export interface UpdateExperimentOnBoardDescriptorUsingPUTParams {

    /**
     * mpid
     */
    mpid: number;

    /**
     * c
     */
    c: ExperimentOnBoardDescriptor;
  }

  /**
   * Parameters for offBoardExperimentDescriptorUsingPUT
   */
  export interface OffBoardExperimentDescriptorUsingPUTParams {

    /**
     * mpid
     */
    mpid: number;

    /**
     * c
     */
    c: ExperimentOnBoardDescriptor;
  }

  /**
   * Parameters for onExperimentBoardDescriptorUsingPUT
   */
  export interface OnExperimentBoardDescriptorUsingPUTParams {

    /**
     * mpid
     */
    mpid: number;

    /**
     * experimentonboarddescriptor
     */
    experimentonboarddescriptor: ExperimentOnBoardDescriptor;
  }

  /**
   * Parameters for addExperimentMetadataUsingPOST
   */
  export interface AddExperimentMetadataUsingPOSTParams {

    /**
     * screenshots
     */
    screenshots?: Array<Blob>;

    /**
     * prodIcon
     */
    prodIcon?: Blob;

    /**
     * prodFile
     */
    prodFile?: Blob;

    /**
     * exprm
     */
    exprm?: string;
  }

  /**
   * Parameters for updateExperimentMetadataUsingPUT
   */
  export interface UpdateExperimentMetadataUsingPUTParams {

    /**
     * aid
     */
    aid: number;

    /**
     * screenshots
     */
    screenshots?: Array<Blob>;

    /**
     * prodIcon
     */
    prodIcon?: Blob;

    /**
     * prodFile
     */
    prodFile?: Blob;

    /**
     * exprm
     */
    exprm?: string;
  }

  /**
   * Parameters for updateInfrastructureUsingPUT
   */
  export interface UpdateInfrastructureUsingPUTParams {

    /**
     * infraid
     */
    infraid: number;

    /**
     * c
     */
    c: Infrastructure;
  }

  /**
   * Parameters for addImageToInfrastructureUsingPOST
   */
  export interface AddImageToInfrastructureUsingPOSTParams {

    /**
     * vfimageid
     */
    vfimageid: number;

    /**
     * infraid
     */
    infraid: number;
  }

  /**
   * Parameters for updateMANOplatformUsingPUT
   */
  export interface UpdateMANOplatformUsingPUTParams {

    /**
     * mpid
     */
    mpid: number;

    /**
     * c
     */
    c: MANOplatform;
  }

  /**
   * Parameters for getOSMNSDMetadataByKOSMMANOIDUsingGET
   */
  export interface GetOSMNSDMetadataByKOSMMANOIDUsingGETParams {

    /**
     * vxfid
     */
    vxfid: string;

    /**
     * mpid
     */
    mpid: number;
  }

  /**
   * Parameters for updateMANOproviderUsingPUT
   */
  export interface UpdateMANOproviderUsingPUTParams {

    /**
     * mpid
     */
    mpid: number;

    /**
     * c
     */
    c: MANOprovider;
  }

  /**
   * Parameters for updatePropertyUsingPUT
   */
  export interface UpdatePropertyUsingPUTParams {

    /**
     * propid
     */
    propid: number;

    /**
     * p
     */
    p: PortalProperty;
  }

  /**
   * Parameters for updateUvalidationjobUsingPUT
   */
  export interface UpdateUvalidationjobUsingPUTParams {

    /**
     * vxf_id
     */
    vxfId: number;

    /**
     * vresult
     */
    vresult: ValidationJobResult;
  }

  /**
   * Parameters for updateVxFOnBoardedDescriptorUsingPUT
   */
  export interface UpdateVxFOnBoardedDescriptorUsingPUTParams {

    /**
     * mpid
     */
    mpid: number;

    /**
     * c
     */
    c: VxFOnBoardedDescriptor;
  }

  /**
   * Parameters for offBoardDescriptorUsingPUT
   */
  export interface OffBoardDescriptorUsingPUTParams {

    /**
     * mpid
     */
    mpid: number;

    /**
     * clobd
     */
    clobd: VxFOnBoardedDescriptor;
  }

  /**
   * Parameters for onBoardDescriptorUsingPUT
   */
  export interface OnBoardDescriptorUsingPUTParams {

    /**
     * vxfobd
     */
    vxfobd: VxFOnBoardedDescriptor;

    /**
     * mpid
     */
    mpid: number;
  }

  /**
   * Parameters for addVxFMetadataUsingPOST
   */
  export interface AddVxFMetadataUsingPOSTParams {

    /**
     * prodFile
     */
    prodFile: Blob;

    /**
     * vxf
     */
    vxf?: string;

    /**
     * screenshots
     */
    screenshots?: Array<Blob>;

    /**
     * prodIcon
     */
    prodIcon?: Blob;
  }

  /**
   * Parameters for updateVxFMetadataUsingPUT
   */
  export interface UpdateVxFMetadataUsingPUTParams {

    /**
     * bid
     */
    bid: number;

    /**
     * vxf
     */
    vxf?: string;

    /**
     * screenshots
     */
    screenshots?: Array<Blob>;

    /**
     * prodIcon
     */
    prodIcon?: Blob;

    /**
     * prodFile
     */
    prodFile?: Blob;
  }

  /**
   * Parameters for getEntityImageUsingGET
   */
  export interface GetEntityImageUsingGETParams {

    /**
     * uuid
     */
    uuid: string;

    /**
     * imgfile
     */
    imgfile: string;
  }

  /**
   * Parameters for getOSMVNFMetadataByKOSMMANOIDUsingGET
   */
  export interface GetOSMVNFMetadataByKOSMMANOIDUsingGETParams {

    /**
     * vxfid
     */
    vxfid: string;

    /**
     * mpid
     */
    mpid: number;
  }

  /**
   * Parameters for downloadVxFPackageUsingGET
   */
  export interface DownloadVxFPackageUsingGETParams {

    /**
     * vxffile
     */
    vxffile: string;

    /**
     * uuid
     */
    uuid: string;
  }
}

export { ArtifactsApiControllerService }
