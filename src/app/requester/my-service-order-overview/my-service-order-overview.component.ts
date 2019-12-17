import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from 'src/app/openApis/ServiceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { ServiceOrder, ServiceOrderUpdate } from 'src/app/openApis/ServiceOrderingManagement/models';

const today = new Date()


@Component({
  selector: 'app-my-service-order-overview',
  templateUrl: './my-service-order-overview.component.html',
  styleUrls: ['./my-service-order-overview.component.scss']
})
export class MyServiceOrderOverviewComponent implements OnInit {

  constructor(
    private serviceOrder: ServiceOrderService,
    private toastr: ToastrService
  ) { }

  orders: ServiceOrder[]
  editingState: boolean[] = []
  expandedState: boolean[] = []

  orderStates = ['initial', 'acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'partial']
  currentOrderState: string

  ngOnInit() {
    this.listServiceOrders()
  }

  listServiceOrders() {
    this.serviceOrder.listServiceOrder({}).subscribe(
      data => { this.orders = data },
      error => { console.error; this.toastr.error("An error occurred retrieving Service Orders") }
    )
  }

  triggerOrderStateEdit(orderIndex: number) {
    this.editingState[orderIndex] = true
  }

  editOrderState(order: ServiceOrder, orderIndex: number, state) {
    const updateObj: ServiceOrderUpdate = {
      state: state
    }

    this.serviceOrder.patchServiceOrder({id: order.id, serviceOrder: updateObj}).subscribe(
      data => {console.log(data); this.toastr.success("Service Order state was successfully edited")},
      error =>  {console.error(error); this.toastr.error("An error occurred while editing Order State")},
      () => {
        this.cancelEditingOrderState(orderIndex)
        this.listServiceOrders()
      }
    )
  }

  cancelEditingOrderState(orderIndex: number) {
    this.editingState[orderIndex] = false
  }

  triggerExpansion(orderIndex: number) {
    this.expandedState[orderIndex] = !this.expandedState[orderIndex]
  }
}