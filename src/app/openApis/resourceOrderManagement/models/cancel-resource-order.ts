/* tslint:disable */
import { ResourceOrderRef } from './resource-order-ref';

/**
 * Request for cancellation an existing resource order
 */
export interface CancelResourceOrder {
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
   * Reason why the order is cancelled.
   */
  cancellationReason?: string;

  /**
   * Date when the order is cancelled.
   */
  effectiveCancellationDate?: string;

  /**
   * Hyperlink to access the cancellation request
   */
  href?: string;

  /**
   * id of the cancellation request (this is not an order id)
   */
  id?: string;

  /**
   * Date when the submitter wants the order to be cancelled
   */
  requestedCancellationDate?: string;
  resourceOrder: ResourceOrderRef;
  state?: 'acknowledged' | 'done' | 'inProgress' | 'terminatedWithError';
}
