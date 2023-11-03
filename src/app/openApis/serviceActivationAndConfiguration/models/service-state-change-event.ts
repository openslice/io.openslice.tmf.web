/* tslint:disable */
import { Service } from './service';

/**
 * The event data structure
 */
export interface ServiceStateChangeEvent {

  /**
   * The involved resource data for the event
   */
  service?: Service;
}
