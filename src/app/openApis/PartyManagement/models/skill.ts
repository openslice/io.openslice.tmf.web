/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * Skills evaluated for an individual with a level and possibly with a limited validity when an obsolescence is defined (Ex: the first-aid certificate first level is limited to one year and an update training is required each year to keep the level).
 */
export interface Skill {

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
   * A free text comment linked to the evaluation done
   */
  comment?: string;

  /**
   * Level of expertise in a skill evaluated for an individual
   */
  evaluatedLevel?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Code of the skill
   */
  skillCode?: string;

  /**
   * Name of the skill such as Java language,…
   */
  skillName?: string;
  uuid?: string;
  validFor?: TimePeriod;
}
