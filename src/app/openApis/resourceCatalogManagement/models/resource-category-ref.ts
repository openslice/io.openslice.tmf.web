/* tslint:disable */

/**
 * Category reference. The category resource is used to group product offerings, service and resource candidates in logical containers. Categories can contain other categories and/or product offerings, resource or service candidates.
 */
export interface ResourceCategoryRef {

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
   * Unique reference of the category
   */
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;
  uuid?: string;

  /**
   * Category version
   */
  version?: string;
}
