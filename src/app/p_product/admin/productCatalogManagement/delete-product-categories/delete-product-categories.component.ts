import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/app/openApis/productCatalogManagement/models';
import { CategoryService } from 'src/app/openApis/productCatalogManagement/services';

@Component({
  selector: 'app-delete-product-categories',
  templateUrl: './delete-product-categories.component.html',
  styleUrls: ['./delete-product-categories.component.scss']
})
export class DeleteProductCategoriesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private dialogRef: MatDialogRef<DeleteProductCategoriesComponent>,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.categoryService.deleteCategory(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
