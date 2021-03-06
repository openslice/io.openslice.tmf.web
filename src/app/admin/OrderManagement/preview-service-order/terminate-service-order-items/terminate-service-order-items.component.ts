import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DeleteServiceCategoryComponent } from 'src/app/admin/CatalogManagement/delete-service-category/delete-service-category.component';
import { ServiceOrderItem } from 'src/app/openApis/ServiceOrderingManagement/models';

@Component({
  selector: 'app-terminate-service-order-items',
  templateUrl: './terminate-service-order-items.component.html',
  styleUrls: ['./terminate-service-order-items.component.scss']
})
export class TerminateServiceOrderItemsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceOrderItem[],
    private dialogRef: MatDialogRef<DeleteServiceCategoryComponent>,
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  confirmTermination() {
    this.dialogRef.close('deleted')
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
