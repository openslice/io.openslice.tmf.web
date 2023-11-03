import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { ToastrService } from 'ngx-toastr';
import { Resource, ResourceRelationshipRes } from 'src/app/openApis/resourceInventoryManagement/models';
import { FormControl } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { startWith, map} from 'rxjs/operators'
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { MatDialog } from '@angular/material/dialog';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AppService } from 'src/app/shared/services/app.service';
import { ResourceOrderService } from 'src/app/openApis/resourceOrderManagement/services';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

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
  resourceNotFound: boolean
  finishedLoading: boolean

  newResource = false

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
    this.initSubscriptions()

    if (this.activatedRoute.snapshot.params.id)
    {
      this.resourceID = this.activatedRoute.snapshot.params.id
      this.retrieveResource()
    }
  }

  initSubscriptions() {
    this.subscriptions.add(this.router.events.subscribe(
      event => {
        if (event instanceof ActivationEnd && event.snapshot.params && event.snapshot.params.id) {
          this.resourceID = this.activatedRoute.snapshot.params.id
          this.retrieveResource()
        }
      }
    ))
  }


  selectListitem(item: string) {
    this.activeListItem = item
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
        this.finishedLoading = true
        if (!this.resource) {
          this.resourceNotFound = true
        } else {
          this.resourceNotFound = false

          this.resource.resourceCharacteristic.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
          this.resource.note.sort(this.sortingService.ascDateSortingFuncByDateProperty())

          //populate Specification Relationships Panel Info
          this.filteredResourceRelationships$ = this.relatedResourcesFilterCtrl.valueChanges.pipe(
            startWith(null),
            map((value: null | string) => value ? this._filterOnRelatedResources(value) : this.resource.resourceRelationship.slice())
          )
        }
      }
    )
  }
  private _filterOnRelatedResources(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.resource.resourceRelationship.filter( relatedSpec =>  relatedSpec.resource.name.toLowerCase().includes(filterValue) )
  }
}
