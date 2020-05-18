/* tslint:disable */
import { ServiceCategoryRef } from './service-category-ref';
import { ServiceCandidateRef } from './service-candidate-ref';
import { TimePeriod } from './time-period';

/**
 * The (service) category resource is used to group service candidates in logical containers. Categories can contain other categories. Skipped properties: id,href,lastUpdate
 */
export interface ServiceCategoryUpdate {

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
   * List of child categories in the tree for in this category
   */
  category?: Array<ServiceCategoryRef>;

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
   * List of service candidates associated with this category
   */
  serviceCandidate?: Array<ServiceCandidateRef>;

  /**
   * The period for which the category is valid
   */
  validFor?: TimePeriod;

  /**
   * ServiceCategory version
   */
  version?: string;
}
