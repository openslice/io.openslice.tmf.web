/* tslint:disable */
import { FeatureReq } from './feature-req';
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { Note } from './note';
import { RelatedPlaceRefOrValue } from './related-place-ref-or-value';
import { RelatedParty } from './related-party';
import { CharacteristicReq } from './characteristic-req';
import { ResourceRelationshipReq } from './resource-relationship-req';
import { ResourceSpecificationRef } from './resource-specification-ref';

/**
 * Resource is an abstract entity that describes the common set of attributes shared by all concrete resources. The polymorphic attributes @type, @schemaLocation & @referredType are related to the Resource entity and not the related ResourceRefOrValue class itself
 */
export interface ResourceRefOrValueReq {

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
   * Configuration features
   */
  activationFeature?: Array<FeatureReq>;
  administrativeState?: 'locked' | 'shutdown' | 'unlocked';
  attachment?: Array<AttachmentRefOrValue>;

  /**
   * Category of the concrete resource. e.g Gold, Silver for MSISDN concrete resource
   */
  category?: string;

  /**
   * free-text description of the resource
   */
  description?: string;

  /**
   * A date time( DateTime). The date till the resource is operating
   */
  endOperatingDate?: string;

  /**
   * The URI for the object itself.
   */
  href: string;
  id?: string;

  /**
   * A string used to give a name to the resource
   */
  name?: string;
  note?: Array<Note>;
  operationalState?: 'disable' | 'enable';
  place?: RelatedPlaceRefOrValue;
  relatedParty?: Array<RelatedParty>;
  resourceCharacteristic?: Array<CharacteristicReq>;
  resourceRelationship?: Array<ResourceRelationshipReq>;
  resourceSpecification?: ResourceSpecificationRef;
  resourceStatus?: 'alarm' | 'available' | 'reserved' | 'standby' | 'suspended' | 'unknown';

  /**
   * A field that identifies the specific version of an instance of a resource.
   */
  resourceVersion?: string;

  /**
   * A date time( DateTime). The date from which the resource is operating
   */
  startOperatingDate?: string;
  usageState?: 'active' | 'busy' | 'idle';
  uuid?: string;
}
