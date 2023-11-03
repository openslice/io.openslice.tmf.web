import { Component, OnInit, ViewChild } from '@angular/core';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Resource } from 'src/app/openApis/resourceInventoryManagement/models';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DeleteResourceComponent } from '../../catalogManagement/delete-resource/delete-resource.component';

@Component({
  selector: 'app-list-resource-inventory',
  templateUrl: './list-resource-inventory.component.html',
  styleUrls: ['./list-resource-inventory.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class ListResourceInventoryComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private resourceService: ResourceService,
    private toast: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', '@type', 'category', 'resourceStatus', 'startOperatingDate', 'actions']
  dataSource  = new MatTableDataSource<Resource>()

  resources: Resource[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveResourceList()
  }

  retrieveResourceList() {
    this.resourceService.listResource({}).subscribe(
      data => { this.resources = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.resources
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator

        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'startOperatingDate': return new Date(item.startOperatingDate).getTime();
            default: return item[property];
          }
        }
      }
    )
  }

  openResourceDeleteDialog(element: Resource) {
    const dialogRef = this.dialog.open(DeleteResourceComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        console.log(result)
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occurred while attempting to delete Resource")
          } else {
            this.toast.success("Resource list is successfully updated")
            this.retrieveResourceList()
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

  resourceStateClassSelector(state:'null'| 'enabled'| 'disabled') {
    let cssClass: string = ''
    switch (state) {
      case 'enabled':
        cssClass += ' text-primary'
        break;
      case 'null':
        cssClass += ' text-danger'
        break;
      case 'disabled':
        cssClass += ' text-success'
        break;
      default:
        cssClass += ' text-warning'
    }
    return cssClass
  }

}
