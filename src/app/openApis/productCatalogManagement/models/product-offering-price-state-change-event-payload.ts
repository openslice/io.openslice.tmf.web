/* tslint:disable */
import { ProductOfferingPrice } from './product-offering-price';

/**
 * The event data structure
 */
export interface ProductOfferingPriceStateChangeEventPayload {

  /**
   * The involved resource data for the event
   */
  productOfferingPrice?: ProductOfferingPrice;
}
