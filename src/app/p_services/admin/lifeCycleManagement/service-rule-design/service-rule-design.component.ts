import { ResourceSpecificationRef } from 'src/app/openApis/serviceCatalogManagement/models/resource-specification-ref';
import { LCMRuleSpecificationUpdate } from 'src/app/openApis/lcmRuleSpecificationAPI/models/lcmrule-specification-update';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceSpecCharacteristic, ServiceSpecification, ServiceSpecRelationship } from 'src/app/openApis/serviceCatalogManagement/models';
import { ServiceSpecificationService } from 'src/app/openApis/serviceCatalogManagement/services';
import { BlocklyJavaService } from '../services/blockly-java.service';
import { LCMRuleSpecification, LCMRuleSpecificationCreate, ServiceSpecificationRef } from 'src/app/openApis/lcmRuleSpecificationAPI/models';
import { LcmRuleSpecificationService } from 'src/app/openApis/lcmRuleSpecificationAPI/services';
import { ToastrService } from 'ngx-toastr';
import { ServiceOrderCreate } from 'src/app/openApis/serviceOrderingManagement/models/service-order-create';
import { ServiceOrderItem } from 'src/app/openApis/serviceOrderingManagement/models/service-order-item';


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
    lcmrulephase: new FormControl("PRE_PROVISION"),
    name: new FormControl(),
    priority: new FormControl("0"),
    version: new FormControl("0.1.0")
  })


  lcmphases = ["PRE_PROVISION", "AFTER_ACTIVATION", "SUPERVISION", "AFTER_DEACTIVATION", "CREATION"];


  newLCMRuleSpecification = false;

  charsListAllSpecs: ServiceSpecCharacteristic[];
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
  serviceSpecRel: ServiceSpecRelationship[];
  resourceserviceSpecRef: ResourceSpecificationRef[];
          
  generatedCode: string;
  blocklyCode: string;

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

      localStorage.setItem('previous_navigation_state', 'lcm_tab' )

      this.workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        trashcan: true,
        scrollbars: true
      });


      if (this.activatedRoute.snapshot.queryParams['specid']){
        this.specID = this.activatedRoute.snapshot.queryParams['specid']; 
        this.blocklyJavaService.createJava(this.workspace, Blockly);
        this.createOpensliceJava(this.workspace, Blockly);       
        this.retrieveServiceSpec();        
      } else {
        this.initializeLCMRuleSpec();
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

        this.blocklyCode = Blockly.Xml.domToText( Blockly.Xml.workspaceToDom(this.workspace) );
        
      });
  
  
    }
  
    initializeLCMRuleSpec() {
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
          
          this.workspace.charsListAllSpecs = this.spec.serviceSpecCharacteristic;
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

          this.serviceSpecRel= this.spec.serviceSpecRelationship;
          this.workspace.serviceSpecRel = this.serviceSpecRel;

          

          this.resourceserviceSpecRef= this.spec.resourceSpecification;
          this.workspace.resourceserviceSpecRef = this.resourceserviceSpecRef;

          this.workspace.charsListText = this.charsListText;
          this.workspace.charsListText = this.workspace.charsListText.concat( this.charsListLongText );
          
          this.workspace.charsListNumber = this.charsListSmallint;
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListEnum );
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListInteger );
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListLongint );
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListFloat );
          this.workspace.charsListNumber = this.workspace.charsListNumber.concat( this.charsListBinary );

          this.workspace.charsListSet = this.charsListSet;
          this.workspace.charsListSet = this.workspace.charsListSet.concat( this.charsListArray );

          this.workspace.charsListBoolean = this.charsListBoolean;



          this.charvarsAllFunction(this.workspace); //calling this function here causes a preloading of the blocks in the model in a synchronous manner. Asynchronously it is recalled later in the blockly toolbar
          this.workspace.registerToolboxCategoryCallback( 'SPECCHARALLVARS', this.charvarsAllFunction);
          this.workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_TEXT', this.charvarsTextFunction );
          this.workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_NUM', this.charvarsNumberFunction );
          this.workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_BOOL', this.charvarsBoolFunction);
          this.workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_SET', this.charvarsSetFunction);
          this.workspace.registerToolboxCategoryCallback( 'SPECSERVICE_RELS', this.serviceSpecRelsFunction);
          this.workspace.registerToolboxCategoryCallback( 'SPECRESOURCE_RELS', this.resourceSpecRelsFunction);
          
          
          this.title = 'Create LCM Rule for ' + this.spec.name;

          //the spec is loaded, so proceed to load the LCM Rule spec
          this.initializeLCMRuleSpec();



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
    charvarsAllFunction = function(workspace: any) {
        var xmlList = [];            
        var chars: ServiceSpecCharacteristic[] = workspace.charsListAllSpecs ;

        var options = [];

        for (var i = 0; i < chars.length; i++) {
          options.push([ chars[i].name, chars[i].name ]);
        }

        var sortedArray: string[] = options.sort((n1,n2) => {
            if (n1 > n2) {
                return 1;
            }
        
            if (n1 < n2) {
                return -1;
            }
        
            return 0;
        });

        // dynamically create here a block! Ensure that the equivalent java also exis
        Blockly.Blocks['getcharacteristicvalueAsString'] = {
          init: function() {
            this.appendDummyInput()
                .appendField("Get Value as String", "TXTLBL")
                .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL")
                .appendField(new Blockly.FieldDropdown( sortedArray ), "OPTIONEDVALUE");
            
            this.setOutput(true, 'String');
            this.setColour(160);
        this.setTooltip("");
        this.setHelpUrl("");
          }
        };

      
        if (Blockly.Blocks['getcharacteristicvalueAsString']) {

            var blockText = '<block type="getcharacteristicvalueAsString">' + '</block>';
            var block = Blockly.Xml.textToDom(blockText);
            xmlList.push(block);
        }    

        blockText = '<block type="computeVariable"></block>';
        block = Blockly.Xml.textToDom(blockText);
        xmlList.push(block);   
    
        return xmlList;
    };
      /**
     * Construct the blocks required by the flyout for the colours category.
     * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
     * @return {!Array.<!Element>} Array of XML block elements.
     */
       charvarsTextFunction = function(workspace: any) {
        var xmlList = [];            
        var chars: ServiceSpecCharacteristic[] = workspace.charsListText;

        if (Blockly.Blocks['getcharval_string_type']) {
          for (var i = 0; i < chars.length; i++) {
            var blockText = '<block type="getcharval_string_type">' +
            '<field name="AVALUE">' + chars[i].name + '</field>' +
                '</block>';
            var block = Blockly.Xml.textToDom(blockText);
            xmlList.push(block);
          }
        }
    
        blockText = '<block type="computeVariable"></block>';
        block = Blockly.Xml.textToDom(blockText);
        xmlList.push(block);   

        if (Blockly.Blocks['setcharval_string_type']) {
          for (var i = 0; i < chars.length; i++) {
            var blockText = '<block type="setcharval_string_type">' +
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
    
        blockText = '<block type="computeVariable"></block>';
        block = Blockly.Xml.textToDom(blockText);
        xmlList.push(block);   


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
      
      
      if (Blockly.Blocks['getcharval_bool_type']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="getcharval_bool_type">' +
          '<field name="AVALUE">' + charsList[i].name + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_bool_type']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_bool_type">' +
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
      
      
      if (Blockly.Blocks['getcharval_set_type']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="getcharval_set_type">' +
          '<field name="AVALUE">' + charsList[i].name + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_set_type']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_set_type">' +
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
  
    
 /**
     * Construct the blocks required by the flyout for the colours category.
     * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
     * @return {!Array.<!Element>} Array of XML block elements.
     */
  serviceSpecRelsFunction = function(workspace: any) {
    var xmlList = [];            
    var chars: ServiceSpecRelationship[] = workspace.serviceSpecRel;

    if (Blockly.Blocks['getServiceRefName']) {
      for (var i = 0; i < chars.length; i++) {
        var blockText = '<block type="getServiceRefName">' +
        '<field name="AVALUE">' + chars[i].name + '</field>' +
            '</block>';
        var block = Blockly.Xml.textToDom(blockText);
        xmlList.push(block);


      }
    }

    if (Blockly.Blocks['getServiceRefProps']) {
      for (var i = 0; i < chars.length; i++) {
       
        var blockText = '<block type="getServiceRefProps">' +
        '<field name="AVALUE">' + chars[i].name + '</field>' +
            '</block>';
        var block = Blockly.Xml.textToDom(blockText);
        xmlList.push(block);

      }
    }

    blockText = '<block type="createServiceRefIf"></block>';
    block = Blockly.Xml.textToDom(blockText);
    xmlList.push(block);   

     
    

    return xmlList;
  };

  
     /**
     * Construct the blocks required by the flyout for the colours category.
     * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
     * @return {!Array.<!Element>} Array of XML block elements.
     */
      resourceSpecRelsFunction = function(workspace: any) {
    var xmlList = [];            
    var chars: ResourceSpecificationRef[] = workspace.resourceserviceSpecRef;

    if (Blockly.Blocks['getResourceRefName']) {
      for (var i = 0; i < chars.length; i++) {
        var blockText = '<block type="getResourceRefName">' +
        '<field name="AVALUE">' + chars[i].name + '</field>' +
            '</block>';
        var block = Blockly.Xml.textToDom(blockText);
        xmlList.push(block);
      }
    }

    blockText = '<block type="createresourcewhen"></block>';
    block = Blockly.Xml.textToDom(blockText);
    xmlList.push(block);   

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
        return 'changeCharacteristicValue(' + argument0 + ', ' + argument1 + ')';
      };
  
  
      Blockly.Java['getcharacteristicvalueAsString'] = function(block: any) {
        var dropdown_name = block.getFieldValue('OPTIONEDVALUE');
        var comment_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharValAsString(' + argument0 + ')';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharacteristicvalue'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAME');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'NAME',
          Blockly.Java.ORDER_NONE) || '""';
          
        return 'setcharacteristicvalue(' + argument0 + ', ' + argument1 + ')';
      };
  
  
      Blockly.Java['getcharval_string_type'] = function(block: any) {
        var dropdown_name = block.getFieldValue('AVALUE');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharValFromStringType(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_string_type'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';
          
        var code: String =  'setCharValFromStringType(' + argument0 + ', ' + argument1 + ');\n';
        return code;
      };


      
      Blockly.Java['getcharval_number'] = function(block: any) {
        var dropdown_name = block.getFieldValue('AVALUE');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharValNumber(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_number'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';
          
        return 'setCharValNumber(' + argument0 + ', ' + argument1 + ');\n';
      };
  

      
      Blockly.Java['getcharval_bool_type'] = function(block: any) {
        var dropdown_name = block.getFieldValue('AVALUE');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharValFromBooleanType(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_bool_type'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';
          
        var code: String =  'setCharValFromBooleanType(' + argument0 + ', ' + argument1 + ');\n';
        return code;
      };
  
      Blockly.Java['getcharval_set_type'] = function(block: any) {
        var dropdown_name = block.getFieldValue('AVALUE');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getCharValFromSetType(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_set_type'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';

        //argument1  is an array of Strings, usually from param_value_tuple

        //we must transform here the key value array to a json object with atributes and values
        var additionalParamsAsObject= [];
        var dd = JSON.parse( argument1 );
        dd.forEach( e => {
        
          var element = JSON.parse( e); //each element is a json String which describes the key value element
          var ename = element.paramname;
          var evalue = element.paramvalue;
          var newelem = { value:"", alias: "" };
          newelem.alias = ename;
          newelem.value = evalue;
          additionalParamsAsObject.push( newelem );
          console.log('Variable additionalParams newelem = ' + newelem );
        });
          
        var  a1 =  JSON.stringify( additionalParamsAsObject, null );
        a1 = '"' + textEscape (a1) + '"';
        /**
         * it generates for example:  
         * setCharValFromSetType("cirros_2vnf_nsd::Primitive::fsetup", 
         * "[{\"value\":\"1\",\"alias\":\"member_vnf_index\"},{\"value\":\"fsetup\",\"alias\":\"primitive\"},{\"value\":\"{      \\\"tvg\\\": {         \\\"ip\\\": \\\"\\\",         \\\"channel1\\\": {             \\\"mode\\\": \\\"0\\\"         }     } }\",\"alias\":\"confjson\"}]");
         * ); 
         */
        
        return 'setCharValFromSetType(' + argument0 + ', ' + a1 + ');\n';
      };
  
      
      Blockly.Java['logic_set_contains_string'] = function (block: { getFieldValue: (arg0: string) => string }) {
        

        var argument0 = Blockly.Java.valueToCode(block, 'A', Blockly.Java.ORDER_NONE) || '0';
        var argument1 = Blockly.Java.valueToCode(block, 'B', Blockly.Java.ORDER_NONE) || '0';
        //var code = argument0 + operator + '(' + argument1 + ')==true';
        //argument1 = 'new ArrayList<>( Arrays. asList("London", "Tokyo", "New York"))'
        var code = 'checkIfSetContainsValue(' + argument0 + ', ' + argument1 + ')';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };


      
      Blockly.Java['so_log_string'] = function (block: any) {
        // Print statement.
        
        var argument0 = Blockly.Java.valueToCode(block, 'txtlog',
              Blockly.Java.ORDER_NONE) || null;
          
        var code: String =  'logtext(' + argument0 + ');\n';
        return code;
      };

      
  
      Blockly.Java['osm_nsd_config'] = function(block: any) {
        var NSDID = Blockly.Java.valueToCode(block, 'NSDID',
          Blockly.Java.ORDER_NONE) || '""';
        var VIMID = Blockly.Java.valueToCode(block, 'VIMID',
            Blockly.Java.ORDER_NONE) || '""';
        var config = Blockly.Java.valueToCode(block, 'config',
              Blockly.Java.ORDER_NONE) || null;
        
        var osmconfig: any = { nsdId:'zzz' };

        osmconfig.nsdId = NSDID.replaceAll('"', '');
        osmconfig.vimAccountId = VIMID.replaceAll('"', '');

        var code =  JSON.stringify( osmconfig, null );
        
        code = '"' +  textEscape( code ) + '"' ;
        if (config){
          //it will replace all
          //config = config.replace('"', '');
          //config = config.substring(0, config.length-1);
          //code = config;
          //var configAsObj = JSON.parse(config);
          // code = JSON.stringify( configAsObj, null, 4 );

          code = config;
        }

        

        return [code, Blockly.Java.ORDER_ATOMIC];
      };
    
  
      Blockly.Java['osm_nsd_config_detailed'] = function(block: any) {
        var NSDID = Blockly.Java.valueToCode(block, 'NSDID',
          Blockly.Java.ORDER_NONE) || '""';
        var VIMID = Blockly.Java.valueToCode(block, 'VIMID',
            Blockly.Java.ORDER_NONE) || '""';
            
        var VNF = Blockly.Java.valueToCode(block, 'VNF',
        Blockly.Java.ORDER_NONE)  || null;
        
        var VLD = Blockly.Java.valueToCode(block, 'VLD',
        Blockly.Java.ORDER_NONE) || null;

        var additionalParamsForVnf = Blockly.Java.valueToCode(block, 'additionalParamsForVnf',
        Blockly.Java.ORDER_NONE) || null;

        
        var k8snamespace = Blockly.Java.valueToCode(block, 'k8s-namespace',
            Blockly.Java.ORDER_NONE) || null;
            
        var additionalParamsForNs = Blockly.Java.valueToCode(block, 'additionalParamsForNs',
        Blockly.Java.ORDER_NONE) || null;
        
        var ssh_keys = Blockly.Java.valueToCode(block, 'ssh_keys',
        Blockly.Java.ORDER_NONE) || null;

        var osmconfig: any = { nsdId:'zzz' };

        if ( k8snamespace ){
          osmconfig  = { "k8s-namespace" : k8snamespace.replaceAll('"', '') };
        }

        osmconfig.nsdId = NSDID.replaceAll('"', '');
        osmconfig.vimAccountId = VIMID.replaceAll('"', '');

        

        if (VNF){          
          osmconfig.vnf =JSON.parse(VNF) ;
        }
        if (VLD){
          osmconfig.vld = JSON.parse(VLD) ;
        }
        if (additionalParamsForVnf){
          osmconfig.additionalParamsForVnf = JSON.parse(additionalParamsForVnf) ;
        }
        if (additionalParamsForNs){
          osmconfig.additionalParamsForNs = JSON.parse(additionalParamsForNs) ;
        }        
        if (ssh_keys){
          osmconfig.ssh_keys = JSON.parse(ssh_keys) ;
        }
        var code = '"' +  textEscape( JSON.stringify( osmconfig, null) ) + '"' ;
        
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
    
  
      
      Blockly.Java['osm_nsd_config_vnf'] = function(block: any) {
        var membervnfindex = Blockly.Java.valueToCode(block, 'member-vnf-index',
          Blockly.Java.ORDER_NONE) || '"1"';
        var vdu = Blockly.Java.valueToCode(block, 'vdu',
            Blockly.Java.ORDER_NONE) || null;            
        var vimAccountId = Blockly.Java.valueToCode(block, 'VIMID',
        Blockly.Java.ORDER_NONE) || null;
            
        var code: any = { "member-vnf-index":membervnfindex.replaceAll('"', '')  };

        if ( vimAccountId ){
          code.vimAccountId = vimAccountId.replaceAll('"', '');
        }
        if (vdu){
          vdu = vdu.replace('"', '');
          vdu = vdu.substring(0, vdu.length-1);
          code.vdu = JSON.parse( vdu  ) ;
        }
        code =  JSON.stringify( code, null );
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
    
      Blockly.Java['osm_nsd_config_vld'] = function(block: any) {
        var name = Blockly.Java.valueToCode(block, 'name',
          Blockly.Java.ORDER_NONE) || '""';
        var vimnetworkname = Blockly.Java.valueToCode(block, 'vim-network-name',
            Blockly.Java.ORDER_NONE) || null;        
        var config = Blockly.Java.valueToCode(block, 'config',
              Blockly.Java.ORDER_NONE) || null;
            
        var code: any = { "name":name.replaceAll('"', '')  };

        if ( vimnetworkname ){
          code = { "name":name.replaceAll('"', '') , "vim-network-name" : vimnetworkname.replaceAll('"', '')  };
        }

        if (config){
          //it will replace all
          config = config.replace('"', '');
          config = config.substring(0, config.length-1);
          code = JSON.parse( config  );
        }
      
        code =  JSON.stringify( code, null, 4 );
        return [code, Blockly.Java.ORDER_ATOMIC];
      };


      Blockly.Java['osm_nsd_config_paramvnf'] = function(block: any) {
        var membervnfindex = Blockly.Java.valueToCode(block, 'member-vnf-index',
          Blockly.Java.ORDER_NONE) || '"1"';
        var additionalParams = Blockly.Java.valueToCode(block, 'additionalParams',
            Blockly.Java.ORDER_NONE)  || null;    

        var additionalParamsForKdu = Blockly.Java.valueToCode(block, 'additionalParamsForKdu',
          Blockly.Java.ORDER_NONE)  || null;    
            
            
        var config = Blockly.Java.valueToCode(block, 'config',
         Blockly.Java.ORDER_NONE) || null;

        var code: any = { "member-vnf-index":membervnfindex.replaceAll('"', '')  };
        //we must transform here the key value array to a json object with atributes and values
        var additionalParamsAsObject= null;
        if (additionalParams){
            var dd = JSON.parse( additionalParams);
            dd.forEach( e => {
            
              
            var element = JSON.parse( e); //each element is a json String which describes the key value element
            var evalue = element.paramvalue;

             console.log('Variable additionalParams element = ' + element.paramname );
             if (additionalParamsAsObject){
              additionalParamsAsObject =additionalParamsAsObject + ','  + '"' + element.paramname + '" : "' + evalue + '"';
             }else{
              additionalParamsAsObject = '"' + element.paramname + '" : "' + evalue + '"';
             }
           });
           
           additionalParamsAsObject = "{" + additionalParamsAsObject + "}";

          code.additionalParams = JSON.parse( additionalParamsAsObject ) ;
        }

        var additionalParamsForKduAsObject= null;
        
        console.log('Variable additionalParamsForKdu = ' + additionalParamsForKdu );

        code.additionalParamsForKdu = JSON.parse( additionalParamsForKdu ) ;

        // if (additionalParamsForKdu){
        //   var dd = JSON.parse( additionalParamsForKdu);
        //   dd.forEach( e => {          
            
        //   var element = JSON.parse( e); //each element is a json String which describes the key value element
        //   if ( element ){
        //     var evalue = element.paramvalue;

        //     console.log('Variable additionalParamsForKdu element = ' + element.paramname );
        //     if (additionalParamsForKduAsObject){
        //       additionalParamsForKduAsObject =additionalParamsForKduAsObject + ','  + '"' + element.paramname + '" : "' + evalue + '"';
        //     }else{
        //       additionalParamsForKduAsObject = '"' + element.paramname + '" : "' + evalue + '"';
        //     }
        //   }
          
        //  });
         
        //  if (additionalParamsForKduAsObject){
        //   additionalParamsForKduAsObject = "{" + additionalParamsForKduAsObject + "}";
        //   code.additionalParamsForKdu = JSON.parse( additionalParamsForKduAsObject ) ;
        //  }
        // }


        code =  JSON.stringify( code, null );

        if (config){
          //it will replace all
          config = config.replace('"', '');
          config = config.substring(0, config.length-1);
          code = JSON.parse( config  );
        }

        return [code, Blockly.Java.ORDER_ATOMIC];
      };
    

      Blockly.Java['osm_nsd_config_kdu'] = function(block: any) {
        var kdu_name = Blockly.Java.valueToCode(block, 'kdu_name',
          Blockly.Java.ORDER_NONE) || '"1"';         
        var k8snamespace = Blockly.Java.valueToCode(block, 'k8s-namespace',
        Blockly.Java.ORDER_NONE) || null;
        var additionalParams = Blockly.Java.valueToCode(block, 'additionalParams',
            Blockly.Java.ORDER_NONE) || null;   
            
        var code: any = { "kdu_name":kdu_name.replaceAll('"', '')  };
        if ( k8snamespace ){

          code = { "kdu_name":kdu_name.replaceAll('"', ''), "k8s-namespace":k8snamespace.replaceAll('"', ''),   };
        }


        if (additionalParams){
          additionalParams = additionalParams.replace('"', '');
          additionalParams = additionalParams.substring(0, additionalParams.length-1);
          code.additionalParams = JSON.parse( additionalParams  ) ;
        }
        
        code = JSON.stringify( code, null);
        // code = textEscape( JSON.stringify( code, null) );
        // code = '"' +  code + '"';
        
        return [code, Blockly.Java.ORDER_ATOMIC];
      };

      
      Blockly.Java['param_value_tuple'] = function(block: any) {
        var paramname = Blockly.Java.valueToCode(block, 'paramname',
          Blockly.Java.ORDER_NONE) || '""';
        
          var paramvalue = Blockly.Java.valueToCode(block, 'paramvalue',
          Blockly.Java.ORDER_NONE) || '""'; 
            
          //paramvalue = paramvalue.replaceAll('"', '')           
          paramvalue = paramvalue.replace('"', ''); //remove only first and last quote
          paramvalue = paramvalue.substring(0, paramvalue.length-1);
          
        var code: any = { "paramname":paramname.replaceAll('"', ''), "paramvalue": paramvalue ,   };
        code = textEscape( JSON.stringify( code, null) );
        code = '"' +  code + '"';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };

      Blockly.Java['computeVariable'] = function(block: any) {
        var paramvariable = Blockly.Java.valueToCode(block, 'paramvariable',
          Blockly.Java.ORDER_NONE) || '""';
        
        
        
        paramvariable = paramvariable.replaceAll('"', '$$QUOTESTR$$')
        var code: any = '$$XVALS_' + paramvariable+ '_XVALE$$';

        code = '"' + code + '"';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };

      Blockly.Java['text_escape'] = function(block: any) {
        var code = Blockly.Java.valueToCode(block, 'paramtxt',
          Blockly.Java.ORDER_NONE) || '""';        
          code = code.replace('"', '');
          code = code.substring(0, code.length-1);
          // code = code.replaceAll('\\', '\\\\');
          // code = code.replaceAll('"', '\\"');
          code = '"' +  textEscape(code) + '"';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      
      Blockly.Java['valueFromJsonPath'] = function(block: any) {
        var jsoninput: string = Blockly.Java.valueToCode(block, 'jsoninput',
          Blockly.Java.ORDER_NONE) || '""';
          
        var jsonpath: any = Blockly.Java.valueToCode(block, 'jsonpath',
        Blockly.Java.ORDER_NONE) || '""';
        
        jsoninput = jsoninput.replace('"', '');
        jsoninput = jsoninput.substring(0, jsoninput.length-1);
        jsoninput = '"' +  textEscape(jsoninput) + '"';       
        
        jsonpath = jsonpath.replaceAll("\\\'", "'");

        console.log('jsoninput = ' + jsoninput );
        console.log('jsonpath = ' + jsonpath );

        var code = 'getValueFromJsonPath(' + jsoninput + ', ' + jsonpath  +')';
        return [code, Blockly.Java.ORDER_ATOMIC];
      };

      
      Blockly.Java['rest_config_client'] = function (block: any) {
        // Print statement.
        
        var xbaseurl = Blockly.Java.valueToCode(block, 'baseurl',
              Blockly.Java.ORDER_NONE) || null;
              
          
              
        var xOAUTH2CLIENTID = Blockly.Java.valueToCode(block, 'aOAUTH2CLIENTID',
        Blockly.Java.ORDER_NONE) || null;
        
        var xOAUTHSECRET = Blockly.Java.valueToCode(block, 'aOAUTHSECRET',
              Blockly.Java.ORDER_NONE) || null;
              
        var xscopes = Blockly.Java.valueToCode(block, 'scopes',
        Blockly.Java.ORDER_NONE) || null;
        
        var xTOKEURI = Blockly.Java.valueToCode(block, 'aTOKENURI',
              Blockly.Java.ORDER_NONE) || null;
              
        var xUSERNAME = Blockly.Java.valueToCode(block, 'aUSERNAME',
        Blockly.Java.ORDER_NONE) || null;
        
        var xPASSWORD = Blockly.Java.valueToCode(block, 'aPASSWORD',
              Blockly.Java.ORDER_NONE) || null;

      

        var code: any = { baseurl: xbaseurl };
        code.aOAUTH2CLIENTID = xOAUTH2CLIENTID;
        code.aOAUTHSECRET = xOAUTHSECRET;
        code.scopes = xscopes;
        code.aTOKENURI = xTOKEURI;
        code.aUSERNAME = xUSERNAME;
        code.aPASSWORD = xPASSWORD;
        
        code =  JSON.stringify( code, null
           );

        return [code, Blockly.Java.ORDER_ATOMIC];
      };

      Blockly.Java['rest_block'] = function (block: any) {
        // Print statement.
        var dropdown_name = block.getFieldValue('VERBOPTION');
        var argumentVERBOPTION = Blockly.Java.quote_( dropdown_name );

        var argument0 = Blockly.Java.valueToCode(block, 'arest_config_client',
              Blockly.Java.ORDER_NONE) || null;
        var aurl = Blockly.Java.valueToCode(block, 'url',
                    Blockly.Java.ORDER_NONE) || null;
        var aheaders = Blockly.Java.valueToCode(block, 'headers',
                    Blockly.Java.ORDER_NONE) || null;
        var apayload = Blockly.Java.valueToCode(block, 'payload',
                    Blockly.Java.ORDER_NONE) || null;
                    
  
                    
                    
        var code: String = 'rest_block(' + argumentVERBOPTION + ',' + aurl + ',' + aheaders + ',' + apayload +  ')';
        if ( argument0  ){        

          argument0 = JSON.parse(argument0);
           code =  'rest_block(' + argumentVERBOPTION 
           +', ' + aurl
           +', ' + aheaders
           +', ' + apayload
          +', ' + argument0.baseurl
          +', ' + argument0.aOAUTH2CLIENTID
          +', ' + argument0.aOAUTHSECRET
          +', ' + argument0.scopes
          +', ' + argument0.aTOKENURI
          +', ' + argument0.aUSERNAME
          +', ' + argument0.aPASSWORD
           + ')';

          }
           
         return [code, Blockly.Java.ORDER_ATOMIC];
      };
      
  Blockly.Java['currentServiceOrder'] = function(block: any) {
    // Variable getter.
        console.log('Variable getter currentServiceOrder')
    
    var dropdown_name = block.getFieldValue('VERBOPTION');
    var argumentVERBOPTION = Blockly.Java.quote_( dropdown_name );
    
    // var apayload =  Blockly.Java.nameDB_.getName(block.getFieldValue('payload'),
    //     Blockly.Variables.NAME_TYPE);

    var code = 'getCurrentServiceOrderPropValue(' + argumentVERBOPTION  +')';
    return  [code, Blockly.Java.ORDER_ATOMIC];
  };
      
  Blockly.Java['currentService'] = function(block: any) {
    // Variable getter.
        console.log('currentService')

    
    //var acharname='""';
    var dropdown_name = block.getFieldValue('VERBOPTION');
    var argumentVERBOPTION = Blockly.Java.quote_( dropdown_name );
    

           
    var acharname =  Blockly.Java.valueToCode(block, 'characteristicName',
              Blockly.Java.ORDER_ASSIGNMENT) || '""';
    
    var code = 'getCurrentServicePropValue(' + argumentVERBOPTION +', '+acharname   +')';


    return  [code, Blockly.Java.ORDER_ATOMIC];
  };

  
  Blockly.Java['setCharacteristicOfCurrentService'] = function(block: any) {
    // Variable getter.
        console.log('setCharacteristicOfCurrentService')
        
    var acharname =  Blockly.Java.valueToCode(block, 'characteristicName',
    Blockly.Java.ORDER_ASSIGNMENT) || '""';

    var avalue =  Blockly.Java.valueToCode(block, 'avalue',
              Blockly.Java.ORDER_ASSIGNMENT) || '""';
    
    var code = 'setCharacteristicOfCurrentService('  + acharname    +', '+ avalue   +');\n';

    return code;

  };
  
  Blockly.Java['payloadToService'] = function(block: any) {
    // Variable getter.
        console.log('payloadToService')

    
    //var acharname='""';
    var dropdown_name = block.getFieldValue('VERBOPTION');
    var argumentVERBOPTION = Blockly.Java.quote_( dropdown_name );

    
    var acharname =  Blockly.Java.valueToCode(block, 'characteristicName',
              Blockly.Java.ORDER_ASSIGNMENT) || '""';
              
    var ajsonpayload =  Blockly.Java.valueToCode(block, 'jsonpayload',
    Blockly.Java.ORDER_ASSIGNMENT) || '""';
    
    var code = 'getFromPayloadServicePropValue(' + ajsonpayload +', '+argumentVERBOPTION +', '+  acharname  +')';


    return  [code, Blockly.Java.ORDER_ATOMIC];
  };


  Blockly.Java['createServiceOrder'] = function(block: any) {
    
      console.log('createServiceOrder')
  
      var serviceOrder: ServiceOrderCreate= {
        orderItem:[]
      };
  
      var serviceSpecificationid = Blockly.Java.valueToCode(block, 'serviceSpecificationid',
                      Blockly.Java.ORDER_NONE) || null;
        var aserviceCharacteristics = Blockly.Java.valueToCode(block, 'serviceCharacteristics',
            Blockly.Java.ORDER_NONE)  || null;    
  
      
      let newOrderItem: ServiceOrderItem ;
      newOrderItem = { service: {
        serviceSpecification: {
          id: serviceSpecificationid.replaceAll('"', '')
        },
        serviceCharacteristic: []
      }, action: 'add'}

        //we must transform here the key value array to a json object with atributes and values
        var additionalParamsAsObject= null;
      if (aserviceCharacteristics){
        console.log('aserviceCharacteristics = ' + aserviceCharacteristics );
        var dd = JSON.parse( aserviceCharacteristics);
        console.log('dd = ' + dd );
        dd.forEach (e => {
          if ( e ){
            
            var element = JSON.parse( e); //each element is a json String which describes the key value element
            var evalue = element.paramvalue;

            var evalue = element.paramvalue;            
            newOrderItem.service.serviceCharacteristic.push({
             name: element.paramname,
             value: { value: evalue }
           })
          }           
        });
      }

      serviceOrder.orderItem.push(newOrderItem);
  
      var acode = '"' + textEscape( JSON.stringify( serviceOrder, null ) )+ '"';

      var code = 'createServiceOrder('  + acode + ')';
    return  [code, Blockly.Java.ORDER_ATOMIC];
  };

  
  Blockly.Java['createServiceOrderJson'] = function(block: any) {
    // Variable getter.
        console.log('createServiceOrderJson')
    
        var jsonpayload = Blockly.Java.valueToCode(block, 'jsonpayload',
        Blockly.Java.ORDER_NONE) || null;
    
        var code = 'createServiceOrder('  + jsonpayload + ')';
    return  [code, Blockly.Java.ORDER_ATOMIC];
  };

  Blockly.Java['variables_get'] = function(block: any) {
    // Variable getter.
        console.log('Variable getter CUSTOM')
    var code =  Blockly.Java.nameDB_.getName(block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
        //code = '$EVAL_' + code + '_EVAL$';
    return  [code, Blockly.Java.ORDER_ATOMIC];
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



  Blockly.Java['controls_foreach_java'] = function (block: { getFieldValue: (arg0: string) => any; id: any; }) {
    // For each loop.
    var variable0 = Blockly.Java.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var argument0 = Blockly.Java.valueToCode(block, 'ASET',
      Blockly.Java.ORDER_ASSIGNMENT) || 'null';
    var branch = Blockly.Java.statementToCode(block, 'DO');
    branch = Blockly.Java.addLoopTrap(branch, block.id);
    var indexVar = Blockly.Java.nameDB_.getDistinctName(
      variable0 , Blockly.Variables.NAME_TYPE);
      //branch = Blockly.Java.INDENT + variable0 + ' = ' +
      //  argument0 + '[' + indexVar + '];\n' + branch;
        
      branch = Blockly.Java.INDENT + branch;
    var code = 'for ( String ' + variable0 + ': ' + argument0 + ') {\n' +
      branch + '}\n';
    return code;
  };


  
  Blockly.Java['createServiceRefIf'] = function(block: any) {
    var serviceName = Blockly.Java.valueToCode(block, 'SERVICE_NAME',
      Blockly.Java.ORDER_NONE) || '""';
    
  
      var avalue =  Blockly.Java.valueToCode(block, 'CONDITION',
                Blockly.Java.ORDER_ASSIGNMENT) || 'true';
      
      var code = 'createServiceRefIf('  + serviceName    +', '+ avalue   +');\n';
  
      return code;
  };


  
  Blockly.Java['getServiceRefName'] = function(block: any) {
    var dropdown_name = block.getFieldValue('AVALUE');
    var argument0 = Blockly.Java.quote_( dropdown_name );
    var code =   argument0   ;
    return [code, Blockly.Java.ORDER_ATOMIC];
  };




  Blockly.Java['getResourceRefName'] = function(block: any) {
    var dropdown_name = block.getFieldValue('AVALUE');
    var argument0 = Blockly.Java.quote_( dropdown_name );
    var code =   argument0   ;
    return [code, Blockly.Java.ORDER_ATOMIC];
  };



  Blockly.Java['getServiceRefProps'] = function(block: any) {
    // Variable getter.
        console.log('getServiceRefProps')

    
    //var acharname='""';
    var dropdown_name = block.getFieldValue('VERBOPTION');
    var servicename = block.getFieldValue('AVALUE');
    servicename = Blockly.Java.quote_( servicename );
    var argumentVERBOPTION = Blockly.Java.quote_( dropdown_name );
    

           
    var acharname =  Blockly.Java.valueToCode(block, 'characteristicName',
              Blockly.Java.ORDER_ASSIGNMENT) || '""';
    
    var code = 'getServiceRefPropValue(' + servicename +', '+ argumentVERBOPTION +', '+acharname   +')';


    return  [code, Blockly.Java.ORDER_ATOMIC];
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
        priority: this.editForm.value.priority,
        lcmrulephase: this.editForm.value.lcmrulephase ,
        serviceSpecs: this.lcmRuleSpec.serviceSpecs
      }

      if (this.newLCMRuleSpecification) {
        this.lcmRulesService .createLCMRuleSpecification(updateObj).subscribe(
          data => { this.lcmRuleSpec = data },
          error => console.error(error),
          () => { 
            this.newLCMRuleSpecification = false
            this.toast.success("Service Specification was successfully created")
            this.router.navigate(['services', 'service_spec_update', this.specID])
 
            
          }
        )
        
      } else
      {
        this.lcmRulesService.patchLCMRuleSpecification({id: this.lcmRuleSpec.id, body: updateObj}).subscribe(
          data => console.log(data),
          error => console.error(error),
          () => { 
            this.toast.success("Service Specification was successfully updated");
            this.router.navigate(['services', 'service_spec_update', this.specID])

            
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
      this.router.navigate(['services', 'service_spec_update', this.specID])
    }


   
    
  }



function textEscape(avalue: any): any {
      
  avalue = avalue.replaceAll('\\', '\\\\');
  avalue = avalue.replaceAll('"', '\\"');
  return avalue;
}

