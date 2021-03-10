/* tslint:disable */
import { Action } from './action';
import { Condition } from './condition';
import { Scope } from './scope';

/**
 * A RuleSpecification is an entity that describes a rule to apply an action on certain conditions in the context of a service.
 */
export interface RuleSpecificationCreate {
  actions?: Array<Action>;
  condition?: Array<Condition>;
  description?: string;
  eventType?: string;
  name?: string;
  scope?: Scope;
}
