/* tslint:disable */
import { ServiceStateChangeEvent } from './service-state-change-event';

/**
 * The notification data structure
 */
export interface ServiceStateChangeNotification {

  /**
   * The event linked to the involved resource object
   */
  event?: ServiceStateChangeEvent;

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
