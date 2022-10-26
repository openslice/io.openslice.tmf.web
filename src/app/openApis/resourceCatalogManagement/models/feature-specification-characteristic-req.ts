/* tslint:disable */
import { FeatureSpecificationCharacteristicRelationship } from './feature-specification-characteristic-relationship';
import { FeatureSpecificationCharacteristicValue } from './feature-specification-characteristic-value';
import { TimePeriod } from './time-period';

/**
 * Configuration feature characteristic specification.
 */
export interface FeatureSpecificationCharacteristicReq {

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
  atValueSchemaLocation?: string;

  /**
   * True is the feature is configurable.
   */
  configurable?: boolean;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a feature.
   */
  extensible?: boolean;

  /**
   * An aggregation, migration, substitution, dependency or exclusivity relationship between/among feature characteristics.
   */
  featureSpecCharRelationship?: Array<FeatureSpecificationCharacteristicRelationship>;

  /**
   * Used to define a set of attributes, each of which can be assigned to a corresponding set of attributes in a FeatureCharacteristic object.
   */
  featureSpecCharacteristicValue?: Array<FeatureSpecificationCharacteristicValue>;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * An indicator that specifies if a value is unique for the specification.
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
  lifecycleStatusEnum?: 'ACTIVE' | 'IN_DESIGN' | 'IN_STUDY' | 'IN_TEST' | 'LAUNCHED' | 'OBSOLETE' | 'REJECTED' | 'RETIRED';

  /**
   * The maximum number of instances a CharacteristicValue can take on.
   */
  maxCardinality?: number;

  /**
   * The minimum number of instances a CharacteristicValue can take on.
   */
  minCardinality?: number;

  /**
   * This is the name for the feature charateristic.
   */
  name: string;

  /**
   * A rule or principle represented in regular expression used to derive the value of a characteristic value.
   */
  regex?: string;
  uuid?: string;
  validFor?: TimePeriod;

  /**
   * A kind of value that the characteristic can take on.
   */
  valueType?: string;

  /**
   * Entity version
   */
  version?: string;
}
