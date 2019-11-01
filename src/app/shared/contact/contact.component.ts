import { Component, OnInit } from '@angular/core';

import { AppService } from '../services/app.service';
import { IAppConfig } from 'src/app/models/app-config.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  config: IAppConfig
  ngOnInit() {
    this.config = this.appService.config
  }

}
