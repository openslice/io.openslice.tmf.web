import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceOrderService } from 'src/app/openApis/serviceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { ServiceOrder } from 'src/app/openApis/serviceOrderingManagement/models';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { DeleteServiceOrderComponent } from '../delete-service-order/delete-service-order.component';
import { HttpErrorResponse } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { CacheSearchParametersService } from '../../shared/cache-search-parameters.service';
import { AppService } from 'src/app/shared/services/app.service';


@Component({
  selector: 'app-list-service-orders',
  templateUrl: './list-service-orders.component.html',
  styleUrls: ['./list-service-orders.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListServiceOrdersComponent implements OnInit {

  constructor(
    private serviceOrder: ServiceOrderService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private cacheService: CacheSearchParametersService,
    public appService: AppService
  ) { }

  displayedColumns = ['id', 'placed_by', 'order_date', 'state', 'requested_startdate', 'requested_enddate', 'actions']
  dataSource  = new MatTableDataSource<ServiceOrder>()

  serviceOrders: ServiceOrder[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  orderStates = ['initial', 'acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'partial']

  filterForm = new FormGroup({
    text: new FormControl(),
    fromDate: new FormControl(new Date(new Date().setMonth(new Date().getMonth()-4))),
    toDate: new FormControl(new Date()),
  });

  get fromDate() { return this.filterForm.get('fromDate').value; }
  get toDate() { return this.filterForm.get('toDate').value; }
  get text() { return this.filterForm.get('text').value; }

  ngOnInit() {
    this.retrieveOrderList()
  }

  retrieveOrderList() {
    this.serviceOrder.listServiceOrder({}).subscribe(
      data => { this.serviceOrders = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.serviceOrders
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'placed_by': return item.relatedParty[0].name
            case 'order_date': return new Date(item.orderDate).getTime()
            case 'requested_startdate': return new Date(item.requestedStartDate).getTime()
            case 'requested_enddate': return new Date(item.requestedCompletionDate).getTime()
            default: return item[property]
          }
        }
        this.dataSource.filterPredicate = (data, filter) => {
          // console.log(filter)

          const dataString = `${data.relatedParty[0].name} (${data.relatedParty[0].role})`

          let filterExpression: boolean = true

          // console.log(filterExpression)
          if (this.text) {
            filterExpression = dataString.trim().toLowerCase().includes(this.text)
          }


          if (this.fromDate && this.toDate) {
            filterExpression = filterExpression && new Date(data.orderDate).getTime() >= new Date(this.fromDate).getTime() && new Date(data.orderDate).getTime() <= new Date(this.toDate).getTime()
          }

          return filterExpression
          
        
          if (filter !== "applyPeriodFilter") {
            filter = filter.trim();
            filter = filter.toLowerCase();
            const dataString = `${data.relatedParty[0].name} (${data.relatedParty[0].role})`
            let filterExpression = dataString.trim().toLowerCase().includes(filter)
            if (this.fromDate && this.toDate) {
              filterExpression = new Date(data.orderDate).getTime() >= new Date(this.fromDate).getTime() && new Date(data.orderDate).getTime() <= new Date(this.toDate).getTime() && dataString.trim().toLowerCase().includes(filter)
            }
            return filterExpression        
          }
          
          else 
          {
            if (this.fromDate && this.toDate) {
            return new Date(data.orderDate).getTime() >= new Date(this.fromDate).getTime() && new Date(data.orderDate).getTime() <= new Date(this.toDate).getTime()
            }
          }
          
        }
        this.applyPeriodFilter()
      }
    )
  }

  applyTextFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    if (filterValue) {
      this.dataSource.filter = filterValue;
    }
  }

  applyPeriodFilter() {
    if (this.fromDate && this.toDate)  {
      this.dataSource.filter = "applyPeriodFilter"
    }
    // this.cacheService.serviceOrderListDateFrom = this.fromDate
    // this.cacheService.serviceOrderListDateTo = this.toDate
    // this.dataSource.filterPredicate = this.filterPeriod
  } 

  filterPeriod (data: ServiceOrder, filter: string) {
    return data.orderDate >= this.fromDate && data.orderDate <= this.toDate 
  }

  openOrderDeleteDialog(element: ServiceOrder) {
    const dialogRef = this.dialog.open(DeleteServiceOrderComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toastr.error("An error occurred while attempting to delete Service Order")
          } else {
            this.toastr.success("Service Order list is successfully updated")
            this.retrieveOrderList()
          }
        }
      }
    )
  }



}
