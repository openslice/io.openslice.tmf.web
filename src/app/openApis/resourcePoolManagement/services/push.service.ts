/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourcePool } from '../models/resource-pool';
import { PushCreate } from '../models/push-create';
@Injectable({
  providedIn: 'root',
})
class PushService extends __BaseService {
  static readonly createPushPath = '/resourcePoolManagement/v1/push';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates a 'Push' action and modifies a Pool
   *
   * This operation runs TASK, which adds the capacity of the new resource to the resource pool.
   * @param body The Push to be performed
   * @return OK or Created
   */
  createPushResponse(body: PushCreate): __Observable<__StrictHttpResponse<ResourcePool | ResourcePool>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourcePoolManagement/v1/push`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ResourcePool | ResourcePool>;
      })
    );
  }
  /**
   * Creates a 'Push' action and modifies a Pool
   *
   * This operation runs TASK, which adds the capacity of the new resource to the resource pool.
   * @param body The Push to be performed
   * @return OK or Created
   */
  createPush(body: PushCreate): __Observable<ResourcePool | ResourcePool> {
    return this.createPushResponse(body).pipe(
      __map(_r => _r.body as ResourcePool | ResourcePool)
    );
  }
}

module PushService {
}

export { PushService }
