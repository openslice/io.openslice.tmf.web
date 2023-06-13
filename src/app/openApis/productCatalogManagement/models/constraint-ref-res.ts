/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * Constraint reference. The Constraint resource represents a policy/rule applied to an entity or entity spec.
 */
export interface ConstraintRefRes {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * The (class) type of the referred constraint
   */
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * reference id to the target constraint
   */
  id: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Name of the entity
   */
  name?: string;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
