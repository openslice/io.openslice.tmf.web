/* tslint:disable */
import { AppointmentRef } from './appointment-ref';
import { ResourceOrderItemRelationship } from './resource-order-item-relationship';
import { ResourceRefOrValueRes } from './resource-ref-or-value-res';
import { ResourceSpecificationRef } from './resource-specification-ref';

/**
 * An identified part of the order. A resource order is decomposed into one or more order items.
 */
export interface ResourceOrderItemRes {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Can be "add" / "modify" / "no_change"/ "delete"
   */
  action?: string;
  appointment?: AppointmentRef;

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
   * Identifier of the line item (generally it is a sequence number 01, 02, 03, ...)
   */
  id?: string;
  orderItemRelationship?: Array<ResourceOrderItemRelationship>;

  /**
   * Quantity ordered
   */
  quantity?: number;
  resource?: ResourceRefOrValueRes;
  resourceSpecification?: ResourceSpecificationRef;

  /**
   * State of the order item : described in the state machine diagram
   */
  state?: 'ACKNOWLEDGED' | 'CANCELLED' | 'COMPLETED' | 'FAILED' | 'HELD' | 'INITIAL' | 'INPROGRESS' | 'PARTIAL' | 'PENDING' | 'REJECTED';
}
