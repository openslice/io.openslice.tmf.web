/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { CancelResourceOrderService } from './services/cancel-resource-order.service';
import { EventsSubscriptionService } from './services/events-subscription.service';
import { NotificationListenersClientSideService } from './services/notification-listeners-client-side.service';
import { ResourceOrderService } from './services/resource-order.service';

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
    CancelResourceOrderService,
    EventsSubscriptionService,
    NotificationListenersClientSideService,
    ResourceOrderService
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
