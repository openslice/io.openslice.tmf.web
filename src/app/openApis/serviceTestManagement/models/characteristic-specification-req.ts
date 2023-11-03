/* tslint:disable */
import { CharacteristicSpecificationRelationship } from './characteristic-specification-relationship';
import { CharacteristicValueSpecification } from './characteristic-value-specification';
import { TimePeriod } from './time-period';

/**
 * This class defines a characteristic specification.
 */
export interface CharacteristicSpecificationReq {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;
  '@valueSchemaLocation'?: string;

  /**
   * This (optional) field provides a link to the schema describing the value type.
   */
  atValueSchemaLocation?: string;

  /**
   * An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics.
   */
  charSpecRelationship?: Array<CharacteristicSpecificationRelationship>;

  /**
   * A CharacteristicValueSpecification object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a CharacteristicSpecification object. The values of the attributes in the CharacteristicValueSpecification object describe the values of the attributes that a corresponding Characteristic object can take on.
   */
  characteristicValueSpecification?: Array<CharacteristicValueSpecification>;

  /**
   * If true, the Boolean indicates that the target Characteristic is configurable
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
  id?: string;

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
  uuid?: string;
  validFor?: TimePeriod;

  /**
   * A kind of value that the characteristic can take on, such as numeric, text and so forth
   */
  valueType?: string;
}
