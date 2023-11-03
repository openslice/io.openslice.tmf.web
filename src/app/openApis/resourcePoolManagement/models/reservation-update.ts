/* tslint:disable */
import { RelatedParty } from './related-party';
import { ReservationItem } from './reservation-item';
import { ServiceOrderRef } from './service-order-ref';
import { TimePeriod } from './time-period';

/**
 * reservation api resource Skipped properties: id,href
 */
export interface ReservationUpdate {
  "@baseType"?: string;
  "@schemaLocation"?: string;
  "@type"?: string;
  atBaseType?: string;

  /**
   * A string. Generic attribute containing the link to the schema that defines the structure of the class type of the current object.
   */
  atSchemaLocation?: string;

  /**
   * A string. Indicates the (class) type of reservation. Ex. serviceItemReservation, resourceItemReservation
   */
  atType?: string;

  /**
   * A string. free-text description of the reservation.
   */
  name?: string;
  description?: string;
  relatedParty?: RelatedParty;
  requestedPeriodEndDateTime?: string;
  requestedPeriodStartDateTime?: string;
  reservationItem?: Array<ReservationItem>;

  /**
   * A string. The life cycle state of the reservation.
   */
  reservationState?: string;
  serviceOrderRef?: ServiceOrderRef;

  /**
   * The period of time for which the reservation is applicable.
   */
  validFor?: TimePeriod;
}
