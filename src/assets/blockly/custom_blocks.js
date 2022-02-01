
coloursets = 185;
colouropenarions = 205;
colourtexts = 160;

Blockly.defineBlocksWithJsonArray([
    {
      type: 'begin',
      message0: 'Begin',
      nextStatement: 'any',
      colour: 180,
      tooltip: 'begin statement'
    },
    {
      type: 'move',
      message0: 'Move by %1 steps',
      args0: [
        {
          type: 'field_number',
          name: 'steps',
          value: 0
        }
      ],
      previousStatement: 'any',
      nextStatement: 'any',
      colour: 240,
      tooltip: 'steps to move'
    },
    {
      type: 'end',
      message0: 'End %1',
      args0: [
        {
          type: 'field_dropdown',
          name: 'end_types',
          options: [['Now', 'now'], ['Later', 'later']]
        }
      ],
      previousStatement: 'any',
      colour: 60,
      tooltip: 'end type'
    }
  ]);



  
  /*************************************************************************** 
  *
  *   Number RELATED
  * 
  ****************************************************************************/

  
Blockly.Blocks['string_to_integer'] = {
  /**
  * Block for numeric integer value.
  * @this Blockly.Block
  */

    init: function() {      
      this.appendValueInput("paramtxt")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("str to int");    
      this.setOutput(true, 'Number');           
      this.setInputsInline(true);
      this.setColour(230);
      this.setTooltip("Constructs a new integer value from another text");
      this.setHelpUrl("");
    }
};

Blockly.Blocks['string_to_float'] = {
  /**
  * Block for numeric integer value.
  * @this Blockly.Block
  */
  init: function() {  
    this.appendValueInput("paramtxt")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("str to float");    
    this.setOutput(true, 'Number');           
    this.setInputsInline(true);
    this.setColour(230);
    this.setTooltip("Constructs a new float value from another text");
    this.setHelpUrl("");
  }
};

  /*************************************************************************** 
  *
  *   TEXT RELATED
  * 
  ****************************************************************************/


   Blockly.Blocks['text_escape'] = {
    init: function() {      
      this.appendValueInput("paramtxt")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Escape text");    
      this.setOutput(true, 'String');           
      this.setInputsInline(true);
      this.setColour(160);
   this.setTooltip("Constructs a new text with escaped characters from another text");
   this.setHelpUrl("");
    }
  };
  
  
  

  
  /*************************************************************************** 
  *
  *   SERVICE SPEC RELATED
  * 
  ****************************************************************************/

  
  Blockly.Blocks['changecharacteristicvalue'] = {
    init: function() {
      this.appendValueInput("spec")
          .setCheck("String")
          .appendField("Characteristic name");
      this.appendValueInput("value")
          .setCheck("String")
          .appendField("Value");
      this.setPreviousStatement(true, "String");
      this.setNextStatement(true, "String");
      this.setColour(230);
   this.setTooltip("change the value of a service spec characteristic");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['characteristiccontains'] = {
    init: function() {
      this.appendValueInput("characteristic")
          .setCheck("SET")
          .appendField("characteristic");
      this.appendValueInput("value")
          .setCheck("String")
          .appendField("value");
      this.setOutput(true, "Boolean");
      this.setColour(230);
   this.setTooltip("Check if Characteristic contains a specific value");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['getcharacteristicvalueAsString'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get Value", "TXTLBL")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL")
          .appendField(new Blockly.FieldLabelSerializable(""), "OPTIONEDVALUE")
          //.appendField(new Blockly.FieldDropdown([["Area of Service","Area of Service"], ["Area of Service: Region specification","Area of Service: Region specification"], ["Delay tolerance","Delay tolerance"], ["NSD_5GCORE::CONFIG","NSD_5GCORE::CONFIG"], ["Slice quality of service parameters: 3GPP 5QI","Slice quality of service parameters: 3GPP 5QI"] ]), "OPTIONEDVALUE");
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'String');
      this.setColour(230);
   this.setTooltip("Get characteristic value as string");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['getcharval_string_type'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")          
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'String');
      this.setColour(colourtexts);
   this.setTooltip("Get characteristic value");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['setcharval_string_type'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("String")
          //.appendField("Set")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(colourtexts);
   this.setTooltip("Set characteristic value");
   this.setHelpUrl("");
    }
  };



  Blockly.Blocks['getcharval_number'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")          
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'Number');
      this.setColour(230);
   this.setTooltip("Get characteristic value");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['setcharval_number'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("Number")
          //.appendField("Set")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Set characteristic value");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['getcharval_bool_type'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")          
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'Boolean');
      this.setColour(90);
   this.setTooltip("Get characteristic value");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['setcharval_bool_type'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("Boolean")
          //.appendField("Set")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
   this.setTooltip("Set characteristic value");
   this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['getcharval_set_type'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")          
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'SET');
      this.setColour(coloursets);
   this.setTooltip("Get characteristic value");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['setcharval_set_type'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("Array")
          //.appendField("Set")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(coloursets);
   this.setTooltip("Set characteristic value");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['setcharval_sadd'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("Array")
          .appendField("Add to")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(coloursets);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['setcharval_sremove'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("Array")
          .appendField("Remove from")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(coloursets);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



  
  /*************************************************************************** 
  *
  *   GENERIC OPERATIONS BLOCK RELATED
  * 
  ****************************************************************************/

  Blockly.Blocks['so_log_string'] = {
    init: function() {
      this.appendValueInput("txtlog")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Log");     
      this.setOutput(false, null);
      
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(colouropenarions);
   this.setTooltip("Will log the input text to orchestrator log file");
   this.setHelpUrl("");
    }
  };

  
  
  Blockly.Blocks['payloadToService'] = {
    init: function() {
      this.appendDummyInput()
          //.setCheck(null)
          .appendField("Service payload")
          .appendField(new Blockly.FieldDropdown([["ID", "id"], 
          ["State", "state"], 
          ["Name","name"], 
          ["hasStarted","hasStarted"], 
          ["isServiceEnabled","isServiceEnabled"], 
          ["serviceType","serviceType"], 
          ["startMode","startMode"], 
          ["serviceCharacteristicValue","serviceCharacteristicValue"], 
          ["serviceOrderID","serviceOrderID"], 
          ["serviceSpecificationID","serviceSpecificationID"], 
          ["serviceObjectasJSON","serviceObjectasJSON"]

          
        ], this.handleTypeSelection.bind(this) ), "VERBOPTION"); 

        
      this.appendValueInput("jsonpayload")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Payload(Text/json)");


        // Initialize the value of this.columnType (used in updateShape)
      this.columnType = this.getFieldValue('VERBOPTION');
      // Avoid duplicating code by running updateShape to append your appropriate input
      this.updateShape();
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null); 
       this.setInputsInline(true);      
      this.setOutput(true, "String");
      this.setColour(colourtexts);
      this.setTooltip("Get TMF Service Inventory entity details from a json payload.");
      this.setHelpUrl("");

    },
    /**
     * This function runs each time you select a new value in your type selection dropdown field.
     * @param {string} newType This is the new value that the field will be set to.
     * 
     * Important note: this function will run BEFORE the field's value is updated. This means that if you call
     * this.getFieldValue('typeSelector') within here, it will reflect the OLD value.
     * 
     */
    handleTypeSelection: function (newType) {
        // Avoid unnecessary updates if someone clicks the same field twice
        if(this.columnType !== newType) {
            // Update this.columnType to the new value
            this.columnType = newType;
            // Add or remove fields as appropriate
            this.updateShape();
        }
    },
    /**
     * This will remove old inputs and add new inputs as you need, based on the columnType value selected
     */
    updateShape: function () {
        // Remove the old input (so that you don't have inputs stack repeatedly)
        if (this.getInput('characteristicName')) {
            this.removeInput('characteristicName');
        }
        // Append the new input based on the value of this.columnType
        if(this.columnType === 'serviceCharacteristicValue') {
          this.appendValueInput("characteristicName")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Characteristic Name");  
        } 
    },
    /**
     * This function runs when saving your block to XML. This is important if you need to save your block to XML at any point and then either
     * generate code from that XML or repopulate your workspace from that XML
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        // Do not use camelCase values for attribute names.
        container.setAttribute('column_type', this.columnType);
        // ALWAYS return container; this will be the input for domToMutation.
        return container;
    },
    /**
     * This function runs when loading your block from XML, after running init.
     * It's very important for updating your block in response to values selected in a field.
     */
    domToMutation: function (xmlElement) {
        // This attribute should match the one you used in mutationToDom
        var columnType = xmlElement.getAttribute('column_type');
        // If, for whatever reason, you try to save an undefined value in column_type, it will actually be saved as the string 'undefined'
        // If this is not an acceptable value, filter it out
        if(columnType && columnType !== 'undefined') {
            this.columnType = columnType;
        }
        // Run updateShape to append block values as needed
        this.updateShape();
    }
  };
  
  /*************************************************************************** 
  *
  *   REST OPERATIONS BLOCK RELATED
  * 
  ****************************************************************************/


  Blockly.Blocks['rest_config_client'] = {
    init: function() {
      this.appendDummyInput()
        .appendField('Web config client');
      this.appendValueInput("baseurl")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Base URL");     
      
      this.appendValueInput("aOAUTH2CLIENTID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("aOAUTH2CLIENTID");   
          
      this.appendValueInput("aOAUTHSECRET")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("aOAUTHSECRET");   
      
      this.appendValueInput("scopes")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("scopes");   
          
      this.appendValueInput("aTOKENURI")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("TOKENURI");   
      
      this.appendValueInput("aUSERNAME")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Username");   
          
      this.appendValueInput("aPASSWORD")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Password");   


      this.setOutput(true, "WEB_CLIENT_CONFIG");
       
      this.setColour(colouropenarions);
   this.setTooltip("Configure a Web client");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['rest_block'] = {
    init: function() {
      this.appendDummyInput()
          //.setCheck(null)
          .appendField("URL")
          .appendField(new Blockly.FieldDropdown([["GET","GET"], 
          ["POST","POST"], 
          ["PUT","PUT"], 
          ["PATCH","PATCH"], 
          ["DELETE","DELETE"] 
        ]), "VERBOPTION");

      this.appendValueInput("arest_config_client")
          .setCheck("WEB_CLIENT_CONFIG")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Web config client");    
      this.appendValueInput("headers")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Headers");  
      this.appendValueInput("url")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Request URL"); 
      this.appendValueInput("payload")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Payload");     
      this.setOutput(true, "String");
      
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null);
      this.setColour(colouropenarions);
   this.setTooltip("Make a Request (GET, POST, etc) towards a URL.  Header a string with Header1=value1;Header2=value2 \n Payload in POST, PATCH, etc, may be escaped as Text (use the Escape Text block )");
   this.setHelpUrl("");
    }
  };


  
  /*************************************************************************** 
  *
  *   CONTEXT BLOCK RELATED
  * 
  ****************************************************************************/


  Blockly.Blocks['currentServiceOrder'] = {
    init: function() {
      this.appendDummyInput()
          //.setCheck(null)
          .appendField("Current Service Order")
          .appendField(new Blockly.FieldDropdown([["ID", "id"], 
          ["State", "state"], 
          ["externaId", "externaId"], 
          ["serviceOrderObjectasJSON","serviceOrderObjectasJSON"]
        ]), "VERBOPTION"); 

      this.setOutput(true, "String");
      
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null);
      this.setColour(colourtexts);
   this.setTooltip("Get Service Order detail from current context. If the Order is available from the state of the service.");
   this.setHelpUrl("");
    }
  };


  
  Blockly.Blocks['currentServiceOrder'] = {
    init: function() {
      this.appendDummyInput()
          //.setCheck(null)
          .appendField("Current Service Order")
          .appendField(new Blockly.FieldDropdown([["ID", "id"], 
          ["State", "state"], 
          ["externaId", "externaId"], 
          ["serviceOrderObjectasJSON","serviceOrderObjectasJSON"]
        ]), "VERBOPTION"); 

      this.setOutput(true, "String");
      
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null);
      this.setColour(colourtexts);
   this.setTooltip("Get Service Order detail from current context. If the Order is available from the state of the service.");
   this.setHelpUrl("");
    }
  };
  
  


  Blockly.Blocks['currentService'] = {
    init: function() {
      this.appendDummyInput()
          //.setCheck(null)
          .appendField("Current Service")
          .appendField(new Blockly.FieldDropdown([["ID", "id"], 
          ["State", "state"], 
          ["Name","name"], 
          ["hasStarted","hasStarted"], 
          ["isServiceEnabled","isServiceEnabled"], 
          ["serviceType","serviceType"], 
          ["startMode","startMode"], 
          ["serviceCharacteristicValue","serviceCharacteristicValue"], 
          ["serviceOrderID","serviceOrderID"], 
          ["serviceSpecificationID","serviceSpecificationID"], 
          ["serviceObjectasJSON","serviceObjectasJSON"]

          
        ], this.handleTypeSelection.bind(this) ), "VERBOPTION"); 

        // Initialize the value of this.columnType (used in updateShape)
      this.columnType = this.getFieldValue('VERBOPTION');
      // Avoid duplicating code by running updateShape to append your appropriate input
      this.updateShape();
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null);    
      this.setOutput(true, "String");
      this.setColour(colourtexts);
      this.setTooltip("Get Service details from current context running service, after instantiation.");
      this.setHelpUrl("");

    },
    /**
     * This function runs each time you select a new value in your type selection dropdown field.
     * @param {string} newType This is the new value that the field will be set to.
     * 
     * Important note: this function will run BEFORE the field's value is updated. This means that if you call
     * this.getFieldValue('typeSelector') within here, it will reflect the OLD value.
     * 
     */
    handleTypeSelection: function (newType) {
        // Avoid unnecessary updates if someone clicks the same field twice
        if(this.columnType !== newType) {
            // Update this.columnType to the new value
            this.columnType = newType;
            // Add or remove fields as appropriate
            this.updateShape();
        }
    },
    /**
     * This will remove old inputs and add new inputs as you need, based on the columnType value selected
     */
    updateShape: function () {
        // Remove the old input (so that you don't have inputs stack repeatedly)
        if (this.getInput('characteristicName')) {
            this.removeInput('characteristicName');
        }
        // Append the new input based on the value of this.columnType
        if(this.columnType === 'serviceCharacteristicValue') {
          this.appendValueInput("characteristicName")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Characteristic Name");  
          this.setInputsInline(true);   
        } 
    },
    /**
     * This function runs when saving your block to XML. This is important if you need to save your block to XML at any point and then either
     * generate code from that XML or repopulate your workspace from that XML
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        // Do not use camelCase values for attribute names.
        container.setAttribute('column_type', this.columnType);
        // ALWAYS return container; this will be the input for domToMutation.
        return container;
    },
    /**
     * This function runs when loading your block from XML, after running init.
     * It's very important for updating your block in response to values selected in a field.
     */
    domToMutation: function (xmlElement) {
        // This attribute should match the one you used in mutationToDom
        var columnType = xmlElement.getAttribute('column_type');
        // If, for whatever reason, you try to save an undefined value in column_type, it will actually be saved as the string 'undefined'
        // If this is not an acceptable value, filter it out
        if(columnType && columnType !== 'undefined') {
            this.columnType = columnType;
        }
        // Run updateShape to append block values as needed
        this.updateShape();
    }
  };
  
  
  
  
  
  Blockly.Blocks['setCharacteristicOfCurrentService'] = {
    init: function() {
      this.appendDummyInput()
          //.setCheck(null)
          .appendField("Set Service");


      this.appendValueInput("characteristicName")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Characteristic Name");    

      this.appendValueInput("avalue")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Value (String)");    
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);    
      this.setColour(colourtexts);
      this.setTooltip("Set a characteristic value of the Service in current context.");
      this.setHelpUrl("");

    }
   
  };

  /*************************************************************************** 
  *
  *   OPENSLICE RELATED
  * 
  ****************************************************************************/


   

  
   Blockly.Blocks['createServiceOrderJson'] = {
    init: function() {
      
      this.appendValueInput("jsonpayload")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Create Service Order (Text/json)");    

      this.setOutput(true, "String");
      
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null);
      this.setColour(colourtexts);
   this.setTooltip("Openslice SO will create a new Service Order based on the request described by the json. The json is a createServiceOrder payload. The response will be the new Service Order created.");
   this.setHelpUrl("");
    }
  };
  

    
  Blockly.Blocks['createServiceOrder'] = {
    init: function() {
      this.appendDummyInput()
      .appendField("Create Service Order"); 

          
      this.appendValueInput("serviceSpecificationid")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Service Specification id");     

   this.appendValueInput("serviceCharacteristics")
      .setCheck("Array")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Service Characteristics");     

      

      

      this.setOutput(true, "String");
      
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null);
      this.setColour(colourtexts);
   this.setTooltip("Openslice SO will create a new Service Order based on the request described by the json. The json is a createServiceOrder payload. The response will be the new Service Order created.");
   this.setHelpUrl("");
    }
  };
  
  
  /*************************************************************************** 
  *
  *   OSM RELATED
  * 
  ****************************************************************************/


  Blockly.Blocks['osm_nsd_config_detailed'] = {
    init: function() {
      this.appendValueInput("NSDID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("OSMNSDID(Text)");
      this.appendValueInput("VIMID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("VIMID(Text)");
      this.appendValueInput("VNF")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("VNF(Array)");

      this.appendValueInput("k8s-namespace")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("k8s-namespace(Text)");

      this.appendValueInput("VLD")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("VLD(Array)");
      this.appendValueInput("additionalParamsForVnf")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("additionalParamsForVnf(Array)");
          
      this.appendValueInput("additionalParamsForNs")
      .setCheck("Array")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("additionalParamsForNs(Array)");
          
      this.appendValueInput("ssh_keys")
      .setCheck("Array")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ssh_keys(Array)");

      this.setOutput(true, 'String');      
      this.setColour(230);
   this.setTooltip("Constructs a json string to be used for OSM configuration during initialization.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['osm_nsd_config_vnf'] = {
    init: function() {
      this.appendValueInput("member-vnf-index")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("member-vnf-index(Text)");
      this.appendValueInput("vdu")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("vdu(Text/json)");    
      this.appendValueInput("VIMID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("VIMID(Text)");
          
      this.setOutput(true, 'String');      
      this.setColour(230);
   this.setTooltip("Constructs a json string to be used for OSM configuration for member-vnf.");
   this.setHelpUrl("");
    }
  };


  

  Blockly.Blocks['osm_nsd_config_kdu'] = {
    init: function() {
      this.appendValueInput("kdu_name")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("kdu_name(Text)");  
      this.appendValueInput("k8s-namespace")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("k8s-namespace(Text)");
      this.appendValueInput("additionalParams")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("additionalParams(Text/json)");  
          
      this.setOutput(true, 'String');      
      this.setColour(230);
   this.setTooltip("Constructs a json string to be used for OSM configuration for member-vnf.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['osm_nsd_config_vld'] = {
    init: function() {
      this.appendValueInput("name")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("vld name(Text)");
      this.appendValueInput("vim-network-name")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("vim-network-name(Text)");
    
      this.appendValueInput("config")
          //.setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("config(Text/json)");
          
      this.setOutput(true, 'String');      
      this.setColour(230);
   this.setTooltip("Constructs a json string to be used for OSM configuration for member-vld.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['osm_nsd_config_paramvnf'] = {
    init: function() {
      this.appendValueInput("member-vnf-index")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("additionalParamsForVnf member-vnf-index(Text)");
      this.appendValueInput("additionalParams")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("additionalParams(array)");    
      this.appendValueInput("additionalParamsForKdu")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("additionalParamsForKdu(array)");    
     
      this.appendValueInput("config")
          //.setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("config(Text/json)");
          
      this.setOutput(true, 'String');      
      this.setColour(230);
   this.setTooltip("Constructs a json string to be used for OSM configuration for member-additionalParamsForVnf.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['param_value_tuple'] = {
    init: function() {
      this.appendValueInput("paramname")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Param name");
      this.appendValueInput("paramvalue")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("value(Text)");    
     
          
      this.setOutput(true, 'String');      
      this.setInputsInline(true);
      this.setColour(230);
   this.setTooltip("Constructs a json string to be used for OSM configuration for a parameter in additionalParamsForVnf.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['computeVariable'] = {
    init: function() {      
      this.appendValueInput("paramvariable")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Compute Variable");    
      this.setOutput(true, 'String');           
      this.setInputsInline(true);
      this.setColour(230);
   this.setTooltip("Constructs a text parameter from a variable parameter. Use to compute variables inside texts ot json for example ");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['valueFromJsonPath'] = {
    init: function() {      
      this.appendValueInput("jsoninput")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("json (text)");  
            
      this.appendValueInput("jsonpath")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("JsonPath (Text)");    

      this.setOutput(true, 'String');  
      this.setColour(230);
   this.setTooltip("Extracts a value from a Json given a jsonpath query. \n More for json path library and the proper notation: https://github.com/json-path/JsonPath . You can also experiment with the Jayway JsonPath Evaluator here: http://jsonpath.herokuapp.com/");
   this.setHelpUrl("");
    }
  };

  

  
  Blockly.Blocks['osm_nsd_config'] = {
    init: function() {
      this.appendValueInput("NSDID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("OSMNSDID(Text)");
      this.appendValueInput("VIMID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("VIMID(Text)");
      this.appendValueInput("config")
          // .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("config(Text/json)");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  

  
  /*************************************************************************** 
  *
  *   LOGIC RELATED
  * 
  ****************************************************************************/


  Blockly.Blocks['logic_set_contains_string'] = {
    /**
     * Block for comparison operator.
     * @this Blockly.Block
     */
    init: function() {
      var OPERATORS = Blockly.RTL ? [
            ['set contains string', 'EQ']
          ] : [
            ['set contains string', 'EQ']
          ];
      this.setColour( coloursets );
      this.setOutput(true, 'Boolean');
      this.appendValueInput('A')
          .setCheck('SET');
      this.appendValueInput('B')
          .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP')
          .setCheck('String');
      this.setInputsInline(true);
      var thisBlock = this;
      this.setTooltip(function() {
        var op = thisBlock.getFieldValue('OP');
        var TOOLTIPS = {
          'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ
        };
        return TOOLTIPS[op];
      });
    }
  };

  

// Block for variable getter.
Blockly.Blocks['variables_get_panda'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(
          "VAR_NAME", ['panda'], 'panda'), "FIELD_NAME");
    this.setOutput(true, 'panda');
    this.setColour(200);
    this.setTooltip("");
    this.setHelpUrl("");
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';

  }
};

// Block for variable setter.
Blockly.Blocks['variables_set_panda'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck('Panda')
        .appendField("set")
        .appendField(new Blockly.FieldVariable(
            "VAR_NAME", null, ['panda'], 'panda'), "FIELD_NAME")
        .appendField("to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(200);
        this.setTooltip("");
        this.setHelpUrl("");
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
        this.contextMenuType_ = 'variables_set';
    

  }
};

Blockly.Blocks['example_variable_typed'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('variable:')
      .appendField(new Blockly.FieldVariable(
          'X',
          null,
          ['Number', 'String'],
          'Number'
      ), 'FIELDNAME');
  }
};





  
  /*************************************************************************** 
  *
  *   LOOPs RELATED
  * 
  ****************************************************************************/

 	
   Blockly.Blocks['controls_foreach_java'] = {
    init: function() {
      this.appendValueInput("ASET")
          .setCheck("SET")
          .appendField("for each string")
          .appendField(new Blockly.FieldVariable("item"), "VAR")
          .appendField("in set (ofStrings)");
      this.appendStatementInput("DO")
          .setCheck(null)
          .appendField("do");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
  
  /*************************************************************************** 
  *
  *   Dependency RELATED
  * 
  ****************************************************************************/
 
 
  
  
   Blockly.Blocks['createServiceRefIf'] = {
    init: function() {
      this.appendValueInput("SERVICE_NAME")
          .setCheck("String")
          .appendField("Create Ref Service");
      this.appendValueInput("CONDITION")
          .setCheck("Boolean")
          .appendField("if");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("Create a service when a condition validates to true during the creation process.");
   this.setHelpUrl("");
    }
  };



  
  /*************************************************************************** 
  *
  *   Services RELATED
  * 
  ****************************************************************************/
 
 
   Blockly.Blocks['getServiceRefName'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")  
          
      this.setOutput(true, 'String');
      this.setColour(colourtexts);
   this.setTooltip("Get Service name");
   this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['getResourceRefName'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")  
          
      this.setOutput(true, 'String');
      this.setColour(colourtexts);
   this.setTooltip("Get Resource name");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['getServiceRefProps'] = {
    init: function() {
      this.appendDummyInput()
          //.setCheck(null)
          .appendField("Service")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")  
          .appendField(new Blockly.FieldDropdown([["ID", "id"], 
          ["State", "state"], 
          ["Name","name"], 
          ["hasStarted","hasStarted"], 
          ["isServiceEnabled","isServiceEnabled"], 
          ["serviceType","serviceType"], 
          ["startMode","startMode"], 
          ["serviceCharacteristicValue","serviceCharacteristicValue"], 
          ["serviceOrderID","serviceOrderID"], 
          ["serviceSpecificationID","serviceSpecificationID"], 
          ["serviceObjectasJSON","serviceObjectasJSON"]

          
        ], this.handleTypeSelection.bind(this) ), "VERBOPTION"); 

        // Initialize the value of this.columnType (used in updateShape)
      this.columnType = this.getFieldValue('VERBOPTION');
      // Avoid duplicating code by running updateShape to append your appropriate input
      this.updateShape();
      //this.setPreviousStatement(true, null);
      //this.setNextStatement(true, null);    
      this.setOutput(true, "String");
      this.setColour(colourtexts);
      this.setTooltip("Get Service details from current context running service, after instantiation.");
      this.setHelpUrl("");

    },
    /**
     * This function runs each time you select a new value in your type selection dropdown field.
     * @param {string} newType This is the new value that the field will be set to.
     * 
     * Important note: this function will run BEFORE the field's value is updated. This means that if you call
     * this.getFieldValue('typeSelector') within here, it will reflect the OLD value.
     * 
     */
    handleTypeSelection: function (newType) {
        // Avoid unnecessary updates if someone clicks the same field twice
        if(this.columnType !== newType) {
            // Update this.columnType to the new value
            this.columnType = newType;
            // Add or remove fields as appropriate
            this.updateShape();
        }
    },
    /**
     * This will remove old inputs and add new inputs as you need, based on the columnType value selected
     */
    updateShape: function () {
        // Remove the old input (so that you don't have inputs stack repeatedly)
        if (this.getInput('characteristicName')) {
            this.removeInput('characteristicName');
        }
        // Append the new input based on the value of this.columnType
        if(this.columnType === 'serviceCharacteristicValue') {
          this.appendValueInput("characteristicName")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("Characteristic Name");  
          this.setInputsInline(true);   
        } 
    },
    /**
     * This function runs when saving your block to XML. This is important if you need to save your block to XML at any point and then either
     * generate code from that XML or repopulate your workspace from that XML
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        // Do not use camelCase values for attribute names.
        container.setAttribute('column_type', this.columnType);
        // ALWAYS return container; this will be the input for domToMutation.
        return container;
    },
    /**
     * This function runs when loading your block from XML, after running init.
     * It's very important for updating your block in response to values selected in a field.
     */
    domToMutation: function (xmlElement) {
        // This attribute should match the one you used in mutationToDom
        var columnType = xmlElement.getAttribute('column_type');
        // If, for whatever reason, you try to save an undefined value in column_type, it will actually be saved as the string 'undefined'
        // If this is not an acceptable value, filter it out
        if(columnType && columnType !== 'undefined') {
            this.columnType = columnType;
        }
        // Run updateShape to append block values as needed
        this.updateShape();
    }
  };
  