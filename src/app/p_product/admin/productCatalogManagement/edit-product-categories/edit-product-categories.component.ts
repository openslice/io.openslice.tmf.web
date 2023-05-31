import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { Category, CategoryCreate, CategoryRef, CategoryUpdate, ProductOfferingRef } from 'src/app/openApis/productCatalogManagement/models';
import { CategoryService, ProductOfferingService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { DeleteProductCatalogsComponent } from '../delete-product-catalogs/delete-product-catalogs.component';
import { AssignSubcategoriesComponent } from './assign-subcategories/assign-subcategories.component';
import { AssignProductOfferingsComponent } from './assign-product-offerings/assign-product-offerings.component';
import { DeleteProductCategoriesComponent } from '../delete-product-categories/delete-product-categories.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-product-categories',
  templateUrl: './edit-product-categories.component.html',
  styleUrls: ['./edit-product-categories.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditProductCategoriesComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private offeringService: ProductOfferingService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private toastrService: ToastrService,
    public appService: AppService
  ) { }

  category: Category
  categoryID: string
  newCategory: boolean = false
  categoryNotFound: boolean = false
  finishedLoading: boolean = false


  allCategories: Category[]

  editForm =  new FormGroup({
    isRoot: new FormControl({value: true, disabled: true}),
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    parentId: new FormControl({value:null, disabled: true}),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    version: new FormControl("0.1.0")
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]
  filteredParentCategories$: Observable<Category[]>


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  subCategoryFilterCtrl = new FormControl();
  filteredSubCategories$: Observable<CategoryRef[]>

  productOfferingsFilterCtrl = new FormControl();
  filteredProductOfferings$: Observable<ProductOfferingRef[]>

  subscriptions = new Subscription()


  ngOnInit(): void {
    this.subscriptionsInit()
    this.retrieveCategoryList()
  }

  subscriptionsInit() {
    this.subscriptions.add(
      this.router.events.subscribe(
        (event) => {
          if (event instanceof ActivationEnd && event.snapshot.params && event.snapshot.params.id) {
            this.categoryID = event.snapshot.params.id
            this.retrieveCategory()
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

  retrieveCategory() {
    this.categoryService.retrieveCategory({id: this.categoryID}).subscribe( 
      data => this.category = data,
      error => console.error(error),
      () => {
        // if (!this.category.validFor) this.category.validFor = {endDateTime:null, startDateTime:null}
        if (this.category) {
          this.finishedLoading = true
          this.editForm.patchValue(this.category)
          if (this.category.parentId) {
            this.editForm.get('isRoot').disable()
            this.editForm.patchValue({parentId: this.allCategories.find(el => el.id === this.category.parentId)})
            this.editForm.get('parentId').disable()
          } else {
            // this.editForm.get('isRoot').enable()
          }
  
          this.filteredSubCategories$ = this.subCategoryFilterCtrl.valueChanges.pipe( 
            startWith(null),
            map( (value:null | string) => value ? this._filterOnSubCategories(value) : this.category.subCategory.slice() )
          )
  
          this.filteredProductOfferings$ = this.productOfferingsFilterCtrl.valueChanges.pipe( 
            startWith(null),
            map( (value:null | string) => value ? this._filterOnProductOfferings(value) : this.category.productOffering.slice() )
          )
        } else {
          this.categoryNotFound = true
        }
      }
    )
  }

  retrieveCategoryList() {
    this.categoryService.listCategory({}).subscribe(
      data =>  this.allCategories = data,
      error =>  console.error(error),
      () => {
        this.filteredParentCategories$ = this.editForm.get('parentId').valueChanges.pipe(
          startWith(null),
          map( (value: null | string | Category) => typeof(value) === 'string' ? this._filterParentCategories(value) : this.allCategories.slice() )
        )

        if (this.activatedRoute.snapshot.params.id) 
        {
          this.categoryID = this.activatedRoute.snapshot.params.id
          this.retrieveCategory()
        } 
        else { 
          this.newCategory = true
          this.finishedLoading = true 
        }
      }
    )
  }

  private _filterParentCategories(value: string): Category[] {
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(cat => cat.name.toLowerCase().includes(filterValue));
  }

  
  private _filterOnSubCategories(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.category.subCategory.filter( cat =>  cat.name.toLowerCase().includes(filterValue) )
  }
  
  private _filterOnProductOfferings(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.category.productOffering.filter( cand =>  cand.name.toLowerCase().includes(filterValue) )
  }
  
  displayFn(category?: Category): string | undefined {
    return category ? category.name : undefined;
  }

  updateServiceCategory() {

    if (this.editForm.valid) {
      const updateObj: CategoryCreate | CategoryUpdate = {
        // category: this.editForm.value.category.map(el => {return {'id': el.id}}),
        isRoot: this.editForm.getRawValue().isRoot,
        description: this.editForm.value.description,
        lifecycleStatus: this.editForm.value.lifecycleStatus,
        name: this.editForm.value.name,
        validFor: this.editForm.value.validFor,
        version: this.editForm.value.version
      }
  
      if (!this.editForm.get('isRoot').value) updateObj.parentId = this.editForm.get('parentId').value.id
      
      let updatedCategory: Category
      if (this.newCategory) {
        this.categoryService.createCategory(updateObj).subscribe(
          data => { updatedCategory = data },
          error => console.error(error),
          () => { 
            this.newCategory = false
            this.router.navigate([updatedCategory.id], {relativeTo: this.activatedRoute})
            this.toastrService.success("Product Category is successfully created") 
            this.refreshCategory(updatedCategory)
          }
        )
      }
      else {
        this.categoryService.patchCategory({ id: this.categoryID, category: updateObj }).subscribe(
          data => { updatedCategory = data },
          error => console.error(error),
          () => { 
            this.toastrService.success("Service Category is successfully updated")
            this.refreshCategory(updatedCategory) 
          }
        )
      }
    }
  }

  refreshCategory(updatedCategory : Category) {
    this.categoryID = updatedCategory.id
    this.retrieveCategory()
  }

  openCategoryDeleteDialog(element: Category) {
    const dialogRef = this.dialog.open(DeleteProductCategoriesComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result instanceof HttpErrorResponse) {
          this.toastrService.error("An error occurred while attempting to delete Product Category. Please check dependencies.")
        } else {
          this.toastrService.success("Subcategories' list is successfully updated")
          this.retrieveCategory()
        }
      }
    )
  }

  openSubcategoryDialog() {
    const dialogRef = this.dialog.open(AssignSubcategoriesComponent, {data: this.category, disableClose: false})

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result){ 
          this.toastrService.success("Subcategories' list is successfully updated")
          this.retrieveCategory()
        }
      }
    )
  }

  openAssignOfferingsDialog() {
    const dialogRef = this.dialog.open(AssignProductOfferingsComponent, {data: this.category, disableClose: false, autoFocus:false})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toastrService.success("Product Offerings list is successfully updated")
          this.retrieveCategory()
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
