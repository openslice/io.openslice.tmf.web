import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@Component({
  selector: 'app-import-characteristics-from-yaml',
  templateUrl: './import-characteristics-from-yaml.component.html',
  styleUrls: ['./import-characteristics-from-yaml.component.scss']
})
export class ImportCharacteristicsFromYamlComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      variablesArray: string[]
    },
    private dialogRef: MatDialogRef<ImportCharacteristicsFromYamlComponent>,
  ) { }

  ngOnInit() {
  }

  closeDialog(dialogResult: 'no' | 'override' | 'append') {
    this.dialogRef.close(dialogResult)
  }

}
