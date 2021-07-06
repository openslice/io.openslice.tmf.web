import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRuleProgram } from '../models/IRuleProgram';
import { BlocklyJavaService } from '../services/blockly-java.service';
import { RuleProgramService } from '../services/rule-program.service';


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
  program: IRuleProgram = this.programService.getOne(this.programName);

  generatedCode = '';


  constructor(
    private route: ActivatedRoute,    
    private programService: RuleProgramService,
    private router: Router,
    bs: BlocklyJavaService) {
      
    this.blocklyJavaService = bs;
    this.title = 'Openslice: Create Service Specification Constraints. Scope: pre-Creation';
    this.route.params.subscribe(params => {
      this.programName = params['programName'];
      this.program = this.programService.getOne(this.programName);
      if (!this.program) {
        this.program = {
          name: this.programName,
          xmlData: ''
        };
      }
      console.log(
        'creating/editing the program - ',
        JSON.stringify(this.program)
      );
      
      console.log( this.route.snapshot.queryParams['specid']  );
    });



    }


    ngOnInit() {
      this.workspace = Blockly.inject('blocklyDiv', {
        toolbox: document.getElementById('toolbox'),
        scrollbars: false
      });
  
      if (this.program.xmlData) {
        this.workspace.clear();
        Blockly.Xml.domToWorkspace(
          Blockly.Xml.textToDom(this.program.xmlData),
          this.workspace
        );
      }
  
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
        
      });
  
      this.blocklyJavaService.createJava(this.workspace, Blockly);
      this.createOpensliceJava(this.workspace, Blockly);
  
    }
  
    
    myFirstButtonPressed(ws: any){
      Blockly.Variables.createVariableButtonHandler( ws, null, 'String');
      //Blockly.Variables.createVariable( ws, null, 'panda');
    }
  
  
    
  
      /**
     * Construct the blocks required by the flyout for the colours category.
     * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
     * @return {!Array.<!Element>} Array of XML block elements.
     */
       charvarsText = function(workspace: any) {
      // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
      var charsList = [ 'Area of Service', 
                      'Area of Service: Region specification',
                    'Delay tolerance',
                    'NSD_5GCORE::CONFIG', 
                    'Slice quality of service parameters: 3GPP 5QI' ];
      var xmlList = [];
      
      
      if (Blockly.Blocks['getcharval_string']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="getcharval_string">' +
          '<field name="AVALUE">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_string']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_string">' +
          '<field name="NAMELBL">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      return xmlList;
    };
  
  
  
    charvarsNum = function(workspace: any) {
      // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
      var charsList = [ 'Area of Service', 
                      'Area of Service: Region specification',
                    'Delay tolerance',
                    'NSD_5GCORE::CONFIG', 
                    'Slice quality of service parameters: 3GPP 5QI' ];
      var xmlList = [];
      
      
      if (Blockly.Blocks['getcharval_number']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="getcharval_number">' +
          '<field name="AVALUE">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_number']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_number">' +
          '<field name="NAMELBL">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      return xmlList;
    };
  
    
    charvarsBool = function(workspace: any) {
      // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
      var charsList = [ 'Area of Service', 
                      'Area of Service: Region specification',
                    'Delay tolerance',
                    'NSD_5GCORE::CONFIG', 
                    'Slice quality of service parameters: 3GPP 5QI' ];
      var xmlList = [];
      
      
      if (Blockly.Blocks['getcharval_bool']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="getcharval_bool">' +
          '<field name="AVALUE">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_bool']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_bool">' +
          '<field name="NAMELBL">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      return xmlList;
    };
  
    
    charvarsSet = function(workspace: any) {
      // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
      var charsList = [ 'Area of Service', 
                      'Area of Service: Region specification',
                    'Delay tolerance',
                    'NSD_5GCORE::CONFIG', 
                    'Slice quality of service parameters: 3GPP 5QI' ];
      var xmlList = [];
      
      
      if (Blockly.Blocks['getcharval_set']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="getcharval_set">' +
          '<field name="AVALUE">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_set']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_set">' +
          '<field name="NAMELBL">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
  
      if (Blockly.Blocks['setcharval_sadd']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_sadd">' +
          '<field name="NAMELBL">' + charsList[i] + '</field>' +
              '</block>';
          var block = Blockly.Xml.textToDom(blockText);
          xmlList.push(block);
        }
      }
  
      if (Blockly.Blocks['setcharval_sremove']) {
        for (var i = 0; i < charsList.length; i++) {
          var blockText = '<block type="setcharval_sremove">' +
          '<field name="NAMELBL">' + charsList[i] + '</field>' +
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
      workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_TEXT', this.charvarsText);
      workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_NUM', this.charvarsNum);
      workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_BOOL', this.charvarsBool);
      workspace.registerToolboxCategoryCallback( 'SPECCHARVARIABLES_SET', this.charvarsSet);
      
  
  
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
        var code = 'getcharval_string(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_string'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';
          
        return 'setcharval_string(' + argument0 + ', ' + argument1 + ');\n';
      };
  
  
      Blockly.Java['getcharval_set'] = function(block: any) {
        var dropdown_name = block.getFieldValue('AVALUE');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var code = 'getcharval_set(' + argument0 + ')' ;
        return [code, Blockly.Java.ORDER_ATOMIC];
      };
  
      Blockly.Java['setcharval_set'] = function (block: any) {
        // Print statement.
        
        var dropdown_name = block.getFieldValue('NAMELBL');
        var argument0 = Blockly.Java.quote_( dropdown_name );
        var argument1 = Blockly.Java.valueToCode(block, 'AVALUE',
          Blockly.Java.ORDER_NONE) || '""';
          
        return 'setcharval_set(' + argument0 + ', ' + argument1 + ');\n';
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
  
   //{ "nsdId": "e855be91-567b-45cf-9f86-18653e7eacaa", "vimAccountId": "4efd8bf4-5292-4634-87b7-7b3d49108b36" , "vnf": [ {"member-vnf-index": "1", "vdu": [ {"id": "ForthnetCharmedVNF-VM", "interface": [{"name": "eth0", "floating-ip-required": true }]}]}]} 
  
      Blockly.Java['osm_nsd_config'] = function(block: any) {
        var NSD_ID = Blockly.Java.valueToCode(block, 'NSD_ID',
          Blockly.Java.ORDER_NONE) || '""';
          var VIM_ID = Blockly.Java.valueToCode(block, 'VIM_ID',
            Blockly.Java.ORDER_NONE) || '""';
            var statement = Blockly.Java.valueToCode(block, 'statement',
              Blockly.Java.ORDER_NONE) || '""';
        var code = '{ "nsdId": '+NSD_ID+', "vimAccountId": '+VIM_ID+' , '+statement+' } ';
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
    var code = Blockly.Java.variableDB_.getName(block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
    return [code, Blockly.Java.ORDER_ATOMIC];
  };
  
  Blockly.Java['variables_set'] = function(block: any) {
    // Variable setter.
        console.log('Variable setter CUSTOM')
    var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
    var varName = Blockly.Java.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName + ' = ' + argument0 + ';\n';
  };
  
    }
  
  
   
    
   
  
  
    saveProgram(): void {
      this.program.xmlData = Blockly.Xml.domToText(
        Blockly.Xml.workspaceToDom(this.workspace)
      );
      console.log('saving the program - ', JSON.stringify(this.program));
      this.programService.upsertOne(this.program);
      this.router.navigate(['listProgram']);
    }
  
    addBlock(): void {
  
      this.workspace;
     
      console.log('saving the program - ', JSON.stringify(this.program));
    }
  
    
  }
  