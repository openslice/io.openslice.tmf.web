/* tslint:disable */

/**
 * Service reference, for when Service is used by other entities
 */
export interface ServiceRef {

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

  /**
   * Id of the service
   */
  id: string;

  /**
   * Name of the entity
   */
  name?: string;
  uuid?: string;
}
