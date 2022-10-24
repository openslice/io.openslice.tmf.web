/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics.
 */
export interface ResourceSpecCharRelationship {

  /**
   * class type of target specification
   */
  '@type'?: string;

  /**
   * Hyperlink reference to the target specification
   */
  href?: string;

  /**
   * Unique identifier of the target specification
   */
  id?: string;

  /**
   * Name of the target characteristic
   */
  name?: string;
  relationshipType?: string;
  uuid?: string;

  /**
   * The period for which the object is valid
   */
  validFor?: TimePeriod;
}
