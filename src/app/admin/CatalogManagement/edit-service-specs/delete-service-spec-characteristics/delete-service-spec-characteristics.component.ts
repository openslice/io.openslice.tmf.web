import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ServiceSpecCharacteristic, ServiceSpecificationUpdate, ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';

@Component({
  selector: 'app-delete-service-spec-characteristics',
  templateUrl: './delete-service-spec-characteristics.component.html',
  styleUrls: ['./delete-service-spec-characteristics.component.scss']
})
export class DeleteServiceSpecCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceSpec: ServiceSpecification
      serviceSpecCharacteristicArray:ServiceSpecCharacteristic[], 
      specToBeDeleted: ServiceSpecCharacteristic
    },
    private dialogRef: MatDialogRef<DeleteServiceSpecCharacteristicsComponent>,
    private specService: ServiceSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    const updateSpecObj: ServiceSpecificationUpdate = {
      serviceSpecCharacteristic: this.data.serviceSpecCharacteristicArray
    }


    console.log(updateSpecObj)

    console.log(this.data.serviceSpec)
    this.specService.patchServiceSpecification({ id: this.data.serviceSpec.id, serviceSpecification: updateSpecObj }).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
