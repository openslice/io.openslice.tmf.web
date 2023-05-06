/* tslint:disable */
import { ProductOffering } from './product-offering';

/**
 * The event data structure
 */
export interface ProductOfferingCreateEventPayload {

  /**
   * The involved resource data for the event
   */
  productOffering?: ProductOffering;
}
