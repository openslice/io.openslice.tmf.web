import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOrder, ServiceOrderUpdate } from 'src/app/openApis/ServiceOrderingManagement/models';
import { ServiceOrderService } from 'src/app/openApis/ServiceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/openApis/ServiceInventoryManagement/services';
import { Service } from 'src/app/openApis/ServiceInventoryManagement/models';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-preview-service-order',
  templateUrl: './preview-service-order.component.html',
  styleUrls: ['./preview-service-order.component.scss']
})
export class PreviewServiceOrderComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: ServiceOrderService,
    private router: Router,
    private inventoryService: ServiceService,
    private toast: ToastrService,
    private authService: AuthService
  ) { }

  availableOrderStates = ['initial', 'acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'partial']
  availablePriorities = ['low', 'normal', 'high']


  serviceOrder: ServiceOrder
  orderID: string
  supportingServices: Service[][] = [[]]

  supportedServiceFilterCtrl = new FormControl()

  admin: boolean = false
  adminNote: boolean = false

  editForm = new FormGroup ({
    state: new FormControl(),
    priority: new FormControl('NORMAL'),
    startDate: new FormControl(),
    expectedCompletionDate: new FormControl(),
    note: new FormControl()
  })

  

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id)
    {
      this.orderID = this.activatedRoute.snapshot.params.id
      this.retrieveServiceOrder()
    } else {
      this.router.navigate(['service_orders'])
    }
  }

  retrieveServiceOrder() {
    this.orderService.retrieveServiceOrder({id: this.orderID}).subscribe(
      data => this.serviceOrder = data,
      error => { console.error(error) },
      () => { 
        console.log(this.serviceOrder)
        this.editForm.patchValue({
          state: this.serviceOrder.state,
          startDate: this.serviceOrder.requestedStartDate,
          completionDate: this.serviceOrder.requestedCompletionDate
        })

        console.log(this.editForm)

        this.serviceOrder.orderItem.forEach((orderItem, index) => {
          console.log(orderItem.service.supportingService)
          orderItem.service.supportingService.forEach( (supService, serviceIndex) => {
            this.retrieveServiceInventory(supService.id).pipe(delay(Math.random()*1000)).subscribe(
              data => this.supportingServices[index][serviceIndex] = data
            )
          })
        })
        console.log(this.supportingServices)
      }
    )
  }

  retrieveServiceInventory(serviceId:string) {
    return this.inventoryService.retrieveService({id:serviceId})
  }

  stateClassSelector(state:'feasibilityChecked' | 'designed' | 'reserved' | 'inactive' | 'active' | 'terminated') {
    let cssClass: string = 'badge'
    switch (state) {
      case 'active':
        cssClass += ' badge-success'
        break;
      case 'inactive':
        cssClass += ' badge-secondary'
        break;
      case 'terminated':
        cssClass += ' badge-danger'
        break;
      default:
        cssClass += ' badge-warning'
    }
    return cssClass
  }

  enableOrderEditing() {
    this.admin = true
  }

  submitOrderEditing() {
    console.log(this.editForm)
    this.admin = false
    let orderUpdate: ServiceOrderUpdate = {
      state: this.editForm.get('state').value,
      startDate: this.editForm.get('startDate').value,
      expectedCompletionDate: this.editForm.get('expectedCompletionDate').value,
    }
    if (this.editForm.get('note').value) {
      orderUpdate.note = [{
        author:this.authService.portalUser.username,
        text: this.editForm.get('note').value
      }]
    }

    this.orderService.patchServiceOrder({serviceOrder: orderUpdate, id: this.orderID}).subscribe(
      data => { console.log(data); this.toast.success("Service Order was successfully updated")},
      error => {console.error(error); this.toast.error("An error occurred while editing Service Order")},
      () => {
        this.retrieveServiceOrder()
      }
    )
  }

  cancelOrderEditing() {
    this.admin = false
  }

  triggerAdminNote() {
    this.adminNote = !this.adminNote
  }

}
