/* tslint:disable */
import { BundledProductOfferingOption } from './bundled-product-offering-option';
import { TimePeriod } from './time-period';

/**
 * A type of ProductOffering that belongs to a grouping of ProductOfferings made available to the market. It inherits of all attributes of ProductOffering.
 */
export interface BundledProductOfferingReq {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  '@type'?: string;

  /**
   * A set of numbers that specifies the lower and upper limits for a ProductOffering that can be procured as part of the related BundledProductOffering. Values can range from 0 to unbounded.
   */
  bundledProductOfferingOption?: BundledProductOfferingOption;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the BundledProductOffering
   */
  href?: string;

  /**
   * Unique identifier of a related entity.
   */
  id: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;
  lifecycleStatusEnum?: 'ACTIVE' | 'IN_DESIGN' | 'IN_STUDY' | 'IN_TEST' | 'LAUNCHED' | 'OBSOLETE' | 'REJECTED' | 'RETIRED';

  /**
   * Name of the BundledProductOffering
   */
  name?: string;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
