/* tslint:disable */

/**
 * A Resource Level Specification represents a pre-defined or negotiated set of Resource Level  Objectives. In addition, certain consequences are associated with not meeting the Resource Level  Objectives. Resource Level Agreements are expressed in terms of Resource Level Specifications.
 */
export interface ResourceLevelSpecificationRef {

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
}
