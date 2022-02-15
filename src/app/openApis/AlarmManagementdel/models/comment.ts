/* tslint:disable */

/**
 * Indicates the comments entered on the alarm.
 */
export interface Comment {

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
   * Indicates the text of the comment.
   */
  comment?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Indicates the system identifier on which the client set the comment.
   */
  systemId?: string;

  /**
   * Indicates the time commenting the alarm
   */
  time?: string;

  /**
   * Indicates the user commenting the alarm.
   */
  userId?: string;
  uuid?: string;
}
