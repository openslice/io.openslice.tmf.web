import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';

import { MatCheckboxChange, MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { ResourceCategory, ResourceCategoryUpdate, ResourceCategoryCreate, ResourceCategoryRef, ResourceCandidateRef, ResourceCandidate } from 'src/app/openApis/ResourceCatalogManagement/models';
import { ResourceCategoryService, ResourceCandidateService } from 'src/app/openApis/ResourceCatalogManagement/services';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CreateResourceCategoryChildrenComponent } from './create-resource-category-children/create-resource-category-children.component';
import { DeleteResourceCategoryComponent } from '../delete-resource-category/delete-resource-category.component';
import { AssignResourceCandidatesComponent } from './assign-resource-candidates/assign-resource-candidates.component';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-edit-service-categories',
  templateUrl: './edit-resource-categories.component.html',
  styleUrls: ['./edit-resource-categories.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditResourceCategoriesComponent implements OnInit, OnDestroy {

  constructor(
    private categoryService: ResourceCategoryService,
    private candidateResource: ResourceCandidateService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private toast: ToastrService
  ) { }

  category: ResourceCategory
  categoryID: string

  allCategories: ResourceCategory[]

  editForm =  new FormGroup({
    category: new FormControl([]),
    isRoot: new FormControl(),
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    parentId: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    resourceCandidate: new FormControl([]),
    version: new FormControl("0.1.0")
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  filteredCategories$: Observable<ResourceCategory[]>

  displayedColumnsChildrenCatalogs = ['name', 'actions']
  dataSource  = new MatTableDataSource<ResourceCategory>()

  subscriptions = new Subscription()

  childrenCategoryFilterCtrl = new FormControl();
  filteredChildrenCategories$: Observable<ResourceCategoryRef[]>

  resourceCandidatesFilterCtrl = new FormControl();
  filteredResourceCandidates$: Observable<ResourceCandidateRef[]>


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  newCategory: boolean = false
  ngOnInit() {
    this.retrieveResourceCategoryList()
    this.subscriptionsInit()


    if (this.activatedRoute.snapshot.params.id) 
    {
      this.categoryID = this.activatedRoute.snapshot.params.id
      this.retrieveResourceCategory()
    } 
    else { this.newCategory = true }

  }

  subscriptionsInit() {
    this.subscriptions.add(
      this.router.events.subscribe(
        (event) => {
          if (event instanceof ActivationEnd) {
            console.log(event.snapshot.params.id)
            this.categoryID = event.snapshot.params.id
            this.retrieveResourceCategory()
          }
        }
      )
    )

    this.subscriptions.add(
      this.editForm.get('isRoot').valueChanges.subscribe(
        (value: MatCheckboxChange) => {
          this.editForm.get('parentId').reset()
          if (value) {
            this.editForm.get('parentId').disable()
            this.editForm.get('parentId').clearValidators()
          } else {
            this.editForm.get('parentId').enable()
            this.editForm.get('parentId').setValidators(Validators.required)
            this.editForm.get('parentId').updateValueAndValidity()
          }
        }
      )
    )
  }

  retrieveResourceCategory() {
    this.categoryService.retrieveResourceCategory({id: this.categoryID}).subscribe( 
      data => this.category = data,
      error => console.error(error),
      () => {
        if (!this.category.validFor) this.category.validFor = {endDateTime:null, startDateTime:null}
        this.editForm.patchValue(this.category)
        console.log(this.editForm)

        if (this.category.parentId) {
          this.editForm.get('isRoot').disable()
          this.editForm.patchValue({parentId: this.allCategories.find(el => el.id === this.category.parentId)})
          this.editForm.get('parentId').disable()
        } else {
          this.editForm.get('isRoot').enable()
        }

        this.filteredChildrenCategories$ = this.childrenCategoryFilterCtrl.valueChanges.pipe( 
          startWith(null),
          map( (value:null | string) => value ? this._filterOnChildrenCategories(value) : this.category.category.slice() )
        )

        this.filteredResourceCandidates$ = this.resourceCandidatesFilterCtrl.valueChanges.pipe( 
          startWith(null),
          map( (value:null | string) => value ? this._filterOnResourceCandidates(value) : this.category.resourceCandidate.slice() )
        )
      }
    )
  }

  retrieveResourceCategoryList() {
    this.categoryService.listResourceCategory({}).subscribe(
      data =>  this.allCategories = data,
      error =>  console.error(error),
      () => {
        this.filteredCategories$ = this.editForm.get('parentId').valueChanges.pipe(
          startWith(null),
          map( (value: null | string | ResourceCategory) => typeof(value) === 'string' ? this._filterParentCategories(value) : this.allCategories.slice() )
        )
      }
    )
  }

  private _filterParentCategories(value: string): ResourceCategory[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(cat => cat.name.toLowerCase().includes(filterValue));
  }

  displayFn(category?: ResourceCategory): string | undefined {
    return category ? category.name : undefined;
  }

  private _filterOnChildrenCategories(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.category.category.filter( cat =>  cat.name.toLowerCase().includes(filterValue) )
  }

  private _filterOnResourceCandidates(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.category.resourceCandidate.filter( cand =>  cand.name.toLowerCase().includes(filterValue) )
  }

  openCategoryChildDialog() {
    const dialogRef = this.dialog.open(CreateResourceCategoryChildrenComponent, {data: this.category, disableClose: true})

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
        if (result){ 
          this.toast.success("Children Categories list is successfully updated")
          this.retrieveResourceCategory()
        }
      }
    )
  }

  openCategoryDeleteDialog(element: ResourceCategory) {
    const dialogRef = this.dialog.open(DeleteResourceCategoryComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result){ 
          this.toast.success("Children Categories list is successfully updated")
          this.retrieveResourceCategory()
        }
      }
    )
  }

  openAssignCandidatesDialog(element: ResourceCategory) {
    const dialogRef = this.dialog.open(AssignResourceCandidatesComponent, {data: element, disableClose: true, autoFocus:false})

    dialogRef.afterClosed().subscribe (
      result => {
        console.log(result)
        if (result) {
          this.toast.success("Resource Specifications list is successfully updated")
          this.retrieveResourceCategory()
        }
      }
    )
  }

  navigateToResourceSpec(cand: ResourceCandidateRef) {
    let resourceCandidate: ResourceCandidate
    this.candidateResource.retrieveResourceCandidate({id: cand.id}).subscribe(
      data => resourceCandidate = data,
      error => this.toast.error("An error occured while retrieving Resource Specification Information"),
      () => {
        this.router.navigate(['resource_spec_update', resourceCandidate.resourceSpecification.id])
      }      
    )
  }

  
  updateResourceCategory() {

    const updateObj: ResourceCategoryCreate | ResourceCategoryUpdate = {
      // category: this.editForm.value.category.map(el => {return {'id': el.id}}),
      isRoot: this.editForm.value.isRoot,
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    if (!this.editForm.get('isRoot').value) updateObj.parentId = this.editForm.get('parentId').value.id
    
    let updatedCategory: ResourceCategory
    console.log(updateObj)
    if (this.newCategory) {
      this.categoryService.createResourceCategory(updateObj).subscribe(
        data => { updatedCategory = data },
        error => console.error(error),
        () => { 
          this.newCategory = false
          this.toast.success("Resource Category is successfully created") 
          this.refreshResourceCategory(updatedCategory)
        }
      )
    }
    else {
      this.categoryService.patchResourceCategory({ id: this.categoryID, resourceCategory: updateObj }).subscribe(
        data => { updatedCategory = data },
        error => console.error(error),
        () => { 
          this.toast.success("Resource Category is successfully updated")
          this.refreshResourceCategory(updatedCategory) 
        }
      )
    }
  }

  refreshResourceCategory(updatedCategory : ResourceCategory) {
    this.categoryID = updatedCategory.id
    this.retrieveResourceCategory()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }


}
