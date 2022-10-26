import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';
import { ServiceTestSpecification } from 'src/app/openApis/serviceTestManagement/models';
import { AppService } from 'src/app/shared/services/app.service';
import { DeleteServiceTestSpecComponent } from '../delete-service-test-spec/delete-service-test-spec.component';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-list-service-test-specs',
  templateUrl: './list-service-test-specs.component.html',
  styleUrls: ['./list-service-test-specs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListServiceTestSpecsComponent implements OnInit {

  constructor(
    private testSpecificationService: ServiceTestSpecificationService,
    private toast: ToastrService,
    public dialog: MatDialog,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'assignedService', 'actions']
  dataSource  = new MatTableDataSource<ServiceTestSpecification>()

  serviceSpecifications: ServiceTestSpecification[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveTestSpecificationList()
  }

  retrieveTestSpecificationList() {
    this.testSpecificationService.listServiceTestSpecification({}).subscribe(
      data => { this.serviceSpecifications = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.serviceSpecifications
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'lastUpdate': return new Date(item.lastUpdate).getTime();
            default: return item[property];
          }
        }

      }
    )
  }

  openSpecDeleteDialog(element: ServiceTestSpecification) {
    const dialogRef = this.dialog.open(DeleteServiceTestSpecComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occurred while attempting to delete Service Test Specification")
          } else {
            this.toast.success("Service Test Specification list is successfully updated")
            this.retrieveTestSpecificationList()
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
