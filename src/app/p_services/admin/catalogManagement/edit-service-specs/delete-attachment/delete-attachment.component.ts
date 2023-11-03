import { Component, OnInit, Inject } from '@angular/core';
import { ServiceSpecificationUpdate, ServiceSpecification, Attachment, AttachmentRef } from 'src/app/openApis/serviceCatalogManagement/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';

@Component({
  selector: 'app-delete-resource-spec-attachment',
  templateUrl: './delete-attachment.component.html',
  styleUrls: ['./delete-attachment.component.scss']
})
export class DeleteAttachmentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceSpec: ServiceSpecification
      serviceSpecAttachmentArray: AttachmentRef[], 
      attachmentToBeDeleted: AttachmentRef
    },
    private dialogRef: MatDialogRef<DeleteAttachmentComponent>,
    private specService: ServiceSpecificationService

  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    const updateSpecObj: ServiceSpecificationUpdate = {
      attachment: this.data.serviceSpecAttachmentArray
    }


    this.specService.patchServiceSpecification({ id: this.data.serviceSpec.id, serviceSpecification: updateSpecObj }).subscribe(
      data => {},
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
