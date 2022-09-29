/* tslint:disable */
import { AttachmentRefOrValue } from './attachment-ref-or-value';
import { TaxDefinition } from './tax-definition';
import { TimePeriod } from './time-period';

/**
 * A tax exemption certificate represents a tax exemption granted to a party (individual or organization) by a tax jurisdiction which may be a city, state, country,... An exemption has a certificate identifier (received from the jurisdiction that levied the tax) and a validity period. An exemption is per tax types and determines for each type of tax what portion of the tax is exempted (partial by percentage or complete) via the tax definition.
 */
export interface TaxExemptionCertificate {

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
  attachment?: AttachmentRefOrValue;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier of the certificate of the tax exemption
   */
  id?: string;
  taxDefinition?: Array<TaxDefinition>;
  uuid?: string;
  validFor?: TimePeriod;
}
