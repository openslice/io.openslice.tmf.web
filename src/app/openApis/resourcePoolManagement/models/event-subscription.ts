/* tslint:disable */
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
