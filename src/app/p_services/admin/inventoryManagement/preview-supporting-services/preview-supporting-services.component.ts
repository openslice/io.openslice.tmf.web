import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceRef } from 'src/app/openApis/serviceOrderingManagement/models';
import { ServiceService } from 'src/app/openApis/serviceInventoryManagement/services';
import { Service, ServiceUpdate } from 'src/app/openApis/serviceInventoryManagement/models';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-preview-supporting-services',
  templateUrl: './preview-supporting-services.component.html',
  styleUrls: ['./preview-supporting-services.component.scss']
})
export class PreviewSupportingServicesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceRef: ServiceRef
    },
    private dialogRef: MatDialogRef<PreviewSupportingServicesComponent>,
    private inventoryService: ServiceService,
    private toastr: ToastrService,
    private authService: AuthService,
    public appService: AppService
  ) { }

  supportingService: Service

  newNote: boolean = false

  editForm = new FormGroup ({
    state: new FormControl(),
    note: new FormControl()
  })

  availableStates = ['feasibilityChecked', 'designed', 'reserved', 'inactive', 'active', 'terminated']
  ngOnInit() {
    if (this.data.serviceRef) {
      this.inventoryService.retrieveService(this.data.serviceRef).subscribe(
        data => { this.supportingService = data },
        error => { console.error(error); this.toastr.error("An error occurred retrieving supporting Service information")},
        () => { 
          this.editForm.patchValue({
            state: this.supportingService.state
          })
        }
      )
    }
  }

  stateClassSelector(state:'feasibilityChecked' | 'designed' | 'reserved' | 'inactive' | 'active' | 'terminated') {
    let cssClass: string = 'badge'
    switch (state) {
      case 'active':
        cssClass += ' badge-success'
        break;
      case 'inactive':
        cssClass += ' badge-secondary'
        break;
      case 'terminated':
        cssClass += ' badge-danger'
        break;
      default:
        cssClass += ' badge-warning'
    }
    return cssClass
  }

  triggerNewNote() {
    if (this.newNote) this.editForm.get('note').reset()
    this.newNote = !this.newNote
  }

  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
   
    let updateServiceObj: ServiceUpdate = {}

    if (!this.editForm.get('state').pristine) 
      updateServiceObj['state'] = this.editForm.get('state').value
    if (!this.editForm.get('note').pristine)
      updateServiceObj['note'] = [{
        author: this.authService.portalUserJWT.preferred_username,
        text: this.editForm.get('note').value
      }]
          
    this.inventoryService.patchService({service: updateServiceObj, id: this.supportingService.id}).subscribe(
      data => { },
      error => { console.error(error), this.toastr.error("An error occurred updating this Supporting Service") },
      () => { this.dialogRef.close('updated') }
    )
  }

}
