/* tslint:disable */
import { Duration } from './duration';
import { MetricDefMeasureThresholdRule } from './metric-def-measure-threshold-rule';
import { TimePeriod } from './time-period';

/**
 * A TestMeasureDefinition specifies a measure of a specific aspect of a product, service, or resource test, such as lost packets or connectivity status
 */
export interface TestMeasureDefinition {

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
   * The frequency of capture for the metric. Note: This may be replaced by a set of entities similar to the Performance Monitoring
   */
  captureFrequency?: string;

  /**
   * The method used to capture the Metric. Note: This may be replaced by a set of entities similar to the Performance Monitoring
   */
  captureMethod?: string;
  capturePeriod?: Duration;

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
   * The name of a metric that in the test measure
   */
  metricName?: string;

  /**
   * The name of the TestMeasureDefinition
   */
  name?: string;

  /**
   * The rule(s) associated with the measure threshold
   */
  thresholdRule?: Array<MetricDefMeasureThresholdRule>;

  /**
   * Name of a service test specification
   */
  unitOfMeasure?: string;
  uuid?: string;
  validFor?: TimePeriod;

  /**
   * A kind of value that the Metric value can take on, such as numeric, text, and so forth
   */
  valueType?: string;
}
