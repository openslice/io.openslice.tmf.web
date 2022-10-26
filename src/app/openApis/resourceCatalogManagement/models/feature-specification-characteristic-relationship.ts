/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * An aggregation, migration, substitution, dependency or exclusivity relationship between/among FeatureSpecificationCharacteristics.
 */
export interface FeatureSpecificationCharacteristicRelationship {

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
   * Unique identifier of the characteristic within the the target feature specification
   */
  characteristicId?: string;

  /**
   * Unique identifier of the target feature specification within the resource specification.
   */
  featureId?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Name of the target characteristic
   */
  name?: string;

  /**
   * Type of relationship such as aggregation, migration, substitution, dependency, exclusivity
   */
  relationshipType?: string;

  /**
   * Hyperlink reference to the resource specification containing the target feature and feature characteristic
   */
  resourceSpecificationHref?: string;

  /**
   * Unique identifier of the resource specification containing the target feature and feature characteristic
   */
  resourceSpecificationId?: string;
  uuid?: string;
  validFor?: TimePeriod;
}
