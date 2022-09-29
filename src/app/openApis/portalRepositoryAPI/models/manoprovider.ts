/* tslint:disable */
import { MANOplatform } from './manoplatform';
export interface MANOprovider {
  apiEndpoint?: string;
  authorizationBasicHeader?: string;
  description?: string;
  enabledForONBOARDING?: boolean;
  id?: number;
  name?: string;
  password?: string;
  supportedMANOplatform?: MANOplatform;
  username?: string;
}
