import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { HasElementRef } from '@angular/material/core/common-behaviors/color';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { CatalogCreate, CatalogUpdate, Category } from 'src/app/openApis/productCatalogManagement/models';
import { Catalog } from 'src/app/openApis/productCatalogManagement/models';
import { CatalogService, CategoryService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-edit-product-catalogs',
  templateUrl: './edit-product-catalogs.component.html',
  styleUrls: ['./edit-product-catalogs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditProductCatalogsComponent implements OnInit {

  constructor(
    private catalogService: CatalogService,
    private categoryService: CategoryService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  catalogID: string
  catalog: Catalog
  newCatalog: boolean = false
  catalogNotFound: boolean = false
  finishedLoading: boolean = false

  
  editForm =  new FormGroup({
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
  
  nonSelectedRootCategories: Category[]
  
  categoryInputCtrl = new FormControl();
  filteredCategories: Observable<Category[]>;
  
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('categoryInput') categoryInput: ElementRef<HTMLInputElement>;
  @ViewChild('categoryInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;


  ngOnInit(): void {
    this.retrieveCategoriesList()
  }

  retrieveCategoriesList() {
    let categories: Category[]
    this.categoryService.listCategory({}).subscribe(
      data =>  categories = data,
      error =>  console.error(error),
      () => {
        this.nonSelectedRootCategories = categories.filter(cat => cat.isRoot === true)

        this.filteredCategories = this.categoryInputCtrl.valueChanges.pipe(
          startWith(null),
          map((category: string | Category) => typeof (category) === 'string' ? this._filter(category) : this.nonSelectedRootCategories.slice()));
        
          if (this.activatedRoute.snapshot.params.id) {
          this.catalogID = this.activatedRoute.snapshot.params.id
          this.retrieveCatalog()
        }
        else {
          this.newCatalog = true
          this.finishedLoading = true
          this.catalog = {
            category: []
          }
        }

      }
    )
  }

  private _filter(value: string): Category[] {
    const filterValue = value.toLowerCase();
    return this.nonSelectedRootCategories.filter(cat => cat.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  retrieveCatalog() {
    this.catalogService.retrieveCatalog({ id: this.catalogID }).subscribe(
      data => this.catalog = data,
      error => console.error(error),
      () => {
        if (this.catalog) {
          this.finishedLoading = true
          this.editForm.patchValue(this.catalog)
          this.catalog.category.forEach(cat => this.nonSelectedRootCategories.splice(this.nonSelectedRootCategories.findIndex((el) => el.id === cat.id), 1))
        } else {
          this.catalogNotFound = true
        }
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
        this.catalog.category.push({"id": this.nonSelectedRootCategories.find( el => el.name === value.trim()).id});
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
    const index = this.catalog.category.indexOf(category);
    
    if (index >= 0) {
      this.catalog.category.splice(index, 1);
      this.nonSelectedRootCategories.push(category);
      this.editForm.get('category').setValue(this.catalog.category)

      this.categoryInputCtrl.setValue(null);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.catalog.category.push(event.option.value);
    this.editForm.get('category').setValue(this.catalog.category)
    
    this.nonSelectedRootCategories = this.nonSelectedRootCategories.filter(el =>  el.name != event.option.value.name)

    this.categoryInput.nativeElement.value = '';
    this.categoryInputCtrl.setValue(null);
  }

  openList() {
    this.categoryInputCtrl.setValue(null);
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
  }

  updateCatalog() {
    const updateObj: CatalogCreate | CatalogUpdate = {
      category: this.editForm.value.category.map(el => {return {'id': el.id}}),
      description: this.editForm.value.description,
      lifecycleStatus: this.editForm.value.lifecycleStatus,
      name: this.editForm.value.name,
      validFor: this.editForm.value.validFor,
      version: this.editForm.value.version
    }

    let updatedCatalog: Catalog
    if (this.newCatalog) {
      this.catalogService.createCatalog(updateObj).subscribe(
        data => { updatedCatalog = data},
        error => console.error(error),
        () => {
          this.newCatalog = false
          this.router.navigate([updatedCatalog.id], {relativeTo: this.activatedRoute})
          this.catalogID = updatedCatalog.id
          this.toastrService.success("Product Catalog is successfully created") 
          this.retrieveCatalog()
        }
      )
    } 
    
    else {
      this.catalogService.patchCatalog({id: this.catalogID, catalog: updateObj}).subscribe(
        data => { },
        error => console.error(error),
        () => {
          this.toastrService.success("Product Catalog is successfully updated")
          this.retrieveCatalog()
        }
      )
    }
  }

}
