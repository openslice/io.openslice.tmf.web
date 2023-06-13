/* tslint:disable */
import { ProductOfferingPrice } from './product-offering-price';

/**
 * The event data structure
 */
export interface ProductOfferingPriceDeleteEventPayload {

  /**
   * The involved resource data for the event
   */
  productOfferingPrice?: ProductOfferingPrice;
}
