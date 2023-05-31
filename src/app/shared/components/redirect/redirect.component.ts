import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    const activePortal = localStorage.getItem('active_portal')

    if (activePortal === 'services') {
      this.router.navigate(['services', 'services_marketplace'])
    }
    else if (activePortal === 'resources') {
      this.router.navigate(['resources', 'resource_catalogs'])
    }
    else if (activePortal === 'testing') {
      this.router.navigate(['testing', 'service_test_specs'])
    }

    else if (activePortal === 'products') {
      this.router.navigate(['products', 'marketplace'])
    }

    else {
      this.router.navigate(['/'])
    }
  }
}
