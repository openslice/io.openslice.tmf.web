import { Reservation } from './../../../../openApis/resourcePoolManagement/models/reservation';
import { ResourcePoolService, ReservationService } from 'src/app/openApis/resourcePoolManagement/services';
import { ResourcePool } from '../../../../openApis/resourcePoolManagement/models/resource-pool';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'delete-resource-reservation',
  templateUrl: './delete-resource-reservation.component.html',
  styleUrls: ['./delete-resource-reservation.component.scss']
})
export class DeleteResourceReservationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Reservation,
    private resourceReservationService: ReservationService, 
    private dialogRef: MatDialogRef<DeleteResourceReservationComponent>
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    //params: DeleteResourcePoolParams;

    this.resourceReservationService.deleteReservation({ id: this.data.id}).subscribe(
      data => { },
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
