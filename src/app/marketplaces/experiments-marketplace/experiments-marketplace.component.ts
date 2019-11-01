import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments-marketplace',
  templateUrl: './experiments-marketplace.component.html',
  styleUrls: ['./experiments-marketplace.component.scss']
})
export class ExperimentsMarketplaceComponent implements OnInit {

  constructor() { }
  experiments = "test"
  ngOnInit() {
  }

}
