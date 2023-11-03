/* tslint:disable */
import { ResourceCapacityDemand } from './resource-capacity-demand';

/**
 * the availabilityCheck task resource for resource pool management Skipped properties: id,href
 */
export interface AvailabilityCheckCreate {
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
  resourceCapacityDemand?: ResourceCapacityDemand;
}
