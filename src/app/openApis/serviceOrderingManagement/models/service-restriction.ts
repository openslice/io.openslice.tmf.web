/* tslint:disable */
import { RelatedParty } from './related-party';
import { Place } from './place';
import { Characteristic } from './characteristic';
import { ServiceRelationship } from './service-relationship';
import { ServiceSpecificationRef } from './service-specification-ref';
import { ResourceRef } from './resource-ref';
import { ServiceRef } from './service-ref';

/**
 * In the context of a service order, and depending of the action requested (add/modify/delete/noChange) this data structure captures the configuration to apply to an existing subscribed service or to a new one
 */
export interface ServiceRestriction {

  /**
   * A list of related party references (RelatedParty [*]). A related party defines party or party role linked to a specific entity
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;
  '@type'?: string;

  /**
   * Is it a customer facing or resource facing service
   */
  category?: string;

  /**
   * Unique reference of the entity
   */
  href?: string;
  id?: string;

  /**
   * Name of the entity
   */
  name?: string;

  /**
   * A list of places (Place [*]). Used to define a place useful for the service (for example a delivery geographical place)
   */
  place?: Array<Place>;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;

  /**
   * A list of characteristics that characterize this service (ServiceCharacteristic [*])
   */
  serviceCharacteristic?: Array<Characteristic>;

  /**
   * A list of service relationships (ServiceRelationship [*]). Describes links with other service(s) in the inventory (useful for describing relies-on, relies-from between CFS for example).
   */
  serviceRelationship?: Array<ServiceRelationship>;

  /**
   * The specification from which this service was instantiated
   */
  serviceSpecification?: ServiceSpecificationRef;

  /**
   * Business type of the service
   */
  serviceType?: string;

  /**
   * The life cycle state of the service, such as: [feasibilityChecked], [designed]
   */
  state?: 'feasibilityChecked' | 'designed' | 'reserved' | 'inactive' | 'active' | 'terminated';

  /**
   * A list of supporting resources (SupportingResource [*]).Note: only Service of type RFS can be associated with Resources
   */
  supportingResource?: Array<ResourceRef>;

  /**
   * A list of supporting services (SupportingService [*]). A collection of services that support this service (bundling, link CFS to RFS)
   */
  supportingService?: Array<ServiceRef>;
  uuid?: string;
}
