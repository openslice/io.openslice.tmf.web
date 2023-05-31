import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductSpecification, ProductSpecificationCreate, ProductSpecificationUpdate, ServiceSpecificationRef } from 'src/app/openApis/productCatalogManagement/models';
import { ProductSpecificationService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
import { AssignServiceSpecificationComponent } from './assign-service-specification/assign-service-specification.component';

@Component({
  selector: 'app-edit-product-specs',
  templateUrl: './edit-product-specs.component.html',
  styleUrls: ['./edit-product-specs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditProductSpecsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private specService: ProductSpecificationService,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private router: Router,
    public appService: AppService
  ) { }

  specID: string
  spec: ProductSpecification
  specNotFound: boolean = false
  finishedLoading: boolean = false
  newSpecification = false

  listItems = ["Main Properties", "Service Specification Relationships", "Related Parties"]
  activeListItem = "Main Properties"

  editForm =  new FormGroup({
    description: new FormControl(),
    lifecycleStatus: new FormControl("In design", Validators.required),
    name: new FormControl(null, Validators.required),
    // isBundle: new FormControl(),
    validFor: new FormGroup({
      endDateTime: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear()+20)), Validators.required),
      startDateTime: new FormControl(new Date(), Validators.required)
    }),
    version: new FormControl("0.1.0", Validators.required)
  })
  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  serviceSpecificationRelationshipFilterCtrl = new FormControl();
  filteredServiceSpecificationRel$: Observable<ServiceSpecificationRef[]>

  subscriptions = new Subscription()


  ngOnInit(): void {
    this.initSubscriptions()

    if (this.activatedRoute.snapshot.params.id)
    {
      this.specID = this.activatedRoute.snapshot.params.id
      this.retrieveProductSpec()
    } else {
      this.newSpecification = true
      this.finishedLoading = true
    }
  }

  initSubscriptions() {
    this.subscriptions.add(this.router.events.subscribe(
      event => {
        if (event instanceof ActivationEnd && event.snapshot.params && event.snapshot.params.id) {
          this.specID = event.snapshot.params.id
          this.retrieveProductSpec()
        }
      }
    ))
  }

  selectListitem(item: string) {
    if (this.editForm.pristine) {
      this.activeListItem = item
    } else {
      const dialogRef = this.dialog.open(DiscardChangesComponent, {autoFocus: true})

      dialogRef.afterClosed().subscribe (discardChanges => {
        if (discardChanges) {
          this.editForm.patchValue(this.spec)
          this.editForm.markAsPristine()
          this.activeListItem = item
        }
      })
    }
  }

  retrieveProductSpec() {
    this.specService.retrieveProductSpecification({id: this.specID}).subscribe(
      data => this.spec = data,
      error => {console.error(error), this.toastrService.error("An error occurred while loading Product Specification")},
      () => {
        if (this.spec) {
          this.finishedLoading = true

          //populate General Panel Info
          if (!this.spec.validFor) this.spec.validFor = { endDateTime: new Date(new Date().setFullYear(new Date().getFullYear()+20)).toISOString(), startDateTime: new Date().toISOString() }
          this.editForm.patchValue(this.spec)
          this.editForm.markAsPristine()

          //populate Service Specification Relationship Panel Info
          this.filteredServiceSpecificationRel$ = this.serviceSpecificationRelationshipFilterCtrl.valueChanges.pipe(
            startWith(null),
            map( (value:null | string) => value ? this._filterOnRelatedSpecs(value) : this.spec.serviceSpecification.slice() )
          )
  
        }
        else {
          this.specNotFound = true
        }
      }
    )
  }

  private _filterOnRelatedSpecs(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.spec.serviceSpecification.filter( relatedSpec =>  relatedSpec.name.toLowerCase().includes(filterValue) )
  }

  openAssignSpecRelationshipDialog() {
    const dialogRef = this.dialog.open(AssignServiceSpecificationComponent, {
      data: {
        productSpec: this.spec
      },
      autoFocus: false,
      disableClose: false
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result) { 
          this.toastrService.success("Service Specification Relationship list was successfully updated")
          this.retrieveProductSpec()
        }
      }
    )
  }

  updateProductSpecGeneral() {
    if (this.editForm.valid) {
      const updateObj: ProductSpecificationCreate | ProductSpecificationUpdate = {
        description: this.editForm.value.description,
        lifecycleStatus: this.editForm.value.lifecycleStatus,
        name: this.editForm.value.name,
        validFor: this.editForm.value.validFor,
        version: this.editForm.value.version
      }
  
      let updatedSpec: ProductSpecification
  
      if (this.newSpecification) {
        this.specService.createProductSpecification(updateObj).subscribe(
          data => { updatedSpec = data },
          error => console.error(error),
          () => {
            this.newSpecification = false
            this.toastrService.success("Product Specification was successfully created")
            this.refreshProductSpecification(updatedSpec)
          }
        )
      }
      else {
        this.specService.patchProductSpecification({ id: this.specID, productSpecification: updateObj }).subscribe(
          data => { updatedSpec = data },
          error => console.error(error),
          () => {
            this.toastrService.success("Product Specification was successfully updated")
            this.refreshProductSpecification(updatedSpec)
          }
        )
      }
    }
    
  } 

  refreshProductSpecification(updatedSpec : ProductSpecification) {
    this.specID = updatedSpec.id
    this.retrieveProductSpec()
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}

@Component({
  selector: 'app-discard-changes',
  templateUrl: 'discard-changes.component.html',
})

export class DiscardChangesComponent {

  constructor(
    public dialogRef: MatDialogRef<DiscardChangesComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true)
  }
}

