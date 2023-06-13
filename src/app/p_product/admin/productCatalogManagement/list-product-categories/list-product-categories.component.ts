import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/openApis/productCatalogManagement/models';
import { CategoryService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { DeleteProductCategoriesComponent } from '../delete-product-categories/delete-product-categories.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-product-categories',
  templateUrl: './list-product-categories.component.html',
  styleUrls: ['./list-product-categories.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class ListProductCategoriesComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog,
    private toastrService: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'isRoot', 'parent', 'actions']
  dataSource  = new MatTableDataSource<Category>()

  productCategories: Category[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.retrieveCategoriesList()
  }

  retrieveCategoriesList() {
    this.categoryService.listCategory({}).subscribe(
      data => { this.productCategories = data },
      error => { console.error(error) },
      () => {
        this.productCategories.forEach( cat => {
          if (cat.parentId) cat['parentName'] = this.productCategories.find( el =>  el.id === cat.parentId).name
        })

        this.dataSource.data = this.productCategories
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


  openCategoryDeleteDialog(element: Category) {
    const dialogRef = this.dialog.open(DeleteProductCategoriesComponent, {data: element})

    dialogRef.afterClosed().subscribe(
      result => {
        if (result instanceof HttpErrorResponse) {
          this.toastrService.error("An error occurred while attempting to delete Product Category. Please check dependencies.")
        } else {
          this.toastrService.success("Product Categories list is successfully updated")
          this.retrieveCategoriesList()
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
