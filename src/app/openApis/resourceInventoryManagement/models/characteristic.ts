/* tslint:disable */
import { CharacteristicRelationship } from './characteristic-relationship';
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
  characteristicRelationship?: Array<CharacteristicRelationship>;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Name of the characteristic
   */
  name: string;
  uuid?: string;
  value: Any;

  /**
   * Data type of the value of the characteristic
   */
  valueType?: string;
}
