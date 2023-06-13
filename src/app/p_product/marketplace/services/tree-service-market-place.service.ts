import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Catalog, Category } from 'src/app/openApis/productCatalogManagement/models';

@Injectable({
  providedIn: 'root'
})
export class TreeServiceMarketPlaceService {

  constructor() { }

  catalogs$: Subject<Catalog[]> = new Subject
  categorySelected$: Subject<Category> = new Subject
}
