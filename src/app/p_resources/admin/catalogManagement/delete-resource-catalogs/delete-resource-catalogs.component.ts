import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResourceCatalog } from 'src/app/openApis/resourceCatalogManagement/models';
import { ResourceCatalogService } from 'src/app/openApis/resourceCatalogManagement/services';


@Component({
  selector: 'app-delete-resource-catalog',
  templateUrl: './delete-resource-catalogs.component.html',
  styleUrls: ['./delete-resource-catalogs.component.scss']
})
export class DeleteResourceCatalogsComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ResourceCatalog,
    private catalogService: ResourceCatalogService,
    private dialogRef: MatDialogRef<DeleteResourceCatalogsComponent>
  ) { }

  ngOnInit() {
  }

  confirmDelete() {
    this.catalogService.deleteResourceCatalog(this.data.id).subscribe(
      data => {},
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
