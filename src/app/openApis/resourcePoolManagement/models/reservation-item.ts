/* tslint:disable */
import { AppliedCapacityAmount } from './applied-capacity-amount';
import { ResourceCapacityDemand } from './resource-capacity-demand';

/**
 * An identified part of the reservation. A reservation is decomposed into one or more reservation items.
 */
export interface ReservationItem {

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;
  "@type"?: string;
  appliedCapacityAmount?: AppliedCapacityAmount;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Represents the number of reservationItems that make up the reservation.
   */
  quantity?: number;
  resourceCapacity?: ResourceCapacityDemand;

  /**
   * A string. The life cycle state of the each reservation item.
   */
  subReservationState?: string;
  uuid?: string;
}
