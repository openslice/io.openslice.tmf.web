import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Organization, Characteristic, OrganizationUpdate } from 'src/app/openApis/partyManagement/models';
import { OrganizationService } from 'src/app/openApis/partyManagement/services';

@Component({
  selector: 'app-delete-party-characteristic',
  templateUrl: './delete-party-characteristic.component.html',
  styleUrls: ['./delete-party-characteristic.component.scss']
})
export class DeletePartyCharacteristicComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      organization: Organization
      characteristicsArray: Characteristic[], 
      characteristicToBeDeleted: Characteristic
    },
    private dialogRef: MatDialogRef<DeletePartyCharacteristicComponent>,
    private orgService: OrganizationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    const updateOrganizationObj: OrganizationUpdate = {
      partyCharacteristic: this.data.characteristicsArray
    }


    this.orgService.patchOrganization({ id: this.data.organization.id, organization: updateOrganizationObj }).subscribe(
      data => {},
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }


}
