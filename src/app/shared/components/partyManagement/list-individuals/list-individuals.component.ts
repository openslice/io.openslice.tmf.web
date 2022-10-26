import { Component, OnInit, ViewChild } from '@angular/core';
import { IndividualService } from 'src/app/openApis/partyManagement/services';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Individual } from 'src/app/openApis/partyManagement/models';
import { DeleteIndividualComponent } from '../delete-individual/delete-individual.component';
import { HttpErrorResponse } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';



@Component({
  selector: 'app-list-individuals',
  templateUrl: './list-individuals.component.html',
  styleUrls: ['./list-individuals.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListIndividualsComponent implements OnInit {

  constructor(
    private individualService: IndividualService,
    private dialog: MatDialog,
    private toast: ToastrService,
    public appService: AppService
  ) { }

  displayedColumns = ['familyName', 'organization', 'location', 'actions']
  dataSource = new MatTableDataSource<Individual>()

  individuals: Individual[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;



  ngOnInit() {
    this.retrieveIndividuals()    
  }

  retrieveIndividuals() {
    this.individualService.listIndividual({}).subscribe(
      data => { this.individuals = data},
      error => { console.error() },
      () => {
        this.dataSource.data = this.individuals
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        this.dataSource.sortingDataAccessor = (item, property): string | number => {
          if (property === 'organization' && item.partyCharacteristic[0]) {
            return item.partyCharacteristic[0].value.value
          } else 
          return item[property]
        }

        // custom filter for custom table fields
        this.dataSource.filterPredicate = (data, filter) => {
          let filterValue = filter.trim()
          filterValue = filterValue.toLowerCase()  
          return (data.familyName+data.givenName).toLowerCase().includes(filterValue) || (data.location && data.location.toLowerCase().includes(filterValue)) || (data.partyCharacteristic[0] && data.partyCharacteristic[0].value.value.toLowerCase().includes(filterValue)) 
        }
      }
    )
  }


  openIndividualDeleteDialog(element: Individual) {
    const dialogRef = this.dialog.open(DeleteIndividualComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          if (result instanceof HttpErrorResponse) {
            this.toast.error("An error occurred while attempting to delete Individual")
          } else {
            this.toast.success("Individuals list is successfully updated")
            this.retrieveIndividuals()
          }
        }
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}
