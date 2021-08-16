import { LCMRuleSpecificationUpdate } from './../../../openApis/LcmRuleSpecificationAPI/models/lcmrule-specification-update';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceSpecCharacteristic, ServiceSpecification } from 'src/app/openApis/ServiceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/ServiceCatalogManagement/services';
import { BlocklyJavaService } from '../services/blockly-java.service';
import { LCMRuleSpecification, LCMRuleSpecificationCreate, ServiceSpecificationRef } from 'src/app/openApis/LcmRuleSpecificationAPI/models';
import { LcmRuleSpecificationService } from 'src/app/openApis/LcmRuleSpecificationAPI/services';
import { ToastrService } from 'ngx-toastr';


//Imported code from:
//https://github.com/guizos/blockly_java_edx


//for java components see also src/assets/blockly/custom_java_block.js
//for openslice components see also src/assets/blockly/custom_block.js
//create blocks visually: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html

declare var Blockly: any;

@Component({
  selector: 'app-service-rule-design',
  templateUrl: './service-rule-design.component.html',
  styleUrls: ['./service-rule-design.component.scss']
})
export class ServiceRuleDesignComponent implements OnInit {

  title: string;
  programName: string = '';
  workspace: any;
  textVariable = 'temp';
  listVariable = 'temp';
  blocklyJavaService: BlocklyJavaService;


  lcmRuleSpecID: string;
  lcmRuleSpec: LCMRuleSpecification;
  specID: string;
  spec: ServiceSpecification;

  editForm =  new FormGroup({
    description: new FormControl(),
    lcmphase: new FormControl("PRE_PROVISION"),
    name: new FormControl(),
    version: new FormControl("0.1.0")
  })


  lcmphases = ["PRE_PROVISION", "AFTER_ACTIVATION", "SUPERVISION", "AFTER_DEACTIVATION"];


  newLCMRuleSpecification = false;

  charsListInteger: ServiceSpecCharacteristic[];
  charsListSmallint: ServiceSpecCharacteristic[];
  charsListLongint: ServiceSpecCharacteristic[];
  charsListEnum: ServiceSpecCharacteristic[];
  charsListFloat: ServiceSpecCharacteristic[];
  charsListBinary: ServiceSpecCharacteristic[];
  charsListBoolean: ServiceSpecCharacteristic[];
  charsListArray: ServiceSpecCharacteristic[];
  charsListSet: ServiceSpecCharacteristic[];
  charsListText: ServiceSpecCharacteristic[];
  charsListLongText: ServiceSpecCharacteristic[];
  charsListTimestamp: ServiceSpecCharacteristic[];
  generatedCode: string;

  constructor(
    private activatedRoute: ActivatedRoute,    
    private router: Router,
    bs: BlocklyJavaService,    
    private toast: ToastrService,
    private lcmRulesService: LcmRuleSpecificationService,
    private specService: ServiceSpecificationService) {
      
    this.blocklyJavaService = bs;
    this.title = 'Create LCM Rule';
    this.activatedRoute.params.subscribe(params => {
      this.programName = params['programName'];
      

      console.log(
        'creating/editing the program - '
      );
      
      console.log( this.activatedRoute.snapshot.queryParams['specid']  );
    });



    }


    ngOnInit() {

      this.workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        scrollbars: true
      });



      if (this.activatedRoute.snapshot.params.id) 
      {
        this.lcmRuleSpecID = this.activatedRoute.snapshot.params.id
        this.retrieveLCMRuleSpec();
   
      }
       else {
        this.newLCMRuleSpecification = true;
        var serviceSpecsList: ServiceSpecificationRef[];
        this.lcmRuleSpec = {
          name: 'new rulespec',
          description: 'new description',
          serviceSpecs: serviceSpecsList
        };
        
        this.editForm.patchValue(this.lcmRuleSpec)
        this.editForm.markAsPristine()
      }

      
      if (this.activatedRoute.snapshot.queryParams['specid']){
        this.specID = this.activatedRoute.snapshot.queryParams['specid']; 
        this.blocklyJavaService.createJava(this.workspace, Blockly);
        this.createOpensliceJava(this.workspace, Blockly);       
        this.retrieveServiceSpec();        
      }

      
  
      // if (this.program.xmlData) {
      //   this.workspace.clear();
      //   Blockly.Xml.domToWorkspace(
      //     Blockly.Xml.textToDom(this.program.xmlData),
      //     this.workspace
      //   );
      // }
  
      this.workspace.addChangeListener(() => {
        // var code = Blockly.JavaScript.workspaceToCode(this.workspace);
        // console.log(code);
  
        // var code2 = Blockly.Xml.domToText(
        //   Blockly.Xml.workspaceToDom(this.workspace)
        // );
        // console.log(code2);
  
        var code3 = Blockly.Java.workspaceToCode(this.workspace);
        console.log(code3)
        this.generatedCode = code3;
        this.lcmRuleSpec.code = code3;
        
      });
  
  
    }
  
    
    myFirstButtonPressed(ws: any){
      Blockly.Variables.createVariableButtonHandler( ws, null, 'String');
      //Blockly.Variables.createVariable( ws, null, 'panda');
    }
  
  
    retrieveServiceSpec() {
      this.specService.retrieveServiceSpecification({id: this.specID}).subscribe(
        data => this.spec = data,
        error => console.error(error),
        () => {
          
  

          // valueTypes = ['INTEGER', '', '', 'FLOAT', 'BINARY', 'BOOLEAN', 'ARRAY', 'SET', 'TEXT', 'LONGTEXT', 'ENUM', 'TIMESTAMP']
          //populate Specification Characteristic Panel Info
          // filter Spec Characteristic that does not have defined Value Type (parent spec char)
          this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType)
          // this.dataSource.paginator = this.paginator;
          this.charsListInteger= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'INTEGER');
          this.charsListSmallint= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'SMALLINT');
          this.charsListLongint= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'LONGINT');
          this.charsListEnum= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'ENUM');
          this.charsListFloat= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'FLOAT');
          this.charsListBinary= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'BINARY');
          this.charsListBoolean= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'BOOLEAN');
          this.charsListArray= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'ARRAY');
          this.charsListSet= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'SET');
          this.charsListText= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'TEXT');
          this.charsListLongText= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'LONGTEXT');
          this.charsListTimestamp= this.spec.serviceSpecCharacteristic.filter(specCharacteristic => specCharacteristic.valueType == 'TIMESTAMP');

  
          this.workspace.charsListText = this.charsListText;
          this.workspace.charsListText = this.workspace.charsListText.concat( this.charsListLongText );
          
          this.workspace.charsListNumber = this.charsListSmallint;
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListEnum );
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListInteger );
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListLongint );
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListFloat );

          this.workspace.charsListSet = this.charsListSet;

          this.workspace.charsListBoolean = this.charsListBoolean;
          

          this.workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_TEXT', this.charvarsTextFunction );
          this.workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_NUM', this.charvarsNumberFunction );
          this.workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_BOOL', this.charvarsBoolFunction);
          this.workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_SET', this.charvarsSetFunction);
          this.title = 'Create LCM Rule for ' + this.spec.name;
          if (this.newLCMRuleSpecification ){
            var serviceSpecRef: ServiceSpecificationRef ;            
            var serviceSpecsList: ServiceSpecificationRef[] = [];
            serviceSpecRef = { id: this.spec.id, name: this.spec.name } ;
            serviceSpecsList.push(serviceSpecRef);         
            this.lcmRuleSpec.serviceSpecs = serviceSpecsList;   
            this.lcmRuleSpec.name = "LCM Rule " +  this.spec.name;
            this.lcmRuleSpec.description = "LCM Rule for specification " +  this.spec.name;
            
            this.editForm.patchValue(this.lcmRuleSpec)
            this.editForm.markAsPristine()  
          } 

        }
      )
    }


    
    retrieveLCMRuleSpec() {
    this.lcmRulesService.retrieveLCMRuleSpecification ({id: this.lcmRuleSpecID}).subscribe(
      data => this.lcmRuleSpec = data,
      error => console.error(error),
      () => {
        //populate General Panel Info

        if (this.lcmRuleSpec.content ) {
          this.workspace.clear();
          Blockly.Xml.domToWorkspace(
            Blockly.Xml.textToDom(this.lcmRuleSpec.content),
            this.workspace
          );
        }
        
        this.editForm.patchValue(this.lcmRuleSpec)
        this.editForm.markAsPristine()


        //populate Service Descriptor Panel Info
        // this.retrieveServiceDesriptor(this.spec.id)
      }
    )
  }
  
      /**
     * Construct the blocks required by the flyout for the colours category.
     * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
     * @return {!Array.<!Element>} Array of XML block elements.
     */
       charvarsTextFunction = function(workspace: any) {
        var xmlList = [];            
        var chars: ServiceSpecCharacteristic[] = workspace.charsListText;

        if (Blockly.Blocks['getcharval_string']) {
          for (var i = 0; i < chars.length; i++) {
            var blockText = '<block type="getcharval_string">' +
            '<field name="AVALUE">' + chars[i].name + '</field>' +
                '</block>';
            var block = Blockly.Xml.textToDom(blockText);
            xmlList.push(block);
          }
        }
    
        if (Blockly.Blocks['setcharval_string']) {
          for (var i = 0; i < chars.length; i++) {
            var blockText = '<block type="setcharval_string">' +
            '<field name="NAMELBL">' + chars[i].name + '</field>' +
                '</block>';
            var block = Blockly.Xml.textToDom(blockText);
            xmlList.push(block);
          }
        }
    
        return xmlList;
      };
  
  
  
      charvarsNumberFunction = function(workspace: any) {
        // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
        
        var charsList: ServiceSpecCharacteristic[] = workspace.charsListNumber;
        
        var xmlList = [];
        
        
        if (Blockly.Blocks['getcharval_number']) {
          for (var i = 0; i < charsList.length; i++) {
            var blockText = '<block type="getcharval_number">' +
            '<field name="AVALUE">' + charsList[i].name + '</field>' +
                '</block>';
            var block = Blockly.Xml.textToDom(blockText);
            xmlList.push(block);
          }
        }
    
        if (Blockly.Blocks['setcharval_number']) {
          for (var i = 0; i < charsList.length; i++) {
            var blockText = '<block type="setcharval_number">' +
            '<field name="NAMELBL">' + charsList[i].name + '</field>' +
                '</block>';
            var block = Blockly.Xml.textToDom(blockText);
            xmlList.push(block);
          }
        }
    
        return xmlList;
    };
  
    
    charvarsBoolFunction = function(workspace: any) {
      // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
      var charsList: ServiceSpecCharacteristic[] = workspace.charsListBoolean;
      var xmlList = [];
      
      
      if (Blockly.Blocks['getcharval_bool']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="getcharval_bool">' +
          '<field name="AVALUE">' + charsList[i].name + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_bool']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_bool">' +
          '<field name="NAMELBL">' + charsList[i].name + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      return xmlList;
    };
  
    
    charvarsSetFunction = function(workspace: any) {
      // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
      
      var charsList: ServiceSpecCharacteristic[] = workspace.charsListSet;
      var xmlList = [];
      
      
      if (Blockly.Blocks['getcharval_set']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="getcharval_set">' +
          '<field name="AVALUE">' + charsList[i].name + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_set']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_set">' +
          '<field name="NAMELBL">' + charsList[i].name + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
  
      if (Blockly.Blocks['setcharval_sadd']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_sadd">' +
          '<field name="NAMELBL">' + charsList[i].name + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_sremove']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_sremove">' +
          '<field name="NAMELBL">' + charsList[i].name + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      
  
      return xmlList;
    };
  
    createOpensliceJava(workspace: any, Blockly: any) {
  
  
      workspace.registerButtonCallback( 'CREATE_STRING_VARIABLE' , this.myFirstButtonPressed );
      // workspace.createVariable('Area of Service: Region specification', 'set');
      // workspace.createVariable('Region panda1', 'Panda', null);
      // workspace.createVariable('Region Panda2', 'Panda', null);
      // workspace.createVariable('Bandwidth', 'int');
      //workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_TEXT', this.charvarsText(workspace) );
      // workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_NUM', this.charvarsNum);
      // workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_BOOL', this.charvarsBool);
      // workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_SET', this.charvarsSet);
      
  
  
      Blockly.Java['changecharacteristicvalue'] = function (block: any) {
        // Print statement.
        var argument0 = Blockly.Java.valueToCode(block, 'spec',
        Blockly.Java.ORDER_NONE) || '""';
        var argument1 = Blockly.Java.valueToCode(block, 'value',
          Blockly.Java.ORDER_NONE) || '""';
          console.log( argument0 );
        return 'changeCharacteristicValue(' + argument0 + ', ' + argument1 + ');\n';
      };
  
  
      Blockly.Java['getcharacteristicvalue'] = function(block: any) {
        var dropdown_name = block.getFieldValue('NAME');
        var comment_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharacteristicValue(' + argument0 + '); // ' + comment_name;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharacteristicvalue'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAME');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'NAME',
          Blockly.Java.ORDER_NONE) || '""';
          
        return 'setcharacteristicvalue(' + argument0 + ', ' + argument1 + ');\n';
      };
  
  
      Blockly.Java['getcharval_string'] = function(block: any) {
        var dropdown_name = block.getFieldValue('AVALUE');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharVal(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_string'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';
          
        return 'setCharVall(' + argument0 + ', ' + argument1 + ');\n';
      };


      
      Blockly.Java['getcharval_number'] = function(block: any) {
        var dropdown_name = block.getFieldValue('AVALUE');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharVal(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_number'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';
          
        return 'setCharVal(' + argument0 + ', ' + argument1 + ');\n';
      };
  
  
      Blockly.Java['getcharval_set'] = function(block: any) {
        var dropdown_name = block.getFieldValue('AVALUE');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharVal(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_set'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';
          
        return 'setCharVal(' + argument0 + ', ' + argument1 + ');\n';
      };
  
      
      Blockly.Java['logic_set_contains_strings'] = function (block: { getFieldValue: (arg0: string) => string }) {
        // Comparison operator strings.
        var OPERATORS: { [index: string]: string } = {
          'EQ': '.equals'
        };
  
        var operator = OPERATORS[block.getFieldValue('OP')];
        var order = (operator == '==') ?
          Blockly.Java.ORDER_EQUALITY : Blockly.Java.ORDER_RELATIONAL;
        var argument0 = Blockly.Java.valueToCode(block, 'A', order) || '0';
        var argument1 = Blockly.Java.valueToCode(block, 'B', order) || '0';
        var code = argument0 + operator + '(' + argument1 + ')==true';
        return [code, order];
      };
  
      Blockly.Java['osm_nsd_config'] = function(block: any) {
        var NSDID = Blockly.Java.valueToCode(block, 'NSDID',
          Blockly.Java.ORDER_NONE) || '""';
          var VIMID = Blockly.Java.valueToCode(block, 'VIMID',
            Blockly.Java.ORDER_NONE) || '""';
            var config = Blockly.Java.valueToCode(block, 'config',
              Blockly.Java.ORDER_NONE) || '""';
        var code = '{ "nsdId": '+NSDID+', "vimAccountId": '+VIMID+' , '+config+' } ';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
    
  
      Blockly.Java['osm_nsd_config_detailed'] = function(block: any) {
        var NSDID = Blockly.Java.valueToCode(block, 'NSDID',
          Blockly.Java.ORDER_NONE) || '""';
        var VIMID = Blockly.Java.valueToCode(block, 'VIMID',
            Blockly.Java.ORDER_NONE) || '""';
            
        var VNF = Blockly.Java.valueToCode(block, 'VNF',
        Blockly.Java.ORDER_NONE)  || '[]';
        
        var VLD = Blockly.Java.valueToCode(block, 'VLD',
        Blockly.Java.ORDER_NONE) || '[]';

        var additionalParamsForVnf = Blockly.Java.valueToCode(block, 'additionalParamsForVnf',
        Blockly.Java.ORDER_NONE) || '[]';

        var osmconfig: any = { nsdId:'zzz' };

        osmconfig.nsdId = NSDID.replaceAll('"', '');
        osmconfig.vimAccountId = VIMID.replaceAll('"', '');
        osmconfig.vnf = JSON.parse(VNF) ;
        osmconfig.vld = [];
        osmconfig.additionalParamsForVnf = [];

        var code =  JSON.stringify( osmconfig );
        
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
    
  
      
      Blockly.Java['osm_nsd_config_vnf'] = function(block: any) {
        var membervnfindex = Blockly.Java.valueToCode(block, 'member-vnf-index',
          Blockly.Java.ORDER_NONE) || '""';
        var vdu = Blockly.Java.valueToCode(block, 'vdu',
            Blockly.Java.ORDER_NONE) || '""';
            
        var code: any = { "member-vnf-index":membervnfindex.replaceAll('"', '')  };
        vdu = vdu.replace('"', '');
        vdu = vdu.substring(0, vdu.length-1);
        code.vdu = JSON.parse( vdu  ) ;
        //var code = '{ "member-vnf-index": '+membervnfindex+', "vdu": '+ vdu + ' } ';
        code =  JSON.stringify( code );
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
    


      Blockly.Java['variables_get_panda'] = function(block: any) {
        console.log('Variable getter panda')
        var VAR_NAME = Blockly.Java.valueToCode(block, 'FIELD_NAME',
          Blockly.Java.ORDER_NONE) || '""';
        var code = '{ "nsdId": '+VAR_NAME+' } ';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      
      
      Blockly.Java['variables_set_panda'] = function(block: any) {
        console.log('Variable setter panda')
        var VAR_NAME = 'test';
        var code = '{ "nsdId": '+VAR_NAME+' } ';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
  
      
  
  Blockly.Java['variables_get'] = function(block: any) {
    // Variable getter.
        console.log('Variable getter CUSTOM')
    var code = Blockly.Java.nameDB_.getName(block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    return [code, Blockly.Java.ORDER_ATOMIC];
  };
  
  Blockly.Java['variables_set'] = function(block: any) {
    // Variable setter.
        console.log('Variable setter CUSTOM')
    var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
    var varName = Blockly.Java.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName + ' = ' + argument0 + ';\n';
  };
  
    }
  
  
   
    
   
  
  
    saveProgram(): void {
      // this.program.xmlData = Blockly.Xml.domToText(
      //   Blockly.Xml.workspaceToDom(this.workspace)
      // );
      console.log('saving the program - ', JSON.stringify(this.lcmRuleSpec));
      //this.programService.upsertOne(this.program);
      //this.router.navigate(['listProgram']);

      const updateObj: LCMRuleSpecificationUpdate | LCMRuleSpecificationCreate = {
        content: Blockly.Xml.domToText( Blockly.Xml.workspaceToDom(this.workspace) ),
        code: this.lcmRuleSpec.code,
        description: this.editForm.value.description,
        name: this.editForm.value.name,
        lcmrulephase: this.editForm.value.lcmphase ,
        serviceSpecs: this.lcmRuleSpec.serviceSpecs
      }

      if (this.newLCMRuleSpecification) {
        this.lcmRulesService .createLCMRuleSpecification(updateObj).subscribe(
          data => { this.lcmRuleSpec = data },
          error => console.error(error),
          () => { 
            this.newLCMRuleSpecification = false
            this.toast.success("Service Specification was successfully created") 
            
          }
        )
      } else
      {
        this.lcmRulesService.patchLCMRuleSpecification({id: this.lcmRuleSpec.id, body: updateObj}).subscribe(
          data => console.log(data),
          error => console.error(error),
          () => { 
            this.toast.success("Service Specification was successfully updated");
            
          }
        )
      }






    }
  
    addBlock(): void {
  
      this.workspace;
     
      // console.log('saving the program - ', JSON.stringify(this.program));
    }

    
    cancelProgram(): void {
  
     
      console.log('cancelProgram the program - ' );
    }
    
  }

