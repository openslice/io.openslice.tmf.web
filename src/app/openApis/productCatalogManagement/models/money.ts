/* tslint:disable */

/**
 * A base / value business entity used to represent money
 */
export interface Money {

  /**
   * Currency (ISO4217 norm uses 3 letters to define the currency)
   */
  unit?: string;

  /**
   * A positive floating point number
   */
  value?: number;
}
