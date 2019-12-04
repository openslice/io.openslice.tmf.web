/* tslint:disable */
import { Category } from './category';
import { ProductExtensionItem } from './product-extension-item';
import { PortalUser } from './portal-user';
import { MANOplatform } from './manoplatform';
import { ValidationJob } from './validation-job';
import { VFImage } from './vfimage';
import { VxFOnBoardedDescriptor } from './vx-fon-boarded-descriptor';
export interface VxFMetadata {
  packageLocation?: string;
  categories?: Array<Category>;
  certifiedBy?: string;
  dateCreated?: string;
  dateUpdated?: string;
  descriptor?: string;
  descriptorHTML?: string;
  extensions?: Array<ProductExtensionItem>;
  iconsrc?: string;
  id?: number;
  longDescription?: string;
  name?: string;
  owner?: PortalUser;
  certified?: boolean;
  packagingFormat?: 'OSMvFIVE' | 'OSMvFSIX';
  published?: boolean;
  screenshots?: string;
  shortDescription?: string;
  supportedMANOPlatforms?: Array<MANOplatform>;
  termsOfUse?: string;
  uuid?: string;
  validationJobs?: Array<ValidationJob>;
  validationStatus?: 'NOT_STARTED' | 'UNDER_REVIEW' | 'COMPLETED';
  vendor?: string;
  version?: string;
  vfimagesVDU?: Array<VFImage>;
  vxfOnBoardedDescriptors?: Array<VxFOnBoardedDescriptor>;
}
