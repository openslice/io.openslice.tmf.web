import { ResourcePoolService } from 'src/app/openApis/resourcePoolManagement/services';
import { ResourcePool } from '../../../../openApis/resourcePoolManagement/models/resource-pool';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'delete-resource-pool',
  templateUrl: './delete-resource-pool.component.html',
  styleUrls: ['./delete-resource-pool.component.scss']
})
export class DeleteResourcePoolComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourcePool,
    private resourcePoolervice: ResourcePoolService,
    private dialogRef: MatDialogRef<DeleteResourcePoolComponent>
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    //params: DeleteResourcePoolParams;

    this.resourcePoolervice.deleteResourcePool({ id: this.data.id}).subscribe(
      data => { },
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
