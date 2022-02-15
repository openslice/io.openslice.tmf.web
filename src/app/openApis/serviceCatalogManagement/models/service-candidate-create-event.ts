/* tslint:disable */
import { ServiceCandidate } from './service-candidate';

/**
 * The event data structure
 */
export interface ServiceCandidateCreateEvent {

  /**
   * The involved resource data for the event
   */
  serviceCandidate?: ServiceCandidate;
}
