/* tslint:disable */
import { Category } from './category';

/**
 * The event data structure
 */
export interface CategoryDeleteEventPayload {

  /**
   * The involved resource data for the event
   */
  category?: Category;
}
