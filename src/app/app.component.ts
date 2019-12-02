import { Component } from '@angular/core';

import { BaseRootEntity } from 'src/app/openApis/ServiceCatalogManagementCustom/models/BaseRootEntity'
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'src/assets/config/config.oauth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers: [OAuthService]
})
export class AppComponent {
  title = 'io-openslice-portal-web';

  constructor(private oauthService: OAuthService) {
    this.configure()
    console.log(this.oauthService)
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin()
  }
}