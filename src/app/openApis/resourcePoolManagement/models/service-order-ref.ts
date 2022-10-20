/* tslint:disable */

/**
 * Service Order reference. Useful to understand the which was the Service order through which the service was instantiated in the service inventory
 */
export interface ServiceOrderRef {

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

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Unique identifier of the Service Order
   */
  id: string;

  /**
   * Unique identifier of the Service Order Item within a service order, not populated if this is a reference to a service order
   */
  serviceOrderItemId?: string;
}
