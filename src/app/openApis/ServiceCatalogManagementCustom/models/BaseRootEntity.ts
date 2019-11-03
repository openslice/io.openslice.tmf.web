/* tslint:disable */
export interface BaseRootEntity {
  /**
   * Unique identifier of the Entity
   */
  id?: string;
  
  /**
   * Unique reference of the entity
   */
  href?: string;


  /**
   * Name of the entity
   */
  name?: string;
  
  /**
   * When sub-classing, this defines the super-class
   */
  "@baseType"?: string;
  "@type"?: string;


  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  "@schemaLocation"?: string;

}
