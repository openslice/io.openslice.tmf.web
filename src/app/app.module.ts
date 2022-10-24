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
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';
import { AuthService } from './shared/services/auth.service';

import { CacheSearchParametersService } from './p_services/admin/shared/cache-search-parameters.service';
import { PortalsComponent } from './landing/portals/portals.component';
import { AppService } from './shared/services/app.service';
import { CloneGstTemplateComponent } from './p_services/admin/catalogManagement/edit-service-specs/clone-gst-template/clone-gst-template.component';
import { CloneVinniTemplateComponent } from './p_services/admin/catalogManagement/edit-service-specs/clone-vinni-template/clone-vinni-template.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import { ListOrganizationsComponent } from './shared/components/partyManagement/list-organizations/list-organizations.component';
import { EditOrganizationsComponent } from './shared/components/partyManagement/edit-organizations/edit-organizations.component';
import { EditPartyCharacteristicsComponent } from './shared/components/partyManagement/edit-organizations/edit-party-characteristics/edit-party-characteristics.component';
import { DeletePartyCharacteristicComponent } from './shared/components/partyManagement/edit-organizations/delete-party-characteristic/delete-party-characteristic.component';
import { DeleteOrganizationComponent } from './shared/components/partyManagement/delete-organization/delete-organization.component';
import { ListIndividualsComponent } from './shared/components/partyManagement/list-individuals/list-individuals.component';
import { EditIndividualsComponent } from './shared/components/partyManagement/edit-individuals/edit-individuals.component';
import { DeleteIndividualComponent } from './shared/components/partyManagement/delete-individual/delete-individual.component';
import { jsonParsePipe } from './shared/pipes/jsonParsePipe';
import { SharedModule } from './shared.module';
import { RedirectComponent } from './shared/components/redirect/redirect.component';


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
    PortalsComponent,
    CloneGstTemplateComponent,
    CloneVinniTemplateComponent,
    PageNotFoundComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    NgbDropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgProgressModule,
    NgProgressHttpModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    OAuthModule.forRoot(),
    ToastrModule.forRoot({progressBar: true, preventDuplicates: true})
  ],
  providers: [
    AppService,
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
  entryComponents: [
    CloneGstTemplateComponent,
    CloneVinniTemplateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
