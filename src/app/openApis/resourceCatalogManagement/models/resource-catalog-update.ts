/* tslint:disable */
import { ResourceCategoryRef } from './resource-category-ref';
import { RelatedParty } from './related-party';
import { TimePeriod } from './time-period';

/**
 * The root entity for resource catalog management. A resource catalog is a group of resource specifications made available through resource candidates that an organization provides to the consumers (internal consumers like its employees or B2B customers or B2C customers). Skipped properties: id,href
 */
export interface ResourceCatalogUpdate {

  /**
   * Indicates<b> </b>the base (class) type of this REST resource
   */
  '@baseType'?: string;

  /**
   * This field provides a link to the schema describing this REST resource
   */
  '@schemaLocation'?: string;

  /**
   * Indicates the (class) type of catalog. For resource catalogs, this will be 'ResourceCatalog'.
   */
  '@type'?: string;
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
   * Name of the catalog
   */
  name?: string;
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
