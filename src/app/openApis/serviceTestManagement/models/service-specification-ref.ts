/* tslint:disable */
import { TargetServiceSchema } from './target-service-schema';

/**
 * Service specification reference: ServiceSpecification(s) required to realize a ProductSpecification.
 */
export interface ServiceSpecificationRef {

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
   * A target service schema reference (TargetServiceSchemaRef). The reference object to the schema and type of target service which is described by service specification.
   */
  targetServiceSchema?: TargetServiceSchema;

  /**
   * Service specification version
   */
  version?: string;
}
