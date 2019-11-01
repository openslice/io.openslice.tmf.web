/* tslint:disable */

/**
 * Represents a task used to export resources to a file Skipped properties: id,href
 */
export interface ExportJobCreate {

  /**
   * Date at which the job was created
   */
  creationDate?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  "@type"?: string;

  /**
   * Data at which the job was completed
   */
  completionDate?: string;

  /**
   * The format of the exported data
   */
  contentType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;

  /**
   * Reason for failure
   */
  errorLog?: string;

  /**
   * URL of the root resource acting as the source for streaming content to the file specified by the export job
   */
  path?: string;

  /**
   * Used to scope the exported data
   */
  query?: string;

  /**
   * Status of the export job (not started, running, succeeded, failed)
   */
  status?: string;

  /**
   * URL of the file containing the data to be exported
   */
  url: string;
}
