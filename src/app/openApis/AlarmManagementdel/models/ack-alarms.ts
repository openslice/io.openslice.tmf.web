/* tslint:disable */
import { AlarmRefOrValue } from './alarm-ref-or-value';
import { Alarm } from './alarm';

/**
 * Task resource for the acknowledge alarms operation
 */
export interface AckAlarms {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Name of the acknowledging system
   */
  ackSystemId?: string;

  /**
   * Time of the acknowledgement
   */
  ackTime?: string;

  /**
   * Name of the acknowledging user
   */
  ackUserId?: string;

  /**
   * The successfully acknowledged alarms
   */
  ackedAlarm?: Array<AlarmRefOrValue>;

  /**
   * Alarm patterns to match target alarms. An alarm will match if all of the sttributes in any of the patterns compare equal to those attributes of the alarm.
   */
  alarmPattern?: Array<Alarm>;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Current state of the operation task
   */
  state?: string;
  uuid?: string;
}
