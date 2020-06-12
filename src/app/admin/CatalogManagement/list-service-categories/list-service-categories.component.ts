import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ServiceCategory } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceCategoryService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { DeleteServiceCategoryComponent } from '../delete-service-category/delete-service-category.component';
import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-list-service-categories',
  templateUrl: './list-service-categories.component.html',
  styleUrls: ['./list-service-categories.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListServiceCategoriesComponent implements OnInit {

  constructor(
    private categoryService: ServiceCategoryService,
    public dialog: MatDialog,
    private toast: ToastrService
    ) { }

  displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'isRoot', 'parent', 'actions']
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
        this.serviceCategories.forEach( cat => {
          if (cat.parentId) cat['parentName'] = this.serviceCategories.find( el =>  el.id === cat.parentId).name
        })

        this.dataSource.data = this.serviceCategories
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


  openCategoryDeleteDialog(element: ServiceCategory) {
    const dialogRef = this.dialog.open(DeleteServiceCategoryComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Service Categories list is successfully updated")
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
