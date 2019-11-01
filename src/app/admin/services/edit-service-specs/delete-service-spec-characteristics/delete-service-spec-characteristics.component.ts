import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ServiceSpecCharacteristic } from 'src/app/openApis/ServiceCatalogManagement/models';

@Component({
  selector: 'app-delete-service-spec-characteristics',
  templateUrl: './delete-service-spec-characteristics.component.html',
  styleUrls: ['./delete-service-spec-characteristics.component.scss']
})
export class DeleteServiceSpecCharacteristicsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceSpecCharacteristic,
    private dialogRef: MatDialogRef<DeleteServiceSpecCharacteristicsComponent>
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    this.dialogRef.close('deleted')
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
