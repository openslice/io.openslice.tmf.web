/* tslint:disable */
import { AgreementRef } from './agreement-ref';
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { BundledProductOfferingReq } from './bundled-product-offering-req';
import { CategoryRef } from './category-ref';
import { ChannelRefReq } from './channel-ref-req';
import { MarketSegmentRefReq } from './market-segment-ref-req';
import { PlaceRef } from './place-ref';
import { ProductSpecificationCharacteristicValueUseReq } from './product-specification-characteristic-value-use-req';
import { ProductOfferingPriceRefReq } from './product-offering-price-ref-req';
import { ProductOfferingTermReq } from './product-offering-term-req';
import { ProductSpecificationRefReq } from './product-specification-ref-req';
import { ResourceCandidateRefReq } from './resource-candidate-ref-req';
import { ServiceCandidateRefReq } from './service-candidate-ref-req';
import { SLARefReq } from './slaref-req';
import { TimePeriod } from './time-period';

/**
 * Represents entities that are orderable from the provider of the catalog, this resource includes pricing information. Skipped properties: id,href,lastUpdate
 */
export interface ProductOfferingUpdate {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
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
  bundledProductOffering?: Array<BundledProductOfferingReq>;

  /**
   * The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.
   */
  category?: Array<CategoryRef>;

  /**
   * The channel defines the channel for selling product offerings.
   */
  channel?: Array<ChannelRefReq>;

  /**
   * Description of the productOffering
   */
  description?: string;

  /**
   * isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true).
   */
  isBundle?: boolean;

  /**
   * A flag indicating if this product offer can be sold stand-alone for sale or not. If this flag is false it indicates that the offer can only be sold within a bundle.
   */
  isSellable?: boolean;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.
   */
  marketSegment?: Array<MarketSegmentRefReq>;

  /**
   * Name of the productOffering
   */
  name?: string;

  /**
   * Place defines the places where the products are sold or delivered.
   */
  place?: Array<PlaceRef>;

  /**
   * A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics.
   */
  prodSpecCharValueUse?: Array<ProductSpecificationCharacteristicValueUseReq>;

  /**
   * An amount, usually of money, that is asked for or allowed when a ProductOffering is bought, rented, or leased. The price is valid for a defined period of time and may not represent the actual price paid by a customer.
   */
  productOfferingPrice?: Array<ProductOfferingPriceRefReq>;

  /**
   * A condition under which a ProductOffering is made available to Customers. For instance, a productOffering can be offered with multiple commitment periods.
   */
  productOfferingTerm?: Array<ProductOfferingTermReq>;

  /**
   * A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.
   */
  productSpecification?: ProductSpecificationRefReq;

  /**
   * A resource candidate is an entity that makes a ResourceSpecification available to a catalog.
   */
  resourceCandidate?: ResourceCandidateRefReq;

  /**
   * ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.
   */
  serviceCandidate?: ServiceCandidateRefReq;

  /**
   * A service level agreement (SLA) is a type of agreement that represents a formal negotiated agreement between two parties designed to create a common understanding about products, services, priorities, responsibilities, and so forth. The SLA is a set of appropriate procedures and targets formally or informally agreed between parties in order to achieve and maintain specified Quality of Service.
   */
  serviceLevelAgreement?: SLARefReq;

  /**
   * A string providing a complementary information on the value of the lifecycle status attribute.
   */
  statusReason?: string;

  /**
   * The period for which the productOffering is valid
   */
  validFor?: TimePeriod;

  /**
   * ProductOffering version
   */
  version?: string;
}
