/* tslint:disable */
import { ServiceOrder } from './service-order';

/**
 * The event data structure
 */
export interface ServiceOrderStateChangeEvent {

  /**
   * The involved resource data for the event
   */
  serviceOrder?: ServiceOrder;
}
