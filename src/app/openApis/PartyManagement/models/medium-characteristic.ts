/* tslint:disable */

/**
 * Describes the contact medium characteristics that could be used to contact a party (an individual or an organization)
 */
export interface MediumCharacteristic {

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
   * The city
   */
  city?: string;

  /**
   * The type of contact, for example: phone number such as mobile, fixed home, fixed office. postal address such as shipping instalation…
   */
  contactType?: string;

  /**
   * The country
   */
  country?: string;

  /**
   * Full email address in standard format
   */
  emailAddress?: string;

  /**
   * The fax number of the contact
   */
  faxNumber?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;

  /**
   * The primary phone number of the contact
   */
  phoneNumber?: string;

  /**
   * Postcode
   */
  postCode?: string;

  /**
   * Identifier as a member of a social network
   */
  socialNetworkId?: string;

  /**
   * State or province
   */
  stateOrProvince?: string;

  /**
   * Describes the street
   */
  street1?: string;

  /**
   * Complementary street description
   */
  street2?: string;
  uuid?: string;
}
