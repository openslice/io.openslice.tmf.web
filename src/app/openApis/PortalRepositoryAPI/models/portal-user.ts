/* tslint:disable */
import { DeploymentDescriptor } from './deployment-descriptor';
import { Product } from './product';
import { SubscribedResource } from './subscribed-resource';
import { VFImage } from './vfimage';
export interface PortalUser {
  organization?: string;
  active?: boolean;
  createdAt?: string;
  currentSessionID?: string;
  deployments?: Array<DeploymentDescriptor>;
  email?: string;
  id?: number;
  name?: string;
  apikey?: string;
  password?: string;
  passwordUnencrypted?: string;
  products?: Array<Product>;
  roles?: Array<'ROLE_ADMIN' | 'ROLE_EXPERIMENTER' | 'ROLE_NFV_DEVELOPER' | 'ROLE_TESTBED_PROVIDER' | 'ROLE_MENTOR'>;
  subscribedResources?: Array<SubscribedResource>;
  username?: string;
  vfimages?: Array<VFImage>;
}
