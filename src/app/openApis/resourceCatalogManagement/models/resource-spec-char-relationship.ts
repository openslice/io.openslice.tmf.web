/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * An aggregation, migration, substitution, dependency or exclusivity relationship between/among resourceSpecCharacteristics.
 */
export interface ResourceSpecCharRelationship {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;
  id?: string;
  name?: string;

  /**
   * Type of relationship such as aggregation, migration, substitution, dependency, exclusivity
   */
  relationshipType?: string;

  /**
   * The association role for this resource specification
   */
  role?: string;
  uuid?: string;

  /**
   * The period for which the resourceSpecCharRelationship is valid
   */
  validFor?: TimePeriod;
}
