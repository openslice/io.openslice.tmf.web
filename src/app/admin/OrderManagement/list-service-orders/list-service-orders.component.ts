import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceOrderService } from 'src/app/openApis/ServiceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { ServiceOrder } from 'src/app/openApis/ServiceOrderingManagement/models';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { DeleteServiceOrderComponent } from '../delete-service-order/delete-service-order.component';
import { HttpErrorResponse } from '@angular/common/http';

const today = new Date()


@Component({
  selector: 'app-list-service-orders',
  templateUrl: './list-service-orders.component.html',
  styleUrls: ['./list-service-orders.component.scss']
})
export class ListServiceOrdersComponent implements OnInit {

  constructor(
    private serviceOrder: ServiceOrderService,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) { }

  displayedColumns = ['id', 'placed_by', 'order_date', 'state', 'requested_startdate', 'requested_enddate', 'actions']
  dataSource  = new MatTableDataSource<ServiceOrder>()

  serviceOrders: ServiceOrder[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  orderStates = ['initial', 'acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'partial']

  filterForm = new FormGroup({
    text: new FormControl(),
    fromDate: new FormControl(new Date(new Date().setMonth(today.getMonth()-1))),
    toDate: new FormControl(today),
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
            case 'order_date': return new Date(item.orderDate).getTime()
            case 'requested_startdate': return new Date(item.requestedStartDate).getTime()
            case 'requested_enddate': return new Date(item.requestedCompletionDate).getTime()
            default: return item[property]
          }
        }
        this.dataSource.filterPredicate = (data, filter) => {
          console.log(filter)
          console.log()

          const dataString = `${data.relatedParty[0].name} (${data.relatedParty[0].role})`

          let filterExpression: boolean = true

          console.log(filterExpression)
          if (this.text) {
            filterExpression = dataString.trim().toLowerCase().includes(this.text)
          }


          if (this.fromDate && this.toDate) {
            filterExpression = filterExpression && new Date(data.orderDate).getTime() >= this.fromDate.getTime() && new Date(data.orderDate).getTime() <= this.toDate.getTime()
          }

          return filterExpression
          
        
          if (filter !== "applyPeriodFilter") {
            filter = filter.trim();
            filter = filter.toLowerCase();
            const dataString = `${data.relatedParty[0].name} (${data.relatedParty[0].role})`
            let filterExpression = dataString.trim().toLowerCase().includes(filter)
            if (this.fromDate && this.toDate) {
              filterExpression = new Date(data.orderDate).getTime() >= this.fromDate.getTime() && new Date(data.orderDate).getTime() <= this.toDate.getTime() && dataString.trim().toLowerCase().includes(filter)
            }
            return filterExpression        
          }
          
          else 
          {
            if (this.fromDate && this.toDate) {
            return new Date(data.orderDate).getTime() >= this.fromDate.getTime() && new Date(data.orderDate).getTime() <= this.toDate.getTime()
            }
          }
          
        }
      }
    )
  }

  applyTextFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    console.log('text')
    console.log(filterValue)
    if (filterValue)
    this.dataSource.filter = filterValue;
  }

  applyPeriodFilter() {
    console.log("applied Date filter")
    if (this.fromDate && this.toDate) 
    // this.dataSource.filterPredicate = this.filterPeriod
    this.dataSource.filter = "applyPeriodFilter"
  } 

  filterPeriod (data: ServiceOrder, filter: string) {
    return data.orderDate >= this.fromDate && data.orderDate <= this.toDate 
  }

  openOrderDeleteDialog(element: ServiceOrder) {
    const dialogRef = this.dialog.open(DeleteServiceOrderComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        console.log(result)
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
