/* tslint:disable */
import { ProductSpecificationCharacteristicRelationshipRes } from './product-specification-characteristic-relationship-res';
import { ProductSpecificationCharacteristicValue } from './product-specification-characteristic-value';
import { TimePeriod } from './time-period';

/**
 * A characteristic quality or distinctive feature of a ProductSpecification.  The characteristic can be take on a discrete value, such as color, can take on a range of values, (for example, sensitivity of 100-240 mV), or can be derived from a formula (for example, usage time (hrs) = 30 - talk time *3). Certain characteristics, such as color, may be configured during the ordering or some other process.
 */
export interface ProductSpecificationCharacteristicRes {

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
   * If true, the Boolean indicates that the ProductSpecificationCharacteristic is configurable
   */
  configurable?: boolean;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a product
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
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality
   */
  maxCardinality?: number;

  /**
   * The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality
   */
  minCardinality?: number;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics.
   */
  productSpecCharRelationship?: Array<ProductSpecificationCharacteristicRelationshipRes>;

  /**
   * A ProductSpecificationCharacteristicValue object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a ProductSpecificationCharacteristic object. The values of the attributes in the ProductSpecificationCharacteristicValue object describe the values of the attributes that a corresponding ProductSpecificationCharacteristic object can take on.
   */
  productSpecCharacteristicValue?: Array<ProductSpecificationCharacteristicValue>;

  /**
   * A rule or principle represented in regular expression used to derive the value of a characteristic value
   */
  regex?: string;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * A kind of value that the characteristic can take on, such as numeric, text and so forth
   */
  valueType?: string;

  /**
   * Entity version
   */
  version?: string;
}
