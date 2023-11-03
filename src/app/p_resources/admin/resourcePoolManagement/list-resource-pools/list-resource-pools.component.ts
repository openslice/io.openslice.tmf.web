import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { ResourcePoolService } from 'src/app/openApis/resourcePoolManagement/services';
import { EditResourcePoolComponent } from '../edit-resource-pool/edit-resource-pool.component';
import { DeleteResourcePoolComponent } from '../delete-resource-pool/delete-resource-pool.component';
import { ResourcePool } from 'src/app/openApis/resourcePoolManagement/models';
import { AppService } from 'src/app/shared/services/app.service';


@Component({
  selector: 'list-resource-pools',
  templateUrl: './list-resource-pools.component.html',
  styleUrls: ['./list-resource-pools.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})

export class ListResourcePoolsComponent implements OnInit {


  constructor(
    private resourcePoolService: ResourcePoolService, 
    public dialog: MatDialog, 
    private toast: ToastrService,
    public appService: AppService
    ) { }

  //displayedColumns = ['name', 'description', 'version', 'lastUpdate',  'lifecycleStatus', 'actions']
  displayedColumns = ['name', 'description', 'resources_allocated', 'actions']
  dataSource  = new MatTableDataSource<ResourcePool>()
  resourcePools: ResourcePool[]

  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveResourcePoolsList()
  }

  
  retrieveResourcePoolsList() {
    this.resourcePoolService.listResourcePool({}).subscribe(
      data => { this.resourcePools = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.resourcePools
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'lastUpdate': return new Date(item.lastUpdate).getTime();
            case 'resources_allocated': {return item.capacity ? item.capacity.resources.length : 0};
            default: return item[property];
          }
        }
      }
    )
  }

  openResourcePoolUpdateDialog(element: ResourcePool) {
    const dialogRef = this.dialog.open(EditResourcePoolComponent, {data: element, disableClose: true})

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) {
          this.toast.success("Resource Pools list is successfully updated")
          this.retrieveResourcePoolsList() 
        }
      }
    )
  }

  openResourcePoolDeleteDialog(element: ResourcePool) {
    const dialogRef = this.dialog.open(DeleteResourcePoolComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Resource Pools list is successfully updated")
          this.retrieveResourcePoolsList()
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