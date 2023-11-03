/* tslint:disable */

/**
 * The reference object to the schema and type of target service which is described by service specification
 */
export interface TargetServiceSchema {

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
  uuid?: string;
}
