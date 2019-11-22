import { Component, OnInit } from '@angular/core';
import { ServiceCatalogService, ServiceCategoryService, ServiceCandidateService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { ServiceCatalog, ServiceCategoryRef, ServiceCategory, ServiceCandidateRef, ServiceCandidate } from 'src/app/openApis/ServiceCatalogManagement/models';
import { TreeServiceMarketPlaceService } from '../shared/services/tree-service-market-place.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-services-marketplace',
  templateUrl: './services-marketplace.component.html',
  styleUrls: ['./services-marketplace.component.scss']
})
export class ServicesMarketplaceComponent implements OnInit {

  constructor(
    private catalogService: ServiceCatalogService,
    private categoryService: ServiceCategoryService,
    private candidateService: ServiceCandidateService,
    private treeMarketPlaceService: TreeServiceMarketPlaceService
  ) { }

  serviceCatalogs: ServiceCatalog[]
  isCatalogsCollapsed: Boolean[] = []

  selectedCategoryRef: ServiceCategoryRef

  selectedCategory: ServiceCategory

  serviceCandidates: ServiceCandidate[] = []

  serviceCandidatesFilterCtrl = new FormControl();
  filteredServiceCandidates$: Observable<ServiceCandidate[]>

  ngOnInit() {
    this.retrieveCatalogsList()
    
    this.treeMarketPlaceService.categorySelected$.subscribe(
      category => {
        this.selectedCategory = category
        this.serviceCandidates = []
        this.serviceCandidatesFilterCtrl.reset()
        category.serviceCandidate.forEach(candidateRef => {
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
      data => { this.serviceCandidates.push(data) },
      error => { console.error(error) },
      () => {
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




}
