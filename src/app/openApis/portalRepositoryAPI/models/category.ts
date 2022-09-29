/* tslint:disable */
import { Product } from './product';
export interface Category {
  appscount?: number;
  id?: number;
  name?: string;
  products?: Array<Product>;
  productsCount?: number;
  vxFscount?: number;
}
