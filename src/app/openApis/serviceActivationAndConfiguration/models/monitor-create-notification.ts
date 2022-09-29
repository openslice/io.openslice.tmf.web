/* tslint:disable */
import { MonitorCreateEvent } from './monitor-create-event';

/**
 * The notification data structure
 */
export interface MonitorCreateNotification {
  event?: MonitorCreateEvent;

  /**
   * The identifier of the notification
   */
  eventId?: string;

  /**
   * Time of the event occurrence
   */
  eventTime?: string;

  /**
   * The type of the notification
   */
  eventType?: string;

  /**
   * The path identifying the object field concerned by this notification
   */
  fieldPath?: string;

  /**
   * The path identifying the resource object concerned by this notification
   */
  resourcePath?: string;
}
