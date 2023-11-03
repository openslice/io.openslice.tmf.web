import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacteristicSpecificationRes, ServiceTestSpecification, ServiceTestSpecificationUpdate } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';

@Component({
  selector: 'app-delete-test-spec-characteristic',
  templateUrl: './delete-test-spec-characteristic.component.html',
  styleUrls: ['./delete-test-spec-characteristic.component.scss']
})
export class DeleteTestSpecCharacteristicComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceTestSpec: ServiceTestSpecification
      newCharacteristicsArray:CharacteristicSpecificationRes[], 
      charToBeDeleted: CharacteristicSpecificationRes
    },
    private dialogRef: MatDialogRef<DeleteTestSpecCharacteristicComponent>,
    private testSpecService: ServiceTestSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDeletion() { 
    // this.dialogRef.close('deleted')
    const updateSpecObj: ServiceTestSpecificationUpdate = {
      specCharacteristic: this.data.newCharacteristicsArray
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
