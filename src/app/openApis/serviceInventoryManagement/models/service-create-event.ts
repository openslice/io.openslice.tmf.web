/* tslint:disable */
import { Service } from './service';

/**
 * The event data structure
 */
export interface ServiceCreateEvent {

  /**
   * The involved resource data for the event
   */
  service?: Service;
}
