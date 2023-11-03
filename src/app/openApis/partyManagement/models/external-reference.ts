/* tslint:disable */

/**
 * External reference of the individual or reference in other system
 */
export interface ExternalReference {

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
   * Type of the external reference
   */
  externalReferenceType?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Name of the entity
   */
  name?: string;
  uuid?: string;
}
