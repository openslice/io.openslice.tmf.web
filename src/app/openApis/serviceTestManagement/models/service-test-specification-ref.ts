/* tslint:disable */

/**
 * The service test specification used by the service test.
 */
export interface ServiceTestSpecificationRef {

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
   * Hyperlink to access a service test specification.
   */
  href?: string;
  id?: string;
  uuid?: string;

  /**
   * Version of a service test specification
   */
  version?: string;
}
