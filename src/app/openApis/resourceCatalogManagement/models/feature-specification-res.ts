/* tslint:disable */
import { ConstraintRef } from './constraint-ref';
import { FeatureSpecificationCharacteristicRes } from './feature-specification-characteristic-res';
import { FeatureSpecificationRelationshipRes } from './feature-specification-relationship-res';
import { TimePeriod } from './time-period';

/**
 * Specification for applicable configuration features for a resource specification.
 */
export interface FeatureSpecificationRes {

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
   * This is a list of feature constraints
   */
  constraint?: Array<ConstraintRef>;

  /**
   * This is a list of characteristics for a particular feature
   */
  featureSpecCharacteristic?: Array<FeatureSpecificationCharacteristicRes>;

  /**
   * A dependency, exclusivity or aggratation relationship between/among feature specifications.
   */
  featureSpecRelationship?: Array<FeatureSpecificationRelationshipRes>;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Identifier of the feature specification. Must be locally unique within the containing resource specification, thus allowing direct access to the feature spec.
   */
  id?: string;

  /**
   * A flag indicating if this is a feature group (true) or not (false)
   */
  isBundle?: boolean;

  /**
   * A flag indicating if the feature is enabled (true) or not (false)
   */
  isEnabled?: boolean;

  /**
   * Unique name given to the feature specification
   */
  name?: string;
  uuid?: string;
  validFor?: TimePeriod;

  /**
   * Version of the feature specification
   */
  version?: string;
}
