/* tslint:disable */
import { MetricDefMeasureConsequence } from './metric-def-measure-consequence';
import { Duration } from './duration';

/**
 * A MetricDefMeasureThresholdRule is a rule that defines the condition (raise or clear) to achieve to apply  consequences when a threshold is crossed or ceased to be crossed. It also defines the severity of the  raise or clear of the threshold.
 */
export interface MetricDefMeasureThresholdRule {

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
   * An operator that when applied on a value specifies whether a  threshold is crossed or ceased to be crossed. This operator is used to Service Test Management API REST Specification compare with the conformanceTargetLower.
   */
  conformanceComparatorLower?: string;

  /**
   * An operator that when applied on a value specifies whether a  threshold is crossed or ceased to be crossed. This operator is used to compare with the conformanceTargetUpper.
   */
  conformanceComparatorUpper?: string;

  /**
   * A value used to determine if the threshold is crossed or ceases  to be crossed. It represents the lower limit. The value should be less than the conformanceTargetUpper. The conformance comparators should also be logically defined so as to not lead to a logically impossible condition.
   */
  conformanceTargetLower?: string;

  /**
   * A value used to determine if the threshold is crossed or ceases  to be crossed. It represents the Upper limit. The value should be greater than the conformanceTargetLower. The conformance comparators should also be logically defined so as to not lead to a logically impossible condition.
   */
  conformanceTargetUpper?: string;

  /**
   * A list of consequences (actions, notifications) that will arise if the threshold is crossed
   */
  consequence?: Array<MetricDefMeasureConsequence>;

  /**
   * Description for the MetricDefMeasureThresholdRule .
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Name for the MetricDefMeasureThresholdRule .
   */
  name?: string;

  /**
   * The number of allowed crossing occurrences in reference to the  tolerancePeriod without a consequence being initiated.
   */
  numberOfAllowedCrossing?: number;

  /**
   * A threshold can be generated in different severity levels. A  crossing for each level may require a different condition and possibly trigger a different consequence.
   */
  thresholdRuleSeverity?: string;
  tolerancePeriod?: Duration;
  uuid?: string;
}
