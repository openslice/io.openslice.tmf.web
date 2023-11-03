import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAppConfig } from 'src/app/shared/models/app-config.model';
import { AppService } from 'src/app/shared/services/app.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-portals',
  templateUrl: './portals.component.html',
  styleUrls: ['./portals.component.scss']
})
export class PortalsComponent implements OnInit {

  constructor(
    public appService: AppService,
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
    this.authService.login()
  }

}
