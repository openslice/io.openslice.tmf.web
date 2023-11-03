import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ListResourceCatalogsComponent } from './p_resources/admin/catalogManagement/list-resource-catalogs/list-resource-catalogs.component';
import { ListResourceCategoriesComponent } from './p_resources/admin/catalogManagement/list-resource-categories/list-resource-categories.component';
import { EditResourceCategoriesComponent } from './p_resources/admin/catalogManagement/edit-resource-categories/edit-resource-categories.component';
import { ListResourceSpecsComponent } from './p_resources/admin/catalogManagement/list-resource-spec/list-resource-spec.component';
import { EditResourceSpecsComponent } from './p_resources/admin/catalogManagement/edit-resource-spec/edit-resource-spec.component';
import { PreviewResourceComponent } from './p_resources/admin/inventoryManagement/preview-resource/preview-resource.component';
import { ListResourceInventoryComponent } from './p_resources/admin/inventoryManagement/list-resource-inventory/list-resource-inventory.component';
import { ListResourcePoolsComponent } from './p_resources/admin/resourcePoolManagement/list-resource-pools/list-resource-pools.component';
import { ResourceReservationCalendarComponent } from './p_resources/admin/resourcePoolManagement/resource-reservation-calendar/resource-reservation-calendar.component';
import { EditResourceReservationComponent } from './p_resources/admin/resourcePoolManagement/edit-resource-reservation/edit-resource-reservation.component';
import { EditResourcePoolComponent } from './p_resources/admin/resourcePoolManagement/edit-resource-pool/edit-resource-pool.component';
import { ListResourceReservationsComponent } from './p_resources/admin/resourcePoolManagement/list-resource-reservations/list-resource-reservations.component';

const routes: Routes = [
  // { path: 'resources_marketplace', component: ResourcesMarketplaceComponent },
  { path: '', component: BootstrapComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always', children: [
      { path: 'resource_catalogs', component: ListResourceCatalogsComponent },
      { path: 'resource_categories', component: ListResourceCategoriesComponent },
      { path: 'resource_categories_update/:id', component: EditResourceCategoriesComponent },
      { path: 'resource_categories_update', component: EditResourceCategoriesComponent },
      { path: 'resource_specs', component: ListResourceSpecsComponent },
      { path: 'resource_spec_update/:id', component: EditResourceSpecsComponent },
      { path: 'resource_spec_update', component: EditResourceSpecsComponent },
      { path: 'resource_inventory', component: ListResourceInventoryComponent },
      { path: 'resource/:id', component: PreviewResourceComponent },
      
      { path: 'resource_pools', component: ListResourcePoolsComponent },
      { path: 'resource_pool/:id', component: EditResourcePoolComponent },
      { path: 'resource_pool', component: EditResourcePoolComponent },
      
      { path: 'resource_reservations', component: ListResourceReservationsComponent },
      { path: 'resource_reservations_calendar', component: ResourceReservationCalendarComponent },
      { path: 'resource_reservation_update/:id', component: EditResourceReservationComponent},
      { path: 'resource_reservation_update', component: EditResourceReservationComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppResourcesRoutingModule { }
