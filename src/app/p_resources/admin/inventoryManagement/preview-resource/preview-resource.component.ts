import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { ToastrService } from 'ngx-toastr';
import { Resource, ResourceRelationshipRes, ResourceSpecificationRef, ResourceUpdate } from 'src/app/openApis/resourceInventoryManagement/models';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { startWith, map} from 'rxjs/operators'
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { MatDialog } from '@angular/material/dialog';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { EditResourceComponent } from '../edit-resource/edit-resource.component';
import { AppService } from 'src/app/shared/services/app.service';
import { ResourceRefOrValueReq,ResourceOrderItemReq, ResourceOrder, ResourceOrderCreate } from 'src/app/openApis/resourceOrderManagement/models';
import { ResourceOrderService } from 'src/app/openApis/resourceOrderManagement/services';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
interface RelationshipType {
  value: string;
  viewValue: string;
}

interface RelationshipWithParent {
  key: string;
  value: string;
}

@Component({
  selector: 'app-preview-resource',
  templateUrl: './preview-resource.component.html',
  styleUrls: ['./preview-resource.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})

export class PreviewResourceComponent implements OnInit {

// =========================================================================================================================
  selectedResources: ResourceRelationshipRes[] = []
  nonSelectedResources: Resource[]
  nonSelectedResourceRelationshipRes : ResourceRelationshipRes[]
  filteredResources$: Observable<ResourceRelationshipRes[]>
  resourceInputCtrl = new FormControl();
  displayedColumnsResourceRelationships = ['name', 'relationshipType', 'actions']
  dataSource  = new MatTableDataSource<ResourceRelationshipRes>()
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  //@ViewChild('resourceInput') resourceInput: ElementRef<HTMLInputElement>;
  @ViewChild('resourceInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
// =========================================================================================================================
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

  relationshipTypes: RelationshipType[] = [
    {value: 'bundled', viewValue: 'bundled'},
    {value: 'dependson', viewValue: 'dependson'}
  ];
  selectedRelationshipType: RelationshipWithParent[]

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

  onClickEdit(element)
  {
    this.resourceID = element.resource.id
    this.activeListItem = 'Main Properties'
    this.retrieveResource()
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

  btnClickEdit= function (element) {
    this.router.navigateByUrl(element.resource.id)
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
          this.listResources()
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

  private _filterOnRelatedResources(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.resource.resourceRelationship.filter( relatedSpec =>  relatedSpec.resource.name.toLowerCase().includes(filterValue) )
  }

  // =========================================================================================================================

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedResources.push(event.option.value);
    this.dataSource.data = this.selectedResources
    console.log("selected event "+JSON.stringify(event.option.value.resource.name))
    console.log("nonSelectedResource before"+JSON.stringify(this.nonSelectedResources))
    this.nonSelectedResources = this.nonSelectedResources.filter(el =>  el.name != event.option.value.resource.name)
    console.log("nonSelectedResource after"+JSON.stringify(this.nonSelectedResources))
    this.resourceInputCtrl.setValue(null);
    this.listResources()
  }

  removeResource(resourceRelationshipRes:ResourceRelationshipRes) {
    console.log("Remove resource"+JSON.stringify(resourceRelationshipRes))
    const index = this.selectedResources.indexOf(resourceRelationshipRes);
    console.log("Found at index "+index)
    if (index >= 0) {
      this.selectedResources.splice(index, 1);
      console.log("Found " + this.selectedResources.length + " selected elements.")
      this.dataSource.data = this.selectedResources

      this.nonSelectedResources.push(resourceRelationshipRes.resource);
      console.log("Found " + this.nonSelectedResources.length + " non selected elements.")
    }
    this.listResources()
  }

  confirmAssignment() {
    const updateRelationshipsObj: ResourceUpdate = { }
    updateRelationshipsObj.resourceRelationship=[]
    console.log("Got Relationshiptypes"+JSON.stringify(this.relationshipTypes))
    console.log("Found "+this.selectedResources.length+" selected resources!")
    this.selectedResources.forEach(function (resourceRelationshipRes)
    {
      console.log("Found selected resource: "+JSON.stringify(resourceRelationshipRes))
      updateRelationshipsObj.resourceRelationship.push({relationshipType:resourceRelationshipRes.relationshipType,resource:{href:resourceRelationshipRes.resource.href,id:resourceRelationshipRes.resource.id,name:resourceRelationshipRes.resource.name}})
    })

    console.log(updateRelationshipsObj)
    this.resourceService.patchResource({id: this.resource.id, resource: updateRelationshipsObj}).subscribe(
      data => console.log(data),
      error => {
        this.toast.error("Resource Relationships Update failed!")
        console.error(error)
      }
      ,
      () => {
        this.toast.success("Resource Relationships Updated Successfully!")
      }
    )
  }

  listResources() {
    this.resourceService.listResource({}).subscribe(
      data => this.nonSelectedResources = data,
      error => console.error(error),
      () => {
        // Remove self from available spec list as well as the allready assigned specs
        console.log("Resource:"+JSON.stringify(this.resource))
        this.nonSelectedResources.splice(this.nonSelectedResources.findIndex(el => el.id === this.resource.id), 1)
        // Remove already existing relationships
        const initiallyAssignedResourceIDs: string[] = this.resource.resourceRelationship.map(el => el.resource.id)
        this.nonSelectedResources = this.nonSelectedResources.filter(resource => !initiallyAssignedResourceIDs.includes(resource.id))
        // Convert Resource[] to ResourceRelationshipRes[]
        console.log("nonSelectedResources:"+JSON.stringify(this.nonSelectedResources))
        const nonSelectedResourceRelationshipRes:ResourceRelationshipRes[] = []
        this.nonSelectedResources.forEach(function(resource_tmp){
          resource_tmp.href=""
          nonSelectedResourceRelationshipRes.push({relationshipType:"bundled",resource:resource_tmp})
        })
        console.log("nonSelectedResourceRelationshipRes:"+JSON.stringify(nonSelectedResourceRelationshipRes))
        this.nonSelectedResourceRelationshipRes=nonSelectedResourceRelationshipRes
        this.selectedResources = this.resource.resourceRelationship
        console.log("Getting this"+ JSON.stringify(this.selectedResources))
        this.dataSource.data = this.selectedResources
        this.filteredResources$ = this.resourceInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (resource: string | ResourceRelationshipRes) => typeof(resource) === 'string' ? this._filter(resource) : nonSelectedResourceRelationshipRes.slice() )
        )
      }
    )
  }

  private _filter(value: string): ResourceRelationshipRes[] {
    console.log("Filter value:"+value)
    const filterValue = value.toLowerCase();
    return (this.nonSelectedResourceRelationshipRes.filter(tmp=>tmp.resource.name!==null).filter(cat => cat.resource.name.toLowerCase().indexOf(filterValue) !== -1))
  }

}
