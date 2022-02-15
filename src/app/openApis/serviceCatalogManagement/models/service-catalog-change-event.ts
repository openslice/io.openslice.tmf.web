/* tslint:disable */
import { ServiceCatalog } from './service-catalog';

/**
 * The event data structure
 */
export interface ServiceCatalogChangeEvent {

  /**
   * The involved resource data for the event
   */
  serviceCatalog?: ServiceCatalog;
}
