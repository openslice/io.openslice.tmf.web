import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ResourceCategory } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceCategoryService } from 'src/app/openApis/resourceCatalogManagement/services';
import { DeleteResourceCategoriesComponent } from '../delete-resource-categories/delete-resource-categories.component';
import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-service-categories',
  templateUrl: './list-resource-categories.component.html',
  styleUrls: ['./list-resource-categories.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListResourceCategoriesComponent implements OnInit {

  constructor(
    private categoryService: ResourceCategoryService,
    public dialog: MatDialog,
    private toast: ToastrService,
    public appService: AppService
    ) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'isRoot', 'parent', 'actions']
  dataSource  = new MatTableDataSource<ResourceCategory>()

  resourceCategories: ResourceCategory[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveCategoriesList()
  }

  retrieveCategoriesList() {
    this.categoryService.listResourceCategory({}).subscribe(
      data => { this.resourceCategories = data },
      error => { console.error(error) },
      () => {
        this.resourceCategories.forEach(cat => {
          if (cat.parentId) {
            const parentCategory = this.resourceCategories.find(el => el.id === cat.parentId)
            if (parentCategory) {
              cat['parentName'] = parentCategory.name
            }
          }
        })

        this.dataSource.data = this.resourceCategories
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


  openCategoryDeleteDialog(element: ResourceCategory) {
    const dialogRef = this.dialog.open(DeleteResourceCategoriesComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result instanceof HttpErrorResponse) {
          this.toast.error("An error occurred while attempting to delete Resource Category. Please check dependencies.")
        } else if (result) {
          this.toast.success("Resource Categories list is successfully updated")
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
