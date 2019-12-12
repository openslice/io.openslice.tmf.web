/* tslint:disable */

/**
 * Linked service order to the one containing this attribute
 */
export interface ServiceOrderRelationship {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * The entity type of the related order
   */
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * The id of the related order
   */
  id: string;

  /**
   * The type of related order, such as: [dependency] if the order needs to be [not started] until another order item is complete (a service order in this case) or [cross-ref] to keep track of the source order (a productOrder)
   */
  relationshipType?: string;
  uuid?: string;
}
