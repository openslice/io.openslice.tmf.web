/* tslint:disable */
import { Catalog } from './catalog';

/**
 * The event data structure
 */
export interface CatalogCreateEventPayload {

  /**
   * The involved resource data for the event
   */
  catalog?: Catalog;
}
