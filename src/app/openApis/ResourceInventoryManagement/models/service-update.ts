/* tslint:disable */
import { RelatedParty } from './related-party';
import { Note } from './note';
import { Place } from './place';
import { Characteristic } from './characteristic';
import { ServiceOrderRef } from './service-order-ref';
import { ServiceRelationship } from './service-relationship';
import { ServiceSpecificationRef } from './service-specification-ref';
import { ResourceRef } from './resource-ref';
import { ServiceRef } from './service-ref';

/**
 * Service is a base class for defining the Service hierarchy. All Services are characterized as either being possibly visible and usable by a Customer or not. This gives rise to the two subclasses of Service: CustomerFacingService and ResourceFacingService. Skipped properties: id,href,serviceRelationship
 */
export interface ServiceUpdate {

  /**
   * A list of related party references (RelatedParty [1..*]). A related party defines party or party role linked to a specific entity.
   */
  relatedParty?: Array<RelatedParty>;

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;

  /**
   * When sub-classing, this defines the sub-class entity name
   */
  '@type'?: string;

  /**
   * Is it a customer facing or resource facing service
   */
  category?: string;

  /**
   * Free-text description of the service
   */
  description?: string;

  /**
   * Date when the service ends
   */
  endDate?: string;

  /**
   * If TRUE, this Service has already been started
   */
  hasStarted?: boolean;

  /**
   * If FALSE, this particular Service has NOT been enabled for use
   */
  isServiceEnabled?: boolean;

  /**
   * If TRUE, this Service can be changed without affecting any other services
   */
  isStateful?: boolean;

  /**
   * Name of the service
   */
  name?: string;

  /**
   * A list of notes made on this service
   */
  note?: Array<Note>;

  /**
   * A list of places related to this service, e.g. where the service is installed, a delivery address for equipment, etc.
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
   * Date when the service was created (whatever its status).
   */
  serviceDate?: string;

  /**
   * A list of service orders related to this service
   */
  serviceOrder?: Array<ServiceOrderRef>;

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
   * Date when the service starts
   */
  startDate?: string;

  /**
   * This attribute is an enumerated integer that indicates how the Service is started, such as: 0: Unknown; 1: Automatically by the managed environment; 2: Automatically by the owning device; 3: Manually by the Provider of the Service; 4: Manually by a Customer of the Provider; 5: Any of the above
   */
  startMode?: string;

  /**
   * The life cycle state of the service, such as: feasibilityChecked, designed, reserved, active, inactive, terminated
   */
  state?: 'feasibilityChecked' | 'designed' | 'reserved' | 'inactive' | 'active' | 'terminated';

  /**
   * A list of supporting resources (SupportingResource [*]).Note: only Service of type RFS can be associated with Resources.
   */
  supportingResource?: Array<ResourceRef>;

  /**
   * A list of supporting services (SupportingService [*]). A collection of services that support this service (bundling, link CFS to RFS).
   */
  supportingService?: Array<ServiceRef>;
}
