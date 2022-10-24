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
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  atReferredType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class Extensible name
   */
  atType?: string;

  /**
   * Hyperlink reference
   */
  href?: string;

  /**
   * unique identifier
   */
  id: string;

  /**
   * Name of the related entity.
   */
  name?: string;
  uuid?: string;

  /**
   * constraint version
   */
  version?: string;
}
