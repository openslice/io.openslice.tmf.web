import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { IAppConfig } from 'src/app/models/app-config.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private appService: AppService
  ) { }

  config: IAppConfig
  currentYear: number

  ngOnInit() {
    this.config = this.appService.config

    this.currentYear = new Date().getFullYear()
  }

}
