import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ServiceOrderItem, ServiceOrderUpdate } from 'src/app/openApis/serviceOrderingManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { forkJoin } from 'rxjs';
import { ServiceSpecification } from 'src/app/openApis/serviceCatalogManagement/models';

@Component({
  selector: 'app-edit-service-order-items',
  templateUrl: './edit-service-order-items.component.html',
  styleUrls: ['./edit-service-order-items.component.scss']
})
export class EditServiceOrderItemsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public selectedOrderItems: ServiceOrderItem[],
    private dialogRef: MatDialogRef<EditServiceOrderItemsComponent>,
    private specService: ServiceSpecificationService
  ) { }

  activeListItem: {
    orderItem: ServiceOrderItem
    serviceSpec: ServiceSpecification
  }
  selectedItemsServiceSpecs: ServiceSpecification[]
  activeTabIndex: number 

  editedOrderItems: {orderItemID: string, serviceSpecChars:[]}[] = []

  ngOnInit() {
    // this.activeListItem = this.selectedOrderItems[0]
    this.retrieveSpecsFromOrderItems()
  }

  retrieveSpecsFromOrderItems() {
    let serviceSpecs$ = []
    this.selectedOrderItems.forEach( item => {
      serviceSpecs$.push(this.specService.retrieveServiceSpecification({id: item.service.serviceSpecification.id}))
    })

    forkJoin(serviceSpecs$).subscribe(
      data => {this.selectedItemsServiceSpecs = data},
      error => {console.error(error)},
      () => {
        this.activeListItem = {
          orderItem: this.selectedOrderItems[0],
          serviceSpec: this.selectedItemsServiceSpecs[0]
        }
        this.activeTabIndex = 0
      }
    )
  }

  changeTab(event: MatTabChangeEvent) {   
    setTimeout(() => {
      this.activeTabIndex = event.index     
      this.activeListItem = {
        orderItem: this.selectedOrderItems[event.index],
        serviceSpec: this.selectedItemsServiceSpecs[event.index]
      }
    }, 500);
  }

  orderItemCharsEdited(event: {orderItemID: string, serviceSpecChars:[]}) {
    if (!this.editedOrderItems.some(item => item.orderItemID === event.orderItemID)) {
      this.editedOrderItems.push(event)
    }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    this.dialogRef.close(this.editedOrderItems)
  }
}
