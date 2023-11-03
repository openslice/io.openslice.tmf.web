/* tslint:disable */

/**
 * provides references to the corresponding market segment as target of product offerings. A market segment is grouping of Parties, GeographicAreas, SalesChannels, and so forth.
 */
export interface MarketSegmentRefRes {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * (Class) type of the referred market segment
   */
  '@referredType'?: string;

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
   * Unique identifier of the market segment
   */
  id: string;

  /**
   * Name of the entity
   */
  name?: string;
  uuid?: string;
}
