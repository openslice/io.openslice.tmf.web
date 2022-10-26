import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteServiceCategoryComponent } from 'src/app/p_services/admin/catalogManagement/delete-service-category/delete-service-category.component';
import { ServiceOrderItem } from 'src/app/openApis/serviceOrderingManagement/models';

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
  }

  confirmTermination() {
    this.dialogRef.close('deleted')
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
