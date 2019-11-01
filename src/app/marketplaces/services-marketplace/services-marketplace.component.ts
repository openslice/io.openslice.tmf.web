import { Component, OnInit } from '@angular/core';
import { ServiceCatalogService, ServiceCategoryService, ServiceCandidateService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { ServiceCatalog, ServiceCategoryRef, ServiceCategory, ServiceCandidateRef, ServiceCandidate } from 'src/app/openApis/ServiceCatalogManagement/models';

@Component({
  selector: 'app-services-marketplace',
  templateUrl: './services-marketplace.component.html',
  styleUrls: ['./services-marketplace.component.scss']
})
export class ServicesMarketplaceComponent implements OnInit {

  constructor(
    private catalogService: ServiceCatalogService,
    private categoryService: ServiceCategoryService,
    private candidateService: ServiceCandidateService
  ) { }

  serviceCatalogs: ServiceCatalog[]
  isCatalogeCollapsed = false

  selectedCategoryRef: ServiceCategoryRef

  selectedCategory: ServiceCategory

  serviceCandidates: ServiceCandidate[]

  ngOnInit() {
    this.retrieveCatalogsList()
  }

  retrieveCatalogsList() {
    this.catalogService.listServiceCatalog({}).subscribe(
      data => { this.serviceCatalogs = data },
      error => { console.error(error) },
      () => {
        if (this.serviceCatalogs[0].category.length) this.selectCategory(this.serviceCatalogs[0].category[0])
      }
    )
  }


  selectCategory(categoryRef: ServiceCategoryRef) {
    this.selectedCategoryRef = categoryRef
    this.retrieveCategoryFromRef(categoryRef)
  }


  retrieveCategoryFromRef(categoryRef: ServiceCategoryRef) {
    this.categoryService.retrieveServiceCategory({ id: categoryRef.id }).subscribe(
      data => { this.selectedCategory = data },
      error => { console.error(error) },
      () => {
        this.serviceCandidates = []
        this.selectedCategory.serviceCandidate.forEach(cand => {
          this.retrieveCandidateFromRef(cand)
        })

      }
    )
  }

  retrieveCandidateFromRef(candidateRef: ServiceCandidateRef) {
    this.candidateService.retrieveServiceCandidate({ id: candidateRef.id }).subscribe(
      data => { this.serviceCandidates.push(data) },
      error => { console.error(error) }
    )
  }

}
