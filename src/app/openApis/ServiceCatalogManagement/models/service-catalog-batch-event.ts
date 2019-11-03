/* tslint:disable */
import { ServiceCatalog } from './service-catalog';

/**
 * The event data structure
 */
export interface ServiceCatalogBatchEvent {

  /**
   * The involved resource data for the event
   */
  serviceCatalog?: ServiceCatalog;
}
