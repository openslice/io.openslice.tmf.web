import { Injectable } from '@angular/core';
import { BootstrapService } from 'src/app/bootstrap/bootstrap.service';
import { ApiConfiguration as PortalAPIconfig} from 'src/app/openApis/PortalRepositoryAPI/api-configuration'
import { ApiConfiguration as ServiceCatalogAPIconfig} from 'src/app/openApis/ServiceCatalogManagement/api-configuration';
import { ApiConfiguration as ServiceInventoryAPIconfig} from 'src/app/openApis/ServiceInventoryManagement/api-configuration'
import { ApiConfiguration as ServiceOrderingAPIconfig} from 'src/app/openApis/ServiceOrderingManagement/api-configuration'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private bootstrapService: BootstrapService,
    private portalAPIConfig: PortalAPIconfig,
    private tmfServiceCatalogConfig: ServiceCatalogAPIconfig,
    private tmfServiceInventoryConfig: ServiceInventoryAPIconfig,
    private tmfServiceOrderingConfig: ServiceOrderingAPIconfig,
  ) { 
    this.portalAPIConfig.rootUrl = this.config.APIURL
    this.tmfServiceCatalogConfig.rootUrl = this.config.APITMFURL
    this.tmfServiceOrderingConfig.rootUrl = this.config.APITMFURL
    this.tmfServiceInventoryConfig.rootUrl = this.config.APITMFURL    
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
