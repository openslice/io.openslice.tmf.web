/* tslint:disable */

/**
 * Constraint reference. The Constraint resource represents a policy/rule applied to an entity or entity spec.
 */
export interface ConstraintRef {

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

  /**
   * The (class) type of the referred constraint
   */
  atReferredType?: string;

  /**
   * Hyperlink reference to the target constraint
   */
  href?: string;

  /**
   * reference id to the target constraint
   */
  id: string;

  /**
   * Name given to the constraint
   */
  name?: string;
  uuid?: string;

  /**
   * constraint version
   */
  version?: string;
}
