/* tslint:disable */
import { ResourceCategoryRef } from './resource-category-ref';
import { ResourceSpecificationRef } from './resource-specification-ref';
import { TimePeriod } from './time-period';

/**
 * ResourceCandidate is an entity that makes a resource specification available to a catalog. A ResourceCandidate and its associated resource specification may be published - made visible - in any number of resource catalogs, or in none.
 */
export interface ResourceCandidate {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * The category specification implied by this candidate
   */
  category?: Array<ResourceCategoryRef>;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier of this REST resource
   */
  id?: string;

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
   * The resource specification implied by this candidate
   */
  resourceSpecification?: ResourceSpecificationRef;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
