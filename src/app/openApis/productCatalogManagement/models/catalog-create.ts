/* tslint:disable */
import { CategoryRef } from './category-ref';
import { RelatedParty } from './related-party';
import { TimePeriod } from './time-period';

/**
 * A collection of Product Offerings, intended for a specific DistributionChannel, enhanced with additional information such as SLA parameters, invoicing and shipping details Skipped properties: id,href
 */
export interface CatalogCreate {

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
   * Indicates if the catalog is a product, service or resource catalog
   */
  catalogType?: string;

  /**
   * List of root categories contained in this catalog
   */
  category?: Array<CategoryRef>;

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
   * Name of the catalog
   */
  name?: string;

  /**
   * List of parties involved in this catalog
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * The period for which the catalog is valid
   */
  validFor?: TimePeriod;

  /**
   * Catalog version
   */
  version?: string;
}
