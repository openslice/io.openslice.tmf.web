/* tslint:disable */
import { ProductOfferingRef } from './product-offering-ref';
import { CategoryRef } from './category-ref';
import { TimePeriod } from './time-period';

/**
 * The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates. Skipped properties: id,href,lastUpdate
 */
export interface CategoryUpdate {

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
   * Description of the category
   */
  description?: string;

  /**
   * If true, this Boolean indicates that the category is a root of categories
   */
  isRoot?: boolean;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Name of the category
   */
  name?: string;

  /**
   * Unique identifier of the parent category
   */
  parentId?: string;

  /**
   * A product offering represents entities that are orderable from the provider of the catalog, this resource includes pricing information.
   */
  productOffering?: Array<ProductOfferingRef>;

  /**
   * The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other (sub-)categories and/or product offerings.
   */
  subCategory?: Array<CategoryRef>;

  /**
   * The period for which the category is valid
   */
  validFor?: TimePeriod;

  /**
   * Category version
   */
  version?: string;
}
