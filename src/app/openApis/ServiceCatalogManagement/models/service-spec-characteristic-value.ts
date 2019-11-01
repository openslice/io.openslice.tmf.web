/* tslint:disable */
import { TimePeriod } from './time-period';
import { Any } from './any';

/**
 * A ServiceSpecCharacteristicValue object is used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a ServiceSpecCharacteristic object. The values of the attributes in the ServiceSpecCharacteristicValue object describe the values of the attributes that a corresponding ServiceSpecCharacteristic object can take on.
 */
export interface ServiceSpecCharacteristicValue {

  /**
   * An indicator that specifies the inclusion or exclusion of the valueFrom and valueTo attributes. If applicable, possible values are "open", "closed", "closedBottom" and "closedTop".
   */
  rangeInterval?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;
  "@type"?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier of the Entity
   */
  id?: string;

  /**
   * Indicates if the value is the default value for a characteristic
   */
  isDefault?: boolean;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;

  /**
   * A regular expression constraint for given value
   */
  regex?: string;

  /**
   * A length, surface, volume, dry measure, liquid measure, money, weight, time, and the like. In general, a determinate quantity or magnitude of the kind designated, taken as a standard of comparison for others of the same kind, in assigning to them numerical values, as 1 foot, 1 yard, 1 mile, 1 square foot.
   */
  unitOfMeasure?: string;

  /**
   * The period of time for which a value is applicable
   */
  validFor?: TimePeriod;

  /**
   * A discrete value that the characteristic can take on, or the actual value of the characteristic
   */
  value?: Any;

  /**
   * The low range value that a characteristic can take on
   */
  valueFrom?: number;

  /**
   * The upper range value that a characteristic can take on
   */
  valueTo?: number;

  /**
   * A kind of value that the characteristic can take on, such as numeric, text, and so forth
   */
  valueType?: string;
}
