import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Resource } from 'src/app/openApis/resourceInventoryManagement/models';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';

@Component({
  selector: 'app-delete-resource',
  templateUrl: './delete-resource.component.html',
  styleUrls: ['./delete-resource.component.scss']
})
export class DeleteResourceComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Resource,
    private dialogRef: MatDialogRef<DeleteResourceComponent>,
    private resourceService: ResourceService
  ) { }

  ngOnInit() {
  }


  confirmDelete() {
    // this.dialogRef.close('deleted')
    this.resourceService.deleteResource(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
