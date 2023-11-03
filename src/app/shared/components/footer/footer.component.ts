import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { IAppConfig } from 'src/app/shared/models/app-config.model';
import { ThemingService } from 'src/app/theming/theming.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private appService: AppService,
    private themingService: ThemingService
  ) { }

  config: IAppConfig
  currentYear: number
  customFooterHTML: string

  ngOnInit() {
    this.config = this.appService.config

    this.currentYear = new Date().getFullYear()

    const customFooterHTML = this.themingService.getConfig().FOOTER_HTML
    if (customFooterHTML) { this.customFooterHTML = customFooterHTML }
  }

}
