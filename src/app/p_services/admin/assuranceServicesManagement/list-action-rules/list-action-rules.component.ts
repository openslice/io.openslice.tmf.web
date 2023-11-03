import { trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { ActionSpecification, RuleSpecification } from 'src/app/openApis/assuranceServicesManagementAPI/models';
import { ActionSpecificationService, RuleSpecificationService } from 'src/app/openApis/assuranceServicesManagementAPI/services';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AppService } from 'src/app/shared/services/app.service';
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
    private toast: ToastrService,
    public appService: AppService
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
