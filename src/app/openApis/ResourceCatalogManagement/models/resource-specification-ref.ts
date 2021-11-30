/* tslint:disable */
import { TargetResourceSchema } from './target-resource-schema';

/**
 * Resource specification reference: ResourceSpecification(s) required to realize a ProductSpecification.
 */
export interface ResourceSpecificationRef {

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

  /**
   * A target resource schema reference (TargetResourceSchemaRef). The reference object to the schema and type of target resource which is described by resource specification.
   */
  targetResourceSchema?: TargetResourceSchema;
  uuid?: string;

  /**
   * Resource specification version
   */
  version?: string;
}
