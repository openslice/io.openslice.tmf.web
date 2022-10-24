/* tslint:disable */
import { ResourceOrderRef } from './resource-order-ref';

/**
 * Request for cancellation an existing resource order Skipped properties: id,href,state,effectiveCancellationDate
 */
export interface CancelResourceOrderCreate {
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
   * Date when the submitter wants the order to be cancelled
   */
  requestedCancellationDate?: string;
  resourceOrder: ResourceOrderRef;
}
