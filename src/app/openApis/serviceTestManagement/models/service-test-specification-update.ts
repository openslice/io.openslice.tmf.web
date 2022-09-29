/* tslint:disable */
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { ConstraintRef } from './constraint-ref';
import { EntitySpecificationRelationshipReq } from './entity-specification-relationship-req';
import { RelatedParty } from './related-party';
import { ServiceSpecificationRef } from './service-specification-ref';
import { ServiceTestSpecRelationshipReq } from './service-test-spec-relationship-req';
import { CharacteristicSpecificationReq } from './characteristic-specification-req';
import { TargetEntitySchema } from './target-entity-schema';
import { TestMeasureDefinition } from './test-measure-definition';

/**
 * The service test specification describes the service test in terms of parameters to be configured and  measures to be taken. Skipped properties: id,href,validFor
 */
export interface ServiceTestSpecificationUpdate {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class Extensible name
   */
  atType?: string;

  /**
   * Attachments that may be of relevance to this specification, such as picture, document, media
   */
  attachment?: Array<AttachmentRefOrValue>;

  /**
   * This is a list of constraint references applied to this specification
   */
  constraint?: Array<ConstraintRef>;

  /**
   * Description of a service test specification.
   */
  description?: string;

  /**
   * Relationship to another entity specification, might be dependency, substitution, etc.
   */
  entitySpecRelationship?: Array<EntitySpecificationRelationshipReq>;

  /**
   * isBundle determines whether an EntitySpecification represents a single EntitySpecification (false), or a bundle of EntitySpecifications (true).
   */
  isBundle?: boolean;

  /**
   * Date and time of the last update of this REST resource
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status of this catalog item
   */
  lifecycleStatus?: string;

  /**
   * Name given to this REST resource
   */
  name?: string;

  /**
   * Parties who manage or otherwise have an interest in this entity specification
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * The related service specification may relate to more than one service specification.
   */
  relatedServiceSpecification?: Array<ServiceSpecificationRef>;

  /**
   * A list of service test specifications related to this specification e.g. dependency, substitution
   */
  serviceTestSpecRelationship?: Array<ServiceTestSpecRelationshipReq>;

  /**
   * List of characteristics that the entity can take
   */
  specCharacteristic?: Array<CharacteristicSpecificationReq>;
  targetEntitySchema?: TargetEntitySchema;

  /**
   * A list of definitions for the measurements for the test defined by this specification
   */
  testMeasureDefinition?: Array<TestMeasureDefinition>;

  /**
   * Entity specification version
   */
  version?: string;
}
