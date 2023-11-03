import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { Category, CategoryUpdate, ProductOffering, ProductOfferingRef } from 'src/app/openApis/productCatalogManagement/models';
import { CategoryService, ProductOfferingService } from 'src/app/openApis/productCatalogManagement/services';

@Component({
  selector: 'app-assign-product-offerings',
  templateUrl: './assign-product-offerings.component.html',
  styleUrls: ['./assign-product-offerings.component.scss']
})
export class AssignProductOfferingsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private dialogRef: MatDialogRef<AssignProductOfferingsComponent>,
    private offeringService: ProductOfferingService,
    private categoryService: CategoryService
  ) { }

  @ViewChild('offeringInput') offeringInput: ElementRef<HTMLInputElement>;  
  @ViewChild('offeringInput', { read: MatAutocompleteTrigger }) matAutocompleteTrigger: MatAutocompleteTrigger;

  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  displayedOfferingTableColumns = ['name', 'actions']
  dataSource  = new MatTableDataSource<ProductOffering>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  productCategory: Category = this.data
  
  assignedOfferings: ProductOffering[] = []
  availableOfferings: ProductOffering[] = []
  filteredOfferings$: Observable<ProductOffering[]>

  offeringInputCtrl = new FormControl()

  ngOnInit(): void {
    this.listProductOfferings()

  }

  listProductOfferings() {
    let allProductOfferings: ProductOffering[]
    
    this.offeringService.listProductOffering({}).subscribe(
      data => allProductOfferings = data,
      error => console.error(error),
      () => { 
        const initiallyAssignedOfferingsIDs = this.productCategory.productOffering.map(el => el.id)
        this.availableOfferings = allProductOfferings.filter(offering => offering.name && !initiallyAssignedOfferingsIDs.includes(offering.id))

        this.assignedOfferings = this.data.productOffering.slice()
        this.dataSource.data = this.assignedOfferings
        this.dataSource.sort = this.sort

        this.filteredOfferings$ = this.offeringInputCtrl.valueChanges.pipe(
          startWith(null),
          map( (offering: string | ProductOffering) => typeof(offering) === 'string' ? this._filter(offering) : this.availableOfferings.slice() )
        )

      }
      

    )
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    this.assignedOfferings.push(event.option.value);
    this.dataSource.data = this.assignedOfferings


    this.availableOfferings = this.availableOfferings.filter(el =>  el.name != event.option.value.name)

    this.offeringInput.nativeElement.value = '';
    this.offeringInputCtrl.setValue(null);
  }

  private _filter(value: string): ProductOffering[] {
      const filterValue = value.toLowerCase();
      return this.availableOfferings.filter(offering => offering.name && offering.name.toLowerCase().indexOf(filterValue) !== -1);
  }

  openList() {
    if (!this.matAutocomplete.isOpen) this.matAutocompleteTrigger.openPanel()
    // console.log(this.availableOfferings.slice())

  }

  removeProductOffering(offering:ProductOffering) {
    const index = this.assignedOfferings.indexOf(offering);
    if (index >= 0) {
      this.assignedOfferings.splice(index, 1);
      this.dataSource.data = this.assignedOfferings
      this.availableOfferings.push(offering);
      
      this.offeringInput.nativeElement.value = '';
      this.offeringInputCtrl.setValue(null);
    }
  }

  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    const categoryUpdateObj: CategoryUpdate = { productOffering: this.assignedOfferings.map(offering => {return {id: offering.id}}) }
    this.categoryService.patchCategory({id: this.productCategory.id, category: categoryUpdateObj}).subscribe(
      data => {},
      error => console.error(error),
      () => { this.dialogRef.close('updated') }
    )
  }

}
