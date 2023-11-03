/* tslint:disable */

/**
 * Related Entity reference. A related place defines a place described by reference or by value linked to a specific entity. The polymorphic attributes '@type', '@schemaLocation' & '@referredType' are related to the place entity and not the RelatedPlaceRefOrValue class itself
 */
export interface RelatedPlaceRefOrValue {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  atReferredType?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;
  role: string;
  uuid?: string;
}
