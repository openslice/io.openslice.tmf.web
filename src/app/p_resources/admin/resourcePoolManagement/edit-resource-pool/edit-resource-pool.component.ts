import { ResourceRef } from './../../../../openApis/serviceOrderingManagement/models/resource-ref';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ResourcePoolUpdate } from '../../../../openApis/resourcePoolManagement/models/resource-pool-update';
import { ResourcePoolCreate } from '../../../../openApis/resourcePoolManagement/models/resource-pool-create';
import { ResourcePoolService } from 'src/app/openApis/resourcePoolManagement/services';
import { ResourcePool } from '../../../../openApis/resourcePoolManagement/models/resource-pool';
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { AssignPoolResourceRelationshipsComponent } from './assign-resources/assign-pool-resources.component';
import { DiscardChangesComponent } from '../../catalogManagement/edit-resource-spec/edit-resource-spec.component';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';


@Component({
  selector: 'edit-resource-pool',
  templateUrl: './edit-resource-pool.component.html',
  styleUrls: ['./edit-resource-pool.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class EditResourcePoolComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private resourcePoolService: ResourcePoolService,
    private dialog: MatDialog,
    private toast: ToastrService,
    private router: Router,
  ) { }


  resourcePoolID: string
  resourcePool: ResourcePool
  newResourcePool: boolean = false

  resourcePoolNotFound: boolean = false
  finishedLoading: boolean = false

  editForm = new FormGroup({
    name: new FormControl([]),
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    relatedParty: new FormControl(),
    // validFor: new FormGroup({
    //   endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
    //   startDateTime: new FormControl(new Date())
    // }),
    // version: new FormControl("0.1.0")
  })

  listItems = ["Main Properties", "Capacity"]
  activeListItem = "Main Properties"

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  // selectable = true;
  // removable = true;
  // addOnBlur = true;

  assignedResourcesFilterCtrl = new FormControl();
  filteredResourceRefs$: Observable<ResourceRef[]>


  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) {
      this.resourcePoolID = this.activatedRoute.snapshot.params.id
      this.retrieveResourcePool()
    }
    else {
      this.newResourcePool = true
      this.finishedLoading = true
    }
  }


  retrieveResourcePool() {
    this.resourcePoolService.retrieveResourcePool({ id: this.resourcePoolID }).subscribe(
      data => this.resourcePool = data,
      error => console.error(error),
      () => {        
        if (this.resourcePool) {
          this.finishedLoading = true

          // if (!this.resourcePool.capacity){
          //   this.resourcePool = {capacity:{resources:[]}}
          // }
          this.editForm.patchValue(this.resourcePool)
          this.editForm.markAsPristine()
          //populate  Relationships Panel Info
          
          this.filteredResourceRefs$ = this.assignedResourcesFilterCtrl.valueChanges.pipe(
            startWith(null),
            map((value: null | string) => value ? this._filterOnRelatedResourceRefs(value) : this.resourcePool.capacity?.resources.slice())
          )
        } else {
          this.resourcePoolNotFound = true
        }
      }
    )
  }

  private _filterOnRelatedResourceRefs(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.resourcePool.capacity.resources.filter( relatedSpec =>  relatedSpec.name.toLowerCase().includes(filterValue) )
  }

  selectListItem(item: string) {
    if (this.editForm.pristine) {
      this.activeListItem = item 
    } else {
      const dialogRef = this.dialog.open(DiscardChangesComponent, {autoFocus: true})

      dialogRef.afterClosed().subscribe (discardChanges => {
        if (discardChanges) {
          this.editForm.patchValue(this.resourcePool)
          this.editForm.markAsPristine()
          this.activeListItem = item
        }
      })
    }
  }

  updateResourcePoolMainProperties() {

    const updateObj: ResourcePoolCreate | ResourcePoolUpdate = {
      description: this.editForm.value.description,
      name: this.editForm.value.name
    }

    const params: ResourcePoolService.CreateResourcePoolParams = {
      body: updateObj,
    }

    let updatedRP: ResourcePool

    if (this.newResourcePool) {
      this.resourcePoolService.createResourcePool(params).subscribe(
        data => { updatedRP = data },
        error => console.error(error),
        () => {
          this.newResourcePool = false
          this.toast.success("Resource Pool was successfully created")
          this.router.navigate([updatedRP.id], {relativeTo: this.activatedRoute})
          this.refreshResourcePool(updatedRP)
        }
      )
    }

    else {
      this.resourcePoolService.patchResourcePool({id: this.resourcePoolID, body: updateObj}).subscribe(
        data => { updatedRP = data },
        error => console.error(error),
        () => {
          this.toast.success("Resource Pool was successfully updated")
          this.refreshResourcePool(updatedRP)
        }
      )
    }
  }

  refreshResourcePool(updatedSpec: ResourcePool) {
    this.resourcePoolID = updatedSpec.id
    this.retrieveResourcePool()
  }

  openAssignResourceRelationshipDialog() {
    const dialogRef = this.dialog.open(AssignPoolResourceRelationshipsComponent, {
      data: this.resourcePool,
      autoFocus: false,
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.toast.success("Resource Pool Capacity list was successfully updated")
          this.retrieveResourcePool()
        }
      }
    )
  }
}