/* tslint:disable */
import { Organization } from './organization';

/**
 * The event data structure
 */
export interface OrganizationCreateEventPayload {

  /**
   * The involved resource data for the event
   */
  organization?: Organization;
}
