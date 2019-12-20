import { Injectable } from '@angular/core';
import { BootstrapService } from 'src/app/bootstrap/bootstrap.service';
import { ApiConfiguration } from 'src/app/openApis/ServiceCatalogManagement/api-configuration'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private bootstrapService: BootstrapService,
    private tmfAPIconfig: ApiConfiguration
  ) { 
    this.tmfAPIconfig.rootUrl = this.config.APITMFURL
  }

  config = this.bootstrapService.getConfig()

  descStringSortingFunction() {
    return (a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) { return -1; }
      if (nameA > nameB) { return 1; }
      return 0
    }
  }
}
