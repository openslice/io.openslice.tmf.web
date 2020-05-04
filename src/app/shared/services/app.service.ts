import { Injectable } from '@angular/core';
import { BootstrapService } from 'src/app/bootstrap/bootstrap.service';
import { ApiConfiguration as PortalAPIconfig} from 'src/app/openApis/PortalRepositoryAPI/api-configuration'
import { ApiConfiguration as ServiceCatalogAPIconfig} from 'src/app/openApis/ServiceCatalogManagement/api-configuration'
import { ApiConfiguration as ServiceInventoryAPIconfig} from 'src/app/openApis/ServiceInventoryManagement/api-configuration'
import { ApiConfiguration as ServiceOrderingAPIconfig} from 'src/app/openApis/ServiceOrderingManagement/api-configuration'
import { ApiConfiguration as PartyManagementAPIconfig} from 'src/app/openApis/PartyManagement/api-configuration'

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
    private tmfPartyManagementConfig: PartyManagementAPIconfig
  ) { 
    this.setAPIurls()
  }

  config = this.bootstrapService.getConfig()

  setAPIurls() {
    this.portalAPIConfig.rootUrl = this.config.APIURL
    this.tmfServiceCatalogConfig.rootUrl = this.config.APITMFURL
    this.tmfServiceInventoryConfig.rootUrl = this.config.APITMFURL    
    this.tmfServiceOrderingConfig.rootUrl = this.config.APITMFURL
    this.tmfPartyManagementConfig.rootUrl = this.config.APITMFURL
  }
}
