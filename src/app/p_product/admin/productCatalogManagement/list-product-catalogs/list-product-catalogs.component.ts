import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Catalog } from 'src/app/openApis/productCatalogManagement/models';
import { CatalogService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { DeleteProductCatalogsComponent } from '../delete-product-catalogs/delete-product-catalogs.component';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-list-product-catalogs',
  templateUrl: './list-product-catalogs.component.html',
  styleUrls: ['./list-product-catalogs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListProductCatalogsComponent implements OnInit {

  constructor(
    private catalogService: CatalogService,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'actions']
  dataSource  = new MatTableDataSource<Catalog>()

  productCatalogs: Catalog[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.retrieveCatalogsList()
  }

  retrieveCatalogsList() {
    this.catalogService.listCatalog({}).subscribe(
      data => { this.productCatalogs = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.productCatalogs
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

  openCatalogDeleteDialog(element: Catalog) {
    const dialogRef = this.dialog.open(DeleteProductCatalogsComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toastrService.success("Product Catalogs list is successfully updated")
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
