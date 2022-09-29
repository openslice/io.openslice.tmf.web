/* tslint:disable */
import { AlarmRefOrValue } from './alarm-ref-or-value';

/**
 * Task resource for ungroup alarms operation
 */
export interface UnGroupAlarms {

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
   * Time of the uncorrelation
   */
  alarmChangedTime?: string;

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
  correlatedAlarm?: Array<AlarmRefOrValue>;

  /**
   * A reference to the task
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

  /**
   * The successfully uncorrelated alarms
   */
  unGroupedAlarm?: Array<AlarmRefOrValue>;
  uuid?: string;
}
