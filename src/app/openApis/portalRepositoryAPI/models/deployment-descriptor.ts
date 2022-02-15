/* tslint:disable */
import { ExperimentMetadata } from './experiment-metadata';
import { Infrastructure } from './infrastructure';
import { PortalUser } from './portal-user';
import { DeploymentDescriptorVxFPlacement } from './deployment-descriptor-vx-fplacement';
export interface DeploymentDescriptor {
  instanceId?: string;
  configStatus?: string;
  dateCreated?: string;
  description?: string;
  detailedStatus?: string;
  endDate?: string;
  endReqDate?: string;
  experiment?: ExperimentMetadata;
  experimentFullDetails?: ExperimentMetadata;
  feedback?: string;
  id?: number;
  infrastructureForAll?: Infrastructure;
  constituentVnfrIps?: string;
  mentor?: PortalUser;
  name?: string;
  operationalStatus?: string;
  owner?: PortalUser;
  scheduledEndDate?: string;
  scheduledStartDate?: string;
  startDate?: string;
  startReqDate?: string;
  status?: 'UNDER_REVIEW' | 'SCHEDULED' | 'REJECTED' | 'RUNNING' | 'TERMINATED' | 'INSTANTIATING' | 'FAILED' | 'TERMINATING' | 'TERMINATION_FAILED' | 'COMPLETED' | 'FAILED_OSM_REMOVED' | 'DELETION_FAILED';
  uuid?: string;
  vxfPlacements?: Array<DeploymentDescriptorVxFPlacement>;
}
