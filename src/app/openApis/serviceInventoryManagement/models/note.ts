/* tslint:disable */

/**
 * Extra information about a given entity
 */
export interface Note {

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
   * Author of the note
   */
  author?: string;

  /**
   * Date of the note
   */
  date?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Describes the system from which the action related to this note was done
   */
  system?: string;

  /**
   * Text of the note
   */
  text?: string;
  uuid?: string;
}
