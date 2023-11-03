import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



import { FormGroup, FormControl } from '@angular/forms';
import { ResourceCategory, ResourceCategoryCreate, ResourceCategoryUpdate } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceCategoryService } from 'src/app/openApis/resourceCatalogManagement/services';


@Component({
  selector: 'app-create-resource-category-children',
  templateUrl: './create-resource-category-children.component.html',
  styleUrls: ['./create-resource-category-children.component.scss']
})
export class CreateResourceCategoryChildrenComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceCategory,
    private dialogRef: MatDialogRef<CreateResourceCategoryChildrenComponent>,
    private categoryService: ResourceCategoryService

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

  parentCategory: ResourceCategory

  ngOnInit() {
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
    const creationObj: ResourceCategoryCreate = this.editForm.value
    creationObj.parentId = this.parentCategory.id
    creationObj.isRoot = false

    let createdChildCategory: ResourceCategory
    this.categoryService.createResourceCategory(creationObj).subscribe(
      data => {createdChildCategory = data},
      error => console.error(error),
      () => {
        this.parentCategory.category.push({id: createdChildCategory.id})
        const updateObj: ResourceCategoryUpdate = {
          category: this.parentCategory.category
        }

        this.categoryService.patchResourceCategory({resourceCategory: updateObj, id: this.parentCategory.id}).subscribe(
          data => {},
          error =>  console.error(error),
          () => this.dialogRef.close('created')
        )
      }
    )
  }
}
