/* tslint:disable */
import { Feature } from './feature';
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { Note } from './note';
import { RelatedPlaceRefOrValue } from './related-place-ref-or-value';
import { RelatedParty } from './related-party';
import { Characteristic } from './characteristic';
import { ResourceRelationship } from './resource-relationship';
import { ResourceSpecificationRef } from './resource-specification-ref';

/**
 * Resource is an abstract entity that describes the common set of attributes shared by all concrete resources (e.g. TPE, EQUIPMENT) in the inventory.
 */
export interface Resource0 {

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
  activationFeature?: Array<Feature>;
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
  resourceCharacteristic?: Array<Characteristic>;
  resourceRelationship?: Array<ResourceRelationship>;
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
