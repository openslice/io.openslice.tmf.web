/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * Configuration feature
 */
export interface FeatureSpecificationRelationshipReq {

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
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique identifier of the target feature specification.
   */
  featureId?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

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
   * This is the name of the target feature specification.
   */
  name: string;

  /**
   * This is the type of the feature specification relationship.
   */
  relationshipType: string;

  /**
   * Hyperlink reference to the resource specification containing the target feature
   */
  resourceSpecificationHref?: string;

  /**
   * Unique identifier of the resource specification containing the target feature
   */
  resourceSpecificationId?: string;
  uuid?: string;
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
