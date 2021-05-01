/* tslint:disable */
import { ActionParam } from './action-param';

/**
 * An ActionSpecification is an entity that describes an action to perform on certain entities.
 */
export interface ActionSpecificationCreate {

  /**
   * Description of the entity
   */
  description?: string;

  /**
   * The name of the entity
   */
  name?: string;
  params?: Array<ActionParam>;
}
