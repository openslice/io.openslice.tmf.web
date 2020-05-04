/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * Lack or inadequate strength or ability.
 */
export interface Disability {

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
   * Code of the disability
   */
  disabilityCode?: string;

  /**
   * Name of the disability
   */
  disabilityName?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  uuid?: string;
  validFor?: TimePeriod;
}
