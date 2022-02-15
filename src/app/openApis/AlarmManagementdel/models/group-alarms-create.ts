/* tslint:disable */
import { AlarmRefOrValue } from './alarm-ref-or-value';

/**
 * Task resource for group alarms operation Skipped properties: id,href
 */
export interface GroupAlarmsCreate {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Time of the correlation
   */
  alarmChangedTime: string;

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
   * Correlated alarms
   */
  correlatedAlarm: Array<AlarmRefOrValue>;

  /**
   * The successfully correlated alarms
   */
  groupedAlarm?: Array<AlarmRefOrValue>;
  parentAlarm: AlarmRefOrValue;

  /**
   * Source system identifier
   */
  sourceSystemId: string;

  /**
   * Current state of the operation task
   */
  state?: string;
}
