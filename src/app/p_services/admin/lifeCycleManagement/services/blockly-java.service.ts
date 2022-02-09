import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BlocklyJavaService {


  constructor() { }

  
  createJava(ws: any, Blockly: any): void {

    /**
    * Java code generator.
    * @type !Blockly.Generator
    */
    Blockly.Java = new Blockly.Generator('Java');




    /**
     * List of illegal variable names.
     * This is not intended to be a security feature.  Blockly is 100% client-side,
     * so bypassing this list is trivial.  This is intended to prevent users from
     * accidentally clobbering a built-in object or function.
     * @private
     */
    Blockly.Java.addReservedWords(
      'Blockly,' +  // In case JS is evaled in the current window.
      // https://developer.mozilla.org/en/Java/Reference/Reserved_Words
      'break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,' +
      'class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,' +
      'const,null,true,false,' +
      // https://developer.mozilla.org/en/Java/Reference/Global_Objects
      'Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,' +
      // https://developer.mozilla.org/en/DOM/window
      'applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,' +
      'addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,' +
      'onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,' +
      'Image,Option,Worker,' +
      // https://developer.mozilla.org/en/Gecko_DOM_Reference
      'Event,Range,File,FileReader,Blob,BlobBuilder,' +
      'Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,' +
      'HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,' +
      'HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,' +
      'SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,' +
      'SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,' +
      'SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,' +
      'SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,' +
      'SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan');

    /**
    * Order of operation ENUMs.
    * https://developer.mozilla.org/en/Java/Reference/Operators/Operator_Precedence
    */
    Blockly.Java.ORDER_ATOMIC = 0;         // 0 "" ...
    Blockly.Java.ORDER_MEMBER = 1;         // . []
    Blockly.Java.ORDER_NEW = 1;            // new
    Blockly.Java.ORDER_FUNCTION_CALL = 2;  // ()
    Blockly.Java.ORDER_INCREMENT = 3;      // ++
    Blockly.Java.ORDER_DECREMENT = 3;      // --
    Blockly.Java.ORDER_LOGICAL_NOT = 4;    // !
    Blockly.Java.ORDER_BITWISE_NOT = 4;    // ~
    Blockly.Java.ORDER_UNARY_PLUS = 4;     // +
    Blockly.Java.ORDER_UNARY_NEGATION = 4; // -
    Blockly.Java.ORDER_TYPEOF = 4;         // typeof
    Blockly.Java.ORDER_VOID = 4;           // void
    Blockly.Java.ORDER_DELETE = 4;         // delete
    Blockly.Java.ORDER_MULTIPLICATION = 5; // *
    Blockly.Java.ORDER_DIVISION = 5;       // /
    Blockly.Java.ORDER_MODULUS = 5;        // %
    Blockly.Java.ORDER_ADDITION = 6;       // +
    Blockly.Java.ORDER_SUBTRACTION = 6;    // -
    Blockly.Java.ORDER_BITWISE_SHIFT = 7;  // << >> >>>
    Blockly.Java.ORDER_RELATIONAL = 8;     // < <= > >=
    Blockly.Java.ORDER_IN = 8;             // in
    Blockly.Java.ORDER_INSTANCEOF = 8;     // instanceof
    Blockly.Java.ORDER_EQUALITY = 9;       // == != === !==
    Blockly.Java.ORDER_BITWISE_AND = 10;   // &
    Blockly.Java.ORDER_BITWISE_XOR = 11;   // ^
    Blockly.Java.ORDER_BITWISE_OR = 12;    // |
    Blockly.Java.ORDER_LOGICAL_AND = 13;   // &&
    Blockly.Java.ORDER_LOGICAL_OR = 14;    // ||
    Blockly.Java.ORDER_CONDITIONAL = 15;   // ?:
    Blockly.Java.ORDER_ASSIGNMENT = 16;    // = += -= *= /= %= <<= >>= ...
    Blockly.Java.ORDER_COMMA = 17;         // ,
    Blockly.Java.ORDER_EQUALITY_ST = 18;       // .equals
    Blockly.Java.ORDER_NONE = 99;          // (...)

    /**
    * Initialise the database of variable names.
    */
    Blockly.Java.init = function () {
      // Create a dictionary of definitions to be printed before the code.
      Blockly.Java.definitions_ = Object.create(null);
      // Create a dictionary mapping desired function names in definitions_
      // to actual function names (to avoid collisions with user functions).
      Blockly.Java.functionNames_ = Object.create(null);

      if (!Blockly.Java.nameDB_) {
        Blockly.Java.nameDB_ =
          new Blockly.Names(Blockly.Java.RESERVED_WORDS_);
      } else {
        Blockly.Java.nameDB_.reset();
      }

      var defvars = [];
      Blockly.Java.nameDB_.setVariableMap(ws.getVariableMap());
      var variables = ws.getVariableMap();
      for (var x = 0; x < variables.length; x++) {
        defvars[x] = Blockly.Java.nameDB_.getName(variables[x],
          Blockly.Variables.NAME_TYPE) +
          Blockly.Java.nameDB_.getName(variables[x],
            Blockly.Variables.NAME_TYPE) + ';';
      }

      Blockly.Java.definitions_['variables'] = defvars.join('\n');
    };

    /**
    * Prepend the generated code with the variable definitions.
    * @param {string} code Generated code.
    * @return {string} Completed code.
    */
    Blockly.Java.finish = function (code: string) {
      // Convert the definitions dictionary into a list.
      var definitions = [];
      for (var name in Blockly.Java.definitions_) {
        definitions.push(Blockly.Java.definitions_[name]);
      }
      return definitions.join('\n\n') + '\n\n\n' + code;
    };

    /**
    * Naked values are top-level blocks with outputs that aren't plugged into
    * anything.  A trailing semicolon is needed to make this legal.
    * @param {string} line Line of generated code.
    * @return {string} Legal line of code.
    */
    Blockly.Java.scrubNakedValue = function (line: string) {
      return line + ';\n';
    };

    /**
    * Encode a string as a properly escaped Java string, complete with
    * quotes.
    * @param {string} string Text to encode.
    * @return {string} Java string.
    * @private
    */
    Blockly.Java.quote_ = function (s: string) {
      // TODO: This is a quick hack.  Replace with goog.string.quote
      s = s.replace(/\\/g, '\\\\')
        .replace(/\n/g, '\\\n')
        .replace(/'/g, '\\\'');
      return '"' + s + '"';
    };

    /**
    * Common tasks for generating Java from blocks.
    * Handles comments for the specified block and any connected value blocks.
    * Calls any statements following this block.
    * @param {!Blockly.Block} block The current block.
    * @param {string} code The Java code created for this block.
    * @return {string} Java code with comments and subsequent blocks added.
    * @private
    */
    Blockly.Java.scrub_ = function (block: { outputConnection: { targetConnection: any; }; getCommentText: () => any; inputList: string | any[]; nextConnection: { targetBlock: () => any; }; }, code: string) {
      var commentCode = '';
      // Only collect comments for blocks that aren't inline.
      if (!block.outputConnection || !block.outputConnection.targetConnection) {
        // Collect comment for this block.
        var comment = block.getCommentText();
        if (comment) {
          commentCode += Blockly.Java.prefixLines(comment, '// ') + '\n';
        }
        // Collect comments for all value arguments.
        // Don't collect comments for nested statements.
        for (var x = 0; x < block.inputList.length; x++) {
          if (block.inputList[x].type == Blockly.INPUT_VALUE) {
            var childBlock = block.inputList[x].connection.targetBlock();
            if (childBlock) {
              var comment = Blockly.Java.allNestedComments(childBlock);
              if (comment) {
                commentCode += Blockly.Java.prefixLines(comment, '// ');
              }
            }
          }
        }
      }
      var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
      var nextCode = Blockly.Java.blockToCode(nextBlock);
      return commentCode + code + nextCode;
    };




    Blockly.Java['controls_if'] = function (block: { elseifCount_: number; elseCount_: any; }) {
      // If/elseif/else condition.
      var n = 0;
      var argument = Blockly.Java.valueToCode(block, 'IF' + n,
        Blockly.Java.ORDER_NONE) || 'false';
      var branch = Blockly.Java.statementToCode(block, 'DO' + n);
      var code = 'if (' + argument + ') {\n' + branch + '}';
      for (n = 1; n <= block.elseifCount_; n++) {
        argument = Blockly.Java.valueToCode(block, 'IF' + n,
          Blockly.Java.ORDER_NONE) || 'false';
        branch = Blockly.Java.statementToCode(block, 'DO' + n);
        code += ' else if (' + argument + ') {\n' + branch + '}';
      }
      if (block.elseCount_) {
        branch = Blockly.Java.statementToCode(block, 'ELSE');
        code += ' else {\n' + branch + '}';
      }
      return code + '\n';
    };

    Blockly.Java['logic_compare_strings'] = function (block: { getFieldValue: (arg0: string) => string }) {
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


    Blockly.Java['logic_compare'] = function (block: { getFieldValue: (arg0: string) => string | number; }) {
      // Comparison operator.
      var OPERATORS: { [index: string]: string } = {
        'EQ': '==',
        'NEQ': '!=',
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
      };
      var operator = OPERATORS[block.getFieldValue('OP')];
      var order = (operator == '==' || operator == '!=') ?
        Blockly.Java.ORDER_EQUALITY : Blockly.Java.ORDER_RELATIONAL;
      var argument0 = Blockly.Java.valueToCode(block, 'A', order) || '0';
      var argument1 = Blockly.Java.valueToCode(block, 'B', order) || '0';
      var code = argument0 + ' ' + operator + ' ' + argument1;
      return [code, order];
    };

    Blockly.Java['logic_operation'] = function (block: { getFieldValue: (arg0: string) => string; }) {
      // Operations 'and', 'or'.
      var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
      var order = (operator == '&&') ? Blockly.Java.ORDER_LOGICAL_AND :
        Blockly.Java.ORDER_LOGICAL_OR;
      var argument0 = Blockly.Java.valueToCode(block, 'A', order);
      var argument1 = Blockly.Java.valueToCode(block, 'B', order);
      if (!argument0 && !argument1) {
        // If there are no arguments, then the return value is false.
        argument0 = 'false';
        argument1 = 'false';
      } else {
        // Single missing arguments have no effect on the return value.
        var defaultArgument = (operator == '&&') ? 'true' : 'false';
        if (!argument0) {
          argument0 = defaultArgument;
        }
        if (!argument1) {
          argument1 = defaultArgument;
        }
      }
      var code = argument0 + ' ' + operator + ' ' + argument1;
      return [code, order];
    };



    Blockly.Java['logic_negate'] = function (block: any) {
      // Negation.
      var order = Blockly.Java.ORDER_LOGICAL_NOT;
      var argument0 = Blockly.Java.valueToCode(block, 'BOOL', order) ||
        'true';
      var code = '!' + argument0;
      return [code, order];
    };



    Blockly.Java['logic_null'] = function (block: any) {
      // Null data type.
      return ['null', Blockly.Java.ORDER_ATOMIC];
    };

    Blockly.Java['logic_ternary'] = function (block: any) {
      // Ternary operator.
      var value_if = Blockly.Java.valueToCode(block, 'IF',
        Blockly.Java.ORDER_CONDITIONAL) || 'false';
      var value_then = Blockly.Java.valueToCode(block, 'THEN',
        Blockly.Java.ORDER_CONDITIONAL) || 'null';
      var value_else = Blockly.Java.valueToCode(block, 'ELSE',
        Blockly.Java.ORDER_CONDITIONAL) || 'null';
      var code = value_if + ' ? ' + value_then + ' : ' + value_else;
      return [code, Blockly.Java.ORDER_CONDITIONAL];
    };


    Blockly.Java['controls_repeat'] = function (block: { getFieldValue: (arg0: string) => any; id: any; }) {
      // Repeat n times (internal number).
      var repeats = Number(block.getFieldValue('TIMES'));
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      var loopVar = Blockly.Java.nameDB_.getDistinctName(
        'count', Blockly.Variables.NAME_TYPE);
      var code = 'for (var ' + loopVar + ' = 0; ' +
        loopVar + ' < ' + repeats + '; ' +
        loopVar + '++) {\n' +
        branch + '}\n';
      return code;
    };

    Blockly.Java['controls_repeat_ext'] = function (block: { id: any; }) {
      // Repeat n times (external number).
      var repeats = Blockly.Java.valueToCode(block, 'TIMES',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      var code = '';
      var loopVar = Blockly.Java.nameDB_.getDistinctName(
        'count', Blockly.Variables.NAME_TYPE);
      var endVar = repeats;
      if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
        var endVar = Blockly.Java.nameDB_.getDistinctName(
          'repeat_end', Blockly.Variables.NAME_TYPE);
        code += 'var ' + endVar + ' = ' + repeats + ';\n';
      }
      code += 'for ( int ' + loopVar + ' = 0; ' +
        loopVar + ' < ' + endVar + '; ' +
        loopVar + '++) {\n' +
        branch + '}\n';
      return code;
    };

    Blockly.Java['controls_whileUntil'] = function (block: { getFieldValue: (arg0: string) => string; id: any; }) {
      // Do while/until loop.
      var until = block.getFieldValue('MODE') == 'UNTIL';
      var argument0 = Blockly.Java.valueToCode(block, 'BOOL',
        until ? Blockly.Java.ORDER_LOGICAL_NOT :
          Blockly.Java.ORDER_NONE) || 'false';
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      if (until) {
        return 'do{\n' + branch + '}while (' + argument0 + ');\n';
      } else {
        return 'while (' + argument0 + ') {\n' + branch + '}\n';
      }

    };

    Blockly.Java['controls_for'] = function (block: { getFieldValue: (arg0: string) => any; id: any; }) {
      // For loop.
      var variable0 = Blockly.Java.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      var argument0 = Blockly.Java.valueToCode(block, 'FROM',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
      var argument1 = Blockly.Java.valueToCode(block, 'TO',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
      var increment = Blockly.Java.valueToCode(block, 'BY',
        Blockly.Java.ORDER_ASSIGNMENT) || '1';
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      var code;
      if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
        Blockly.isNumber(increment)) {
        // All arguments are simple numbers.
        var up = parseFloat(argument0) <= parseFloat(argument1);
        code = 'for (int ' + variable0 + ' = ' + argument0 + '; ' +
          variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
          variable0;
        var step = Math.abs(parseFloat(increment));
        if (step == 1) {
          code += up ? '++' : '--';
        } else {
          code += (up ? ' += ' : ' -= ') + step;
        }
        code += ') {\n' + branch + '}\n';
      } else {
        code = '';
        // Cache non-trivial values to variables to prevent repeated look-ups.
        var startVar = argument0;
        if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
          var startVar = Blockly.Java.nameDB_.getDistinctName(
            variable0 + '_start', Blockly.Variables.NAME_TYPE);
          code += 'var ' + startVar + ' = ' + argument0 + ';\n';
        }
        var endVar = argument1;
        if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
          var endVar = Blockly.Java.nameDB_.getDistinctName(
            variable0 + '_end', Blockly.Variables.NAME_TYPE);
          code += 'var ' + endVar + ' = ' + argument1 + ';\n';
        }
        // Determine loop direction at start, in case one of the bounds
        // changes during loop execution.
        var incVar = Blockly.Java.nameDB_.getDistinctName(
          variable0 + '_inc', Blockly.Variables.NAME_TYPE);
        code += 'var ' + incVar + ' = ';
        if (Blockly.isNumber(increment)) {
          code += Math.abs(increment) + ';\n';
        } else {
          code += 'Math.abs(' + increment + ');\n';
        }
        code += 'if (' + startVar + ' > ' + endVar + ') {\n';
        code += Blockly.Java.INDENT + incVar + ' = -' + incVar + ';\n';
        code += '}\n';
        code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
          '     ' + incVar + ' >= 0 ? ' +
          variable0 + ' <= ' + endVar + ' : ' +
          variable0 + ' >= ' + endVar + ';\n' +
          '     ' + variable0 + ' += ' + incVar + ') {\n' +
          branch + '}\n';
      }
      return code;
    };

    Blockly.Java['controls_forEach'] = function (block: { getFieldValue: (arg0: string) => any; id: any; }) {
      // For each loop.
      var variable0 = Blockly.Java.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      var argument0 = Blockly.Java.valueToCode(block, 'LIST',
        Blockly.Java.ORDER_ASSIGNMENT) || '[]';
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      var indexVar = Blockly.Java.nameDB_.getDistinctName(
        variable0 + '_index', Blockly.Variables.NAME_TYPE);
      branch = Blockly.Java.INDENT + variable0 + ' = ' +
        argument0 + '[' + indexVar + '];\n' + branch;
      var code = 'for (var ' + indexVar + ' in ' + argument0 + ') {\n' +
        branch + '}\n';
      return code;
    };

    Blockly.Java['controls_flow_statements'] = function (block: { getFieldValue: (arg0: string) => any; }) {
      // Flow statements: continue, break.
      switch (block.getFieldValue('FLOW')) {
        case 'BREAK':
          return 'break;\n';
        case 'CONTINUE':
          return 'continue;\n';
      }
      throw 'Unknown flow statement.';
    };



    Blockly.Java['controls_repeat'] = function (block: { getFieldValue: (arg0: string) => any; id: any; }) {
      // Repeat n times (internal number).
      var repeats = Number(block.getFieldValue('TIMES'));
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      var loopVar = Blockly.Java.nameDB_.getDistinctName(
        'count', Blockly.Variables.NAME_TYPE);
      var code = 'for (var ' + loopVar + ' = 0; ' +
        loopVar + ' < ' + repeats + '; ' +
        loopVar + '++) {\n' +
        branch + '}\n';
      return code;
    };

    Blockly.Java['controls_repeat_ext'] = function (block: { id: any; }) {
      // Repeat n times (external number).
      var repeats = Blockly.Java.valueToCode(block, 'TIMES',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      var code = '';
      var loopVar = Blockly.Java.nameDB_.getDistinctName(
        'count', Blockly.Variables.NAME_TYPE);
      var endVar = repeats;
      if (!repeats.match(/^\w+$/) && !Blockly.isNumber(repeats)) {
        var endVar = Blockly.Java.nameDB_.getDistinctName(
          'repeat_end', Blockly.Variables.NAME_TYPE);
        code += 'var ' + endVar + ' = ' + repeats + ';\n';
      }
      code += 'for ( int ' + loopVar + ' = 0; ' +
        loopVar + ' < ' + endVar + '; ' +
        loopVar + '++) {\n' +
        branch + '}\n';
      return code;
    };

    Blockly.Java['controls_whileUntil'] = function (block: { getFieldValue: (arg0: string) => string; id: any; }) {
      // Do while/until loop.
      var until = block.getFieldValue('MODE') == 'UNTIL';
      var argument0 = Blockly.Java.valueToCode(block, 'BOOL',
        until ? Blockly.Java.ORDER_LOGICAL_NOT :
          Blockly.Java.ORDER_NONE) || 'false';
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      if (until) {
        return 'do{\n' + branch + '}while (' + argument0 + ');\n';
      } else {
        return 'while (' + argument0 + ') {\n' + branch + '}\n';
      }

    };

    Blockly.Java['controls_for'] = function (block: { getFieldValue: (arg0: string) => any; id: any; }) {
      // For loop.
      var variable0 = Blockly.Java.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      var argument0 = Blockly.Java.valueToCode(block, 'FROM',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
      var argument1 = Blockly.Java.valueToCode(block, 'TO',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
      var increment = Blockly.Java.valueToCode(block, 'BY',
        Blockly.Java.ORDER_ASSIGNMENT) || '1';
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      var code;
      if (Blockly.isNumber(argument0) && Blockly.isNumber(argument1) &&
        Blockly.isNumber(increment)) {
        // All arguments are simple numbers.
        var up = parseFloat(argument0) <= parseFloat(argument1);
        code = 'for (int ' + variable0 + ' = ' + argument0 + '; ' +
          variable0 + (up ? ' <= ' : ' >= ') + argument1 + '; ' +
          variable0;
        var step = Math.abs(parseFloat(increment));
        if (step == 1) {
          code += up ? '++' : '--';
        } else {
          code += (up ? ' += ' : ' -= ') + step;
        }
        code += ') {\n' + branch + '}\n';
      } else {
        code = '';
        // Cache non-trivial values to variables to prevent repeated look-ups.
        var startVar = argument0;
        if (!argument0.match(/^\w+$/) && !Blockly.isNumber(argument0)) {
          var startVar = Blockly.Java.nameDB_.getDistinctName(
            variable0 + '_start', Blockly.Variables.NAME_TYPE);
          code += 'var ' + startVar + ' = ' + argument0 + ';\n';
        }
        var endVar = argument1;
        if (!argument1.match(/^\w+$/) && !Blockly.isNumber(argument1)) {
          var endVar = Blockly.Java.nameDB_.getDistinctName(
            variable0 + '_end', Blockly.Variables.NAME_TYPE);
          code += 'var ' + endVar + ' = ' + argument1 + ';\n';
        }
        // Determine loop direction at start, in case one of the bounds
        // changes during loop execution.
        var incVar = Blockly.Java.nameDB_.getDistinctName(
          variable0 + '_inc', Blockly.Variables.NAME_TYPE);
        code += 'var ' + incVar + ' = ';
        if (Blockly.isNumber(increment)) {
          code += Math.abs(increment) + ';\n';
        } else {
          code += 'Math.abs(' + increment + ');\n';
        }
        code += 'if (' + startVar + ' > ' + endVar + ') {\n';
        code += Blockly.Java.INDENT + incVar + ' = -' + incVar + ';\n';
        code += '}\n';
        code += 'for (' + variable0 + ' = ' + startVar + ';\n' +
          '     ' + incVar + ' >= 0 ? ' +
          variable0 + ' <= ' + endVar + ' : ' +
          variable0 + ' >= ' + endVar + ';\n' +
          '     ' + variable0 + ' += ' + incVar + ') {\n' +
          branch + '}\n';
      }
      return code;
    };

    Blockly.Java['controls_forEach'] = function (block: { getFieldValue: (arg0: string) => any; id: any; }) {
      // For each loop.
      var variable0 = Blockly.Java.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      var argument0 = Blockly.Java.valueToCode(block, 'LIST',
        Blockly.Java.ORDER_ASSIGNMENT) || '[]';
      var branch = Blockly.Java.statementToCode(block, 'DO');
      branch = Blockly.Java.addLoopTrap(branch, block.id);
      var indexVar = Blockly.Java.nameDB_.getDistinctName(
        variable0 + '_index', Blockly.Variables.NAME_TYPE);
      branch = Blockly.Java.INDENT + variable0 + ' = ' +
        argument0 + '[' + indexVar + '];\n' + branch;
      var code = 'for (var ' + indexVar + ' in ' + argument0 + ') {\n' +
        branch + '}\n';
      return code;
    };

    Blockly.Java['controls_flow_statements'] = function (block: { getFieldValue: (arg0: string) => any; }) {
      // Flow statements: continue, break.
      switch (block.getFieldValue('FLOW')) {
        case 'BREAK':
          return 'break;\n';
        case 'CONTINUE':
          return 'continue;\n';
      }
      throw 'Unknown flow statement.';
    };



    Blockly.Java['text'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      // Text value.
      var code = Blockly.Java.quote_(block.getFieldValue('TEXT'));
      return [code, Blockly.Java.ORDER_ATOMIC];
    };


    Blockly.Java['text_join'] = function (block: { itemCount_: number; }) {
      // Create a string made up of any number of elements of any type.
      var code;
      if (block.itemCount_ == 0) {
        return ['\'\'', Blockly.Java.ORDER_ATOMIC];
      } else if (block.itemCount_ == 1) {
        var argument0 = Blockly.Java.valueToCode(block, 'ADD0',
          Blockly.Java.ORDER_NONE) || '""';
        code =  argument0;
        return [code, Blockly.Java.ORDER_FUNCTION_CALL];
      } else if (block.itemCount_ == 2) {
        var argument0 = Blockly.Java.valueToCode(block, 'ADD0',
          Blockly.Java.ORDER_NONE) || '""';
        var argument1 = Blockly.Java.valueToCode(block, 'ADD1',
          Blockly.Java.ORDER_NONE) || '""';
        code =   argument0 + '+' + argument1 ;
        return [code, Blockly.Java.ORDER_ADDITION];
      } else {
        code = new Array(block.itemCount_);
        for (var n = 0; n < block.itemCount_; n++) {
          code[n] = Blockly.Java.valueToCode(block, 'ADD' + n,
            Blockly.Java.ORDER_COMMA) || '""';
        }
        //code = '[' + code.join(',') + '].join("")';
        code ='String.join("", ' + code.join(',') + ')';
        return [code, Blockly.Java.ORDER_FUNCTION_CALL];
      }
    };

    Blockly.Java['text_append'] = function (block: { getFieldValue: (arg0: string) => any; }) {
      // Append to a variable in place.
      var varName = Blockly.Java.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      var argument0 = Blockly.Java.valueToCode(block, 'TEXT',
        Blockly.Java.ORDER_NONE) || '""';
      return varName + ' = ' + varName + ' + ' + argument0 + ';\n';
    };

    Blockly.Java['text_length'] = function (block: any) {
      // String length.
      var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_FUNCTION_CALL) || '""';
      return [argument0 + '.length', Blockly.Java.ORDER_MEMBER];
    };

    Blockly.Java['text_isEmpty'] = function (block: any) {
      // Is the string null?
      var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_MEMBER) || '""';
      return ['!' + argument0, Blockly.Java.ORDER_LOGICAL_NOT];
    };

    Blockly.Java['text_indexOf'] = function (block: { getFieldValue: (arg0: string) => string; }) {
      // Search the text for a substring.
      var operator = block.getFieldValue('END') == 'FIRST' ?
        'indexOf' : 'lastIndexOf';
      var argument0 = Blockly.Java.valueToCode(block, 'FIND',
        Blockly.Java.ORDER_NONE) || '""';
      var argument1 = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_MEMBER) || '""';
      var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
      return [code, Blockly.Java.ORDER_MEMBER];
    };

    Blockly.Java['text_charAt'] = function (block: { getFieldValue: (arg0: string) => string; }) {
      // Get letter at index.
      // Note: Until January 2013 this block did not have the WHERE input.
      var where = block.getFieldValue('WHERE') || 'FROM_START';
      var at = Blockly.Java.valueToCode(block, 'AT',
        Blockly.Java.ORDER_UNARY_NEGATION) || '1';
      var text = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_MEMBER) || '""';
      switch (where) {
        case 'FIRST':
          var code = text + '.charAt(0)';
          return [code, Blockly.Java.ORDER_FUNCTION_CALL];
        case 'LAST':
          var code = text + '.slice(-1)';
          return [code, Blockly.Java.ORDER_FUNCTION_CALL];
        case 'FROM_START':
          // Blockly uses one-based indicies.
          if (Blockly.isNumber(at)) {
            // If the index is a naked number, decrement it right now.
            at = parseFloat(at) - 1;
          } else {
            // If the index is dynamic, decrement it in code.
            at += ' - 1';
          }
          var code = text + '.charAt(' + at + ')';
          return [code, Blockly.Java.ORDER_FUNCTION_CALL];
        case 'FROM_END':
          var code = text + '.slice(-' + at + ').charAt(0)';
          return [code, Blockly.Java.ORDER_FUNCTION_CALL];
        case 'RANDOM':
          var functionName = Blockly.Java.provideFunction_(
            'text_random_letter',
            ['function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
              '(text) {',
              '  var x = Math.floor(Math.random() * text.length);',
              '  return text[x];',
              '}']);
          code = functionName + '(' + text + ')';
          return [code, Blockly.Java.ORDER_FUNCTION_CALL];
      }
      throw 'Unhandled option (text_charAt).';
    };

    Blockly.Java['text_getSubstring'] = function (block: { getFieldValue: (arg0: string) => any; }) {
      // Get substring.
      var text = Blockly.Java.valueToCode(block, 'STRING',
        Blockly.Java.ORDER_MEMBER) || '""';
      var where1 = block.getFieldValue('WHERE1');
      var where2 = block.getFieldValue('WHERE2');
      var at1 = Blockly.Java.valueToCode(block, 'AT1',
        Blockly.Java.ORDER_NONE) || '1';
      var at2 = Blockly.Java.valueToCode(block, 'AT2',
        Blockly.Java.ORDER_NONE) || '1';
      if (where1 == 'FIRST' && where2 == 'LAST') {
        var code = text;
      } else {
        var functionName = Blockly.Java.provideFunction_(
          'text_get_substring',
          ['function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
            '(text, where1, at1, where2, at2) {',
            '  function getAt(where, at) {',
            '    if (where == \'FROM_START\') {',
            '      at--;',
            '    } else if (where == \'FROM_END\') {',
            '      at = text.length - at;',
            '    } else if (where == \'FIRST\') {',
            '      at = 0;',
            '    } else if (where == \'LAST\') {',
            '      at = text.length - 1;',
            '    } else {',
            '      throw \'Unhandled option (text_getSubstring).\';',
            '    }',
            '    return at;',
            '  }',
            '  at1 = getAt(where1, at1);',
            '  at2 = getAt(where2, at2) + 1;',
            '  return text.slice(at1, at2);',
            '}']);
        var code: any = functionName + '(' + text + ', \'' +
          where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
      }
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };

    Blockly.Java['text_changeCase'] = function (block: { getFieldValue: (arg0: string) => string | number; }) {
      // Change capitalization.
      var OPERATORS: { [index: string]: string } = {
        'UPPERCASE': '.toUpperCase()',
        'LOWERCASE': '.toLowerCase()',
        'TITLECASE': ''
      };
      var operator = OPERATORS[block.getFieldValue('CASE')];
      var code;
      if (operator) {
        // Upper and lower case are functions built into Java.
        var argument0 = Blockly.Java.valueToCode(block, 'TEXT',
          Blockly.Java.ORDER_MEMBER) || '""';
        code = argument0 + operator;
      } else {
        // Title case is not a native Java function.  Define one.
        var functionName = Blockly.Java.provideFunction_(
          'text_toTitleCase',
          ['function ' +
            Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ + '(str) {',
            '  return str.replace(/\\S+/g,',
          '      function(txt) {return txt[0].toUpperCase() + ' +
          'txt.substring(1).toLowerCase();});',
            '}']);
        var argument0 = Blockly.Java.valueToCode(block, 'TEXT',
          Blockly.Java.ORDER_NONE) || '\'\'';
        code = functionName + '(' + argument0 + ')';
      }
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };

    Blockly.Java['text_trim'] = function (block: { getFieldValue: (arg0: string) => string | number; }) {
      // Trim spaces.
      var OPERATORS: { [index: string]: string } = {
        'LEFT': '.trimLeft()',
        'RIGHT': '.trimRight()',
        'BOTH': '.trim()'
      };
      var operator = OPERATORS[block.getFieldValue('MODE')];
      var argument0 = Blockly.Java.valueToCode(block, 'TEXT',
        Blockly.Java.ORDER_MEMBER) || '""';
      return [argument0 + operator, Blockly.Java.ORDER_FUNCTION_CALL];
    };

    Blockly.Java['text_print'] = function (block: any) {
      // Print statement.
      var argument0 = Blockly.Java.valueToCode(block, 'TEXT',
        Blockly.Java.ORDER_NONE) || '""';
      return 'System.out.println ( ' + argument0 + ' );\n';
    };
    Blockly.Java['text_print_console'] = function (block: any) {
      // Print statement.
      var argument0 = Blockly.Java.valueToCode(block, 'TEXT',
        Blockly.Java.ORDER_NONE) || '""';
      return 'System.out.println(' + argument0 + ');\n';
    };

    Blockly.Java['text_prompt'] = function (block: { getFieldValue: (arg0: string) => string; }) {
      // Prompt function (internal message).
      var msg = Blockly.Java.quote_(block.getFieldValue('TEXT'));
      var code = 'window.prompt(' + msg + ')';
      var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
      if (toNumber) {
        code = 'parseFloat(' + code + ')';
      }
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };

    Blockly.Java['text_prompt_ext'] = function (block: { getFieldValue: (arg0: string) => string; }) {
      // Prompt function (external message).
      var msg = Blockly.Java.valueToCode(block, 'TEXT',
        Blockly.Java.ORDER_NONE) || '""';
      var code = 'window.prompt(' + msg + ')';
      var toNumber = block.getFieldValue('TYPE') == 'NUMBER';
      if (toNumber) {
        code = 'parseFloat(' + code + ')';
      }
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };

    Blockly.Java['text'] = function (block: any) {
      // Prompt function (external message).
      var msg = Blockly.Java.valueToCode(block, 'TEXT',
        Blockly.Java.ORDER_NONE) || '""';
      var code = msg;

      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };



    Blockly.Java['variables_get'] = function (block: { getFieldValue: (arg0: string) => any; }) {
      // Variable getter.
      var code = Blockly.Java.nameDB_.getName(block.getFieldValue('VAR'),
        Blockly.Variables.NAME_TYPE);
      return [code, Blockly.Java.ORDER_ATOMIC];
    };

    Blockly.Java['variables_set'] = function (block: { getFieldValue: (arg0: string) => any; }) {
      // Variable setter.
      var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_ASSIGNMENT) || '0';
      var varName = Blockly.Java.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      return varName + ' = ' + argument0 + ';\n';
    };


    Blockly.Java['math_number'] = function(block: { getFieldValue: (arg0: string) => string; }) {
      // Numeric value.
      var code = parseFloat(block.getFieldValue('NUM'));
      return [code, Blockly.Java.ORDER_ATOMIC];
    };
    
    Blockly.Java['math_arithmetic'] = function(block: { getFieldValue: (arg0: string) => string | number; }) {
      // Basic arithmetic operators, and power.
      var OPERATORS: { [index: string]: any } = {
        'ADD': [' + ', Blockly.Java.ORDER_ADDITION],
        'MINUS': [' - ', Blockly.Java.ORDER_SUBTRACTION],
        'MULTIPLY': [' * ', Blockly.Java.ORDER_MULTIPLICATION],
        'DIVIDE': [' / ', Blockly.Java.ORDER_DIVISION],
        'POWER': [null, Blockly.Java.ORDER_COMMA]  // Handle power separately.
      };
      var tuple = OPERATORS[block.getFieldValue('OP')];
      var operator = tuple[0];
      var order = tuple[1];
      var argument0 = Blockly.Java.valueToCode(block, 'A', order) || '0';
      var argument1 = Blockly.Java.valueToCode(block, 'B', order) || '0';
      var code;
      // Power in Java requires a special case since it has no operator.
      if (!operator) {
        code = 'Math.pow(' + argument0 + ', ' + argument1 + ')';
        return [code, Blockly.Java.ORDER_FUNCTION_CALL];
      }
      code = argument0 + operator + argument1;
      return [code, order];
    };
    
    Blockly.Java['math_single'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      // Math operators with single operand.
      var operator = block.getFieldValue('OP');
      var code;
      var arg;
      if (operator == 'NEG') {
        // Negation is a special case given its different operator precedence.
        arg = Blockly.Java.valueToCode(block, 'NUM',
            Blockly.Java.ORDER_UNARY_NEGATION) || '0';
        if (arg[0] == '-') {
          // --3 is not legal in JS.
          arg = ' ' + arg;
        }
        code = '-' + arg;
        return [code, Blockly.Java.ORDER_UNARY_NEGATION];
      }
      if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
        arg = Blockly.Java.valueToCode(block, 'NUM',
            Blockly.Java.ORDER_DIVISION) || '0';
      } else {
        arg = Blockly.Java.valueToCode(block, 'NUM',
            Blockly.Java.ORDER_NONE) || '0';
      }
      // First, handle cases which generate values that don't need parentheses
      // wrapping the code.
      switch (operator) {
        case 'ABS':
          code = 'Math.abs(' + arg + ')';
          break;
        case 'ROOT':
          code = 'Math.sqrt(' + arg + ')';
          break;
        case 'LN':
          code = 'Math.log(' + arg + ')';
          break;
        case 'EXP':
          code = 'Math.exp(' + arg + ')';
          break;
        case 'POW10':
          code = 'Math.pow(10,' + arg + ')';
          break;
        case 'ROUND':
          code = 'Math.round(' + arg + ')';
          break;
        case 'ROUNDUP':
          code = 'Math.ceil(' + arg + ')';
          break;
        case 'ROUNDDOWN':
          code = 'Math.floor(' + arg + ')';
          break;
        case 'SIN':
          code = 'Math.sin(' + arg + ' / 180 * Math.PI)';
          break;
        case 'COS':
          code = 'Math.cos(' + arg + ' / 180 * Math.PI)';
          break;
        case 'TAN':
          code = 'Math.tan(' + arg + ' / 180 * Math.PI)';
          break;
      }
      if (code) {
        return [code, Blockly.Java.ORDER_FUNCTION_CALL];
      }
      // Second, handle cases which generate values that may need parentheses
      // wrapping the code.
      switch (operator) {
        case 'LOG10':
          code = 'Math.log(' + arg + ') / Math.log(10)';
          break;
        case 'ASIN':
          code = 'Math.asin(' + arg + ') / Math.PI * 180';
          break;
        case 'ACOS':
          code = 'Math.acos(' + arg + ') / Math.PI * 180';
          break;
        case 'ATAN':
          code = 'Math.atan(' + arg + ') / Math.PI * 180';
          break;
        default:
          throw 'Unknown math operator: ' + operator;
      }
      return [code, Blockly.Java.ORDER_DIVISION];
    };
    
    Blockly.Java['math_constant'] = function(block: { getFieldValue: (arg0: string) => string | number; }) {
      // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
      var CONSTANTS: { [index: string]: any } = {
        'PI': ['Math.PI', Blockly.Java.ORDER_MEMBER],
        'E': ['Math.E', Blockly.Java.ORDER_MEMBER],
        'GOLDEN_RATIO':
            ['(1 + Math.sqrt(5)) / 2', Blockly.Java.ORDER_DIVISION],
        'SQRT2': ['Math.SQRT2', Blockly.Java.ORDER_MEMBER],
        'SQRT1_2': ['Math.SQRT1_2', Blockly.Java.ORDER_MEMBER],
        'INFINITY': ['Infinity', Blockly.Java.ORDER_ATOMIC]
      };
      return CONSTANTS[block.getFieldValue('CONSTANT')];
    };
    
    Blockly.Java['math_number_property'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      // Check if a number is even, odd, prime, whole, positive, or negative
      // or if it is divisible by certain number. Returns true or false.
      var number_to_check = Blockly.Java.valueToCode(block, 'NUMBER_TO_CHECK',
          Blockly.Java.ORDER_MODULUS) || '0';
      var dropdown_property = block.getFieldValue('PROPERTY');
      var code;
      if (dropdown_property == 'PRIME') {
        // Prime is a special case as it is not a one-liner test.
        var functionName = Blockly.Java.provideFunction_(
            'math_isPrime',
            [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ + '(n) {',
              '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
              '  if (n == 2 || n == 3) {',
              '    return true;',
              '  }',
              '  // False if n is NaN, negative, is 1, or not whole.',
              '  // And false if n is divisible by 2 or 3.',
              '  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 ||' +
                ' n % 3 == 0) {',
              '    return false;',
              '  }',
              '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
              '  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {',
              '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
              '      return false;',
              '    }',
              '  }',
              '  return true;',
              '}']);
        code = functionName + '(' + number_to_check + ')';
        return [code, Blockly.Java.ORDER_FUNCTION_CALL];
      }
      switch (dropdown_property) {
        case 'EVEN':
          code = number_to_check + ' % 2 == 0';
          break;
        case 'ODD':
          code = number_to_check + ' % 2 == 1';
          break;
        case 'WHOLE':
          code = number_to_check + ' % 1 == 0';
          break;
        case 'POSITIVE':
          code = number_to_check + ' > 0';
          break;
        case 'NEGATIVE':
          code = number_to_check + ' < 0';
          break;
        case 'DIVISIBLE_BY':
          var divisor = Blockly.Java.valueToCode(block, 'DIVISOR',
              Blockly.Java.ORDER_MODULUS) || '0';
          code = number_to_check + ' % ' + divisor + ' == 0';
          break;
      }
      return [code, Blockly.Java.ORDER_EQUALITY];
    };
    
    Blockly.Java['math_change'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      // Add to a variable in place.
      var argument0 = Blockly.Java.valueToCode(block, 'DELTA',
          Blockly.Java.ORDER_ADDITION) || '0';
      var varName = Blockly.Java.nameDB_.getName(
          block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
      return varName + ' = (typeof ' + varName + ' == \'number\' ? ' + varName +
          ' : 0) + ' + argument0 + ';\n';
    };
    
    // Rounding functions have a single operand.
    Blockly.Java['math_round'] = Blockly.Java['math_single'];
    // Trigonometry functions have a single operand.
    Blockly.Java['math_trig'] = Blockly.Java['math_single'];
    
    Blockly.Java['math_on_list'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      // Math functions for lists.
      var func = block.getFieldValue('OP');
      var list, code;
      switch (func) {
        case 'SUM':
          list = Blockly.Java.valueToCode(block, 'LIST',
              Blockly.Java.ORDER_MEMBER) || '[]';
          code = list + '.reduce(function(x, y) {return x + y;})';
          break;
        case 'MIN':
          list = Blockly.Java.valueToCode(block, 'LIST',
              Blockly.Java.ORDER_COMMA) || '[]';
          code = 'Math.min.apply(null, ' + list + ')';
          break;
        case 'MAX':
          list = Blockly.Java.valueToCode(block, 'LIST',
              Blockly.Java.ORDER_COMMA) || '[]';
          code = 'Math.max.apply(null, ' + list + ')';
          break;
        case 'AVERAGE':
          // math_median([null,null,1,3]) == 2.0.
          var functionName = Blockly.Java.provideFunction_(
              'math_mean',
              [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
                  '(myList) {',
                '  return myList.reduce(function(x, y) {return x + y;}) / ' +
                      'myList.length;',
                '}']);
          list = Blockly.Java.valueToCode(block, 'LIST',
              Blockly.Java.ORDER_NONE) || '[]';
          code = functionName + '(' + list + ')';
          break;
        case 'MEDIAN':
          // math_median([null,null,1,3]) == 2.0.
          var functionName = Blockly.Java.provideFunction_(
              'math_median',
              [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
                  '(myList) {',
                '  var localList = myList.filter(function (x) ' +
                  '{return typeof x == \'number\';});',
                '  if (!localList.length) return null;',
                '  localList.sort(function(a, b) {return b - a;});',
                '  if (localList.length % 2 == 0) {',
                '    return (localList[localList.length / 2 - 1] + ' +
                  'localList[localList.length / 2]) / 2;',
                '  } else {',
                '    return localList[(localList.length - 1) / 2];',
                '  }',
                '}']);
          list = Blockly.Java.valueToCode(block, 'LIST',
              Blockly.Java.ORDER_NONE) || '[]';
          code = functionName + '(' + list + ')';
          break;
        case 'MODE':
          // As a list of numbers can contain more than one mode,
          // the returned result is provided as an array.
          // Mode of [3, 'x', 'x', 1, 1, 2, '3'] -> ['x', 1].
          var functionName = Blockly.Java.provideFunction_(
              'math_modes',
              [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
                  '(values) {',
                '  var modes = [];',
                '  var counts = [];',
                '  var maxCount = 0;',
                '  for (var i = 0; i < values.length; i++) {',
                '    var value = values[i];',
                '    var found = false;',
                '    var thisCount;',
                '    for (var j = 0; j < counts.length; j++) {',
                '      if (counts[j][0] === value) {',
                '        thisCount = ++counts[j][1];',
                '        found = true;',
                '        break;',
                '      }',
                '    }',
                '    if (!found) {',
                '      counts.push([value, 1]);',
                '      thisCount = 1;',
                '    }',
                '    maxCount = Math.max(thisCount, maxCount);',
                '  }',
                '  for (var j = 0; j < counts.length; j++) {',
                '    if (counts[j][1] == maxCount) {',
                '        modes.push(counts[j][0]);',
                '    }',
                '  }',
                '  return modes;',
                '}']);
          list = Blockly.Java.valueToCode(block, 'LIST',
              Blockly.Java.ORDER_NONE) || '[]';
          code = functionName + '(' + list + ')';
          break;
        case 'STD_DEV':
          var functionName = Blockly.Java.provideFunction_(
              'math_standard_deviation',
              [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
                  '(numbers) {',
                '  var n = numbers.length;',
                '  if (!n) return null;',
                '  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;',
                '  var variance = 0;',
                '  for (var j = 0; j < n; j++) {',
                '    variance += Math.pow(numbers[j] - mean, 2);',
                '  }',
                '  variance = variance / n;',
                '  return Math.sqrt(variance);',
                '}']);
          list = Blockly.Java.valueToCode(block, 'LIST',
              Blockly.Java.ORDER_NONE) || '[]';
          code = functionName + '(' + list + ')';
          break;
        case 'RANDOM':
          var functionName = Blockly.Java.provideFunction_(
              'math_random_list',
              [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
                  '(list) {',
                '  var x = Math.floor(Math.random() * list.length);',
                '  return list[x];',
                '}']);
          list = Blockly.Java.valueToCode(block, 'LIST',
              Blockly.Java.ORDER_NONE) || '[]';
          code = functionName + '(' + list + ')';
          break;
        default:
          throw 'Unknown operator: ' + func;
      }
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    Blockly.Java['math_modulo'] = function(block: any) {
      // Remainder computation.
      var argument0 = Blockly.Java.valueToCode(block, 'DIVIDEND',
          Blockly.Java.ORDER_MODULUS) || '0';
      var argument1 = Blockly.Java.valueToCode(block, 'DIVISOR',
          Blockly.Java.ORDER_MODULUS) || '0';
      var code = argument0 + ' % ' + argument1;
      return [code, Blockly.Java.ORDER_MODULUS];
    };
    
    Blockly.Java['math_constrain'] = function(block: any) {
      // Constrain a number between two limits.
      var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
          Blockly.Java.ORDER_COMMA) || '0';
      var argument1 = Blockly.Java.valueToCode(block, 'LOW',
          Blockly.Java.ORDER_COMMA) || '0';
      var argument2 = Blockly.Java.valueToCode(block, 'HIGH',
          Blockly.Java.ORDER_COMMA) || 'Infinity';
      var code = 'Math.min(Math.max(' + argument0 + ', ' + argument1 + '), ' +
          argument2 + ')';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    Blockly.Java['math_random_int'] = function(block: any) {
      // Random integer between [X] and [Y].
      var argument0 = Blockly.Java.valueToCode(block, 'FROM',
          Blockly.Java.ORDER_COMMA) || '0';
      var argument1 = Blockly.Java.valueToCode(block, 'TO',
          Blockly.Java.ORDER_COMMA) || '0';
      var functionName = Blockly.Java.provideFunction_(
          'math_random_int',
          [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
              '(a, b) {',
            '  if (a > b) {',
            '    // Swap a and b to ensure a is smaller.',
            '    var c = a;',
            '    a = b;',
            '    b = c;',
            '  }',
            '  return Math.floor(Math.random() * (b - a + 1) + a);',
            '}']);
      var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    Blockly.Java['math_random_float'] = function(block: any) {
      // Random fraction between 0 and 1.
      return ['Math.random()', Blockly.Java.ORDER_FUNCTION_CALL];
    };


    
Blockly.Java['lists_create_empty'] = function(block: any) {
  // Create an empty list.
  return ['[]', Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['lists_create_with'] = function(block: { itemCount_: number; }) {
  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.Java.valueToCode(block, 'ADD' + n,
        Blockly.Java.ORDER_COMMA) || 'null';
  }
  var codes = '[' + code.join(', ') + ']';
  return [codes, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['lists_repeat'] = function(block: any) {
  // Create a list with one element repeated.
  var functionName = Blockly.Java.provideFunction_(
      'lists_repeat',
      [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
          '(value, n) {',
        '  var array = [];',
        '  for (var i = 0; i < n; i++) {',
        '    array[i] = value;',
        '  }',
        '  return array;',
        '}']);
  var argument0 = Blockly.Java.valueToCode(block, 'ITEM',
      Blockly.Java.ORDER_COMMA) || 'null';
  var argument1 = Blockly.Java.valueToCode(block, 'NUM',
      Blockly.Java.ORDER_COMMA) || '0';
  var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

Blockly.Java['lists_length'] = function(block: any) {
  // List length.
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_FUNCTION_CALL) || '[]';
  return [argument0 + '.length', Blockly.Java.ORDER_MEMBER];
};

Blockly.Java['lists_isEmpty'] = function(block: any) {
  // Is the list empty?
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_MEMBER) || '[]';
  return ['!' + argument0 + '.length', Blockly.Java.ORDER_LOGICAL_NOT];
};

Blockly.Java['lists_indexOf'] = function(block: { getFieldValue: (arg0: string) => string; }) {
  // Find an item in the list.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.Java.valueToCode(block, 'FIND',
      Blockly.Java.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_MEMBER) || '[]';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.Java.ORDER_MEMBER];
};

Blockly.Java['lists_getIndex'] = function(block: { getFieldValue: (arg0: string) => string; }) {
  // Get element at index.
  // Note: Until January 2013 this block did not have MODE or WHERE inputs.
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.Java.valueToCode(block, 'AT',
      Blockly.Java.ORDER_UNARY_NEGATION) || '1';
  var list = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_MEMBER) || '[]';

  if (where == 'FIRST') {
    if (mode == 'GET') {
      var code = list + '[0]';
      return [code, Blockly.Java.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.shift()';
      return [code, Blockly.Java.ORDER_MEMBER];
    } else if (mode == 'REMOVE') {
      return list + '.shift();\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'GET') {
      var code = list + '.slice(-1)[0]';
      return [code, Blockly.Java.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.pop()';
      return [code, Blockly.Java.ORDER_MEMBER];
    } else if (mode == 'REMOVE') {
      return list + '.pop();\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseFloat(at) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'GET') {
      var code = list + '[' + at + ']';
      return [code, Blockly.Java.ORDER_MEMBER];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.splice(' + at + ', 1)[0]';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    } else if (mode == 'REMOVE') {
      return list + '.splice(' + at + ', 1);\n';
    }
  } else if (where == 'FROM_END') {
    if (mode == 'GET') {
      var code = list + '.slice(-' + at + ')[0]';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    } else if (mode == 'GET_REMOVE' || mode == 'REMOVE') {
      var functionName = Blockly.Java.provideFunction_(
          'lists_remove_from_end',
          [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
              '(list, x) {',
            '  x = list.length - x;',
            '  return list.splice(x, 1)[0];',
            '}']);
      code = functionName + '(' + list + ', ' + at + ')';
      if (mode == 'GET_REMOVE') {
        return [code, Blockly.Java.ORDER_FUNCTION_CALL];
      } else if (mode == 'REMOVE') {
        return code + ';\n';
      }
    }
  } else if (where == 'RANDOM') {
    var functionName = Blockly.Java.provideFunction_(
        'lists_get_random_item',
        [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
            '(list, remove) {',
          '  var x = Math.floor(Math.random() * list.length);',
          '  if (remove) {',
          '    return list.splice(x, 1)[0];',
          '  } else {',
          '    return list[x];',
          '  }',
          '}']);
    code = functionName + '(' + list + ', ' + (mode != 'GET') + ')';
    if (mode == 'GET' || mode == 'GET_REMOVE') {
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    } else if (mode == 'REMOVE') {
      return code + ';\n';
    }
  }
  throw 'Unhandled combination (lists_getIndex).';
};

Blockly.Java['lists_setIndex'] = function(block: { getFieldValue: (arg0: string) => string; }) {
  // Set element at index.
  // Note: Until February 2013 this block did not have MODE or WHERE inputs.
  var list = Blockly.Java.valueToCode(block, 'LIST',
      Blockly.Java.ORDER_MEMBER) || '[]';
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.Java.valueToCode(block, 'AT',
      Blockly.Java.ORDER_NONE) || '1';
  var value = Blockly.Java.valueToCode(block, 'TO',
      Blockly.Java.ORDER_ASSIGNMENT) || 'null';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  // Closure, which accesses and modifies 'list'.
  function cacheList() {
    if (list.match(/^\w+$/)) {
      return '';
    }
    var listVar = Blockly.Java.nameDB_.getDistinctName(
        'tmp_list', Blockly.Variables.NAME_TYPE);
    var code = 'var ' + listVar + ' = ' + list + ';\n';
    list = listVar;
    return code;
  }
  if (where == 'FIRST') {
    if (mode == 'SET') {
      return list + '[0] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.unshift(' + value + ');\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'SET') {
      var code = cacheList();
      code += list + '[' + list + '.length - 1] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      return list + '.push(' + value + ');\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseFloat(at) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'SET') {
      return list + '[' + at + '] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.splice(' + at + ', 0, ' + value + ');\n';
    }
  } else if (where == 'FROM_END') {
    var code = cacheList();
    if (mode == 'SET') {
      code += list + '[' + list + '.length - ' + at + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.splice(' + list + '.length - ' + at + ', 0, ' + value +
          ');\n';
      return code;
    }
  } else if (where == 'RANDOM') {
    var code = cacheList();
    var xVar = Blockly.Java.nameDB_.getDistinctName(
        'tmp_x', Blockly.Variables.NAME_TYPE);
    code += 'var ' + xVar + ' = Math.floor(Math.random() * ' + list +
        '.length);\n';
    if (mode == 'SET') {
      code += list + '[' + xVar + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.splice(' + xVar + ', 0, ' + value + ');\n';
      return code;
    }
  }
  throw 'Unhandled combination (lists_setIndex).';
};

Blockly.Java['lists_getSublist'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  // Get sublist.
  var list = Blockly.Java.valueToCode(block, 'LIST',
      Blockly.Java.ORDER_MEMBER) || '[]';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.Java.valueToCode(block, 'AT1',
      Blockly.Java.ORDER_NONE) || '1';
  var at2 = Blockly.Java.valueToCode(block, 'AT2',
      Blockly.Java.ORDER_NONE) || '1';
  if (where1 == 'FIRST' && where2 == 'LAST') {
    var code = list + '.concat()';
  } else {
    var functionName = Blockly.Java.provideFunction_(
        'lists_get_sublist',
        [ 'function ' + Blockly.Java.FUNCTION_NAME_PLACEHOLDER_ +
            '(list, where1, at1, where2, at2) {',
          '  function getAt(where, at) {',
          '    if (where == \'FROM_START\') {',
          '      at--;',
          '    } else if (where == \'FROM_END\') {',
          '      at = list.length - at;',
          '    } else if (where == \'FIRST\') {',
          '      at = 0;',
          '    } else if (where == \'LAST\') {',
          '      at = list.length - 1;',
          '    } else {',
          '      throw \'Unhandled option (lists_getSublist).\';',
          '    }',
          '    return at;',
          '  }',
          '  at1 = getAt(where1, at1);',
          '  at2 = getAt(where2, at2) + 1;',
          '  return list.slice(at1, at2);',
          '}']);
    var code = functionName + '(' + list + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};








 /**
    block name: variable_get
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: variable getter
    included in final version: YES
  */
    Blockly.Java['variable_get'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      var code = Blockly.Java.nameDB_.getName(block.getFieldValue('VAR'),
          Blockly.Variables.NAME_TYPE);
      return [code, Blockly.Java.ORDER_ATOMIC];
    };
    
    
     
    
    
     /**
        block name: create_var
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: Variable maker
        included in final version: YES
      */
    Blockly.Java['create_var'] = function(block: { getFieldValue: (arg0: string) => any; getTitleValue: (arg0: string) => any; }) {
      var value_const_value = Blockly.Java.valueToCode(block, 'const_value', Blockly.Java.ORDER_ASSIGNMENT);
      var text_const__name = Blockly.Java.nameDB_.getName(block.getFieldValue('const__name'), Blockly.Variables.NAME_TYPE);
    
      var dropdown_const_type = block.getTitleValue('const_type');
      var code = dropdown_const_type + ' ' +text_const__name+'=' + value_const_value+';\n';
    
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    
     /**
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        included in final version: NO
      */
    Blockly.Java['create_constant_arith'] = function(block: { getFieldValue: (arg0: string) => any; getTitleValue: (arg0: string) => any; }) {
      var value_const_value = Blockly.Java.valueToCode(block, 'const_value', Blockly.Java.ORDER_ASSIGNMENT);
      var text_const__name = Blockly.Java.nameDB_.getName(
          block.getFieldValue('const__name'), Blockly.Variables.NAME_TYPE);
    
      var dropdown_const_type = block.getTitleValue('const_type');
    
      var code = dropdown_const_type + ' ' +text_const__name+'=' + value_const_value+';\n';
    
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    
    
     /**
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        included in final version: NO
      */
    Blockly.Java['get_int'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      var variable_name = Blockly.Java.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
      var code = variable_name;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
    };
    
    
    
    
     /**
        block name: arith_operation
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: arithmetic operations like addition substraction etc
        included in final version: YES
      */
    Blockly.Java['arith_operation'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      var value_op1 = Blockly.Java.valueToCode(block, 'op1', Blockly.Java.ORDER_ASSIGNMENT);
      var value_op2 = Blockly.Java.valueToCode(block, 'op2', Blockly.Java.ORDER_ASSIGNMENT);
      var dropdown_operation = block.getFieldValue('operation');
    
      var code = value_op1 +" "+dropdown_operation+" "+value_op2;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    /**
        block name: number
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: number definition
        included in final version: YES
      */
    Blockly.Java['number'] = function(block: { getTitleValue: (arg0: string) => any; }) {
      var text_number = block.getTitleValue('number');
      var code = text_number;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    /**
        block name: constant
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: pi and e numbers definition
        included in final version: YES
      */
    Blockly.Java['constant'] = function(block: { getTitleValue: (arg0: string) => any; }) {
      var dropdown_name = block.getTitleValue('NAME');
      var code = 'Math.'+dropdown_name;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    /**
        block name: abs
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: absolute value function
        included in final version: YES
      */
    Blockly.Java['abs'] = function(block: any) {
      var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
      var code = 'Math.abs('+value_name+")";
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
     /**
        block name: trigonometric
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: sin/cosine/tangent function
        included in final version: YES
      */
    Blockly.Java['trigonometric'] = function(block: { getTitleValue: (arg0: string) => any; }) {
      var dropdown_operation = block.getTitleValue('operation');
      var angle_angle = block.getTitleValue('angle');
      var code = 'Math.'+dropdown_operation+'('+angle_angle+'*Math.PI/180)';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    /**
        block name: logarithm
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: logarithm function, multiple base
        included in final version: YES
      */
    Blockly.Java['logarithm'] = function(block: any) {
      var value_base = Blockly.Java.valueToCode(block, 'base', Blockly.Java.ORDER_ASSIGNMENT);
      var value_op = Blockly.Java.valueToCode(block, 'op', Blockly.Java.ORDER_ASSIGNMENT);
      var code = 'Math.log10('+value_op+')/Math.log10('+value_base+')';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    /**
        block name: pow
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: "power to" function
        included in final version: YES
      */
    Blockly.Java['pow'] = function(block: any) {
      var value_base = Blockly.Java.valueToCode(block, 'base', Blockly.Java.ORDER_ASSIGNMENT);
      var value_op = Blockly.Java.valueToCode(block, 'op', Blockly.Java.ORDER_ASSIGNMENT);
      var code = 'Math.pow('+value_base+', '+value_op+')';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    /**
        block name: random
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: random number getter
        included in final version: YES
      */
    Blockly.Java['random'] = function(block: any) {
      var value_op1 = Blockly.Java.valueToCode(block, 'op1', Blockly.Java.ORDER_ASSIGNMENT);
      var value_op2 = Blockly.Java.valueToCode(block, 'op2', Blockly.Java.ORDER_ASSIGNMENT);
    var low;
    var high;
      if(value_op1>value_op2){
        high = value_op1;
        low = value_op2;
        }
        else {
        high = value_op2;
        low = value_op1;
    
        }
      var code = 'Math.random('+high+'-'+low+')+'+low;
    
    
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    
     /**
        block name: create_constant_boolean
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        included in final version: NO
      */
    
    Blockly.Java['create_constant_boolean'] = function(block: { getTitleValue: (arg0: string) => any; }) {
      var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
      var text_name = block.getTitleValue('name');
      var code = 'boolean '+text_name+' = '+value_name+';\n';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    
     /**
        block name: set_true_false
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: true/false setter
        included in final version: YES
      */
    Blockly.Java['set_true_false'] = function(block: { getTitleValue: (arg0: string) => any; }) {
      var dropdown_value = block.getTitleValue('value');
      var code = dropdown_value;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    
      /**
        block name: not
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: not function
        included in final version: YES
      */
    Blockly.Java['not'] = function(block: any) {
      var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
      var code = '!'+value_name;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    
     /**
        block name: and_or_xor
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: and/or/xor operations
        included in final version: YES
      */
    Blockly.Java['and_or_xor'] = function(block: { getTitleValue: (arg0: string) => any; }) {
      var value_op1 = Blockly.Java.valueToCode(block, 'op1', Blockly.Java.ORDER_ASSIGNMENT);
      var value_op2 = Blockly.Java.valueToCode(block, 'op2', Blockly.Java.ORDER_ASSIGNMENT);
      var dropdown_name = block.getTitleValue('NAME');
      var code = value_op1+' '+dropdown_name+' '+value_op2;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];
    };
    
    
    
     /**
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        included in final version: NO
      */
    Blockly.Java['get_boolean'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      var variable_name = Blockly.Java.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
      var code = variable_name;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
    };
    
    
    
     /**
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        included in final version: NO
      */
    Blockly.Java['create_string'] = function(block: { getTitleValue: (arg0: string) => any; }) {
      var value_value = Blockly.Java.valueToCode(block, 'value', Blockly.Java.ORDER_ATOMIC);
      var text_name = block.getTitleValue('NAME');
      var code = 'String '+text_name+' =  '+value_value+';\n';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
    };
    
    
    
     /**
        block name: string_value
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: string setter
        included in final version: YES
      */
    Blockly.Java['string_value'] = function(block: { getTitleValue: (arg0: string) => any; }) {
      var text_string_value = block.getTitleValue('string_value');
      var code = '\"'+text_string_value+ '\"';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
    };
    
    
    
     /**
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        included in final version: NO
      */
    Blockly.Java['get_string'] = function(block: { getFieldValue: (arg0: string) => any; }) {
      var variable_name = Blockly.Java.nameDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
      var code = variable_name;
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
    };
    
    
    
     /**
        block name: string_length
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: string length computation
        included in final version: YES
      */
    Blockly.Java['string_length'] = function(block: any) {
      var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
      var code = value_name+'.lentgh()';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
    };
    
    
    
     /**
        block name: string_concat
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: string concatenation
        included in final version: YES
      */
    Blockly.Java['string_concat'] = function(block: any) {
      var value_string1 = Blockly.Java.valueToCode(block, 'string1', Blockly.Java.ORDER_ATOMIC);
      var value_string2 = Blockly.Java.valueToCode(block, 'string2', Blockly.Java.ORDER_ATOMIC);
      var code = value_string1+'.concat('+value_string2+')';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
    };
    
    
    
     /**
        block name: string_substring
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: substring getter
        included in final version: YES
      */
    Blockly.Java['string_substring'] = function(block: any) {
      var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
      var value_beginindex = Blockly.Java.valueToCode(block, 'beginindex', Blockly.Java.ORDER_ATOMIC);
      var value_endindex = Blockly.Java.valueToCode(block, 'endindex', Blockly.Java.ORDER_ATOMIC);
      var code = value_name+'.substring('+value_beginindex+', '+value_endindex+')';
      return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
    };
    
    
    /**
        block name: procedures_nodefreturn
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: method without return
        included in final version: YES
      */
        Blockly.Java['procedures_defnoreturn'] = function(block: { getFieldValue: (arg0: any, arg1?: any | undefined) => any; id: string; arguments_: string | any[]; }) {
          var funcName = Blockly.Java.nameDB_.getName(
              block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
          var branch = Blockly.Java.statementToCode(block, 'STACK');
          if (Blockly.Java.STATEMENT_PREFIX) {
            branch = Blockly.Java.prefixLines(
                Blockly.Java.STATEMENT_PREFIX.replace(/%1/g,
                '\'' + block.id + '\''), Blockly.Java.INDENT) + branch;
          }
          if (Blockly.Java.INFINITE_LOOP_TRAP) {
            branch = Blockly.Java.INFINITE_LOOP_TRAP.replace(/%1/g,
                '\'' + block.id + '\'') + branch;
          }
          var returnValue = Blockly.Java.valueToCode(block, 'RETURN',
              Blockly.Java.ORDER_NONE) || '';
        
          var tipo = 'void';
        
          if (returnValue) {
            tipo = typeof  block.getFieldValue(block, 'RETURN');
            returnValue = '  return ' + returnValue + ';\n';
        
          }
          var args = [];
          for (var x = 0; x < block.arguments_.length; x++) {
            args[x] = Blockly.Java.nameDB_.getName(block.arguments_[x],
                Blockly.Variables.NAME_TYPE);
            args[x] = (typeof args[x])+' '+args[x];
          }
          var code;
          var value_value = Blockly.Java.valueToCode(block, 'value', Blockly.Java.ORDER_ATOMIC);
          var value_value2 = Blockly.Java.valueToCode(block, 'TYPE', Blockly.Java.ORDER_ATOMIC);
        
            code = 'public '+ 'void'+' ' + funcName + '('+value_value  + args.join(', ') + ') {\n' + branch + returnValue + '}';
        
          code = Blockly.Java.scrub_(block, code);
          return code;
        };
    
        

     /**
        block name: procedures_nodefreturn
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: method without return
        included in final version: YES
      */
    Blockly.Java['procedures_nodefreturn'] = function(block: { getFieldValue: (arg0: any, arg1?: any | undefined) => any; id: string; arguments_: string | any[]; }) {
      var funcName = Blockly.Java.nameDB_.getName(
          block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
      var branch = Blockly.Java.statementToCode(block, 'STACK');
      if (Blockly.Java.STATEMENT_PREFIX) {
        branch = Blockly.Java.prefixLines(
            Blockly.Java.STATEMENT_PREFIX.replace(/%1/g,
            '\'' + block.id + '\''), Blockly.Java.INDENT) + branch;
      }
      if (Blockly.Java.INFINITE_LOOP_TRAP) {
        branch = Blockly.Java.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + block.id + '\'') + branch;
      }
      var returnValue = Blockly.Java.valueToCode(block, 'RETURN',
          Blockly.Java.ORDER_NONE) || '';
    
      var tipo = 'void';
    
      if (returnValue) {
        tipo = typeof  block.getFieldValue(block, 'RETURN');
        returnValue = '  return ' + returnValue + ';\n';
    
      }
      var args = [];
      for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Java.nameDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE);
        args[x] = (typeof args[x])+' '+args[x];
      }
      var code;
      var value_value = Blockly.Java.valueToCode(block, 'value', Blockly.Java.ORDER_ATOMIC);
      var value_value2 = Blockly.Java.valueToCode(block, 'TYPE', Blockly.Java.ORDER_ATOMIC);
    
        code = 'public '+ 'void'+' ' + funcName + '('+value_value  + args.join(', ') + ') {\n' + branch + returnValue + '}';
    
      code = Blockly.Java.scrub_(block, code);
      return code;
    };
    
    
    
     /**
        block name: procedures_defreturn_Int
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: method with integer return value
        included in final version: YES
      */
    Blockly.Java['procedures_defreturn_Int'] = function(block: { getFieldValue: (arg0: any, arg1?: any | undefined) => any; id: string; arguments_: string | any[]; }) {
      var funcName = Blockly.Java.nameDB_.getName(
          block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
      var branch = Blockly.Java.statementToCode(block, 'STACK');
      if (Blockly.Java.STATEMENT_PREFIX) {
        branch = Blockly.Java.prefixLines(
            Blockly.Java.STATEMENT_PREFIX.replace(/%1/g,
            '\'' + block.id + '\''), Blockly.Java.INDENT) + branch;
      }
      if (Blockly.Java.INFINITE_LOOP_TRAP) {
        branch = Blockly.Java.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + block.id + '\'') + branch;
      }
      var returnValue = Blockly.Java.valueToCode(block, 'RETURN',
          Blockly.Java.ORDER_NONE) || '';
    
      var tipo = 'int';
    
    
      if (returnValue) {
      tipo = typeof  block.getFieldValue(block, 'RETURN');
    
        returnValue = '  return ' + returnValue + ';\n';
    
      }
      var args = [];
      for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Java.nameDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE);
        args[x] = (typeof args[x])+' '+args[x];
      }
      var code;
    
        code = 'public '+ tipo+' ' + funcName + '(' + args.join(', ') + ') {\n' + branch + returnValue + '}';
    
      code = Blockly.Java.scrub_(block, code);
      Blockly.Java.definitions_[funcName] = code;
      return null;
    };
    
    
    
     /**
        block name: procedures_defreturn_Boolean
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: method with boolean return value
        included in final version: YES
      */
    Blockly.Java['procedures_defreturn_Boolean'] = function(block: { getFieldValue: (arg0: any, arg1?: any | undefined) => any; id: string; arguments_: string | any[]; }) {
      var funcName = Blockly.Java.nameDB_.getName(
          block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
      var branch = Blockly.Java.statementToCode(block, 'STACK');
      if (Blockly.Java.STATEMENT_PREFIX) {
        branch = Blockly.Java.prefixLines(
            Blockly.Java.STATEMENT_PREFIX.replace(/%1/g,
            '\'' + block.id + '\''), Blockly.Java.INDENT) + branch;
      }
      if (Blockly.Java.INFINITE_LOOP_TRAP) {
        branch = Blockly.Java.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + block.id + '\'') + branch;
      }
      var returnValue = Blockly.Java.valueToCode(block, 'RETURN',
          Blockly.Java.ORDER_NONE) || '';
    
      var tipo = 'boolean';
    
    
      if (returnValue) {
      tipo = typeof  block.getFieldValue(block, 'RETURN');
    
        returnValue = '  return ' + returnValue + ';\n';
    
      }
      var args = [];
      for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Java.nameDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE);
        args[x] = (typeof args[x])+' '+args[x];
      }
      var code;
    
        code = 'public '+ tipo+' ' + funcName + '(' + args.join(', ') + ') {\n' + branch + returnValue + '}';
    
      code = Blockly.Java.scrub_(block, code);
      Blockly.Java.definitions_[funcName] = code;
      return null;
    };
    
    
    
     /**
        block name: procedures_defreturn_String
        authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
        short description: method with string return value
        included in final version: YES
      */
    Blockly.Java['procedures_defreturn_String'] = function(block: { getFieldValue: (arg0: any, arg1?: any | undefined) => any; id: string; arguments_: string | any[]; }) {
      var funcName = Blockly.Java.nameDB_.getName(
          block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
      var branch = Blockly.Java.statementToCode(block, 'STACK');
      if (Blockly.Java.STATEMENT_PREFIX) {
        branch = Blockly.Java.prefixLines(
            Blockly.Java.STATEMENT_PREFIX.replace(/%1/g,
            '\'' + block.id + '\''), Blockly.Java.INDENT) + branch;
      }
      if (Blockly.Java.INFINITE_LOOP_TRAP) {
        branch = Blockly.Java.INFINITE_LOOP_TRAP.replace(/%1/g,
            '\'' + block.id + '\'') + branch;
      }
      var returnValue = Blockly.Java.valueToCode(block, 'RETURN',
          Blockly.Java.ORDER_NONE) || '';
    
      var tipo = 'String';
    
    
      if (returnValue) {
      tipo = typeof  block.getFieldValue(block, 'RETURN');
    
        returnValue = '  return ' + returnValue + ';\n';
    
      }
      var args = [];
      for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.Java.nameDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE);
        args[x] = (typeof args[x])+' '+args[x];
      }
      var code;
    
        code = 'public '+ tipo+' ' + funcName + '(' + args.join(', ') + ') {\n' + branch + returnValue + '}';
    
      code = Blockly.Java.scrub_(block, code);
      Blockly.Java.definitions_[funcName] = code;
      return null;
    };


    
Blockly.Java['literal_text'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  // Text value.
  var code = Blockly.Java.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['literal_integer'] = function(block: { getFieldValue: (arg0: string) => string; }) {
  // Numeric value.
  var code = parseInt(block.getFieldValue('NUM'));
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['literal_boolean'] = function(block: { getFieldValue: (arg0: string) => string; }) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Java.ORDER_ATOMIC];
};



/*
* --- STRINGS ---
*
*/
var int_variables: any[] = [];
var boolean_variables: any[] = [];
var string_variables: any[] = [];

Blockly.Java['variable_declare_string'] = function(block: any) {
    var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
    Blockly.Java.ORDER_ASSIGNMENT) || '""';
    
    // var varName = Blockly.Java.nameDB_.getName(
    //   block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    // var varName = block.getFieldValue('VAR');
      var varName = Blockly.Java.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);

    if(string_variables.indexOf(varName) < 0) {
      string_variables[string_variables.length] = varName;
    }
    var typeName = 'String';
    return typeName+' '+varName + ' = ' + argument0 + ';\n';
  };

  Blockly.Java['variable_get_string'] = function(block: { getFieldValue: (arg0: string) => any; }) {
    // Variable getter.
    var code = Blockly.Java.nameDB_.getName(block.getFieldValue('VAR'),
    Blockly.Variables.NAME_TYPE);
    // code = '$EVAL_' + code + '_EVAL$';
    return [code, Blockly.Java.ORDER_ATOMIC];
  };

  Blockly.Java['variable_set_string'] = function(block: { getFieldValue: (arg0: string) => any; }) {
    // Variable setter.
    var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_ASSIGNMENT) || '""';
    var varName = Blockly.Java.nameDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName + ' = ' + argument0 + ';\n';
  };

/*
* --- INTEGER ---
*
*/


Blockly.Java['variable_declare_int'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  if(int_variables.indexOf(varName) < 0) {
      int_variables[int_variables.length] = varName;
  }
  var typeName = 'int';
  return typeName+' '+varName + ' = ' + argument0 + ';\n';
};

Blockly.Java['variable_get_int'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  // Variable getter.
  var code = Blockly.Java.nameDB_.getName(block.getFieldValue('VAR'),
  Blockly.Variables.NAME_TYPE);
  // code = '$EVAL_' + code + '_EVAL$';
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['variable_set_int'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  // Variable setter.
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.Java['variable_declare_float'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  if(int_variables.indexOf(varName) < 0) {
      int_variables[int_variables.length] = varName;
  }
  var typeName = 'float';
  return typeName+' '+varName + ' = ' + argument0 + ';\n';
};


Blockly.Java['string_to_integer'] = function(block: { getFieldValue: (arg0: string) => string; }) {
  // Numeric value.
  var argument0 = Blockly.Java.valueToCode(block, 'paramtxt',
      Blockly.Java.ORDER_ASSIGNMENT) || '"0"';

  var code = 'Integer.parseInt(' + argument0 + ')'  ;
  return [code, Blockly.Java.ORDER_ATOMIC];
};


Blockly.Java['string_to_float'] = function(block: { getFieldValue: (arg0: string) => string; }) {
  // Numeric value.
  var argument0 = Blockly.Java.valueToCode(block, 'paramtxt',
  Blockly.Java.ORDER_ASSIGNMENT) || '"0"';

  var code = 'Float.parseFloat(' + argument0 + ')'  ;
  return [code, Blockly.Java.ORDER_ATOMIC];
};

/*
* --- BOOLEAN ---
*
*/
Blockly.Java['variable_declare_boolean'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || 'true';
  var varName = Blockly.Java.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  if(boolean_variables.indexOf(varName) < 0) {
      boolean_variables[boolean_variables.length] = varName;
  }
  var typeName = 'boolean';
  return typeName+' '+varName + ' = ' + argument0 + ';\n';
};

Blockly.Java['variable_get_boolean'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  // Variable getter.
  var code = Blockly.Java.nameDB_.getName(block.getFieldValue('VAR'),
  Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['variable_set_boolean'] = function(block: { getFieldValue: (arg0: string) => any; }) {
  // Variable setter.
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || 'true';
  var varName = Blockly.Java.nameDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};


  }


  
}
