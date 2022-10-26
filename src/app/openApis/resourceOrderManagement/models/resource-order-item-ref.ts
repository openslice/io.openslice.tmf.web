/* tslint:disable */
export interface ResourceOrderItemRef {
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
   * Identifier of the line item
   */
  itemId?: string;

  /**
   * Link to the order to which this item belongs to
   */
  resourceOrderHref?: string;

  /**
   * Identifier of the order that this item belongs to
   */
  resourceOrderId?: string;
}
