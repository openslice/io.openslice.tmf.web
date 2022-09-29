import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ServiceCatalog, ServiceCategory } from 'src/app/openApis/serviceCatalogManagement/models';

@Injectable({
  providedIn: 'root'
})
export class TreeServiceMarketPlaceService {

  constructor() { }

  catalogs$: Subject<ServiceCatalog[]> = new Subject
  categorySelected$: Subject<ServiceCategory> = new Subject
}
