/* tslint:disable */
import { CommentAlarmsStateChangeEventPayload } from './comment-alarms-state-change-event-payload';

/**
 * The notification data structure
 */
export interface CommentAlarmsStateChangeEvent {

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
  event?: CommentAlarmsStateChangeEventPayload;

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
