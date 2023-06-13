import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ProductSpecification } from 'src/app/openApis/productCatalogManagement/models';
import { ProductSpecificationService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { DeleteProductSpecsComponent } from '../delete-product-specs/delete-product-specs.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-product-specs',
  templateUrl: './list-product-specs.component.html',
  styleUrls: ['./list-product-specs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListProductSpecsComponent implements OnInit {

  constructor(
    private specService: ProductSpecificationService,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    public appService: AppService

  ) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'actions']
  dataSource  = new MatTableDataSource<ProductSpecification>()

  serviceSpecs: ProductSpecification[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

  ngOnInit() {
    this.retrieveSpecsList()
  }

  retrieveSpecsList() {
    this.specService.listProductSpecification({}).subscribe(
      data => { this.serviceSpecs = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.serviceSpecs
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

  openSpecDeleteDialog(element: ProductSpecification) {
    const dialogRef = this.dialog.open(DeleteProductSpecsComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toastrService.error("An error occurred while attempting to delete Product Specification")
          } else {
            this.toastrService.success("Product Specification list is successfully updated")
            this.retrieveSpecsList()
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
