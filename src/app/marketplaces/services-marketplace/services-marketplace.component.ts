import { Component, OnInit } from '@angular/core';
import { ServiceCatalogService, ServiceCandidateService } from 'src/app/openApis/ServiceCatalogManagement/services';
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

@Component({
  selector: 'app-services-marketplace',
  templateUrl: './services-marketplace.component.html',
  styleUrls: ['./services-marketplace.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ServicesMarketplaceComponent implements OnInit {

  constructor(
    private catalogService: ServiceCatalogService,
    // private categoryService: ServiceCategoryService,
    private candidateService: ServiceCandidateService,
    private treeMarketPlaceService: TreeServiceMarketPlaceService,
    private dialog: MatDialog,
    private sortingService: SortingService
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
