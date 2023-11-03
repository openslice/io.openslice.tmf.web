import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { ServiceSpecification, ServiceSpecificationUpdate } from 'src/app/openApis/serviceCatalogManagement/models';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';



@Component({
  selector: 'app-assign-service-relationships',
  templateUrl: './assign-service-relationships.component.html',
  styleUrls: ['./assign-service-relationships.component.scss']
})
export class AssignServiceRelationshipsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceSpec: ServiceSpecification
    },
    private dialogRef: MatDialogRef<AssignServiceRelationshipsComponent>,
    private specService: ServiceSpecificationService
  ) { }


  @ViewChild('specInput') specInput: ElementRef<HTMLInputElement>;  
  @ViewChild('specInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  displayedColumnsSpecRelationships = ['name', 'actions']
  dataSource  = new MatTableDataSource<ServiceSpecification>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  
  specInputCtrl = new FormControl();

  selectedSpecs: ServiceSpecification[] = []

  nonSelectedSpecs: ServiceSpecification[]
  filteredSpecs$: Observable<ServiceSpecification[]>

  ngOnInit() {
    this.listServiceSpecs()
  }
  
  listServiceSpecs() {
    this.specService.listServiceSpecification({}).subscribe(
      data => this.nonSelectedSpecs = data,
      error => console.error(error),
      () => {
        //remove self from available spec list as well as the allready assigned specs
        this.nonSelectedSpecs.splice(this.nonSelectedSpecs.findIndex(el => el.id === this.data.serviceSpec.id), 1)
        const initiallyAssignedSpecIDs: string[] = this.data.serviceSpec.serviceSpecRelationship.map(el => el.id)
        this.nonSelectedSpecs = this.nonSelectedSpecs.filter(spec => !initiallyAssignedSpecIDs.includes(spec.id))

        this.selectedSpecs = this.data.serviceSpec.serviceSpecRelationship.slice()
        this.dataSource.data = this.selectedSpecs
        this.dataSource.sort = this.sort

        this.filteredSpecs$ = this.specInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (spec: string | ServiceSpecification) => typeof(spec) === 'string' ? this._filter(spec) : this.nonSelectedSpecs.slice() )
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

  private _filter(value: string): ServiceSpecification[] {
      const filterValue = value.toLowerCase();
      return this.nonSelectedSpecs.filter(cat => cat.name.toLowerCase().indexOf(filterValue) !== -1);
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
      serviceSpecRelationship: this.selectedSpecs.map(spec =>{ return {id: spec.id, name: spec.name}})
    }

    this.specService.patchServiceSpecification({id: this.data.serviceSpec.id, serviceSpecification: updateRelationshipsObj}).subscribe(
      data => {},
      error => console.error(error),
      () => {this.dialogRef.close('updated')}
    )
  }
}
