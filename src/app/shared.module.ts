import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgProgressModule } from 'ngx-progressbar';
import { NgProgressHttpModule } from 'ngx-progressbar/http';

import { OwlDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { OwlMomentDateTimeModule } from '@danielmoncada/angular-datetime-picker-moment-adapter';


import { ToastrModule } from 'ngx-toastr';

import { OAuthModule } from 'angular-oauth2-oidc';

import { FileUploadModule } from '@iplab/ngx-file-upload'

import { MarkdownModule } from 'ngx-markdown'

import { BootstrapComponent } from './bootstrap/bootstrap.component';

import { ListOrganizationsComponent } from './shared/components/partyManagement/list-organizations/list-organizations.component';
import { EditOrganizationsComponent } from './shared/components/partyManagement/edit-organizations/edit-organizations.component';
import { EditPartyCharacteristicsComponent } from './shared/components/partyManagement/edit-organizations/edit-party-characteristics/edit-party-characteristics.component';
import { DeletePartyCharacteristicComponent } from './shared/components/partyManagement/edit-organizations/delete-party-characteristic/delete-party-characteristic.component';
import { DeleteOrganizationComponent } from './shared/components/partyManagement/delete-organization/delete-organization.component';
import { ListIndividualsComponent } from './shared/components/partyManagement/list-individuals/list-individuals.component';
import { EditIndividualsComponent } from './shared/components/partyManagement/edit-individuals/edit-individuals.component';
import { DeleteIndividualComponent } from './shared/components/partyManagement/delete-individual/delete-individual.component';
import { jsonParsePipe } from './shared/pipes/jsonParsePipe';


import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    jsonParsePipe,
    BootstrapComponent,
    ListOrganizationsComponent,
    EditOrganizationsComponent,
    EditPartyCharacteristicsComponent,
    DeletePartyCharacteristicComponent,
    DeleteOrganizationComponent,
    ListIndividualsComponent,
    EditIndividualsComponent,
    DeleteIndividualComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
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
    // NgProgressModule,
    // NgProgressHttpModule,
    OwlDateTimeModule,
    OwlMomentDateTimeModule,
    // ToastrModule.forRoot({progressBar: true, preventDuplicates: true}),
    // OAuthModule.forRoot(),
    FileUploadModule,
    MarkdownModule.forRoot(),

  ],
  entryComponents : [
    EditPartyCharacteristicsComponent,
    DeletePartyCharacteristicComponent,
    DeleteOrganizationComponent,
    DeleteIndividualComponent
  ],

  exports : [
    jsonParsePipe,
    BootstrapComponent,
    ListOrganizationsComponent,
    EditOrganizationsComponent,
    EditPartyCharacteristicsComponent,
    DeletePartyCharacteristicComponent,
    DeleteOrganizationComponent,
    ListIndividualsComponent,
    EditIndividualsComponent,
    DeleteIndividualComponent,
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
    OwlMomentDateTimeModule,
    ToastrModule,
    OAuthModule,
    FileUploadModule,
    MarkdownModule
  ],
})
export class SharedModule { }
