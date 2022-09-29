/* tslint:disable */
import { AppliedConsequence } from './applied-consequence';
import { Duration } from './duration';

/**
 * A measureThresholdRuleViolation is a violation of a rule that defines the in the  MericDefMeasureThresholdRule.
 */
export interface MeasureThresholdRuleViolation {

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
   * An Applied Consequence defines the action (prescribed action or notification) to take when a MeasureThresholdRuleViolation occurs.
   */
  appliedConsequence?: Array<AppliedConsequence>;

  /**
   * An operator that when applied on a value specifies whether a  threshold is crossed or ceased to be crossed. This operator is used to compare with the conformanceTargetLower.
   */
  conformanceComparatorLower?: string;

  /**
   * An operator that when applied on a value specifies whether a  threshold is crossed or ceased to be crossed. This operator is used to compare with the conformanceTargetUpper.
   */
  conformanceComparatorUpper?: string;

  /**
   * to cater for values that are not numerical test metrics (e.g. a DSL line can be Synchronised or Unsynchronised. If the latter, the test should result in a rule violation).The allowed value can contain a REGEX string.
   */
  conformanceTargetExact?: string;

  /**
   * A value used to determine if the threshold is crossed or ceases  to be crossed. It represents the lower limit. The value should be less than the conformanceTargetUpper. The conformance comparators should also be logically defined so as to not lead to a logically impossible condition.
   */
  conformanceTargetLower?: string;

  /**
   * A value used to determine if the threshold is crossed or ceases  to be crossed. It represents the Upper limit. The value should be greater than the conformanceTargetLower. The conformance comparators should also be logically defined so as to not lead to a logically impossible condition.
   */
  conformanceTargetUpper?: string;

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
