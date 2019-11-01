import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models';

@Component({
  selector: 'app-delete-service-spec',
  templateUrl: './delete-service-spec.component.html',
  styleUrls: ['./delete-service-spec.component.scss']
})
export class DeleteServiceSpecComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceSpecification,
    private dialogRef: MatDialogRef<DeleteServiceSpecComponent>
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    this.dialogRef.close('deleted')
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
