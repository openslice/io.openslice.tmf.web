/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AckAlarmsService } from './services/ack-alarms.service';
import { AlarmService } from './services/alarm.service';
import { ClearAlarmsService } from './services/clear-alarms.service';
import { CommentAlarmsService } from './services/comment-alarms.service';
import { GroupAlarmsService } from './services/group-alarms.service';
import { EventsSubscriptionService } from './services/events-subscription.service';
import { UnAckAlarmsService } from './services/un-ack-alarms.service';
import { UnGroupAlarmsService } from './services/un-group-alarms.service';
import { NotificationListenersClientSideService } from './services/notification-listeners-client-side.service';

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
    AckAlarmsService,
    AlarmService,
    ClearAlarmsService,
    CommentAlarmsService,
    GroupAlarmsService,
    EventsSubscriptionService,
    UnAckAlarmsService,
    UnGroupAlarmsService,
    NotificationListenersClientSideService
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
