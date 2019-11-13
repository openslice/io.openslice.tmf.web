/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * An aggregation, migration, substitution, dependency or exclusivity relationship between/among serviceSpecCharacteristics.
 */
export interface ServiceSpecCharRelationship {
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
   * The association role for this service specification
   */
  role?: string;
  uuid?: string;

  /**
   * The period for which the serviceSpecCharRelationship is valid
   */
  validFor?: TimePeriod;
}
