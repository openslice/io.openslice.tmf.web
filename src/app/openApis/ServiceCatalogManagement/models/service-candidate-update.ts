/* tslint:disable */
import { ServiceCategoryRef } from './service-category-ref';
import { ServiceSpecificationRef } from './service-specification-ref';
import { TimePeriod } from './time-period';

/**
 * ServiceCandidate is an entity that makes a service specification available to a catalog. A ServiceCandidate and its associated service specification may be published - made visible - in any number of service catalogs, or in none. One service specification can be composed of other service specifications. Skipped properties: id,href,lastUpdate
 */
export interface ServiceCandidateUpdate {

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
  category?: Array<ServiceCategoryRef>;

  /**
   * Description of this REST resource
   */
  description?: string;

  /**
   * Used to indicate the current lifecycle status of the service candidate.
   */
  lifecycleStatus?: string;

  /**
   * Name given to this REST resource
   */
  name?: string;

  /**
   * The service specification implied by this candidate
   */
  serviceSpecification?: ServiceSpecificationRef;

  /**
   * The period for which this REST resource is valid
   */
  validFor?: TimePeriod;

  /**
   * the version of service candidate
   */
  version?: string;
}
