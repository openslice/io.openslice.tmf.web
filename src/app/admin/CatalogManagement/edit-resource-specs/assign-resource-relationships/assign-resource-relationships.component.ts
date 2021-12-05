import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatAutocompleteTrigger, MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatTableDataSource, MatSort } from '@angular/material';
import { ResourceSpecificationService } from 'src/app/openApis/ResourceCatalogManagement/services';
import { ResourceSpecification, ResourceSpecificationUpdate } from 'src/app/openApis/ResourceCatalogManagement/models';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';



@Component({
  selector: 'app-assign-service-relationships',
  templateUrl: './assign-resource-relationships.component.html',
  styleUrls: ['./assign-resource-relationships.component.scss']
})
export class AssignResourceRelationshipsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      resourceSpec: ResourceSpecification
    },
    private dialogRef: MatDialogRef<AssignResourceRelationshipsComponent>,
    private specResource: ResourceSpecificationService
  ) { }


  @ViewChild('specInput', {static: false}) specInput: ElementRef<HTMLInputElement>;  
  @ViewChild('specInput', {static: false, read: MatAutocompleteTrigger}) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  displayedColumnsSpecRelationships = ['name', 'actions']
  dataSource  = new MatTableDataSource<ResourceSpecification>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  
  specInputCtrl = new FormControl();

  selectedSpecs: ResourceSpecification[] = []

  nonSelectedSpecs: ResourceSpecification[]
  filteredSpecs$: Observable<ResourceSpecification[]>

  ngOnInit() {
    console.log(this.data)
    this.listResourceSpecs()
  }
  
  listResourceSpecs() {
    this.specResource.listResourceSpecification({}).subscribe(
      data => this.nonSelectedSpecs = data,
      error => console.error(error),
      () => {
        //remove self from available spec list as well as the allready assigned specs
        this.nonSelectedSpecs.splice(this.nonSelectedSpecs.findIndex(el => el.id === this.data.resourceSpec.id), 1)
        const initiallyAssignedSpecIDs: string[] = this.data.resourceSpec.resourceSpecRelationship.map(el => el.id)
        this.nonSelectedSpecs = this.nonSelectedSpecs.filter(spec => !initiallyAssignedSpecIDs.includes(spec.id))

        this.selectedSpecs = this.data.resourceSpec.resourceSpecRelationship.slice()
        this.dataSource.data = this.selectedSpecs
        this.dataSource.sort = this.sort

        this.filteredSpecs$ = this.specInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (spec: string | ResourceSpecification) => typeof(spec) === 'string' ? this._filter(spec) : this.nonSelectedSpecs.slice() )
        )
      }
    )
  }



  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedSpecs.push(event.option.value);
    this.dataSource.data = this.selectedSpecs

    this.nonSelectedSpecs = this.nonSelectedSpecs.filter(el =>  el.name != event.option.value.name)

    this.specInput.nativeElement.value = '';
    this.specInputCtrl.setValue(null);
  }

  private _filter(value: string): ResourceSpecification[] {
      console.log(value)
      const filterValue = value.toLowerCase();
      return this.nonSelectedSpecs.filter(cat => cat.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  removeResourceSpec(spec:ResourceSpecification) {
    console.log(spec)
    const index = this.selectedSpecs.indexOf(spec);
    if (index >= 0) {
      this.selectedSpecs.splice(index, 1);
      this.dataSource.data = this.selectedSpecs
      this.nonSelectedSpecs.push(spec);
    }
  }


  closeDialog() {
    this.dialogRef.close()
  }

  confirmAssignment() {
    
    const updateRelationshipsObj: ResourceSpecificationUpdate = {
      resourceSpecRelationship: this.selectedSpecs.map(spec =>{ return {id: spec.id, name: spec.name}})
    }

    console.log(updateRelationshipsObj)
    this.specResource.patchResourceSpecification({id: this.data.resourceSpec.id, resourceSpecification: updateRelationshipsObj}).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => {this.dialogRef.close('updated')}
    )
  }
}
