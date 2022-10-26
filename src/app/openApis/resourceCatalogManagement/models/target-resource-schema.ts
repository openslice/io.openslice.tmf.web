/* tslint:disable */

/**
 * The reference object to the schema and type of target resource which is described by resource specification
 */
export interface TargetResourceSchema {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * This field provides a link to the schema describing the target resource
   */
  atSchemaLocation: string;

  /**
   * Class type of the target resource
   */
  atType: string;
}
