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
import { timer, Subscription } from 'rxjs';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

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

  staticListItems = ["Main Properties", "Related Parties"]
  activeListItem = "Main Properties"

  availableOrderStates = ['INITIAL', 'ACKNOWLEDGED', 'REJECTED', 'PENDING', 'HELD', 'INPROGRESS', 'CANCELLED', 'COMPLETED', 'FAILED', 'PARTIAL']
  availableInitialOrderStates = ['INITIAL', 'ACKNOWLEDGED', 'REJECTED']
  
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

  subscription = new Subscription

  
  ngOnInit() {
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
        author:this.authService.portalUserJWT.preferred_username,
        text: this.editForm.get('note').value,
        date: new Date().toISOString()
      }]
    }

    this.orderService.patchServiceOrder({serviceOrder: orderUpdate, id: this.orderID}).subscribe(
      data => { console.log(data); this.toast.success("Service Order was successfully updated")},
      error => {console.error(error); this.toast.error("An error occurred while editing Service Order")},
      () => {
        this.enableOrderRefreshTimer()
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
      
          this.enableOrderRefreshTimer()
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
