import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceSpecificationRef } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceTestSpecification, ServiceTestSpecificationUpdate } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';

@Component({
  selector: 'app-delete-service-relationship',
  templateUrl: './delete-service-relationship.component.html',
  styleUrls: ['./delete-service-relationship.component.scss']
})
export class DeleteServiceRelationshipComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      newServiceTestRelatedServicesArray: Array<ServiceSpecificationRef>, 
      serviceRelationshipToBeDeleted: ServiceSpecificationRef,
      serviceTestSpec: ServiceTestSpecification
    },
    private dialogRef: MatDialogRef<DeleteServiceRelationshipComponent>,
    private testSpecService: ServiceTestSpecificationService

  ) { }

  ngOnInit() {
  }

  confirmDeletion() {
    // this.dialogRef.close('deleted')
    const updateSpecObj: ServiceTestSpecificationUpdate = {
      relatedServiceSpecification: this.data.newServiceTestRelatedServicesArray
    }

    this.testSpecService.patchServiceTestSpecification({ id: this.data.serviceTestSpec.id, serviceSpecification: updateSpecObj }).subscribe(
      data => {},
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }


}
