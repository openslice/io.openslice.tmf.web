import { Component } from '@angular/core';

import { BaseRootEntity } from 'src/app/openApis/ServiceCatalogManagementCustom/models/BaseRootEntity'
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from 'src/assets/config/config.oauth';
import { filter } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

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

  constructor(private oauthService: OAuthService) {
    this.configure()
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);

    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // this.oauthService.events
    //   .pipe(filter((e: any) => e.type === 'token_received'))
    //   .subscribe(() => this.handleNewToken());
    

    this.oauthService.tryLoginCodeFlow()
    .catch(
      error => console.error(error)
    )
    .then(
      () => console.log('logged in')
    )
    // this.oauthService.loadDiscoveryDocument().then(() => {
    //   this.oauthService.tryLogin().then(() => {
    //       console.log('hasValidAccessToken : ', this.oauthService.hasValidAccessToken());
    //       console.log('hasValidIdToken : ', this.oauthService.hasValidIdToken());
    //       console.log('getAccessTokenExpiration : ', this.oauthService.getAccessTokenExpiration());
    //       console.log('getAccessToken : ', this.oauthService.getAccessToken());
    //       console.log('getIdToken : ', this.oauthService.getIdToken());
    
    //     // this.oauthService.loadUserProfile().then(user => {
    //     //   console.log('user : ', user);
    //     // });
    
    //   });
    // });
    
    // this.oauthService.tryLogin()
  }

  // private handleNewToken() {
  //   this._decodedAccessToken = this.jwtHelper.decodeToken(this.oauthService.getAccessToken());
  //   this._decodedIDToken = this.jwtHelper.decodeToken(this.oauthService.getIdToken());
  // }


}