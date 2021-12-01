import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ResourceCategory } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceCategoryService } from 'src/app/openApis/ResourceCatalogManagement/services';
import { DeleteResourceCategoryComponent } from '../delete-resource-category/delete-resource-category.component';
import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

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
    private toast: ToastrService
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
        this.resourceCategories.forEach( cat => {
          if (cat.parentId) cat['parentName'] = this.resourceCategories.find( el =>  el.id === cat.parentId).name
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
    const dialogRef = this.dialog.open(DeleteResourceCategoryComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
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
