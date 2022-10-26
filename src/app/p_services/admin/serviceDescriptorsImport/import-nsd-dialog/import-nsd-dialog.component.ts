import { Component, OnInit, Inject } from '@angular/core';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-import-nsd-dialog',
  templateUrl: './import-nsd-dialog.component.html',
  styleUrls: ['./import-nsd-dialog.component.scss']
})
export class ImportNsdDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public experiment,
    private specService: ServiceSpecificationService,
    private dialogRef: MatDialogRef<ImportNsdDialogComponent>,
    private toast: ToastrService
  ) { }

  ngOnInit() {
  }

  submitDialog() {
    this.specService.createServiceSpecificationFromNSDID(this.experiment.id).subscribe(
      data => { 
        this.dialogRef.close(data)
      },
      error => { console.error(error); this.toast.error("An error occurred while importing NSD") }
    )

  }

  closeDialog() {
    this.dialogRef.close()
  }
}
