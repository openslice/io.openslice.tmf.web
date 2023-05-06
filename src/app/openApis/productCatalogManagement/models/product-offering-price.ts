/* tslint:disable */
import { BundledProductOfferingPriceRelationshipRes } from './bundled-product-offering-price-relationship-res';
import { ConstraintRefRes } from './constraint-ref-res';
import { PlaceRef } from './place-ref';
import { ProductOfferingPriceRelationshipRes } from './product-offering-price-relationship-res';
import { Money } from './money';
import { PricingLogicAlgorithmRes } from './pricing-logic-algorithm-res';
import { ProductSpecificationCharacteristicValueUseRes } from './product-specification-characteristic-value-use-res';
import { ProductOfferingTermRes } from './product-offering-term-res';
import { TaxItem } from './tax-item';
import { Quantity } from './quantity';
import { TimePeriod } from './time-period';

/**
 * Is based on both the basic cost to develop and produce products and the enterprises policy on revenue targets. This price may be further revised through discounting (productOfferPriceAlteration). The price, applied for a productOffering may also be influenced by the productOfferingTerm, the customer selected, eg: a productOffering can be offered with multiple terms, like commitment periods for the contract. The price may be influenced by this productOfferingTerm. A productOffering may be cheaper with a 24 month commitment than with a 12 month commitment.
 */
export interface ProductOfferingPrice {

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
   * this object represents a bundle relationship from a bundle product offering price (parent) to a simple product offering price (child). A simple product offering price may participate in more than one bundle relationship.
   */
  bundledPopRelationship?: Array<BundledProductOfferingPriceRelationshipRes>;

  /**
   * The Constraint resource represents a policy/rule applied to ProductOfferingPrice.
   */
  constraint?: Array<ConstraintRefRes>;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * unique id of this resource
   */
  id?: string;

  /**
   * A flag indicating if this ProductOfferingPrice is composite (bundle) or not
   */
  isBundle?: boolean;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Name of the entity
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
  popRelationship?: Array<ProductOfferingPriceRelationshipRes>;

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
  pricingLogicAlgorithm?: Array<PricingLogicAlgorithmRes>;

  /**
   * A use of the ProductSpecificationCharacteristicValue by a ProductOfferingPrice to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering and ProcuctOfferingPrice level. The list of values in ProductSpecificationCharacteristicValueUse is a strict subset of the list of values as defined in the corresponding product specification characteristics.
   */
  prodSpecCharValueUse?: Array<ProductSpecificationCharacteristicValueUseRes>;

  /**
   * A list of conditions under which a ProductOfferingPrice is made available to Customers. For instance, a Product Offering Price can be offered with multiple commitment periods.
   */
  productOfferingTerm?: Array<ProductOfferingTermRes>;

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
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
