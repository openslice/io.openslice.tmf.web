/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * An aggregation, migration, substitution, dependency or exclusivity relationship between/among serviceSpecCharacteristics.
 */
export interface ServiceSpecCharRelationship {

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
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier of the Entity
   */
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * Type of relationship such as aggregation, migration, substitution, dependency, exclusivity
   */
  relationshipType?: string;

  /**
   * The association role for this service specification
   */
  role?: string;

  /**
   * The period for which the serviceSpecCharRelationship is valid
   */
  validFor?: TimePeriod;
}
