/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Category } from '../models/category';
import { PortalUser } from '../models/portal-user';
import { UserSession } from '../models/user-session';

/**
 * Portal Repository API Impl
 */
@Injectable({
  providedIn: 'root',
})
class PortalRepositoryApiImplService extends __BaseService {
  static readonly getAdminCategoriesUsingGETPath = '/admin/categories';
  static readonly addCategoryUsingPOSTPath = '/admin/categories';
  static readonly getAdminCategoryByIdUsingGETPath = '/admin/categories/{catid}';
  static readonly updateCategoryUsingPUTPath = '/admin/categories/{catid}';
  static readonly deleteCategoryUsingDELETEPath = '/admin/categories/{catid}';
  static readonly getUsersUsingGETPath = '/admin/users';
  static readonly addUserUsingPOSTPath = '/admin/users';
  static readonly getMentorsUsingGETPath = '/admin/users/mentors';
  static readonly getUserUsingGETPath = '/admin/users/myuser';
  static readonly getUserByIdUsingGETPath = '/admin/users/{userid}';
  static readonly updateUserInfoUsingPUTPath = '/admin/users/{userid}';
  static readonly deleteUserUsingDELETEPath = '/admin/users/{userid}';
  static readonly getAllAppsofUserUsingGETPath = '/admin/users/{userid}/experiments';
  static readonly getAppofUserUsingGETPath = '/admin/users/{userid}/experiments/{appid}';
  static readonly getAllVxFsofUserUsingGETPath = '/admin/users/{userid}/vxfs';
  static readonly getVxFofUserUsingGETPath = '/admin/users/{userid}/vxfs/{vxfid}';
  static readonly getCategoriesUsingGETPath = '/categories';
  static readonly getCategoryByIdUsingGETPath = '/categories/{catid}';
  static readonly addNewRegisterUserUsingPOSTPath = '/register';
  static readonly addNewRegisterUserVerifyUsingPOSTPath = '/register/verify';
  static readonly addUserSessionUsingPOSTPath = '/sessions';
  static readonly logoutUserUsingGETPath = '/sessions/logout';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAdminCategoriesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Category>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/categories`,
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
   * @return OK
   */
  getAdminCategoriesUsingGET(): __Observable<Array<Category>> {
    return this.getAdminCategoriesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Category>)
    );
  }

  /**
   * @param c c
   * @return OK
   */
  addCategoryUsingPOSTResponse(c: Category): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = c;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/categories`,
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
  addCategoryUsingPOST(c: Category): __Observable<{}> {
    return this.addCategoryUsingPOSTResponse(c).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param catid catid
   * @return OK
   */
  getAdminCategoryByIdUsingGETResponse(catid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/categories/${catid}`,
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
   * @param catid catid
   * @return OK
   */
  getAdminCategoryByIdUsingGET(catid: number): __Observable<{}> {
    return this.getAdminCategoryByIdUsingGETResponse(catid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryApiImplService.UpdateCategoryUsingPUTParams` containing the following parameters:
   *
   * - `catid`: catid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateCategoryUsingPUTResponse(params: PortalRepositoryApiImplService.UpdateCategoryUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.c;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/categories/${params.catid}`,
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
   * @param params The `PortalRepositoryApiImplService.UpdateCategoryUsingPUTParams` containing the following parameters:
   *
   * - `catid`: catid
   *
   * - `c`: c
   *
   * @return OK
   */
  updateCategoryUsingPUT(params: PortalRepositoryApiImplService.UpdateCategoryUsingPUTParams): __Observable<{}> {
    return this.updateCategoryUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param catid catid
   * @return OK
   */
  deleteCategoryUsingDELETEResponse(catid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/categories/${catid}`,
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
   * @param catid catid
   * @return OK
   */
  deleteCategoryUsingDELETE(catid: number): __Observable<{}> {
    return this.deleteCategoryUsingDELETEResponse(catid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getUsersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<PortalUser>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PortalUser>>;
      })
    );
  }
  /**
   * @return OK
   */
  getUsersUsingGET(): __Observable<Array<PortalUser>> {
    return this.getUsersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<PortalUser>)
    );
  }

  /**
   * @param user user
   * @return OK
   */
  addUserUsingPOSTResponse(user: PortalUser): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/admin/users`,
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
   * @param user user
   * @return OK
   */
  addUserUsingPOST(user: PortalUser): __Observable<{}> {
    return this.addUserUsingPOSTResponse(user).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getMentorsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<PortalUser>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/users/mentors`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PortalUser>>;
      })
    );
  }
  /**
   * @return OK
   */
  getMentorsUsingGET(): __Observable<Array<PortalUser>> {
    return this.getMentorsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<PortalUser>)
    );
  }

  /**
   * @return OK
   */
  getUserUsingGETResponse(): __Observable<__StrictHttpResponse<PortalUser>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/users/myuser`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PortalUser>;
      })
    );
  }
  /**
   * @return OK
   */
  getUserUsingGET(): __Observable<PortalUser> {
    return this.getUserUsingGETResponse().pipe(
      __map(_r => _r.body as PortalUser)
    );
  }

  /**
   * @param userid userid
   * @return OK
   */
  getUserByIdUsingGETResponse(userid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/users/${userid}`,
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
   * @param userid userid
   * @return OK
   */
  getUserByIdUsingGET(userid: number): __Observable<{}> {
    return this.getUserByIdUsingGETResponse(userid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryApiImplService.UpdateUserInfoUsingPUTParams` containing the following parameters:
   *
   * - `userid`: userid
   *
   * - `user`: user
   *
   * @return OK
   */
  updateUserInfoUsingPUTResponse(params: PortalRepositoryApiImplService.UpdateUserInfoUsingPUTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.user;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/admin/users/${params.userid}`,
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
   * @param params The `PortalRepositoryApiImplService.UpdateUserInfoUsingPUTParams` containing the following parameters:
   *
   * - `userid`: userid
   *
   * - `user`: user
   *
   * @return OK
   */
  updateUserInfoUsingPUT(params: PortalRepositoryApiImplService.UpdateUserInfoUsingPUTParams): __Observable<{}> {
    return this.updateUserInfoUsingPUTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param userid userid
   * @return OK
   */
  deleteUserUsingDELETEResponse(userid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/admin/users/${userid}`,
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
   * @param userid userid
   * @return OK
   */
  deleteUserUsingDELETE(userid: number): __Observable<{}> {
    return this.deleteUserUsingDELETEResponse(userid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param userid userid
   * @return OK
   */
  getAllAppsofUserUsingGETResponse(userid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/users/${userid}/experiments`,
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
   * @param userid userid
   * @return OK
   */
  getAllAppsofUserUsingGET(userid: number): __Observable<{}> {
    return this.getAllAppsofUserUsingGETResponse(userid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryApiImplService.GetAppofUserUsingGETParams` containing the following parameters:
   *
   * - `userid`: userid
   *
   * - `appid`: appid
   *
   * @return OK
   */
  getAppofUserUsingGETResponse(params: PortalRepositoryApiImplService.GetAppofUserUsingGETParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/users/${params.userid}/experiments/${params.appid}`,
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
   * @param params The `PortalRepositoryApiImplService.GetAppofUserUsingGETParams` containing the following parameters:
   *
   * - `userid`: userid
   *
   * - `appid`: appid
   *
   * @return OK
   */
  getAppofUserUsingGET(params: PortalRepositoryApiImplService.GetAppofUserUsingGETParams): __Observable<{}> {
    return this.getAppofUserUsingGETResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param userid userid
   * @return OK
   */
  getAllVxFsofUserUsingGETResponse(userid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/users/${userid}/vxfs`,
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
   * @param userid userid
   * @return OK
   */
  getAllVxFsofUserUsingGET(userid: number): __Observable<{}> {
    return this.getAllVxFsofUserUsingGETResponse(userid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryApiImplService.GetVxFofUserUsingGETParams` containing the following parameters:
   *
   * - `vxfid`: vxfid
   *
   * - `userid`: userid
   *
   * @return OK
   */
  getVxFofUserUsingGETResponse(params: PortalRepositoryApiImplService.GetVxFofUserUsingGETParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/admin/users/${params.userid}/vxfs/${params.vxfid}`,
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
   * @param params The `PortalRepositoryApiImplService.GetVxFofUserUsingGETParams` containing the following parameters:
   *
   * - `vxfid`: vxfid
   *
   * - `userid`: userid
   *
   * @return OK
   */
  getVxFofUserUsingGET(params: PortalRepositoryApiImplService.GetVxFofUserUsingGETParams): __Observable<{}> {
    return this.getVxFofUserUsingGETResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  getCategoriesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Category>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/categories`,
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
   * @return OK
   */
  getCategoriesUsingGET(): __Observable<Array<Category>> {
    return this.getCategoriesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Category>)
    );
  }

  /**
   * @param catid catid
   * @return OK
   */
  getCategoryByIdUsingGETResponse(catid: number): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/categories/${catid}`,
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
   * @param catid catid
   * @return OK
   */
  getCategoryByIdUsingGET(catid: number): __Observable<{}> {
    return this.getCategoryByIdUsingGETResponse(catid).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryApiImplService.AddNewRegisterUserUsingPOSTParams` containing the following parameters:
   *
   * - `portaluser`: portaluser
   *
   * - `emailmessage`: emailmessage
   *
   * @return OK
   */
  addNewRegisterUserUsingPOSTResponse(params: PortalRepositoryApiImplService.AddNewRegisterUserUsingPOSTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.portaluser;
    __body = params.emailmessage;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/register`,
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
   * @param params The `PortalRepositoryApiImplService.AddNewRegisterUserUsingPOSTParams` containing the following parameters:
   *
   * - `portaluser`: portaluser
   *
   * - `emailmessage`: emailmessage
   *
   * @return OK
   */
  addNewRegisterUserUsingPOST(params: PortalRepositoryApiImplService.AddNewRegisterUserUsingPOSTParams): __Observable<{}> {
    return this.addNewRegisterUserUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param params The `PortalRepositoryApiImplService.AddNewRegisterUserVerifyUsingPOSTParams` containing the following parameters:
   *
   * - `username`: username
   *
   * - `rid`: rid
   *
   * @return OK
   */
  addNewRegisterUserVerifyUsingPOSTResponse(params: PortalRepositoryApiImplService.AddNewRegisterUserVerifyUsingPOSTParams): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.username;
    __body = params.rid;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/register/verify`,
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
   * @param params The `PortalRepositoryApiImplService.AddNewRegisterUserVerifyUsingPOSTParams` containing the following parameters:
   *
   * - `username`: username
   *
   * - `rid`: rid
   *
   * @return OK
   */
  addNewRegisterUserVerifyUsingPOST(params: PortalRepositoryApiImplService.AddNewRegisterUserVerifyUsingPOSTParams): __Observable<{}> {
    return this.addNewRegisterUserVerifyUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @param userSession userSession
   * @return OK
   */
  addUserSessionUsingPOSTResponse(userSession: UserSession): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = userSession;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/sessions`,
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
   * @param userSession userSession
   * @return OK
   */
  addUserSessionUsingPOST(userSession: UserSession): __Observable<{}> {
    return this.addUserSessionUsingPOSTResponse(userSession).pipe(
      __map(_r => _r.body as {})
    );
  }

  /**
   * @return OK
   */
  logoutUserUsingGETResponse(): __Observable<__StrictHttpResponse<{}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/sessions/logout`,
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
  logoutUserUsingGET(): __Observable<{}> {
    return this.logoutUserUsingGETResponse().pipe(
      __map(_r => _r.body as {})
    );
  }
}

module PortalRepositoryApiImplService {

  /**
   * Parameters for updateCategoryUsingPUT
   */
  export interface UpdateCategoryUsingPUTParams {

    /**
     * catid
     */
    catid: number;

    /**
     * c
     */
    c: Category;
  }

  /**
   * Parameters for updateUserInfoUsingPUT
   */
  export interface UpdateUserInfoUsingPUTParams {

    /**
     * userid
     */
    userid: number;

    /**
     * user
     */
    user: PortalUser;
  }

  /**
   * Parameters for getAppofUserUsingGET
   */
  export interface GetAppofUserUsingGETParams {

    /**
     * userid
     */
    userid: number;

    /**
     * appid
     */
    appid: number;
  }

  /**
   * Parameters for getVxFofUserUsingGET
   */
  export interface GetVxFofUserUsingGETParams {

    /**
     * vxfid
     */
    vxfid: number;

    /**
     * userid
     */
    userid: number;
  }

  /**
   * Parameters for addNewRegisterUserUsingPOST
   */
  export interface AddNewRegisterUserUsingPOSTParams {

    /**
     * portaluser
     */
    portaluser?: string;

    /**
     * emailmessage
     */
    emailmessage?: string;
  }

  /**
   * Parameters for addNewRegisterUserVerifyUsingPOST
   */
  export interface AddNewRegisterUserVerifyUsingPOSTParams {

    /**
     * username
     */
    username?: string;

    /**
     * rid
     */
    rid?: string;
  }
}

export { PortalRepositoryApiImplService }
