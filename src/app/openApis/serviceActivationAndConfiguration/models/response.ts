/* tslint:disable */
import { HeaderItem } from './header-item';

/**
 * A response to a request
 */
export interface Response {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * The body of the response. For example for an HTTP response might contain HTML for rendering.
   */
  body: string;

  /**
   * Items included in the header of the response. For example for an HTTP response might contain negotiated locale.
   */
  header: Array<HeaderItem>;

  /**
   * The status of the response. For example for an HTTP response would be codes such as 200, 400, etc.
   */
  statusCode?: string;
}
