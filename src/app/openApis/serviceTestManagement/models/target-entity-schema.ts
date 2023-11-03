/* tslint:disable */

/**
 * The reference object to the schema and type of target entity which is described by a specification
 */
export interface TargetEntitySchema {

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
   * This field provides a link to the schema describing the target entity
   */
  atSchemaLocation: string;

  /**
   * Class type of the target entity
   */
  atType: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  uuid?: string;
}
