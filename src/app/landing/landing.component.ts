import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';
import { IAppConfig } from '../models/app-config.model';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private appService: AppService, 
    private oauthService: OAuthService
  ) { }

  config: IAppConfig
  loggedIn: false

  ngOnInit() {
    this.config = this.appService.config
    console.log(this.oauthService)
  }

  login() {
    console.log('login')
    this.oauthService.initLoginFlow()
  }
}
