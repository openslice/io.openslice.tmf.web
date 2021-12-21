import { Component, OnInit } from '@angular/core';
import {ResourceCandidateService, ResourceSpecificationService } from 'src/app/openApis/ResourceCatalogManagement/services';
import { ResourceCatalogService, ResourceCategoryService } from 'src/app/openApis/ResourceCatalogManagement/services';
import { ResourceCatalog, ResourceCategoryRef, ResourceCategory, ResourceCandidateRef, ResourceCandidate } from 'src/app/openApis/ResourceCatalogManagement/models';
//import { ServiceCatalog, ServiceCategoryRef, ServiceCategory, ServiceCandidateRef, ServiceCandidate } from 'src/app/openApis/ServiceCatalogManagement/models';
//import { TreeServiceMarketPlaceService } from '../shared/services/tree-service-market-place.service';
import { TreeResourceMarketPlaceService } from '../shared/services/tree-resource-market-place.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { PreviewResourceMarketplaceItemComponent } from './preview-marketplace-item/preview-marketplace-item.component';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { simpleFade } from 'src/app/shared/animations/animations';
import { ResourceCandidateWithLogo } from 'src/app/models/resource-candidate-with-logo.model';
import { AppService } from 'src/app/shared/services/app.service';
import { IAppConfig } from 'src/app/models/app-config.model';
import { ThemingService } from 'src/app/theming/theming.service';

@Component({
  selector: 'app-services-marketplace',
  templateUrl: './resources-marketplace.component.html',
  styleUrls: ['./resources-marketplace.component.scss'],
  animations: [ trigger('simpleFade', simpleFade()) ]
})

export class ResourcesMarketplaceComponent implements OnInit {

  constructor(
    private appService: AppService,
    private catalogService: ResourceCatalogService,
    //private categoryService: ResourceCategoryService,
    private candidateService: ResourceCandidateService,
    private specificationService: ResourceSpecificationService,
    private treeMarketPlaceService: TreeResourceMarketPlaceService,
    private dialog: MatDialog,
    private sortingService: SortingService,
    private themingService: ThemingService
  ) { }

  resourceCatalogs: ResourceCatalog[]
  isCatalogsCollapsed: Boolean[] = []

  selectedCategoryRef: ResourceCategoryRef

  selectedCategory: ResourceCategory

  //serviceCandidates: ServiceCandidateWithLogo[] = []
  resourceCandidates: ResourceCandidateWithLogo[] = []

  serviceCandidatesFilterCtrl = new FormControl();
  //filteredServiceCandidates$: Observable<ServiceCandidateWithLogo[]>
  filteredServiceCandidates$: Observable<ResourceCandidateWithLogo[]>

  specServiceRootUrl : string
  config: IAppConfig

  resultsNotFound: boolean = false

  ngOnInit() {
    this.config = this.appService.config

    this.specServiceRootUrl = this.specificationService.rootUrl

    this.retrieveCatalogsList()
    
    this.treeMarketPlaceService.categorySelected$.subscribe(
      category => {
        this.selectedCategory = category
        this.resourceCandidates = []
        this.serviceCandidatesFilterCtrl.reset()
        this.resultsNotFound = category.resourceCandidate.length === 0
        category.resourceCandidate.forEach((candidateRef) => {
          this.retrieveCandidateFromRef(candidateRef)
        })
      }
    )
  }

  retrieveCatalogsList() {
    this.catalogService.listResourceCatalog({}).subscribe(
      data => { this.resourceCatalogs = data },
      error => { console.error(error) },
      () => {
        this.treeMarketPlaceService.catalogs$.next(this.resourceCatalogs)        
      }
    )
  }

  retrieveCandidateFromRef(candidateRef: ResourceCandidateRef) {
    
    this.candidateService.retrieveResourceCandidate({ id: candidateRef.id }).subscribe(
      data => { 
        console.log(data)
        let candidate: ResourceCandidateWithLogo = data
        candidate.fetchingLogo = true
        candidate.logo = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH //set Default App Image, path defined in theming.service.ts

        // this.serviceCandidates.push(candidate)
        // let candidate: ResourceCandidate = data
        // candidate.fetchingLogo = true
        // candidate.logo = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH //set Default App Image, path defined in theming.service.ts

        this.resourceCandidates.push(candidate)
        this.specificationService.getAttachment({id: data.resourceSpecification.id, attid:'logo'}).subscribe(
          data => {
            const reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = (__event) => {
              const base64data = reader.result;
              this.resourceCandidates.find(cand => cand.id === candidateRef.id).logo = base64data
              //candidate.logo = base64data;
              candidate.fetchingLogo = false
            }
          },
          error => {
            candidate.fetchingLogo = false
            //console.error (error)
          }
        )
        //this.resourceCandidates.push(candidate)
      },
      error => { console.error(error) },
      () => {
        this.resourceCandidates.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
        this.filteredServiceCandidates$ = this.serviceCandidatesFilterCtrl.valueChanges.pipe( 
          startWith(null),
          map( (value:null | string) => value ? this._filterOnServiceCandidates(value) : this.resourceCandidates.slice() )
        )
      }
    )
  }

  private _filterOnServiceCandidates(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.resourceCandidates.filter( cand =>  cand.name.toLowerCase().includes(filterValue) )
  }

  previewServiceSpec(candidate: ResourceCandidate) {
    const dialogRef = this.dialog.open(PreviewResourceMarketplaceItemComponent, {
      data: {
        resourceCandidate: candidate
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(
      result => {
        // console.log(result);    
      }
    )
  }

}
