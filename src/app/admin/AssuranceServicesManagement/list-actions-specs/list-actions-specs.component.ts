import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ActionSpecification } from 'src/app/openApis/AssuranceServicesManagementAPI/models';
import { ActionSpecificationService } from 'src/app/openApis/AssuranceServicesManagementAPI/services';
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
