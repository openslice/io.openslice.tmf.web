import { Injectable } from '@angular/core';
import { BootstrapService } from 'src/app/bootstrap/bootstrap.service';
import { ApiConfiguration as PortalAPIconfig} from 'src/app/openApis/portalRepositoryAPI/api-configuration'
import { ApiConfiguration as ServiceCatalogAPIconfig} from 'src/app/openApis/serviceCatalogManagement/api-configuration'
import { ApiConfiguration as ServiceInventoryAPIconfig} from 'src/app/openApis/serviceInventoryManagement/api-configuration'
import { ApiConfiguration as ServiceOrderingAPIconfig} from 'src/app/openApis/serviceOrderingManagement/api-configuration'
import { ApiConfiguration as PartyManagementAPIconfig} from 'src/app/openApis/partyManagement/api-configuration'
import { ApiConfiguration as ServiceActivationAndConfigurationAPIconfig } from 'src/app/openApis/serviceActivationAndConfiguration/api-configuration'
import { ApiConfiguration as AlarmManagementAPIconfig} from 'src/app/openApis/alarmManagement/api-configuration'
import { ApiConfiguration as assuranceServicesManagementAPIconfig} from 'src/app/openApis/assuranceServicesManagementAPI/api-configuration'
import { ApiConfiguration as lcmRuleSpecificationAPIconfig } from 'src/app/openApis/lcmRuleSpecificationAPI/api-configuration'
import { ApiConfiguration as serviceTestManagementAPIconfig } from 'src/app/openApis/serviceTestManagement/api-configuration'
import { ApiConfiguration as ResourceCatalogAPIconfig} from 'src/app/openApis/resourceCatalogManagement/api-configuration'
import { ApiConfiguration as ResourceInventoryAPIconfig} from 'src/app/openApis/resourceInventoryManagement/api-configuration'
import { ApiConfiguration as resourcePoolManagementAPIconfig} from 'src/app/openApis/resourcePoolManagement/api-configuration'
import { ApiConfiguration as ProductCatalogAPIconfig} from 'src/app/openApis/productCatalogManagement/api-configuration'

import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private router: Router,
    private bootstrapService: BootstrapService,
    private portalAPIConfig: PortalAPIconfig,
    private tmfServiceCatalogConfig: ServiceCatalogAPIconfig,
    private tmfServiceInventoryConfig: ServiceInventoryAPIconfig,
    private tmfServiceOrderingConfig: ServiceOrderingAPIconfig,
    private tmfPartyManagementConfig: PartyManagementAPIconfig,
    private tmfServiceActivationAndConfigurationConfig: ServiceActivationAndConfigurationAPIconfig,
    private tmfAlarmManagementConfig: AlarmManagementAPIconfig,
    private assuranceServicesManagementAPIConfig: assuranceServicesManagementAPIconfig,
    private lcmRuleSpecificationAPIConfig: lcmRuleSpecificationAPIconfig,
    private serviceTestManagementAPIconfig: serviceTestManagementAPIconfig,
    private tmfResourceCatalogConfig: ResourceCatalogAPIconfig,
    private tmfResourceInventoryConfig: ResourceInventoryAPIconfig,
    private resourcePoolManagementAPIconfig: resourcePoolManagementAPIconfig,
    private tmfProductCatalogConfig: ProductCatalogAPIconfig
  ) { 
    this.setAPIurls()
    this.recognizePortalDomain()
  }

  config = this.bootstrapService.getConfig()
  portalDomain: "services" | "resources" |"testing" | "products" | "" = ""

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
    this.tmfResourceCatalogConfig.rootUrl = this.config.APITMFURL
    this.tmfResourceInventoryConfig.rootUrl = this.config.APITMFURL
    this.serviceTestManagementAPIconfig.rootUrl = this.config.APITMFURL
    this.resourcePoolManagementAPIconfig.rootUrl = this.config.APITMFURL
    this.tmfProductCatalogConfig.rootUrl = this.config.APITMFURL
  }

  //recognition of which portal is used (services/testing/product)
  recognizePortalDomain() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
    ).subscribe( (e: NavigationEnd) => {
      const activatedRoute = e.url.split('/')[1].toLowerCase()
      if (["","services","resources", "testing", "products"].includes(activatedRoute)) {
        this.portalDomain = <"" | "services" | "resources" | "testing" | "products"> activatedRoute
        localStorage.setItem("active_portal", this.portalDomain)
      }
    })
  }
}
