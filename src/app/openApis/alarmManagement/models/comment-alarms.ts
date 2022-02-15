/* tslint:disable */
import { Alarm } from './alarm';
import { Comment } from './comment';
import { AlarmRefOrValue } from './alarm-ref-or-value';

/**
 * Task resource for comment alarms operation
 */
export interface CommentAlarms {

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
   * Alarm patterns to match target alarms. An alarm will match if all of the sttributes in any of the patterns compare equal to those attributes of the alarm.
   */
  alarmPattern?: Array<Alarm>;
  comment?: Comment;

  /**
   * The successfully commented alarms
   */
  commentedAlarm?: Array<AlarmRefOrValue>;

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
