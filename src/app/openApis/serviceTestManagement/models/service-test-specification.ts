/* tslint:disable */
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { ConstraintRef } from './constraint-ref';
import { EntitySpecificationRelationshipRes } from './entity-specification-relationship-res';
import { RelatedParty } from './related-party';
import { ServiceSpecificationRef } from './service-specification-ref';
import { ServiceTestSpecRelationshipRes } from './service-test-spec-relationship-res';
import { CharacteristicSpecificationRes } from './characteristic-specification-res';
import { TargetEntitySchema } from './target-entity-schema';
import { TestMeasureDefinition } from './test-measure-definition';
import { TimePeriod } from './time-period';

/**
 * The service test specification describes the service test in terms of parameters to be configured and  measures to be taken.
 */
export interface ServiceTestSpecification {

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
   * Attachments that may be of relevance to this specification, such as picture, document, media
   */
  attachment?: Array<AttachmentRefOrValue>;

  /**
   * This is a list of constraint references applied to this specification
   */
  constraint?: Array<ConstraintRef>;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Relationship to another entity specification, might be dependency, substitution, etc.
   */
  entitySpecRelationship?: Array<EntitySpecificationRelationshipRes>;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * isBundle determines whether an EntitySpecification represents a single EntitySpecification (false), or a bundle of EntitySpecifications (true).
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
  serviceTestSpecRelationship?: Array<ServiceTestSpecRelationshipRes>;

  /**
   * List of characteristics that the entity can take
   */
  specCharacteristic?: Array<CharacteristicSpecificationRes>;
  targetEntitySchema?: TargetEntitySchema;

  /**
   * A list of definitions for the measurements for the test defined by this specification
   */
  testMeasureDefinition?: Array<TestMeasureDefinition>;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity specification version
   */
  version?: string;
}
