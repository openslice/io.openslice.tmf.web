import { Component, OnInit, Inject } from '@angular/core';
import { ResourceSpecificationUpdate, ResourceSpecification, Attachment, AttachmentRef } from 'src/app/openApis/resourceCatalogManagement/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';

@Component({
  selector: 'app-delete-attachment',
  templateUrl: './delete-attachment.component.html',
  styleUrls: ['./delete-attachment.component.scss']
})
export class DeleteAttachmentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      resourceSpec: ResourceSpecification
      resourceSpecAttachmentArray: AttachmentRef[],
      attachmentToBeDeleted: AttachmentRef
    },
    private dialogRef: MatDialogRef<DeleteAttachmentComponent>,
    private specService: ResourceSpecificationService

  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    // this.dialogRef.close('deleted')
    const updateSpecObj: ResourceSpecificationUpdate = {
      attachment: this.data.resourceSpecAttachmentArray
    }


    console.log(this.data)

    this.specService.patchResourceSpecification({ id: this.data.resourceSpec.id, resourceSpecification: updateSpecObj }).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
