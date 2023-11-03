import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { ServiceTestSpecification } from 'src/app/openApis/serviceTestManagement/models';

@Component({
  selector: 'app-import-test-dialog',
  templateUrl: './import-test-dialog.component.html',
  styleUrls: ['./import-test-dialog.component.scss']
})
export class ImportTestDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public testSpecification: ServiceTestSpecification,
    private specService: ServiceSpecificationService,
    private dialogRef: MatDialogRef<ImportTestDialogComponent>,
    private toast: ToastrService
  ) { }

  ngOnInit() {
  }

  submitDialog() {
    this.specService.createServiceSpecificationFromServiceTestSpecification(this.testSpecification.id).subscribe(
      data => { 
        this.dialogRef.close(data)
      },
      error => { console.error(error); this.toast.error("An error occurred while importing Test Specification") }
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
