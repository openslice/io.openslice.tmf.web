/* tslint:disable */
import { Organization } from './organization';

/**
 * The event data structure
 */
export interface OrganizationDeleteEventPayload {

  /**
   * The involved resource data for the event
   */
  organization?: Organization;
}
