/* tslint:disable */
import { ServiceCategoryRef } from './service-category-ref';
import { ServiceCandidateRef } from './service-candidate-ref';
import { TimePeriod } from './time-period';

/**
 * The (service) category resource is used to group service candidates in logical containers. Categories can contain other categories.
 */
export interface ServiceCategory {

  /**
   * If true, this Boolean indicates that the category is a root of categories
   */
  isRoot?: boolean;

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;
  "@type"?: string;

  /**
   * List of child categories in the tree for in this category
   */
  category?: Array<ServiceCategoryRef>;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier of the Entity
   */
  id?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;

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
   * Unique identifier of the parent category
   */
  parentId?: string;

  /**
   * List of service candidates associated with this category
   */
  serviceCandidate?: Array<ServiceCandidateRef>;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
