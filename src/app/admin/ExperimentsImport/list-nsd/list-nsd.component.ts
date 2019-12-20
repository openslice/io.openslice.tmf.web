import { Component, OnInit, ViewChild } from '@angular/core';
import { ArtifactsApiControllerService } from 'src/app/openApis/PortalRepositoryAPI/services';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { ImportNsdDialogComponent } from './import-nsd-dialog/import-nsd-dialog.component';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models';

@Component({
  selector: 'app-list-nsd',
  templateUrl: './list-nsd.component.html',
  styleUrls: ['./list-nsd.component.scss']
})
export class ListNsdComponent implements OnInit {

  constructor(
    private artifactsApiService: ArtifactsApiControllerService,
    private dialog: MatDialog,
    private router: Router,
    private toast: ToastrService
  ) { }

  displayedColumns = ['name', 'short_description', 'version', 'vendor',  'packaging_format', 'actions']
  dataSource  = new MatTableDataSource<any>()
  experiments: any

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.retrieveExperiments()
  }

  retrieveExperiments() {
    this.artifactsApiService.getAllAppsUsingGET().subscribe(
      data => this.experiments = data,
      error => console.error(error),
      () => {
        this.dataSource.data = this.experiments
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

  openImportDialog(experiment) {
    const dialogRef = this.dialog.open(ImportNsdDialogComponent, {data: experiment})

    dialogRef.afterClosed().subscribe (
      (result: ServiceSpecification) => {
        if (result) {
          this.toast.success(`Service Specification is successfully created form ${experiment.name}`)
          this.router.navigate(['service_spec_update', result.id])
        }
      }
    )
  }


}
