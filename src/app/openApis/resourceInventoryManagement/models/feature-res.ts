/* tslint:disable */
import { ConstraintRef } from './constraint-ref';
import { CharacteristicRes } from './characteristic-res';
import { FeatureRelationship } from './feature-relationship';

/**
 * Configuration feature.
 */
export interface FeatureRes {

  /**
   * This is a list of feature constraints.
   */
  constraint?: Array<ConstraintRef>;

  /**
   * This is a list of Characteristics for a particular feature.
   */
  featureCharacteristic: Array<CharacteristicRes>;
  featureRelationship?: Array<FeatureRelationship>;

  /**
   * Unique identifier of the feature.
   */
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
