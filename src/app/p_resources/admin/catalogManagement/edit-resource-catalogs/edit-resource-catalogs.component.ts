import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ResourceCatalogService, ResourceCategoryService } from 'src/app/openApis/resourceCatalogManagement/services';
import { FormGroup, FormControl } from '@angular/forms';
import { ResourceCatalog, ResourceCatalogUpdate, ResourceCategory, ResourceCatalogCreate } from 'src/app/openApis/resourceCatalogManagement/models';


import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-resource-catalogs',
  templateUrl: './edit-resource-catalogs.component.html',
  styleUrls: ['./edit-resource-catalogs.component.scss']
})

export class EditResourceCatalogsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceCatalog,
    private catalogService: ResourceCatalogService,
    private categoryService: ResourceCategoryService,
    private dialogRef: MatDialogRef<EditResourceCatalogsComponent>,
  ) { }

  catalogID: string
  catalog: ResourceCatalog

  editForm =  new FormGroup({
    // categoryIDs: new FormControl([]),
    category: new FormControl([]),
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design"),
    name: new FormControl(),
    relatedParty: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20))),
      startDateTime: new FormControl(new Date())
    }),
    version: new FormControl("0.1.0")
  })

  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]



  selectable = true;
  removable = true;
  addOnBlur = true;

  categoryInputCtrl = new FormControl();
  filteredCategories: Observable<ResourceCategory[]>;

  // categories: string[] = ['Lemon'];
  categories: ResourceCategory[] = []

  // allCategories: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  nonSelectedCategories: ResourceCategory[] = []
  nonSelectedRootCategories: ResourceCategory[] = []


  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;

  @ViewChild('categoryInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  // @ViewChild('auto', {static: false}) matAutocompleteTrigger: MatAutocompleteTrigger;

  newCatalog: boolean = false

  ngOnInit() {
    this.retrieveResourceCategories()

    if (this.data)
    {
      this.catalogID = this.data.id
      this.retrieveResourceCatalog()
    }
    else { this.newCatalog = true }
  }

  retrieveResourceCategories() {
    this.categoryService.listResourceCategory({}).subscribe(
      data =>  this.nonSelectedCategories = data,
      error =>  console.error(error),
      () => {
        this.nonSelectedRootCategories = this.nonSelectedCategories.filter(cat => cat.isRoot === true)

        this.filteredCategories = this.categoryInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (category: string | ResourceCategory) => typeof(category) === 'string' ? this._filter(category) : this.nonSelectedRootCategories.slice() ));
      }
    )
  }

  retrieveResourceCatalog() {
    this.catalogService.retrieveResourceCatalog({ id: this.catalogID }).subscribe(
      data => this.catalog = data,
      error => console.error(error),
      () => {
        this.editForm.patchValue(this.catalog)
        this.categories = this.catalog.category
        this.categories.forEach(cat => this.nonSelectedRootCategories.splice(this.nonSelectedRootCategories.findIndex((el) => el.id === cat.id), 1))
      }
    )
  }


  addChip(event: MatChipInputEvent): void {
    // Add category only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event

    if (!this.matAutocomplete.isOpen && this.nonSelectedRootCategories.includes(event.input)) {
      const input = event.input;
      const value = event.value;

      // Add category
      if ((value || '').trim()) {
        this.categories.push(this.nonSelectedRootCategories.find( el => el.name === value.trim()));
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.categoryInputCtrl.setValue(null);
    }

    event.input.value = '';
  }

  removeChip(category): void {
    const index = this.categories.indexOf(category);

    if (index >= 0) {
      this.categories.splice(index, 1);
      this.nonSelectedRootCategories.push(category);
      this.editForm.get('category').setValue(this.categories)

      this.categoryInputCtrl.setValue(null);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push(event.option.value);
    this.editForm.get('category').setValue(this.categories)

    this.nonSelectedRootCategories = this.nonSelectedRootCategories.filter(el =>  el.name != event.option.value.name)

    this.categoryInput.nativeElement.value = '';
    this.categoryInputCtrl.setValue(null);
  }

  private _filter(value: string): ResourceCategory[] {
      const filterValue = value.toLowerCase();
      return this.nonSelectedRootCategories.filter(cat => cat.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    this.categoryInputCtrl.setValue(null);
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }


  submitDialog() {

    const updateObj: ResourceCatalogCreate | ResourceCatalogUpdate = {
      category: this.editForm.value.category.map(el => {return {'id': el.id}}),
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    if (this.newCatalog) {
      this.catalogService.createResourceCatalog(updateObj).subscribe(
        data => {},
        error => console.error(error),
        () => this.dialogRef.close('created')
      )
    }

    else {
      this.catalogService.patchResourceCatalog({id: this.catalogID, body: updateObj}).subscribe(
        data => {},
        error => console.error(error),
        () => this.dialogRef.close('updated')
      )
    }
  }

  closeDialog() {
    this.dialogRef.close()
  }
}
