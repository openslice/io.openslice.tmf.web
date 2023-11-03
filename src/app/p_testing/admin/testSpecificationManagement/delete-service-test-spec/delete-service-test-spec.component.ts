import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceTestSpecification } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';

@Component({
  selector: 'app-delete-service-test-spec',
  templateUrl: './delete-service-test-spec.component.html',
  styleUrls: ['./delete-service-test-spec.component.scss']
})
export class DeleteServiceTestSpecComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceTestSpecification,
    private dialogRef: MatDialogRef<DeleteServiceTestSpecComponent>,
    private testSpecService: ServiceTestSpecificationService
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.testSpecService.deleteServiceTestSpecification(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
