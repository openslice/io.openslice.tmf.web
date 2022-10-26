import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResourceService } from 'src/app/openApis/resourceInventoryManagement/services';
import { Resource } from 'src/app/openApis/resourceInventoryManagement/models/resource';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { ResourceRelationshipRes, ResourceUpdate } from 'src/app/openApis/resourceInventoryManagement/models';
import { NGB_TIMEPICKER_I18N_FACTORY } from '@ng-bootstrap/ng-bootstrap/timepicker/timepicker-i18n';
import { ResourceRefOrValueReq } from 'src/app/openApis/resourceOrderManagement/models';



@Component({
  selector: 'app-assign-resource-relationships',
  templateUrl: './assign-resource-relationships.component.html',
  styleUrls: ['./assign-resource-relationships.component.scss']
})
export class AssignResourceRelationshipsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public resource: Resource,
    private dialogRef: MatDialogRef<AssignResourceRelationshipsComponent>,
    private resourceService: ResourceService
  ) { }


  @ViewChild('specInput') resourceInput: ElementRef<HTMLInputElement>;
  @ViewChild('specInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  displayedColumnsResourceRelationships = ['name', 'actions']
  dataSource  = new MatTableDataSource<Resource>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;



  resourceInputCtrl = new FormControl();

  selectedResources: Resource[] = []

  nonSelectedResources: Resource[]
  filteredResources$: Observable<Resource[]>

  ngOnInit() {
    console.log("THIS"+JSON.stringify(this.resource))
    this.listResources()
  }

  listResources() {
    this.resourceService.listResource({}).subscribe(
      data => this.nonSelectedResources = data,
      error => console.error(error),
      () => {
        //remove self from available spec list as well as the allready assigned specs
        this.nonSelectedResources.splice(this.nonSelectedResources.findIndex(el => el.id === this.resource.id), 1)
        const initiallyAssignedResourceIDs: string[] = this.resource.resourceRelationship.map(el => el.resource.id)
        this.nonSelectedResources = this.nonSelectedResources.filter(resource => !initiallyAssignedResourceIDs.includes(resource.id))

        this.selectedResources = this.resource.resourceRelationship.map(el => el.resource).slice()
        console.log("Getting this"+ JSON.stringify(this.selectedResources))
        this.dataSource.data = this.selectedResources
        this.dataSource.sort = this.sort

        this.filteredResources$ = this.resourceInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (resource: string | Resource) => typeof(resource) === 'string' ? this._filter(resource) : this.nonSelectedResources.slice() )
        )
      }
    )
  }

  private _filter(value: string): Resource[] {
    console.log("Filter value:"+value)
    const filterValue = value.toLowerCase();
    return this.nonSelectedResources.filter(tmp=>tmp.name!==null).filter(cat => cat.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedResources.push(event.option.value);
    this.dataSource.data = this.selectedResources

    this.nonSelectedResources = this.nonSelectedResources.filter(el =>  el.name != event.option.value.name)

    // this.resourceInput.nativeElement.value = '';
    this.resourceInputCtrl.setValue(null);
  }

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  removeResource(resource:Resource) {
    console.log("Remove resource"+JSON.stringify(resource))
    const index = this.selectedResources.indexOf(resource);
    console.log("Found at index "+index)
    if (index >= 0) {
      this.selectedResources.splice(index, 1);
      console.log("Found " + this.selectedResources.length + " selected elements.")
      this.dataSource.data = this.selectedResources
      this.nonSelectedResources.push(resource);
      console.log("Found " + this.nonSelectedResources.length + " non selected elements.")
    }
  }


  closeDialog() {
    this.dialogRef.close()
  }

  confirmAssignment() {
    const updateRelationshipsObj: ResourceUpdate = { }
    updateRelationshipsObj.resourceRelationship=[]
    console.log("Found "+this.selectedResources.length+" selected resources!")
    this.selectedResources.forEach(function (resource)
    {
      console.log("Found selected resource: "+JSON.stringify(resource))
      updateRelationshipsObj.resourceRelationship.push({relationshipType:"bundled",resource:{href:resource.href,id:resource.id,name:resource.name}})
    })

    console.log(updateRelationshipsObj)
    this.resourceService.patchResource({id: this.resource.id, resource: updateRelationshipsObj}).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => {this.dialogRef.close('updated')}
    )
  }
}
