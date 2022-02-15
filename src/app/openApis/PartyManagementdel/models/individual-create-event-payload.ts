/* tslint:disable */
import { Individual } from './individual';

/**
 * The event data structure
 */
export interface IndividualCreateEventPayload {

  /**
   * The involved resource data for the event
   */
  individual?: Individual;
}
