/* tslint:disable */
import { ExperimentMetadata } from './experiment-metadata';
import { MANOprovider } from './manoprovider';
export interface ExperimentOnBoardDescriptor {
  id?: number;
  deployId?: string;
  experimentMANOProviderID?: string;
  experimentid?: number;
  feedbackMessage?: string;
  experiment?: ExperimentMetadata;
  lastOnboarding?: string;
  obMANOprovider?: MANOprovider;
  onBoardingStatus?: 'UNKNOWN' | 'FAILED' | 'ONBOARDED' | 'OFFBOARDED' | 'OFFBOARDING' | 'ONBOARDING';
  uuid?: string;
  vxfMANOProviderID?: string;
}
