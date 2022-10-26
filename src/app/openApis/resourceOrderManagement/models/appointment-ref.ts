/* tslint:disable */

/**
 * Refers an appointment, such as a Customer presentation or internal meeting or site visit
 */
export interface AppointmentRef {
  '@baseType'?: string;
  '@referredType'?: string;
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * When sub-classing, this defines the super-class
   */
  atBaseType?: string;

  /**
   * The actual type of the target instance when needed for disambiguation
   */
  atReferredType?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  atSchemaLocation?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  atType?: string;

  /**
   * An explanatory text regarding the appointment made with a party
   */
  description?: string;

  /**
   * The reference of the appointment
   */
  href?: string;

  /**
   * The identifier of the referred appointment
   */
  id: string;
}
