import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { ServiceCatalogService, ServiceCategoryService } from 'src/app/openApis/serviceCatalogManagement/services';
import { FormGroup, FormControl } from '@angular/forms';
import { ServiceCatalog, ServiceCatalogUpdate, ServiceCategory, ServiceCatalogCreate } from 'src/app/openApis/serviceCatalogManagement/models';


import { Observable } from 'rxjs';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-service-catalogs',
  templateUrl: './edit-service-catalogs.component.html',
  styleUrls: ['./edit-service-catalogs.component.scss']
})

export class EditServiceCatalogsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceCatalog,
    private catalogService: ServiceCatalogService,
    private categoryService: ServiceCategoryService, 
    private dialogRef: MatDialogRef<EditServiceCatalogsComponent>,
  ) { }

  catalogID: string
  catalog: ServiceCatalog

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
  filteredCategories: Observable<ServiceCategory[]>;
  
  // categories: string[] = ['Lemon'];
  categories: ServiceCategory[] = []

  // allCategories: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  
  nonSelectedCategories: ServiceCategory[] = []
  nonSelectedRootCategories: ServiceCategory[] = []


  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  
  @ViewChild('categoryInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;
  
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  // @ViewChild('auto', {static: false}) matAutocompleteTrigger: MatAutocompleteTrigger;

  newCatalog: boolean = false

  ngOnInit() {
    // this.editForm.get('category').valueChanges.subscribe( val => console.log(val))
    this.retrieveServiceCategories()
    
    if (this.data) 
    {
      this.catalogID = this.data.id
      this.retrieveServiceCatalog()
    }
    else { this.newCatalog = true }
  }

  retrieveServiceCategories() {
    this.categoryService.listServiceCategory({}).subscribe(
      data =>  this.nonSelectedCategories = data,
      error =>  console.error(error),
      () => {
        this.nonSelectedRootCategories = this.nonSelectedCategories.filter(cat => cat.isRoot === true)
        
        this.filteredCategories = this.categoryInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (category: string | ServiceCategory) => typeof(category) === 'string' ? this._filter(category) : this.nonSelectedRootCategories.slice() ));
    
        // console.log(this.nonSelectedCategories)
      }
    )
  }

  retrieveServiceCatalog() {
    this.catalogService.retrieveServiceCatalog({ id: this.catalogID }).subscribe(
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

  private _filter(value: string): ServiceCategory[] {
      const filterValue = value.toLowerCase();
      return this.nonSelectedRootCategories.filter(cat => cat.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    this.categoryInputCtrl.setValue(null);
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }


  submitDialog() {

    const updateObj: ServiceCatalogCreate | ServiceCatalogUpdate = {
      category: this.editForm.value.category.map(el => {return {'id': el.id}}),
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    if (this.newCatalog) {
      this.catalogService.createServiceCatalog(updateObj).subscribe(
        data => {},
        error => console.error(error),
        () => this.dialogRef.close('created')
      )
    } 
    
    else {
      this.catalogService.patchServiceCatalog({id: this.catalogID, serviceCatalog: updateObj}).subscribe(
        data => { },
        error => console.error(error),
        () => this.dialogRef.close('updated')
      )
    }
  }

  closeDialog() { 
    this.dialogRef.close()
  }
}
