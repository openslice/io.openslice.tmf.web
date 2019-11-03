import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
  ) { }

  loggedIn: boolean
  isNavbarCollapsed: boolean = true
  
  ngOnInit() {
    this.loggedIn = false
  }

}
