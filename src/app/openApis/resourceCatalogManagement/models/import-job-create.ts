/* tslint:disable */

/**
 * Represents a task used to import resources from a file Skipped properties: id,href
 */
export interface ImportJobCreate {
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
   * URL of the root resource where the content of the file specified by the import job must be applied
   */
  path?: string;
  status?: 'Failed' | 'Not Started' | 'Running' | 'Succeeded';

  /**
   * URL of the file containing the data to be imported
   */
  url: string;
}
