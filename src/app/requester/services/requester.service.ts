import { Injectable } from '@angular/core';
import { ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {


  constructor() { }

  serviceSpecsCart: ServiceSpecification[] = []

  selectedSpecToView: ServiceSpecification
}
