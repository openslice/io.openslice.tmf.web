/* tslint:disable */
import { HeaderItem } from './header-item';

/**
 * A response to a request
 */
export interface Request {
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
   * The body of the request. For example for an HTTP request might contain content of a form .
   */
  body: string;

  /**
   * Items included in the header of the request. For example for an HTTP request might contain requested locale, basic authentication.
   */
  header: Array<HeaderItem>;

  /**
   * The protocol of the request, e.g. http
   */
  method?: string;

  /**
   * The target of the request, e.g. a URL for an HTTP request
   */
  to?: string;
}
