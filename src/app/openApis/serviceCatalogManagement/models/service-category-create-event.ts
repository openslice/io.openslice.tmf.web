/* tslint:disable */
import { ServiceCategory } from './service-category';

/**
 * The event data structure
 */
export interface ServiceCategoryCreateEvent {

  /**
   * The involved resource data for the event
   */
  serviceCategory?: ServiceCategory;
}
