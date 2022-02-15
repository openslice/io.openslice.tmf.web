/* tslint:disable */
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { TimePeriod } from './time-period';

/**
 * Represents our registration of information used as proof of identity by an organization
 */
export interface OrganizationIdentification {

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
   * Type of identification information used to identify the company in a country or internationally
   */
  identificationType?: string;

  /**
   * Authority which has issued the identifier (chamber of commerce...)
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
