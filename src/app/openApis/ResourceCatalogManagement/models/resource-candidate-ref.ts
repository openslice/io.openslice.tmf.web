/* tslint:disable */

/**
 * ResourceCandidate reference. ResourceCandidate is an entity that makes a ResourceSpecification available to a catalog.
 */
export interface ResourceCandidateRef {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;
  uuid?: string;

  /**
   * Version of the resource candidate
   */
  version?: string;
}
