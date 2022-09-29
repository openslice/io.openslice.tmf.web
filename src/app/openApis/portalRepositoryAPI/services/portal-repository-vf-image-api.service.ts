/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';


/**
 * Portal Repository VF Image API
 */
@Injectable({
  providedIn: 'root',
})
class PortalRepositoryVfImageApiService extends __BaseService {
  static readonly getAdminVFImagesUsingGETPath = '/admin/vfimages';
  static readonly addVFImageUsingPOSTPath = '/admin/vfimages';
  static readonly updateVFImageUsingPUTPath = '/admin/vfimages';
  static readonly getVFImageByNameUsingGETPath = '/admin/vfimages/name/{imagename}';
  static readonly getVFImageByIdUsingGETPath = '/admin/vfimages/{id}';
  static readonly deleteVFImageUsingDELETEPath = '/admin/vfimages/{id}';
  static readonly downloadVxFPackageUsingGET1Path = '/vfimages/image/{uuid}/{vfimagefile}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAdminVFImagesUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/vfimages`,
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
  getAdminVFImagesUsingGET(): __Observable<{}> {
    return this.getAdminVFImagesUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryVfImageApiService.AddVFImageUsingPOSTParams` containing the following parameters:
   *
   * - `vfimage`: vfimage
   *
   * - `prodFile`: prodFile
   *
   * @return OK
   */
  addVFImageUsingPOSTResponse(params: PortalRepositoryVfImageApiService.AddVFImageUsingPOSTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    __body = params.vfimage;
    if (params.prodFile != null) { __formData.append('prodFile', params.prodFile as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/vfimages`,
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
   * @param params The `PortalRepositoryVfImageApiService.AddVFImageUsingPOSTParams` containing the following parameters:
   *
   * - `vfimage`: vfimage
   *
   * - `prodFile`: prodFile
   *
   * @return OK
   */
  addVFImageUsingPOST(params: PortalRepositoryVfImageApiService.AddVFImageUsingPOSTParams): __Observable<{}> {
    return this.addVFImageUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryVfImageApiService.UpdateVFImageUsingPUTParams` containing the following parameters:
   *
   * - `vfimage`: vfimage
   *
   * - `prodFile`: prodFile
   *
   * @return OK
   */
  updateVFImageUsingPUTResponse(params: PortalRepositoryVfImageApiService.UpdateVFImageUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    __body = params.vfimage;
    if (params.prodFile != null) { __formData.append('prodFile', params.prodFile as string | Blob);}
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/vfimages`,
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
   * @param params The `PortalRepositoryVfImageApiService.UpdateVFImageUsingPUTParams` containing the following parameters:
   *
   * - `vfimage`: vfimage
   *
   * - `prodFile`: prodFile
   *
   * @return OK
   */
  updateVFImageUsingPUT(params: PortalRepositoryVfImageApiService.UpdateVFImageUsingPUTParams): __Observable<{}> {
    return this.updateVFImageUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param imagename imagename
   * @return OK
   */
  getVFImageByNameUsingGETResponse(imagename: string): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/vfimages/name/${imagename}`,
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
   * @param imagename imagename
   * @return OK
   */
  getVFImageByNameUsingGET(imagename: string): __Observable<{}> {
    return this.getVFImageByNameUsingGETResponse(imagename).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getVFImageByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/vfimages/${id}`,
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
  getVFImageByIdUsingGET(id: number): __Observable<{}> {
    return this.getVFImageByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param id id
   * @return OK
   */
  deleteVFImageUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/vfimages/${id}`,
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
  deleteVFImageUsingDELETE(id: number): __Observable<{}> {
    return this.deleteVFImageUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryVfImageApiService.DownloadVxFPackageUsingGET1Params` containing the following parameters:
   *
   * - `vfimagefile`: vfimagefile
   *
   * - `uuid`: uuid
   *
   * @return OK
   */
  downloadVxFPackageUsingGET1Response(params: PortalRepositoryVfImageApiService.DownloadVxFPackageUsingGET1Params): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/vfimages/image/${params.uuid}/${params.vfimagefile}`,
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
   * @param params The `PortalRepositoryVfImageApiService.DownloadVxFPackageUsingGET1Params` containing the following parameters:
   *
   * - `vfimagefile`: vfimagefile
   *
   * - `uuid`: uuid
   *
   * @return OK
   */
  downloadVxFPackageUsingGET1(params: PortalRepositoryVfImageApiService.DownloadVxFPackageUsingGET1Params): __Observable<string> {
    return this.downloadVxFPackageUsingGET1Response(params).pipe(
      __map(_r => _r.body as string)
    );
  }
}

module PortalRepositoryVfImageApiService {

  /**
   * Parameters for addVFImageUsingPOST
   */
  export interface AddVFImageUsingPOSTParams {

    /**
     * vfimage
     */
    vfimage?: string;

    /**
     * prodFile
     */
    prodFile?: Blob;
  }

  /**
   * Parameters for updateVFImageUsingPUT
   */
  export interface UpdateVFImageUsingPUTParams {

    /**
     * vfimage
     */
    vfimage?: string;

    /**
     * prodFile
     */
    prodFile?: Blob;
  }

  /**
   * Parameters for downloadVxFPackageUsingGET1
   */
  export interface DownloadVxFPackageUsingGET1Params {

    /**
     * vfimagefile
     */
    vfimagefile: string;

    /**
     * uuid
     */
    uuid: string;
  }
}

export { PortalRepositoryVfImageApiService }
