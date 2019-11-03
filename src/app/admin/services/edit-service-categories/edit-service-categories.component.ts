import { Component, OnInit, Inject } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatAutocompleteTrigger, MAT_DIALOG_DATA, MatDialogRef, MatCheckboxChange } from '@angular/material';
import { ServiceCategory, ServiceCategoryUpdate, ServiceCategoryCreate } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceCategoryService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';



@Component({
  selector: 'app-edit-service-categories',
  templateUrl: './edit-service-categories.component.html',
  styleUrls: ['./edit-service-categories.component.scss']
})
export class EditServiceCategoriesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceCategory,
    private categoryService: ServiceCategoryService,
    private dialogRef: MatDialogRef<EditServiceCategoriesComponent>
  ) { }

  category: ServiceCategory
  categoryID: string

  allCategories: ServiceCategory[]

  editForm =  new FormGroup({
    category: new FormControl([]),
    isRoot: new FormControl(),
    description: new FormControl(),
    lifecycleStatus: new FormControl(),
    name: new FormControl(),
    parentId: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(),
      startDateTime: new FormControl()
    }),
    serviceCandidate: new FormControl([]),
    version: new FormControl()
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  filteredCategories$: Observable<ServiceCategory[]>


  newCategory: boolean = false
  ngOnInit() {
    this.retrieveServiceCategories()
    this.watcherInit()

    if (this.data) 
    {
      this.categoryID = this.data.id
      this.retrieveServiceCategory()
    }
    else { this.newCategory = true }


  }

  watcherInit() {
    this.editForm.get('isRoot').valueChanges.subscribe(
      (value: MatCheckboxChange) => {
        console.log(value)
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
      }
    )
  }

  retrieveServiceCategories() {
    this.categoryService.listServiceCategory({}).subscribe(
      data =>  this.allCategories = data,
      error =>  console.error(error),
      () => {
        console.log(null)
        this.filteredCategories$ = this.editForm.get('parentId').valueChanges.pipe(
          startWith(null),
          map( (value: null | string | ServiceCategory) => typeof(value) === 'string' ? this._filter(value) : this.allCategories.slice() )
        );
        // console.log(this.nonSelectedCategories)
      }
    )
  }

  private _filter(value: string): ServiceCategory[] {
    console.log(value)
    const filterValue = value.toLowerCase();

    return this.allCategories.filter(cat => cat.name.toLowerCase().includes(filterValue));
  }

  submitDialog() {

    const updateObj: ServiceCategoryCreate | ServiceCategoryUpdate = {
      // category: this.editForm.value.category.map(el => {return {'id': el.id}}),
      isRoot: this.editForm.value.isRoot,
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    if (!this.editForm.get('isRoot').value) updateObj.parentId = this.editForm.get('parentId').value
    console.log(updateObj)
    // if (this.newCategory) {
    //   this.categoryService.createServiceCategory(updateObj).subscribe(
    //     data => console.log(data),
    //     error => console.error(error),
    //     () => this.dialogRef.close('created')
    //   )
    // } 
    
    // else {
    //   this.categoryService.patchServiceCategory({id: this.categoryID, serviceCategory: updateObj}).subscribe(
    //     data => console.log(data),
    //     error => console.error(error),
    //     () => this.dialogRef.close('updated')
    //   )
    // }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

}
