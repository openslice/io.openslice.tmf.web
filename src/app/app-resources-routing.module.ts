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
import { ResourceOsmAddComponent } from './p_resources/admin/catalogManagement/resource-osm-add/resource-osm-add.component';
import { PreviewResourceComponent } from './p_resources/admin/inventoryManagement/preview-resource/preview-resource.component';
import { ListResourceInventoryComponent } from './p_resources/admin/inventoryManagement/list-resource-inventory/list-resource-inventory.component';

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
      { path: 'resource_osm_add', component: ResourceOsmAddComponent },
      { path: 'resource_osm_add/:id', component: ResourceOsmAddComponent },
      { path: 'resource/:id', component: PreviewResourceComponent },
      { path: 'new_resource', component: PreviewResourceComponent },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppResourcesRoutingModule { }
