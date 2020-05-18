/* tslint:disable */

/**
 * Represents a task used to export resources to a file
 */
export interface ExportJob {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  '@type'?: string;

  /**
   * Data at which the job was completed
   */
  completionDate?: string;

  /**
   * The format of the exported data
   */
  contentType?: string;

  /**
   * Date at which the job was created
   */
  creationDate?: string;

  /**
   * Reason for failure
   */
  errorLog?: string;

  /**
   * Reference of the export job
   */
  href?: string;

  /**
   * Identifier of the export job
   */
  id?: string;

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
  url?: string;
}
