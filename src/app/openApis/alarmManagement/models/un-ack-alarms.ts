/* tslint:disable */
import { Alarm } from './alarm';
import { AlarmRefOrValue } from './alarm-ref-or-value';

/**
 * Task resource for unacknowledge alarms operation
 */
export interface UnAckAlarms {

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
   * Name of the unacknowledging system
   */
  ackSystemId?: string;

  /**
   * Time of the unacknowledgement
   */
  ackTime?: string;

  /**
   * Name of the unacknowledging user
   */
  ackUserId?: string;

  /**
   * Alarm patterns to match target alarms. An alarm will match if all of the sttributes in any of the patterns compare equal to those attributes of the alarm.
   */
  alarmPattern?: Array<Alarm>;

  /**
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * A reference to the task
   */
  href?: string;
  id?: string;

  /**
   * Current state of the operation task
   */
  state?: string;

  /**
   * The successfully unacknowledged alarms
   */
  unAckedAlarm?: Array<AlarmRefOrValue>;
  uuid?: string;
}
