import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceTest, ServiceTestUpdate } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestService } from 'src/app/openApis/serviceTestManagement/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-edit-service-test',
  templateUrl: './edit-service-test.component.html',
  styleUrls: ['./edit-service-test.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class EditServiceTestComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private toast: ToastrService,
    private router: Router,
    private sortingService: SortingService,
    public appService: AppService,
    private testService: ServiceTestService
  ) { }

  serviceTestID: string
  serviceTest: ServiceTest
  newServiceTest = false
  serviceTestNotFound: boolean
  finishedLoading: boolean

  editForm = new FormGroup({
    description: new FormControl(),
  })
  editMode: boolean = false

  listItems = ["Main Properties", "Service Test Characteristics"]
  activeListItem = "Main Properties"

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) 
    {
      this.serviceTestID = this.activatedRoute.snapshot.params.id
      this.retrieveServiceTest()
    }
  }

  retrieveServiceTest() {
    this.testService.retrieveServiceTest({id: this.serviceTestID}).subscribe(
      data => {
        this.serviceTest = data
      },
      error => {
        console.error(error)
      },
      () => {
        this.finishedLoading = true
        if (!this.serviceTest) {
          this.serviceTestNotFound = true
        }
        this.serviceTest.characteristic.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

        this.editForm.patchValue({
          name: this.serviceTest.name,
          description: this.serviceTest.description,
        })
      }
    )
  }

  selectListitem(item: string) {
    this.activeListItem = item
  } 
  
  enableServiceTestEditing() {
    this.editMode = true
  }

  cancelServiceTestEditing() {
    this.editForm.patchValue({
      description: this.serviceTest.description,
    })
    this.editMode = false
  }

  submitServiceTestEditing() {
    let serviceTestUpdate: ServiceTestUpdate = {
      description: this.editForm.get('description').value,
    }

    this.testService.patchServiceTest({serviceSpecification: serviceTestUpdate, id: this.serviceTestID}).subscribe(
      data => { this.toast.success("Service Test Instance is successfully updated") },
      error => { console.error(error), this.toast.error("An error occurred while updating this Service Test Instance") },
      () => {
        this.editMode = false
        this.retrieveServiceTest()
      }
    )
  }



}
