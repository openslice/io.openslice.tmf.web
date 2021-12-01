import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ResourceCategory } from 'src/app/openApis/ResourceCatalogManagement/models';
import { ResourceCategoryService } from 'src/app/openApis/ResourceCatalogManagement/services';

@Component({
  selector: 'app-delete-service-category',
  templateUrl: './delete-resource-category.component.html',
  styleUrls: ['./delete-resource-category.component.scss']
})
export class DeleteResourceCategoryComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceCategory,
    private dialogRef: MatDialogRef<DeleteResourceCategoryComponent>,
    private categoryService: ResourceCategoryService

  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    this.categoryService.deleteResourceCategory(this.data.id).subscribe(
      data => console.log(data),
      error =>  console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
