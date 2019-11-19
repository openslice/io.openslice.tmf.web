import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private specService: ServiceSpecificationService,
    private router: Router
  ) { }

  loggedIn: boolean
  isNavbarCollapsed: boolean = true
  
  ngOnInit() {
    this.loggedIn = false
  }

  onGSTtemplateClick() {
    // this.specService.
    this.router.navigate(['service_spec_update'])
  }

  onVINNItemplateClick() {
    this.router.navigate(['service_spec_update'])
  }

}
