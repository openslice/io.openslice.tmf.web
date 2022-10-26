import { Component, OnInit } from '@angular/core';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clone-gst-template',
  templateUrl: './clone-gst-template.component.html',
  styleUrls: ['./clone-gst-template.component.scss']
})
export class CloneGstTemplateComponent implements OnInit {

  constructor(
    private specService: ServiceSpecificationService,
    private dialogRef: MatDialogRef<CloneGstTemplateComponent>
  ) { }

  serviceNameCtrl = new FormControl('', Validators.required)

  ngOnInit() {

  }

  submitDialog() {
    this.specService.cloneGSTServiceSpecification(this.serviceNameCtrl.value).subscribe(
      data => { this.dialogRef.close(data)},
      error => console.error(error)
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
