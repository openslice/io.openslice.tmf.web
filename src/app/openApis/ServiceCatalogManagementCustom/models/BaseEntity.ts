import { BaseRootEntity } from './BaseRootEntity';
import { TimePeriod } from '../../ServiceCatalogManagement/models/time-period';

/* tslint:disable */
export interface BaseEntity extends BaseRootEntity {
  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * Entity version
   */
  version?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;
}
