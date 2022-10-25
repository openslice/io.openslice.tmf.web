/* tslint:disable */

/**
 * RelatedParty reference. A related party defines party or party role linked to a specific entity.
 */
export interface RelatedParty {

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  "@referredType"?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;
  "@type"?: string;
  extendedInfo?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * Role of the related party.
   */
  role?: string;
  uuid?: string;
}
