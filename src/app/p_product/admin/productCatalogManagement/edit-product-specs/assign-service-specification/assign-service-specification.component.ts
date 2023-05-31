import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { ProductSpecification, ProductSpecificationUpdate } from 'src/app/openApis/productCatalogManagement/models';
import { ProductSpecificationService } from 'src/app/openApis/productCatalogManagement/services';
import { ServiceSpecification } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';

@Component({
  selector: 'app-assign-service-specification',
  templateUrl: './assign-service-specification.component.html',
  styleUrls: ['./assign-service-specification.component.scss']
})
export class AssignServiceSpecificationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      productSpec: ProductSpecification
    },
    private dialogRef: MatDialogRef<AssignServiceSpecificationComponent>,
    private productSpecService: ProductSpecificationService,
    private serviceSpecService: ServiceSpecificationService
  ) { }

  @ViewChild('specInput') specInput: ElementRef<HTMLInputElement>;  
  @ViewChild('specInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;
  @ViewChild('autoComplete') matAutocomplete: MatAutocomplete;


  displayedColumns = ['name', 'actions']
  dataSource  = new MatTableDataSource<ProductSpecification>()
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  specInputCtrl = new FormControl();
  nonSelectedSpecs: ProductSpecification[]
  filteredSpecs$: Observable<ProductSpecification[]>
  selectedSpecs: ProductSpecification[] = []


  ngOnInit(): void {
    this.listServiceSpecs()
  }

  listServiceSpecs() {
    this.serviceSpecService.listServiceSpecification({}).subscribe(
      data => this.nonSelectedSpecs = data,
      error => console.error(error),
      () => {
        //remove self from available spec list as well as the allready assigned specs
        const initiallyAssignedSpecIDs: string[] = this.data.productSpec.serviceSpecification.map(el => el.id)
        this.nonSelectedSpecs = this.nonSelectedSpecs.filter(spec => !initiallyAssignedSpecIDs.includes(spec.id))

        this.selectedSpecs = this.data.productSpec.serviceSpecification.slice()
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

    this.nonSelectedSpecs = this.nonSelectedSpecs.filter(el => el.name != event.option.value.name)

    this.specInput.nativeElement.value = '';
    this.specInputCtrl.setValue(null);
  }

  private _filter(value: string): ProductSpecification[] {
    const filterValue = value.toLowerCase();
    return this.nonSelectedSpecs.filter(cat => cat.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  
  removeProductSpec(spec:ProductSpecification) {
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
    
    const updateRelationshipsObj: ProductSpecificationUpdate = {
      serviceSpecification: this.selectedSpecs.map(spec =>{ return {id: spec.id, name: spec.name}})
    }

    this.productSpecService.patchProductSpecification({id: this.data.productSpec.id, productSpecification: updateRelationshipsObj}).subscribe(
      data => {},
      error => console.error(error),
      () => {this.dialogRef.close('updated')}
    )
  }


}
