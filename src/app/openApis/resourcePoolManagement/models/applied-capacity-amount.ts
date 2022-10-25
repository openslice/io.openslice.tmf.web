/* tslint:disable */
import { ResourceRef } from './resource-ref';
import { ResourceCapacityDemand } from './resource-capacity-demand';

/**
 * The amount of CapcityDemand applied to a CapacityAmount.
 */
export interface AppliedCapacityAmount {

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;
  "@type"?: string;

  /**
   * An amount of demand applied to a CapacityAmount. Note that this is a composite attribute defined by CapacityAmount.
   */
  appliedDemandAmount?: number;

  /**
   * Unique reference of the entity
   */
  href?: string;
  resource?: Array<ResourceRef>;
  resourceCapacityDemand?: ResourceCapacityDemand;
  resources?: Array<ResourceRef>;
  uuid?: string;
}
