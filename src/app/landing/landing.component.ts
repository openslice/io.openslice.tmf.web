import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';
import { IAppConfig } from '../models/app-config.model';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private appService: AppService,
    public authService: AuthService 
  ) { }

  config: IAppConfig
  loggedIn: boolean

  ngOnInit() {
    this.config = this.appService.config
    this.authService.isAuthenticated$.subscribe(
      isAuthenticated => this.loggedIn = isAuthenticated
    )
  }

  login() {
    console.log('login')
    this.authService.login()
  }
}
