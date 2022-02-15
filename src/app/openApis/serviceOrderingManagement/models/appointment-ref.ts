/* tslint:disable */

/**
 * Refers an appointment, such as a Customer presentation or internal meeting or site visit
 */
export interface AppointmentRef {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * The actual type of the target instance when needed for disambiguation
   */
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * An explanatory text regarding the appointment made with a party
   */
  description?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * The identifier of the referred appointment
   */
  id: string;
  uuid?: string;
}
