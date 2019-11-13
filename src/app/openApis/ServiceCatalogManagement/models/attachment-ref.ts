/* tslint:disable */

/**
 * Attachment reference. An attachment complements the description of an element (for instance a product) through video, pictures
 */
export interface AttachmentRef {
  '@baseType'?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  '@referredType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * A narrative text describing the content of the attachment
   */
  description?: string;
  href?: string;
  id?: string;
  name?: string;

  /**
   * Link to the attachment media/content
   */
  url?: string;
  uuid?: string;
}
