/* tslint:disable */
import { ResourceOrderItemRef } from './resource-order-item-ref';
export interface ResourceOrderItemRelationship {
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
  orderItem?: ResourceOrderItemRef;

  /**
   * Type of the order item relationship
   */
  relationshipType?: string;
}
