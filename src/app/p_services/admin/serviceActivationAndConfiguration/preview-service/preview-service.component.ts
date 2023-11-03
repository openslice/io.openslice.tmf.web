import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { ServiceService } from 'src/app/openApis/serviceInventoryManagement/services';
import { ToastrService } from 'ngx-toastr';
import { Service, ServiceUpdate } from 'src/app/openApis/serviceActivationAndConfiguration/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { MatDialog } from '@angular/material/dialog';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EditServiceCharacteristicsComponent } from '../edit-service-characteristics/edit-service-characteristics.component';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-preview-service',
  templateUrl: './preview-service.component.html',
  styleUrls: ['./preview-service.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class PreviewServiceComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceService: ServiceService,
    private toast: ToastrService,
    private router: Router,
    private dialog: MatDialog,
    private sortingService: SortingService,
    private authService: AuthService,
    private toastr: ToastrService,
    public appService: AppService
  ) { }

  serviceID: string
  service: Service
  newService: boolean = false
  serviceNotFound: boolean = false
  finishedLoading: boolean = false

  editForm = new FormGroup({
    state: new FormControl(),
    note: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl()
  })
  editMode: boolean = false

  newNote: boolean = false
  availableStates = ['feasibilityChecked', 'designed', 'reserved', 'inactive', 'active', 'terminated']

  subscriptions = new Subscription()

  listItems = ["Main Properties", "Service Characteristics", "Supporting Services", "Supporting Resources"]
  activeListItem = "Main Properties"



  ngOnInit() {

    this.initSubscriptions()

    if (this.activatedRoute.snapshot.params.id)
    {
      this.serviceID = this.activatedRoute.snapshot.params.id
      this.retrieveService()
    } else {
      this.newService = true
    }
  }

  initSubscriptions() {
    this.subscriptions.add(this.router.events.subscribe(
      event => {
        if (event instanceof ActivationEnd && event.snapshot.params && event.snapshot.params.id) {
          this.serviceID = this.activatedRoute.snapshot.params.id
          this.retrieveService()
        }
      }
    ))
  }

  triggerNewNote() {
    if (this.newNote) this.editForm.get('note').reset()
    this.newNote = !this.newNote
  }

  selectListitem(item: string) {
    this.activeListItem = item
  }

  enableServiceEditing() {
    this.editMode = true
  }

  cancelServiceEditing() {
    this.editForm.patchValue({
      state: this.service.state,
      startDate: this.service.startDate,
      endDate: this.service.endDate
    })
    this.editMode = false
  }

  submitServiceEditing() {
    this.editMode = false
    let serviceUpdate: ServiceUpdate = {
      state: this.editForm.get('state').value,
      startDate: this.editForm.get('startDate').value,
      endDate: this.editForm.get('endDate').value
    }
    if (this.editForm.get('note').value) {
      serviceUpdate.note = [{
        author:this.authService.portalUserJWT.preferred_username,
        text: this.editForm.get('note').value,
        date: new Date().toISOString()
      }]
    }


    this.serviceService.patchService({service: serviceUpdate, id: this.serviceID}).subscribe(
      data => { this.toast.success("Service is successfully updated") },
      error => { console.error(error), this.toastr.error("An error occurred updating this Service") },
      () => {
        this.triggerNewNote()
        this.retrieveService()
      }
    )

  }

  retrieveService() {
    this.serviceService.retrieveService({id: this.serviceID}).subscribe(
      data => {
        this.service = data
      },
      error => {
        console.error(error)
      },
      () => {
        this.finishedLoading = true
        if (!this.service) {
          this.serviceNotFound = true
        }
        this.service.serviceCharacteristic.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
        this.service.note.sort(this.sortingService.ascDateSortingFuncByDateProperty())
        this.editForm.patchValue({
          state: this.service.state,
          startDate: this.service.startDate,
          endDate: this.service.endDate
        })
      }
    )
  }

  openCharacteristicsEditDialog() {
    const dialogRef = this.dialog.open(EditServiceCharacteristicsComponent, {
      data: {
        service: this.service,
      },
      minWidth: "60vw"
    })

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.toast.success("Service is successfully updated")
        }
        this.retrieveService()
      }
    )
  }

  serviceStateClassSelector(state:'feasibilityChecked'| 'designed'| 'reserved'| 'inactive'| 'active'| 'terminated') {
    let cssClass: string = 'badge'
    switch (state) {
      case 'feasibilityChecked':
        cssClass += ' badge-primary'
        break;
      case 'inactive':
        cssClass += ' badge-secondary'
        break;
      case 'terminated':
        cssClass += ' badge-danger'
        break;
      case 'active':
        cssClass += ' badge-success'
        break;
      default:
        cssClass += ' badge-warning'
    }
    return cssClass
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }
}
