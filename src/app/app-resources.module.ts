import { AssignPoolResourceRelationshipsComponent } from './p_resources/admin/resourcePoolManagement/assign-resources/assign-pool-resources.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListResourceCatalogsComponent } from './p_resources/admin/catalogManagement/list-resource-catalogs/list-resource-catalogs.component';

import { AppResourcesRoutingModule } from './app-resources-routing.module';

import { SharedModule } from './shared.module';
import { EditResourceCatalogsComponent } from './p_resources/admin/catalogManagement/edit-resource-catalogs/edit-resource-catalogs.component';
import { ResourceOsmAddComponent } from './p_resources/admin/catalogManagement/resource-osm-add/resource-osm-add.component';
import { DeleteResourceCatalogsComponent } from './p_resources/admin/catalogManagement/delete-resource-catalogs/delete-resource-catalogs.component';
import { ListResourceCategoriesComponent } from './p_resources/admin/catalogManagement/list-resource-categories/list-resource-categories.component';
import { EditResourceCategoriesComponent } from './p_resources/admin/catalogManagement/edit-resource-categories/edit-resource-categories.component';
import { DeleteResourceCategoriesComponent } from './p_resources/admin/catalogManagement/delete-resource-categories/delete-resource-categories.component';
import { CreateResourceCategoryChildrenComponent } from './p_resources/admin/catalogManagement/edit-resource-categories/create-resource-category-children/create-resource-category-children.component';
import { AssignResourceCandidatesComponent } from './p_resources/admin/catalogManagement/edit-resource-categories/assign-resource-candidates/assign-resource-candidates.component';
import { EditResourceSpecsComponent, DiscardChangesComponent } from './p_resources/admin/catalogManagement/edit-resource-spec/edit-resource-spec.component';
import { ListResourceSpecsComponent } from './p_resources/admin/catalogManagement/list-resource-spec/list-resource-spec.component';
import { EditResourceSpecCharacteristicsComponent } from './p_resources/admin/catalogManagement/edit-resource-spec/edit-resource-spec-characteristics/edit-resource-spec-characteristics.component';
import { DeleteResourceSpecCharacteristicsComponent } from './p_resources/admin/catalogManagement/edit-resource-spec/delete-resource-spec-characteristics/delete-resource-spec-characteristics.component';
import { DeleteResourceSpecComponent } from './p_resources/admin/catalogManagement/delete-resource-spec/delete-resource-spec.component';
import { ListResourceInventoryComponent } from './p_resources/admin/inventoryManagement/list-resource-inventory/list-resource-inventory.component';
import { DeleteResourceSpecAttachmentComponent } from './p_resources/admin/catalogManagement/edit-resource-spec/delete-resource-spec-attachment/delete-resource-spec-attachment.component';
import { AssignResourceSpecRelationshipsComponent } from './p_resources/admin/catalogManagement/edit-resource-spec/assign-resource-spec-relationships/assign-resource-spec-relationships.component';
import { DeleteResourceComponent } from './p_resources/admin/catalogManagement/delete-resource/delete-resource.component';
import { PreviewResourceComponent } from './p_resources/admin/inventoryManagement/preview-resource/preview-resource.component';
import { EditResourceComponent } from './p_resources/admin/inventoryManagement/edit-resource/edit-resource.component';
import { EditResourceRelationshipsComponent } from './p_resources/admin/inventoryManagement/edit-resource/edit-resource-relationships/edit-resource-relationships.component';
import { AssignResourceRelationshipsComponent } from './p_resources/admin/inventoryManagement/edit-resource/assign-resource-relationships/assign-resource-relationships.component';


import { ResourcePoolManagementComponent } from './p_resources/admin/resourcePoolManagement/resource-pool-management/resource-pool-management.component';
import { EditResourcePoolComponent } from './p_resources/admin/resourcePoolManagement/edit-resource-pool/edit-resource-pool.component';
import { DeleteResourcePoolComponent } from './p_resources/admin/resourcePoolManagement/delete-resource-pool/delete-resource-pool.component';
import { ResourceReservationManagementComponent } from './p_resources/admin/resourcePoolManagement/resource-reservation-management/resource-reservation-management.component';
import { EditResourceReservationComponent } from './p_resources/admin/resourcePoolManagement/edit-resource-reservation/edit-resource-reservation.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin  from '@fullcalendar/resource-timeline';


import { ResourceReservationCalendarComponent } from './p_resources/admin/resourcePoolManagement/resource-reservation-calendar/resource-reservation-calendar.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    timeGridPlugin,
    listPlugin,
    interactionPlugin,
    resourceTimelinePlugin
]);

@NgModule({
  declarations: [
    ListResourceCatalogsComponent,
    EditResourceCatalogsComponent,
    DeleteResourceCatalogsComponent,
    ListResourceCategoriesComponent,
    EditResourceCategoriesComponent,
    DeleteResourceCategoriesComponent,
    CreateResourceCategoryChildrenComponent,
    DeleteResourceSpecCharacteristicsComponent,
    DeleteResourceSpecAttachmentComponent,
    AssignResourceCandidatesComponent,
    EditResourceSpecsComponent,
    EditResourceSpecCharacteristicsComponent,
    ResourceOsmAddComponent,
    DiscardChangesComponent,
    ListResourceSpecsComponent,
    DeleteResourceSpecComponent,
    ListResourceInventoryComponent,
    AssignResourceSpecRelationshipsComponent,
    DeleteResourceComponent,
    PreviewResourceComponent,
    EditResourceComponent,
    EditResourceRelationshipsComponent,
    AssignResourceRelationshipsComponent,
    ResourcePoolManagementComponent,
    EditResourcePoolComponent,
    DeleteResourcePoolComponent,
    ResourceReservationManagementComponent,
    EditResourceReservationComponent,
    ResourceReservationCalendarComponent,
    AssignPoolResourceRelationshipsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppResourcesRoutingModule,
    FullCalendarModule
  ],
  entryComponents: [
    EditResourceCatalogsComponent,
    DeleteResourceSpecCharacteristicsComponent,
    EditResourceCategoriesComponent,
    DeleteResourceSpecAttachmentComponent,
    ResourceOsmAddComponent,
    DiscardChangesComponent,
    EditResourceSpecsComponent,
    DeleteResourceCategoriesComponent,
    CreateResourceCategoryChildrenComponent,
    AssignResourceCandidatesComponent,
    EditResourceSpecCharacteristicsComponent,
    DeleteResourceCatalogsComponent,
    DeleteResourceSpecComponent,
    AssignResourceSpecRelationshipsComponent,
    EditResourceComponent,
    EditResourcePoolComponent,
    DeleteResourcePoolComponent,
    EditResourceReservationComponent,
    AssignPoolResourceRelationshipsComponent
  ],
    exports: [

    ],
    schemas: [NO_ERRORS_SCHEMA]

})
export class AppResourcesModule { }
