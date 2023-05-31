import { NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { AppProductsRoutingModule } from './app-products-routing.module';
import { ProductMarketplaceComponent } from './p_product/marketplace/product-marketplace.component';
import { ListProductCatalogsComponent } from './p_product/admin/productCatalogManagement/list-product-catalogs/list-product-catalogs.component';
import { ListProductCategoriesComponent } from './p_product/admin/productCatalogManagement/list-product-categories/list-product-categories.component';
import { ListProductSpecsComponent } from './p_product/admin/productCatalogManagement/list-product-specs/list-product-specs.component';
import { EditProductCatalogsComponent } from './p_product/admin/productCatalogManagement/edit-product-catalogs/edit-product-catalogs.component';
import { EditProductCategoriesComponent } from './p_product/admin/productCatalogManagement/edit-product-categories/edit-product-categories.component';
import { EditProductSpecsComponent } from './p_product/admin/productCatalogManagement/edit-product-specs/edit-product-specs.component';
import { DeleteProductCatalogsComponent } from './p_product/admin/productCatalogManagement/delete-product-catalogs/delete-product-catalogs.component';
import { DeleteProductCategoriesComponent } from './p_product/admin/productCatalogManagement/delete-product-categories/delete-product-categories.component';
import { DeleteProductSpecsComponent } from './p_product/admin/productCatalogManagement/delete-product-specs/delete-product-specs.component';
import { TreeSidenavComponent } from './p_product/marketplace/tree-sidenav/tree-sidenav.component';
import { AssignServiceSpecificationComponent } from './p_product/admin/productCatalogManagement/edit-product-specs/assign-service-specification/assign-service-specification.component';
import { ListProductOfferingsComponent } from './p_product/admin/productCatalogManagement/list-product-offerings/list-product-offerings.component';
import { DeleteProductOfferingComponent } from './p_product/admin/productCatalogManagement/delete-product-offering/delete-product-offering.component';
import { EditProductOfferingsComponent } from './p_product/admin/productCatalogManagement/edit-product-offerings/edit-product-offerings.component';
import { PreviewMarketPlaceItemComponent } from './p_product/marketplace/preview-market-place-item/preview-market-place-item.component';
import { AssignProductOfferingsComponent } from './p_product/admin/productCatalogManagement/edit-product-categories/assign-product-offerings/assign-product-offerings.component';
import { AssignSubcategoriesComponent } from './p_product/admin/productCatalogManagement/edit-product-categories/assign-subcategories/assign-subcategories.component';



@NgModule({
  declarations: [
    ProductMarketplaceComponent,
    TreeSidenavComponent,
    ListProductCatalogsComponent,
    ListProductCategoriesComponent,
    ListProductSpecsComponent,
    EditProductCatalogsComponent,
    EditProductCategoriesComponent,
    EditProductSpecsComponent,
    DeleteProductCatalogsComponent,
    DeleteProductCategoriesComponent,
    DeleteProductSpecsComponent,
    AssignServiceSpecificationComponent,
    ListProductOfferingsComponent,
    DeleteProductOfferingComponent,
    EditProductOfferingsComponent,
    PreviewMarketPlaceItemComponent,
    AssignProductOfferingsComponent,
    AssignSubcategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppProductsRoutingModule,
  ],
  entryComponents: [
    DeleteProductCatalogsComponent,
    DeleteProductSpecsComponent,
    DeleteProductCategoriesComponent,
    DeleteProductOfferingComponent,
    AssignServiceSpecificationComponent,
    PreviewMarketPlaceItemComponent
  ],
})

export class AppProductsModule { }
