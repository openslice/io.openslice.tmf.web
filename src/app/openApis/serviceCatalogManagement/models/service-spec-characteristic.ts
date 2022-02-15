/* tslint:disable */
import { ServiceSpecCharRelationship } from './service-spec-char-relationship';
import { ServiceSpecCharacteristicValue } from './service-spec-characteristic-value';
import { TimePeriod } from './time-period';

/**
 * This class represents the key features of this service specification. For example, bandwidth is a characteristic of many different types of services; if bandwidth is a relevant characteristic (e.g., from the point-of-view of a Customer obtaining this Service via a Product) then bandwidth would be a ServiceSpecCharacteristic for that particular Service.
 */
export interface ServiceSpecCharacteristic {

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
   * This (optional) field provides a link to the schema describing the value type.
   */
  '@valueSchemaLocation'?: string;

  /**
   * If true, the Boolean indicates that the serviceSpecCharacteristic is configurable
   */
  configurable?: boolean;

  /**
   * A narrative that explains in detail what the serviceSpecCharacteristic is
   */
  description?: string;

  /**
   * An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for an Entity.
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
   * Name of the entity
   */
  name?: string;

  /**
   * A rule or principle represented in regular expression used to derive the value of a characteristic value.
   */
  regex?: string;

  /**
   * A list of service spec char relationships (ServiceSpecCharRelationship [*]). An aggregation, migration, substitution, dependency or exclusivity relationship between/among Specification Characteristics.
   */
  serviceSpecCharRelationship?: Array<ServiceSpecCharRelationship>;

  /**
   * A list of service spec characteristic values (ServiceSpecCharacteristicValue [*]). A ServiceSpecCharacteristicValue object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a ServiceSpecCharacteristic object. The values of the attributes in the ServiceSpecCharacteristicValue object describe the values of the attributes that a corresponding ServiceSpecCharacteristic object can take on.
   */
  serviceSpecCharacteristicValue?: Array<ServiceSpecCharacteristicValue>;
  uuid?: string;

  /**
   * The period for which the serviceSpecCharacteristic is valid
   */
  validFor?: TimePeriod;

  /**
   * A kind of value that the characteristic can take on, such as numeric, text and so forth
   */
  valueType?: string;
}
