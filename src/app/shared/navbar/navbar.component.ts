import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models/service-specification';
import { Router } from '@angular/router';
import { CloneGstTemplateComponent } from 'src/app/admin/services/edit-service-specs/clone-gst-template/clone-gst-template.component';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CloneVinniTemplateComponent } from 'src/app/admin/services/edit-service-specs/clone-vinni-template/clone-vinni-template.component';
import { AuthService } from '../services/auth.service';
import { PortalRepositoryApiImplService } from 'src/app/openApis/PortalRepositoryAPI/services';
import { PortalUser } from 'src/app/openApis/PortalRepositoryAPI/models';
import { AuthGuardService } from '../services/auth-guard.service';
import { RequesterService } from 'src/app/requester/services/requester.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private toast: ToastrService,
    public authService: AuthService,
    public requesterService: RequesterService,
    private portalRepApi: PortalRepositoryApiImplService
  ) { }

  loggedIn: boolean
  isNavbarCollapsed: boolean = true
  portalUser: PortalUser

  ngOnInit() {
    this.loggedIn = this.authService.hasValidToken()

    this.authService.canActivateProtectedRoutes$.subscribe(
      _ => {
        if (this.authService.hasValidToken()) {
          this.loggedIn = true
          this.portalRepApi.getUserUsingGET().subscribe(
            user => this.authService.portalUser = this.portalUser = user
          )
        }
      }
    )
  }

  onGSTtemplateClick() {
    // this.specService.
    const dialogRef = this.dialog.open(CloneGstTemplateComponent, {disableClose:true})

    dialogRef.afterClosed().subscribe (
      (result: ServiceSpecification | undefined) => {
        if (result) {
          this.router.navigate(['service_spec_update', result.id])
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
          this.router.navigate(['service_spec_update', result.id])
          this.toast.success("VINNI-SB Template is successfully cloned")
          // this.router.navigate(['service_spec_update'])
        }
      }
    )
  }

  logout() {
    console.log('logout')
    this.authService.logout()

    this.router.navigate([this.router.routerState.snapshot.url])
  }

  login() {
    this.loggedIn = false
    this.authService.login()
  }

}
