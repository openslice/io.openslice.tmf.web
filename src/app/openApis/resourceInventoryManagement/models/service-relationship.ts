/* tslint:disable */
import { ServiceRef } from './service-ref';

/**
 * Describes links with services of the same category (useful for bundled services)
 */
export interface ServiceRelationship {

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
   * The type of relationship (e.g. depends on, enables)
   */
  relationshipType: string;

  /**
   * The service being referred to
   */
  service: ServiceRef;
  uuid?: string;
}
