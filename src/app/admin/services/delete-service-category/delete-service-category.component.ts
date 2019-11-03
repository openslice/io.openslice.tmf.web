import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ServiceCategory } from 'src/app/openApis/ServiceCatalogManagement/models';

@Component({
  selector: 'app-delete-service-category',
  templateUrl: './delete-service-category.component.html',
  styleUrls: ['./delete-service-category.component.scss']
})
export class DeleteServiceCategoryComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceCategory,
    private dialogRef: MatDialogRef<DeleteServiceCategoryComponent>

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
