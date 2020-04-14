import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_INITIALIZER } from '@angular/core'
import { BootstrapService } from './bootstrap/bootstrap.service';

import { 
  NgbCollapseModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap'

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';

import { ToastrModule } from 'ngx-toastr';

import { OAuthModule } from 'angular-oauth2-oidc'


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
  MatProgressSpinnerModule
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
import { ExperimentsMarketplaceComponent } from './marketplaces/experiments-marketplace/experiments-marketplace.component';
import { VxfsMarketplaceComponent } from './marketplaces/vxfs-marketplace/vxfs-marketplace.component';
import { VerticalNavbarComponent } from './marketplaces/shared/vertical-navbar/vertical-navbar.component';
import { ListServiceCatalogsComponent } from './admin/CatalogManagement/list-service-catalogs/list-service-catalogs.component';
import { ListServiceCategoriesComponent } from './admin/CatalogManagement/list-service-categories/list-service-categories.component';
import { ListServiceSpecsComponent } from './admin/CatalogManagement/list-service-specs/list-service-specs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditServiceCatalogsComponent } from './admin/CatalogManagement/edit-service-catalogs/edit-service-catalogs.component';
import { EditServiceCategoriesComponent } from './admin/CatalogManagement/edit-service-categories/edit-service-categories.component';
import { EditServiceSpecsComponent } from './admin/CatalogManagement/edit-service-specs/edit-service-specs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditServiceSpecCharacteristicsComponent } from './admin/CatalogManagement/edit-service-specs/edit-service-spec-characteristics/edit-service-spec-characteristics.component';
import { DeleteServiceSpecCharacteristicsComponent } from './admin/CatalogManagement/edit-service-specs/delete-service-spec-characteristics/delete-service-spec-characteristics.component';
import { DeleteServiceCatalogComponent } from './admin/CatalogManagement/delete-service-catalog/delete-service-catalog.component';
import { DeleteServiceCategoryComponent } from './admin/CatalogManagement/delete-service-category/delete-service-category.component';
import { DeleteServiceSpecComponent } from './admin/CatalogManagement/delete-service-spec/delete-service-spec.component';
import { CreateServiceCategoryChildrenComponent } from './admin/CatalogManagement/edit-service-categories/create-service-category-children/create-service-category-children.component';
import { TreeSidenavComponent } from './marketplaces/shared/tree-sidenav/tree-sidenav.component';
import { AssignServiceCandidatesComponent } from './admin/CatalogManagement/edit-service-categories/assign-service-candidates/assign-service-candidates.component';
import { CloneGstTemplateComponent } from './admin/CatalogManagement/edit-service-specs/clone-gst-template/clone-gst-template.component';
import { CloneVinniTemplateComponent } from './admin/CatalogManagement/edit-service-specs/clone-vinni-template/clone-vinni-template.component';
import { PreviewServiceComponent } from './marketplaces/services-marketplace/preview-service/preview-service.component';
import { AssignServiceRelationshipsComponent } from './admin/CatalogManagement/edit-service-specs/assign-service-relationships/assign-service-relationships.component';
import { ConfigureServiceComponent } from './marketplaces/services-marketplace/preview-service/configure-service/configure-service.component';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';
import { RequesterComponent } from './requester/requester.component';
import { ServiceOrderCheckoutComponent } from './requester/service-order-checkout/service-order-checkout.component';
import { MyServiceOrderOverviewComponent } from './requester/my-service-order-overview/my-service-order-overview.component';
import { ListServiceOrdersComponent } from './admin/OrderManagement/list-service-orders/list-service-orders.component';
import { PreviewServiceOrderComponent } from './admin/OrderManagement/preview-service-order/preview-service-order.component';
import { PreviewSupportingServicesComponent } from './admin/OrderManagement/preview-supporting-services/preview-supporting-services.component';
import { jsonParsePipe } from './shared/pipes/jsonParsePipe';
import { ListNsdComponent } from './admin/ExperimentsImport/list-nsd/list-nsd.component';
import { ImportNsdDialogComponent } from './admin/ExperimentsImport/list-nsd/import-nsd-dialog/import-nsd-dialog.component';
import { AuthService } from './shared/services/auth.service';



export function initializeApp(bootstrap: BootstrapService) {
  return () => bootstrap.loadConfig();
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
    AssignServiceCandidatesComponent,
    CloneGstTemplateComponent,
    CloneVinniTemplateComponent,
    PreviewServiceComponent,
    AssignServiceRelationshipsComponent,
    ConfigureServiceComponent,
    RequesterComponent,
    ServiceOrderCheckoutComponent,
    MyServiceOrderOverviewComponent,
    ListServiceOrdersComponent,
    PreviewServiceOrderComponent,
    PreviewSupportingServicesComponent,
    jsonParsePipe,
    ListNsdComponent,
    ImportNsdDialogComponent
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
    DragDropModule,
    MatNativeDateModule,
    MatDatepickerModule,  
    NgProgressModule,
    NgProgressHttpModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    ToastrModule.forRoot({progressBar: true, preventDuplicates: true}),
    OAuthModule.forRoot()
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
    PreviewServiceComponent,
    PreviewSupportingServicesComponent,
    ImportNsdDialogComponent
  ],
  providers: [
    AuthService,
    BootstrapService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [BootstrapService], multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: OWL_DATE_TIME_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
