/* tslint:disable */
import { Money } from './money';

/**
 * A tax item is created for each tax rate and tax type used in the bill.
 */
export interface TaxItem {

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
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Amount of tax expressed in the given currency
   */
  taxAmount?: Money;

  /**
   * Tax category
   */
  taxCategory?: string;

  /**
   * Applied rate of the tax
   */
  taxRate?: number;
  uuid?: string;
}
