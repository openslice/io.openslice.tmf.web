/* tslint:disable */

/**
 * Used when an API throws an Error, typically with a HTTP error response-code (3xx, 4xx, 5xx)
 */
export interface Error {

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
   * HTTP Error code extension
   */
  status?: string;
}
