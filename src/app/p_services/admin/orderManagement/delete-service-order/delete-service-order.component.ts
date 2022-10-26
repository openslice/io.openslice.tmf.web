import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceOrder } from 'src/app/openApis/serviceOrderingManagement/models';
import { DeleteServiceSpecComponent } from 'src/app/p_services/admin/catalogManagement/delete-service-spec/delete-service-spec.component';
import { ServiceOrderService } from 'src/app/openApis/serviceOrderingManagement/services';

@Component({
  selector: 'app-delete-service-order',
  templateUrl: './delete-service-order.component.html',
  styleUrls: ['./delete-service-order.component.scss']
})
export class DeleteServiceOrderComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceOrder,
    private dialogRef: MatDialogRef<DeleteServiceSpecComponent>,
    private serviceOrderService: ServiceOrderService

  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.serviceOrderService.deleteServiceOrder(this.data.id).subscribe(
      data => {},
      error => {this.dialogRef.close(error); console.error(error)},
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
