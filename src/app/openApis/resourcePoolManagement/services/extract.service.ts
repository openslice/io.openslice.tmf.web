/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ResourcePool } from '../models/resource-pool';
import { ExtractCreate } from '../models/extract-create';
@Injectable({
  providedIn: 'root',
})
class ExtractService extends __BaseService {
  static readonly createExtractPath = '/resourcePoolManagement/v1/extract';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates an 'Extract' action and modifies a pool
   *
   * In this operation, TASK is executed to extract the capacity of the resource from the resource pool to another pool.
   * @param body The Extract to be performed
   * @return OK or Created
   */
  createExtractResponse(body: ExtractCreate): __Observable<__StrictHttpResponse<ResourcePool | ResourcePool>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourcePoolManagement/v1/extract`,
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
   * Creates an 'Extract' action and modifies a pool
   *
   * In this operation, TASK is executed to extract the capacity of the resource from the resource pool to another pool.
   * @param body The Extract to be performed
   * @return OK or Created
   */
  createExtract(body: ExtractCreate): __Observable<ResourcePool | ResourcePool> {
    return this.createExtractResponse(body).pipe(
      __map(_r => _r.body as ResourcePool | ResourcePool)
    );
  }
}

module ExtractService {
}

export { ExtractService }
