import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';

import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceCategory, ServiceCategoryUpdate, ServiceCategoryCreate, ServiceCategoryRef, ServiceCandidateRef, ServiceCandidate } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceCategoryService, ServiceCandidateService } from 'src/app/openApis/serviceCatalogManagement/services';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { CreateServiceCategoryChildrenComponent } from './create-service-category-children/create-service-category-children.component';
import { DeleteServiceCategoryComponent } from '../delete-service-category/delete-service-category.component';
import { AssignServiceCandidatesComponent } from './assign-service-candidates/assign-service-candidates.component';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-service-categories',
  templateUrl: './edit-service-categories.component.html',
  styleUrls: ['./edit-service-categories.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditServiceCategoriesComponent implements OnInit, OnDestroy {

  constructor(
    private categoryService: ServiceCategoryService,
    private candidateService: ServiceCandidateService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private toast: ToastrService,
    public appService: AppService
  ) { }

  category: ServiceCategory
  categoryID: string

  allCategories: ServiceCategory[]

  editForm =  new FormGroup({
    category: new FormControl([]),
    isRoot: new FormControl({value: true, disabled: true}),
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    parentId: new FormControl({value:null, disabled: true}),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    serviceCandidate: new FormControl([]),
    version: new FormControl("0.1.0")
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  filteredCategories$: Observable<ServiceCategory[]>

  displayedColumnsChildrenCatalogs = ['name', 'actions']
  dataSource  = new MatTableDataSource<ServiceCategory>()

  subscriptions = new Subscription()

  childrenCategoryFilterCtrl = new FormControl();
  filteredChildrenCategories$: Observable<ServiceCategoryRef[]>

  serviceCandidatesFilterCtrl = new FormControl();
  filteredServiceCandidates$: Observable<ServiceCandidateRef[]>


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  newCategory: boolean = false
  ngOnInit() {
    this.retrieveServiceCategoryList()
    this.subscriptionsInit()
  }

  subscriptionsInit() {
    this.subscriptions.add(
      this.router.events.subscribe(
        (event) => {
          if (event instanceof ActivationEnd && event.snapshot.params && event.snapshot.params.id) {
            this.categoryID = event.snapshot.params.id
            this.retrieveServiceCategory()
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

  retrieveServiceCategory() {
    this.categoryService.retrieveServiceCategory({id: this.categoryID}).subscribe( 
      data => this.category = data,
      error => console.error(error),
      () => {
        // if (!this.category.validFor) this.category.validFor = {endDateTime:null, startDateTime:null}
        this.editForm.patchValue(this.category)

        if (this.category.parentId) {
          this.editForm.get('isRoot').disable()
          this.editForm.patchValue({parentId: this.allCategories.find(el => el.id === this.category.parentId)})
          this.editForm.get('parentId').disable()
        } else {
          // this.editForm.get('isRoot').enable()
        }

        this.filteredChildrenCategories$ = this.childrenCategoryFilterCtrl.valueChanges.pipe( 
          startWith(null),
          map( (value:null | string) => value ? this._filterOnChildrenCategories(value) : this.category.category.slice() )
        )

        this.filteredServiceCandidates$ = this.serviceCandidatesFilterCtrl.valueChanges.pipe( 
          startWith(null),
          map( (value:null | string) => value ? this._filterOnServiceCandidates(value) : this.category.serviceCandidate.slice() )
        )
      }
    )
  }

  retrieveServiceCategoryList() {
    this.categoryService.listServiceCategory({}).subscribe(
      data =>  this.allCategories = data,
      error =>  console.error(error),
      () => {
        this.filteredCategories$ = this.editForm.get('parentId').valueChanges.pipe(
          startWith(null),
          map( (value: null | string | ServiceCategory) => typeof(value) === 'string' ? this._filterParentCategories(value) : this.allCategories.slice() )
        )

        if (this.activatedRoute.snapshot.params.id) 
        {
          this.categoryID = this.activatedRoute.snapshot.params.id
          this.retrieveServiceCategory()
        } 
        else { 
          this.newCategory = true 
        }
      }
    )
  }

  private _filterParentCategories(value: string): ServiceCategory[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(cat => cat.name.toLowerCase().includes(filterValue));
  }

  displayFn(category?: ServiceCategory): string | undefined {
    return category ? category.name : undefined;
  }

  private _filterOnChildrenCategories(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.category.category.filter( cat =>  cat.name.toLowerCase().includes(filterValue) )
  }

  private _filterOnServiceCandidates(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.category.serviceCandidate.filter( cand =>  cand.name.toLowerCase().includes(filterValue) )
  }

  openCategoryChildDialog() {
    const dialogRef = this.dialog.open(CreateServiceCategoryChildrenComponent, {data: this.category, disableClose: true})

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result){ 
          this.toast.success("Subcategories list is successfully updated")
          this.retrieveServiceCategory()
        }
      }
    )
  }

  openCategoryDeleteDialog(element: ServiceCategory) {
    const dialogRef = this.dialog.open(DeleteServiceCategoryComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result instanceof HttpErrorResponse) {
          this.toast.error("An error occurred while attempting to delete Service Category. Please check dependencies.")
        } else {
          this.toast.success("Subcategories list is successfully updated")
          this.retrieveServiceCategory()
        }
      }
    )
  }

  openAssignCandidatesDialog(element: ServiceCategory) {
    const dialogRef = this.dialog.open(AssignServiceCandidatesComponent, {data: element, disableClose: true, autoFocus:false})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Service Specifications list is successfully updated")
          this.retrieveServiceCategory()
        }
      }
    )
  }

  navigateToServiceSpec(cand: ServiceCandidateRef) {
    let serviceCandidate: ServiceCandidate
    this.candidateService.retrieveServiceCandidate({id: cand.id}).subscribe(
      data => serviceCandidate = data,
      error => this.toast.error("An error occured while retrieving Service Specification Information"),
      () => {
        this.router.navigate(['../../service_spec_update', serviceCandidate.serviceSpecification.id],  { relativeTo: this.activatedRoute})
      }      
    )
  }

  
  updateServiceCategory() {

    const updateObj: ServiceCategoryCreate | ServiceCategoryUpdate = {
      // category: this.editForm.value.category.map(el => {return {'id': el.id}}),
      isRoot: this.editForm.getRawValue().isRoot,
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    if (!this.editForm.get('isRoot').value) updateObj.parentId = this.editForm.get('parentId').value.id
    
    let updatedCategory: ServiceCategory
    if (this.newCategory) {
      this.categoryService.createServiceCategory(updateObj).subscribe(
        data => { updatedCategory = data },
        error => console.error(error),
        () => { 
          this.newCategory = false
          this.toast.success("Service Category is successfully created") 
          this.refreshServiceCategory(updatedCategory)
        }
      )
    }
    else {
      this.categoryService.patchServiceCategory({ id: this.categoryID, serviceCategory: updateObj }).subscribe(
        data => { updatedCategory = data },
        error => console.error(error),
        () => { 
          this.toast.success("Service Category is successfully updated")
          this.refreshServiceCategory(updatedCategory) 
        }
      )
    }
  }

  refreshServiceCategory(updatedCategory : ServiceCategory) {
    this.categoryID = updatedCategory.id
    this.retrieveServiceCategory()
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }


}
