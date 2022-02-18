/* tslint:disable */

/**
 * Another Characteristic that is related to the current Characteristic;
 */
export interface CharacteristicRelationship {

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
   * The type of relationship
   */
  relationshipType?: string;
  uuid?: string;
}
