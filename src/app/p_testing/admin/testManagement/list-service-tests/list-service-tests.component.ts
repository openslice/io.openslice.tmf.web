import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { ServiceTestService } from 'src/app/openApis/serviceTestManagement/services';
import { ServiceTest } from 'src/app/openApis/serviceTestManagement/models';
import { AppService } from 'src/app/shared/services/app.service';
import { DeleteServiceTestComponent } from '../delete-service-test/delete-service-test.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-service-tests',
  templateUrl: './list-service-tests.component.html',
  styleUrls: ['./list-service-tests.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListServiceTestsComponent implements OnInit {

  constructor(
    private testSpecificationService: ServiceTestService,
    private toast: ToastrService,
    public appService: AppService,
    private dialog: MatDialog
  ) { }

  displayedColumns = ['name', 'description', 'lastUpdate', 'testSpecification', 'service', 'actions']
  dataSource  = new MatTableDataSource<ServiceTest>()

  serviceSpecifications: ServiceTest[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.retrieveTestsList()
  }

  retrieveTestsList() {
    this.testSpecificationService.listServiceTest({}).subscribe(
      data => { this.serviceSpecifications = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.serviceSpecifications
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        // this.dataSource.sortingDataAccessor = (item, property): string | number => {
        //   switch (property) {
        //     case 'lastUpdate': return new Date(item.lastUpdate).getTime();
        //     default: return item[property];
        //   }
        // }

      }
    )
  }

  openTestDeleteDialog(element: ServiceTest) {
    const dialogRef = this.dialog.open(DeleteServiceTestComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occurred while attempting to delete Service Test Instance")
          } else {
            this.toast.success("Service Test Instance list is successfully updated")
            this.retrieveTestsList()
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
