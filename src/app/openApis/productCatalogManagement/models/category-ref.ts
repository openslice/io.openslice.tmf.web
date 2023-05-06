/* tslint:disable */

/**
 * The category for grouping recommendations
 */
export interface CategoryRef {

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
   * Unique identifier of a related entity.
   */
  id: string;

  /**
   * Name of the entity
   */
  name?: string;
  version?: string;
}
