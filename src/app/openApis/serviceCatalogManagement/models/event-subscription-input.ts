/* tslint:disable */

/**
 * Sets the communication endpoint address the service instance must use to deliver notification information
 */
export interface EventSubscriptionInput {

  /**
   * The callback being registered.
   */
  callback: string;

  /**
   * additional data to be passed
   */
  query?: string;
}
