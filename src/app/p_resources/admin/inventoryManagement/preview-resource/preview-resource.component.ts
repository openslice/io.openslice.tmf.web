import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { ToastrService } from 'ngx-toastr';
import { Resource, ResourceRelationshipRes, ResourceSpecificationRef, ResourceUpdate } from 'src/app/openApis/resourceInventoryManagement/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { startWith, map} from 'rxjs/operators'
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { MatDialog } from '@angular/material';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EditResourceComponent } from '../edit-resource/edit-resource.component';
import { AppService } from 'src/app/shared/services/app.service';
import { AssignResourceRelationshipsComponent } from '../edit-resource/assign-resource-relationships/assign-resource-relationships.component';
import { ResourceRefOrValueReq,ResourceOrderItemReq, ResourceOrder, ResourceOrderCreate } from 'src/app/openApis/resourceOrderManagement/models';
import { ResourceOrderService } from 'src/app/openApis/resourceOrderManagement/services';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';

@Component({
  selector: 'app-preview-resource',
  templateUrl: './preview-resource.component.html',
  styleUrls: ['./preview-resource.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class PreviewResourceComponent implements OnInit {

  constructor(
    private resourceSpecificationService: ResourceSpecificationService,
    private activatedRoute: ActivatedRoute,
    private resourceService: ResourceService,
    private resourceOrderCreate: ResourceOrderService,
    private toast: ToastrService,
    private router: Router,
    private dialog: MatDialog,
    private sortingService: SortingService,
    private authService: AuthService,
    private toastr: ToastrService,
    public appService: AppService
  ) { }

  resourceID: string
  resource: Resource
  newResource: boolean = false
  resourceNotFound: boolean

  editForm = new FormGroup({
    resourceName: new FormControl(),
    resourceCategory: new FormControl(),
    resourceDescription: new FormControl(),
    operationalState: new FormControl(),
    administrativeState: new FormControl(),
    usageState: new FormControl(),
    resourceStatus: new FormControl(),
    note: new FormControl(),
    startOperatingDate: new FormControl(),
    endOperatingDate: new FormControl()
  })
  editMode: boolean = false

  newNote: boolean = false
  availableOperationalStates = ['disable','enable']
  availableAdministrativeStates = ['locked','shutdown','unlocked']
  availableUsageStates = ['active','busy','idle']
  availableResourceStatuses = ['alarm','available','reserved','standby','suspended','unknown']
  availableCategories = ['OSM Tenant', 'OSM VIM']

  subscriptions = new Subscription()

  listItems = ["Main Properties", "Resource Characteristics","Resource Relationships"]
  activeListItem = "Main Properties"

  relatedResourcesFilterCtrl = new FormControl();
  filteredResourceRelationships$: Observable<ResourceRelationshipRes[]>


  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id)
    {
      this.resourceID = this.activatedRoute.snapshot.params.id
      this.retrieveResource()
    } else {
      this.retrieveResourceSpecificationsList()
      this.newResource = true
      this.editMode = true
    }
  }

  retrieveResourceSpecificationsList() {
    this.resourceSpecificationService.listResourceSpecification({}).subscribe(
      data => { this.availableCategories = data.map(tmp=>tmp.name) },
      error => { console.error(error) },
      () => {
        console.log(this.availableCategories)
      }
    )
  }

  triggerNewNote() {
    if (this.newNote) this.editForm.get('note').reset()
    this.newNote = !this.newNote
  }

  selectListitem(item: string) {
    this.activeListItem = item
  }

  enableResourceEditing() {
    this.editMode = true
  }

  cancelResourceCreation()
  {
    this.editMode = false
  }

  cancelResourceEditing() {
    this.editForm.patchValue({
      resourceName: this.resource.name,
      resourceCategory: this.resource.category,
      resourceDescription: this.resource.description,
      operationalState: this.resource.operationalState,
      administrativeState: this.resource.administrativeState,
      usageState: this.resource.usageState,
      resourceStatus: this.resource.resourceStatus,
      note: this.resource.note,
      startOperatingDate: this.resource.startOperatingDate,
      endOperatingDate: this.resource.endOperatingDate
    })
    this.editMode = false
  }

  createDefaultResourceOrderObj(resourceCategory:string):ResourceOrderCreate
  {
    let resourceSpecificationRef: ResourceSpecificationRef={id:""}
    resourceSpecificationRef.name=resourceCategory
    let resourceRefOrValueReq: ResourceRefOrValueReq={href:"",id:""}
    resourceRefOrValueReq.name=resourceSpecificationRef.name
    resourceRefOrValueReq.resourceSpecification=resourceSpecificationRef
    let resourceOrderItemReq_tmp: ResourceOrderItemReq={}
    resourceOrderItemReq_tmp.resource=resourceRefOrValueReq;
    let resourceOrderCreateObj: ResourceOrderCreate={}
    resourceOrderCreateObj.orderItem=[resourceOrderItemReq_tmp]
    return resourceOrderCreateObj
  }

  submitResourceEditing() {
    if(this.newResource)
    {
      if(this.editForm.get('resourceName').value===null || this.editForm.get('resourceName').value==="" || this.editForm.get('resourceCategory').value===null || this.editForm.get('resourceCategory').value==="")
      {
        this.toast.error("You need to provide Name and Category!")
        console.log("Error! You need to provide Name and Category!")
        this.editMode = true
        return
      }

      this.editMode = false
      let createdResourceOrder: ResourceOrder={}
      this.resourceOrderCreate.createResourceOrder({name:this.editForm.get('resourceName').value, roCreate:this.createDefaultResourceOrderObj(this.editForm.get('resourceCategory').value)}).subscribe(
        data => { createdResourceOrder = data },
        error => console.error(error),
        () => {
          let resourceUpdate: ResourceUpdate = {
            name:this.editForm.get('resourceName').value,
            description:this.editForm.get('resourceDescription').value,
            category:this.editForm.get('resourceCategory').value,
            operationalState: this.editForm.get('operationalState').value,
            administrativeState: this.editForm.get('administrativeState').value,
            usageState: this.editForm.get('usageState').value,
            resourceStatus: this.editForm.get('resourceStatus').value,
            startOperatingDate: this.editForm.get('startOperatingDate').value,
            endOperatingDate: this.editForm.get('endOperatingDate').value
          }
          if (this.editForm.get('note').value) {
            resourceUpdate.note = [{
              author:this.authService.portalUserJWT.preferred_username,
              text: this.editForm.get('note').value,
              date: new Date().toISOString()
            }]
          }
          this.resourceID=createdResourceOrder.orderItem[0].resource.id
          this.resourceService.patchResource({resource: resourceUpdate, id: createdResourceOrder.orderItem[0].resource.id}).subscribe(
            data => { console.log(data), this.toast.success("Resource is successfully updated") },
            error => { console.error(error), this.toastr.error("An error occurred updating this Resource") },
            () => {
              this.triggerNewNote()
              this.router.navigate(['resources/resource/'+createdResourceOrder.orderItem[0].resource.id]);
            }
          )
        }
      )
    }
    else
    {
      let resourceUpdate: ResourceUpdate = {
        operationalState: this.editForm.get('operationalState').value,
        administrativeState: this.editForm.get('administrativeState').value,
        usageState: this.editForm.get('usageState').value,
        resourceStatus: this.editForm.get('resourceStatus').value,
        startOperatingDate: this.editForm.get('startOperatingDate').value,
        endOperatingDate: this.editForm.get('endOperatingDate').value
      }
      if (this.editForm.get('note').value) {
        resourceUpdate.note = [{
          author:this.authService.portalUserJWT.preferred_username,
          text: this.editForm.get('note').value,
          date: new Date().toISOString()
        }]
      }

      console.log(resourceUpdate)

      this.resourceService.patchResource({resource: resourceUpdate, id: this.resourceID}).subscribe(
        data => { console.log(data), this.toast.success("Resource is successfully updated") },
        error => { console.error(error), this.toastr.error("An error occurred updating this Resource") },
        () => {
          this.triggerNewNote()
          this.retrieveResource()
        }
      )
    }
  }

  getCheched(input:string)
  {
    if(input==="true")
      return 0
    if(input==="false")
      return 0
    return 0
  }

  retrieveResource() {
    this.resourceService.retrieveResource({id: this.resourceID}).subscribe(
      data => {
        this.resource = data
      },
      error => {
        console.error(error)
      },
      () => {
        if (!this.resource) {
          this.resourceNotFound = true
        } else {
          this.resource.resourceCharacteristic.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
          this.resource.note.sort(this.sortingService.ascDateSortingFuncByDateProperty())
          this.editForm.patchValue({
            operationalState: this.resource.operationalState,
            administrativeState: this.resource.administrativeState,
            usageState: this.resource.usageState,
            resourceStatus: this.resource.resourceStatus,
            startOperatingDate: this.resource.startOperatingDate,
            endOperatingDate: this.resource.endOperatingDate
          })

          //populate Specification Relationships Panel Info
          this.filteredResourceRelationships$ = this.relatedResourcesFilterCtrl.valueChanges.pipe(
            startWith(null),
            map((value: null | string) => value ? this._filterOnRelatedResources(value) : this.resource.resourceRelationship.slice())
          )
        }
      }
    )
  }

  openCharacteristicsEditDialog() {
    const dialogRef = this.dialog.open(EditResourceComponent, {
      data: {
        resource: this.resource,
      },
      minWidth: "60vw"
    })

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.toast.success("Resource is successfully updated")
          this.retrieveResource()
        }
      }
    )
  }

  resourceStateClassSelector(state:'enabled'| 'disabled') {
    let cssClass: string = ''
    switch (state) {
      case 'enabled':
        cssClass += ' text-success'
        break;
      case 'disabled':
        cssClass += ' text-warning'
        break;
      default:
        cssClass += ' text-danger'
    }
    return cssClass
  }

  private _filterOnRelatedResources(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.resource.resourceRelationship.filter( relatedSpec =>  relatedSpec.resource.name.toLowerCase().includes(filterValue) )
  }

  openAssignResourceRelationshipDialog() {
    const dialogRef = this.dialog.open(AssignResourceRelationshipsComponent, {
      data: this.resource,
      autoFocus: false,
      disableClose: true
    })

    dialogRef.afterClosed().subscribe (
      result => {
        console.log(result)
        if (result) {
          this.toast.success("Resource Relationship list was successfully updated")
          this.retrieveResource()
        }
      }
    )
  }

}
