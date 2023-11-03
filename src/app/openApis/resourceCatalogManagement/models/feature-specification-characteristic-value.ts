/* tslint:disable */
import { TimePeriod } from './time-period';
import { Any } from './any';

/**
 * A number or text that can be assigned to a FeatureSpecificationCharacteristic.
 */
export interface FeatureSpecificationCharacteristicValue {

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
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * True if the value is the default value for a characteristic.
   */
  isDefault?: boolean;

  /**
   * Specifies the inclusion or exclusion of the valueFrom and valueTo attributes.
   */
  rangeInterval?: string;

  /**
   * A regular expression constraint for given value.
   */
  regex?: string;

  /**
   * A determinate quantity or magnitude of the kind designated, taken as a standard of comparison for others of the same kind, in assigning to them numerical values.
   */
  unitOfMeasure?: string;
  uuid?: string;
  validFor?: TimePeriod;
  value?: Any;

  /**
   * The low range value that a characteristic can take on.
   */
  valueFrom?: number;

  /**
   * The upper range value that a characteristic can take on.
   */
  valueTo?: number;

  /**
   * A kind of value that the characteristic value can take on.
   */
  valueType: string;
}
