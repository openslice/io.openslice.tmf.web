
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppServicesRoutingModule } from './app-services-routing.module';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PortalsComponent } from './landing/portals/portals.component';

import { ServicesMarketplaceComponent } from './p_services/marketplace/services-marketplace.component';
import { ListServiceCatalogsComponent } from './p_services/admin/catalogManagement/list-service-catalogs/list-service-catalogs.component';
import { ListServiceCategoriesComponent } from './p_services/admin/catalogManagement/list-service-categories/list-service-categories.component';
import { ListServiceSpecsComponent } from './p_services/admin/catalogManagement/list-service-specs/list-service-specs.component';
import { EditServiceCatalogsComponent } from './p_services/admin/catalogManagement/edit-service-catalogs/edit-service-catalogs.component';
import { EditServiceCategoriesComponent } from './p_services/admin/catalogManagement/edit-service-categories/edit-service-categories.component';
import { EditServiceSpecsComponent, DiscardChangesComponent } from './p_services/admin/catalogManagement/edit-service-specs/edit-service-specs.component';
import { EditServiceSpecCharacteristicsComponent } from './p_services/admin/catalogManagement/edit-service-specs/edit-service-spec-characteristics/edit-service-spec-characteristics.component';
import { DeleteServiceSpecCharacteristicsComponent } from './p_services/admin/catalogManagement/edit-service-specs/delete-service-spec-characteristics/delete-service-spec-characteristics.component';
import { DeleteServiceCatalogComponent } from './p_services/admin/catalogManagement/delete-service-catalog/delete-service-catalog.component';
import { DeleteServiceCategoryComponent } from './p_services/admin/catalogManagement/delete-service-category/delete-service-category.component';
import { DeleteServiceSpecComponent } from './p_services/admin/catalogManagement/delete-service-spec/delete-service-spec.component';
import { CreateServiceCategoryChildrenComponent } from './p_services/admin/catalogManagement/edit-service-categories/create-service-category-children/create-service-category-children.component';
import { TreeSidenavComponent } from './p_services/marketplace/tree-sidenav/tree-sidenav.component';
import { AssignServiceCandidatesComponent } from './p_services/admin/catalogManagement/edit-service-categories/assign-service-candidates/assign-service-candidates.component';
import { PreviewMarketplaceItemComponent } from './p_services/marketplace/preview-marketplace-item/preview-marketplace-item.component';
import { AssignServiceRelationshipsComponent } from './p_services/admin/catalogManagement/edit-service-specs/assign-service-relationships/assign-service-relationships.component';
import { ServiceOrderCheckoutComponent } from './p_services/orderCheckout/service-order-checkout/service-order-checkout.component';
import { ListServiceOrdersComponent } from './p_services/admin/orderManagement/list-service-orders/list-service-orders.component';
import { PreviewServiceOrderComponent } from './p_services/admin/orderManagement/preview-service-order/preview-service-order.component';
import { PreviewSupportingServicesComponent } from './p_services/admin/inventoryManagement/preview-supporting-services/preview-supporting-services.component';
import { ListNsdComponent } from './p_services/admin/serviceDescriptorsImport/list-nsd.component';
import { ImportNsdDialogComponent } from './p_services/admin/serviceDescriptorsImport/import-nsd-dialog/import-nsd-dialog.component';
import { DeleteServiceOrderComponent } from './p_services/admin/orderManagement/delete-service-order/delete-service-order.component';
import { DeleteAttachmentComponent } from './p_services/admin/catalogManagement/edit-service-specs/delete-attachment/delete-attachment.component';
import { EditOrdersServiceSpecCharacteristicsComponent } from './p_services/admin/orderManagement/preview-service-order/edit-service-order-items/edit-orders-service-spec-characteristics/edit-orders-service-spec-characteristics.component';
import { EditServiceOrderItemsComponent } from './p_services/admin/orderManagement/preview-service-order/edit-service-order-items/edit-service-order-items.component';
import { TerminateServiceOrderItemsComponent } from './p_services/admin/orderManagement/preview-service-order/terminate-service-order-items/terminate-service-order-items.component';

import { PreviewServiceComponent } from './p_services/admin/serviceActivationAndConfiguration/preview-service/preview-service.component';
import { EditServiceCharacteristicsComponent } from './p_services/admin/serviceActivationAndConfiguration/edit-service-characteristics/edit-service-characteristics.component';
import { ListServiceInventoryComponent } from './p_services/admin/inventoryManagement/list-service-inventory/list-service-inventory.component';
import { ListAlarmsComponent } from './p_services/admin/alarmManagement/list-alarms/list-alarms.component';
import { EditAlarmComponent } from './p_services/admin/alarmManagement/edit-alarm/edit-alarm.component';
import { DeleteAlarmComponent } from './p_services/admin/alarmManagement/delete-alarm/delete-alarm.component';
import { ListActionsSpecsComponent } from './p_services/admin/assuranceServicesManagement/list-actions-specs/list-actions-specs.component';
import { DeleteActionSpecComponent } from './p_services/admin/assuranceServicesManagement/delete-action-spec/delete-action-spec.component';
import { EditActionSpecsComponent } from './p_services/admin/assuranceServicesManagement/edit-action-specs/edit-action-specs.component';
import { ListActionRulesComponent } from './p_services/admin/assuranceServicesManagement/list-action-rules/list-action-rules.component';
import { EditActionRulesComponent } from './p_services/admin/assuranceServicesManagement/edit-action-rules/edit-action-rules.component';
import { DeleteActionRulesComponent } from './p_services/admin/assuranceServicesManagement/delete-action-rules/delete-action-rules.component';
import { ServiceRuleDesignComponent } from './p_services/admin/lifeCycleManagement/service-rule-design/service-rule-design.component';
import { DeleteLcmruleComponent } from './p_services/admin/catalogManagement/edit-service-specs/delete-lcmrule/delete-lcmrule.component';

import { ListOrganizationsComponent } from './shared/components/partyManagement/list-organizations/list-organizations.component';
import { EditOrganizationsComponent } from './shared/components/partyManagement/edit-organizations/edit-organizations.component';
import { EditPartyCharacteristicsComponent } from './shared/components/partyManagement/edit-organizations/edit-party-characteristics/edit-party-characteristics.component';
import { DeletePartyCharacteristicComponent } from './shared/components/partyManagement/edit-organizations/delete-party-characteristic/delete-party-characteristic.component';
import { DeleteOrganizationComponent } from './shared/components/partyManagement/delete-organization/delete-organization.component';
import { ListIndividualsComponent } from './shared/components/partyManagement/list-individuals/list-individuals.component';
import { EditIndividualsComponent } from './shared/components/partyManagement/edit-individuals/edit-individuals.component';
import { DeleteIndividualComponent } from './shared/components/partyManagement/delete-individual/delete-individual.component';
import { AppModule } from './app.module';
import { SharedModule } from './shared.module';
import { ListTestsComponent } from './p_services/admin/testSpecificationImport/list-tests.component';
import { ImportTestDialogComponent } from './p_services/admin/testSpecificationImport/import-test-dialog/import-test-dialog.component';
import { ImportLcmruleComponent } from './p_services/admin/catalogManagement/edit-service-specs/import-lcmrule/import-lcmrule.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin  from '@fullcalendar/resource-timeline';

import { ServiceOrdersCalendarComponent } from './p_services/admin/orderManagement/service-order-calendar/service-order-calendar.component';
import { AssignResourceRelationshipsComponent } from './p_services/admin/catalogManagement/edit-service-specs/assign-resource-relationships/assign-resource-relationships.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin,
    resourceTimelinePlugin
    
]);

@NgModule({
  declarations: [
    // BootstrapComponent,
    // PortalsComponent,
    ServicesMarketplaceComponent,
    ListServiceCatalogsComponent,
    ListServiceCategoriesComponent,
    ListServiceSpecsComponent,
    EditServiceCatalogsComponent,
    EditServiceCategoriesComponent,
    EditServiceSpecsComponent,
    EditServiceSpecCharacteristicsComponent,
    DeleteServiceSpecCharacteristicsComponent,
    DeleteServiceCatalogComponent,
    DeleteServiceCategoryComponent,
    DeleteServiceSpecComponent,
    CreateServiceCategoryChildrenComponent,
    TreeSidenavComponent,
    AssignServiceCandidatesComponent,
    PreviewMarketplaceItemComponent,
    AssignServiceRelationshipsComponent,
    ServiceOrderCheckoutComponent,
    ListServiceOrdersComponent,
    PreviewServiceOrderComponent,
    EditOrdersServiceSpecCharacteristicsComponent,
    PreviewSupportingServicesComponent,
    ListNsdComponent,
    ImportNsdDialogComponent,
    DeleteServiceOrderComponent,
    DeleteAttachmentComponent,
    DiscardChangesComponent,
    EditServiceOrderItemsComponent,
    TerminateServiceOrderItemsComponent,
    PreviewServiceComponent,
    EditServiceCharacteristicsComponent,
    ListServiceInventoryComponent,
    ListAlarmsComponent,
    EditAlarmComponent,
    DeleteAlarmComponent,
    ListActionsSpecsComponent,
    DeleteActionSpecComponent,
    EditActionSpecsComponent,
    ListActionRulesComponent,
    EditActionRulesComponent,
    DeleteActionRulesComponent,
    ServiceRuleDesignComponent,
    DeleteLcmruleComponent,
    ListTestsComponent,
    ImportTestDialogComponent,
    ImportLcmruleComponent,
    ServiceOrdersCalendarComponent,
    AssignResourceRelationshipsComponent
    // ListOrganizationsComponent,
    // EditOrganizationsComponent,
    // EditPartyCharacteristicsComponent,
    // DeletePartyCharacteristicComponent,
    // DeleteOrganizationComponent,
    // ListIndividualsComponent,
    // EditIndividualsComponent,
    // DeleteIndividualComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppServicesRoutingModule,
    FullCalendarModule
  ],
  entryComponents: [
    EditServiceCatalogsComponent,
    EditServiceCategoriesComponent,
    CreateServiceCategoryChildrenComponent,
    AssignServiceCandidatesComponent,
    EditServiceSpecCharacteristicsComponent,
    DeleteServiceCatalogComponent,
    DeleteServiceCategoryComponent,
    DeleteServiceSpecComponent,
    DeleteServiceSpecCharacteristicsComponent,
    AssignServiceRelationshipsComponent,
    PreviewMarketplaceItemComponent,
    EditOrdersServiceSpecCharacteristicsComponent,
    PreviewSupportingServicesComponent,
    ImportNsdDialogComponent,
    DeleteServiceOrderComponent,
    DeleteAttachmentComponent,
    DiscardChangesComponent,
    EditServiceOrderItemsComponent,
    TerminateServiceOrderItemsComponent,
    EditServiceCharacteristicsComponent,
    DeleteAlarmComponent,
    DeleteActionSpecComponent,
    DeleteActionRulesComponent,
    EditActionSpecsComponent,
    DeleteLcmruleComponent,
    ImportTestDialogComponent,
    ImportLcmruleComponent
    // EditPartyCharacteristicsComponent,
    // DeletePartyCharacteristicComponent,
    // DeleteOrganizationComponent,
    // DeleteIndividualComponent
  ],
  exports: [

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppServicesModule { }
