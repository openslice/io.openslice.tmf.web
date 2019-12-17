/* tslint:disable */

/**
 * Place reference. Place defines the places where the products are sold or delivered.
 */
export interface Place {

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
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * Role of the place, such as: [home delivery], [shop retrieval])
   */
  role?: string;
  uuid?: string;
}
