/* tslint:disable */
import { Capacity } from './capacity';
import { ResourcePoolRef } from './resource-pool-ref';

/**
 * the extract task resource for resource pool management Skipped properties: id,href
 */
export interface ExtractCreate {
  "@baseType"?: string;
  "@schemaLocation"?: string;
  "@type"?: string;

  /**
   * The base type for use in polymorphic collections
   */
  atBaseType?: string;

  /**
   * A link to the schema describing a resource (for type extension).
   */
  atSchemaLocation?: string;

  /**
   * The class type of the actual resource (for type extension).
   */
  atType?: string;
  capacity?: Capacity;
  resourcePool?: ResourcePoolRef;
}
