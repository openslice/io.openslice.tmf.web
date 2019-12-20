import { Injectable } from '@angular/core';
import { ServiceSpecification, ServiceSpecCharacteristicValue, ServiceSpecCharacteristic } from 'src/app/openApis/ServiceCatalogManagement/models';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {


  constructor() {}

  // serviceSpecsCart: ServiceSpecification[] = []

  serviceConfigurationList: serviceConfigurationItem[] = []
  
  // configurationListItemChanged$ = new Subject<{newValues: ServiceSpecCharacteristic[], specID: string}>()

  // newSpecSelected$ = new Subject<{previousSpec: ServiceSpecification}>()

  selectedSpecToView: serviceConfigurationItem
}

export interface serviceConfigurationItem {
  checked:boolean,
  spec: ServiceSpecification, 
  specCharacteristics: {
    name: string,
    valueType: string,
    value:ServiceSpecCharacteristicValue[] }[] 
}