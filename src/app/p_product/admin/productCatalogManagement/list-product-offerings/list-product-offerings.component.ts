import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ProductOffering, ProductSpecification } from 'src/app/openApis/productCatalogManagement/models';
import { ProductOfferingService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { DeleteProductOfferingComponent } from '../delete-product-offering/delete-product-offering.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-product-offerings',
  templateUrl: './list-product-offerings.component.html',
  styleUrls: ['./list-product-offerings.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListProductOfferingsComponent implements OnInit {

  constructor(
    private productOfferingService: ProductOfferingService,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'actions']
  dataSource = new MatTableDataSource<ProductOffering>()

  productOfferings: ProductOffering[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.retrieveOfferingsList()
  }

  retrieveOfferingsList() {
    this.productOfferingService.listProductOffering({}).subscribe(
      data => { this.productOfferings = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.productOfferings
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
    const dialogRef = this.dialog.open(DeleteProductOfferingComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toastrService.error("An error occurred while attempting to delete Product Offering")
          } else {
            this.toastrService.success("Product Offering list is successfully updated")
            this.retrieveOfferingsList()
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
