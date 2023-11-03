/* tslint:disable */
import { PortalUser } from './portal-user';
export interface SubscribedResource {
  active?: boolean;
  id?: number;
  lastUpdate?: string;
  owner?: PortalUser;
  url?: string;
  uuid?: string;
}
