import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/services/app.service';
import { IAppConfig } from '../models/app-config.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  config: IAppConfig
  loggedIn: false

  ngOnInit() {
    this.config = this.appService.config
  }

  showOauth2OsapiPopup() {}
}
