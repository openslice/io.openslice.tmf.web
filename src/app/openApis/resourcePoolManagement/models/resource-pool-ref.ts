/* tslint:disable */
import { ResourceRef } from './resource-ref';

/**
 * manages resource capacity with the resource state
 */
export interface ResourcePoolRef {

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;
  "@referredType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;
  "@type"?: string;

  /**
   * A string. Indicates the type of the referred object. This attribute is to be used when the object is representing a reference to an existing object instead of the of the object itself.
   */
  atReferredType?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * A string. Identifier of an instance of the Resource Pool.
   */
  id?: string;
  resources?: Array<ResourceRef>;
}
