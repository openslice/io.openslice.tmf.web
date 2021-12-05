import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ResourceSpecification } from 'src/app/openApis/ResourceCatalogManagement/models';
import { ResourceSpecificationService } from 'src/app/openApis/ResourceCatalogManagement/services';

@Component({
  selector: 'app-delete-service-spec',
  templateUrl: './delete-resource-spec.component.html',
  styleUrls: ['./delete-resource-spec.component.scss']
})
export class DeleteResourceSpecComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceSpecification,
    private dialogRef: MatDialogRef<DeleteResourceSpecComponent>,
    private specResource: ResourceSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.specResource.deleteResourceSpecification(this.data.id).subscribe(
      data => console.log(data),
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
