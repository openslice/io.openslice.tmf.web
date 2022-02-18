/* tslint:disable */

/**
 * reference to an AssociationSpecification object
 */
export interface AssociationSpecificationRef {

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
   * Hyperlink reference
   */
  href?: string;

  /**
   * unique identifier
   */
  id: string;

  /**
   * Name of the related entity.
   */
  name?: string;
  uuid?: string;
}
