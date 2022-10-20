/* tslint:disable */

/**
 * Place reference. PlaceRef defines the placeRefs where the products are sold or delivered.
 */
export interface PlaceRef {

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  "@referredType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;
  "@type"?: string;

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
  uuid?: string;
}
