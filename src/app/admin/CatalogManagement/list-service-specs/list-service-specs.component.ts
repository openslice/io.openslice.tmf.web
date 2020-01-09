import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { ServiceSpecification, ServiceSpecificationCreate } from 'src/app/openApis/ServiceCatalogManagement/models';
import { DeleteServiceSpecComponent } from '../delete-service-spec/delete-service-spec.component';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-list-service-specs',
  templateUrl: './list-service-specs.component.html',
  styleUrls: ['./list-service-specs.component.scss']
})
export class ListServiceSpecsComponent implements OnInit {

  constructor(
    private specService: ServiceSpecificationService,
    public dialog: MatDialog,
    private toast: ToastrService
  ) { }

  displayedColumns = ['name', 'description', 'version', 'type', 'lastUpdate',  'lifestyleStatus', 'actions']
  dataSource  = new MatTableDataSource<ServiceSpecification>()

  serviceSpecs: ServiceSpecification[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  

  ngOnInit() {
    this.retrieveSpecsList()
  }

  retrieveSpecsList() {
    this.specService.listServiceSpecification({}).subscribe(
      data => { this.serviceSpecs = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.serviceSpecs
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          console.log(property)
          switch (property) {
            case 'lastUpdate': return new Date(item.lastUpdate).getTime();
            default: return item[property];
          }
        }
      }
    )
  }

  openSpecDeleteDialog(element: ServiceSpecification) {
    const dialogRef = this.dialog.open(DeleteServiceSpecComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        console.log(result)
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occured while attempting to delete Service Specification")
          } else {
            this.toast.success("Service Specification list is successfully updated")
            this.retrieveSpecsList()
          }
        }
      }
    )
  }

  cloneServiceSpec(spec: ServiceSpecification) {
    
    // const cloneObj: ServiceSpecificationCreate = {
    //   name: `Copy of ${spec.name}`,
    //   description: spec.description,
    //   isBundle: spec.isBundle,
    //   lifecycleStatus: spec.lifecycleStatus,
    //   // relatedParty: spec.relatedParty,
    //   resourceSpecification: spec.resourceSpecification,
    //   serviceLevelSpecification: spec.serviceLevelSpecification,
    //   serviceSpecCharacteristic: spec.serviceSpecCharacteristic,
    //   serviceSpecRelationship: spec.serviceSpecRelationship,
    //   targetServiceSchema: spec.targetServiceSchema,
    //   validFor: spec.validFor,
    //   version: spec.version
    // }
    // console.log(cloneObj)
    
    // this.specService.createServiceSpecification(cloneObj).subscribe(
    //   data => console.log(data),
    //   error => console.error(error),
    //   () => this.retrieveSpecsList() 
    // )

    this.specService.cloneServiceSpecification(spec.id).subscribe(
      data => console.log(data),
      error => { 
        console.error(error)
        this.toast.error("An error occured while attempting to clone Service Specification") 
      },
      () => {
        this.retrieveSpecsList()
        this.toast.success("Service Specification is successfully cloned") 
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
