/* tslint:disable */
import { PortalUser } from './portal-user';
import { Category } from './category';
import { ProductExtensionItem } from './product-extension-item';
import { ValidationJob } from './validation-job';
export interface Product {
  owner?: PortalUser;
  categories?: Array<Category>;
  dateUpdated?: string;
  descriptor?: string;
  descriptorHTML?: string;
  extensions?: Array<ProductExtensionItem>;
  iconsrc?: string;
  id?: number;
  longDescription?: string;
  name?: string;
  dateCreated?: string;
  packageLocation?: string;
  published?: boolean;
  screenshots?: string;
  shortDescription?: string;
  termsOfUse?: string;
  uuid?: string;
  validationJobs?: Array<ValidationJob>;
  vendor?: string;
  version?: string;
}
