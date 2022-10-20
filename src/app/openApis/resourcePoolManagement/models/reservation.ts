/* tslint:disable */
import { RelatedParty } from './related-party';
import { ReservationItem } from './reservation-item';
import { ServiceOrderRef } from './service-order-ref';
import { TimePeriod } from './time-period';

/**
 * reservation api resource
 */
export interface Reservation {

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
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * A string. Identifier of an instance of the Reservation.
   */
  id?: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Name of the entity
   */
  name?: string;
  relatedParty?: RelatedParty;

  /**
   * End of the time period, using IETC-RFC-3339 format
   */
  requestedPeriodEndDateTime?: string;

  /**
   * Start of the time period, using IETC-RFC-3339 format. If you define a start, you must also define an end
   */
  requestedPeriodStartDateTime?: string;
  reservationItem?: Array<ReservationItem>;

  /**
   * A string. The life cycle state of the reservation.
   */
  reservationState?: string;
  serviceOrderRef?: ServiceOrderRef;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
