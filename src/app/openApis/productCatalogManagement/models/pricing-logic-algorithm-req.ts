/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * The PricingLogicAlgorithm entity represents an instantiation of an interface specification to external rating function (without a modeled bahavior in SID). Some of the parameters of the interface definiition may be already set (such as price per unit) and some may be gathered during the rating process from the event (such as call duration) or from ProductCharacteristicValues (such as assigned bandwidth)
 */
export interface PricingLogicAlgorithmReq {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

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

  /**
   * id of corresponding PricingLogicAlgorithm specification
   */
  plaSpecId?: string;
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
