/* tslint:disable */
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { TimePeriod } from './time-period';

/**
 * Represents our registration of information used as proof of identity by an individual (passport, national identity card, drivers license, social security number, birth certificate)
 */
export interface IndividualIdentification {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;
  attachment?: AttachmentRefOrValue;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Identifier
   */
  identificationId?: string;

  /**
   * Identification type (passport, national identity card, drivers license, social security number, birth certificate)
   */
  identificationType?: string;

  /**
   * Authority which has issued the identifier, such as: social security, town hall
   */
  issuingAuthority?: string;

  /**
   * Date at which the identifier was issued
   */
  issuingDate?: string;
  uuid?: string;

  /**
   * The period for which the identification information is valid.
   */
  validFor?: TimePeriod;
}
