import { Component, OnInit, ViewChild } from '@angular/core';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Service } from 'src/app/openApis/resourceInventoryManagement/models';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-list-resource-inventory',
  templateUrl: './list-resource-inventory.component.html',
  styleUrls: ['./list-resource-inventory.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class ListResourceInventoryComponent implements OnInit {

  constructor(
    private resourceService: ResourceService,
    private toast: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'category', 'state', 'resourceDate', 'actions']
  dataSource  = new MatTableDataSource<Service>()

  resources: Service[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveResourceList()
  }

  retrieveResourceList() {
    this.resourceService.listService({}).subscribe(
      data => { this.resources = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.resources
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator

        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'resourceDate': return new Date(item.serviceDate).getTime();
            case 'category': return item[property] === 'CustomerFacingResourceSpecification' ? 'CFSS': 'RFSS';
            default: return item[property];
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

  resourceStateClassSelector(state:'feasibilityChecked'| 'designed'| 'reserved'| 'inactive'| 'active'| 'terminated') {
    let cssClass: string = ''
    switch (state) {
      case 'feasibilityChecked':
        cssClass += ' text-primary'
        break;
      case 'inactive':
      case 'terminated':
        cssClass += ' text-danger'
        break;
      case 'active':
        cssClass += ' text-success'
        break;
      default:
        cssClass += ' text-warning'
    }
    return cssClass
  }

}
