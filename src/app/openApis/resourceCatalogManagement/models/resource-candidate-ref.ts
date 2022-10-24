/* tslint:disable */

/**
 * ResourceCandidate is an entity that makes a resource specification available to a catalog. A ResourceCandidate and its associated resource specification may be published - made visible - in any number of resource catalogs, or in none.
 */
export interface ResourceCandidateRef {

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
   * Reference of the resource candidate
   */
  href?: string;

  /**
   * Unique identifier of the resource candidate
   */
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
