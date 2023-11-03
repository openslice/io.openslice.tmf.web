import { Alarm, AlarmCreate } from "src/app/openApis/alarmManagement/models";

export interface stricterDefinedAlarm extends Alarm {
    perceivedSeverity?: "critical"|"major"|"minor"|"warning"|"indeterminate"|"cleared"
    alarmType?: "communicationsAlarm"|"processingErrorAlarm"|"environmentalAlarm"|"qualityOfServiceAlarm"|"equipmentAlarm"|"integrityViolation"|"operationalViolation"|"physicalViolation"|"securityService"|"mechanismViolation"|"timeDomainViolation"
    probableCause?: "antennaFailure"|"communicationsSubsystemFailure"|"connectionEstablishmentError"|"cpuCyclesLimitExceeded"|"denialOfService"|"diskFailure"|"excessiveResponseTime"|"outOfCpuCycles"|"outOfMemory"|"outOfService"|"performanceDegraded"|"other"|"resourceAtOrNearingCapacity"|"systemResourcesOverload"|"thresholdCrossed"
    ackState?: "unacknowledged" | "acknowledged"
    state?: "raised"|"updated"|"cleared"
}

export interface stricterDefinedAlarmCreate extends AlarmCreate {
    perceivedSeverity?: "critical"|"major"|"minor"|"warning"|"indeterminate"|"cleared"
    alarmType?: "communicationsAlarm"|"processingErrorAlarm"|"environmentalAlarm"|"qualityOfServiceAlarm"|"equipmentAlarm"|"integrityViolation"|"operationalViolation"|"physicalViolation"|"securityService"|"mechanismViolation"|"timeDomainViolation"
    probableCause?: "antennaFailure"|"communicationsSubsystemFailure"|"connectionEstablishmentError"|"cpuCyclesLimitExceeded"|"denialOfService"|"diskFailure"|"excessiveResponseTime"|"outOfCpuCycles"|"outOfMemory"|"outOfService"|"performanceDegraded"|"other"|"resourceAtOrNearingCapacity"|"systemResourcesOverload"|"thresholdCrossed"
    ackState?: "unacknowledged" | "acknowledged"
    state?: "raised"|"updated"|"cleared"
}