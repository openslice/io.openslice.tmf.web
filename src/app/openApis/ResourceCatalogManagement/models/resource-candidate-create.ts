/* tslint:disable */
import { ResourceCategoryRef } from './resource-category-ref';
import { ResourceSpecificationRef } from './resource-specification-ref';
import { TimePeriod } from './time-period';

/**
 * ResourceCandidate is an entity that makes a resource specification available to a catalog. A ResourceCandidate and its associated resource specification may be published - made visible - in any number of resource catalogs, or in none. One resource specification can be composed of other resource specifications. Skipped properties: id,href
 */
export interface ResourceCandidateCreate {

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
   * List of categories for this candidate
   */
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

  /**
   * The resource specification implied by this candidate
   */
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
