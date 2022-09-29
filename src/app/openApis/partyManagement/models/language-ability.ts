/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * Ability of an individual to understand or converse in a language.
 */
export interface LanguageAbility {

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
   * Unique reference of the entity
   */
  href?: string;

  /**
   * A “true” value specifies whether the language is considered by the individual as his favourite one
   */
  isFavouriteLanguage?: boolean;

  /**
   * Language code (RFC 5646)
   */
  languageCode?: string;

  /**
   * Language name
   */
  languageName?: string;

  /**
   * Listening proficiency evaluated for this language
   */
  listeningProficiency?: string;

  /**
   * Reading proficiency evaluated for this language
   */
  readingProficiency?: string;

  /**
   * Speaking proficiency evaluated for this language
   */
  speakingProficiency?: string;
  uuid?: string;
  validFor?: TimePeriod;

  /**
   * Writing proficiency evaluated for this language
   */
  writingProficiency?: string;
}
