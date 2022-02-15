/* tslint:disable */
import { RefVFImage } from './ref-vfimage';
import { VFImage } from './vfimage';
export interface Infrastructure {
  datacentername?: string;
  email?: string;
  id?: number;
  name?: string;
  organization?: string;
  refSupportedImages?: Array<RefVFImage>;
  supportedImages?: Array<VFImage>;
  vimid?: string;
}
