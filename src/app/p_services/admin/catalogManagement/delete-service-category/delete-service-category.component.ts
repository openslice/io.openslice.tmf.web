import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceCategory } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceCategoryService } from 'src/app/openApis/serviceCatalogManagement/services';

@Component({
  selector: 'app-delete-service-category',
  templateUrl: './delete-service-category.component.html',
  styleUrls: ['./delete-service-category.component.scss']
})
export class DeleteServiceCategoryComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceCategory,
    private dialogRef: MatDialogRef<DeleteServiceCategoryComponent>,
    private categoryService: ServiceCategoryService

  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    this.categoryService.deleteServiceCategory(this.data.id).subscribe(
      data => {},
      error =>  {this.dialogRef.close(error); console.error(error)},
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
