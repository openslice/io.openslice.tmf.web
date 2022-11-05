/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AvailabilityCheck } from '../models/availability-check';
import { AvailabilityCheckCreate } from '../models/availability-check-create';
@Injectable({
  providedIn: 'root',
})
class AvailabilityCheckService extends __BaseService {
  static readonly createAvailabilityCheckPath = '/resourcePoolManagement/v1/availabilityCheck';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Creates a 'AvailabilityCheck'
   *
   * This operation executes task to retrieve available Resource entities or to check resource pool has available Resource capacity.
   * @param body The Availability Check to be created
   * @return OK or Created
   */
  createAvailabilityCheckResponse(body: AvailabilityCheckCreate): __Observable<__StrictHttpResponse<AvailabilityCheck | AvailabilityCheck>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourcePoolManagement/v1/availabilityCheck`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AvailabilityCheck | AvailabilityCheck>;
      })
    );
  }
  /**
   * Creates a 'AvailabilityCheck'
   *
   * This operation executes task to retrieve available Resource entities or to check resource pool has available Resource capacity.
   * @param body The Availability Check to be created
   * @return OK or Created
   */
  createAvailabilityCheck(body: AvailabilityCheckCreate): __Observable<AvailabilityCheck | AvailabilityCheck> {
    return this.createAvailabilityCheckResponse(body).pipe(
      __map(_r => _r.body as AvailabilityCheck | AvailabilityCheck)
    );
  }
}

module AvailabilityCheckService {
}

export { AvailabilityCheckService }
