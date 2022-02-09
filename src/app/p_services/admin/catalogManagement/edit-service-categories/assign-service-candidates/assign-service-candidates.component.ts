import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatAutocompleteTrigger, MatAutocomplete, MatTableDataSource, MatSort, MatAutocompleteSelectedEvent } from '@angular/material';
import { ServiceCategory, ServiceCandidate, ServiceCandidateRef, ServiceCategoryUpdate, ServiceSpecification } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceCandidateService, ServiceCategoryService } from 'src/app/openApis/serviceCatalogManagement/services';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-assign-service-candidates',
  templateUrl: './assign-service-candidates.component.html',
  styleUrls: ['./assign-service-candidates.component.scss']
})
export class AssignServiceCandidatesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceCategory,
    private dialogRef: MatDialogRef<AssignServiceCandidatesComponent>,
    private candidateService: ServiceCandidateService,
    private categoryService: ServiceCategoryService

  ) { }

  @ViewChild('candidateInput', {static: false}) candidateInput: ElementRef<HTMLInputElement>;  
  @ViewChild('candidateInput', {static: false, read: MatAutocompleteTrigger}) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  displayedCandidateTableColumns = ['name', 'actions']
  dataSource  = new MatTableDataSource<ServiceCandidate>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  serviceCategory: ServiceCategory = this.data
  
  assignedCandidates: ServiceCandidateRef[] = []
  availableCandidates: ServiceCandidate[] = []
  filteredCandidates$: Observable<ServiceCandidate[]>

  candidateInputCtrl = new FormControl()

  ngOnInit() {
    console.log(this.data)
    this.listServiceCandidates()
  }


  listServiceCandidates() {
    let allServiceCandidates: ServiceCandidate[]
    
    this.candidateService.listServiceCandidate({}).subscribe(
      data => allServiceCandidates = data,
      error => console.error(error),
      () => { 
        
        const initiallyAssignedCandidatesIDs = this.serviceCategory.serviceCandidate.map(el => el.id)
        this.availableCandidates = allServiceCandidates.filter(cand => cand.name &&  !initiallyAssignedCandidatesIDs.includes(cand.id))

        
        // this.available = this.availableCandidates

        this.assignedCandidates = this.data.serviceCandidate.slice()
        this.dataSource.data = this.assignedCandidates
        this.dataSource.sort = this.sort

        this.filteredCandidates$ = this.candidateInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (spec: string | ServiceSpecification) => typeof(spec) === 'string' ? this._filter(spec) : this.availableCandidates.slice() )
        )

      }
      

    )
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.assignedCandidates.push(event.option.value);
    this.dataSource.data = this.assignedCandidates

    this.availableCandidates = this.availableCandidates.filter(el =>  el.name != event.option.value.name)

    this.candidateInput.nativeElement.value = '';
    this.candidateInputCtrl.setValue(null);
  }

  private _filter(value: string): ServiceSpecification[] {
      console.log(value)
      const filterValue = value.toLowerCase();
      return this.availableCandidates.filter(cat => cat.name && cat.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  removeServiceCandidate(spec:ServiceSpecification) {
    console.log(spec)
    const index = this.assignedCandidates.indexOf(spec);
    if (index >= 0) {
      this.assignedCandidates.splice(index, 1);
      this.dataSource.data = this.assignedCandidates
      this.availableCandidates.push(spec);
    }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    console.log('submit')
    console.log(this.assignedCandidates)
    const updateCandidatesObj: ServiceCategoryUpdate = { serviceCandidate: this.assignedCandidates.map(cand => {return {id: cand.id, name: cand.name}}) }
    console.log(updateCandidatesObj)
    console.log(this.serviceCategory.id)
    this.categoryService.patchServiceCategory({id: this.serviceCategory.id, serviceCategory: updateCandidatesObj}).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => { this.dialogRef.close('updated') }
    )
  }

}
