import { ResourceRef } from './../../../../openApis/serviceInventoryManagement/models/resource-ref';
import { MatTableDataSource } from '@angular/material/table';
import { SortingService } from './../../../../shared/functions/sorting.service';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { Resource } from './../../../../openApis/serviceCatalogManagement/models/resource';
import { ResourcePool } from './../../../../openApis/resourcePoolManagement/models/resource-pool';

import { ReservationUpdate } from '../../../../openApis/resourcePoolManagement/models/reservation-update';
import { ReservationCreate } from '../../../../openApis/resourcePoolManagement/models/reservation-create';
import { ReservationService, ResourcePoolService } from 'src/app/openApis/resourcePoolManagement/services';
import { Reservation } from '../../../../openApis/resourcePoolManagement/models/reservation';
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
    selector: 'edit-resource-reservation',
    templateUrl: './edit-resource-reservation.component.html',
    styleUrls: ['./edit-resource-reservation.component.scss']
  })
export class EditResourceReservationComponent implements OnInit {

    constructor(
      private activatedRoute: ActivatedRoute,
        private resourceReservationService: ReservationService, 
        private dialog: MatDialog,
        private toast: ToastrService,
        private router: Router,
        private resourcePoolService: ResourcePoolService, 
        private resourceService: ResourceService,
        private sortingService: SortingService,
      ) { }

      
  resourceReservationID: string
  resourceReservation: Reservation
  specNotFound: boolean = false
  finishedLoading: boolean = false
  selectedResourcePoolId: string
  


  editForm =  new FormGroup({
    name: new FormControl("", [Validators.required]),
    description: new FormControl(),
    requestedPeriodStartDateTime: new FormControl(new Date()),
    requestedPeriodEndDateTime: new FormControl(new Date(new Date().setHours (new Date().getHours() + 24))),
    resourceInput : new FormControl([], [Validators.required])
    // resourcePool: new FormControl(),
    // resourcesToReserve: new FormControl(),
    // relatedParty: new FormControl(),
    // validFor: new FormGroup({
    //   endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
    //   startDateTime: new FormControl(new Date())
    // }),
    // version: new FormControl("0.1.0")
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  selectable = true;
  removable = true;
  addOnBlur = true;
  
  newReservation: boolean = false

  
  listResources: ResourceRef[] = []  
  listResourcePools: ResourcePool[] = []
  
  filteredResourcePools$: Observable<ResourcePool[]>
  filteredResources$: Observable<ResourceRef[]>

  resourcePoolInputCtrl = new FormControl("", [Validators.required]);
  resourceInputCtrl = new FormControl();
  
  dataSourceResourcePools  = new MatTableDataSource<ResourcePool>()

  selectedResourcePool: ResourcePool;
  //selectedResource: ResourceRef;
  //selectedResourcesValue: ResourceRef[];

  @ViewChild('resourcePoolInput', {static: false}) resourcePoolInput: ElementRef<HTMLInputElement>;  
  @ViewChild('resourcePoolInput', {static: false, read: MatAutocompleteTrigger}) matAutocompleteTrigger: MatAutocompleteTrigger;
  @ViewChild('autoResourcePool', {static: false}) matAutocomplete: MatAutocomplete;
  


  ngOnInit() {
    this.createListResourcePools()
    if (this.activatedRoute.snapshot.params.id) {
      this.resourceReservationID = this.activatedRoute.snapshot.params.id
      this.retrieveReservation()
    }
    else { 
      this.finishedLoading = true
      this.newReservation = true 
    }
  }

  retrieveReservation() {
    this.resourceReservationService.retrieveReservation({ id: this.resourceReservationID }).subscribe(
      data => this.resourceReservation = data,
      error => console.error(error), () => {
        if (this.resourceReservation) {
          this.finishedLoading = true
          this.editForm.patchValue(this.resourceReservation)
          // this.editForm.value.resourceInput = this.resourceReservation.reservationItem[0].resourceCapacity.resourcePool.map(r =>{ return {id: r.id, name: r.name}})
          this.selectedResourcePoolId = this.resourceReservation.reservationItem[0].resourceCapacity.resourcePool.id;
          this.resourcePoolInputCtrl.setValue(this.selectedResourcePoolId);
          this.createListResources(this.selectedResourcePool)



          this.editForm.controls.resourceInput.setValue(this.resourceReservation.reservationItem[0].appliedCapacityAmount.resources.map(r => { return r.id }));

          // this.editForm.controls.resourceInput.setValue( [
          //   this.resourceReservation.reservationItem[0].appliedCapacityAmount.resources[0],
          //   this.resourceReservation.reservationItem[0].appliedCapacityAmount.resources[1]] );
        }
        else {
          this.specNotFound = true
        }
      }
    )
  }

  submitDialog() {

    if (this.editForm.valid && this.resourcePoolInputCtrl.valid) {
      const updateObj: ReservationCreate | ReservationUpdate = {
        description: this.editForm.value.description,
        name: this.editForm.value.name,
        requestedPeriodStartDateTime: this.editForm.value.requestedPeriodStartDateTime,
        requestedPeriodEndDateTime: this.editForm.value.requestedPeriodEndDateTime,
        reservationItem: [
          {
            resourceCapacity: {
              resourcePool: {
                id: this.selectedResourcePool.id,
                resources: this.editForm.value.resourceInput.map(r => { return { id: r } })
  
              }
            }
          }
  
        ]
  
      }
  
      //updateObj.reservationItem[0].resourceCapacity.resourcePool.resources.push
      const params: ReservationService.CreateReservationParams = {
  
        body: updateObj,
      }
  
      let updatedRP: Reservation
  
      if (this.newReservation) {
        this.resourceReservationService.createReservation(params).subscribe(
          data => { updatedRP = data },
          error => console.error(error),
          () => {
            this.newReservation = false
            this.toast.success("Resource Pool was successfully created")
            this.router.navigate([updatedRP.id], {relativeTo: this.activatedRoute})
            this.refreshReservation(updatedRP)
          }
        )
      }
      else {
        const paramsPatch: ReservationService.PatchReservationParams = {
          id: this.resourceReservationID,
          name: this.editForm.value.name,
          body: updateObj,
        }
        this.resourceReservationService.patchReservation(paramsPatch).subscribe(
          data => { updatedRP = data },
          error => console.error(error),
          () => {
            this.toast.success("Resource Pool was successfully updated")
            this.refreshReservation(updatedRP)
          }
        )
      }
    }

  }

  refreshReservation(updatedSpec: Reservation) {
    this.resourceReservationID = updatedSpec.id
    this.retrieveReservation()
  }


  openResourcePoolList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  createListResourcePools() {
    this.resourcePoolService.listResourcePool({}).subscribe(
      data => this.listResourcePools  = data,
      error => console.error(error),
      () => {
        this.dataSourceResourcePools.data = this.listResourcePools
        this.filteredResourcePools$ = this.resourcePoolInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (rPool: string | ResourcePool) => typeof( rPool ) === 'string' ? this._filter( rPool ) : this.listResourcePools.slice() )
        )
      }
    )
  }

  private _filter(value: string): ResourcePool[] {
    const filterValue = value.toLowerCase();
    return this.listResourcePools.filter(res => res.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  selectedRPool(event: MatAutocompleteSelectedEvent): void {
    //this.listResourcePools.push(event.option.value);
    this.resourceInputCtrl.reset()
    this.dataSourceResourcePools.data = this.listResourcePools
    this.selectedResourcePoolId = event.option.value;
    this.createListResources( event.option.value )
  }


  createListResources(value: any) {
    this.resourcePoolService.retrieveResourcePool({id:this.selectedResourcePoolId }).subscribe(
      data => this.selectedResourcePool  = data,
      error => console.error(error),
      () => {
        this.listResources = []
        
        this.resourcePoolInput.nativeElement.value = this.selectedResourcePool.name;
        if (this.selectedResourcePool.capacity && this.selectedResourcePool.capacity.resources) {
          this.listResources  = this.selectedResourcePool.capacity.resources; 
        }
        
        this.listResources.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

        this.filteredResources$ = this.resourceInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (r: string | ResourceRef) => typeof( r ) === 'string' ? this._filterRef( r ) : this.listResources.slice() )
        )
      }
    )
  }

  private _filterRef(value: string): ResourceRef[] {
    const filterValue = value.toLowerCase();
    return this.listResources.filter(res => res.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  selectedR(event: MatAutocompleteSelectedEvent): void {
    //this.selectedResource = event.option.value;
  }
}