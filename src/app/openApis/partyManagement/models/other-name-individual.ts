/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * Keeps track of other names, for example the old name of a woman before marriage or an artist name.
 */
export interface OtherNameIndividual {

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
   * e.g. Baron, Graf, Earl,…
   */
  aristocraticTitle?: string;

  /**
   * Contains the non-chosen or inherited name. Also known as last name in the Western context
   */
  familyName?: string;

  /**
   * Family name prefix
   */
  familyNamePrefix?: string;

  /**
   * . A fully formatted name in one string with all of its pieces in their proper place and all of the necessary punctuation. Useful for specific contexts (Chinese, Japanese, Korean,…)
   */
  formattedName?: string;

  /**
   * Full name flatten (first, middle, and last names)
   */
  fullName?: string;

  /**
   * e.g. Sr, Jr…
   */
  generation?: string;

  /**
   * First name
   */
  givenName?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Legal name or birth name (name one has for official purposes)
   */
  legalName?: string;

  /**
   * Middle name or initial
   */
  middleName?: string;

  /**
   * Contains the chosen name by which the person prefers to be addressed. Note: This name may be a name other than a given name, such as a nickname
   */
  preferredGivenName?: string;

  /**
   * Use for titles (aristrocatic, social, ...): Pr, Dr, Sir,....
   */
  title?: string;
  uuid?: string;
  validFor?: TimePeriod;
}
