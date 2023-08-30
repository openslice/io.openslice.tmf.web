import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResourceCategory } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceCategoryService } from 'src/app/openApis/resourceCatalogManagement/services';

@Component({
  selector: 'app-delete-resource-category',
  templateUrl: './delete-resource-categories.component.html',
  styleUrls: ['./delete-resource-categories.component.scss']
})
export class DeleteResourceCategoriesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceCategory,
    private dialogRef: MatDialogRef<DeleteResourceCategoriesComponent>,
    private categoryService: ResourceCategoryService

  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    this.categoryService.deleteResourceCategory(this.data.id).subscribe(
      data => {},
      error =>  {this.dialogRef.close(error); console.error(error)},
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
