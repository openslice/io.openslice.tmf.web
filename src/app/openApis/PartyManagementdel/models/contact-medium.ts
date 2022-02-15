/* tslint:disable */
import { MediumCharacteristic } from './medium-characteristic';
import { TimePeriod } from './time-period';

/**
 * Indicates the contact medium that could be used to contact the party.
 */
export interface ContactMedium {

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
   * Any additional characteristic(s) of this contact medium
   */
  characteristic: MediumCharacteristic;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Type of the contact medium, such as: email address, telephone number, postal address
   */
  mediumType: string;

  /**
   * If true, indicates that is the preferred contact medium
   */
  preferred?: boolean;
  uuid?: string;

  /**
   * The time period that the contact medium is valid for
   */
  validFor?: TimePeriod;
}
