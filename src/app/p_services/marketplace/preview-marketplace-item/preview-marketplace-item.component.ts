import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceCandidate, ServiceSpecification, ServiceSpecCharacteristicValue, ServiceSpecCharacteristic, AttachmentRef } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { RequesterService } from 'src/app/p_services/orderCheckout/services/requester.service';
import { ToastrService } from 'ngx-toastr';
import { SortingService } from 'src/app/shared/functions/sorting.service';
import { trigger } from '@angular/animations';
import { fadeIn } from 'src/app/shared/animations/animations';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ThemingService } from 'src/app/theming/theming.service';


@Component({
  selector: 'app-preview-service',
  templateUrl: './preview-marketplace-item.component.html',
  styleUrls: ['./preview-marketplace-item.component.scss'],
  animations: [ trigger('fadeIn', fadeIn()) ]

})
export class PreviewMarketplaceItemComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      serviceCandidate: ServiceCandidate
    },
    private dialogRef: MatDialogRef<PreviewMarketplaceItemComponent>,
    private specService: ServiceSpecificationService,
    private requesterService: RequesterService,
    private toastr: ToastrService,
    private sortingService: SortingService,
    public authService: AuthService,
    private themingService: ThemingService
  ) { }

  candidate: ServiceCandidate
  spec: ServiceSpecification
  specLogoRef: AttachmentRef
  specLogoUrl: string
  specServiceRootUrl: string

  displayedColumns = ['name', 'defaultValues']
  dataSourceConf  = new MatTableDataSource<ServiceSpecification>()

  dataSourceNonConf  = new MatTableDataSource<ServiceSpecification>()

  @ViewChild('sort1', {static: true}) sort1: MatSort;
  @ViewChild('sort2', {static: true}) sort2: MatSort;


  orderView = false

  ngOnInit() {
    this.specServiceRootUrl = this.specService.rootUrl

    this.candidate = this.data.serviceCandidate
    this.retrieveServiceSpec(this.data.serviceCandidate)
  }

  configurableFilterChanged(event:MatCheckboxChange) {
    if (event.checked) this.dataSourceConf.data = this.spec.serviceSpecCharacteristic.filter(spec => spec.configurable)
    else this.dataSourceConf.data = this.spec.serviceSpecCharacteristic
  }

  retrieveServiceSpec(candidate: ServiceCandidate) {
    this.specService.retrieveServiceSpecification({id: candidate.serviceSpecification.id}).subscribe(
      data => this.spec = data,
      error => console.error(error),
      () => {
        this.dataSourceConf.data = this.spec.serviceSpecCharacteristic.filter(spec => spec.configurable)
        this.dataSourceConf.sort = this.sort1
        this.dataSourceNonConf.data = this.spec.serviceSpecCharacteristic.filter(spec => !spec.configurable)
        this.dataSourceNonConf.sort = this.sort2
        
        //Check if spec has a defined logo
        this.specLogoRef = this.spec.attachment.find( att => att.name.includes('logo') )
        if (this.specLogoRef) {
          this.specLogoUrl = this.specServiceRootUrl+this.specLogoRef.url
        } else {
          this.specLogoUrl = this.themingService.getConfig().DEFAULT_SERVICE_LOGO_PATH
        }
      }
    )
  }

  closeDialog() {
      this.dialogRef.close()
  }


  placeInOrderList() {
    if (!this.requesterService.orderedSpecsList.some(el => el.id === this.spec.id)) {
      // this.requesterService.serviceSpecsCart.push(this.spec)
      
      this.requesterService.orderedSpecsList.push(this.spec)
      this.saveOrderToLocalStorage(this.spec.id)

      // this.requesterService.serviceConfigurationList.push({
      //   spec: this.spec,
      //   checked: false,
      //   specCharacteristics:  this.initCharacteristicsValue()
      // })      
      this.dialogRef.close("added_to_order_list")
    } else {
      this.toastr.warning("This Service is already in your Service Order List")
    }
  }

  saveOrderToLocalStorage(specId) {
    let orderArray = []
    orderArray = JSON.parse(localStorage.getItem('orderedSpecsList')) || []
    orderArray.push(specId)
    localStorage.setItem('orderedSpecsList', JSON.stringify(orderArray))
  }

  initCharacteristicsValue() {
    let initialCharValues: {
      name: string,
      valueType: string,
      value: ServiceSpecCharacteristicValue[]
    }[] =[]

    const configurableSpecChar = this.spec.serviceSpecCharacteristic.filter(specChar => specChar.configurable)

    configurableSpecChar.forEach( confSpecChar => {
      
      const charDefaultValueArray = confSpecChar.serviceSpecCharacteristicValue.filter( val => val.isDefault )
      
      //In case there are no Default Values assigned, initiate Default Value Array with null values
      if (charDefaultValueArray.length === 0) {charDefaultValueArray[0] = {value: {value:'' , alias:''}}}
      
      initialCharValues.push({
        name: confSpecChar.name,
        valueType: confSpecChar.valueType,
        value: charDefaultValueArray
      })
    })


    initialCharValues.sort(this.sortingService.ascStringSortingFunctionByNameProperty())

    

    return initialCharValues
  }

}
