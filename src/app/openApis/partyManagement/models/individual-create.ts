/* tslint:disable */
import { ContactMedium } from './contact-medium';
import { PartyCreditProfile } from './party-credit-profile';
import { Disability } from './disability';
import { ExternalReference } from './external-reference';
import { IndividualIdentification } from './individual-identification';
import { LanguageAbility } from './language-ability';
import { OtherNameIndividual } from './other-name-individual';
import { Characteristic } from './characteristic';
import { RelatedParty } from './related-party';
import { Skill } from './skill';
import { TaxExemptionCertificate } from './tax-exemption-certificate';

/**
 * Individual represents a single human being (a man, woman or child). The individual can be a customer, an employee or any other person that the organization needs to store information about. Skipped properties: id,href
 */
export interface IndividualCreate {

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
   * e.g. Baron, Graf, Earl,…
   */
  aristocraticTitle?: string;

  /**
   * Birth date
   */
  birthDate?: string;
  contactMedium?: Array<ContactMedium>;

  /**
   * Country where the individual was born
   */
  countryOfBirth?: string;
  creditRating?: Array<PartyCreditProfile>;

  /**
   * Date of death
   */
  deathDate?: string;
  disability?: Array<Disability>;
  externalReference?: Array<ExternalReference>;

  /**
   * Contains the non-chosen or inherited name. Also known as last name in the Western context
   */
  familyName?: string;

  /**
   * Family name prefix
   */
  familyNamePrefix?: string;

  /**
   * A fully formatted name in one string with all of its pieces in their proper place and all of the necessary punctuation. Useful for specific contexts (Chinese, Japanese, Korean,…)
   */
  formattedName?: string;

  /**
   * Full name flatten (first, middle, and last names)
   */
  fullName?: string;

  /**
   * Gender
   */
  gender?: string;

  /**
   * e.g.. Sr, Jr, III (the third),…
   */
  generation?: string;

  /**
   * First name of the individual
   */
  givenName?: string;
  individualIdentification?: Array<IndividualIdentification>;
  languageAbility?: Array<LanguageAbility>;

  /**
   * Legal name or birth name (name one has for official purposes)
   */
  legalName?: string;

  /**
   * Temporary current location od the individual (may be used if the individual has approved its sharing)
   */
  location?: string;

  /**
   * Marital status (married, divorced, widow ...)
   */
  maritalStatus?: string;

  /**
   * Middles name or initial
   */
  middleName?: string;

  /**
   * Nationality
   */
  nationality?: string;
  otherName?: Array<OtherNameIndividual>;
  partyCharacteristic?: Array<Characteristic>;

  /**
   * Reference to the place where the individual was born
   */
  placeOfBirth?: string;

  /**
   * Contains the chosen name by which the individual prefers to be addressed. Note: This name may be a name other than a given name, such as a nickname
   */
  preferredGivenName?: string;
  relatedParty?: Array<RelatedParty>;
  skill?: Array<Skill>;

  /**
   * Status of the individual
   */
  status?: 'initialized' | 'validated' | 'deceaded';
  taxExemptionCertificate?: Array<TaxExemptionCertificate>;

  /**
   * Useful for titles (aristocratic, social,...) Pr, Dr, Sir, ...
   */
  title?: string;
}
