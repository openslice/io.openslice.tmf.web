/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AvailabilityCheckService } from './services/availability-check.service';
import { ExtractService } from './services/extract.service';
import { EventsSubscriptionService } from './services/events-subscription.service';
import { PushService } from './services/push.service';
import { ReservationService } from './services/reservation.service';
import { ResourcePoolService } from './services/resource-pool.service';

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
    AvailabilityCheckService,
    ExtractService,
    EventsSubscriptionService,
    PushService,
    ReservationService,
    ResourcePoolService
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
