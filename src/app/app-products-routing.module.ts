import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ProductMarketplaceComponent } from './p_product/marketplace/product-marketplace.component';
import { ListProductCatalogsComponent } from './p_product/admin/productCatalogManagement/list-product-catalogs/list-product-catalogs.component';
import { EditProductCategoriesComponent } from './p_product/admin/productCatalogManagement/edit-product-categories/edit-product-categories.component';
import { ListProductCategoriesComponent } from './p_product/admin/productCatalogManagement/list-product-categories/list-product-categories.component';
import { ListProductSpecsComponent } from './p_product/admin/productCatalogManagement/list-product-specs/list-product-specs.component';
import { EditProductSpecsComponent } from './p_product/admin/productCatalogManagement/edit-product-specs/edit-product-specs.component';
import { ListOrganizationsComponent } from './shared/components/partyManagement/list-organizations/list-organizations.component';
import { EditOrganizationsComponent } from './shared/components/partyManagement/edit-organizations/edit-organizations.component';
import { ListIndividualsComponent } from './shared/components/partyManagement/list-individuals/list-individuals.component';
import { EditIndividualsComponent } from './shared/components/partyManagement/edit-individuals/edit-individuals.component';
import { ListProductOfferingsComponent } from './p_product/admin/productCatalogManagement/list-product-offerings/list-product-offerings.component';
import { EditProductCatalogsComponent } from './p_product/admin/productCatalogManagement/edit-product-catalogs/edit-product-catalogs.component';
import { EditProductOfferingsComponent } from './p_product/admin/productCatalogManagement/edit-product-offerings/edit-product-offerings.component';

const routes: Routes = [

  // { path: '', component: PortalsComponent},
  { path: 'marketplace', component: ProductMarketplaceComponent },
  { path: '', component: BootstrapComponent, canActivate: [AuthGuardService], runGuardsAndResolvers: 'always', children: [
    { path: 'product_catalogs', component: ListProductCatalogsComponent },
    { path: 'product_catalog_update/:id', component: EditProductCatalogsComponent },
    { path: 'product_catalog_update', component: EditProductCatalogsComponent },

    { path: 'product_categories', component: ListProductCategoriesComponent },
    { path: 'product_category_update/:id', component: EditProductCategoriesComponent },
    { path: 'product_category_update', component: EditProductCategoriesComponent },

    { path: 'product_offerings', component: ListProductOfferingsComponent },
    { path: 'product_offering_update/:id', component: EditProductOfferingsComponent },
    { path: 'product_offering_update', component: EditProductOfferingsComponent },
    
    { path: 'product_specs', component: ListProductSpecsComponent },
    { path: 'product_spec_update/:id', component: EditProductSpecsComponent },
    { path: 'product_spec_update', component: EditProductSpecsComponent },

    { path: 'organizations', component: ListOrganizationsComponent },
    { path: 'organization_update/:id', component: EditOrganizationsComponent },
    { path: 'organization_update', component: EditOrganizationsComponent },

    { path: 'individuals', component: ListIndividualsComponent },
    { path: 'individual_update/:id', component: EditIndividualsComponent },
    { path: 'individual_update', component: EditIndividualsComponent },

  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AppProductsRoutingModule { }
