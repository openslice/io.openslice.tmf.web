/* tslint:disable */
import { AppointmentRef } from './appointment-ref';
import { ServiceOrderItemRelationship } from './service-order-item-relationship';
import { ServiceRestriction } from './service-restriction';
export interface ServiceOrderItem {

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;
  '@type'?: string;

  /**
   * The action to be carried out on the Service. Can be: add, modify, delete, noChange
   */
  action: 'add' | 'modify' | 'delete' | 'noChange';

  /**
   * An appointment that was set up with a related party for this order item
   */
  appointment?: AppointmentRef;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  id?: string;

  /**
   * A list of order items related to this order item
   */
  orderItemRelationship?: Array<ServiceOrderItemRelationship>;

  /**
   * The Service to be acted on by the order item
   */
  service: ServiceRestriction;

  /**
   * State of the order item: described in the state machine diagram. This is the requested state.
   */
  state?: 'INITIAL' | 'ACKNOWLEDGED' | 'REJECTED' | 'PENDING' | 'HELD' | 'INPROGRESS' | 'CANCELLED' | 'COMPLETED' | 'FAILED' | 'PARTIAL';
  uuid?: string;
}
