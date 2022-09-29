/* tslint:disable */

/**
 * A Condition is an entity that describes the condition that must be tru in order to apply an action.
 */
export interface Condition {
  booleanOperator?: string;
  eventAttributeName?: string;
  eventAttributeValue?: string;
  operator?: string;
  uuid?: string;
}
