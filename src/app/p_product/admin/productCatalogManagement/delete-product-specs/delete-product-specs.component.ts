import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductSpecification } from 'src/app/openApis/productCatalogManagement/models';
import { ProductSpecificationService } from 'src/app/openApis/productCatalogManagement/services';

@Component({
  selector: 'app-delete-product-specs',
  templateUrl: './delete-product-specs.component.html',
  styleUrls: ['./delete-product-specs.component.scss']
})
export class DeleteProductSpecsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProductSpecification,
    private dialogRef: MatDialogRef<DeleteProductSpecsComponent>,
    private specService: ProductSpecificationService
  ) { }

  ngOnInit(): void {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.specService.deleteProductSpecification(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
