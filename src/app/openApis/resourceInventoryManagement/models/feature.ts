/* tslint:disable */
import { ConstraintRef } from './constraint-ref';
import { Characteristic } from './characteristic';
import { FeatureRelationship } from './feature-relationship';

/**
 * Configuration feature.
 */
export interface Feature {

  /**
   * This is a list of feature constraints.
   */
  constraint?: Array<ConstraintRef>;

  /**
   * This is a list of Characteristics for a particular feature.
   */
  featureCharacteristic: Array<Characteristic>;
  featureRelationship?: Array<FeatureRelationship>;
  id?: string;

  /**
   * True if this is a feature group. Default is false.
   */
  isBundle?: boolean;

  /**
   * True if this feature is enabled. Default is true.
   */
  isEnabled?: boolean;

  /**
   * This is the name for the feature.
   */
  name: string;
}
