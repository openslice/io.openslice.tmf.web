import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AttachmentRefOrValue, ServiceTestSpecification, ServiceTestSpecificationUpdate } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';

@Component({
  selector: 'app-delete-test-spec-attachment',
  templateUrl: './delete-test-spec-attachment.component.html',
  styleUrls: ['./delete-test-spec-attachment.component.scss']
})
export class DeleteTestSpecAttachmentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceTestSpec: ServiceTestSpecification
      serviceTestSpecAttachmentArray: AttachmentRefOrValue[], 
      attachmentToBeDeleted: AttachmentRefOrValue
    },
    private dialogRef: MatDialogRef<DeleteTestSpecAttachmentComponent>,
    private testSpecService: ServiceTestSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDeletion() {
    // this.dialogRef.close('deleted')
    const updateSpecObj: ServiceTestSpecificationUpdate = {
      attachment: this.data.serviceTestSpecAttachmentArray
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
