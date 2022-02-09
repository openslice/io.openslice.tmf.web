import { Component, OnInit, Inject } from '@angular/core';
import { ServiceSpecificationUpdate, ServiceSpecification, Attachment, AttachmentRef } from 'src/app/openApis/serviceCatalogManagement/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';

@Component({
  selector: 'app-delete-attachment',
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


    console.log(this.data)

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
