import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category, CategoryCreate, CategoryUpdate } from 'src/app/openApis/productCatalogManagement/models';
import { CategoryService } from 'src/app/openApis/productCatalogManagement/services';

@Component({
  selector: 'app-assign-subcategories',
  templateUrl: './assign-subcategories.component.html',
  styleUrls: ['./assign-subcategories.component.scss']
})
export class AssignSubcategoriesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private dialogRef: MatDialogRef<AssignSubcategoriesComponent>,
    private categoryService: CategoryService

  ) { }

  editForm =  new FormGroup({
    isRoot: new FormControl({value:false, disabled: true}),
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    parentId: new FormControl({value:'', disabled: true}),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    version: new FormControl("0.1.0")
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  parentCategory: Category

  ngOnInit(): void {
    if (this.data) {
      if (!this.data.validFor) this.data.validFor = {endDateTime:null, startDateTime:null}
      this.parentCategory = this.data
      this.editForm.patchValue({parentId: this.parentCategory.id})
    }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    const creationObj: CategoryCreate = this.editForm.value
    creationObj.parentId = this.parentCategory.id
    creationObj.isRoot = false

    let createdSubcategory: Category
    this.categoryService.createCategory(creationObj).subscribe(
      data => {createdSubcategory = data},
      error => console.error(error),
      () => {
        this.parentCategory.subCategory.push({id: createdSubcategory.id})
        const updateObj: CategoryUpdate = {
          subCategory: this.parentCategory.subCategory
        }

        this.categoryService.patchCategory({category: updateObj, id: this.parentCategory.id}).subscribe(
          data => {},
          error =>  console.error(error),
          () => this.dialogRef.close('created')
        )
      }
    )
  }

}
