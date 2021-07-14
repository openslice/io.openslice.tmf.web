import { Component } from '@angular/core';

import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { AuthService } from './shared/services/auth.service';
import { BootstrapService } from './bootstrap/bootstrap.service';
import { ThemingService } from './theming/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  providers: []
})

export class AppComponent {
  title = 'io-openslice-portal-web';

  themeID = 'default'

  favIcon: HTMLLinkElement = document.querySelector('#appIcon');
  // private jwtHelper: JwtHelperService = new JwtHelperService();
  
  // private _decodedAccessToken: any;
  // private _decodedIDToken: any;
  // get decodedAccessToken() { return this._decodedAccessToken; }
  // get decodedIDToken() { return this._decodedIDToken; }

  constructor(
    private authService: AuthService,
    private themingService: ThemingService
    ) {
      this.authService.runInitialLoginSequence()
      
      this.themeID = this.themingService.getConfig().THEME_ID
      this.favIcon.href = this.themingService.getConfig().FAVICON_PATH
  }



  // private handleNewToken() {
  //   this._decodedAccessToken = this.jwtHelper.decodeToken(this.oauthService.getAccessToken());
  //   this._decodedIDToken = this.jwtHelper.decodeToken(this.oauthService.getIdToken());
  // }


}