/* tslint:disable */
import { AssociationSpecificationRef } from './association-specification-ref';
import { TimePeriod } from './time-period';

/**
 * A migration, substitution, dependency or exclusivity relationship between/among entity specifications.
 */
export interface EntitySpecificationRelationshipRes {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;
  associationSpec?: AssociationSpecificationRef;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  atReferredType?: string;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Hyperlink reference
   */
  href?: string;

  /**
   * unique identifier
   */
  id?: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Name of the related entity.
   */
  name?: string;

  /**
   * Type of relationship such as migration, substitution, dependency, exclusivity
   */
  relationshipType: string;

  /**
   * The association role for this entity specification
   */
  role?: string;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
