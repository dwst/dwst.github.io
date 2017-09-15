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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**

  Authors: Toni Ruottu, Finland 2010-2017

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

  divissimo: function divissimo(l, n) {
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
  }

};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = currenttime;

/**

  Authors: Toni Ruottu, Finland 2010-2017

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

function currenttime() {
  var addzero = function addzero(i) {
    if (i < 10) {
      return "0" + i;
    }
    return String(i);
  };
  var date = new Date();
  var time = addzero(date.getHours()) + ":" + addzero(date.getMinutes()) + "<span class=\"sec\">:" + addzero(date.getSeconds()) + "</span>";
  return time;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _currenttime = __webpack_require__(1);

var _currenttime2 = _interopRequireDefault(_currenttime);

var _history_manager = __webpack_require__(3);

var _history_manager2 = _interopRequireDefault(_history_manager);

var _terminal = __webpack_require__(4);

var _terminal2 = _interopRequireDefault(_terminal);

var _binary = __webpack_require__(5);

var _binary2 = _interopRequireDefault(_binary);

var _bins = __webpack_require__(6);

var _bins2 = _interopRequireDefault(_bins);

var _clear = __webpack_require__(7);

var _clear2 = _interopRequireDefault(_clear);

var _connect = __webpack_require__(8);

var _connect2 = _interopRequireDefault(_connect);

var _disconnect = __webpack_require__(10);

var _disconnect2 = _interopRequireDefault(_disconnect);

var _forget = __webpack_require__(11);

var _forget2 = _interopRequireDefault(_forget);

var _help = __webpack_require__(12);

var _help2 = _interopRequireDefault(_help);

var _interval = __webpack_require__(13);

var _interval2 = _interopRequireDefault(_interval);

var _loadbin = __webpack_require__(14);

var _loadbin2 = _interopRequireDefault(_loadbin);

var _loadtext = __webpack_require__(15);

var _loadtext2 = _interopRequireDefault(_loadtext);

var _reset = __webpack_require__(16);

var _reset2 = _interopRequireDefault(_reset);

var _send = __webpack_require__(17);

var _send2 = _interopRequireDefault(_send);

var _spam = __webpack_require__(18);

var _spam2 = _interopRequireDefault(_spam);

var _splash = __webpack_require__(19);

var _splash2 = _interopRequireDefault(_splash);

var _texts = __webpack_require__(20);

var _texts2 = _interopRequireDefault(_texts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
/**

  Authors: Toni Ruottu, Finland 2010-2017
           William Orr, US 2012

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

/*
Dark WebSocket Terminal

CC0, http://creativecommons.org/publicdomain/zero/1.0/

To the extent possible under law, Dark WebSocket Terminal developers have waived all copyright and related or neighboring rights to Dark WebSocket Terminal.

Dark WebSocket Terminal developers:
Toni Ruottu <toni.ruottu@iki.fi>, Finland 2010-2017
William Orr <will@worrbase.com>, US 2012

*/

var resizePending = false;

var controller = {

  silent: silent,
  run: run,

  onHelpLinkClick: function onHelpLinkClick(command) {
    loud(command);
  },

  onCommandLinkClick: function onCommandLinkClick(command) {
    pluginInterface.historyManager.select(command);
    loud(command);
  },

  onConnectionOpen: function onConnectionOpen(protocol) {
    var selected = function () {
      if (protocol.length < 1) {
        return [];
      }
      return ['Selected protocol: ' + protocol];
    }();
    terminal.mlog(['Connection established.'].concat(selected), 'system');
  },

  onConnectionClose: function onConnectionClose(e, sessionLength) {
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
    terminal.mlog(['Connection closed.', 'Close status: ' + code].concat(reason).concat(sessionLengthString), 'system');
    pluginInterface.connection = null;
  },

  onMessage: function onMessage(msg) {
    if (typeof msg === 'string') {
      terminal.log(msg, 'received');
    } else {
      var fr = new FileReader();
      fr.onload = function (e) {
        var buffer = e.target.result;
        terminal.blog(buffer, 'received');
      };
      fr.readAsArrayBuffer(msg);
    }
  },

  onError: function onError() {
    terminal.log('WebSocket error.', 'error');
  },

  onSendWhileConnecting: function onSendWhileConnecting(verb) {
    terminal.log('Attempting to send data while ' + verb, 'warning');
  }

};

var terminal = new _terminal2.default('ter1', controller);

var pluginInterface = {

  VERSION: '2.3.0',
  ECHO_SERVER_URL: 'wss://echo.websocket.org/',

  terminal: terminal,
  controller: controller,
  historyManager: null,
  connection: null,
  commands: null,
  bins: new Map(),
  texts: new Map(),
  intervalId: null

};

var plugins = [_binary2.default, _bins2.default, _clear2.default, _connect2.default, _disconnect2.default, _forget2.default, _help2.default, _interval2.default, _loadbin2.default, _loadtext2.default, _reset2.default, _send2.default, _spam2.default, _splash2.default, _texts2.default];
pluginInterface.commands = new Map();
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var Constructor = _step.value;

    var plugin = new Constructor(pluginInterface);
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = plugin.commands()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var command = _step3.value;

        pluginInterface.commands.set(command, plugin);
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

function process(plugin, rawParam) {
  var pro = plugin.process;
  var param = rawParam;
  /* eslint-disable prefer-template */
  if (param.substr(param.length - 2, 2) === '\\\\') {
    param = param.substr(0, param.length - 2) + '\\';
  } else if (param.substr(param.length - 1, 1) === '\\') {
    param = param.substr(0, param.length - 1) + ' ';
  }
  /* eslint-enable prefer-template */
  if (typeof pro === 'undefined') {
    return param;
  }
  var instruction = 'default';
  var params = [];
  var end = '';
  if (param.substr(0, 2) === '\\\\') {
    params.push(param.substr(1));
  } else if (param.substr(0, 2) === '\\[') {
    params.push(param.substr(1));
  } else if (param.substr(0, 1) === '[') {
    var tmp = param.split(']');
    var call = tmp[0].split('[')[1];
    end = tmp[1];
    var tmp2 = call.split('(').concat('');
    instruction = tmp2[0];
    var pl = tmp2[1].split(')')[0];
    if (pl.length > 0) {
      params = pl.split(',');
    }
  } else {
    params.push(param);
  }
  return pro(instruction, params, end);
}

function run(command) {

  var plugin = pluginInterface.commands.get(command);
  if (typeof plugin === 'undefined') {
    var errorMessage = 'invalid command: ' + command;
    var helpTip = ['type ', {
      type: 'command',
      text: '/help'
    }, ' to list available commands'];
    terminal.mlog([errorMessage, helpTip], 'error');
    return;
  }

  for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  var processed = params.map(function (param) {
    return process(plugin, param);
  });
  plugin.run.apply(plugin, _toConsumableArray(processed));
}

function refreshclock() {
  var time = (0, _currenttime2.default)();
  document.getElementById('clock1').innerHTML = time;
}

function silent(line) {
  var noslash = line.substring(1);
  var parts = noslash.split(' ');
  run.apply(undefined, _toConsumableArray(parts));
}

function loud(line) {
  terminal.log(line, 'command');
  silent(line);
}

function send() {
  var raw = document.getElementById('msg1').value;
  if (raw === '/idkfa') {
    // dwst debugger
    document.documentElement.className += ' dwst-debug';
    return;
  }
  pluginInterface.historyManager.select(raw);
  document.getElementById('msg1').value = '';
  if (raw.length < 1) {
    var helpTip = ['type ', {
      type: 'command',
      text: '/help'
    }, ' to list available commands'];
    terminal.log(helpTip, 'system');
    return;
  }
  if (raw[0] === '/') {
    loud(raw);
    return;
  }
  var replmap = [[' [', '\\ \\['], [' ', '\\ ']];

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
  var almost = replacer(raw, replmap);
  var final = void 0;
  if (almost[0] === '[') {
    final = '\\' + almost;
  } else {
    final = almost;
  }
  var command = '/send ' + final;
  loud(command);
  return;
}

function globalKeyPress(event) {
  var msg1 = document.getElementById('msg1');
  if (event.key === 'Escape') {
    if (pluginInterface.connection !== null && (pluginInterface.connection.isOpen() || pluginInterface.connection.isConnecting())) {
      loud('/disconnect');
    } else if (msg1.value === '') {
      var connects = pluginInterface.historyManager.getConnectCommands(1);
      if (connects.length < 1) {
        msg1.value = '/connect ' + pluginInterface.ECHO_SERVER_URL;
      } else {
        msg1.value = connects[0];
      }
    } else {
      pluginInterface.historyManager.select(msg1.value);
      msg1.value = '';
    }
  }
}

function msgKeyPress(event) {
  var msg1 = document.getElementById('msg1');
  if (event.keyCode === 13) {
    send();
  } else if (event.keyCode === 38) {
    // up
    msg1.value = pluginInterface.historyManager.getPrevious(msg1.value);
    return;
  } else if (event.keyCode === 40) {
    // down
    msg1.value = pluginInterface.historyManager.getNext(msg1.value);
    return;
  }
}

function loadSaves() {
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
  pluginInterface.historyManager = new _history_manager2.default(history, { save: save });
}

function throttledUpdateGfxPositions() {
  if (resizePending !== true) {
    resizePending = true;
    setTimeout(function () {
      resizePending = false;
      terminal.updateGfxPositions();
    }, 100);
  }
}

function init() {
  loadSaves();
  refreshclock();
  document.getElementById('clock1').removeAttribute('style');
  setInterval(refreshclock, 500);
  silent('/splash');

  window.addEventListener('resize', throttledUpdateGfxPositions);

  document.addEventListener('keydown', globalKeyPress);
  document.getElementById('msg1').addEventListener('keydown', msgKeyPress);
  document.getElementById('sendbut1').addEventListener('click', send);
  document.getElementById('menubut1').addEventListener('click', function () {
    loud('/splash');
    terminal.scrollLog();
  });
  [].concat(_toConsumableArray(document.getElementsByClassName('js-auto-scroll-button'))).forEach(function (asb) {
    asb.addEventListener('click', function () {
      return terminal.scrollLog();
    });
  });
  setInterval(function () {
    return terminal.scrollNotificationUpdate();
  }, 1000);
  document.getElementById('msg1').focus();
}

document.addEventListener('DOMContentLoaded', init);
window.addEventListener('load', function () {
  return terminal.updateGfxPositions();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017
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

var HistoryManager = function () {
  function HistoryManager(savedHistory, options) {
    _classCallCheck(this, HistoryManager);

    this.save = options.save;
    this.history = new ElementHistory(savedHistory);
  }

  _createClass(HistoryManager, [{
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

  return HistoryManager;
}();

exports.default = HistoryManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2017

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _currenttime = __webpack_require__(1);

var _currenttime2 = _interopRequireDefault(_currenttime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Terminal = function () {
  function Terminal(elementId, controller) {
    _classCallCheck(this, Terminal);

    this._elementId = elementId;
    this._controller = controller;
  }

  _createClass(Terminal, [{
    key: '_htmlescape',
    value: function _htmlescape(line) {
      return line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    key: 'isUserScrolling',
    value: function isUserScrolling() {
      var screen = document.getElementById('screen1');
      return screen.scrollTop !== screen.scrollHeight - screen.offsetHeight;
    }
  }, {
    key: 'scrollLog',
    value: function scrollLog() {
      var screen = document.getElementById('screen1');
      screen.scrollTop = screen.scrollHeight;
      this.hideScrollNotification();
    }
  }, {
    key: 'scrollNotificationUpdate',
    value: function scrollNotificationUpdate() {
      if (this.isUserScrolling()) {
        this.showScrollNotification();
        return;
      }
      this.hideScrollNotification();
    }
  }, {
    key: 'showScrollNotification',
    value: function showScrollNotification() {
      [].concat(_toConsumableArray(document.getElementsByClassName('js-scroll-notification'))).forEach(function (sn) {
        sn.removeAttribute('style');
      });
    }
  }, {
    key: 'hideScrollNotification',
    value: function hideScrollNotification() {
      [].concat(_toConsumableArray(document.getElementsByClassName('js-scroll-notification'))).forEach(function (sn) {
        sn.setAttribute('style', 'display: none;');
      });
    }
  }, {
    key: 'updateGfxPositions',
    value: function updateGfxPositions() {
      // Updating gfx positions with this method disables basic centering
      // and aligns the text in the gfx section with the text in log lines.
      var MAX_MAXCHARS = 110;
      Reflect.apply(Array.prototype.forEach, document.getElementsByClassName('dwst-gfx'), [function (maxDiv) {
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
    key: 'addLogLine',
    value: function addLogLine(logLine) {
      var terminal = document.getElementById(this._elementId);
      var userWasScrolling = this.isUserScrolling();
      terminal.appendChild(logLine);
      if (userWasScrolling) {
        return;
      }
      this.scrollLog();
    }
  }, {
    key: 'clearLog',
    value: function clearLog() {
      var logClear = document.createElement('div');
      logClear.setAttribute('class', 'dwst-logclear');
      this.addLogLine(logClear);
    }
  }, {
    key: 'gfx',
    value: function gfx(lines, colors) {

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

      var gfxContainer = document.createElement('div');
      gfxContainer.setAttribute('class', 'dwst-gfx');
      gfxContainer.setAttribute('aria-hidden', 'true');
      gfxContainer.appendChild(gfxContent);

      this.addLogLine(gfxContainer);

      this.updateGfxPositions();
    }
  }, {
    key: 'mlog',
    value: function mlog(lines, type) {
      var _this = this;

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
              return _this._htmlescape(rawText);
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
              link.onclick = function () {
                _this._controller.onHelpLinkClick(command);
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
              _link.onclick = function () {
                _this._controller.onCommandLinkClick(_command);
              };
              _link.setAttribute('href', '#');
              _link.setAttribute('title', safeText);
              var _textSpan2 = document.createElement('span');
              _textSpan2.innerHTML = safeText;
              _link.appendChild(_textSpan2);
              return _link;
            }
            if (segment.type === 'hexline') {
              var hexChunks = _utils2.default.divissimo(segment.hexes, 4);
              var textChunks = _utils2.default.divissimo(rawText, 4);

              var byteGrid = document.createElement('div');
              var byteGridClasses = ['dwst-bytegrid'];
              if (hexChunks.length < 3) {
                byteGridClasses.push('dwst-bytegrid--less-than-three');
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


                var hexContent = _this._htmlescape(hexChunk.join(' '));
                var hexItem = document.createElement('div');
                hexItem.setAttribute('class', 'dwst-bytegrid__item');
                hexItem.innerHTML = hexContent;
                byteGrid.appendChild(hexItem);

                var textContent = _this._htmlescape(textChunk.join('').padEnd(chunkLength));
                var textItem = document.createElement('div');
                textItem.setAttribute('class', 'dwst-bytegrid__item');
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
      var time = (0, _currenttime2.default)();
      var logLine = document.createElement('div');
      logLine.setAttribute('class', 'dwst-logline dwst-logline--' + type);
      logLine.innerHTML = '<span class="dwst-logline__item time">' + time + '</span><span class="dwst-logline__item dwst-direction dwst-direction--' + type + '">' + type + ':</span>';
      var outputCell = document.createElement('span');
      outputCell.setAttribute('class', 'dwst-logline__item dwst-logline__item--main preserved');
      lineElements.forEach(function (lineElement) {
        lineElement.forEach(function (segmentElement) {
          outputCell.appendChild(segmentElement);
        });
        var br = document.createElement('br');
        outputCell.appendChild(br);
      });
      logLine.appendChild(outputCell);
      this.addLogLine(logLine);
    }
  }, {
    key: 'log',
    value: function log(line, type) {
      this.mlog([line], type);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2017

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
      return ['/binary [components...]', '/b [components...]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/binary Hello\\ world!', '/binary [random(16)]', '/binary [text]', '/binary [bin]', '/binary \\["JSON","is","cool"]', '/binary [range(0,0xff)]', '/binary [hex(1234567890abcdef)]', '/binary [hex(52)] [random(1)] lol', '/b Available\\ now\\ with\\ ~71.43%\\ less\\ typing!'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'send binary data';
    }
  }, {
    key: 'process',
    value: function process(instr, params) {
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
      var bytes = [];
      if (instr === 'default') {
        var text = params[0];
        bytes = [].concat(_toConsumableArray(text)).map(byteValue);
      }
      if (instr === 'random') {
        var randombyte = function randombyte() {
          var out = Math.floor(Math.random() * (0xff + 1));
          return out;
        };
        var num = 16;
        if (params.length === 1) {
          num = _utils2.default.parseNum(params[0]);
        }
        bytes = [];
        for (var i = 0; i < num; i++) {
          bytes.push(randombyte());
        }
      }
      if (instr === 'range') {
        var start = 0;
        var end = 0xff;
        if (params.length === 1) {
          end = _utils2.default.parseNum(params[0]);
        }
        if (params.length === 2) {
          start = _utils2.default.parseNum(params[0]);
          end = _utils2.default.parseNum(params[1]);
        }
        bytes = [];
        for (var _i = start; _i <= end; _i++) {
          bytes.push(_i);
        }
      }
      if (instr === 'bin') {
        var variable = 'default';
        if (params.length === 1) {
          variable = params[0];
        }
        var buffer = this._dwst.bins.get(variable);
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
        var _text = this._dwst.texts.get(_variable);
        if (typeof _text === 'undefined') {
          bytes = [];
        } else {
          bytes = [].concat(_toConsumableArray(_text)).map(byteValue);
        }
      }
      if (instr === 'hex') {
        if (params.length === 1) {
          var hex = params[0];
          var nums = hex.split('');
          var pairs = _utils2.default.divissimo(nums, 2);
          var tmp = pairs.map(hexpairtobyte);
          bytes = tmp.filter(function (b) {
            return b !== null;
          });
        } else {
          bytes = [];
        }
      }
      return new Uint8Array(bytes);
    }
  }, {
    key: 'run',
    value: function run() {
      function joinbufs(buffersToJoin) {

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

        return out;
      }

      for (var _len = arguments.length, buffers = Array(_len), _key = 0; _key < _len; _key++) {
        buffers[_key] = arguments[_key];
      }

      var out = joinbufs(buffers).buffer;
      var msg = '<' + out.byteLength + 'B of data> ';
      if (this._dwst.connection === null || this._dwst.connection.isClosing() || this._dwst.connection.isClosed()) {
        var connectTip = ['Use ', {
          type: 'dwstgg',
          text: 'connect',
          section: 'connect'
        }, ' to form a connection and try again.'];
        this._dwst.terminal.mlog(['No connection.', 'Cannot send: ' + msg, connectTip], 'error');
        return;
      }
      this._dwst.terminal.blog(out, 'sent');
      this._dwst.connection.send(out);
    }
  }]);

  return Binary;
}();

exports.default = Binary;

/***/ }),
/* 6 */
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

  Authors: Toni Ruottu, Finland 2010-2017

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
    key: 'run',
    value: function run() {
      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (variable !== null) {
        var buffer = this._dwst.bins.get(variable);
        if (typeof buffer !== 'undefined') {
          this._dwst.blog(buffer, 'system');
          return;
        }
        var listTip = ['List available binaries by typing ', {
          type: 'command',
          text: '/bins'
        }, '.'];
        this._dwst.mlog(['Binary "' + variable + '" does not exist.', listTip], 'error');
        return;
      }
      var listing = [].concat(_toConsumableArray(this._dwst.bins.entries())).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            buffer = _ref2[1];

        return '"' + name + '": <' + buffer.byteLength + 'B of binary data>';
      });
      var strs = ['Loaded binaries:'].concat(listing);
      this._dwst.mlog(strs, 'system');
    }
  }]);

  return Bins;
}();

exports.default = Bins;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017

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
      this._dwst.clearLog();
    }
  }]);

  return Clear;
}();

exports.default = Clear;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2017

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

var _connection = __webpack_require__(9);

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
    key: 'run',
    value: function run(url) {
      var _this = this;

      var protocolString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      if (this._dwst.connection !== null) {
        this._dwst.terminal.mlog(['Already connected to a server', ['Type ', {
          type: 'command',
          text: '/disconnect'
        }, ' to end the conection']], 'error');
        return;
      }
      var protoCandidates = function () {
        if (protocolString === '') {
          return [];
        }
        return protocolString.split(',');
      }();
      var protocols = protoCandidates.filter(function (protocolName) {

        // https://tools.ietf.org/html/rfc6455#page-17

        var basicAlphabet = _utils2.default.range(0x21, 0x7e).map(function (charCode) {
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
          _this._dwst.terminal.mlog(['Skipped invalid protocol candidate "' + protocolName + '".', 'The following characters are not allowed: ' + invalidCharsString], 'warning');
          return false;
        }
        return true;
      });
      if (self.origin.startsWith('https://') && url.startsWith('ws://')) {
        var secureUrl = 'wss://' + url.slice('ws://'.length);
        this._dwst.terminal.mlog([['Attempting unprotected connection from a secure origin. ', 'See ', {
          type: 'dwstgg',
          text: '#unprotected',
          section: '#unprotected'
        }, ' for details. Consider using ', {
          type: 'command',
          text: '/connect ' + secureUrl + ' ' + protocolString
        }]], 'warning');
      }
      this._dwst.connection = new _connection2.default(url, protocols, this._dwst.controller);
      var protoFormatted = protocols.join(', ');
      var negotiation = function () {
        if (protocols.length < 1) {
          return ['No protocol negotiation.'];
        }
        return ['Accepted protocols: ' + protoFormatted];
      }();
      this._dwst.terminal.mlog(['Connecting to ' + this._dwst.connection.url].concat(negotiation), 'system');
    }
  }]);

  return Connect;
}();

exports.default = Connect;

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

  Authors: Toni Ruottu, Finland 2010-2017

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
    window.setTimeout(function () {
      _this.onopen();
    }, 0);
  }

  _createClass(FakeSocket, [{
    key: 'send',
    value: function send(message) {
      var _this2 = this;

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
          _this2.onmessage({
            data: data
          });
        }, 0);
      }
    }
  }, {
    key: 'close',
    value: function close() {
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
      var _this3 = this;

      var sessionLength = function () {
        if (_this3.sessionStartTime === null) {
          return null;
        }
        var currentTime = new Date().getTime();
        return currentTime - _this3.sessionStartTime;
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017

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
      if (this._dwst.terminal.connection === null) {
        this._dwst.terminal.log('No connection to disconnect', 'warning');
      }
      var protocol = [];
      this._dwst.terminal.mlog(['Closing connection to ' + this._dwst.connection.url].concat(protocol), 'system');
      this._dwst.connection.close();
    }
  }]);

  return Disconnect;
}();

exports.default = Disconnect;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017

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
      this._dwst.historyManager.forget();
      var historyLine = this._dwst.historyManager.getSummary().concat(['.']);
      this._dwst.terminal.mlog(['Successfully forgot stored history!', historyLine], 'system');
    }
  }, {
    key: 'run',
    value: function run(target) {
      if (target === 'everything') {
        this._removeHistory();
        this._dwst.terminal.log("You may wish to use your browser's cleaning features to remove tracking cookies and other remaining traces.", 'warning');
      } else {
        var historyLine = this._dwst.historyManager.getSummary().concat(['.']);
        this._dwst.terminal.mlog(['Invalid argument: ' + target, historyLine], 'error');
      }
    }
  }]);

  return Forget;
}();

exports.default = Forget;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017

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
    key: '_createBreadCrumbs',
    value: function _createBreadCrumbs() {
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
  }, {
    key: '_mainHelp',
    value: function _mainHelp() {
      var available = [];
      [].concat(_toConsumableArray(this._dwst.commands.keys())).sort().forEach(function (c) {
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

      var commandsList = [flatList(available)];

      this._dwst.terminal.mlog([this._createBreadCrumbs(), '', {
        type: 'h1',
        text: 'DWST Guide to Galaxy'
      }, '', 'DWSTGG is here to help you get the most out of Dark WebSocket Terminal', '', {
        type: 'h2',
        text: 'Topics'
      }, '', ['- Working with ', {
        type: 'dwstgg',
        text: '#unprotected',
        section: '#unprotected'
      }, ' sockets'], ['- Running the ', {
        type: 'dwstgg',
        text: '#development',
        section: '#development'
      }, ' server'], ['- ', {
        type: 'dwstgg',
        text: '#privacy',
        section: '#privacy'
      }, ' and tracking information'], '', ['Open with ', {
        type: 'syntax',
        text: '/help #<keyword>'
      }], '', {
        type: 'h2',
        text: 'Commands'
      }, ''].concat(commandsList).concat([['Type ', {
        type: 'syntax',
        text: '/help <command>'
      }, ' for instructions'], '']), 'system');
    }
  }, {
    key: '_helpPage',
    value: function _helpPage(page) {

      var disclaimer = [{
        type: 'h2',
        text: '!!! Follow at your own risk !!!'
      }, '', 'Disabling security is generally a bad idea and you should only do it if you understand the implications.'];

      if (page === '#chrome') {
        this._dwst.terminal.mlog([this._createBreadCrumbs(page), '', {
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
        }, ' on a ws:// address'], '2. Look for a shield icon', '3. Click on the shield icon', '4. Click "Load unsafe scripts"', '5. Use connect again', '']), 'system');
        return;
      }
      if (page === '#firefox') {
        this._dwst.terminal.mlog([this._createBreadCrumbs(page), '', {
          type: 'h1',
          text: 'Insecure WebSocket Access in Firefox'
        }, '', ['Firefox lets you disable the security feature that prevents you from connecting to ', {
          type: 'dwstgg',
          text: '#unprotected',
          section: '#unprotected'
        }, ' WebSockets.'], ''].concat(disclaimer).concat(['', {
          type: 'h2',
          text: 'Instructions'
        }, '', '1. Go to about:config', '2. Search for WebSocket', '3. Set allowInsecureFromHTTPS to true', '']), 'system');
        return;
      }
      if (page === '#development') {
        var commands = ['git clone https://github.com/dwst/dwst.git', 'cd dwst', 'npm install', 'gulp dev'];
        var commandSegments = commands.map(function (c) {
          return {
            type: 'code',
            text: c
          };
        });
        this._dwst.terminal.mlog([this._createBreadCrumbs(page), '', {
          type: 'h1',
          text: 'DWST Development Server'
        }, '', 'You can run DWST development server by executing the following commands in the shell near you.', ''].concat(commandSegments).concat(['', ['This is useful if you wish to customise DWST on source code level but can also be used to access ', {
          type: 'dwstgg',
          text: '#unprotected',
          section: '#unprotected'
        }, ' WebSockets.'], '']), 'system');
        return;
      }
      if (page === '#unprotected') {
        this._dwst.terminal.mlog([this._createBreadCrumbs(page), '', {
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
        }, '.'], ''], 'system');
        return;
      }
      if (page === '#privacy') {
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
        this._dwst.terminal.mlog([this._createBreadCrumbs(page), '', {
          type: 'h1',
          text: 'Privacy and Tracking Information'
        }, '', gaSection, '', disableTracking, '', storageSection, '', futureChanges, ''], 'system');
        return;
      }

      this._dwst.terminal.log('Unkown help page: ' + page, 'error');
    }
  }, {
    key: '_commandHelp',
    value: function _commandHelp(command) {
      var plugin = this._dwst.commands.get(command);
      if (typeof plugin === 'undefined') {
        this._dwst.terminal.log('the command does not exist: ' + command, 'error');
        return;
      }
      if (typeof plugin.usage === 'undefined') {
        this._dwst.terminal.log('no help available for: ' + command, 'system');
        return;
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

      this._dwst.terminal.mlog([this._createBreadCrumbs(command), '', [{
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
      }, '']).concat(examples).concat(['']), 'system');
    }
  }, {
    key: 'run',
    value: function run() {
      var parameter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


      this._dwst.terminal.clearLog();

      if (parameter === null) {
        this._mainHelp();
        return;
      }
      var section = parameter.toLowerCase();
      if (section.charAt(0) === '#') {
        this._helpPage(section);
        return;
      }
      this._commandHelp(section);
    }
  }]);

  return Help;
}();

exports.default = Help;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2017

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
      return ['/interval 1000', '/interval 1000 /binary [random(10)]', '/interval'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'run an other command periodically';
    }
  }, {
    key: 'run',
    value: function run() {
      var _this = this;

      for (var _len = arguments.length, commandParts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        commandParts[_key - 1] = arguments[_key];
      }

      var intervalStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (intervalStr === null) {
        if (this._dwst.intervalId === null) {
          this._dwst.terminal.log('no interval to clear', 'error');
        } else {
          clearInterval(this._dwst.intervalId);
          this._dwst.terminal.log('interval cleared', 'system');
        }
        return;
      }
      var count = 0;
      var interval = _utils2.default.parseNum(intervalStr);
      var spammer = function spammer() {
        if (_this._dwst.connection === null || !_this._dwst.connection.isOpen()) {
          if (_this._dwst.intervalId !== null) {
            _this._dwst.terminal.log('interval failed, no connection', 'error');
            _this._dwst.controller.run('interval');
          }
          return;
        }
        if (commandParts.length < 1) {
          _this._dwst.controller.run('send', String(count));
          count += 1;
          return;
        }
        _this._dwst.controller.silent(commandParts.join(' '));
      };
      if (this._dwst.intervalId !== null) {
        this._dwst.terminal.log('clearing old interval', 'system');
        clearInterval(this._dwst.intervalId);
      }
      this._dwst.intervalId = setInterval(spammer, interval);
      this._dwst.terminal.log('interval set', 'system');
    }
  }]);

  return Interval;
}();

exports.default = Interval;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017

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
    key: 'run',
    value: function run() {
      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

      var upload = document.getElementById('file1');
      upload.onchange = function () {
        var file = upload.files[0];
        var ff = document.getElementById('fileframe');
        ff.innerHTML = ff.innerHTML;
        var reader = new FileReader();
        reader.onload = function (e2) {
          var buffer = e2.target.result;
          this._dwst.bins.set(variable, buffer);
          this._dwst.terminal.log('Binary file ' + file.fileName + ' (' + buffer.byteLength + 'B) loaded to "' + variable + '"', 'system');
        };
        reader.readAsArrayBuffer(file);
      };
      upload.click();
    }
  }]);

  return Loadbin;
}();

exports.default = Loadbin;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017

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
    key: 'run',
    value: function run() {
      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var encoding = arguments[1];

      var upload = document.getElementById('file1');
      upload.onchange = function () {
        var file = upload.files[0];
        var ff = document.getElementById('fileframe');
        ff.innerHTML = ff.innerHTML;
        var reader = new FileReader();
        reader.onload = function (e2) {
          var text = e2.target.result;
          this._dwst.texts.set(variable, text);
          this._dwst.terminal.log('Text file ' + file.fileName + ' (' + text.length + 'B) loaded to "' + variable + '"', 'system');
        };
        reader.readAsText(file, encoding);
      };
      upload.click();
    }
  }]);

  return Loadtext;
}();

exports.default = Loadtext;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017

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
      document.getElementById('ter1').innerHTML = '';
    }
  }]);

  return Reset;
}();

exports.default = Reset;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2017

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
      return ['/send [components...]', '/s [components...]'];
    }
  }, {
    key: 'examples',
    value: function examples() {
      return ['/send Hello\\ world!', '/send rpc( [random(5)] )', '/send [text]', '/send \\["JSON","is","cool"]', '/send [time] s\\ since\\ epoch', '/send From\\ a\\ to\\ z:\\ [range(97,122)]', '/s Available\\ now\\ with\\ 60%\\ less\\ typing!'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'send textual data';
    }
  }, {
    key: 'process',
    value: function process(instr, params, postfix) {
      var out = void 0;
      if (instr === 'default') {
        out = params[0];
      }
      if (instr === 'random') {
        var randomchar = function randomchar() {
          out = Math.floor(Math.random() * (0xffff + 1));
          out /= 2; // avoid risky characters
          var char = String.fromCharCode(out);
          return char;
        };
        var num = 16;
        if (params.length === 1) {
          num = _utils2.default.parseNum(params[0]);
        }
        var str = '';
        for (var i = 0; i < num; i++) {
          str += randomchar();
        }
        out = str;
      }
      if (instr === 'text') {
        var variable = 'default';
        if (params.length === 1) {
          variable = params[0];
        }
        out = this._dwst.texts.get(variable);
      }
      if (instr === 'time') {
        out = String(Math.round(new Date().getTime() / 1000));
      }
      if (instr === 'range') {
        var start = 32;
        var end = 126;
        if (params.length === 1) {
          end = _utils2.default.parseNum(params[0]);
        }
        if (params.length === 2) {
          start = _utils2.default.parseNum(params[0]);
          end = _utils2.default.parseNum(params[1]);
        }
        var _str = '';
        for (var _i = start; _i <= end; _i++) {
          _str += String.fromCharCode(_i);
        }
        out = _str;
      }
      return out + postfix;
    }
  }, {
    key: 'run',
    value: function run() {
      for (var _len = arguments.length, processed = Array(_len), _key = 0; _key < _len; _key++) {
        processed[_key] = arguments[_key];
      }

      var msg = processed.join('');
      if (this._dwst.connection === null || this._dwst.connection.isClosing() || this._dwst.connection.isClosed()) {
        var connectTip = ['Use ', {
          type: 'dwstgg',
          text: 'connect',
          section: 'connect'
        }, ' to form a connection and try again.'];
        this._dwst.terminal.mlog(['No connection.', 'Cannot send: ' + msg, connectTip], 'error');
        return;
      }
      this._dwst.terminal.log(msg, 'sent');
      this._dwst.connection.send(msg);
    }
  }]);

  return Send;
}();

exports.default = Send;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**

  Authors: Toni Ruottu, Finland 2010-2017

  This file is part of Dark WebSocket Terminal.

  CC0 1.0 Universal, http://creativecommons.org/publicdomain/zero/1.0/

  To the extent possible under law, Dark WebSocket Terminal developers have waived all
  copyright and related or neighboring rights to Dark WebSocket Terminal.

*/

var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
      return ['/spam 10', '/spam 6 /binary [random(10)]'];
    }
  }, {
    key: 'info',
    value: function info() {
      return 'run a command multiple times';
    }
  }, {
    key: 'run',
    value: function run(timesStr) {
      var _this = this;

      for (var _len = arguments.length, commandParts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        commandParts[_key - 1] = arguments[_key];
      }

      var times = _utils2.default.parseNum(timesStr);
      var spam = function spam(limit) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (i === limit) {
          return;
        }
        if (commandParts.length < 1) {
          _this._dwst.controller.run('send', String(i));
        } else {
          _this._dwst.controller.silent(commandParts.join(' '));
        }
        var nextspam = function nextspam() {
          spam(limit, i + 1);
        };
        if (_this._dwst.connection !== null && _this._dwst.connection.isOpen()) {
          setTimeout(nextspam, 0);
        } else {
          _this._dwst.terminal.log('spam failed, no connection', 'error');
        }
      };
      spam(times);
    }
  }]);

  return Spam;
}();

exports.default = Spam;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**

  Authors: Toni Ruottu, Finland 2010-2017

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
          _dwst$terminal,
          _ref;

      this._dwst.terminal.clearLog();

      /* eslint-disable quotes,object-property-newline */

      var SPLASH = [[
      // ".       HH.      dd .        ..  TT    ..        ..        ..        ..    TT  ..        . dd      .HH       .",
      "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                   `ggg.                                                                      ", "                                     ggg                                                                      ", "                                      gg.                                                                     ", "                                       gg                                 ggg'                                ", "                                       gg                                 gg                                  ", "                                   ,ggg g.  ggg       ggg.   .gggggg.     g                                   ", "                                 ,gg  `ggg ggg         ggg. gg      `g.  gg                                   ", "                                 gg     gg.g'           `gg gg.       `gggggg'                                ", "                                 gg     ggg'             gg. 'gggggg.  ,g                                     ", "                                 ll.     ll.     ,l.      ll       `ll l.                                     ", "                                  ll.   llll.   ,lll.   ,ll l`     ,ll ll.                                    ", "                                   `lllll' `lllll' `lllll'  `lllllll'   lll.                                  ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              "], ["                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              ", "                                   fffff                                                                      ", "                                     fff                                                                      ", "                                      fff                                                                     ", "                                       ff                                 ffff                                ", "                                       ff                                 ff                                  ", "                                   ffff ff  fff       ffff   ffffffff     f                                   ", "                                 fff  ffff fff         ffff ff      fff  ff                                   ", "                                 ff     fffff           fff fff       ffffffff                                ", "                                 ff     ffff             fff ffffffff  ff                                     ", "                                 555     555     555      55       555 55                                     ", "                                  555   55555   55555   555 55     555 555                                    ", "                                   5555555 5555555 5555555  555555555   5555                                  ", "                                                                                                              ", "                                                                                                              ", "                                                                                                              "]];
      /*
      const xmasColors = [
        "                                                                                                              ",
        "                                                                                                              ",
        "                                                                                                              ",
        "                                                                                                              ",
        "                                    xxxx                                                                      ",
        "                                     111                                                                      ",
        "                                      11x                                                                     ",
        "                                       11                                 xxxx                                ",
        "                                       11                                 11                                  ",
        "                                   xxx1 11  xxx       xxxx   xxxxxxxx     1                                   ",
        "                                 xx1  1111 111         111x x1      1xx  x1                                   ",
        "                                 11     11111           111 111       1xx11111                                ",
        "                                 11     1111             11x 11111111  11                                     ",
        "                                 222     222     222      22       222 22                                     ",
        "                                  222   22222   22222   222 22     222 222                                    ",
        "                                   2222222 2222222 2222222  222222222   2222                                  ",
        "                                                                                                              ",
        "                                                                                                              ",
        "                                                                                                              ",
      ];
      */

      /* eslint-enable quotes,object-property-newline */

      var CONNECTION_LIST_CAP = 3;
      var historySummary = this._dwst.historyManager.getSummary();
      var maybeTooManyConnectCommands = this._dwst.historyManager.getConnectCommands(CONNECTION_LIST_CAP + 1);
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
        if (_this._dwst.connection === null) {
          return [];
        }
        var connectionStatus = ['Currently ', _this._dwst.connection.verb, ' to ', {
          type: 'strong',
          text: _this._dwst.connection.url
        }];
        var maybeProtocolStatus = function () {
          var protocol = _this._dwst.connection.protocol;
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
        text: 'Dark WebSocket Terminal ' + this._dwst.VERSION
      }]];
      var beginnerInfo = [['1. Create a test connection by typing ', {
        type: 'command',
        text: '/connect ' + this._dwst.ECHO_SERVER_URL
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
        if (_this._dwst.connection !== null) {
          return [about, [''], statusSection, [''], helpReminder, [''], linkSection];
        }
        if (connectCommands.length > 0) {
          return [about, [''], historySection, [''], privacyReminder, [''], helpReminder, [''], linkSection];
        }
        return [about, [''], beginnerInfo, [''], privacyReminder, [''], helpReminder, [''], linkSection];
      }();
      (_dwst$terminal = this._dwst.terminal).gfx.apply(_dwst$terminal, SPLASH);
      this._dwst.terminal.mlog((_ref = []).concat.apply(_ref, _toConsumableArray(sections)), 'system');
    }
  }]);

  return Splash;
}();

exports.default = Splash;

/***/ }),
/* 20 */
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

  Authors: Toni Ruottu, Finland 2010-2017

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
    key: 'run',
    value: function run() {
      var variable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (variable !== null) {
        var text = this._dwst.texts.get(variable);
        if (typeof text !== 'undefined') {
          this._dwst.terminal.log(text, 'system');
          return;
        }
        var listTip = ['List available texts by typing ', {
          type: 'command',
          text: '/texts'
        }, '.'];
        this._dwst.terminal.mlog(['Text "' + variable + '" does not exist.', listTip], 'error');
      }
      var listing = [].concat(_toConsumableArray(this._dwst.texts.entries())).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            name = _ref2[0],
            text = _ref2[1];

        return '"' + name + '": <' + text.length + 'B of text data>';
      });
      var strs = ['Loaded texts:'].concat(listing);
      this._dwst.terminal.mlog(strs, 'system');
    }
  }]);

  return Texts;
}();

exports.default = Texts;

/***/ })
/******/ ]);