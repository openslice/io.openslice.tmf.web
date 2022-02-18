/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * A substitution, dependency or exclusivity relationship between/among service specifications.
 */
export interface ServiceTestSpecRelationshipReq {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  atReferredType?: string;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Hyperlink reference
   */
  href?: string;
  id?: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;
  lifecycleStatusEnum?: 'ACTIVE' | 'IN_DESIGN' | 'IN_STUDY' | 'IN_TEST' | 'LAUNCHED' | 'OBSOLETE' | 'REJECTED' | 'RETIRED';

  /**
   * Name of the related entity.
   */
  name?: string;

  /**
   * Type of relationship such as substitution, dependency, exclusivity
   */
  relationshipType: string;

  /**
   * The association role for this service test specification
   */
  role?: string;
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
