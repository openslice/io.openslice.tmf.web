/* tslint:disable */
import { PortalUser } from './portal-user';
import { Category } from './category';
import { ExperimentOnBoardDescriptor } from './experiment-on-board-descriptor';
import { ProductExtensionItem } from './product-extension-item';
import { ConstituentVxF } from './constituent-vx-f';
import { ValidationJob } from './validation-job';
export interface ExperimentMetadata {
  owner?: PortalUser;
  categories?: Array<Category>;
  dateCreated?: string;
  dateUpdated?: string;
  descriptor?: string;
  descriptorHTML?: string;
  experimentOnBoardDescriptors?: Array<ExperimentOnBoardDescriptor>;
  extensions?: Array<ProductExtensionItem>;
  iconsrc?: string;
  id?: number;
  longDescription?: string;
  name?: string;
  constituentVxF?: Array<ConstituentVxF>;
  packageLocation?: string;
  packagingFormat?: 'OSMvFIVE' | 'OSMvFSIX';
  published?: boolean;
  screenshots?: string;
  shortDescription?: string;
  termsOfUse?: string;
  uuid?: string;
  valid?: boolean;
  validationJobs?: Array<ValidationJob>;
  validationStatus?: 'NOT_STARTED' | 'UNDER_REVIEW' | 'COMPLETED';
  vendor?: string;
  version?: string;
}
