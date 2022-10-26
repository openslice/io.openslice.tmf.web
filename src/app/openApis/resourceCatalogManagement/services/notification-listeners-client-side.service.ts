/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { EventSubscription } from '../models/event-subscription';
import { ExportJobCreateEvent } from '../models/export-job-create-event';
import { ExportJobStateChangeEvent } from '../models/export-job-state-change-event';
import { ImportJobCreateEvent } from '../models/import-job-create-event';
import { ImportJobStateChangeEvent } from '../models/import-job-state-change-event';
import { ResourceCandidateChangeEvent } from '../models/resource-candidate-change-event';
import { ResourceCandidateCreateEvent } from '../models/resource-candidate-create-event';
import { ResourceCandidateDeleteEvent } from '../models/resource-candidate-delete-event';
import { ResourceCatalogChangeEvent } from '../models/resource-catalog-change-event';
import { ResourceCatalogCreateEvent } from '../models/resource-catalog-create-event';
import { ResourceCatalogDeleteEvent } from '../models/resource-catalog-delete-event';
import { ResourceCategoryChangeEvent } from '../models/resource-category-change-event';
import { ResourceCategoryCreateEvent } from '../models/resource-category-create-event';
import { ResourceCategoryDeleteEvent } from '../models/resource-category-delete-event';
import { ResourceSpecificationChangeEvent } from '../models/resource-specification-change-event';
import { ResourceSpecificationCreateEvent } from '../models/resource-specification-create-event';
import { ResourceSpecificationDeleteEvent } from '../models/resource-specification-delete-event';
@Injectable({
  providedIn: 'root',
})
class NotificationListenersClientSideService extends __BaseService {
  static readonly listenToExportJobCreateEventPath = '/resourceCatalogManagement/v4/listener/exportJobCreateEvent';
  static readonly listenToExportJobStateChangeEventPath = '/resourceCatalogManagement/v4/listener/exportJobStateChangeEvent';
  static readonly listenToImportJobCreateEventPath = '/resourceCatalogManagement/v4/listener/importJobCreateEvent';
  static readonly listenToImportJobStateChangeEventPath = '/resourceCatalogManagement/v4/listener/importJobStateChangeEvent';
  static readonly listenToResourceCandidateChangeEventPath = '/resourceCatalogManagement/v4/listener/resourceCandidateChangeEvent';
  static readonly listenToResourceCandidateCreateEventPath = '/resourceCatalogManagement/v4/listener/resourceCandidateCreateEvent';
  static readonly listenToResourceCandidateDeleteEventPath = '/resourceCatalogManagement/v4/listener/resourceCandidateDeleteEvent';
  static readonly listenToResourceCatalogChangeEventPath = '/resourceCatalogManagement/v4/listener/resourceCatalogChangeEvent';
  static readonly listenToResourceCatalogCreateEventPath = '/resourceCatalogManagement/v4/listener/resourceCatalogCreateEvent';
  static readonly listenToResourceCatalogDeleteEventPath = '/resourceCatalogManagement/v4/listener/resourceCatalogDeleteEvent';
  static readonly listenToResourceCategoryChangeEventPath = '/resourceCatalogManagement/v4/listener/resourceCategoryChangeEvent';
  static readonly listenToResourceCategoryCreateEventPath = '/resourceCatalogManagement/v4/listener/resourceCategoryCreateEvent';
  static readonly listenToResourceCategoryDeleteEventPath = '/resourceCatalogManagement/v4/listener/resourceCategoryDeleteEvent';
  static readonly listenToResourceSpecificationChangeEventPath = '/resourceCatalogManagement/v4/listener/resourceSpecificationChangeEvent';
  static readonly listenToResourceSpecificationCreateEventPath = '/resourceCatalogManagement/v4/listener/resourceSpecificationCreateEvent';
  static readonly listenToResourceSpecificationDeleteEventPath = '/resourceCatalogManagement/v4/listener/resourceSpecificationDeleteEvent';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Client listener for entity ExportJobCreateEvent
   *
   * Example of a client listener for receiving the notification ExportJobCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToExportJobCreateEventResponse(body: ExportJobCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/exportJobCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ExportJobCreateEvent
   *
   * Example of a client listener for receiving the notification ExportJobCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToExportJobCreateEvent(body: ExportJobCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToExportJobCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ExportJobStateChangeEvent
   *
   * Example of a client listener for receiving the notification ExportJobStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToExportJobStateChangeEventResponse(body: ExportJobStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/exportJobStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ExportJobStateChangeEvent
   *
   * Example of a client listener for receiving the notification ExportJobStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToExportJobStateChangeEvent(body: ExportJobStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToExportJobStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ImportJobCreateEvent
   *
   * Example of a client listener for receiving the notification ImportJobCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToImportJobCreateEventResponse(body: ImportJobCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/importJobCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ImportJobCreateEvent
   *
   * Example of a client listener for receiving the notification ImportJobCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToImportJobCreateEvent(body: ImportJobCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToImportJobCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ImportJobStateChangeEvent
   *
   * Example of a client listener for receiving the notification ImportJobStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToImportJobStateChangeEventResponse(body: ImportJobStateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/importJobStateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ImportJobStateChangeEvent
   *
   * Example of a client listener for receiving the notification ImportJobStateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToImportJobStateChangeEvent(body: ImportJobStateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToImportJobStateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCandidateChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceCandidateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCandidateChangeEventResponse(body: ResourceCandidateChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCandidateChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCandidateChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceCandidateChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCandidateChangeEvent(body: ResourceCandidateChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCandidateChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCandidateCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceCandidateCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCandidateCreateEventResponse(body: ResourceCandidateCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCandidateCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCandidateCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceCandidateCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCandidateCreateEvent(body: ResourceCandidateCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCandidateCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCandidateDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceCandidateDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCandidateDeleteEventResponse(body: ResourceCandidateDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCandidateDeleteEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCandidateDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceCandidateDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCandidateDeleteEvent(body: ResourceCandidateDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCandidateDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCatalogChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceCatalogChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCatalogChangeEventResponse(body: ResourceCatalogChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCatalogChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCatalogChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceCatalogChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCatalogChangeEvent(body: ResourceCatalogChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCatalogChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCatalogCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceCatalogCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCatalogCreateEventResponse(body: ResourceCatalogCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCatalogCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCatalogCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceCatalogCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCatalogCreateEvent(body: ResourceCatalogCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCatalogCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCatalogDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceCatalogDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCatalogDeleteEventResponse(body: ResourceCatalogDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCatalogDeleteEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCatalogDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceCatalogDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCatalogDeleteEvent(body: ResourceCatalogDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCatalogDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCategoryChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceCategoryChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCategoryChangeEventResponse(body: ResourceCategoryChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCategoryChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCategoryChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceCategoryChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCategoryChangeEvent(body: ResourceCategoryChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCategoryChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCategoryCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceCategoryCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCategoryCreateEventResponse(body: ResourceCategoryCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCategoryCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCategoryCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceCategoryCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCategoryCreateEvent(body: ResourceCategoryCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCategoryCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceCategoryDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceCategoryDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCategoryDeleteEventResponse(body: ResourceCategoryDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceCategoryDeleteEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceCategoryDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceCategoryDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceCategoryDeleteEvent(body: ResourceCategoryDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceCategoryDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceSpecificationChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceSpecificationChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceSpecificationChangeEventResponse(body: ResourceSpecificationChangeEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceSpecificationChangeEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceSpecificationChangeEvent
   *
   * Example of a client listener for receiving the notification ResourceSpecificationChangeEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceSpecificationChangeEvent(body: ResourceSpecificationChangeEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceSpecificationChangeEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceSpecificationCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceSpecificationCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceSpecificationCreateEventResponse(body: ResourceSpecificationCreateEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceSpecificationCreateEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceSpecificationCreateEvent
   *
   * Example of a client listener for receiving the notification ResourceSpecificationCreateEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceSpecificationCreateEvent(body: ResourceSpecificationCreateEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceSpecificationCreateEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }

  /**
   * Client listener for entity ResourceSpecificationDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceSpecificationDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceSpecificationDeleteEventResponse(body: ResourceSpecificationDeleteEvent): __Observable<__StrictHttpResponse<EventSubscription | EventSubscription>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/resourceCatalogManagement/v4/listener/resourceSpecificationDeleteEvent`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<EventSubscription | EventSubscription>;
      })
    );
  }
  /**
   * Client listener for entity ResourceSpecificationDeleteEvent
   *
   * Example of a client listener for receiving the notification ResourceSpecificationDeleteEvent
   * @param body The event data
   * @return OK or Notified
   */
  listenToResourceSpecificationDeleteEvent(body: ResourceSpecificationDeleteEvent): __Observable<EventSubscription | EventSubscription> {
    return this.listenToResourceSpecificationDeleteEventResponse(body).pipe(
      __map(_r => _r.body as EventSubscription | EventSubscription)
    );
  }
}

module NotificationListenersClientSideService {
}

export { NotificationListenersClientSideService }
