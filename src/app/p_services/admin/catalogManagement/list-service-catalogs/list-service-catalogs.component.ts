import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ServiceCatalogService } from 'src/app/openApis/serviceCatalogManagement/services';
import { ServiceCatalog } from 'src/app/openApis/serviceCatalogManagement/models';
import { EditServiceCatalogsComponent } from '../edit-service-catalogs/edit-service-catalogs.component';
import { DeleteServiceCatalogComponent } from '../delete-service-catalog/delete-service-catalog.component';
import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-service-catalogs',
  templateUrl: './list-service-catalogs.component.html',
  styleUrls: ['./list-service-catalogs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListServiceCatalogsComponent implements OnInit {

  constructor(
    private catalogService: ServiceCatalogService, 
    public dialog: MatDialog, 
    private toast: ToastrService
    ) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'actions']
  dataSource  = new MatTableDataSource<ServiceCatalog>()

  serviceCatalogs: ServiceCatalog[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveCatalogsList()
  }

  retrieveCatalogsList() {
    this.catalogService.listServiceCatalog({}).subscribe(
      data => { this.serviceCatalogs = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.serviceCatalogs
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'lastUpdate': return new Date(item.lastUpdate).getTime();
            default: return item[property];
          }
        }
      }
    )
  }

  openCatalogUpdateDialog(element: ServiceCatalog) {
    const dialogRef = this.dialog.open(EditServiceCatalogsComponent, {data: element, disableClose: true})

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) {
          this.toast.success("Service Catalogs list is successfully updated")
          this.retrieveCatalogsList() 
        }
      }
    )
  }

  openCatalogDeleteDialog(element: ServiceCatalog) {
    const dialogRef = this.dialog.open(DeleteServiceCatalogComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Service Catalogs list is successfully updated")
          this.retrieveCatalogsList()
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
