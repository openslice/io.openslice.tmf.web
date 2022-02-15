/* tslint:disable */
import { ContactMedium } from './contact-medium';
import { PartyCreditProfile } from './party-credit-profile';
import { TimePeriod } from './time-period';
import { ExternalReference } from './external-reference';
import { OrganizationChildRelationship } from './organization-child-relationship';
import { OrganizationIdentification } from './organization-identification';
import { OrganizationParentRelationship } from './organization-parent-relationship';
import { OtherNameOrganization } from './other-name-organization';
import { Characteristic } from './characteristic';
import { RelatedParty } from './related-party';
import { TaxExemptionCertificate } from './tax-exemption-certificate';

/**
 * Organization represents a group of people identified by shared interests or purpose. Examples include business, department and enterprise. Because of the complex nature of many businesses, both organizations and organization units are represented by the same data. Skipped properties: id,href
 */
export interface OrganizationCreate {

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
  contactMedium?: Array<ContactMedium>;
  creditRating?: Array<PartyCreditProfile>;
  existsDuring?: TimePeriod;
  externalReference?: Array<ExternalReference>;

  /**
   * If value is true, the organization is the head office
   */
  isHeadOffice?: boolean;

  /**
   * If value is true, the organization is a legal entity known by a national referential.
   */
  isLegalEntity?: boolean;

  /**
   * Organization name (department name for example)
   */
  name?: string;

  /**
   * Type of the name : Co, Inc, Ltd,…
   */
  nameType?: string;
  organizationChildRelationship?: Array<OrganizationChildRelationship>;
  organizationIdentification?: Array<OrganizationIdentification>;
  organizationParentRelationship?: OrganizationParentRelationship;

  /**
   * Type of Organization (company, department...)
   */
  organizationType?: string;
  otherName?: Array<OtherNameOrganization>;
  partyCharacteristic?: Array<Characteristic>;
  relatedParty?: Array<RelatedParty>;

  /**
   * Status of the organization
   */
  status?: 'initialized' | 'validated' | 'closed';
  taxExemptionCertificate?: Array<TaxExemptionCertificate>;

  /**
   * Name that the organization (unit) trades under
   */
  tradingName?: string;
}
