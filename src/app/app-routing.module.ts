import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ServicesMarketplaceComponent } from './marketplaces/services-marketplace/services-marketplace.component';
import { ExperimentsMarketplaceComponent } from './marketplaces/experiments-marketplace/experiments-marketplace.component';
import { VxfsMarketplaceComponent } from './marketplaces/vxfs-marketplace/vxfs-marketplace.component';
import { ListServiceCatalogsComponent } from './admin/services/list-service-catalogs/list-service-catalogs.component';
import { ListServiceCategoriesComponent } from './admin/services/list-service-categories/list-service-categories.component';
import { ListServiceSpecsComponent } from './admin/services/list-service-specs/list-service-specs.component';
import { EditServiceSpecsComponent } from './admin/services/edit-service-specs/edit-service-specs.component';
import { EditServiceCategoriesComponent } from './admin/services/edit-service-categories/edit-service-categories.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'services_marketplace', component: ServicesMarketplaceComponent },
  { path: 'experiments_marketplace', component: ExperimentsMarketplaceComponent },
  { path: 'vxf_marketplace', component: VxfsMarketplaceComponent },
  { path: 'service_catalogs', component: ListServiceCatalogsComponent },
  { path: 'service_categories', component: ListServiceCategoriesComponent },
  { path: 'service_categories_update/:id', component: EditServiceCategoriesComponent },
  { path: 'service_categories_update', component: EditServiceCategoriesComponent },
  { path: 'service_specs', component: ListServiceSpecsComponent },
  { path: 'service_spec_update/:id', component: EditServiceSpecsComponent },
  { path: 'service_spec_update', component: EditServiceSpecsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
