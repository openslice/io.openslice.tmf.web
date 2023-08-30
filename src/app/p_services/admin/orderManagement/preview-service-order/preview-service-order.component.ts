import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceOrder, ServiceOrderUpdate, ServiceRef, ServiceOrderItem } from 'src/app/openApis/serviceOrderingManagement/models';
import { ServiceOrderService } from 'src/app/openApis/serviceOrderingManagement/services';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from 'src/app/openApis/serviceInventoryManagement/services';
import { Service } from 'src/app/openApis/serviceInventoryManagement/models';
import { delay } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';

import { timer, Subscription } from 'rxjs';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { fadeIn, simpleFade } from 'src/app/shared/animations/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { EditServiceOrderItemsComponent } from './edit-service-order-items/edit-service-order-items.component';
import { PreviewSupportingServicesComponent } from '../../inventoryManagement/preview-supporting-services/preview-supporting-services.component';
import { TerminateServiceOrderItemsComponent } from './terminate-service-order-items/terminate-service-order-items.component';
import { AppService } from 'src/app/shared/services/app.service';
import { relative } from 'path';

@Component({
  selector: 'app-preview-service-order',
  templateUrl: './preview-service-order.component.html',
  styleUrls: ['./preview-service-order.component.scss'],
  animations: [ 
    trigger('fadeIn', fadeIn()),
    trigger('simpleFade', simpleFade()),
   ]

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
    private sortingService: SortingService,
    public appService: AppService
  ) { }

  staticListItems = ["Main Order Properties", "Related Parties"]
  activeListItem = "Main Order Properties"

  availableOrderStates = ['INITIAL', 'ACKNOWLEDGED', 'REJECTED', 'PENDING', 'HELD', 'INPROGRESS', 'CANCELLED', 'COMPLETED', 'FAILED', 'PARTIAL']
  availableInitialOrderStates = ['INITIAL', 'ACKNOWLEDGED', 'REJECTED']
  
  availablePriorities = ['low', 'normal', 'high']


  serviceOrder: ServiceOrder
  orderID: string
  serviceOrderNotFound: boolean = false
  finishedLoading: boolean = false

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

  checkboxesOrderItemList: {orderItem: ServiceOrderItem, isChecked: boolean}[] = []
  selection = new SelectionModel<ServiceOrderItem>(true, []);

  subscription = new Subscription

  currentItemRelationshipsUrl: string[] = []
  notesGraphUrl: string 
  
  ngOnInit() {
    this.isAdminUser = this.authService.portalUserJWT.realm_access.roles.includes('ADMIN')

    if (this.activatedRoute.snapshot.params.id)
    {
      this.orderID = this.activatedRoute.snapshot.params.id
      this.retrieveServiceOrder()
    } else {
      this.router.navigate(['../service_orders'], { relativeTo: this.activatedRoute})
    }
  }

  selectListItem(item: string) {
    this.activeListItem = item
    
    if (!this.staticListItems.includes(item))
     this.serviceOrder.orderItem.find(it => it.id === item).service.serviceCharacteristic
  } 

  retrieveServiceOrder() {
    this.selection.clear()
    this.orderService.retrieveServiceOrder({id: this.orderID}).subscribe(
      data => this.serviceOrder = data,
      error => { console.error(error) },
      () => { 
        if (this.serviceOrder) {
          this.finishedLoading = true
          
          this.editForm.patchValue({
            state: this.serviceOrder.state,
            startDate: this.serviceOrder.startDate ? this.serviceOrder.startDate : this.serviceOrder.requestedStartDate,
            expectedCompletionDate: this.serviceOrder.expectedCompletionDate ? this.serviceOrder.expectedCompletionDate : this.serviceOrder.completionDate
          })

          this.serviceOrder.note.sort(this.sortingService.ascDateSortingFuncByDateProperty())

          if (!this.serviceOrder.startDate) { this.serviceOrder.startDate = this.serviceOrder.requestedStartDate }

          if (!this.serviceOrder.expectedCompletionDate) { this.serviceOrder.expectedCompletionDate = this.serviceOrder.requestedCompletionDate }
  
          this.checkboxesOrderItemList = []
          this.currentItemRelationshipsUrl = []
          this.serviceOrder.orderItem.forEach((orderItem, index) => {

            this.checkboxesOrderItemList.push({orderItem: orderItem, isChecked: false})

            orderItem.service.serviceCharacteristic.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
  
            orderItem.service.supportingService.forEach( (supService, serviceIndex) => {
              this.retrieveServiceInventory(supService.id).pipe(delay(Math.random()*1000)).subscribe(
                data => this.supportingServices[index][serviceIndex] = data
              )
            })

            
            this.currentItemRelationshipsUrl.push( this.orderService.rootUrl + "/serviceOrdering/v4/serviceOrder/" + this.serviceOrder.id + "/item/" + orderItem.id + "/relationship_graph" );
          })

          this.notesGraphUrl  = this.orderService.rootUrl + "/serviceOrdering/v4/serviceOrder/" + this.serviceOrder.id + "/notes_graph";
          
          if (this.activatedRoute.snapshot.queryParams &&  this.serviceOrder.orderItem.some(item => item.id === this.activatedRoute.snapshot.queryParams.item)) {
            // console.log(this.activatedRoute.snapshot.queryParams)
            this.activeListItem = this.activatedRoute.snapshot.queryParams.item
            
          }
        } else {
          this.serviceOrderNotFound = true
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
      data => {this.toast.success("Service Order was successfully updated")},
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
      data : { serviceRef: supportingServiceRef }, 
      disableClose: true
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

  // openOrdersSpecCharacteristicsDialog(orderItem: ServiceOrderItem) {
    
  //   const dialogRef = this.dialog.open(EditOrdersServiceSpecCharacteristicsComponent, {
  //     data: { orderItem }
  //   })

  //   dialogRef.afterClosed().subscribe(
  //     result => {
  //       // console.log(result)
  //       // console.log()
  //       // if (result) {
  //       //   orderItem.service.serviceCharacteristic = result
  //       // }
  //       console.log(this.serviceOrder)
  //       if (result) {

  //         let newOrderUpdate: ServiceOrderUpdate = {
  //           orderItem: []
  //         }

  //         this.serviceOrder.orderItem.find(item => item.id === orderItem.id).service.serviceCharacteristic = result
  //         newOrderUpdate.orderItem = this.serviceOrder.orderItem

  //         this.orderService.patchServiceOrder({serviceOrder: newOrderUpdate, id: this.serviceOrder.id}).subscribe(
  //           data => { this.retrieveServiceOrder() },
  //           error => console.error(error)
  //         )
  //       }
  //     }
  //   )
  // }

  areOrderItemsEditable() {
    // states > 'INITIAL'|'ACKNOWLEDGED'|'REJECTED'|'PENDING'|'HELD'|'INPROGRESS'|'CANCELLED'|'COMPLETED'|'FAILED'|'PARTIAL'
    // return ['INITIAL', 'REJECTED','CANCELLED', 'COMPLETED', 'FAILED', 'PARTIAL'].includes(this.serviceOrder.state)
    return ['INITIAL'].includes(this.serviceOrder.state)
  }

  areOrderItemsTerminable() {
    return ['COMPLETED', 'FAILED', 'PARTIAL'].includes(this.serviceOrder.state)
  }

  openEditServiceOrderItemsDialog() {
    const dialogRef = this.dialog.open(EditServiceOrderItemsComponent, {
      data: this.selection.selected,
      minWidth: "60vw"
    })

    dialogRef.afterClosed().subscribe(
      (editedOrderItems: {orderItemID: string, serviceSpecChars:[]}[]) => {

        // console.log(editedOrderItems)
        if (editedOrderItems) {

          let newOrderUpdate: ServiceOrderUpdate = {
            orderItem: []
          }
          editedOrderItems.forEach( editedOrderItem => {
            this.serviceOrder.orderItem.find(item => item.id === editedOrderItem.orderItemID).service.serviceCharacteristic = editedOrderItem.serviceSpecChars
            // Decide orderItem action verb
            if (this.serviceOrder.state === "COMPLETED") {
              this.serviceOrder.orderItem.find(item => item.id === editedOrderItem.orderItemID).action = "modify"
            }

            // newOrderUpdate.orderItem.push(this.serviceOrder.orderItem.find(item => item.id === editedOrderItem.orderItemID))
          })

          newOrderUpdate.orderItem = this.serviceOrder.orderItem

          // console.log(newOrderUpdate)

          this.orderService.patchServiceOrder({serviceOrder: newOrderUpdate, id: this.serviceOrder.id}).subscribe(
            data => { 
              this.toast.success("Selected Order Items were successfully updated")
              this.retrieveServiceOrder() 
            },
            error => {
              this.toast.error("An error occurred while updating Service Order Items")
              this.retrieveServiceOrder() 
              console.error(error)
            }
          )
        }
      }
    )

  }

  terminateServiceOrderItemsDialog() {
    const dialogRef = this.dialog.open(TerminateServiceOrderItemsComponent, {
      data: this.selection.selected
    })

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          let newOrderUpdate: ServiceOrderUpdate = {
            orderItem: []
          }
          this.selection.selected.forEach( selectedOrderItem => {
            this.serviceOrder.orderItem.find(item => item.id === selectedOrderItem.id).action = "modify"
            this.serviceOrder.orderItem.find(item => item.id === selectedOrderItem.id).service.state = "terminated"
          })

          newOrderUpdate.orderItem = this.serviceOrder.orderItem

          // console.log(newOrderUpdate)

          this.orderService.patchServiceOrder({serviceOrder: newOrderUpdate, id: this.serviceOrder.id}).subscribe(
            data => { 
              this.toast.success("Selected Order Items were successfully updated")
              this.retrieveServiceOrder() 
            },
            error => {
              this.toast.error("An error occurred while updating Service Order Items")
              this.retrieveServiceOrder() 
              console.error(error)
            }
          )
        }
      }
    )
  }

  //checkBoxSelection Logic
  isAllSelected() {
    const numSelected = this.selection.selected.length
    const numItems = this.serviceOrder.orderItem.length
    return numSelected === numItems
  }

  masterCheckboxToggle() {
    this.isAllSelected() ? 
      this.selection.clear() :
      this.serviceOrder.orderItem.forEach (item => this.selection.select(item))
  }
  //---checkBoxSelection Logic

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
