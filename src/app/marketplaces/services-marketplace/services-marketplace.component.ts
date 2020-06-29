import { Component, OnInit } from '@angular/core';
import { ServiceCatalogService, ServiceCandidateService, ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { ServiceCatalog, ServiceCategoryRef, ServiceCategory, ServiceCandidateRef, ServiceCandidate } from 'src/app/openApis/ServiceCatalogManagement/models';
import { TreeServiceMarketPlaceService } from '../shared/services/tree-service-market-place.service';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { PreviewServiceComponent } from './preview-service/preview-service.component';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { ServiceCandidateWithLogo } from 'src/app/models/service-candidate-with-logo.model';
import { AppService } from 'src/app/shared/services/app.service';
import { IAppConfig } from 'src/app/models/app-config.model';

@Component({
  selector: 'app-services-marketplace',
  templateUrl: './services-marketplace.component.html',
  styleUrls: ['./services-marketplace.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
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
    private sortingService: SortingService
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

  ngOnInit() {
    this.config = this.appService.config

    this.specServiceRootUrl = this.specificationService.rootUrl

    this.retrieveCatalogsList()
    
    this.treeMarketPlaceService.categorySelected$.subscribe(
      category => {
        this.selectedCategory = category
        this.serviceCandidates = []
        this.serviceCandidatesFilterCtrl.reset()
        category.serviceCandidate.forEach((candidateRef) => {
          this.retrieveCandidateFromRef(candidateRef)
        })
      }
    )
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

  retrieveCandidateFromRef(candidateRef: ServiceCandidateRef) {
    
    this.candidateService.retrieveServiceCandidate({ id: candidateRef.id }).subscribe(
      data => { 
        // console.log(data)
        let candidate: ServiceCandidateWithLogo = data
        candidate.fetchingLogo = true
        candidate.logo = 'assets/images/logo_icon_original.png' //set Default App Image

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
    )
  }

  private _filterOnServiceCandidates(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    return this.serviceCandidates.filter( cand =>  cand.name.toLowerCase().includes(filterValue) )
  }

  previewServiceSpec(candidate: ServiceCandidate) {
    const dialogRef = this.dialog.open(PreviewServiceComponent, {
      data: {
        serviceCandidate: candidate
      },
      autoFocus: false
    })

    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);    
      }
    )
  }

}
