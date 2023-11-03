/* tslint:disable */

/**
 * Linked service order item to the one containing this attribute
 */
export interface ServiceOrderItemRelationship {

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
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier of a service order item
   */
  id: string;

  /**
   * The type of related order item, can be: dependency if the order item needs to be not started until another order item is complete
   */
  relationshipType: string;
  uuid?: string;
}
