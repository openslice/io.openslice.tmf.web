import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ResourceCatalogService } from 'src/app/openApis/ResourceCatalogManagement/services';
import { ResourceCatalog } from 'src/app/openApis/ResourceCatalogManagement/models';
import { EditResourceCatalogsComponent } from '../edit-resource-catalogs/edit-resource-catalogs.component';
import { DeleteResourceCatalogComponent } from '../delete-resource-catalog/delete-resource-catalog.component';
import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-list-service-catalogs',
  templateUrl: './list-resource-catalogs.component.html',
  styleUrls: ['./list-resource-catalogs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListResourceCatalogsComponent implements OnInit {

  constructor(private catalogService: ResourceCatalogService, public dialog: MatDialog, private toast: ToastrService) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'actions']
  dataSource  = new MatTableDataSource<ResourceCatalog>()

  resourceCatalogs: ResourceCatalog[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveCatalogsList()
  }

  retrieveCatalogsList() {
    this.catalogService.listResourceCatalog({}).subscribe(
      data => { this.resourceCatalogs = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.resourceCatalogs
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

  openCatalogUpdateDialog(element: ResourceCatalog) {
    const dialogRef = this.dialog.open(EditResourceCatalogsComponent, {data: element, disableClose: true})

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) {
          this.toast.success("Resource Catalogs list is successfully updated")
          this.retrieveCatalogsList() 
        }
      }
    )
  }

  openCatalogDeleteDialog(element: ResourceCatalog) {
    const dialogRef = this.dialog.open(DeleteResourceCatalogComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Resource Catalogs list is successfully updated")
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
