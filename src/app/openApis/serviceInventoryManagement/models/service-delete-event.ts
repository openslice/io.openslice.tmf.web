/* tslint:disable */
import { Service } from './service';

/**
 * The event data structure
 */
export interface ServiceDeleteEvent {

  /**
   * The involved resource data for the event
   */
  service?: Service;
}
