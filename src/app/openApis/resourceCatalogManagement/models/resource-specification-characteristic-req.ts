/* tslint:disable */
import { ResourceSpecCharRelationship } from './resource-spec-char-relationship';
import { ResourceSpecificationCharacteristicValue } from './resource-specification-characteristic-value';
import { TimePeriod } from './time-period';

/**
 * This class defines the characteristic features of a resource specification. Every ResourceSpecification has a variety of important attributes, methods, constraints, and relationships, which distinguish a resource specification from other resource specifications.
 */
export interface ResourceSpecificationCharacteristicReq {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A link to the schema describing this characteristic specification
   */
  '@schemaLocation'?: string;

  /**
   * (Class) type of the ResourceSpecificationCharacteristic
   */
  '@type'?: string;

  /**
   * This (optional) field provides a link to the schema describing the value type
   */
  '@valueSchemaLocation'?: string;

  /**
   * If true, the Boolean indicates that the ResourceSpecificationCharacteristic is configurable
   */
  configurable?: boolean;

  /**
   * A narrative that explains the CharacteristicSpecification.
   */
  description?: string;

  /**
   * An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource.
   */
  extensible?: boolean;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * An indicator that specifies if a value is unique for the specification. Possible values are; "unique while value is in effect" and "unique whether value is in effect or not"
   */
  isUnique?: boolean;

  /**
   * The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality.
   */
  maxCardinality?: number;

  /**
   * The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality.
   */
  minCardinality?: number;

  /**
   * A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications.
   */
  name?: string;

  /**
   * A rule or principle represented in regular expression used to derive the value of a characteristic value.
   */
  regex?: string;
  resourceSpecCharRelationship?: Array<ResourceSpecCharRelationship>;
  resourceSpecificationCharacteristicValue?: Array<ResourceSpecificationCharacteristicValue>;
  uuid?: string;

  /**
   * The period of time for which a characteristic is applicable.
   */
  validFor?: TimePeriod;

  /**
   * A kind of value that the characteristic can take on, such as numeric, text and so forth
   */
  valueType?: string;
}
