import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceCatalog } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceCatalogService } from 'src/app/openApis/serviceCatalogManagement/services';


@Component({
  selector: 'app-delete-service-catalog',
  templateUrl: './delete-service-catalog.component.html',
  styleUrls: ['./delete-service-catalog.component.scss']
})
export class DeleteServiceCatalogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ServiceCatalog,
    private catalogService: ServiceCatalogService,
    private dialogRef: MatDialogRef<DeleteServiceCatalogComponent>
  ) { }

  ngOnInit() {
  }

  confirmDelete() { 
    this.catalogService.deleteServiceCatalog(this.data.id).subscribe(
      data => { },
      error => console.error(error),
      () => this.dialogRef.close('deleted')
    )
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
