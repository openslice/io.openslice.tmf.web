import { NgModule} from '@angular/core';

import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';


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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { jsonParsePipe } from './shared/pipes/jsonParsePipe';


@NgModule({
  declarations: [
    jsonParsePipe
  ],
  imports: [
    // NgbCollapseModule,
    // NgbDropdownModule,
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
    // NgProgressModule,
    // NgProgressHttpModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    // ToastrModule.forRoot({progressBar: true, preventDuplicates: true}),
    // OAuthModule.forRoot(),
    FileUploadModule,
    MarkdownModule.forChild()
  ],
  exports: [
    jsonParsePipe,
    // NgbCollapseModule,
    // NgbDropdownModule,
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
    // NgProgressModule,
    // NgProgressHttpModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    // ToastrModule,
    // OAuthModule,
    FileUploadModule,
    MarkdownModule
  ]
})
export class AppFeaturesModule { }
