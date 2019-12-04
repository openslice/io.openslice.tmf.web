/* tslint:disable */
import { Infrastructure } from './infrastructure';
import { PortalUser } from './portal-user';
import { RefVxF } from './ref-vx-f';
import { VxFMetadata } from './vx-fmetadata';
export interface VFImage {
  publicURL?: string;
  dateCreated?: string;
  deployedInfrastructures?: Array<Infrastructure>;
  id?: number;
  name?: string;
  owner?: PortalUser;
  packageLocation?: string;
  dateUpdated?: string;
  published?: boolean;
  refVxFs?: Array<RefVxF>;
  shortDescription?: string;
  termsOfUse?: string;
  usedByVxFs?: Array<VxFMetadata>;
  uuid?: string;
}
