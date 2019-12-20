import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOrder, ServiceOrderUpdate, ServiceRef } from 'src/app/openApis/ServiceOrderingManagement/models';
import { ServiceOrderService } from 'src/app/openApis/ServiceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/openApis/ServiceInventoryManagement/services';
import { Service } from 'src/app/openApis/ServiceInventoryManagement/models';
import { delay } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material';
import { PreviewSupportingServicesComponent } from '../preview-supporting-services/preview-supporting-services.component';

@Component({
  selector: 'app-preview-service-order',
  templateUrl: './preview-service-order.component.html',
  styleUrls: ['./preview-service-order.component.scss'],
})
export class PreviewServiceOrderComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: ServiceOrderService,
    private router: Router,
    private inventoryService: ServiceService,
    private toast: ToastrService,
    private authService: AuthService,
    private dialog: MatDialog
  ) { }

  availableOrderStates = ['initial', 'acknowledged', 'rejected', 'pending', 'held', 'inProgress', 'cancelled', 'completed', 'failed', 'partial']
  availableInitialOrderStates = ['initial', 'acknowledged', 'rejected']
  
  availablePriorities = ['low', 'normal', 'high']


  serviceOrder: ServiceOrder
  orderID: string
  supportingServices: Service[][] = [[]]

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
          expectedCompletionDate: this.serviceOrder.requestedCompletionDate
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
        text: this.editForm.get('note').value,
        date: new Date().toISOString()
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

  openSupportingServiceDialog(supportingServiceRef: ServiceRef) {
    console.log(supportingServiceRef)
    const dialogRef = this.dialog.open(PreviewSupportingServicesComponent, {
      data : { serviceRef: supportingServiceRef }, disableClose: true
    })

    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result)
        if (result) {
          this.toast.success("Supporting Service was successfully updated")
          this.supportingServices = [[]]
          this.retrieveServiceOrder()
        }
      }
    )
    
  }
  

}