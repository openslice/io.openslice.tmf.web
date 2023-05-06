/* tslint:disable */
import { BundledProductOfferingPriceRelationshipReq } from './bundled-product-offering-price-relationship-req';
import { ConstraintRefReq } from './constraint-ref-req';
import { PlaceRef } from './place-ref';
import { ProductOfferingPriceRelationshipReq } from './product-offering-price-relationship-req';
import { Money } from './money';
import { PricingLogicAlgorithmReq } from './pricing-logic-algorithm-req';
import { ProductSpecificationCharacteristicValueUseReq } from './product-specification-characteristic-value-use-req';
import { ProductOfferingTermReq } from './product-offering-term-req';
import { TaxItem } from './tax-item';
import { Quantity } from './quantity';
import { TimePeriod } from './time-period';

/**
 * Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (productOfferPriceAlteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment. Skipped properties: id,href,lastUpdate
 */
export interface ProductOfferingPriceUpdate {

  /**
   * the immediate base class type of this product offering
   */
  '@baseType'?: string;

  /**
   * hyperlink reference to the schema describing this resource
   */
  '@schemaLocation'?: string;

  /**
   * The class type of this Product offering
   */
  '@type'?: string;

  /**
   * this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship.
   */
  bundledPopRelationship?: Array<BundledProductOfferingPriceRelationshipReq>;

  /**
   * The Constraint resource represents a policy/rule applied to ProductOfferingPrice.
   */
  constraint?: Array<ConstraintRefReq>;

  /**
   * Description of the productOfferingPrice
   */
  description?: string;

  /**
   * A flag indicating if this ProductOfferingPrice is composite (bundle) or not
   */
  isBundle?: boolean;

  /**
   * the lifecycle status of this ProductOfferingPrice
   */
  lifecycleStatus?: string;

  /**
   * Name of the productOfferingPrice
   */
  name?: string;

  /**
   * Percentage to apply for ProductOfferPriceAlteration (Discount)
   */
  percentage?: number;

  /**
   * Place defines the places where the products are sold or delivered.
   */
  place?: Array<PlaceRef>;

  /**
   * Product Offering Prices related to this Product Offering Price, for example a price alteration such as allowance or discount
   */
  popRelationship?: Array<ProductOfferingPriceRelationshipReq>;

  /**
   * The amount of money that characterizes the price.
   */
  price?: Money;

  /**
   * A category that describes the price, such as recurring, discount, allowance, penalty, and so forth.
   */
  priceType?: string;

  /**
   * The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled behavior in SID). Some of the parameters of the interface definition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth).
   */
  pricingLogicAlgorithm?: Array<PricingLogicAlgorithmReq>;

  /**
   * A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics.
   */
  prodSpecCharValueUse?: Array<ProductSpecificationCharacteristicValueUseReq>;

  /**
   * A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods.
   */
  productOfferingTerm?: Array<ProductOfferingTermReq>;

  /**
   * the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable
   */
  recurringChargePeriodLength?: number;

  /**
   * The period to repeat the application of the price Could be month, week...
   */
  recurringChargePeriodType?: string;

  /**
   * An amount of money levied on the price of a Product by a legislative body.
   */
  tax?: Array<TaxItem>;

  /**
   * A number and unit representing how many (for instance 1 dozen) of an ProductOffering is available at the offered price. Its meaning depends on the priceType. It could be a price, a rate, or a discount.
   */
  unitOfMeasure?: Quantity;

  /**
   * The period for which the productOfferingPrice is valid
   */
  validFor?: TimePeriod;

  /**
   * ProductOffering version
   */
  version?: string;
}
