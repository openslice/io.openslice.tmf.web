/* tslint:disable */
import { Characteristic } from './characteristic';
import { RelatedParty } from './related-party';
import { ServiceRef } from './service-ref';
import { TestMeasureRes } from './test-measure-res';
import { ServiceTestSpecificationRef } from './service-test-specification-ref';
import { TimePeriod } from './time-period';

/**
 * A service test is an entity that exists for a controlled test invocation on a service. The service  test is executed according to a schedule and contains service test configuration parameters that are to be  applied at execution time, and service test measures that result.
 */
export interface ServiceTest {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * List of characteristics with values that define the test run
   */
  characteristic?: Array<Characteristic>;

  /**
   * Description of the service test
   */
  description?: string;

  /**
   * The end date and time of the service test
   */
  endDateTime?: string;

  /**
   * Hyperlink reference
   */
  href?: string;
  id?: string;

  /**
   * Date and time of the last update
   */
  lastUpdate?: string;

  /**
   * Used to indicate the current lifecycle status
   */
  lifecycleStatus?: string;

  /**
   * An indication of whether the service test is running in  "PROACTIVE" or "ONDEMAND" mode
   */
  mode?: string;

  /**
   * The name of the service test
   */
  name?: string;

  /**
   * Party related to the test
   */
  relatedParty?: Array<RelatedParty>;
  relatedService?: ServiceRef;

  /**
   * The start date and time of the service test.
   */
  startDateTime?: string;

  /**
   * The actual state the service test is in
   */
  state?: string;

  /**
   * The results of the test in terms of the measured metrics
   */
  testMeasure?: Array<TestMeasureRes>;
  testSpecification?: ServiceTestSpecificationRef;
  uuid?: string;

  /**
   * The period for which the entity is valid
   */
  validFor?: TimePeriod;

  /**
   * Entity version
   */
  version?: string;
}
