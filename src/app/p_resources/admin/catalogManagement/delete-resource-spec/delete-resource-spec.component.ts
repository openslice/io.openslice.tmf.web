import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResourceSpecification } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';

@Component({
  selector: 'app-delete-resource-spec',
  templateUrl: './delete-resource-spec.component.html',
  styleUrls: ['./delete-resource-spec.component.scss']
})
export class DeleteResourceSpecComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceSpecification,
    private dialogRef: MatDialogRef<DeleteResourceSpecComponent>,
    private specService: ResourceSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    // this.dialogRef.close('deleted')
    this.specService.deleteResourceSpecification(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
