/* tslint:disable */
import { Category } from './category';

/**
 * The event data structure
 */
export interface CategoryCreateEventPayload {

  /**
   * The involved resource data for the event
   */
  category?: Category;
}
