import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models/service-specification';
import { Router } from '@angular/router';
import { CloneGstTemplateComponent } from 'src/app/admin/services/edit-service-specs/clone-gst-template/clone-gst-template.component';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { CloneVinniTemplateComponent } from 'src/app/admin/services/edit-service-specs/clone-vinni-template/clone-vinni-template.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private specService: ServiceSpecificationService,
    private router: Router,
    private dialog: MatDialog,
    private toast: ToastrService
  ) { }

  loggedIn: boolean
  isNavbarCollapsed: boolean = true
  
  ngOnInit() {
    this.loggedIn = false
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

}
