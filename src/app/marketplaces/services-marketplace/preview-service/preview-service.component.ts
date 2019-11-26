import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource, MatSort, MatCheckboxChange } from '@angular/material';
import { ServiceCandidate, ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';

@Component({
  selector: 'app-preview-service',
  templateUrl: './preview-service.component.html',
  styleUrls: ['./preview-service.component.scss']
})
export class PreviewServiceComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceCandidate: ServiceCandidate
    },
    private dialogRef: MatDialogRef<PreviewServiceComponent>,
    private specService: ServiceSpecificationService
  ) { }

  candidate: ServiceCandidate
  spec: ServiceSpecification


  displayedColumns = ['name', 'configurable']
  dataSource  = new MatTableDataSource<ServiceSpecification>()

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  orderView = false

  ngOnInit() {
    this.candidate = this.data.serviceCandidate
    this.retrieveServiceSpec(this.data.serviceCandidate)

  }

  configurableFilterChanged(event:MatCheckboxChange) {
    if (event.checked) this.dataSource.data = this.spec.serviceSpecCharacteristic.filter(spec => spec.configurable)
    else this.dataSource.data = this.spec.serviceSpecCharacteristic
  }

  retrieveServiceSpec(candidate: ServiceCandidate) {
    this.specService.retrieveServiceSpecification({id: candidate.serviceSpecification.id}).subscribe(
      data => this.spec = data,
      error => console.error(error),
      () => {
        this.dataSource.data = this.spec.serviceSpecCharacteristic
        this.dataSource.sort = this.sort        
      }
    )
  }

  closeDialog() {
    if (this.orderView) 
      this.orderView = false
    else 
      this.dialogRef.close()
  }

  startConfiguration() {
    this.orderView = true
  }

}
