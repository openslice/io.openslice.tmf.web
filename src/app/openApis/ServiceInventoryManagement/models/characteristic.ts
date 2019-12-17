/* tslint:disable */
import { Any } from './any';

/**
 * Describes a given characteristic of an object or entity through a name/value pair.
 */
export interface Characteristic {

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
   * Name of the entity
   */
  name?: string;
  uuid?: string;

  /**
   * The value of the characteristic
   */
  value: Any;

  /**
   * Data type of the value of the characteristic
   */
  valueType?: string;
}
