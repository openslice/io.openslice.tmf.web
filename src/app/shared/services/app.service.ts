import { Injectable } from '@angular/core';
import { BootstrapService } from 'src/app/bootstrap/bootstrap.service';
import { ApiConfiguration as PortalAPIconfig} from 'src/app/openApis/PortalRepositoryAPI/api-configuration'
import { ApiConfiguration as ServiceCatalogAPIconfig} from 'src/app/openApis/ServiceCatalogManagement/api-configuration'
import { ApiConfiguration as ServiceInventoryAPIconfig} from 'src/app/openApis/ServiceInventoryManagement/api-configuration'
import { ApiConfiguration as ServiceOrderingAPIconfig} from 'src/app/openApis/ServiceOrderingManagement/api-configuration'
import { ApiConfiguration as PartyManagementAPIconfig} from 'src/app/openApis/PartyManagement/api-configuration'
import { ApiConfiguration as ServiceActivationAndConfigurationAPIconfig } from 'src/app/openApis/ServiceActivationAndConfiguration/api-configuration'
import { ApiConfiguration as AlarmManagementAPIconfig} from 'src/app/openApis/AlarmManagement/api-configuration'
import { ApiConfiguration as AssuranceServicesManagementAPIconfig} from 'src/app/openApis/AssuranceServicesManagementAPI/api-configuration'
import { ApiConfiguration as lcmRuleSpecificationAPIConfig } from 'src/app/openApis/LcmRuleSpecificationAPI/api-configuration'


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
    private tmfPartyManagementConfig: PartyManagementAPIconfig,
    private tmfServiceActivationAndConfigurationConfig: ServiceActivationAndConfigurationAPIconfig,
    private tmfAlarmManagementConfig: AlarmManagementAPIconfig,
    private assuranceServicesManagementAPIConfig: AssuranceServicesManagementAPIconfig,
    private lcmRuleSpecificationAPIConfig: lcmRuleSpecificationAPIConfig
  ) { 
    this.setAPIurls()
  }

  config = this.bootstrapService.getConfig()

  setAPIurls() {
    this.portalAPIConfig.rootUrl = this.config.PORTAL_REPO_APIURL
    this.tmfServiceCatalogConfig.rootUrl = this.config.APITMFURL
    this.tmfServiceInventoryConfig.rootUrl = this.config.APITMFURL    
    this.tmfServiceOrderingConfig.rootUrl = this.config.APITMFURL
    this.tmfPartyManagementConfig.rootUrl = this.config.APITMFURL
    this.tmfServiceActivationAndConfigurationConfig.rootUrl = this.config.APITMFURL
    this.tmfAlarmManagementConfig.rootUrl = this.config.APITMFURL
    this.assuranceServicesManagementAPIConfig.rootUrl = this.config.ASSURANCE_SERVICE_MGMT_APIURL
    this.lcmRuleSpecificationAPIConfig.rootUrl = this.config.APITMFURL
  }
}
