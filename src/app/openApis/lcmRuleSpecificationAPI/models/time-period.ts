/* tslint:disable */

/**
 * A period of time, either as a deadline (endDateTime only) a startDateTime only, or both
 */
export interface TimePeriod {

  /**
   * End of the time period, using IETC-RFC-3339 format
   */
  endDateTime?: string;

  /**
   * Start of the time period, using IETC-RFC-3339 format. If you define a start, you must also define an end
   */
  startDateTime?: string;
}
