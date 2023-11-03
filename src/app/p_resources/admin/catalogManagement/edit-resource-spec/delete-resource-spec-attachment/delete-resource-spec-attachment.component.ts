import { Component, OnInit, Inject } from '@angular/core';
import { ResourceSpecificationUpdate, ResourceSpecification, AttachmentRefOrValue } from 'src/app/openApis/resourceCatalogManagement/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';

@Component({
  selector: 'app-delete-resource-spec-attachment',
  templateUrl: './delete-resource-spec-attachment.component.html',
  styleUrls: ['./delete-resource-spec-attachment.component.scss']
})
export class DeleteResourceSpecAttachmentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      resourceSpec: ResourceSpecification
      resourceSpecAttachmentArray: AttachmentRefOrValue[],
      attachmentToBeDeleted: AttachmentRefOrValue
    },
    private dialogRef: MatDialogRef<DeleteResourceSpecAttachmentComponent>,
    private specService: ResourceSpecificationService

  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    // this.dialogRef.close('deleted')
    const updateSpecObj: ResourceSpecificationUpdate = {
      attachment: this.data.resourceSpecAttachmentArray
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
