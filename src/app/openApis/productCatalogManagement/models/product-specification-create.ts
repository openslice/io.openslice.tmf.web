/* tslint:disable */
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { BundledProductSpecificationReq } from './bundled-product-specification-req';
import { ProductSpecificationCharacteristicReq } from './product-specification-characteristic-req';
import { ProductSpecificationRelationship } from './product-specification-relationship';
import { RelatedParty } from './related-party';
import { ResourceSpecificationRef } from './resource-specification-ref';
import { ServiceSpecificationRef } from './service-specification-ref';
import { TargetProductSchema } from './target-product-schema';
import { TimePeriod } from './time-period';

/**
 * Is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role. Skipped properties: id,href
 */
export interface ProductSpecificationCreate {

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
   * Complements the description of an element (for instance a product) through video, pictures...
   */
  attachment?: Array<AttachmentRefOrValue>;

  /**
   * The manufacturer or trademark of the specification
   */
  brand?: string;

  /**
   * A type of ProductSpecification that belongs to a grouping of ProductSpecifications made available to the market. It inherits of all attributes of ProductSpecification.
   */
  bundledProductSpecification?: Array<BundledProductSpecificationReq>;

  /**
   * A narrative that explains in detail what the product specification is
   */
  description?: string;

  /**
   * isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true).
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
   * Name of the product specification
   */
  name?: string;

  /**
   * An identification number assigned to uniquely identity the specification
   */
  productNumber?: string;

  /**
   * A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process.
   */
  productSpecCharacteristic?: Array<ProductSpecificationCharacteristicReq>;

  /**
   * A migration, substitution, dependency or exclusivity relationship between/among product specifications.
   */
  productSpecificationRelationship?: Array<ProductSpecificationRelationship>;

  /**
   * A related party defines party or party role linked to a specific entity.
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * The ResourceSpecification is required to realize a ProductSpecification.
   */
  resourceSpecification?: Array<ResourceSpecificationRef>;

  /**
   * ServiceSpecification(s) required to realize a ProductSpecification.
   */
  serviceSpecification?: Array<ServiceSpecificationRef>;

  /**
   * A target product schema reference. The reference object to the schema and type of target product which is described by product specification.
   */
  targetProductSchema?: TargetProductSchema;

  /**
   * The period for which the product specification is valid
   */
  validFor?: TimePeriod;

  /**
   * Product specification version
   */
  version?: string;
}
