import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Catalog } from 'src/app/openApis/productCatalogManagement/models';
import { CatalogService } from 'src/app/openApis/productCatalogManagement/services';

@Component({
  selector: 'app-delete-product-catalogs',
  templateUrl: './delete-product-catalogs.component.html',
  styleUrls: ['./delete-product-catalogs.component.scss']
})
export class DeleteProductCatalogsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Catalog,
    private dialogRef: MatDialogRef<DeleteProductCatalogsComponent>,
    private catalogService: CatalogService

  ) { }

  ngOnInit(): void {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.catalogService.deleteCatalog(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
