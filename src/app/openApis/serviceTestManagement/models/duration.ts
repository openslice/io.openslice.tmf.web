/* tslint:disable */

/**
 * A time interval in a given unit of time
 */
export interface Duration {

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
   * Time interval (number of seconds, minutes, hours, etc.)
   */
  amount?: number;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unit of time (seconds, minutes, hours, etc.)
   */
  units?: string;
  uuid?: string;
}
