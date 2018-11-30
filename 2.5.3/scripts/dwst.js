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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var DwstError = exports.DwstError = function (_extendableBuiltin2) {
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

var NoConnection = function (_DwstError) {
  _inherits(NoConnection, _DwstError);

  function NoConnection(msg) {
    _classCallCheck(this, NoConnection);

    var _this2 = _possibleConstructorReturn(this, (NoConnection.__proto__ || Object.getPrototypeOf(NoConnection)).call(this));

    _this2.msg = msg;
    return _this2;
  }

  return NoConnection;
}(DwstError);

var AlreadyConnected = function (_DwstError2) {
  _inherits(AlreadyConnected, _DwstError2);

  function AlreadyConnected() {
    _classCallCheck(this, AlreadyConnected);

    return _possibleConstructorReturn(this, (AlreadyConnected.__proto__ || Object.getPrototypeOf(AlreadyConnected)).apply(this, arguments));
  }

  return AlreadyConnected;
}(DwstError);

var SocketError = function (_DwstError3) {
  _inherits(SocketError, _DwstError3);

  function SocketError() {
    _classCallCheck(this, SocketError);

    return _possibleConstructorReturn(this, (SocketError.__proto__ || Object.getPrototypeOf(SocketError)).apply(this, arguments));
  }

  return SocketError;
}(DwstError);

var InvalidParticles = function (_DwstError4) {
  _inherits(InvalidParticles, _DwstError4);

  function InvalidParticles(expected, remainder) {
    var expression = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, InvalidParticles);

    var _this5 = _possibleConstructorReturn(this, (InvalidParticles.__proto__ || Object.getPrototypeOf(InvalidParticles)).call(this));

    _this5.expected = expected;
    _this5.remainder = remainder;
    _this5.expression = expression;
    return _this5;
  }

  _createClass(InvalidParticles, [{
    key: 'errorPosition',
    get: function get() {
      return this.expression.length - this.remainder.length;
    }
  }]);

  return InvalidParticles;
}(DwstError);

var InvalidArgument = function (_DwstError5) {
  _inherits(InvalidArgument, _DwstError5);

  function InvalidArgument(argument, extraInfo) {
    _classCallCheck(this, InvalidArgument);

    var _this6 = _possibleConstructorReturn(this, (InvalidArgument.__proto__ || Object.getPrototypeOf(InvalidArgument)).call(this));

    _this6.argument = argument;
    _this6.extraInfo = extraInfo;
    return _this6;
  }

  return InvalidArgument;
}(DwstError);

var InvalidCombination = function (_DwstError6) {
  _inherits(InvalidCombination, _DwstError6);

  function InvalidCombination(command, commands) {
    _classCallCheck(this, InvalidCombination);

    var _this7 = _possibleConstructorReturn(this, (InvalidCombination.__proto__ || Object.getPrototypeOf(InvalidCombination)).call(this));

    _this7.command = command;
    _this7.commands = commands;
    return _this7;
  }

  return InvalidCombination;
}(DwstError);

var UnknownCommand = function (_DwstError7) {
  _inherits(UnknownCommand, _DwstError7);

  function UnknownCommand(command) {
    _classCallCheck(this, UnknownCommand);

    var _this8 = _possibleConstructorReturn(this, (UnknownCommand.__proto__ || Object.getPrototypeOf(UnknownCommand)).call(this));

    _this8.command = command;
    return _this8;
  }

  return UnknownCommand;
}(DwstError);

var UnknownInstruction = function (_DwstError8) {
  _inherits(UnknownInstruction, _DwstError8);

  function UnknownInstruction(instruction, command) {
    _classCallCheck(this, UnknownInstruction);

    var _this9 = _possibleConstructorReturn(this, (UnknownInstruction.__proto__ || Object.getPrototypeOf(UnknownInstruction)).call(this));

    _this9.instruction = instruction;
    _this9.command = command;
    return _this9;
  }

  return UnknownInstruction;
}(DwstError);

var UnknownHelpPage = function (_DwstError9) {
  _inherits(UnknownHelpPage, _DwstError9);

  function UnknownHelpPage(page) {
    _classCallCheck(this, UnknownHelpPage);

    var _this10 = _possibleConstructorReturn(this, (UnknownHelpPage.__proto__ || Object.getPrototypeOf(UnknownHelpPage)).call(this));

    _this10.page = page;
    return _this10;
  }

  return UnknownHelpPage;
}(DwstError);

var UnknownText = function (_DwstError10) {
  _inherits(UnknownText, _DwstError10);

  function UnknownText(variable) {
    _classCallCheck(this, UnknownText);

    var _this11 = _possibleConstructorReturn(this, (UnknownText.__proto__ || Object.getPrototypeOf(UnknownText)).call(this));

    _this11.variable = variable;
    return _this11;
  }

  return UnknownText;
}(DwstError);

var UnknownBinary = function (_DwstError11) {
  _inherits(UnknownBinary, _DwstError11);

  function UnknownBinary(variable) {
    _classCallCheck(this, UnknownBinary);

    var _this12 = _possibleConstructorReturn(this, (UnknownBinary.__proto__ || Object.getPrototypeOf(UnknownBinary)).call(this));

    _this12.variable = variable;
    return _this12;
  }

  return UnknownBinary;
}(DwstError);

exports.default = {
  NoConnection: NoConnection,
  AlreadyConnected: AlreadyConnected,
  SocketError: SocketError,
  InvalidParticles: InvalidParticles,
  InvalidArgument: InvalidArgument,
  InvalidCombination: InvalidCombination,
  UnknownCommand: UnknownCommand,
  UnknownInstruction: UnknownInstruction,
  UnknownHelpPage: UnknownHelpPage,
  UnknownText: UnknownText,
  UnknownBinary: UnknownBinary
};

/***/ }),
/* 1 */
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
  }

};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _parsee = __webpack_require__(6);

var _parsee2 = _interopRequireDefault(_parsee);

var _errors = __webpack_require__(0);

var _errors2 = _interopRequireDefault(_errors);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

  Authors: Toni Ruottu, Finland 2017-2018
           Lauri Kaitala, Finland 2017-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

// DWST particles templating language

var InvalidParticles = _errors2.default.InvalidParticles;


var specialChars = ['$', '\\'];

var alphaChars = function () {
  var aCode = 'a'.charCodeAt(0);
  var zCode = 'z'.charCodeAt(0);
  var charCodes = _utils2.default.range(aCode, zCode + 1);
  return charCodes.map(function (charCode) {
    return String.fromCharCode(charCode);
  });
}();

var digitChars = function () {
  var zeroCode = '0'.charCodeAt(0);
  var nineCode = '9'.charCodeAt(0);
  var charCodes = _utils2.default.range(zeroCode, nineCode + 1);
  return charCodes.map(function (charCode) {
    return String.fromCharCode(charCode);
  });
}();

var instructionNameChars = alphaChars;
var instructionArgChars = alphaChars.concat(digitChars);

function quote(string) {
  return '"' + string + '"';
}

function skipSpace(parsee) {
  while (parsee.read(' ')) {
    // empty while on purpose
  }
}

function extractEscapedChar(parsee) {

  if (parsee.length === 0) {
    // TODO - what if it is the only character?
    throw new InvalidParticles(['$', '\\', 'n', 'r'].map(quote), String(parsee));
  }
  if (parsee.read('n')) {
    return '\x0a';
  }
  if (parsee.read('r')) {
    return '\x0d';
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = specialChars[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var specialChar = _step.value;

      if (parsee.read(specialChar)) {
        return specialChar;
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

  throw new InvalidParticles(['$', '\\', 'n', 'r'].map(quote), String(parsee));
}

function extractRegularChars(parsee) {
  return parsee.readUntil(specialChars);
}

function readCharBlock(parsee) {
  if (parsee.read('\\')) {
    return extractEscapedChar(parsee);
  }
  return extractRegularChars(parsee);
}

function readDefaultParticleContent(parsee) {
  var charBlocks = [];
  while (parsee.length > 0 && parsee.startsWith('$') === false) {
    var charBlock = readCharBlock(parsee);
    charBlocks.push(charBlock);
  }
  var content = charBlocks.join('');
  return content;
}

function skipExpressionOpen(parsee) {
  var expressionOpen = '{';
  if (parsee.read(expressionOpen) === false) {
    throw new InvalidParticles([expressionOpen].map(quote), String(parsee));
  }
}

function skipExpressionClose(parsee) {
  var expressionClose = '}';
  if (parsee.read(expressionClose) === false) {
    throw new InvalidParticles([expressionClose].map(quote), String(parsee));
  }
}

function skipArgListOpen(parsee) {
  var argListOpen = '(';
  if (parsee.read(argListOpen) === false) {
    throw new InvalidParticles([argListOpen].map(quote), String(parsee));
  }
}

function skipArgListClose(parsee) {
  var argListClose = ')';
  if (parsee.read(argListClose) === false) {
    throw new Error('unexpected return value');
  }
}

function readInstructionName(parsee) {
  var instructionName = parsee.readWhile(instructionNameChars);
  if (instructionName.length === 0) {
    throw new InvalidParticles(['an instruction name'], String(parsee));
  }
  if (parsee.startsWith('}') || parsee.length === 0) {
    throw new InvalidParticles(['('].map(quote), String(parsee));
  }
  return instructionName;
}

function readInstructionArg(parsee) {
  var arg = parsee.readWhile(instructionArgChars);
  if (arg.length === 0) {
    var expected = ['an argument'];
    throw new InvalidParticles(expected, String(parsee));
  }
  return arg;
}

function readInstructionArgs(parsee) {
  var instructionArgs = [];
  if (parsee.startsWith(')')) {
    return instructionArgs;
  }
  if (instructionArgChars.some(function (char) {
    return parsee.startsWith(char);
  }) === false) {
    var expected = ['an argument'].concat([')'].map(quote));
    throw new InvalidParticles(expected, String(parsee));
  }

  while (true) {
    // eslint-disable-line
    var arg = readInstructionArg(parsee);
    instructionArgs.push(arg);
    skipSpace(parsee);
    if (parsee.startsWith(')')) {
      return instructionArgs;
    }
    if (parsee.read(',') === false) {
      throw new InvalidParticles([',', ')'].map(quote), String(parsee));
    }
    skipSpace(parsee);
  }
}

function parseExpression(parsee) {
  var instructionName = readInstructionName(parsee);
  skipArgListOpen(parsee);
  skipSpace(parsee);
  var instructionArgs = readInstructionArgs(parsee);
  skipSpace(parsee);
  skipArgListClose(parsee);
  var particle = [instructionName].concat(instructionArgs);
  return particle;
}

function readInstructionParticle(parsee) {
  skipExpressionOpen(parsee);
  skipSpace(parsee);
  var particle = parseExpression(parsee);
  skipSpace(parsee);
  skipExpressionClose(parsee);
  return particle;
}

function readDefaultParticle(parsee) {
  var content = readDefaultParticleContent(parsee);
  var particle = ['default', content];
  return particle;
}

function readParticle(parsee) {
  if (parsee.read('$')) {
    return readInstructionParticle(parsee);
  }
  return readDefaultParticle(parsee);
}

function tryParseParticles(particleString) {
  var parsedParticles = [];
  var parsee = new _parsee2.default(particleString);
  while (parsee.length > 0) {
    var particle = readParticle(parsee);
    parsedParticles.push(particle);
  }
  return parsedParticles;
}

function parseParticles(particleString) {
  try {
    return tryParseParticles(particleString);
  } catch (e) {
    if (e instanceof InvalidParticles) {
      e.expression = particleString;
    }
    throw e;
  }
}

function escapeForParticles(textString) {
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
  parseParticles: parseParticles,
  escapeForParticles: escapeForParticles
};

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _lib = __webpack_require__(5);

var _lib2 = _interopRequireDefault(_lib);

var _model = __webpack_require__(7);

var _model2 = _interopRequireDefault(_model);

var _ui = __webpack_require__(22);

var _ui2 = _interopRequireDefault(_ui);

var _controller = __webpack_require__(36);

var _controller2 = _interopRequireDefault(_controller);

var _plugins = __webpack_require__(42);

var _plugins2 = _interopRequireDefault(_plugins);

var _errors = __webpack_require__(0);

var _binary = __webpack_require__(43);

var _binary2 = _interopRequireDefault(_binary);

var _bins = __webpack_require__(44);

var _bins2 = _interopRequireDefault(_bins);

var _clear = __webpack_require__(45);

var _clear2 = _interopRequireDefault(_clear);

var _connect = __webpack_require__(46);

var _connect2 = _interopRequireDefault(_connect);

var _disconnect = __webpack_require__(48);

var _disconnect2 = _interopRequireDefault(_disconnect);

var _forget = __webpack_require__(49);

var _forget2 = _interopRequireDefault(_forget);

var _help = __webpack_require__(50);

var _help2 = _interopRequireDefault(_help);

var _interval = __webpack_require__(51);

var _interval2 = _interopRequireDefault(_interval);

var _loadbin = __webpack_require__(52);

var _loadbin2 = _interopRequireDefault(_loadbin);

var _loadtext = __webpack_require__(53);

var _loadtext2 = _interopRequireDefault(_loadtext);

var _pwa = __webpack_require__(54);

var _pwa2 = _interopRequireDefault(_pwa);

var _reset = __webpack_require__(55);

var _reset2 = _interopRequireDefault(_reset);

var _send = __webpack_require__(56);

var _send2 = _interopRequireDefault(_send);

var _spam = __webpack_require__(57);

var _spam2 = _interopRequireDefault(_spam);

var _splash = __webpack_require__(58);

var _splash2 = _interopRequireDefault(_splash);

var _texts = __webpack_require__(59);

var _texts2 = _interopRequireDefault(_texts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-line no-duplicate-imports

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
  return new _model2.default(dwst, history, save);
}

var dwst = Object.seal({
  lib: _lib2.default,
  model: null,
  ui: null,
  controller: null,
  plugins: null
});

dwst.model = loadModel(dwst);

dwst.controller = new _controller2.default(dwst);

dwst.plugins = new _plugins2.default(dwst, [_binary2.default, _bins2.default, _clear2.default, _connect2.default, _disconnect2.default, _forget2.default, _help2.default, _interval2.default, _loadbin2.default, _loadtext2.default, _pwa2.default, _reset2.default, _send2.default, _spam2.default, _splash2.default, _texts2.default]);

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
  if (evt.error instanceof _errors.DwstError) {
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _errors = __webpack_require__(0);

var _errors2 = _interopRequireDefault(_errors);

var _particles = __webpack_require__(2);

var _particles2 = _interopRequireDefault(_particles);

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  errors: _errors2.default,
  utils: _utils2.default,
  particles: _particles2.default
};
/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

/***/ }),
/* 6 */
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
      var sliceIndex = indexOfNone(this._remainder, allowChars);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = __webpack_require__(8);

var _config2 = _interopRequireDefault(_config);

var _history = __webpack_require__(9);

var _history2 = _interopRequireDefault(_history);

var _dwstgg = __webpack_require__(10);

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

var Model = function Model(dwst, history, save) {
  _classCallCheck(this, Model);

  this.config = _config2.default;
  this.history = new _history2.default(history, { save: save });
  this.dwstgg = new _dwstgg2.default(dwst);
  this.connection = null;
  this.bins = new Map();
  this.texts = new Map();
  this.intervalId = null;
};

exports.default = Model;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  appVersion: '2.5.3',
  echoServer: 'wss://echo.websocket.org/'
};

/***/ }),
/* 9 */
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
/* 10 */
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

var _errors = __webpack_require__(0);

var _errors2 = _interopRequireDefault(_errors);

var _chrome = __webpack_require__(11);

var _chrome2 = _interopRequireDefault(_chrome);

var _commands = __webpack_require__(12);

var _commands2 = _interopRequireDefault(_commands);

var _developing = __webpack_require__(13);

var _developing2 = _interopRequireDefault(_developing);

var _development = __webpack_require__(14);

var _development2 = _interopRequireDefault(_development);

var _firefox = __webpack_require__(15);

var _firefox2 = _interopRequireDefault(_firefox);

var _introduction = __webpack_require__(16);

var _introduction2 = _interopRequireDefault(_introduction);

var _main = __webpack_require__(17);

var _main2 = _interopRequireDefault(_main);

var _privacy = __webpack_require__(18);

var _privacy2 = _interopRequireDefault(_privacy);

var _styleguide = __webpack_require__(19);

var _styleguide2 = _interopRequireDefault(_styleguide);

var _simulator = __webpack_require__(20);

var _simulator2 = _interopRequireDefault(_simulator);

var _unprotected = __webpack_require__(21);

var _unprotected2 = _interopRequireDefault(_unprotected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UnknownCommand = _errors2.default.UnknownCommand,
    UnknownHelpPage = _errors2.default.UnknownHelpPage;


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
      throw new UnknownHelpPage(section);
    }
  }, {
    key: '_commandHelp',
    value: function _commandHelp(command) {
      var plugin = this._dwst.plugins.getPlugin(command);
      if (typeof plugin === 'undefined') {
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
    key: '_pageContent',
    value: function _pageContent(section) {
      if (section.charAt(0) === '#') {
        return this._helpPage(section);
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
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = commandsPage;

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

function commandsList(commands) {
  var available = [];
  commands.sort().forEach(function (c) {
    if (c.length > 1) {
      var commandSegment = {
        type: 'dwstgg',
        text: c,
        section: c,
        spacing: true,
        wrap: false
      };
      available.push(commandSegment);
    }
  });
  return [flatList(available)];
}

function commandsPage(commands) {

  var listing = commandsList(commands);

  return [{
    type: 'h1',
    text: 'Alphabetical List of Commands'
  }, ''].concat(listing).concat([['Type ', {
    type: 'syntax',
    text: '/help <command>'
  }, ' for usage'], '']);
}

/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
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

var _terminal = __webpack_require__(23);

var _terminal2 = _interopRequireDefault(_terminal);

var _clock = __webpack_require__(28);

var _clock2 = _interopRequireDefault(_clock);

var _prompt = __webpack_require__(29);

var _prompt2 = _interopRequireDefault(_prompt);

var _send_button = __webpack_require__(30);

var _send_button2 = _interopRequireDefault(_send_button);

var _menu_button = __webpack_require__(31);

var _menu_button2 = _interopRequireDefault(_menu_button);

var _screen = __webpack_require__(32);

var _screen2 = _interopRequireDefault(_screen);

var _auto_scroll_button = __webpack_require__(33);

var _auto_scroll_button2 = _interopRequireDefault(_auto_scroll_button);

var _scroll_notification = __webpack_require__(34);

var _scroll_notification2 = _interopRequireDefault(_scroll_notification);

var _file_input = __webpack_require__(35);

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
/* 23 */
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

var _log_entry = __webpack_require__(24);

var _log_entry2 = _interopRequireDefault(_log_entry);

var _gfx = __webpack_require__(27);

var _gfx2 = _interopRequireDefault(_gfx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    value: function mlog(mlogDescription, type) {

      var logLine = (0, _log_entry2.default)(mlogDescription, type, this._dwst.controller.link);

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
    key: '_hexdump',
    value: function _hexdump(buffer) {
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
  }, {
    key: 'blog',
    value: function blog(buffer, type) {
      var msg = '<' + buffer.byteLength + 'B of binary data>';
      var hd = this._hexdump(buffer);
      var hexLines = hd.map(function (line) {
        return {
          type: 'hexline',
          text: line.text,
          hexes: line.hexes
        };
      });
      this.mlog([msg].concat(hexLines), type);
    }
  }]);

  return Terminal;
}();

exports.default = Terminal;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderLogEntry;

var _time = __webpack_require__(3);

var _time2 = _interopRequireDefault(_time);

var _direction = __webpack_require__(25);

var _direction2 = _interopRequireDefault(_direction);

var _mlog = __webpack_require__(26);

var _mlog2 = _interopRequireDefault(_mlog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderLogEntry(mlog, type, linkHandlers) {
  var time = (0, _time2.default)();
  var direction = (0, _direction2.default)(type);
  var content = (0, _mlog2.default)(mlog, type, linkHandlers);

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
/* 25 */
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
/* 26 */
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

var _utils = __webpack_require__(1);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function renderMlog(lines, type, linkHandlers) {

  var lineElements = lines.map(function (rawLine) {
    var line = void 0;
    if (typeof rawLine === 'string') {
      line = [rawLine];
    } else if ((typeof rawLine === 'undefined' ? 'undefined' : _typeof(rawLine)) === 'object' && !Array.isArray(rawLine)) {
      line = [rawLine];
    } else {
      line = rawLine;
    }
    if (!Array.isArray(line)) {
      throw new Error('error');
    }
    var htmlSegments = line.map(function (rawSegment) {
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
        if (segment.type === 'strong') {
          var _textSpan5 = document.createElement('span');
          _textSpan5.setAttribute('class', 'dwst-mlog__strong');
          _textSpan5.innerHTML = safeText;
          return _textSpan5;
        }
        if (segment.type === 'h1') {
          var _textSpan6 = document.createElement('span');
          _textSpan6.setAttribute('class', 'dwst-mlog__h1');
          _textSpan6.innerHTML = safeText;
          return _textSpan6;
        }
        if (segment.type === 'h2') {
          var _textSpan7 = document.createElement('span');
          _textSpan7.setAttribute('class', 'dwst-mlog__h2');
          _textSpan7.innerHTML = safeText;
          return _textSpan7;
        }
        if (segment.type === 'syntax') {
          var _textSpan8 = document.createElement('span');
          _textSpan8.setAttribute('class', 'dwst-mlog__syntax');
          _textSpan8.innerHTML = safeText;
          return _textSpan8;
        }
        if (segment.type === 'link') {
          var _textSpan9 = document.createElement('a');
          _textSpan9.setAttribute('href', segment.url);
          _textSpan9.setAttribute('target', '_blank');
          _textSpan9.setAttribute('rel', 'noopener');
          _textSpan9.setAttribute('class', 'dwst-mlog__link');
          _textSpan9.innerHTML = safeText;
          return _textSpan9;
        }
      }
      throw new Error('unknown segment type');
    });
    return htmlSegments;
  });
  var outputCell = document.createElement('span');
  outputCell.setAttribute('class', 'dwst-mlog');
  lineElements.forEach(function (lineElement) {
    lineElement.forEach(function (segmentElement) {
      outputCell.appendChild(segmentElement);
    });
    var br = document.createElement('br');
    br.setAttribute('class', 'dwst-mlog__br');
    outputCell.appendChild(br);
  });
  return outputCell;
}

/***/ }),
/* 27 */
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

var _time = __webpack_require__(3);

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
/* 29 */
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

var _particles = __webpack_require__(2);

var _particles2 = _interopRequireDefault(_particles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var escapeForParticles = _particles2.default.escapeForParticles;

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
      var text = escapeForParticles(raw);
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _link = __webpack_require__(37);

var _link2 = _interopRequireDefault(_link);

var _prompt = __webpack_require__(38);

var _prompt2 = _interopRequireDefault(_prompt);

var _socket = __webpack_require__(39);

var _socket2 = _interopRequireDefault(_socket);

var _error = __webpack_require__(40);

var _error2 = _interopRequireDefault(_error);

var _pwa = __webpack_require__(41);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var PromptHandler = function () {
  function PromptHandler(dwst) {
    _classCallCheck(this, PromptHandler);

    this._dwst = dwst;
  }

  _createClass(PromptHandler, [{
    key: 'run',
    value: function run(command) {
      var _command$split = command.split(' '),
          _command$split2 = _toArray(_command$split),
          pluginName = _command$split2[0],
          params = _command$split2.slice(1);

      var paramString = params.join(' ');

      var plugin = this._dwst.plugins.getPlugin(pluginName);
      if (plugin === null) {
        var errorMessage = 'invalid command: ' + pluginName;
        var helpTip = ['type ', {
          type: 'command',
          text: '/help'
        }, ' to list available commands'];
        this._dwst.ui.terminal.mlog([errorMessage, helpTip], 'error');
        return;
      }
      plugin.run(paramString);
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
        this._dwst.ui.terminal.log(msg, 'received');
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
    key: 'onSendWhileConnecting',
    value: function onSendWhileConnecting(verb) {
      this._dwst.ui.terminal.log('Attempting to send data while ' + verb, 'warning');
    }
  }]);

  return SocketHandler;
}();

exports.default = SocketHandler;

/***/ }),
/* 40 */
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

var _errors = __webpack_require__(0);

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NoConnection = _errors2.default.NoConnection,
    AlreadyConnected = _errors2.default.AlreadyConnected,
    SocketError = _errors2.default.SocketError,
    InvalidParticles = _errors2.default.InvalidParticles,
    InvalidArgument = _errors2.default.InvalidArgument,
    InvalidCombination = _errors2.default.InvalidCombination,
    UnknownCommand = _errors2.default.UnknownCommand,
    UnknownInstruction = _errors2.default.UnknownInstruction,
    UnknownHelpPage = _errors2.default.UnknownHelpPage,
    UnknownText = _errors2.default.UnknownText,
    UnknownBinary = _errors2.default.UnknownBinary;


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
      if (error instanceof InvalidParticles) {
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
      if (error instanceof UnknownCommand) {
        var helpTip = ['type ', {
          type: 'command',
          text: '/help #commands'
        }, ' to list available commands'];
        return ['invalid command: ' + error.command, helpTip];
      }
      if (error instanceof UnknownInstruction) {
        return [['No helper ', {
          type: 'strong',
          text: error.instruction
        }, ' available for ', {
          type: 'dwstgg',
          text: error.command,
          section: error.command
        }, '.']];
      }
      if (error instanceof UnknownHelpPage) {
        var listTip = ['Display help index by typing ', {
          type: 'command',
          text: '/help'
        }];
        return ['Unkown help page: ' + error.page, listTip];
      }
      if (error instanceof UnknownText) {
        var _listTip = ['List available texts by typing ', {
          type: 'command',
          text: '/texts'
        }];
        return ['Text "' + error.variable + '" does not exist.', _listTip];
      }
      if (error instanceof UnknownBinary) {
        var _listTip2 = ['List available binaries by typing ', {
          type: 'command',
          text: '/bins'
        }];
        return ['Binary "' + error.variable + '" does not exist.', _listTip2];
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
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2018

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function byteValue(x) {
  var code = x.charCodeAt(0);
  if (code !== (code & 0xff)) {
    // eslint-disable-line no-bitwise
    return 0;
  }
  return code;
}

function hexpairtobyte(hp) {
  var hex = hp.join('');
  if (hex.length !== 2) {
    return null;
  }
  return parseInt(hex, 16);
}

function joinBuffers(buffersToJoin) {
  var total = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = buffersToJoin[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var buffer = _step.value;

      total += buffer.length;
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

  var out = new Uint8Array(total);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = buffersToJoin[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _buffer = _step2.value;

      out.set(_buffer, offset);
      offset += _buffer.length;
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

  return out.buffer;
}

var Binary = function () {
  function Binary(dwst) {
    _classCallCheck(this, Binary);

    this._dwst = dwst;
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
      return ['/binary Hello world!', '/binary multiline\\r\\nmessage', '/binary ${random(16)}', '/binary ${text()}', '/binary ${bin()}', '/binary ["JSON","is","cool"]', '/binary ${range(0,0xff)}', '/binary ${hex(1234567890abcdef)}', '/binary ${hex(52)}${random(1)}lol', '/b Available now with ~71.43% less typing!'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'send binary data';
    }
  }, {
    key: '_process',
    value: function _process(instr, params) {
      if (instr === 'default') {
        var text = params[0];
        var bytes = [].concat(_toConsumableArray(text)).map(byteValue);
        return new Uint8Array(bytes);
      }
      if (instr === 'random') {
        var randombyte = function randombyte() {
          var out = Math.floor(Math.random() * (0xff + 1));
          return out;
        };
        var num = 16;
        if (params.length === 1) {
          num = this._dwst.lib.utils.parseNum(params[0]);
        }
        var _bytes = [];
        for (var i = 0; i < num; i++) {
          _bytes.push(randombyte());
        }
        return new Uint8Array(_bytes);
      }
      if (instr === 'range') {
        var start = 0;
        var end = 0xff;
        if (params.length === 1) {
          end = this._dwst.lib.utils.parseNum(params[0]);
        }
        if (params.length === 2) {
          start = this._dwst.lib.utils.parseNum(params[0]);
          end = this._dwst.lib.utils.parseNum(params[1]);
        }
        var _bytes2 = [];
        for (var _i = start; _i <= end; _i++) {
          _bytes2.push(_i);
        }
        return new Uint8Array(_bytes2);
      }
      if (instr === 'bin') {
        var variable = 'default';
        if (params.length === 1) {
          variable = params[0];
        }
        var buffer = this._dwst.model.bins.get(variable);
        if (typeof buffer === 'undefined') {
          buffer = [];
        }
        return new Uint8Array(buffer);
      }
      if (instr === 'text') {
        var _variable = 'default';
        if (params.length === 1) {
          _variable = params[0];
        }
        var _text = this._dwst.model.texts.get(_variable);
        var _bytes3 = void 0;
        if (typeof _text === 'undefined') {
          _bytes3 = [];
        } else {
          _bytes3 = [].concat(_toConsumableArray(_text)).map(byteValue);
        }
        return new Uint8Array(_bytes3);
      }
      if (instr === 'hex') {
        var _bytes4 = void 0;
        if (params.length === 1) {
          var hex = params[0];
          var nums = hex.split('');
          var pairs = this._dwst.lib.utils.chunkify(nums, 2);
          var tmp = pairs.map(hexpairtobyte);
          _bytes4 = tmp.filter(function (b) {
            return b !== null;
          });
        } else {
          _bytes4 = [];
        }
        return new Uint8Array(_bytes4);
      }
      throw new this._dwst.lib.errors.UnknownInstruction(instr, 'binary');
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      var _this = this;

      var parsed = this._dwst.lib.particles.parseParticles(paramString);
      var processed = parsed.map(function (particle) {
        var _particle = _toArray(particle),
            instruction = _particle[0],
            args = _particle.slice(1);

        return _this._process(instruction, args);
      });
      var out = joinBuffers(processed);

      var msg = '<' + out.byteLength + 'B of data> ';
      var connection = this._dwst.model.connection;
      if (connection === null || connection.isClosing() || connection.isClosed()) {
        throw new this._dwst.lib.errors.NoConnection(msg);
      }
      this._dwst.ui.terminal.blog(out, 'sent');
      this._dwst.model.connection.send(out);
    }
  }]);

  return Binary;
}();

exports.default = Binary;

/***/ }),
/* 44 */
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

var Bins = function () {
  function Bins(dwst) {
    _classCallCheck(this, Bins);

    this._dwst = dwst;
  }

  _createClass(Bins, [{
    key: 'commands',
    value: function commands() {
      return ['bins'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/bins [name]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/bins', '/bins default'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'list loaded binaries';
    }
  }, {
    key: '_run',
    value: function _run() {
      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (variable !== null) {
        var buffer = this._dwst.model.bins.get(variable);
        if (typeof buffer !== 'undefined') {
          this._dwst.ui.terminal.blog(buffer, 'system');
          return;
        }
        throw new this._dwst.lib.errors.UnknownBinary(variable);
      }
      var listing = [].concat(_toConsumableArray(this._dwst.model.bins.entries())).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            buffer = _ref2[1];

        return '"' + name + '": <' + buffer.byteLength + 'B of binary data>';
      });
      var strs = ['Loaded binaries:'].concat(listing);
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

  return Bins;
}();

exports.default = Bins;

/***/ }),
/* 45 */
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
/* 46 */
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

var _connection = __webpack_require__(47);

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
/* 47 */
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
      var _ws;

      if (this.ws.readyState !== 1) {
        this._controller.onSendWhileConnecting(this.verb);
      }
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
/* 48 */
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
/* 50 */
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
      var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var section = void 0;
      if (parameter === null) {
        section = '#main';
      } else {
        section = parameter.toLowerCase();
      }
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
/* 51 */
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
      return ['/interval 1000', '/interval 1000 /binary ${random(10)}', '/interval'];
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
/* 52 */
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
          _this._dwst.model.bins.set(variable, buffer);
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
/* 53 */
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
          _this._dwst.model.texts.set(variable, text);
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
/* 54 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

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
      return ['/send Hello world!', '/send multiline\\r\\nmessage', '/send rpc(${random(5)})', '/send ${text()}', '/send ["JSON","is","cool"]', '/send ${time()}s since epoch', '/send From a to z: ${range(97,122)}', '/s Available now with 60% less typing!'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'send textual data';
    }
  }, {
    key: '_process',
    value: function _process(instr, params) {
      if (instr === 'default') {
        return params[0];
      }
      if (instr === 'random') {
        var randomchar = function randomchar() {
          var out = Math.floor(Math.random() * (0xffff + 1));
          out /= 2; // avoid risky characters
          var char = String.fromCharCode(out);
          return char;
        };
        var num = 16;
        if (params.length === 1) {
          num = this._dwst.lib.utils.parseNum(params[0]);
        }
        var str = '';
        for (var i = 0; i < num; i++) {
          str += randomchar();
        }
        return str;
      }
      if (instr === 'text') {
        var variable = 'default';
        if (params.length === 1) {
          variable = params[0];
        }
        return this._dwst.model.texts.get(variable);
      }
      if (instr === 'time') {
        return String(Math.round(new Date().getTime() / 1000));
      }
      if (instr === 'range') {
        var start = 32;
        var end = 126;
        if (params.length === 1) {
          end = this._dwst.lib.utils.parseNum(params[0]);
        }
        if (params.length === 2) {
          start = this._dwst.lib.utils.parseNum(params[0]);
          end = this._dwst.lib.utils.parseNum(params[1]);
        }
        var _str = '';
        for (var _i = start; _i <= end; _i++) {
          _str += String.fromCharCode(_i);
        }
        return _str;
      }
      throw new this._dwst.lib.errors.UnknownInstruction(instr, 'send');
    }
  }, {
    key: 'run',
    value: function run(paramString) {
      var _this = this;

      var parsed = this._dwst.lib.particles.parseParticles(paramString);
      var processed = parsed.map(function (particle) {
        var _particle = _toArray(particle),
            instruction = _particle[0],
            args = _particle.slice(1);

        return _this._process(instruction, args);
      });
      var msg = processed.join('');

      var connection = this._dwst.model.connection;
      if (connection === null || connection.isClosing() || connection.isClosed()) {
        throw new this._dwst.lib.errors.NoConnection(msg);
      }
      this._dwst.ui.terminal.log(msg, 'sent');
      this._dwst.model.connection.send(msg);
    }
  }]);

  return Send;
}();

exports.default = Send;

/***/ }),
/* 57 */
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
      return ['/spam 10', '/spam 6 /binary ${random(10)}'];
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
/* 58 */
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
/* 59 */
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

var Texts = function () {
  function Texts(dwst) {
    _classCallCheck(this, Texts);

    this._dwst = dwst;
  }

  _createClass(Texts, [{
    key: 'commands',
    value: function commands() {
      return ['texts'];
    }
  }, {
    key: 'usage',
    value: function usage() {
      return ['/texts', '/texts [name]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/texts', '/texts default'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'list loaded texts';
    }
  }, {
    key: '_run',
    value: function _run() {
      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (variable !== null) {
        var text = this._dwst.model.texts.get(variable);
        if (typeof text !== 'undefined') {
          this._dwst.ui.terminal.log(text, 'system');
          return;
        }
        throw new this._dwst.lib.errors.UnknownText(variable);
      }
      var listing = [].concat(_toConsumableArray(this._dwst.model.texts.entries())).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            text = _ref2[1];

        return '"' + name + '": <' + text.length + 'B of text data>';
      });
      var strs = ['Loaded texts:'].concat(listing);
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

  return Texts;
}();

exports.default = Texts;

/***/ })
/******/ ]);
//# sourceMappingURL=dwst.js.map