import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-navbar',
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.scss']
})
export class VerticalNavbarComponent implements OnInit {

  constructor() { }

  @Input('marketplace') marketplace:string

  ngOnInit() {
    console.log(this.marketplace)
  }

}
