
coloursets = 170;

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
      this.setColour(230);
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
      this.setColour(230);
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
      this.setColour(210);
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
      this.setColour(210);
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
      this.setColour(190);
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
      this.setColour(190);
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
      this.appendValueInput("NSD_ID")
          .setCheck("String")
          .appendField("NSDID");
      this.appendValueInput("VIM_ID")
          .setCheck("String")
          .appendField("VIM_ID");
      this.appendValueInput("statement")
          .setCheck("String")
          .appendField("config");
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
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
