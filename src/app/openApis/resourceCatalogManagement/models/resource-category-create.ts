/* tslint:disable */
import { ResourceCategoryRef } from './resource-category-ref';
import { RelatedParty } from './related-party';
import { ResourceCandidateRef } from './resource-candidate-ref';
import { TimePeriod } from './time-period';

/**
 * The (resource) category resource is used to group resource candidates in logical containers. Categories can contain other categories. Skipped properties: id,href
 */
export interface ResourceCategoryCreate {

  /**
   * Immediate base class type of this category
   */
  '@baseType'?: string;

  /**
   * This field provides a link to the schema describing this REST resource
   */
  '@schemalLocation'?: string;

  /**
   * The (class) type of this category
   */
  '@type'?: string;
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
  relatedParty?: Array<RelatedParty>;
  resourceCandidate?: Array<ResourceCandidateRef>;

  /**
   * The period for which the category is valid
   */
  validFor?: TimePeriod;

  /**
   * Category version
   */
  version?: string;
}
