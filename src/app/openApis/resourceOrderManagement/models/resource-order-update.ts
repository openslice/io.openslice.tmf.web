/* tslint:disable */
import { ExternalId } from './external-id';
import { Note } from './note';
import { ResourceOrderItemReq } from './resource-order-item-req';
import { RelatedParty } from './related-party';

/**
 * A Resource Order is a request to provision a set of Resources (logical and physical) triggered by the request to provision a Service through a Service Order Skipped properties: id,href,completionDate,orderDate
 */
export interface ResourceOrderUpdate {
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
   * Used to categorize the order from a business perspective that can be useful for the OM system.
   */
  category?: string;

  /**
   * free-text description of the Resource Order
   */
  description?: string;

  /**
   * Date when the order was completed
   */
  expectedCompletionDate?: string;

  /**
   * DEPRECATED: Use externalReference Instead. ID given by the consumer (to facilitate searches afterwards)
   */
  externalId?: string;
  externalReference?: Array<ExternalId>;

  /**
   * A string used to give a name to the Resource Order
   */
  name?: string;
  note?: Array<Note>;
  orderItem?: Array<ResourceOrderItemReq>;

  /**
   * Name of the Resource Order type
   */
  orderType?: string;

  /**
   * A way that can be used by consumers to prioritize orders in OM system (from 0 to 4 : 0 is the highest priority, and 4 the lowest)
   */
  priority?: number;
  relatedParty?: Array<RelatedParty>;

  /**
   * Requested delivery date from the requestor perspective
   */
  requestedCompletionDate?: string;

  /**
   * Order start date wished by the requestor
   */
  requestedStartDate?: string;

  /**
   * Date when the order was actually started
   */
  startDate?: string;

  /**
   * The life cycle state of the resource.
   */
  state?: string;
}
