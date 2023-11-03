/* tslint:disable */
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { FeatureSpecificationReq } from './feature-specification-req';
import { RelatedParty } from './related-party';
import { ResourceSpecificationCharacteristicReq } from './resource-specification-characteristic-req';
import { ResourceSpecificationRelationshipReq } from './resource-specification-relationship-req';
import { TargetResourceSchema } from './target-resource-schema';
import { TimePeriod } from './time-period';

/**
 * Resources are physical or non-physical components (or some combination of these) within an enterprise's infrastructure or inventory. They are typically consumed or used by services (for example a physical port assigned to a service) or contribute to the realization of a Product (for example, a SIM card). They can be drawn from the Application, Computing and Network domains, and include, for example, Network Elements, software, IT systems, content and information, and technology components. A ResourceSpecification is an abstract base class for representing a generic means for implementing a particular type of Resource. In essence, a ResourceSpecification defines the common attributes and relationships of a set of related Resources, while Resource defines a specific instance that is based on a particular ResourceSpecification. Skipped properties: id,href
 */
export interface ResourceSpecificationUpdate {

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
   * Complements the description of an element (for instance a resource) through video, pictures ...
   */
  attachment?: Array<AttachmentRefOrValue>;

  /**
   * Category of the target resource like NetworkConnectivity, PhysicalLinks, Generic, L2Network and so on.
   */
  category?: string;

  /**
   * Description of this REST resource
   */
  description?: string;

  /**
   * A list of Features for this specification.
   */
  featureSpecification?: Array<FeatureSpecificationReq>;

  /**
   * A flag indicates that if this resource specification is a bundled specification (true) or single (false).
   */
  isBundle?: boolean;

  /**
   * Used to indicate the current lifecycle status of the resource specification
   */
  lifecycleStatus?: string;

  /**
   * Name given to this REST resource
   */
  name?: string;

  /**
   * A related party defines party or party role linked to a specific entity.
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * A characteristic quality or distinctive feature of a ResourceSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process.
   */
  resourceSpecCharacteristic?: Array<ResourceSpecificationCharacteristicReq>;

  /**
   * A migration, substitution, dependency or exclusivity relationship between/among resource specifications.
   */
  resourceSpecRelationship?: Array<ResourceSpecificationRelationshipReq>;
  targetResourceSchema?: TargetResourceSchema;
  validFor?: TimePeriod;

  /**
   * Resource Specification version
   */
  version?: string;
}
