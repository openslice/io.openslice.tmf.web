import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatAutocompleteTrigger, MatAutocomplete, MatTableDataSource, MatSort, MatAutocompleteSelectedEvent } from '@angular/material';
import { ResourceCategory, ResourceCandidate, ResourceCandidateRef, ResourceCategoryUpdate, ResourceSpecification } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceCandidateService, ResourceCategoryService } from 'src/app/openApis/resourceCatalogManagement/services';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { ServiceCandidate} from 'src/app/openApis/ServiceCatalogManagement/models';
@Component({
  selector: 'app-assign-service-candidates',
  templateUrl: './assign-resource-candidates.component.html',
  styleUrls: ['./assign-resource-candidates.component.scss']
})
export class AssignResourceCandidatesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceCategory,
    private dialogRef: MatDialogRef<AssignResourceCandidatesComponent>,
    private candidateService: ResourceCandidateService,
    private categoryService: ResourceCategoryService

  ) { }

  @ViewChild('candidateInput', {static: false}) candidateInput: ElementRef<HTMLInputElement>;
  @ViewChild('candidateInput', {static: false, read: MatAutocompleteTrigger}) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  displayedCandidateTableColumns = ['name', 'actions']
  dataSource  = new MatTableDataSource<ResourceCandidate>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  resourceCategory: ResourceCategory = this.data

  assignedCandidates: ResourceCandidateRef[] = []
  availableCandidates: ResourceCandidate[] = []
  filteredCandidates$: Observable<ResourceCandidate[] | ResourceSpecification[]>

  candidateInputCtrl = new FormControl()

  ngOnInit() {
    console.log(this.data)
    this.listResourceCandidates()
  }


  listResourceCandidates() {
    let allResourceCandidates: ResourceCandidate[]

    this.candidateService.listResourceCandidate({}).subscribe(
      data => allResourceCandidates = data,
      error => console.error(error),
      () => {

        const initiallyAssignedCandidatesIDs = this.resourceCategory.resourceCandidate.map(el => el.id)
        this.availableCandidates = allResourceCandidates.filter(cand => cand.name &&  !initiallyAssignedCandidatesIDs.includes(cand.id))



        // this.available = this.availableCandidates

        this.assignedCandidates = this.data.resourceCandidate.slice()
        this.dataSource.data = this.assignedCandidates
        this.dataSource.sort = this.sort

        this.filteredCandidates$ = this.candidateInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (spec: string | ResourceSpecification) => typeof(spec) === 'string' ? this._filter(spec) : this.availableCandidates.slice() )
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

  private _filter(value: string): ResourceCandidate[] {
      console.log(value)
      const filterValue = value.toLowerCase();
      return this.availableCandidates.filter(cat => cat.name && cat.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  removeResourceCandidate(spec:ResourceCandidate) {
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
    const updateCandidatesObj: ResourceCategoryUpdate = { resourceCandidate: this.assignedCandidates.map(cand => {return {id: cand.id, name: cand.name}}) }
    console.log(updateCandidatesObj)
    console.log(this.resourceCategory.id)
    this.categoryService.patchResourceCategory({id: this.resourceCategory.id, resourceCategory: updateCandidatesObj}).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => { this.dialogRef.close('updated') }
    )
  }

}
