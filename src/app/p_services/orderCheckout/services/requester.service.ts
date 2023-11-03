import { Injectable } from '@angular/core';
import { ServiceSpecification, ServiceSpecCharacteristicValue, ServiceSpecCharacteristic } from 'src/app/openApis/serviceCatalogManagement/models';
import { Subject } from 'rxjs';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';

@Injectable({
  providedIn: 'root'
})
export class RequesterService {

  orderedSpecsList: ServiceSpecification[] = []

  orderListUpdated$ = new Subject<boolean>()
  // serviceConfigurationList: serviceConfigurationItem[] = []
  // selectedSpecToView: serviceSpecConfigurationListItem

  constructor(
    private specService: ServiceSpecificationService
  ) {
    // check if Specs are not in orderedSpecsList and exist in Localstorage.orderedSpecsList (that happens only after a hard refresh on app)
    const orderList: string[] = JSON.parse(localStorage.getItem('orderedSpecsList'))
    if (orderList && (this.orderedSpecsList.length === 0 || orderList.length !== this.orderedSpecsList.length)) {
      orderList.forEach(specId => {
        if (!this.orderedSpecsList.some(el => el.id === specId)) {
          this.specService.retrieveServiceSpecification({id: specId}).subscribe(
            data => { 
              this.orderedSpecsList.push(data)
              this.orderListUpdated$.next(true)
            },
            error => { 
              this.orderedSpecsList = []
              localStorage.removeItem('orderedSpecsList')
            }
          )
        }
      });
    }
  }
}

export interface serviceSpecConfigurationListItem {
  checked:boolean,
  spec: ServiceSpecification, 
  specCharacteristics: {
    name: string,
    valueType: string,
    value:ServiceSpecCharacteristicValue[] }[] 
}