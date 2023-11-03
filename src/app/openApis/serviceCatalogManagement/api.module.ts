/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ExportJobService } from './services/export-job.service';
import { EventsSubscriptionService } from './services/events-subscription.service';
import { ImportJobService } from './services/import-job.service';
import { NotificationListenersClientSideService } from './services/notification-listeners-client-side.service';
import { ServiceCandidateService } from './services/service-candidate.service';
import { ServiceCatalogService } from './services/service-catalog.service';
import { ServiceCategoryService } from './services/service-category.service';
import { ServiceSpecificationService } from './services/service-specification.service';

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
    ExportJobService,
    EventsSubscriptionService,
    ImportJobService,
    NotificationListenersClientSideService,
    ServiceCandidateService,
    ServiceCatalogService,
    ServiceCategoryService,
    ServiceSpecificationService
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
