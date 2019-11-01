import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ServiceCategory } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceCategoryService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { DeleteServiceCategoryComponent } from '../delete-service-category/delete-service-category.component';
import { EditServiceCategoriesComponent } from '../edit-service-categories/edit-service-categories.component';

@Component({
  selector: 'app-list-service-categories',
  templateUrl: './list-service-categories.component.html',
  styleUrls: ['./list-service-categories.component.scss']
})
export class ListServiceCategoriesComponent implements OnInit {

  constructor(
    private categoryService: ServiceCategoryService,
    public dialog: MatDialog
    ) { }

  displayedColumns = ['id', 'name', 'description', 'version', 'lastUpdate',  'lifestyleStatus', 'actions']
  dataSource  = new MatTableDataSource<ServiceCategory>()

  serviceCategories: ServiceCategory[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveCategoriesList()
  }

  retrieveCategoriesList() {
    this.categoryService.listServiceCategory({}).subscribe(
      data => { this.serviceCategories = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.serviceCategories
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'date_created': return new Date(item.lastUpdate).getTime();
            default: return item[property];
          }
        }
      }
    )
  }

  openCategoryUpdateDialog(element: ServiceCategory) {
    const dialogRef = this.dialog.open(EditServiceCategoriesComponent, {data: element, disableClose: true})

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) this.retrieveCategoriesList() 
      }
    )
  }


  openCategoryDeleteDialog(element: ServiceCategory) {
    const dialogRef = this.dialog.open(DeleteServiceCategoryComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) this.retrieveCategoriesList()
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
