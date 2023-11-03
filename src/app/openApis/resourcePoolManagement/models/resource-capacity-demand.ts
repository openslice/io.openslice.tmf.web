/* tslint:disable */
import { ApplicableTimePeriod } from './applicable-time-period';
import { PlaceRef } from './place-ref';
import { ResourcePoolRef } from './resource-pool-ref';
import { ResourceRef } from './resource-ref';

/**
 * the amount of capacity that is planned to be consumed or has been consumed.
 */
export interface ResourceCapacityDemand {

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;
  "@type"?: string;
  applicableTimePeriod?: ApplicableTimePeriod;

  /**
   * A value and units that define the CapacityDemand, such as 10000 ea, 10B Mb.  Instance values are mutually exclusive with From and To capacityDemandAmounts and range interval.
   */
  capacityDemandAmount?: number;

  /**
   * Unique reference of the entity
   */
  href?: string;
  place?: PlaceRef;
  resourcePool?: ResourcePoolRef;
  resources?: Array<ResourceRef>;
  uuid?: string;
}
