/* tslint:disable */
import { ActionParam } from './action-param';

/**
 * An ActionSpecification is an entity that describes an action to perform on certain entities.
 */
export interface ActionSpecification {
  description?: string;
  name?: string;
  params?: Array<ActionParam>;
  uuid?: string;
}
