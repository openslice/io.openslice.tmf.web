import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/shared/services/app.service';
import { TreeServiceMarketPlaceService } from './services/tree-service-market-place.service';
import { MatDialog } from '@angular/material/dialog';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { CatalogService, ProductOfferingService } from 'src/app/openApis/productCatalogManagement/services';
import { Catalog, Category, CategoryRef, ProductOffering, ProductOfferingRef } from 'src/app/openApis/productCatalogManagement/models';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { IAppConfig } from 'src/app/shared/models/app-config.model';
import { map, startWith } from 'rxjs/operators';
import { trigger } from '@angular/animations';
import { simpleFade } from 'src/app/shared/animations/animations';
import { PreviewMarketPlaceItemComponent } from './preview-market-place-item/preview-market-place-item.component';
import { ThemingService } from 'src/app/theming/theming.service';

@Component({
  selector: 'app-product-marketplace',
  templateUrl: './product-marketplace.component.html',
  styleUrls: ['./product-marketplace.component.scss'],
  animations: [ trigger('simpleFade', simpleFade()) ]

})
export class ProductMarketplaceComponent implements OnInit {

  constructor(
    private appService: AppService,
    private catalogService: CatalogService,
    private productOfferingService: ProductOfferingService,
    private treeMarketPlaceService: TreeServiceMarketPlaceService,
    private dialog: MatDialog,
    private sortingService: SortingService,
    private themingService: ThemingService
  ) { }

  productCatalogs: Catalog[]
  isCatalogsCollapsed: Boolean[] = []

  selectedCategoryRef: CategoryRef

  selectedCategory: Category

  productOfferings: ProductOffering[] = []

  productOfferingsFilterCtrl = new FormControl();
  filteredProductOfferings$: Observable<ProductOffering[]>

  config: IAppConfig

  resultsNotFound: boolean = false
  subscriptions = new Subscription()

  ngOnInit() {
    this.config = this.appService.config

    this.retrieveCatalogsList()

    this.treeMarketPlaceService.categorySelected$.subscribe(
      (category: Category) => {
        this.selectedCategory = category
        this.productOfferings = []
        this.productOfferingsFilterCtrl.reset()
        this.resultsNotFound = category.productOffering.length === 0
        this.subscriptions.unsubscribe()
        this.subscriptions = new Subscription()
        category.productOffering.forEach((offeringRef) => {
          this.retrieveOfferingFromRef(offeringRef)
        })
      }
    )
  }

  retrieveCatalogsList() {
    this.catalogService.listCatalog({}).subscribe(
      data => { this.productCatalogs = data },
      error => { console.error(error) },
      () => {
        this.treeMarketPlaceService.catalogs$.next(this.productCatalogs)
      }
    )
  }

  retrieveOfferingFromRef(offeringRef: ProductOfferingRef) {
    
    this.subscriptions.add(this.productOfferingService.retrieveProductOffering({ id: offeringRef.id }).subscribe(
      data => { 
        let productOffering: ProductOffering = data
        // offering.fetchingLogo = true
        productOffering['logo'] = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH //set Default App Image, path defined in theming.service.ts

        this.productOfferings.push(productOffering)

        // this.specificationService.getAttachment({id: data.serviceSpecification.id, attid:'logo'}).subscribe(
        //   data => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(data);
        //     reader.onload = (__event) => {
        //       const base64data = reader.result;
        //       this.serviceCandidates.find(cand => cand.id === candidateRef.id).logo = base64data
        //       candidate.fetchingLogo = false
        //     }
        //   },
        //   error => {
        //     candidate.fetchingLogo = false
        //     // console.error (error)
        //   }
        // )

      },
      error => { console.error(error) },
      () => {
        this.productOfferings.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
        this.filteredProductOfferings$ = this.productOfferingsFilterCtrl.valueChanges.pipe(
          startWith(null),
          map( (value:null | string) => value ? this._filterOnProductOfferings(value) : this.productOfferings.slice() )
        )
      }
    ))
  }

  private _filterOnProductOfferings (filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.productOfferings.filter( cand =>  cand.name.toLowerCase().includes(filterValue) )
  }

  previewProductOffering(offering: ProductOffering) {
    const dialogRef = this.dialog.open(PreviewMarketPlaceItemComponent, {
      data: {
        productOffering: offering
      },
      autoFocus: false
    })

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}
