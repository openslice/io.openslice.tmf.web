import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResourceCatalog, ResourceCategory } from 'src/app/openApis/ResourceCatalogManagement/models';

@Injectable({
  providedIn: 'root'
})
export class TreeResourceMarketPlaceService {

  constructor() { }

  catalogs$: Subject<ResourceCatalog[]> = new Subject
  categorySelected$: Subject<ResourceCategory> = new Subject
}
