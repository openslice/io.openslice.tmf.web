import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/shared/services/app.service';
import { IAppConfig } from 'src/app/shared/models/app-config.model';
import { ThemingService } from 'src/app/theming/theming.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private appService: AppService,
    private themingService: ThemingService
  ) { }

  config: IAppConfig
  customContactHTML: string
  customIntroductionHTML: string

  ngOnInit() {
    this.config = this.appService.config

    const customContactHTML = this.themingService.getConfig().CONNECT_WITH_US_HTML
    if (customContactHTML) {this.customContactHTML = customContactHTML}

    const customIntroductionHTML = this.themingService.getConfig().WHO_WE_ARE_HTML
    if (customIntroductionHTML) { this.customIntroductionHTML = customIntroductionHTML }
  }

}
