/* tslint:disable */
import { AttachmentRef } from './attachment-ref';
import { RelatedParty } from './related-party';
import { ResourceSpecificationRef } from './resource-specification-ref';
import { ServiceLevelSpecificationRef } from './service-level-specification-ref';
import { ServiceSpecCharacteristic } from './service-spec-characteristic';
import { ServiceSpecRelationship } from './service-spec-relationship';
import { TargetServiceSchema } from './target-service-schema';
import { TimePeriod } from './time-period';

/**
 * ServiceSpecification is a class that offers characteristics to describe a type of service. Functionally, it acts as a template by which Services may be instantiated. By sharing the same  specification, these services would therefore share the same set of characteristics. Skipped properties: id,href,lastUpdate
 */
export interface ServiceSpecificationUpdate {

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
   * A list of attachments (Attachment [*]). Complements the description of the specification through video, pictures...
   */
  attachment?: Array<AttachmentRef>;

  /**
   * A narrative that explains in detail what the service specification is
   */
  description?: string;

  /**
   * isBundle determines whether a ServiceSpecification represents a single ServiceSpecification (false), or a bundle of ServiceSpecification (true).
   */
  isBundle?: boolean;

  /**
   * Used to indicate the current lifecycle status of the service specification
   */
  lifecycleStatus?: string;

  /**
   * Name of the service specification
   */
  name?: string;

  /**
   * A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity.
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * A list of resource specification references (ResourceSpecificationRef [*]). The ResourceSpecification is required for a service specification with type ResourceFacingServiceSpecification (RFSS).
   */
  resourceSpecification?: Array<ResourceSpecificationRef>;

  /**
   * A list of service level specifications related to this service specification, and which will need to be satisifiable for corresponding service instances; e.g. Gold, Platinum
   */
  serviceLevelSpecification?: Array<ServiceLevelSpecificationRef>;

  /**
   * A list of service spec characteristics (ServiceSpecCharacteristic [*]). This class represents the key features of this service specification.
   */
  serviceSpecCharacteristic?: Array<ServiceSpecCharacteristic>;

  /**
   * A list of service specifications related to this specification, e.g. migration, substitution, dependency or exclusivity relationship
   */
  serviceSpecRelationship?: Array<ServiceSpecRelationship>;

  /**
   * A target service schema reference (TargetServiceSchemaRef). The reference object to the schema and type of target service which is described by service specification.
   */
  targetServiceSchema?: TargetServiceSchema;

  /**
   * The period for which the service specification is valid
   */
  validFor?: TimePeriod;

  /**
   * Service specification version
   */
  version?: string;
}
