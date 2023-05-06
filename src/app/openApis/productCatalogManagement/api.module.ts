/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CatalogService } from './services/catalog.service';
import { CategoryService } from './services/category.service';
import { ExportJobService } from './services/export-job.service';
import { EventsSubscriptionService } from './services/events-subscription.service';
import { ImportJobService } from './services/import-job.service';
import { NotificationListenersClientSideService } from './services/notification-listeners-client-side.service';
import { ProductOfferingService } from './services/product-offering.service';
import { ProductOfferingPriceService } from './services/product-offering-price.service';
import { ProductSpecificationService } from './services/product-specification.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    CatalogService,
    CategoryService,
    ExportJobService,
    EventsSubscriptionService,
    ImportJobService,
    NotificationListenersClientSideService,
    ProductOfferingService,
    ProductOfferingPriceService,
    ProductSpecificationService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
