/* tslint:disable */
import { AgreementRef } from './agreement-ref';
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { BundledProductOfferingRes } from './bundled-product-offering-res';
import { CategoryRef } from './category-ref';
import { ChannelRefRes } from './channel-ref-res';
import { MarketSegmentRefRes } from './market-segment-ref-res';
import { PlaceRef } from './place-ref';
import { ProductSpecificationCharacteristicValueUseRes } from './product-specification-characteristic-value-use-res';
import { ProductOfferingPriceRefRes } from './product-offering-price-ref-res';
import { ProductOfferingTermRes } from './product-offering-term-res';
import { ProductSpecificationRefRes } from './product-specification-ref-res';
import { ResourceCandidateRefRes } from './resource-candidate-ref-res';
import { ServiceCandidateRefRes } from './service-candidate-ref-res';
import { SLARefRes } from './slaref-res';
import { TimePeriod } from './time-period';

/**
 * Represents entities that are orderable from the provider of the catalog, this resource includes pricing information.
 */
export interface ProductOffering {

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
   * An agreement represents a contract or arrangement, either written or verbal and sometimes enforceable by law, such as a service level agreement or a customer price agreement. An agreement involves a number of other business entities, such as products, services, and resources and/or their specifications.
   */
  agreement?: Array<AgreementRef>;

  /**
   * Complements the description of an element (for instance a product) through video, pictures...
   */
  attachment?: Array<AttachmentRefOrValue>;

  /**
   * A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering.
   */
  bundledProductOffering?: Array<BundledProductOfferingRes>;

  /**
   * The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.
   */
  category?: Array<CategoryRef>;

  /**
   * The channel defines the channel for selling product offerings.
   */
  channel?: Array<ChannelRefRes>;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier of the productOffering
   */
  id?: string;

  /**
   * isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true).
   */
  isBundle?: boolean;

  /**
   * A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle.
   */
  isSellable?: boolean;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.
   */
  marketSegment?: Array<MarketSegmentRefRes>;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * Place defines the places where the products are sold or delivered.
   */
  place?: Array<PlaceRef>;

  /**
   * A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics.
   */
  prodSpecCharValueUse?: Array<ProductSpecificationCharacteristicValueUseRes>;

  /**
   * An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer.
   */
  productOfferingPrice?: Array<ProductOfferingPriceRefRes>;

  /**
   * A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods.
   */
  productOfferingTerm?: Array<ProductOfferingTermRes>;

  /**
   * A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.
   */
  productSpecification?: ProductSpecificationRefRes;

  /**
   * A resource candidate is an entity that makes a ResourceSpecification available to a catalog.
   */
  resourceCandidate?: ResourceCandidateRefRes;

  /**
   * ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.
   */
  serviceCandidate?: ServiceCandidateRefRes;

  /**
   * A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.
   */
  serviceLevelAgreement?: SLARefRes;

  /**
   * A string providing a complementary information on the value of the lifecycle status attribute.
   */
  statusReason?: string;
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
