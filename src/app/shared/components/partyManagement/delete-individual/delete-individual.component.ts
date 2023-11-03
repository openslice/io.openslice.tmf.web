import { Component, OnInit, Inject } from '@angular/core';
import { Individual } from 'src/app/openApis/partyManagement/models';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IndividualService } from 'src/app/openApis/partyManagement/services';

@Component({
  templateUrl: './delete-individual.component.html',
  styleUrls: ['./delete-individual.component.scss']
})
export class DeleteIndividualComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Individual,
    private dialogRef: MatDialogRef<DeleteIndividualComponent>,
    private individualService: IndividualService

  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    // this.dialogRef.close('deleted')
    this.individualService.deleteIndividual(this.data.id).subscribe(
      data => {},
      error => {this.dialogRef.close(error); console.error(error)},
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
