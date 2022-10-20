/* tslint:disable */
import { AppliedCapacityAmount } from './applied-capacity-amount';
import { PlaceRef } from './place-ref';
import { RelatedParty } from './related-party';
import { ResourceRef } from './resource-ref';
export interface Capacity {

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;
  "@type"?: string;
  appliedCapacityAmount?: Array<AppliedCapacityAmount>;
  capacityAmount?: number;

  /**
   * Unique reference of the entity
   */
  href?: string;
  place?: PlaceRef;
  relatedParty?: RelatedParty;
  resources?: Array<ResourceRef>;
  uuid?: string;
}
