import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResourceSpecificationCharacteristicReq, ResourceSpecificationUpdate, ResourceSpecification } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';

@Component({
  selector: 'app-delete-resource-spec-characteristics',
  templateUrl: './delete-resource-spec-characteristics.component.html',
  styleUrls: ['./delete-resource-spec-characteristics.component.scss']
})
export class DeleteResourceSpecCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      resourceSpec: ResourceSpecification
      resourceSpecCharacteristicArray:ResourceSpecificationCharacteristicReq[],
      specToBeDeleted: ResourceSpecificationCharacteristicReq
    },
    private dialogRef: MatDialogRef<DeleteResourceSpecCharacteristicsComponent>,
    private specService: ResourceSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    // this.dialogRef.close('deleted')
    const updateSpecObj: ResourceSpecificationUpdate = {
      resourceSpecCharacteristic: this.data.resourceSpecCharacteristicArray
    }

    this.specService.patchResourceSpecification({ id: this.data.resourceSpec.id, serviceSpecification: updateSpecObj }).subscribe(
      data => {},
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
