/* tslint:disable */
import { AttachmentRef } from './attachment-ref';
import { RelatedParty } from './related-party';
import { ResourceSpecificationRef } from './resource-specification-ref';
import { ResourceLevelSpecificationRef } from './resource-level-specification-ref';
import { ResourceSpecCharacteristic } from './resource-spec-characteristic';
import { ResourceSpecRelationship } from './resource-spec-relationship';
import { TargetResourceSchema } from './target-resource-schema';
import { TimePeriod } from './time-period';

/**
 * ResourceSpecification is a class that offers characteristics to describe a type of resource. Functionally, it acts as a template by which Resources may be instantiated. By sharing the same  specification, these resources would therefore share the same set of characteristics. Skipped properties: id,href
 */
export interface ResourceSpecificationCreate {

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
   * A narrative that explains in detail what the resource specification is
   */
  description?: string;

  /**
   * isBundle determines whether a ResourceSpecification represents a single ResourceSpecification (false), or a bundle of ResourceSpecification (true).
   */
  isBundle?: boolean;

  /**
   * Date and time of the last update of the resource specification
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status of the resource specification
   */
  lifecycleStatus?: string;

  /**
   * Name of the resource specification
   */
  name?: string;

  /**
   * A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity.
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * A list of resource specification references (ResourceSpecificationRef [*]). The ResourceSpecification is required for a resource specification with type ResourceFacingResourceSpecification (RFSS).
   */
  resourceSpecification?: Array<ResourceSpecificationRef>;

  /**
   * A list of resource level specifications related to this resource specification, and which will need to be satisifiable for corresponding resource instances; e.g. Gold, Platinum
   */
  resourceLevelSpecification?: Array<ResourceLevelSpecificationRef>;

  /**
   * A list of resource spec characteristics (ResourceSpecCharacteristic [*]). This class represents the key features of this resource specification.
   */
  resourceSpecCharacteristic?: Array<ResourceSpecCharacteristic>;

  /**
   * A list of resource specifications related to this specification, e.g. migration, substitution, dependency or exclusivity relationship
   */
  resourceSpecRelationship?: Array<ResourceSpecRelationship>;

  /**
   * A target resource schema reference (TargetResourceSchemaRef). The reference object to the schema and type of target resource which is described by resource specification.
   */
  targetResourceSchema?: TargetResourceSchema;

  /**
   * The period for which the resource specification is valid
   */
  validFor?: TimePeriod;

  /**
   * Resource specification version
   */
  version?: string;
}
