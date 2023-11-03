import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { ResourceSpecification } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceSpecificationService } from 'src/app/openApis/resourceCatalogManagement/services';
import { DeleteResourceSpecComponent } from '../delete-resource-spec/delete-resource-spec.component';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';


@Component({
  selector: 'app-list-resource-spec',
  templateUrl: './list-resource-spec.component.html',
  styleUrls: ['./list-resource-spec.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListResourceSpecsComponent implements OnInit {

  constructor(
    private specService: ResourceSpecificationService,
    public dialog: MatDialog,
    private toast: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'description', 'version', 'category', 'lastUpdate',  'lifecycleStatus', 'actions']
  dataSource  = new MatTableDataSource<ResourceSpecification>()

  serviceSpecs: ResourceSpecification[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.retrieveSpecsList()
  }

  retrieveSpecsList() {
    this.specService.listResourceSpecification({}).subscribe(
      data => { this.serviceSpecs = data },
      error => { console.error(error) },
      () => {
        this.dataSource.data = this.serviceSpecs
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          switch (property) {
            case 'lastUpdate': return new Date(item.lastUpdate).getTime();
            // case '@type': return item[property] === 'CustomerFacingResourceSpecification' ? 'CFSS': 'RFSS';
            default: return item[property];
          }
        }
      }
    )
  }

  openSpecDeleteDialog(element: ResourceSpecification) {
    const dialogRef = this.dialog.open(DeleteResourceSpecComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occurred while attempting to delete Resource Specification")
          } else {
            this.toast.success("Resource Specification list is successfully updated")
            this.retrieveSpecsList()
          }
        }
      }
    )
  }

    // cloneResourceSpec(spec: ResourceSpecification) {

    // const cloneObj: ResourceSpecificationCreate = {
    //   name: `Copy of ${spec.name}`,
    //   description: spec.description,
    //   isBundle: spec.isBundle,
    //   lifecycleStatus: spec.lifecycleStatus,
    //   // relatedParty: spec.relatedParty,
    //   resourceSpecification: spec.resourceSpecification,
    //   serviceLevelSpecification: spec.serviceLevelSpecification,
    //   serviceSpecCharacteristic: spec.serviceSpecCharacteristic,
    //   serviceSpecRelationship: spec.serviceSpecRelationship,
    //   targetResourceSchema: spec.targetResourceSchema,
    //   validFor: spec.validFor,
    //   version: spec.version
    // }
    // console.log(cloneObj)

    // this.specService.createResourceSpecification(cloneObj).subscribe(
    //   data => console.log(data),
    //   error => console.error(error),
    //   () => this.retrieveSpecsList()
    // )

    //   this.specService.cloneResourceSpecification(spec.id).subscribe(
    //     data => console.log(data),
    //     error => {
    //       console.error(error)
    //       this.toast.error("An error occured while attempting to clone Resource Specification")
    //     },
    //     () => {
    //       this.retrieveSpecsList()
    //       this.toast.success("Resource Specification is successfully cloned")
    //     }
    //   )
    // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
