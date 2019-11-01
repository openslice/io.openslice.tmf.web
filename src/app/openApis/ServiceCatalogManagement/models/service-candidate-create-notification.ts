/* tslint:disable */
import { ServiceCandidateCreateEvent } from './service-candidate-create-event';

/**
 * The notification data structure
 */
export interface ServiceCandidateCreateNotification {

  /**
   * The event linked to the involved resource object
   */
  event?: ServiceCandidateCreateEvent;

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
