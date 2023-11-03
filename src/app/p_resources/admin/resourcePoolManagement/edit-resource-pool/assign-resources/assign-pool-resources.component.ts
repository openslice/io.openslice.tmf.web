import { SortingService } from '../../../../../shared/functions/sorting.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { ResourcePoolUpdate } from '../../../../../openApis/resourcePoolManagement/models/resource-pool-update';
import { ResourceRef } from '../../../../../openApis/serviceInventoryManagement/models/resource-ref';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { Resource } from 'src/app/openApis/resourceInventoryManagement/models';
import { ResourcePool } from '../../../../../openApis/resourcePoolManagement/models/resource-pool';
import { ResourcePoolService } from 'src/app/openApis/resourcePoolManagement/services';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



@Component({
  selector: 'app-assign-pool-resources',
  templateUrl: './assign-pool-resources.component.html',
  styleUrls: ['./assign-pool-resources.component.scss']
})
export class AssignPoolResourceRelationshipsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public resourcePool: ResourcePool,
    private dialogRef: MatDialogRef<AssignPoolResourceRelationshipsComponent>,
    private resourcePoolService: ResourcePoolService, 
    private resourceService: ResourceService,
    private sortingService: SortingService,
  ) { }


  @ViewChild('specInput', {static: false}) specInput: ElementRef<HTMLInputElement>;  
  @ViewChild('specInput', {static: false, read: MatAutocompleteTrigger}) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  displayedColumnsSpecRelationships = ['name', 'actions']
  dataSource  = new MatTableDataSource<Resource>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  
  resourceInputCtrl = new FormControl();


  selectedResources: Resource[] = []
  nonSelectedResources: Resource[]
  filteredResources$: Observable<Resource[]>

  ngOnInit() {
    this.listResources()
  }
  
  listResources() {
    this.resourceService.listResource({}).subscribe(
      data => this.nonSelectedResources = data,
      error => console.error(error),
      () => {
        //remove self from available spec list as well as the allready assigned resources
        //this.nonSelectedResources.splice(this.nonSelectedResources.findIndex(el => el.id === this.resource.id), 1)
        const initiallyAssignedResourceIDs: string[] = this.resourcePool.capacity?.resources.map(el => el.id)
        this.nonSelectedResources = this.nonSelectedResources.filter(resource => !initiallyAssignedResourceIDs?.includes(resource.id))
        this.nonSelectedResources.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

        if (!this.resourcePool.capacity){
          this.resourcePool.capacity = { resources:[] };
        }

        this.selectedResources = this.resourcePool.capacity.resources.slice()
        this.dataSource.data = this.selectedResources
        if (this.selectedResources){
          this.dataSource.sort = this.sort
        }

        this.filteredResources$ = this.resourceInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (resource: string | Resource) => typeof(resource) === 'string' ? this._filter(resource) : this.nonSelectedResources.slice() )
        )
      }
    )
  }



  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedResources.push(event.option.value);
    this.dataSource.data = this.selectedResources

    this.nonSelectedResources = this.nonSelectedResources.filter(el =>  el.name != event.option.value.name)

    this.specInput.nativeElement.value = '';
    this.resourceInputCtrl.setValue(null);
  }

  private _filter(value: string): Resource[] {
      const filterValue = value.toLowerCase();
      return this.nonSelectedResources.filter(res => res.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  removeResources(spec:Resource) {
    const index = this.selectedResources.indexOf(spec);
    if (index >= 0) {
      this.selectedResources.splice(index, 1);
      this.dataSource.data = this.selectedResources
      this.nonSelectedResources.push(spec);
    }
  }


  closeDialog() {
    this.dialogRef.close()
  }

  confirmAssignment() {
    
    const updateRelationshipsObj: ResourcePoolUpdate = {
      
      capacity: { 
        resources : this.selectedResources.map(spec =>{ return {id: spec.id, name: spec.name}})
      }
      
    }
    this.resourcePoolService.patchResourcePool({id: this.resourcePool.id ,  body : updateRelationshipsObj}).subscribe(
      data => {},
      error => console.error(error),
      () => {
        this.dialogRef.close('updated')
      }
    )
  }
}
