/* tslint:disable */
import { Quantity } from './quantity';
import { TimePeriod } from './time-period';

/**
 * An attachment by value or by reference. An attachment complements the description of an element, for example through a document, a video, a picture.
 */
export interface AttachmentRefOrValue {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Attachment type such as video, picture
   */
  attachmentType?: string;

  /**
   * The actual contents of the attachment object, if embedded, encoded as base64
   */
  content?: string;

  /**
   * A narrative text describing the content of the attachment
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier for this particular attachment
   */
  id?: string;

  /**
   * Attachment mime type such as extension file for video, picture and document
   */
  mimeType?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * The size of the attachment.
   */
  size?: Quantity;

  /**
   * Uniform Resource Locator, is a web page address (a subset of URI)
   */
  url?: string;
  uuid?: string;

  /**
   * The period of time for which the attachment is valid
   */
  validFor?: TimePeriod;
}
