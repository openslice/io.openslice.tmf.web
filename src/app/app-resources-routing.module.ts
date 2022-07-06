import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { PortalsComponent } from './landing/portals/portals.component';

import { AuthGuardService } from './shared/services/auth-guard.service';
import { ListResourceCatalogsComponent } from './p_resources/admin/catalogManagement/list-resource-catalogs/list-resource-catalogs.component';
import { ListResourceCategoriesComponent } from './p_resources/admin/catalogManagement/list-resource-categories/list-resource-categories.component';
import { EditResourceCategoriesComponent } from './p_resources/admin/catalogManagement/edit-resource-categories/edit-resource-categories.component';
import { ListResourceSpecsComponent } from './p_resources/admin/catalogManagement/list-resource-spec/list-resource-spec.component';
import { EditResourceSpecsComponent } from './p_resources/admin/catalogManagement/edit-resource-spec/edit-resource-spec.component';
import { ListResourceInventoryComponent } from './p_resources/admin/inventoryManagement/list-resource-inventory/list-resource-inventory.component';
import { ResourcesMarketplaceComponent } from './p_resources/marketplace/resources-marketplace.component';

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
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppResourcesRoutingModule { }
