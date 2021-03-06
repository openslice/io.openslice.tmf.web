/* tslint:disable */
import { ThresholdRef } from './threshold-ref';

/**
 * Identifies the details of the threshold that has been crossed.
 */
export interface CrossedThresholdInformation {

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
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * Indicates the threshold crossing direction: up or down.
   */
  direction?: string;

  /**
   * Indicates the granularity at which the indicator is evaluated for threshold crossing
   */
  granularity?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Indicates the name of indicator which crossed the threshold.
   */
  indicatorName?: string;

  /**
   * Indicates the unit of the measurement of the indicator corresponding to the threshold that has been crossed.
   */
  indicatorUnit?: string;

  /**
   * Indicates the value of the indicator which crossed the threshold.
   */
  observedValue?: string;
  threshold?: ThresholdRef;

  /**
   * Indicates further information on the threshold crossing alarm.
   */
  thresholdCrossingDescription?: string;
  uuid?: string;
}
