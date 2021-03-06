/* tslint:disable */
import { AffectedService } from './affected-service';
import { AlarmedObject } from './alarmed-object';
import { Comment } from './comment';
import { AlarmRef } from './alarm-ref';
import { CrossedThresholdInformation } from './crossed-threshold-information';
import { RelatedPlaceRefOrValue } from './related-place-ref-or-value';

/**
 * An alarm defined by reference or value. The polymorphic attributes '@type', '@schemaLocation' & '@referredType' are related to the alarm entity and not the RelatedAlarmRefOrValue class itself
 */
export interface AlarmRefOrValue {

  /**
   * When sub-classing, this defines the super-class
   */
  '@baseType'?: string;
  '@referredType'?: string;

  /**
   * A URI to a JSON-Schema file that defines additional attributes and relationships
   */
  '@schemaLocation'?: string;
  '@type'?: string;

  /**
   * Provides the Acknowledgement State of the alarm
   */
  ackState?: string;

  /**
   * Provides the name of the system that last changed the ackState of an alarm, i.e. acknowledged or unacknowledged the alarm.
   */
  ackSystemId?: string;

  /**
   * Provides the id of the user who has last changed the ack state of the alarm, i.e. acknowledged or unacknowledged the alarm.
   */
  ackUserId?: string;
  affectedService?: Array<AffectedService>;

  /**
   * Indicates the last date and time when the alarm is changed on the alarm-owning system. Any change to the alarm whether coming from the alarmed resource, or triggered by a change from the client is changing this time.
   */
  alarmChangedTime?: string;

  /**
   * Indicates the time (as a date + time) at which the alarm is cleared at the source.
   */
  alarmClearedTime?: string;

  /**
   * Contains further information on the alarm.
   */
  alarmDetails?: string;

  /**
   * Indicates if this alarm has been escalated or not.
   */
  alarmEscalation?: boolean;

  /**
   * Indicates the time (as a date + time) at which the alarm occurred at its source.
   */
  alarmRaisedTime?: string;

  /**
   * Indicates the time (as a date + time) at which the alarm was reported by the owning OSS. It might be different from the alarmRaisedTime. For instance, if the alarm list is maintained by an EMS, the alarmRaisedtime would be the time the alarm   was detected by the NE, while the alarmReportingTime would be the time this alarm was stored in the alarm list of the EMS.
   */
  alarmReportingTime?: string;

  /**
   * Categorize the alarm. Should be one of the values defined in X.733 8.1.1 or 3GPP TS 32.111-2 Annex A:  Communications Alarm  Processing Error Alarm  Environmental Alarm  Quality of Service Alarm  Equipment Alarm  Integrity Violation  Operational Violation  Physical Violation  Security Service or Mechanism Violation  Time Domain Violation
   */
  alarmType?: string;
  alarmedObject?: AlarmedObject;

  /**
   * The type (class) of the managed object associated with the event.
   */
  alarmedObjectType?: string;

  /**
   * The actual type of the target instance when needed for disambiguation.
   */
  atReferredType?: string;

  /**
   * Provides the id of the system where the user who invoked the alarmCleared operation is located.
   */
  clearSystemId?: string;

  /**
   * Provides the id of the user who invoked the alarmCleared operation
   */
  clearUserId?: string;
  comment?: Array<Comment>;
  correlatedAlarm?: Array<AlarmRef>;
  crossedThresholdInformation?: CrossedThresholdInformation;

  /**
   * An identifier of the alarm in the source system.
   */
  externalAlarmId?: string;

  /**
   * A reference to the alarm.
   */
  href?: string;

  /**
   * Identifier of the alarm, determined by the alarm owning system
   */
  id?: number;

  /**
   * Indicates whether the alarm is a root cause alarm..
   */
  isRootCause?: boolean;

  /**
   * Name of the entity
   */
  name?: string;
  parentAlarm?: Array<AlarmRef>;

  /**
   * Lists the possible severities that can be allocated to an Alarm. The values are consistent with ITU-T Recommendation X.733. Once an alarm has been cleared, its perceived severity is set to 'cleared' and can no longer be set.
   */
  perceivedSeverity?: string;
  place?: Array<RelatedPlaceRefOrValue>;

  /**
   * Indicates that the Managed Object (related to this alarm) is in planned outage (in planned maintenance, or out-of-service).
   */
  plannedOutageIndicator?: string;

  /**
   * Provides the probable cause of the alarm. The values are consistent with ITU-T Recommendation X.733 or 3GPP TS 32.111-2 Annex B.
   */
  probableCause?: string;

  /**
   * Indicates proposed repair actions, if known to the system emitting the alarm.
   */
  proposedRepairedActions?: string;

  /**
   * Reporting system identity.
   */
  reportingSystemId?: string;

  /**
   * Indicates whether the alarm affects service or not.
   */
  serviceAffecting?: boolean;

  /**
   * Source system identity.
   */
  sourceSystemId?: string;

  /**
   * Provides more specific information about the alarm.
   */
  specificProblem?: string;

  /**
   * Defines the alarm state during its life cycle
   */
  state?: string;
  uuid?: string;
}
