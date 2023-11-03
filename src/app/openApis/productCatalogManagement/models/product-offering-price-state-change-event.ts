/* tslint:disable */
import { ProductOfferingPriceStateChangeEventPayload } from './product-offering-price-state-change-event-payload';

/**
 * The notification data structure
 */
export interface ProductOfferingPriceStateChangeEvent {

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

  /**
   * The event payload linked to the involved resource object
   */
  event?: ProductOfferingPriceStateChangeEventPayload;

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
   * Reference of the ProcessFlow
   */
  href?: string;

  /**
   * Identifier of the Process flow
   */
  id?: string;

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
