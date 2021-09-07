
  Blockly.Blocks['logic_compare_strings'] = {
    /**
     * Block for comparison operator.
     * @this Blockly.Block
     */
    init: function() {
      var OPERATORS = Blockly.RTL ? [
            ['is equal to(strings)', 'EQ']
          ] : [
            ['is equal to(strings)', 'EQ']
          ];
      this.setColour(160);
      this.setOutput(true, 'Boolean');
      this.appendValueInput('A')
          .setCheck('String');
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

  Blockly.Blocks['procedures_nodefreturn2'] = {
    /**
     block name: procedures_nodefreturn2
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     short description: method without return
     included in final version: YES
   */
   init: function() {
     this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
     this.setColour(290);
     var name = Blockly.Procedures.findLegalName(
         Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
     this.appendDummyInput()
         .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
         .appendField(new Blockly.FieldTextInput(name,
         Blockly.Procedures.rename), 'NAME')
         .appendField('', 'PARAMS');
     this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
     this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
     this.arguments_ = [];
     this.setStatements_(true);
     this.statementConnection_ = null;
   },
   setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
   updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
   mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
   domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
   decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
   compose: Blockly.Blocks['procedures_defnoreturn'].compose,
   dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
   /**
    * Return the signature of this procedure definition.
    * @return {!Array} Tuple containing three elements:
    *     - the name of the defined procedure,
    *     - a list of all its arguments,
    *     - that it DOES have a return value.
    * @this Blockly.Block
    */
   getProcedureDef: function() {
     return [this.getFieldValue('NAME'), this.arguments_, true];
   },
   getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
   renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
   customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
   callType_: 'procedures_callreturn'
 };
 Blockly.Blocks['procedures_defreturn_String'] = {
    /**
     block name: procedures_defreturn_String
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     short description: method with string return value
     included in final version: YES
   */
   init: function() {
     this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
     this.setColour(160);
     var name = Blockly.Procedures.findLegalName(
         Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
     this.appendDummyInput()
         .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
         .appendField(new Blockly.FieldTextInput(name,
         Blockly.Procedures.rename), 'NAME')
         .appendField('', 'PARAMS');
     this.appendValueInput('RETURN')
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN +" "+"String")
     .setCheck('String');
     this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
     this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
     this.arguments_ = [];
     this.setStatements_(true);
     this.statementConnection_ = null;
   },
   setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
   updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
   mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
   domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
   decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
   compose: Blockly.Blocks['procedures_defnoreturn'].compose,
   dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
   /**
    * Return the signature of this procedure definition.
    * @return {!Array} Tuple containing three elements:
    *     - the name of the defined procedure,
    *     - a list of all its arguments,
    *     - that it DOES have a return value.
    * @this Blockly.Block
    */
   getProcedureDef: function() {
     return [this.getFieldValue('NAME'), this.arguments_, true];
   },
   getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
   renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
   customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
   callType_: 'procedures_callreturn'
 };
 Blockly.Blocks['procedures_defreturn_Int'] = {
    /**
     block name: procedures_defreturn_Int
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     short description: method with integer return value
     included in final version: YES
   */
   init: function() {
     this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
     this.setColour(60);
     var name = Blockly.Procedures.findLegalName(
         Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
     this.appendDummyInput()
         .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
         .appendField(new Blockly.FieldTextInput(name,
         Blockly.Procedures.rename), 'NAME')
         .appendField('', 'PARAMS');
     this.appendValueInput('RETURN')
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN +" "+"int")
     .setCheck('Number');
     this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
     this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
     this.arguments_ = [];
     this.setStatements_(true);
     this.statementConnection_ = null;
   },
   setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
   updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
   mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
   domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
   decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
   compose: Blockly.Blocks['procedures_defnoreturn'].compose,
   dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
   /**
    * Return the signature of this procedure definition.
    * @return {!Array} Tuple containing three elements:
    *     - the name of the defined procedure,
    *     - a list of all its arguments,
    *     - that it DOES have a return value.
    * @this Blockly.Block
    */
   getProcedureDef: function() {
     return [this.getFieldValue('NAME'), this.arguments_, true];
   },
   getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
   renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
   customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
   callType_: 'procedures_callreturn'
 };
 Blockly.Blocks['procedures_defreturn_Boolean'] = {
   /**
     block name: procedures_defreturn_Boolean
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     short description: method with boolean return value
     included in final version: YES
   */
   init: function() {
     this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
     this.setColour(90);
     var name = Blockly.Procedures.findLegalName(
         Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
     this.appendDummyInput()
         .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
         .appendField(new Blockly.FieldTextInput(name,
         Blockly.Procedures.rename), 'NAME')
         .appendField('', 'PARAMS');
     this.appendValueInput('RETURN')
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN +" "+"boolean")
     .setCheck('Boolean');
     this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
     this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
     this.arguments_ = [];
     this.setStatements_(true);
     this.statementConnection_ = null;
   },
   setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
   updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
   mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
   domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
   decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
   compose: Blockly.Blocks['procedures_defnoreturn'].compose,
   dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
   /**
    * Return the signature of this procedure definition.
    * @return {!Array} Tuple containing three elements:
    *     - the name of the defined procedure,
    *     - a list of all its arguments,
    *     - that it DOES have a return value.
    * @this Blockly.Block
    */
   getProcedureDef: function() {
     return [this.getFieldValue('NAME'), this.arguments_, true];
   },
   getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
   renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
   customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
   callType_: 'procedures_callreturn'
 };
 
 
 Blockly.Blocks['variable_get'] = {
    /**
     block name: variable_get
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     short description: variable getter
     included in final version: YES
   */
   init: function() {
     this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
     this.setColour(330);
     this.appendDummyInput()
         .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
         .appendField(new Blockly.FieldVariable(
         Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
         .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
     this.setOutput(true);
     this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
     this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
     this.contextMenuType_ = 'variables_set';
   },
   /**
    * Return all variables referenced by this block.
    * @return {!Array.<string>} List of variable names.
    * @this Blockly.Block
    */
   getVars: function() {
     return [this.getFieldValue('VAR')];
   },
   /**
    * Notification that a variable is renaming.
    * If the name matches one of this block's variables, rename it.
    * @param {string} oldName Previous name of variable.
    * @param {string} newName Renamed variable.
    * @this Blockly.Block
    */
   renameVar: function(oldName, newName) {
     if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
       this.setFieldValue(newName, 'VAR');
     }
   },
   /**
    * Add menu option to create getter/setter block for this setter/getter.
    * @param {!Array} options List of menu options to add to.
    * @this Blockly.Block
    */
   customContextMenu: function(options) {
     var option = {enabled: true};
     var name = this.getFieldValue('VAR');
     option.text = this.contextMenuMsg_.replace('%1', name);
     var xmlField = goog.dom.createDom('field', null, name);
     xmlField.setAttribute('name', 'VAR');
     var xmlBlock = goog.dom.createDom('block', null, xmlField);
     xmlBlock.setAttribute('type', this.contextMenuType_);
     option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
     options.push(option);
   }
 };
 
 
 
 /*
 __________________________________________________________________________
 __________________________________________________________________________
 Others: Non included, tests.
 __________________________________________________________________________
 __________________________________________________________________________
 */
 Blockly.Blocks['variable_input'] = {
    /**
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     included in final version: NO
   */
   init: function() {
     this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
     this.setColour(30);
     this.appendDummyInput()
         .appendTitle("input")
       .appendTitle(new Blockly.FieldDropdown([["String", "String"],["int", "int"],["boolean", "boolean"]]), "const_type");
     this.interpolateMsg(
         'called' + ' %1',// +
         //Blockly.Msg.VARIABLES_SET_TAIL + ' %3',
         ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
         //['VALUE', null, Blockly.ALIGN_RIGHT],
         Blockly.ALIGN_RIGHT);
      this.setOutput(true);
     this.setInputsInline(true);
     this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
     this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
     this.contextMenuType_ = 'variables_get';
   },
   /**
    * Return all variables referenced by this block.
    * @return {!Array.<string>} List of variable names.
    * @this Blockly.Block
    */
   getVars: function() {
     return [this.getFieldValue('VAR')];
   },
   /**
    * Notification that a variable is renaming.
    * If the name matches one of this block's variables, rename it.
    * @param {string} oldName Previous name of variable.
    * @param {string} newName Renamed variable.
    * @this Blockly.Block
    */
   renameVar: function(oldName, newName) {
     if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
       this.setFieldValue(newName, 'VAR');
     }
   },
   customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
 };
 Blockly.Blocks['create_constant_arith'] = {
   /**
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     included in final version: NO
   */
   init: function() {
     this.setHelpUrl('http://www.example.com/');
     this.setColour(247);
     this.appendValueInput("const_value")
         .setCheck("Number")
         .appendTitle("create number named")
         .appendTitle(new Blockly.FieldTextInput("var_name"), "const__name")
         .appendTitle("as")
         .appendTitle(new Blockly.FieldDropdown([["integer", "int"], ["float", "float"]]), "const_type")
     .appendTitle("with value");
     this.setTooltip('');
   }
 };
 Blockly.Blocks['get_int'] = {
   /**
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     included in final version: NO
   */
   init: function() {
     this.setHelpUrl('http://www.example.com/');
     this.setColour(20);
     this.appendDummyInput()
         .appendTitle("return number named")
         .appendTitle(new Blockly.FieldVariable("item"), "NAME");
     this.setOutput(true, "Number");
     this.setTooltip('');
   },
    renameVar: function(oldName, newName) {
     if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
       this.setFieldValue(newName, 'NAME');
     }
   }
 };
 Blockly.Blocks['create_constant_boolean'] = {
   /**
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     included in final version: NO
   */
   init: function() {
     this.setHelpUrl('http://www.example.com/');
     this.setColour(181);
     this.appendValueInput("NAME")
         .setCheck("Boolean")
         .appendTitle("create boolean variable named")
         .appendTitle(new Blockly.FieldTextInput("boolean_var"), "name")
         .appendTitle("with value");
     this.setTooltip('');
   }
 };
 Blockly.Blocks['get_boolean'] = {
   /**
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     included in final version: NO
   */
   init: function() {
     this.setHelpUrl('http://www.example.com/');
     this.setColour(181);
     this.appendDummyInput()
         .appendTitle("return boolean named")
         .appendTitle(new Blockly.FieldVariable("item"), "NAME");
     this.setOutput(true, "Boolean");
     this.setTooltip('');
   },
    renameVar: function(oldName, newName) {
     if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
       this.setFieldValue(newName, 'NAME');
     }
   }
 };
 Blockly.Blocks['get_string'] = {
   /**
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     included in final version: NO
   */
   init: function() {
     this.setHelpUrl('http://www.example.com/');
     this.setColour(160);
     this.appendDummyInput()
         .appendTitle("return string named")
         .appendTitle(new Blockly.FieldVariable("item"), "NAME");
     this.setOutput(true, "String");
     this.setTooltip('');
   },
    renameVar: function(oldName, newName) {
     if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
       this.setFieldValue(newName, 'NAME');
     }
   }
 };
 Blockly.Blocks['create_string'] = {
   /**
     authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
     included in final version: NO
   */
   init: function() {
     this.setHelpUrl('http://www.example.com/');
     this.setColour(181);
     this.appendValueInput("value")
         .setCheck("String")
         .appendTitle("create String named")
         .appendTitle(new Blockly.FieldTextInput("default"), "NAME")
         .appendTitle("with value");
     this.setTooltip('');
   }
 };

 Blockly.Blocks['literal_text'] = {
  /**
   * Block for text value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_TEXT_HELPURL);
    this.setColour(160);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TEXT_TEXT_TOOLTIP);
  },
  /**
   * Create an image of an open or closed quote.
   * @param {boolean} open True if open quote, false if closed.
   * @return {!Blockly.FieldImage} The field image of the quote.
   * @private
   */
  newQuote_: function(open) {
    if (open == Blockly.RTL) {
      var file = 'quote1.png';
    } else {
      var file = 'quote0.png';
    }
    return new Blockly.FieldImage(Blockly.pathToMedia + file, 12, 12, '"');
  }
};

Blockly.Blocks['literal_integer'] = {
  /**
  * Block for numeric integer value.
  * @this Blockly.Block
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(230);
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput('0',
    Blockly.FieldTextInput.integerValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};


Blockly.Blocks['literal_boolean'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    var BOOLEANS =
        [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, 'TRUE'],
         [Blockly.Msg.LOGIC_BOOLEAN_FALSE, 'FALSE']];
    this.setHelpUrl(Blockly.Msg.LOGIC_BOOLEAN_HELPURL);
    this.setColour(90);
    this.setOutput(true, 'Boolean');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(BOOLEANS), 'BOOL');
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
  }
};




/*
 * --- STRINGS ---
 *
*/
Blockly.Blocks['variable_declare_string'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(160);
    var name = 'strvar' + Blockly.Variables.generateUniqueName(Blockly.getMainWorkspace() );
    var newString = new Blockly.FieldVariable( name, null, null, 'string');
    // this.interpolateMsg(
    //   'define String '+
    //   'called' + ' %1',
    //   ['VAR', newString],
    //   Blockly.ALIGN_RIGHT); 
    

      this.appendValueInput('VALUE')
      .appendField("Create String variable")
      .appendField(newString, "VAR")
      .appendField("=")
      .setCheck("String");
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
      this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
      this.contextMenuType_ = 'variables_get';
    },
    /**
    * Return all variables referenced by this block.
    * @return {!Array.<string>} List of variable names.
    * @this Blockly.Block
    */
    getVars: function() {
      return [this.getFieldValue('VAR')];
    },
    /**
    * Notification that a variable is renaming.
    * If the name matches one of this block's variables, rename it.
    * @param {string} oldName Previous name of variable.
    * @param {string} newName Renamed variable.
    * @this Blockly.Block
    */
    renameVar: function(oldName, newName) {
      if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
        this.setFieldValue(newName, 'VAR');
      }
    },
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
  };


Blockly.Blocks['variable_get_string'] = {
    /**
    * Block for variable getter.
    * @this Blockly.Block
    */
    init: function() {
      this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
      this.setColour(160);
      // var name = Blockly.VariablesString.randomVariablesString();
      
      var name = 'strvar' + Blockly.Variables.generateUniqueName(Blockly.getMainWorkspace() );
      var newString = new Blockly.FieldVariable( name, null, null, 'string');

      this.appendDummyInput()
      .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
      .appendField( newString, 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
        this.setOutput(true,'String');
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
        this.contextMenuType_ = 'variables_set';
      },
      /**
      * Return all variables referenced by this block.
      * @return {!Array.<string>} List of variable names.
      * @this Blockly.Block
      */
      getVars: function() {
        return [this.getFieldValue('VAR')];
      },
      /**
      * Notification that a variable is renaming.
      * If the name matches one of this block's variables, rename it.
      * @param {string} oldName Previous name of variable.
      * @param {string} newName Renamed variable.
      * @this Blockly.Block
      */
      renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
          this.setFieldValue(newName, 'VAR');
        }
      },
      /**
      * Add menu option to create getter/setter block for this setter/getter.
      * @param {!Array} options List of menu options to add to.
      * @this Blockly.Block
      */
      customContextMenu: function(options) {
        var option = {enabled: true};
        var name = this.getFieldValue('VAR');
        option.text = this.contextMenuMsg_.replace('%1', name);
        var xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');
        var xmlBlock = goog.dom.createDom('block', null, xmlField);
        xmlBlock.setAttribute('type', this.contextMenuType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
      }
    };


Blockly.Blocks['variable_set_string'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(160);
    //var name = Blockly.VariablesString.randomVariablesString();
    // this.interpolateMsg(
    //     // TODO: Combine these messages instead of using concatenation.
    //     'set' + ' %1 ',
    //     ['VAR', new Blockly. FieldVariable(null,null,null,'String')],
    //     Blockly.ALIGN_RIGHT);
    
    var name = 'strvar' + Blockly.Variables.generateUniqueName(Blockly.getMainWorkspace() );
    var newString = new Blockly.FieldVariable( name, null, null, 'string');
    
    this.appendValueInput('VALUE')
    .appendField( newString, 'VAR')
    .appendField("=")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};




/*
 * --- NUMBER ---
 *
*/
Blockly.Blocks['variable_declare_int'] = {
    init: function() {
      this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
      this.setColour(230);
      var name = Blockly.Variables.generateUniqueName(Blockly.getMainWorkspace() );
      var newString = new Blockly.FieldVariable( name, null, null, 'Number');
      // this.interpolateMsg(
      //   'define int '+
      //   'called' + ' %1' ,//+
      //   ['VAR', new Blockly.FieldVariableInteger(null)],
      //   Blockly.ALIGN_RIGHT);
        this.appendValueInput('VALUE')
        .appendField("Create Integer variable")
        .appendField(newString, "VAR")
        .appendField("=")
        .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
        this.contextMenuType_ = 'variables_get';
      },
      /**
      * Return all variables referenced by this block.
      * @return {!Array.<string>} List of variable names.
      * @this Blockly.Block
      */
      getVars: function() {
        return [this.getFieldValue('VAR')];
      },
      /**
      * Notification that a variable is renaming.
      * If the name matches one of this block's variables, rename it.
      * @param {string} oldName Previous name of variable.
      * @param {string} newName Renamed variable.
      * @this Blockly.Block
      */
      renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
          this.setFieldValue(newName, 'VAR');
        }
      },
      customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
    };


Blockly.Blocks['variable_get_int'] = {
    /**
    * Block for variable getter.
    * @this Blockly.Block
    */
    init: function() {
      this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
      this.setColour(230);
      var name = Blockly.Variables.generateUniqueName(Blockly.getMainWorkspace() );
      var newString = new Blockly.FieldVariable( name, null, null, 'Number');

      //var name = Blockly.VariablesInteger.randomVariablesInteger;
      this.appendDummyInput()
      .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
      .appendField(newString, 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
        this.setOutput(true,'Number');
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
        this.contextMenuType_ = 'variables_set';
      },
      /**
      * Return all variables referenced by this block.
      * @return {!Array.<string>} List of variable names.
      * @this Blockly.Block
      */
      getVars: function() {
        return [this.getFieldValue('VAR')];
      },
      /**
      * Notification that a variable is renaming.
      * If the name matches one of this block's variables, rename it.
      * @param {string} oldName Previous name of variable.
      * @param {string} newName Renamed variable.
      * @this Blockly.Block
      */
      renameVar: function(oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
          this.setFieldValue(newName, 'VAR');
        }
      },
      /**
      * Add menu option to create getter/setter block for this setter/getter.
      * @param {!Array} options List of menu options to add to.
      * @this Blockly.Block
      */
      customContextMenu: function(options) {
        var option = {enabled: true};
        var name = this.getFieldValue('VAR');
        option.text = this.contextMenuMsg_.replace('%1', name);
        var xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');
        var xmlBlock = goog.dom.createDom('block', null, xmlField);
        xmlBlock.setAttribute('type', this.contextMenuType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
      }
    };

Blockly.Blocks['variable_set_int'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(230);
    var name = Blockly.Variables.generateUniqueName(Blockly.getMainWorkspace() );
    var newString = new Blockly.FieldVariable( name, null, null, 'Number');

    //var name = Blockly.VariablesInteger.randomVariablesInteger();
    // this.interpolateMsg(
    //     // TODO: Combine these messages instead of using concatenation.
    //     'set' + ' %1 ',
    //     ['VAR', new Blockly.FieldVariableInteger(name)],
    //     Blockly.ALIGN_RIGHT);
    this.appendValueInput('VALUE')
    .appendField( newString, 'VAR')
    .appendField("=")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};




Blockly.Blocks['variable_declare_float'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(230);
    var name = Blockly.Variables.generateUniqueName(Blockly.getMainWorkspace() );
    var newString = new Blockly.FieldVariable( name, null, null, 'Number');
    // this.interpolateMsg(
    //   'define int '+
    //   'called' + ' %1' ,//+
    //   ['VAR', new Blockly.FieldVariableInteger(null)],
    //   Blockly.ALIGN_RIGHT);
      this.appendValueInput('VALUE')
      .appendField("Create Float variable")
      .appendField(newString, "VAR")
      .appendField("=")
      .setCheck("Number");
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
      this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
      this.contextMenuType_ = 'variables_get';
    },
    /**
    * Return all variables referenced by this block.
    * @return {!Array.<string>} List of variable names.
    * @this Blockly.Block
    */
    getVars: function() {
      return [this.getFieldValue('VAR')];
    },
    /**
    * Notification that a variable is renaming.
    * If the name matches one of this block's variables, rename it.
    * @param {string} oldName Previous name of variable.
    * @param {string} newName Renamed variable.
    * @this Blockly.Block
    */
    renameVar: function(oldName, newName) {
      if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
        this.setFieldValue(newName, 'VAR');
      }
    },
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
  };



  

/*
* --- BOOLEAN ---
*
*/
Blockly.Blocks['variable_declare_boolean'] = {
      init: function() {
        this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
        this.setColour(90);
        this.interpolateMsg(
          'define boolean '+
          'called' + ' %1' ,
          ['VAR', new Blockly.FieldVariableBoolean(null)],
          Blockly.ALIGN_RIGHT);
          this.appendValueInput('VALUE')
          .setCheck("Boolean");
          this.setInputsInline(true);
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
          this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
          this.contextMenuType_ = 'variables_get';
        },
        /**
        * Return all variables referenced by this block.
        * @return {!Array.<string>} List of variable names.
        * @this Blockly.Block
        */
        getVars: function() {
          return [this.getFieldValue('VAR')];
        },
        /**
        * Notification that a variable is renaming.
        * If the name matches one of this block's variables, rename it.
        * @param {string} oldName Previous name of variable.
        * @param {string} newName Renamed variable.
        * @this Blockly.Block
        */
        renameVar: function(oldName, newName) {
          if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setFieldValue(newName, 'VAR');
          }
        },
        customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};

Blockly.Blocks['variable_get_boolean'] = {
  /**
  * Block for variable getter.
  * @this Blockly.Block
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(90);
    var name = Blockly.VariablesBoolean.randomVariablesBoolean();
    this.appendDummyInput()
    .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
    .appendField(new Blockly.FieldVariableBoolean(
      name), 'VAR')
      .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
      this.setOutput(true,'Boolean');
      this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
      this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
      this.contextMenuType_ = 'variables_set';
    },
    /**
    * Return all variables referenced by this block.
    * @return {!Array.<string>} List of variable names.
    * @this Blockly.Block
    */
    getVars: function() {
      return [this.getFieldValue('VAR')];
    },
    /**
    * Notification that a variable is renaming.
    * If the name matches one of this block's variables, rename it.
    * @param {string} oldName Previous name of variable.
    * @param {string} newName Renamed variable.
    * @this Blockly.Block
    */
    renameVar: function(oldName, newName) {
      if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
        this.setFieldValue(newName, 'VAR');
      }
    },
    /**
    * Add menu option to create getter/setter block for this setter/getter.
    * @param {!Array} options List of menu options to add to.
    * @this Blockly.Block
    */
    customContextMenu: function(options) {
      var option = {enabled: true};
      var name = this.getFieldValue('VAR');
      option.text = this.contextMenuMsg_.replace('%1', name);
      var xmlField = goog.dom.createDom('field', null, name);
      xmlField.setAttribute('name', 'VAR');
      var xmlBlock = goog.dom.createDom('block', null, xmlField);
      xmlBlock.setAttribute('type', this.contextMenuType_);
      option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
      options.push(option);
    }
  };

Blockly.Blocks['variable_set_boolean'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(90);
    var name = Blockly.VariablesBoolean.randomVariablesBoolean();
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        'set' + ' %1 ',
        ['VAR', new Blockly.FieldVariableBoolean(name)],
        Blockly.ALIGN_RIGHT);
    this.appendValueInput('VALUE')
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};
  


