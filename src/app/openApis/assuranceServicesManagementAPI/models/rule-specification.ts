/* tslint:disable */
import { Action } from './action';
import { Condition } from './condition';
import { Scope } from './scope';

/**
 * A RuleSpecification is an entity that describes a rule to apply an action on certain conditions in the context of a service.
 */
export interface RuleSpecification {
  actions?: Array<Action>;
  condition?: Array<Condition>;

  /**
   * Description of this entity
   */
  description?: string;
  eventType?: string;

  /**
   * Name of the entity
   */
  name?: string;
  scope?: Scope;
  uuid?: string;
}
