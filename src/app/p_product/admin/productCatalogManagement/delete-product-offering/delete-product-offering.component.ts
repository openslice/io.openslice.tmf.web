import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductOffering } from 'src/app/openApis/productCatalogManagement/models';
import { ProductOfferingService } from 'src/app/openApis/productCatalogManagement/services';

@Component({
  selector: 'app-delete-product-offering',
  templateUrl: './delete-product-offering.component.html',
  styleUrls: ['./delete-product-offering.component.scss']
})
export class DeleteProductOfferingComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProductOffering,
    private dialogRef: MatDialogRef<DeleteProductOfferingComponent>,
    private offeringService: ProductOfferingService

  ) { }

  ngOnInit(): void {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.offeringService.deleteProductOffering(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }


}
