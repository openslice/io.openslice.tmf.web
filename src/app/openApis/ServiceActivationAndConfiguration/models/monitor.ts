/* tslint:disable */
import { Request } from './request';
import { Response } from './response';

/**
 * Monitoring of resources
 */
export interface Monitor {
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
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * reference to this monitor
   */
  href?: string;

  /**
   * Identifier of an instance of the monitor. Required to be unique within the resource type.  Used in URIs as the identifier for specific instances of a type
   */
  id?: string;
  request?: Request;
  response?: Response;

  /**
   * The monitored resource href
   */
  sourceHref?: string;

  /**
   * The Monitor state of the resource.  InProgress, InError, Completed
   */
  state?: string;
}
