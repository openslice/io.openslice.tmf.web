/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * An individual might be evaluated for its worthiness and this evaluation might be based on a credit rating given by a credit agency.
 */
export interface PartyCreditProfile {

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
   * Name of the credit agency giving the score
   */
  creditAgencyName?: string;

  /**
   * Type of the credit agency giving the score
   */
  creditAgencyType?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Reference corresponding to the credit rating
   */
  ratingReference?: string;

  /**
   * A measure of a party’s creditworthiness calculated on the basis of a combination of factors such as their income and credit history
   */
  ratingScore?: number;
  uuid?: string;
  validFor?: TimePeriod;
}
