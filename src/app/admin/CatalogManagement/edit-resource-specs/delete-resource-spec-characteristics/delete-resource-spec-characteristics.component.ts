import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ResourceSpecCharacteristic, ResourceSpecificationUpdate, ResourceSpecification } from 'src/app/openApis/ResourceCatalogManagement/models';
import { ResourceSpecificationService } from 'src/app/openApis/ResourceCatalogManagement/services';

@Component({
  selector: 'app-delete-service-spec-characteristics',
  templateUrl: './delete-resource-spec-characteristics.component.html',
  styleUrls: ['./delete-resource-spec-characteristics.component.scss']
})
export class DeleteResourceSpecCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      resourceSpec: ResourceSpecification
      resourceSpecCharacteristicArray:ResourceSpecCharacteristic[], 
      specToBeDeleted: ResourceSpecCharacteristic
    },
    private dialogRef: MatDialogRef<DeleteResourceSpecCharacteristicsComponent>,
    private specResource: ResourceSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    const updateSpecObj: ResourceSpecificationUpdate = {
      resourceSpecCharacteristic: this.data.resourceSpecCharacteristicArray
    }


    console.log(updateSpecObj)

    console.log(this.data.resourceSpec)
    this.specResource.patchResourceSpecification({ id: this.data.resourceSpec.id, resourceSpecification: updateSpecObj }).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
