/* tslint:disable */
export interface Error {
  "@schemaLocation"?: string;
  "@type"?: string;

  /**
   * (optional) A link to the schema describing a REST resource.
   */
  atSchemaLocation?: string;

  /**
   * (optional) The class type of a REST resource.
   */
  atType?: string;

  /**
   * Application related code.
   */
  code: number;

  /**
   * (optional) Text that provide more details and corrective actions related to the error.
   */
  message?: string;

  /**
   * Text that explains the reason for error.
   */
  reason: number;

  /**
   * (optional) A URL to online documentation that provides more information about the error.
   */
  referenceError?: string;

  /**
   * (optional) http error code extension like 400-2
   */
  status?: number;
}
