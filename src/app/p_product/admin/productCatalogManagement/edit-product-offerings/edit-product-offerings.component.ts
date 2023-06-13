import { trigger } from '@angular/animations';
import { SelectionChange } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { relative } from 'path';
import { Subscription } from 'rxjs';
import { ProductOffering, ProductOfferingCreate, ProductOfferingUpdate, ProductSpecification } from 'src/app/openApis/productCatalogManagement/models';
import { ProductOfferingService, ProductSpecificationService } from 'src/app/openApis/productCatalogManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-edit-product-offerings',
  templateUrl: './edit-product-offerings.component.html',
  styleUrls: ['./edit-product-offerings.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditProductOfferingsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private offeringService: ProductOfferingService,
    private specService: ProductSpecificationService,
    private dialog: MatDialog,
    private toastrService: ToastrService,
    private router: Router,
    public appService: AppService
  ) { }

  offeringID: string
  offering: ProductOffering
  offeringNotFound: boolean = false
  finishedLoading: boolean = false
  newOffering = false

  productSpecifications: ProductSpecification[]

  listItems = ["Main Properties"]
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
    version: new FormControl("0.1.0", Validators.required),
    productSpecification: new FormControl()
  })
  
  lifecycleStatuses = ["In study", "In design", "In test", "Active", "Launched", "Retired", "Obsolete", "Rejected"]

  subscriptions = new Subscription()
  // valueChangeSubscription$: any


  ngOnInit(): void {
    this.initSubscriptions()
    this.listProductSpecifications()
    
    if (this.activatedRoute.snapshot.params.id)
    {
      this.offeringID = this.activatedRoute.snapshot.params.id
      this.retrieveOffering()
    } else {
      this.newOffering = true
      this.finishedLoading = true
    }

  }

  initSubscriptions() {
    this.subscriptions.add(this.router.events.subscribe(
      event => {
        if (event instanceof ActivationEnd && event.snapshot.params && event.snapshot.params.id) {
          this.offeringID = event.snapshot.params.id
          this.retrieveOffering()
        }
      }
    ))
  }


  onSpecificationChange(event: MatSelectChange) {
    const dialogRef = this.dialog.open(CopySpecificationPropertiesComponent, { autoFocus: true })

    dialogRef.afterClosed().subscribe(confirmCopy => {
      if (confirmCopy) {
        this.editForm.patchValue({
          name: event.value.name,
          description: event.value.description,
        })
      }
    })
  }



  selectListitem(item: string) {
    if (this.editForm.pristine) {
      this.activeListItem = item
    } else {
      const dialogRef = this.dialog.open(DiscardChangesComponent, {autoFocus: true})

      dialogRef.afterClosed().subscribe (discardChanges => {
        if (discardChanges) {
          this.editForm.patchValue(this.offering)
          this.editForm.markAsPristine()
          this.activeListItem = item
        }
      })
    }
  }

  listProductSpecifications() {
    this.specService.listProductSpecification({}).subscribe(
      data => this.productSpecifications = data,
      error => {console.error(error), this.toastrService.error("An error occurred while loading Product Specifications")}
    )
  }

  retrieveOffering() {
    this.offeringService.retrieveProductOffering({id: this.offeringID}).subscribe(
      data => this.offering = data,
      error => {console.error(error), this.toastrService.error("An error occurred while loading Product Offering")},
      () => {
        if (this.offering) {
          this.finishedLoading = true
          this.editForm.reset()
          //populate General Panel Info
          if (!this.offering.validFor) this.offering.validFor = { endDateTime: new Date(new Date().setFullYear(new Date().getFullYear()+20)).toISOString(), startDateTime: new Date().toISOString() }
          this.editForm.patchValue(this.offering)
          this.editForm.markAsPristine()

          if (this.offering.productSpecification) {
            this.editForm.patchValue({productSpecification: this.productSpecifications.find(el => el.id === this.offering.productSpecification.id) })
          }

          //populate Product Specification Relationship
          // this.filteredServiceSpecificationRel$ = this.serviceSpecificationRelationshipFilterCtrl.valueChanges.pipe(
          //   startWith(null),
          //   map( (value:null | string) => value ? this._filterOnRelatedSpecs(value) : this.spec.serviceSpecification.slice() )
          // )
  
        }
        else {
          this.offeringNotFound = true
        }
      }
    )
  }

  updateOfferingGeneral() {
    if (this.editForm.valid) {
      const updateObj: ProductOfferingCreate | ProductOfferingUpdate = {
        description: this.editForm.value.description,
        lifecycleStatus: this.editForm.value.lifecycleStatus,
        name: this.editForm.value.name,
        validFor: this.editForm.value.validFor,
        version: this.editForm.value.version
      }
  
      if (this.editForm.value.productSpecification) {
        updateObj.productSpecification = {name: this.editForm.value.productSpecification.name, id: this.editForm.value.productSpecification.id}
      }
              
      let updatedOffering: ProductOffering
  
      if (this.newOffering) {
        this.offeringService.createProductOffering(updateObj).subscribe(
          data => { updatedOffering = data },
          error => console.error(error),
          () => {
            this.newOffering = false
            this.router.navigate([updatedOffering.id], {relativeTo: this.activatedRoute})
            this.toastrService.success("Product Offering was successfully created")
            this.refreshProductOffering(updatedOffering)
          }
        )
      }
      else {
        this.offeringService.patchProductOffering({ id: this.offeringID, productOffering: updateObj }).subscribe(
          data => { updatedOffering = data },
          error => console.error(error),
          () => {
            this.toastrService.success("Product Offering was successfully updated")
            this.refreshProductOffering(updatedOffering)
          }
        )
      }
    }
    
  } 

  refreshProductOffering(updatedOffering : ProductOffering) {
    this.offeringID = updatedOffering.id
    this.retrieveOffering()
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

@Component({
  selector: 'app-copy-specification-properties',
  templateUrl: 'copy-specification-properties.component.html',
})

export class CopySpecificationPropertiesComponent {

  constructor(
    public dialogRef: MatDialogRef<CopySpecificationPropertiesComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true)
  }
}
