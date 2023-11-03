import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceTest } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestService } from 'src/app/openApis/serviceTestManagement/services';

@Component({
  selector: 'app-delete-service-test',
  templateUrl: './delete-service-test.component.html',
  styleUrls: ['./delete-service-test.component.scss']
})
export class DeleteServiceTestComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceTest,
    private dialogRef: MatDialogRef<DeleteServiceTestComponent>,
    private testService: ServiceTestService
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.testService.deleteServiceTest(this.data.id).subscribe(
      data => {},
      error => { this.dialogRef.close(error); console.error(error) },
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
