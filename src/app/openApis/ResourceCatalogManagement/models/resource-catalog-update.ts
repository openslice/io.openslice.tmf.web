/* tslint:disable */
import { ResourceCategoryRef } from './resource-category-ref';
import { RelatedParty } from './related-party';
import { TimePeriod } from './time-period';

/**
 * The root entity for resource catalog management. A resource catalog is a group of resource specifications made available through resource candidates that an organization provides to the consumers (internal consumers like its employees or B2B customers or B2C customers).  A resource catalog typically includes name, description and time period that is valid for. It will have a list of ResourceCandidate catalog items. A ResourceCandidate is an entity that makes a ResourceSpecification available to a catalog. A ResourceCandidate and its associated ResourceSpecification may be "published" - made visible -in any number of ResourceCatalogs, or in none. Skipped properties: id,href,lastUpdate
 */
export interface ResourceCatalogUpdate {

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
   * List of resource categories associated with this catalog
   */
  category?: Array<ResourceCategoryRef>;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Name of the resource catalog
   */
  name?: string;

  /**
   * List of parties or party roles related to this category
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * The period for which the resource catalog is valid
   */
  validFor?: TimePeriod;

  /**
   * ResourceCatalog version
   */
  version?: string;
}
