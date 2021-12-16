import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ServicesMarketplaceComponent } from './marketplaces/services-marketplace/services-marketplace.component';
import { ExperimentsMarketplaceComponent } from './marketplaces/experiments-marketplace/experiments-marketplace.component';
import { VxfsMarketplaceComponent } from './marketplaces/vxfs-marketplace/vxfs-marketplace.component';
import { ListServiceCatalogsComponent } from './admin/CatalogManagement/list-service-catalogs/list-service-catalogs.component';
import { ListServiceCategoriesComponent } from './admin/CatalogManagement/list-service-categories/list-service-categories.component';
import { ListServiceSpecsComponent } from './admin/CatalogManagement/list-service-specs/list-service-specs.component';
import { EditServiceSpecsComponent } from './admin/CatalogManagement/edit-service-specs/edit-service-specs.component';
import { EditServiceCategoriesComponent } from './admin/CatalogManagement/edit-service-categories/edit-service-categories.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ServiceOrderCheckoutComponent } from './requester/service-order-checkout/service-order-checkout.component';
import { ListServiceOrdersComponent } from './admin/OrderManagement/list-service-orders/list-service-orders.component';
import { PreviewServiceOrderComponent } from './admin/OrderManagement/preview-service-order/preview-service-order.component';
import { ListNsdComponent } from './admin/ExperimentsImport/list-nsd/list-nsd.component';
import { ListOrganizationsComponent } from './admin/PartyManagement/list-organizations/list-organizations.component';
import { EditOrganizationsComponent } from './admin/PartyManagement/edit-organizations/edit-organizations.component';
import { ListIndividualsComponent } from './admin/PartyManagement/list-individuals/list-individuals.component';
import { EditIndividualsComponent } from './admin/PartyManagement/edit-individuals/edit-individuals.component';
import { PreviewServiceComponent } from './admin/ServiceActivationAndConfiguration/preview-service/preview-service.component';
import { ListServiceInventoryComponent } from './admin/InventoryManagement/list-service-inventory/list-service-inventory.component';
import { ListAlarmsComponent } from './admin/AlarmManagement/list-alarms/list-alarms.component';
import { EditAlarmComponent } from './admin/AlarmManagement/edit-alarm/edit-alarm.component';
import { ListActionsSpecsComponent } from './admin/AssuranceServicesManagement/list-actions-specs/list-actions-specs.component';
import { EditActionSpecsComponent } from './admin/AssuranceServicesManagement/edit-action-specs/edit-action-specs.component';
import { ListActionRulesComponent } from './admin/AssuranceServicesManagement/list-action-rules/list-action-rules.component';
import { EditActionRulesComponent } from './admin/AssuranceServicesManagement/edit-action-rules/edit-action-rules.component';
import { ServiceRuleDesignComponent } from './admin/LCM/service-rule-design/service-rule-design.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PortalsComponent } from './landing/portals/portals.component';


const routes: Routes = [
  
  { path: '', component: LandingComponent},
  
  { path: 'services', component: BootstrapComponent, children: [
    { path: '', component: PortalsComponent},
    { path: 'services_marketplace', component: ServicesMarketplaceComponent },
    { path: 'experiments_marketplace', component: ExperimentsMarketplaceComponent },
    { path: 'vxf_marketplace', component: VxfsMarketplaceComponent },
  
    { path: 'service_catalogs', component: ListServiceCatalogsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'service_categories', component: ListServiceCategoriesComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
    { path: 'service_categories_update/:id', component: EditServiceCategoriesComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'service_categories_update', component: EditServiceCategoriesComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'service_specs', component: ListServiceSpecsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'service_spec_update/:id', component: EditServiceSpecsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'service_spec_update', component: EditServiceSpecsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'list_nsds', component: ListNsdComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
  
    { path: 'service_orders', component: ListServiceOrdersComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'service_order/:id', component: PreviewServiceOrderComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
  
    { path: 'service_order_checkout', component: ServiceOrderCheckoutComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'my_service_orders', component: ListServiceOrdersComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    
    { path: 'organizations', component: ListOrganizationsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'organization_update/:id', component: EditOrganizationsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'organization_update', component: EditOrganizationsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
  
    { path: 'individuals', component: ListIndividualsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'individual_update/:id', component: EditIndividualsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'individual_update', component: EditIndividualsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
  
    { path: 'service/:id', component: PreviewServiceComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
  
    { path: 'service_inventory', component: ListServiceInventoryComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
  
    { path: 'alarms', component: ListAlarmsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
    { path: 'alarm/:id', component: EditAlarmComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
  
    { path: 'action_specs', component: ListActionsSpecsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
    { path: 'action_specs/:id', component: EditActionSpecsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
    { path: 'action_specs', component: EditActionSpecsComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
  
    { path: 'action_rules', component: ListActionRulesComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
    { path: 'action_rule/:id', component: EditActionRulesComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
    { path: 'action_rule', component: EditActionRulesComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always'},
   
  
    { path: 'service_rule_design/:id', component: ServiceRuleDesignComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' },
    { path: 'service_rule_design', component: ServiceRuleDesignComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always' }
  ] },

  { path: 'testing', component: BootstrapComponent, children: [
    { path: '', component: PortalsComponent}
  ] },
  
  { path: '**', component: LandingComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
