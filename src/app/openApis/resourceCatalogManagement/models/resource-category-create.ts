/* tslint:disable */
import { ResourceCategoryRef } from './resource-category-ref';
import { ResourceCandidateRef } from './resource-candidate-ref';
import { TimePeriod } from './time-period';

/**
 * The (resource) category resource is used to group resource candidates in logical containers. Categories can contain other categories. Skipped properties: id,href
 */
export interface ResourceCategoryCreate {

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
  category?: Array<ResourceCategoryRef>;

  /**
   * Description of the category
   */
  description?: string;

  /**
   * If true, this Boolean indicates that the category is a root of categories
   */
  isRoot?: boolean;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

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
   * List of resource candidates associated with this category
   */
  resourceCandidate?: Array<ResourceCandidateRef>;

  /**
   * The period for which the category is valid
   */
  validFor?: TimePeriod;

  /**
   * ResourceCategory version
   */
  version?: string;
}
