import { Component, OnInit, Inject } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag} from '@angular/cdk/drag-drop';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ServiceCategory, ServiceCandidate, ServiceCandidateRef, ServiceCategoryUpdate } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceCandidateService, ServiceCategoryService } from 'src/app/openApis/ServiceCatalogManagement/services';

@Component({
  selector: 'app-assign-service-candidates',
  templateUrl: './assign-service-candidates.component.html',
  styleUrls: ['./assign-service-candidates.component.scss']
})
export class AssignServiceCandidatesComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceCategory,
    private dialogRef: MatDialogRef<AssignServiceCandidatesComponent>,
    private candidateService: ServiceCandidateService,
    private categoryService: ServiceCategoryService

  ) { }

  serviceCategory: ServiceCategory = this.data

  ngOnInit() {
    console.log(this.data)
    this.assignedCandidates = this.data.serviceCandidate.slice()
    this.listServiceCandidates()
  }

  assignedCandidates: ServiceCandidateRef[] = []

  availableCandidates: ServiceCandidate[] = []

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(event)
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  listItem_dblclicked(index: number, origin_list: CdkDropList, dest_list: CdkDropList, event?) {
    console.log(event)
    if (!event || event.tapCount == 2) {
      transferArrayItem(origin_list.data, dest_list.data, index, 0)
    }
  }

  listServiceCandidates() {
    let allServiceCandidates: ServiceCandidate[]
    
    this.candidateService.listServiceCandidate({}).subscribe(
      data => allServiceCandidates = data,
      error => console.error(error),
      () => { 
        console.log(allServiceCandidates.filter(cand => !this.serviceCategory.serviceCandidate.map(el => el.id).includes(cand.id)));
        
        this.availableCandidates = allServiceCandidates.filter(cand => !this.serviceCategory.serviceCandidate.map(el => el.id).includes(cand.id))
        // this.available = this.availableCandidates
      }
      

    )
  }

  closeDialog() { 
    this.dialogRef.close()
  }

  submitDialog() {
    console.log('submit')
    console.log(this.assignedCandidates)
    const updateCandidatesObj: ServiceCategoryUpdate = { serviceCandidate: this.assignedCandidates.map(cand => {return {id: cand.id}}) }
    console.log(updateCandidatesObj)
    console.log(this.serviceCategory.id)
    this.categoryService.patchServiceCategory({id: this.serviceCategory.id, serviceCategory: updateCandidatesObj}).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => { this.dialogRef.close('updated') }
    )
  }

}
