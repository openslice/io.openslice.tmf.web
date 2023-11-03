/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * The channel to which the resource reference to. e.g. channel for selling product offerings, channel for opening a trouble ticket etc..
 */
export interface ChannelRefReq {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Description of this catalog
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

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
   * Name of the entity
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
