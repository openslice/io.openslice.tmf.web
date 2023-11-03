import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



import { FormGroup, FormControl } from '@angular/forms';
import { ServiceCategory, ServiceCategoryCreate, ServiceCategoryUpdate } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceCategoryService } from 'src/app/openApis/serviceCatalogManagement/services';


@Component({
  selector: 'app-create-service-category-children',
  templateUrl: './create-service-category-children.component.html',
  styleUrls: ['./create-service-category-children.component.scss']
})
export class CreateServiceCategoryChildrenComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceCategory,
    private dialogRef: MatDialogRef<CreateServiceCategoryChildrenComponent>,
    private categoryService: ServiceCategoryService

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
  
  parentCategory: ServiceCategory
  
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
    const creationObj: ServiceCategoryCreate = this.editForm.value
    creationObj.parentId = this.parentCategory.id
    creationObj.isRoot = false

    let createdChildCategory: ServiceCategory
    this.categoryService.createServiceCategory(creationObj).subscribe(
      data => {createdChildCategory = data},
      error => console.error(error),
      () => {
        this.parentCategory.category.push({id: createdChildCategory.id})
        const updateObj: ServiceCategoryUpdate = {
          category: this.parentCategory.category
        }

        this.categoryService.patchServiceCategory({serviceCategory: updateObj, id: this.parentCategory.id}).subscribe(
          data => {},
          error =>  console.error(error),
          () => this.dialogRef.close('created')
        )
      }
    )
  }
}
