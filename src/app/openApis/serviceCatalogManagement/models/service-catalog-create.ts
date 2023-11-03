/* tslint:disable */
import { ServiceCategoryRef } from './service-category-ref';
import { RelatedParty } from './related-party';
import { TimePeriod } from './time-period';

/**
 * The root entity for service catalog management. A service catalog is a group of service specifications made available through service candidates that an organization provides to the consumers (internal consumers like its employees or B2B customers or B2C customers).  A service catalog typically includes name, description and time period that is valid for. It will have a list of ServiceCandidate catalog items. A ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog. A ServiceCandidate and its associated ServiceSpecification may be "published" - made visible -in any number of ServiceCatalogs, or in none. Skipped properties: id,href
 */
export interface ServiceCatalogCreate {

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
   * List of service categories associated with this catalog
   */
  category?: Array<ServiceCategoryRef>;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Name of the service catalog
   */
  name?: string;

  /**
   * List of parties or party roles related to this category
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * The period for which the service catalog is valid
   */
  validFor?: TimePeriod;

  /**
   * ServiceCatalog version
   */
  version?: string;
}
