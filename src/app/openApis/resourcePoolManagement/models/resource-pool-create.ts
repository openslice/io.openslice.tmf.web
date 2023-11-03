/* tslint:disable */
import { Capacity } from './capacity';

/**
 * manages resource capacity with the resource state Skipped properties: id,href
 */
export interface ResourcePoolCreate {
  "@baseType"?: string;
  "@schemaLocation"?: string;
  "@type"?: string;

  /**
   * A string. Generic attribute indicating the base class type of the extension class of the current object. Useful only when the class type of the current  object is unknown to the implementation.
   */
  atBaseType?: string;

  /**
   * A string. Generic attribute containing the link to the schema that defines the structure of the class type of the current object.
   */
  atSchemaLocation?: string;

  /**
   * A string. Generic attribute containing the name of the resource class type.
   */
  atType?: string;
  capacity?: Capacity;

  /**
   * A string. free-text description of the Resource Pool.
   */
  description?: string;
  name?: string;

  /**
   * A related party defines party or party role linked to a specific entity, who uses the resource of Resource Pool.
   */
  relatedParty?: string;
}
