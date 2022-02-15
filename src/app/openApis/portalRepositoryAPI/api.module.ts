/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { WebMvcLinksHandlerService } from './services/web-mvc-links-handler.service';
import { OperationHandlerService } from './services/operation-handler.service';
import { PortalRepositoryApiImplService } from './services/portal-repository-api-impl.service';
import { ArtifactsApiControllerService } from './services/artifacts-api-controller.service';
import { PortalRepositoryVfImageApiService } from './services/portal-repository-vf-image-api.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    WebMvcLinksHandlerService,
    OperationHandlerService,
    PortalRepositoryApiImplService,
    ArtifactsApiControllerService,
    PortalRepositoryVfImageApiService,
    BasicErrorControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
