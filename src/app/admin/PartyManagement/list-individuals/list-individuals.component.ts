import { Component, OnInit, ViewChild } from '@angular/core';
import { IndividualService } from 'src/app/openApis/PartyManagement/services';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { Individual } from 'src/app/openApis/PartyManagement/models';
import { DeleteIndividualComponent } from '../delete-individual/delete-individual.component';
import { HttpErrorResponse } from '@angular/common/http';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';



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
    private toast: ToastrService
  ) { }

  displayedColumns = ['fullName', 'organization', 'location', 'actions']
  dataSource  = new MatTableDataSource<Individual>()

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
      }
    )
  }


  openIndividualDeleteDialog(element: Individual) {
    const dialogRef = this.dialog.open(DeleteIndividualComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        console.log(result)
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
