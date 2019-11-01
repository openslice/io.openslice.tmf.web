/* tslint:disable */
import { ServiceSpecification } from './service-specification';

/**
 * The event data structure
 */
export interface ServiceSpecificationCreateEvent {

  /**
   * The involved resource data for the event
   */
  serviceSpecification?: ServiceSpecification;
}
