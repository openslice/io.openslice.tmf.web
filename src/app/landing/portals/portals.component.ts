import { Component, OnInit } from '@angular/core';
import { IAppConfig } from 'src/app/models/app-config.model';
import { AppService } from 'src/app/shared/services/app.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-portals',
  templateUrl: './portals.component.html',
  styleUrls: ['./portals.component.scss']
})
export class PortalsComponent implements OnInit {

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
    this.authService.login()
  }

}
