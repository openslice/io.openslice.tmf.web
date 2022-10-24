/* tslint:disable */
import { ResourceOrderInformationRequiredEventPayload } from './resource-order-information-required-event-payload';

/**
 * The notification data structure
 */
export interface ResourceOrderInformationRequiredEvent {

  /**
   * The correlation id for this event.
   */
  correlationId?: string;

  /**
   * An explnatory of the event.
   */
  description?: string;

  /**
   * The domain of the event.
   */
  domain?: string;
  event?: ResourceOrderInformationRequiredEventPayload;

  /**
   * The identifier of the notification.
   */
  eventId?: string;

  /**
   * Time of the event occurrence.
   */
  eventTime?: string;

  /**
   * The type of the notification.
   */
  eventType?: string;

  /**
   * The path identifying the object field concerned by this notification.
   */
  fieldPath?: string;

  /**
   * A priority.
   */
  priority?: string;

  /**
   * The time the event occured.
   */
  timeOcurred?: string;

  /**
   * The title of the event.
   */
  title?: string;
}
