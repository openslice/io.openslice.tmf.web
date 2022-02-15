/* tslint:disable */
import { AlarmRefOrValue } from './alarm-ref-or-value';

/**
 * Task resource for group alarms operation
 */
export interface GroupAlarms {

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
   * Time of the correlation
   */
  alarmChangedTime?: string;

  /**
   * Correlated alarms
   */
  correlatedAlarm?: Array<AlarmRefOrValue>;

  /**
   * The successfully correlated alarms
   */
  groupedAlarm?: Array<AlarmRefOrValue>;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;
  parentAlarm?: AlarmRefOrValue;

  /**
   * Source system identifier
   */
  sourceSystemId?: string;

  /**
   * Current state of the operation task
   */
  state?: string;
  uuid?: string;
}
