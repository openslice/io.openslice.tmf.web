/* tslint:disable */
import { ServiceSpecificationRef } from './service-specification-ref';
import { TimePeriod } from './time-period';

/**
 * A LCM RuleSpecification is an entity that describes a LCM rule to apply during the LCM of a service.
 */
export interface LCMRuleSpecificationCreate {
  '@baseType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;
  code?: string;
  content?: string;
  description?: string;
  lcmrulephase?: string;
  lifecycleStatus?: string;
  name?: string;
  priority?: number;
  serviceSpecs?: Array<ServiceSpecificationRef>;
  validFor?: TimePeriod;
  version?: string;
}
