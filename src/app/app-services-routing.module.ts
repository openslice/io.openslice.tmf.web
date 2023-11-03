import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PortalsComponent } from './landing/portals/portals.component';

import { ServicesMarketplaceComponent } from './p_services/marketplace/services-marketplace.component';
import { ListServiceCatalogsComponent } from './p_services/admin/catalogManagement/list-service-catalogs/list-service-catalogs.component';
import { ListServiceCategoriesComponent } from './p_services/admin/catalogManagement/list-service-categories/list-service-categories.component';
import { ListServiceSpecsComponent } from './p_services/admin/catalogManagement/list-service-specs/list-service-specs.component';
import { EditServiceSpecsComponent } from './p_services/admin/catalogManagement/edit-service-specs/edit-service-specs.component';
import { EditServiceCategoriesComponent } from './p_services/admin/catalogManagement/edit-service-categories/edit-service-categories.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ServiceOrderCheckoutComponent } from './p_services/orderCheckout/service-order-checkout/service-order-checkout.component';
import { ListServiceOrdersComponent } from './p_services/admin/orderManagement/list-service-orders/list-service-orders.component';
import { PreviewServiceOrderComponent } from './p_services/admin/orderManagement/preview-service-order/preview-service-order.component';
import { ListNsdComponent } from './p_services/admin/serviceDescriptorsImport/list-nsd.component';
import { ListOrganizationsComponent } from './shared/components/partyManagement/list-organizations/list-organizations.component';
import { EditOrganizationsComponent } from './shared/components/partyManagement/edit-organizations/edit-organizations.component';
import { ListIndividualsComponent } from './shared/components/partyManagement/list-individuals/list-individuals.component';
import { EditIndividualsComponent } from './shared/components/partyManagement/edit-individuals/edit-individuals.component';
import { PreviewServiceComponent } from './p_services/admin/serviceActivationAndConfiguration/preview-service/preview-service.component';
import { ListServiceInventoryComponent } from './p_services/admin/inventoryManagement/list-service-inventory/list-service-inventory.component';
import { ListAlarmsComponent } from './p_services/admin/alarmManagement/list-alarms/list-alarms.component';
import { EditAlarmComponent } from './p_services/admin/alarmManagement/edit-alarm/edit-alarm.component';
import { ListActionsSpecsComponent } from './p_services/admin/assuranceServicesManagement/list-actions-specs/list-actions-specs.component';
import { EditActionSpecsComponent } from './p_services/admin/assuranceServicesManagement/edit-action-specs/edit-action-specs.component';
import { ListActionRulesComponent } from './p_services/admin/assuranceServicesManagement/list-action-rules/list-action-rules.component';
import { EditActionRulesComponent } from './p_services/admin/assuranceServicesManagement/edit-action-rules/edit-action-rules.component';
import { ServiceRuleDesignComponent } from './p_services/admin/lifeCycleManagement/service-rule-design/service-rule-design.component';
import { ListTestsComponent } from './p_services/admin/testSpecificationImport/list-tests.component';
import { ServiceOrdersCalendarComponent } from './p_services/admin/orderManagement/service-order-calendar/service-order-calendar.component';

const routes: Routes = [

  // { path: '', component: PortalsComponent},
  { path: 'services_marketplace', component: ServicesMarketplaceComponent },
  { path: '', component: BootstrapComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always', children: [
      { path: 'service_catalogs', component: ListServiceCatalogsComponent },
      { path: 'service_categories', component: ListServiceCategoriesComponent },
      { path: 'service_categories_update/:id', component: EditServiceCategoriesComponent },
      { path: 'service_categories_update', component: EditServiceCategoriesComponent },
      { path: 'service_specs', component: ListServiceSpecsComponent },
      { path: 'service_spec_update/:id', component: EditServiceSpecsComponent },
      { path: 'service_spec_update', component: EditServiceSpecsComponent },
      { path: 'list_nsds', component: ListNsdComponent },
      { path: 'list_tests', component: ListTestsComponent },

      { path: 'service_orders', component: ListServiceOrdersComponent },
      { path: 'service_order/:id', component: PreviewServiceOrderComponent },

      { path: 'service_order_checkout', component: ServiceOrderCheckoutComponent },
      { path: 'my_service_orders', component: ListServiceOrdersComponent },

      
      { path: 'service_orders_calendar', component: ServiceOrdersCalendarComponent },

      { path: 'organizations', component: ListOrganizationsComponent },
      { path: 'organization_update/:id', component: EditOrganizationsComponent },
      { path: 'organization_update', component: EditOrganizationsComponent },

      { path: 'individuals', component: ListIndividualsComponent },
      { path: 'individual_update/:id', component: EditIndividualsComponent },
      { path: 'individual_update', component: EditIndividualsComponent },

      { path: 'service/:id', component: PreviewServiceComponent },

      { path: 'service_inventory', component: ListServiceInventoryComponent },

      { path: 'alarms', component: ListAlarmsComponent },
      { path: 'alarm/:id', component: EditAlarmComponent },

      { path: 'action_specs', component: ListActionsSpecsComponent },
      { path: 'action_specs/:id', component: EditActionSpecsComponent },
      { path: 'action_specs', component: EditActionSpecsComponent },

      { path: 'action_rules', component: ListActionRulesComponent },
      { path: 'action_rule/:id', component: EditActionRulesComponent },
      { path: 'action_rule', component: EditActionRulesComponent },


      { path: 'service_rule_design/:id', component: ServiceRuleDesignComponent },
      { path: 'service_rule_design', component: ServiceRuleDesignComponent },
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppServicesRoutingModule { }
