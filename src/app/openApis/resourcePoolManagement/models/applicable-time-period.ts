/* tslint:disable */

/**
 * The period of time for which Capacity or CapacityDemand applies.
 */
export interface ApplicableTimePeriod {

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;
  "@type"?: string;

  /**
   * A day or days representing when the schedule is applicable. For example 2, 3 represent Monday and Tuesday.
   */
  dayOfWeek?: string;

  /**
   * The period of time for which the schedule is applicable.  Instance values are mutually exclusive with daysOfWeek values.
   */
  endDateTime?: string;

  /**
   * The period of time for which the schedule is applicable.  Instance values are mutually exclusive with daysOfWeek values.
   */
  fromDateTime?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * An indicator that specifies the inclusion or exclusion of the from and to DateTime attributes.  Possible values are "open", "closed", "closedBottom" and "closedTop".
   */
  rangeInterval?: string;
  uuid?: string;
}
