import { Component } from '@angular/core';

import { BaseRootEntity } from 'src/app/openApis/ServiceCatalogManagementCustom/models/BaseRootEntity'
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'src/assets/config/config.oauth';
import { AppService } from './shared/services/app.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers: [OAuthService]
})
export class AppComponent {
  title = 'io-openslice-portal-web';

  // private jwtHelper: JwtHelperService = new JwtHelperService();
  
  // private _decodedAccessToken: any;
  // private _decodedIDToken: any;
  // get decodedAccessToken() { return this._decodedAccessToken; }
  // get decodedIDToken() { return this._decodedIDToken; }

  constructor(private authService: AuthService) {
    this.authService.runInitialLoginSequence()
  }



  // private handleNewToken() {
  //   this._decodedAccessToken = this.jwtHelper.decodeToken(this.oauthService.getAccessToken());
  //   this._decodedIDToken = this.jwtHelper.decodeToken(this.oauthService.getIdToken());
  // }


}