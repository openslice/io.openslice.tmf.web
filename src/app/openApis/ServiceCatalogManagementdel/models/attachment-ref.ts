/* tslint:disable */

/**
 * Attachment reference. An attachment complements the description of an element (for instance a product) through video, pictures
 */
export interface AttachmentRef {

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
   * A narrative text describing the content of the attachment
   */
  description?: string;

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
   * Link to the attachment media/content
   */
  url?: string;
  uuid?: string;
}
