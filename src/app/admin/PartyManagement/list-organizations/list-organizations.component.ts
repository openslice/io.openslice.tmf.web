import { Component, OnInit, ViewChild } from '@angular/core';
import { OrganizationService } from 'src/app/openApis/PartyManagement/services';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { Organization } from 'src/app/openApis/PartyManagement/models';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteOrganizationComponent } from '../delete-organization/delete-organization.component';

@Component({
  selector: 'app-list-organizations',
  templateUrl: './list-organizations.component.html',
  styleUrls: ['./list-organizations.component.scss']
})
export class ListOrganizationsComponent implements OnInit {

  constructor(
    private organizationService: OrganizationService,
    private dialog: MatDialog,
    private toast: ToastrService
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
        console.log(result)
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
