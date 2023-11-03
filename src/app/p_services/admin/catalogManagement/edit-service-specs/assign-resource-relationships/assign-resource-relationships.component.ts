import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { ResourceSpecification } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';
import { ServiceSpecification, ServiceSpecificationUpdate } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';

@Component({
  selector: 'app-assign-resource-relationships',
  templateUrl: './assign-resource-relationships.component.html',
  styleUrls: ['./assign-resource-relationships.component.scss']
})
export class AssignResourceRelationshipsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public injectedData: {
      serviceSpec: ServiceSpecification
    },
    private dialogRef: MatDialogRef<AssignResourceRelationshipsComponent>,
    private serviceSpecService: ServiceSpecificationService,
    private resourceSpecService: ResourceSpecificationService
  ) { }

  @ViewChild('specInput') specInput: ElementRef<HTMLInputElement>;  
  @ViewChild('specInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  displayedColumnsSpecRelationships = ['name', 'actions']
  dataSource  = new MatTableDataSource<ResourceSpecification>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  specInputCtrl = new FormControl();

  selectedSpecs: ResourceSpecification[] = []

  nonSelectedSpecs: ResourceSpecification[]
  filteredSpecs$: Observable<ServiceSpecification[]>

  ngOnInit(): void {
    this.listResourceSpecs()
  }

  listResourceSpecs() {
    this.resourceSpecService.listResourceSpecification({}).subscribe(
      data => this.nonSelectedSpecs = data,
      error => console.error(error),
      () => {
        //remove already assigned Resource spec from the available list
        const initiallyAssignedSpecIDs: string[] = this.injectedData.serviceSpec.resourceSpecification.map(el => el.id)
        this.nonSelectedSpecs = this.nonSelectedSpecs.filter(spec => !initiallyAssignedSpecIDs.includes(spec.id))

        this.selectedSpecs = this.injectedData.serviceSpec.resourceSpecification.slice()
        this.dataSource.data = this.selectedSpecs
        this.dataSource.sort = this.sort

        this.filteredSpecs$ = this.specInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (spec: string | ResourceSpecification) => typeof(spec) === 'string' ? this._filter(spec) : this.nonSelectedSpecs.slice() )
        )
      }
    )
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {
    this.selectedSpecs.push(event.option.value);
    this.dataSource.data = this.selectedSpecs

    this.nonSelectedSpecs = this.nonSelectedSpecs.filter(el =>  el.name != event.option.value.name)

    this.specInput.nativeElement.value = '';
    this.specInputCtrl.setValue(null);
  }

  private _filter(value: string): ResourceSpecification[] {
    const filterValue = value.toLowerCase();
    return this.nonSelectedSpecs.filter(cat => cat.name?.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  removeServiceSpec(spec:ServiceSpecification) {
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
    const updateRelationshipsObj: ServiceSpecificationUpdate = {
      resourceSpecification: this.selectedSpecs.map(spec =>{ return {id: spec.id, name: spec.name, version: spec.version}})
    }

    this.serviceSpecService.patchServiceSpecification({id: this.injectedData.serviceSpec.id, serviceSpecification: updateRelationshipsObj}).subscribe(
      data => {},
      error => console.error(error),
      () => {this.dialogRef.close('updated')}
    )
  }

}
