/* tslint:disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration for Api services
 */
@Injectable({
  providedIn: 'root',
})
export class ApiConfiguration {
  rootUrl: string = '//portal.openslice.io';
}

export interface ApiConfigurationInterface {
  rootUrl?: string;
}
