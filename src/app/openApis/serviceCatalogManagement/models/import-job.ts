/* tslint:disable */

/**
 * Represents a task used to import resources from a file
 */
export interface ImportJob {

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
   * Date at which the job was completed
   */
  completionDate?: string;

  /**
   * Indicates the format of the imported data
   */
  contentType?: string;

  /**
   * Date at which the job was created
   */
  creationDate?: string;

  /**
   * Reason for failure if status is failed
   */
  errorLog?: string;

  /**
   * Reference of the import job
   */
  href?: string;

  /**
   * Identifier of the import job
   */
  id?: string;

  /**
   * URL of the root resource where the content of the file specified by the import job must be applied
   */
  path?: string;

  /**
   * Status of the import job (not started, running, succeeded, failed)
   */
  status?: string;

  /**
   * URL of the file containing the data to be imported
   */
  url?: string;
}
