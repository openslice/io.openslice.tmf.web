
coloursets = 260;

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


  Blockly.Blocks['getcharacteristicvalue'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL")
          .appendField(new Blockly.FieldDropdown([["Area of Service","Area of Service"], ["Area of Service: Region specification","Area of Service: Region specification"], ["Delay tolerance","Delay tolerance"], ["NSD_5GCORE::CONFIG","NSD_5GCORE::CONFIG"], ["Slice quality of service parameters: 3GPP 5QI","Slice quality of service parameters: 3GPP 5QI"] ]), "NAME");
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'String');
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['setcharacteristicvalue'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck(null)
          .appendField("Set Value")
          .appendField(new Blockly.FieldDropdown([["Area of Service","Area of Service"], ["Area of Service: Region specification","Area of Service: Region specification"], ["Delay tolerance","Delay tolerance"],["NSD_5GCORE::CONFIG","NSD_5GCORE::CONFIG"], ["Slice quality of service parameters: 3GPP 5QI","Slice quality of service parameters: 3GPP 5QI"] ]), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



  Blockly.Blocks['getcharval_string'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")          
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'String');
      this.setColour(30);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['setcharval_string'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("String")
          //.appendField("Set")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(30);
   this.setTooltip("");
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
      this.setColour(60);
   this.setTooltip("");
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
      this.setColour(60);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['getcharval_bool'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")          
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'Boolean');
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['setcharval_bool'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("Boolean")
          //.appendField("Set")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  
  Blockly.Blocks['getcharval_set'] = {
    init: function() {
      this.appendDummyInput()
          //.appendField("Get Value")
          .appendField(new Blockly.FieldLabelSerializable(""), "AVALUE")          
      //this.setOutput(true, ["Boolean", "SET", "String"]);
      this.setOutput(true, 'SET');
      this.setColour(coloursets);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['setcharval_set'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("Array")
          //.appendField("Set")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(coloursets);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['setcharval_sadd'] = {
    init: function() {
      this.appendValueInput("AVALUE")
          .setCheck("Array")
          .appendField("Add")
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
          .appendField("Remove")
          .appendField(new Blockly.FieldLabelSerializable(""), "NAMELBL");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(coloursets);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['osm_nsd_config'] = {
    init: function() {
      this.appendValueInput("NSDID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("NSDID(Text)");
      this.appendValueInput("VIMID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("VIMID(Text)");
      this.appendValueInput("config")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("config(Text/json)");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['osm_nsd_config_detailed'] = {
    init: function() {
      this.appendValueInput("NSDID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("NSDID(Text)");
      this.appendValueInput("VIMID")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("VIMID(Text)");
      this.appendValueInput("VNF")
          .setCheck("Array")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("VNF(Array)");
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
          .setCheck("String")
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
     
          
      this.setOutput(true, 'String');      
      this.setColour(230);
   this.setTooltip("Constructs a json string to be used for OSM configuration for member-additionalParamsForVnf.");
   this.setHelpUrl("");
    }
  };

  Blockly.Blocks['osm_nsd_config_param'] = {
    init: function() {
      this.appendValueInput("paramname")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("param name(Text)");
      this.appendValueInput("paramvalue")
          .setCheck("String")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("param value(Text)");    
     
          
      this.setOutput(true, 'String');      
      this.setColour(230);
   this.setTooltip("Constructs a json string to be used for OSM configuration for a parameter in additionalParamsForVnf.");
   this.setHelpUrl("");
    }
  };


  Blockly.Blocks['logic_set_contains_strings'] = {
    /**
     * Block for comparison operator.
     * @this Blockly.Block
     */
    init: function() {
      var OPERATORS = Blockly.RTL ? [
            ['set contains(strings)', 'EQ']
          ] : [
            ['set contains(strings)', 'EQ']
          ];
      this.setColour( coloursets );
      this.setOutput(true, 'Boolean');
      this.appendValueInput('A')
          .setCheck('SET');
      this.appendValueInput('B')
          .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP')
          .setCheck('Array');
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
