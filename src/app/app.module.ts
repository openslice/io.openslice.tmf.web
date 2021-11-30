import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, NO_ERRORS_SCHEMA } from '@angular/core';

import { APP_INITIALIZER } from '@angular/core'
import { BootstrapService } from './bootstrap/bootstrap.service';
import { ThemingService } from './theming/theming.service';


import enGB from '@angular/common/locales/en-GB';
import { registerLocaleData } from '@angular/common';


import { 
  NgbCollapseModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap'

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';

import { ToastrModule } from 'ngx-toastr';

import { OAuthModule } from 'angular-oauth2-oidc';

import { FileUploadModule } from '@iplab/ngx-file-upload'

import { MarkdownModule } from 'ngx-markdown'


import {
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatDialogModule,
  MatTabsModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatExpansionModule,
  MatToolbarModule,
  MatTreeModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatListModule
} from '@angular/material'

import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './shared/contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ServicesMarketplaceComponent } from './marketplaces/services-marketplace/services-marketplace.component';
import { ResourcesMarketplaceComponent } from './marketplaces/resources-marketplace/resources-marketplace.component';
import { ExperimentsMarketplaceComponent } from './marketplaces/experiments-marketplace/experiments-marketplace.component';
import { VxfsMarketplaceComponent } from './marketplaces/vxfs-marketplace/vxfs-marketplace.component';
import { VerticalNavbarComponent } from './marketplaces/shared/vertical-navbar/vertical-navbar.component';
import { ListServiceCatalogsComponent } from './admin/CatalogManagement/list-service-catalogs/list-service-catalogs.component';
import { ListServiceCategoriesComponent } from './admin/CatalogManagement/list-service-categories/list-service-categories.component';
import { ListServiceSpecsComponent } from './admin/CatalogManagement/list-service-specs/list-service-specs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditServiceCatalogsComponent } from './admin/CatalogManagement/edit-service-catalogs/edit-service-catalogs.component';
import { EditServiceCategoriesComponent } from './admin/CatalogManagement/edit-service-categories/edit-service-categories.component';
import { EditServiceSpecsComponent, DiscardChangesComponent } from './admin/CatalogManagement/edit-service-specs/edit-service-specs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditServiceSpecCharacteristicsComponent } from './admin/CatalogManagement/edit-service-specs/edit-service-spec-characteristics/edit-service-spec-characteristics.component';
import { DeleteServiceSpecCharacteristicsComponent } from './admin/CatalogManagement/edit-service-specs/delete-service-spec-characteristics/delete-service-spec-characteristics.component';
import { DeleteServiceCatalogComponent } from './admin/CatalogManagement/delete-service-catalog/delete-service-catalog.component';
import { DeleteServiceCategoryComponent } from './admin/CatalogManagement/delete-service-category/delete-service-category.component';
import { DeleteServiceSpecComponent } from './admin/CatalogManagement/delete-service-spec/delete-service-spec.component';
import { CreateServiceCategoryChildrenComponent } from './admin/CatalogManagement/edit-service-categories/create-service-category-children/create-service-category-children.component';
import { TreeSidenavComponent } from './marketplaces/shared/tree-sidenav/tree-sidenav.component';
import { TreeSidenavResourcesComponent } from './marketplaces/shared/tree-sidenav-resources/tree-sidenav-resources.component';
import { AssignServiceCandidatesComponent } from './admin/CatalogManagement/edit-service-categories/assign-service-candidates/assign-service-candidates.component';
import { CloneGstTemplateComponent } from './admin/CatalogManagement/edit-service-specs/clone-gst-template/clone-gst-template.component';
import { CloneVinniTemplateComponent } from './admin/CatalogManagement/edit-service-specs/clone-vinni-template/clone-vinni-template.component';
import { PreviewMarketplaceItemComponent } from './marketplaces/services-marketplace/preview-marketplace-item/preview-marketplace-item.component';
import { AssignServiceRelationshipsComponent } from './admin/CatalogManagement/edit-service-specs/assign-service-relationships/assign-service-relationships.component';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';
import { ServiceOrderCheckoutComponent } from './requester/service-order-checkout/service-order-checkout.component';
import { ListServiceOrdersComponent } from './admin/OrderManagement/list-service-orders/list-service-orders.component';
import { PreviewServiceOrderComponent } from './admin/OrderManagement/preview-service-order/preview-service-order.component';
import { PreviewSupportingServicesComponent } from './admin/InventoryManagement/preview-supporting-services/preview-supporting-services.component';
import { jsonParsePipe } from './shared/pipes/jsonParsePipe';
import { ListNsdComponent } from './admin/ExperimentsImport/list-nsd/list-nsd.component';
import { ImportNsdDialogComponent } from './admin/ExperimentsImport/list-nsd/import-nsd-dialog/import-nsd-dialog.component';
import { AuthService } from './shared/services/auth.service';
import { ListOrganizationsComponent } from './admin/PartyManagement/list-organizations/list-organizations.component';
import { EditOrganizationsComponent } from './admin/PartyManagement/edit-organizations/edit-organizations.component';
import { EditPartyCharacteristicsComponent } from './admin/PartyManagement/edit-organizations/edit-party-characteristics/edit-party-characteristics.component';
import { DeletePartyCharacteristicComponent } from './admin/PartyManagement/edit-organizations/delete-party-characteristic/delete-party-characteristic.component';
import { DeleteOrganizationComponent } from './admin/PartyManagement/delete-organization/delete-organization.component';
import { DeleteServiceOrderComponent } from './admin/OrderManagement/delete-service-order/delete-service-order.component';
import { ListIndividualsComponent } from './admin/PartyManagement/list-individuals/list-individuals.component';
import { EditIndividualsComponent } from './admin/PartyManagement/edit-individuals/edit-individuals.component';
import { DeleteIndividualComponent } from './admin/PartyManagement/delete-individual/delete-individual.component';
import { DeleteAttachmentComponent } from './admin/CatalogManagement/edit-service-specs/delete-attachment/delete-attachment.component';
import { EditOrdersServiceSpecCharacteristicsComponent } from './admin/OrderManagement/preview-service-order/edit-service-order-items/edit-orders-service-spec-characteristics/edit-orders-service-spec-characteristics.component';
import { EditServiceOrderItemsComponent } from './admin/OrderManagement/preview-service-order/edit-service-order-items/edit-service-order-items.component';
import { TerminateServiceOrderItemsComponent } from './admin/OrderManagement/preview-service-order/terminate-service-order-items/terminate-service-order-items.component';

import { PreviewServiceComponent } from './admin/ServiceActivationAndConfiguration/preview-service/preview-service.component';
import { EditServiceCharacteristicsComponent } from './admin/ServiceActivationAndConfiguration/edit-service-characteristics/edit-service-characteristics.component';
import { ListServiceInventoryComponent } from './admin/InventoryManagement/list-service-inventory/list-service-inventory.component';
import { ListAlarmsComponent } from './admin/AlarmManagement/list-alarms/list-alarms.component';
import { EditAlarmComponent } from './admin/AlarmManagement/edit-alarm/edit-alarm.component';
import { CacheSearchParametersService } from './admin/shared/cache-search-parameters.service';
import { DeleteAlarmComponent } from './admin/AlarmManagement/delete-alarm/delete-alarm.component';
import { ListActionsSpecsComponent } from './admin/AssuranceServicesManagement/list-actions-specs/list-actions-specs.component';
import { DeleteActionSpecComponent } from './admin/AssuranceServicesManagement/delete-action-spec/delete-action-spec.component';
import { EditActionSpecsComponent } from './admin/AssuranceServicesManagement/edit-action-specs/edit-action-specs.component';
import { ListActionRulesComponent } from './admin/AssuranceServicesManagement/list-action-rules/list-action-rules.component';
import { EditActionRulesComponent } from './admin/AssuranceServicesManagement/edit-action-rules/edit-action-rules.component';
import { DeleteActionRulesComponent } from './admin/AssuranceServicesManagement/delete-action-rules/delete-action-rules.component';
import { ServiceRuleDesignComponent } from './admin/LCM/service-rule-design/service-rule-design.component';
import { DeleteLcmruleComponent } from './admin/CatalogManagement/edit-service-specs/delete-lcmrule/delete-lcmrule.component';

registerLocaleData(enGB);
export function initializeApp(bootstrap: BootstrapService) {
  return () => bootstrap.loadConfig()
}

export function initializeAppTheme(bootstrap: BootstrapService) {
  return () => bootstrap.loadConfig()
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    LandingComponent,
    AdminComponent,
    ServicesMarketplaceComponent,
    ResourcesMarketplaceComponent,
    ExperimentsMarketplaceComponent,
    VxfsMarketplaceComponent,
    VerticalNavbarComponent,
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
    TreeSidenavResourcesComponent,
    AssignServiceCandidatesComponent,
    CloneGstTemplateComponent,
    CloneVinniTemplateComponent,
    PreviewMarketplaceItemComponent,
    AssignServiceRelationshipsComponent,
    ServiceOrderCheckoutComponent,
    ListServiceOrdersComponent,
    PreviewServiceOrderComponent,
    EditOrdersServiceSpecCharacteristicsComponent,
    PreviewSupportingServicesComponent,
    jsonParsePipe,
    ListNsdComponent,
    ImportNsdDialogComponent,
    ListOrganizationsComponent,
    EditOrganizationsComponent,
    EditPartyCharacteristicsComponent,
    DeletePartyCharacteristicComponent,
    DeleteOrganizationComponent,
    DeleteServiceOrderComponent,
    ListIndividualsComponent,
    EditIndividualsComponent,
    DeleteIndividualComponent,
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
    DeleteLcmruleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbDropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatTreeModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatListModule,
    DragDropModule,
    MatNativeDateModule,
    MatDatepickerModule,  
    NgProgressModule,
    NgProgressHttpModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    ToastrModule.forRoot({progressBar: true, preventDuplicates: true}),
    OAuthModule.forRoot(),
    FileUploadModule,
    MarkdownModule.forRoot()
  ],
  entryComponents : [
    EditServiceCatalogsComponent,
    EditServiceCategoriesComponent,
    CreateServiceCategoryChildrenComponent,
    AssignServiceCandidatesComponent,
    EditServiceSpecCharacteristicsComponent,
    DeleteServiceCatalogComponent,
    DeleteServiceCategoryComponent,
    DeleteServiceSpecComponent,
    DeleteServiceSpecCharacteristicsComponent,
    CloneGstTemplateComponent,
    CloneVinniTemplateComponent,
    AssignServiceRelationshipsComponent,
    PreviewMarketplaceItemComponent,
    EditOrdersServiceSpecCharacteristicsComponent,
    PreviewSupportingServicesComponent,
    ImportNsdDialogComponent,
    EditPartyCharacteristicsComponent,
    DeletePartyCharacteristicComponent,
    DeleteOrganizationComponent,
    DeleteIndividualComponent,
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
    DeleteLcmruleComponent
  ],
  providers: [
    AuthService,
    BootstrapService,
    ThemingService,
    CacheSearchParametersService,
    { provide: LOCALE_ID, useValue: 'en-GB' },
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [BootstrapService], multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeAppTheme, deps: [ThemingService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
