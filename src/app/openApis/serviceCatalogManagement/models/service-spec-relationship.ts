/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * A migration, substitution, dependency or exclusivity relationship between/among service specifications.
 */
export interface ServiceSpecRelationship {

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
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * Type of relationship such as migration, substitution, dependency, exclusivity
   */
  relationshipType?: string;

  /**
   * The association role for this service specification
   */
  role?: string;
  uuid?: string;

  /**
   * The period for which the serviceSpecRelationship is valid
   */
  validFor?: TimePeriod;
}
