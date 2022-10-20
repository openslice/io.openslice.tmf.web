/* tslint:disable */
import { ResourceRef } from './resource-ref';
import { ResourceCapacityDemand } from './resource-capacity-demand';

/**
 * the availabilityCheck task resource for resource pool management
 */
export interface AvailabilityCheck {
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
  availableResources?: Array<ResourceRef>;

  /**
   * A string. Hyperlink to access the availabilityCheck task for resource pool Management
   */
  href?: string;

  /**
   * A string. Identifier of an instance of the availabilityCheck task for resource pool Management
   */
  id?: string;
  resourceCapacityDemand?: ResourceCapacityDemand;
}
