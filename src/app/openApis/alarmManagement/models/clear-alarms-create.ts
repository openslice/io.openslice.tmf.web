/* tslint:disable */
import { Alarm } from './alarm';
import { AlarmRefOrValue } from './alarm-ref-or-value';

/**
 * Task resource for clear alarms operation Skipped properties: id,href
 */
export interface ClearAlarmsCreate {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Time of the alarm clearing
   */
  alarmClearedTime: string;

  /**
   * Alarm patterns to match target alarms. An alarm will match if all of the sttributes in any of the patterns compare equal to those attributes of the alarm.
   */
  alarmPattern: Array<Alarm>;

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
   * Name of the clearing system
   */
  clearSystemId: string;

  /**
   * Name of the clearing user
   */
  clearUserId: string;

  /**
   * The successfully cleared alarms
   */
  clearedAlarm?: Array<AlarmRefOrValue>;

  /**
   * Current state of the operation task
   */
  state?: string;
}
