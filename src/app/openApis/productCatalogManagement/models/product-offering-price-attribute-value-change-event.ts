/* tslint:disable */
import { ProductOfferingPriceAttributeValueChangeEventPayload } from './product-offering-price-attribute-value-change-event-payload';

/**
 * The notification data structure
 */
export interface ProductOfferingPriceAttributeValueChangeEvent {

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
  event?: ProductOfferingPriceAttributeValueChangeEventPayload;

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
