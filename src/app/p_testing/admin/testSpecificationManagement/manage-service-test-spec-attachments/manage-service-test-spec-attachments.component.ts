import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AttachmentRefOrValue } from 'src/app/openApis/partyManagement/models';
import { CharacteristicSpecificationRes, ServiceTestSpecification, ServiceTestSpecificationUpdate } from 'src/app/openApis/serviceTestManagement/models';
import { ServiceTestSpecificationService } from 'src/app/openApis/serviceTestManagement/services';
import { DeleteTestSpecAttachmentComponent } from '../edit-service-test-spec/delete-test-spec-attachment/delete-test-spec-attachment.component';
import { ImportCharacteristicsFromYamlComponent } from '../edit-service-test-spec/import-characteristics-from-yaml/import-characteristics-from-yaml.component';

@Component({
  selector: 'app-manage-service-test-spec-attachments',
  templateUrl: './manage-service-test-spec-attachments.component.html',
  styleUrls: ['./manage-service-test-spec-attachments.component.scss']
})
export class ManageServiceTestSpecAttachmentsComponent implements OnInit {

  constructor(
    private testSpecService: ServiceTestSpecificationService,
    private toast: ToastrService,
    private dialog: MatDialog,
  ) { }

  @Input() serviceTestSpecInput: ServiceTestSpecification | undefined;
  @Output() serviceTestSpecOutputEvent = new EventEmitter<ServiceTestSpecification>()
  
  testSpecServiceRootUrl: string
  
  testSpec: ServiceTestSpecification
  testSpecID: string

  testType = new FormControl("preDefined")
  attachmentFilesCtrl = new FileUploadControl({listVisible: true}, FileUploadValidators.accept(['.yaml']))

  subscriptions = new Subscription()

  ngOnInit(): void {

    this.testSpecServiceRootUrl = this.testSpecService.rootUrl

    if (this.serviceTestSpecInput) { // Check if the component has an input (Editing existing Spec) or not (Designing new Spec)
      this.testSpec = this.serviceTestSpecInput
      this.testSpecID = this.testSpec.id
      if (this.testSpec.attachment.length > 1 ) { // If Editing an existing Spec and it has more than 1 attachments then testType = developerDefined
        this.testType.setValue('developerDefined')
      }
    }

    this.subscribeOnTestTypeChanged()

  }

  subscribeOnTestTypeChanged() {
    this.subscriptions = this.testType.valueChanges.subscribe( _ => {
      if (this.testType.value === "developerDefined") {
        this.attachmentFilesCtrl = new FileUploadControl({listVisible: true}, FileUploadValidators.accept(['.yaml', '.gz', 'application/gzip', 'application/x-gzip']))
      } else {
        this.attachmentFilesCtrl = new FileUploadControl({listVisible: true}, FileUploadValidators.accept(['.yaml']))
      }
    })
  }

  refreshTestSpec() {
    this.testSpecService.retrieveServiceTestSpecification({id: this.testSpecID}).subscribe(
      data => this.testSpec = data,
      error => console.error(error),
      () => {
        if (this.testSpec) {
          this.serviceTestSpecOutputEvent.emit(this.testSpec)
          if (this.testSpec.attachment.length > 1) {
            this.testType.setValue('developerDefined')
          }
        }
      }
    )
  }

  submitAttachment() {
    if (this.attachmentFilesCtrl.valid) {
      
      this.attachmentFilesCtrl.value.forEach (attachmentFile => {
        this.testSpecService.addAttachmentToServiceTestSpecification({ id: this.testSpecID, afile: attachmentFile }).subscribe(
          data => { },
          error => {
            console.error(error)
            this.toast.error("An error occurred while uploading attachment")
          },
          () => {
            this.toast.success("Attachment was successfully uploaded")
            this.refreshTestSpec()
          }
        )
      })
    
      // Asynchronously check if there is a text-typed file uploaded (Test Descriptor), and try to automatically extract the variables within {{ }}, e.g. {{ variable1 }}
      let variablesArray = []

      // Comment1: Recognized type of yaml files is '' and for py files is 'text/x-python'
      // Comment2: Interface Blob doesn't support text in TS 3.5.3 so indirect reference is made
      const yamlFile = this.attachmentFilesCtrl.value.find( yamlFile => yamlFile.type === '')
      if (yamlFile) {
        // this.attachmentFilesCtrl.value[0]['text']() //Interface Blob doesn't support text in TS 3.5.3 so indirect reference is made

        yamlFile['text']()
          .then(
            data => {
              //regular expression to identify strings inside {{ }}, and parse them omitting brackets in capture group 1
              const regex = /\{{2}([^{}]*)\}{2}/gm;
              variablesArray = Array.from(data.matchAll(regex), m => m[1].trim());
            }
          )
          .catch(
            onrejected => console.error(onrejected)
          )
          .finally(
            () => {
              if (variablesArray.length) {
                const dialogRef = this.dialog.open(ImportCharacteristicsFromYamlComponent, {
                  data: {
                    variablesArray: variablesArray
                  },
                  autoFocus: false
                })

                dialogRef.afterClosed().subscribe(
                  result => {
                    if (result) {
                      if (result !== 'no') {

                        let exportedCharacteristicsArray: CharacteristicSpecificationRes[] = []
                        variablesArray.forEach(variable => {
                          exportedCharacteristicsArray.push({
                            name: variable,
                            description: 'auto exported user variable'
                          })
                        })


                        if (result === 'override') {
                          this.testSpec.specCharacteristic = exportedCharacteristicsArray
                        }

                        if (result === 'append') {
                          this.testSpec.specCharacteristic = this.testSpec.specCharacteristic.concat(exportedCharacteristicsArray)
                        }
                      }
                    }

                    if (this.testSpec.specCharacteristic.find( char => { char.name === 'deployment_info'}) === undefined) {
                      this.testSpec.specCharacteristic.push({
                        name: "deployment_info",
                        description: "auto generated deployment information variable"
                      })
                    }

                    const updateCharacteristicObj: ServiceTestSpecificationUpdate = {
                      specCharacteristic: this.testSpec.specCharacteristic
                    }
                    
                    this.testSpecService.patchServiceTestSpecification({ id: this.testSpec.id, serviceSpecification: updateCharacteristicObj }).subscribe(
                      data => { },
                      error => { console.error(error); this.toast.error("An error occurred upon auto-exporting Test Specification Characteristics") },
                      () => {
                        this.refreshTestSpec()
                      }
                    )

                  }
                )
              }
            }
          )
      }
      this.clearAttachmentsList()
    }
  }

  clearAttachmentsList() {
    this.attachmentFilesCtrl.clear()
  }

  openAttachmentDeleteDialog(attachment: AttachmentRefOrValue) {
    const attToBeDeletedIndex = this.testSpec.attachment.findIndex(char => char.id === attachment.id)

    const newSpecAttArray: AttachmentRefOrValue[] = this.testSpec.attachment.slice()
    
    newSpecAttArray.splice(attToBeDeletedIndex, 1)

    const dialogRef = this.dialog.open(DeleteTestSpecAttachmentComponent, {
      data: {
        serviceTestSpec: this.testSpec,
        serviceTestSpecAttachmentArray: newSpecAttArray, 
        attachmentToBeDeleted: this.testSpec.attachment[attToBeDeletedIndex]
      }
    })

    dialogRef.afterClosed().subscribe (
      result => { 
        if (result){ 
          this.toast.success("Service Test Specification attachments list was successfully updated")
          this.clearAttachmentsList()
          this.refreshTestSpec()
          this.testType.value === "developerDefined"
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}
