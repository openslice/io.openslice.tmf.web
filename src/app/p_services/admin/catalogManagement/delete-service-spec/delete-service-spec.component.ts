import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceSpecification } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';

@Component({
  selector: 'app-delete-service-spec',
  templateUrl: './delete-service-spec.component.html',
  styleUrls: ['./delete-service-spec.component.scss']
})
export class DeleteServiceSpecComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceSpecification,
    private dialogRef: MatDialogRef<DeleteServiceSpecComponent>,
    private specService: ServiceSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.specService.deleteServiceSpecification(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
