/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * Configuration feature
 */
export interface FeatureRelationship {

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
   * Unique identifier of the target feature.
   */
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * This is the type of the feature relationship.
   */
  relationshipType: string;
  uuid?: string;
  validFor?: TimePeriod;
}
