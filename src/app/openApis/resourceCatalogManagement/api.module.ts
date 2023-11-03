/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ExportJobService } from './services/export-job.service';
import { ImportJobService } from './services/import-job.service';
import { EventsSubscriptionService } from './services/events-subscription.service';
import { NotificationListenersClientSideService } from './services/notification-listeners-client-side.service';
import { ResourceCandidateService } from './services/resource-candidate.service';
import { ResourceCatalogService } from './services/resource-catalog.service';
import { ResourceCategoryService } from './services/resource-category.service';
import { ResourceSpecificationService } from './services/resource-specification.service';

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
    ImportJobService,
    EventsSubscriptionService,
    NotificationListenersClientSideService,
    ResourceCandidateService,
    ResourceCatalogService,
    ResourceCategoryService,
    ResourceSpecificationService
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
