import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_INITIALIZER } from '@angular/core'
import { BootstrapService } from './bootstrap/bootstrap.service';
import { AppService } from './shared/services/app.service';

import { 
  NgbCollapseModule,
  NgbDropdownModule
} from '@ng-bootstrap/ng-bootstrap'

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

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
  MatChipsModule
} from '@angular/material'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './shared/contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ServicesMarketplaceComponent } from './marketplaces/services-marketplace/services-marketplace.component';
import { ExperimentsMarketplaceComponent } from './marketplaces/experiments-marketplace/experiments-marketplace.component';
import { VxfsMarketplaceComponent } from './marketplaces/vxfs-marketplace/vxfs-marketplace.component';
import { VerticalNavbarComponent } from './marketplaces/shared/vertical-navbar/vertical-navbar.component';
import { ListServiceCatalogsComponent } from './admin/services/list-service-catalogs/list-service-catalogs.component';
import { ListServiceCategoriesComponent } from './admin/services/list-service-categories/list-service-categories.component';
import { ListServiceSpecsComponent } from './admin/services/list-service-specs/list-service-specs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditServiceCatalogsComponent } from './admin/services/edit-service-catalogs/edit-service-catalogs.component';
import { EditServiceCategoriesComponent } from './admin/services/edit-service-categories/edit-service-categories.component';
import { EditServiceSpecsComponent } from './admin/services/edit-service-specs/edit-service-specs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditServiceSpecCharacteristicsComponent } from './admin/services/edit-service-specs/edit-service-spec-characteristics/edit-service-spec-characteristics.component';
import { DeleteServiceSpecCharacteristicsComponent } from './admin/services/edit-service-specs/delete-service-spec-characteristics/delete-service-spec-characteristics.component';
import { DeleteServiceCatalogComponent } from './admin/services/delete-service-catalog/delete-service-catalog.component';
import { DeleteServiceCategoryComponent } from './admin/services/delete-service-category/delete-service-category.component';
import { DeleteServiceSpecComponent } from './admin/services/delete-service-spec/delete-service-spec.component';



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
    DeleteServiceSpecComponent
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
    MatNativeDateModule,
    MatDatepickerModule,  
    NgProgressModule,
    NgProgressHttpModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule
  ],
  entryComponents : [
    EditServiceCatalogsComponent,
    EditServiceCategoriesComponent,
    EditServiceSpecCharacteristicsComponent,
    DeleteServiceCatalogComponent,
    DeleteServiceCategoryComponent,
    DeleteServiceSpecComponent,
    DeleteServiceSpecCharacteristicsComponent
  ],
  providers: [
    BootstrapService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [BootstrapService], multi: true },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
