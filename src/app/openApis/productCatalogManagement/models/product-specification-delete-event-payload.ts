/* tslint:disable */
import { ProductSpecification } from './product-specification';

/**
 * The event data structure
 */
export interface ProductSpecificationDeleteEventPayload {

  /**
   * The involved resource data for the event
   */
  productSpecification?: ProductSpecification;
}
