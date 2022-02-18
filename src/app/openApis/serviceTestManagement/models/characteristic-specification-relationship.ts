/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * An aggregation, migration, substitution, dependency or exclusivity relationship between/among Characteristic specifications. The specification characteristic is embedded within the specification whose ID and href are in this entity, and identified by its ID.
 */
export interface CharacteristicSpecificationRelationship {

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
   * Unique identifier of the characteristic within the specification
   */
  characteristicSpecificationId?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * Hyperlink reference to the parent specification containing the target characteristic
   */
  parentSpecificationHref?: string;

  /**
   * Unique identifier of the parent specification containing the target characteristic
   */
  parentSpecificationId?: string;

  /**
   * Type of relationship such as aggregation, migration, substitution, dependency, exclusivity
   */
  relationshipType?: string;
  uuid?: string;
  validFor?: TimePeriod;
}
