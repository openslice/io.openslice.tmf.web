/* tslint:disable */

/**
 * Resource Specification reference: The ResourceSpecification is required to realize a ProductSpecification.
 */
export interface ResourceSpecificationRef {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;
  uuid?: string;

  /**
   * Resource specification version
   */
  version?: string;
}
