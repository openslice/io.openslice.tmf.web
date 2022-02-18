import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';

import { ToastrService } from 'ngx-toastr';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { ServiceTestService } from 'src/app/openApis/serviceTestManagement/services';
import { ServiceTest } from 'src/app/openApis/serviceTestManagement/models';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-list-service-tests',
  templateUrl: './list-service-tests.component.html',
  styleUrls: ['./list-service-tests.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListServiceTestsComponent implements OnInit {

  constructor(
    private testSpecificationService: ServiceTestService,
    private toast: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['name', 'description', 'lastUpdate', 'testSpecification', 'service', 'actions']
  dataSource  = new MatTableDataSource<ServiceTest>()

  serviceSpecifications: ServiceTest[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.retrieveTestsList()
  }

  retrieveTestsList() {
    this.testSpecificationService.listServiceTest({}).subscribe(
      data => { this.serviceSpecifications = data },
      error => { console.error(error) },
      () => {
        console.log(this.serviceSpecifications)
        this.dataSource.data = this.serviceSpecifications
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        // this.dataSource.sortingDataAccessor = (item, property): string | number => {
        //   switch (property) {
        //     case 'lastUpdate': return new Date(item.lastUpdate).getTime();
        //     default: return item[property];
        //   }
        // }

      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
