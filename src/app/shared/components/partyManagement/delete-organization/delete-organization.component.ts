import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Organization } from 'src/app/openApis/partyManagement/models';
import { OrganizationService } from 'src/app/openApis/partyManagement/services';

@Component({
  selector: 'app-delete-organization',
  templateUrl: './delete-organization.component.html',
  styleUrls: ['./delete-organization.component.scss']
})
export class DeleteOrganizationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Organization,
    private dialogRef: MatDialogRef<DeleteOrganizationComponent>,
    private orgService: OrganizationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.orgService.deleteOrganization(this.data.id).subscribe(
      data => {},
      error => {this.dialogRef.close(error); console.error(error)},
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
