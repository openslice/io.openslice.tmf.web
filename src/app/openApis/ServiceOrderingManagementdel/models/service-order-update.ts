/* tslint:disable */
import { Note } from './note';
import { ServiceOrderItem } from './service-order-item';
import { ServiceOrderRelationship } from './service-order-relationship';
import { RelatedParty } from './related-party';

/**
 * Skipped properties: id,href,externalId,priority,state,orderDate,completionDate,orderItem
 */
export interface ServiceOrderUpdate {

  /**
   * Contact attached to the order to send back information regarding this order
   */
  notificationContact?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  '@type'?: string;

  /**
   * Used to categorize the order, useful for the OM system, such as: Broadband, TVOption
   */
  category?: string;

  /**
   * A free-text description of the service order
   */
  description?: string;

  /**
   * Expected delivery date amended by the provider
   */
  expectedCompletionDate?: string;

  /**
   * Extra-information about the order; e.g. useful to add extra delivery information that could be useful for a human process
   */
  note?: Array<Note>;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  orderItem?: Array<ServiceOrderItem>;

  /**
   * A list of service orders related to this order (e.g. prerequisite, dependent on)
   */
  orderRelationship?: Array<ServiceOrderRelationship>;

  /**
   * A list of parties which are involved in this order and the role they are playing
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * Requested delivery date from the requestors perspective
   */
  requestedCompletionDate?: string;

  /**
   * Order start date wished by the requestor
   */
  requestedStartDate?: string;

  /**
   * Date when the order was started for processing
   */
  startDate?: string;
  state?: 'INITIAL' | 'ACKNOWLEDGED' | 'REJECTED' | 'PENDING' | 'HELD' | 'INPROGRESS' | 'CANCELLED' | 'COMPLETED' | 'FAILED' | 'PARTIAL';
}
