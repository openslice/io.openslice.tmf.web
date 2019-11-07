import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';

import { MatCheckboxChange, MatDialog, MatTableDataSource, MatSort } from '@angular/material';
import { ServiceCategory, ServiceCategoryUpdate, ServiceCategoryCreate, ServiceCategoryRef } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceCategoryService, ServiceCandidateService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { Observable, Subscription, Subject } from 'rxjs';
import { startWith, map, filter } from 'rxjs/operators';
import { CreateServiceCategoryChildrenComponent } from './create-service-category-children/create-service-category-children.component';
import { DeleteServiceCategoryComponent } from '../delete-service-category/delete-service-category.component';

const today = new Date()

@Component({
  selector: 'app-edit-service-categories',
  templateUrl: './edit-service-categories.component.html',
  styleUrls: ['./edit-service-categories.component.scss']
})
export class EditServiceCategoriesComponent implements OnInit, OnDestroy {

  constructor(
    private categoryService: ServiceCategoryService,
    private candidateService: ServiceCandidateService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) { }

  category: ServiceCategory
  categoryID: string

  allCategories: ServiceCategory[]

  editForm =  new FormGroup({
    category: new FormControl([]),
    isRoot: new FormControl(),
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    parentId: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(today.getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    serviceCandidate: new FormControl([]),
    version: new FormControl()
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  filteredCategories$: Observable<ServiceCategory[]>

  displayedColumnsChildrenCatalogs = ['name', 'actions']
  dataSource  = new MatTableDataSource<ServiceCategory>()

  subscriptions = new Subscription()

  childrenCategoryFilterCtrl = new FormControl();
  filteredChildrenCategories$: Observable<ServiceCategoryRef[]>

  serviceCandidatesFilterCtrl = new FormControl();
  filteredServiceCandidates$: Observable<ServiceCandidateService[]>


  @ViewChild(MatSort, {static: true}) sort: MatSort;

  newCategory: boolean = false
  ngOnInit() {
    this.retrieveServiceCategoryList()
    this.subscriptionsInit()


    if (this.activatedRoute.snapshot.params.id) 
    {
      this.categoryID = this.activatedRoute.snapshot.params.id
      this.retrieveServiceCategory()
    } 
    else { this.newCategory = true }

  }

  subscriptionsInit() {
    this.subscriptions = this.router.events.subscribe(
      (event) => {
       if (event instanceof ActivationEnd) {
         console.log(event.snapshot.params.id)
         this.categoryID = event.snapshot.params.id
         this.retrieveServiceCategory()
       }
      }
    )

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
  }

  retrieveServiceCategory() {
    this.categoryService.retrieveServiceCategory({id: this.categoryID}).subscribe( 
      data => this.category = data,
      error => console.error(error),
      () => {
        this.editForm.patchValue(this.category)
        console.log(this.editForm)

        if (this.category.parentId) {
          this.editForm.get('isRoot').disable()
          this.editForm.patchValue({parentId: this.allCategories.find(el => el.id === this.category.parentId)})
          this.editForm.get('parentId').disable()
        } else {
          this.editForm.get('isRoot').enable()
        }

        // if (this.category.category.length) {
          this.filteredChildrenCategories$ = this.childrenCategoryFilterCtrl.valueChanges.pipe( 
            startWith(null),
            map( (value:null | string) => value ? this._filterOnChildrenCategories(value) : this.category.category.slice() )
          )
        // } else {
        //   this.dataSource.data = []
        // }
          
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

  openCategoryChildDialog() {
    const dialogRef = this.dialog.open(CreateServiceCategoryChildrenComponent, {data: this.category, disableClose: true})

    dialogRef.afterClosed().subscribe (
      result => { 
        console.log(result)
        if (result) this.retrieveServiceCategory()
      }
    )
  }

  openCategoryDeleteDialog(element: ServiceCategory) {
    const dialogRef = this.dialog.open(DeleteServiceCategoryComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) this.retrieveServiceCategory()
      }
    )
  }

  
  updateServiceCategory() {

    const updateObj: ServiceCategoryCreate | ServiceCategoryUpdate = {
      // category: this.editForm.value.category.map(el => {return {'id': el.id}}),
      isRoot: this.editForm.value.isRoot,
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    if (!this.editForm.get('isRoot').value) updateObj.parentId = this.editForm.get('parentId').value.id
    
    let updatedCategory: ServiceCategory
    console.log(updateObj)
    if (this.newCategory) {
      this.categoryService.createServiceCategory(updateObj).subscribe(
        data => { updatedCategory = data },
        error => console.error(error),
        () => { 
          this.newCategory = false 
          this.refreshServiceCategory(updatedCategory)
        }
      )
    }
    else {
      this.categoryService.patchServiceCategory({ id: this.categoryID, serviceCategory: updateObj }).subscribe(
        data => { updatedCategory = data },
        error => console.error(error),
        () => { this.refreshServiceCategory(updatedCategory) }
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
