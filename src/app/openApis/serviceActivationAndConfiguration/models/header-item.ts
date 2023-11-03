/* tslint:disable */

/**
 * An item typically included in a request or response
 */
export interface HeaderItem {
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
   * The name of the header item, e.g. locale
   */
  name: string;

  /**
   * The value of the header item, e.g. en-us
   */
  value: string;
}
