import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models/service-specification';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CloneGstTemplateComponent } from 'src/app/admin/CatalogManagement/edit-service-specs/clone-gst-template/clone-gst-template.component';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CloneVinniTemplateComponent } from 'src/app/admin/CatalogManagement/edit-service-specs/clone-vinni-template/clone-vinni-template.component';
import { AuthService } from '../services/auth.service';
import { RequesterService } from 'src/app/requester/services/requester.service';
import { trigger } from '@angular/animations';
import { fadeIn } from '../animations/animations';
import { ThemingService } from 'src/app/theming/theming.service';
import { IAppThemingConfig } from 'src/app/models/app-config-theming.model';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private toast: ToastrService,
    public authService: AuthService,
    public requesterService: RequesterService,
    private themingService: ThemingService,
    public appService: AppService
  ) { }

  loggedIn: boolean
  isNavbarCollapsed: boolean = true
  themeConfig: IAppThemingConfig

  ngOnInit() {
    this.loggedIn = this.authService.hasValidToken()

    this.authService.canActivateProtectedRoutes$.subscribe(
      _ => {
        if (this.authService.hasValidToken()) {
          this.authService.fetchUserInfo()          
        }
      }
    )

    this.themeConfig = this.themingService.getConfig()
  }

  onGSTtemplateClick() {
    // this.specService.
    const dialogRef = this.dialog.open(CloneGstTemplateComponent, {disableClose:true})

    dialogRef.afterClosed().subscribe (
      (result: ServiceSpecification | undefined) => {
        if (result) {
          this.router.navigate([this.appService.portalDomain, 'service_spec_update', result.id])
          this.toast.success("GST External Template is successfully cloned")
        }
      }
    )
  }

  onVINNItemplateClick() {
    const dialogRef = this.dialog.open(CloneVinniTemplateComponent, {disableClose:true})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.router.navigate([this.appService.portalDomain, 'service_spec_update', result.id])
          this.toast.success("VINNI-SB Template is successfully cloned")
          // this.router.navigate(['service_spec_update'])
        }
      }
    )
  }

  logout() {
    console.warn('logging out...')
    
    this.authService.logout()

    // this.router.navigate([this.router.routerState.snapshot.url])
  }

  login() {
    this.loggedIn = false
    this.authService.login()
  }

}
