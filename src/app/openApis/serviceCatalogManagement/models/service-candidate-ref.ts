/* tslint:disable */

/**
 * ServiceCandidate reference. ServiceCandidate is an entity that makes a ServiceSpecification available to a catalog.
 */
export interface ServiceCandidateRef {

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
   * Version of the service candidate
   */
  version?: string;
}
