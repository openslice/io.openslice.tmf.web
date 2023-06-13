/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * A migration, substitution, dependency or exclusivity relationship between/among product specifications.
 */
export interface ProductSpecificationRelationship {

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

  /**
   * Unique identifier of the productSpecification
   */
  id?: string;

  /**
   * Type of relationship such as migration, substitution, dependency, exclusivity
   */
  relationshipType?: string;
  uuid?: string;

  /**
   * The period for which the productSpecificationRelationship is valid
   */
  validFor?: TimePeriod;
}
