/* tslint:disable */
import { ServiceSpecificationRef } from './service-specification-ref';
import { TimePeriod } from './time-period';

/**
 * A LCM RuleSpecification is an entity that describes a LCM rule to apply during the LCM of a service.
 */
export interface LCMRuleSpecification {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;
  code?: string;
  content?: string;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;
  lcmrulephase?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Name of the entity
   */
  name?: string;

    /**
   * priority of the entity
   */
  priority?: number;

  /**
   * List of service specs associated with this rule
   */
  serviceSpecs?: Array<ServiceSpecificationRef>;
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
