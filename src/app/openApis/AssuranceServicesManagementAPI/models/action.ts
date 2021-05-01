/* tslint:disable */
import { ActionCharacteristic } from './action-characteristic';
import { ActionSpecificationRef } from './action-specification-ref';

/**
 * Action element
 */
export interface Action {
  actionCharacteristics?: Array<ActionCharacteristic>;
  actionSpecificationRef?: ActionSpecificationRef;
  name?: string;
  uuid?: string;
}
