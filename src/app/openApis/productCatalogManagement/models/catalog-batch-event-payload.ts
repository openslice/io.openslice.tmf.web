/* tslint:disable */
import { Catalog } from './catalog';

/**
 * The event data structure
 */
export interface CatalogBatchEventPayload {

  /**
   * The involved resource data for the event
   */
  catalog?: Catalog;
}
