import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ActionSpecification } from 'src/app/openApis/assuranceServicesManagementAPI/models';
import { ActionSpecificationService } from 'src/app/openApis/assuranceServicesManagementAPI/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { DeleteActionSpecComponent } from '../delete-action-spec/delete-action-spec.component';
import { EditActionSpecsComponent } from '../edit-action-specs/edit-action-specs.component';

@Component({
  selector: 'app-list-actions',
  templateUrl: './list-actions-specs.component.html',
  styleUrls: ['./list-actions-specs.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListActionsSpecsComponent implements OnInit {

  constructor(
    private actionSpecService: ActionSpecificationService,
    public dialog: MatDialog,
    private toast: ToastrService
  ) { }

  displayedColumns = ['name', 'description', 'actions']
  dataSource = new MatTableDataSource<ActionSpecification>()

  actions: ActionSpecification[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.retrieveActionsList()
  }

  retrieveActionsList() {
    this.actionSpecService.listActionSpecification({}).subscribe(
      data => { this.actions = data },
      error => console.error(error),
      () => {
        this.dataSource.data = this.actions
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
      }
    )
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }


  openDeleteActionDialog(action: ActionSpecification) {
    const dialogRef = this.dialog.open(DeleteActionSpecComponent, {data: action})

    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.toast.success("Action is successfully deleted")
          this.retrieveActionsList()
        }
      }
    )
  }

  openUpdateActionDialog(element: ActionSpecification) {
    const dialogRef = this.dialog.open(EditActionSpecsComponent, {data: element})

    dialogRef.afterClosed().subscribe (
      result => {
        if (result) {
          this.toast.success("Action list is successfully updated")
          this.retrieveActionsList()
        }
      }
    )
  }

}
