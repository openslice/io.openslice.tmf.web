/* tslint:disable */
import { ProductSpecificationCharacteristicValue } from './product-specification-characteristic-value';
import { ProductSpecificationRefReq } from './product-specification-ref-req';
import { TimePeriod } from './time-period';

/**
 * A use of the ProductSpecificationCharacteristicValue by a ProductOffering to which additional properties (attributes) apply or override the properties of similar properties contained in ProductSpecificationCharacteristicValue. It should be noted that characteristics which their value(s) addressed by this object must exist in corresponding product specification. The available characteristic values for a ProductSpecificationCharacteristic in a Product specification can be modified at the ProductOffering level. For example, a characteristic 'Color' might have values White, Blue, Green, and Red. But, the list of values can be restricted to e.g. White and Blue in an associated product offering. It should be noted that the list of values in 'ProductSpecificationCharacteristicValueUse' is a strict subset of the list of values as defined in the corresponding product specification characteristics.
 */
export interface ProductSpecificationCharacteristicValueUseReq {

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
   * The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality.
   */
  maxCardinality?: number;

  /**
   * The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality.
   */
  minCardinality?: number;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * A number or text that can be assigned to a ProductSpecificationCharacteristic.
   */
  productSpecCharacteristicValue?: Array<ProductSpecificationCharacteristicValue>;

  /**
   * A ProductSpecification is a detailed description of a tangible or intangible object made available externally in the form of a ProductOffering to customers or other parties playing a party role.
   */
  productSpecification?: ProductSpecificationRefReq;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * A kind of value that the characteristic can take on, such as numeric, text and so forth
   */
  valueType?: string;

  /**
   * Entity version
   */
  version?: string;
}
