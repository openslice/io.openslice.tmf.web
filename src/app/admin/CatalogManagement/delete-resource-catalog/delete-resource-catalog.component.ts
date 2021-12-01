import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ResourceCatalog } from 'src/app/openApis/ResourceCatalogManagement/models';
import { ResourceCatalogService } from 'src/app/openApis/ResourceCatalogManagement/services';


@Component({
  selector: 'app-delete-service-catalog',
  templateUrl: './delete-resource-catalog.component.html',
  styleUrls: ['./delete-resource-catalog.component.scss']
})
export class DeleteResourceCatalogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceCatalog,
    private catalogService: ResourceCatalogService,
    private dialogRef: MatDialogRef<DeleteResourceCatalogComponent>
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    this.catalogService.deleteResourceCatalog(this.data.id).subscribe(
      data => console.log(data),
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
