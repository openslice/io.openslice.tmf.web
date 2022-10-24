/* tslint:disable */
export interface ResourceOrderRef {
  '@baseType'?: string;
  '@referredType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  atReferredType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * Hyperlink to access the related Resource Order
   */
  href?: string;

  /**
   * The unique identifier of the related resource order
   */
  id: string;
}
