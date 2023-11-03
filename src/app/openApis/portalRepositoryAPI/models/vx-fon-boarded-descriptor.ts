/* tslint:disable */
import { MANOprovider } from './manoprovider';
import { VxFMetadata } from './vx-fmetadata';
export interface VxFOnBoardedDescriptor {
  deployId?: string;
  feedbackMessage?: string;
  id?: number;
  lastOnboarding?: string;
  obMANOprovider?: MANOprovider;
  onBoardingStatus?: 'UNKNOWN' | 'FAILED' | 'ONBOARDED' | 'OFFBOARDED' | 'OFFBOARDING' | 'ONBOARDING';
  uuid?: string;
  vxf?: VxFMetadata;
  vxfMANOProviderID?: string;
  vxfid?: number;
}
