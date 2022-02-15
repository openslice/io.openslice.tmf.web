/* tslint:disable */

/**
 * Identifies the managed object instance associated with the alarm.
 */
export interface AlarmedObject {

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
  uuid?: string;
}
