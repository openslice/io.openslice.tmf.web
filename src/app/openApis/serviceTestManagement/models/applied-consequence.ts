/* tslint:disable */

/**
 * An Applied Consequence defines the action (prescribed action or notification) to take when a  MeasureThresholdRuleViolation occurs.
 */
export interface AppliedConsequence {

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
   * The action for a violated threshold. This could be a hyperlink to  the action.
   */
  appliedAction?: string;

  /**
   * A narrative that explains in detail what the consequence is.
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * A word, term, or phrase by which Consequence is known and  distinguished from other MetricDefMeasureConsequences.
   */
  name?: string;

  /**
   * An indicator used to specify that a consequence should cease  being applied if a value is in the same range as the previous value or continue being applied if a value is in the same range as the previous value.   If the repeatAction is True, if the consequence is always applied as soon as the MetricMeasure value is in the range of values and if the repeatAction is False, the consequence is applied only if the previous MetricMeasure value was not in the same range.
   */
  repeatAction?: boolean;
  uuid?: string;
}
