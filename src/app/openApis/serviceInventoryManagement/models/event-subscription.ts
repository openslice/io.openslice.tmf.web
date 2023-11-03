/* tslint:disable */

/**
 * Sets the communication endpoint address the service instance must use to deliver notification information
 */
export interface EventSubscription {

  /**
   * The callback being registered.
   */
  callback: string;

  /**
   * Id of the listener
   */
  id: string;

  /**
   * additional data to be passed
   */
  query?: string;
}
