import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ActionSpecification, RuleSpecification } from 'src/app/openApis/AssuranceServicesManagementAPI/models';
import { ActionSpecificationService, RuleSpecificationService } from 'src/app/openApis/AssuranceServicesManagementAPI/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { DeleteActionRulesComponent } from '../delete-action-rules/delete-action-rules.component';

@Component({
  selector: 'app-list-action-rules',
  templateUrl: './list-action-rules.component.html',
  styleUrls: ['./list-action-rules.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]
})
export class ListActionRulesComponent implements OnInit {

  constructor(
    private actionSpecService: ActionSpecificationService,
    private ruleSpecService: RuleSpecificationService,
    public dialog: MatDialog,
    private toast: ToastrService
  ) { }

  displayedColumns = ['name', 'description', 'eventType', 'actions']
  dataSource = new MatTableDataSource<ActionSpecification>()

  actionRules: RuleSpecification[]

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.retrieveActionRulesList()
  }

  retrieveActionRulesList() {
    this.ruleSpecService.listRuleSpecification({}).subscribe(
      data => { this.actionRules = data },
      error => console.error(error),
      () => {
        this.dataSource.data = this.actionRules
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


  openDeleteActionRulesDialog(actionRule: RuleSpecification) {
    const dialogRef = this.dialog.open(DeleteActionRulesComponent, {data: actionRule})

    dialogRef.afterClosed().subscribe(
      res => {
        if (res) {
          this.toast.success("Action rule is successfully deleted")
          this.retrieveActionRulesList()
        }
      }
    )
  }

}
