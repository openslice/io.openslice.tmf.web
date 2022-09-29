/* tslint:disable */
import { TimePeriod } from './time-period';

/**
 * Keeps track of other names, for example the old name of an organization.
 */
export interface OtherNameOrganization {

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
   * Unique reference of the entity
   */
  href?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * Co. , Inc. , Ltd. , Pty Ltd. , Plc; , Gmbh
   */
  nameType?: string;

  /**
   * The name that the organization trades under
   */
  tradingName?: string;
  uuid?: string;
  validFor?: TimePeriod;
}
