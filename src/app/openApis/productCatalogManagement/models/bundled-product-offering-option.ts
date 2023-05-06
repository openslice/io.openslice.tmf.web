/* tslint:disable */

/**
 * A set of numbers that specifies the lower and upper limits for a ProductOffering that can be procured as part of the related BundledProductOffering. Values can range from 0 to unbounded
 */
export interface BundledProductOfferingOption {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Default number of produc offereings that should be procured as part of the related BundledProductOffering
   */
  numberRelOfferDefault?: number;

  /**
   * lower limit for a product offering that can be procured as part of the related BundledProductOffering
   */
  numberRelOfferLowerLimit?: number;

  /**
   * upper limit for a product offering that can be procured as part of the related BundledProductOffering
   */
  numberRelOfferUpperLimit?: number;
  uuid?: string;
}
