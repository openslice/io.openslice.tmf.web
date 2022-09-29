/* tslint:disable */
import { Characteristic } from './characteristic';
import { RelatedParty } from './related-party';
import { ServiceRef } from './service-ref';
import { TestMeasureReq } from './test-measure-req';
import { ServiceTestSpecificationRef } from './service-test-specification-ref';
import { TimePeriod } from './time-period';

/**
 * A service test is an entity that exists for a controlled test invocation on a service. The service  test is executed according to a schedule and contains service test configuration parameters that are to be  applied at execution time, and service test measures that result. Skipped properties: id,href
 */
export interface ServiceTestCreate {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class Extensible name
   */
  atType?: string;

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
  testMeasure?: Array<TestMeasureReq>;
  testSpecification?: ServiceTestSpecificationRef;
  validFor?: TimePeriod;
}
