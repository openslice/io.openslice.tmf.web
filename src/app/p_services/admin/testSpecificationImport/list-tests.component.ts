import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceSpecification } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceTestSpecification } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { ImportTestDialogComponent } from './import-test-dialog/import-test-dialog.component';

@Component({
  selector: 'app-list-tests',
  templateUrl: './list-tests.component.html',
  styleUrls: ['./list-tests.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListTestsComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private toast: ToastrService,
    private testSpecService: ServiceTestSpecificationService,
    public appService: AppService,
  ) { }

  displayedColumns = ['name', 'description', 'version', 'relatedService', 'actions']
  dataSource  = new MatTableDataSource<ServiceTestSpecification>()
  testSpecifications: ServiceTestSpecification[] = []

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveTestSpecifications()
  }

  retrieveTestSpecifications() {
    this.testSpecService.listServiceTestSpecification({}).subscribe(
      data => this.testSpecifications = data,
      error => console.error(error),
      () => {
        this.dataSource.data = this.testSpecifications
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openImportDialog(testSpecification) {
    const dialogRef = this.dialog.open(ImportTestDialogComponent, {data: testSpecification})

    dialogRef.afterClosed().subscribe (
      (result: ServiceSpecification) => {
        if (result) {
          this.toast.success(`Service Specification is successfully created form ${testSpecification.name}`)
          this.router.navigate([this.appService.portalDomain, 'service_spec_update', result.id])
        }
      }
    )
  }

}
