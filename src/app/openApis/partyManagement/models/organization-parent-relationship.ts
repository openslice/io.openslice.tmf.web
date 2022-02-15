/* tslint:disable */
import { OrganizationRef } from './organization-ref';

/**
 * Parent references of an organization in a structure of organizations.
 */
export interface OrganizationParentRelationship {

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
   * Name of the entity
   */
  name?: string;
  organization?: OrganizationRef;

  /**
   * Type of the relationship. Could be juridical, hierarchical, geographical, functional for example.
   */
  relationshipType?: string;
  uuid?: string;
}
