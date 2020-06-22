import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOrder, ServiceOrderUpdate, ServiceRef, ServiceOrderItem } from 'src/app/openApis/ServiceOrderingManagement/models';
import { ServiceOrderService } from 'src/app/openApis/ServiceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/openApis/ServiceInventoryManagement/services';
import { Service } from 'src/app/openApis/ServiceInventoryManagement/models';
import { delay } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material';
import { PreviewSupportingServicesComponent } from '../preview-supporting-services/preview-supporting-services.component';

import { timer, Subscription } from 'rxjs';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { EditOrdersServiceSpecCharacteristicsComponent } from './edit-orders-service-spec-characteristics/edit-orders-service-spec-characteristics.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-preview-service-order',
  templateUrl: './preview-service-order.component.html',
  styleUrls: ['./preview-service-order.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class PreviewServiceOrderComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: ServiceOrderService,
    private router: Router,
    private inventoryService: ServiceService,
    private toast: ToastrService,
    private authService: AuthService,
    private dialog: MatDialog,
    private sortingService: SortingService
  ) { }

  staticListItems = ["Main Order Properties", "Related Parties"]
  activeListItem = "Main Order Properties"

  availableOrderStates = ['INITIAL', 'ACKNOWLEDGED', 'REJECTED', 'PENDING', 'HELD', 'INPROGRESS', 'CANCELLED', 'COMPLETED', 'FAILED', 'PARTIAL']
  availableInitialOrderStates = ['INITIAL', 'ACKNOWLEDGED', 'REJECTED']
  
  availablePriorities = ['low', 'normal', 'high']


  serviceOrder: ServiceOrder
  orderID: string
  supportingServices: Service[][] = [[]]

  editMode: boolean = false
  editModeNotes: boolean = false
  isAdminUser: boolean = false

  editForm = new FormGroup ({
    state: new FormControl(),
    priority: new FormControl('NORMAL'),
    startDate: new FormControl(),
    expectedCompletionDate: new FormControl(),
    note: new FormControl()
  })

  subscription = new Subscription

  
  ngOnInit() {
    this.isAdminUser = this.authService.portalUserJWT.realm_access.roles.includes('ADMIN')

    if (this.activatedRoute.snapshot.params.id)
    {
      this.orderID = this.activatedRoute.snapshot.params.id
      this.retrieveServiceOrder()
    } else {
      this.router.navigate(['service_orders'])
    }
  }

  selectListitem(item: string) {
    this.activeListItem = item
    
    if (!this.staticListItems.includes(item))
    console.log(this.serviceOrder.orderItem.find(it => it.id === item).service.serviceCharacteristic)
  } 

  retrieveServiceOrder() {
    this.orderService.retrieveServiceOrder({id: this.orderID}).subscribe(
      data => this.serviceOrder = data,
      error => { console.error(error) },
      () => { 
        console.log(this.serviceOrder)
        if (this.serviceOrder) {
          this.editForm.patchValue({
            state: this.serviceOrder.state,
            startDate: this.serviceOrder.requestedStartDate,
            expectedCompletionDate: this.serviceOrder.requestedCompletionDate
          })
  
          this.serviceOrder.orderItem.forEach((orderItem, index) => {
            // this.listItems.push(`Order Item #${orderItem.id}`)
            //sort serviceOrderItem Characteristics
            orderItem.service.serviceCharacteristic.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
  
            orderItem.service.supportingService.forEach( (supService, serviceIndex) => {
              this.retrieveServiceInventory(supService.id).pipe(delay(Math.random()*1000)).subscribe(
                data => this.supportingServices[index][serviceIndex] = data
              )
            })
          })
        } else {
          this.router.navigate(['service_orders'])
        }
      }
    )
  }

  retrieveServiceInventory(serviceId:string) {
    return this.inventoryService.retrieveService({id:serviceId})
  }

  orderItemStateClassSelector(state:'feasibilityChecked' | 'designed' | 'reserved' | 'inactive' | 'active' | 'terminated') {
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

  orderStateClassSelector(state:'INITIAL'|'ACKNOWLEDGED'|'REJECTED'|'PENDING'|'HELD'|'INPROGRESS'|'CANCELLED'|'COMPLETED'|'FAILED'|'PARTIAL') {
    let cssClass: string = 'badge'
    switch (state) {
      case 'INITIAL':
        cssClass += ' badge-primary'
        break;
      case 'REJECTED':
      case 'CANCELLED':
      case 'FAILED':
        cssClass += ' badge-danger'
        break;
      case 'COMPLETED':
        cssClass += ' badge-success'
        break;
      default:
        cssClass += ' badge-warning'
    }
    return cssClass
  }

  enableOrderEditing() {
    this.editMode = true
  }

  submitOrderEditing() {
    // console.log(this.editForm)
    this.editMode = false
    let orderUpdate: ServiceOrderUpdate = {
      state: this.editForm.get('state').value,
      startDate: this.editForm.get('startDate').value,
      expectedCompletionDate: this.editForm.get('expectedCompletionDate').value,
    }
    if (this.editForm.get('note').value) {
      orderUpdate.note = [{
        author:this.authService.portalUserJWT.preferred_username,
        text: this.editForm.get('note').value,
        date: new Date().toISOString()
      }]
    }

    this.orderService.patchServiceOrder({serviceOrder: orderUpdate, id: this.orderID}).subscribe(
      data => { this.toast.success("Service Order was successfully updated")},
      error => {console.error(error); this.toast.error("An error occurred while editing Service Order")},
      () => {
        this.enableOrderRefreshTimer()
      }
    )
  }

  cancelOrderEditing() {
    this.editMode = false
  }

  triggerAdminNote() {
    this.editModeNotes = !this.editModeNotes
  }

  openSupportingServiceDialog(supportingServiceRef: ServiceRef) {
    const dialogRef = this.dialog.open(PreviewSupportingServicesComponent, {
      data : { serviceRef: supportingServiceRef }, disableClose: true
    })

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.toast.success("Supporting Service was successfully updated")
      
          this.enableOrderRefreshTimer()
        }
      }
    )
  }

  openOrdersSpecCharacteristicsDialog(orderItem: ServiceOrderItem) {
    const dialogRef = this.dialog.open(EditOrdersServiceSpecCharacteristicsComponent, {
      data: { orderItem }, disableClose: true
    })

    dialogRef.afterClosed().subscribe(
      result => {
        // console.log(result)
        // console.log()
        // if (result) {
        //   orderItem.service.serviceCharacteristic = result
        // }
        console.log(this.serviceOrder)
        if (result) {

          let newOrderUpdate: ServiceOrderUpdate = {
            orderItem: []
          }

          this.serviceOrder.orderItem.find(item => item.id === orderItem.id).service.serviceCharacteristic = result
          newOrderUpdate.orderItem = this.serviceOrder.orderItem

          this.orderService.patchServiceOrder({serviceOrder: newOrderUpdate, id: this.serviceOrder.id}).subscribe(
            data => { this.retrieveServiceOrder() },
            error => console.error(error)
          )
        }
      }
    )
  }

  enableOrderRefreshTimer() {
    this.subscription.unsubscribe()
    this.subscription = timer(0, 10000).subscribe(
      data => {
        // this.supportingServices = [[]]
        this.retrieveServiceOrder()
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  

}
