/* tslint:disable */
import { MeasureThresholdRuleViolation } from './measure-threshold-rule-violation';
import { Characteristic } from './characteristic';

/**
 * A TestMeasure specifies a measure of a specific aspect of a product, service, or resource test, such as lost packets or connectivity status
 */
export interface TestMeasureReq {

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
   * The number of digits of accuracy captured for associated Metrics
   */
  accuracy?: number;

  /**
   * The date and time that the metric was captured
   */
  captureDateTime?: string;

  /**
   * The method used to capture the Metrics (This may be replaced by a set of entities similar to the Performance Monitoring Ref)
   */
  captureMethod?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Brief description of the metric
   */
  metricDescription?: string;

  /**
   * Hyperlink to access a metric for detail information
   */
  metricHref?: string;

  /**
   * The name of the metric
   */
  metricName?: string;

  /**
   * A list of rules that were violated in this test measure
   */
  ruleViolation?: Array<MeasureThresholdRuleViolation>;

  /**
   * The unit of measure for the metric values, such as meters, cubic yards, kilograms [ISO 1000].
   */
  unitOfMeasure?: string;
  uuid?: string;
  value?: Characteristic;
}
