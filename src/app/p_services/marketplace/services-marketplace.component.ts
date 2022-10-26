import { Component, OnInit } from '@angular/core';
import { ServiceCatalogService, ServiceCandidateService, ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { ServiceCatalog, ServiceCategoryRef, ServiceCategory, ServiceCandidateRef, ServiceCandidate, ServiceSpecification } from 'src/app/openApis/serviceCatalogManagement/models';
import { TreeServiceMarketPlaceService } from './services/tree-service-market-place.service';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PreviewMarketplaceItemComponent } from './preview-marketplace-item/preview-marketplace-item.component';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { simpleFade } from 'src/app/shared/animations/animations';
import { ServiceCandidateWithLogo } from 'src/app/shared/models/service-candidate-with-logo.model';
import { AppService } from 'src/app/shared/services/app.service';
import { IAppConfig } from 'src/app/shared/models/app-config.model';
import { ThemingService } from 'src/app/theming/theming.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services-marketplace',
  templateUrl: './services-marketplace.component.html',
  styleUrls: ['./services-marketplace.component.scss'],
  animations: [ trigger('simpleFade', simpleFade()) ]
})

export class ServicesMarketplaceComponent implements OnInit {

  constructor(
    private appService: AppService,
    private catalogService: ServiceCatalogService,
    // private categoryService: ServiceCategoryService,
    private candidateService: ServiceCandidateService,
    private specificationService: ServiceSpecificationService,
    private treeMarketPlaceService: TreeServiceMarketPlaceService,
    private dialog: MatDialog,
    private sortingService: SortingService,
    private themingService: ThemingService,
    private activatedRoute: ActivatedRoute
  ) { }

  serviceCatalogs: ServiceCatalog[]
  isCatalogsCollapsed: Boolean[] = []

  selectedCategoryRef: ServiceCategoryRef

  selectedCategory: ServiceCategory

  serviceCandidates: ServiceCandidateWithLogo[] = []

  serviceCandidatesFilterCtrl = new FormControl();
  filteredServiceCandidates$: Observable<ServiceCandidateWithLogo[]>

  specServiceRootUrl : string
  config: IAppConfig

  resultsNotFound: boolean = false
  subscriptions = new Subscription()

  ngOnInit() {
    this.config = this.appService.config

    this.specServiceRootUrl = this.specificationService.rootUrl

    this.retrieveCatalogsList()

    this.treeMarketPlaceService.categorySelected$.subscribe(
      category => {
        this.selectedCategory = category
        this.serviceCandidates = []
        this.serviceCandidatesFilterCtrl.reset()
        this.resultsNotFound = category.serviceCandidate.length === 0
        this.subscriptions.unsubscribe()
        this.subscriptions = new Subscription()
        category.serviceCandidate.forEach((candidateRef) => {
          this.retrieveCandidateFromRef(candidateRef)
        })
      }
    )

    const queryParams = this.activatedRoute.snapshot.queryParams.spec
    if (queryParams) {
      this.retrieveCandidateFromSpecID(queryParams)
    }
  }

  retrieveCatalogsList() {
    this.catalogService.listServiceCatalog({}).subscribe(
      data => { this.serviceCatalogs = data },
      error => { console.error(error) },
      () => {
        this.treeMarketPlaceService.catalogs$.next(this.serviceCatalogs)
      }
    )
  }

  retrieveCandidateFromSpecID(specID: string) {
    this.candidateService.listServiceCandidate({}).subscribe(
      data => {
        const candidate = data.find(cand => {
            if (cand.serviceSpecification && cand.serviceSpecification.id) {
              return cand.serviceSpecification.id === specID
            }
        })
        if (candidate) {this.previewServiceSpec(candidate)}
      },
      error => { console.error(error) }
    )
  }

  retrieveCandidateFromRef(candidateRef: ServiceCandidateRef) {
    
    this.subscriptions.add(this.candidateService.retrieveServiceCandidate({ id: candidateRef.id }).subscribe(
      data => { 
        // console.log(data)
        let candidate: ServiceCandidateWithLogo = data
        candidate.fetchingLogo = true
        candidate.logo = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH //set Default App Image, path defined in theming.service.ts

        this.serviceCandidates.push(candidate)

        this.specificationService.getAttachment({id: data.serviceSpecification.id, attid:'logo'}).subscribe(
          data => {
            const reader = new FileReader();
            reader.readAsDataURL(data);
            reader.onload = (__event) => {
              const base64data = reader.result;
              this.serviceCandidates.find(cand => cand.id === candidateRef.id).logo = base64data
              candidate.fetchingLogo = false
            }
          },
          error => {
            candidate.fetchingLogo = false
            // console.error (error)
          }
        )

      },
      error => { console.error(error) },
      () => {
        this.serviceCandidates.sort(this.sortingService.ascStringSortingFunctionByNameProperty())
        this.filteredServiceCandidates$ = this.serviceCandidatesFilterCtrl.valueChanges.pipe(
          startWith(null),
          map( (value:null | string) => value ? this._filterOnServiceCandidates(value) : this.serviceCandidates.slice() )
        )
      }
    ))
  }

  private _filterOnServiceCandidates(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.serviceCandidates.filter( cand =>  cand.name.toLowerCase().includes(filterValue) )
  }

  previewServiceSpec(candidate: ServiceCandidate) {
    const dialogRef = this.dialog.open(PreviewMarketplaceItemComponent, {
      data: {
        serviceCandidate: candidate
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(
      result => {
        // console.log(result);
      }
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}
