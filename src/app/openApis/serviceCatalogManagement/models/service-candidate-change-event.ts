/* tslint:disable */
import { ServiceCandidate } from './service-candidate';

/**
 * The event data structure
 */
export interface ServiceCandidateChangeEvent {

  /**
   * The involved resource data for the event
   */
  serviceCandidate?: ServiceCandidate;
}
