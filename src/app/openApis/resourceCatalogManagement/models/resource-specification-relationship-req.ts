/* tslint:disable */
import { ResourceSpecificationCharacteristicReq } from './resource-specification-characteristic-req';
import { TimePeriod } from './time-period';

/**
 * A migration, substitution, dependency or exclusivity relationship between/among resource specifications.
 */
export interface ResourceSpecificationRelationshipReq {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * The default number of the related resource that should be instantiated, for example a rack would typically have 4 cards, although it could support more.
   */
  defaultQuantity?: number;

  /**
   * Reference of the target ResourceSpecification
   */
  href?: string;

  /**
   * Unique identifier of target ResourceSpecification
   */
  id?: string;

  /**
   * The maximum number of the related resource that should be instantiated, for example a rack supports a maximum of 16 cards
   */
  maximumQuantity?: number;

  /**
   * The minimum number of the related resource that should be instantiated, for example a rack must have at least 1 card
   */
  minimumQuantity?: number;

  /**
   * The name given to the target resource specification instance
   */
  name?: string;

  /**
   * Type of relationship such as migration, substitution, dependency, exclusivity
   */
  relationshipType?: string;

  /**
   * A characteristic that refines the relationship. For example, consider the relationship between a slot and a card. For a half-height card it is important to know the position at which the card is inserted, so a characteristic Position might be defined on the relationship to allow capturing of this in the inventory
   */
  resourceSpecCharacteristic?: Array<ResourceSpecificationCharacteristicReq>;

  /**
   * The association role for this resource specification
   */
  role?: string;
  uuid?: string;
  validFor?: TimePeriod;
}
