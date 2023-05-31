import { trigger } from '@angular/animations';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductOffering, ProductSpecification } from 'src/app/openApis/productCatalogManagement/models';
import { ProductSpecificationService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { ThemingService } from 'src/app/theming/theming.service';

@Component({
  selector: 'app-preview-market-place-item',
  templateUrl: './preview-market-place-item.component.html',
  styleUrls: ['./preview-market-place-item.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class PreviewMarketPlaceItemComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      productOffering: ProductOffering
    },
    private dialogRef: MatDialogRef<PreviewMarketPlaceItemComponent>,
    private specService: ProductSpecificationService,
    private themingService: ThemingService
  ) { }

  productOffering: ProductOffering
  productSpec: ProductSpecification

  finishedLoading: boolean = false
  specLogoUrl: string


  ngOnInit(): void {
    this.productOffering = this.data.productOffering
    if (this.productOffering.productSpecification && this.productOffering.productSpecification.id) {
      this.retrieveProductSpec(this.data.productOffering)
    } else {
      this.specLogoUrl = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH
      this.finishedLoading = true
    }
  }

  retrieveProductSpec(offering: ProductOffering) {
    this.specService.retrieveProductSpecification({ id: offering.productSpecification.id }).subscribe(
      data => this.productSpec = data,
      error => console.error(error),
      () => {
        this.finishedLoading = true
        //Check if spec has a defined logo
        this.specLogoUrl = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH
      }
    )


  }

  closeDialog() {
      this.dialogRef.close()
  }


}
