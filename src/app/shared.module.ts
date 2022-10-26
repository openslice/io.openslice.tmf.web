import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

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
