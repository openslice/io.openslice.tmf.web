/* tslint:disable */

/**
 * Used when an API throws an Error, typically with a HTTP error response-code (3xx, 4xx, 5xx)
 */
export interface Error {

  /**
   * When sub-classing, this defines the super-class.
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;

  /**
   * When sub-classing, this defines the sub-class entity name.
   */
  '@type'?: string;

  /**
   * Application relevant detail, defined in the API or a common list.
   */
  code: string;

  /**
   * More details and corrective actions related to the error which can be shown to a client user.
   */
  message?: string;

  /**
   * Explanation of the reason for the error which can be shown to a client user.
   */
  reason: string;

  /**
   * URI of documentation describing the error.
   */
  referenceError?: string;

  /**
   * HTTP Error code extension
   */
  status?: string;
}
