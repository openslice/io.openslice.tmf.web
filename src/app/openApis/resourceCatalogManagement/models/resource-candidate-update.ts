/* tslint:disable */
import { ResourceCategoryRef } from './resource-category-ref';
import { ResourceSpecificationRef } from './resource-specification-ref';
import { TimePeriod } from './time-period';

/**
 * ResourceCandidate is an entity that makes a resource specification available to a catalog. A ResourceCandidate and its associated resource specification may be published - made visible - in any number of resource catalogs, or in none. Skipped properties: id,href
 */
export interface ResourceCandidateUpdate {

  /**
   * The (immediate) base class type of this REST resource
   */
  '@baseType'?: string;

  /**
   * This field provides a link to the schema describing this REST resource
   */
  '@schemaLocation'?: string;

  /**
   * Class type of this REST resource
   */
  '@type'?: string;
  category?: Array<ResourceCategoryRef>;

  /**
   * Description of this REST resource
   */
  description?: string;

  /**
   * Date and time of the last update of this REST resource
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status of the resource candidate.
   */
  lifecycleStatus?: string;

  /**
   * Name given to this REST resource
   */
  name?: string;
  resourceSpecification?: ResourceSpecificationRef;

  /**
   * The period for which this REST resource is valid
   */
  validFor?: TimePeriod;

  /**
   * the version of resource candidate
   */
  version?: string;
}
