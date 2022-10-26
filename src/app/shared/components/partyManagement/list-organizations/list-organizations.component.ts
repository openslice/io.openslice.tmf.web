import { Component, OnInit, ViewChild } from '@angular/core';
import { OrganizationService } from 'src/app/openApis/partyManagement/services';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Organization } from 'src/app/openApis/partyManagement/models';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteOrganizationComponent } from '../delete-organization/delete-organization.component';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-list-organizations',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class ListOrganizationsComponent implements OnInit {

  constructor(
    private organizationService: OrganizationService,
    private dialog: MatDialog,
    private toast: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'tradingName', 'isLegalEntity', 'status', 'actions']
  dataSource  = new MatTableDataSource<Organization>()

  organizations: Organization[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.retrieveOrganizations()
  }

  retrieveOrganizations() {
    this.organizationService.listOrganization({}).subscribe(
      data => { this.organizations = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.organizations
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    )
  }

  openOrganizationDeleteDialog(element: Organization) {
    const dialogRef = this.dialog.open(DeleteOrganizationComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occurred while attempting to delete Organization")
          } else {
            this.toast.success("Organizations list is successfully updated")
            this.retrieveOrganizations()
          }
        }
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
