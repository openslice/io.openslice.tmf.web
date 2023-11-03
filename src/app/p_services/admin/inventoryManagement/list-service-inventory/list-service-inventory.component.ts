import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/openApis/serviceInventoryManagement/services';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/openApis/serviceInventoryManagement/models';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-list-service-inventory',
  templateUrl: './list-service-inventory.component.html',
  styleUrls: ['./list-service-inventory.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class ListServiceInventoryComponent implements OnInit {

  constructor(
    private serviceService: ServiceService,
    private toast: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'category', 'state', 'serviceDate', 'serviceOrder', 'actions']
  dataSource  = new MatTableDataSource<Service>()

  services: Service[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.retrieveServiceList()
  }

  retrieveServiceList() {
    this.serviceService.listService({}).subscribe(
      data => { this.services = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.services
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'serviceDate': return new Date(item.serviceDate).getTime();
            case 'category': return item[property] === 'CustomerFacingServiceSpecification' ? 'CFSS': 'RFSS';
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

  serviceStateClassSelector(state:'feasibilityChecked'| 'designed'| 'reserved'| 'inactive'| 'active'| 'terminated') {
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
