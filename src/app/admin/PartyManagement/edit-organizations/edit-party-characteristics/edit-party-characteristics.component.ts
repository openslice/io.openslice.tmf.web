import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Organization, Characteristic, OrganizationUpdate } from 'src/app/openApis/PartyManagement/models';
import { OrganizationService } from 'src/app/openApis/PartyManagement/services';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-party-characteristics',
  templateUrl: './edit-party-characteristics.component.html',
  styleUrls: ['./edit-party-characteristics.component.scss']
})
export class EditPartyCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      organization: Organization,
      characteristicToBeUpdated: Characteristic,
    },
    private dialogRef: MatDialogRef<EditPartyCharacteristicsComponent>,
    private orgService: OrganizationService,
    private toast: ToastrService
  ) { }

  newSpec: boolean = false

  editCharacteristicForm = new FormGroup({
    name: new FormControl(),
    valueType: new FormControl('TEXT'),
    value: new FormGroup({
      value: new FormControl,
      alias: new FormControl
    })
  })

  ngOnInit() {
    if (this.data.characteristicToBeUpdated) {
      this.editCharacteristicForm.patchValue(this.data.characteristicToBeUpdated)
    }
    
    else { this.newSpec = true }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    console.log('submit')
    
    if (this.newSpec) {
      this.data.organization.partyCharacteristic.push(this.editCharacteristicForm.value)
    } else {
      const updateCharacteristIndex = this.data.organization.partyCharacteristic.findIndex(char => char.uuid === this.data.characteristicToBeUpdated.uuid)
      this.data.organization.partyCharacteristic[updateCharacteristIndex] = this.editCharacteristicForm.value
    }

    const organizationUpdateObj: OrganizationUpdate = {
      partyCharacteristic: this.data.organization.partyCharacteristic
    }

    console.log(organizationUpdateObj)
    this.orgService.patchOrganization({id: this.data.organization.id, organization: organizationUpdateObj}).subscribe(
      data => console.log(data),
      error => { console.error(error); this.toast.error("An error occurred upon updating Organization Characteristics") },
      () => {this.dialogRef.close('updated')}
    )
  }

}
