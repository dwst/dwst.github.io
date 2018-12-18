/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var DwstFunction = function DwstFunction() {
  _classCallCheck(this, DwstFunction);

  if (new.target === DwstFunction) {
    throw new Error('abstract');
  }
};

exports.default = DwstFunction;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _error = __webpack_require__(2);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 Authors: Toni Ruottu, Finland 2010-2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 This file is part of Dark WebSocket Terminal.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 To the extent possible under law, Dark WebSocket Terminal developers have waived all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 copyright and related or neighboring rights to Dark WebSocket Terminal.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */

var NoConnection = function (_DwstError) {
  _inherits(NoConnection, _DwstError);

  function NoConnection(msg) {
    _classCallCheck(this, NoConnection);

    var _this = _possibleConstructorReturn(this, (NoConnection.__proto__ || Object.getPrototypeOf(NoConnection)).call(this));

    _this.msg = msg;
    return _this;
  }

  return NoConnection;
}(_error2.default);

var AlreadyConnected = function (_DwstError2) {
  _inherits(AlreadyConnected, _DwstError2);

  function AlreadyConnected() {
    _classCallCheck(this, AlreadyConnected);

    return _possibleConstructorReturn(this, (AlreadyConnected.__proto__ || Object.getPrototypeOf(AlreadyConnected)).apply(this, arguments));
  }

  return AlreadyConnected;
}(_error2.default);

var SocketError = function (_DwstError3) {
  _inherits(SocketError, _DwstError3);

  function SocketError() {
    _classCallCheck(this, SocketError);

    return _possibleConstructorReturn(this, (SocketError.__proto__ || Object.getPrototypeOf(SocketError)).apply(this, arguments));
  }

  return SocketError;
}(_error2.default);

var InvalidTemplateExpression = function (_DwstError4) {
  _inherits(InvalidTemplateExpression, _DwstError4);

  function InvalidTemplateExpression(expected, remainder) {
    var expression = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, InvalidTemplateExpression);

    var _this4 = _possibleConstructorReturn(this, (InvalidTemplateExpression.__proto__ || Object.getPrototypeOf(InvalidTemplateExpression)).call(this));

    _this4.expected = expected;
    _this4.remainder = remainder;
    _this4.expression = expression;
    return _this4;
  }

  _createClass(InvalidTemplateExpression, [{
    key: 'errorPosition',
    get: function get() {
      return this.expression.length - this.remainder.length;
    }
  }]);

  return InvalidTemplateExpression;
}(_error2.default);

var InvalidArgument = function (_DwstError5) {
  _inherits(InvalidArgument, _DwstError5);

  function InvalidArgument(argument, extraInfo) {
    _classCallCheck(this, InvalidArgument);

    var _this5 = _possibleConstructorReturn(this, (InvalidArgument.__proto__ || Object.getPrototypeOf(InvalidArgument)).call(this));

    _this5.argument = argument;
    _this5.extraInfo = extraInfo;
    return _this5;
  }

  return InvalidArgument;
}(_error2.default);

var InvalidCombination = function (_DwstError6) {
  _inherits(InvalidCombination, _DwstError6);

  function InvalidCombination(command, commands) {
    _classCallCheck(this, InvalidCombination);

    var _this6 = _possibleConstructorReturn(this, (InvalidCombination.__proto__ || Object.getPrototypeOf(InvalidCombination)).call(this));

    _this6.command = command;
    _this6.commands = commands;
    return _this6;
  }

  return InvalidCombination;
}(_error2.default);

var InvalidUtf8 = function (_DwstError7) {
  _inherits(InvalidUtf8, _DwstError7);

  function InvalidUtf8(buffer) {
    _classCallCheck(this, InvalidUtf8);

    var _this7 = _possibleConstructorReturn(this, (InvalidUtf8.__proto__ || Object.getPrototypeOf(InvalidUtf8)).call(this));

    _this7.buffer = buffer;
    return _this7;
  }

  return InvalidUtf8;
}(_error2.default);

var InvalidDataType = function (_DwstError8) {
  _inherits(InvalidDataType, _DwstError8);

  function InvalidDataType(variable, expected) {
    _classCallCheck(this, InvalidDataType);

    var _this8 = _possibleConstructorReturn(this, (InvalidDataType.__proto__ || Object.getPrototypeOf(InvalidDataType)).call(this));

    _this8.variable = variable;
    _this8.expected = expected;
    return _this8;
  }

  return InvalidDataType;
}(_error2.default);

var UnknownCommand = function (_DwstError9) {
  _inherits(UnknownCommand, _DwstError9);

  function UnknownCommand(command) {
    _classCallCheck(this, UnknownCommand);

    var _this9 = _possibleConstructorReturn(this, (UnknownCommand.__proto__ || Object.getPrototypeOf(UnknownCommand)).call(this));

    _this9.command = command;
    return _this9;
  }

  return UnknownCommand;
}(_error2.default);

var UnknownInstruction = function (_DwstError10) {
  _inherits(UnknownInstruction, _DwstError10);

  function UnknownInstruction(instruction) {
    _classCallCheck(this, UnknownInstruction);

    var _this10 = _possibleConstructorReturn(this, (UnknownInstruction.__proto__ || Object.getPrototypeOf(UnknownInstruction)).call(this));

    _this10.instruction = instruction;
    return _this10;
  }

  return UnknownInstruction;
}(_error2.default);

var UnknownHelpPage = function (_DwstError11) {
  _inherits(UnknownHelpPage, _DwstError11);

  function UnknownHelpPage(page) {
    _classCallCheck(this, UnknownHelpPage);

    var _this11 = _possibleConstructorReturn(this, (UnknownHelpPage.__proto__ || Object.getPrototypeOf(UnknownHelpPage)).call(this));

    _this11.page = page;
    return _this11;
  }

  return UnknownHelpPage;
}(_error2.default);

var UnknownVariable = function (_DwstError12) {
  _inherits(UnknownVariable, _DwstError12);

  function UnknownVariable(variable) {
    _classCallCheck(this, UnknownVariable);

    var _this12 = _possibleConstructorReturn(this, (UnknownVariable.__proto__ || Object.getPrototypeOf(UnknownVariable)).call(this));

    _this12.variable = variable;
    return _this12;
  }

  return UnknownVariable;
}(_error2.default);

exports.default = {
  NoConnection: NoConnection,
  AlreadyConnected: AlreadyConnected,
  SocketError: SocketError,
  InvalidTemplateExpression: InvalidTemplateExpression,
  InvalidArgument: InvalidArgument,
  InvalidCombination: InvalidCombination,
  InvalidUtf8: InvalidUtf8,
  InvalidDataType: InvalidDataType,
  UnknownCommand: UnknownCommand,
  UnknownInstruction: UnknownInstruction,
  UnknownHelpPage: UnknownHelpPage,
  UnknownVariable: UnknownVariable
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var DwstError = function (_extendableBuiltin2) {
  _inherits(DwstError, _extendableBuiltin2);

  function DwstError() {
    _classCallCheck(this, DwstError);

    var _this = _possibleConstructorReturn(this, (DwstError.__proto__ || Object.getPrototypeOf(DwstError)).call(this));

    if (new.target === DwstError) {
      throw new Error('abstract');
    }
    return _this;
  }

  return DwstError;
}(_extendableBuiltin(Error));

exports.default = DwstError;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

exports.default = {

  parseNum: function parseNum(str) {
    if (str.length > 2 && str.substr(0, 2) === '0x') {
      return parseInt(str.substr(2), 16);
    }
    var num = parseInt(str, 10);
    return num;
  },

  chunkify: function chunkify(l, n) {
    var chunks = [];
    var chunk = [];
    var i = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var b = _step.value;

        if (i >= n) {
          chunks.push(chunk);
          chunk = [];
          i = 0;
        }
        chunk.push(b);
        i += 1;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    chunks.push(chunk);
    return chunks;
  },

  range: function range(a) {
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var start = void 0;
    var stop = void 0;
    if (b === null) {
      start = 0;
      stop = a;
    } else {
      start = a;
      stop = b;
    }
    var length = stop - start;
    return Array(length).fill().map(function (_, i) {
      return start + i;
    });
  },

  htmlescape: function htmlescape(text) {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },

  joinBuffers: function joinBuffers(buffersToJoin) {
    var total = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = buffersToJoin[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var buffer = _step2.value;

        total += buffer.length;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var out = new Uint8Array(total);
    var offset = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = buffersToJoin[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _buffer = _step3.value;

        out.set(_buffer, offset);
        offset += _buffer.length;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return out;
  }

};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
/**

  Authors: Toni Ruottu, Finland 2017-2018
           Lauri Kaitala, Finland 2017-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

// DWST template expression parser

var _parsee = __webpack_require__(5);

var _parsee2 = _interopRequireDefault(_parsee);

var _errors = __webpack_require__(1);

var _errors2 = _interopRequireDefault(_errors);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvalidTemplateExpression = _errors2.default.InvalidTemplateExpression;


var specialChars = ['$', '\\'];

function charCodeRange(start, end) {
  var startCode = start.charCodeAt(0);
  var endCode = end.charCodeAt(0);
  var charCodes = _utils2.default.range(startCode, endCode + 1);
  return charCodes.map(function (charCode) {
    return String.fromCharCode(charCode);
  });
}

var digitChars = charCodeRange('0', '9');
var hexChars = charCodeRange('a', 'f').concat(digitChars);
var smallChars = charCodeRange('a', 'z');
var bigChars = charCodeRange('A', 'Z');
var alphaChars = smallChars.concat(bigChars);

var integerLiteralChars = hexChars.concat(['x']);
var variableNameChars = alphaChars;

function quote(string) {
  return '"' + string + '"';
}

function skipSpace(parsee) {
  while (parsee.read(' ')) {
    // empty while on purpose
  }
}

function readTemplateExpressionByte(parsee) {
  var hex = parsee.readWhile(hexChars, 2);
  if (hex.length < 2) {
    throw new InvalidTemplateExpression(['hex digit'], String(parsee));
  }
  var value = parseInt(hex, 16);
  return { type: 'byte', value: value };
}

function readTemplateExpressionCodePoint(parsee) {
  var hex = void 0;
  if (parsee.read('{')) {
    hex = parsee.readWhile(hexChars, 6);
    if (hex.length < 1) {
      throw new InvalidTemplateExpression(['hex digit'], String(parsee));
    }
    if (parsee.length === 0) {
      throw new InvalidTemplateExpression(['hex digit', '"}"'], String(parsee));
    }
    if (parsee.read('}') === false) {
      throw new InvalidTemplateExpression(['"}"'], String(parsee));
    }
  } else {
    hex = parsee.readWhile(hexChars, 4);
    if (hex.length < 1) {
      throw new InvalidTemplateExpression(['hex digit', '"{"'], String(parsee));
    }
    if (hex.length < 4) {
      throw new InvalidTemplateExpression(['hex digit'], String(parsee));
    }
  }
  var value = parseInt(hex, 16);
  return { type: 'codepoint', value: value };
}

function readTemplateExpressionEscape(parsee) {
  var mapping = [['\\', '\\'], ['$', '$'], ['n', '\x0a'], ['r', '\x0d'], ['0', '\x00'], ['x', null], ['u', null]];
  if (parsee.read('x')) {
    return readTemplateExpressionByte(parsee);
  }
  if (parsee.read('u')) {
    return readTemplateExpressionCodePoint(parsee);
  }
  if (parsee.length > 0) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = mapping[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ref = _step.value;

        var _ref2 = _slicedToArray(_ref, 2);

        var from = _ref2[0];
        var to = _ref2[1];

        if (parsee.read(from)) {
          return { type: 'text', value: to };
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  var expected = mapping.map(function (pair) {
    return pair[0];
  });
  throw new InvalidTemplateExpression(expected.map(quote), String(parsee));
}

function readTemplateExpressionText(parsee) {
  var value = parsee.readUntil(specialChars);
  return { type: 'text', value: value };
}

function skipExpressionOpen(parsee) {
  var expressionOpen = '{';
  if (parsee.read(expressionOpen) === false) {
    throw new InvalidTemplateExpression([expressionOpen].map(quote), String(parsee));
  }
}

function skipExpressionClose(parsee) {
  var expressionClose = '}';
  if (parsee.read(expressionClose) === false) {
    throw new InvalidTemplateExpression([expressionClose].map(quote), String(parsee));
  }
}

function skipArgListOpen(parsee) {
  var argListOpen = '(';
  if (parsee.read(argListOpen) === false) {
    throw new Error('unexpected return value');
  }
}

function skipArgListClose(parsee) {
  var argListClose = ')';
  if (parsee.read(argListClose) === false) {
    throw new Error('unexpected return value');
  }
}

function readVariableName(parsee) {
  var functionName = parsee.readWhile(variableNameChars);
  if (functionName.length === 0) {
    throw new InvalidTemplateExpression(['a function name', 'a variable name'], String(parsee));
  }
  if (parsee.length === 0) {
    throw new InvalidTemplateExpression(['(', '}'].map(quote), String(parsee));
  }
  return functionName;
}

function readInteger(parsee) {
  if (parsee.read('0x')) {
    var hexDigits = parsee.readWhile(hexChars);
    if (hexDigits.length === 0) {
      throw new InvalidTemplateExpression(['hex digit'], String(parsee));
    }
    var _value = parseInt(hexDigits, 16);
    return { type: 'int', value: _value };
  }
  var digits = parsee.readWhile(digitChars);
  if (digits.length === 0) {
    throw new InvalidTemplateExpression(['an integer'], String(parsee));
  }
  var value = parseInt(digits, 10);
  return { type: 'int', value: value };
}

function readFunctionArgs(parsee) {
  var functionArgs = [];
  if (parsee.startsWith(')')) {
    return functionArgs;
  }
  if (integerLiteralChars.some(function (chr) {
    return parsee.startsWith(chr);
  }) === false) {
    var expected = ['an integer'].concat([')'].map(quote));
    throw new InvalidTemplateExpression(expected, String(parsee));
  }

  while (true) {
    // eslint-disable-line
    var arg = readInteger(parsee);
    functionArgs.push(arg);
    skipSpace(parsee);
    if (parsee.startsWith(')')) {
      return functionArgs;
    }
    if (parsee.read(',') === false) {
      throw new InvalidTemplateExpression([',', ')'].map(quote), String(parsee));
    }
    skipSpace(parsee);
  }
}

function readExpression(parsee) {
  var name = readVariableName(parsee);
  skipSpace(parsee);
  if (parsee.startsWith('(')) {
    skipArgListOpen(parsee);
    skipSpace(parsee);
    var args = readFunctionArgs(parsee);
    skipSpace(parsee);
    skipArgListClose(parsee);
    return { type: 'function', name: name, args: args };
  }
  if (parsee.startsWith('}')) {
    return { type: 'variable', name: name };
  }
  throw new InvalidTemplateExpression(['(', '}'].map(quote), String(parsee));
}

function readParticle(parsee) {
  if (parsee.read('\\')) {
    return readTemplateExpressionEscape(parsee);
  }
  if (parsee.read('$')) {
    skipExpressionOpen(parsee);
    skipSpace(parsee);
    var expression = readExpression(parsee);
    skipSpace(parsee);
    skipExpressionClose(parsee);
    return expression;
  }
  return readTemplateExpressionText(parsee);
}

function readTemplateExpression(parsee) {
  var particles = [];
  while (parsee.length > 0) {
    var particle = readParticle(parsee);
    particles.push(particle);
  }
  return { type: 'templateExpression', particles: particles };
}

function parseTemplateExpression(templateExpression) {
  var parsee = new _parsee2.default(templateExpression);
  try {
    return readTemplateExpression(parsee);
  } catch (e) {
    if (e instanceof InvalidTemplateExpression) {
      e.expression = templateExpression;
    }
    throw e;
  }
}

function escapeForTemplateExpression(textString) {
  var replmap = [['$', '\\$'], ['\\', '\\\\']];

  function replacer(str, rm) {
    if (rm.length < 1) {
      return str;
    }
    var head = rm[0];
    var find = head[0];
    var rep = head[1];

    var parts = str.split(find);
    var complete = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var part = _step2.value;

        var loput = rm.slice(1);
        var news = replacer(part, loput);
        complete.push(news);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var out = complete.join(rep);
    return out;
  }
  var complete = replacer(textString, replmap);
  return complete;
}

exports.default = {
  parseTemplateExpression: parseTemplateExpression,
  escapeForTemplateExpression: escapeForTemplateExpression
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**

  Authors: Toni Ruottu, Finland 2017-2018
           Lauri Kaitala, Finland 2017

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function indexOfAny(inputString, chars) {
  var indices = new Set(chars.map(function (character) {
    return inputString.indexOf(character);
  }));
  indices.delete(-1);
  if (indices.size === 0) {
    return -1;
  }
  return Math.min.apply(Math, _toConsumableArray(indices));
}

function indexOfNone(inputString, chars) {
  var indices = inputString.split('').map(function (character) {
    return chars.includes(character);
  });
  var thisIndexOf = indices.indexOf(false);
  if (thisIndexOf === -1) {
    return inputString.length;
  }
  return thisIndexOf;
}

var Parsee = function () {
  function Parsee(original) {
    _classCallCheck(this, Parsee);

    this._remainder = original;
  }

  _createClass(Parsee, [{
    key: 'startsWith',
    value: function startsWith(str) {
      return this._remainder.startsWith(str);
    }
  }, {
    key: 'read',
    value: function read(str) {
      if (this._remainder.startsWith(str) === false) {
        return false;
      }
      this._remainder = this._remainder.slice(str.length);
      return true;
    }
  }, {
    key: 'readUntil',
    value: function readUntil(stopChars) {
      var nextSpecialPos = indexOfAny(this._remainder, stopChars);
      var sliceIndex = void 0;
      if (nextSpecialPos === -1) {
        sliceIndex = this._remainder.length;
      } else {
        sliceIndex = nextSpecialPos;
      }
      var chars = this._remainder.slice(0, sliceIndex);
      this._remainder = this._remainder.slice(sliceIndex);
      return chars;
    }
  }, {
    key: 'readWhile',
    value: function readWhile(allowChars) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      var mismatch = indexOfNone(this._remainder, allowChars);
      var sliceIndex = Math.min(mismatch, limit);
      var chars = this._remainder.slice(0, sliceIndex);
      this._remainder = this._remainder.slice(sliceIndex);
      return chars;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this._remainder;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._remainder.length;
    }
  }]);

  return Parsee;
}();

exports.default = Parsee;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sectionList;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function flatList(values) {
  var segments = [];
  values.forEach(function (value) {
    value.afterText = ',';
    segments.push(value);
    segments.push(' ');
  });
  segments.pop(); // remove extra space
  var last = segments.pop();
  Reflect.deleteProperty(last, 'afterText');
  segments.push(last);
  return segments;
}

function sectionList(sections) {
  var available = [];
  sections.sort().forEach(function (sec) {
    if (sec.length > 1) {
      var sectionSegment = {
        type: 'dwstgg',
        text: sec,
        section: sec,
        spacing: true,
        wrap: false
      };
      available.push(sectionSegment);
    }
  });
  return [flatList(available)];
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderTime;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function renderTime() {
  var contentOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var addzero = function addzero(i) {
    if (i < 10) {
      return '0' + i;
    }
    return String(i);
  };
  var date = new Date();
  var content = addzero(date.getHours()) + ':' + addzero(date.getMinutes()) + '<span class="dwst-time__sec">:' + addzero(date.getSeconds()) + '</span>';

  if (contentOnly) {
    return content;
  }

  var time = document.createElement('span');
  time.setAttribute('class', 'dwst-time');
  time.innerHTML = content;

  return time;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(9);

var _lib2 = _interopRequireDefault(_lib);

var _model = __webpack_require__(11);

var _model2 = _interopRequireDefault(_model);

var _ui = __webpack_require__(28);

var _ui2 = _interopRequireDefault(_ui);

var _controller = __webpack_require__(43);

var _controller2 = _interopRequireDefault(_controller);

var _plugins = __webpack_require__(49);

var _plugins2 = _interopRequireDefault(_plugins);

var _error = __webpack_require__(2);

var _error2 = _interopRequireDefault(_error);

var _byte_range = __webpack_require__(50);

var _byte_range2 = _interopRequireDefault(_byte_range);

var _char_range = __webpack_require__(51);

var _char_range2 = _interopRequireDefault(_char_range);

var _random_bytes = __webpack_require__(52);

var _random_bytes2 = _interopRequireDefault(_random_bytes);

var _random_chars = __webpack_require__(53);

var _random_chars2 = _interopRequireDefault(_random_chars);

var _time = __webpack_require__(54);

var _time2 = _interopRequireDefault(_time);

var _binary = __webpack_require__(55);

var _binary2 = _interopRequireDefault(_binary);

var _clear = __webpack_require__(56);

var _clear2 = _interopRequireDefault(_clear);

var _connect = __webpack_require__(57);

var _connect2 = _interopRequireDefault(_connect);

var _disconnect = __webpack_require__(59);

var _disconnect2 = _interopRequireDefault(_disconnect);

var _forget = __webpack_require__(60);

var _forget2 = _interopRequireDefault(_forget);

var _help = __webpack_require__(61);

var _help2 = _interopRequireDefault(_help);

var _interval = __webpack_require__(62);

var _interval2 = _interopRequireDefault(_interval);

var _loadbin = __webpack_require__(63);

var _loadbin2 = _interopRequireDefault(_loadbin);

var _loadtext = __webpack_require__(64);

var _loadtext2 = _interopRequireDefault(_loadtext);

var _pwa = __webpack_require__(65);

var _pwa2 = _interopRequireDefault(_pwa);

var _reset = __webpack_require__(66);

var _reset2 = _interopRequireDefault(_reset);

var _send = __webpack_require__(67);

var _send2 = _interopRequireDefault(_send);

var _spam = __webpack_require__(68);

var _spam2 = _interopRequireDefault(_spam);

var _splash = __webpack_require__(69);

var _splash2 = _interopRequireDefault(_splash);

var _vars = __webpack_require__(70);

var _vars2 = _interopRequireDefault(_vars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

  Authors: Toni Ruottu, Finland 2010-2018
           William Orr, US 2012

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function loadModel(dwst) {
  var HISTORY_KEY = 'history';
  var response = localStorage.getItem(HISTORY_KEY);
  var save = function save(history) {
    var saveState = JSON.stringify(history);
    localStorage.setItem(HISTORY_KEY, saveState);
  };
  var history = [];
  if (response !== null) {
    history = JSON.parse(response);
  }
  return new _model2.default(dwst, history, save, [_byte_range2.default, _char_range2.default, _random_bytes2.default, _random_chars2.default, _time2.default]);
}

var dwst = Object.seal({
  lib: _lib2.default,
  model: null,
  ui: null,
  controller: null,
  plugins: null,
  functions: null
});

dwst.model = loadModel(dwst);

dwst.controller = new _controller2.default(dwst);

dwst.plugins = new _plugins2.default(dwst, [_binary2.default, _clear2.default, _connect2.default, _disconnect2.default, _forget2.default, _help2.default, _interval2.default, _loadbin2.default, _loadtext2.default, _pwa2.default, _reset2.default, _send2.default, _spam2.default, _splash2.default, _vars2.default]);

document.addEventListener('DOMContentLoaded', function () {
  dwst.ui = new _ui2.default(document, dwst);
  dwst.ui.init();
});

window.addEventListener('load', function () {
  dwst.ui.onLoad();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service_worker.js');
  }
});

window.addEventListener('error', function (evt) {
  if (evt.error instanceof _error2.default) {
    evt.preventDefault();
    dwst.controller.error.onDwstError(evt.error);
  }
});

window.addEventListener('beforeinstallprompt', function (evt) {
  dwst.controller.pwa.beforeInstallPrompt(evt);
});

// for live debugging
window._dwst = dwst;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = __webpack_require__(1);

var _errors2 = _interopRequireDefault(_errors);

var _parser = __webpack_require__(4);

var _parser2 = _interopRequireDefault(_parser);

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

var _types = __webpack_require__(10);

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

exports.default = {
  errors: _errors2.default,
  types: _types2.default,
  utils: _utils2.default,
  parser: _parser2.default
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _error = __webpack_require__(2);

var _error2 = _interopRequireDefault(_error);

var _function = __webpack_require__(0);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

exports.default = {
  DwstError: _error2.default,
  DwstFunction: _function2.default
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(12);

var _config2 = _interopRequireDefault(_config);

var _history = __webpack_require__(13);

var _history2 = _interopRequireDefault(_history);

var _variables = __webpack_require__(14);

var _variables2 = _interopRequireDefault(_variables);

var _dwstgg = __webpack_require__(15);

var _dwstgg2 = _interopRequireDefault(_dwstgg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Model = function Model(dwst, history, save, functions) {
  _classCallCheck(this, Model);

  this.config = _config2.default;
  this.history = new _history2.default(history, { save: save });
  this.dwstgg = new _dwstgg2.default(dwst);
  this.connection = null;
  this.intervalId = null;
  this.variables = new _variables2.default(dwst, functions);
};

exports.default = Model;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  appVersion: '2.5.6',
  echoServer: 'wss://echo.websocket.org/'
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018
           William Orr, US 2012

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var ElementHistory = function () {
  function ElementHistory() {
    var history = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, ElementHistory);

    if (!Array.isArray(history)) {
      throw new Error('invalid history saveState');
    }
    this.idx = -1;
    this.history = history;
  }

  _createClass(ElementHistory, [{
    key: 'getAll',
    value: function getAll() {
      return this.history;
    }
  }, {
    key: 'getNext',
    value: function getNext() {
      if (this.idx > 0) {
        this.idx -= 1;
        return this.history[this.idx];
      }
      if (this.idx === 0) {
        this.idx -= 1;
        return '';
      }

      return '';
    }
  }, {
    key: 'getPrevious',
    value: function getPrevious() {
      if (this.history.length === 0) {
        return '';
      }
      if (this.idx + 1 < this.history.length) {
        this.idx += 1;
        return this.history[this.idx];
      }
      return this.history[this.history.length - 1];
    }
  }, {
    key: 'gotoBottom',
    value: function gotoBottom() {
      this.idx = -1;
    }
  }, {
    key: 'getLast',
    value: function getLast() {
      return this.history[0];
    }
  }, {
    key: 'addItem',
    value: function addItem(item, edition, callback) {
      if (typeof item !== 'string') {
        throw new Error('invalid type');
      }
      if (item !== '' && item !== this.getLast()) {
        this.history.unshift(item);
        if (edition) {
          this.idx += 1;
        }
      }
      callback();
    }
  }, {
    key: 'removeBottom',
    value: function removeBottom() {
      this.history.shift();
    }
  }, {
    key: 'getCurrent',
    value: function getCurrent() {
      return this.history[this.idx];
    }
  }, {
    key: 'getConnectCommands',
    value: function getConnectCommands(cap) {
      var uniqueCommands = [];
      var commandsSet = new Set();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.history[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var command = _step.value;

          if (command.startsWith('/connect ') && !commandsSet.has(command)) {
            uniqueCommands.push(command);
            commandsSet.add(command);
          }
          if (uniqueCommands.length >= cap) {
            return uniqueCommands;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return uniqueCommands;
    }
  }, {
    key: 'length',
    get: function get() {
      return this.history.length;
    }
  }]);

  return ElementHistory;
}();

var History = function () {
  function History(savedHistory, options) {
    _classCallCheck(this, History);

    this.save = options.save;
    this.history = new ElementHistory(savedHistory);
  }

  _createClass(History, [{
    key: 'getHistoryLength',
    value: function getHistoryLength() {
      return this.history.length;
    }
  }, {
    key: 'getSummary',
    value: function getSummary() {
      var history = this.history.getAll();
      var historyLine = ['History '];
      if (history.length < 1) {
        historyLine.push('is empty');
      } else {
        historyLine.push('contains ');
        historyLine.push({
          type: 'strong',
          text: '' + history.length
        });
        if (history.length === 1) {
          historyLine.push(' command');
        } else {
          historyLine.push(' commands');
        }
      }
      return historyLine;
    }
  }, {
    key: 'forget',
    value: function forget() {
      var emptyHistory = [];
      this.history = new ElementHistory(emptyHistory, { save: this.save });
      this.save(emptyHistory);
    }
  }, {
    key: 'addItem',
    value: function addItem(value, edition) {
      var _this = this;

      this.history.addItem(value, edition, function () {
        var history = _this.history.getAll();
        _this.save(history);
      });
    }
  }, {
    key: 'getNext',
    value: function getNext(value) {
      if (value !== this.history.getCurrent()) {
        this.addItem(value, true);
      }
      return this.history.getNext();
    }
  }, {
    key: 'getPrevious',
    value: function getPrevious(value) {
      if (value !== this.history.getCurrent()) {
        this.addItem(value, true);
      }
      return this.history.getPrevious();
    }
  }, {
    key: 'select',
    value: function select(value) {
      this.addItem(value);
      this.history.gotoBottom();
    }
  }, {
    key: 'atBottom',
    value: function atBottom() {
      return this.history.idx === -1;
    }
  }, {
    key: 'getConnectCommands',
    value: function getConnectCommands(cap) {
      return this.history.getConnectCommands(cap);
    }
  }]);

  return History;
}();

exports.default = History;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Variables = function () {
  function Variables(dwst, functionClasses) {
    _classCallCheck(this, Variables);

    this._functions = new Map();
    this._variables = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = functionClasses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var Constructor = _step.value;

        var func = new Constructor(dwst);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = func.commands()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var name = _step2.value;

            this._functions.set(name, func);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  _createClass(Variables, [{
    key: 'setVariable',
    value: function setVariable(variableName, value) {
      this._variables.set(variableName, value);
    }
  }, {
    key: 'getVariable',
    value: function getVariable(variableName) {
      var variable = this._variables.get(variableName);
      if (typeof variable !== 'undefined') {
        return variable;
      }
      return this.getFunction(variableName);
    }
  }, {
    key: 'getVariableNames',
    value: function getVariableNames() {
      return [].concat(_toConsumableArray(this._variables.keys()));
    }
  }, {
    key: 'getFunction',
    value: function getFunction(functionName) {
      // returns function even when it's variable had been deleted/overwritten
      var func = this._functions.get(functionName);
      if (typeof func !== 'undefined') {
        return func;
      }
      return null;
    }
  }, {
    key: 'getFunctionNames',
    value: function getFunctionNames() {
      return [].concat(_toConsumableArray(this._functions.keys()));
    }
  }]);

  return Variables;
}();

exports.default = Variables;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _errors = __webpack_require__(1);

var _errors2 = _interopRequireDefault(_errors);

var _chrome = __webpack_require__(16);

var _chrome2 = _interopRequireDefault(_chrome);

var _commands = __webpack_require__(17);

var _commands2 = _interopRequireDefault(_commands);

var _developing = __webpack_require__(18);

var _developing2 = _interopRequireDefault(_developing);

var _development = __webpack_require__(19);

var _development2 = _interopRequireDefault(_development);

var _firefox = __webpack_require__(20);

var _firefox2 = _interopRequireDefault(_firefox);

var _functions = __webpack_require__(21);

var _functions2 = _interopRequireDefault(_functions);

var _introduction = __webpack_require__(22);

var _introduction2 = _interopRequireDefault(_introduction);

var _main = __webpack_require__(23);

var _main2 = _interopRequireDefault(_main);

var _privacy = __webpack_require__(24);

var _privacy2 = _interopRequireDefault(_privacy);

var _styleguide = __webpack_require__(25);

var _styleguide2 = _interopRequireDefault(_styleguide);

var _simulator = __webpack_require__(26);

var _simulator2 = _interopRequireDefault(_simulator);

var _unprotected = __webpack_require__(27);

var _unprotected2 = _interopRequireDefault(_unprotected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnknownCommand = _errors2.default.UnknownCommand,
    UnknownHelpPage = _errors2.default.UnknownHelpPage,
    UnknownInstruction = _errors2.default.UnknownInstruction;


function createBreadCrumbs() {
  var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var root = [{
    type: 'dwstgg',
    text: 'DWSTGG'
  }];
  if (section === null) {
    return root;
  }
  return root.concat([{
    type: 'regular',
    text: ' &raquo; ',
    unsafe: true
  }, {
    type: 'dwstgg',
    text: '' + section,
    section: '' + section
  }]);
}

var Dwstgg = function () {
  function Dwstgg(dwst) {
    _classCallCheck(this, Dwstgg);

    this._dwst = dwst;
  }

  _createClass(Dwstgg, [{
    key: '_helpPage',
    value: function _helpPage(section) {
      if (section === '#main') {
        return (0, _main2.default)();
      }
      if (section === '#chrome') {
        return (0, _chrome2.default)();
      }
      if (section === '#firefox') {
        return (0, _firefox2.default)();
      }
      if (section === '#developing') {
        return (0, _developing2.default)();
      }
      if (section === '#development') {
        return (0, _development2.default)();
      }
      if (section === '#styleguide') {
        return (0, _styleguide2.default)();
      }
      if (section === '#simulator') {
        return (0, _simulator2.default)();
      }
      if (section === '#unprotected') {
        return (0, _unprotected2.default)();
      }
      if (section === '#privacy') {
        return (0, _privacy2.default)();
      }
      if (section === '#introduction') {
        return (0, _introduction2.default)();
      }
      if (section === '#commands') {
        var commands = this._dwst.plugins.getNames();
        return (0, _commands2.default)(commands);
      }
      if (section === '#functions') {
        var functions = this._dwst.model.variables.getFunctionNames();
        return (0, _functions2.default)(functions);
      }
      throw new UnknownHelpPage(section);
    }
  }, {
    key: '_commandHelp',
    value: function _commandHelp(command) {
      var plugin = this._dwst.plugins.getPlugin(command);
      if (plugin === null) {
        throw new UnknownCommand(command);
      }
      if (typeof plugin.usage === 'undefined') {
        throw new UnknownHelpPage(command);
      }
      var usage = plugin.usage().map(function (usageExample) {
        return {
          type: 'syntax',
          text: usageExample
        };
      });
      var examples = plugin.examples().map(function (exampleCommand) {
        return {
          type: 'command',
          text: exampleCommand
        };
      });

      return [[{
        type: 'h1',
        text: '' + command
      }, {
        type: 'regular',
        text: ' &ndash; ',
        unsafe: true
      }, plugin.info()], '', '', {
        type: 'h2',
        text: 'Syntax'
      }, ''].concat(usage).concat(['', {
        type: 'h2',
        text: 'Examples'
      }, '']).concat(examples).concat(['']);
    }
  }, {
    key: '_functionHelp',
    value: function _functionHelp(section) {
      var funcName = section.slice(0, -'()'.length);
      var func = this._dwst.model.variables.getFunction(funcName);
      if (func === null) {
        throw new UnknownInstruction(funcName);
      }
      if (typeof func.usage === 'undefined') {
        throw new UnknownHelpPage(funcName);
      }
      var usage = func.usage().map(function (usageExample) {
        return {
          type: 'syntax',
          text: usageExample
        };
      });
      var examples = func.examples().map(function (exampleCommand) {
        return {
          type: 'command',
          text: exampleCommand
        };
      });

      return [[func.type(), ' ', {
        type: 'h1',
        text: '' + section
      }, {
        type: 'regular',
        text: ' &ndash; ',
        unsafe: true
      }, func.info()], '', '', {
        type: 'h2',
        text: 'Syntax'
      }, ''].concat(usage).concat(['', {
        type: 'h2',
        text: 'Examples'
      }, '']).concat(examples).concat(['']);
    }
  }, {
    key: '_pageContent',
    value: function _pageContent(section) {
      if (section.startsWith('#')) {
        return this._helpPage(section);
      }
      if (section.endsWith('()')) {
        return this._functionHelp(section);
      }
      return this._commandHelp(section);
    }
  }, {
    key: 'page',
    value: function page(section) {
      var content = this._pageContent(section);
      if (content === null) {
        return null;
      }
      return [createBreadCrumbs(section), ''].concat(content);
    }
  }]);

  return Dwstgg;
}();

exports.default = Dwstgg;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = chromePage;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var disclaimer = [{
  type: 'h2',
  text: '!!! Follow at your own risk !!!'
}, '', 'Disabling security is generally a bad idea and you should only do it if you understand the implications.'];

function chromePage() {
  return [{
    type: 'h1',
    text: 'Insecure WebSocket Access in Chrome'
  }, '', ['Chrome lets you temporarily bypass the security feature that prevents you from connecting to ', {
    type: 'dwstgg',
    text: '#unprotected',
    section: '#unprotected'
  }, ' WebSockets.'], ''].concat(disclaimer).concat(['', {
    type: 'h2',
    text: 'Instructions'
  }, '', ['1. Use ', {
    type: 'dwstgg',
    text: 'connect',
    section: 'connect'
  }, ' on a ws:// address'], '2. Look for a shield icon', '3. Click on the shield icon', '4. Click "Load unsafe scripts"', '5. Use connect again', '']);
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = commandsPage;

var _section_list = __webpack_require__(6);

var _section_list2 = _interopRequireDefault(_section_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function commandsPage(commands) {

  var listing = (0, _section_list2.default)(commands);

  return [{
    type: 'h1',
    text: 'Alphabetical List of Commands'
  }, ''].concat(listing).concat([['Type ', {
    type: 'syntax',
    text: '/help <command>'
  }, ' for usage'], '']);
}
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = developingPage;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function developingPage() {
  return [{
    type: 'h1',
    text: 'DWST Development'
  }, '', ['- Run the ', {
    type: 'dwstgg',
    text: '#development',
    section: '#development'
  }, ' server'], ['- User interface ', {
    type: 'dwstgg',
    text: '#styleguide',
    section: '#styleguide'
  }], ['- WebSocket server ', {
    type: 'dwstgg',
    text: '#simulator',
    section: '#simulator'
  }]];
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = developmentPage;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var commands = ['git clone https://github.com/dwst/dwst.git', 'cd dwst', 'npm install', 'gulp dev'];

var commandSegments = commands.map(function (c) {
  return {
    type: 'code',
    text: c
  };
});

function developmentPage() {
  return [{
    type: 'h1',
    text: 'DWST Development Server'
  }, '', 'You can run DWST development server by executing the following commands in the shell near you.', ''].concat(commandSegments).concat(['', ['This is useful if you wish to customise DWST on source code level but can also be used to access ', {
    type: 'dwstgg',
    text: '#unprotected',
    section: '#unprotected'
  }, ' WebSockets.'], '']);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = firefoxPage;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var disclaimer = [{
  type: 'h2',
  text: '!!! Follow at your own risk !!!'
}, '', 'Disabling security is generally a bad idea and you should only do it if you understand the implications.'];

function firefoxPage() {
  return [{
    type: 'h1',
    text: 'Insecure WebSocket Access in Firefox'
  }, '', ['Firefox lets you disable the security feature that prevents you from connecting to ', {
    type: 'dwstgg',
    text: '#unprotected',
    section: '#unprotected'
  }, ' WebSockets.'], ''].concat(disclaimer).concat(['', {
    type: 'h2',
    text: 'Instructions'
  }, '', '1. Go to about:config', '2. Search for WebSocket', '3. Set allowInsecureFromHTTPS to true', '']);
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = functionsPage;

var _section_list = __webpack_require__(6);

var _section_list2 = _interopRequireDefault(_section_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function functionsPage(functions) {

  var sections = functions.map(function (funcName) {
    return funcName + '()';
  });
  var listing = (0, _section_list2.default)(sections);

  return [{
    type: 'h1',
    text: 'Alphabetical List of Functions'
  }, ''].concat(listing).concat([['Type ', {
    type: 'syntax',
    text: '/help <function>'
  }, ' for usage'], '']);
}
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = introductionPag;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function introductionPag() {

  return [{
    type: 'h1',
    text: 'Introduction for Beginners'
  }, '', 'DWST is used to manually interact with a WebSocket server.', '', {
    type: 'h2',
    text: 'The Very Basics'
  }, '', ['Use the ', {
    type: 'dwstgg',
    text: 'connect',
    section: 'connect'
  }, ' command to establish a connection. ', 'Type in text to send messages. ', 'End the connection with the ', {
    type: 'dwstgg',
    text: 'disconnect',
    section: 'disconnect'
  }, ' command when you are done.'], '', {
    type: 'h2',
    text: 'Convenience Tools'
  }, '', ['Use the ', {
    type: 'dwstgg',
    text: 'send',
    section: 'send'
  }, ' and ', {
    type: 'dwstgg',
    text: 'binary',
    section: 'binary'
  }, ' commands to construct more complex messages. ', 'Setup a periodic send with the ', {
    type: 'dwstgg',
    text: 'interval',
    section: 'interval'
  }, ' command or send a burst of messages with the ', {
    type: 'dwstgg',
    text: 'spam',
    section: 'spam'
  }, ' command.'], '', {
    type: 'h2',
    text: 'In Case of Emergency'
  }, '', ['Use the ', {
    type: 'strong',
    text: 'escape key'
  }, ' for an emergency shutdown if you feel that things are spinning out of control. ', '', 'Click on the DWST logo or use the ', {
    type: 'dwstgg',
    text: 'splash',
    section: 'splash'
  }, ' command if you get lost.'], ''];
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mainPage;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function mainPage() {

  return [{
    type: 'h1',
    text: 'DWST Guide to Galaxy'
  }, '', 'DWSTGG is here to help you get the most out of Dark WebSocket Terminal', '', {
    type: 'h2',
    text: 'Topics'
  }, '', ['- ', {
    type: 'dwstgg',
    text: '#introduction',
    section: '#introduction'
  }, ' for beginners'], ['- Working with ', {
    type: 'dwstgg',
    text: '#unprotected',
    section: '#unprotected'
  }, ' sockets'], ['- ', {
    type: 'dwstgg',
    text: '#privacy',
    section: '#privacy'
  }, ' and tracking information'], ['- Alphabetical list of ', {
    type: 'dwstgg',
    text: '#commands',
    section: '#commands'
  }], ['- Alphabetical list of ', {
    type: 'dwstgg',
    text: '#functions',
    section: '#functions'
  }], ['- ', {
    type: 'dwstgg',
    text: '#developing',
    section: '#developing'
  }, ' DWST itself'], '', ['Open with ', {
    type: 'syntax',
    text: '/help #<keyword>'
  }], ''];
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = privacyPage;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var gaSection = ['We use ', {
  type: 'link',
  text: 'Google Analytics',
  url: 'https://www.google.com/analytics/'
}, ' to collect information about DWST usage. ', 'The main motivation is to collect statistical information to aid us develop and promote the software. '];

var disableTracking = ['There are several ways to disable tracking. ', 'You could use some browser extension that blocks Google Analytics or', 'you could use the DWST ', {
  type: 'dwstgg',
  text: '#development',
  section: '#development'
}, ' server which should have Google Analytics disabled.'];

var storageSection = ['Google Analytics stores some information in cookies. ', 'DWST itself uses local storage for storing command history. ', 'You may use the built-in ', {
  type: 'dwstgg',
  text: 'forget',
  section: 'forget'
}, ' command to quickly remove stored command history. ', 'Consider using tools provided by your browser for more serious cleaning.'];

var futureChanges = ['This describes how we do things today. ', 'Check this page again sometime for possible updates on privacy and tracking considerations.'];

function privacyPage() {

  return [{
    type: 'h1',
    text: 'Privacy and Tracking Information'
  }, '', gaSection, '', disableTracking, '', storageSection, '', futureChanges, ''];
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = styleguidePage;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function styleguidePage() {
  return [{
    type: 'h1',
    text: 'Living Styleguide'
  }, '', ['DWST is built out of custom built user interface elements which are documented in the ', {
    type: 'link',
    text: 'living styleguide',
    url: '/styleguide'
  }, '. The styleguide is generated automatically from KSS metadata which is included in related CSS files.']];
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = simulatorPage;

/**

  Authors: Toni Ruottu, Finland 2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function simulatorPage() {
  return [{
    type: 'h1',
    text: 'Server Simulator'
  }, '', ['The built-in server simulator can be used for manual testing of dwst itself. ', 'It exists so dwst developers do not have to setup or burden test servers. ', 'It can be used for offline testing since it does not use the network.'], '', {
    type: 'h2',
    text: 'Modes'
  }, '', {
    type: 'command',
    text: '/connect dwst://echo'
  }, 'returns sent messages back to you', '', {
    type: 'command',
    text: '/connect dwst://flood'
  }, 'creates a flood of incoming messages'];
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unprotectedPage;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function unprotectedPage() {
  return [{
    type: 'h1',
    text: 'Working with Unprotected WebSockets'
  }, '', ['Browsers tend to prevent unprotected WebSockets connections from secure origins. ', 'You may encounter this problem if your target WebSocket address starts with', {
    type: 'strong',
    text: ' ws://'
  }], '', {
    type: 'h2',
    text: 'Use wss INSTEAD'
  }, '', ['The most straight forward fix is to use the secure address instead. ', 'However, the server needs to accept secure connections for this to work.'], '', {
    type: 'h2',
    text: 'Use Dev Server'
  }, '', ['The connection restrictions apply to DWST since it is served over https. ', 'You can work around the problem by setting up the DWST ', {
    type: 'dwstgg',
    text: '#development',
    section: '#development'
  }, ' server on your local work station.'], '', {
    type: 'h2',
    text: 'Disable Security'
  }, '', ['Finally, you have the option of disabling related browser security features. ', 'However, doing this will screw up your security and release testing. ', 'Nevertheless we have instructions for ', {
    type: 'dwstgg',
    text: '#Chrome',
    section: '#chrome'
  }, ' and ', {
    type: 'dwstgg',
    text: '#Firefox',
    section: '#firefox'
  }, '.'], ''];
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _terminal = __webpack_require__(29);

var _terminal2 = _interopRequireDefault(_terminal);

var _clock = __webpack_require__(35);

var _clock2 = _interopRequireDefault(_clock);

var _prompt = __webpack_require__(36);

var _prompt2 = _interopRequireDefault(_prompt);

var _send_button = __webpack_require__(37);

var _send_button2 = _interopRequireDefault(_send_button);

var _menu_button = __webpack_require__(38);

var _menu_button2 = _interopRequireDefault(_menu_button);

var _screen = __webpack_require__(39);

var _screen2 = _interopRequireDefault(_screen);

var _auto_scroll_button = __webpack_require__(40);

var _auto_scroll_button2 = _interopRequireDefault(_auto_scroll_button);

var _scroll_notification = __webpack_require__(41);

var _scroll_notification2 = _interopRequireDefault(_scroll_notification);

var _file_input = __webpack_require__(42);

var _file_input2 = _interopRequireDefault(_file_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ui = function () {
  function Ui(element, dwst) {
    _classCallCheck(this, Ui);

    this._element = element;
    this._dwst = dwst;
    this._resizePending = false;

    this.terminal = new _terminal2.default(element.getElementById('js-terminal'), this._dwst);
    this.clock = new _clock2.default(element.getElementById('js-clock'), this._dwst);
    this.prompt = new _prompt2.default(element.getElementById('js-prompt'), this._dwst);
    this.sendButton = new _send_button2.default(element.getElementById('js-send-button'), this._dwst);
    this.menuButton = new _menu_button2.default(element.getElementById('js-menu-button'), this._dwst);
    this.screen = new _screen2.default(element.getElementById('js-screen'), this._dwst);
    this.autoScrollButton = new _auto_scroll_button2.default(element.getElementById('js-auto-scroll-button'), this._dwst);
    this.scrollNotification = new _scroll_notification2.default(element.getElementById('js-scroll-notification'), this._dwst);
    this.fileInput = new _file_input2.default(element.getElementById('js-file-input'), this._dwst);
  }

  _createClass(Ui, [{
    key: 'globalKeyPress',
    value: function globalKeyPress(event) {
      if (event.key === 'Escape') {
        var connection = this._dwst.model.connection;
        if (connection !== null && (connection.isOpen() || connection.isConnecting())) {
          this._dwst.controller.prompt.loud('/disconnect');
        } else {
          this.prompt.offerConnect();
        }
      }
    }
  }, {
    key: 'updateGfxPositions',
    value: function updateGfxPositions() {
      // Updating gfx positions with this method disables basic centering
      // and aligns the text in the gfx section with the text in log lines.
      var MAX_MAXCHARS = 110;
      Reflect.apply(Array.prototype.forEach, this._element.getElementsByClassName('dwst-gfx'), [function (maxDiv) {
        var ref = maxDiv.getElementsByClassName('dwst-gfx__line')[0];
        var refTextWidth = ref.offsetWidth;
        var refTextLength = ref.textContent.length;
        var refWidth = refTextWidth / refTextLength;
        var windowWidth = window.innerWidth;
        var maxFit = Math.floor(windowWidth / refWidth);
        var leftMargin = 0;
        if (maxFit < MAX_MAXCHARS) {
          var invisible = MAX_MAXCHARS - maxFit;
          var invisibleLeft = Math.round(invisible / 2);
          leftMargin -= invisibleLeft;
        }
        var field = maxDiv.getElementsByClassName('dwst-gfx__content')[0];
        field.setAttribute('style', 'transform: initial; margin-left: ' + leftMargin + 'ch;');
      }]);
    }
  }, {
    key: '_throttledUpdateGfxPositions',
    value: function _throttledUpdateGfxPositions() {
      var _this = this;

      if (this._resizePending !== true) {
        this._resizePending = true;
        setTimeout(function () {
          _this._resizePending = false;
          _this.updateGfxPositions();
        }, 100);
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      this._element.addEventListener('keydown', function (evt) {
        return _this2.globalKeyPress(evt);
      });
      this.prompt.init();
      this.sendButton.init();
      this.menuButton.init();
      this.autoScrollButton.init();
      this.scrollNotification.init();
      this._dwst.controller.prompt.silent('/splash');
      this.prompt.focus();
      window.addEventListener('resize', function () {
        return _this2._throttledUpdateGfxPositions();
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.clock.onLoad();
      this.updateGfxPositions();
    }
  }]);

  return Ui;
}();

exports.default = Ui;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _log_entry = __webpack_require__(30);

var _log_entry2 = _interopRequireDefault(_log_entry);

var _gfx = __webpack_require__(33);

var _gfx2 = _interopRequireDefault(_gfx);

var _control = __webpack_require__(34);

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function createLines(mlogItems) {
  var CR = '\\r';
  var LF = '\\n';
  var lines = [];
  var line = [];
  var previous = null;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mlogItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var part = _step.value;

      if (previous === null) {
        line.push(part);
        if ((typeof part === 'undefined' ? 'undefined' : _typeof(part)) === 'object') {
          if (part.text === CR) {
            previous = CR;
          }
          if (part.text === LF) {
            previous = LF;
          }
        }
      } else if (previous === CR) {
        if (typeof part === 'string') {
          lines.push(line);
          line = [];
          line.push(part);
          previous = null;
        } else if (part.text === CR) {
          lines.push(line);
          line = [];
          line.push(part);
          previous = CR;
        } else if (part.text === LF) {
          line.push(part);
          lines.push(line);
          line = [];
          previous = null;
        } else {
          lines.push(line);
          line = [];
          line.push(part);
          previous = null;
        }
      } else if (previous === LF) {
        if (typeof part === 'string') {
          lines.push(line);
          line = [];
          line.push(part);
          previous = null;
        } else if (part.text === CR) {
          line.push(part);
          lines.push(line);
          line = [];
          previous = null;
        } else if (part.text === LF) {
          lines.push(line);
          line = [];
          line.push(part);
          previous = LF;
        } else {
          lines.push(line);
          line = [];
          line.push(part);
          previous = null;
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  lines.push(line);
  return lines;
}

function partToMlog(part) {
  var text = function () {
    if (part.nice !== null) {
      return part.nice;
    }
    var charCode = part.chr.charCodeAt(0);
    if (charCode < 0x80) {
      var charHex = ('0' + charCode.toString(16)).slice(-2);
      return '\\x' + charHex;
    }
    return '\\u{' + charCode.toString(16) + '}';
  }();
  var title = text + ' - ' + part.name + ' (' + part.abbr + ')';
  return {
    type: 'control',
    text: text,
    title: title
  };
}

function hilightControlChars(msg) {
  var parts = (0, _control2.default)(msg);
  var mlogItems = parts.map(function (part) {
    if ((typeof part === 'undefined' ? 'undefined' : _typeof(part)) === 'object') {
      return partToMlog(part);
    }
    return part;
  });
  var lines = createLines(mlogItems);
  return lines;
}

var Terminal = function () {
  function Terminal(element, dwst) {
    _classCallCheck(this, Terminal);

    this._element = element;
    this._dwst = dwst;
    this._limit = 1000;
  }

  _createClass(Terminal, [{
    key: 'reset',
    value: function reset() {
      this._element.innerHTML = '';
    }
  }, {
    key: '_addLogItem',
    value: function _addLogItem(logLine) {
      var userWasScrolling = this._dwst.ui.screen.isUserScrolling();
      this._element.appendChild(logLine);
      while (this._element.childElementCount > this._limit) {
        this._element.removeChild(this._element.firstChild);
      }
      if (userWasScrolling) {
        return;
      }
      this._dwst.ui.screen.scrollLog();
    }
  }, {
    key: 'clearLog',
    value: function clearLog() {
      var logClear = document.createElement('div');
      logClear.setAttribute('class', 'dwst-log__clear');
      this._addLogItem(logClear);
    }
  }, {
    key: 'gfx',
    value: function gfx(lines, colors) {
      var gfx = (0, _gfx2.default)(lines, colors);

      var item = document.createElement('div');
      item.setAttribute('class', 'dwst-log__item dwst-log__item--gfx');
      item.appendChild(gfx);

      this._addLogItem(item);
      this._dwst.ui.updateGfxPositions();
    }
  }, {
    key: 'mlog',
    value: function mlog(mlogDescription, type, userOptions) {

      var options = Object.assign({
        textData: false,
        truncated: false
      }, userOptions);

      var logLine = (0, _log_entry2.default)(mlogDescription, type, this._dwst.controller.link, options);

      var item = document.createElement('div');
      item.setAttribute('class', 'dwst-log__item dwst-log__item--' + type);
      item.appendChild(logLine);

      this._addLogItem(item);
    }
  }, {
    key: 'log',
    value: function log(line, type) {
      this.mlog([line], type);
    }
  }, {
    key: 'blog',
    value: function blog(buffer, type) {
      var size = buffer.byteLength;
      var limit = Math.pow(2, 10);
      var truncated = void 0;
      var view = void 0;
      if (size > limit) {
        view = buffer.slice(0, limit);
        truncated = true;
      } else {
        view = buffer;
        truncated = false;
      }
      this.mlog(['<' + buffer.byteLength + 'B of binary data>', view], type, { truncated: truncated });
      if (truncated) {
        this.log('User interface limit exceeded! Showing ' + limit + 'B of the ' + size + 'B buffer.', 'warning');
      }
    }
  }, {
    key: 'tlog',
    value: function tlog(msg, type) {
      var size = msg.length;
      var limit = Math.pow(2, 12);
      var truncated = void 0;
      var view = void 0;
      if (size > limit) {
        view = msg.slice(0, limit);
        truncated = true;
      } else {
        view = msg;
        truncated = false;
      }
      var mlogDescription = hilightControlChars(view);
      this.mlog(mlogDescription, type, { textData: true, truncated: truncated });
      if (truncated) {
        this.log('User interface limit exceeded! Showing ' + limit + ' of ' + size + ' characters.', 'warning');
      }
    }
  }]);

  return Terminal;
}();

exports.default = Terminal;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderLogEntry;

var _time = __webpack_require__(7);

var _time2 = _interopRequireDefault(_time);

var _direction = __webpack_require__(31);

var _direction2 = _interopRequireDefault(_direction);

var _mlog = __webpack_require__(32);

var _mlog2 = _interopRequireDefault(_mlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderLogEntry(mlog, type, linkHandlers, options) {
  var time = (0, _time2.default)();
  var direction = (0, _direction2.default)(type);
  var content = (0, _mlog2.default)(mlog, type, linkHandlers, options);

  var logEntry = document.createElement('span');
  logEntry.setAttribute('class', 'dwst-log-entry');

  var timeCell = document.createElement('span');
  timeCell.setAttribute('class', 'dwst-log-entry__time');
  timeCell.appendChild(time);

  var directionCell = document.createElement('span');
  directionCell.setAttribute('class', 'dwst-log-entry__direction');
  directionCell.appendChild(direction);

  var contentCell = document.createElement('span');
  contentCell.setAttribute('class', 'dwst-log-entry__content');
  contentCell.appendChild(content);

  logEntry.appendChild(timeCell);
  logEntry.appendChild(directionCell);
  logEntry.appendChild(contentCell);

  return logEntry;
}
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderDirection;

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function renderDirection(type) {

  var direction = document.createElement('span');
  direction.setAttribute('class', 'dwst-direction dwst-direction--' + type);
  direction.innerHTML = type + ':';

  return direction;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

exports.default = renderMlog;

var _utils = __webpack_require__(3);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function hexdump(buffer) {
  function hexify(num) {
    var hex = num.toString(16);
    if (hex.length < 2) {
      return '0' + hex;
    }
    return hex;
  }
  function charify(num) {
    if (num > 0x7e || num < 0x20) {
      // non-printable
      return '.';
    }
    return String.fromCharCode(num);
  }
  var dv = new DataView(buffer);
  var offset = 0;
  var lines = [];
  while (offset < buffer.byteLength) {
    var text = '';
    var hexes = [];
    for (var i = 0; i < 16; i++) {
      if (offset < buffer.byteLength) {
        var oneByte = dv.getUint8(offset);
        var asChar = charify(oneByte);
        var asHex = hexify(oneByte);
        text += asChar;
        hexes.push(asHex);
      }
      offset += 1;
    }
    lines.push({
      text: text,
      hexes: hexes
    });
  }
  return lines;
}

function hexLines(buffer) {
  var hd = hexdump(buffer);
  return hd.map(function (line) {
    return {
      type: 'hexline',
      text: line.text,
      hexes: line.hexes
    };
  });
}

function renderSegment(rawSegment, linkHandlers) {
  var segment = void 0;
  if (typeof rawSegment === 'string') {
    segment = {
      type: 'regular',
      text: rawSegment
    };
  } else {
    segment = rawSegment;
  }
  if ((typeof segment === 'undefined' ? 'undefined' : _typeof(segment)) === 'object') {
    var rawText = segment.text;
    var safeText = function () {
      if (segment.hasOwnProperty('unsafe') && segment.unsafe === true) {
        return rawText;
      }
      return _utils2.default.htmlescape(rawText);
    }();

    if (segment.type === 'regular') {
      var textSpan = document.createElement('span');
      textSpan.innerHTML = safeText;
      return textSpan;
    }
    if (segment.type === 'dwstgg') {
      var linkWrapper = document.createElement('span');
      var linkWrapperClasses = ['dwst-mlog__help-link-wrapper'];
      if (segment.wrap === false) {
        linkWrapperClasses.push('dwst-mlog__help-link-wrapper--nowrap');
      }
      linkWrapper.setAttribute('class', linkWrapperClasses.join(' '));
      var link = document.createElement('a');
      var classes = ['dwst-mlog__help-link'];
      if (segment.spacing === true) {
        classes.push('dwst-mlog__help-link--spacing');
      }
      if (segment.warning === true) {
        classes.push('dwst-mlog__help-link--warning');
      }
      link.setAttribute('class', classes.join(' '));
      var command = function () {
        if (segment.hasOwnProperty('section')) {
          return '/help ' + segment.section;
        }
        return '/help';
      }();
      link.onclick = function (evt) {
        evt.preventDefault();
        linkHandlers.onHelpLinkClick(command);
      };
      link.setAttribute('href', '#');
      link.setAttribute('title', command);
      var _textSpan = document.createElement('span');
      _textSpan.innerHTML = safeText;
      link.appendChild(_textSpan);
      linkWrapper.appendChild(link);
      if (segment.hasOwnProperty('afterText')) {
        var afterTextNode = document.createTextNode(segment.afterText);
        linkWrapper.appendChild(afterTextNode);
      }
      return linkWrapper;
    }
    if (segment.type === 'command') {
      var _link = document.createElement('a');
      _link.setAttribute('class', 'dwst-mlog__command-link');
      var _command = rawText;
      _link.onclick = function (evt) {
        evt.preventDefault();
        linkHandlers.onCommandLinkClick(_command);
      };
      _link.setAttribute('href', '#');
      _link.setAttribute('title', safeText);
      var _textSpan2 = document.createElement('span');
      _textSpan2.innerHTML = safeText;
      _link.appendChild(_textSpan2);
      return _link;
    }
    if (segment.type === 'hexline') {
      var hexChunks = _utils2.default.chunkify(segment.hexes, 4);
      var textChunks = _utils2.default.chunkify(rawText, 4);

      var byteGrid = document.createElement('span');
      var byteGridClasses = ['dwst-byte-grid'];
      if (hexChunks.length < 3) {
        byteGridClasses.push('dwst-byte-grid--less-than-three');
      }
      byteGrid.setAttribute('class', byteGridClasses.join(' '));

      var chunksWanted = 4;
      var chunkLength = 4;
      [].concat(_toConsumableArray(Array(chunksWanted).keys())).forEach(function (i) {
        var _ref = [hexChunks[i]],
            _ref$ = _ref[0],
            hexChunk = _ref$ === undefined ? [] : _ref$;
        var _ref2 = [textChunks[i]],
            _ref2$ = _ref2[0],
            textChunk = _ref2$ === undefined ? [] : _ref2$;


        var hexContent = _utils2.default.htmlescape(hexChunk.join(' '));
        var hexItem = document.createElement('span');
        hexItem.setAttribute('class', 'dwst-byte-grid__item');
        hexItem.innerHTML = hexContent;
        byteGrid.appendChild(hexItem);

        var textContent = _utils2.default.htmlescape(textChunk.join('').padEnd(chunkLength));
        var textItem = document.createElement('span');
        textItem.setAttribute('class', 'dwst-byte-grid__item');
        textItem.innerHTML = textContent;
        byteGrid.appendChild(textItem);
      });

      var _textSpan3 = document.createElement('span');
      _textSpan3.setAttribute('class', 'dwst-mlog__hexline');
      _textSpan3.appendChild(byteGrid);
      return _textSpan3;
    }
    if (segment.type === 'code') {
      var _textSpan4 = document.createElement('span');
      _textSpan4.setAttribute('class', 'dwst-mlog__code');
      _textSpan4.innerHTML = safeText;
      return _textSpan4;
    }
    if (segment.type === 'control') {
      var _textSpan5 = document.createElement('span');
      _textSpan5.setAttribute('class', 'dwst-mlog__control');
      _textSpan5.innerHTML = safeText;
      _textSpan5.setAttribute('title', segment.title);
      return _textSpan5;
    }
    if (segment.type === 'strong') {
      var _textSpan6 = document.createElement('span');
      _textSpan6.setAttribute('class', 'dwst-mlog__strong');
      _textSpan6.innerHTML = safeText;
      return _textSpan6;
    }
    if (segment.type === 'h1') {
      var _textSpan7 = document.createElement('span');
      _textSpan7.setAttribute('class', 'dwst-mlog__h1');
      _textSpan7.innerHTML = safeText;
      return _textSpan7;
    }
    if (segment.type === 'h2') {
      var _textSpan8 = document.createElement('span');
      _textSpan8.setAttribute('class', 'dwst-mlog__h2');
      _textSpan8.innerHTML = safeText;
      return _textSpan8;
    }
    if (segment.type === 'syntax') {
      var _textSpan9 = document.createElement('span');
      _textSpan9.setAttribute('class', 'dwst-mlog__syntax');
      _textSpan9.innerHTML = safeText;
      return _textSpan9;
    }
    if (segment.type === 'link') {
      var _textSpan10 = document.createElement('a');
      _textSpan10.setAttribute('href', segment.url);
      _textSpan10.setAttribute('target', '_blank');
      _textSpan10.setAttribute('rel', 'noopener');
      _textSpan10.setAttribute('class', 'dwst-mlog__link');
      _textSpan10.innerHTML = safeText;
      return _textSpan10;
    }
  }
  throw new Error('unknown segment type');
}

function getLineSegments(line) {
  if (typeof line === 'string') {
    return [line];
  } else if ((typeof line === 'undefined' ? 'undefined' : _typeof(line)) === 'object' && !Array.isArray(line)) {
    return [line];
  }
  if (!Array.isArray(line)) {
    throw new Error('error');
  }
  return line;
}

function renderMlog(sections, type, linkHandlers, options) {

  var domSections = sections.map(function (section) {
    var lines = [];
    if (section instanceof ArrayBuffer) {
      lines.push.apply(lines, _toConsumableArray(hexLines(section)));
    } else {
      lines.push(section);
    }
    var domLines = lines.map(function (line) {
      var segments = getLineSegments(line);
      var domSegments = segments.map(function (segment) {
        return renderSegment(segment, linkHandlers);
      });
      return domSegments;
    });
    return domLines;
  });
  var outputCell = document.createElement('span');
  outputCell.classList.add('dwst-mlog');
  if (options.textData) {
    outputCell.classList.add('dwst-mlog--text-data');
  }
  if (options.truncated) {
    outputCell.classList.add('dwst-mlog--truncated');
  }
  domSections.forEach(function (domSection) {
    domSection.forEach(function (domLine) {
      domLine.forEach(function (domSegment) {
        outputCell.appendChild(domSegment);
      });
      var br = document.createElement('br');
      br.setAttribute('class', 'dwst-mlog__br');
      outputCell.appendChild(br);
    });
  });
  return outputCell;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderGfx;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function renderGfx(lines, colors) {

  var gfxContent = document.createElement('div');
  gfxContent.setAttribute('class', 'dwst-gfx__content');
  lines.forEach(function (line, li) {
    var logLine = document.createElement('div');
    logLine.setAttribute('class', 'dwst-gfx__line');
    [].concat(_toConsumableArray(line)).forEach(function (chr, ci) {
      var color = colors[li][ci];
      var outputCell = document.createElement('span');
      outputCell.setAttribute('class', 'dwst-gfx__element dwst-gfx__element--color-' + color);
      outputCell.innerHTML = chr;
      logLine.appendChild(outputCell);
    });
    gfxContent.appendChild(logLine);
  });
  var background = document.createElement('div');
  background.setAttribute('class', 'dwst-gfx__background');
  var safe = document.createElement('div');
  safe.setAttribute('class', 'dwst-debug__background-guide');
  var safeco = document.createElement('div');
  safeco.setAttribute('class', 'dwst-debug__content-guide');
  safe.appendChild(safeco);
  background.appendChild(safe);
  gfxContent.appendChild(background);

  var gfxContainer = document.createElement('div');
  gfxContainer.setAttribute('class', 'dwst-gfx');
  gfxContainer.setAttribute('aria-hidden', 'true');
  gfxContainer.appendChild(gfxContent);

  return gfxContainer;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

exports.default = parseControlChars;

var _parsee = __webpack_require__(5);

var _parsee2 = _interopRequireDefault(_parsee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controlCharNames = {

  // C0 Controls

  '\x00': ['\\0', 'NUL', 'null terminator'],
  '\x01': [null, 'SOH', 'start of heading'],
  '\x02': [null, 'STX', 'start of text'],
  '\x03': [null, 'ETX', 'end of text'],
  '\x04': [null, 'EOT', 'end of transmission'],
  '\x05': [null, 'ENQ', 'enquiry'],
  '\x06': [null, 'ACK', 'acknowledge'],
  '\x07': [null, 'BEL', 'bell'],
  '\x08': [null, 'BS', 'backspace'],
  '\x09': [null, 'HT', 'horizontal tabulation'],
  '\x0a': ['\\n', 'LF', 'line feed'],
  '\x0b': [null, 'VT', 'vertical tabulation'],
  '\x0c': [null, 'FF', 'form feed'],
  '\x0d': ['\\r', 'CR', 'carriage return'],
  '\x0e': [null, 'SO', 'shift out'],
  '\x0f': [null, 'SI', 'shift in'],
  '\x10': [null, 'DLE', 'data link escape'],
  '\x11': [null, 'DC1', 'device control one'],
  '\x12': [null, 'DC2', 'device control two'],
  '\x13': [null, 'DC3', 'device control three'],
  '\x14': [null, 'DC4', 'device control four'],
  '\x15': [null, 'NAK', 'negative acknowledge'],
  '\x16': [null, 'SYN', 'synchronous idle'],
  '\x17': [null, 'ETB', 'end of transmission block'],
  '\x18': [null, 'CAN', 'cancel'],
  '\x19': [null, 'EM', 'end of medium'],
  '\x1a': [null, 'SUB', 'substitute'],
  '\x1b': [null, 'ESC', 'escape'],
  '\x1c': [null, 'FS', 'file separator'],
  '\x1d': [null, 'GS', 'group separator'],
  '\x1e': [null, 'RS', 'record separator'],
  '\x1f': [null, 'US', 'unit separator'],
  '\x7f': [null, 'DEL', 'delete'],

  // C1 Controls

  '\x80': [null, 'XXX', '<control>'],
  '\x81': [null, 'XXX', '<control>'],
  '\x82': [null, 'BPH', 'break permitted here'],
  '\x83': [null, 'NBH', 'no break here'],
  '\x84': [null, 'IND', 'index'],
  '\x85': [null, 'NEL', 'next line'],
  '\x86': [null, 'SSA', 'start of selected area'],
  '\x87': [null, 'ESA', 'end of selected area'],
  '\x88': [null, 'HTS', 'character tabulation set'],
  '\x89': [null, 'HTJ', 'character tabulation with justification'],
  '\x8a': [null, 'VTS', 'line tabulation set'],
  '\x8b': [null, 'PLD', 'partial line forward'],
  '\x8c': [null, 'PLU', 'partial line backward'],
  '\x8d': [null, 'RI', 'reverse line feed'],
  '\x8e': [null, 'SS2', 'single shift two'],
  '\x8f': [null, 'SS3', 'single shift three'],
  '\x90': [null, 'DCS', 'device control string'],
  '\x91': [null, 'PU1', 'private use one'],
  '\x92': [null, 'PU2', 'private use two'],
  '\x93': [null, 'STS', 'set transmit state'],
  '\x94': [null, 'CCH', 'cancel character'],
  '\x95': [null, 'MW', 'message waiting'],
  '\x96': [null, 'SPA', 'start of guarded area'],
  '\x97': [null, 'EPA', 'end of guarded area'],
  '\x98': [null, 'SOS', 'start of string'],
  '\x99': [null, 'XXX', '<control>'],
  '\x9a': [null, 'SCI', 'single character introducer'],
  '\x9b': [null, 'CSI', 'control sequence introducer'],
  '\x9c': [null, 'ST', 'string terminator'],
  '\x9d': [null, 'OSC', 'operating system command'],
  '\x9e': [null, 'PM', 'privacy message'],
  '\x9f': [null, 'APC', 'application program command'],

  // invisible Latin-1

  '\xa0': [null, 'NBSP', 'no-break space'],
  '\xad': [null, 'SHY', 'soft hyphen']

};

var controlChars = Object.keys(controlCharNames);

function readOne(parsee) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.entries(controlCharNames)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var chr = _ref2[0];

      var _ref2$ = _slicedToArray(_ref2[1], 3);

      var nice = _ref2$[0];
      var abbr = _ref2$[1];
      var name = _ref2$[2];

      if (parsee.read(chr)) {
        return {
          chr: chr,
          nice: nice,
          abbr: abbr,
          name: name
        };
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return parsee.readUntil(controlChars);
}

function parseControlChars(msg) {
  var parts = [];
  var parsee = new _parsee2.default(msg);
  while (parsee.length > 0) {
    var part = readOne(parsee);
    parts.push(part);
  }
  return parts;
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _time = __webpack_require__(7);

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = function () {
  function Clock(element, dwst) {
    _classCallCheck(this, Clock);

    this._element = element;
    this._dwst = dwst;
  }

  _createClass(Clock, [{
    key: 'refreshClock',
    value: function refreshClock() {
      this._element.innerHTML = (0, _time2.default)(true);
    }
  }, {
    key: 'startClock',
    value: function startClock() {
      var _this = this;

      this.refreshClock();
      this._element.classList.remove('dwst-time--placeholder');
      setInterval(function () {
        return _this.refreshClock();
      }, 500);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.startClock();
    }
  }]);

  return Clock;
}();

exports.default = Clock;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2018
           William Orr, US 2012

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _parser = __webpack_require__(4);

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var escapeForTemplateExpression = _parser2.default.escapeForTemplateExpression;

var Prompt = function () {
  function Prompt(element, dwst) {
    _classCallCheck(this, Prompt);

    this._element = element;
    this._dwst = dwst;
  }

  _createClass(Prompt, [{
    key: '_enableDebugger',
    value: function _enableDebugger() {
      // TODO: refactor debugger to regular plugin
      document.documentElement.classList.add('dwst-debug--guides');
    }
  }, {
    key: '_showHelpTip',
    value: function _showHelpTip() {
      var helpTip = ['type ', {
        type: 'command',
        text: '/help'
      }, ' to list available commands'];
      this._dwst.ui.terminal.log(helpTip, 'system');
    }
  }, {
    key: 'send',
    value: function send() {
      var raw = this._element.value;
      this._element.value = '';
      this._dwst.model.history.select(raw);
      if (raw === '/idkfa') {
        this._enableDebugger();
        return;
      }
      if (raw.length < 1) {
        this._showHelpTip();
        return;
      }
      if (raw[0] === '/') {
        this._dwst.controller.prompt.loud(raw);
        return;
      }
      var text = escapeForTemplateExpression(raw);
      var command = '/send ' + text;
      this._dwst.controller.prompt.loud(command);
    }
  }, {
    key: '_keyHandler',
    value: function _keyHandler(event) {
      if (event.keyCode === 13) {
        this.send();
      } else if (event.keyCode === 38) {
        // up
        this._element.value = this._dwst.model.history.getPrevious(this._element.value);
        return;
      } else if (event.keyCode === 40) {
        // down
        this._element.value = this._dwst.model.history.getNext(this._element.value);
        return;
      }
    }
  }, {
    key: 'offerConnect',
    value: function offerConnect() {
      if (this._element.value === '') {
        var connects = this._dwst.model.history.getConnectCommands(1);
        if (connects.length < 1) {
          this._element.value = '/connect ' + this._dwst.model.config.echoServer;
        } else {
          this._element.value = connects[0];
        }
      } else {
        this._dwst.model.history.select(this._element.value);
        this._element.value = '';
      }
      this._element.focus();
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      this._element.addEventListener('keydown', function (evt) {
        return _this._keyHandler(evt);
      });
    }
  }, {
    key: 'focus',
    value: function focus() {
      this._element.focus();
    }
  }]);

  return Prompt;
}();

exports.default = Prompt;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var SendButton = function () {
  function SendButton(element, dwst) {
    _classCallCheck(this, SendButton);

    this._element = element;
    this._dwst = dwst;
  }

  _createClass(SendButton, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this._element.addEventListener('click', function () {
        _this._dwst.ui.prompt.send();
      });
    }
  }]);

  return SendButton;
}();

exports.default = SendButton;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var MenuButton = function () {
  function MenuButton(element, dwst) {
    _classCallCheck(this, MenuButton);

    this._element = element;
    this._dwst = dwst;
  }

  _createClass(MenuButton, [{
    key: 'connected',
    value: function connected(state) {
      if (state) {
        this._element.classList.replace('dwst-button--splash', 'dwst-button--splash-connected');
      } else {
        this._element.classList.replace('dwst-button--splash-connected', 'dwst-button--splash');
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      this._element.addEventListener('click', function () {
        _this._dwst.controller.prompt.loud('/splash');
        _this._dwst.ui.screen.scrollLog();
      });
    }
  }]);

  return MenuButton;
}();

exports.default = MenuButton;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Screen = function () {
  function Screen(element, dwst) {
    _classCallCheck(this, Screen);

    this._element = element;
    this._dwst = dwst;
  }

  _createClass(Screen, [{
    key: "isUserScrolling",
    value: function isUserScrolling() {
      var errorMargin = 1;
      // Some device pixel ratios create problems when errorMargin < 1.
      // Try to use Windows 10 with 125%, 175% and 225% scaling.
      var contentHeight = this._element.scrollHeight;
      var visible = this._element.offsetHeight;
      var invisible = contentHeight - visible;
      var invisibleAbove = this._element.scrollTop;
      var invisibleBelow = invisible - invisibleAbove;
      return invisibleBelow > errorMargin;
    }
  }, {
    key: "scrollLog",
    value: function scrollLog() {
      this._element.scrollTop = this._element.scrollHeight;
      this._dwst.ui.scrollNotification.hideScrollNotification();
    }
  }]);

  return Screen;
}();

exports.default = Screen;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var AutoScrollButton = function () {
  function AutoScrollButton(element, dwst) {
    _classCallCheck(this, AutoScrollButton);

    this._element = element;
    this._dwst = dwst;
  }

  _createClass(AutoScrollButton, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this._element.addEventListener('click', function (evt) {
        evt.preventDefault();
        _this._dwst.ui.screen.scrollLog();
      });
    }
  }]);

  return AutoScrollButton;
}();

exports.default = AutoScrollButton;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var ScrollNotification = function () {
  function ScrollNotification(element, dwst) {
    _classCallCheck(this, ScrollNotification);

    this._element = element;
    this._dwst = dwst;
  }

  _createClass(ScrollNotification, [{
    key: 'scrollNotificationUpdate',
    value: function scrollNotificationUpdate() {
      if (this._dwst.ui.screen.isUserScrolling()) {
        this.showScrollNotification();
        return;
      }
      this.hideScrollNotification();
    }
  }, {
    key: 'showScrollNotification',
    value: function showScrollNotification() {
      this._element.removeAttribute('style');
    }
  }, {
    key: 'hideScrollNotification',
    value: function hideScrollNotification() {
      this._element.setAttribute('style', 'display: none;');
    }
  }, {
    key: 'init',
    value: function init() {
      var _this = this;

      setInterval(function () {
        return _this.scrollNotificationUpdate();
      }, 1000);
    }
  }]);

  return ScrollNotification;
}();

exports.default = ScrollNotification;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var FileInput = function () {
  function FileInput(element, dwst) {
    _classCallCheck(this, FileInput);

    this._element = element;
    this._dwst = dwst;
  }

  _createClass(FileInput, [{
    key: 'read',
    value: function read(callback) {
      var _this = this;

      var upload = this._element.getElementsByTagName('input')[0];
      upload.onchange = function () {
        var file = upload.files[0];
        _this._element.innerHTML = _this._element.innerHTML;
        callback(file);
      };
      upload.click();
    }
  }]);

  return FileInput;
}();

exports.default = FileInput;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _link = __webpack_require__(44);

var _link2 = _interopRequireDefault(_link);

var _prompt = __webpack_require__(45);

var _prompt2 = _interopRequireDefault(_prompt);

var _socket = __webpack_require__(46);

var _socket2 = _interopRequireDefault(_socket);

var _error = __webpack_require__(47);

var _error2 = _interopRequireDefault(_error);

var _pwa = __webpack_require__(48);

var _pwa2 = _interopRequireDefault(_pwa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Controller = function Controller(dwst) {
  _classCallCheck(this, Controller);

  this.link = new _link2.default(dwst);
  this.prompt = new _prompt2.default(dwst);
  this.socket = new _socket2.default(dwst);
  this.error = new _error2.default(dwst);
  this.pwa = new _pwa2.default(dwst);
};

exports.default = Controller;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var LinkHandler = function () {
  function LinkHandler(dwst) {
    _classCallCheck(this, LinkHandler);

    this._dwst = dwst;
  }

  _createClass(LinkHandler, [{
    key: "onHelpLinkClick",
    value: function onHelpLinkClick(command) {
      this._dwst.controller.prompt.loud(command);
    }
  }, {
    key: "onCommandLinkClick",
    value: function onCommandLinkClick(command) {
      this._dwst.model.history.select(command);
      this._dwst.controller.prompt.loud(command);
    }
  }]);

  return LinkHandler;
}();

exports.default = LinkHandler;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _function = __webpack_require__(0);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PromptHandler = function () {
  function PromptHandler(dwst) {
    _classCallCheck(this, PromptHandler);

    this._dwst = dwst;
    this._encoder = new TextEncoder();
  }

  _createClass(PromptHandler, [{
    key: '_evalFunction',
    value: function _evalFunction(_ref) {
      var name = _ref.name,
          args = _ref.args;

      var func = this._dwst.model.variables.getVariable(name);
      if (func === null) {
        throw new this._dwst.lib.errors.UnknownInstruction(name);
      }
      if (func instanceof _function2.default) {
        return func.run(args);
      }
      throw new this._dwst.lib.errors.InvalidDataType(name, ['FUNCTION']);
    }
  }, {
    key: '_evalParticle',
    value: function _evalParticle(particle) {
      if (particle.type === 'text') {
        return this._encoder.encode(particle.value);
      }
      if (particle.type === 'byte') {
        var buffer = new Uint8Array([particle.value]);
        return buffer;
      }
      if (particle.type === 'codepoint') {
        var chr = String.fromCodePoint(particle.value);
        return this._encoder.encode(chr);
      }
      if (particle.type === 'variable') {
        var variableName = particle.name;
        var value = this._dwst.model.variables.getVariable(variableName);
        if (value instanceof ArrayBuffer) {
          return new Uint8Array(value);
        }
        if (typeof value === 'string') {
          return this._encoder.encode(value);
        }
        if (value instanceof this._dwst.lib.types.DwstFunction) {
          throw new this._dwst.lib.errors.InvalidDataType(variableName, ['STRING', 'BINARY']);
        }
        throw new this._dwst.lib.errors.UnknownVariable(variableName);
      }
      if (particle.type === 'function') {
        var output = this._evalFunction(particle);
        if (output.constructor === Uint8Array) {
          return output;
        }
        if (typeof output === 'string') {
          return this._encoder.encode(output);
        }
        throw new Error('unexpected function return type');
      }
      throw new Error('unexpected particle type');
    }
  }, {
    key: '_evalTemplateExpression',
    value: function _evalTemplateExpression(templateExpression) {
      var _this = this;

      var rootNode = this._dwst.lib.parser.parseTemplateExpression(templateExpression);
      if (rootNode.type !== 'templateExpression') {
        throw new Error('unexpected root node type');
      }
      var chunks = rootNode.particles.map(function (particle) {
        return _this._evalParticle(particle);
      });
      var buffer = this._dwst.lib.utils.joinBuffers(chunks).buffer;
      return buffer;
    }
  }, {
    key: '_runPlugin',
    value: function _runPlugin(pluginName, paramString) {
      var plugin = this._dwst.plugins.getPlugin(pluginName);
      if (plugin === null) {
        throw new this._dwst.lib.errors.UnknownCommand(pluginName);
      }
      if (plugin.functionSupport) {
        var binary = this._evalTemplateExpression(paramString);
        plugin.run(binary);
      } else {
        plugin.run(paramString);
      }
    }
  }, {
    key: 'run',
    value: function run(command) {
      var _command$split = command.split(' '),
          _command$split2 = _toArray(_command$split),
          pluginName = _command$split2[0],
          params = _command$split2.slice(1);

      var paramString = params.join(' ');
      this._runPlugin(pluginName, paramString);
    }
  }, {
    key: 'silent',
    value: function silent(line) {
      var noslash = line.substring(1);
      this.run(noslash);
    }
  }, {
    key: 'loud',
    value: function loud(line) {
      this._dwst.ui.terminal.log(line, 'command');
      this.silent(line);
    }
  }]);

  return PromptHandler;
}();

exports.default = PromptHandler;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var SocketHandler = function () {
  function SocketHandler(dwst) {
    _classCallCheck(this, SocketHandler);

    this._dwst = dwst;
  }

  _createClass(SocketHandler, [{
    key: 'onConnectionOpen',
    value: function onConnectionOpen(protocol) {
      var selected = function () {
        if (protocol.length < 1) {
          return [];
        }
        return ['Selected protocol: ' + protocol];
      }();
      this._dwst.ui.terminal.mlog(['Connection established.'].concat(selected), 'system');
      this._dwst.ui.menuButton.connected(true);
    }
  }, {
    key: 'onConnectionClose',
    value: function onConnectionClose(e, sessionLength) {
      var meanings = {
        1000: 'Normal Closure',
        1001: 'Going Away',
        1002: 'Protocol error',
        1003: 'Unsupported Data',
        1005: 'No Status Rcvd',
        1006: 'Abnormal Closure',
        1007: 'Invalid frame payload data',
        1008: 'Policy Violation',
        1009: 'Message Too Big',
        1010: 'Mandatory Ext.',
        1011: 'Internal Server Error',
        1015: 'TLS handshake'
      };
      var code = function () {
        if (meanings.hasOwnProperty(e.code)) {
          return e.code + ' (' + meanings[e.code] + ')';
        }
        return '' + e.code;
      }();
      var reason = function () {
        if (e.reason.length < 1) {
          return [];
        }
        return ['Close reason: ' + e.reason];
      }();
      var sessionLengthString = function () {
        if (sessionLength === null) {
          return [];
        }
        return ['Session length: ' + sessionLength + 'ms'];
      }();
      this._dwst.ui.terminal.mlog(['Connection closed.', 'Close status: ' + code].concat(reason).concat(sessionLengthString), 'system');
      this._dwst.model.connection = null;
      this._dwst.ui.menuButton.connected(false);
    }
  }, {
    key: 'onMessage',
    value: function onMessage(msg) {
      var _this = this;

      if (typeof msg === 'string') {
        this._dwst.ui.terminal.tlog(msg, 'received');
      } else {
        var fr = new FileReader();
        fr.addEventListener('load', function (evt) {
          var buffer = evt.target.result;
          _this._dwst.ui.terminal.blog(buffer, 'received');
        });
        fr.readAsArrayBuffer(msg);
      }
    }
  }, {
    key: 'onError',
    value: function onError() {
      this._dwst.ui.terminal.log('WebSocket error.', 'error');
    }
  }, {
    key: 'beforeSendWhileConnecting',
    value: function beforeSendWhileConnecting(verb) {
      this._dwst.ui.terminal.log('Attempting to send data while ' + verb, 'warning');
    }
  }, {
    key: 'onSend',
    value: function onSend(msg) {
      if (typeof msg === 'string') {
        this._dwst.ui.terminal.tlog(msg, 'sent');
      } else {
        this._dwst.ui.terminal.blog(msg, 'sent');
      }
    }
  }]);

  return SocketHandler;
}();

exports.default = SocketHandler;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Authors: Toni Ruottu, Finland 2010-2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       This file is part of Dark WebSocket Terminal.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       To the extent possible under law, Dark WebSocket Terminal developers have waived all
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       copyright and related or neighboring rights to Dark WebSocket Terminal.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _errors = __webpack_require__(1);

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NoConnection = _errors2.default.NoConnection,
    AlreadyConnected = _errors2.default.AlreadyConnected,
    SocketError = _errors2.default.SocketError,
    InvalidTemplateExpression = _errors2.default.InvalidTemplateExpression,
    InvalidArgument = _errors2.default.InvalidArgument,
    InvalidCombination = _errors2.default.InvalidCombination,
    InvalidUtf8 = _errors2.default.InvalidUtf8,
    InvalidDataType = _errors2.default.InvalidDataType,
    UnknownCommand = _errors2.default.UnknownCommand,
    UnknownInstruction = _errors2.default.UnknownInstruction,
    UnknownHelpPage = _errors2.default.UnknownHelpPage,
    UnknownVariable = _errors2.default.UnknownVariable;


function commaCommaOr(stringList) {
  if (stringList.length === 0) {
    throw new Error('list has to have at least one item');
  }
  if (stringList.length === 1) {
    return stringList[0];
  }
  var last = stringList[stringList.length - 1];
  var listExcludingLast = stringList.slice(0, stringList.length - 1);
  var upToSecondLastJoined = listExcludingLast.join(', ');
  return upToSecondLastJoined + ' or ' + last;
}

var ErrorHandler = function () {
  function ErrorHandler(dwst) {
    _classCallCheck(this, ErrorHandler);

    this._dwst = dwst;
  }

  _createClass(ErrorHandler, [{
    key: '_errorToMLog',
    value: function _errorToMLog(error) {
      if (error instanceof NoConnection) {
        var connectTip = ['Use ', {
          type: 'dwstgg',
          text: 'connect',
          section: 'connect'
        }, ' to form a connection and try again.'];
        return ['No connection.', 'Cannot send: ' + error.msg, connectTip];
      }
      if (error instanceof AlreadyConnected) {
        return ['Already connected to a server', ['Type ', {
          type: 'command',
          text: '/disconnect'
        }, ' to end the connection']];
      }
      if (error instanceof SocketError) {
        return ['WebSocket error.'];
      }
      if (error instanceof InvalidTemplateExpression) {
        var padding = ' '.repeat(error.errorPosition);
        var expected = commaCommaOr(error.expected);
        var got = error.remainder.charAt(0);
        return ['Invalid template.', error.expression, padding + '^', 'Expected ' + expected + ', but got "' + got + '" instead.'];
      }
      if (error instanceof InvalidArgument) {
        return ['Invalid argument: ' + error.argument, error.extraInfo];
      }
      if (error instanceof InvalidCombination) {
        return [['Invalid ', {
          type: 'dwstgg',
          text: error.command,
          section: error.command
        }, ' command combination.'], ['Compatible commands: ', error.commands.join(', ')]];
      }
      if (error instanceof InvalidUtf8) {
        return [['Utf-8 decoder failed to process ' + error.buffer.byteLength + 'B buffer'], error.buffer];
      }
      if (error instanceof InvalidDataType) {
        return [['Variable ' + error.variable + ' is not a ' + commaCommaOr(error.expected)]];
      }
      if (error instanceof UnknownCommand) {
        return [['Unknown command ', {
          type: 'strong',
          text: error.command
        }], ['Type ', {
          type: 'command',
          text: '/help #commands'
        }, ' to list available commands']];
      }
      if (error instanceof UnknownInstruction) {
        return [['Unknown function ', {
          type: 'strong',
          text: error.instruction
        }], ['Type ', {
          type: 'command',
          text: '/help #functions'
        }, ' to list available functions']];
      }
      if (error instanceof UnknownHelpPage) {
        var listTip = ['Display help index by typing ', {
          type: 'command',
          text: '/help'
        }];
        return ['Unkown help page: ' + error.page, listTip];
      }
      if (error instanceof UnknownVariable) {
        var _listTip = ['List available variables by typing ', {
          type: 'command',
          text: '/vars'
        }];
        return ['Variable "' + error.variable + '" does not exist.', _listTip];
      }

      throw new Error('missing error handler for ' + error.constructor.name);
    }
  }, {
    key: 'onDwstError',
    value: function onDwstError(error) {
      this._dwst.ui.terminal.mlog(this._errorToMLog(error), 'error');
    }
  }]);

  return ErrorHandler;
}();

exports.default = ErrorHandler;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var PwaHandler = function () {
  function PwaHandler(dwst) {
    _classCallCheck(this, PwaHandler);

    this._dwst = dwst;
    this._prompt = null;
  }

  _createClass(PwaHandler, [{
    key: 'beforeInstallPrompt',
    value: function beforeInstallPrompt(evt) {
      this._prompt = evt;
      this._dwst.ui.terminal.mlog([['Type ', {
        type: 'command',
        text: '/pwa install'
      }, ' to install']], 'system');
    }
  }, {
    key: 'onInstall',
    value: function onInstall() {
      if (this._prompt === null) {
        this._dwst.ui.terminal.mlog(['Installation not possible', '', 'Possible reasons:', '  * App already installed', '  * App not frequently used', '  * Browser has no PWA support', '', 'You could try manual pwa installation with "Add to home screen" or similar browser feature'], 'warning');
        return;
      }
      this._prompt.prompt();
      this._prompt = null;
    }
  }]);

  return PwaHandler;
}();

exports.default = PwaHandler;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Plugins = function () {
  function Plugins(dwst, pluginClasses) {
    _classCallCheck(this, Plugins);

    this._commands = new Map();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = pluginClasses[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var Constructor = _step.value;

        var plugin = new Constructor(dwst);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = plugin.commands()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var command = _step2.value;

            this._commands.set(command, plugin);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  _createClass(Plugins, [{
    key: 'getPlugin',
    value: function getPlugin(pluginName) {
      var plugin = this._commands.get(pluginName);
      if (typeof plugin === 'undefined') {
        return null;
      }
      return plugin;
    }
  }, {
    key: 'getNames',
    value: function getNames() {
      return [].concat(_toConsumableArray(this._commands.keys()));
    }
  }]);

  return Plugins;
}();

exports.default = Plugins;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _function = __webpack_require__(0);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var ByteRange = function (_DwstFunction) {
  _inherits(ByteRange, _DwstFunction);

  function ByteRange(dwst) {
    _classCallCheck(this, ByteRange);

    var _this = _possibleConstructorReturn(this, (ByteRange.__proto__ || Object.getPrototypeOf(ByteRange)).call(this));

    _this._dwst = dwst;
    return _this;
  }

  _createClass(ByteRange, [{
    key: 'commands',
    value: function commands() {
      return ['byteRange'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['byteRange(<start>, <end>)'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/s From a to z: ${byteRange(97,122)}', '/b ${byteRange(0,0xff)}'];
    }
  }, {
    key: 'type',
    value: function type() {
      return 'BINARY';
    }
  }, {
    key: 'info',
    value: function info() {
      return 'generate sequential bytes';
    }
  }, {
    key: 'run',
    value: function run(args) {
      var start = 0;
      var end = 0xff;
      if (args.length === 1) {
        end = args[0].value;
      }
      if (args.length === 2) {
        start = args[0].value;
        end = args[1].value;
      }
      var bytes = [];
      for (var i = start; i <= end; i++) {
        bytes.push(i);
      }
      return new Uint8Array(bytes);
    }
  }]);

  return ByteRange;
}(_function2.default);

exports.default = ByteRange;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _function = __webpack_require__(0);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var CharRange = function (_DwstFunction) {
  _inherits(CharRange, _DwstFunction);

  function CharRange(dwst) {
    _classCallCheck(this, CharRange);

    var _this = _possibleConstructorReturn(this, (CharRange.__proto__ || Object.getPrototypeOf(CharRange)).call(this));

    _this._dwst = dwst;
    return _this;
  }

  _createClass(CharRange, [{
    key: 'commands',
    value: function commands() {
      return ['charRange'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['charRange(<start>, <end>)'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/s From a to z: ${charRange(97,122)}', '/s ${charRange(0x2600,0x2603)}', '/b ${charRange(0x2600,0x2603)}'];
    }
  }, {
    key: 'type',
    value: function type() {
      return 'STRING';
    }
  }, {
    key: 'info',
    value: function info() {
      return 'generate sequential characters';
    }
  }, {
    key: 'run',
    value: function run(args) {
      var start = 32;
      var end = 126;
      if (args.length === 1) {
        end = args[0].value;
      }
      if (args.length === 2) {
        start = args[0].value;
        end = args[1].value;
      }
      var str = '';
      for (var i = start; i <= end; i++) {
        str += String.fromCodePoint(i);
      }
      return str;
    }
  }]);

  return CharRange;
}(_function2.default);

exports.default = CharRange;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _function = __webpack_require__(0);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var RandomBytes = function (_DwstFunction) {
  _inherits(RandomBytes, _DwstFunction);

  function RandomBytes(dwst) {
    _classCallCheck(this, RandomBytes);

    var _this = _possibleConstructorReturn(this, (RandomBytes.__proto__ || Object.getPrototypeOf(RandomBytes)).call(this));

    _this._dwst = dwst;
    return _this;
  }

  _createClass(RandomBytes, [{
    key: 'commands',
    value: function commands() {
      return ['randomBytes'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['randomBytes(<number>)'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/b ${randomBytes(16)}'];
    }
  }, {
    key: 'type',
    value: function type() {
      return 'BINARY';
    }
  }, {
    key: 'info',
    value: function info() {
      return 'generate random bytes';
    }
  }, {
    key: 'run',
    value: function run(args) {
      var randombyte = function randombyte() {
        var out = Math.floor(Math.random() * (0xff + 1));
        return out;
      };
      var num = 16;
      if (args.length === 1) {
        num = args[0].value;
      }
      var bytes = [];
      for (var i = 0; i < num; i++) {
        bytes.push(randombyte());
      }
      return new Uint8Array(bytes);
    }
  }]);

  return RandomBytes;
}(_function2.default);

exports.default = RandomBytes;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _function = __webpack_require__(0);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var RandomChars = function (_DwstFunction) {
  _inherits(RandomChars, _DwstFunction);

  function RandomChars(dwst) {
    _classCallCheck(this, RandomChars);

    var _this = _possibleConstructorReturn(this, (RandomChars.__proto__ || Object.getPrototypeOf(RandomChars)).call(this));

    _this._dwst = dwst;
    return _this;
  }

  _createClass(RandomChars, [{
    key: 'commands',
    value: function commands() {
      return ['randomChars'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['randomChars(<number>)'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/s ${randomChars(10)}', '/b ${randomChars(10)}'];
    }
  }, {
    key: 'type',
    value: function type() {
      return 'STRING';
    }
  }, {
    key: 'info',
    value: function info() {
      return 'generate random characters';
    }
  }, {
    key: 'run',
    value: function run(args) {
      var randomchar = function randomchar() {
        var out = Math.floor(Math.random() * (0xffff + 1));
        var char = String.fromCodePoint(out);
        return char;
      };
      var num = 16;
      if (args.length === 1) {
        num = args[0].value;
      }
      var str = '';
      for (var i = 0; i < num; i++) {
        str += randomchar();
      }
      return str;
    }
  }]);

  return RandomChars;
}(_function2.default);

exports.default = RandomChars;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _function = __webpack_require__(0);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Time = function (_DwstFunction) {
  _inherits(Time, _DwstFunction);

  function Time(dwst) {
    _classCallCheck(this, Time);

    var _this = _possibleConstructorReturn(this, (Time.__proto__ || Object.getPrototypeOf(Time)).call(this));

    _this._dwst = dwst;
    return _this;
  }

  _createClass(Time, [{
    key: 'commands',
    value: function commands() {
      return ['time'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['time()'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/s ${time()}s since epoch', '/b ${time()}'];
    }
  }, {
    key: 'type',
    value: function type() {
      return 'STRING';
    }
  }, {
    key: 'info',
    value: function info() {
      return 'generate timestamp';
    }
  }, {
    key: 'run',
    value: function run() {
      return String(Math.round(new Date().getTime() / 1000));
    }
  }]);

  return Time;
}(_function2.default);

exports.default = Time;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Binary = function () {
  function Binary(dwst) {
    _classCallCheck(this, Binary);

    this._dwst = dwst;
    this.functionSupport = true;
  }

  _createClass(Binary, [{
    key: 'commands',
    value: function commands() {
      return ['binary', 'b'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/binary [template]', '/b [template]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/binary Hello world!', '/binary ["JSON","is","cool"]', '/binary multiline\\r\\nmessage', '/binary null terminated string\\0one more\\0', '/binary tab\\x09separated\\x09strings', '/binary unicode snowman \\u2603', '/binary unicode tea cup \\u{1f375}', '/b Available now with ~71.43% less typing!'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'send binary data';
    }
  }, {
    key: 'run',
    value: function run(buffer) {
      var msg = '<' + buffer.byteLength + 'B of data> ';
      var connection = this._dwst.model.connection;
      if (connection === null || connection.isClosing() || connection.isClosed()) {
        throw new this._dwst.lib.errors.NoConnection(msg);
      }
      this._dwst.model.connection.send(buffer);
    }
  }]);

  return Binary;
}();

exports.default = Binary;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Clear = function () {
  function Clear(dwst) {
    _classCallCheck(this, Clear);

    this._dwst = dwst;
  }

  _createClass(Clear, [{
    key: 'commands',
    value: function commands() {
      return ['clear'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/clear'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/clear'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'clear the screen';
    }
  }, {
    key: 'run',
    value: function run() {
      this._dwst.ui.terminal.clearLog();
    }
  }]);

  return Clear;
}();

exports.default = Clear;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _connection = __webpack_require__(58);

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connect = function () {
  function Connect(dwst) {
    _classCallCheck(this, Connect);

    this._dwst = dwst;
  }

  _createClass(Connect, [{
    key: 'commands',
    value: function commands() {
      return ['connect'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/connect <ws-url> [p1[,p2[,...]]]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/connect wss://echo.websocket.org/', '/connect ws://echo.websocket.org/', '/connect ws://127.0.0.1:1234/ protocol1.example.com,protocol2.example.com'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'connect to a server';
    }
  }, {
    key: '_run',
    value: function _run(url) {
      var _this = this;

      var protocolString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (this._dwst.model.connection !== null) {
        throw new this._dwst.lib.errors.AlreadyConnected();
      }
      var protoCandidates = function () {
        if (protocolString === '') {
          return [];
        }
        return protocolString.split(',');
      }();
      var protocols = protoCandidates.filter(function (protocolName) {

        // https://tools.ietf.org/html/rfc6455#page-17

        var basicAlphabet = _this._dwst.lib.utils.range(0x21, 0x7e).map(function (charCode) {
          return String.fromCharCode(charCode);
        });
        var httpSeparators = new Set([].concat(_toConsumableArray('()<>@,;:\\"/[]?={} \t')));
        var validProtocolChars = new Set(basicAlphabet.filter(function (character) {
          return !httpSeparators.has(character);
        }));
        var usedChars = [].concat(_toConsumableArray(protocolName));
        var invalidCharsSet = new Set(usedChars.filter(function (character) {
          return !validProtocolChars.has(character);
        }));
        var invalidChars = [].concat(_toConsumableArray(invalidCharsSet));
        if (invalidChars.length > 0) {
          var invalidCharsString = invalidChars.map(function (character) {
            return '"' + character + '"';
          }).join(', ');
          _this._dwst.ui.terminal.mlog(['Skipped invalid protocol candidate "' + protocolName + '".', 'The following characters are not allowed: ' + invalidCharsString], 'warning');
          return false;
        }
        return true;
      });
      if (self.origin.startsWith('https://') && url.startsWith('ws://')) {
        var secureUrl = 'wss://' + url.slice('ws://'.length);
        this._dwst.ui.terminal.mlog([['Attempting unprotected connection from a secure origin. ', 'See ', {
          type: 'dwstgg',
          text: '#unprotected',
          section: '#unprotected'
        }, ' for details. Consider using ', {
          type: 'command',
          text: '/connect ' + secureUrl + ' ' + protocolString
        }]], 'warning');
      }
      this._dwst.model.connection = new _connection2.default(url, protocols, this._dwst.controller.socket);
      var protoFormatted = protocols.join(', ');
      var negotiation = function () {
        if (protocols.length < 1) {
          return ['No protocol negotiation.'];
        }
        return ['Accepted protocols: ' + protoFormatted];
      }();
      this._dwst.ui.terminal.mlog(['Connecting to ' + this._dwst.model.connection.url].concat(negotiation), 'system');
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      if (paramString.length < 1) {
        this._run();
        return;
      }
      var params = paramString.split(' ');
      this._run.apply(this, _toConsumableArray(params));
    }
  }]);

  return Connect;
}();

exports.default = Connect;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var FakeSocket = function () {
  function FakeSocket(url) {
    var _this = this;

    _classCallCheck(this, FakeSocket);

    this.url = url;
    this.protocol = '';
    this.readyState = 1;
    this._path = url.split('//').pop();
    this._nextFlood = null;
    window.setTimeout(function () {
      _this.onopen();
      if (_this._path === 'flood') {
        _this._flood(0);
      }
    }, 0);
  }

  _createClass(FakeSocket, [{
    key: '_flood',
    value: function _flood(count) {
      var _this2 = this;

      this._nextFlood = window.setTimeout(function () {
        _this2.onmessage({
          data: '' + count
        });
        _this2._flood(count + 1);
      }, 0);
    }
  }, {
    key: 'send',
    value: function send(message) {
      var _this3 = this;

      if (this._path === 'echo') {
        var data = function () {
          if (typeof message === 'string') {
            return message;
          }
          if (message instanceof ArrayBuffer) {
            return new Blob([new Uint8Array(message)]);
          }
          throw new Error('Unexpected message type');
        }();
        window.setTimeout(function () {
          _this3.onmessage({
            data: data
          });
        }, 0);
      }
    }
  }, {
    key: 'close',
    value: function close() {
      window.clearTimeout(this._nextFlood);
      this.readyState = 3;
      this.onclose({
        code: 1000,
        reason: ''
      });
    }
  }]);

  return FakeSocket;
}();

var Connection = function () {
  function Connection(url) {
    var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var controller = arguments[2];

    _classCallCheck(this, Connection);

    this._controller = controller;
    this.sessionStartTime = null;
    this.ws = function () {
      var SocketConstructor = function () {
        if (url.startsWith('dwst://')) {
          return FakeSocket;
        }
        return WebSocket;
      }();
      if (protocols.length < 1) {
        return new SocketConstructor(url);
      }
      return new SocketConstructor(url, protocols);
    }();
    this.ws.onopen = this._onopen.bind(this);
    this.ws.onclose = this._onclose.bind(this);
    this.ws.onmessage = this._onmessage.bind(this);
    this.ws.onerror = this._onerror.bind(this);
  }

  _createClass(Connection, [{
    key: '_onopen',
    value: function _onopen() {
      this.sessionStartTime = new Date().getTime();
      this._controller.onConnectionOpen(this.ws.protocol);
    }
  }, {
    key: '_onclose',
    value: function _onclose(e) {
      var _this4 = this;

      var sessionLength = function () {
        if (_this4.sessionStartTime === null) {
          return null;
        }
        var currentTime = new Date().getTime();
        return currentTime - _this4.sessionStartTime;
      }();
      this._controller.onConnectionClose(e, sessionLength);
    }
  }, {
    key: '_onmessage',
    value: function _onmessage(msg) {
      this._controller.onMessage(msg.data);
    }
  }, {
    key: '_onerror',
    value: function _onerror() {
      this._controller.onError();
    }
  }, {
    key: 'send',
    value: function send() {
      var _controller, _ws;

      if (this.ws.readyState !== 1) {
        this._controller.beforeSendWhileConnecting(this.verb);
      }
      (_controller = this._controller).onSend.apply(_controller, arguments);
      (_ws = this.ws).send.apply(_ws, arguments);
    }
  }, {
    key: 'close',
    value: function close() {
      this.ws.close();
    }
  }, {
    key: 'isConnecting',
    value: function isConnecting() {
      return this.ws.readyState === 0;
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.ws.readyState === 1;
    }
  }, {
    key: 'isClosing',
    value: function isClosing() {
      return this.ws.readyState === 2;
    }
  }, {
    key: 'isClosed',
    value: function isClosed() {
      return this.ws.readyState === 3;
    }
  }, {
    key: 'url',
    get: function get() {
      return this.ws.url;
    }
  }, {
    key: 'verb',
    get: function get() {
      var readyState = this.ws.readyState;
      if (readyState === 0) {
        return 'connecting';
      }
      if (readyState === 1) {
        return 'connected';
      }
      if (readyState === 2) {
        return 'closing connection';
      }
      if (readyState === 3) {
        return 'hanging on an already closed connection';
      }
      throw new Error('Unkown readyState');
    }
  }, {
    key: 'protocol',
    get: function get() {
      return this.ws.protocol;
    }
  }]);

  return Connection;
}();

exports.default = Connection;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Disconnect = function () {
  function Disconnect(dwst) {
    _classCallCheck(this, Disconnect);

    this._dwst = dwst;
  }

  _createClass(Disconnect, [{
    key: 'commands',
    value: function commands() {
      return ['disconnect'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/disconnect'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/disconnect'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'disconnect from a server';
    }
  }, {
    key: 'run',
    value: function run() {
      if (this._dwst.model.connection === null) {
        this._dwst.ui.terminal.log('No connection to disconnect', 'warning');
        return;
      }
      var protocol = [];
      this._dwst.ui.terminal.mlog(['Closing connection to ' + this._dwst.model.connection.url].concat(protocol), 'system');
      this._dwst.model.connection.close();
    }
  }]);

  return Disconnect;
}();

exports.default = Disconnect;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Forget = function () {
  function Forget(dwst) {
    _classCallCheck(this, Forget);

    this._dwst = dwst;
  }

  _createClass(Forget, [{
    key: 'commands',
    value: function commands() {
      return ['forget'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/forget everything'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/forget everything'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'empty history';
    }
  }, {
    key: '_removeHistory',
    value: function _removeHistory() {
      this._dwst.model.history.forget();
      var historyLine = this._dwst.model.history.getSummary().concat(['.']);
      this._dwst.ui.terminal.mlog(['Successfully forgot stored history!', historyLine], 'system');
    }
  }, {
    key: '_run',
    value: function _run(target) {
      if (target === 'everything') {
        this._removeHistory();
        this._dwst.ui.terminal.log("You may wish to use your browser's cleaning features to remove tracking cookies and other remaining traces.", 'warning');
      } else {
        var historyLine = this._dwst.model.history.getSummary().concat(['.']);
        throw new this._dwst.lib.errors.InvalidArgument(target, historyLine);
      }
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      if (paramString.length < 1) {
        this._run();
        return;
      }
      var params = paramString.split(' ');
      this._run.apply(this, _toConsumableArray(params));
    }
  }]);

  return Forget;
}();

exports.default = Forget;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Help = function () {
  function Help(dwst) {
    _classCallCheck(this, Help);

    this._dwst = dwst;
  }

  _createClass(Help, [{
    key: 'commands',
    value: function commands() {
      return ['help'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/help', '/help <command>'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/help', '/help send', '/help binary'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'get help';
    }
  }, {
    key: '_run',
    value: function _run() {
      var section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#main';

      this._dwst.ui.terminal.clearLog();
      var page = this._dwst.model.dwstgg.page(section);
      this._dwst.ui.terminal.mlog(page, 'system');
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      if (paramString.length < 1) {
        this._run();
        return;
      }
      var params = paramString.split(' ');
      this._run.apply(this, _toConsumableArray(params));
    }
  }]);

  return Help;
}();

exports.default = Help;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Interval = function () {
  function Interval(dwst) {
    _classCallCheck(this, Interval);

    this._dwst = dwst;
  }

  _createClass(Interval, [{
    key: 'commands',
    value: function commands() {
      return ['interval'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/interval <interval> [command line...]', '/interval'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/interval 1000', '/interval 1000 /binary ${randomBytes(10)}', '/interval'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'run an other command periodically';
    }
  }, {
    key: '_run',
    value: function _run() {
      var _this = this;

      for (var _len = arguments.length, commandParts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        commandParts[_key - 1] = arguments[_key];
      }

      var intervalStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (intervalStr === null) {
        if (this._dwst.model.intervalId === null) {
          this._dwst.ui.terminal.log('No interval to clear', 'warning');
          return;
        }
        clearInterval(this._dwst.model.intervalId);
        this._dwst.model.intervalId = null;
        this._dwst.ui.terminal.log('interval cleared', 'system');
        return;
      }

      var _ref = function () {
        if (commandParts.length < 1) {
          return ['send', null];
        }
        var firstPart = commandParts[0];
        var otherParts = commandParts.slice(1);
        if (['/s', '/send', '/b', '/binary'].includes(firstPart) === false) {
          throw new _this._dwst.lib.errors.InvalidCombination('interval', ['send', 'binary']);
        }
        return [firstPart.slice(1), otherParts.join(' ')];
      }(),
          _ref2 = _slicedToArray(_ref, 2),
          command = _ref2[0],
          payload = _ref2[1];

      var count = 0;
      var interval = this._dwst.lib.utils.parseNum(intervalStr);
      var spammer = function spammer() {
        var message = function () {
          if (payload === null) {
            return String(count);
          }
          return payload;
        }();
        if (_this._dwst.model.connection === null || _this._dwst.model.connection.isOpen() === false) {
          if (_this._dwst.model.intervalId !== null) {
            clearInterval(_this._dwst.model.intervalId);
            _this._dwst.model.intervalId = null;
            throw new _this._dwst.lib.errors.NoConnection(message);
          }
          return;
        }
        _this._dwst.controller.prompt.run([command, message].join(' '));
        count += 1;
      };
      if (this._dwst.model.intervalId !== null) {
        this._dwst.ui.terminal.log('clearing old interval', 'system');
        clearInterval(this._dwst.model.intervalId);
        this._dwst.model.intervalId = null;
      }
      this._dwst.model.intervalId = setInterval(spammer, interval);
      this._dwst.ui.terminal.log('interval set', 'system');
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      if (paramString.length < 1) {
        this._run();
        return;
      }
      var params = paramString.split(' ');
      this._run.apply(this, _toConsumableArray(params));
    }
  }]);

  return Interval;
}();

exports.default = Interval;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Loadbin = function () {
  function Loadbin(dwst) {
    _classCallCheck(this, Loadbin);

    this._dwst = dwst;
  }

  _createClass(Loadbin, [{
    key: 'commands',
    value: function commands() {
      return ['loadbin'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/loadbin [variable]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/loadbin', '/loadbin default'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'load binary data from a file';
    }
  }, {
    key: '_run',
    value: function _run() {
      var _this = this;

      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

      this._dwst.ui.fileInput.read(function (file) {
        var reader = new FileReader();
        reader.addEventListener('load', function (evt) {
          var buffer = evt.target.result;
          _this._dwst.model.variables.setVariable(variable, buffer);
          _this._dwst.ui.terminal.log('Binary file ' + file.name + ' (' + buffer.byteLength + 'B) loaded to "' + variable + '"', 'system');
        });
        reader.readAsArrayBuffer(file);
      });
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      if (paramString.length < 1) {
        this._run();
        return;
      }
      var params = paramString.split(' ');
      this._run.apply(this, _toConsumableArray(params));
    }
  }]);

  return Loadbin;
}();

exports.default = Loadbin;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Loadtext = function () {
  function Loadtext(dwst) {
    _classCallCheck(this, Loadtext);

    this._dwst = dwst;
  }

  _createClass(Loadtext, [{
    key: 'commands',
    value: function commands() {
      return ['loadtext'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/loadtext [variable] [encoding]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/loadtext', '/loadtext default', '/loadtext default utf-8'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'load text data from a file';
    }
  }, {
    key: '_run',
    value: function _run() {
      var _this = this;

      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var encoding = arguments[1];

      this._dwst.ui.fileInput.read(function (file) {
        var reader = new FileReader();
        reader.addEventListener('load', function (evt) {
          var text = evt.target.result;
          _this._dwst.model.variables.setVariable(variable, text);
          _this._dwst.ui.terminal.log('Text file ' + file.name + ' (' + text.length + 'B) loaded to "' + variable + '"', 'system');
        });
        reader.readAsText(file, encoding);
      });
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      if (paramString.length < 1) {
        this._run();
        return;
      }
      var params = paramString.split(' ');
      this._run.apply(this, _toConsumableArray(params));
    }
  }]);

  return Loadtext;
}();

exports.default = Loadtext;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Pwa = function () {
  function Pwa(dwst) {
    _classCallCheck(this, Pwa);

    this._dwst = dwst;
  }

  _createClass(Pwa, [{
    key: 'commands',
    value: function commands() {
      return ['pwa'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/pwa <action>'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/pwa install'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'control progressive web application features';
    }
  }, {
    key: 'run',
    value: function run() {
      if ((arguments.length <= 0 ? undefined : arguments[0]) === 'install') {
        this._dwst.controller.pwa.onInstall();
      }
    }
  }]);

  return Pwa;
}();

exports.default = Pwa;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Reset = function () {
  function Reset(dwst) {
    _classCallCheck(this, Reset);

    this._dwst = dwst;
  }

  _createClass(Reset, [{
    key: 'commands',
    value: function commands() {
      return ['reset'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/reset'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/reset'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'reset the message buffer';
    }
  }, {
    key: 'run',
    value: function run() {
      this._dwst.ui.terminal.reset();
    }
  }]);

  return Reset;
}();

exports.default = Reset;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Send = function () {
  function Send(dwst) {
    _classCallCheck(this, Send);

    this._dwst = dwst;
    this._encoder = new TextDecoder('utf-8', { fatal: true });
    this.functionSupport = true;
  }

  _createClass(Send, [{
    key: 'commands',
    value: function commands() {
      return ['send', 's', ''];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/send [template]', '/s [template]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/send Hello world!', '/send ["JSON","is","cool"]', '/send multiline\\r\\nmessage', '/send null terminated string\\0one more\\0', '/send tab\\x09separated\\x09strings', '/send unicode snowman \\u2603', '/send unicode tea cup \\u{1f375}', '/s Available now with 60% less typing!'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'send textual data';
    }
  }, {
    key: '_encode',
    value: function _encode(buffer) {
      try {
        var text = new TextDecoder('utf-8', { fatal: true }).decode(buffer);
        return text;
      } catch (e) {
        if (e instanceof TypeError) {
          throw new this._dwst.lib.errors.InvalidUtf8(buffer);
        }
        throw e;
      }
    }
  }, {
    key: 'run',
    value: function run(buffer) {
      var msg = this._encode(buffer);
      var connection = this._dwst.model.connection;
      if (connection === null || connection.isClosing() || connection.isClosed()) {
        throw new this._dwst.lib.errors.NoConnection(msg);
      }
      this._dwst.model.connection.send(msg);
    }
  }]);

  return Send;
}();

exports.default = Send;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Spam = function () {
  function Spam(dwst) {
    _classCallCheck(this, Spam);

    this._dwst = dwst;
  }

  _createClass(Spam, [{
    key: 'commands',
    value: function commands() {
      return ['spam'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/spam <times> [command line...]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/spam 10', '/spam 6 /binary ${randomBytes(10)}'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'run a command multiple times';
    }
  }, {
    key: '_run',
    value: function _run(timesStr) {
      var _this = this;

      for (var _len = arguments.length, commandParts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        commandParts[_key - 1] = arguments[_key];
      }

      var times = this._dwst.lib.utils.parseNum(timesStr);

      var _ref = function () {
        if (commandParts.length < 1) {
          return ['send', null];
        }
        var firstPart = commandParts[0];
        var otherParts = commandParts.slice(1);
        if (['/s', '/send', '/b', '/binary'].includes(firstPart) === false) {
          throw new _this._dwst.lib.errors.InvalidCombination('spam', ['send', 'binary']);
        }
        return [firstPart.slice(1), otherParts.join(' ')];
      }(),
          _ref2 = _slicedToArray(_ref, 2),
          command = _ref2[0],
          payload = _ref2[1];

      var spam = function spam(limit) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (i === limit) {
          return;
        }
        var message = function () {
          if (payload === null) {
            return String(i);
          }
          return payload;
        }();
        if (_this._dwst.model.connection === null || _this._dwst.model.connection.isOpen() === false) {
          throw new _this._dwst.lib.errors.NoConnection(message);
        }
        _this._dwst.controller.prompt.run([command, message].join(' '));
        var nextspam = function nextspam() {
          spam(limit, i + 1);
        };
        setTimeout(nextspam, 0);
      };
      spam(times);
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      if (paramString.length < 1) {
        this._run();
        return;
      }
      var params = paramString.split(' ');
      this._run.apply(this, _toConsumableArray(params));
    }
  }]);

  return Spam;
}();

exports.default = Spam;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Splash = function () {
  function Splash(dwst) {
    _classCallCheck(this, Splash);

    this._dwst = dwst;
  }

  _createClass(Splash, [{
    key: 'commands',
    value: function commands() {
      return ['splash'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/splash'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/splash'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'revisit welcome screen';
    }
  }, {
    key: 'run',
    value: function run() {
      var _this = this,
          _ref;

      this._dwst.ui.terminal.clearLog();

      /* eslint-disable quotes,object-property-newline */

      /*
      This template is left here as a comment in hopes it helps with creating new splash shapes.
      The /idkfa command may also be of use when working with splash shapes.
       const shape = [
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
        ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
      ];
      */

      var shape = ["                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                   `ggg.                                                                      ", "                                     ggg                                                                      ", "                                      gg.                                                                     ", "                                       gg                                 ggg'                                ", "                                       gg                                 gg                                  ", "                                   ,ggg g.  ggg       ggg.   .gggggg.     g                                   ", "                                 ,gg  `ggg ggg         ggg. gg      `g.  gg                                   ", "                                 gg     gg.g'           `gg gg.       `gggggg'                                ", "                                 gg     ggg'             gg. 'gggggg.  ,g                                     ", "                                 ll.     ll.     ,l.      ll       `ll l.                                     ", "                                  ll.   llll.   ,lll.   ,ll l`     ,ll ll.                                    ", "                                   `lllll' `lllll' `lllll'  `lllllll'   lll.                                  ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              "];

      var defaultColors = ["                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                   fffff                                                                      ", "                                     fff                                                                      ", "                                      fff                                                                     ", "                                       ff                                 ffff                                ", "                                       ff                                 ff                                  ", "                                   ffff ff  fff       ffff   ffffffff     f                                   ", "                                 fff  ffff fff         ffff ff      fff  ff                                   ", "                                 ff     fffff           fff fff       ffffffff                                ", "                                 ff     ffff             fff ffffffff  ff                                     ", "                                 555     555     555      55       555 55                                     ", "                                  555   55555   55555   555 55     555 555                                    ", "                                   5555555 5555555 5555555  555555555   5555                                  ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              "];

      var xmasColors = ["                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                   77777                                                                      ", "                                     444                                                                      ", "                                      447                                                                     ", "                                       44                                 7777                                ", "                                       44                                 44                                  ", "                                   7774 44  777       7777   77777777     4                                   ", "                                 774  4444 444         4447 74      477  74                                   ", "                                 44     44444           444 444       47744444                                ", "                                 44     4444             447 44444444  44                                     ", "                                 222     222     222      22       222 22                                     ", "                                  222   22222   22222   222 22     222 222                                    ", "                                   2222222 2222222 2222222  222222222   2222                                  ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              "];

      /* eslint-enable quotes,object-property-newline */

      var colors = defaultColors;
      var now = new Date();
      var date = now.getDate();
      var month = now.getMonth();
      if (date === 24 && month === 11) {
        colors = xmasColors;
      }

      var CONNECTION_LIST_CAP = 3;
      var historySummary = this._dwst.model.history.getSummary();
      var maybeTooManyConnectCommands = this._dwst.model.history.getConnectCommands(CONNECTION_LIST_CAP + 1);
      var connectCommands = maybeTooManyConnectCommands.slice(0, CONNECTION_LIST_CAP);
      var connectionsLines = connectCommands.map(function (command) {
        return {
          type: 'command',
          text: command
        };
      });
      var tooManyWarning = function () {
        if (maybeTooManyConnectCommands.length > CONNECTION_LIST_CAP) {
          return ['(more than ' + CONNECTION_LIST_CAP + ' in total, hiding some)'];
        }
        return [];
      }();
      var historySection = [historySummary.concat([', including ', {
        type: 'dwstgg',
        text: 'connect',
        section: 'connect'
      }, ' commands'])].concat(connectionsLines).concat(tooManyWarning);
      var statusSection = function () {
        if (_this._dwst.model.connection === null) {
          return [];
        }
        var connectionStatus = ['Currently ', _this._dwst.model.connection.verb, ' to ', {
          type: 'strong',
          text: _this._dwst.model.connection.url
        }];
        var maybeProtocolStatus = function () {
          var protocol = _this._dwst.model.connection.protocol;
          if (protocol.length < 1) {
            return [];
          }
          return [['Selected protocol: ', {
            type: 'strong',
            text: protocol
          }]];
        }();
        var disconnectInstructions = ['Type ', {
          type: 'command',
          text: '/disconnect'
        }, ' to end the connection'];
        return [connectionStatus].concat(maybeProtocolStatus).concat(['', disconnectInstructions]);
      }();
      var about = [[{
        type: 'h1',
        text: 'Dark WebSocket Terminal ' + this._dwst.model.config.appVersion
      }]];
      var beginnerInfo = [['1. Create a test connection by typing ', {
        type: 'command',
        text: '/connect ' + this._dwst.model.config.echoServer
      }], ['2. Type messages into the text input'], ['3. Click on DWST logo if you get lost']];
      var helpReminder = [['Type ', {
        type: 'command',
        text: '/help'
      }, ' to see the full range of available commands']];
      var privacyReminder = [[{
        type: 'dwstgg',
        text: 'Check',
        section: '#privacy',
        warning: true
      }, ' privacy and tracking info']];
      var linkSection = [[{
        type: 'link',
        text: 'GitHub',
        url: 'https://github.com/dwst/dwst'
      }, {
        type: 'regular',
        text: ' &bull; ',
        unsafe: true
      }, {
        type: 'link',
        text: 'chat',
        url: 'https://gitter.im/dwst/dwst'
      }, {
        type: 'regular',
        text: ' &bull; ',
        unsafe: true
      }, {
        type: 'link',
        text: 'rfc6455',
        url: 'https://tools.ietf.org/html/rfc6455'
      }, {
        type: 'regular',
        text: ' &bull; ',
        unsafe: true
      }, {
        type: 'link',
        text: 'iana',
        url: 'https://www.iana.org/assignments/websocket/websocket.xhtml'
      }]];
      var sections = function () {
        if (_this._dwst.model.connection !== null) {
          return [about, [''], statusSection, [''], helpReminder, [''], linkSection, ['']];
        }
        if (connectCommands.length > 0) {
          return [about, [''], historySection, [''], privacyReminder, [''], helpReminder, [''], linkSection, ['']];
        }
        return [about, [''], beginnerInfo, [''], privacyReminder, [''], helpReminder, [''], linkSection, ['']];
      }();
      this._dwst.ui.terminal.gfx(shape, colors);
      this._dwst.ui.terminal.mlog((_ref = []).concat.apply(_ref, _toConsumableArray(sections)), 'system');
    }
  }]);

  return Splash;
}();

exports.default = Splash;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var Vars = function () {
  function Vars(dwst) {
    _classCallCheck(this, Vars);

    this._dwst = dwst;
  }

  _createClass(Vars, [{
    key: 'commands',
    value: function commands() {
      return ['vars'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/vars', '/vars [name]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/vars', '/vars foo'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'list variables';
    }
  }, {
    key: '_run',
    value: function _run() {
      var _this = this;

      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (variable !== null) {
        var v = this._dwst.model.variables.getVariable(variable);
        if (typeof v === 'string') {
          this._dwst.ui.terminal.tlog(v, 'system');
          return;
        }
        if (v instanceof ArrayBuffer) {
          this._dwst.ui.terminal.blog(v, 'system');
          return;
        }
        if (v instanceof this._dwst.lib.types.DwstFunction) {
          this._dwst.ui.terminal.blog('<function>', 'system');
          return;
        }
        throw new this._dwst.lib.errors.UnknownVariable(variable);
      }
      var vars = this._dwst.model.variables.getVariableNames();
      if (vars.length === 0) {
        this._dwst.ui.terminal.log('No variables in memory.', 'system');
        return;
      }
      var listing = [].concat(_toConsumableArray(vars)).map(function (name) {
        var value = _this._dwst.model.variables.getVariable(name);
        if (typeof value === 'string') {
          var utf8 = new TextEncoder().encode(value);
          return name + ' <' + utf8.byteLength + 'B of utf-8 text>';
        }
        if (value instanceof ArrayBuffer) {
          return name + ' <' + value.byteLength + 'B of binary data>';
        }
        throw new Error('unexpected variable type');
      });
      var strs = ['Loaded vars:'].concat(listing);
      this._dwst.ui.terminal.mlog(strs, 'system');
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      if (paramString.length < 1) {
        this._run();
        return;
      }
      var params = paramString.split(' ');
      this._run.apply(this, _toConsumableArray(params));
    }
  }]);

  return Vars;
}();

exports.default = Vars;

/***/ })
/******/ ]);
//# sourceMappingURL=dwst.js.map