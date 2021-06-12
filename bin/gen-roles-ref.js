'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs__default = require('fs');
var fs__default__default = _interopDefault(fs__default);
var path = require('path');
var path__default = _interopDefault(path);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray = unwrapExports(toConsumableArray);

function unwrapExports$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule$1(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var classCallCheck = createCommonjsModule$1(function (module) {
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  module.exports = _classCallCheck;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _classCallCheck = unwrapExports$1(classCallCheck);

var createClass = createCommonjsModule$1(function (module) {
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  module.exports = _createClass;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _createClass = unwrapExports$1(createClass);

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck$1 = _classCallCheck$1;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass$1 = _createClass$1;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var _temp;

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var paramRe = new RegExp('(^|[ (!&=|+-])([A-Z_][A-Z0-9_]*)', 'g');
var safeEvalRe = /^ *(\(|[0-9]+|false|true|!)(( |\()+([0-9]+|true|false|!|&&|[|]{2}|==|!=|\+|-|%|\*|<|>|<=|>=)( |\)*))* *$/; // new RegExp('^ *(\\(|[0-9]+|false|true|!)(( |\\()+([0-9]+|true|false|!|&&|[|]{2}|==|!=|\\+|-|%|\\*|<|>)( |\\)*))* *$')

/**
* A safe-ish (TODO: developed based on a Stackexchange post; find and link?) boolean expression evaluator.
*/

var Evaluator = (_temp = /*#__PURE__*/function () {
  // declare recognized internal parameters

  /**
  * Recogrizes 'parameters' and 'zeroRes' field.
  *
  * 'parameters' maps strings to values. E.g.: parameters `{ "IS_CONTRACTOR": 1 }` would cause the condition
  * `IS_CONTRACTOR` to evaluate true.
  *
  * 'zeroRes' is an array of RegExps used to match against a condition string *after* resolving all the parameters. If a
  *    match is made, then that value is set to zero. I.e., `zeroRes` determines which parameters are default zero.
  */
  function Evaluator(settings) {
    classCallCheck$1(this, Evaluator);
    defineProperty(this, "parameters", void 0);
    defineProperty(this, "zeroRes", void 0);
    Object.assign(this, settings);
    this.parameters = this.parameters || {};
    this.zeroRes = this.zeroRes || [];
  }

  createClass$1(Evaluator, [{
    key: "evalTruth",
    value: function evalTruth(origExpression) {
      var _this = this;

      if (typeof origExpression !== 'string') {
        throw new Error("Expression must be a string. Got: '".concat(origExpression, "'."));
      }

      var expression = origExpression; // save original expression in case we need to reflect to user on error
      // replace all the parameters in the expression

      var results = expression.matchAll(paramRe);

      var _iterator = _createForOfIteratorHelper(results),
          _step;

      try {
        var _loop = function _loop() {
          result = _step.value;
          var param = result[2];
          var val = _this.parameters[param]; // look on the parameter object

          if (val === undefined) {
            // if not defined, look on process.env
            val = process.env[param];
          }

          if (val === undefined) {
            if (_this.zeroRes.some(function (re) {
              return param.match(re);
            })) {
              val = 0;
            } else {
              throw new Error("Condition parameter '".concat(param, "' is not defined. Update settings and/or check expression."));
            }
          } // 'replaceAll' not supported on node (TODO: add Babel tform); though 'replace' does replace all *if* first arg is
          // RE... so... maybe not necessary?)


          expression = expression.replace(new RegExp("(^|[^A-Z0-9_])".concat(param, "([^A-Z0-9_]|$)"), 'g'), "$1 ".concat(val, " $2"));
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var result;

          _loop();
        } // check that everything is save

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!expression.match(safeEvalRe)) {
        throw new Error("Invalid expression does not fully resolve or has unsafe code: ".concat(origExpression, " => ").concat(expression));
      } // else, let's eval it


      return Function("\"use strict\";return (".concat(expression, ") ? true : false"))(); // eslint-disable-line no-new-func
    }
  }]);
  return Evaluator;
}(), _temp);
var arrayWithHoles = createCommonjsModule$1(function (module) {
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  module.exports = _arrayWithHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(arrayWithHoles);
var iterableToArrayLimit = createCommonjsModule$1(function (module) {
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  module.exports = _iterableToArrayLimit;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(iterableToArrayLimit);
var arrayLikeToArray$1 = createCommonjsModule$1(function (module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  module.exports = _arrayLikeToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(arrayLikeToArray$1);
var unsupportedIterableToArray$1 = createCommonjsModule$1(function (module) {
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray$1(o, minLen);
  }

  module.exports = _unsupportedIterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(unsupportedIterableToArray$1);
var nonIterableRest = createCommonjsModule$1(function (module) {
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableRest;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(nonIterableRest);
var slicedToArray = createCommonjsModule$1(function (module) {
  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest();
  }

  module.exports = _slicedToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _slicedToArray = unwrapExports$1(slicedToArray);

function unwrapExports$1$1(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule$1$1(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}

var _typeof_1 = createCommonjsModule$1$1(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof = unwrapExports$1$1(_typeof_1);

var arrayLikeToArray$1$1 = createCommonjsModule$1$1(function (module) {
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  module.exports = _arrayLikeToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1$1(arrayLikeToArray$1$1);
var arrayWithoutHoles$1 = createCommonjsModule$1$1(function (module) {
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray$1$1(arr);
  }

  module.exports = _arrayWithoutHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1$1(arrayWithoutHoles$1);
var iterableToArray$1 = createCommonjsModule$1$1(function (module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  module.exports = _iterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1$1(iterableToArray$1);
var unsupportedIterableToArray$1$1 = createCommonjsModule$1$1(function (module) {
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray$1$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray$1$1(o, minLen);
  }

  module.exports = _unsupportedIterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1$1(unsupportedIterableToArray$1$1);
var nonIterableSpread$1 = createCommonjsModule$1$1(function (module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableSpread;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1$1(nonIterableSpread$1);
var toConsumableArray$1 = createCommonjsModule$1$1(function (module) {
  function _toConsumableArray(arr) {
    return arrayWithoutHoles$1(arr) || iterableToArray$1(arr) || unsupportedIterableToArray$1$1(arr) || nonIterableSpread$1();
  }

  module.exports = _toConsumableArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray$1 = unwrapExports$1$1(toConsumableArray$1);

function _createForOfIteratorHelper$1(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}

function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/**
* Package internal utility functions.
*/


var replaceRE = /\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g;
/**
* Replaces constructs like '${FOO}' with the environment value of 'FOO' (or whatever key is used). Will raise an
* exception if no value is found for a given key.
*/

var envTemplateString = function envTemplateString(path) {
  var origPath = path; // used for error messages

  var matches; // A replaced var may itself reference vars, so we keep processing until everything is resolved.

  while ((matches = _toConsumableArray$1(path.matchAll(replaceRE))).length > 0) {
    // const matches = [...path.matchAll(replaceRE)]
    matches.reverse(); // The reverse allows us to use the start and end indexes without messing up the string.

    var _iterator = _createForOfIteratorHelper$1(matches),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var matchInfo = _step.value;
        var match = matchInfo[0];
        var key = matchInfo[1];
        var value = process.env[key];
        var matchStart = matchInfo.index;

        if (value === undefined) {
          throw new Error("No such environment parameter '".concat(key, "' found in path replacement: '").concat(origPath, "'."));
        }

        path = path.substring(0, matchStart) + value + path.substring(matchStart + match.length);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return path;
};
/**
* Returns true if pathA is on pathB. I.e., if pathB is or under pathA. E.g.:
* - ('.', '.foo') => true
* - ('.foo', '.') => false
* - ('.foo', '.foo') => true
*
* Note, this function assumes the paths are valid JSON paths.
*/


var testJsonPaths = function testJsonPaths(pathA, pathB) {
  if (typeof pathA !== 'string' && !(pathA instanceof String) || typeof pathB !== 'string' && !(pathB instanceof String)) {
    throw new Error("Unexpected non-string input: '".concat(pathA, "', '").concat(pathB, "'"));
  }

  var pathABits = pathA.split('.');
  var pathBBits = pathB.split('.');

  if (pathABits.length > pathBBits.length) {
    return false;
  }

  while (pathABits[0] === '') {
    pathABits.shift();
  }

  while (pathBBits[0] === '') {
    pathBBits.shift();
  }

  if (pathABits.length > pathBBits.length) {
    return false;
  }

  while (pathABits.length > 0) {
    var aBit = pathABits.shift();
    var bBit = pathBBits.shift();

    if (bBit !== aBit) {
      return false;
    }
  }

  return true;
};

function _createForOfIteratorHelper$1$1(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$1$1(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray$1$1(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$1$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1$1(o, minLen);
}

function _arrayLikeToArray$1$1(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var FJSON_META_DATA_KEY = 'com.liquid-labs.federated-json';
var jsonRE = /\.json$/;
/**
* Reads a JSON file and processes for federated mount points to construct a composite JSON object from one or more
* files.
*/

var readFJSON = function readFJSON(filePath, options) {
  if (!filePath) {
    throw new Error("File path invalid. (".concat(filePath, ")"));
  }

  var _ref = options || {},
      rememberSource = _ref.rememberSource;

  var processedPath = envTemplateString(filePath);

  if (!fs__default.existsSync(processedPath)) {
    var msg = "No such file: '".concat(filePath, "'") + (filePath !== processedPath ? " ('".concat(processedPath, "')") : '');
    throw new Error(msg);
  }

  var dataBits = fs__default.readFileSync(processedPath);
  var data; // actually, would love 'const', but need to set inside try block and don'w want to expand scope of the try.

  try {
    data = JSON.parse(dataBits);
  } catch (e) {
    if (e instanceof SyntaxError) {
      throw new SyntaxError("".concat(e.message, " while processing ").concat(filePath));
    }
  }

  if (rememberSource) {
    setSource(data, filePath);
  }

  var _iterator = _createForOfIteratorHelper$1$1(getMountSpecs(data) || []),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var mntSpec = _step.value;

      var _processMountSpec = processMountSpec({
        mntSpec: mntSpec,
        data: data
      }),
          dataFile = _processMountSpec.dataFile,
          dataDir = _processMountSpec.dataDir,
          mountPoint = _processMountSpec.mountPoint,
          finalKey = _processMountSpec.finalKey;

      if (dataFile) {
        var subData = readFJSON(dataFile);
        mountPoint[finalKey] = subData;
      } else {
        // 'dataDir' is good because we expect processMountSpec() to raise an exception if neither specified.
        var mntObj = {};
        mountPoint[finalKey] = mntObj;
        var files = fs__default.readdirSync(dataDir, {
          withFileTypes: true
        }).filter(function (item) {
          return !item.isDirectory() && jsonRE.test(item.name);
        }).map(function (item) {
          return item.name;
        }); // note 'name' is the simple/basename, not the whole path.

        var _iterator3 = _createForOfIteratorHelper$1$1(files),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var dirFile = _step3.value;
            var mntPnt = dirFile.replace(jsonRE, '');

            var _subData = readFJSON(path.join(dataDir, dirFile));

            mntObj[mntPnt] = _subData;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper$1$1(getLinkSpecs(data) || []),
      _step2;

  try {
    var _loop = function _loop() {
      var lnkSpec = _step2.value;

      var _processLinkSpec = processLinkSpec(lnkSpec, data),
          finalRef = _processLinkSpec.finalRef,
          source = _processLinkSpec.source,
          keyName = _processLinkSpec.keyName,
          penultimateRef = _processLinkSpec.penultimateRef,
          finalKey = _processLinkSpec.finalKey;

      var getRealItem = function getRealItem(soure, keyName, key) {
        return source.find(function (candidate) {
          return candidate[keyName] === key;
        }) || function (e) {
          throw e;
        }(new Error("Cannot find link '".concat(key, "' in '").concat(lnkSpec.linkTo, "'.")));
      };

      if (Array.isArray(finalRef)) {
        // replace the contents
        var realItems = finalRef.map(function (key) {
          return getRealItem(source, keyName, key);
        });
        finalRef.splice.apply(finalRef, [0, finalRef.length].concat(_toConsumableArray$1(realItems)));
      } else if (_typeof(finalRef) === 'object') {
        for (var _i = 0, _Object$keys = Object.keys(finalRef); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          finalRef[key] = getRealItem(source, keyName, key);
        }
      } else {
        // it's a single key
        penultimateRef[finalKey] = getRealItem(source, keyName, finalRef);
      }
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return data;
};
/**
* Set's the meta source information.
*/


var setSource = function setSource(data, filePath) {
  var myMeta = ensureMyMeta(data);
  myMeta.sourceFile = filePath;
};
/**
* Writes a standard or federated JSON file by analysing the objects meta data and breaking the saved files up
* accourding to the configuration.
*/


var writeFJSON = function writeFJSON(_ref2) {
  var data = _ref2.data,
      filePath = _ref2.filePath,
      saveFrom = _ref2.saveFrom,
      jsonPathToSelf = _ref2.jsonPathToSelf;

  if (filePath === undefined) {
    var myMeta = getMyMeta(data);
    filePath = myMeta && myMeta.sourceFile;

    if (!filePath) {
      throw new Error("File was not provided and no 'meta.sourceFile' defined (or invalid).");
    }
  }

  var doSave = saveFrom === undefined || jsonPathToSelf && testJsonPaths(saveFrom, jsonPathToSelf);

  if (doSave && !filePath) {
    throw new Error('No explicit filePath provided and no source found in object meta data.');
  }

  var mountSpecs = getMountSpecs(data);

  if (mountSpecs) {
    var _iterator4 = _createForOfIteratorHelper$1$1(mountSpecs),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var mntSpec = _step4.value;

        var _processMountSpec2 = processMountSpec({
          mntSpec: mntSpec,
          data: data,
          preserveOriginal: true
        }),
            dataFile = _processMountSpec2.dataFile,
            dataDir = _processMountSpec2.dataDir,
            dataPath = _processMountSpec2.dataPath,
            mountPoint = _processMountSpec2.mountPoint,
            finalKey = _processMountSpec2.finalKey,
            newData = _processMountSpec2.newData;

        data = newData;
        var subData = mountPoint[finalKey];
        mountPoint[finalKey] = null; // What's our save scheme? Single data file, or a scan dir?

        if (dataFile) {
          writeFJSON({
            data: subData,
            filePath: dataFile,
            saveFrom: saveFrom,
            jsonPathToSelf: updatejsonPathToSelf(dataPath, jsonPathToSelf)
          });
        } else {
          // processMountSpec will raise an exception if neither dataFile nor dataDir is defined.
          // We don't bother to test what 'dataDir' is. If it exists, we won't overwrite, so the subsequent attempt to
          // write a file into it can just fail if it's not of an appropriate type.
          fs__default.existsSync(dataDir) || fs__default.mkdirSync(dataDir);

          for (var _i2 = 0, _Object$keys2 = Object.keys(subData); _i2 < _Object$keys2.length; _i2++) {
            var subKey = _Object$keys2[_i2];
            writeFJSON({
              data: subData[subKey],
              filePath: path.join(dataDir, "".concat(subKey, ".json")),
              saveFrom: saveFrom,
              jsonPathToSelf: updatejsonPathToSelf("".concat(dataPath, ".").concat(subKey), jsonPathToSelf)
            });
          }
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  if (doSave) {
    var dataString = JSON.stringify(data, null, '  ');
    var processedPath = envTemplateString(filePath);
    fs__default.writeFileSync(processedPath, dataString);
  }
};

var getMyMeta = function getMyMeta(data) {
  return data._meta && data._meta[FJSON_META_DATA_KEY];
};

var ensureMyMeta = function ensureMyMeta(data) {
  var myMeta = getMyMeta(data);

  if (!myMeta) {
    if (data._meta === undefined) {
      data._meta = {};
    }

    if (data._meta[FJSON_META_DATA_KEY] === undefined) {
      data._meta[FJSON_META_DATA_KEY] = {};
    }

    myMeta = getMyMeta(data);
  }

  return myMeta;
};
/**
* Updates (by returning) the new dynamic path given the current data path (relative to a data mount or link point) and
* previous dynamic path.
*/


var updatejsonPathToSelf = function updatejsonPathToSelf(jsonMountPath, jsonPathToSelf) {
  if (jsonMountPath !== undefined) {
    return jsonPathToSelf === undefined ? jsonMountPath : "".concat(jsonPathToSelf).concat(jsonMountPath);
  } else {
    return undefined;
  }
};
/**
* Internal function to test for and extract mount specs from the provided JSON object.
*/


var getMountSpecs = function getMountSpecs(data) {
  var _getMyMeta;

  return (_getMyMeta = getMyMeta(data)) === null || _getMyMeta === void 0 ? void 0 : _getMyMeta.mountSpecs;
};
/**
* Internal function to process a mount spec into useful components utilized by the `readFJSON` and `writeFJSON`.
*/


var processMountSpec = function processMountSpec(_ref3) {
  var mntSpec = _ref3.mntSpec,
      data = _ref3.data,
      preserveOriginal = _ref3.preserveOriginal;
  var dataPath = mntSpec.dataPath,
      dataFile = mntSpec.dataFile,
      dataDir = mntSpec.dataDir;
  dataFile && dataDir // eslint-disable-line no-unused-expressions
  && function (e) {
    throw e;
  }(new Error("Bad mount spec; cannot specify both data file (".concat(dataFile, ") and directory (").concat(dataDir, ")")));
  !dataFile && !dataDir // eslint-disable-line no-unused-expressions
  && function (e) {
    throw e;
  }(new Error('Bad mount spec; neither data file nor directory.'));
  dataFile && (dataFile = envTemplateString(dataFile));
  dataDir && (dataDir = envTemplateString(dataDir));

  var _processJSONPath = processJSONPath({
    path: dataPath,
    data: data,
    preserveOriginal: preserveOriginal
  }),
      mountPoint = _processJSONPath.penultimateRef,
      finalKey = _processJSONPath.finalKey,
      newData = _processJSONPath.newData;

  return {
    dataFile: dataFile,
    dataDir: dataDir,
    dataPath: dataPath,
    mountPoint: mountPoint,
    finalKey: finalKey,
    newData: newData
  };
};
/**
* Internal function to test for and extract link specs from the provided JSON object.
*/


var getLinkSpecs = function getLinkSpecs(data) {
  var _getMyMeta2;

  return (_getMyMeta2 = getMyMeta(data)) === null || _getMyMeta2 === void 0 ? void 0 : _getMyMeta2.linkSpecs;
};
/**
* Internal function to process a link spec into useful components utilized by the `readFJSON` and `writeFJSON`.
*/


var processLinkSpec = function processLinkSpec(lnkSpec, data) {
  var linkRefs = lnkSpec.linkRefs,
      linkTo = lnkSpec.linkTo,
      keyName = lnkSpec.linkKey;

  var _processJSONPath2 = processJSONPath({
    path: linkRefs,
    data: data
  }),
      finalRef = _processJSONPath2.finalRef,
      penultimateRef = _processJSONPath2.penultimateRef,
      finalKey = _processJSONPath2.finalKey;

  var _processJSONPath3 = processJSONPath({
    path: linkTo,
    data: data
  }),
      source = _processJSONPath3.finalRef;

  return {
    finalRef: finalRef,
    source: source,
    keyName: keyName,
    penultimateRef: penultimateRef,
    finalKey: finalKey
  };
};

var shallowCopy = function shallowCopy(input) {
  return Array.isArray(input) ? input.slice() : _typeof(input) === 'object' && input !== null ? Object.assign({}, input) : input;
};

var processJSONPath = function processJSONPath(_ref4) {
  var path = _ref4.path,
      data = _ref4.data,
      preserveOriginal = _ref4.preserveOriginal;

  if (!path) {
    throw new Error("No 'dataPath' specified for mount spec mount point.");
  }

  var pathTrail = path.split('.');
  pathTrail.shift();
  var finalKey = pathTrail.pop();
  var newData = preserveOriginal ? shallowCopy(data) : data;
  var penultimateRef = newData; // not necessarily penultimate yet, but will be...

  var _iterator5 = _createForOfIteratorHelper$1$1(pathTrail),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var key = _step5.value;

      if (preserveOriginal) {
        var result = shallowCopy(penultimateRef[key]);
        penultimateRef[key] = result;
        penultimateRef = result;
      } else {
        penultimateRef = penultimateRef[key];
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return {
    finalRef: penultimateRef[finalKey],
    penultimateRef: penultimateRef,
    finalKey: finalKey,
    newData: newData
  };
}; // aliases for 'import * as fjson; fjson.write()' style


var write = writeFJSON;
var read = readFJSON;

function _createForOfIteratorHelper$2(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray$2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}

function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
/**
* Basic methods for accessing the audit record data. Note that functionality is split up like this to make these
* functions easier to unit test.
*/

/**
* Retrieves a single audit record entry by name <audit name>/<target>.
*/


var get = function get(data, id) {
  var _data$auditRecords, _data$auditRecords$au;

  var _splitId = splitId(id),
      _splitId2 = _slicedToArray(_splitId, 2),
      auditName = _splitId2[0],
      targetId = _splitId2[1];

  return (data === null || data === void 0 ? void 0 : (_data$auditRecords = data.auditRecords) === null || _data$auditRecords === void 0 ? void 0 : (_data$auditRecords$au = _data$auditRecords[auditName]) === null || _data$auditRecords$au === void 0 ? void 0 : _data$auditRecords$au[targetId]) && toStandalone(data, auditName, targetId);
};

var list = function list(data, _ref) {
  var domain = _ref.domain,
      auditName = _ref['audit name'];

  if (data.auditRecords === undefined) {
    return [];
  }

  var domainKeys = domain === undefined ? Object.keys(data.auditRecords || {}) : [domain];
  return domainKeys.reduce(function (acc, domainName) {
    var domainRecs = data.auditRecords[domainName] || {};
    var auditNames = auditName === undefined ? Object.keys(domainRecs) : [auditName];

    var _iterator = _createForOfIteratorHelper$2(auditNames),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _auditName = _step.value;
        var auditRecs = domainRecs[_auditName] || {};

        for (var _i = 0, _Object$keys = Object.keys(auditRecs); _i < _Object$keys.length; _i++) {
          var targetId = _Object$keys[_i];
          acc.push(toStandalone(data, _auditName, targetId));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return acc;
  }, []).sort(function (a, b) {
    return a.id.localeCompare(b.id);
  });
};

var persist = function persist(data, _ref2) {
  var domain = _ref2.domain,
      domains = _ref2.domains;

  if (!domains && domain) {
    domains = [domain];
  }

  if (domains && domains.length > 0) {
    var _iterator2 = _createForOfIteratorHelper$2(domains),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        domain = _step2.value;
        write({
          data: data,
          saveFrom: ".auditRecords.".concat(domain)
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  } else {
    write({
      data: data,
      saveFrom: '.auditRecords'
    });
  }
};

var update = function update(data, auditRecord) {
  var id = auditRecord.id;

  var _splitId3 = splitId(id),
      _splitId4 = _slicedToArray(_splitId3, 2),
      auditName = _splitId4[0],
      targetId = _splitId4[1];

  var _auditName$split = auditName.split('-'),
      _auditName$split2 = _slicedToArray(_auditName$split, 1),
      domain = _auditName$split2[0];

  if (!data.auditRecords[domain]) {
    data.auditRecords[domain] = {};
  }

  if (!data.auditRecords[domain][auditName]) {
    data.auditRecords[domain][auditName] = {};
  }

  var auditRecCopy = Object.assign({}, auditRecord);
  delete auditRecCopy.id;
  delete auditRecCopy.weight;
  delete auditRecCopy.auditName;
  data.auditRecords[domain][auditName][targetId] = auditRecCopy;
}; // helper/non-exported items


var splitId = function splitId(id) {
  if (id === undefined) {
    throw new Error('Must provide id in call to get audit records.');
  }

  var _id$split = id.split(/\/(.+)/),
      _id$split2 = _slicedToArray(_id$split, 2),
      auditName = _id$split2[0],
      targetId = _id$split2[1];

  if (auditName === undefined || targetId === undefined) {
    throw new Error("Malformed audit record ID '".concat(id, "'. Should have form '<audit name>/<target ID>'."));
  }

  return [auditName, targetId];
};
/**
* Since our data is complete as is, this just makes a copy for safety's sake.
*/


var toStandalone = function toStandalone(data, auditName, targetId) {
  var _auditName$split3 = auditName.split(/-(.+)/),
      _auditName$split4 = _slicedToArray(_auditName$split3, 1),
      domain = _auditName$split4[0];

  return Object.assign({
    id: "".concat(auditName, "/").concat(targetId),
    domain: domain
  }, data.auditRecords[domain][auditName][targetId]);
};
/**
* Public API for managing third-party account records. Uses the `Accounts` library, which actually implements the
* functions. The library is split like this to make testing easier.
*/


var AuditRecordsAPI = /*#__PURE__*/function () {
  function AuditRecordsAPI(org) {
    _classCallCheck(this, AuditRecordsAPI);

    this.org = org;
    this.checkCondition = AuditRecordsAPI.checkCondition;
    this.key = 'id';
  }

  _createClass(AuditRecordsAPI, [{
    key: "get",
    value: function get$1(id) {
      return get(this.org.innerState, id);
    }
  }, {
    key: "list",
    value: function list$1(options) {
      return list(this.org.innerState, options);
    }
  }, {
    key: "persist",
    value: function persist$1(options) {
      return persist(this.org.innerState, options);
    }
  }, {
    key: "update",
    value: function update$1(auditRecord) {
      return update(this.org.innerState, auditRecord);
    }
  }]);

  return AuditRecordsAPI;
}();
/**
* Obligitory 'checkCondition' function provided by the API for processing inclusion or exclusion of Account targets in
* an audit. We do this weird 'defineProperty' thing because it effectively gives us a 'static const'
*/


var checkCondition = function checkCondition(condition, productRec) {
  var parameters = Object.assign({
    SEC_TRIVIAL: 1,
    ALWAYS: 1,
    NEVER: 0,
    NONE: 0,
    LOW: 1,
    MODERATE: 2,
    HIGH: 3,
    EXISTENTIAL: 4
  }, productRec.parameters);
  var zeroRes = [];
  var evaluator = new Evaluator({
    parameters: parameters,
    zeroRes: zeroRes
  });
  return evaluator.evalTruth(condition);
};

Object.defineProperty(AuditRecordsAPI, 'checkCondition', {
  value: checkCondition,
  writable: false,
  enumerable: true,
  configurable: false
});
var arrayWithoutHoles$1$1 = createCommonjsModule$1(function (module) {
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray$1(arr);
  }

  module.exports = _arrayWithoutHoles;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(arrayWithoutHoles$1$1);
var iterableToArray$1$1 = createCommonjsModule$1(function (module) {
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  module.exports = _iterableToArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(iterableToArray$1$1);
var nonIterableSpread$1$1 = createCommonjsModule$1(function (module) {
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  module.exports = _nonIterableSpread;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(nonIterableSpread$1$1);
var toConsumableArray$1$1 = createCommonjsModule$1(function (module) {
  function _toConsumableArray(arr) {
    return arrayWithoutHoles$1$1(arr) || iterableToArray$1$1(arr) || unsupportedIterableToArray$1(arr) || nonIterableSpread$1$1();
  }

  module.exports = _toConsumableArray;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray$1$1 = unwrapExports$1(toConsumableArray$1$1);

function _createForOfIteratorHelper$3(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}

function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var Node = /*#__PURE__*/function () {
  function Node(_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
        name = _ref2[0],
        primMngrName = _ref2[1],
        possibleMngrNames = _ref2[2];

    var implied = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Node);

    this.name = name;
    this.implied = implied;
    this.primMngrName = primMngrName;
    this.primMngr = undefined;
    this.possibleMngrNames = possibleMngrNames || [];
    if (primMngrName) this.possibleMngrNames.unshift(primMngrName);
    this.possibleMngrs = [];
    this.children = [];
  }

  _createClass(Node, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getPrimMngr",
    value: function getPrimMngr() {
      return this.primMngr;
    }
  }, {
    key: "getPossibleMngrs",
    value: function getPossibleMngrs() {
      return this.possibleMngrs;
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return this.children;
    }
  }, {
    key: "getDescendents",
    value: function getDescendents() {
      return this.children.reduce(function (desc, child) {
        return desc.concat(child.getDescendents());
      }, _toConsumableArray$1$1(this.children));
    }
  }, {
    key: "getTreeNodes",
    value: function getTreeNodes() {
      return this.children.reduce(function (desc, child) {
        return desc.concat(child.getTreeNodes());
      }, [this]);
    }
  }]);

  return Node;
}();

var OrgStructure = /*#__PURE__*/function () {
  function OrgStructure(fileName, roles) {
    var _this = this;

    _classCallCheck(this, OrgStructure);

    var nodes = JSON.parse(fs__default.readFileSync(fileName)).map(function (r) {
      return new Node(r);
    });
    this.roots = [];

    var processNode = function processNode(node) {
      if (node.primMngrName === null) {
        node.primMngr = null; // which is not undefined, but positively null

        _this.roots.push(node);
      } else {
        var primMngr = nodes.find(function (n) {
          return n.name === node.primMngrName;
        });

        if (primMngr === undefined) {
          throw new Error("Invalid org structure. Role '".concat(node.name, "' references ") + "non-existent primary manager role '".concat(node.primMngrName, "'."));
        }

        node.primMngr = primMngr; // console.error(`Adding ${node.name} as child of ${primMngr.name}`) // DEBUG

        primMngr.children.push(node);
        node.possibleMngrNames.forEach(function (mngrName) {
          var mngr = nodes.find(function (n) {
            return n.name === mngrName;
          });

          if (mngr === undefined) {
            throw new Error("Invalid org structure. Role '".concat(node.name, "' references ") + "non-existent possible manager role '".concat(mngrName, "'."));
          }

          node.possibleMngrs.push(mngr);
        });
      }

      var role = roles.get(node.name, {
        required: true,
        errMsgGen: function errMsgGen(name) {
          return "Could not find ".concat(node.implied ? 'implied ' : '', "role '").concat(name, "' while building org structure.");
        }
      });

      var _iterator = _createForOfIteratorHelper$3(role.implies || []),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = _step.value,
              impliedRoleName = _step$value.name,
              mngrProtocol = _step$value.mngrProtocol; // implied roles are handled by inserting the implied roles as managed by the super-role. When the org chart is
          // generated, these will collapse into a single entry listing multiple roles and using the super role as the
          // title.
          // TODO: this is a little messy

          var impRole = roles.get(impliedRoleName, {
            required: true,
            errMsgGen: function errMsgGen(name) {
              return "Could not find implied role '".concat(name, "' while building org structure.");
            }
          }); // console.error(`Processing implied role: ${impRole.name}...`) // DEBUG

          if (impRole.isTitular() && !nodes.find(function (n) {
            return n.name === impRole.name;
          })) {
            // only titular roles not already defined are implied into the org structure
            // console.error("I'm in!") // DEBUG
            // TODO: in theroy, I believe if the current node has no manager, then implied role's don't either.
            // Otheriwse, the primary manager is effectively one's self, in the 'super' role or the same manager as the
            // super role, depending on the manager protocol.
            // console.error("\n\nHey:\n", role, node, "\n\n")// DEBUG
            var managingRoleName = mngrProtocol === 'self' ? role.name : mngrProtocol === 'same' ? node.primMngrName : function (e) {
              throw e;
            }(new Error("Unkown (or undefined?) manager protocol '".concat(mngrProtocol, "' found while processing org structure."))); // TODO: support optional managers.

            processNode(new Node([impliedRoleName, managingRoleName, null], true));
          }
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    var _iterator2 = _createForOfIteratorHelper$3(nodes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var node = _step2.value;
        processNode(node);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var orgRoles = this.getNodes().map(function (n) {
      return n.getName();
    }); // check all org role names reference defined roles

    var undefinedRoles = orgRoles.filter(function (roleName) {
      return roles.get(roleName) === undefined;
    });

    if (undefinedRoles.length > 0) {
      throw new Error('Found undefined role reference' + "".concat(undefinedRoles.length > 1 ? 's' : '', ": ").concat(undefinedRoles.join(', ')));
    } // check for duplicate org roles


    var dupeRoles = orgRoles.filter(function (name, index) {
      return orgRoles.indexOf(name) !== index;
    });

    if (dupeRoles.length > 0) {
      throw new Error("Found non-unique role".concat(dupeRoles.length > 1 ? 's' : '', " ") + "references in org structure: ".concat(dupeRoles.join(', ')));
    }
  }

  _createClass(OrgStructure, [{
    key: "getRoots",
    value: function getRoots() {
      return _toConsumableArray$1$1(this.roots);
    }
  }, {
    key: "getNodes",
    value: function getNodes() {
      return this.roots.reduce(function (nodes, root) {
        return nodes.concat(root.getTreeNodes());
      }, []);
    }
  }, {
    key: "getNodeByRoleName",
    value: function getNodeByRoleName(name) {
      return this.getNodes().find(function (n) {
        return n.getName() === name;
      });
    }
  }]);

  return OrgStructure;
}();

var _typeof_1$1 = createCommonjsModule$1(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _typeof$1 = unwrapExports$1(_typeof_1$1); // JSONLoop is a trivial rework of https://github.com/dabeng/JSON-Loop cc9bf8d3ec9d366160


var nodes = []; // used as temp workpad

var JSONLoop = /*#__PURE__*/function () {
  function JSONLoop(obj, idPropertyName, childrenPropertyName) {
    _classCallCheck(this, JSONLoop);

    this.id = idPropertyName;
    this.children = childrenPropertyName;
    this.count = 0;
    this.countNodes(obj);
    this.total = this.count + 0;
  }

  _createClass(JSONLoop, [{
    key: "isEmpty",
    value: function isEmpty(obj) {
      for (var property in obj) {
        // eslint-disable-line guard-for-in
        return false;
      }

      return true;
    }
  }, {
    key: "countNodes",
    value: function countNodes(obj) {
      var that = this;
      this.count++;
      return function () {
        if (!obj || that.isEmpty(obj)) {
          return false;
        } else {
          if (obj[that.children]) {
            obj[that.children].forEach(function (child) {
              that.countNodes(child);
            });
          }
        }
      }();
    }
  }, {
    key: "generateClone",
    value: function generateClone(obj) {
      var target = {};

      for (var i in obj) {
        if (i !== this.children) {
          target[i] = obj[i];
        }
      }

      return target;
    }
  }, {
    key: "findNodeById",
    value: function findNodeById(obj, id, callback) {
      if (obj[this.id] === id || obj.ids.some(function (testId) {
        return testId === id;
      })) {
        this.count = this.total + 0;
        callback(null, obj);
      } else {
        if (this.count === 1) {
          this.count = this.total + 0;
          callback(new Error('the node does not exist'));
        }

        this.count--;

        if (obj[this.children]) {
          var that = this;
          obj[this.children].forEach(function (node) {
            that.findNodeById(node, id, callback);
          });
        }
      }
    }
  }, {
    key: "matchConditions",
    value: function matchConditions(obj, conditions) {
      var flag = true;
      Object.keys(conditions).forEach(function (item) {
        if (typeof conditions[item] === 'string' || typeof conditions[item] === 'number') {
          if (obj[item] !== conditions[item]) {
            flag = false;
            return false;
          }
        } else if (conditions[item] instanceof RegExp) {
          if (!conditions[item].test(obj[item])) {
            flag = false;
            return false;
          }
        } else if (_typeof$1(conditions[item]) === 'object') {
          Object.keys(conditions[item]).forEach(function (subitem) {
            switch (subitem) {
              case '>':
                {
                  if (!(obj[item] > conditions[item][subitem])) {
                    flag = false;
                    return false;
                  }

                  break;
                }

              case '<':
                {
                  if (!(obj[item] < conditions[item][subitem])) {
                    flag = false;
                    return false;
                  }

                  break;
                }

              case '>=':
                {
                  if (!(obj[item] >= conditions[item][subitem])) {
                    flag = false;
                    return false;
                  }

                  break;
                }

              case '<=':
                {
                  if (!(obj[item] <= conditions[item][subitem])) {
                    flag = false;
                    return false;
                  }

                  break;
                }

              case '!==':
                {
                  if (!(obj[item] !== conditions[item][subitem])) {
                    flag = false;
                    return false;
                  }

                  break;
                }
            }
          });

          if (!flag) {
            return false;
          }
        }
      });

      if (!flag) {
        return false;
      }

      return true;
    }
  }, {
    key: "findNodes",
    value: function findNodes(obj, conditions, callback) {
      var that = this;
      var copy = []; // ths shallow copy of nodes array

      return function (obj, conditions, callback) {
        if (that.matchConditions(obj, conditions)) {
          nodes.push(obj);

          if (that.count === 1) {
            that.count = that.total + 0;
            copy = nodes.slice(0);
            nodes = [];
            callback(null, copy);
          }

          that.count--;
        } else {
          if (that.count === 1) {
            that.count = that.total + 0;
            copy = nodes.slice(0);
            nodes = [];
            callback(null, copy);
          }

          that.count--;

          if (obj[that.children]) {
            obj[that.children].forEach(function (child) {
              that.findNodes(child, conditions, callback);
            });
          }
        }
      }(obj, conditions, callback);
    }
  }, {
    key: "findParent",
    value: function findParent(obj, node, callback, needCleanNode) {
      var that = this;
      this.findNodeById(obj, node.parent_id, function (err, parent) {
        if (err) callback(new Error("Could not find parent. ".concat(err)));else {
          if (needCleanNode) {
            callback(null, that.generateClone(parent));
          } else {
            callback(null, parent);
          }
        }
      });
    }
  }, {
    key: "findSiblings",
    value: function findSiblings(obj, node, callback) {
      var that = this;
      this.findParent(obj, node, function (err, parent) {
        if (err) {
          callback(new Error('its sibling nodes do not exist'));
        } else {
          var siblings = [];
          parent[that.children].forEach(function (item) {
            if (item[that.id] !== node[that.id]) {
              siblings.push(that.generateClone(item));
            }
          });
          callback(null, siblings);
        }
      }, false);
    }
  }, {
    key: "findAncestors",
    value: function findAncestors(obj, node, callback) {
      var that = this;

      if (node[this.id] === obj[this.id]) {
        var copy = nodes.slice(0);
        nodes = [];
        callback(null, copy);
      } else {
        this.findParent(obj, node, function (err, parent) {
          if (err) {
            callback(new Error('its ancestor nodes do not exist'));
          } else {
            nodes.push(parent);
            that.findAncestors(obj, parent, callback);
          }
        });
      }
    }
  }]);

  return JSONLoop;
}();
/**
* Basic methods for accessing the accounts data. Note that functionality is split up like this to make these functions
* easier to unit test.
*/

/**
* Retrieves a single account entry by name.
*/


var get$1 = function get(data, name) {
  var _data$thirdPartyAccou;

  return (data === null || data === void 0 ? void 0 : (_data$thirdPartyAccou = data.thirdPartyAccounts) === null || _data$thirdPartyAccou === void 0 ? void 0 : _data$thirdPartyAccou[name]) && toStandalone$1(data, name);
};

var list$1 = function list(data) {
  return Object.keys((data === null || data === void 0 ? void 0 : data.thirdPartyAccounts) || {}).sort().map(function (key) {
    return toStandalone$1(data, key);
  });
}; // helper/non-exported items

/**
* Creates a new/copy of the account data with an additional 'name' field. The name should be the key value which
* pointed to the account data.
*/


var toStandalone$1 = function toStandalone(data, name) {
  return Object.assign({}, data.thirdPartyAccounts[name], {
    name: name
  });
};
/**
* Public API for managing third-party account records. Uses the `Accounts` library, which actually implements the
* functions. The library is split like this to make testing easier.
*/


var AccountsAPI = /*#__PURE__*/function () {
  function AccountsAPI(org) {
    _classCallCheck(this, AccountsAPI);

    this.org = org;
    this.checkCondition = AccountsAPI.checkCondition;
    this.key = 'name';
  }

  _createClass(AccountsAPI, [{
    key: "get",
    value: function get(name) {
      return get$1(this.org.innerState, name);
    }
  }, {
    key: "list",
    value: function list() {
      return list$1(this.org.innerState);
    }
  }]);

  return AccountsAPI;
}();
/**
* Obligitory 'checkCondition' function provided by the API for processing inclusion or exclusion of Account targets in
* an audit. We do this weird 'defineProperty' thing because it effectively gives us a 'static const'
*/


var checkCondition$1 = function checkCondition(condition, acct) {
  var parameters = Object.assign({
    SEC_TRIVIAL: 1,
    ALWAYS: 1,
    NEVER: 0,
    NONE: 0,
    LOW: 1,
    MODERATE: 2,
    HIGH: 3,
    EXISTENTIAL: 4
  }, acct.parameters); // TODO: create a handly conversion class/lib for the sensitivity codes; SensitivityCode?

  var sensitivityCode = acct.sensitivity || 'EXISTENTIAL';

  switch (sensitivityCode) {
    case 'NONE':
      parameters.SENSITIVITY = 0;
      break;

    case 'LOW':
      parameters.SENSITIVITY = 1;
      break;

    case 'MODERATE':
      parameters.SENSITIVITY = 2;
      break;

    case 'HIGH':
      parameters.SENSITIVITY = 3;
      break;

    case 'EXISTENTIAL':
      parameters.SENSITIVITY = 4;
      break;

    default:
      throw new Error("Unknown sensitivity code: '".concat(sensitivityCode, "'."));
  } // configure the non-existent tags to 'zero' out


  var zeroRes = [/BUSINESS|NETWORKING/];
  var evaluator = new Evaluator({
    parameters: parameters,
    zeroRes: zeroRes
  });
  return evaluator.evalTruth(condition);
};

Object.defineProperty(AccountsAPI, 'checkCondition', {
  value: checkCondition$1,
  writable: false,
  enumerable: true,
  configurable: false
});
var assertThisInitialized = createCommonjsModule$1(function (module) {
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  module.exports = _assertThisInitialized;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _assertThisInitialized = unwrapExports$1(assertThisInitialized);

var setPrototypeOf = createCommonjsModule$1(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports$1(setPrototypeOf);
var inherits = createCommonjsModule$1(function (module) {
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  module.exports = _inherits;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _inherits = unwrapExports$1(inherits);

var possibleConstructorReturn = createCommonjsModule$1(function (module) {
  var _typeof = _typeof_1$1["default"];

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  module.exports = _possibleConstructorReturn;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _possibleConstructorReturn = unwrapExports$1(possibleConstructorReturn);

var getPrototypeOf = createCommonjsModule$1(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _getPrototypeOf = unwrapExports$1(getPrototypeOf);

var Role = /*#__PURE__*/function () {
  function Role(rec) {
    _classCallCheck(this, Role);

    Object.assign(this, rec);
  }

  _createClass(Role, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "isTitular",
    value: function isTitular() {
      return !!this.titular;
    }
  }, {
    key: "isDesignated",
    value: function isDesignated() {
      return !!this.designated;
    }
  }, {
    key: "isQualifiable",
    value: function isQualifiable() {
      return !!this.qualifiable;
    }
  }]);

  return Role;
}();

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var AttachedRole = /*#__PURE__*/function (_Role) {
  _inherits(AttachedRole, _Role);

  var _super = _createSuper(AttachedRole);

  function AttachedRole(baseRole, rec, manager, staffMember) {
    var _this;

    _classCallCheck(this, AttachedRole);

    _this = _super.call(this, baseRole);

    if (!baseRole.isQualifiable() && rec.qualifier !== undefined) {
      throw new Error("Attempt to qualify non-qualifiable role '".concat(baseRole.getName(), "' ") + "for staff member '".concat(staffMember.getEmail(), "'."));
    }

    Object.assign(_assertThisInitialized(_this), rec);
    _this.manager = manager;
    return _this;
  }

  _createClass(AttachedRole, [{
    key: "getManager",
    value: function getManager() {
      return this.manager;
    }
  }, {
    key: "getQualifier",
    value: function getQualifier() {
      return this.qualifier ? this.qualifier : null;
    }
  }, {
    key: "getQualifiedName",
    value: function getQualifiedName() {
      return "".concat(this.getQualifier(), " ").concat(this.getName());
    }
  }, {
    key: "isActing",
    value: function isActing() {
      return !!this.acting;
    }
  }]);

  return AttachedRole;
}(Role);

var Roles = /*#__PURE__*/function () {
  function Roles(org, rolesData) {
    _classCallCheck(this, Roles);

    this.org = org;
    this.items = rolesData.map(function (rec) {
      return new Role(rec);
    });
    this.map = this.items.reduce(function (acc, role, i) {
      if (acc[role.getName()] !== undefined) {
        throw new Error("Role with name '".concat(role.name, "' already exists at entry ").concat(i, "."));
      }

      acc[role.getName()] = role;
      return acc;
    }, {});
    this.checkCondition = checkCondition$2;
    this.key = 'name';
  } // TODO: deprecated


  _createClass(Roles, [{
    key: "getAll",
    value: function getAll() {
      return this.items.slice();
    }
  }, {
    key: "list",
    value: function list() {
      return this.items.slice();
    }
  }, {
    key: "get",
    value: function get(name, opts) {
      var _ref = opts || {},
          required = _ref.required,
          errMsgGen = _ref.errMsgGen;

      var result = this.map[name];

      if (result === undefined && required) {
        throw new Error((errMsgGen === null || errMsgGen === void 0 ? void 0 : errMsgGen(name)) || "Did not find requried role '".concat(name, "'."));
      }

      return result;
    }
  }, {
    key: "getStaffInRole",
    value: function getStaffInRole(roleName) {
      return this.org.staff.list().filter(function (s) {
        return s.roles.some(function (r) {
          return r.name === roleName;
        });
      });
    }
    /**
    * Swaps out the 'super role' name for the actual super role object.
    */

  }, {
    key: "hydrate",
    value: function hydrate() {
      var _this = this;

      this.items.forEach(function (role, i) {
        if (role.superRole !== undefined) {
          var superRole = _this.get(role.superRole);

          if (superRole === undefined) {
            throw new Error("Could not find super-role '".concat(role.superRole, "' for role '").concat(role.getName(), "' (entry ").concat(i, ")."));
          }

          role.superRole = superRole;
        }
      });
      return this;
    }
  }]);

  return Roles;
}();
/**
* Obligitory 'checkCondition' function provided by the API for processing inclusion or exclusion of Roles targets in
* an audit.
*/


var checkCondition$2 = function checkCondition(condition, role) {
  var parameters = Object.assign({
    SEC_TRIVIAL: 1,
    ALWAYS: 1,
    NEVER: 0
  }, role.parameters); // TODO: test if leaving it 'true'/'false' works.

  parameters.DESIGNATED = role.designated ? 1 : 0;
  parameters.SINGULAR = role.singular ? 1 : 0;
  var zeroRes = [];
  var evaluator = new Evaluator({
    parameters: parameters,
    zeroRes: zeroRes
  });
  return evaluator.evalTruth(condition);
};

var StaffMember = /*#__PURE__*/function () {
  function StaffMember(record) {
    _classCallCheck(this, StaffMember);

    Object.assign(this, record);
    this.attachedRolesByName = {};
    this.reportsByReportRole = {}; // roles keyed to reports role names
  }

  _createClass(StaffMember, [{
    key: "getEmail",
    value: function getEmail() {
      return this.email;
    }
  }, {
    key: "setEmail",
    value: function setEmail(v) {
      this.email = v;
    }
  }, {
    key: "getFullName",
    value: function getFullName() {
      return "".concat(this.getGivenName(), " ").concat(this.getFamilyName());
    } // TODO: i18n...

  }, {
    key: "getFamilyName",
    value: function getFamilyName() {
      return this.familyName;
    }
  }, {
    key: "setFamilyName",
    value: function setFamilyName(v) {
      this.familyName = v;
    }
  }, {
    key: "getGivenName",
    value: function getGivenName() {
      return this.givenName;
    }
  }, {
    key: "setGivenName",
    value: function setGivenName(v) {
      this.givenName = v;
    }
  }, {
    key: "getStartDate",
    value: function getStartDate() {
      return this.startDate;
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(v) {
      this.startDate = v;
    }
  }, {
    key: "getEmploymentStatus",
    value: function getEmploymentStatus() {
      return this.employmentStatus;
    }
  }, {
    key: "setEmploymentStatus",
    value: function setEmploymentStatus(v) {
      this.employmentStatus = v;
    }
  }, {
    key: "getRoleNames",
    value: function getRoleNames() {
      return this.roles.map(function (r) {
        return r.name;
      });
    }
  }, {
    key: "hasRole",
    value: function hasRole(roleName) {
      return !!this.attachedRolesByName[roleName];
    }
  }, {
    key: "getAttachedRoles",
    value: function getAttachedRoles() {
      return this.roles.slice();
    }
  }, {
    key: "getAttachedRole",
    value: function getAttachedRole(roleName) {
      return this.attachedRolesByName[roleName];
    }
  }, {
    key: "getManagers",
    value: function getManagers() {
      return this.roles.map(function (r) {
        return r.manager;
      });
    }
  }, {
    key: "getReportsByRoleName",
    value: function getReportsByRoleName(roleName) {
      return this.reportsByReportRole[roleName] || [];
    }
  }, {
    key: "getReports",
    value: function getReports() {
      var _this = this;

      return Object.values(this.reportsByReportRole).reduce(function (acc, reps) {
        return acc.concat(reps);
      }, []).filter(function (rep) {
        return rep.getEmail() !== _this.getEmail();
      });
    }
  }, {
    key: "getParameters",
    value: function getParameters() {
      return this.parameters;
    }
  }]);

  return StaffMember;
}();

function _createForOfIteratorHelper$4(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray$4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
}

function _arrayLikeToArray$4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var roleRe = new RegExp('^HAS_[A-Z_]+_ROLE$');
var staffParameters = ['USES_CENTRALIZED_ANTIVIRUS', 'USES_CENTRALIZED_FIREWALL'];
var zeroRes = staffParameters.map(function (p) {
  return new RegExp(p);
});
zeroRes.push(roleRe);

var Staff = /*#__PURE__*/function () {
  function Staff(fileName) {
    _classCallCheck(this, Staff);

    this.fileName = fileName;
    var data = JSON.parse(fs__default.readFileSync(fileName));
    this.members = data.map(function (rec) {
      return new StaffMember(rec);
    });
    this.map = this.members.reduce(function (acc, member, i) {
      if (acc[member.getEmail()] !== undefined) {
        throw new Error("Staff member with email '".concat(member.getEmail(), "' already exists at entry ").concat(i, "."));
      }

      acc[member.getEmail()] = member;
      return acc;
    }, {});
    this.checkCondition = checkCondition$3;
    this.key = 'email';
  } // TODO: depracated


  _createClass(Staff, [{
    key: "getAll",
    value: function getAll() {
      return this.members.slice();
    }
  }, {
    key: "list",
    value: function list() {
      return this.members.slice();
    }
  }, {
    key: "get",
    value: function get(email) {
      return this.map[email];
    }
  }, {
    key: "getByRoleName",
    value: function getByRoleName(roleName) {
      return this.members.filter(function (s) {
        return s.hasRole(roleName);
      });
    }
  }, {
    key: "addData",
    value: function addData(memberData) {
      this.members.push(new StaffMember(memberData));
      this.hydrate(this.org);
    }
  }, {
    key: "remove",
    value: function remove(email) {
      email = email.toLowerCase();
      var matches = this.getAll().filter(function (member) {
        return member.email === email;
      });

      if (matches.length === 0) {
        throw new Error("Could not find staff member with email ".concat(email, "."));
      } else if (matches.length > 1) {
        throw new Error("Staff database consistency error. Found multiple entires for '".concat(email, "'."));
      }

      this.members = this.members.filter(function (member) {
        return member.email !== email;
      });
    }
  }, {
    key: "write",
    value: function write() {
      fs__default.writeFileSync(this.fileName, this.toString());
    }
    /**
     * Swaps out references to roles and managers by name and email (respectively) with the actual role and manager
     * objects.
     */

  }, {
    key: "hydrate",
    value: function hydrate(org) {
      var _this = this;

      this.org = org;
      this.members.forEach(function (s) {
        s.roles = s.roles.reduce(function (roles, rec) {
          // Yes, both maps AND has side effects. Suck it!
          if (rec instanceof AttachedRole) return rec; // Verify rec references a good role. Note, we check the 'orgStructure' because there may be a role defined
          // globally that isn't in use in the org.

          var role = org.getRoles().get(rec.name, {
            required: true,
            errMsgGen: function errMsgGen(name) {
              return "Staff member '".concat(s.getEmail(), "' claims unknown role '").concat(name, "'.");
            }
          });
          roles.push(convertRoleToAttached(s, rec, role, _this.org));
          processImpliedRoles(roles, s, rec, role, _this.org);
          return roles;
        }, []); // StaffMember roles reduce
      }); // StaffMember iteration

      return this;
    }
    /**
    * Returns the JSON string of the de-hydrated data structure.
    */

  }, {
    key: "toString",
    value: function toString() {
      var flatJson = this.members.map(function (s) {
        var data = {
          email: s.getEmail(),
          familyName: s.getFamilyName(),
          givenName: s.getGivenName(),
          startDate: s.getStartDate(),
          roles: [],
          employmentStatus: s.getEmploymentStatus(),
          parameters: s.getParameters()
        };
        s.roles.forEach(function (attachedRole) {
          var roleData = {
            name: attachedRole.getName()
          };

          if (attachedRole.getManager()) {
            roleData.manager = attachedRole.getManager().getEmail();
          }

          if (attachedRole.getQualifier()) {
            roleData.qualifier = attachedRole.getQualifier();
          }

          if (attachedRole.isActing()) {
            roleData.acting = attachedRole.isActing();
          }

          data.roles.push(roleData);
        });
        return data;
      });
      return JSON.stringify(flatJson, null, '  ');
    }
  }]);

  return Staff;
}();

var convertRoleToAttached = function convertRoleToAttached(s, rec, role, org) {
  if (role.isTitular()) {
    // notice we check 'rec', not 'role'; role may be implied.
    var orgNode = org.orgStructure.getNodeByRoleName(rec.name);

    if (orgNode === undefined) {
      throw new Error("Staff member '".concat(s.getEmail(), "' claims role '").concat(rec.name, "' not used in this org."));
    } // TODO: check the prim manager from the org structure persective
    // orgNode.getPrimMngr() !== null

  } // TODO: this is only valid for titular roles, yeah? nest this if...


  var roleManager = null;

  if (rec.manager) {
    // Then replace manager ID with manager object and add ourselves to their reports
    // console.error(`converting with manager: ${rec.manager}`) // DEBUG
    roleManager = org.getStaff().get(rec.manager);

    if (roleManager === undefined) {
      throw new Error("No such manager '".concat(rec.manager, "' found while loading staff member '").concat(s.getEmail(), "'."));
    } // Add ourselves to the manager's reports


    if (roleManager.reportsByReportRole[role.name] === undefined) {
      roleManager.reportsByReportRole[role.name] = [];
    }

    roleManager.reportsByReportRole[role.name].push(s);
  }

  var attachedRole = new AttachedRole(role, rec, roleManager, s);
  s.attachedRolesByName[role.name] = attachedRole;
  return attachedRole;
};

var processImpliedRoles = function processImpliedRoles(roles, s, rec, role, org) {
  var _iterator = _createForOfIteratorHelper$4(role.implies || []),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          impliedRoleName = _step$value.name,
          mngrProtocol = _step$value.mngrProtocol;
      var impliedRole = org.getRoles().get(impliedRoleName, {
        required: true,
        errMsgGen: function errMsgGen(name) {
          return "Staff member '".concat(s.getEmail(), "' claims unknown role '").concat(name, "' (by implication).");
        }
      }); // console.error(`Processing staff implied role: ${s.getEmail()}/${impliedRoleName}`) // DEBUG

      var manager = mngrProtocol === 'self' ? s.getEmail() : mngrProtocol === 'same' ? rec.manager : function (e) {
        throw e;
      }(new Error("Unkown (or undefined?) manager protocol '".concat(mngrProtocol, "' found while processing staff.")));
      var impliedRec = {
        name: impliedRoleName,
        manager: manager
      };
      roles.push(convertRoleToAttached(s, impliedRec, impliedRole, org));
      processImpliedRoles(roles, s, impliedRec, impliedRole, org);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
/**
* Obligitory 'checkCondition' function provided by the API for processing inclusion or exclusion of Staff targets in
* an audit.
*/


var checkCondition$3 = function checkCondition(condition, member) {
  var parameters = Object.assign({
    SEC_TRIVIAL: 1,
    ALWAYS: 1,
    NEVER: 0
  }, member.parameters); // TODO: test if leaving it 'true'/'false' works.

  parameters.IS_EMPLOYEE = member.getEmploymentStatus() === 'employee' ? 1 : 0;
  parameters.IS_CONTRACTOR = member.getEmploymentStatus() === 'contractor' ? 1 : 0;
  member.getRoleNames().forEach(function (role) {
    parameters["HAS_".concat(role.toUpperCase().replace(/ /g, '_'), "_ROLE")] = 1;
  });
  var evaluator = new Evaluator({
    parameters: parameters,
    zeroRes: zeroRes
  });
  return evaluator.evalTruth(condition);
};

Staff.checkCondition = checkCondition$3;
/**
* Basic methods for accessing the vendors/product data. Note that functionality is split up like this to make these
* functions easier to unit test.
*/

/**
* Retrieves a single vendor/product entry by name.
*/

var get$2 = function get(data, name) {
  var _data$vendors;

  return (data === null || data === void 0 ? void 0 : (_data$vendors = data.vendors) === null || _data$vendors === void 0 ? void 0 : _data$vendors[name]) && toStandalone$2(data, name);
};

var list$2 = function list(data) {
  return Object.keys((data === null || data === void 0 ? void 0 : data.vendors) || {}).sort().map(function (key) {
    return toStandalone$2(data, key);
  });
}; // helper/non-exported items

/**
* Since our data is complete as is, this just makes a copy for safety's sake.
*/


var toStandalone$2 = function toStandalone(data, name) {
  return Object.assign({
    id: name
  }, data.vendors[name]);
};
/**
* Public API for managing vendor/product records. Uses the `Vendors` library, which actually implements the functions.
* The library is split like this to make testing easier.
*/


var VendorsAPI = /*#__PURE__*/function () {
  function VendorsAPI(org) {
    _classCallCheck(this, VendorsAPI);

    this.org = org;
    this.checkCondition = VendorsAPI.checkCondition;
    this.key = 'Name';
  }

  _createClass(VendorsAPI, [{
    key: "get",
    value: function get(name) {
      return get$2(this.org.innerState, name);
    }
  }, {
    key: "list",
    value: function list() {
      return list$2(this.org.innerState);
    }
  }]);

  return VendorsAPI;
}();
/**
* Obligitory 'checkCondition' function provided by the API for processing inclusion or exclusion of Account targets in
* an audit. We do this weird 'defineProperty' thing because it effectively gives us a 'static const'
*/


var checkCondition$4 = function checkCondition(condition, productRec) {
  var parameters = Object.assign({
    SEC_TRIVIAL: 1,
    ALWAYS: 1,
    NEVER: 0,
    NONE: 0,
    LOW: 1,
    MODERATE: 2,
    HIGH: 3,
    EXISTENTIAL: 4
  }, productRec.parameters); // TODO: create a handly conversion class/lib for the sensitivity codes; SensitivityCode?

  var sensitivityCode = productRec['Sensitivity approval'] || 'quarantined only';

  switch (sensitivityCode) {
    case 'top secret use':
      parameters.SENSITIVITY = 0;
      break;

    case 'secret use':
      parameters.SENSITIVITY = 1;
      break;

    case 'sensitive use':
      parameters.SENSITIVITY = 2;
      break;

    case 'general use':
      parameters.SENSITIVITY = 3;
      break;

    case 'quarantined only':
      parameters.SENSITIVITY = 4;
      break;

    default:
      throw new Error("Unknown sensitivity approval code: '".concat(sensitivityCode, "'."));
  } // configure the non-existent tags to 'zero' out
  // const zeroRes = [/BUSINESS|NETWORKING/]


  var zeroRes = [];
  var evaluator = new Evaluator({
    parameters: parameters,
    zeroRes: zeroRes
  });
  return evaluator.evalTruth(condition);
};

Object.defineProperty(VendorsAPI, 'checkCondition', {
  value: checkCondition$4,
  writable: false,
  enumerable: true,
  configurable: false
});
/* @flow */

/*::

type DotenvParseOptions = {
  debug?: boolean
}

// keys and values from src
type DotenvParseOutput = { [string]: string }

type DotenvConfigOptions = {
  path?: string, // path to .env file
  encoding?: string, // encoding of .env file
  debug?: string // turn on logging for debugging purposes
}

type DotenvConfigOutput = {
  parsed?: DotenvParseOutput,
  error?: Error
}

*/

function log(message
/*: string */
) {
  console.log("[dotenv][DEBUG] ".concat(message));
}

var NEWLINE = '\n';
var RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
var RE_NEWLINES = /\\n/g;
var NEWLINES_MATCH = /\n|\r|\r\n/; // Parses src into an Object

function parse(src
/*: string | Buffer */
, options
/*: ?DotenvParseOptions */
)
/*: DotenvParseOutput */
{
  var debug = Boolean(options && options.debug);
  var obj = {}; // convert Buffers before splitting into lines and processing

  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    var keyValueArr = line.match(RE_INI_KEY_VAL); // matched?

    if (keyValueArr != null) {
      var key = keyValueArr[1]; // default undefined or missing values to empty string

      var val = keyValueArr[2] || '';
      var end = val.length - 1;
      var isDoubleQuoted = val[0] === '"' && val[end] === '"';
      var isSingleQuoted = val[0] === "'" && val[end] === "'"; // if single or double quoted, remove quotes

      if (isSingleQuoted || isDoubleQuoted) {
        val = val.substring(1, end); // if double quoted, expand newlines

        if (isDoubleQuoted) {
          val = val.replace(RE_NEWLINES, NEWLINE);
        }
      } else {
        // remove surrounding whitespace
        val = val.trim();
      }

      obj[key] = val;
    } else if (debug) {
      log("did not match key and value when parsing line ".concat(idx + 1, ": ").concat(line));
    }
  });
  return obj;
} // Populates process.env from .env file


function config(options
/*: ?DotenvConfigOptions */
)
/*: DotenvConfigOutput */
{
  var dotenvPath = path__default.resolve(process.cwd(), '.env');
  var encoding
  /*: string */
  = 'utf8';
  var debug = false;

  if (options) {
    if (options.path != null) {
      dotenvPath = options.path;
    }

    if (options.encoding != null) {
      encoding = options.encoding;
    }

    if (options.debug != null) {
      debug = true;
    }
  }

  try {
    // specifying an encoding returns a string instead of a buffer
    var parsed = parse(fs__default__default.readFileSync(dotenvPath, {
      encoding: encoding
    }), {
      debug: debug
    });
    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key];
      } else if (debug) {
        log("\"".concat(key, "\" is already defined in `process.env` and will not be overwritten"));
      }
    });
    return {
      parsed: parsed
    };
  } catch (e) {
    return {
      error: e
    };
  }
}

var config_1 = config;
var parse_1 = parse;
var main = {
  config: config_1,
  parse: parse_1
};

var loadBashSettings = function loadBashSettings(settingsPath) {
  if (!fs__default.existsSync(settingsPath)) {
    throw new Error("Did not find expected settings file: '".concat(settingsPath, "'"));
  } // else continue


  var envResult = main.config({
    path: settingsPath
  });

  if (envResult.error) {
    throw envResult.error;
  }

  for (var _len = arguments.length, requiredParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    requiredParams[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _requiredParams = requiredParams; _i < _requiredParams.length; _i++) {
    var reqParam = _requiredParams[_i];

    if (process.env[reqParam] === undefined) {
      throw new Error("Did not find expected '".concat(reqParam, "' value in settings file: ").concat(settingsPath));
    }
  }
};

var loadOrgState = function loadOrgState(dataPath) {
  var liqSettingsPath = "".concat(process.env.HOME, "/.liq/settings.sh");
  loadBashSettings(liqSettingsPath, 'LIQ_PLAYGROUND'); // first, we handle the original bash-centric approach, centered on individual settings

  var orgSettingsPath = "".concat(dataPath, "/orgs/settings.sh"); // TODO: the 'ORG_ID' is expected to be set from the old style settings.sh; we should take this in the constructor

  loadBashSettings(orgSettingsPath, 'ORG_ID'); // the 'settings.sh' values are now availale on process.env
  // and here's the prototype new approach; the read function handles the 'exists' check

  return read("".concat(dataPath, "/orgs/").concat(process.env.ORG_ID, ".json"));
};

function _createForOfIteratorHelper$5(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = o[Symbol.iterator]();
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray$5(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray$5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen);
}

function _arrayLikeToArray$5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var Organization = /*#__PURE__*/function () {
  function Organization(dataPath, staffJsonPath) {
    _classCallCheck(this, Organization); // innerState defines:
    // * thirdPartyAccounts


    this.innerState = loadOrgState(dataPath); // TODO: Move all this to 'innerState' (for roles and staff, by loading all with the federated json used in
    // 'loadOrgState') and just use the global hydration.

    this.dataPath = dataPath;
    this.roles = new Roles(this, this.innerState.roles);
    this.roles.hydrate();
    this.orgStructure = new OrgStructure("".concat(dataPath, "/orgs/org_structure.json"), this.roles);
    this.staff = new Staff(staffJsonPath);
    this.staff.hydrate(this); // hydrate(this)

    this.accounts = new AccountsAPI(this);
    this.auditRecords = new AuditRecordsAPI(this);
    this.audits = this.innerState.audits;
    this.vendors = new VendorsAPI(this);
  } // TODO: deprecated; just use 'org.roles'


  _createClass(Organization, [{
    key: "getRoles",
    value: function getRoles() {
      return this.roles;
    } // TODO: deprecated; just use 'org.staff'

  }, {
    key: "getStaff",
    value: function getStaff() {
      return this.staff;
    }
  }, {
    key: "getSetting",
    value: function getSetting(key) {
      return process.env[key];
    }
  }, {
    key: "requireSetting",
    value: function requireSetting(key) {
      var value = this.getSetting(key);

      if (value === undefined) {
        throw new Error("No such company setting '".concat(key, "'."));
      }

      return value;
    }
  }, {
    key: "hasStaffInRole",
    value: function hasStaffInRole(email, roleName) {
      return this.getStaff().getByRoleName(roleName).some(function (s) {
        return s.getEmail() === email;
      });
    }
  }, {
    key: "getManagingRolesByManagedRoleName",
    value: function getManagingRolesByManagedRoleName(roleName) {
      return this.orgStructure.getNodeByRoleName(roleName).getPossibleMngrs();
    }
  }, {
    key: "generateOrgChartData",
    value: function generateOrgChartData() {
      var _this = this;

      var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'debang/OrgChart'; // Implementation notes:
      // The overall structure is generated per the 'google-chart' style by processing each role of each titular role of
      // each staff member. At the moment, 'google-chart' style is more of an intermediate step than a final format as it
      // does not support the full range of desired features. The resulting data format is:
      //
      //    [ '<individual email>/role', '<manager email>/role', '<role qualifier>' ]

      if (style === 'google-chart') {
        var result = []; // luckily, the google org chart doesn't care whether we specify the nodes in order or not, so it's a simple
        // transform

        Object.values(this.getStaff().getAll()).forEach(function (s) {
          s.getAttachedRoles().forEach(function (r) {
            if (r.isTitular()) {
              var myKey = "".concat(s.getEmail(), "/").concat(r.getName());
              var manager = s.getAttachedRole(r.getName()).getManager();
              if (!manager) result.push([myKey, '', r.getQualifier()]);else {
                var mngrEmail = manager.getEmail();

                var managingRoles = _this.getManagingRolesByManagedRoleName(r.getName());

                var managingRole = managingRoles.find(function (mngrRole) {
                  return _this.hasStaffInRole(mngrEmail, mngrRole.getName());
                });
                /* `${mngrEmail}/${r.getName()}` === myKey
                  ? r
                  : this.getManagingRolesByManagedRoleName(r.getName()).find(mngrRole =>
                      this.hasStaffInRole(mngrEmail, mngrRole.getName())
                    ) */

                if (!managingRole) {
                  throw new Error("Could not find manager ".concat(managingRoles.map(function (r) {
                    return "".concat(mngrEmail, "/").concat(r.name);
                  }).join('|'), " for ").concat(myKey, "."));
                }

                var managerKey = "".concat(mngrEmail, "/").concat(managingRole.getName());
                result.push([myKey, managerKey, r.getQualifier()]);
              }
            }
          });
        }); // console.error(result) // DEBUG

        return result;
      } else if (style === 'debang/OrgChart') {
        // Converts array-based/tabular '[staff, manager, qualifier] to a JSON tree, allowing for the same staff member
        // to appear at multiple nodes using conversion algorithm from debang demos: https://codepen.io/dabeng/pen/mRZpLK
        var seedData = this.generateOrgChartData('google-chart').map(function (row) {
          var _row$0$split = row[0].split(/\//),
              _row$0$split2 = _slicedToArray(_row$0$split, 2),
              email = _row$0$split2[0],
              roleName = _row$0$split2[1]; // if there's a qualifier, we create the 'effective' role name here


          var qualifier = row[2];
          var title = qualifier ? roleName.replace(/^(Senior )?/, "$1".concat(qualifier, " ")) : roleName;

          var role = _this.roles.get(roleName);

          var staffMember = _this.getStaff().get(email);

          var acting = staffMember.getAttachedRole(roleName).acting;
          return {
            id: row[0],
            ids: [row[0]],
            parent_id: row[1],
            email: email,
            name: staffMember.getFullName(),
            titles: [title],
            roles: [role],
            acting: acting
          };
        });
        var data = {};
        var childNodes = []; // build out the full tree with each titual role being it's own thing

        seedData.forEach(function (item, index) {
          if (!item.parent_id) {
            Object.assign(data, item);
          } else {
            var jsonloop = new JSONLoop(data, 'id', 'children');
            jsonloop.findNodeById(data, item.parent_id, function (err, node) {
              if (err) throw new Error("Error finding '".concat(item.parent_id, "'; ").concat(err));else {
                childNodes.push(item);

                if (node.children) {
                  node.children.push(item);
                } else {
                  node.children = [item];
                }
              }
            });
          }
        });

        var mergeNodes = function mergeNodes(target, source) {
          var _target$titles, _target$ids, _target$roles;

          (_target$titles = target.titles).push.apply(_target$titles, _toConsumableArray$1$1(source.titles));

          (_target$ids = target.ids).push.apply(_target$ids, _toConsumableArray$1$1(source.ids));

          (_target$roles = target.roles).push.apply(_target$roles, _toConsumableArray$1$1(source.roles));
        }; // collapse/merge nodes where appropriate


        childNodes.forEach(function (node) {
          var jsonloop = new JSONLoop(data, 'id', 'children');
          jsonloop.findParent(data, node, function (err, parent) {
            if (err) throw new Error("Could not find parent for '".concat(node.id, "'; is chart valid?"));

            if (parent) {
              // merge sideways
              var _iterator = _createForOfIteratorHelper$5(node.roles),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var role = _step.value;
                  /* OK, wanted to do:
                  const sibblingsRoleNamesToMerge = role.implies?.filter(impSpec =>
                      impSpec.mngrProtocol === 'same' && node.ids.indexOf(`${node.email}/${impSpec.mergeWith}`) >= 0 )
                    .map(i => i.name)
                   But eslint chokes... on the question mark? It's not clear. It talks about an undefined range.
                  Tried updating eslint and babel components 2021-03-28 with no success.
                  TODO: look into this and report bug if nothing found.
                  */

                  var sibblingsRoleNamesToMerge = role.implies && role.implies.filter(function (impSpec) {
                    return impSpec.mngrProtocol === 'same' && node.ids.indexOf("".concat(node.email, "/").concat(impSpec.mergeWith)) >= 0;
                  }).map(function (i) {
                    return i.name;
                  }); // const trimRoles = (n) => { const { roles, ...rest } = n; return rest; } // DEBUG

                  /* if (sibblingsRoleNamesToMerge) {// DEBUG
                    console.error(`Side merging to ${node.titles[0]}\n`, sibblingsRoleNamesToMerge)
                  } */

                  var _iterator2 = _createForOfIteratorHelper$5(sibblingsRoleNamesToMerge || []),
                      _step2;

                  try {
                    var _loop = function _loop() {
                      var mergeMeName = _step2.value;
                      var key = "".concat(node.email, "/").concat(mergeMeName); // console.error(`Looking for '${key}' to merge in: `, parent.children.map(trimRoles))// DEBUG

                      var mergeMeNode = parent.children.find(function (c) {
                        return c.ids.find(function (id) {
                          return id === key;
                        });
                      });

                      if (mergeMeNode) {
                        // console.error('Found: ', trimRoles(mergeMeNode)) // DEBUG
                        mergeNodes(node, mergeMeNode);
                        parent.children.splice(parent.children.findIndex(function (t) {
                          return t === mergeMeNode;
                        }), 1);
                      }
                    };

                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      _loop();
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                } // merge up

              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (node.email === parent.email) {
                // It may be the case that we have a node with multiple roles and a sub-role has reports. The sub-node
                // will be rendered in order to clarify the nature of the reports, but we hide the email which is
                // appearent in the parent node.
                node.hideName = true; // collapse staff member roles to same staff in parent role if only child or sub-node has no children.

                if (parent.children.length === 1 || node.children === undefined) {
                  mergeNodes(parent, node); // If 'node' is only child collapsing into parrent, just cut it out

                  if (parent.children.length === 1) parent.children = node.children;else {
                    // Else, just cut the child out
                    parent.children.splice(parent.children.findIndex(function (t) {
                      return t === node;
                    }), 1);
                  }
                }
              }
            }
          });
        });
        return data;
      } else throw new Error("Org chart style '".concat(style, "' is not supported."));
    }
  }]);

  return Organization;
}();

function _createForOfIteratorHelper$6(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var nameSorter = function nameSorter(name) {
  return function (a, b) {
    return a[name].toLowerCase().localeCompare(b[name].toLowerCase());
  };
};

var genDoc = function genDoc(dataPath, staffPath) {
  var org = new Organization(dataPath, staffPath);
  var companyRoles = org.orgStructure.getNodes().reduce(function (acc, node) {
    if (!node.implied) {
      acc.push(node.name);
    }
    /* else { // DEBUG
      console.error(`skipping role ${node.name}`)
    } */


    return acc;
  }, []);
  companyRoles.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  }); // console.error(companyRoles) // DEBUG

  var getRole = function getRole(roleName) {
    return org.roles.get(roleName, {
      required: true,
      errMsgGen: function errMsgGen(name) {
        return "Role '".concat(name, "' defined in organization structure is not defined.");
      }
    });
  };

  var processImpliedRoles = function processImpliedRoles(role, duties) {
    var _iterator = _createForOfIteratorHelper$6(role.implies || []),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var impName = _step.value.name;
        var impRole = getRole(impName);
        duties = duties.concat(impRole.duties || []);
        duties = processImpliedRoles(impRole, duties);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return duties;
  };

  var sb = []; // Note: we expect each line to be terminated with a '\n' when output, so the ending '\n' has the effect of adding an
  // empty line.

  sb.push('# Company Jobs Reference\n');
  sb.push('## Purpose and scope\n');
  sb.push('Here we find all Company job descriptions.\n');
  sb.push('## Job descriptions\n');

  var _iterator2 = _createForOfIteratorHelper$6(companyRoles),
      _step2;

  try {
    var _loop = function _loop() {
      var roleName = _step2.value;
      var role = getRole(roleName);
      sb.push("### ".concat(role.name, "\n"));
      sb.push("".concat(role.description, "\n"));
      var duties = role.duties || [];
      duties = processImpliedRoles(role, duties);

      if (duties) {
        var origCount = duties.length;
        duties.slice().reverse().forEach(function (duty, rI) {
          var expectI = origCount - rI - 1;
          var foundI = duties.findIndex(function (td) {
            return td.description === duty.description;
          });

          if (expectI !== foundI) {
            duties.splice(expectI, 1);
          }
        });
        sb.push('Duties:');

        var _iterator4 = _createForOfIteratorHelper$6(duties || []),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var duty = _step4.value;
            sb.push("* ".concat(duty.description));
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        sb.push('');
      }

      var staffInRole = org.roles.getStaffInRole(role.name).sort(nameSorter('familyName'));
      var hasMembers = staffInRole && staffInRole.length > 0;

      if (role.singular) {
        var staff = staffInRole[0]; // TODO: check that we don't have multiples.

        hasMembers ? sb.push("".concat(staff.familyName, ", ").concat(staff.givenName, " _").concat(staff.email, "_ is the current ").concat(role.name, "\n")) : sb.push('_*This position is currently vacant.*_\n');
      } else {
        sb.push('#### Members\n');

        if (hasMembers) {
          var _iterator5 = _createForOfIteratorHelper$6(staffInRole),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _staff = _step5.value;
              sb.push("* ".concat(_staff.familyName, ", ").concat(_staff.givenName, " _").concat(_staff.email, "_"));
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          sb.push('');
        } else {
          sb.push('_*NONE*_\n');
        }
      }
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  sb.push('## Designations\n');

  var designationsReducer = function designationsReducer(designations, role) {
    if (role.designated) {
      designations.push(role);
    }

    return designations;
  };

  var _iterator3 = _createForOfIteratorHelper$6(org.roles.list().reduce(designationsReducer, []).sort(nameSorter('name'))),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var role = _step3.value;
      sb.push("### ".concat(role.name, "\n"));
      sb.push("".concat(role.description, "\n"));
      sb.push('#### Members\n');
      var staffInRole = org.roles.getStaffInRole(role.name).sort(nameSorter('familyName'));

      if (staffInRole && staffInRole.length > 0) {
        var _iterator6 = _createForOfIteratorHelper$6(staffInRole),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var staff = _step6.value;
            sb.push("* ".concat(staff.familyName, ", ").concat(staff.givenName, " as ").concat(staff.roles[0].name, " _").concat(staff.email, "_"));
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        sb.push('');
      } else {
        sb.push('_*NONE*_\n');
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  return sb;
};

function _createForOfIteratorHelper$7(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$7(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$7(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen); }

function _arrayLikeToArray$7(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _iterator = _createForOfIteratorHelper$7(genDoc.apply(void 0, _toConsumableArray(process.argv.slice(2)))),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var line = _step.value;
    console.log(line);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuLXJvbGVzLXJlZi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aG91dEhvbGVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwiLi4vLnlhbGMvQGxpcXVpZC1sYWJzL29yZ3MtbW9kZWwvZGlzdC9pbmRleC5lcy5qcyIsIi4uL2pzL2dlbi1kb2MuanMiLCIuLi9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCIpO1xuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfbm9uSXRlcmFibGVTcHJlYWQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGFycmF5V2l0aG91dEhvbGVzID0gcmVxdWlyZShcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIik7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCIpO1xuXG52YXIgbm9uSXRlcmFibGVTcHJlYWQgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiKTtcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImltcG9ydCBmc19fZGVmYXVsdCwgeyBleGlzdHNTeW5jLCByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jLCBta2RpclN5bmMsIHdyaXRlRmlsZVN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCwgeyBqb2luIH0gZnJvbSAncGF0aCc7XG5cbmZ1bmN0aW9uIHVud3JhcEV4cG9ydHMgKHgpIHtcblx0cmV0dXJuIHggJiYgeC5fX2VzTW9kdWxlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnZGVmYXVsdCcpID8geFsnZGVmYXVsdCddIDogeDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSB1bndyYXBFeHBvcnRzKGNsYXNzQ2FsbENoZWNrKTtcblxudmFyIGNyZWF0ZUNsYXNzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gdW53cmFwRXhwb3J0cyhjcmVhdGVDbGFzcyk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayQxKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxudmFyIGNsYXNzQ2FsbENoZWNrJDEgPSBfY2xhc3NDYWxsQ2hlY2skMTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyQxKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbnZhciBjcmVhdGVDbGFzcyQxID0gX2NyZWF0ZUNsYXNzJDE7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBfZGVmaW5lUHJvcGVydHk7XG5cbnZhciBfdGVtcDtcblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxudmFyIHBhcmFtUmUgPSBuZXcgUmVnRXhwKCcoXnxbICghJj18Ky1dKShbQS1aX11bQS1aMC05X10qKScsICdnJyk7XG52YXIgc2FmZUV2YWxSZSA9IC9eICooXFwofFswLTldK3xmYWxzZXx0cnVlfCEpKCggfFxcKCkrKFswLTldK3x0cnVlfGZhbHNlfCF8JiZ8W3xdezJ9fD09fCE9fFxcK3wtfCV8XFwqfDx8Pnw8PXw+PSkoIHxcXCkqKSkqICokLzsgLy8gbmV3IFJlZ0V4cCgnXiAqKFxcXFwofFswLTldK3xmYWxzZXx0cnVlfCEpKCggfFxcXFwoKSsoWzAtOV0rfHRydWV8ZmFsc2V8IXwmJnxbfF17Mn18PT18IT18XFxcXCt8LXwlfFxcXFwqfDx8PikoIHxcXFxcKSopKSogKiQnKVxuXG4vKipcbiogQSBzYWZlLWlzaCAoVE9ETzogZGV2ZWxvcGVkIGJhc2VkIG9uIGEgU3RhY2tleGNoYW5nZSBwb3N0OyBmaW5kIGFuZCBsaW5rPykgYm9vbGVhbiBleHByZXNzaW9uIGV2YWx1YXRvci5cbiovXG5cbnZhciBFdmFsdWF0b3IgPSAoX3RlbXAgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBkZWNsYXJlIHJlY29nbml6ZWQgaW50ZXJuYWwgcGFyYW1ldGVyc1xuXG4gIC8qKlxuICAqIFJlY29ncml6ZXMgJ3BhcmFtZXRlcnMnIGFuZCAnemVyb1JlcycgZmllbGQuXG4gICpcbiAgKiAncGFyYW1ldGVycycgbWFwcyBzdHJpbmdzIHRvIHZhbHVlcy4gRS5nLjogcGFyYW1ldGVycyBgeyBcIklTX0NPTlRSQUNUT1JcIjogMSB9YCB3b3VsZCBjYXVzZSB0aGUgY29uZGl0aW9uXG4gICogYElTX0NPTlRSQUNUT1JgIHRvIGV2YWx1YXRlIHRydWUuXG4gICpcbiAgKiAnemVyb1JlcycgaXMgYW4gYXJyYXkgb2YgUmVnRXhwcyB1c2VkIHRvIG1hdGNoIGFnYWluc3QgYSBjb25kaXRpb24gc3RyaW5nICphZnRlciogcmVzb2x2aW5nIGFsbCB0aGUgcGFyYW1ldGVycy4gSWYgYVxuICAqICAgIG1hdGNoIGlzIG1hZGUsIHRoZW4gdGhhdCB2YWx1ZSBpcyBzZXQgdG8gemVyby4gSS5lLiwgYHplcm9SZXNgIGRldGVybWluZXMgd2hpY2ggcGFyYW1ldGVycyBhcmUgZGVmYXVsdCB6ZXJvLlxuICAqL1xuICBmdW5jdGlvbiBFdmFsdWF0b3Ioc2V0dGluZ3MpIHtcbiAgICBjbGFzc0NhbGxDaGVjayQxKHRoaXMsIEV2YWx1YXRvcik7XG5cbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBhcmFtZXRlcnNcIiwgdm9pZCAwKTtcblxuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiemVyb1Jlc1wiLCB2b2lkIDApO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzZXR0aW5ncyk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gdGhpcy5wYXJhbWV0ZXJzIHx8IHt9O1xuICAgIHRoaXMuemVyb1JlcyA9IHRoaXMuemVyb1JlcyB8fCBbXTtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzJDEoRXZhbHVhdG9yLCBbe1xuICAgIGtleTogXCJldmFsVHJ1dGhcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXZhbFRydXRoKG9yaWdFeHByZXNzaW9uKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICBpZiAodHlwZW9mIG9yaWdFeHByZXNzaW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHByZXNzaW9uIG11c3QgYmUgYSBzdHJpbmcuIEdvdDogJ1wiLmNvbmNhdChvcmlnRXhwcmVzc2lvbiwgXCInLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBleHByZXNzaW9uID0gb3JpZ0V4cHJlc3Npb247IC8vIHNhdmUgb3JpZ2luYWwgZXhwcmVzc2lvbiBpbiBjYXNlIHdlIG5lZWQgdG8gcmVmbGVjdCB0byB1c2VyIG9uIGVycm9yXG4gICAgICAvLyByZXBsYWNlIGFsbCB0aGUgcGFyYW1ldGVycyBpbiB0aGUgZXhwcmVzc2lvblxuXG4gICAgICB2YXIgcmVzdWx0cyA9IGV4cHJlc3Npb24ubWF0Y2hBbGwocGFyYW1SZSk7XG5cbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihyZXN1bHRzKSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICAgICAgcmVzdWx0ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgdmFyIHBhcmFtID0gcmVzdWx0WzJdO1xuICAgICAgICAgIHZhciB2YWwgPSBfdGhpcy5wYXJhbWV0ZXJzW3BhcmFtXTsgLy8gbG9vayBvbiB0aGUgcGFyYW1ldGVyIG9iamVjdFxuXG4gICAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAvLyBpZiBub3QgZGVmaW5lZCwgbG9vayBvbiBwcm9jZXNzLmVudlxuICAgICAgICAgICAgdmFsID0gcHJvY2Vzcy5lbnZbcGFyYW1dO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnplcm9SZXMuc29tZShmdW5jdGlvbiAocmUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtLm1hdGNoKHJlKTtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgIHZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb25kaXRpb24gcGFyYW1ldGVyICdcIi5jb25jYXQocGFyYW0sIFwiJyBpcyBub3QgZGVmaW5lZC4gVXBkYXRlIHNldHRpbmdzIGFuZC9vciBjaGVjayBleHByZXNzaW9uLlwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyAncmVwbGFjZUFsbCcgbm90IHN1cHBvcnRlZCBvbiBub2RlIChUT0RPOiBhZGQgQmFiZWwgdGZvcm0pOyB0aG91Z2ggJ3JlcGxhY2UnIGRvZXMgcmVwbGFjZSBhbGwgKmlmKiBmaXJzdCBhcmcgaXNcbiAgICAgICAgICAvLyBSRS4uLiBzby4uLiBtYXliZSBub3QgbmVjZXNzYXJ5PylcblxuXG4gICAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24ucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58W15BLVowLTlfXSlcIi5jb25jYXQocGFyYW0sIFwiKFteQS1aMC05X118JClcIiksICdnJyksIFwiJDEgXCIuY29uY2F0KHZhbCwgXCIgJDJcIikpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICAgIF9sb29wKCk7XG4gICAgICAgIH0gLy8gY2hlY2sgdGhhdCBldmVyeXRoaW5nIGlzIHNhdmVcblxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWV4cHJlc3Npb24ubWF0Y2goc2FmZUV2YWxSZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBleHByZXNzaW9uIGRvZXMgbm90IGZ1bGx5IHJlc29sdmUgb3IgaGFzIHVuc2FmZSBjb2RlOiBcIi5jb25jYXQob3JpZ0V4cHJlc3Npb24sIFwiID0+IFwiKS5jb25jYXQoZXhwcmVzc2lvbikpO1xuICAgICAgfSAvLyBlbHNlLCBsZXQncyBldmFsIGl0XG5cblxuICAgICAgcmV0dXJuIEZ1bmN0aW9uKFwiXFxcInVzZSBzdHJpY3RcXFwiO3JldHVybiAoXCIuY29uY2F0KGV4cHJlc3Npb24sIFwiKSA/IHRydWUgOiBmYWxzZVwiKSkoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmFsdWF0b3I7XG59KCksIF90ZW1wKTtcblxudmFyIGFycmF5V2l0aEhvbGVzID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGFycmF5V2l0aEhvbGVzKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGl0ZXJhYmxlVG9BcnJheUxpbWl0KTtcblxudmFyIGFycmF5TGlrZVRvQXJyYXkgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59KTtcblxudW53cmFwRXhwb3J0cyhhcnJheUxpa2VUb0FycmF5KTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59KTtcblxudW53cmFwRXhwb3J0cyh1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSk7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59KTtcblxudW53cmFwRXhwb3J0cyhub25JdGVyYWJsZVJlc3QpO1xuXG52YXIgc2xpY2VkVG9BcnJheSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gdW53cmFwRXhwb3J0cyhzbGljZWRUb0FycmF5KTtcblxuZnVuY3Rpb24gdW53cmFwRXhwb3J0cyQxICh4KSB7XG5cdHJldHVybiB4ICYmIHguX19lc01vZHVsZSAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoeCwgJ2RlZmF1bHQnKSA/IHhbJ2RlZmF1bHQnXSA6IHg7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlJDEoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBfdHlwZW9mXzEgPSBjcmVhdGVDb21tb25qc01vZHVsZSQxKGZ1bmN0aW9uIChtb2R1bGUpIHtcbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHVud3JhcEV4cG9ydHMkMShfdHlwZW9mXzEpO1xuXG52YXIgYXJyYXlMaWtlVG9BcnJheSQxID0gY3JlYXRlQ29tbW9uanNNb2R1bGUkMShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59KTtcblxudW53cmFwRXhwb3J0cyQxKGFycmF5TGlrZVRvQXJyYXkkMSk7XG5cbnZhciBhcnJheVdpdGhvdXRIb2xlcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlJDEoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheSQxKGFycik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aG91dEhvbGVzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSk7XG5cbnVud3JhcEV4cG9ydHMkMShhcnJheVdpdGhvdXRIb2xlcyk7XG5cbnZhciBpdGVyYWJsZVRvQXJyYXkgPSBjcmVhdGVDb21tb25qc01vZHVsZSQxKGZ1bmN0aW9uIChtb2R1bGUpIHtcbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSk7XG5cbnVud3JhcEV4cG9ydHMkMShpdGVyYWJsZVRvQXJyYXkpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlJDEoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheSQxKG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheSQxKG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSk7XG5cbnVud3JhcEV4cG9ydHMkMSh1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQxKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gY3JlYXRlQ29tbW9uanNNb2R1bGUkMShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG51bndyYXBFeHBvcnRzJDEobm9uSXRlcmFibGVTcHJlYWQpO1xuXG52YXIgdG9Db25zdW1hYmxlQXJyYXkgPSBjcmVhdGVDb21tb25qc01vZHVsZSQxKGZ1bmN0aW9uIChtb2R1bGUpIHtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkMShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvQ29uc3VtYWJsZUFycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSk7XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkgPSB1bndyYXBFeHBvcnRzJDEodG9Db25zdW1hYmxlQXJyYXkpO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQxKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoIWl0KSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQxKG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gaXQuY2FsbChvKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQxKG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkMShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDEobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQxKGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcbiogUGFja2FnZSBpbnRlcm5hbCB1dGlsaXR5IGZ1bmN0aW9ucy5cbiovXG52YXIgcmVwbGFjZVJFID0gL1xcJFxceyhbQS1aYS16X11bQS1aYS16MC05X10qKVxcfS9nO1xuLyoqXG4qIFJlcGxhY2VzIGNvbnN0cnVjdHMgbGlrZSAnJHtGT099JyB3aXRoIHRoZSBlbnZpcm9ubWVudCB2YWx1ZSBvZiAnRk9PJyAob3Igd2hhdGV2ZXIga2V5IGlzIHVzZWQpLiBXaWxsIHJhaXNlIGFuXG4qIGV4Y2VwdGlvbiBpZiBubyB2YWx1ZSBpcyBmb3VuZCBmb3IgYSBnaXZlbiBrZXkuXG4qL1xuXG52YXIgZW52VGVtcGxhdGVTdHJpbmcgPSBmdW5jdGlvbiBlbnZUZW1wbGF0ZVN0cmluZyhwYXRoKSB7XG4gIHZhciBvcmlnUGF0aCA9IHBhdGg7IC8vIHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzXG5cbiAgdmFyIG1hdGNoZXM7IC8vIEEgcmVwbGFjZWQgdmFyIG1heSBpdHNlbGYgcmVmZXJlbmNlIHZhcnMsIHNvIHdlIGtlZXAgcHJvY2Vzc2luZyB1bnRpbCBldmVyeXRoaW5nIGlzIHJlc29sdmVkLlxuXG4gIHdoaWxlICgobWF0Y2hlcyA9IF90b0NvbnN1bWFibGVBcnJheShwYXRoLm1hdGNoQWxsKHJlcGxhY2VSRSkpKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gY29uc3QgbWF0Y2hlcyA9IFsuLi5wYXRoLm1hdGNoQWxsKHJlcGxhY2VSRSldXG4gICAgbWF0Y2hlcy5yZXZlcnNlKCk7IC8vIFRoZSByZXZlcnNlIGFsbG93cyB1cyB0byB1c2UgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyB3aXRob3V0IG1lc3NpbmcgdXAgdGhlIHN0cmluZy5cblxuICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQxKG1hdGNoZXMpLFxuICAgICAgICBfc3RlcDtcblxuICAgIHRyeSB7XG4gICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICB2YXIgbWF0Y2hJbmZvID0gX3N0ZXAudmFsdWU7XG4gICAgICAgIHZhciBtYXRjaCA9IG1hdGNoSW5mb1swXTtcbiAgICAgICAgdmFyIGtleSA9IG1hdGNoSW5mb1sxXTtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvY2Vzcy5lbnZba2V5XTtcbiAgICAgICAgdmFyIG1hdGNoU3RhcnQgPSBtYXRjaEluZm8uaW5kZXg7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGVudmlyb25tZW50IHBhcmFtZXRlciAnXCIuY29uY2F0KGtleSwgXCInIGZvdW5kIGluIHBhdGggcmVwbGFjZW1lbnQ6ICdcIikuY29uY2F0KG9yaWdQYXRoLCBcIicuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhdGggPSBwYXRoLnN1YnN0cmluZygwLCBtYXRjaFN0YXJ0KSArIHZhbHVlICsgcGF0aC5zdWJzdHJpbmcobWF0Y2hTdGFydCArIG1hdGNoLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBfaXRlcmF0b3IuZigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXRoO1xufTtcbi8qKlxuKiBSZXR1cm5zIHRydWUgaWYgcGF0aEEgaXMgb24gcGF0aEIuIEkuZS4sIGlmIHBhdGhCIGlzIG9yIHVuZGVyIHBhdGhBLiBFLmcuOlxuKiAtICgnLicsICcuZm9vJykgPT4gdHJ1ZVxuKiAtICgnLmZvbycsICcuJykgPT4gZmFsc2VcbiogLSAoJy5mb28nLCAnLmZvbycpID0+IHRydWVcbipcbiogTm90ZSwgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoZSBwYXRocyBhcmUgdmFsaWQgSlNPTiBwYXRocy5cbiovXG5cblxudmFyIHRlc3RKc29uUGF0aHMgPSBmdW5jdGlvbiB0ZXN0SnNvblBhdGhzKHBhdGhBLCBwYXRoQikge1xuICBpZiAodHlwZW9mIHBhdGhBICE9PSAnc3RyaW5nJyAmJiAhKHBhdGhBIGluc3RhbmNlb2YgU3RyaW5nKSB8fCB0eXBlb2YgcGF0aEIgIT09ICdzdHJpbmcnICYmICEocGF0aEIgaW5zdGFuY2VvZiBTdHJpbmcpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBub24tc3RyaW5nIGlucHV0OiAnXCIuY29uY2F0KHBhdGhBLCBcIicsICdcIikuY29uY2F0KHBhdGhCLCBcIidcIikpO1xuICB9XG5cbiAgdmFyIHBhdGhBQml0cyA9IHBhdGhBLnNwbGl0KCcuJyk7XG4gIHZhciBwYXRoQkJpdHMgPSBwYXRoQi5zcGxpdCgnLicpO1xuXG4gIGlmIChwYXRoQUJpdHMubGVuZ3RoID4gcGF0aEJCaXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHdoaWxlIChwYXRoQUJpdHNbMF0gPT09ICcnKSB7XG4gICAgcGF0aEFCaXRzLnNoaWZ0KCk7XG4gIH1cblxuICB3aGlsZSAocGF0aEJCaXRzWzBdID09PSAnJykge1xuICAgIHBhdGhCQml0cy5zaGlmdCgpO1xuICB9XG5cbiAgaWYgKHBhdGhBQml0cy5sZW5ndGggPiBwYXRoQkJpdHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgd2hpbGUgKHBhdGhBQml0cy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIGFCaXQgPSBwYXRoQUJpdHMuc2hpZnQoKTtcbiAgICB2YXIgYkJpdCA9IHBhdGhCQml0cy5zaGlmdCgpO1xuXG4gICAgaWYgKGJCaXQgIT09IGFCaXQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDEkMShvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKCFpdCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkMSQxKG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gaXQuY2FsbChvKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQxJDEobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQxJDEobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQxJDEobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQxJDEoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG52YXIgRkpTT05fTUVUQV9EQVRBX0tFWSA9ICdjb20ubGlxdWlkLWxhYnMuZmVkZXJhdGVkLWpzb24nO1xuXG52YXIganNvblJFID0gL1xcLmpzb24kLztcbi8qKlxuKiBSZWFkcyBhIEpTT04gZmlsZSBhbmQgcHJvY2Vzc2VzIGZvciBmZWRlcmF0ZWQgbW91bnQgcG9pbnRzIHRvIGNvbnN0cnVjdCBhIGNvbXBvc2l0ZSBKU09OIG9iamVjdCBmcm9tIG9uZSBvciBtb3JlXG4qIGZpbGVzLlxuKi9cblxudmFyIHJlYWRGSlNPTiA9IGZ1bmN0aW9uIHJlYWRGSlNPTihmaWxlUGF0aCwgb3B0aW9ucykge1xuICBpZiAoIWZpbGVQYXRoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmlsZSBwYXRoIGludmFsaWQuIChcIi5jb25jYXQoZmlsZVBhdGgsIFwiKVwiKSk7XG4gIH1cblxuICB2YXIgX3JlZiA9IG9wdGlvbnMgfHwge30sXG4gICAgICByZW1lbWJlclNvdXJjZSA9IF9yZWYucmVtZW1iZXJTb3VyY2U7XG5cbiAgdmFyIHByb2Nlc3NlZFBhdGggPSBlbnZUZW1wbGF0ZVN0cmluZyhmaWxlUGF0aCk7XG5cbiAgaWYgKCFleGlzdHNTeW5jKHByb2Nlc3NlZFBhdGgpKSB7XG4gICAgdmFyIG1zZyA9IFwiTm8gc3VjaCBmaWxlOiAnXCIuY29uY2F0KGZpbGVQYXRoLCBcIidcIikgKyAoZmlsZVBhdGggIT09IHByb2Nlc3NlZFBhdGggPyBcIiAoJ1wiLmNvbmNhdChwcm9jZXNzZWRQYXRoLCBcIicpXCIpIDogJycpO1xuICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICB9XG5cbiAgdmFyIGRhdGFCaXRzID0gcmVhZEZpbGVTeW5jKHByb2Nlc3NlZFBhdGgpO1xuICB2YXIgZGF0YTsgLy8gYWN0dWFsbHksIHdvdWxkIGxvdmUgJ2NvbnN0JywgYnV0IG5lZWQgdG8gc2V0IGluc2lkZSB0cnkgYmxvY2sgYW5kIGRvbid3IHdhbnQgdG8gZXhwYW5kIHNjb3BlIG9mIHRoZSB0cnkuXG5cbiAgdHJ5IHtcbiAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhQml0cyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBpZiAoZSBpbnN0YW5jZW9mIFN5bnRheEVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJcIi5jb25jYXQoZS5tZXNzYWdlLCBcIiB3aGlsZSBwcm9jZXNzaW5nIFwiKS5jb25jYXQoZmlsZVBhdGgpKTtcbiAgICB9XG4gIH1cblxuICBpZiAocmVtZW1iZXJTb3VyY2UpIHtcbiAgICBzZXRTb3VyY2UoZGF0YSwgZmlsZVBhdGgpO1xuICB9XG5cbiAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDEkMShnZXRNb3VudFNwZWNzKGRhdGEpIHx8IFtdKSxcbiAgICAgIF9zdGVwO1xuXG4gIHRyeSB7XG4gICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgIHZhciBtbnRTcGVjID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHZhciBfcHJvY2Vzc01vdW50U3BlYyA9IHByb2Nlc3NNb3VudFNwZWMoe1xuICAgICAgICBtbnRTcGVjOiBtbnRTcGVjLFxuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9KSxcbiAgICAgICAgICBkYXRhRmlsZSA9IF9wcm9jZXNzTW91bnRTcGVjLmRhdGFGaWxlLFxuICAgICAgICAgIGRhdGFEaXIgPSBfcHJvY2Vzc01vdW50U3BlYy5kYXRhRGlyLFxuICAgICAgICAgIG1vdW50UG9pbnQgPSBfcHJvY2Vzc01vdW50U3BlYy5tb3VudFBvaW50LFxuICAgICAgICAgIGZpbmFsS2V5ID0gX3Byb2Nlc3NNb3VudFNwZWMuZmluYWxLZXk7XG5cbiAgICAgIGlmIChkYXRhRmlsZSkge1xuICAgICAgICB2YXIgc3ViRGF0YSA9IHJlYWRGSlNPTihkYXRhRmlsZSk7XG4gICAgICAgIG1vdW50UG9pbnRbZmluYWxLZXldID0gc3ViRGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICdkYXRhRGlyJyBpcyBnb29kIGJlY2F1c2Ugd2UgZXhwZWN0IHByb2Nlc3NNb3VudFNwZWMoKSB0byByYWlzZSBhbiBleGNlcHRpb24gaWYgbmVpdGhlciBzcGVjaWZpZWQuXG4gICAgICAgIHZhciBtbnRPYmogPSB7fTtcbiAgICAgICAgbW91bnRQb2ludFtmaW5hbEtleV0gPSBtbnRPYmo7XG4gICAgICAgIHZhciBmaWxlcyA9IHJlYWRkaXJTeW5jKGRhdGFEaXIsIHtcbiAgICAgICAgICB3aXRoRmlsZVR5cGVzOiB0cnVlXG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiAhaXRlbS5pc0RpcmVjdG9yeSgpICYmIGpzb25SRS50ZXN0KGl0ZW0ubmFtZSk7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtLm5hbWU7XG4gICAgICAgIH0pOyAvLyBub3RlICduYW1lJyBpcyB0aGUgc2ltcGxlL2Jhc2VuYW1lLCBub3QgdGhlIHdob2xlIHBhdGguXG5cbiAgICAgICAgdmFyIF9pdGVyYXRvcjMgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQxJDEoZmlsZXMpLFxuICAgICAgICAgICAgX3N0ZXAzO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZm9yIChfaXRlcmF0b3IzLnMoKTsgIShfc3RlcDMgPSBfaXRlcmF0b3IzLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICAgIHZhciBkaXJGaWxlID0gX3N0ZXAzLnZhbHVlO1xuICAgICAgICAgICAgdmFyIG1udFBudCA9IGRpckZpbGUucmVwbGFjZShqc29uUkUsICcnKTtcblxuICAgICAgICAgICAgdmFyIF9zdWJEYXRhID0gcmVhZEZKU09OKGpvaW4oZGF0YURpciwgZGlyRmlsZSkpO1xuXG4gICAgICAgICAgICBtbnRPYmpbbW50UG50XSA9IF9zdWJEYXRhO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMy5lKGVycik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgX2l0ZXJhdG9yMy5mKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9pdGVyYXRvci5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yLmYoKTtcbiAgfVxuXG4gIHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkMSQxKGdldExpbmtTcGVjcyhkYXRhKSB8fCBbXSksXG4gICAgICBfc3RlcDI7XG5cbiAgdHJ5IHtcbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgIHZhciBsbmtTcGVjID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICB2YXIgX3Byb2Nlc3NMaW5rU3BlYyA9IHByb2Nlc3NMaW5rU3BlYyhsbmtTcGVjLCBkYXRhKSxcbiAgICAgICAgICBmaW5hbFJlZiA9IF9wcm9jZXNzTGlua1NwZWMuZmluYWxSZWYsXG4gICAgICAgICAgc291cmNlID0gX3Byb2Nlc3NMaW5rU3BlYy5zb3VyY2UsXG4gICAgICAgICAga2V5TmFtZSA9IF9wcm9jZXNzTGlua1NwZWMua2V5TmFtZSxcbiAgICAgICAgICBwZW51bHRpbWF0ZVJlZiA9IF9wcm9jZXNzTGlua1NwZWMucGVudWx0aW1hdGVSZWYsXG4gICAgICAgICAgZmluYWxLZXkgPSBfcHJvY2Vzc0xpbmtTcGVjLmZpbmFsS2V5O1xuXG4gICAgICB2YXIgZ2V0UmVhbEl0ZW0gPSBmdW5jdGlvbiBnZXRSZWFsSXRlbShzb3VyZSwga2V5TmFtZSwga2V5KSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UuZmluZChmdW5jdGlvbiAoY2FuZGlkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZVtrZXlOYW1lXSA9PT0ga2V5O1xuICAgICAgICB9KSB8fCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH0obmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbGluayAnXCIuY29uY2F0KGtleSwgXCInIGluICdcIikuY29uY2F0KGxua1NwZWMubGlua1RvLCBcIicuXCIpKSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShmaW5hbFJlZikpIHtcbiAgICAgICAgLy8gcmVwbGFjZSB0aGUgY29udGVudHNcbiAgICAgICAgdmFyIHJlYWxJdGVtcyA9IGZpbmFsUmVmLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlYWxJdGVtKHNvdXJjZSwga2V5TmFtZSwga2V5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZpbmFsUmVmLnNwbGljZS5hcHBseShmaW5hbFJlZiwgWzAsIGZpbmFsUmVmLmxlbmd0aF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShyZWFsSXRlbXMpKSk7XG4gICAgICB9IGVsc2UgaWYgKF90eXBlb2YoZmluYWxSZWYpID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9PYmplY3Qka2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVmKTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgdmFyIGtleSA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgICAgICAgZmluYWxSZWZba2V5XSA9IGdldFJlYWxJdGVtKHNvdXJjZSwga2V5TmFtZSwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gaXQncyBhIHNpbmdsZSBrZXlcbiAgICAgICAgcGVudWx0aW1hdGVSZWZbZmluYWxLZXldID0gZ2V0UmVhbEl0ZW0oc291cmNlLCBrZXlOYW1lLCBmaW5hbFJlZik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAoX2l0ZXJhdG9yMi5zKCk7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMi5uKCkpLmRvbmU7KSB7XG4gICAgICBfbG9vcCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yMi5mKCk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn07XG4vKipcbiogU2V0J3MgdGhlIG1ldGEgc291cmNlIGluZm9ybWF0aW9uLlxuKi9cblxuXG52YXIgc2V0U291cmNlID0gZnVuY3Rpb24gc2V0U291cmNlKGRhdGEsIGZpbGVQYXRoKSB7XG4gIHZhciBteU1ldGEgPSBlbnN1cmVNeU1ldGEoZGF0YSk7XG4gIG15TWV0YS5zb3VyY2VGaWxlID0gZmlsZVBhdGg7XG59O1xuLyoqXG4qIFdyaXRlcyBhIHN0YW5kYXJkIG9yIGZlZGVyYXRlZCBKU09OIGZpbGUgYnkgYW5hbHlzaW5nIHRoZSBvYmplY3RzIG1ldGEgZGF0YSBhbmQgYnJlYWtpbmcgdGhlIHNhdmVkIGZpbGVzIHVwXG4qIGFjY291cmRpbmcgdG8gdGhlIGNvbmZpZ3VyYXRpb24uXG4qL1xuXG5cbnZhciB3cml0ZUZKU09OID0gZnVuY3Rpb24gd3JpdGVGSlNPTihfcmVmMikge1xuICB2YXIgZGF0YSA9IF9yZWYyLmRhdGEsXG4gICAgICBmaWxlUGF0aCA9IF9yZWYyLmZpbGVQYXRoLFxuICAgICAgc2F2ZUZyb20gPSBfcmVmMi5zYXZlRnJvbSxcbiAgICAgIGpzb25QYXRoVG9TZWxmID0gX3JlZjIuanNvblBhdGhUb1NlbGY7XG5cbiAgaWYgKGZpbGVQYXRoID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbXlNZXRhID0gZ2V0TXlNZXRhKGRhdGEpO1xuICAgIGZpbGVQYXRoID0gbXlNZXRhICYmIG15TWV0YS5zb3VyY2VGaWxlO1xuXG4gICAgaWYgKCFmaWxlUGF0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmlsZSB3YXMgbm90IHByb3ZpZGVkIGFuZCBubyAnbWV0YS5zb3VyY2VGaWxlJyBkZWZpbmVkIChvciBpbnZhbGlkKS5cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRvU2F2ZSA9IHNhdmVGcm9tID09PSB1bmRlZmluZWQgfHwganNvblBhdGhUb1NlbGYgJiYgdGVzdEpzb25QYXRocyhzYXZlRnJvbSwganNvblBhdGhUb1NlbGYpO1xuXG4gIGlmIChkb1NhdmUgJiYgIWZpbGVQYXRoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBleHBsaWNpdCBmaWxlUGF0aCBwcm92aWRlZCBhbmQgbm8gc291cmNlIGZvdW5kIGluIG9iamVjdCBtZXRhIGRhdGEuJyk7XG4gIH1cblxuICB2YXIgbW91bnRTcGVjcyA9IGdldE1vdW50U3BlY3MoZGF0YSk7XG5cbiAgaWYgKG1vdW50U3BlY3MpIHtcbiAgICB2YXIgX2l0ZXJhdG9yNCA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDEkMShtb3VudFNwZWNzKSxcbiAgICAgICAgX3N0ZXA0O1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoX2l0ZXJhdG9yNC5zKCk7ICEoX3N0ZXA0ID0gX2l0ZXJhdG9yNC5uKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBtbnRTcGVjID0gX3N0ZXA0LnZhbHVlO1xuXG4gICAgICAgIHZhciBfcHJvY2Vzc01vdW50U3BlYzIgPSBwcm9jZXNzTW91bnRTcGVjKHtcbiAgICAgICAgICBtbnRTcGVjOiBtbnRTcGVjLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgcHJlc2VydmVPcmlnaW5hbDogdHJ1ZVxuICAgICAgICB9KSxcbiAgICAgICAgICAgIGRhdGFGaWxlID0gX3Byb2Nlc3NNb3VudFNwZWMyLmRhdGFGaWxlLFxuICAgICAgICAgICAgZGF0YURpciA9IF9wcm9jZXNzTW91bnRTcGVjMi5kYXRhRGlyLFxuICAgICAgICAgICAgZGF0YVBhdGggPSBfcHJvY2Vzc01vdW50U3BlYzIuZGF0YVBhdGgsXG4gICAgICAgICAgICBtb3VudFBvaW50ID0gX3Byb2Nlc3NNb3VudFNwZWMyLm1vdW50UG9pbnQsXG4gICAgICAgICAgICBmaW5hbEtleSA9IF9wcm9jZXNzTW91bnRTcGVjMi5maW5hbEtleSxcbiAgICAgICAgICAgIG5ld0RhdGEgPSBfcHJvY2Vzc01vdW50U3BlYzIubmV3RGF0YTtcblxuICAgICAgICBkYXRhID0gbmV3RGF0YTtcbiAgICAgICAgdmFyIHN1YkRhdGEgPSBtb3VudFBvaW50W2ZpbmFsS2V5XTtcbiAgICAgICAgbW91bnRQb2ludFtmaW5hbEtleV0gPSBudWxsOyAvLyBXaGF0J3Mgb3VyIHNhdmUgc2NoZW1lPyBTaW5nbGUgZGF0YSBmaWxlLCBvciBhIHNjYW4gZGlyP1xuXG4gICAgICAgIGlmIChkYXRhRmlsZSkge1xuICAgICAgICAgIHdyaXRlRkpTT04oe1xuICAgICAgICAgICAgZGF0YTogc3ViRGF0YSxcbiAgICAgICAgICAgIGZpbGVQYXRoOiBkYXRhRmlsZSxcbiAgICAgICAgICAgIHNhdmVGcm9tOiBzYXZlRnJvbSxcbiAgICAgICAgICAgIGpzb25QYXRoVG9TZWxmOiB1cGRhdGVqc29uUGF0aFRvU2VsZihkYXRhUGF0aCwganNvblBhdGhUb1NlbGYpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcHJvY2Vzc01vdW50U3BlYyB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbiBpZiBuZWl0aGVyIGRhdGFGaWxlIG5vciBkYXRhRGlyIGlzIGRlZmluZWQuXG4gICAgICAgICAgLy8gV2UgZG9uJ3QgYm90aGVyIHRvIHRlc3Qgd2hhdCAnZGF0YURpcicgaXMuIElmIGl0IGV4aXN0cywgd2Ugd29uJ3Qgb3ZlcndyaXRlLCBzbyB0aGUgc3Vic2VxdWVudCBhdHRlbXB0IHRvXG4gICAgICAgICAgLy8gd3JpdGUgYSBmaWxlIGludG8gaXQgY2FuIGp1c3QgZmFpbCBpZiBpdCdzIG5vdCBvZiBhbiBhcHByb3ByaWF0ZSB0eXBlLlxuICAgICAgICAgIGV4aXN0c1N5bmMoZGF0YURpcikgfHwgbWtkaXJTeW5jKGRhdGFEaXIpO1xuXG4gICAgICAgICAgZm9yICh2YXIgX2kyID0gMCwgX09iamVjdCRrZXlzMiA9IE9iamVjdC5rZXlzKHN1YkRhdGEpOyBfaTIgPCBfT2JqZWN0JGtleXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgICAgIHZhciBzdWJLZXkgPSBfT2JqZWN0JGtleXMyW19pMl07XG4gICAgICAgICAgICB3cml0ZUZKU09OKHtcbiAgICAgICAgICAgICAgZGF0YTogc3ViRGF0YVtzdWJLZXldLFxuICAgICAgICAgICAgICBmaWxlUGF0aDogam9pbihkYXRhRGlyLCBcIlwiLmNvbmNhdChzdWJLZXksIFwiLmpzb25cIikpLFxuICAgICAgICAgICAgICBzYXZlRnJvbTogc2F2ZUZyb20sXG4gICAgICAgICAgICAgIGpzb25QYXRoVG9TZWxmOiB1cGRhdGVqc29uUGF0aFRvU2VsZihcIlwiLmNvbmNhdChkYXRhUGF0aCwgXCIuXCIpLmNvbmNhdChzdWJLZXkpLCBqc29uUGF0aFRvU2VsZilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yNC5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvcjQuZigpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkb1NhdmUpIHtcbiAgICB2YXIgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsICcgICcpO1xuICAgIHZhciBwcm9jZXNzZWRQYXRoID0gZW52VGVtcGxhdGVTdHJpbmcoZmlsZVBhdGgpO1xuICAgIHdyaXRlRmlsZVN5bmMocHJvY2Vzc2VkUGF0aCwgZGF0YVN0cmluZyk7XG4gIH1cbn07XG5cbnZhciBnZXRNeU1ldGEgPSBmdW5jdGlvbiBnZXRNeU1ldGEoZGF0YSkge1xuICByZXR1cm4gZGF0YS5fbWV0YSAmJiBkYXRhLl9tZXRhW0ZKU09OX01FVEFfREFUQV9LRVldO1xufTtcblxudmFyIGVuc3VyZU15TWV0YSA9IGZ1bmN0aW9uIGVuc3VyZU15TWV0YShkYXRhKSB7XG4gIHZhciBteU1ldGEgPSBnZXRNeU1ldGEoZGF0YSk7XG5cbiAgaWYgKCFteU1ldGEpIHtcbiAgICBpZiAoZGF0YS5fbWV0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBkYXRhLl9tZXRhID0ge307XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuX21ldGFbRkpTT05fTUVUQV9EQVRBX0tFWV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGF0YS5fbWV0YVtGSlNPTl9NRVRBX0RBVEFfS0VZXSA9IHt9O1xuICAgIH1cblxuICAgIG15TWV0YSA9IGdldE15TWV0YShkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBteU1ldGE7XG59O1xuLyoqXG4qIFVwZGF0ZXMgKGJ5IHJldHVybmluZykgdGhlIG5ldyBkeW5hbWljIHBhdGggZ2l2ZW4gdGhlIGN1cnJlbnQgZGF0YSBwYXRoIChyZWxhdGl2ZSB0byBhIGRhdGEgbW91bnQgb3IgbGluayBwb2ludCkgYW5kXG4qIHByZXZpb3VzIGR5bmFtaWMgcGF0aC5cbiovXG5cblxudmFyIHVwZGF0ZWpzb25QYXRoVG9TZWxmID0gZnVuY3Rpb24gdXBkYXRlanNvblBhdGhUb1NlbGYoanNvbk1vdW50UGF0aCwganNvblBhdGhUb1NlbGYpIHtcbiAgaWYgKGpzb25Nb3VudFBhdGggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBqc29uUGF0aFRvU2VsZiA9PT0gdW5kZWZpbmVkID8ganNvbk1vdW50UGF0aCA6IFwiXCIuY29uY2F0KGpzb25QYXRoVG9TZWxmKS5jb25jYXQoanNvbk1vdW50UGF0aCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufTtcbi8qKlxuKiBJbnRlcm5hbCBmdW5jdGlvbiB0byB0ZXN0IGZvciBhbmQgZXh0cmFjdCBtb3VudCBzcGVjcyBmcm9tIHRoZSBwcm92aWRlZCBKU09OIG9iamVjdC5cbiovXG5cblxudmFyIGdldE1vdW50U3BlY3MgPSBmdW5jdGlvbiBnZXRNb3VudFNwZWNzKGRhdGEpIHtcbiAgdmFyIF9nZXRNeU1ldGE7XG5cbiAgcmV0dXJuIChfZ2V0TXlNZXRhID0gZ2V0TXlNZXRhKGRhdGEpKSA9PT0gbnVsbCB8fCBfZ2V0TXlNZXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZ2V0TXlNZXRhLm1vdW50U3BlY3M7XG59O1xuLyoqXG4qIEludGVybmFsIGZ1bmN0aW9uIHRvIHByb2Nlc3MgYSBtb3VudCBzcGVjIGludG8gdXNlZnVsIGNvbXBvbmVudHMgdXRpbGl6ZWQgYnkgdGhlIGByZWFkRkpTT05gIGFuZCBgd3JpdGVGSlNPTmAuXG4qL1xuXG5cbnZhciBwcm9jZXNzTW91bnRTcGVjID0gZnVuY3Rpb24gcHJvY2Vzc01vdW50U3BlYyhfcmVmMykge1xuICB2YXIgbW50U3BlYyA9IF9yZWYzLm1udFNwZWMsXG4gICAgICBkYXRhID0gX3JlZjMuZGF0YSxcbiAgICAgIHByZXNlcnZlT3JpZ2luYWwgPSBfcmVmMy5wcmVzZXJ2ZU9yaWdpbmFsO1xuICB2YXIgZGF0YVBhdGggPSBtbnRTcGVjLmRhdGFQYXRoLFxuICAgICAgZGF0YUZpbGUgPSBtbnRTcGVjLmRhdGFGaWxlLFxuICAgICAgZGF0YURpciA9IG1udFNwZWMuZGF0YURpcjtcbiAgZGF0YUZpbGUgJiYgZGF0YURpciAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAmJiBmdW5jdGlvbiAoZSkge1xuICAgIHRocm93IGU7XG4gIH0obmV3IEVycm9yKFwiQmFkIG1vdW50IHNwZWM7IGNhbm5vdCBzcGVjaWZ5IGJvdGggZGF0YSBmaWxlIChcIi5jb25jYXQoZGF0YUZpbGUsIFwiKSBhbmQgZGlyZWN0b3J5IChcIikuY29uY2F0KGRhdGFEaXIsIFwiKVwiKSkpO1xuICAhZGF0YUZpbGUgJiYgIWRhdGFEaXIgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgJiYgZnVuY3Rpb24gKGUpIHtcbiAgICB0aHJvdyBlO1xuICB9KG5ldyBFcnJvcignQmFkIG1vdW50IHNwZWM7IG5laXRoZXIgZGF0YSBmaWxlIG5vciBkaXJlY3RvcnkuJykpO1xuICBkYXRhRmlsZSAmJiAoZGF0YUZpbGUgPSBlbnZUZW1wbGF0ZVN0cmluZyhkYXRhRmlsZSkpO1xuICBkYXRhRGlyICYmIChkYXRhRGlyID0gZW52VGVtcGxhdGVTdHJpbmcoZGF0YURpcikpO1xuXG4gIHZhciBfcHJvY2Vzc0pTT05QYXRoID0gcHJvY2Vzc0pTT05QYXRoKHtcbiAgICBwYXRoOiBkYXRhUGF0aCxcbiAgICBkYXRhOiBkYXRhLFxuICAgIHByZXNlcnZlT3JpZ2luYWw6IHByZXNlcnZlT3JpZ2luYWxcbiAgfSksXG4gICAgICBtb3VudFBvaW50ID0gX3Byb2Nlc3NKU09OUGF0aC5wZW51bHRpbWF0ZVJlZixcbiAgICAgIGZpbmFsS2V5ID0gX3Byb2Nlc3NKU09OUGF0aC5maW5hbEtleSxcbiAgICAgIG5ld0RhdGEgPSBfcHJvY2Vzc0pTT05QYXRoLm5ld0RhdGE7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhRmlsZTogZGF0YUZpbGUsXG4gICAgZGF0YURpcjogZGF0YURpcixcbiAgICBkYXRhUGF0aDogZGF0YVBhdGgsXG4gICAgbW91bnRQb2ludDogbW91bnRQb2ludCxcbiAgICBmaW5hbEtleTogZmluYWxLZXksXG4gICAgbmV3RGF0YTogbmV3RGF0YVxuICB9O1xufTtcbi8qKlxuKiBJbnRlcm5hbCBmdW5jdGlvbiB0byB0ZXN0IGZvciBhbmQgZXh0cmFjdCBsaW5rIHNwZWNzIGZyb20gdGhlIHByb3ZpZGVkIEpTT04gb2JqZWN0LlxuKi9cblxuXG52YXIgZ2V0TGlua1NwZWNzID0gZnVuY3Rpb24gZ2V0TGlua1NwZWNzKGRhdGEpIHtcbiAgdmFyIF9nZXRNeU1ldGEyO1xuXG4gIHJldHVybiAoX2dldE15TWV0YTIgPSBnZXRNeU1ldGEoZGF0YSkpID09PSBudWxsIHx8IF9nZXRNeU1ldGEyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZ2V0TXlNZXRhMi5saW5rU3BlY3M7XG59O1xuLyoqXG4qIEludGVybmFsIGZ1bmN0aW9uIHRvIHByb2Nlc3MgYSBsaW5rIHNwZWMgaW50byB1c2VmdWwgY29tcG9uZW50cyB1dGlsaXplZCBieSB0aGUgYHJlYWRGSlNPTmAgYW5kIGB3cml0ZUZKU09OYC5cbiovXG5cblxudmFyIHByb2Nlc3NMaW5rU3BlYyA9IGZ1bmN0aW9uIHByb2Nlc3NMaW5rU3BlYyhsbmtTcGVjLCBkYXRhKSB7XG4gIHZhciBsaW5rUmVmcyA9IGxua1NwZWMubGlua1JlZnMsXG4gICAgICBsaW5rVG8gPSBsbmtTcGVjLmxpbmtUbyxcbiAgICAgIGtleU5hbWUgPSBsbmtTcGVjLmxpbmtLZXk7XG5cbiAgdmFyIF9wcm9jZXNzSlNPTlBhdGgyID0gcHJvY2Vzc0pTT05QYXRoKHtcbiAgICBwYXRoOiBsaW5rUmVmcyxcbiAgICBkYXRhOiBkYXRhXG4gIH0pLFxuICAgICAgZmluYWxSZWYgPSBfcHJvY2Vzc0pTT05QYXRoMi5maW5hbFJlZixcbiAgICAgIHBlbnVsdGltYXRlUmVmID0gX3Byb2Nlc3NKU09OUGF0aDIucGVudWx0aW1hdGVSZWYsXG4gICAgICBmaW5hbEtleSA9IF9wcm9jZXNzSlNPTlBhdGgyLmZpbmFsS2V5O1xuXG4gIHZhciBfcHJvY2Vzc0pTT05QYXRoMyA9IHByb2Nlc3NKU09OUGF0aCh7XG4gICAgcGF0aDogbGlua1RvLFxuICAgIGRhdGE6IGRhdGFcbiAgfSksXG4gICAgICBzb3VyY2UgPSBfcHJvY2Vzc0pTT05QYXRoMy5maW5hbFJlZjtcblxuICByZXR1cm4ge1xuICAgIGZpbmFsUmVmOiBmaW5hbFJlZixcbiAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICBrZXlOYW1lOiBrZXlOYW1lLFxuICAgIHBlbnVsdGltYXRlUmVmOiBwZW51bHRpbWF0ZVJlZixcbiAgICBmaW5hbEtleTogZmluYWxLZXlcbiAgfTtcbn07XG5cbnZhciBzaGFsbG93Q29weSA9IGZ1bmN0aW9uIHNoYWxsb3dDb3B5KGlucHV0KSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGlucHV0KSA/IGlucHV0LnNsaWNlKCkgOiBfdHlwZW9mKGlucHV0KSA9PT0gJ29iamVjdCcgJiYgaW5wdXQgIT09IG51bGwgPyBPYmplY3QuYXNzaWduKHt9LCBpbnB1dCkgOiBpbnB1dDtcbn07XG5cbnZhciBwcm9jZXNzSlNPTlBhdGggPSBmdW5jdGlvbiBwcm9jZXNzSlNPTlBhdGgoX3JlZjQpIHtcbiAgdmFyIHBhdGggPSBfcmVmNC5wYXRoLFxuICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXG4gICAgICBwcmVzZXJ2ZU9yaWdpbmFsID0gX3JlZjQucHJlc2VydmVPcmlnaW5hbDtcblxuICBpZiAoIXBhdGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyAnZGF0YVBhdGgnIHNwZWNpZmllZCBmb3IgbW91bnQgc3BlYyBtb3VudCBwb2ludC5cIik7XG4gIH1cblxuICB2YXIgcGF0aFRyYWlsID0gcGF0aC5zcGxpdCgnLicpO1xuICBwYXRoVHJhaWwuc2hpZnQoKTtcbiAgdmFyIGZpbmFsS2V5ID0gcGF0aFRyYWlsLnBvcCgpO1xuICB2YXIgbmV3RGF0YSA9IHByZXNlcnZlT3JpZ2luYWwgPyBzaGFsbG93Q29weShkYXRhKSA6IGRhdGE7XG4gIHZhciBwZW51bHRpbWF0ZVJlZiA9IG5ld0RhdGE7IC8vIG5vdCBuZWNlc3NhcmlseSBwZW51bHRpbWF0ZSB5ZXQsIGJ1dCB3aWxsIGJlLi4uXG5cbiAgdmFyIF9pdGVyYXRvcjUgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQxJDEocGF0aFRyYWlsKSxcbiAgICAgIF9zdGVwNTtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yNS5zKCk7ICEoX3N0ZXA1ID0gX2l0ZXJhdG9yNS5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIga2V5ID0gX3N0ZXA1LnZhbHVlO1xuXG4gICAgICBpZiAocHJlc2VydmVPcmlnaW5hbCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gc2hhbGxvd0NvcHkocGVudWx0aW1hdGVSZWZba2V5XSk7XG4gICAgICAgIHBlbnVsdGltYXRlUmVmW2tleV0gPSByZXN1bHQ7XG4gICAgICAgIHBlbnVsdGltYXRlUmVmID0gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVudWx0aW1hdGVSZWYgPSBwZW51bHRpbWF0ZVJlZltrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yNS5lKGVycik7XG4gIH0gZmluYWxseSB7XG4gICAgX2l0ZXJhdG9yNS5mKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGZpbmFsUmVmOiBwZW51bHRpbWF0ZVJlZltmaW5hbEtleV0sXG4gICAgcGVudWx0aW1hdGVSZWY6IHBlbnVsdGltYXRlUmVmLFxuICAgIGZpbmFsS2V5OiBmaW5hbEtleSxcbiAgICBuZXdEYXRhOiBuZXdEYXRhXG4gIH07XG59OyAvLyBhbGlhc2VzIGZvciAnaW1wb3J0ICogYXMgZmpzb247IGZqc29uLndyaXRlKCknIHN0eWxlXG5cblxudmFyIHdyaXRlID0gd3JpdGVGSlNPTjtcbnZhciByZWFkID0gcmVhZEZKU09OO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQyKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDIobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQyKG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkMihvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDIobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQyKGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuLyoqXG4qIEJhc2ljIG1ldGhvZHMgZm9yIGFjY2Vzc2luZyB0aGUgYXVkaXQgcmVjb3JkIGRhdGEuIE5vdGUgdGhhdCBmdW5jdGlvbmFsaXR5IGlzIHNwbGl0IHVwIGxpa2UgdGhpcyB0byBtYWtlIHRoZXNlXG4qIGZ1bmN0aW9ucyBlYXNpZXIgdG8gdW5pdCB0ZXN0LlxuKi9cblxuLyoqXG4qIFJldHJpZXZlcyBhIHNpbmdsZSBhdWRpdCByZWNvcmQgZW50cnkgYnkgbmFtZSA8YXVkaXQgbmFtZT4vPHRhcmdldD4uXG4qL1xuXG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KGRhdGEsIGlkKSB7XG4gIHZhciBfZGF0YSRhdWRpdFJlY29yZHMsIF9kYXRhJGF1ZGl0UmVjb3JkcyRhdTtcblxuICB2YXIgX3NwbGl0SWQgPSBzcGxpdElkKGlkKSxcbiAgICAgIF9zcGxpdElkMiA9IF9zbGljZWRUb0FycmF5KF9zcGxpdElkLCAyKSxcbiAgICAgIGF1ZGl0TmFtZSA9IF9zcGxpdElkMlswXSxcbiAgICAgIHRhcmdldElkID0gX3NwbGl0SWQyWzFdO1xuXG4gIHJldHVybiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RhdGEkYXVkaXRSZWNvcmRzID0gZGF0YS5hdWRpdFJlY29yZHMpID09PSBudWxsIHx8IF9kYXRhJGF1ZGl0UmVjb3JkcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kYXRhJGF1ZGl0UmVjb3JkcyRhdSA9IF9kYXRhJGF1ZGl0UmVjb3Jkc1thdWRpdE5hbWVdKSA9PT0gbnVsbCB8fCBfZGF0YSRhdWRpdFJlY29yZHMkYXUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kYXRhJGF1ZGl0UmVjb3JkcyRhdVt0YXJnZXRJZF0pICYmIHRvU3RhbmRhbG9uZShkYXRhLCBhdWRpdE5hbWUsIHRhcmdldElkKTtcbn07XG5cbnZhciBsaXN0ID0gZnVuY3Rpb24gbGlzdChkYXRhLCBfcmVmKSB7XG4gIHZhciBkb21haW4gPSBfcmVmLmRvbWFpbixcbiAgICAgIGF1ZGl0TmFtZSA9IF9yZWZbJ2F1ZGl0IG5hbWUnXTtcblxuICBpZiAoZGF0YS5hdWRpdFJlY29yZHMgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHZhciBkb21haW5LZXlzID0gZG9tYWluID09PSB1bmRlZmluZWQgPyBPYmplY3Qua2V5cyhkYXRhLmF1ZGl0UmVjb3JkcyB8fCB7fSkgOiBbZG9tYWluXTtcbiAgcmV0dXJuIGRvbWFpbktleXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGRvbWFpbk5hbWUpIHtcbiAgICB2YXIgZG9tYWluUmVjcyA9IGRhdGEuYXVkaXRSZWNvcmRzW2RvbWFpbk5hbWVdIHx8IHt9O1xuICAgIHZhciBhdWRpdE5hbWVzID0gYXVkaXROYW1lID09PSB1bmRlZmluZWQgPyBPYmplY3Qua2V5cyhkb21haW5SZWNzKSA6IFthdWRpdE5hbWVdO1xuXG4gICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDIoYXVkaXROYW1lcyksXG4gICAgICAgIF9zdGVwO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBfYXVkaXROYW1lID0gX3N0ZXAudmFsdWU7XG4gICAgICAgIHZhciBhdWRpdFJlY3MgPSBkb21haW5SZWNzW19hdWRpdE5hbWVdIHx8IHt9O1xuXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMoYXVkaXRSZWNzKTsgX2kgPCBfT2JqZWN0JGtleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgdmFyIHRhcmdldElkID0gX09iamVjdCRrZXlzW19pXTtcbiAgICAgICAgICBhY2MucHVzaCh0b1N0YW5kYWxvbmUoZGF0YSwgX2F1ZGl0TmFtZSwgdGFyZ2V0SWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBhLmlkLmxvY2FsZUNvbXBhcmUoYi5pZCk7XG4gIH0pO1xufTtcblxudmFyIHBlcnNpc3QgPSBmdW5jdGlvbiBwZXJzaXN0KGRhdGEsIF9yZWYyKSB7XG4gIHZhciBkb21haW4gPSBfcmVmMi5kb21haW4sXG4gICAgICBkb21haW5zID0gX3JlZjIuZG9tYWlucztcblxuICBpZiAoIWRvbWFpbnMgJiYgZG9tYWluKSB7XG4gICAgZG9tYWlucyA9IFtkb21haW5dO1xuICB9XG5cbiAgaWYgKGRvbWFpbnMgJiYgZG9tYWlucy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQyKGRvbWFpbnMpLFxuICAgICAgICBfc3RlcDI7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgICAgZG9tYWluID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICB3cml0ZSh7XG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBzYXZlRnJvbTogXCIuYXVkaXRSZWNvcmRzLlwiLmNvbmNhdChkb21haW4pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvcjIuZigpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB3cml0ZSh7XG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgc2F2ZUZyb206ICcuYXVkaXRSZWNvcmRzJ1xuICAgIH0pO1xuICB9XG59O1xuXG52YXIgdXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGRhdGEsIGF1ZGl0UmVjb3JkKSB7XG4gIHZhciBpZCA9IGF1ZGl0UmVjb3JkLmlkO1xuXG4gIHZhciBfc3BsaXRJZDMgPSBzcGxpdElkKGlkKSxcbiAgICAgIF9zcGxpdElkNCA9IF9zbGljZWRUb0FycmF5KF9zcGxpdElkMywgMiksXG4gICAgICBhdWRpdE5hbWUgPSBfc3BsaXRJZDRbMF0sXG4gICAgICB0YXJnZXRJZCA9IF9zcGxpdElkNFsxXTtcblxuICB2YXIgX2F1ZGl0TmFtZSRzcGxpdCA9IGF1ZGl0TmFtZS5zcGxpdCgnLScpLFxuICAgICAgX2F1ZGl0TmFtZSRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfYXVkaXROYW1lJHNwbGl0LCAxKSxcbiAgICAgIGRvbWFpbiA9IF9hdWRpdE5hbWUkc3BsaXQyWzBdO1xuXG4gIGlmICghZGF0YS5hdWRpdFJlY29yZHNbZG9tYWluXSkge1xuICAgIGRhdGEuYXVkaXRSZWNvcmRzW2RvbWFpbl0gPSB7fTtcbiAgfVxuXG4gIGlmICghZGF0YS5hdWRpdFJlY29yZHNbZG9tYWluXVthdWRpdE5hbWVdKSB7XG4gICAgZGF0YS5hdWRpdFJlY29yZHNbZG9tYWluXVthdWRpdE5hbWVdID0ge307XG4gIH1cblxuICB2YXIgYXVkaXRSZWNDb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgYXVkaXRSZWNvcmQpO1xuICBkZWxldGUgYXVkaXRSZWNDb3B5LmlkO1xuICBkZWxldGUgYXVkaXRSZWNDb3B5LndlaWdodDtcbiAgZGVsZXRlIGF1ZGl0UmVjQ29weS5hdWRpdE5hbWU7XG4gIGRhdGEuYXVkaXRSZWNvcmRzW2RvbWFpbl1bYXVkaXROYW1lXVt0YXJnZXRJZF0gPSBhdWRpdFJlY0NvcHk7XG59OyAvLyBoZWxwZXIvbm9uLWV4cG9ydGVkIGl0ZW1zXG5cblxudmFyIHNwbGl0SWQgPSBmdW5jdGlvbiBzcGxpdElkKGlkKSB7XG4gIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgaWQgaW4gY2FsbCB0byBnZXQgYXVkaXQgcmVjb3Jkcy4nKTtcbiAgfVxuXG4gIHZhciBfaWQkc3BsaXQgPSBpZC5zcGxpdCgvXFwvKC4rKS8pLFxuICAgICAgX2lkJHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF9pZCRzcGxpdCwgMiksXG4gICAgICBhdWRpdE5hbWUgPSBfaWQkc3BsaXQyWzBdLFxuICAgICAgdGFyZ2V0SWQgPSBfaWQkc3BsaXQyWzFdO1xuXG4gIGlmIChhdWRpdE5hbWUgPT09IHVuZGVmaW5lZCB8fCB0YXJnZXRJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWFsZm9ybWVkIGF1ZGl0IHJlY29yZCBJRCAnXCIuY29uY2F0KGlkLCBcIicuIFNob3VsZCBoYXZlIGZvcm0gJzxhdWRpdCBuYW1lPi88dGFyZ2V0IElEPicuXCIpKTtcbiAgfVxuXG4gIHJldHVybiBbYXVkaXROYW1lLCB0YXJnZXRJZF07XG59O1xuLyoqXG4qIFNpbmNlIG91ciBkYXRhIGlzIGNvbXBsZXRlIGFzIGlzLCB0aGlzIGp1c3QgbWFrZXMgYSBjb3B5IGZvciBzYWZldHkncyBzYWtlLlxuKi9cblxuXG52YXIgdG9TdGFuZGFsb25lID0gZnVuY3Rpb24gdG9TdGFuZGFsb25lKGRhdGEsIGF1ZGl0TmFtZSwgdGFyZ2V0SWQpIHtcbiAgdmFyIF9hdWRpdE5hbWUkc3BsaXQzID0gYXVkaXROYW1lLnNwbGl0KC8tKC4rKS8pLFxuICAgICAgX2F1ZGl0TmFtZSRzcGxpdDQgPSBfc2xpY2VkVG9BcnJheShfYXVkaXROYW1lJHNwbGl0MywgMSksXG4gICAgICBkb21haW4gPSBfYXVkaXROYW1lJHNwbGl0NFswXTtcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgaWQ6IFwiXCIuY29uY2F0KGF1ZGl0TmFtZSwgXCIvXCIpLmNvbmNhdCh0YXJnZXRJZCksXG4gICAgZG9tYWluOiBkb21haW5cbiAgfSwgZGF0YS5hdWRpdFJlY29yZHNbZG9tYWluXVthdWRpdE5hbWVdW3RhcmdldElkXSk7XG59O1xuXG4vKipcbiogUHVibGljIEFQSSBmb3IgbWFuYWdpbmcgdGhpcmQtcGFydHkgYWNjb3VudCByZWNvcmRzLiBVc2VzIHRoZSBgQWNjb3VudHNgIGxpYnJhcnksIHdoaWNoIGFjdHVhbGx5IGltcGxlbWVudHMgdGhlXG4qIGZ1bmN0aW9ucy4gVGhlIGxpYnJhcnkgaXMgc3BsaXQgbGlrZSB0aGlzIHRvIG1ha2UgdGVzdGluZyBlYXNpZXIuXG4qL1xuXG52YXIgQXVkaXRSZWNvcmRzQVBJID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXVkaXRSZWNvcmRzQVBJKG9yZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdWRpdFJlY29yZHNBUEkpO1xuXG4gICAgdGhpcy5vcmcgPSBvcmc7XG4gICAgdGhpcy5jaGVja0NvbmRpdGlvbiA9IEF1ZGl0UmVjb3Jkc0FQSS5jaGVja0NvbmRpdGlvbjtcbiAgICB0aGlzLmtleSA9ICdpZCc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQXVkaXRSZWNvcmRzQVBJLCBbe1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0JDEoaWQpIHtcbiAgICAgIHJldHVybiBnZXQodGhpcy5vcmcuaW5uZXJTdGF0ZSwgaWQpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsaXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3QkMShvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbGlzdCh0aGlzLm9yZy5pbm5lclN0YXRlLCBvcHRpb25zKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicGVyc2lzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwZXJzaXN0JDEob3B0aW9ucykge1xuICAgICAgcmV0dXJuIHBlcnNpc3QodGhpcy5vcmcuaW5uZXJTdGF0ZSwgb3B0aW9ucyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGUkMShhdWRpdFJlY29yZCkge1xuICAgICAgcmV0dXJuIHVwZGF0ZSh0aGlzLm9yZy5pbm5lclN0YXRlLCBhdWRpdFJlY29yZCk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEF1ZGl0UmVjb3Jkc0FQSTtcbn0oKTtcbi8qKlxuKiBPYmxpZ2l0b3J5ICdjaGVja0NvbmRpdGlvbicgZnVuY3Rpb24gcHJvdmlkZWQgYnkgdGhlIEFQSSBmb3IgcHJvY2Vzc2luZyBpbmNsdXNpb24gb3IgZXhjbHVzaW9uIG9mIEFjY291bnQgdGFyZ2V0cyBpblxuKiBhbiBhdWRpdC4gV2UgZG8gdGhpcyB3ZWlyZCAnZGVmaW5lUHJvcGVydHknIHRoaW5nIGJlY2F1c2UgaXQgZWZmZWN0aXZlbHkgZ2l2ZXMgdXMgYSAnc3RhdGljIGNvbnN0J1xuKi9cblxuXG52YXIgY2hlY2tDb25kaXRpb24gPSBmdW5jdGlvbiBjaGVja0NvbmRpdGlvbihjb25kaXRpb24sIHByb2R1Y3RSZWMpIHtcbiAgdmFyIHBhcmFtZXRlcnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBTRUNfVFJJVklBTDogMSxcbiAgICBBTFdBWVM6IDEsXG4gICAgTkVWRVI6IDAsXG4gICAgTk9ORTogMCxcbiAgICBMT1c6IDEsXG4gICAgTU9ERVJBVEU6IDIsXG4gICAgSElHSDogMyxcbiAgICBFWElTVEVOVElBTDogNFxuICB9LCBwcm9kdWN0UmVjLnBhcmFtZXRlcnMpO1xuICB2YXIgemVyb1JlcyA9IFtdO1xuICB2YXIgZXZhbHVhdG9yID0gbmV3IEV2YWx1YXRvcih7XG4gICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyxcbiAgICB6ZXJvUmVzOiB6ZXJvUmVzXG4gIH0pO1xuICByZXR1cm4gZXZhbHVhdG9yLmV2YWxUcnV0aChjb25kaXRpb24pO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEF1ZGl0UmVjb3Jkc0FQSSwgJ2NoZWNrQ29uZGl0aW9uJywge1xuICB2YWx1ZTogY2hlY2tDb25kaXRpb24sXG4gIHdyaXRhYmxlOiBmYWxzZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgY29uZmlndXJhYmxlOiBmYWxzZVxufSk7XG5cbnZhciBhcnJheVdpdGhvdXRIb2xlcyQxID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGFycmF5V2l0aG91dEhvbGVzJDEpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5JDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKGl0ZXJhYmxlVG9BcnJheSQxKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkJDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVNwcmVhZDtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG51bndyYXBFeHBvcnRzKG5vbkl0ZXJhYmxlU3ByZWFkJDEpO1xuXG52YXIgdG9Db25zdW1hYmxlQXJyYXkkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzJDEoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkkMShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQkMSgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbn0pO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5JDEgPSB1bndyYXBFeHBvcnRzKHRvQ29uc3VtYWJsZUFycmF5JDEpO1xuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQzKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdDsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDMobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQzKG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkMyhvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDMobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheSQzKGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG52YXIgTm9kZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE5vZGUoX3JlZikge1xuICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDMpLFxuICAgICAgICBuYW1lID0gX3JlZjJbMF0sXG4gICAgICAgIHByaW1NbmdyTmFtZSA9IF9yZWYyWzFdLFxuICAgICAgICBwb3NzaWJsZU1uZ3JOYW1lcyA9IF9yZWYyWzJdO1xuXG4gICAgdmFyIGltcGxpZWQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vZGUpO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmltcGxpZWQgPSBpbXBsaWVkO1xuICAgIHRoaXMucHJpbU1uZ3JOYW1lID0gcHJpbU1uZ3JOYW1lO1xuICAgIHRoaXMucHJpbU1uZ3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wb3NzaWJsZU1uZ3JOYW1lcyA9IHBvc3NpYmxlTW5nck5hbWVzIHx8IFtdO1xuICAgIGlmIChwcmltTW5nck5hbWUpIHRoaXMucG9zc2libGVNbmdyTmFtZXMudW5zaGlmdChwcmltTW5nck5hbWUpO1xuICAgIHRoaXMucG9zc2libGVNbmdycyA9IFtdO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOb2RlLCBbe1xuICAgIGtleTogXCJnZXROYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQcmltTW5nclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQcmltTW5ncigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByaW1NbmdyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQb3NzaWJsZU1uZ3JzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvc3NpYmxlTW5ncnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wb3NzaWJsZU1uZ3JzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRDaGlsZHJlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZHJlbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXREZXNjZW5kZW50c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXNjZW5kZW50cygpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZShmdW5jdGlvbiAoZGVzYywgY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGRlc2MuY29uY2F0KGNoaWxkLmdldERlc2NlbmRlbnRzKCkpO1xuICAgICAgfSwgX3RvQ29uc3VtYWJsZUFycmF5JDEodGhpcy5jaGlsZHJlbikpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRUcmVlTm9kZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VHJlZU5vZGVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBjaGlsZCkge1xuICAgICAgICByZXR1cm4gZGVzYy5jb25jYXQoY2hpbGQuZ2V0VHJlZU5vZGVzKCkpO1xuICAgICAgfSwgW3RoaXNdKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm9kZTtcbn0oKTtcblxudmFyIE9yZ1N0cnVjdHVyZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE9yZ1N0cnVjdHVyZShmaWxlTmFtZSwgcm9sZXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9yZ1N0cnVjdHVyZSk7XG5cbiAgICB2YXIgbm9kZXMgPSBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhmaWxlTmFtZSkpLm1hcChmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIG5ldyBOb2RlKHIpO1xuICAgIH0pO1xuICAgIHRoaXMucm9vdHMgPSBbXTtcblxuICAgIHZhciBwcm9jZXNzTm9kZSA9IGZ1bmN0aW9uIHByb2Nlc3NOb2RlKG5vZGUpIHtcbiAgICAgIGlmIChub2RlLnByaW1NbmdyTmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBub2RlLnByaW1NbmdyID0gbnVsbDsgLy8gd2hpY2ggaXMgbm90IHVuZGVmaW5lZCwgYnV0IHBvc2l0aXZlbHkgbnVsbFxuXG4gICAgICAgIF90aGlzLnJvb3RzLnB1c2gobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJpbU1uZ3IgPSBub2Rlcy5maW5kKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgcmV0dXJuIG4ubmFtZSA9PT0gbm9kZS5wcmltTW5nck5hbWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChwcmltTW5nciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBvcmcgc3RydWN0dXJlLiBSb2xlICdcIi5jb25jYXQobm9kZS5uYW1lLCBcIicgcmVmZXJlbmNlcyBcIikgKyBcIm5vbi1leGlzdGVudCBwcmltYXJ5IG1hbmFnZXIgcm9sZSAnXCIuY29uY2F0KG5vZGUucHJpbU1uZ3JOYW1lLCBcIicuXCIpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUucHJpbU1uZ3IgPSBwcmltTW5ncjsgLy8gY29uc29sZS5lcnJvcihgQWRkaW5nICR7bm9kZS5uYW1lfSBhcyBjaGlsZCBvZiAke3ByaW1NbmdyLm5hbWV9YCkgLy8gREVCVUdcblxuICAgICAgICBwcmltTW5nci5jaGlsZHJlbi5wdXNoKG5vZGUpO1xuICAgICAgICBub2RlLnBvc3NpYmxlTW5nck5hbWVzLmZvckVhY2goZnVuY3Rpb24gKG1uZ3JOYW1lKSB7XG4gICAgICAgICAgdmFyIG1uZ3IgPSBub2Rlcy5maW5kKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICByZXR1cm4gbi5uYW1lID09PSBtbmdyTmFtZTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChtbmdyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgb3JnIHN0cnVjdHVyZS4gUm9sZSAnXCIuY29uY2F0KG5vZGUubmFtZSwgXCInIHJlZmVyZW5jZXMgXCIpICsgXCJub24tZXhpc3RlbnQgcG9zc2libGUgbWFuYWdlciByb2xlICdcIi5jb25jYXQobW5nck5hbWUsIFwiJy5cIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5vZGUucG9zc2libGVNbmdycy5wdXNoKG1uZ3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJvbGUgPSByb2xlcy5nZXQobm9kZS5uYW1lLCB7XG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICBlcnJNc2dHZW46IGZ1bmN0aW9uIGVyck1zZ0dlbihuYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIFwiQ291bGQgbm90IGZpbmQgXCIuY29uY2F0KG5vZGUuaW1wbGllZCA/ICdpbXBsaWVkICcgOiAnJywgXCJyb2xlICdcIikuY29uY2F0KG5hbWUsIFwiJyB3aGlsZSBidWlsZGluZyBvcmcgc3RydWN0dXJlLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQzKHJvbGUuaW1wbGllcyB8fCBbXSksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKCkge1xuICAgICAgICAgIHZhciBfc3RlcCR2YWx1ZSA9IF9zdGVwLnZhbHVlLFxuICAgICAgICAgICAgICBpbXBsaWVkUm9sZU5hbWUgPSBfc3RlcCR2YWx1ZS5uYW1lLFxuICAgICAgICAgICAgICBtbmdyUHJvdG9jb2wgPSBfc3RlcCR2YWx1ZS5tbmdyUHJvdG9jb2w7XG4gICAgICAgICAgLy8gaW1wbGllZCByb2xlcyBhcmUgaGFuZGxlZCBieSBpbnNlcnRpbmcgdGhlIGltcGxpZWQgcm9sZXMgYXMgbWFuYWdlZCBieSB0aGUgc3VwZXItcm9sZS4gV2hlbiB0aGUgb3JnIGNoYXJ0IGlzXG4gICAgICAgICAgLy8gZ2VuZXJhdGVkLCB0aGVzZSB3aWxsIGNvbGxhcHNlIGludG8gYSBzaW5nbGUgZW50cnkgbGlzdGluZyBtdWx0aXBsZSByb2xlcyBhbmQgdXNpbmcgdGhlIHN1cGVyIHJvbGUgYXMgdGhlXG4gICAgICAgICAgLy8gdGl0bGUuXG4gICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBhIGxpdHRsZSBtZXNzeVxuICAgICAgICAgIHZhciBpbXBSb2xlID0gcm9sZXMuZ2V0KGltcGxpZWRSb2xlTmFtZSwge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBlcnJNc2dHZW46IGZ1bmN0aW9uIGVyck1zZ0dlbihuYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiBcIkNvdWxkIG5vdCBmaW5kIGltcGxpZWQgcm9sZSAnXCIuY29uY2F0KG5hbWUsIFwiJyB3aGlsZSBidWlsZGluZyBvcmcgc3RydWN0dXJlLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTsgLy8gY29uc29sZS5lcnJvcihgUHJvY2Vzc2luZyBpbXBsaWVkIHJvbGU6ICR7aW1wUm9sZS5uYW1lfS4uLmApIC8vIERFQlVHXG5cbiAgICAgICAgICBpZiAoaW1wUm9sZS5pc1RpdHVsYXIoKSAmJiAhbm9kZXMuZmluZChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgcmV0dXJuIG4ubmFtZSA9PT0gaW1wUm9sZS5uYW1lO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAvLyBvbmx5IHRpdHVsYXIgcm9sZXMgbm90IGFscmVhZHkgZGVmaW5lZCBhcmUgaW1wbGllZCBpbnRvIHRoZSBvcmcgc3RydWN0dXJlXG4gICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwiSSdtIGluIVwiKSAvLyBERUJVR1xuICAgICAgICAgICAgLy8gVE9ETzogaW4gdGhlcm95LCBJIGJlbGlldmUgaWYgdGhlIGN1cnJlbnQgbm9kZSBoYXMgbm8gbWFuYWdlciwgdGhlbiBpbXBsaWVkIHJvbGUncyBkb24ndCBlaXRoZXIuXG4gICAgICAgICAgICAvLyBPdGhlcml3c2UsIHRoZSBwcmltYXJ5IG1hbmFnZXIgaXMgZWZmZWN0aXZlbHkgb25lJ3Mgc2VsZiwgaW4gdGhlICdzdXBlcicgcm9sZSBvciB0aGUgc2FtZSBtYW5hZ2VyIGFzIHRoZVxuICAgICAgICAgICAgLy8gc3VwZXIgcm9sZSwgZGVwZW5kaW5nIG9uIHRoZSBtYW5hZ2VyIHByb3RvY29sLlxuICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcihcIlxcblxcbkhleTpcXG5cIiwgcm9sZSwgbm9kZSwgXCJcXG5cXG5cIikvLyBERUJVR1xuICAgICAgICAgICAgdmFyIG1hbmFnaW5nUm9sZU5hbWUgPSBtbmdyUHJvdG9jb2wgPT09ICdzZWxmJyA/IHJvbGUubmFtZSA6IG1uZ3JQcm90b2NvbCA9PT0gJ3NhbWUnID8gbm9kZS5wcmltTW5nck5hbWUgOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfShuZXcgRXJyb3IoXCJVbmtvd24gKG9yIHVuZGVmaW5lZD8pIG1hbmFnZXIgcHJvdG9jb2wgJ1wiLmNvbmNhdChtbmdyUHJvdG9jb2wsIFwiJyBmb3VuZCB3aGlsZSBwcm9jZXNzaW5nIG9yZyBzdHJ1Y3R1cmUuXCIpKSk7IC8vIFRPRE86IHN1cHBvcnQgb3B0aW9uYWwgbWFuYWdlcnMuXG5cbiAgICAgICAgICAgIHByb2Nlc3NOb2RlKG5ldyBOb2RlKFtpbXBsaWVkUm9sZU5hbWUsIG1hbmFnaW5nUm9sZU5hbWUsIG51bGxdLCB0cnVlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgX2xvb3AoKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDMobm9kZXMpLFxuICAgICAgICBfc3RlcDI7XG5cbiAgICB0cnkge1xuICAgICAgZm9yIChfaXRlcmF0b3IyLnMoKTsgIShfc3RlcDIgPSBfaXRlcmF0b3IyLm4oKSkuZG9uZTspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBfc3RlcDIudmFsdWU7XG4gICAgICAgIHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgX2l0ZXJhdG9yMi5lKGVycik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIF9pdGVyYXRvcjIuZigpO1xuICAgIH1cblxuICAgIHZhciBvcmdSb2xlcyA9IHRoaXMuZ2V0Tm9kZXMoKS5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgIHJldHVybiBuLmdldE5hbWUoKTtcbiAgICB9KTsgLy8gY2hlY2sgYWxsIG9yZyByb2xlIG5hbWVzIHJlZmVyZW5jZSBkZWZpbmVkIHJvbGVzXG5cbiAgICB2YXIgdW5kZWZpbmVkUm9sZXMgPSBvcmdSb2xlcy5maWx0ZXIoZnVuY3Rpb24gKHJvbGVOYW1lKSB7XG4gICAgICByZXR1cm4gcm9sZXMuZ2V0KHJvbGVOYW1lKSA9PT0gdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgaWYgKHVuZGVmaW5lZFJvbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdW5kZWZpbmVkIHJvbGUgcmVmZXJlbmNlJyArIFwiXCIuY29uY2F0KHVuZGVmaW5lZFJvbGVzLmxlbmd0aCA+IDEgPyAncycgOiAnJywgXCI6IFwiKS5jb25jYXQodW5kZWZpbmVkUm9sZXMuam9pbignLCAnKSkpO1xuICAgIH0gLy8gY2hlY2sgZm9yIGR1cGxpY2F0ZSBvcmcgcm9sZXNcblxuXG4gICAgdmFyIGR1cGVSb2xlcyA9IG9yZ1JvbGVzLmZpbHRlcihmdW5jdGlvbiAobmFtZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBvcmdSb2xlcy5pbmRleE9mKG5hbWUpICE9PSBpbmRleDtcbiAgICB9KTtcblxuICAgIGlmIChkdXBlUm9sZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRm91bmQgbm9uLXVuaXF1ZSByb2xlXCIuY29uY2F0KGR1cGVSb2xlcy5sZW5ndGggPiAxID8gJ3MnIDogJycsIFwiIFwiKSArIFwicmVmZXJlbmNlcyBpbiBvcmcgc3RydWN0dXJlOiBcIi5jb25jYXQoZHVwZVJvbGVzLmpvaW4oJywgJykpKTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoT3JnU3RydWN0dXJlLCBbe1xuICAgIGtleTogXCJnZXRSb290c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSb290cygpIHtcbiAgICAgIHJldHVybiBfdG9Db25zdW1hYmxlQXJyYXkkMSh0aGlzLnJvb3RzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Tm9kZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Tm9kZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb290cy5yZWR1Y2UoZnVuY3Rpb24gKG5vZGVzLCByb290KSB7XG4gICAgICAgIHJldHVybiBub2Rlcy5jb25jYXQocm9vdC5nZXRUcmVlTm9kZXMoKSk7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldE5vZGVCeVJvbGVOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE5vZGVCeVJvbGVOYW1lKG5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldE5vZGVzKCkuZmluZChmdW5jdGlvbiAobikge1xuICAgICAgICByZXR1cm4gbi5nZXROYW1lKCkgPT09IG5hbWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gT3JnU3RydWN0dXJlO1xufSgpO1xuXG52YXIgX3R5cGVvZl8xJDEgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG5cbiAgICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59KTtcblxudmFyIF90eXBlb2YkMSA9IHVud3JhcEV4cG9ydHMoX3R5cGVvZl8xJDEpO1xuXG4vLyBKU09OTG9vcCBpcyBhIHRyaXZpYWwgcmV3b3JrIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9kYWJlbmcvSlNPTi1Mb29wIGNjOWJmOGQzZWM5ZDM2NjE2MFxudmFyIG5vZGVzID0gW107IC8vIHVzZWQgYXMgdGVtcCB3b3JrcGFkXG5cbnZhciBKU09OTG9vcCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEpTT05Mb29wKG9iaiwgaWRQcm9wZXJ0eU5hbWUsIGNoaWxkcmVuUHJvcGVydHlOYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEpTT05Mb29wKTtcblxuICAgIHRoaXMuaWQgPSBpZFByb3BlcnR5TmFtZTtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW5Qcm9wZXJ0eU5hbWU7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5jb3VudE5vZGVzKG9iaik7XG4gICAgdGhpcy50b3RhbCA9IHRoaXMuY291bnQgKyAwO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEpTT05Mb29wLCBbe1xuICAgIGtleTogXCJpc0VtcHR5XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmopIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBndWFyZC1mb3ItaW5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY291bnROb2Rlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb3VudE5vZGVzKG9iaikge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdGhpcy5jb3VudCsrO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFvYmogfHwgdGhhdC5pc0VtcHR5KG9iaikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG9ialt0aGF0LmNoaWxkcmVuXSkge1xuICAgICAgICAgICAgb2JqW3RoYXQuY2hpbGRyZW5dLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgIHRoYXQuY291bnROb2RlcyhjaGlsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0oKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2VuZXJhdGVDbG9uZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZUNsb25lKG9iaikge1xuICAgICAgdmFyIHRhcmdldCA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgICAgICBpZiAoaSAhPT0gdGhpcy5jaGlsZHJlbikge1xuICAgICAgICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kTm9kZUJ5SWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZE5vZGVCeUlkKG9iaiwgaWQsIGNhbGxiYWNrKSB7XG4gICAgICBpZiAob2JqW3RoaXMuaWRdID09PSBpZCB8fCBvYmouaWRzLnNvbWUoZnVuY3Rpb24gKHRlc3RJZCkge1xuICAgICAgICByZXR1cm4gdGVzdElkID09PSBpZDtcbiAgICAgIH0pKSB7XG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLnRvdGFsICsgMDtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgb2JqKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50ID09PSAxKSB7XG4gICAgICAgICAgdGhpcy5jb3VudCA9IHRoaXMudG90YWwgKyAwO1xuICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcigndGhlIG5vZGUgZG9lcyBub3QgZXhpc3QnKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvdW50LS07XG5cbiAgICAgICAgaWYgKG9ialt0aGlzLmNoaWxkcmVuXSkge1xuICAgICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgICBvYmpbdGhpcy5jaGlsZHJlbl0uZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdGhhdC5maW5kTm9kZUJ5SWQobm9kZSwgaWQsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJtYXRjaENvbmRpdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWF0Y2hDb25kaXRpb25zKG9iaiwgY29uZGl0aW9ucykge1xuICAgICAgdmFyIGZsYWcgPSB0cnVlO1xuICAgICAgT2JqZWN0LmtleXMoY29uZGl0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmRpdGlvbnNbaXRlbV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBjb25kaXRpb25zW2l0ZW1dID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGlmIChvYmpbaXRlbV0gIT09IGNvbmRpdGlvbnNbaXRlbV0pIHtcbiAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29uZGl0aW9uc1tpdGVtXSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgIGlmICghY29uZGl0aW9uc1tpdGVtXS50ZXN0KG9ialtpdGVtXSkpIHtcbiAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX3R5cGVvZiQxKGNvbmRpdGlvbnNbaXRlbV0pID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIE9iamVjdC5rZXlzKGNvbmRpdGlvbnNbaXRlbV0pLmZvckVhY2goZnVuY3Rpb24gKHN1Yml0ZW0pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoc3ViaXRlbSkge1xuICAgICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAoIShvYmpbaXRlbV0gPiBjb25kaXRpb25zW2l0ZW1dW3N1Yml0ZW1dKSkge1xuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKG9ialtpdGVtXSA8IGNvbmRpdGlvbnNbaXRlbV1bc3ViaXRlbV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKG9ialtpdGVtXSA+PSBjb25kaXRpb25zW2l0ZW1dW3N1Yml0ZW1dKSkge1xuICAgICAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAoIShvYmpbaXRlbV0gPD0gY29uZGl0aW9uc1tpdGVtXVtzdWJpdGVtXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKG9ialtpdGVtXSAhPT0gY29uZGl0aW9uc1tpdGVtXVtzdWJpdGVtXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICghZmxhZykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghZmxhZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kTm9kZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZE5vZGVzKG9iaiwgY29uZGl0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHZhciBjb3B5ID0gW107IC8vIHRocyBzaGFsbG93IGNvcHkgb2Ygbm9kZXMgYXJyYXlcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmosIGNvbmRpdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGF0Lm1hdGNoQ29uZGl0aW9ucyhvYmosIGNvbmRpdGlvbnMpKSB7XG4gICAgICAgICAgbm9kZXMucHVzaChvYmopO1xuXG4gICAgICAgICAgaWYgKHRoYXQuY291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuY291bnQgPSB0aGF0LnRvdGFsICsgMDtcbiAgICAgICAgICAgIGNvcHkgPSBub2Rlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIG5vZGVzID0gW107XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBjb3B5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGF0LmNvdW50LS07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRoYXQuY291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIHRoYXQuY291bnQgPSB0aGF0LnRvdGFsICsgMDtcbiAgICAgICAgICAgIGNvcHkgPSBub2Rlcy5zbGljZSgwKTtcbiAgICAgICAgICAgIG5vZGVzID0gW107XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBjb3B5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGF0LmNvdW50LS07XG5cbiAgICAgICAgICBpZiAob2JqW3RoYXQuY2hpbGRyZW5dKSB7XG4gICAgICAgICAgICBvYmpbdGhhdC5jaGlsZHJlbl0uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgdGhhdC5maW5kTm9kZXMoY2hpbGQsIGNvbmRpdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfShvYmosIGNvbmRpdGlvbnMsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZFBhcmVudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kUGFyZW50KG9iaiwgbm9kZSwgY2FsbGJhY2ssIG5lZWRDbGVhbk5vZGUpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMuZmluZE5vZGVCeUlkKG9iaiwgbm9kZS5wYXJlbnRfaWQsIGZ1bmN0aW9uIChlcnIsIHBhcmVudCkge1xuICAgICAgICBpZiAoZXJyKSBjYWxsYmFjayhuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBwYXJlbnQuIFwiLmNvbmNhdChlcnIpKSk7ZWxzZSB7XG4gICAgICAgICAgaWYgKG5lZWRDbGVhbk5vZGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHRoYXQuZ2VuZXJhdGVDbG9uZShwYXJlbnQpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcGFyZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaW5kU2libGluZ3NcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmluZFNpYmxpbmdzKG9iaiwgbm9kZSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMuZmluZFBhcmVudChvYmosIG5vZGUsIGZ1bmN0aW9uIChlcnIsIHBhcmVudCkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdpdHMgc2libGluZyBub2RlcyBkbyBub3QgZXhpc3QnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHNpYmxpbmdzID0gW107XG4gICAgICAgICAgcGFyZW50W3RoYXQuY2hpbGRyZW5dLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtW3RoYXQuaWRdICE9PSBub2RlW3RoYXQuaWRdKSB7XG4gICAgICAgICAgICAgIHNpYmxpbmdzLnB1c2godGhhdC5nZW5lcmF0ZUNsb25lKGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCBzaWJsaW5ncyk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZmluZEFuY2VzdG9yc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kQW5jZXN0b3JzKG9iaiwgbm9kZSwgY2FsbGJhY2spIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgaWYgKG5vZGVbdGhpcy5pZF0gPT09IG9ialt0aGlzLmlkXSkge1xuICAgICAgICB2YXIgY29weSA9IG5vZGVzLnNsaWNlKDApO1xuICAgICAgICBub2RlcyA9IFtdO1xuICAgICAgICBjYWxsYmFjayhudWxsLCBjb3B5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmluZFBhcmVudChvYmosIG5vZGUsIGZ1bmN0aW9uIChlcnIsIHBhcmVudCkge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignaXRzIGFuY2VzdG9yIG5vZGVzIGRvIG5vdCBleGlzdCcpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZXMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgdGhhdC5maW5kQW5jZXN0b3JzKG9iaiwgcGFyZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSlNPTkxvb3A7XG59KCk7XG5cbi8qKlxuKiBCYXNpYyBtZXRob2RzIGZvciBhY2Nlc3NpbmcgdGhlIGFjY291bnRzIGRhdGEuIE5vdGUgdGhhdCBmdW5jdGlvbmFsaXR5IGlzIHNwbGl0IHVwIGxpa2UgdGhpcyB0byBtYWtlIHRoZXNlIGZ1bmN0aW9uc1xuKiBlYXNpZXIgdG8gdW5pdCB0ZXN0LlxuKi9cblxuLyoqXG4qIFJldHJpZXZlcyBhIHNpbmdsZSBhY2NvdW50IGVudHJ5IGJ5IG5hbWUuXG4qL1xudmFyIGdldCQxID0gZnVuY3Rpb24gZ2V0KGRhdGEsIG5hbWUpIHtcbiAgdmFyIF9kYXRhJHRoaXJkUGFydHlBY2NvdTtcblxuICByZXR1cm4gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kYXRhJHRoaXJkUGFydHlBY2NvdSA9IGRhdGEudGhpcmRQYXJ0eUFjY291bnRzKSA9PT0gbnVsbCB8fCBfZGF0YSR0aGlyZFBhcnR5QWNjb3UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kYXRhJHRoaXJkUGFydHlBY2NvdVtuYW1lXSkgJiYgdG9TdGFuZGFsb25lJDEoZGF0YSwgbmFtZSk7XG59O1xuXG52YXIgbGlzdCQxID0gZnVuY3Rpb24gbGlzdChkYXRhKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cygoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLnRoaXJkUGFydHlBY2NvdW50cykgfHwge30pLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0b1N0YW5kYWxvbmUkMShkYXRhLCBrZXkpO1xuICB9KTtcbn07IC8vIGhlbHBlci9ub24tZXhwb3J0ZWQgaXRlbXNcblxuLyoqXG4qIENyZWF0ZXMgYSBuZXcvY29weSBvZiB0aGUgYWNjb3VudCBkYXRhIHdpdGggYW4gYWRkaXRpb25hbCAnbmFtZScgZmllbGQuIFRoZSBuYW1lIHNob3VsZCBiZSB0aGUga2V5IHZhbHVlIHdoaWNoXG4qIHBvaW50ZWQgdG8gdGhlIGFjY291bnQgZGF0YS5cbiovXG5cblxudmFyIHRvU3RhbmRhbG9uZSQxID0gZnVuY3Rpb24gdG9TdGFuZGFsb25lKGRhdGEsIG5hbWUpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRhdGEudGhpcmRQYXJ0eUFjY291bnRzW25hbWVdLCB7XG4gICAgbmFtZTogbmFtZVxuICB9KTtcbn07XG5cbi8qKlxuKiBQdWJsaWMgQVBJIGZvciBtYW5hZ2luZyB0aGlyZC1wYXJ0eSBhY2NvdW50IHJlY29yZHMuIFVzZXMgdGhlIGBBY2NvdW50c2AgbGlicmFyeSwgd2hpY2ggYWN0dWFsbHkgaW1wbGVtZW50cyB0aGVcbiogZnVuY3Rpb25zLiBUaGUgbGlicmFyeSBpcyBzcGxpdCBsaWtlIHRoaXMgdG8gbWFrZSB0ZXN0aW5nIGVhc2llci5cbiovXG5cbnZhciBBY2NvdW50c0FQSSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFjY291bnRzQVBJKG9yZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY2NvdW50c0FQSSk7XG5cbiAgICB0aGlzLm9yZyA9IG9yZztcbiAgICB0aGlzLmNoZWNrQ29uZGl0aW9uID0gQWNjb3VudHNBUEkuY2hlY2tDb25kaXRpb247XG4gICAgdGhpcy5rZXkgPSAnbmFtZSc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWNjb3VudHNBUEksIFt7XG4gICAga2V5OiBcImdldFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMub3JnLmlubmVyU3RhdGUsIG5hbWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJsaXN0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgICByZXR1cm4gbGlzdCQxKHRoaXMub3JnLmlubmVyU3RhdGUpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBY2NvdW50c0FQSTtcbn0oKTtcbi8qKlxuKiBPYmxpZ2l0b3J5ICdjaGVja0NvbmRpdGlvbicgZnVuY3Rpb24gcHJvdmlkZWQgYnkgdGhlIEFQSSBmb3IgcHJvY2Vzc2luZyBpbmNsdXNpb24gb3IgZXhjbHVzaW9uIG9mIEFjY291bnQgdGFyZ2V0cyBpblxuKiBhbiBhdWRpdC4gV2UgZG8gdGhpcyB3ZWlyZCAnZGVmaW5lUHJvcGVydHknIHRoaW5nIGJlY2F1c2UgaXQgZWZmZWN0aXZlbHkgZ2l2ZXMgdXMgYSAnc3RhdGljIGNvbnN0J1xuKi9cblxuXG52YXIgY2hlY2tDb25kaXRpb24kMSA9IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9uKGNvbmRpdGlvbiwgYWNjdCkge1xuICB2YXIgcGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIFNFQ19UUklWSUFMOiAxLFxuICAgIEFMV0FZUzogMSxcbiAgICBORVZFUjogMCxcbiAgICBOT05FOiAwLFxuICAgIExPVzogMSxcbiAgICBNT0RFUkFURTogMixcbiAgICBISUdIOiAzLFxuICAgIEVYSVNURU5USUFMOiA0XG4gIH0sIGFjY3QucGFyYW1ldGVycyk7IC8vIFRPRE86IGNyZWF0ZSBhIGhhbmRseSBjb252ZXJzaW9uIGNsYXNzL2xpYiBmb3IgdGhlIHNlbnNpdGl2aXR5IGNvZGVzOyBTZW5zaXRpdml0eUNvZGU/XG5cbiAgdmFyIHNlbnNpdGl2aXR5Q29kZSA9IGFjY3Quc2Vuc2l0aXZpdHkgfHwgJ0VYSVNURU5USUFMJztcblxuICBzd2l0Y2ggKHNlbnNpdGl2aXR5Q29kZSkge1xuICAgIGNhc2UgJ05PTkUnOlxuICAgICAgcGFyYW1ldGVycy5TRU5TSVRJVklUWSA9IDA7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0xPVyc6XG4gICAgICBwYXJhbWV0ZXJzLlNFTlNJVElWSVRZID0gMTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnTU9ERVJBVEUnOlxuICAgICAgcGFyYW1ldGVycy5TRU5TSVRJVklUWSA9IDI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0hJR0gnOlxuICAgICAgcGFyYW1ldGVycy5TRU5TSVRJVklUWSA9IDM7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0VYSVNURU5USUFMJzpcbiAgICAgIHBhcmFtZXRlcnMuU0VOU0lUSVZJVFkgPSA0O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBzZW5zaXRpdml0eSBjb2RlOiAnXCIuY29uY2F0KHNlbnNpdGl2aXR5Q29kZSwgXCInLlwiKSk7XG4gIH0gLy8gY29uZmlndXJlIHRoZSBub24tZXhpc3RlbnQgdGFncyB0byAnemVybycgb3V0XG5cblxuICB2YXIgemVyb1JlcyA9IFsvQlVTSU5FU1N8TkVUV09SS0lORy9dO1xuICB2YXIgZXZhbHVhdG9yID0gbmV3IEV2YWx1YXRvcih7XG4gICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyxcbiAgICB6ZXJvUmVzOiB6ZXJvUmVzXG4gIH0pO1xuICByZXR1cm4gZXZhbHVhdG9yLmV2YWxUcnV0aChjb25kaXRpb24pO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEFjY291bnRzQVBJLCAnY2hlY2tDb25kaXRpb24nLCB7XG4gIHZhbHVlOiBjaGVja0NvbmRpdGlvbiQxLFxuICB3cml0YWJsZTogZmFsc2UsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2Vcbn0pO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSk7XG5cbnZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gdW53cmFwRXhwb3J0cyhhc3NlcnRUaGlzSW5pdGlhbGl6ZWQpO1xuXG52YXIgc2V0UHJvdG90eXBlT2YgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSk7XG5cbnVud3JhcEV4cG9ydHMoc2V0UHJvdG90eXBlT2YpO1xuXG52YXIgaW5oZXJpdHMgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xufSk7XG5cbnZhciBfaW5oZXJpdHMgPSB1bndyYXBFeHBvcnRzKGluaGVyaXRzKTtcblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG52YXIgX3R5cGVvZiA9IF90eXBlb2ZfMSQxW1wiZGVmYXVsdFwiXTtcblxuXG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfVxuXG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm47XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59KTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gdW53cmFwRXhwb3J0cyhwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKTtcblxudmFyIGdldFByb3RvdHlwZU9mID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG59KTtcblxudmFyIF9nZXRQcm90b3R5cGVPZiA9IHVud3JhcEV4cG9ydHMoZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgUm9sZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFJvbGUocmVjKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJvbGUpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCByZWMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJvbGUsIFt7XG4gICAga2V5OiBcImdldE5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzVGl0dWxhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1RpdHVsYXIoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnRpdHVsYXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzRGVzaWduYXRlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0Rlc2lnbmF0ZWQoKSB7XG4gICAgICByZXR1cm4gISF0aGlzLmRlc2lnbmF0ZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlzUXVhbGlmaWFibGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNRdWFsaWZpYWJsZSgpIHtcbiAgICAgIHJldHVybiAhIXRoaXMucXVhbGlmaWFibGU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFJvbGU7XG59KCk7XG5cbmZ1bmN0aW9uIF9jcmVhdGVTdXBlcihEZXJpdmVkKSB7IHZhciBoYXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpOyByZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVN1cGVySW50ZXJuYWwoKSB7IHZhciBTdXBlciA9IF9nZXRQcm90b3R5cGVPZihEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gX2dldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCByZXN1bHQpOyB9OyB9XG5cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTsgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTsgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTsgdHJ5IHsgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG52YXIgQXR0YWNoZWRSb2xlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUm9sZSkge1xuICBfaW5oZXJpdHMoQXR0YWNoZWRSb2xlLCBfUm9sZSk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihBdHRhY2hlZFJvbGUpO1xuXG4gIGZ1bmN0aW9uIEF0dGFjaGVkUm9sZShiYXNlUm9sZSwgcmVjLCBtYW5hZ2VyLCBzdGFmZk1lbWJlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBdHRhY2hlZFJvbGUpO1xuXG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBiYXNlUm9sZSk7XG5cbiAgICBpZiAoIWJhc2VSb2xlLmlzUXVhbGlmaWFibGUoKSAmJiByZWMucXVhbGlmaWVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHQgdG8gcXVhbGlmeSBub24tcXVhbGlmaWFibGUgcm9sZSAnXCIuY29uY2F0KGJhc2VSb2xlLmdldE5hbWUoKSwgXCInIFwiKSArIFwiZm9yIHN0YWZmIG1lbWJlciAnXCIuY29uY2F0KHN0YWZmTWVtYmVyLmdldEVtYWlsKCksIFwiJy5cIikpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyksIHJlYyk7XG4gICAgX3RoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEF0dGFjaGVkUm9sZSwgW3tcbiAgICBrZXk6IFwiZ2V0TWFuYWdlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYW5hZ2VyKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFuYWdlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UXVhbGlmaWVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFF1YWxpZmllcigpIHtcbiAgICAgIHJldHVybiB0aGlzLnF1YWxpZmllciA/IHRoaXMucXVhbGlmaWVyIDogbnVsbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UXVhbGlmaWVkTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRRdWFsaWZpZWROYW1lKCkge1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuZ2V0UXVhbGlmaWVyKCksIFwiIFwiKS5jb25jYXQodGhpcy5nZXROYW1lKCkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc0FjdGluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0FjdGluZygpIHtcbiAgICAgIHJldHVybiAhIXRoaXMuYWN0aW5nO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBdHRhY2hlZFJvbGU7XG59KFJvbGUpO1xuXG52YXIgUm9sZXMgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBSb2xlcyhvcmcsIHJvbGVzRGF0YSkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb2xlcyk7XG5cbiAgICB0aGlzLm9yZyA9IG9yZztcbiAgICB0aGlzLml0ZW1zID0gcm9sZXNEYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XG4gICAgICByZXR1cm4gbmV3IFJvbGUocmVjKTtcbiAgICB9KTtcbiAgICB0aGlzLm1hcCA9IHRoaXMuaXRlbXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHJvbGUsIGkpIHtcbiAgICAgIGlmIChhY2Nbcm9sZS5nZXROYW1lKCldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUm9sZSB3aXRoIG5hbWUgJ1wiLmNvbmNhdChyb2xlLm5hbWUsIFwiJyBhbHJlYWR5IGV4aXN0cyBhdCBlbnRyeSBcIikuY29uY2F0KGksIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIGFjY1tyb2xlLmdldE5hbWUoKV0gPSByb2xlO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG4gICAgdGhpcy5jaGVja0NvbmRpdGlvbiA9IGNoZWNrQ29uZGl0aW9uJDI7XG4gICAgdGhpcy5rZXkgPSAnbmFtZSc7XG4gIH0gLy8gVE9ETzogZGVwcmVjYXRlZFxuXG5cbiAgX2NyZWF0ZUNsYXNzKFJvbGVzLCBbe1xuICAgIGtleTogXCJnZXRBbGxcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0QWxsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuc2xpY2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuc2xpY2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChuYW1lLCBvcHRzKSB7XG4gICAgICB2YXIgX3JlZiA9IG9wdHMgfHwge30sXG4gICAgICAgICAgcmVxdWlyZWQgPSBfcmVmLnJlcXVpcmVkLFxuICAgICAgICAgIGVyck1zZ0dlbiA9IF9yZWYuZXJyTXNnR2VuO1xuXG4gICAgICB2YXIgcmVzdWx0ID0gdGhpcy5tYXBbbmFtZV07XG5cbiAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCAmJiByZXF1aXJlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKGVyck1zZ0dlbiA9PT0gbnVsbCB8fCBlcnJNc2dHZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVyck1zZ0dlbihuYW1lKSkgfHwgXCJEaWQgbm90IGZpbmQgcmVxdXJpZWQgcm9sZSAnXCIuY29uY2F0KG5hbWUsIFwiJy5cIikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGFmZkluUm9sZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGFmZkluUm9sZShyb2xlTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMub3JnLnN0YWZmLmxpc3QoKS5maWx0ZXIoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIHMucm9sZXMuc29tZShmdW5jdGlvbiAocikge1xuICAgICAgICAgIHJldHVybiByLm5hbWUgPT09IHJvbGVOYW1lO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAqIFN3YXBzIG91dCB0aGUgJ3N1cGVyIHJvbGUnIG5hbWUgZm9yIHRoZSBhY3R1YWwgc3VwZXIgcm9sZSBvYmplY3QuXG4gICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImh5ZHJhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaHlkcmF0ZSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAocm9sZSwgaSkge1xuICAgICAgICBpZiAocm9sZS5zdXBlclJvbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhciBzdXBlclJvbGUgPSBfdGhpcy5nZXQocm9sZS5zdXBlclJvbGUpO1xuXG4gICAgICAgICAgaWYgKHN1cGVyUm9sZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBzdXBlci1yb2xlICdcIi5jb25jYXQocm9sZS5zdXBlclJvbGUsIFwiJyBmb3Igcm9sZSAnXCIpLmNvbmNhdChyb2xlLmdldE5hbWUoKSwgXCInIChlbnRyeSBcIikuY29uY2F0KGksIFwiKS5cIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvbGUuc3VwZXJSb2xlID0gc3VwZXJSb2xlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSb2xlcztcbn0oKTtcbi8qKlxuKiBPYmxpZ2l0b3J5ICdjaGVja0NvbmRpdGlvbicgZnVuY3Rpb24gcHJvdmlkZWQgYnkgdGhlIEFQSSBmb3IgcHJvY2Vzc2luZyBpbmNsdXNpb24gb3IgZXhjbHVzaW9uIG9mIFJvbGVzIHRhcmdldHMgaW5cbiogYW4gYXVkaXQuXG4qL1xuXG5cbnZhciBjaGVja0NvbmRpdGlvbiQyID0gZnVuY3Rpb24gY2hlY2tDb25kaXRpb24oY29uZGl0aW9uLCByb2xlKSB7XG4gIHZhciBwYXJhbWV0ZXJzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgU0VDX1RSSVZJQUw6IDEsXG4gICAgQUxXQVlTOiAxLFxuICAgIE5FVkVSOiAwXG4gIH0sIHJvbGUucGFyYW1ldGVycyk7IC8vIFRPRE86IHRlc3QgaWYgbGVhdmluZyBpdCAndHJ1ZScvJ2ZhbHNlJyB3b3Jrcy5cblxuICBwYXJhbWV0ZXJzLkRFU0lHTkFURUQgPSByb2xlLmRlc2lnbmF0ZWQgPyAxIDogMDtcbiAgcGFyYW1ldGVycy5TSU5HVUxBUiA9IHJvbGUuc2luZ3VsYXIgPyAxIDogMDtcbiAgdmFyIHplcm9SZXMgPSBbXTtcbiAgdmFyIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3Ioe1xuICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMsXG4gICAgemVyb1JlczogemVyb1Jlc1xuICB9KTtcbiAgcmV0dXJuIGV2YWx1YXRvci5ldmFsVHJ1dGgoY29uZGl0aW9uKTtcbn07XG5cbnZhciBTdGFmZk1lbWJlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YWZmTWVtYmVyKHJlY29yZCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGFmZk1lbWJlcik7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHJlY29yZCk7XG4gICAgdGhpcy5hdHRhY2hlZFJvbGVzQnlOYW1lID0ge307XG4gICAgdGhpcy5yZXBvcnRzQnlSZXBvcnRSb2xlID0ge307IC8vIHJvbGVzIGtleWVkIHRvIHJlcG9ydHMgcm9sZSBuYW1lc1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFN0YWZmTWVtYmVyLCBbe1xuICAgIGtleTogXCJnZXRFbWFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRFbWFpbCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVtYWlsO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRFbWFpbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRFbWFpbCh2KSB7XG4gICAgICB0aGlzLmVtYWlsID0gdjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0RnVsbE5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RnVsbE5hbWUoKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5nZXRHaXZlbk5hbWUoKSwgXCIgXCIpLmNvbmNhdCh0aGlzLmdldEZhbWlseU5hbWUoKSk7XG4gICAgfSAvLyBUT0RPOiBpMThuLi4uXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRGYW1pbHlOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZhbWlseU5hbWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5mYW1pbHlOYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRGYW1pbHlOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEZhbWlseU5hbWUodikge1xuICAgICAgdGhpcy5mYW1pbHlOYW1lID0gdjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0R2l2ZW5OYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEdpdmVuTmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdpdmVuTmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic2V0R2l2ZW5OYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEdpdmVuTmFtZSh2KSB7XG4gICAgICB0aGlzLmdpdmVuTmFtZSA9IHY7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFN0YXJ0RGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGFydERhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGFydERhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNldFN0YXJ0RGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTdGFydERhdGUodikge1xuICAgICAgdGhpcy5zdGFydERhdGUgPSB2O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRFbXBsb3ltZW50U3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEVtcGxveW1lbnRTdGF0dXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbXBsb3ltZW50U3RhdHVzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRFbXBsb3ltZW50U3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldEVtcGxveW1lbnRTdGF0dXModikge1xuICAgICAgdGhpcy5lbXBsb3ltZW50U3RhdHVzID0gdjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0Um9sZU5hbWVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJvbGVOYW1lcygpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvbGVzLm1hcChmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gci5uYW1lO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc1JvbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzUm9sZShyb2xlTmFtZSkge1xuICAgICAgcmV0dXJuICEhdGhpcy5hdHRhY2hlZFJvbGVzQnlOYW1lW3JvbGVOYW1lXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXR0YWNoZWRSb2xlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBdHRhY2hlZFJvbGVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9sZXMuc2xpY2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QXR0YWNoZWRSb2xlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF0dGFjaGVkUm9sZShyb2xlTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXR0YWNoZWRSb2xlc0J5TmFtZVtyb2xlTmFtZV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldE1hbmFnZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1hbmFnZXJzKCkge1xuICAgICAgcmV0dXJuIHRoaXMucm9sZXMubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIHJldHVybiByLm1hbmFnZXI7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0UmVwb3J0c0J5Um9sZU5hbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UmVwb3J0c0J5Um9sZU5hbWUocm9sZU5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlcG9ydHNCeVJlcG9ydFJvbGVbcm9sZU5hbWVdIHx8IFtdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRSZXBvcnRzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFJlcG9ydHMoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnJlcG9ydHNCeVJlcG9ydFJvbGUpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCByZXBzKSB7XG4gICAgICAgIHJldHVybiBhY2MuY29uY2F0KHJlcHMpO1xuICAgICAgfSwgW10pLmZpbHRlcihmdW5jdGlvbiAocmVwKSB7XG4gICAgICAgIHJldHVybiByZXAuZ2V0RW1haWwoKSAhPT0gX3RoaXMuZ2V0RW1haWwoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRQYXJhbWV0ZXJzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJhbWV0ZXJzO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFmZk1lbWJlcjtcbn0oKTtcblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIkNChvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQ7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSQ0KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkNChvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5JDQobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQ0KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkkNChhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cbnZhciByb2xlUmUgPSBuZXcgUmVnRXhwKCdeSEFTX1tBLVpfXStfUk9MRSQnKTtcbnZhciBzdGFmZlBhcmFtZXRlcnMgPSBbJ1VTRVNfQ0VOVFJBTElaRURfQU5USVZJUlVTJywgJ1VTRVNfQ0VOVFJBTElaRURfRklSRVdBTEwnXTtcbnZhciB6ZXJvUmVzID0gc3RhZmZQYXJhbWV0ZXJzLm1hcChmdW5jdGlvbiAocCkge1xuICByZXR1cm4gbmV3IFJlZ0V4cChwKTtcbn0pO1xuemVyb1Jlcy5wdXNoKHJvbGVSZSk7XG5cbnZhciBTdGFmZiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YWZmKGZpbGVOYW1lKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YWZmKTtcblxuICAgIHRoaXMuZmlsZU5hbWUgPSBmaWxlTmFtZTtcbiAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKGZpbGVOYW1lKSk7XG4gICAgdGhpcy5tZW1iZXJzID0gZGF0YS5tYXAoZnVuY3Rpb24gKHJlYykge1xuICAgICAgcmV0dXJuIG5ldyBTdGFmZk1lbWJlcihyZWMpO1xuICAgIH0pO1xuICAgIHRoaXMubWFwID0gdGhpcy5tZW1iZXJzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBtZW1iZXIsIGkpIHtcbiAgICAgIGlmIChhY2NbbWVtYmVyLmdldEVtYWlsKCldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhZmYgbWVtYmVyIHdpdGggZW1haWwgJ1wiLmNvbmNhdChtZW1iZXIuZ2V0RW1haWwoKSwgXCInIGFscmVhZHkgZXhpc3RzIGF0IGVudHJ5IFwiKS5jb25jYXQoaSwgXCIuXCIpKTtcbiAgICAgIH1cblxuICAgICAgYWNjW21lbWJlci5nZXRFbWFpbCgpXSA9IG1lbWJlcjtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xuICAgIHRoaXMuY2hlY2tDb25kaXRpb24gPSBjaGVja0NvbmRpdGlvbiQzO1xuICAgIHRoaXMua2V5ID0gJ2VtYWlsJztcbiAgfSAvLyBUT0RPOiBkZXByYWNhdGVkXG5cblxuICBfY3JlYXRlQ2xhc3MoU3RhZmYsIFt7XG4gICAga2V5OiBcImdldEFsbFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBbGwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImxpc3RcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm1lbWJlcnMuc2xpY2UoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldChlbWFpbCkge1xuICAgICAgcmV0dXJuIHRoaXMubWFwW2VtYWlsXTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0QnlSb2xlTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRCeVJvbGVOYW1lKHJvbGVOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLmZpbHRlcihmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gcy5oYXNSb2xlKHJvbGVOYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGREYXRhXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERhdGEobWVtYmVyRGF0YSkge1xuICAgICAgdGhpcy5tZW1iZXJzLnB1c2gobmV3IFN0YWZmTWVtYmVyKG1lbWJlckRhdGEpKTtcbiAgICAgIHRoaXMuaHlkcmF0ZSh0aGlzLm9yZyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmUoZW1haWwpIHtcbiAgICAgIGVtYWlsID0gZW1haWwudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciBtYXRjaGVzID0gdGhpcy5nZXRBbGwoKS5maWx0ZXIoZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICByZXR1cm4gbWVtYmVyLmVtYWlsID09PSBlbWFpbDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgc3RhZmYgbWVtYmVyIHdpdGggZW1haWwgXCIuY29uY2F0KGVtYWlsLCBcIi5cIikpO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhZmYgZGF0YWJhc2UgY29uc2lzdGVuY3kgZXJyb3IuIEZvdW5kIG11bHRpcGxlIGVudGlyZXMgZm9yICdcIi5jb25jYXQoZW1haWwsIFwiJy5cIikpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuZmlsdGVyKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIG1lbWJlci5lbWFpbCAhPT0gZW1haWw7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid3JpdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JpdGUoKSB7XG4gICAgICB3cml0ZUZpbGVTeW5jKHRoaXMuZmlsZU5hbWUsIHRoaXMudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFN3YXBzIG91dCByZWZlcmVuY2VzIHRvIHJvbGVzIGFuZCBtYW5hZ2VycyBieSBuYW1lIGFuZCBlbWFpbCAocmVzcGVjdGl2ZWx5KSB3aXRoIHRoZSBhY3R1YWwgcm9sZSBhbmQgbWFuYWdlclxuICAgICAqIG9iamVjdHMuXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJoeWRyYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGh5ZHJhdGUob3JnKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB0aGlzLm9yZyA9IG9yZztcbiAgICAgIHRoaXMubWVtYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHMucm9sZXMgPSBzLnJvbGVzLnJlZHVjZShmdW5jdGlvbiAocm9sZXMsIHJlYykge1xuICAgICAgICAgIC8vIFllcywgYm90aCBtYXBzIEFORCBoYXMgc2lkZSBlZmZlY3RzLiBTdWNrIGl0IVxuICAgICAgICAgIGlmIChyZWMgaW5zdGFuY2VvZiBBdHRhY2hlZFJvbGUpIHJldHVybiByZWM7IC8vIFZlcmlmeSByZWMgcmVmZXJlbmNlcyBhIGdvb2Qgcm9sZS4gTm90ZSwgd2UgY2hlY2sgdGhlICdvcmdTdHJ1Y3R1cmUnIGJlY2F1c2UgdGhlcmUgbWF5IGJlIGEgcm9sZSBkZWZpbmVkXG4gICAgICAgICAgLy8gZ2xvYmFsbHkgdGhhdCBpc24ndCBpbiB1c2UgaW4gdGhlIG9yZy5cblxuICAgICAgICAgIHZhciByb2xlID0gb3JnLmdldFJvbGVzKCkuZ2V0KHJlYy5uYW1lLCB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGVyck1zZ0dlbjogZnVuY3Rpb24gZXJyTXNnR2VuKG5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFwiU3RhZmYgbWVtYmVyICdcIi5jb25jYXQocy5nZXRFbWFpbCgpLCBcIicgY2xhaW1zIHVua25vd24gcm9sZSAnXCIpLmNvbmNhdChuYW1lLCBcIicuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJvbGVzLnB1c2goY29udmVydFJvbGVUb0F0dGFjaGVkKHMsIHJlYywgcm9sZSwgX3RoaXMub3JnKSk7XG4gICAgICAgICAgcHJvY2Vzc0ltcGxpZWRSb2xlcyhyb2xlcywgcywgcmVjLCByb2xlLCBfdGhpcy5vcmcpO1xuICAgICAgICAgIHJldHVybiByb2xlcztcbiAgICAgICAgfSwgW10pOyAvLyBTdGFmZk1lbWJlciByb2xlcyByZWR1Y2VcbiAgICAgIH0pOyAvLyBTdGFmZk1lbWJlciBpdGVyYXRpb25cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUgSlNPTiBzdHJpbmcgb2YgdGhlIGRlLWh5ZHJhdGVkIGRhdGEgc3RydWN0dXJlLlxuICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJ0b1N0cmluZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHZhciBmbGF0SnNvbiA9IHRoaXMubWVtYmVycy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgICAgZW1haWw6IHMuZ2V0RW1haWwoKSxcbiAgICAgICAgICBmYW1pbHlOYW1lOiBzLmdldEZhbWlseU5hbWUoKSxcbiAgICAgICAgICBnaXZlbk5hbWU6IHMuZ2V0R2l2ZW5OYW1lKCksXG4gICAgICAgICAgc3RhcnREYXRlOiBzLmdldFN0YXJ0RGF0ZSgpLFxuICAgICAgICAgIHJvbGVzOiBbXSxcbiAgICAgICAgICBlbXBsb3ltZW50U3RhdHVzOiBzLmdldEVtcGxveW1lbnRTdGF0dXMoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzOiBzLmdldFBhcmFtZXRlcnMoKVxuICAgICAgICB9O1xuICAgICAgICBzLnJvbGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dGFjaGVkUm9sZSkge1xuICAgICAgICAgIHZhciByb2xlRGF0YSA9IHtcbiAgICAgICAgICAgIG5hbWU6IGF0dGFjaGVkUm9sZS5nZXROYW1lKClcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGF0dGFjaGVkUm9sZS5nZXRNYW5hZ2VyKCkpIHtcbiAgICAgICAgICAgIHJvbGVEYXRhLm1hbmFnZXIgPSBhdHRhY2hlZFJvbGUuZ2V0TWFuYWdlcigpLmdldEVtYWlsKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGF0dGFjaGVkUm9sZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgcm9sZURhdGEucXVhbGlmaWVyID0gYXR0YWNoZWRSb2xlLmdldFF1YWxpZmllcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChhdHRhY2hlZFJvbGUuaXNBY3RpbmcoKSkge1xuICAgICAgICAgICAgcm9sZURhdGEuYWN0aW5nID0gYXR0YWNoZWRSb2xlLmlzQWN0aW5nKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGF0YS5yb2xlcy5wdXNoKHJvbGVEYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZmxhdEpzb24sIG51bGwsICcgICcpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGFmZjtcbn0oKTtcblxudmFyIGNvbnZlcnRSb2xlVG9BdHRhY2hlZCA9IGZ1bmN0aW9uIGNvbnZlcnRSb2xlVG9BdHRhY2hlZChzLCByZWMsIHJvbGUsIG9yZykge1xuICBpZiAocm9sZS5pc1RpdHVsYXIoKSkge1xuICAgIC8vIG5vdGljZSB3ZSBjaGVjayAncmVjJywgbm90ICdyb2xlJzsgcm9sZSBtYXkgYmUgaW1wbGllZC5cbiAgICB2YXIgb3JnTm9kZSA9IG9yZy5vcmdTdHJ1Y3R1cmUuZ2V0Tm9kZUJ5Um9sZU5hbWUocmVjLm5hbWUpO1xuXG4gICAgaWYgKG9yZ05vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3RhZmYgbWVtYmVyICdcIi5jb25jYXQocy5nZXRFbWFpbCgpLCBcIicgY2xhaW1zIHJvbGUgJ1wiKS5jb25jYXQocmVjLm5hbWUsIFwiJyBub3QgdXNlZCBpbiB0aGlzIG9yZy5cIikpO1xuICAgIH0gLy8gVE9ETzogY2hlY2sgdGhlIHByaW0gbWFuYWdlciBmcm9tIHRoZSBvcmcgc3RydWN0dXJlIHBlcnNlY3RpdmVcbiAgICAvLyBvcmdOb2RlLmdldFByaW1NbmdyKCkgIT09IG51bGxcblxuICB9IC8vIFRPRE86IHRoaXMgaXMgb25seSB2YWxpZCBmb3IgdGl0dWxhciByb2xlcywgeWVhaD8gbmVzdCB0aGlzIGlmLi4uXG5cblxuICB2YXIgcm9sZU1hbmFnZXIgPSBudWxsO1xuXG4gIGlmIChyZWMubWFuYWdlcikge1xuICAgIC8vIFRoZW4gcmVwbGFjZSBtYW5hZ2VyIElEIHdpdGggbWFuYWdlciBvYmplY3QgYW5kIGFkZCBvdXJzZWx2ZXMgdG8gdGhlaXIgcmVwb3J0c1xuICAgIC8vIGNvbnNvbGUuZXJyb3IoYGNvbnZlcnRpbmcgd2l0aCBtYW5hZ2VyOiAke3JlYy5tYW5hZ2VyfWApIC8vIERFQlVHXG4gICAgcm9sZU1hbmFnZXIgPSBvcmcuZ2V0U3RhZmYoKS5nZXQocmVjLm1hbmFnZXIpO1xuXG4gICAgaWYgKHJvbGVNYW5hZ2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbWFuYWdlciAnXCIuY29uY2F0KHJlYy5tYW5hZ2VyLCBcIicgZm91bmQgd2hpbGUgbG9hZGluZyBzdGFmZiBtZW1iZXIgJ1wiKS5jb25jYXQocy5nZXRFbWFpbCgpLCBcIicuXCIpKTtcbiAgICB9IC8vIEFkZCBvdXJzZWx2ZXMgdG8gdGhlIG1hbmFnZXIncyByZXBvcnRzXG5cblxuICAgIGlmIChyb2xlTWFuYWdlci5yZXBvcnRzQnlSZXBvcnRSb2xlW3JvbGUubmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcm9sZU1hbmFnZXIucmVwb3J0c0J5UmVwb3J0Um9sZVtyb2xlLm5hbWVdID0gW107XG4gICAgfVxuXG4gICAgcm9sZU1hbmFnZXIucmVwb3J0c0J5UmVwb3J0Um9sZVtyb2xlLm5hbWVdLnB1c2gocyk7XG4gIH1cblxuICB2YXIgYXR0YWNoZWRSb2xlID0gbmV3IEF0dGFjaGVkUm9sZShyb2xlLCByZWMsIHJvbGVNYW5hZ2VyLCBzKTtcbiAgcy5hdHRhY2hlZFJvbGVzQnlOYW1lW3JvbGUubmFtZV0gPSBhdHRhY2hlZFJvbGU7XG4gIHJldHVybiBhdHRhY2hlZFJvbGU7XG59O1xuXG52YXIgcHJvY2Vzc0ltcGxpZWRSb2xlcyA9IGZ1bmN0aW9uIHByb2Nlc3NJbXBsaWVkUm9sZXMocm9sZXMsIHMsIHJlYywgcm9sZSwgb3JnKSB7XG4gIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciQ0KHJvbGUuaW1wbGllcyB8fCBbXSksXG4gICAgICBfc3RlcDtcblxuICB0cnkge1xuICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX3N0ZXAkdmFsdWUgPSBfc3RlcC52YWx1ZSxcbiAgICAgICAgICBpbXBsaWVkUm9sZU5hbWUgPSBfc3RlcCR2YWx1ZS5uYW1lLFxuICAgICAgICAgIG1uZ3JQcm90b2NvbCA9IF9zdGVwJHZhbHVlLm1uZ3JQcm90b2NvbDtcbiAgICAgIHZhciBpbXBsaWVkUm9sZSA9IG9yZy5nZXRSb2xlcygpLmdldChpbXBsaWVkUm9sZU5hbWUsIHtcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIGVyck1zZ0dlbjogZnVuY3Rpb24gZXJyTXNnR2VuKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gXCJTdGFmZiBtZW1iZXIgJ1wiLmNvbmNhdChzLmdldEVtYWlsKCksIFwiJyBjbGFpbXMgdW5rbm93biByb2xlICdcIikuY29uY2F0KG5hbWUsIFwiJyAoYnkgaW1wbGljYXRpb24pLlwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIGNvbnNvbGUuZXJyb3IoYFByb2Nlc3Npbmcgc3RhZmYgaW1wbGllZCByb2xlOiAke3MuZ2V0RW1haWwoKX0vJHtpbXBsaWVkUm9sZU5hbWV9YCkgLy8gREVCVUdcblxuICAgICAgdmFyIG1hbmFnZXIgPSBtbmdyUHJvdG9jb2wgPT09ICdzZWxmJyA/IHMuZ2V0RW1haWwoKSA6IG1uZ3JQcm90b2NvbCA9PT0gJ3NhbWUnID8gcmVjLm1hbmFnZXIgOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfShuZXcgRXJyb3IoXCJVbmtvd24gKG9yIHVuZGVmaW5lZD8pIG1hbmFnZXIgcHJvdG9jb2wgJ1wiLmNvbmNhdChtbmdyUHJvdG9jb2wsIFwiJyBmb3VuZCB3aGlsZSBwcm9jZXNzaW5nIHN0YWZmLlwiKSkpO1xuICAgICAgdmFyIGltcGxpZWRSZWMgPSB7XG4gICAgICAgIG5hbWU6IGltcGxpZWRSb2xlTmFtZSxcbiAgICAgICAgbWFuYWdlcjogbWFuYWdlclxuICAgICAgfTtcbiAgICAgIHJvbGVzLnB1c2goY29udmVydFJvbGVUb0F0dGFjaGVkKHMsIGltcGxpZWRSZWMsIGltcGxpZWRSb2xlLCBvcmcpKTtcbiAgICAgIHByb2Nlc3NJbXBsaWVkUm9sZXMocm9sZXMsIHMsIGltcGxpZWRSZWMsIGltcGxpZWRSb2xlLCBvcmcpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBfaXRlcmF0b3IuZigpO1xuICB9XG59O1xuLyoqXG4qIE9ibGlnaXRvcnkgJ2NoZWNrQ29uZGl0aW9uJyBmdW5jdGlvbiBwcm92aWRlZCBieSB0aGUgQVBJIGZvciBwcm9jZXNzaW5nIGluY2x1c2lvbiBvciBleGNsdXNpb24gb2YgU3RhZmYgdGFyZ2V0cyBpblxuKiBhbiBhdWRpdC5cbiovXG5cblxudmFyIGNoZWNrQ29uZGl0aW9uJDMgPSBmdW5jdGlvbiBjaGVja0NvbmRpdGlvbihjb25kaXRpb24sIG1lbWJlcikge1xuICB2YXIgcGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIFNFQ19UUklWSUFMOiAxLFxuICAgIEFMV0FZUzogMSxcbiAgICBORVZFUjogMFxuICB9LCBtZW1iZXIucGFyYW1ldGVycyk7IC8vIFRPRE86IHRlc3QgaWYgbGVhdmluZyBpdCAndHJ1ZScvJ2ZhbHNlJyB3b3Jrcy5cblxuICBwYXJhbWV0ZXJzLklTX0VNUExPWUVFID0gbWVtYmVyLmdldEVtcGxveW1lbnRTdGF0dXMoKSA9PT0gJ2VtcGxveWVlJyA/IDEgOiAwO1xuICBwYXJhbWV0ZXJzLklTX0NPTlRSQUNUT1IgPSBtZW1iZXIuZ2V0RW1wbG95bWVudFN0YXR1cygpID09PSAnY29udHJhY3RvcicgPyAxIDogMDtcbiAgbWVtYmVyLmdldFJvbGVOYW1lcygpLmZvckVhY2goZnVuY3Rpb24gKHJvbGUpIHtcbiAgICBwYXJhbWV0ZXJzW1wiSEFTX1wiLmNvbmNhdChyb2xlLnRvVXBwZXJDYXNlKCkucmVwbGFjZSgvIC9nLCAnXycpLCBcIl9ST0xFXCIpXSA9IDE7XG4gIH0pO1xuICB2YXIgZXZhbHVhdG9yID0gbmV3IEV2YWx1YXRvcih7XG4gICAgcGFyYW1ldGVyczogcGFyYW1ldGVycyxcbiAgICB6ZXJvUmVzOiB6ZXJvUmVzXG4gIH0pO1xuICByZXR1cm4gZXZhbHVhdG9yLmV2YWxUcnV0aChjb25kaXRpb24pO1xufTtcblxuU3RhZmYuY2hlY2tDb25kaXRpb24gPSBjaGVja0NvbmRpdGlvbiQzO1xuXG4vKipcbiogQmFzaWMgbWV0aG9kcyBmb3IgYWNjZXNzaW5nIHRoZSB2ZW5kb3JzL3Byb2R1Y3QgZGF0YS4gTm90ZSB0aGF0IGZ1bmN0aW9uYWxpdHkgaXMgc3BsaXQgdXAgbGlrZSB0aGlzIHRvIG1ha2UgdGhlc2VcbiogZnVuY3Rpb25zIGVhc2llciB0byB1bml0IHRlc3QuXG4qL1xuXG4vKipcbiogUmV0cmlldmVzIGEgc2luZ2xlIHZlbmRvci9wcm9kdWN0IGVudHJ5IGJ5IG5hbWUuXG4qL1xudmFyIGdldCQyID0gZnVuY3Rpb24gZ2V0KGRhdGEsIG5hbWUpIHtcbiAgdmFyIF9kYXRhJHZlbmRvcnM7XG5cbiAgcmV0dXJuIChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGF0YSR2ZW5kb3JzID0gZGF0YS52ZW5kb3JzKSA9PT0gbnVsbCB8fCBfZGF0YSR2ZW5kb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGF0YSR2ZW5kb3JzW25hbWVdKSAmJiB0b1N0YW5kYWxvbmUkMihkYXRhLCBuYW1lKTtcbn07XG5cbnZhciBsaXN0JDIgPSBmdW5jdGlvbiBsaXN0KGRhdGEpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEudmVuZG9ycykgfHwge30pLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiB0b1N0YW5kYWxvbmUkMihkYXRhLCBrZXkpO1xuICB9KTtcbn07IC8vIGhlbHBlci9ub24tZXhwb3J0ZWQgaXRlbXNcblxuLyoqXG4qIFNpbmNlIG91ciBkYXRhIGlzIGNvbXBsZXRlIGFzIGlzLCB0aGlzIGp1c3QgbWFrZXMgYSBjb3B5IGZvciBzYWZldHkncyBzYWtlLlxuKi9cblxuXG52YXIgdG9TdGFuZGFsb25lJDIgPSBmdW5jdGlvbiB0b1N0YW5kYWxvbmUoZGF0YSwgbmFtZSkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7XG4gICAgaWQ6IG5hbWVcbiAgfSwgZGF0YS52ZW5kb3JzW25hbWVdKTtcbn07XG5cbi8qKlxuKiBQdWJsaWMgQVBJIGZvciBtYW5hZ2luZyB2ZW5kb3IvcHJvZHVjdCByZWNvcmRzLiBVc2VzIHRoZSBgVmVuZG9yc2AgbGlicmFyeSwgd2hpY2ggYWN0dWFsbHkgaW1wbGVtZW50cyB0aGUgZnVuY3Rpb25zLlxuKiBUaGUgbGlicmFyeSBpcyBzcGxpdCBsaWtlIHRoaXMgdG8gbWFrZSB0ZXN0aW5nIGVhc2llci5cbiovXG5cbnZhciBWZW5kb3JzQVBJID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmVuZG9yc0FQSShvcmcpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmVuZG9yc0FQSSk7XG5cbiAgICB0aGlzLm9yZyA9IG9yZztcbiAgICB0aGlzLmNoZWNrQ29uZGl0aW9uID0gVmVuZG9yc0FQSS5jaGVja0NvbmRpdGlvbjtcbiAgICB0aGlzLmtleSA9ICdOYW1lJztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhWZW5kb3JzQVBJLCBbe1xuICAgIGtleTogXCJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0KG5hbWUpIHtcbiAgICAgIHJldHVybiBnZXQkMih0aGlzLm9yZy5pbm5lclN0YXRlLCBuYW1lKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwibGlzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0KCkge1xuICAgICAgcmV0dXJuIGxpc3QkMih0aGlzLm9yZy5pbm5lclN0YXRlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmVuZG9yc0FQSTtcbn0oKTtcbi8qKlxuKiBPYmxpZ2l0b3J5ICdjaGVja0NvbmRpdGlvbicgZnVuY3Rpb24gcHJvdmlkZWQgYnkgdGhlIEFQSSBmb3IgcHJvY2Vzc2luZyBpbmNsdXNpb24gb3IgZXhjbHVzaW9uIG9mIEFjY291bnQgdGFyZ2V0cyBpblxuKiBhbiBhdWRpdC4gV2UgZG8gdGhpcyB3ZWlyZCAnZGVmaW5lUHJvcGVydHknIHRoaW5nIGJlY2F1c2UgaXQgZWZmZWN0aXZlbHkgZ2l2ZXMgdXMgYSAnc3RhdGljIGNvbnN0J1xuKi9cblxuXG52YXIgY2hlY2tDb25kaXRpb24kNCA9IGZ1bmN0aW9uIGNoZWNrQ29uZGl0aW9uKGNvbmRpdGlvbiwgcHJvZHVjdFJlYykge1xuICB2YXIgcGFyYW1ldGVycyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIFNFQ19UUklWSUFMOiAxLFxuICAgIEFMV0FZUzogMSxcbiAgICBORVZFUjogMCxcbiAgICBOT05FOiAwLFxuICAgIExPVzogMSxcbiAgICBNT0RFUkFURTogMixcbiAgICBISUdIOiAzLFxuICAgIEVYSVNURU5USUFMOiA0XG4gIH0sIHByb2R1Y3RSZWMucGFyYW1ldGVycyk7IC8vIFRPRE86IGNyZWF0ZSBhIGhhbmRseSBjb252ZXJzaW9uIGNsYXNzL2xpYiBmb3IgdGhlIHNlbnNpdGl2aXR5IGNvZGVzOyBTZW5zaXRpdml0eUNvZGU/XG5cbiAgdmFyIHNlbnNpdGl2aXR5Q29kZSA9IHByb2R1Y3RSZWNbJ1NlbnNpdGl2aXR5IGFwcHJvdmFsJ10gfHwgJ3F1YXJhbnRpbmVkIG9ubHknO1xuXG4gIHN3aXRjaCAoc2Vuc2l0aXZpdHlDb2RlKSB7XG4gICAgY2FzZSAndG9wIHNlY3JldCB1c2UnOlxuICAgICAgcGFyYW1ldGVycy5TRU5TSVRJVklUWSA9IDA7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3NlY3JldCB1c2UnOlxuICAgICAgcGFyYW1ldGVycy5TRU5TSVRJVklUWSA9IDE7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3NlbnNpdGl2ZSB1c2UnOlxuICAgICAgcGFyYW1ldGVycy5TRU5TSVRJVklUWSA9IDI7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2dlbmVyYWwgdXNlJzpcbiAgICAgIHBhcmFtZXRlcnMuU0VOU0lUSVZJVFkgPSAzO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdxdWFyYW50aW5lZCBvbmx5JzpcbiAgICAgIHBhcmFtZXRlcnMuU0VOU0lUSVZJVFkgPSA0O1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBzZW5zaXRpdml0eSBhcHByb3ZhbCBjb2RlOiAnXCIuY29uY2F0KHNlbnNpdGl2aXR5Q29kZSwgXCInLlwiKSk7XG4gIH0gLy8gY29uZmlndXJlIHRoZSBub24tZXhpc3RlbnQgdGFncyB0byAnemVybycgb3V0XG4gIC8vIGNvbnN0IHplcm9SZXMgPSBbL0JVU0lORVNTfE5FVFdPUktJTkcvXVxuXG5cbiAgdmFyIHplcm9SZXMgPSBbXTtcbiAgdmFyIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3Ioe1xuICAgIHBhcmFtZXRlcnM6IHBhcmFtZXRlcnMsXG4gICAgemVyb1JlczogemVyb1Jlc1xuICB9KTtcbiAgcmV0dXJuIGV2YWx1YXRvci5ldmFsVHJ1dGgoY29uZGl0aW9uKTtcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZW5kb3JzQVBJLCAnY2hlY2tDb25kaXRpb24nLCB7XG4gIHZhbHVlOiBjaGVja0NvbmRpdGlvbiQ0LFxuICB3cml0YWJsZTogZmFsc2UsXG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogZmFsc2Vcbn0pO1xuXG4vKiBAZmxvdyAqL1xuLyo6OlxuXG50eXBlIERvdGVudlBhcnNlT3B0aW9ucyA9IHtcbiAgZGVidWc/OiBib29sZWFuXG59XG5cbi8vIGtleXMgYW5kIHZhbHVlcyBmcm9tIHNyY1xudHlwZSBEb3RlbnZQYXJzZU91dHB1dCA9IHsgW3N0cmluZ106IHN0cmluZyB9XG5cbnR5cGUgRG90ZW52Q29uZmlnT3B0aW9ucyA9IHtcbiAgcGF0aD86IHN0cmluZywgLy8gcGF0aCB0byAuZW52IGZpbGVcbiAgZW5jb2Rpbmc/OiBzdHJpbmcsIC8vIGVuY29kaW5nIG9mIC5lbnYgZmlsZVxuICBkZWJ1Zz86IHN0cmluZyAvLyB0dXJuIG9uIGxvZ2dpbmcgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlc1xufVxuXG50eXBlIERvdGVudkNvbmZpZ091dHB1dCA9IHtcbiAgcGFyc2VkPzogRG90ZW52UGFyc2VPdXRwdXQsXG4gIGVycm9yPzogRXJyb3Jcbn1cblxuKi9cblxuXG5cblxuZnVuY3Rpb24gbG9nIChtZXNzYWdlIC8qOiBzdHJpbmcgKi8pIHtcbiAgY29uc29sZS5sb2coYFtkb3RlbnZdW0RFQlVHXSAke21lc3NhZ2V9YCk7XG59XG5cbmNvbnN0IE5FV0xJTkUgPSAnXFxuJztcbmNvbnN0IFJFX0lOSV9LRVlfVkFMID0gL15cXHMqKFtcXHcuLV0rKVxccyo9XFxzKiguKik/XFxzKiQvO1xuY29uc3QgUkVfTkVXTElORVMgPSAvXFxcXG4vZztcbmNvbnN0IE5FV0xJTkVTX01BVENIID0gL1xcbnxcXHJ8XFxyXFxuLztcblxuLy8gUGFyc2VzIHNyYyBpbnRvIGFuIE9iamVjdFxuZnVuY3Rpb24gcGFyc2UgKHNyYyAvKjogc3RyaW5nIHwgQnVmZmVyICovLCBvcHRpb25zIC8qOiA/RG90ZW52UGFyc2VPcHRpb25zICovKSAvKjogRG90ZW52UGFyc2VPdXRwdXQgKi8ge1xuICBjb25zdCBkZWJ1ZyA9IEJvb2xlYW4ob3B0aW9ucyAmJiBvcHRpb25zLmRlYnVnKTtcbiAgY29uc3Qgb2JqID0ge307XG5cbiAgLy8gY29udmVydCBCdWZmZXJzIGJlZm9yZSBzcGxpdHRpbmcgaW50byBsaW5lcyBhbmQgcHJvY2Vzc2luZ1xuICBzcmMudG9TdHJpbmcoKS5zcGxpdChORVdMSU5FU19NQVRDSCkuZm9yRWFjaChmdW5jdGlvbiAobGluZSwgaWR4KSB7XG4gICAgLy8gbWF0Y2hpbmcgXCJLRVknIGFuZCAnVkFMJyBpbiAnS0VZPVZBTCdcbiAgICBjb25zdCBrZXlWYWx1ZUFyciA9IGxpbmUubWF0Y2goUkVfSU5JX0tFWV9WQUwpO1xuICAgIC8vIG1hdGNoZWQ/XG4gICAgaWYgKGtleVZhbHVlQXJyICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleVZhbHVlQXJyWzFdO1xuICAgICAgLy8gZGVmYXVsdCB1bmRlZmluZWQgb3IgbWlzc2luZyB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5nXG4gICAgICBsZXQgdmFsID0gKGtleVZhbHVlQXJyWzJdIHx8ICcnKTtcbiAgICAgIGNvbnN0IGVuZCA9IHZhbC5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgaXNEb3VibGVRdW90ZWQgPSB2YWxbMF0gPT09ICdcIicgJiYgdmFsW2VuZF0gPT09ICdcIic7XG4gICAgICBjb25zdCBpc1NpbmdsZVF1b3RlZCA9IHZhbFswXSA9PT0gXCInXCIgJiYgdmFsW2VuZF0gPT09IFwiJ1wiO1xuXG4gICAgICAvLyBpZiBzaW5nbGUgb3IgZG91YmxlIHF1b3RlZCwgcmVtb3ZlIHF1b3Rlc1xuICAgICAgaWYgKGlzU2luZ2xlUXVvdGVkIHx8IGlzRG91YmxlUXVvdGVkKSB7XG4gICAgICAgIHZhbCA9IHZhbC5zdWJzdHJpbmcoMSwgZW5kKTtcblxuICAgICAgICAvLyBpZiBkb3VibGUgcXVvdGVkLCBleHBhbmQgbmV3bGluZXNcbiAgICAgICAgaWYgKGlzRG91YmxlUXVvdGVkKSB7XG4gICAgICAgICAgdmFsID0gdmFsLnJlcGxhY2UoUkVfTkVXTElORVMsIE5FV0xJTkUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZW1vdmUgc3Vycm91bmRpbmcgd2hpdGVzcGFjZVxuICAgICAgICB2YWwgPSB2YWwudHJpbSgpO1xuICAgICAgfVxuXG4gICAgICBvYmpba2V5XSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKGRlYnVnKSB7XG4gICAgICBsb2coYGRpZCBub3QgbWF0Y2gga2V5IGFuZCB2YWx1ZSB3aGVuIHBhcnNpbmcgbGluZSAke2lkeCArIDF9OiAke2xpbmV9YCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gb2JqXG59XG5cbi8vIFBvcHVsYXRlcyBwcm9jZXNzLmVudiBmcm9tIC5lbnYgZmlsZVxuZnVuY3Rpb24gY29uZmlnIChvcHRpb25zIC8qOiA/RG90ZW52Q29uZmlnT3B0aW9ucyAqLykgLyo6IERvdGVudkNvbmZpZ091dHB1dCAqLyB7XG4gIGxldCBkb3RlbnZQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuZW52Jyk7XG4gIGxldCBlbmNvZGluZyAvKjogc3RyaW5nICovID0gJ3V0ZjgnO1xuICBsZXQgZGVidWcgPSBmYWxzZTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnBhdGggIT0gbnVsbCkge1xuICAgICAgZG90ZW52UGF0aCA9IG9wdGlvbnMucGF0aDtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZW5jb2RpbmcgIT0gbnVsbCkge1xuICAgICAgZW5jb2RpbmcgPSBvcHRpb25zLmVuY29kaW5nO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kZWJ1ZyAhPSBudWxsKSB7XG4gICAgICBkZWJ1ZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBzcGVjaWZ5aW5nIGFuIGVuY29kaW5nIHJldHVybnMgYSBzdHJpbmcgaW5zdGVhZCBvZiBhIGJ1ZmZlclxuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlKGZzX19kZWZhdWx0LnJlYWRGaWxlU3luYyhkb3RlbnZQYXRoLCB7IGVuY29kaW5nIH0pLCB7IGRlYnVnIH0pO1xuXG4gICAgT2JqZWN0LmtleXMocGFyc2VkKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHByb2Nlc3MuZW52LCBrZXkpKSB7XG4gICAgICAgIHByb2Nlc3MuZW52W2tleV0gPSBwYXJzZWRba2V5XTtcbiAgICAgIH0gZWxzZSBpZiAoZGVidWcpIHtcbiAgICAgICAgbG9nKGBcIiR7a2V5fVwiIGlzIGFscmVhZHkgZGVmaW5lZCBpbiBcXGBwcm9jZXNzLmVudlxcYCBhbmQgd2lsbCBub3QgYmUgb3ZlcndyaXR0ZW5gKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7IHBhcnNlZCB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlcnJvcjogZSB9XG4gIH1cbn1cblxudmFyIGNvbmZpZ18xID0gY29uZmlnO1xudmFyIHBhcnNlXzEgPSBwYXJzZTtcblxudmFyIG1haW4gPSB7XG5cdGNvbmZpZzogY29uZmlnXzEsXG5cdHBhcnNlOiBwYXJzZV8xXG59O1xuXG52YXIgbG9hZEJhc2hTZXR0aW5ncyA9IGZ1bmN0aW9uIGxvYWRCYXNoU2V0dGluZ3Moc2V0dGluZ3NQYXRoKSB7XG4gIGlmICghZXhpc3RzU3luYyhzZXR0aW5nc1BhdGgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRGlkIG5vdCBmaW5kIGV4cGVjdGVkIHNldHRpbmdzIGZpbGU6ICdcIi5jb25jYXQoc2V0dGluZ3NQYXRoLCBcIidcIikpO1xuICB9IC8vIGVsc2UgY29udGludWVcblxuXG4gIHZhciBlbnZSZXN1bHQgPSBtYWluLmNvbmZpZyh7XG4gICAgcGF0aDogc2V0dGluZ3NQYXRoXG4gIH0pO1xuXG4gIGlmIChlbnZSZXN1bHQuZXJyb3IpIHtcbiAgICB0aHJvdyBlbnZSZXN1bHQuZXJyb3I7XG4gIH1cblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVxdWlyZWRQYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlcXVpcmVkUGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGZvciAodmFyIF9pID0gMCwgX3JlcXVpcmVkUGFyYW1zID0gcmVxdWlyZWRQYXJhbXM7IF9pIDwgX3JlcXVpcmVkUGFyYW1zLmxlbmd0aDsgX2krKykge1xuICAgIHZhciByZXFQYXJhbSA9IF9yZXF1aXJlZFBhcmFtc1tfaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnZbcmVxUGFyYW1dID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkRpZCBub3QgZmluZCBleHBlY3RlZCAnXCIuY29uY2F0KHJlcVBhcmFtLCBcIicgdmFsdWUgaW4gc2V0dGluZ3MgZmlsZTogXCIpLmNvbmNhdChzZXR0aW5nc1BhdGgpKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBsb2FkT3JnU3RhdGUgPSBmdW5jdGlvbiBsb2FkT3JnU3RhdGUoZGF0YVBhdGgpIHtcbiAgdmFyIGxpcVNldHRpbmdzUGF0aCA9IFwiXCIuY29uY2F0KHByb2Nlc3MuZW52LkhPTUUsIFwiLy5saXEvc2V0dGluZ3Muc2hcIik7XG4gIGxvYWRCYXNoU2V0dGluZ3MobGlxU2V0dGluZ3NQYXRoLCAnTElRX1BMQVlHUk9VTkQnKTsgLy8gZmlyc3QsIHdlIGhhbmRsZSB0aGUgb3JpZ2luYWwgYmFzaC1jZW50cmljIGFwcHJvYWNoLCBjZW50ZXJlZCBvbiBpbmRpdmlkdWFsIHNldHRpbmdzXG5cbiAgdmFyIG9yZ1NldHRpbmdzUGF0aCA9IFwiXCIuY29uY2F0KGRhdGFQYXRoLCBcIi9vcmdzL3NldHRpbmdzLnNoXCIpOyAvLyBUT0RPOiB0aGUgJ09SR19JRCcgaXMgZXhwZWN0ZWQgdG8gYmUgc2V0IGZyb20gdGhlIG9sZCBzdHlsZSBzZXR0aW5ncy5zaDsgd2Ugc2hvdWxkIHRha2UgdGhpcyBpbiB0aGUgY29uc3RydWN0b3JcblxuICBsb2FkQmFzaFNldHRpbmdzKG9yZ1NldHRpbmdzUGF0aCwgJ09SR19JRCcpOyAvLyB0aGUgJ3NldHRpbmdzLnNoJyB2YWx1ZXMgYXJlIG5vdyBhdmFpbGFsZSBvbiBwcm9jZXNzLmVudlxuICAvLyBhbmQgaGVyZSdzIHRoZSBwcm90b3R5cGUgbmV3IGFwcHJvYWNoOyB0aGUgcmVhZCBmdW5jdGlvbiBoYW5kbGVzIHRoZSAnZXhpc3RzJyBjaGVja1xuXG4gIHJldHVybiByZWFkKFwiXCIuY29uY2F0KGRhdGFQYXRoLCBcIi9vcmdzL1wiKS5jb25jYXQocHJvY2Vzcy5lbnYuT1JHX0lELCBcIi5qc29uXCIpKTtcbn07XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDUobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0OyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkkNShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5JDUobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheSQ1KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkkNShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5JDUoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbnZhciBPcmdhbml6YXRpb24gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPcmdhbml6YXRpb24oZGF0YVBhdGgsIHN0YWZmSnNvblBhdGgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3JnYW5pemF0aW9uKTtcblxuICAgIC8vIGlubmVyU3RhdGUgZGVmaW5lczpcbiAgICAvLyAqIHRoaXJkUGFydHlBY2NvdW50c1xuICAgIHRoaXMuaW5uZXJTdGF0ZSA9IGxvYWRPcmdTdGF0ZShkYXRhUGF0aCk7IC8vIFRPRE86IE1vdmUgYWxsIHRoaXMgdG8gJ2lubmVyU3RhdGUnIChmb3Igcm9sZXMgYW5kIHN0YWZmLCBieSBsb2FkaW5nIGFsbCB3aXRoIHRoZSBmZWRlcmF0ZWQganNvbiB1c2VkIGluXG4gICAgLy8gJ2xvYWRPcmdTdGF0ZScpIGFuZCBqdXN0IHVzZSB0aGUgZ2xvYmFsIGh5ZHJhdGlvbi5cblxuICAgIHRoaXMuZGF0YVBhdGggPSBkYXRhUGF0aDtcbiAgICB0aGlzLnJvbGVzID0gbmV3IFJvbGVzKHRoaXMsIHRoaXMuaW5uZXJTdGF0ZS5yb2xlcyk7XG4gICAgdGhpcy5yb2xlcy5oeWRyYXRlKCk7XG4gICAgdGhpcy5vcmdTdHJ1Y3R1cmUgPSBuZXcgT3JnU3RydWN0dXJlKFwiXCIuY29uY2F0KGRhdGFQYXRoLCBcIi9vcmdzL29yZ19zdHJ1Y3R1cmUuanNvblwiKSwgdGhpcy5yb2xlcyk7XG4gICAgdGhpcy5zdGFmZiA9IG5ldyBTdGFmZihzdGFmZkpzb25QYXRoKTtcbiAgICB0aGlzLnN0YWZmLmh5ZHJhdGUodGhpcyk7IC8vIGh5ZHJhdGUodGhpcylcblxuICAgIHRoaXMuYWNjb3VudHMgPSBuZXcgQWNjb3VudHNBUEkodGhpcyk7XG4gICAgdGhpcy5hdWRpdFJlY29yZHMgPSBuZXcgQXVkaXRSZWNvcmRzQVBJKHRoaXMpO1xuICAgIHRoaXMuYXVkaXRzID0gdGhpcy5pbm5lclN0YXRlLmF1ZGl0cztcbiAgICB0aGlzLnZlbmRvcnMgPSBuZXcgVmVuZG9yc0FQSSh0aGlzKTtcbiAgfSAvLyBUT0RPOiBkZXByZWNhdGVkOyBqdXN0IHVzZSAnb3JnLnJvbGVzJ1xuXG5cbiAgX2NyZWF0ZUNsYXNzKE9yZ2FuaXphdGlvbiwgW3tcbiAgICBrZXk6IFwiZ2V0Um9sZXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Um9sZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5yb2xlcztcbiAgICB9IC8vIFRPRE86IGRlcHJlY2F0ZWQ7IGp1c3QgdXNlICdvcmcuc3RhZmYnXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRTdGFmZlwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGFmZigpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YWZmO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRTZXR0aW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNldHRpbmcoa2V5KSB7XG4gICAgICByZXR1cm4gcHJvY2Vzcy5lbnZba2V5XTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVxdWlyZVNldHRpbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVxdWlyZVNldHRpbmcoa2V5KSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmdldFNldHRpbmcoa2V5KTtcblxuICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBjb21wYW55IHNldHRpbmcgJ1wiLmNvbmNhdChrZXksIFwiJy5cIikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImhhc1N0YWZmSW5Sb2xlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1N0YWZmSW5Sb2xlKGVtYWlsLCByb2xlTmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RhZmYoKS5nZXRCeVJvbGVOYW1lKHJvbGVOYW1lKS5zb21lKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzLmdldEVtYWlsKCkgPT09IGVtYWlsO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldE1hbmFnaW5nUm9sZXNCeU1hbmFnZWRSb2xlTmFtZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYW5hZ2luZ1JvbGVzQnlNYW5hZ2VkUm9sZU5hbWUocm9sZU5hbWUpIHtcbiAgICAgIHJldHVybiB0aGlzLm9yZ1N0cnVjdHVyZS5nZXROb2RlQnlSb2xlTmFtZShyb2xlTmFtZSkuZ2V0UG9zc2libGVNbmdycygpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZW5lcmF0ZU9yZ0NoYXJ0RGF0YVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZW5lcmF0ZU9yZ0NoYXJ0RGF0YSgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBzdHlsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogJ2RlYmFuZy9PcmdDaGFydCc7XG5cbiAgICAgIC8vIEltcGxlbWVudGF0aW9uIG5vdGVzOlxuICAgICAgLy8gVGhlIG92ZXJhbGwgc3RydWN0dXJlIGlzIGdlbmVyYXRlZCBwZXIgdGhlICdnb29nbGUtY2hhcnQnIHN0eWxlIGJ5IHByb2Nlc3NpbmcgZWFjaCByb2xlIG9mIGVhY2ggdGl0dWxhciByb2xlIG9mXG4gICAgICAvLyBlYWNoIHN0YWZmIG1lbWJlci4gQXQgdGhlIG1vbWVudCwgJ2dvb2dsZS1jaGFydCcgc3R5bGUgaXMgbW9yZSBvZiBhbiBpbnRlcm1lZGlhdGUgc3RlcCB0aGFuIGEgZmluYWwgZm9ybWF0IGFzIGl0XG4gICAgICAvLyBkb2VzIG5vdCBzdXBwb3J0IHRoZSBmdWxsIHJhbmdlIG9mIGRlc2lyZWQgZmVhdHVyZXMuIFRoZSByZXN1bHRpbmcgZGF0YSBmb3JtYXQgaXM6XG4gICAgICAvL1xuICAgICAgLy8gICAgWyAnPGluZGl2aWR1YWwgZW1haWw+L3JvbGUnLCAnPG1hbmFnZXIgZW1haWw+L3JvbGUnLCAnPHJvbGUgcXVhbGlmaWVyPicgXVxuICAgICAgaWYgKHN0eWxlID09PSAnZ29vZ2xlLWNoYXJ0Jykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107IC8vIGx1Y2tpbHksIHRoZSBnb29nbGUgb3JnIGNoYXJ0IGRvZXNuJ3QgY2FyZSB3aGV0aGVyIHdlIHNwZWNpZnkgdGhlIG5vZGVzIGluIG9yZGVyIG9yIG5vdCwgc28gaXQncyBhIHNpbXBsZVxuICAgICAgICAvLyB0cmFuc2Zvcm1cblxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZ2V0U3RhZmYoKS5nZXRBbGwoKSkuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgICAgICAgIHMuZ2V0QXR0YWNoZWRSb2xlcygpLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgICAgIGlmIChyLmlzVGl0dWxhcigpKSB7XG4gICAgICAgICAgICAgIHZhciBteUtleSA9IFwiXCIuY29uY2F0KHMuZ2V0RW1haWwoKSwgXCIvXCIpLmNvbmNhdChyLmdldE5hbWUoKSk7XG4gICAgICAgICAgICAgIHZhciBtYW5hZ2VyID0gcy5nZXRBdHRhY2hlZFJvbGUoci5nZXROYW1lKCkpLmdldE1hbmFnZXIoKTtcbiAgICAgICAgICAgICAgaWYgKCFtYW5hZ2VyKSByZXN1bHQucHVzaChbbXlLZXksICcnLCByLmdldFF1YWxpZmllcigpXSk7ZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1uZ3JFbWFpbCA9IG1hbmFnZXIuZ2V0RW1haWwoKTtcblxuICAgICAgICAgICAgICAgIHZhciBtYW5hZ2luZ1JvbGVzID0gX3RoaXMuZ2V0TWFuYWdpbmdSb2xlc0J5TWFuYWdlZFJvbGVOYW1lKHIuZ2V0TmFtZSgpKTtcblxuICAgICAgICAgICAgICAgIHZhciBtYW5hZ2luZ1JvbGUgPSBtYW5hZ2luZ1JvbGVzLmZpbmQoZnVuY3Rpb24gKG1uZ3JSb2xlKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuaGFzU3RhZmZJblJvbGUobW5nckVtYWlsLCBtbmdyUm9sZS5nZXROYW1lKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8qIGAke21uZ3JFbWFpbH0vJHtyLmdldE5hbWUoKX1gID09PSBteUtleVxuICAgICAgICAgICAgICAgICAgPyByXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0TWFuYWdpbmdSb2xlc0J5TWFuYWdlZFJvbGVOYW1lKHIuZ2V0TmFtZSgpKS5maW5kKG1uZ3JSb2xlID0+XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNTdGFmZkluUm9sZShtbmdyRW1haWwsIG1uZ3JSb2xlLmdldE5hbWUoKSlcbiAgICAgICAgICAgICAgICAgICAgKSAqL1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtYW5hZ2luZ1JvbGUpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIG1hbmFnZXIgXCIuY29uY2F0KG1hbmFnaW5nUm9sZXMubWFwKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlwiLmNvbmNhdChtbmdyRW1haWwsIFwiL1wiKS5jb25jYXQoci5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIH0pLmpvaW4oJ3wnKSwgXCIgZm9yIFwiKS5jb25jYXQobXlLZXksIFwiLlwiKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG1hbmFnZXJLZXkgPSBcIlwiLmNvbmNhdChtbmdyRW1haWwsIFwiL1wiKS5jb25jYXQobWFuYWdpbmdSb2xlLmdldE5hbWUoKSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goW215S2V5LCBtYW5hZ2VyS2V5LCByLmdldFF1YWxpZmllcigpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7IC8vIGNvbnNvbGUuZXJyb3IocmVzdWx0KSAvLyBERUJVR1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2UgaWYgKHN0eWxlID09PSAnZGViYW5nL09yZ0NoYXJ0Jykge1xuICAgICAgICAvLyBDb252ZXJ0cyBhcnJheS1iYXNlZC90YWJ1bGFyICdbc3RhZmYsIG1hbmFnZXIsIHF1YWxpZmllcl0gdG8gYSBKU09OIHRyZWUsIGFsbG93aW5nIGZvciB0aGUgc2FtZSBzdGFmZiBtZW1iZXJcbiAgICAgICAgLy8gdG8gYXBwZWFyIGF0IG11bHRpcGxlIG5vZGVzIHVzaW5nIGNvbnZlcnNpb24gYWxnb3JpdGhtIGZyb20gZGViYW5nIGRlbW9zOiBodHRwczovL2NvZGVwZW4uaW8vZGFiZW5nL3Blbi9tUlpwTEtcbiAgICAgICAgdmFyIHNlZWREYXRhID0gdGhpcy5nZW5lcmF0ZU9yZ0NoYXJ0RGF0YSgnZ29vZ2xlLWNoYXJ0JykubWFwKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgICB2YXIgX3JvdyQwJHNwbGl0ID0gcm93WzBdLnNwbGl0KC9cXC8vKSxcbiAgICAgICAgICAgICAgX3JvdyQwJHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF9yb3ckMCRzcGxpdCwgMiksXG4gICAgICAgICAgICAgIGVtYWlsID0gX3JvdyQwJHNwbGl0MlswXSxcbiAgICAgICAgICAgICAgcm9sZU5hbWUgPSBfcm93JDAkc3BsaXQyWzFdOyAvLyBpZiB0aGVyZSdzIGEgcXVhbGlmaWVyLCB3ZSBjcmVhdGUgdGhlICdlZmZlY3RpdmUnIHJvbGUgbmFtZSBoZXJlXG5cblxuICAgICAgICAgIHZhciBxdWFsaWZpZXIgPSByb3dbMl07XG4gICAgICAgICAgdmFyIHRpdGxlID0gcXVhbGlmaWVyID8gcm9sZU5hbWUucmVwbGFjZSgvXihTZW5pb3IgKT8vLCBcIiQxXCIuY29uY2F0KHF1YWxpZmllciwgXCIgXCIpKSA6IHJvbGVOYW1lO1xuXG4gICAgICAgICAgdmFyIHJvbGUgPSBfdGhpcy5yb2xlcy5nZXQocm9sZU5hbWUpO1xuXG4gICAgICAgICAgdmFyIHN0YWZmTWVtYmVyID0gX3RoaXMuZ2V0U3RhZmYoKS5nZXQoZW1haWwpO1xuXG4gICAgICAgICAgdmFyIGFjdGluZyA9IHN0YWZmTWVtYmVyLmdldEF0dGFjaGVkUm9sZShyb2xlTmFtZSkuYWN0aW5nO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogcm93WzBdLFxuICAgICAgICAgICAgaWRzOiBbcm93WzBdXSxcbiAgICAgICAgICAgIHBhcmVudF9pZDogcm93WzFdLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgbmFtZTogc3RhZmZNZW1iZXIuZ2V0RnVsbE5hbWUoKSxcbiAgICAgICAgICAgIHRpdGxlczogW3RpdGxlXSxcbiAgICAgICAgICAgIHJvbGVzOiBbcm9sZV0sXG4gICAgICAgICAgICBhY3Rpbmc6IGFjdGluZ1xuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgZGF0YSA9IHt9O1xuICAgICAgICB2YXIgY2hpbGROb2RlcyA9IFtdOyAvLyBidWlsZCBvdXQgdGhlIGZ1bGwgdHJlZSB3aXRoIGVhY2ggdGl0dWFsIHJvbGUgYmVpbmcgaXQncyBvd24gdGhpbmdcblxuICAgICAgICBzZWVkRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgIGlmICghaXRlbS5wYXJlbnRfaWQpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgaXRlbSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBqc29ubG9vcCA9IG5ldyBKU09OTG9vcChkYXRhLCAnaWQnLCAnY2hpbGRyZW4nKTtcbiAgICAgICAgICAgIGpzb25sb29wLmZpbmROb2RlQnlJZChkYXRhLCBpdGVtLnBhcmVudF9pZCwgZnVuY3Rpb24gKGVyciwgbm9kZSkge1xuICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciBmaW5kaW5nICdcIi5jb25jYXQoaXRlbS5wYXJlbnRfaWQsIFwiJzsgXCIpLmNvbmNhdChlcnIpKTtlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzLnB1c2goaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBub2RlLmNoaWxkcmVuID0gW2l0ZW1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbWVyZ2VOb2RlcyA9IGZ1bmN0aW9uIG1lcmdlTm9kZXModGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgICAgICB2YXIgX3RhcmdldCR0aXRsZXMsIF90YXJnZXQkaWRzLCBfdGFyZ2V0JHJvbGVzO1xuXG4gICAgICAgICAgKF90YXJnZXQkdGl0bGVzID0gdGFyZ2V0LnRpdGxlcykucHVzaC5hcHBseShfdGFyZ2V0JHRpdGxlcywgX3RvQ29uc3VtYWJsZUFycmF5JDEoc291cmNlLnRpdGxlcykpO1xuXG4gICAgICAgICAgKF90YXJnZXQkaWRzID0gdGFyZ2V0LmlkcykucHVzaC5hcHBseShfdGFyZ2V0JGlkcywgX3RvQ29uc3VtYWJsZUFycmF5JDEoc291cmNlLmlkcykpO1xuXG4gICAgICAgICAgKF90YXJnZXQkcm9sZXMgPSB0YXJnZXQucm9sZXMpLnB1c2guYXBwbHkoX3RhcmdldCRyb2xlcywgX3RvQ29uc3VtYWJsZUFycmF5JDEoc291cmNlLnJvbGVzKSk7XG4gICAgICAgIH07IC8vIGNvbGxhcHNlL21lcmdlIG5vZGVzIHdoZXJlIGFwcHJvcHJpYXRlXG5cblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICB2YXIganNvbmxvb3AgPSBuZXcgSlNPTkxvb3AoZGF0YSwgJ2lkJywgJ2NoaWxkcmVuJyk7XG4gICAgICAgICAganNvbmxvb3AuZmluZFBhcmVudChkYXRhLCBub2RlLCBmdW5jdGlvbiAoZXJyLCBwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIHBhcmVudCBmb3IgJ1wiLmNvbmNhdChub2RlLmlkLCBcIic7IGlzIGNoYXJ0IHZhbGlkP1wiKSk7XG5cbiAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgLy8gbWVyZ2Ugc2lkZXdheXNcbiAgICAgICAgICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDUobm9kZS5yb2xlcyksXG4gICAgICAgICAgICAgICAgICBfc3RlcDtcblxuICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgcm9sZSA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAvKiBPSywgd2FudGVkIHRvIGRvOlxuICAgICAgICAgICAgICAgICAgY29uc3Qgc2liYmxpbmdzUm9sZU5hbWVzVG9NZXJnZSA9IHJvbGUuaW1wbGllcz8uZmlsdGVyKGltcFNwZWMgPT5cbiAgICAgICAgICAgICAgICAgICAgICBpbXBTcGVjLm1uZ3JQcm90b2NvbCA9PT0gJ3NhbWUnICYmIG5vZGUuaWRzLmluZGV4T2YoYCR7bm9kZS5lbWFpbH0vJHtpbXBTcGVjLm1lcmdlV2l0aH1gKSA+PSAwIClcbiAgICAgICAgICAgICAgICAgICAgLm1hcChpID0+IGkubmFtZSlcbiAgICAgICAgICAgICAgICAgICBCdXQgZXNsaW50IGNob2tlcy4uLiBvbiB0aGUgcXVlc3Rpb24gbWFyaz8gSXQncyBub3QgY2xlYXIuIEl0IHRhbGtzIGFib3V0IGFuIHVuZGVmaW5lZCByYW5nZS5cbiAgICAgICAgICAgICAgICAgIFRyaWVkIHVwZGF0aW5nIGVzbGludCBhbmQgYmFiZWwgY29tcG9uZW50cyAyMDIxLTAzLTI4IHdpdGggbm8gc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICAgIFRPRE86IGxvb2sgaW50byB0aGlzIGFuZCByZXBvcnQgYnVnIGlmIG5vdGhpbmcgZm91bmQuXG4gICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgdmFyIHNpYmJsaW5nc1JvbGVOYW1lc1RvTWVyZ2UgPSByb2xlLmltcGxpZXMgJiYgcm9sZS5pbXBsaWVzLmZpbHRlcihmdW5jdGlvbiAoaW1wU3BlYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW1wU3BlYy5tbmdyUHJvdG9jb2wgPT09ICdzYW1lJyAmJiBub2RlLmlkcy5pbmRleE9mKFwiXCIuY29uY2F0KG5vZGUuZW1haWwsIFwiL1wiKS5jb25jYXQoaW1wU3BlYy5tZXJnZVdpdGgpKSA+PSAwO1xuICAgICAgICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpLm5hbWU7XG4gICAgICAgICAgICAgICAgICB9KTsgLy8gY29uc3QgdHJpbVJvbGVzID0gKG4pID0+IHsgY29uc3QgeyByb2xlcywgLi4ucmVzdCB9ID0gbjsgcmV0dXJuIHJlc3Q7IH0gLy8gREVCVUdcblxuICAgICAgICAgICAgICAgICAgLyogaWYgKHNpYmJsaW5nc1JvbGVOYW1lc1RvTWVyZ2UpIHsvLyBERUJVR1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBTaWRlIG1lcmdpbmcgdG8gJHtub2RlLnRpdGxlc1swXX1cXG5gLCBzaWJibGluZ3NSb2xlTmFtZXNUb01lcmdlKVxuICAgICAgICAgICAgICAgICAgfSAqL1xuXG4gICAgICAgICAgICAgICAgICB2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyJDUoc2liYmxpbmdzUm9sZU5hbWVzVG9NZXJnZSB8fCBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3N0ZXAyO1xuXG4gICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVyZ2VNZU5hbWUgPSBfc3RlcDIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IFwiXCIuY29uY2F0KG5vZGUuZW1haWwsIFwiL1wiKS5jb25jYXQobWVyZ2VNZU5hbWUpOyAvLyBjb25zb2xlLmVycm9yKGBMb29raW5nIGZvciAnJHtrZXl9JyB0byBtZXJnZSBpbjogYCwgcGFyZW50LmNoaWxkcmVuLm1hcCh0cmltUm9sZXMpKS8vIERFQlVHXG5cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVyZ2VNZU5vZGUgPSBwYXJlbnQuY2hpbGRyZW4uZmluZChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGMuaWRzLmZpbmQoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpZCA9PT0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAobWVyZ2VNZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoJ0ZvdW5kOiAnLCB0cmltUm9sZXMobWVyZ2VNZU5vZGUpKSAvLyBERUJVR1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VOb2Rlcyhub2RlLCBtZXJnZU1lTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKHBhcmVudC5jaGlsZHJlbi5maW5kSW5kZXgoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPT09IG1lcmdlTWVOb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKF9pdGVyYXRvcjIucygpOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIubigpKS5kb25lOykge1xuICAgICAgICAgICAgICAgICAgICAgIF9sb29wKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBfaXRlcmF0b3IyLmUoZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIF9pdGVyYXRvcjIuZigpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gbWVyZ2UgdXBcblxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAobm9kZS5lbWFpbCA9PT0gcGFyZW50LmVtYWlsKSB7XG4gICAgICAgICAgICAgICAgLy8gSXQgbWF5IGJlIHRoZSBjYXNlIHRoYXQgd2UgaGF2ZSBhIG5vZGUgd2l0aCBtdWx0aXBsZSByb2xlcyBhbmQgYSBzdWItcm9sZSBoYXMgcmVwb3J0cy4gVGhlIHN1Yi1ub2RlXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBiZSByZW5kZXJlZCBpbiBvcmRlciB0byBjbGFyaWZ5IHRoZSBuYXR1cmUgb2YgdGhlIHJlcG9ydHMsIGJ1dCB3ZSBoaWRlIHRoZSBlbWFpbCB3aGljaCBpc1xuICAgICAgICAgICAgICAgIC8vIGFwcGVhcmVudCBpbiB0aGUgcGFyZW50IG5vZGUuXG4gICAgICAgICAgICAgICAgbm9kZS5oaWRlTmFtZSA9IHRydWU7IC8vIGNvbGxhcHNlIHN0YWZmIG1lbWJlciByb2xlcyB0byBzYW1lIHN0YWZmIGluIHBhcmVudCByb2xlIGlmIG9ubHkgY2hpbGQgb3Igc3ViLW5vZGUgaGFzIG5vIGNoaWxkcmVuLlxuXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEgfHwgbm9kZS5jaGlsZHJlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICBtZXJnZU5vZGVzKHBhcmVudCwgbm9kZSk7IC8vIElmICdub2RlJyBpcyBvbmx5IGNoaWxkIGNvbGxhcHNpbmcgaW50byBwYXJyZW50LCBqdXN0IGN1dCBpdCBvdXRcblxuICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHBhcmVudC5jaGlsZHJlbiA9IG5vZGUuY2hpbGRyZW47ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVsc2UsIGp1c3QgY3V0IHRoZSBjaGlsZCBvdXRcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShwYXJlbnQuY2hpbGRyZW4uZmluZEluZGV4KGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQgPT09IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIH0pLCAxKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSBlbHNlIHRocm93IG5ldyBFcnJvcihcIk9yZyBjaGFydCBzdHlsZSAnXCIuY29uY2F0KHN0eWxlLCBcIicgaXMgbm90IHN1cHBvcnRlZC5cIikpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPcmdhbml6YXRpb247XG59KCk7XG5cbmV4cG9ydCB7IEF0dGFjaGVkUm9sZSwgQXVkaXRSZWNvcmRzQVBJLCBPcmdTdHJ1Y3R1cmUsIE9yZ2FuaXphdGlvbiwgUm9sZSwgUm9sZXMsIFN0YWZmLCBTdGFmZk1lbWJlciwgVmVuZG9yc0FQSSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2lhVzVrWlhndVpYTXVhbk1pTENKemIzVnlZMlZ6SWpwYklpNHVMMjV2WkdWZmJXOWtkV3hsY3k5QVltRmlaV3d2Y25WdWRHbHRaUzlvWld4d1pYSnpMMk5zWVhOelEyRnNiRU5vWldOckxtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMEJpWVdKbGJDOXlkVzUwYVcxbEwyaGxiSEJsY25NdlkzSmxZWFJsUTJ4aGMzTXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12UUd4cGNYVnBaQzFzWVdKekwyTnZibVJwZEdsdmJpMWxkbUZzTDJScGMzUXZhVzVrWlhndVpYTXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12UUdKaFltVnNMM0oxYm5ScGJXVXZhR1ZzY0dWeWN5OWhjbkpoZVZkcGRHaEliMnhsY3k1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OUFZbUZpWld3dmNuVnVkR2x0WlM5b1pXeHdaWEp6TDJsMFpYSmhZbXhsVkc5QmNuSmhlVXhwYldsMExtcHpJaXdpTGk0dmJtOWtaVjl0YjJSMWJHVnpMMEJpWVdKbGJDOXlkVzUwYVcxbEwyaGxiSEJsY25NdllYSnlZWGxNYVd0bFZHOUJjbkpoZVM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OUFZbUZpWld3dmNuVnVkR2x0WlM5b1pXeHdaWEp6TDNWdWMzVndjRzl5ZEdWa1NYUmxjbUZpYkdWVWIwRnljbUY1TG1weklpd2lMaTR2Ym05a1pWOXRiMlIxYkdWekwwQmlZV0psYkM5eWRXNTBhVzFsTDJobGJIQmxjbk12Ym05dVNYUmxjbUZpYkdWU1pYTjBMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDBCaVlXSmxiQzl5ZFc1MGFXMWxMMmhsYkhCbGNuTXZjMnhwWTJWa1ZHOUJjbkpoZVM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OUFiR2x4ZFdsa0xXeGhZbk12Wm1Wa1pYSmhkR1ZrTFdwemIyNHZaR2x6ZEM5cGJtUmxlQzVsY3k1cWN5SXNJaTR1TDJwekwyRjFaR2wwVW1WamIzSmtjeTlCZFdScGRGSmxZMjl5WkhNdWFuTWlMQ0l1TGk5cWN5OWhkV1JwZEZKbFkyOXlaSE12UVhWa2FYUlNaV052Y21SelFWQkpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDBCaVlXSmxiQzl5ZFc1MGFXMWxMMmhsYkhCbGNuTXZZWEp5WVhsWGFYUm9iM1YwU0c5c1pYTXVhbk1pTENJdUxpOXViMlJsWDIxdlpIVnNaWE12UUdKaFltVnNMM0oxYm5ScGJXVXZhR1ZzY0dWeWN5OXBkR1Z5WVdKc1pWUnZRWEp5WVhrdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZRR0poWW1Wc0wzSjFiblJwYldVdmFHVnNjR1Z5Y3k5dWIyNUpkR1Z5WVdKc1pWTndjbVZoWkM1cWN5SXNJaTR1TDI1dlpHVmZiVzlrZFd4bGN5OUFZbUZpWld3dmNuVnVkR2x0WlM5b1pXeHdaWEp6TDNSdlEyOXVjM1Z0WVdKc1pVRnljbUY1TG1weklpd2lMaTR2YW5NdmIzSm5jeTlQY21kVGRISjFZM1IxY21VdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZRR0poWW1Wc0wzSjFiblJwYldVdmFHVnNjR1Z5Y3k5MGVYQmxiMll1YW5NaUxDSXVMaTlxY3k5dmNtZHpMMnhwWWk5S1UwOU9URzl2Y0M1cWN5SXNJaTR1TDJwekwyRmpZMjkxYm5SekwwRmpZMjkxYm5SekxtcHpJaXdpTGk0dmFuTXZZV05qYjNWdWRITXZRV05qYjNWdWRITkJVRWt1YW5NaUxDSXVMaTl1YjJSbFgyMXZaSFZzWlhNdlFHSmhZbVZzTDNKMWJuUnBiV1V2YUdWc2NHVnljeTloYzNObGNuUlVhR2x6U1c1cGRHbGhiR2w2WldRdWFuTWlMQ0l1TGk5dWIyUmxYMjF2WkhWc1pYTXZRR0poWW1Wc0wzSjFiblJwYldVdmFHVnNjR1Z5Y3k5elpYUlFjbTkwYjNSNWNHVlBaaTVxY3lJc0lpNHVMMjV2WkdWZmJXOWtkV3hsY3k5QVltRmlaV3d2Y25WdWRHbHRaUzlvWld4d1pYSnpMMmx1YUdWeWFYUnpMbXB6SWl3aUxpNHZibTlrWlY5dGIyUjFiR1Z6TDBCaVlXSmxiQzl5ZFc1MGFXMWxMMmhsYkhCbGNuTXZjRzl6YzJsaWJHVkRiMjV6ZEhKMVkzUnZjbEpsZEhWeWJpNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlBWW1GaVpXd3ZjblZ1ZEdsdFpTOW9aV3h3WlhKekwyZGxkRkJ5YjNSdmRIbHdaVTltTG1weklpd2lMaTR2YW5NdmNtOXNaWE12VW05c1pTNXFjeUlzSWk0dUwycHpMM0p2YkdWekwwRjBkR0ZqYUdWa1VtOXNaUzVxY3lJc0lpNHVMMnB6TDNKdmJHVnpMMUp2YkdWekxtcHpJaXdpTGk0dmFuTXZjM1JoWm1ZdlUzUmhabVpOWlcxaVpYSXVhbk1pTENJdUxpOXFjeTl6ZEdGbVppOVRkR0ZtWmk1cWN5SXNJaTR1TDJwekwzWmxibVJ2Y25NdlZtVnVaRzl5Y3k1cWN5SXNJaTR1TDJwekwzWmxibVJ2Y25NdlZtVnVaRzl5YzBGUVNTNXFjeUlzSWk0dUwyNXZaR1ZmYlc5a2RXeGxjeTlrYjNSbGJuWXZiR2xpTDIxaGFXNHVhbk1pTENJdUxpOXFjeTlzYVdJdlltRnphQzFsYm5ZdWFuTWlMQ0l1TGk5cWN5OXNhV0l2YjNKbkxYTjBZWFJsTG1weklpd2lMaTR2YW5NdmIzSm5jeTlQY21kaGJtbDZZWFJwYjI0dWFuTWlYU3dpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWm5WdVkzUnBiMjRnWDJOc1lYTnpRMkZzYkVOb1pXTnJLR2x1YzNSaGJtTmxMQ0JEYjI1emRISjFZM1J2Y2lrZ2UxeHVJQ0JwWmlBb0lTaHBibk4wWVc1alpTQnBibk4wWVc1alpXOW1JRU52Ym5OMGNuVmpkRzl5S1NrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSkRZVzV1YjNRZ1kyRnNiQ0JoSUdOc1lYTnpJR0Z6SUdFZ1puVnVZM1JwYjI1Y0lpazdYRzRnSUgxY2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWTJ4aGMzTkRZV3hzUTJobFkyczdYRzV0YjJSMWJHVXVaWGh3YjNKMGMxdGNJbVJsWm1GMWJIUmNJbDBnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMbVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdJaXdpWm5WdVkzUnBiMjRnWDJSbFptbHVaVkJ5YjNCbGNuUnBaWE1vZEdGeVoyVjBMQ0J3Y205d2N5a2dlMXh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElIQnliM0J6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ2RtRnlJR1JsYzJOeWFYQjBiM0lnUFNCd2NtOXdjMXRwWFR0Y2JpQWdJQ0JrWlhOamNtbHdkRzl5TG1WdWRXMWxjbUZpYkdVZ1BTQmtaWE5qY21sd2RHOXlMbVZ1ZFcxbGNtRmliR1VnZkh3Z1ptRnNjMlU3WEc0Z0lDQWdaR1Z6WTNKcGNIUnZjaTVqYjI1bWFXZDFjbUZpYkdVZ1BTQjBjblZsTzF4dUlDQWdJR2xtSUNoY0luWmhiSFZsWENJZ2FXNGdaR1Z6WTNKcGNIUnZjaWtnWkdWelkzSnBjSFJ2Y2k1M2NtbDBZV0pzWlNBOUlIUnlkV1U3WEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0hSaGNtZGxkQ3dnWkdWelkzSnBjSFJ2Y2k1clpYa3NJR1JsYzJOeWFYQjBiM0lwTzF4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlGOWpjbVZoZEdWRGJHRnpjeWhEYjI1emRISjFZM1J2Y2l3Z2NISnZkRzlRY205d2N5d2djM1JoZEdsalVISnZjSE1wSUh0Y2JpQWdhV1lnS0hCeWIzUnZVSEp2Y0hNcElGOWtaV1pwYm1WUWNtOXdaWEowYVdWektFTnZibk4wY25WamRHOXlMbkJ5YjNSdmRIbHdaU3dnY0hKdmRHOVFjbTl3Y3lrN1hHNGdJR2xtSUNoemRHRjBhV05RY205d2N5a2dYMlJsWm1sdVpWQnliM0JsY25ScFpYTW9RMjl1YzNSeWRXTjBiM0lzSUhOMFlYUnBZMUJ5YjNCektUdGNiaUFnY21WMGRYSnVJRU52Ym5OMGNuVmpkRzl5TzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlqY21WaGRHVkRiR0Z6Y3p0Y2JtMXZaSFZzWlM1bGVIQnZjblJ6VzF3aVpHVm1ZWFZzZEZ3aVhTQTlJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVdVpYaHdiM0owY3k1ZlgyVnpUVzlrZFd4bElEMGdkSEoxWlRzaUxDSm1kVzVqZEdsdmJpQmZZMnhoYzNORFlXeHNRMmhsWTJzb2FXNXpkR0Z1WTJVc0lFTnZibk4wY25WamRHOXlLU0I3WEc0Z0lHbG1JQ2doS0dsdWMzUmhibU5sSUdsdWMzUmhibU5sYjJZZ1EyOXVjM1J5ZFdOMGIzSXBLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWhjSWtOaGJtNXZkQ0JqWVd4c0lHRWdZMnhoYzNNZ1lYTWdZU0JtZFc1amRHbHZibHdpS1R0Y2JpQWdmVnh1ZlZ4dVhHNTJZWElnWTJ4aGMzTkRZV3hzUTJobFkyc2dQU0JmWTJ4aGMzTkRZV3hzUTJobFkyczdYRzVjYm1aMWJtTjBhVzl1SUY5a1pXWnBibVZRY205d1pYSjBhV1Z6S0hSaGNtZGxkQ3dnY0hKdmNITXBJSHRjYmlBZ1ptOXlJQ2gyWVhJZ2FTQTlJREE3SUdrZ1BDQndjbTl3Y3k1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lIWmhjaUJrWlhOamNtbHdkRzl5SUQwZ2NISnZjSE5iYVYwN1hHNGdJQ0FnWkdWelkzSnBjSFJ2Y2k1bGJuVnRaWEpoWW14bElEMGdaR1Z6WTNKcGNIUnZjaTVsYm5WdFpYSmhZbXhsSUh4OElHWmhiSE5sTzF4dUlDQWdJR1JsYzJOeWFYQjBiM0l1WTI5dVptbG5kWEpoWW14bElEMGdkSEoxWlR0Y2JpQWdJQ0JwWmlBb1hDSjJZV3gxWlZ3aUlHbHVJR1JsYzJOeWFYQjBiM0lwSUdSbGMyTnlhWEIwYjNJdWQzSnBkR0ZpYkdVZ1BTQjBjblZsTzF4dUlDQWdJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoMFlYSm5aWFFzSUdSbGMyTnlhWEIwYjNJdWEyVjVMQ0JrWlhOamNtbHdkRzl5S1R0Y2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmZZM0psWVhSbFEyeGhjM01vUTI5dWMzUnlkV04wYjNJc0lIQnliM1J2VUhKdmNITXNJSE4wWVhScFkxQnliM0J6S1NCN1hHNGdJR2xtSUNod2NtOTBiMUJ5YjNCektTQmZaR1ZtYVc1bFVISnZjR1Z5ZEdsbGN5aERiMjV6ZEhKMVkzUnZjaTV3Y205MGIzUjVjR1VzSUhCeWIzUnZVSEp2Y0hNcE8xeHVJQ0JwWmlBb2MzUmhkR2xqVUhKdmNITXBJRjlrWldacGJtVlFjbTl3WlhKMGFXVnpLRU52Ym5OMGNuVmpkRzl5TENCemRHRjBhV05RY205d2N5azdYRzRnSUhKbGRIVnliaUJEYjI1emRISjFZM1J2Y2p0Y2JuMWNibHh1ZG1GeUlHTnlaV0YwWlVOc1lYTnpJRDBnWDJOeVpXRjBaVU5zWVhOek8xeHVYRzVtZFc1amRHbHZiaUJmWkdWbWFXNWxVSEp2Y0dWeWRIa29iMkpxTENCclpYa3NJSFpoYkhWbEtTQjdYRzRnSUdsbUlDaHJaWGtnYVc0Z2IySnFLU0I3WEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0c5aWFpd2dhMlY1TENCN1hHNGdJQ0FnSUNCMllXeDFaVG9nZG1Gc2RXVXNYRzRnSUNBZ0lDQmxiblZ0WlhKaFlteGxPaUIwY25WbExGeHVJQ0FnSUNBZ1kyOXVabWxuZFhKaFlteGxPaUIwY25WbExGeHVJQ0FnSUNBZ2QzSnBkR0ZpYkdVNklIUnlkV1ZjYmlBZ0lDQjlLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0J2WW1wYmEyVjVYU0E5SUhaaGJIVmxPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRzlpYWp0Y2JuMWNibHh1ZG1GeUlHUmxabWx1WlZCeWIzQmxjblI1SUQwZ1gyUmxabWx1WlZCeWIzQmxjblI1TzF4dVhHNTJZWElnWDNSbGJYQTdYRzVjYm1aMWJtTjBhVzl1SUY5amNtVmhkR1ZHYjNKUFprbDBaWEpoZEc5eVNHVnNjR1Z5S0c4c0lHRnNiRzkzUVhKeVlYbE1hV3RsS1NCN0lIWmhjaUJwZERzZ2FXWWdLSFI1Y0dWdlppQlRlVzFpYjJ3Z1BUMDlJRndpZFc1a1pXWnBibVZrWENJZ2ZId2diMXRUZVcxaWIyd3VhWFJsY21GMGIzSmRJRDA5SUc1MWJHd3BJSHNnYVdZZ0tFRnljbUY1TG1selFYSnlZWGtvYnlrZ2ZId2dLR2wwSUQwZ1gzVnVjM1Z3Y0c5eWRHVmtTWFJsY21GaWJHVlViMEZ5Y21GNUtHOHBLU0I4ZkNCaGJHeHZkMEZ5Y21GNVRHbHJaU0FtSmlCdklDWW1JSFI1Y0dWdlppQnZMbXhsYm1kMGFDQTlQVDBnWENKdWRXMWlaWEpjSWlrZ2V5QnBaaUFvYVhRcElHOGdQU0JwZERzZ2RtRnlJR2tnUFNBd095QjJZWElnUmlBOUlHWjFibU4wYVc5dUlFWW9LU0I3ZlRzZ2NtVjBkWEp1SUhzZ2N6b2dSaXdnYmpvZ1puVnVZM1JwYjI0Z2JpZ3BJSHNnYVdZZ0tHa2dQajBnYnk1c1pXNW5kR2dwSUhKbGRIVnliaUI3SUdSdmJtVTZJSFJ5ZFdVZ2ZUc2djbVYwZFhKdUlIc2daRzl1WlRvZ1ptRnNjMlVzSUhaaGJIVmxPaUJ2VzJrcksxMGdmVHNnZlN3Z1pUb2dablZ1WTNScGIyNGdaU2hmWlNrZ2V5QjBhSEp2ZHlCZlpUc2dmU3dnWmpvZ1JpQjlPeUI5SUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSkpiblpoYkdsa0lHRjBkR1Z0Y0hRZ2RHOGdhWFJsY21GMFpTQnViMjR0YVhSbGNtRmliR1VnYVc1emRHRnVZMlV1WEZ4dVNXNGdiM0prWlhJZ2RHOGdZbVVnYVhSbGNtRmliR1VzSUc1dmJpMWhjbkpoZVNCdlltcGxZM1J6SUcxMWMzUWdhR0YyWlNCaElGdFRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtDa2diV1YwYUc5a0xsd2lLVHNnZlNCMllYSWdibTl5YldGc1EyOXRjR3hsZEdsdmJpQTlJSFJ5ZFdVc0lHUnBaRVZ5Y2lBOUlHWmhiSE5sTENCbGNuSTdJSEpsZEhWeWJpQjdJSE02SUdaMWJtTjBhVzl1SUhNb0tTQjdJR2wwSUQwZ2IxdFRlVzFpYjJ3dWFYUmxjbUYwYjNKZEtDazdJSDBzSUc0NklHWjFibU4wYVc5dUlHNG9LU0I3SUhaaGNpQnpkR1Z3SUQwZ2FYUXVibVY0ZENncE95QnViM0p0WVd4RGIyMXdiR1YwYVc5dUlEMGdjM1JsY0M1a2IyNWxPeUJ5WlhSMWNtNGdjM1JsY0RzZ2ZTd2daVG9nWm5WdVkzUnBiMjRnWlNoZlpUSXBJSHNnWkdsa1JYSnlJRDBnZEhKMVpUc2daWEp5SUQwZ1gyVXlPeUI5TENCbU9pQm1kVzVqZEdsdmJpQm1LQ2tnZXlCMGNua2dleUJwWmlBb0lXNXZjbTFoYkVOdmJYQnNaWFJwYjI0Z0ppWWdhWFJiWENKeVpYUjFjbTVjSWwwZ0lUMGdiblZzYkNrZ2FYUmJYQ0p5WlhSMWNtNWNJbDBvS1RzZ2ZTQm1hVzVoYkd4NUlIc2dhV1lnS0dScFpFVnljaWtnZEdoeWIzY2daWEp5T3lCOUlIMGdmVHNnZlZ4dVhHNW1kVzVqZEdsdmJpQmZkVzV6ZFhCd2IzSjBaV1JKZEdWeVlXSnNaVlJ2UVhKeVlYa29ieXdnYldsdVRHVnVLU0I3SUdsbUlDZ2hieWtnY21WMGRYSnVPeUJwWmlBb2RIbHdaVzltSUc4Z1BUMDlJRndpYzNSeWFXNW5YQ0lwSUhKbGRIVnliaUJmWVhKeVlYbE1hV3RsVkc5QmNuSmhlU2h2TENCdGFXNU1aVzRwT3lCMllYSWdiaUE5SUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaHZLUzV6YkdsalpTZzRMQ0F0TVNrN0lHbG1JQ2h1SUQwOVBTQmNJazlpYW1WamRGd2lJQ1ltSUc4dVkyOXVjM1J5ZFdOMGIzSXBJRzRnUFNCdkxtTnZibk4wY25WamRHOXlMbTVoYldVN0lHbG1JQ2h1SUQwOVBTQmNJazFoY0Z3aUlIeDhJRzRnUFQwOUlGd2lVMlYwWENJcElISmxkSFZ5YmlCQmNuSmhlUzVtY205dEtHOHBPeUJwWmlBb2JpQTlQVDBnWENKQmNtZDFiV1Z1ZEhOY0lpQjhmQ0F2WGlnL09sVnBmRWtwYm5Rb1B6bzRmREUyZkRNeUtTZy9Pa05zWVcxd1pXUXBQMEZ5Y21GNUpDOHVkR1Z6ZENodUtTa2djbVYwZFhKdUlGOWhjbkpoZVV4cGEyVlViMEZ5Y21GNUtHOHNJRzFwYmt4bGJpazdJSDFjYmx4dVpuVnVZM1JwYjI0Z1gyRnljbUY1VEdsclpWUnZRWEp5WVhrb1lYSnlMQ0JzWlc0cElIc2dhV1lnS0d4bGJpQTlQU0J1ZFd4c0lIeDhJR3hsYmlBK0lHRnljaTVzWlc1bmRHZ3BJR3hsYmlBOUlHRnljaTVzWlc1bmRHZzdJR1p2Y2lBb2RtRnlJR2tnUFNBd0xDQmhjbkl5SUQwZ2JtVjNJRUZ5Y21GNUtHeGxiaWs3SUdrZ1BDQnNaVzQ3SUdrckt5a2dleUJoY25JeVcybGRJRDBnWVhKeVcybGRPeUI5SUhKbGRIVnliaUJoY25JeU95QjlYRzVjYm5aaGNpQndZWEpoYlZKbElEMGdibVYzSUZKbFowVjRjQ2duS0Y1OFd5QW9JU1k5ZkNzdFhTa29XMEV0V2w5ZFcwRXRXakF0T1Y5ZEtpa25MQ0FuWnljcE8xeHVkbUZ5SUhOaFptVkZkbUZzVW1VZ1BTQXZYaUFxS0Z4Y0tIeGJNQzA1WFN0OFptRnNjMlY4ZEhKMVpYd2hLU2dvSUh4Y1hDZ3BLeWhiTUMwNVhTdDhkSEoxWlh4bVlXeHpaWHdoZkNZbWZGdDhYWHN5Zlh3OVBYd2hQWHhjWEN0OExYd2xmRnhjS253OGZENThQRDE4UGowcEtDQjhYRndwS2lrcEtpQXFKQzg3SUM4dklHNWxkeUJTWldkRmVIQW9KMTRnS2loY1hGeGNLSHhiTUMwNVhTdDhabUZzYzJWOGRISjFaWHdoS1Nnb0lIeGNYRnhjS0NrcktGc3dMVGxkSzN4MGNuVmxmR1poYkhObGZDRjhKaVo4VzN4ZGV6SjlmRDA5ZkNFOWZGeGNYRndyZkMxOEpYeGNYRnhjS253OGZENHBLQ0I4WEZ4Y1hDa3FLU2txSUNva0p5bGNibHh1THlvcVhHNHFJRUVnYzJGbVpTMXBjMmdnS0ZSUFJFODZJR1JsZG1Wc2IzQmxaQ0JpWVhObFpDQnZiaUJoSUZOMFlXTnJaWGhqYUdGdVoyVWdjRzl6ZERzZ1ptbHVaQ0JoYm1RZ2JHbHVhejhwSUdKdmIyeGxZVzRnWlhod2NtVnpjMmx2YmlCbGRtRnNkV0YwYjNJdVhHNHFMMXh1WEc1MllYSWdSWFpoYkhWaGRHOXlJRDBnS0Y5MFpXMXdJRDBnTHlvalgxOVFWVkpGWDE4cUwyWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0x5OGdaR1ZqYkdGeVpTQnlaV052WjI1cGVtVmtJR2x1ZEdWeWJtRnNJSEJoY21GdFpYUmxjbk5jYmx4dUlDQXZLaXBjYmlBZ0tpQlNaV052WjNKcGVtVnpJQ2R3WVhKaGJXVjBaWEp6SnlCaGJtUWdKM3BsY205U1pYTW5JR1pwWld4a0xseHVJQ0FxWEc0Z0lDb2dKM0JoY21GdFpYUmxjbk1uSUcxaGNITWdjM1J5YVc1bmN5QjBieUIyWVd4MVpYTXVJRVV1Wnk0NklIQmhjbUZ0WlhSbGNuTWdZSHNnWENKSlUxOURUMDVVVWtGRFZFOVNYQ0k2SURFZ2ZXQWdkMjkxYkdRZ1kyRjFjMlVnZEdobElHTnZibVJwZEdsdmJseHVJQ0FxSUdCSlUxOURUMDVVVWtGRFZFOVNZQ0IwYnlCbGRtRnNkV0YwWlNCMGNuVmxMbHh1SUNBcVhHNGdJQ29nSjNwbGNtOVNaWE1uSUdseklHRnVJR0Z5Y21GNUlHOW1JRkpsWjBWNGNITWdkWE5sWkNCMGJ5QnRZWFJqYUNCaFoyRnBibk4wSUdFZ1kyOXVaR2wwYVc5dUlITjBjbWx1WnlBcVlXWjBaWElxSUhKbGMyOXNkbWx1WnlCaGJHd2dkR2hsSUhCaGNtRnRaWFJsY25NdUlFbG1JR0ZjYmlBZ0tpQWdJQ0J0WVhSamFDQnBjeUJ0WVdSbExDQjBhR1Z1SUhSb1lYUWdkbUZzZFdVZ2FYTWdjMlYwSUhSdklIcGxjbTh1SUVrdVpTNHNJR0I2WlhKdlVtVnpZQ0JrWlhSbGNtMXBibVZ6SUhkb2FXTm9JSEJoY21GdFpYUmxjbk1nWVhKbElHUmxabUYxYkhRZ2VtVnlieTVjYmlBZ0tpOWNiaUFnWm5WdVkzUnBiMjRnUlhaaGJIVmhkRzl5S0hObGRIUnBibWR6S1NCN1hHNGdJQ0FnWTJ4aGMzTkRZV3hzUTJobFkyc29kR2hwY3l3Z1JYWmhiSFZoZEc5eUtUdGNibHh1SUNBZ0lHUmxabWx1WlZCeWIzQmxjblI1S0hSb2FYTXNJRndpY0dGeVlXMWxkR1Z5YzF3aUxDQjJiMmxrSURBcE8xeHVYRzRnSUNBZ1pHVm1hVzVsVUhKdmNHVnlkSGtvZEdocGN5d2dYQ0o2WlhKdlVtVnpYQ0lzSUhadmFXUWdNQ2s3WEc1Y2JpQWdJQ0JQWW1wbFkzUXVZWE56YVdkdUtIUm9hWE1zSUhObGRIUnBibWR6S1R0Y2JpQWdJQ0IwYUdsekxuQmhjbUZ0WlhSbGNuTWdQU0IwYUdsekxuQmhjbUZ0WlhSbGNuTWdmSHdnZTMwN1hHNGdJQ0FnZEdocGN5NTZaWEp2VW1WeklEMGdkR2hwY3k1NlpYSnZVbVZ6SUh4OElGdGRPMXh1SUNCOVhHNWNiaUFnWTNKbFlYUmxRMnhoYzNNb1JYWmhiSFZoZEc5eUxDQmJlMXh1SUNBZ0lHdGxlVG9nWENKbGRtRnNWSEoxZEdoY0lpeGNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnWlhaaGJGUnlkWFJvS0c5eWFXZEZlSEJ5WlhOemFXOXVLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1gzUm9hWE1nUFNCMGFHbHpPMXh1WEc0Z0lDQWdJQ0JwWmlBb2RIbHdaVzltSUc5eWFXZEZlSEJ5WlhOemFXOXVJQ0U5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1hDSkZlSEJ5WlhOemFXOXVJRzExYzNRZ1ltVWdZU0J6ZEhKcGJtY3VJRWR2ZERvZ0oxd2lMbU52Ym1OaGRDaHZjbWxuUlhod2NtVnpjMmx2Yml3Z1hDSW5MbHdpS1NrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIWmhjaUJsZUhCeVpYTnphVzl1SUQwZ2IzSnBaMFY0Y0hKbGMzTnBiMjQ3SUM4dklITmhkbVVnYjNKcFoybHVZV3dnWlhod2NtVnpjMmx2YmlCcGJpQmpZWE5sSUhkbElHNWxaV1FnZEc4Z2NtVm1iR1ZqZENCMGJ5QjFjMlZ5SUc5dUlHVnljbTl5WEc0Z0lDQWdJQ0F2THlCeVpYQnNZV05sSUdGc2JDQjBhR1VnY0dGeVlXMWxkR1Z5Y3lCcGJpQjBhR1VnWlhod2NtVnpjMmx2Ymx4dVhHNGdJQ0FnSUNCMllYSWdjbVZ6ZFd4MGN5QTlJR1Y0Y0hKbGMzTnBiMjR1YldGMFkyaEJiR3dvY0dGeVlXMVNaU2s3WEc1Y2JpQWdJQ0FnSUhaaGNpQmZhWFJsY21GMGIzSWdQU0JmWTNKbFlYUmxSbTl5VDJaSmRHVnlZWFJ2Y2tobGJIQmxjaWh5WlhOMWJIUnpLU3hjYmlBZ0lDQWdJQ0FnSUNCZmMzUmxjRHRjYmx4dUlDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdkbUZ5SUY5c2IyOXdJRDBnWm5WdVkzUnBiMjRnWDJ4dmIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVnpkV3gwSUQwZ1gzTjBaWEF1ZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlIQmhjbUZ0SUQwZ2NtVnpkV3gwV3pKZE8xeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCMllXd2dQU0JmZEdocGN5NXdZWEpoYldWMFpYSnpXM0JoY21GdFhUc2dMeThnYkc5dmF5QnZiaUIwYUdVZ2NHRnlZVzFsZEdWeUlHOWlhbVZqZEZ4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCcFppQnViM1FnWkdWbWFXNWxaQ3dnYkc5dmF5QnZiaUJ3Y205alpYTnpMbVZ1ZGx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzSUQwZ2NISnZZMlZ6Y3k1bGJuWmJjR0Z5WVcxZE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd3Z1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0Y5MGFHbHpMbnBsY205U1pYTXVjMjl0WlNobWRXNWpkR2x2YmlBb2NtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIQmhjbUZ0TG0xaGRHTm9LSEpsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJDQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWENKRGIyNWthWFJwYjI0Z2NHRnlZVzFsZEdWeUlDZGNJaTVqYjI1allYUW9jR0Z5WVcwc0lGd2lKeUJwY3lCdWIzUWdaR1ZtYVc1bFpDNGdWWEJrWVhSbElITmxkSFJwYm1keklHRnVaQzl2Y2lCamFHVmpheUJsZUhCeVpYTnphVzl1TGx3aUtTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmU0F2THlBbmNtVndiR0ZqWlVGc2JDY2dibTkwSUhOMWNIQnZjblJsWkNCdmJpQnViMlJsSUNoVVQwUlBPaUJoWkdRZ1FtRmlaV3dnZEdadmNtMHBPeUIwYUc5MVoyZ2dKM0psY0d4aFkyVW5JR1J2WlhNZ2NtVndiR0ZqWlNCaGJHd2dLbWxtS2lCbWFYSnpkQ0JoY21jZ2FYTmNiaUFnSUNBZ0lDQWdJQ0F2THlCU1JTNHVMaUJ6Ynk0dUxpQnRZWGxpWlNCdWIzUWdibVZqWlhOellYSjVQeWxjYmx4dVhHNGdJQ0FnSUNBZ0lDQWdaWGh3Y21WemMybHZiaUE5SUdWNGNISmxjM05wYjI0dWNtVndiR0ZqWlNodVpYY2dVbVZuUlhod0tGd2lLRjU4VzE1QkxWb3dMVGxmWFNsY0lpNWpiMjVqWVhRb2NHRnlZVzBzSUZ3aUtGdGVRUzFhTUMwNVgxMThKQ2xjSWlrc0lDZG5KeWtzSUZ3aUpERWdYQ0l1WTI5dVkyRjBLSFpoYkN3Z1hDSWdKREpjSWlrcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9YMmwwWlhKaGRHOXlMbk1vS1RzZ0lTaGZjM1JsY0NBOUlGOXBkR1Z5WVhSdmNpNXVLQ2twTG1SdmJtVTdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJSEpsYzNWc2REdGNibHh1SUNBZ0lDQWdJQ0FnSUY5c2IyOXdLQ2s3WEc0Z0lDQWdJQ0FnSUgwZ0x5OGdZMmhsWTJzZ2RHaGhkQ0JsZG1WeWVYUm9hVzVuSUdseklITmhkbVZjYmx4dUlDQWdJQ0FnZlNCallYUmphQ0FvWlhKeUtTQjdYRzRnSUNBZ0lDQWdJRjlwZEdWeVlYUnZjaTVsS0dWeWNpazdYRzRnSUNBZ0lDQjlJR1pwYm1Gc2JIa2dlMXh1SUNBZ0lDQWdJQ0JmYVhSbGNtRjBiM0l1WmlncE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvSVdWNGNISmxjM05wYjI0dWJXRjBZMmdvYzJGbVpVVjJZV3hTWlNrcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lTVzUyWVd4cFpDQmxlSEJ5WlhOemFXOXVJR1J2WlhNZ2JtOTBJR1oxYkd4NUlISmxjMjlzZG1VZ2IzSWdhR0Z6SUhWdWMyRm1aU0JqYjJSbE9pQmNJaTVqYjI1allYUW9iM0pwWjBWNGNISmxjM05wYjI0c0lGd2lJRDArSUZ3aUtTNWpiMjVqWVhRb1pYaHdjbVZ6YzJsdmJpa3BPMXh1SUNBZ0lDQWdmU0F2THlCbGJITmxMQ0JzWlhRbmN5QmxkbUZzSUdsMFhHNWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlFWjFibU4wYVc5dUtGd2lYRnhjSW5WelpTQnpkSEpwWTNSY1hGd2lPM0psZEhWeWJpQW9YQ0l1WTI5dVkyRjBLR1Y0Y0hKbGMzTnBiMjRzSUZ3aUtTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlZ3aUtTa29LVHNnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0YkdsdVpTQnVieTF1WlhjdFpuVnVZMXh1SUNBZ0lIMWNiaUFnZlYwcE8xeHVYRzRnSUhKbGRIVnliaUJGZG1Gc2RXRjBiM0k3WEc1OUtDa3NJRjkwWlcxd0tUdGNibHh1Wlhod2IzSjBJSHNnUlhaaGJIVmhkRzl5SUgwN1hHNHZMeU1nYzI5MWNtTmxUV0Z3Y0dsdVoxVlNURDFwYm1SbGVDNWxjeTVxY3k1dFlYQmNiaUlzSW1aMWJtTjBhVzl1SUY5aGNuSmhlVmRwZEdoSWIyeGxjeWhoY25JcElIdGNiaUFnYVdZZ0tFRnljbUY1TG1selFYSnlZWGtvWVhKeUtTa2djbVYwZFhKdUlHRnljanRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZZWEp5WVhsWGFYUm9TRzlzWlhNN1hHNXRiMlIxYkdVdVpYaHdiM0owYzF0Y0ltUmxabUYxYkhSY0lsMGdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExtVjRjRzl5ZEhNdVgxOWxjMDF2WkhWc1pTQTlJSFJ5ZFdVN0lpd2lablZ1WTNScGIyNGdYMmwwWlhKaFlteGxWRzlCY25KaGVVeHBiV2wwS0dGeWNpd2dhU2tnZTF4dUlDQnBaaUFvZEhsd1pXOW1JRk41YldKdmJDQTlQVDBnWENKMWJtUmxabWx1WldSY0lpQjhmQ0FoS0ZONWJXSnZiQzVwZEdWeVlYUnZjaUJwYmlCUFltcGxZM1FvWVhKeUtTa3BJSEpsZEhWeWJqdGNiaUFnZG1GeUlGOWhjbklnUFNCYlhUdGNiaUFnZG1GeUlGOXVJRDBnZEhKMVpUdGNiaUFnZG1GeUlGOWtJRDBnWm1Gc2MyVTdYRzRnSUhaaGNpQmZaU0E5SUhWdVpHVm1hVzVsWkR0Y2JseHVJQ0IwY25rZ2UxeHVJQ0FnSUdadmNpQW9kbUZ5SUY5cElEMGdZWEp5VzFONWJXSnZiQzVwZEdWeVlYUnZjbDBvS1N3Z1gzTTdJQ0VvWDI0Z1BTQW9YM01nUFNCZmFTNXVaWGgwS0NrcExtUnZibVVwT3lCZmJpQTlJSFJ5ZFdVcElIdGNiaUFnSUNBZ0lGOWhjbkl1Y0hWemFDaGZjeTUyWVd4MVpTazdYRzVjYmlBZ0lDQWdJR2xtSUNocElDWW1JRjloY25JdWJHVnVaM1JvSUQwOVBTQnBLU0JpY21WaGF6dGNiaUFnSUNCOVhHNGdJSDBnWTJGMFkyZ2dLR1Z5Y2lrZ2UxeHVJQ0FnSUY5a0lEMGdkSEoxWlR0Y2JpQWdJQ0JmWlNBOUlHVnljanRjYmlBZ2ZTQm1hVzVoYkd4NUlIdGNiaUFnSUNCMGNua2dlMXh1SUNBZ0lDQWdhV1lnS0NGZmJpQW1KaUJmYVZ0Y0luSmxkSFZ5Ymx3aVhTQWhQU0J1ZFd4c0tTQmZhVnRjSW5KbGRIVnlibHdpWFNncE8xeHVJQ0FnSUgwZ1ptbHVZV3hzZVNCN1hHNGdJQ0FnSUNCcFppQW9YMlFwSUhSb2NtOTNJRjlsTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJmWVhKeU8xeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUY5cGRHVnlZV0pzWlZSdlFYSnlZWGxNYVcxcGREdGNibTF2WkhWc1pTNWxlSEJ2Y25Selcxd2laR1ZtWVhWc2RGd2lYU0E5SUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5NWZYMlZ6VFc5a2RXeGxJRDBnZEhKMVpUc2lMQ0ptZFc1amRHbHZiaUJmWVhKeVlYbE1hV3RsVkc5QmNuSmhlU2hoY25Jc0lHeGxiaWtnZTF4dUlDQnBaaUFvYkdWdUlEMDlJRzUxYkd3Z2ZId2diR1Z1SUQ0Z1lYSnlMbXhsYm1kMGFDa2diR1Z1SUQwZ1lYSnlMbXhsYm1kMGFEdGNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNQ3dnWVhKeU1pQTlJRzVsZHlCQmNuSmhlU2hzWlc0cE95QnBJRHdnYkdWdU95QnBLeXNwSUh0Y2JpQWdJQ0JoY25JeVcybGRJRDBnWVhKeVcybGRPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR0Z5Y2pJN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDJGeWNtRjVUR2xyWlZSdlFYSnlZWGs3WEc1dGIyUjFiR1V1Wlhod2IzSjBjMXRjSW1SbFptRjFiSFJjSWwwZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTG1WNGNHOXlkSE11WDE5bGMwMXZaSFZzWlNBOUlIUnlkV1U3SWl3aWRtRnlJR0Z5Y21GNVRHbHJaVlJ2UVhKeVlYa2dQU0J5WlhGMWFYSmxLRndpTGk5aGNuSmhlVXhwYTJWVWIwRnljbUY1TG1welhDSXBPMXh1WEc1bWRXNWpkR2x2YmlCZmRXNXpkWEJ3YjNKMFpXUkpkR1Z5WVdKc1pWUnZRWEp5WVhrb2J5d2diV2x1VEdWdUtTQjdYRzRnSUdsbUlDZ2hieWtnY21WMGRYSnVPMXh1SUNCcFppQW9kSGx3Wlc5bUlHOGdQVDA5SUZ3aWMzUnlhVzVuWENJcElISmxkSFZ5YmlCaGNuSmhlVXhwYTJWVWIwRnljbUY1S0c4c0lHMXBia3hsYmlrN1hHNGdJSFpoY2lCdUlEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0c4cExuTnNhV05sS0Rnc0lDMHhLVHRjYmlBZ2FXWWdLRzRnUFQwOUlGd2lUMkpxWldOMFhDSWdKaVlnYnk1amIyNXpkSEoxWTNSdmNpa2diaUE5SUc4dVkyOXVjM1J5ZFdOMGIzSXVibUZ0WlR0Y2JpQWdhV1lnS0c0Z1BUMDlJRndpVFdGd1hDSWdmSHdnYmlBOVBUMGdYQ0pUWlhSY0lpa2djbVYwZFhKdUlFRnljbUY1TG1aeWIyMG9ieWs3WEc0Z0lHbG1JQ2h1SUQwOVBTQmNJa0Z5WjNWdFpXNTBjMXdpSUh4OElDOWVLRDg2VldsOFNTbHVkQ2cvT2poOE1UWjhNeklwS0Q4NlEyeGhiWEJsWkNrL1FYSnlZWGtrTHk1MFpYTjBLRzRwS1NCeVpYUjFjbTRnWVhKeVlYbE1hV3RsVkc5QmNuSmhlU2h2TENCdGFXNU1aVzRwTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjkxYm5OMWNIQnZjblJsWkVsMFpYSmhZbXhsVkc5QmNuSmhlVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpXMXdpWkdWbVlYVnNkRndpWFNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1V1Wlhod2IzSjBjeTVmWDJWelRXOWtkV3hsSUQwZ2RISjFaVHNpTENKbWRXNWpkR2x2YmlCZmJtOXVTWFJsY21GaWJHVlNaWE4wS0NrZ2UxeHVJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z3aVNXNTJZV3hwWkNCaGRIUmxiWEIwSUhSdklHUmxjM1J5ZFdOMGRYSmxJRzV2YmkxcGRHVnlZV0pzWlNCcGJuTjBZVzVqWlM1Y1hHNUpiaUJ2Y21SbGNpQjBieUJpWlNCcGRHVnlZV0pzWlN3Z2JtOXVMV0Z5Y21GNUlHOWlhbVZqZEhNZ2JYVnpkQ0JvWVhabElHRWdXMU41YldKdmJDNXBkR1Z5WVhSdmNsMG9LU0J0WlhSb2IyUXVYQ0lwTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjl1YjI1SmRHVnlZV0pzWlZKbGMzUTdYRzV0YjJSMWJHVXVaWGh3YjNKMGMxdGNJbVJsWm1GMWJIUmNJbDBnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMbVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdJaXdpZG1GeUlHRnljbUY1VjJsMGFFaHZiR1Z6SUQwZ2NtVnhkV2x5WlNoY0lpNHZZWEp5WVhsWGFYUm9TRzlzWlhNdWFuTmNJaWs3WEc1Y2JuWmhjaUJwZEdWeVlXSnNaVlJ2UVhKeVlYbE1hVzFwZENBOUlISmxjWFZwY21Vb1hDSXVMMmwwWlhKaFlteGxWRzlCY25KaGVVeHBiV2wwTG1welhDSXBPMXh1WEc1MllYSWdkVzV6ZFhCd2IzSjBaV1JKZEdWeVlXSnNaVlJ2UVhKeVlYa2dQU0J5WlhGMWFYSmxLRndpTGk5MWJuTjFjSEJ2Y25SbFpFbDBaWEpoWW14bFZHOUJjbkpoZVM1cWMxd2lLVHRjYmx4dWRtRnlJRzV2YmtsMFpYSmhZbXhsVW1WemRDQTlJSEpsY1hWcGNtVW9YQ0l1TDI1dmJrbDBaWEpoWW14bFVtVnpkQzVxYzF3aUtUdGNibHh1Wm5WdVkzUnBiMjRnWDNOc2FXTmxaRlJ2UVhKeVlYa29ZWEp5TENCcEtTQjdYRzRnSUhKbGRIVnliaUJoY25KaGVWZHBkR2hJYjJ4bGN5aGhjbklwSUh4OElHbDBaWEpoWW14bFZHOUJjbkpoZVV4cGJXbDBLR0Z5Y2l3Z2FTa2dmSHdnZFc1emRYQndiM0owWldSSmRHVnlZV0pzWlZSdlFYSnlZWGtvWVhKeUxDQnBLU0I4ZkNCdWIyNUpkR1Z5WVdKc1pWSmxjM1FvS1R0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmYzJ4cFkyVmtWRzlCY25KaGVUdGNibTF2WkhWc1pTNWxlSEJ2Y25Selcxd2laR1ZtWVhWc2RGd2lYU0E5SUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5NWZYMlZ6VFc5a2RXeGxJRDBnZEhKMVpUc2lMQ0pwYlhCdmNuUWdleUJsZUdsemRITlRlVzVqTENCeVpXRmtSbWxzWlZONWJtTXNJSEpsWVdSa2FYSlRlVzVqTENCdGEyUnBjbE41Ym1Nc0lIZHlhWFJsUm1sc1pWTjVibU1nZlNCbWNtOXRJQ2RtY3ljN1hHNXBiWEJ2Y25RZ2V5QnFiMmx1SUgwZ1puSnZiU0FuY0dGMGFDYzdYRzVjYm1aMWJtTjBhVzl1SUhWdWQzSmhjRVY0Y0c5eWRITWdLSGdwSUh0Y2JseDBjbVYwZFhKdUlIZ2dKaVlnZUM1ZlgyVnpUVzlrZFd4bElDWW1JRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiQ2g0TENBblpHVm1ZWFZzZENjcElEOGdlRnNuWkdWbVlYVnNkQ2RkSURvZ2VEdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1kzSmxZWFJsUTI5dGJXOXVhbk5OYjJSMWJHVW9abTRzSUcxdlpIVnNaU2tnZTF4dVhIUnlaWFIxY200Z2JXOWtkV3hsSUQwZ2V5QmxlSEJ2Y25Sek9pQjdmU0I5TENCbWJpaHRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6S1N3Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc1OVhHNWNiblpoY2lCZmRIbHdaVzltWHpFZ1BTQmpjbVZoZEdWRGIyMXRiMjVxYzAxdlpIVnNaU2htZFc1amRHbHZiaUFvYlc5a2RXeGxLU0I3WEc1bWRXNWpkR2x2YmlCZmRIbHdaVzltS0c5aWFpa2dlMXh1SUNCY0lrQmlZV0psYkM5b1pXeHdaWEp6SUMwZ2RIbHdaVzltWENJN1hHNWNiaUFnYVdZZ0tIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCMGVYQmxiMllnVTNsdFltOXNMbWwwWlhKaGRHOXlJRDA5UFNCY0luTjViV0p2YkZ3aUtTQjdYRzRnSUNBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZmRIbHdaVzltSUQwZ1puVnVZM1JwYjI0Z1gzUjVjR1Z2Wmlodlltb3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBlWEJsYjJZZ2IySnFPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQnRiMlIxYkdVdVpYaHdiM0owYzF0Y0ltUmxabUYxYkhSY0lsMGdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExtVjRjRzl5ZEhNdVgxOWxjMDF2WkhWc1pTQTlJSFJ5ZFdVN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZmRIbHdaVzltSUQwZ1puVnVZM1JwYjI0Z1gzUjVjR1Z2Wmlodlltb3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZZbW9nSmlZZ2RIbHdaVzltSUZONWJXSnZiQ0E5UFQwZ1hDSm1kVzVqZEdsdmJsd2lJQ1ltSUc5aWFpNWpiMjV6ZEhKMVkzUnZjaUE5UFQwZ1UzbHRZbTlzSUNZbUlHOWlhaUFoUFQwZ1UzbHRZbTlzTG5CeWIzUnZkSGx3WlNBL0lGd2ljM2x0WW05c1hDSWdPaUIwZVhCbGIyWWdiMkpxTzF4dUlDQWdJSDA3WEc1Y2JpQWdJQ0J0YjJSMWJHVXVaWGh3YjNKMGMxdGNJbVJsWm1GMWJIUmNJbDBnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMbVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdYM1I1Y0dWdlppaHZZbW9wTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjkwZVhCbGIyWTdYRzV0YjJSMWJHVXVaWGh3YjNKMGMxdGNJbVJsWm1GMWJIUmNJbDBnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMbVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdYRzU5S1R0Y2JseHVkbUZ5SUY5MGVYQmxiMllnUFNCMWJuZHlZWEJGZUhCdmNuUnpLRjkwZVhCbGIyWmZNU2s3WEc1Y2JuWmhjaUJoY25KaGVVeHBhMlZVYjBGeWNtRjVJRDBnWTNKbFlYUmxRMjl0Ylc5dWFuTk5iMlIxYkdVb1puVnVZM1JwYjI0Z0tHMXZaSFZzWlNrZ2UxeHVablZ1WTNScGIyNGdYMkZ5Y21GNVRHbHJaVlJ2UVhKeVlYa29ZWEp5TENCc1pXNHBJSHRjYmlBZ2FXWWdLR3hsYmlBOVBTQnVkV3hzSUh4OElHeGxiaUErSUdGeWNpNXNaVzVuZEdncElHeGxiaUE5SUdGeWNpNXNaVzVuZEdnN1hHNWNiaUFnWm05eUlDaDJZWElnYVNBOUlEQXNJR0Z5Y2pJZ1BTQnVaWGNnUVhKeVlYa29iR1Z1S1RzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc0Z0lDQWdZWEp5TWx0cFhTQTlJR0Z5Y2x0cFhUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmhjbkl5TzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjloY25KaGVVeHBhMlZVYjBGeWNtRjVPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITmJYQ0prWldaaGRXeDBYQ0pkSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaUzVsZUhCdmNuUnpMbDlmWlhOTmIyUjFiR1VnUFNCMGNuVmxPMXh1ZlNrN1hHNWNiblZ1ZDNKaGNFVjRjRzl5ZEhNb1lYSnlZWGxNYVd0bFZHOUJjbkpoZVNrN1hHNWNiblpoY2lCaGNuSmhlVmRwZEdodmRYUkliMnhsY3lBOUlHTnlaV0YwWlVOdmJXMXZibXB6VFc5a2RXeGxLR1oxYm1OMGFXOXVJQ2h0YjJSMWJHVXBJSHRjYm1aMWJtTjBhVzl1SUY5aGNuSmhlVmRwZEdodmRYUkliMnhsY3loaGNuSXBJSHRjYmlBZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb1lYSnlLU2tnY21WMGRYSnVJR0Z5Y21GNVRHbHJaVlJ2UVhKeVlYa29ZWEp5S1R0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWVhKeVlYbFhhWFJvYjNWMFNHOXNaWE03WEc1dGIyUjFiR1V1Wlhod2IzSjBjMXRjSW1SbFptRjFiSFJjSWwwZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTG1WNGNHOXlkSE11WDE5bGMwMXZaSFZzWlNBOUlIUnlkV1U3WEc1OUtUdGNibHh1ZFc1M2NtRndSWGh3YjNKMGN5aGhjbkpoZVZkcGRHaHZkWFJJYjJ4bGN5azdYRzVjYm5aaGNpQnBkR1Z5WVdKc1pWUnZRWEp5WVhrZ1BTQmpjbVZoZEdWRGIyMXRiMjVxYzAxdlpIVnNaU2htZFc1amRHbHZiaUFvYlc5a2RXeGxLU0I3WEc1bWRXNWpkR2x2YmlCZmFYUmxjbUZpYkdWVWIwRnljbUY1S0dsMFpYSXBJSHRjYmlBZ2FXWWdLSFI1Y0dWdlppQlRlVzFpYjJ3Z0lUMDlJRndpZFc1a1pXWnBibVZrWENJZ0ppWWdhWFJsY2x0VGVXMWliMnd1YVhSbGNtRjBiM0pkSUNFOUlHNTFiR3dnZkh3Z2FYUmxjbHRjSWtCQWFYUmxjbUYwYjNKY0lsMGdJVDBnYm5Wc2JDa2djbVYwZFhKdUlFRnljbUY1TG1aeWIyMG9hWFJsY2lrN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDJsMFpYSmhZbXhsVkc5QmNuSmhlVHRjYm0xdlpIVnNaUzVsZUhCdmNuUnpXMXdpWkdWbVlYVnNkRndpWFNBOUlHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1V1Wlhod2IzSjBjeTVmWDJWelRXOWtkV3hsSUQwZ2RISjFaVHRjYm4wcE8xeHVYRzUxYm5keVlYQkZlSEJ2Y25SektHbDBaWEpoWW14bFZHOUJjbkpoZVNrN1hHNWNiblpoY2lCMWJuTjFjSEJ2Y25SbFpFbDBaWEpoWW14bFZHOUJjbkpoZVNBOUlHTnlaV0YwWlVOdmJXMXZibXB6VFc5a2RXeGxLR1oxYm1OMGFXOXVJQ2h0YjJSMWJHVXBJSHRjYm1aMWJtTjBhVzl1SUY5MWJuTjFjSEJ2Y25SbFpFbDBaWEpoWW14bFZHOUJjbkpoZVNodkxDQnRhVzVNWlc0cElIdGNiaUFnYVdZZ0tDRnZLU0J5WlhSMWNtNDdYRzRnSUdsbUlDaDBlWEJsYjJZZ2J5QTlQVDBnWENKemRISnBibWRjSWlrZ2NtVjBkWEp1SUdGeWNtRjVUR2xyWlZSdlFYSnlZWGtvYnl3Z2JXbHVUR1Z1S1R0Y2JpQWdkbUZ5SUc0Z1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bkxtTmhiR3dvYnlrdWMyeHBZMlVvT0N3Z0xURXBPMXh1SUNCcFppQW9iaUE5UFQwZ1hDSlBZbXBsWTNSY0lpQW1KaUJ2TG1OdmJuTjBjblZqZEc5eUtTQnVJRDBnYnk1amIyNXpkSEoxWTNSdmNpNXVZVzFsTzF4dUlDQnBaaUFvYmlBOVBUMGdYQ0pOWVhCY0lpQjhmQ0J1SUQwOVBTQmNJbE5sZEZ3aUtTQnlaWFIxY200Z1FYSnlZWGt1Wm5KdmJTaHZLVHRjYmlBZ2FXWWdLRzRnUFQwOUlGd2lRWEpuZFcxbGJuUnpYQ0lnZkh3Z0wxNG9QenBWYVh4SktXNTBLRDg2T0h3eE5ud3pNaWtvUHpwRGJHRnRjR1ZrS1Q5QmNuSmhlU1F2TG5SbGMzUW9iaWtwSUhKbGRIVnliaUJoY25KaGVVeHBhMlZVYjBGeWNtRjVLRzhzSUcxcGJreGxiaWs3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYM1Z1YzNWd2NHOXlkR1ZrU1hSbGNtRmliR1ZVYjBGeWNtRjVPMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITmJYQ0prWldaaGRXeDBYQ0pkSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaUzVsZUhCdmNuUnpMbDlmWlhOTmIyUjFiR1VnUFNCMGNuVmxPMXh1ZlNrN1hHNWNiblZ1ZDNKaGNFVjRjRzl5ZEhNb2RXNXpkWEJ3YjNKMFpXUkpkR1Z5WVdKc1pWUnZRWEp5WVhrcE8xeHVYRzUyWVhJZ2JtOXVTWFJsY21GaWJHVlRjSEpsWVdRZ1BTQmpjbVZoZEdWRGIyMXRiMjVxYzAxdlpIVnNaU2htZFc1amRHbHZiaUFvYlc5a2RXeGxLU0I3WEc1bWRXNWpkR2x2YmlCZmJtOXVTWFJsY21GaWJHVlRjSEpsWVdRb0tTQjdYRzRnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb1hDSkpiblpoYkdsa0lHRjBkR1Z0Y0hRZ2RHOGdjM0J5WldGa0lHNXZiaTFwZEdWeVlXSnNaU0JwYm5OMFlXNWpaUzVjWEc1SmJpQnZjbVJsY2lCMGJ5QmlaU0JwZEdWeVlXSnNaU3dnYm05dUxXRnljbUY1SUc5aWFtVmpkSE1nYlhWemRDQm9ZWFpsSUdFZ1cxTjViV0p2YkM1cGRHVnlZWFJ2Y2wwb0tTQnRaWFJvYjJRdVhDSXBPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOXViMjVKZEdWeVlXSnNaVk53Y21WaFpEdGNibTF2WkhWc1pTNWxlSEJ2Y25Selcxd2laR1ZtWVhWc2RGd2lYU0E5SUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXVaWGh3YjNKMGN5NWZYMlZ6VFc5a2RXeGxJRDBnZEhKMVpUdGNibjBwTzF4dVhHNTFibmR5WVhCRmVIQnZjblJ6S0c1dmJrbDBaWEpoWW14bFUzQnlaV0ZrS1R0Y2JseHVkbUZ5SUhSdlEyOXVjM1Z0WVdKc1pVRnljbUY1SUQwZ1kzSmxZWFJsUTI5dGJXOXVhbk5OYjJSMWJHVW9ablZ1WTNScGIyNGdLRzF2WkhWc1pTa2dlMXh1Wm5WdVkzUnBiMjRnWDNSdlEyOXVjM1Z0WVdKc1pVRnljbUY1S0dGeWNpa2dlMXh1SUNCeVpYUjFjbTRnWVhKeVlYbFhhWFJvYjNWMFNHOXNaWE1vWVhKeUtTQjhmQ0JwZEdWeVlXSnNaVlJ2UVhKeVlYa29ZWEp5S1NCOGZDQjFibk4xY0hCdmNuUmxaRWwwWlhKaFlteGxWRzlCY25KaGVTaGhjbklwSUh4OElHNXZia2wwWlhKaFlteGxVM0J5WldGa0tDazdYRzU5WEc1Y2JtMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gzUnZRMjl1YzNWdFlXSnNaVUZ5Y21GNU8xeHViVzlrZFd4bExtVjRjRzl5ZEhOYlhDSmtaV1poZFd4MFhDSmRJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE8xeHVmU2s3WEc1Y2JuWmhjaUJmZEc5RGIyNXpkVzFoWW14bFFYSnlZWGtnUFNCMWJuZHlZWEJGZUhCdmNuUnpLSFJ2UTI5dWMzVnRZV0pzWlVGeWNtRjVLVHRjYmx4dVpuVnVZM1JwYjI0Z1gyTnlaV0YwWlVadmNrOW1TWFJsY21GMGIzSklaV3h3WlhJb2J5d2dZV3hzYjNkQmNuSmhlVXhwYTJVcElIc2dkbUZ5SUdsMElEMGdkSGx3Wlc5bUlGTjViV0p2YkNBaFBUMGdYQ0oxYm1SbFptbHVaV1JjSWlBbUppQnZXMU41YldKdmJDNXBkR1Z5WVhSdmNsMGdmSHdnYjF0Y0lrQkFhWFJsY21GMGIzSmNJbDA3SUdsbUlDZ2hhWFFwSUhzZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb2J5a2dmSHdnS0dsMElEMGdYM1Z1YzNWd2NHOXlkR1ZrU1hSbGNtRmliR1ZVYjBGeWNtRjVLRzhwS1NCOGZDQmhiR3h2ZDBGeWNtRjVUR2xyWlNBbUppQnZJQ1ltSUhSNWNHVnZaaUJ2TG14bGJtZDBhQ0E5UFQwZ1hDSnVkVzFpWlhKY0lpa2dleUJwWmlBb2FYUXBJRzhnUFNCcGREc2dkbUZ5SUdrZ1BTQXdPeUIyWVhJZ1JpQTlJR1oxYm1OMGFXOXVJRVlvS1NCN2ZUc2djbVYwZFhKdUlIc2djem9nUml3Z2Jqb2dablZ1WTNScGIyNGdiaWdwSUhzZ2FXWWdLR2tnUGowZ2J5NXNaVzVuZEdncElISmxkSFZ5YmlCN0lHUnZibVU2SUhSeWRXVWdmVHNnY21WMGRYSnVJSHNnWkc5dVpUb2dabUZzYzJVc0lIWmhiSFZsT2lCdlcya3JLMTBnZlRzZ2ZTd2daVG9nWm5WdVkzUnBiMjRnWlNoZlpTa2dleUIwYUhKdmR5QmZaVHNnZlN3Z1pqb2dSaUI5T3lCOUlIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YQ0pKYm5aaGJHbGtJR0YwZEdWdGNIUWdkRzhnYVhSbGNtRjBaU0J1YjI0dGFYUmxjbUZpYkdVZ2FXNXpkR0Z1WTJVdVhGeHVTVzRnYjNKa1pYSWdkRzhnWW1VZ2FYUmxjbUZpYkdVc0lHNXZiaTFoY25KaGVTQnZZbXBsWTNSeklHMTFjM1FnYUdGMlpTQmhJRnRUZVcxaWIyd3VhWFJsY21GMGIzSmRLQ2tnYldWMGFHOWtMbHdpS1RzZ2ZTQjJZWElnYm05eWJXRnNRMjl0Y0d4bGRHbHZiaUE5SUhSeWRXVXNJR1JwWkVWeWNpQTlJR1poYkhObExDQmxjbkk3SUhKbGRIVnliaUI3SUhNNklHWjFibU4wYVc5dUlITW9LU0I3SUdsMElEMGdhWFF1WTJGc2JDaHZLVHNnZlN3Z2Jqb2dablZ1WTNScGIyNGdiaWdwSUhzZ2RtRnlJSE4wWlhBZ1BTQnBkQzV1WlhoMEtDazdJRzV2Y20xaGJFTnZiWEJzWlhScGIyNGdQU0J6ZEdWd0xtUnZibVU3SUhKbGRIVnliaUJ6ZEdWd095QjlMQ0JsT2lCbWRXNWpkR2x2YmlCbEtGOWxNaWtnZXlCa2FXUkZjbklnUFNCMGNuVmxPeUJsY25JZ1BTQmZaVEk3SUgwc0lHWTZJR1oxYm1OMGFXOXVJR1lvS1NCN0lIUnllU0I3SUdsbUlDZ2hibTl5YldGc1EyOXRjR3hsZEdsdmJpQW1KaUJwZEZ0Y0luSmxkSFZ5Ymx3aVhTQWhQU0J1ZFd4c0tTQnBkRnRjSW5KbGRIVnlibHdpWFNncE95QjlJR1pwYm1Gc2JIa2dleUJwWmlBb1pHbGtSWEp5S1NCMGFISnZkeUJsY25JN0lIMGdmU0I5T3lCOVhHNWNibVoxYm1OMGFXOXVJRjkxYm5OMWNIQnZjblJsWkVsMFpYSmhZbXhsVkc5QmNuSmhlU2h2TENCdGFXNU1aVzRwSUhzZ2FXWWdLQ0Z2S1NCeVpYUjFjbTQ3SUdsbUlDaDBlWEJsYjJZZ2J5QTlQVDBnWENKemRISnBibWRjSWlrZ2NtVjBkWEp1SUY5aGNuSmhlVXhwYTJWVWIwRnljbUY1S0c4c0lHMXBia3hsYmlrN0lIWmhjaUJ1SUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLRzhwTG5Oc2FXTmxLRGdzSUMweEtUc2dhV1lnS0c0Z1BUMDlJRndpVDJKcVpXTjBYQ0lnSmlZZ2J5NWpiMjV6ZEhKMVkzUnZjaWtnYmlBOUlHOHVZMjl1YzNSeWRXTjBiM0l1Ym1GdFpUc2dhV1lnS0c0Z1BUMDlJRndpVFdGd1hDSWdmSHdnYmlBOVBUMGdYQ0pUWlhSY0lpa2djbVYwZFhKdUlFRnljbUY1TG1aeWIyMG9ieWs3SUdsbUlDaHVJRDA5UFNCY0lrRnlaM1Z0Wlc1MGMxd2lJSHg4SUM5ZUtEODZWV2w4U1NsdWRDZy9Pamg4TVRaOE16SXBLRDg2UTJ4aGJYQmxaQ2svUVhKeVlYa2tMeTUwWlhOMEtHNHBLU0J5WlhSMWNtNGdYMkZ5Y21GNVRHbHJaVlJ2UVhKeVlYa29ieXdnYldsdVRHVnVLVHNnZlZ4dVhHNW1kVzVqZEdsdmJpQmZZWEp5WVhsTWFXdGxWRzlCY25KaGVTaGhjbklzSUd4bGJpa2dleUJwWmlBb2JHVnVJRDA5SUc1MWJHd2dmSHdnYkdWdUlENGdZWEp5TG14bGJtZDBhQ2tnYkdWdUlEMGdZWEp5TG14bGJtZDBhRHNnWm05eUlDaDJZWElnYVNBOUlEQXNJR0Z5Y2pJZ1BTQnVaWGNnUVhKeVlYa29iR1Z1S1RzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3SUdGeWNqSmJhVjBnUFNCaGNuSmJhVjA3SUgwZ2NtVjBkWEp1SUdGeWNqSTdJSDFjYmx4dUx5b3FYRzRxSUZCaFkydGhaMlVnYVc1MFpYSnVZV3dnZFhScGJHbDBlU0JtZFc1amRHbHZibk11WEc0cUwxeHVkbUZ5SUhKbGNHeGhZMlZTUlNBOUlDOWNYQ1JjWEhzb1cwRXRXbUV0ZWw5ZFcwRXRXbUV0ZWpBdE9WOWRLaWxjWEgwdlp6dGNiaThxS2x4dUtpQlNaWEJzWVdObGN5QmpiMjV6ZEhKMVkzUnpJR3hwYTJVZ0p5UjdSazlQZlNjZ2QybDBhQ0IwYUdVZ1pXNTJhWEp2Ym0xbGJuUWdkbUZzZFdVZ2IyWWdKMFpQVHljZ0tHOXlJSGRvWVhSbGRtVnlJR3RsZVNCcGN5QjFjMlZrS1M0Z1YybHNiQ0J5WVdselpTQmhibHh1S2lCbGVHTmxjSFJwYjI0Z2FXWWdibThnZG1Gc2RXVWdhWE1nWm05MWJtUWdabTl5SUdFZ1oybDJaVzRnYTJWNUxseHVLaTljYmx4dWRtRnlJR1Z1ZGxSbGJYQnNZWFJsVTNSeWFXNW5JRDBnWm5WdVkzUnBiMjRnWlc1MlZHVnRjR3hoZEdWVGRISnBibWNvY0dGMGFDa2dlMXh1SUNCMllYSWdiM0pwWjFCaGRHZ2dQU0J3WVhSb095QXZMeUIxYzJWa0lHWnZjaUJsY25KdmNpQnRaWE56WVdkbGMxeHVYRzRnSUhaaGNpQnRZWFJqYUdWek95QXZMeUJCSUhKbGNHeGhZMlZrSUhaaGNpQnRZWGtnYVhSelpXeG1JSEpsWm1WeVpXNWpaU0IyWVhKekxDQnpieUIzWlNCclpXVndJSEJ5YjJObGMzTnBibWNnZFc1MGFXd2daWFpsY25sMGFHbHVaeUJwY3lCeVpYTnZiSFpsWkM1Y2JseHVJQ0IzYUdsc1pTQW9LRzFoZEdOb1pYTWdQU0JmZEc5RGIyNXpkVzFoWW14bFFYSnlZWGtvY0dGMGFDNXRZWFJqYUVGc2JDaHlaWEJzWVdObFVrVXBLU2t1YkdWdVozUm9JRDRnTUNrZ2UxeHVJQ0FnSUM4dklHTnZibk4wSUcxaGRHTm9aWE1nUFNCYkxpNHVjR0YwYUM1dFlYUmphRUZzYkNoeVpYQnNZV05sVWtVcFhWeHVJQ0FnSUcxaGRHTm9aWE11Y21WMlpYSnpaU2dwT3lBdkx5QlVhR1VnY21WMlpYSnpaU0JoYkd4dmQzTWdkWE1nZEc4Z2RYTmxJSFJvWlNCemRHRnlkQ0JoYm1RZ1pXNWtJR2x1WkdWNFpYTWdkMmwwYUc5MWRDQnRaWE56YVc1bklIVndJSFJvWlNCemRISnBibWN1WEc1Y2JpQWdJQ0IyWVhJZ1gybDBaWEpoZEc5eUlEMGdYMk55WldGMFpVWnZjazltU1hSbGNtRjBiM0pJWld4d1pYSW9iV0YwWTJobGN5a3NYRzRnSUNBZ0lDQWdJRjl6ZEdWd08xeHVYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJR1p2Y2lBb1gybDBaWEpoZEc5eUxuTW9LVHNnSVNoZmMzUmxjQ0E5SUY5cGRHVnlZWFJ2Y2k1dUtDa3BMbVJ2Ym1VN0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCdFlYUmphRWx1Wm04Z1BTQmZjM1JsY0M1MllXeDFaVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHMWhkR05vSUQwZ2JXRjBZMmhKYm1adld6QmRPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2EyVjVJRDBnYldGMFkyaEpibVp2V3pGZE8xeHVJQ0FnSUNBZ0lDQjJZWElnZG1Gc2RXVWdQU0J3Y205alpYTnpMbVZ1ZGx0clpYbGRPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JXRjBZMmhUZEdGeWRDQTlJRzFoZEdOb1NXNW1ieTVwYm1SbGVEdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1VnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSWs1dklITjFZMmdnWlc1MmFYSnZibTFsYm5RZ2NHRnlZVzFsZEdWeUlDZGNJaTVqYjI1allYUW9hMlY1TENCY0lpY2dabTkxYm1RZ2FXNGdjR0YwYUNCeVpYQnNZV05sYldWdWREb2dKMXdpS1M1amIyNWpZWFFvYjNKcFoxQmhkR2dzSUZ3aUp5NWNJaWtwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjR0YwYUNBOUlIQmhkR2d1YzNWaWMzUnlhVzVuS0RBc0lHMWhkR05vVTNSaGNuUXBJQ3NnZG1Gc2RXVWdLeUJ3WVhSb0xuTjFZbk4wY21sdVp5aHRZWFJqYUZOMFlYSjBJQ3NnYldGMFkyZ3ViR1Z1WjNSb0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHTmhkR05vSUNobGNuSXBJSHRjYmlBZ0lDQWdJRjlwZEdWeVlYUnZjaTVsS0dWeWNpazdYRzRnSUNBZ2ZTQm1hVzVoYkd4NUlIdGNiaUFnSUNBZ0lGOXBkR1Z5WVhSdmNpNW1LQ2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJSEJoZEdnN1hHNTlPMXh1THlvcVhHNHFJRkpsZEhWeWJuTWdkSEoxWlNCcFppQndZWFJvUVNCcGN5QnZiaUJ3WVhSb1FpNGdTUzVsTGl3Z2FXWWdjR0YwYUVJZ2FYTWdiM0lnZFc1a1pYSWdjR0YwYUVFdUlFVXVaeTQ2WEc0cUlDMGdLQ2N1Snl3Z0p5NW1iMjhuS1NBOVBpQjBjblZsWEc0cUlDMGdLQ2N1Wm05dkp5d2dKeTRuS1NBOVBpQm1ZV3h6WlZ4dUtpQXRJQ2duTG1admJ5Y3NJQ2N1Wm05dkp5a2dQVDRnZEhKMVpWeHVLbHh1S2lCT2IzUmxMQ0IwYUdseklHWjFibU4wYVc5dUlHRnpjM1Z0WlhNZ2RHaGxJSEJoZEdoeklHRnlaU0IyWVd4cFpDQktVMDlPSUhCaGRHaHpMbHh1S2k5Y2JseHVYRzUyWVhJZ2RHVnpkRXB6YjI1UVlYUm9jeUE5SUdaMWJtTjBhVzl1SUhSbGMzUktjMjl1VUdGMGFITW9jR0YwYUVFc0lIQmhkR2hDS1NCN1hHNGdJR2xtSUNoMGVYQmxiMllnY0dGMGFFRWdJVDA5SUNkemRISnBibWNuSUNZbUlDRW9jR0YwYUVFZ2FXNXpkR0Z1WTJWdlppQlRkSEpwYm1jcElIeDhJSFI1Y0dWdlppQndZWFJvUWlBaFBUMGdKM04wY21sdVp5Y2dKaVlnSVNod1lYUm9RaUJwYm5OMFlXNWpaVzltSUZOMGNtbHVaeWtwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9YQ0pWYm1WNGNHVmpkR1ZrSUc1dmJpMXpkSEpwYm1jZ2FXNXdkWFE2SUNkY0lpNWpiMjVqWVhRb2NHRjBhRUVzSUZ3aUp5d2dKMXdpS1M1amIyNWpZWFFvY0dGMGFFSXNJRndpSjF3aUtTazdYRzRnSUgxY2JseHVJQ0IyWVhJZ2NHRjBhRUZDYVhSeklEMGdjR0YwYUVFdWMzQnNhWFFvSnk0bktUdGNiaUFnZG1GeUlIQmhkR2hDUW1sMGN5QTlJSEJoZEdoQ0xuTndiR2wwS0NjdUp5azdYRzVjYmlBZ2FXWWdLSEJoZEdoQlFtbDBjeTVzWlc1bmRHZ2dQaUJ3WVhSb1FrSnBkSE11YkdWdVozUm9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQjlYRzVjYmlBZ2QyaHBiR1VnS0hCaGRHaEJRbWwwYzFzd1hTQTlQVDBnSnljcElIdGNiaUFnSUNCd1lYUm9RVUpwZEhNdWMyaHBablFvS1R0Y2JpQWdmVnh1WEc0Z0lIZG9hV3hsSUNod1lYUm9Ra0pwZEhOYk1GMGdQVDA5SUNjbktTQjdYRzRnSUNBZ2NHRjBhRUpDYVhSekxuTm9hV1owS0NrN1hHNGdJSDFjYmx4dUlDQnBaaUFvY0dGMGFFRkNhWFJ6TG14bGJtZDBhQ0ErSUhCaGRHaENRbWwwY3k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdabUZzYzJVN1hHNGdJSDFjYmx4dUlDQjNhR2xzWlNBb2NHRjBhRUZDYVhSekxteGxibWQwYUNBK0lEQXBJSHRjYmlBZ0lDQjJZWElnWVVKcGRDQTlJSEJoZEdoQlFtbDBjeTV6YUdsbWRDZ3BPMXh1SUNBZ0lIWmhjaUJpUW1sMElEMGdjR0YwYUVKQ2FYUnpMbk5vYVdaMEtDazdYRzVjYmlBZ0lDQnBaaUFvWWtKcGRDQWhQVDBnWVVKcGRDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUIwY25WbE8xeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z1gyTnlaV0YwWlVadmNrOW1TWFJsY21GMGIzSklaV3h3WlhJa01TaHZMQ0JoYkd4dmQwRnljbUY1VEdsclpTa2dleUIyWVhJZ2FYUWdQU0IwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JRzliVTNsdFltOXNMbWwwWlhKaGRHOXlYU0I4ZkNCdlcxd2lRRUJwZEdWeVlYUnZjbHdpWFRzZ2FXWWdLQ0ZwZENrZ2V5QnBaaUFvUVhKeVlYa3VhWE5CY25KaGVTaHZLU0I4ZkNBb2FYUWdQU0JmZFc1emRYQndiM0owWldSSmRHVnlZV0pzWlZSdlFYSnlZWGtrTVNodktTa2dmSHdnWVd4c2IzZEJjbkpoZVV4cGEyVWdKaVlnYnlBbUppQjBlWEJsYjJZZ2J5NXNaVzVuZEdnZ1BUMDlJRndpYm5WdFltVnlYQ0lwSUhzZ2FXWWdLR2wwS1NCdklEMGdhWFE3SUhaaGNpQnBJRDBnTURzZ2RtRnlJRVlnUFNCbWRXNWpkR2x2YmlCR0tDa2dlMzA3SUhKbGRIVnliaUI3SUhNNklFWXNJRzQ2SUdaMWJtTjBhVzl1SUc0b0tTQjdJR2xtSUNocElENDlJRzh1YkdWdVozUm9LU0J5WlhSMWNtNGdleUJrYjI1bE9pQjBjblZsSUgwN0lISmxkSFZ5YmlCN0lHUnZibVU2SUdaaGJITmxMQ0IyWVd4MVpUb2diMXRwS3l0ZElIMDdJSDBzSUdVNklHWjFibU4wYVc5dUlHVW9YMlVwSUhzZ2RHaHliM2NnWDJVN0lIMHNJR1k2SUVZZ2ZUc2dmU0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z3aVNXNTJZV3hwWkNCaGRIUmxiWEIwSUhSdklHbDBaWEpoZEdVZ2JtOXVMV2wwWlhKaFlteGxJR2x1YzNSaGJtTmxMbHhjYmtsdUlHOXlaR1Z5SUhSdklHSmxJR2wwWlhKaFlteGxMQ0J1YjI0dFlYSnlZWGtnYjJKcVpXTjBjeUJ0ZFhOMElHaGhkbVVnWVNCYlUzbHRZbTlzTG1sMFpYSmhkRzl5WFNncElHMWxkR2h2WkM1Y0lpazdJSDBnZG1GeUlHNXZjbTFoYkVOdmJYQnNaWFJwYjI0Z1BTQjBjblZsTENCa2FXUkZjbklnUFNCbVlXeHpaU3dnWlhKeU95QnlaWFIxY200Z2V5QnpPaUJtZFc1amRHbHZiaUJ6S0NrZ2V5QnBkQ0E5SUdsMExtTmhiR3dvYnlrN0lIMHNJRzQ2SUdaMWJtTjBhVzl1SUc0b0tTQjdJSFpoY2lCemRHVndJRDBnYVhRdWJtVjRkQ2dwT3lCdWIzSnRZV3hEYjIxd2JHVjBhVzl1SUQwZ2MzUmxjQzVrYjI1bE95QnlaWFIxY200Z2MzUmxjRHNnZlN3Z1pUb2dablZ1WTNScGIyNGdaU2hmWlRJcElIc2daR2xrUlhKeUlEMGdkSEoxWlRzZ1pYSnlJRDBnWDJVeU95QjlMQ0JtT2lCbWRXNWpkR2x2YmlCbUtDa2dleUIwY25rZ2V5QnBaaUFvSVc1dmNtMWhiRU52YlhCc1pYUnBiMjRnSmlZZ2FYUmJYQ0p5WlhSMWNtNWNJbDBnSVQwZ2JuVnNiQ2tnYVhSYlhDSnlaWFIxY201Y0lsMG9LVHNnZlNCbWFXNWhiR3g1SUhzZ2FXWWdLR1JwWkVWeWNpa2dkR2h5YjNjZ1pYSnlPeUI5SUgwZ2ZUc2dmVnh1WEc1bWRXNWpkR2x2YmlCZmRXNXpkWEJ3YjNKMFpXUkpkR1Z5WVdKc1pWUnZRWEp5WVhra01TaHZMQ0J0YVc1TVpXNHBJSHNnYVdZZ0tDRnZLU0J5WlhSMWNtNDdJR2xtSUNoMGVYQmxiMllnYnlBOVBUMGdYQ0p6ZEhKcGJtZGNJaWtnY21WMGRYSnVJRjloY25KaGVVeHBhMlZVYjBGeWNtRjVKREVvYnl3Z2JXbHVUR1Z1S1RzZ2RtRnlJRzRnUFNCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29ieWt1YzJ4cFkyVW9PQ3dnTFRFcE95QnBaaUFvYmlBOVBUMGdYQ0pQWW1wbFkzUmNJaUFtSmlCdkxtTnZibk4wY25WamRHOXlLU0J1SUQwZ2J5NWpiMjV6ZEhKMVkzUnZjaTV1WVcxbE95QnBaaUFvYmlBOVBUMGdYQ0pOWVhCY0lpQjhmQ0J1SUQwOVBTQmNJbE5sZEZ3aUtTQnlaWFIxY200Z1FYSnlZWGt1Wm5KdmJTaHZLVHNnYVdZZ0tHNGdQVDA5SUZ3aVFYSm5kVzFsYm5SelhDSWdmSHdnTDE0b1B6cFZhWHhKS1c1MEtEODZPSHd4Tm53ek1pa29QenBEYkdGdGNHVmtLVDlCY25KaGVTUXZMblJsYzNRb2Jpa3BJSEpsZEhWeWJpQmZZWEp5WVhsTWFXdGxWRzlCY25KaGVTUXhLRzhzSUcxcGJreGxiaWs3SUgxY2JseHVablZ1WTNScGIyNGdYMkZ5Y21GNVRHbHJaVlJ2UVhKeVlYa2tNU2hoY25Jc0lHeGxiaWtnZXlCcFppQW9iR1Z1SUQwOUlHNTFiR3dnZkh3Z2JHVnVJRDRnWVhKeUxteGxibWQwYUNrZ2JHVnVJRDBnWVhKeUxteGxibWQwYURzZ1ptOXlJQ2gyWVhJZ2FTQTlJREFzSUdGeWNqSWdQU0J1WlhjZ1FYSnlZWGtvYkdWdUtUc2dhU0E4SUd4bGJqc2dhU3NyS1NCN0lHRnljakpiYVYwZ1BTQmhjbkpiYVYwN0lIMGdjbVYwZFhKdUlHRnljakk3SUgxY2JuWmhjaUJHU2xOUFRsOU5SVlJCWDBSQlZFRmZTMFZaSUQwZ0oyTnZiUzVzYVhGMWFXUXRiR0ZpY3k1bVpXUmxjbUYwWldRdGFuTnZiaWM3WEc0dktpcGNiaW9nUVdSa2N5QnZjaUIxY0dSaGRHVnpJR0VnYlc5MWJuUWdjRzlwYm5RZ1pXNTBjbmt1SUZkQlVrNUpUa2M2SUZSb2FYTWdiV1YwYUc5a0lHUnZaWE1nYm05MElHTjFjbkpsYm5Sc2VTQnpkWEJ3YjNKMElITjFZaTF0YjNWdWRITXVJRlJvWlhObElHMTFjM1FnWW1WY2Jpb2diV0Z1ZFdGc2JIa2dkWEJrWVhSbFpDQmllU0JoWTJObGMzTnBibWNnZEdobElITjFZaTFrWVhSaElITjBjblZqZEhWeVpTQmhibVFnYlc5a2FXWjVhVzVuSUdsMEozTWdiVzkxYm5RZ2NHOXBiblJ6SUdScGNtVmpkR3g1TGx4dUtpOWNibHh1ZG1GeUlHRmtaRTF2ZFc1MFVHOXBiblFnUFNCbWRXNWpkR2x2YmlCaFpHUk5iM1Z1ZEZCdmFXNTBLR1JoZEdFc0lHUmhkR0ZRWVhSb0xDQmtZWFJoUm1sc1pTa2dlMXh1SUNCMllYSWdiVzkxYm5SVGNHVmpjeUE5SUdkbGRFMXZkVzUwVTNCbFkzTW9aR0YwWVNrN1hHNWNiaUFnYVdZZ0tHMXZkVzUwVTNCbFkzTWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUcxdmRXNTBVM0JsWTNNZ1BTQmJYVHRjYmlBZ0lDQjJZWElnYlhsTlpYUmhJRDBnWlc1emRYSmxUWGxOWlhSaEtHUmhkR0VwTzF4dVhHNGdJQ0FnYVdZZ0tHMTVUV1YwWVM1dGIzVnVkRk53WldOeklEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUcxNVRXVjBZUzV0YjNWdWRGTndaV056SUQwZ2JXOTFiblJUY0dWamN6dGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQjJZWElnYVNBOUlHMXZkVzUwVTNCbFkzTXVabWx1WkVsdVpHVjRLR1oxYm1OMGFXOXVJQ2hsYkNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJsYkM1a1lYUmhVR0YwYUNBOVBUMGdaR0YwWVZCaGRHZzdYRzRnSUgwcE8xeHVJQ0IyWVhJZ2JXOTFiblJUY0dWaklEMGdlMXh1SUNBZ0lHUmhkR0ZRWVhSb09pQmtZWFJoVUdGMGFDeGNiaUFnSUNCa1lYUmhSbWxzWlRvZ1pHRjBZVVpwYkdWY2JpQWdmVHRjYmx4dUlDQnBaaUFvYVNBaFBUMGdMVEVwSUh0Y2JpQWdJQ0J0YjNWdWRGTndaV056VzJsZElEMGdiVzkxYm5SVGNHVmpPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJRzF2ZFc1MFUzQmxZM011Y0hWemFDaHRiM1Z1ZEZOd1pXTXBPMXh1SUNCOVhHNTlPMXh1WEc1MllYSWdhbk52YmxKRklEMGdMMXhjTG1wemIyNGtMenRjYmk4cUtseHVLaUJTWldGa2N5QmhJRXBUVDA0Z1ptbHNaU0JoYm1RZ2NISnZZMlZ6YzJWeklHWnZjaUJtWldSbGNtRjBaV1FnYlc5MWJuUWdjRzlwYm5SeklIUnZJR052Ym5OMGNuVmpkQ0JoSUdOdmJYQnZjMmwwWlNCS1UwOU9JRzlpYW1WamRDQm1jbTl0SUc5dVpTQnZjaUJ0YjNKbFhHNHFJR1pwYkdWekxseHVLaTljYmx4dWRtRnlJSEpsWVdSR1NsTlBUaUE5SUdaMWJtTjBhVzl1SUhKbFlXUkdTbE5QVGlobWFXeGxVR0YwYUN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0JwWmlBb0lXWnBiR1ZRWVhSb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Z3aVJtbHNaU0J3WVhSb0lHbHVkbUZzYVdRdUlDaGNJaTVqYjI1allYUW9abWxzWlZCaGRHZ3NJRndpS1Z3aUtTazdYRzRnSUgxY2JseHVJQ0IyWVhJZ1gzSmxaaUE5SUc5d2RHbHZibk1nZkh3Z2UzMHNYRzRnSUNBZ0lDQnlaVzFsYldKbGNsTnZkWEpqWlNBOUlGOXlaV1l1Y21WdFpXMWlaWEpUYjNWeVkyVTdYRzVjYmlBZ2RtRnlJSEJ5YjJObGMzTmxaRkJoZEdnZ1BTQmxiblpVWlcxd2JHRjBaVk4wY21sdVp5aG1hV3hsVUdGMGFDazdYRzVjYmlBZ2FXWWdLQ0ZsZUdsemRITlRlVzVqS0hCeWIyTmxjM05sWkZCaGRHZ3BLU0I3WEc0Z0lDQWdkbUZ5SUcxelp5QTlJRndpVG04Z2MzVmphQ0JtYVd4bE9pQW5YQ0l1WTI5dVkyRjBLR1pwYkdWUVlYUm9MQ0JjSWlkY0lpa2dLeUFvWm1sc1pWQmhkR2dnSVQwOUlIQnliMk5sYzNObFpGQmhkR2dnUHlCY0lpQW9KMXdpTG1OdmJtTmhkQ2h3Y205alpYTnpaV1JRWVhSb0xDQmNJaWNwWENJcElEb2dKeWNwTzF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaHRjMmNwTzF4dUlDQjlYRzVjYmlBZ2RtRnlJR1JoZEdGQ2FYUnpJRDBnY21WaFpFWnBiR1ZUZVc1aktIQnliMk5sYzNObFpGQmhkR2dwTzF4dUlDQjJZWElnWkdGMFlUc2dMeThnWVdOMGRXRnNiSGtzSUhkdmRXeGtJR3h2ZG1VZ0oyTnZibk4wSnl3Z1luVjBJRzVsWldRZ2RHOGdjMlYwSUdsdWMybGtaU0IwY25rZ1lteHZZMnNnWVc1a0lHUnZiaWQzSUhkaGJuUWdkRzhnWlhod1lXNWtJSE5qYjNCbElHOW1JSFJvWlNCMGNua3VYRzVjYmlBZ2RISjVJSHRjYmlBZ0lDQmtZWFJoSUQwZ1NsTlBUaTV3WVhKelpTaGtZWFJoUW1sMGN5azdYRzRnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNCcFppQW9aU0JwYm5OMFlXNWpaVzltSUZONWJuUmhlRVZ5Y205eUtTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dVM2x1ZEdGNFJYSnliM0lvWENKY0lpNWpiMjVqWVhRb1pTNXRaWE56WVdkbExDQmNJaUIzYUdsc1pTQndjbTlqWlhOemFXNW5JRndpS1M1amIyNWpZWFFvWm1sc1pWQmhkR2dwS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9jbVZ0WlcxaVpYSlRiM1Z5WTJVcElIdGNiaUFnSUNCelpYUlRiM1Z5WTJVb1pHRjBZU3dnWm1sc1pWQmhkR2dwTzF4dUlDQjlYRzVjYmlBZ2RtRnlJRjlwZEdWeVlYUnZjaUE5SUY5amNtVmhkR1ZHYjNKUFprbDBaWEpoZEc5eVNHVnNjR1Z5SkRFb1oyVjBUVzkxYm5SVGNHVmpjeWhrWVhSaEtTQjhmQ0JiWFNrc1hHNGdJQ0FnSUNCZmMzUmxjRHRjYmx4dUlDQjBjbmtnZTF4dUlDQWdJR1p2Y2lBb1gybDBaWEpoZEc5eUxuTW9LVHNnSVNoZmMzUmxjQ0E5SUY5cGRHVnlZWFJ2Y2k1dUtDa3BMbVJ2Ym1VN0tTQjdYRzRnSUNBZ0lDQjJZWElnYlc1MFUzQmxZeUE5SUY5emRHVndMblpoYkhWbE8xeHVYRzRnSUNBZ0lDQjJZWElnWDNCeWIyTmxjM05OYjNWdWRGTndaV01nUFNCd2NtOWpaWE56VFc5MWJuUlRjR1ZqS0h0Y2JpQWdJQ0FnSUNBZ2JXNTBVM0JsWXpvZ2JXNTBVM0JsWXl4Y2JpQWdJQ0FnSUNBZ1pHRjBZVG9nWkdGMFlWeHVJQ0FnSUNBZ2ZTa3NYRzRnSUNBZ0lDQWdJQ0FnWkdGMFlVWnBiR1VnUFNCZmNISnZZMlZ6YzAxdmRXNTBVM0JsWXk1a1lYUmhSbWxzWlN4Y2JpQWdJQ0FnSUNBZ0lDQmtZWFJoUkdseUlEMGdYM0J5YjJObGMzTk5iM1Z1ZEZOd1pXTXVaR0YwWVVScGNpeGNiaUFnSUNBZ0lDQWdJQ0J0YjNWdWRGQnZhVzUwSUQwZ1gzQnliMk5sYzNOTmIzVnVkRk53WldNdWJXOTFiblJRYjJsdWRDeGNiaUFnSUNBZ0lDQWdJQ0JtYVc1aGJFdGxlU0E5SUY5d2NtOWpaWE56VFc5MWJuUlRjR1ZqTG1acGJtRnNTMlY1TzF4dVhHNGdJQ0FnSUNCcFppQW9aR0YwWVVacGJHVXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlITjFZa1JoZEdFZ1BTQnlaV0ZrUmtwVFQwNG9aR0YwWVVacGJHVXBPMXh1SUNBZ0lDQWdJQ0J0YjNWdWRGQnZhVzUwVzJacGJtRnNTMlY1WFNBOUlITjFZa1JoZEdFN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBdkx5QW5aR0YwWVVScGNpY2dhWE1nWjI5dlpDQmlaV05oZFhObElIZGxJR1Y0Y0dWamRDQndjbTlqWlhOelRXOTFiblJUY0dWaktDa2dkRzhnY21GcGMyVWdZVzRnWlhoalpYQjBhVzl1SUdsbUlHNWxhWFJvWlhJZ2MzQmxZMmxtYVdWa0xseHVJQ0FnSUNBZ0lDQjJZWElnYlc1MFQySnFJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lHMXZkVzUwVUc5cGJuUmJabWx1WVd4TFpYbGRJRDBnYlc1MFQySnFPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1ptbHNaWE1nUFNCeVpXRmtaR2x5VTNsdVl5aGtZWFJoUkdseUxDQjdYRzRnSUNBZ0lDQWdJQ0FnZDJsMGFFWnBiR1ZVZVhCbGN6b2dkSEoxWlZ4dUlDQWdJQ0FnSUNCOUtTNW1hV3gwWlhJb1puVnVZM1JwYjI0Z0tHbDBaVzBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z0lXbDBaVzB1YVhORWFYSmxZM1J2Y25rb0tTQW1KaUJxYzI5dVVrVXVkR1Z6ZENocGRHVnRMbTVoYldVcE8xeHVJQ0FnSUNBZ0lDQjlLUzV0WVhBb1puVnVZM1JwYjI0Z0tHbDBaVzBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2FYUmxiUzV1WVcxbE8xeHVJQ0FnSUNBZ0lDQjlLVHNnTHk4Z2JtOTBaU0FuYm1GdFpTY2dhWE1nZEdobElITnBiWEJzWlM5aVlYTmxibUZ0WlN3Z2JtOTBJSFJvWlNCM2FHOXNaU0J3WVhSb0xseHVYRzRnSUNBZ0lDQWdJSFpoY2lCZmFYUmxjbUYwYjNJeklEMGdYMk55WldGMFpVWnZjazltU1hSbGNtRjBiM0pJWld4d1pYSWtNU2htYVd4bGN5a3NYRzRnSUNBZ0lDQWdJQ0FnSUNCZmMzUmxjRE03WEc1Y2JpQWdJQ0FnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLRjlwZEdWeVlYUnZjak11Y3lncE95QWhLRjl6ZEdWd015QTlJRjlwZEdWeVlYUnZjak11YmlncEtTNWtiMjVsT3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHUnBja1pwYkdVZ1BTQmZjM1JsY0RNdWRtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYlc1MFVHNTBJRDBnWkdseVJtbHNaUzV5WlhCc1lXTmxLR3B6YjI1U1JTd2dKeWNwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ1gzTjFZa1JoZEdFZ1BTQnlaV0ZrUmtwVFQwNG9hbTlwYmloa1lYUmhSR2x5TENCa2FYSkdhV3hsS1NrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUcxdWRFOWlhbHR0Ym5SUWJuUmRJRDBnWDNOMVlrUmhkR0U3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxjbklwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmZhWFJsY21GMGIzSXpMbVVvWlhKeUtUdGNiaUFnSUNBZ0lDQWdmU0JtYVc1aGJHeDVJSHRjYmlBZ0lDQWdJQ0FnSUNCZmFYUmxjbUYwYjNJekxtWW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZTQmpZWFJqYUNBb1pYSnlLU0I3WEc0Z0lDQWdYMmwwWlhKaGRHOXlMbVVvWlhKeUtUdGNiaUFnZlNCbWFXNWhiR3g1SUh0Y2JpQWdJQ0JmYVhSbGNtRjBiM0l1WmlncE8xeHVJQ0I5WEc1Y2JpQWdkbUZ5SUY5cGRHVnlZWFJ2Y2pJZ1BTQmZZM0psWVhSbFJtOXlUMlpKZEdWeVlYUnZja2hsYkhCbGNpUXhLR2RsZEV4cGJtdFRjR1ZqY3loa1lYUmhLU0I4ZkNCYlhTa3NYRzRnSUNBZ0lDQmZjM1JsY0RJN1hHNWNiaUFnZEhKNUlIdGNiaUFnSUNCMllYSWdYMnh2YjNBZ1BTQm1kVzVqZEdsdmJpQmZiRzl2Y0NncElIdGNiaUFnSUNBZ0lIWmhjaUJzYm10VGNHVmpJRDBnWDNOMFpYQXlMblpoYkhWbE8xeHVYRzRnSUNBZ0lDQjJZWElnWDNCeWIyTmxjM05NYVc1clUzQmxZeUE5SUhCeWIyTmxjM05NYVc1clUzQmxZeWhzYm10VGNHVmpMQ0JrWVhSaEtTeGNiaUFnSUNBZ0lDQWdJQ0JtYVc1aGJGSmxaaUE5SUY5d2NtOWpaWE56VEdsdWExTndaV011Wm1sdVlXeFNaV1lzWEc0Z0lDQWdJQ0FnSUNBZ2MyOTFjbU5sSUQwZ1gzQnliMk5sYzNOTWFXNXJVM0JsWXk1emIzVnlZMlVzWEc0Z0lDQWdJQ0FnSUNBZ2EyVjVUbUZ0WlNBOUlGOXdjbTlqWlhOelRHbHVhMU53WldNdWEyVjVUbUZ0WlN4Y2JpQWdJQ0FnSUNBZ0lDQndaVzUxYkhScGJXRjBaVkpsWmlBOUlGOXdjbTlqWlhOelRHbHVhMU53WldNdWNHVnVkV3gwYVcxaGRHVlNaV1lzWEc0Z0lDQWdJQ0FnSUNBZ1ptbHVZV3hMWlhrZ1BTQmZjSEp2WTJWemMweHBibXRUY0dWakxtWnBibUZzUzJWNU8xeHVYRzRnSUNBZ0lDQjJZWElnWjJWMFVtVmhiRWwwWlcwZ1BTQm1kVzVqZEdsdmJpQm5aWFJTWldGc1NYUmxiU2h6YjNWeVpTd2dhMlY1VG1GdFpTd2dhMlY1S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemIzVnlZMlV1Wm1sdVpDaG1kVzVqZEdsdmJpQW9ZMkZ1Wkdsa1lYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaGJtUnBaR0YwWlZ0clpYbE9ZVzFsWFNBOVBUMGdhMlY1TzF4dUlDQWdJQ0FnSUNCOUtTQjhmQ0JtZFc1amRHbHZiaUFvWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvY205M0lHVTdYRzRnSUNBZ0lDQWdJSDBvYm1WM0lFVnljbTl5S0Z3aVEyRnVibTkwSUdacGJtUWdiR2x1YXlBblhDSXVZMjl1WTJGMEtHdGxlU3dnWENJbklHbHVJQ2RjSWlrdVkyOXVZMkYwS0d4dWExTndaV011YkdsdWExUnZMQ0JjSWljdVhDSXBLU2s3WEc0Z0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNCcFppQW9RWEp5WVhrdWFYTkJjbkpoZVNobWFXNWhiRkpsWmlrcElIdGNiaUFnSUNBZ0lDQWdMeThnY21Wd2JHRmpaU0IwYUdVZ1kyOXVkR1Z1ZEhOY2JpQWdJQ0FnSUNBZ2RtRnlJSEpsWVd4SmRHVnRjeUE5SUdacGJtRnNVbVZtTG0xaGNDaG1kVzVqZEdsdmJpQW9hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHZGxkRkpsWVd4SmRHVnRLSE52ZFhKalpTd2dhMlY1VG1GdFpTd2dhMlY1S1R0Y2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJR1pwYm1Gc1VtVm1Mbk53YkdsalpTNWhjSEJzZVNobWFXNWhiRkpsWml3Z1d6QXNJR1pwYm1Gc1VtVm1MbXhsYm1kMGFGMHVZMjl1WTJGMEtGOTBiME52Ym5OMWJXRmliR1ZCY25KaGVTaHlaV0ZzU1hSbGJYTXBLU2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0Y5MGVYQmxiMllvWm1sdVlXeFNaV1lwSUQwOVBTQW5iMkpxWldOMEp5a2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tIWmhjaUJmYVNBOUlEQXNJRjlQWW1wbFkzUWthMlY1Y3lBOUlFOWlhbVZqZEM1clpYbHpLR1pwYm1Gc1VtVm1LVHNnWDJrZ1BDQmZUMkpxWldOMEpHdGxlWE11YkdWdVozUm9PeUJmYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1GeUlHdGxlU0E5SUY5UFltcGxZM1FrYTJWNWMxdGZhVjA3WEc0Z0lDQWdJQ0FnSUNBZ1ptbHVZV3hTWldaYmEyVjVYU0E5SUdkbGRGSmxZV3hKZEdWdEtITnZkWEpqWlN3Z2EyVjVUbUZ0WlN3Z2EyVjVLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2FYUW5jeUJoSUhOcGJtZHNaU0JyWlhsY2JpQWdJQ0FnSUNBZ2NHVnVkV3gwYVcxaGRHVlNaV1piWm1sdVlXeExaWGxkSUQwZ1oyVjBVbVZoYkVsMFpXMG9jMjkxY21ObExDQnJaWGxPWVcxbExDQm1hVzVoYkZKbFppazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHWnZjaUFvWDJsMFpYSmhkRzl5TWk1ektDazdJQ0VvWDNOMFpYQXlJRDBnWDJsMFpYSmhkRzl5TWk1dUtDa3BMbVJ2Ym1VN0tTQjdYRzRnSUNBZ0lDQmZiRzl2Y0NncE8xeHVJQ0FnSUgxY2JpQWdmU0JqWVhSamFDQW9aWEp5S1NCN1hHNGdJQ0FnWDJsMFpYSmhkRzl5TWk1bEtHVnljaWs3WEc0Z0lIMGdabWx1WVd4c2VTQjdYRzRnSUNBZ1gybDBaWEpoZEc5eU1pNW1LQ2s3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWkdGMFlUdGNibjA3WEc0dktpcGNiaW9nVTJWMEozTWdkR2hsSUcxbGRHRWdjMjkxY21ObElHbHVabTl5YldGMGFXOXVMbHh1S2k5Y2JseHVYRzUyWVhJZ2MyVjBVMjkxY21ObElEMGdablZ1WTNScGIyNGdjMlYwVTI5MWNtTmxLR1JoZEdFc0lHWnBiR1ZRWVhSb0tTQjdYRzRnSUhaaGNpQnRlVTFsZEdFZ1BTQmxibk4xY21WTmVVMWxkR0VvWkdGMFlTazdYRzRnSUcxNVRXVjBZUzV6YjNWeVkyVkdhV3hsSUQwZ1ptbHNaVkJoZEdnN1hHNTlPMXh1THlvcVhHNHFJRmR5YVhSbGN5QmhJSE4wWVc1a1lYSmtJRzl5SUdabFpHVnlZWFJsWkNCS1UwOU9JR1pwYkdVZ1lua2dZVzVoYkhsemFXNW5JSFJvWlNCdlltcGxZM1J6SUcxbGRHRWdaR0YwWVNCaGJtUWdZbkpsWVd0cGJtY2dkR2hsSUhOaGRtVmtJR1pwYkdWeklIVndYRzRxSUdGalkyOTFjbVJwYm1jZ2RHOGdkR2hsSUdOdmJtWnBaM1Z5WVhScGIyNHVYRzRxTDF4dVhHNWNiblpoY2lCM2NtbDBaVVpLVTA5T0lEMGdablZ1WTNScGIyNGdkM0pwZEdWR1NsTlBUaWhmY21WbU1pa2dlMXh1SUNCMllYSWdaR0YwWVNBOUlGOXlaV1l5TG1SaGRHRXNYRzRnSUNBZ0lDQm1hV3hsVUdGMGFDQTlJRjl5WldZeUxtWnBiR1ZRWVhSb0xGeHVJQ0FnSUNBZ2MyRjJaVVp5YjIwZ1BTQmZjbVZtTWk1ellYWmxSbkp2YlN4Y2JpQWdJQ0FnSUdwemIyNVFZWFJvVkc5VFpXeG1JRDBnWDNKbFpqSXVhbk52YmxCaGRHaFViMU5sYkdZN1hHNWNiaUFnYVdZZ0tHWnBiR1ZRWVhSb0lEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0IyWVhJZ2JYbE5aWFJoSUQwZ1oyVjBUWGxOWlhSaEtHUmhkR0VwTzF4dUlDQWdJR1pwYkdWUVlYUm9JRDBnYlhsTlpYUmhJQ1ltSUcxNVRXVjBZUzV6YjNWeVkyVkdhV3hsTzF4dVhHNGdJQ0FnYVdZZ0tDRm1hV3hsVUdGMGFDa2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lSbWxzWlNCM1lYTWdibTkwSUhCeWIzWnBaR1ZrSUdGdVpDQnVieUFuYldWMFlTNXpiM1Z5WTJWR2FXeGxKeUJrWldacGJtVmtJQ2h2Y2lCcGJuWmhiR2xrS1M1Y0lpazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdkbUZ5SUdSdlUyRjJaU0E5SUhOaGRtVkdjbTl0SUQwOVBTQjFibVJsWm1sdVpXUWdmSHdnYW5OdmJsQmhkR2hVYjFObGJHWWdKaVlnZEdWemRFcHpiMjVRWVhSb2N5aHpZWFpsUm5KdmJTd2dhbk52YmxCaGRHaFViMU5sYkdZcE8xeHVYRzRnSUdsbUlDaGtiMU5oZG1VZ0ppWWdJV1pwYkdWUVlYUm9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZE9ieUJsZUhCc2FXTnBkQ0JtYVd4bFVHRjBhQ0J3Y205MmFXUmxaQ0JoYm1RZ2JtOGdjMjkxY21ObElHWnZkVzVrSUdsdUlHOWlhbVZqZENCdFpYUmhJR1JoZEdFdUp5azdYRzRnSUgxY2JseHVJQ0IyWVhJZ2JXOTFiblJUY0dWamN5QTlJR2RsZEUxdmRXNTBVM0JsWTNNb1pHRjBZU2s3WEc1Y2JpQWdhV1lnS0cxdmRXNTBVM0JsWTNNcElIdGNiaUFnSUNCMllYSWdYMmwwWlhKaGRHOXlOQ0E5SUY5amNtVmhkR1ZHYjNKUFprbDBaWEpoZEc5eVNHVnNjR1Z5SkRFb2JXOTFiblJUY0dWamN5a3NYRzRnSUNBZ0lDQWdJRjl6ZEdWd05EdGNibHh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0JtYjNJZ0tGOXBkR1Z5WVhSdmNqUXVjeWdwT3lBaEtGOXpkR1Z3TkNBOUlGOXBkR1Z5WVhSdmNqUXViaWdwS1M1a2IyNWxPeWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdiVzUwVTNCbFl5QTlJRjl6ZEdWd05DNTJZV3gxWlR0Y2JseHVJQ0FnSUNBZ0lDQjJZWElnWDNCeWIyTmxjM05OYjNWdWRGTndaV015SUQwZ2NISnZZMlZ6YzAxdmRXNTBVM0JsWXloN1hHNGdJQ0FnSUNBZ0lDQWdiVzUwVTNCbFl6b2diVzUwVTNCbFl5eGNiaUFnSUNBZ0lDQWdJQ0JrWVhSaE9pQmtZWFJoTEZ4dUlDQWdJQ0FnSUNBZ0lIQnlaWE5sY25abFQzSnBaMmx1WVd3NklIUnlkV1ZjYmlBZ0lDQWdJQ0FnZlNrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWVhSaFJtbHNaU0E5SUY5d2NtOWpaWE56VFc5MWJuUlRjR1ZqTWk1a1lYUmhSbWxzWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JoZEdGRWFYSWdQU0JmY0hKdlkyVnpjMDF2ZFc1MFUzQmxZekl1WkdGMFlVUnBjaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmhkR0ZRWVhSb0lEMGdYM0J5YjJObGMzTk5iM1Z1ZEZOd1pXTXlMbVJoZEdGUVlYUm9MRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JXOTFiblJRYjJsdWRDQTlJRjl3Y205alpYTnpUVzkxYm5SVGNHVmpNaTV0YjNWdWRGQnZhVzUwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabWx1WVd4TFpYa2dQU0JmY0hKdlkyVnpjMDF2ZFc1MFUzQmxZekl1Wm1sdVlXeExaWGtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnVaWGRFWVhSaElEMGdYM0J5YjJObGMzTk5iM1Z1ZEZOd1pXTXlMbTVsZDBSaGRHRTdYRzVjYmlBZ0lDQWdJQ0FnWkdGMFlTQTlJRzVsZDBSaGRHRTdYRzRnSUNBZ0lDQWdJSFpoY2lCemRXSkVZWFJoSUQwZ2JXOTFiblJRYjJsdWRGdG1hVzVoYkV0bGVWMDdYRzRnSUNBZ0lDQWdJRzF2ZFc1MFVHOXBiblJiWm1sdVlXeExaWGxkSUQwZ2JuVnNiRHNnTHk4Z1YyaGhkQ2R6SUc5MWNpQnpZWFpsSUhOamFHVnRaVDhnVTJsdVoyeGxJR1JoZEdFZ1ptbHNaU3dnYjNJZ1lTQnpZMkZ1SUdScGNqOWNibHh1SUNBZ0lDQWdJQ0JwWmlBb1pHRjBZVVpwYkdVcElIdGNiaUFnSUNBZ0lDQWdJQ0IzY21sMFpVWktVMDlPS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JoZEdFNklITjFZa1JoZEdFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYVd4bFVHRjBhRG9nWkdGMFlVWnBiR1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpZWFpsUm5KdmJUb2djMkYyWlVaeWIyMHNYRzRnSUNBZ0lDQWdJQ0FnSUNCcWMyOXVVR0YwYUZSdlUyVnNaam9nZFhCa1lYUmxhbk52YmxCaGRHaFViMU5sYkdZb1pHRjBZVkJoZEdnc0lHcHpiMjVRWVhSb1ZHOVRaV3htS1Z4dUlDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUM4dklIQnliMk5sYzNOTmIzVnVkRk53WldNZ2QybHNiQ0J5WVdselpTQmhiaUJsZUdObGNIUnBiMjRnYVdZZ2JtVnBkR2hsY2lCa1lYUmhSbWxzWlNCdWIzSWdaR0YwWVVScGNpQnBjeUJrWldacGJtVmtMbHh1SUNBZ0lDQWdJQ0FnSUM4dklGZGxJR1J2YmlkMElHSnZkR2hsY2lCMGJ5QjBaWE4wSUhkb1lYUWdKMlJoZEdGRWFYSW5JR2x6TGlCSlppQnBkQ0JsZUdsemRITXNJSGRsSUhkdmJpZDBJRzkyWlhKM2NtbDBaU3dnYzI4Z2RHaGxJSE4xWW5ObGNYVmxiblFnWVhSMFpXMXdkQ0IwYjF4dUlDQWdJQ0FnSUNBZ0lDOHZJSGR5YVhSbElHRWdabWxzWlNCcGJuUnZJR2wwSUdOaGJpQnFkWE4wSUdaaGFXd2dhV1lnYVhRbmN5QnViM1FnYjJZZ1lXNGdZWEJ3Y205d2NtbGhkR1VnZEhsd1pTNWNiaUFnSUNBZ0lDQWdJQ0JsZUdsemRITlRlVzVqS0dSaGRHRkVhWElwSUh4OElHMXJaR2x5VTNsdVl5aGtZWFJoUkdseUtUdGNibHh1SUNBZ0lDQWdJQ0FnSUdadmNpQW9kbUZ5SUY5cE1pQTlJREFzSUY5UFltcGxZM1FrYTJWNWN6SWdQU0JQWW1wbFkzUXVhMlY1Y3loemRXSkVZWFJoS1RzZ1gya3lJRHdnWDA5aWFtVmpkQ1JyWlhsek1pNXNaVzVuZEdnN0lGOXBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2MzVmlTMlY1SUQwZ1gwOWlhbVZqZENSclpYbHpNbHRmYVRKZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZDNKcGRHVkdTbE5QVGloN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdSaGRHRTZJSE4xWWtSaGRHRmJjM1ZpUzJWNVhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1ptbHNaVkJoZEdnNklHcHZhVzRvWkdGMFlVUnBjaXdnWENKY0lpNWpiMjVqWVhRb2MzVmlTMlY1TENCY0lpNXFjMjl1WENJcEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2MyRjJaVVp5YjIwNklITmhkbVZHY205dExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCcWMyOXVVR0YwYUZSdlUyVnNaam9nZFhCa1lYUmxhbk52YmxCaGRHaFViMU5sYkdZb1hDSmNJaTVqYjI1allYUW9aR0YwWVZCaGRHZ3NJRndpTGx3aUtTNWpiMjVqWVhRb2MzVmlTMlY1S1N3Z2FuTnZibEJoZEdoVWIxTmxiR1lwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHTmhkR05vSUNobGNuSXBJSHRjYmlBZ0lDQWdJRjlwZEdWeVlYUnZjalF1WlNobGNuSXBPMXh1SUNBZ0lIMGdabWx1WVd4c2VTQjdYRzRnSUNBZ0lDQmZhWFJsY21GMGIzSTBMbVlvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9aRzlUWVhabEtTQjdYRzRnSUNBZ2RtRnlJR1JoZEdGVGRISnBibWNnUFNCS1UwOU9Mbk4wY21sdVoybG1lU2hrWVhSaExDQnVkV3hzTENBbklDQW5LVHRjYmlBZ0lDQjJZWElnY0hKdlkyVnpjMlZrVUdGMGFDQTlJR1Z1ZGxSbGJYQnNZWFJsVTNSeWFXNW5LR1pwYkdWUVlYUm9LVHRjYmlBZ0lDQjNjbWwwWlVacGJHVlRlVzVqS0hCeWIyTmxjM05sWkZCaGRHZ3NJR1JoZEdGVGRISnBibWNwTzF4dUlDQjlYRzU5TzF4dVhHNTJZWElnWjJWMFRYbE5aWFJoSUQwZ1puVnVZM1JwYjI0Z1oyVjBUWGxOWlhSaEtHUmhkR0VwSUh0Y2JpQWdjbVYwZFhKdUlHUmhkR0V1WDIxbGRHRWdKaVlnWkdGMFlTNWZiV1YwWVZ0R1NsTlBUbDlOUlZSQlgwUkJWRUZmUzBWWlhUdGNibjA3WEc1Y2JuWmhjaUJsYm5OMWNtVk5lVTFsZEdFZ1BTQm1kVzVqZEdsdmJpQmxibk4xY21WTmVVMWxkR0VvWkdGMFlTa2dlMXh1SUNCMllYSWdiWGxOWlhSaElEMGdaMlYwVFhsTlpYUmhLR1JoZEdFcE8xeHVYRzRnSUdsbUlDZ2hiWGxOWlhSaEtTQjdYRzRnSUNBZ2FXWWdLR1JoZEdFdVgyMWxkR0VnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdaR0YwWVM1ZmJXVjBZU0E5SUh0OU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGtZWFJoTGw5dFpYUmhXMFpLVTA5T1gwMUZWRUZmUkVGVVFWOUxSVmxkSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJR1JoZEdFdVgyMWxkR0ZiUmtwVFQwNWZUVVZVUVY5RVFWUkJYMHRGV1YwZ1BTQjdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnRlVTFsZEdFZ1BTQm5aWFJOZVUxbGRHRW9aR0YwWVNrN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2JYbE5aWFJoTzF4dWZUdGNiaThxS2x4dUtpQlZjR1JoZEdWeklDaGllU0J5WlhSMWNtNXBibWNwSUhSb1pTQnVaWGNnWkhsdVlXMXBZeUJ3WVhSb0lHZHBkbVZ1SUhSb1pTQmpkWEp5Wlc1MElHUmhkR0VnY0dGMGFDQW9jbVZzWVhScGRtVWdkRzhnWVNCa1lYUmhJRzF2ZFc1MElHOXlJR3hwYm1zZ2NHOXBiblFwSUdGdVpGeHVLaUJ3Y21WMmFXOTFjeUJrZVc1aGJXbGpJSEJoZEdndVhHNHFMMXh1WEc1Y2JuWmhjaUIxY0dSaGRHVnFjMjl1VUdGMGFGUnZVMlZzWmlBOUlHWjFibU4wYVc5dUlIVndaR0YwWldwemIyNVFZWFJvVkc5VFpXeG1LR3B6YjI1TmIzVnVkRkJoZEdnc0lHcHpiMjVRWVhSb1ZHOVRaV3htS1NCN1hHNGdJR2xtSUNocWMyOXVUVzkxYm5SUVlYUm9JQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNCeVpYUjFjbTRnYW5OdmJsQmhkR2hVYjFObGJHWWdQVDA5SUhWdVpHVm1hVzVsWkNBL0lHcHpiMjVOYjNWdWRGQmhkR2dnT2lCY0lsd2lMbU52Ym1OaGRDaHFjMjl1VUdGMGFGUnZVMlZzWmlrdVkyOXVZMkYwS0dwemIyNU5iM1Z1ZEZCaGRHZ3BPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSEpsZEhWeWJpQjFibVJsWm1sdVpXUTdYRzRnSUgxY2JuMDdYRzR2S2lwY2Jpb2dTVzUwWlhKdVlXd2dablZ1WTNScGIyNGdkRzhnZEdWemRDQm1iM0lnWVc1a0lHVjRkSEpoWTNRZ2JXOTFiblFnYzNCbFkzTWdabkp2YlNCMGFHVWdjSEp2ZG1sa1pXUWdTbE5QVGlCdlltcGxZM1F1WEc0cUwxeHVYRzVjYm5aaGNpQm5aWFJOYjNWdWRGTndaV056SUQwZ1puVnVZM1JwYjI0Z1oyVjBUVzkxYm5SVGNHVmpjeWhrWVhSaEtTQjdYRzRnSUhaaGNpQmZaMlYwVFhsTlpYUmhPMXh1WEc0Z0lISmxkSFZ5YmlBb1gyZGxkRTE1VFdWMFlTQTlJR2RsZEUxNVRXVjBZU2hrWVhSaEtTa2dQVDA5SUc1MWJHd2dmSHdnWDJkbGRFMTVUV1YwWVNBOVBUMGdkbTlwWkNBd0lEOGdkbTlwWkNBd0lEb2dYMmRsZEUxNVRXVjBZUzV0YjNWdWRGTndaV056TzF4dWZUdGNiaThxS2x4dUtpQkpiblJsY201aGJDQm1kVzVqZEdsdmJpQjBieUJ3Y205alpYTnpJR0VnYlc5MWJuUWdjM0JsWXlCcGJuUnZJSFZ6WldaMWJDQmpiMjF3YjI1bGJuUnpJSFYwYVd4cGVtVmtJR0o1SUhSb1pTQmdjbVZoWkVaS1UwOU9ZQ0JoYm1RZ1lIZHlhWFJsUmtwVFQwNWdMbHh1S2k5Y2JseHVYRzUyWVhJZ2NISnZZMlZ6YzAxdmRXNTBVM0JsWXlBOUlHWjFibU4wYVc5dUlIQnliMk5sYzNOTmIzVnVkRk53WldNb1gzSmxaak1wSUh0Y2JpQWdkbUZ5SUcxdWRGTndaV01nUFNCZmNtVm1NeTV0Ym5SVGNHVmpMRnh1SUNBZ0lDQWdaR0YwWVNBOUlGOXlaV1l6TG1SaGRHRXNYRzRnSUNBZ0lDQndjbVZ6WlhKMlpVOXlhV2RwYm1Gc0lEMGdYM0psWmpNdWNISmxjMlZ5ZG1WUGNtbG5hVzVoYkR0Y2JpQWdkbUZ5SUdSaGRHRlFZWFJvSUQwZ2JXNTBVM0JsWXk1a1lYUmhVR0YwYUN4Y2JpQWdJQ0FnSUdSaGRHRkdhV3hsSUQwZ2JXNTBVM0JsWXk1a1lYUmhSbWxzWlN4Y2JpQWdJQ0FnSUdSaGRHRkVhWElnUFNCdGJuUlRjR1ZqTG1SaGRHRkVhWEk3WEc0Z0lHUmhkR0ZHYVd4bElDWW1JR1JoZEdGRWFYSWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlNCdWJ5MTFiblZ6WldRdFpYaHdjbVZ6YzJsdmJuTmNiaUFnSmlZZ1puVnVZM1JwYjI0Z0tHVXBJSHRjYmlBZ0lDQjBhSEp2ZHlCbE8xeHVJQ0I5S0c1bGR5QkZjbkp2Y2loY0lrSmhaQ0J0YjNWdWRDQnpjR1ZqT3lCallXNXViM1FnYzNCbFkybG1lU0JpYjNSb0lHUmhkR0VnWm1sc1pTQW9YQ0l1WTI5dVkyRjBLR1JoZEdGR2FXeGxMQ0JjSWlrZ1lXNWtJR1JwY21WamRHOXllU0FvWENJcExtTnZibU5oZENoa1lYUmhSR2x5TENCY0lpbGNJaWtwS1R0Y2JpQWdJV1JoZEdGR2FXeGxJQ1ltSUNGa1lYUmhSR2x5SUM4dklHVnpiR2x1ZEMxa2FYTmhZbXhsTFd4cGJtVWdibTh0ZFc1MWMyVmtMV1Y0Y0hKbGMzTnBiMjV6WEc0Z0lDWW1JR1oxYm1OMGFXOXVJQ2hsS1NCN1hHNGdJQ0FnZEdoeWIzY2daVHRjYmlBZ2ZTaHVaWGNnUlhKeWIzSW9KMEpoWkNCdGIzVnVkQ0J6Y0dWak95QnVaV2wwYUdWeUlHUmhkR0VnWm1sc1pTQnViM0lnWkdseVpXTjBiM0o1TGljcEtUdGNiaUFnWkdGMFlVWnBiR1VnSmlZZ0tHUmhkR0ZHYVd4bElEMGdaVzUyVkdWdGNHeGhkR1ZUZEhKcGJtY29aR0YwWVVacGJHVXBLVHRjYmlBZ1pHRjBZVVJwY2lBbUppQW9aR0YwWVVScGNpQTlJR1Z1ZGxSbGJYQnNZWFJsVTNSeWFXNW5LR1JoZEdGRWFYSXBLVHRjYmx4dUlDQjJZWElnWDNCeWIyTmxjM05LVTA5T1VHRjBhQ0E5SUhCeWIyTmxjM05LVTA5T1VHRjBhQ2g3WEc0Z0lDQWdjR0YwYURvZ1pHRjBZVkJoZEdnc1hHNGdJQ0FnWkdGMFlUb2daR0YwWVN4Y2JpQWdJQ0J3Y21WelpYSjJaVTl5YVdkcGJtRnNPaUJ3Y21WelpYSjJaVTl5YVdkcGJtRnNYRzRnSUgwcExGeHVJQ0FnSUNBZ2JXOTFiblJRYjJsdWRDQTlJRjl3Y205alpYTnpTbE5QVGxCaGRHZ3VjR1Z1ZFd4MGFXMWhkR1ZTWldZc1hHNGdJQ0FnSUNCbWFXNWhiRXRsZVNBOUlGOXdjbTlqWlhOelNsTlBUbEJoZEdndVptbHVZV3hMWlhrc1hHNGdJQ0FnSUNCdVpYZEVZWFJoSUQwZ1gzQnliMk5sYzNOS1UwOU9VR0YwYUM1dVpYZEVZWFJoTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ1pHRjBZVVpwYkdVNklHUmhkR0ZHYVd4bExGeHVJQ0FnSUdSaGRHRkVhWEk2SUdSaGRHRkVhWElzWEc0Z0lDQWdaR0YwWVZCaGRHZzZJR1JoZEdGUVlYUm9MRnh1SUNBZ0lHMXZkVzUwVUc5cGJuUTZJRzF2ZFc1MFVHOXBiblFzWEc0Z0lDQWdabWx1WVd4TFpYazZJR1pwYm1Gc1MyVjVMRnh1SUNBZ0lHNWxkMFJoZEdFNklHNWxkMFJoZEdGY2JpQWdmVHRjYm4wN1hHNHZLaXBjYmlvZ1NXNTBaWEp1WVd3Z1puVnVZM1JwYjI0Z2RHOGdkR1Z6ZENCbWIzSWdZVzVrSUdWNGRISmhZM1FnYkdsdWF5QnpjR1ZqY3lCbWNtOXRJSFJvWlNCd2NtOTJhV1JsWkNCS1UwOU9JRzlpYW1WamRDNWNiaW92WEc1Y2JseHVkbUZ5SUdkbGRFeHBibXRUY0dWamN5QTlJR1oxYm1OMGFXOXVJR2RsZEV4cGJtdFRjR1ZqY3loa1lYUmhLU0I3WEc0Z0lIWmhjaUJmWjJWMFRYbE5aWFJoTWp0Y2JseHVJQ0J5WlhSMWNtNGdLRjluWlhSTmVVMWxkR0V5SUQwZ1oyVjBUWGxOWlhSaEtHUmhkR0VwS1NBOVBUMGdiblZzYkNCOGZDQmZaMlYwVFhsTlpYUmhNaUE5UFQwZ2RtOXBaQ0F3SUQ4Z2RtOXBaQ0F3SURvZ1gyZGxkRTE1VFdWMFlUSXViR2x1YTFOd1pXTnpPMXh1ZlR0Y2JpOHFLbHh1S2lCSmJuUmxjbTVoYkNCbWRXNWpkR2x2YmlCMGJ5QndjbTlqWlhOeklHRWdiR2x1YXlCemNHVmpJR2x1ZEc4Z2RYTmxablZzSUdOdmJYQnZibVZ1ZEhNZ2RYUnBiR2w2WldRZ1lua2dkR2hsSUdCeVpXRmtSa3BUVDA1Z0lHRnVaQ0JnZDNKcGRHVkdTbE5QVG1BdVhHNHFMMXh1WEc1Y2JuWmhjaUJ3Y205alpYTnpUR2x1YTFOd1pXTWdQU0JtZFc1amRHbHZiaUJ3Y205alpYTnpUR2x1YTFOd1pXTW9iRzVyVTNCbFl5d2daR0YwWVNrZ2UxeHVJQ0IyWVhJZ2JHbHVhMUpsWm5NZ1BTQnNibXRUY0dWakxteHBibXRTWldaekxGeHVJQ0FnSUNBZ2JHbHVhMVJ2SUQwZ2JHNXJVM0JsWXk1c2FXNXJWRzhzWEc0Z0lDQWdJQ0JyWlhsT1lXMWxJRDBnYkc1clUzQmxZeTVzYVc1clMyVjVPMXh1WEc0Z0lIWmhjaUJmY0hKdlkyVnpjMHBUVDA1UVlYUm9NaUE5SUhCeWIyTmxjM05LVTA5T1VHRjBhQ2g3WEc0Z0lDQWdjR0YwYURvZ2JHbHVhMUpsWm5Nc1hHNGdJQ0FnWkdGMFlUb2daR0YwWVZ4dUlDQjlLU3hjYmlBZ0lDQWdJR1pwYm1Gc1VtVm1JRDBnWDNCeWIyTmxjM05LVTA5T1VHRjBhREl1Wm1sdVlXeFNaV1lzWEc0Z0lDQWdJQ0J3Wlc1MWJIUnBiV0YwWlZKbFppQTlJRjl3Y205alpYTnpTbE5QVGxCaGRHZ3lMbkJsYm5Wc2RHbHRZWFJsVW1WbUxGeHVJQ0FnSUNBZ1ptbHVZV3hMWlhrZ1BTQmZjSEp2WTJWemMwcFRUMDVRWVhSb01pNW1hVzVoYkV0bGVUdGNibHh1SUNCMllYSWdYM0J5YjJObGMzTktVMDlPVUdGMGFETWdQU0J3Y205alpYTnpTbE5QVGxCaGRHZ29lMXh1SUNBZ0lIQmhkR2c2SUd4cGJtdFVieXhjYmlBZ0lDQmtZWFJoT2lCa1lYUmhYRzRnSUgwcExGeHVJQ0FnSUNBZ2MyOTFjbU5sSUQwZ1gzQnliMk5sYzNOS1UwOU9VR0YwYURNdVptbHVZV3hTWldZN1hHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQm1hVzVoYkZKbFpqb2dabWx1WVd4U1pXWXNYRzRnSUNBZ2MyOTFjbU5sT2lCemIzVnlZMlVzWEc0Z0lDQWdhMlY1VG1GdFpUb2dhMlY1VG1GdFpTeGNiaUFnSUNCd1pXNTFiSFJwYldGMFpWSmxaam9nY0dWdWRXeDBhVzFoZEdWU1pXWXNYRzRnSUNBZ1ptbHVZV3hMWlhrNklHWnBibUZzUzJWNVhHNGdJSDA3WEc1OU8xeHVYRzUyWVhJZ2MyaGhiR3h2ZDBOdmNIa2dQU0JtZFc1amRHbHZiaUJ6YUdGc2JHOTNRMjl3ZVNocGJuQjFkQ2tnZTF4dUlDQnlaWFIxY200Z1FYSnlZWGt1YVhOQmNuSmhlU2hwYm5CMWRDa2dQeUJwYm5CMWRDNXpiR2xqWlNncElEb2dYM1I1Y0dWdlppaHBibkIxZENrZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUdsdWNIVjBJQ0U5UFNCdWRXeHNJRDhnVDJKcVpXTjBMbUZ6YzJsbmJpaDdmU3dnYVc1d2RYUXBJRG9nYVc1d2RYUTdYRzU5TzF4dVhHNTJZWElnY0hKdlkyVnpjMHBUVDA1UVlYUm9JRDBnWm5WdVkzUnBiMjRnY0hKdlkyVnpjMHBUVDA1UVlYUm9LRjl5WldZMEtTQjdYRzRnSUhaaGNpQndZWFJvSUQwZ1gzSmxaalF1Y0dGMGFDeGNiaUFnSUNBZ0lHUmhkR0VnUFNCZmNtVm1OQzVrWVhSaExGeHVJQ0FnSUNBZ2NISmxjMlZ5ZG1WUGNtbG5hVzVoYkNBOUlGOXlaV1kwTG5CeVpYTmxjblpsVDNKcFoybHVZV3c3WEc1Y2JpQWdhV1lnS0NGd1lYUm9LU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtGd2lUbThnSjJSaGRHRlFZWFJvSnlCemNHVmphV1pwWldRZ1ptOXlJRzF2ZFc1MElITndaV01nYlc5MWJuUWdjRzlwYm5RdVhDSXBPMXh1SUNCOVhHNWNiaUFnZG1GeUlIQmhkR2hVY21GcGJDQTlJSEJoZEdndWMzQnNhWFFvSnk0bktUdGNiaUFnY0dGMGFGUnlZV2xzTG5Ob2FXWjBLQ2s3WEc0Z0lIWmhjaUJtYVc1aGJFdGxlU0E5SUhCaGRHaFVjbUZwYkM1d2IzQW9LVHRjYmlBZ2RtRnlJRzVsZDBSaGRHRWdQU0J3Y21WelpYSjJaVTl5YVdkcGJtRnNJRDhnYzJoaGJHeHZkME52Y0hrb1pHRjBZU2tnT2lCa1lYUmhPMXh1SUNCMllYSWdjR1Z1ZFd4MGFXMWhkR1ZTWldZZ1BTQnVaWGRFWVhSaE95QXZMeUJ1YjNRZ2JtVmpaWE56WVhKcGJIa2djR1Z1ZFd4MGFXMWhkR1VnZVdWMExDQmlkWFFnZDJsc2JDQmlaUzR1TGx4dVhHNGdJSFpoY2lCZmFYUmxjbUYwYjNJMUlEMGdYMk55WldGMFpVWnZjazltU1hSbGNtRjBiM0pJWld4d1pYSWtNU2h3WVhSb1ZISmhhV3dwTEZ4dUlDQWdJQ0FnWDNOMFpYQTFPMXh1WEc0Z0lIUnllU0I3WEc0Z0lDQWdabTl5SUNoZmFYUmxjbUYwYjNJMUxuTW9LVHNnSVNoZmMzUmxjRFVnUFNCZmFYUmxjbUYwYjNJMUxtNG9LU2t1Wkc5dVpUc3BJSHRjYmlBZ0lDQWdJSFpoY2lCclpYa2dQU0JmYzNSbGNEVXVkbUZzZFdVN1hHNWNiaUFnSUNBZ0lHbG1JQ2h3Y21WelpYSjJaVTl5YVdkcGJtRnNLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnlaWE4xYkhRZ1BTQnphR0ZzYkc5M1EyOXdlU2h3Wlc1MWJIUnBiV0YwWlZKbFpsdHJaWGxkS1R0Y2JpQWdJQ0FnSUNBZ2NHVnVkV3gwYVcxaGRHVlNaV1piYTJWNVhTQTlJSEpsYzNWc2REdGNiaUFnSUNBZ0lDQWdjR1Z1ZFd4MGFXMWhkR1ZTWldZZ1BTQnlaWE4xYkhRN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCd1pXNTFiSFJwYldGMFpWSmxaaUE5SUhCbGJuVnNkR2x0WVhSbFVtVm1XMnRsZVYwN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlJR05oZEdOb0lDaGxjbklwSUh0Y2JpQWdJQ0JmYVhSbGNtRjBiM0kxTG1Vb1pYSnlLVHRjYmlBZ2ZTQm1hVzVoYkd4NUlIdGNiaUFnSUNCZmFYUmxjbUYwYjNJMUxtWW9LVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdabWx1WVd4U1pXWTZJSEJsYm5Wc2RHbHRZWFJsVW1WbVcyWnBibUZzUzJWNVhTeGNiaUFnSUNCd1pXNTFiSFJwYldGMFpWSmxaam9nY0dWdWRXeDBhVzFoZEdWU1pXWXNYRzRnSUNBZ1ptbHVZV3hMWlhrNklHWnBibUZzUzJWNUxGeHVJQ0FnSUc1bGQwUmhkR0U2SUc1bGQwUmhkR0ZjYmlBZ2ZUdGNibjA3SUM4dklHRnNhV0Z6WlhNZ1ptOXlJQ2RwYlhCdmNuUWdLaUJoY3lCbWFuTnZianNnWm1wemIyNHVkM0pwZEdVb0tTY2djM1I1YkdWY2JseHVYRzUyWVhJZ2QzSnBkR1VnUFNCM2NtbDBaVVpLVTA5T08xeHVkbUZ5SUhKbFlXUWdQU0J5WldGa1JrcFRUMDQ3WEc1Y2JtVjRjRzl5ZENCN0lFWktVMDlPWDAxRlZFRmZSRUZVUVY5TFJWa3NJR0ZrWkUxdmRXNTBVRzlwYm5Rc0lISmxZV1FzSUhKbFlXUkdTbE5QVGl3Z2MyVjBVMjkxY21ObExDQjNjbWwwWlN3Z2QzSnBkR1ZHU2xOUFRpQjlPMXh1THk4aklITnZkWEpqWlUxaGNIQnBibWRWVWt3OVpHRjBZVHBoY0hCc2FXTmhkR2x2Ymk5cWMyOXVPMk5vWVhKelpYUTlkWFJtTFRnN1ltRnpaVFkwTEdWNVNqSmFXRXA2WVZjNWRVbHFiM3BNUTBwdFlWZDRiRWxxYjJsaFZ6VnJXbGhuZFZwWVRYVmhiazFwVEVOS2VtSXpWbmxaTWxaNlNXcHdZa2xwTkhWTU1qVjJXa2RXWm1KWE9XdGtWM2hzWTNrNVFWbHRSbWxhVjNkMlkyNVdkV1JIYkhSYVV6bHZXbGQ0ZDFwWVNucE1NMUkxWTBkV2RscHBOWEZqZVVselNXazBkVXd5TlhaYVIxWm1ZbGM1YTJSWGVHeGplVGxCV1cxR2FWcFhkM1pqYmxaMVpFZHNkRnBUT1c5YVYzaDNXbGhLZWt3eVJubGpiVVkxVkVkc2NscFdVblpSV0VwNVdWaHJkV0Z1VFdsTVEwbDFUR2s1ZFdJeVVteFlNakYyV2toV2MxcFlUWFpSUjBwb1dXMVdjMHd6U2pGaWJsSndZbGRWZG1GSFZuTmpSMVo1WTNrNWFHTnVTbWhsVm1Sd1pFZG9kbVJZVWtsaU1uaHNZM2sxY1dONVNYTkphVFIxVERJMWRscEhWbVppVnpsclpGZDRiR041T1VGWmJVWnBXbGQzZG1OdVZuVmtSMngwV2xNNWIxcFhlSGRhV0VwNlRESnNNRnBZU21oWmJYaHNWa2M1UW1OdVNtaGxVelZ4WTNsSmMwbHBOSFZNTWpWMldrZFdabUpYT1d0a1YzaHNZM2s1UVZsdFJtbGFWM2QyWTI1V2RXUkhiSFJhVXpsdldsZDRkMXBZU25wTU0xWjFZek5XZDJOSE9YbGtSMVpyVTFoU2JHTnRSbWxpUjFaVllqQkdlV050UmpWTWJYQjZTV2wzYVV4cE5IWmliVGxyV2xZNWRHSXlVakZpUjFaNlREQkNhVmxYU214aVF6bDVaRmMxTUdGWE1XeE1NbWhzWWtoQ2JHTnVUWFppYlRsMVUxaFNiR050Um1saVIxWlVZMGhLYkZsWFVYVmhiazFwVEVOSmRVeHBPWFZpTWxKc1dESXhkbHBJVm5OYVdFMTJVVWRLYUZsdFZuTk1NMG94WW01U2NHSlhWWFpoUjFaelkwZFdlV041T1RCaU1FNTJZbTVPTVdKWFJtbGlSMVpDWTI1S2FHVlROWEZqZVVselNXazBkVXd6VG5sWmVUbHpZVmRKZG1SWVVuQmlTRTExWVc1TmFVeERTWFZNYVRsNlkyMU5kbUpIYkdsTU1scHNXa2RXZVZsWVVteGFRekZ4WXpJNWRVeHRjSHBKYkRCelNXNU9kbVJZU21wYVdFNUVZakkxTUZwWE5UQkphbkJpU1cxYU1XSnRUakJoVnpsMVNVWTVNR1ZZUW14aU1sbHZZakpLY1V0VFFqZFlSelJuU1VaM2FWRkhTbWhaYlZaelRESm9iR0pJUW14amJrMW5URk5DTUdWWVFteGlNbHBqU1dwMFkySnNlSFZKUTBKd1dtbEJiMlJJYkhkYVZ6bHRTVVpPTldKWFNuWmlRMEU1VUZRd1oxaERTbTFrVnpWcVpFZHNkbUpzZDJsSlExbHRTVWhTTldOSFZuWmFhVUpVWlZjeGFXSXlkM1ZoV0ZKc1kyMUdNR0l6U1dkUVZEQTVTVVozYVdNemJIUlpiVGx6V0VOSmNFbElkR05pYVVGblNVTkNkR0l5VWpGaVIxVjFXbGhvZDJJelNqQmplVUU1U1VZNU1HVllRbXhpTWxsblVGTkNiV1JYTldwa1IyeDJZbWxDWm1SSWJIZGFWemx0UzBjNWFXRnBhMmRsTVhoMVNVTkJaMGxEUVdkamJWWXdaRmhLZFVsSVVqVmpSMVoyV21sQ2RsbHRiemRZUnpSblNVTkJaMlpVZEdOaWJIaDFTVU5CWjBsSE1YWmFTRlp6V2xNMWJHVklRblpqYmxKNlZ6RjNhVnBIVm0xWldGWnpaRVozYVZoVFFUbEpSekYyV2toV2MxcFROV3hsU0VKMlkyNVNla3hEUW5SaU1sSXhZa2RWZFZwWWFIZGlNMG93WTNrMVpsZ3lWbnBVVnpsclpGZDRiRWxFTUdka1NFb3hXbFIwWTJKcFFXZG1VMEpzWWtoT2JFbElkR05pYVVGblNVTkNkR0l5VWpGaVIxVjFXbGhvZDJJelNqQmplVUU1U1VZNU1HVllRbXhpTWxsblVGTkNiV1JYTldwa1IyeDJZbWxDWm1SSWJIZGFWemx0UzBjNWFXRnBhMmRsTVhoMVNVTkJaMGxEUVdkamJWWXdaRmhLZFVsSE9XbGhhVUZ0U21sQ01HVllRbXhpTWxsblZUTnNkRmx0T1hOSlJEQTVVRk5DWTBsdFdqRmliVTR3WVZjNWRWaERTV2RLYVZsbllqSktjVXh0VG5aaWJrNHdZMjVXYW1SSE9YbEpSREE1VUZOQ1ZHVlhNV2xpTW5kblNtbFpaMkl5U25GSlEwVTVVRk5DVkdWWE1XbGlNbmQxWTBoS2RtUkhPVEJsV0VKc1NVUTRaMWhEU25wbFZ6RnBZako0WTBscFFUWkpTRkkxWTBkV2RscHBRblpaYlc4M1dFYzBaMGxEUVdkbVZIUmpZbXg0ZFVsRFFXZEpSekYyV2toV2MxcFROV3hsU0VKMlkyNVNlbGN4ZDJsYVIxWnRXVmhXYzJSR2QybFlVMEU1U1VjeGRscElWbk5hVXpWc1pVaENkbU51VW5wTVEwSjBZakpTTVdKSFZYVmFXR2gzWWpOS01HTjVOV1pZTWxaNlZGYzVhMlJYZUd4SlJEQm5aRWhLTVZwVWRHTmlhVUZuWmxaNGRWaEhOR2RKU0Vwc1pFaFdlV0pwUW1aa1NHeDNXbGM1YlV0SE9XbGhhV3MzV0VjMU9WaEhOV05pYlRGMldraFdjMXBUTld4bFNFSjJZMjVTZWtsRU1HZFlNMUkxWTBkV2RscHFkR05pYlRGMldraFdjMXBUTld4bFNFSjJZMjVTZWxjeGQybGFSMVp0V1ZoV2MyUkdkMmxZVTBFNVNVY3hkbHBJVm5OYVV6VnNaVWhDZG1OdVVucE1RMEowWWpKU01XSkhWWFZhV0doM1lqTktNR041TldaWU1sWjZWRmM1YTJSWGVHeEpSREJuWkVoS01WcFVjMmxNUTBwdFpGYzFhbVJIYkhaaWFVSm1XVmhLZVZsWWJFMWhWM1JzVmtjNVFtTnVTbWhsVTJob1kyNUpjMGxIZUd4aWFXdG5aVEY0ZFVsRFFuQmFhVUZ2WWtkV2RVbEVNRGxKUnpVeFlrZDNaMlpJZDJkaVIxWjFTVVEwWjFsWVNubE1iWGhzWW0xa01HRkRhMmRpUjFaMVNVUXdaMWxZU25sTWJYaHNZbTFrTUdGRWRHTmliSGgxU1VOQ2JXSXpTV2RMU0Zwb1kybENjRWxFTUdkTlEzZG5XVmhLZVUxcFFUbEpSelZzWkhsQ1FtTnVTbWhsVTJoeldsYzBjRTk1UW5CSlJIZG5Za2RXZFU5NVFuQkxlWE53U1VoMFkySnBRV2RKUTBKb1kyNUplVmN5YkdSSlJEQm5XVmhLZVZjeWJHUlBNWGgxU1VOQ09WaEhOV05pYVVGblkyMVdNR1JZU25WSlIwWjVZMnBKTjFoSE5UbFlSelZqWW0weGRscElWbk5hVXpWc1pVaENkbU51VW5wSlJEQm5XREpHZVdOdFJqVlVSMnh5V2xaU2RsRllTbmxaV0dzM1dFYzFkR0l5VWpGaVIxVjFXbGhvZDJJelNqQmpNWFJqU1cxU2JGcHRSakZpU0ZKalNXd3daMUJUUW5SaU1sSXhZa2RWZFZwWWFIZGlNMG93WTNsM1oySlhPV3RrVjNoc1RHMVdOR05IT1hsa1NFMTFXREU1YkdNd01YWmFTRlp6V2xOQk9VbElVbmxrVjFVM1NXbDNhV1J0Um5sSlIwWjVZMjFHTlZSSGJISmFWbEoyVVZoS2VWbFlhMmRRVTBKNVdsaEdNV0ZZU214TFJuZHBUR2s1YUdOdVNtaGxWWGh3WVRKV1ZXSXdSbmxqYlVZMVRHMXdlbGhEU1hCUE1YaDFXRWMxYldSWE5XcGtSMngyWW1sQ1psbFlTbmxaV0d4WVlWaFNiMkl6VmpCVFJ6bHpXbGhOYjFsWVNubExVMEkzV0VjMFowbEhiRzFKUTJoQ1kyNUthR1ZUTlhCak1FWjVZMjFHTlV0SFJubGphV3R3U1VoS2JHUklWbmxpYVVKb1kyNUthR1ZWZUhCaE1sWlZZakJHZVdOdFJqVkxSMFo1WTJsck4xaEhOVGxZUnpWalltMHhkbHBJVm5OYVV6VnNaVWhDZG1OdVVucEpSREJuV0RKR2VXTnRSalZXTW13d1lVYzVNV1JGYUhaaVIxWjZUekY0ZFdKWE9XdGtWM2hzVEcxV05HTkhPWGxrU0U1aVdFTkthMXBYV21oa1YzZ3dXRU5LWkVsRU1HZGlWemxyWkZkNGJFeHRWalJqUnpsNVpFaE5jMGxITVhaYVNGWnpXbE0xYkdWSVFuWmpibEo2VEd3NVpscFlUazVpTWxJeFlrZFZaMUJUUWpCamJsWnNUM2xKYzBsdFdqRmliVTR3WVZjNWRVbEdPWEJrUjFaNVdWZEtjMXBXVW5aUldFcDVXVmhyYjJGWVVteGphV3RuWlRGNGRVbERRbkJhYVVGdlpFaHNkMXBYT1cxSlJrNDFZbGRLZG1KRFFXaFFWREJuV0VOS01XSnRVbXhhYld4MVdsZFNZMGxwUVcxS2FVSndaRWRXZVZjeFRqVmlWMHAyWWtNMWNHUkhWbmxaV0ZKMlkyd3daMGxVTUdkaWJsWnpZa05DT0daRFFuQmtSMVo1VnpGM2FWRkZRbkJrUjFaNVdWaFNkbU5zZDJsWVUwRm9VRk5DZFdSWGVITkxVMEo1V2xoU01XTnROR2RSV0VwNVdWaHJkVnB1U25aaVUyaHdaRWRXZVV0VWRHTmliakZqWW14NGRXSlhPV3RrVjNoc1RHMVdOR05IT1hsa1NFMW5VRk5DWm1GWVVteGpiVVpwWWtkV1ZXSXdSbmxqYlVZMVR6RjRkV0pYT1d0a1YzaHNURzFXTkdOSE9YbGtTRTVpV0VOS2ExcFhXbWhrVjNnd1dFTktaRWxFTUdkaVZ6bHJaRmQ0YkV4dFZqUmpSemw1WkVoTmMwbEhNWFphU0ZaeldsTTFiR1ZJUW5aamJsSjZUR3c1WmxwWVRrNWlNbEl4WWtkVloxQlRRakJqYmxac1QzbEpjMGx1V21oamFVSm9ZMjVLYUdWVmVIQmhNbFpWWWpCR2VXTnRSalZKUkRCblkyMVdlR1JYYkhsYVUyaGpTV2swZGxsWVNubFpXR3hOWVZkMGJGWkhPVUpqYmtwb1pWTTFjV014ZDJsTFZIUmpZbXg0ZFZwdVZuVlpNMUp3WWpJMFoxZ3pWblZqTTFaM1kwYzVlV1JIVm10VFdGSnNZMjFHYVdKSFZsVmlNRVo1WTIxR05VdEhPSE5KUnpGd1ltdDRiR0pwYTJkbE1YaDFTVU5DY0ZwcFFXOUpWemh3U1VoS2JHUklWbmxpYW5SalltbEJaMkZYV1dkTFNGSTFZMGRXZGxwcFFuWkpSREE1VUZOQ1kwbHVUakJqYld4MVdqRjNhVXRUUW5sYVdGSXhZMjAwWjFsWVNubFpXR3hOWVZkMGJGWkhPVUpqYmtwb1pWTm9ka3hEUW5SaFZ6Vk5XbGMwY0U4eGVIVkpRMEl5V1ZoSloySnBRVGxKUlRscFlXMVdhbVJETlhkamJUa3dZak5TTldOSFZYVmtSemxVWkVoS2NHSnRZM1ZaTWtaellrTm9ka3RUTlhwaVIyeHFXbE5uTkV4RFFYUk5VMnMzV0VjMFowbEhiRzFKUTJoMVNVUXdPVkJUUW1OSmF6bHBZVzFXYW1SR2QybEpRMWx0U1VjNGRWa3lPWFZqTTFKNVpGZE9NR0l6U1hCSlJ6Um5VRk5DZGt4dFRuWmliazR3WTI1V2FtUkhPWGxNYlRWb1lsZFZOMWhITkdkSlIyeHRTVU5vZFVsRU1EbFFVMEpqU1dzeGFHTkdkMmxKU0hnNFNVYzBaMUJVTURsSlJuZHBWVEpXTUZoRFNYQkpTRXBzWkVoV2VXSnBRa0pqYmtwb1pWTTFiV050T1hSTFJ6aHdUekY0ZFVsRFFuQmFhVUZ2WW1sQk9WQlVNR2RZUTBwQ1kyMWtNV0pYVm5Wa1NFNWpTV2xDT0daRFFYWllhV2N2VDJ4V2NHWkZhM0JpYmxGdlVIcHZOR1pFUlRKbVJFMTVTMU5uTDA5clRuTlpWekYzV2xkUmNGQXdSbmxqYlVZMVNrTTRkV1JIVm5wa1EyaDFTMU5yWjJOdFZqQmtXRXAxU1VkR2VXTnRSalZVUjJ4eVdsWlNkbEZZU25sWldHdHZZbmwzWjJKWGJIVlVSMVoxUzFSMFkySnVNV05pYkhoMVlsYzVhMlJYZUd4TWJWWTBZMGM1ZVdSSVRXZFFVMEptWkZjMWVtUllRbmRpTTBvd1dsZFNTbVJIVm5sWlYwcHpXbFpTZGxGWVNubFpXR3MzV0VjMWRHSXlVakZpUjFWMVdsaG9kMkl6U2pCak1YUmpTVzFTYkZwdFJqRmlTRkpqU1d3d1oxQlRRblJpTWxJeFlrZFZkVnBZYUhkaU0wb3dZM2wzWjJKWE9XdGtWM2hzVEcxV05HTkhPWGxrU0UxMVdERTViR013TVhaYVNGWnpXbE5CT1VsSVVubGtWMVUzU1dsM2FWcHVWblZaTTFKd1lqSTBaMWd5TlhaaWEyd3dXbGhLYUZsdGVHeFZNMEo1V2xkR2EwdERhMmRsTVhoMVNVTkNNR0ZJU25aa2VVSjFXbGhqWjFaSWJIZGFWVlo1WTIwNWVVdEdkMmxUVnpVeVdWZDRjRnBEUW1oa1NGSnNZbGhDTUVsSVVuWkpTRTUzWTIxV2FGcERRblZpTWpSMFlWaFNiR050Um1saVIxVm5ZVmMxZW1SSFJuVlpNbFYxV0VaNGRWTlhOR2RpTTBwcldsaEpaMlJIT0dkWmJWVm5ZVmhTYkdOdFJtbGlSMVZ6U1VjMWRtSnBNV2hqYmtwb1pWTkNkbGx0Y0d4Wk0xSjZTVWN4TVdNelVXZGhSMFl5V2xOQ2FFbEdkRlJsVnpGcFlqSjNkV0ZZVW14amJVWXdZak5LWkV0RGEyZGlWMVl3WVVjNWEweHNkMmxMVkhSalltNHhZMkpzZUhWaVZ6bHJaRmQ0YkV4dFZqUmpSemw1WkVoTloxQlRRbVppYlRsMVUxaFNiR050Um1saVIxWlVZMGhLYkZsWFVUZFlSelYwWWpKU01XSkhWWFZhV0doM1lqTktNR014ZEdOSmJWSnNXbTFHTVdKSVVtTkpiREJuVUZOQ2RHSXlVakZpUjFWMVdsaG9kMkl6U2pCamVYZG5ZbGM1YTJSWGVHeE1iVlkwWTBjNWVXUklUWFZZTVRsc1l6QXhkbHBJVm5OYVUwRTVTVWhTZVdSWFZUZEphWGRwWkcxR2VVbEhSbmxqYlVZMVZqSnNNR0ZIT1RGa1JXaDJZa2RXZWtsRU1HZGpiVlo0WkZkc2VWcFRhR05KYVRSMldWaEtlVmxZYkZoaFdGSnZZak5XTUZOSE9YTmFXRTExWVc1T1kwbHBhemRZUnpWalltNWFhR05wUW5Ca1IxWjVXVmRLYzFwV1VuWlJXRXA1V1ZocloxQlRRbmxhV0VZeFlWaEtiRXRHZDJsTWFUbHdaRWRXZVZsWFNuTmFWbEoyVVZoS2VWbFlhM1ZoYms1alNXbHJOMWhITldOaWJscG9ZMmxDTVdKdVRqRmpTRUoyWTI1U2JGcEZiREJhV0Vwb1dXMTRiRlpIT1VKamJrcG9aVk5CT1VsSVNteGpXRlp3WTIxVmIxaERTWFZNTTFaMVl6TldkMk5IT1hsa1IxWnJVMWhTYkdOdFJtbGlSMVpWWWpCR2VXTnRSalZNYlhCNldFTkpjRTh4ZUhWWVJ6VXlXVmhKWjJKdE9YVlRXRkpzWTIxR2FXSkhWbFJqU0Vwc1dWZFJaMUJUUW5sYVdFWXhZVmhLYkV0R2QybE1hVGwxWWpJMVNtUkhWbmxaVjBweldsWk9kMk50Vm1oYVF6VnhZekYzYVV0VWRHTmliSGgxV201V2RWa3pVbkJpTWpSbldETlNkbEV5T1hWak0xWjBXVmRLYzFwVlJubGpiVVkxUzBkR2VXTnBhMmRsTVhoMVNVTkNlVnBZVWpGamJUUm5XVmhLZVZsWWJGaGhXRkp2WWpOV01GTkhPWE5hV0UxdldWaEtlVXRUUWpobVEwSndaRWRXZVZsWFNuTmFWbEoyVVZoS2VWbFlhMjlaV0VwNVMxTkNPR1pEUWpGaWJrNHhZMGhDZG1OdVVteGFSV3d3V2xoS2FGbHRlR3hXUnpsQ1kyNUthR1ZUYUdoamJrbHdTVWg0T0VsSE5YWmlhMnd3V2xoS2FGbHRlR3hWTTBKNVdsZEdhMHREYXpkWVJ6VTVXRWMxWTJKdE1YWmFTRlp6V2xNMWJHVklRblpqYmxKNlNVUXdaMWd6VW5aUk1qbDFZek5XZEZsWFNuTmFWVVo1WTIxR05VOHhlSFZpVnpsclpGZDRiRXh0VmpSalJ6bDVaRWhPWWxoRFNtdGFWMXBvWkZkNE1GaERTbVJKUkRCbllsYzVhMlJYZUd4TWJWWTBZMGM1ZVdSSVRYTkpSekYyV2toV2MxcFROV3hsU0VKMlkyNVNla3hzT1daYVdFNU9ZakpTTVdKSFZXZFFVMEl3WTI1V2JFOTVTWE5KYVRoeFMyeDRkVXRwUWxGWlYwNXlXVmRrYkVsSGJIVmtSMVo1WW0xR2MwbElWakJoVjNod1pFaHJaMXB1Vm5WWk0xSndZakkxZWt4c2VIVkxhVGxqWW0xT2RtSnVUakJKU0Vwc1kwZDRhRmt5VmxOU1UwRTVTVU01WTFoRFVtTllTSE52VnpCRmRGZHRSWFJsYkRsa1Z6QkZkRmR0UlhSbGFrRjBUMVk1WkV0cGJHTllTREIyV2pGNGRWaEhOSFpMYVhCalltbHZaMVZ0Vm5kaVIwWnFXbGhOWjFreU9YVmpNMUo1WkZkT01HTjVRbk5oVjNSc1NVTmphMlV3V2xCVU16QnVTVWhrY0dSSFoyZGtSMmhzU1VkV2RXUnRiSGxpTWpWMFdsYzFNRWxJV21oaVNGWnNTVWM1YlVsRFpFZFVNRGh1U1VOb2RtTnBRak5oUjBZd1dsaGFiR05wUW5KYVdHdG5ZVmhOWjJSWVRteGFRMnQxU1Vaa2NHSkhkMmRqYlVad1l6SlZaMWxYTldOaWFXOW5XbGhvYWxwWVFqQmhWemwxU1Vkc2JVbEhOWFpKU0Zwb1lraFdiRWxIYkhwSlIxcDJaRmMxYTBsSFduWmphVUpvU1Vka2NHUnRWblZKUjNSc1pWTTFZMkpwYjNaWVJ6VnFZakkxZW1SRFFteGlibHBWV2xjeGQySkhSakJhVms0d1kyMXNkVnA1UVRsSlEyaDNXVmhTYjB0VFFUbFFhVUkzV0VjMFowbEhUblppYms0d1NVYzVlV0ZYWkZGWldGSnZTVVF3WjJOSFJqQmhRMEYyVEhsQ01XTXlWbXRKUjFwMlkybENiR051U25aamFVSjBXbGhPZWxsWFpHeGpNWGgxV0VjMFowbEhlR3hrUTBKMFdWaFNhbUZIVm5wSlF6aDJTVVZGWjJOdFZuZGlSMFpxV2xkUloyUnRSbmxKUnpGb1pWTkNjR1JJVG14aVIxbG5ZMjFXYlZwWVNteGliVTVzU1VoYWFHTnVUWE5KU0U1MlNVaGtiRWxIZEd4YVdFRm5ZMGhLZGxreVZucGpNbXgxV25sQ01XSnVVbkJpUTBKc1pHMVdlV1ZZVW05aFZ6VnVTVWRzZWtsSVNteGpNamx6WkcxV2EweHNlSFZKUTBJellVZHNjMXBUUVc5TFJ6Rm9aRWRPYjFwWVRXZFFVMEppVEdrMGRXTkhSakJoUXpWMFdWaFNhbUZGUm5OaVEyaDVXbGhDYzFsWFRteFZhMVZ3V0ZOcmRXSkhWblZhTTFKdlNVUTBaMDFEYTJkbE1YaDFTVU5CWjBsRE9IWkpSMDUyWW01T01FbEhNV2hrUjA1dldsaE5aMUJUUW1KTWFUUjFZMGRHTUdGRE5YUlpXRkpxWVVWR2MySkRhSGxhV0VKeldWZE9iRlZyVlhCWVZuaDFTVU5CWjBsSE1XaGtSMDV2V2xoTmRXTnRWakphV0VwNldsTm5jRWxET0haSlJsSnZXbE5DZVZwWVdteGpiazVzU1VkR2MySkhPVE5qZVVJeFkzbENNR0o1UWpGak1sVm5aRWRvYkVsSVRqQlpXRW93U1VkR2RWcERRbXhpYlZGbllWYzFhMXBZYUd4amVVSXpZVmhTYjJJelZqQkpSekZzWXpOT2NHSnRZMmRrV0VGblpFZG9iRWxJVGpCamJXeDFXbmsxWTJKcFFXZEpRMEp0WWpOSlowdEhUblppYms0d1NVY3hhR1JIVG05VFZ6VnRZbmxDZGxwcFFuUlpXRkpxWVVkV2VrdFRRamRZUnpSblNVTkJaMGxEUW1waU1qVjZaRU5DZEZsWVVtcGhRMEU1U1VjeGFHUkhUbTlUVnpWdFlqRnpkMWhXZUhWSlEwRm5TVU5CWjFreU9YVmpNMUZuWVRKV05VbEVNR2RpVjBZd1dUSm9TbUp0V25aWGVrWmtXRWMwWjBsRFFXZEpRMEpxWWpJMWVtUkRRakpaVjNneFdsTkJPVWxJUW5saU1rNXNZek5OZFZwWE5USlhNblJzWlZZeFkySnBRV2RKUTBGblNVZE9kbUp1VGpCSlJ6Rm9aRWRPYjFVelVtaGpibEZuVUZOQ2RGbFlVbXBoUld4MVdtMDRkV0ZYTld0YVdHaGpZbWxCWjBsRFFXZEpSMnh0U1VOb01sbFhlREZhVTBFNVVGUXdaMlJYTld0YVYxcHdZbTFXYTB0VFFqZFlSelJuU1VOQlowbERRV2RKU0ZKdlkyMDVNMGxITld4a2VVSkdZMjVLZG1OcGFHZFViVGhuWXpOV2FtRkRRbXhpYmxwd1kyMDVkV0pYVm5Wa1EwSjNXVmhLYUdKWFZqQmFXRWxuU25sU04yRXlWalZtVTJObldtMDVNV0p0VVdkaFZ6Um5ZMGRHTUdGRFFubGFXRUp6V1ZkT2JHSlhWblZrUkc5blNubFNOMkl6U25CYU1VSm9aRWRvT1VwNU5XZExWbmgxU1VOQlowbERRV2RtVm5oMVNVTkJaMGxEUVdkalIwWXdZVU5CT1VsSVFtaGtSMmQxWXpOV2FXTXpVbmxoVnpWdVMwUkJjMGxITVdoa1IwNXZWVE5TYUdOdVVYQkpRM05uWkcxR2MyUlhWV2RMZVVKM1dWaFNiMHh1VGpGWmJrNHdZMjFzZFZwNWFIUlpXRkpxWVVaT01GbFlTakJKUTNObllsZEdNRmt5WjNWaVIxWjFXak5TYjB0V2VIVkpRMEZuU1VneFkySnBRV2RtVm5oMVdFYzBaMGxJU214a1NGWjVZbWxDZDFsWVVtOVlSelU1V0VjMVkySnBPSEZMYkhoMVMybENVMXBZVWpGamJUVjZTVWhTZVdSWFZXZGhWMWxuWTBkR01HRkZSV2RoV0UxbllqSTBaMk5IUmpCaFJVbDFTVVZyZFZwVE5ITkpSMnh0U1VoQ2FHUkhhRU5KUjJ4NlNVYzVlVWxJVm5WYVIxWjVTVWhDYUdSSGFFSk1hVUpHVEcxamRVOXNlSFZMYVVGMFNVTm5ia3hwWTNOSlEyTjFXbTA1ZGtwNWEyZFFWRFJuWkVoS01WcFdlSFZMYVVGMFNVTm5ia3h0V25aaWVXTnpTVU5qZFVwNWEyZFFWRFJuV20xR2MyTXlWbU5pYVc5blRGTkJiMHA1TlcxaU1qaHVURU5CYmt4dFduWmllV053U1VRd0swbElVbmxrVjFaalltbHdZMkpwYjJkVWJUa3dXbE4zWjJSSGFIQmplVUp0WkZjMWFtUkhiSFppYVVKb1l6Tk9NV0pYVm5wSlNGSnZXbE5DZDFsWVVtOWplVUpvWTIxVloyUnRSbk5oVjFGblUyeE9VRlJwUW5kWldGSnZZM2sxWTJKcGIzWllSelZxWWpJMWVtUkRRakJhV0U0d1UyNU9kbUpzUW1oa1IyaDZTVVF3WjB0SVFtaGtSMmhDVEVOQ2QxbFlVbTlSYVd0blVGUTBaMlV4ZUhWSlEwSndXbWxCYjB0SVVqVmpSMVoyV21sQ2QxbFlVbTlSVTBGb1VGUXdaMG96VGpCamJXeDFXbmxqWjBwcFdXZEpVMmgzV1ZoU2IxRlRRbkJpYms0d1dWYzFhbHBYT1cxSlJrNHdZMjFzZFZwNWEzQllSelJuU1VOQlowbERRamhtUTBGdlpFaHNkMXBYT1cxSlNFSm9aRWRvUTBsRFJUbFFVMEZ1WXpOU2VXRlhOVzVLZVVGdFNtbEJhRXRJUW1oa1IyaERTVWRzZFdNelVtaGliVTVzWWpKWloxVXpVbmxoVnpWdVMxTnJjRWxJZEdOaWFVRm5TVU5DTUdGSVNuWmtlVUoxV2xoaloxSllTbmxpTTBsdldVWldkVnBZYUhkYVYwNHdXbGRSWjJKdE9YVk1XRTR3WTIxc2RWcDVRbkJpYmtJeFpFUnZaMHA1VWpkalIwWXdZVVZHT1VwNWQyZEtlVkkzWTBkR01HRkZTamxLTWtGd1dFYzBaMGxJTVdOaWFVRm5XVEk1ZFdNelVXZGpSMFl3WVVWR1EyRllVbnBKUkRCblkwZEdNR0ZGUlhWak0wSnpZVmhSYjBwNU5HNUxWbmgxU1VOQ2FtSXlOWHBrUTBKM1dWaFNiMUZyU25Ca1NFMW5VRk5DZDFsWVVtOVJhVFY2WTBkNGNHUkRaMjVNYVdOd1dFYzBaMGxIYkcxSlEyaDNXVmhTYjFGVlNuQmtTRTExWWtkV2RWb3pVbTlKUkRSblkwZEdNR0ZGU2tOaFdGSjZURzE0YkdKdFpEQmhRMnRuWlhsQ2VWcFlVakZqYlRSbldtMUdjMk15VldkbVZuaDFXRWMwWjBsSVpHOWhWM2hzU1VOb2QxbFlVbTlSVlVwd1pFaE9ZazFHTUdkUVZEQTVTVU5qYmt0VFFqZEpTRUpvWkVkb1FsRnRiREJqZVRWNllVZHNiV1JEWjNCSlNERmpZbWxCWjJReWFIQmlSMVZuUzBoQ2FHUkhhRU5SYld3d1l6RnpkMWhUUVRsUVZEQm5TbmxqY0VsSWMyZGpSMFl3WVVWS1EyRllVbnBNYms1dllWZGFNRXREYTJkbVZuaDFTVU5DY0ZwcFFXOWpSMFl3WVVWR1EyRllVbnBNYlhoc1ltMWtNR0ZEUVN0SlNFSm9aRWRvUTFGdGJEQmplVFZ6V2xjMWJtUkhaM0JKU0hOblkyMVdNR1JZU25WSlIxcG9Za2hPYkVsSU1XTmliSGgxU1VOQ00yRkhiSE5hVTBGdlkwZEdNR0ZGUmtOaFdGSjZURzE0YkdKdFpEQmhRMEVyU1VSQmNFbElkR05pYVVGblNVTkNhbUl5Tlhwa1EwSm9VVzFzTUVsRU1HZGpSMFl3WVVWR1EyRllVbnBNYms1dllWZGFNRXREYkdOaWFVRm5TVU5DYW1JeU5YcGtRMEpwVVcxc01FbEVNR2RqUjBZd1lVVktRMkZZVW5wTWJrNXZZVmRhTUV0RGJHTmliSGgxU1VOQlowbEhiRzFKUTJocFVXMXNNRWxEUlRsUVUwSm9VVzFzTUV0VFFqZEpTRXBzWkVoV2VXSnBRbTFaVjNoNldsTkNPVmhITkdkSlNERmpZbXg0ZFVsRFFubGFXRkl4WTIwMFoyUklTakZhVm5oMVpsWjRkVmhITld4bFNFSjJZMjVSWjJWNVFteGlibHBWV2xjeGQySkhSakJhVms0d1kyMXNkVnA1ZDJka1IxWjZaRVZ3ZW1JeU5WRlpXRkp2WTNsQ09WaEhOR2xNUTBsMlMybHdZMkpwYjJkVVIyeHBZMjFHZVdWVFFqQmhSMFl3U1VkS01XRlhlR3RqZVVKb1NVaE9jR0p0WkhOYVUwSkxWVEE1VDBsSE9XbGhiVlpxWkVOQ2JXTnRPWFJKUnpFeFlraFNjR05IZUd4SlJYQlVWREEwWjFwdGJITmFXRTExU1VWR2VrbEhWbWhaTW1kbldtMXNjMXBUUW5CamVVSnpZakpHYTFwWFVYTkpTR1JzU1VkT2IxcFhUbkpZUnpSeFNVZENabUpYVmpCWlV6bHFZakl3ZFdKSGJIaGtWMnhyVEZkNGFGbHVUWFZhYlZacldsaEthR1JIVm10TVYxSm9aRWRGZG1KWE9URmlibEpVWTBkV2FtTXlRWFZKUlZab1dUSm5aMk16UW14WmVVSnFZakkxZW1GWVRqQmplVUoyV21sQ2FFbEhRbXRaV0ZKb1ZVZEdNR0ZIUVdkWlZ6VnJTVWRDYTFsWVVtaFNiV3h6V2xkQloxcFhlR3hpVjFaMVpFTTBaMVpIYUd4WVJ6UnhTVWRTYUdSSFJXZGpSMFl3WVVOQ2NHTjVRbnBqUjNod1pFTkNkbUpwUVc1TWVXTm5XVmMxYTBsSFZtaFpNbWRuV2xkNGJHSlhWblZrUTBKd1kzbENNR050Vm1oa1IxWnJTVWRHZWtsSFJXZGpNMUo1WVZjMWJreHBRbFZoUjFaNVdsZGFkbU50VlhOSlNGSnZXbE5DZDFsWVVtOUpSMng2U1VkT2RtSllRbWhrUjJ4cFlrZFZaMlF5YkRCaFEwSjJXVzF3YkZrelVXZGhNbFkxWXpGNGRVdHBRbWxrV0ZGbldrYzViR041UW5WaU0xRm5Zek5XZDJOSE9YbGtRMEpvWTI1S2FHVllUWFZZUnpSeFRERjRkV0ZYTVhkaU0wb3dTVU52WjFsWVRXZGFiazFuV201S2RtSlRRVzVhYmsxdVdFYzFjR0pZUW5aamJsRm5TMmxDYUdONVFuZFpXRkp2U1VkYWVXSXlNR2RLTTBKb1pFZG5ibGhITldOaWJXeDBZMGM1ZVdSRFFqZEpSMVoxWkd4U2JHSllRbk5aV0ZKc1ZUTlNlV0ZYTlc1TVEwSXdXbGhPTUZOdVRuWmliRUpvWkVkb2VrbElNR2RhYmtwMllsTkJia3hwT1RGa1IyeHpZM2xrWTJKc2VIVlpNamwxWXpOUloxSnJjRlJVTURWbVZGVldWVkZXT1VWUlZsSkNXREIwUmxkVFFUbEpRMlJxWWpJd2RXSkhiSGhrVjJ4clRGZDRhRmx1VFhWYWJWWnJXbGhLYUdSSFZtdE1WM0I2WWpJMGJsaEhOV05pYVRoeFMyeDRkVXRwUWtKYVIxSjZTVWM1ZVVsSVZuZGFSMFl3V2xoTloxbFRRblJpTTFaMVpFTkNkMkl5YkhWa1EwSnNZbTVTZVdWVE5HZFdNRVpUVkd0c1QxSjZiMmRXUjJod1kzbENkRnBZVW05aU1sRm5Xa2M1YkdONVFuVmlNMUZuV1ROV2VXTnRWblZrUjNnMVNVaE9NV05JUW5aamJsRm5Zek5XYVV4WE1YWmtWelV3WTNrMFoxWkhhR3hqTWxWbllsaFdlbVJEUW1sYVZuaDFTMmxDZEZsWE5URlpWM2h6WlZOQ01XTkhVbWhrUjFaclNVZEtOVWxIUm1wWk1sWjZZekpzZFZwNVFqQmhSMVZuWXpOV2FVeFhVbWhrUjBWbll6TlNlV1JYVGpCa1dFcHNTVWRHZFZwRFFuUmlNbEp3V201c2NHSnRZMmRoV0ZGdVkzbENkR0l6Vm5Wa1EwSjNZakpzZFdSSVRXZGFSMng1V2xkT01HSklhM1ZZUnpSeFRERjRkVmt5T1hWak0xRm5XVmRTYTFSWE9URmlibEpSWWpKc2RXUkRRVGxKUTJocldWaFNhRXhEUW10WldGSm9WVWRHTUdGRGQyZGFSMFl3V1ZWYWNHSkhWWEJKUkRBclNVaDBZMkpwUVdkaVIxWXdTVWN4ZG1SWE5UQlZNMEpzV1ROTloxQlRRbTVhV0ZKT1lqTldkV1JHVG5kYVYwNTZTMGRTYUdSSFJYQllSelZqWW1sQloyRlhXV2RMUnpGMlpGYzFNRlV6UW14Wk0wMW5VRlF3T1VsSVZuVmFSMVp0WVZjMWJGcERhMmRsTVhoMVNVTkJaMGxITVhaa1Z6VXdWVE5DYkZrelRXZFFVMEppV0ZaNGRVbERRV2RKUjA1MlltNU9NRWxITVRWVVYxWXdXVk5CT1VsSFZuVmpNMVo1V2xVeE5WUlhWakJaVTJocldWaFNhRXRXZUhWSlEwRm5TVWRzYlVsRGFIUmxWVEZzWkVkRmRXSlhPVEZpYmxKVVkwZFdhbU41UVRsUVZEQm5aRmMxYTFwWFduQmliVlpyUzFOQ04xaEhOR2RKUTBGblNVTkNkR1ZWTVd4a1IwVjFZbGM1TVdKdVVsUmpSMVpxWTNsQk9VbEhNWFprVnpVd1ZUTkNiRmt6VG1OaWFVRm5TVU5DT1ZoSE5HZEpTREZqWW14NGRVbERRbXBpTWpWNlpFTkNjRWxFTUdkaVZ6a3hZbTVTVkdOSFZtcGplVFZ0WVZjMWExTlhOV3RhV0dkdlMwZFdjMHRUUVRsUWFVSnNZa00xYTFsWVVtaFZSMFl3WVVOQk9WQlVNR2RhUjBZd1dWWkNhR1JIWjNCWVJ6Um5TVWRPZG1KdVRqQkpSekYyWkZjMU1GVXpRbXhaZVVFNVNVaHpaMXBIUmpCWlZrSm9aRWRuWjA5cFFtdFpXRkpvVlVkR01HRkRkMmRhUjBZd1dWVmFjR0pIVldkbVZuaDFTVU5DY0ZwcFFXOWhVMEZvVUZRd1oweFVSWEJKU0hSalltbEJaMGxEUW5SaU0xWjFaRVpPZDFwWFRucFhNbXhrU1VRd1oySlhPVEZpYmxKVVkwZFdhbGhITkdkSlNERmpZbWxCWjFwWGVIcGFVMEkzV0VjMFowbERRV2RpVnpreFltNVNWR05IVm1wamVUVjNaRmhPYjB0SE1YWmtWelV3VlROQ2JGbDViR05pYVVGblpsWjRkV1pXZUhWWVJ6VnFZakkxZW1SRFFuRmpNamwxVld0VloxQlRRWFpZUm5kMVlXNU9kbUpwVVhaWVJ6VmpZbWs0Y1V0c2VIVkxhVUpUV2xkR2EyTjVRbWhKUlhCVVZEQTBaMXB0YkhOYVUwSm9ZbTFSWjJOSVNuWlpNbFo2WXpKV2VrbEhXblpqYVVKdFdsZFNiR050UmpCYVYxRm5ZbGM1TVdKdVVXZGpSemx3WW01U2VrbElVblpKUjA1MlltNU9NR051Vm1wa1EwSm9TVWRPZG1KWVFuWmpNbXd3V2xOQ1MxVXdPVTlKUnpscFlXMVdhbVJEUW0xamJUbDBTVWM1ZFZwVFFuWmphVUowWWpOS2JGaEhOSEZKUjFwd1lrZFdla3hzZUhWTGFUbGpZbTFPZG1KdVRqQkpTRXBzV1ZkU1IxTnNUbEJVYVVFNVNVTm9iV0ZYZUd4VlIwWXdZVU4zWjJJelFqQmhWemwxWTNscloxQlVOR2RsTVhoMVNVTkNjRnBwUVc5SlYxcHdZa2RXVVZsWVVtOUxVMEkzU1VoU2IyTnRPVE5KUnpWc1pIbENSbU51U25aamFXaG5VbTFzYzFwVFFuZFpXRkp2U1Vkc2RXUnRSbk5oVjFGMVNVTm5hMlV5V25CaVIxWlJXVmhTYjJaVGJHZExVMEk1V0VjMVkySnBRV2RaTWpsMVl6TlJaMlY1UW5sYVZ6RnNZbGRLYkdOc1RuWmtXRXBxV2xOQ09VbEVNR2RpTTBJd1lWYzVkV041UWpobVEwSTNabFo0ZFZoSE5HZEpSMDUyWW01T01FbElRbmxpTWs1c1l6Tk9iRnBHUW1oa1IyZG5VRk5DYkdKdVdsVmFWekYzWWtkR01GcFdUakJqYld4MVdubG9iV0ZYZUd4VlIwWXdZVU5zWTJKcFFXZGhWMWxuUzBOR2JXTjVOV3hsUjJ4NlpFaE9WR1ZYTldwTFNFSjVZakpPYkdNelRteGFSa0pvWkVkbmNFdFRRamRZUnpSblNVTkJaMWt5T1hWak0xRm5ZbGhPYmtsRU1HZFpSVFYyU1VoT01Wa3laMmRhYld4eldsUnZaMHA1VWpkYWJXeHpXbFpDYUdSSGFEbEtNa0ZuUzNsQmIxcHRiSE5hVmtKb1pFZG5aMGxVTURsSlNFSjVZakpPYkdNelRteGFSa0pvWkVkbloxQjVRbWRKUTJkdVNraDBkMk50T1dwYVdFNTZXbGRTVVZsWVVtOW1VMk53V1VOQk5rbERZMjVMVm5oMVNVTkJaMGxJVW05amJUa3pTVWMxYkdSNVFrWmpia3AyWTJsb2RHTXlZM0JZUnpSblNVZ3hZMkpwUVdkWk1qbDFZek5SWjFwSFJqQlpWVXB3WkVoTloxQlRRbTFqZVRWNVdsZEdhMUp0YkhOYVZrNDFZbTFOYjJOSVNuWlpNbFo2WXpKV2ExVkhSakJoUTJ4alltbEJaMkpIVmpCSlIxSm9aRWRGWjB4NU9HZFpWMDR3WkZkR2MySklhM05KU0dSMlpGZDRhMGxIZUhaa2JWVm5TakpPZG1KdVRqQktlWGRuV1c1V01FbEhOV3hhVjFGblpFYzRaMk15VmpCSlIyeDFZekpzYTFwVFFqQmpibXRuV1cxNGRsa3ljMmRaVnpWclNVZFNkbUpwWkROSlNHUm9ZbTVSWjJSSE9HZGFXR2gzV1ZjMWEwbElUbXBpTTBKc1NVYzViVWxJVW05YVUwSXdZMjVyZFZoSE5HZEpTRko1WlZOQ04xaEhOR2RKUTBGbldrZEdNRmxUUVRsSlJYQlVWREEwZFdOSFJubGpNbFZ2V2tkR01GbFZTbkJrU0Uxd1dFYzBaMGxJTVdOaWFVRm5XVEpHTUZreVoyZExSMVZ3U1VoMFkySnBRV2RKUTBKd1dtbEJiMXBUUW5CaWJrNHdXVmMxYWxwWE9XMUpSazQxWW01U2FHVkZWbmxqYlRsNVMxTkNOMWhITkdkSlEwRm5TVU5DTUdGSVNuWmtlVUoxV2xoaloxVXpiSFZrUjBZMFVsaEtlV0l6U1c5WlExSTNXbE0xZEZwWVRucFpWMlJzWmxOQ00yRkhiSE5hVTBKM1kyMDVhbHBZVG5waFZ6VnVTVU5TTjFwdGJITmFWa0pvWkVkb09WbERiR05pYVVGblNVTkNPVmhITkdkSlNERmpZbXg0ZFVsRFFuQmFhVUZ2WTIxV2RGcFhNV2xhV0VwVVlqTldlVmt5VlhCSlNIUmpZbWxCWjBsRFFucGFXRkpVWWpOV2VWa3lWVzlhUjBZd1dWTjNaMXB0YkhOYVZrSm9aRWRuY0ZoSE5HZEpTREZqWW14NGRVbERRbTFpTTBsblMwZE9kbUp1VGpCSlJ6RjFaRVpPZDFwWFRXZGlNbGxuV2pKV01GUlhPVEZpYmxKVVkwZFdhbU41YUd0WldGSm9TMU5DT0daRFFtSllVMnRuWlRGNGRVbERRV2RKUjA1MlltNU9NRWxJYzJkYVIwWXdXVlZhY0dKSFZYTkpSMUpvWkVkR1JXRllTWE5KUnpGMlpGYzFNRlZIT1hCaWJsRnpTVWRhY0dKdFJuTlRNbFkxU1Vnd1oxQlRRbmRqYlRscVdsaE9lbFJYT1RGaWJsSlVZMGRXYWt0SWMyZGlWelV3VlROQ2JGbDVkMmRhUjBZd1dWTkNPVXRXZUhWSlEwRm5TVWRzYlVsRGFHdFpXRkpvVW0xc2MxcFRhMmRsTVhoMVNVTkJaMGxEUVdkWk1qbDFZek5SWjJNelZtbFNSMFl3V1ZOQk9VbElTbXhaVjFKSFUyeE9VRlJwYUd0WldGSm9VbTFzYzFwVGJHTmliSGgxU1VOQlowbERRV2RpVnpreFltNVNVV0l5YkhWa1JuUnRZVmMxYUdKRmRHeGxWakJuVUZOQ2VtUlhTa1ZaV0ZKb1dFYzBaMGxEUVdkbVZuaDFTVU5CWjBsSFZuTmpNbFZuWlhsQmRreDVRVzVhUjBZd1dWVlNjR05wWTJkaFdFMW5Xakk1ZGxwRFFtbGFWMDVvWkZoT2JFbElaR3hKUjFZMFkwZFdhbVJEUW5kamJUbHFXbGhPZWxSWE9URmlibEpVWTBkV2FrdERhMmRrUnpoblkyMUdjR015VldkWlZ6Um5XbGhvYWxwWVFqQmhWemwxU1Vkc2JVbEhOV3hoV0ZKdldsaEpaMk16UW14Wk1teHRZVmRXYTB4c2VIVkpRMEZuU1VOQloxa3lPWFZqTTFGbllsYzFNRlF5U25GSlJEQm5aVE14WTJKcFFXZEpRMEZuU1VjeGRtUlhOVEJWUnpsd1ltNVNZbHB0YkhWWlYzaE1XbGhzWkVsRU1HZGlWelV3VkRKS2NWaEhOV05pYVVGblNVTkJaMGxIVG5aaWJrNHdTVWRhY0dKSFZucEpSREJuV201TmRXTnRWbWhhUjFKd1kyeE9OV0p0VFc5YVIwWXdXVlZTY0dOcGQyZGxlVUl6WVZoU2IxSnRiSE5hVmxJMVkwZFdla2xFYjJka1NFb3hXbE5DT1V0V2VIVkpRMEZuU1VOQlowbERRWFZhYld4elpFZFdlVXRIYkRCYVZ6Qm5VRlEwWjBsWGJEQmFWekIxWVZoT1JXRllTbXhaTTFKMlkyNXJiMHRUUVcxS2FVSnhZekk1ZFZWclZYVmtSMVo2WkVOb2NHUkhWblJNYlRWb1lsZFZjRXRXZUhWSlEwRm5TVU5CWjBsRFFYVmlWMFozUzBkc01GcFhNR2RRVkRSbllWaFNiR0pUTlhWWlZ6RnNTMU5CZGt4NVFuVmlNMUpzU1VOa2RWbFhNV3hLZVVKd1kzbENNR0ZIVldkak1teDBZMGQ0YkV3eVNtaGpNbFoxV1ZjeGJFeERRblZpTTFGblpFZG9iRWxJWkc5aU1uaHNTVWhDYUdSSFozVllSelZqWW1sQlowbERRV2RKUjFwMlkybEJiMWt5T1hWak0xRm5Xa2RzZVZKdGJITmFVMEoyV21sQ2JXRlhlR3hqZVd0blpURjRkVWxEUVdkSlEwRm5TVU5DYW1JeU5YcGtRMEowWW01U1VXSnVVV2RRVTBKcllWaEtSMkZYZUd4TWJrcHNZMGQ0YUZreVZXOWhiazUyWW14S1JreERRVzVLZVd4alltbEJaMGxEUVdkSlEwRm5XVEk1ZFdNelVXZGpNMVpwVWtkR01GbFRRVGxKU0Vwc1dWZFNSMU5zVGxCVWFXaDNXVmhTYjB4dGNIWmhWelJ2V2tkR01GbFZVbkJqYVhkbldrZHNlVkp0YkhOYVUydHdXRWMwWjBsRFFXZEpRMEZuU1VjeGRXUkZPV2xoYkhSMFltNVNVV0p1VW1SSlJEQm5Zek5XYVZKSFJqQlpWbmgxU1VOQlowbERRV2RtVm5oMVNVTkJaMGxJTVdOaWFVRm5abFo0ZFZoSE5HZEpSMXAyWTJsQmIxa3lPWFZqTTFGbllrYzFjbFV6UW14WmVVSjJXbWxDYmxwWVVrMWhWelZ5VlROQ2JGa3pUVzlhUjBZd1dWTnJaMlpJZDJkWE1UQndTVWgwWTJKcFFXZEpRMEpxWWpJMWVtUkRRamRKUjFwd1ltMUdjMVZ0Vm0xTVEwSjZZak5XZVZreVZYTkpSM1JzWlZVMWFHSlhWWE5KU0VKc1ltNVdjMlJIYkhSWldGSnNWVzFXYlV4RFFtMWhWelZvWWtWMGJHVlRRamxKUkRCblkwaEtkbGt5Vm5wak1IaHdZbTEwVkdOSFZtcExSM2gxWVRGT2QxcFhUWE5KUjFKb1pFZEZjRmhITldOaWFVRm5TVU5DYW1JeU5YcGtRMEp1V2xoU1UxcFhSbk5UV0ZKc1lsTkJPVWxEYUhwaU0xWjVXbE4zWjJFeVZqVlViVVowV2xOM1oyRXlWalZMVTBFNVVHeDRkVWxEUVdkSlEwRm5Zekk1TVdOdFRteE1iVnB3WW0xUmIwdEhUbWhpYlZKd1drZEdNRnBUYTJkUVZEUm5XVEpHZFZwSGJHdFpXRkpzVnpKMGJHVlZOV2hpVjFaa1NVUXdPVkJUUW5KYVdHdHdXRWMwWjBsRFFXZEpRMEZuU1VoNE9FbElVbTlqYlRrelNVYzFiR1I1UWtaamJrcDJZMmxvWjFFeVJuVmliVGt3U1VkYWNHSnRVV2RpUjJ4MVlYbEJia3BJZEhKYVdHdzVTbmxDY0dKcFFXNUtTSFJ6WW0xMFZHTkhWbXBNYlhod1ltMTBWV0l6TUc1TWJVRndXRWMxWTJKcFFXZEpRMEp3V21sQmIxRllTbmxaV0d0MVlWaE9RbU51U21obFUyaHRZVmMxYUdKR1NteGFhV3R3U1VoeloweDVPR2RqYlZaM1lrZEdhbHBUUWpCaFIxVm5XVEk1ZFdSSFZuVmtTRTVqWW1sQlowbERRV2RKUjA1MlltNU9NRWxJU214WlYzaEtaRWRXZEdONVFUbEpSMXB3WW0xR2MxVnRWbTFNYlRGb1kwTm5iMkV5VmpWTFUwRTVVR2xDYmxwWVVsTmFWMFp6VTFoU2JHSlRhSHBpTTFaNVdUSlZjMGxIZEd4bFZUVm9ZbGRWYzBsSGRHeGxVMnR3V0VjMFowbERRV2RKUTBKdFlWYzFhR0pHU214YWFUVjZZMGQ0Y0ZreVZXOU5RM2RuV20xc2RWbFhlRk5hVjFsMVlrZFdkVm96VW05TVEwRjFUR2sxZVZwWFJuTlRXRkpzWWxoTmNGaEhOR2RKUTBGblpsWjRkVWxEUVdkSlIxWnpZekpWWjJGWFdXZExTRkkxWTBkV2RscHBRbTFoVnpWb1lrWktiRnBwUVRsUVZEQm5Takk1YVdGdFZtcGtRMk53U1VoMFkySnBRV2RKUTBGblNVZGFkbU5wUVc5Wk1qbDFZek5SWjJFeVZqVkpSemx0U1VVNWFXRnRWbXBrUXpWeVdsaHNla3RIV25CaWJVWnpWVzFXYlV0VGEyZGxNWGgxU1VOQlowbERRV2RKUTBKdFlWYzFhR0pHU214YWJIUnlXbGhzWkVsRU1HZGFNbFl3VlcxV2FHSkZiREJhVnpCdll6STVNV050VG14TVEwSnlXbGhzVDFsWE1XeE1RMEp5V2xocmNGaEhOR2RKUTBGblNVTkNPVmhITkdkSlEwRm5abFo0ZFVsRFFXZEpSMVp6WXpKVloyVjVRWFpNZVVKd1pFTmtla2xIUldkak1teDFXako0YkVsSGRHeGxWbmgxU1VOQlowbERRV2RqUjFaMVpGZDRNR0ZYTVdoa1IxWlRXbGRhWWxwdGJIVlpWM2hNV2xoc1pFbEVNR2RhTWxZd1ZXMVdhR0pGYkRCYVZ6QnZZekk1TVdOdFRteE1RMEp5V2xoc1QxbFhNV3hNUTBKdFlWYzFhR0pHU214YWFXeGpZbWxCWjBsRFFqbFlSelJuU1VneFkySnNlSFZKUTBKNVdsaFNNV050TkdkYVIwWXdXVlo0ZFdaV2VIVllSelIyUzJsd1kySnBiMmRWTWxZd1NqTk5aMlJIYUd4SlJ6RnNaRWRGWjJNeU9URmpiVTVzU1Vkc2RWcHRPWGxpVjBZd1lWYzVkVXhzZUhWTGFUbGpZbTFPZG1KdVRqQkpTRTVzWkVaT2RtUllTbXBhVTBFNVNVTm9hMWxZVW1oTVEwSnRZVmQ0YkZWSFJqQmhRMnRuVUZRMFoyVXhlSFZKUTBKcVlqSTFlbVJEUW5SbFZURnNaRWRGWjFCVFFteGliazR4WTIxV1RtVlZNV3hrUjBWdldrZEdNRmxUYkdOaWFVRm5ZbGhzVGxwWVVtaE1iazUyWkZoS2FscFZXbkJpUjFWblVGTkNiV0ZYZUd4VlIwWXdZVVo0ZFdaV2VIVllSelIyUzJsd1kySnBiMmRXTTBwd1pFZFdla2xIUldkak0xSm9ZbTFTYUdOdFVXZGlNMGxuV20xV2ExcFlTbWhrUjFaclNVVndWRlF3TkdkYWJXeHpXbE5DYVdWVFFtaGliVVp6WlZoT2NHSnRZMmRrUjJoc1NVYzVhV0Z0Vm1wa1NFMW5ZbGRXTUZsVFFtdFpXRkpvU1VkR2RWcERRbWxqYlZab1lUSnNkVnA1UWpCaFIxVm5ZekpHTWxwWFVXZGFiV3h6V2xoTloyUllRbU5pYVc5bldWZE9hbUl6Vm5sYVIyeDFXbmxDTUdKNVFqQmhSMVZuV1RJNWRWcHRiRzVrV0Vwb1pFZHNkbUpwTldOaWFXOTJXRWMxYW1JeU5YcGtRMEl6WTIxc01GcFZXa3RWTURsUFNVUXdaMHRJYzJkYVIwWXdXVk4zWjFwdGJITmFWa0pvWkVkbmMwbElUbWhrYlZaSFkyMDVkRXhEUW5Gak1qbDFWVWRHTUdGR1VuWlZNbFp6V21sQ09VdFRRVGxRYVVJM1dFYzBaMGxIYkcxSlEyaHRZVmQ0YkZWSFJqQmhRMEU1VUZRd1oyUlhOV3RhVjFwd1ltMVdhMHRUUWpkWVJ6Um5TVU5CWjFreU9YVmpNMUZuWWxoc1RscFlVbWhKUkRCbldqSldNRlJZYkU1YVdGSm9TMGRTYUdSSFJYQllSelJuU1VOQloxcHRiSE5hVmtKb1pFZG5aMUJUUW5SbFZURnNaRWRGWjBwcFdXZGlXR3hPV2xoU2FFeHVUblprV0VwcVdsVmFjR0pIVm1OaWFVRm5TVU5DY0ZwcFFXOUpWMXB3WWtkV1VWbFlVbTlMVTBJM1NVaFNiMk50T1ROSlJ6VnNaSGxDUm1OdVNuWmphV2huVW0xc2MxcFRRak5aV0UxblltMDVNRWxJUW5saU0xcHdXa2RXYTBsSFJuVmFRMEoxWW5sQmJtSlhWakJaVXpWNllqTldlVmt5VmtkaFYzaHNTbmxDYTFwWFduQmliVlpyU1VOb2RtTnBRbkJpYmxwb1lrZHNhMHRUTldkTFUwSTVXRWMwWjBsSU1XTmliSGgxU1VOQ2FtSXlOWHBrUTBKcllqRk9hR1J0VldkUVUwSjZXVmhhYkZKdVNuWmlVMEU1VUZRd1oyUlhOV3RhVjFwd1ltMVdhMGxJZURoSlEyaHhZekk1ZFZWSFJqQmhSbEoyVlRKV2MxcHBRVzFLYVVJd1dsaE9NRk51VG5aaWJFSm9aRWRvZWt0SVRtaGtiVlpIWTIwNWRFeERRbkZqTWpsMVZVZEdNR0ZHVW5aVk1sWnpXbWxyY0ZoSE5HZEpSMnh0U1VOb2EySXhUbWhrYlZWblNtbFpaMGxYV25CaVIxWlJXVmhTYjB0VFFqZFlSelJuU1VOQloyUkhhSGxpTTJOblltMVdNMGxGVm5samJUbDVTME5rVDJKNVFteGxTRUp6WVZkT2NHUkRRbTFoVjNoc1ZVZEdNR0ZEUW5kamJUa3lZVmRTYkZwRFFtaGliVkZuWW0wNFoyTXlPVEZqYlU1c1NVZGFkbVJYTld0SlIyeDFTVWM1YVdGdFZtcGtRMEowV2xoU2FFbEhVbWhrUjBWMVNubHNZMkpwUVdkbVZuaDFXRWMwWjBsSFRuWmliazR3U1VjeGRtUlhOVEJWTTBKc1dUTk5aMUJUUW01YVdGSk9Zak5XZFdSR1RuZGFWMDU2UzBkU2FHUkhSWEJZUnpSblNVZHNiVWxEYUhSaU0xWjFaRVpPZDFwWFRucExVMEkzV0VjMFowbERRV2RhYlRsNVNVTm9hbUl5Tlhwa1EwSjBZbTVTVkdOSFZtcEpSemx0U1VjeGRtUlhOVEJWTTBKc1dUTk5jRWxJZEdOaWFVRm5TVU5CWjBsSFRuWmliazR3U1VoeloxcEhSakJaVlZwd1lrZFZjMGxIVW1oa1IwWkZZVmhKYzBsSFVtaGtSMFpSV1ZoU2IweERRblJpTTFaMVpFWkNkbUZYTlRCTVEwSnRZVmMxYUdKRmRHeGxVM2RuWW0xV00xSkhSakJaVTBJNVNVUXhZMkpwUVdkSlEwRm5TVU5CWjJOSVNuWlpNbFo2WXpBeGRtUlhOVEJWTTBKc1dYbG9OMGxITVhWa1JrNTNXbGROYzBsSFVtaGtSMFZ6U1VoQ2VWcFlUbXhqYmxwc1ZETktjRm95YkhWWlYzZG5UMmxDTUdOdVZteEpTREJ3V0VjMFowbERRV2RKUTBKcldWaFNhRWxFTUdkaWJWWXpVa2RHTUZsV2VIVllSelJuU1VOQlowbERRbXBpTWpWNlpFTkNlbVJYU2tWWldGSm9TVVF3WjJKWE9URmlibEpSWWpKc2RXUkdkRzFoVnpWb1lrVjBiR1ZXTVdOaWFVRm5TVU5CWjBsSE1YWmtWelV3VlVjNWNHSnVVbUphYld4MVdWZDRURnBZYkdSSlJEQm5ZbTVXYzJKR2VIVkpRMEZuU1VOQloweDVPR2RXTW1ob1pFTmtla2xIT1RGamFVSjZXVmhhYkVsSVRtcGhSMVowV2xRNFoxVXliSFZhTW5oc1NVZFNhR1JIUldkYWJXeHpXbE4zWjJJelNXZFpVMEo2V1RKR2RVbEhVbkJqYWpsalltbEJaMGxEUVdkSlIyeHRTVU5vYTFsWVVtaFNiV3h6V2xOcloyVXhlSFZKUTBGblNVTkJaMGxEUWpOamJXd3dXbFZhUzFVd09VOUxTSFJqWW1sQlowbERRV2RKUTBGblNVTkNhMWxZVW1oSlEwRm5TVU5CWjBsRFFXZEpRMEUyU1VoT01WbHJVbWhrUjBWeldFYzBaMGxEUVdkSlEwRm5TVU5CWjFwdGJITmFWa0pvWkVkblowbERRV2RKUTBGblQybENhMWxZVW1oU2JXeHpXbE40WTJKcFFXZEpRMEZuU1VOQlowbERRbnBaV0Zwc1VtNUtkbUpUZUdOaWFVRm5TVU5CWjBsRFFXZEpRMEp4WXpJNWRWVkhSakJoUmxKMlZUSldjMXBwUVRaSlNGWjNXa2RHTUZwWGNIcGlNalZSV1ZoU2IxWkhPVlJhVjNodFMwZFNhR1JIUmxGWldGSnZURU5DY1dNeU9YVlZSMFl3WVVaU2RsVXlWbk5hYVd4alltbEJaMGxEUVdkSlEwRm5abE5zWTJKcFFXZEpRMEZuU1VneFkySnBRV2RKUTBGblNVZFdjMk15VldkbGVVRjJUSGxDZDJOdE9XcGFXRTU2VkZjNU1XSnVVbFJqUjFacVNVaGtjR0pIZDJkamJVWndZekpWWjFsWE5HZGFXR2hxV2xoQ01HRlhPWFZKUjJ4dFNVYzFiR0ZZVW05YVdFbG5Xa2RHTUZsVlduQmlSMVZuWW0wNWVVbEhVbWhrUjBaRllWaEpaMkZZVFdkYVIxWnRZVmMxYkZwRE5XTmlhVUZuU1VOQlowbERRV2RNZVRoblZqSlZaMXBIT1hWS00xRm5XVzA1TUdGSFZubEpTRkoyU1VoU2JHTXpVV2RrTW1ob1pFTkJibHBIUmpCWlZWSndZMmxqWjJGWVRYVkpSV3h0U1Vkc01FbEhWalJoV0U0d1kzbDNaMlF5Vldka01qbDFTak5SWjJJeldteGpibVI1WVZoU2JFeERRbnBpZVVJd1lVZFZaMk16Vm1sak1sWjRaRmRXZFdSRFFtaGtTRkpzWWxoQ01FbElVblpZUnpSblNVTkJaMGxEUVdkSlF6aDJTVWhrZVdGWVVteEpSMFZuV20xc2MxcFRRbkJpYmxKMlNVZHNNRWxIVG1oaWFVSnhaRmhPTUVsSFdtaGhWM2RuWVZkWloyRllVVzVqZVVKMVlqTlJaMkl5V1dkWlZ6Um5XVmhDZDJOdE9YZGpiV3hvWkVkVloyUkliSGRhVXpWalltbEJaMGxEUVdkSlEwRm5XbTVOZFZwWWFIQmpNMUo2VlROc2RWbDVhR3RaV0ZKb1VrZHNlVXRUUWpobVEwSnRZM2sxZEdFeVVuQmpiRTQxWW0xTmIxcEhSakJaVlZKd1kybHNZMkpzZUhWSlEwRm5TVU5CWjBsRFFtMWlNMGxuUzBkT2RtSnVUakJKU0U0eFdXdDBiR1ZUUW5aYWFVSlFXVzF3YkZrelVYVmhNbFkxWTNsb2VtUlhTa1ZaV0ZKb1MxTnJaMlV4ZUhWSlEwRm5TVU5CWjBsRFFXZEpTR1I1WVZoU2JGSnJjRlJVTURSdlpURjRkVWxEUVdkSlEwRm5TVU5CWjBsRFFXZGFSMFl3V1ZOQlowbERRV2RKUTBGblNVTkJaMDlwUW5wa1YwcEZXVmhTYUZjelRqRlphM1JzWlZZd2MxaEhOR2RKUTBGblNVTkJaMGxEUVdkSlEwSnRZVmQ0YkZWSFJqQmhRMEZuU1VOQlowbERRVFpKU0VKb1pFZG5kV0Z0T1hCaWFXaHJXVmhTYUZKSGJIbE1RMEpuU2toMGVtUlhTa3hhV0d3NVRHMXdlbUl5TldkTFUzaGpZbWxCWjBsRFFXZEpRMEZuU1VOQlowbElUbWhrYlZaSFkyMDVkRXhHZUhWSlEwRm5TVU5CWjBsRFFXZEpRMEZuWVc1T2RtSnNRbWhrUjJoVllqRk9iR0pIV1dkUGFVSXhZMGRTYUdSSFZuRmpNamwxVlVkR01HRkdVblpWTWxaeldtbG9aMHBJZEd0WldGSm9WVWRHTUdGSU1IVktTSFI2WkZkS1RGcFliRGxaUTNkbllXNU9kbUpzUW1oa1IyaFZZakZPYkdKSFdYQllSelJuU1VOQlowbERRV2RKUTBGblpsTnNZMkpwUVdkSlEwRm5TVU5CWjJaV2VIVkpRMEZuU1VOQloyWldlSFZKUTBGblNVZ3hZMkpwUVdkbVZuaDFXRWMwWjBsSGJHMUpRMmhyWWpGT2FHUnRWWEJKU0hSalltbEJaMGxEUW1waU1qVjZaRU5DYTFsWVVtaFZNMUo1WVZjMWJrbEVNR2RUYkU1UVZHazFlbVJJU25CaWJXUndXbTVyYjFwSFJqQlpVM2RuWW01V2MySkRkMmRLZVVGblNubHNZMkpwUVdkSlEwSnFZakkxZW1SRFFuZGpiVGxxV2xoT2VscFhVbEZaV0ZKdlNVUXdaMXBYTlRKV1IxWjBZMGQ0YUdSSFZsUmtTRXB3WW0xamIxcHRiSE5hVmtKb1pFZG5jRmhITkdkSlEwRm5XbTVOZFdRelNuQmtSMVpIWVZkNGJGVXpiSFZaZVdoM1kyMDVhbHBZVG5wYVYxSlJXVmhTYjB4RFFtdFpXRkpvVlROU2VXRlhOVzVMVm5oMVNVTkNPVmhITlRsWVJ6VmpZbTFPZG1KdVRqQkpSMlJzWkVVeE5WUlhWakJaVTBFNVNVTm9hMWxZVW1oTFUwRTVVR2xDYTFsWVVtaE1iRGwwV2xoU2FFbERXVzFKUjFKb1pFZEZkVmd5TVd4a1IwWmlVbXR3VkZRd05XWlVWVlpWVVZZNVJWRldVa0pZTUhSR1YxWXhZMkpzZUhWWk1qbDFZek5SWjFwWE5YcGtXRXBzVkZoc1RscFlVbWhKUkRCblMwZFNhR1JIUlhCSlJEQXJTVWgwWTJKcFFXZGlSMVl3U1VjeE5WUlhWakJaVTBFNVNVZGtiR1JGTVRWVVYxWXdXVk5vYTFsWVVtaExWbmgxU1VOQ2NGcHBRVzlKVnpFMVZGZFdNRmxUYTJkbE1YaDFTVU5CWjBsSGJHMUpRMmhyV1ZoU2FFeHNPWFJhV0ZKb1NVUXdPVkJUUWpGaWJWSnNXbTFzZFZwWFVYQkpTSE5uV2tkR01GbFROV1ppVjFZd1dWTkJPVWxJZERsSlNERmpZbWxCWjBsRFFuQmFhVUZ2V2tkR01GbFROV1ppVjFZd1dWWjBSMU5zVGxCVWJEbE9VbFpTUWxnd1VrSldSVVptVXpCV1dsaFRRVGxRVkRCblpGYzFhMXBYV25CaWJWWnJTMU5DTjBsSFVtaGtSMFYxV0RJeGJHUkhSbUpTYTNCVVZEQTFabFJWVmxWUlZqbEZVVlpTUWxnd2RFWlhWakJuVUZOQ04yWlRRamxZUnpSblNVTkJaMkpZYkU1YVdGSm9TVVF3WjFveVZqQlVXR3hPV2xoU2FFdEhVbWhrUjBWd1dFYzBaMGxJTVdOaWJIaDFTVU5DZVZwWVVqRmpiVFJuWWxoc1RscFlVbWhZUnpVNVdFYzFZMkpwT0hGTGJIaDFTMmxDVm1OSFVtaGtSMVo2U1VOb2FXVlRRbmxhV0ZJeFkyMDFjR0p0WTNCSlNGSnZXbE5DZFZwWVkyZGFTR3gxV1ZjeGNGbDVRbmRaV0ZKdlNVZGtjR1J0Vm5WSlNGSnZXbE5DYW1SWVNubGFWelV3U1VkU2FHUkhSV2RqUjBZd1lVTkJiMk50Vm5OWldGSndaRzFWWjJSSE9HZFpVMEpyV1ZoU2FFbEhNWFprVnpVd1NVYzVlVWxIZUhCaWJYTm5ZMGM1Y0dKdVVYQkpSMFoxV2taNGRVdHBRbmRqYlZZeVlWYzVNV041UW10bFZ6Vm9ZbGRzYWtsSVFtaGtSMmQxV0VjMGNVd3hlSFZaTWpsMVl6TlJaMlJZUW10WldGSnNZVzVPZG1Kc1FtaGtSMmhWWWpGT2JHSkhXV2RRVTBGdllXNU9kbUpyTVhaa1Z6VXdWVWRHTUdGRGQyZGhiazUyWW14Q2FHUkhhRlZpTVU1c1lrZFpjRWxFTUN0SlNIUmpZbWxCWjJGWFdXZExSM0I2WWpJMVRtSXpWblZrUmtKb1pFZG5aMGxVTURsSlNGWjFXa2RXYldGWE5XeGFRMnRuWlRGNGRVbERRV2RKU0Vwc1pFaFdlV0pwUW5Gak1qbDFWVWRHTUdGR1VuWlZNbFp6V21sQk9WQlVNR2RrVnpWcldsZGFjR0p0Vm10WVJ6Um5TVU5CWjBsRFFTOUpSM0I2WWpJMVRtSXpWblZrUmtKb1pFZG9ZMkpwUVdkSlEwRm5TVVJ2WjFsRFVqZGhiazUyWW14Q2FHUkhhRlZpTVU1c1lrZGFPVXBJZEhGak1qbDFWRmM1TVdKdVVsRlpXRkp2WmxkQ1kySnBRV2RtVm5oMVNVTkNiR0pJVG14SlNIUmpZbWxCWjBsRFFubGFXRkl4WTIwMFoyUlhOV3RhVjFwd1ltMVdhMWhITkdkSlNERmpZbTR4WTJKc2VIVk1lVzl4V0VjMGNVbEZiSFZrUjFaNVltMUdjMGxIV2pGaWJVNHdZVmM1ZFVsSVVuWkpTRkpzWXpOUloxcHRPWGxKUjBaMVdrTkNiR1ZJVW5sWlYwNHdTVWN4ZG1SWE5UQkpTRTUzV2xkT2VrbEhXbmxpTWpCblpFZG9iRWxJUW5saU0xcHdXa2RXYTBsRmNGUlVNRFJuWWpKS2NWcFhUakJNYkhoMVMyazVZMkp0VG5aaWJrNHdTVWRrYkdSRk1YWmtWelV3VlROQ2JGa3pUV2RRVTBGdldrZEdNRmxUYTJkUVZEUm5XakpXTUZSWWJFNWFXRkpvUzBkU2FHUkhSWEJRZVRWMFlqTldkV1JHVG5kYVYwNTZXRWMxWTJKcE9IRkxiSGgxUzJsQ1NtSnVVbXhqYlRWb1lrTkNiV1JYTldwa1IyeDJZbWxDTUdKNVFuZGpiVGxxV2xoT2VrbEhSV2RpVnpreFltNVJaMk16UW14WmVVSndZbTVTZGtsSVZucGFWMW94WWtOQ2FtSXlNWGRpTWpWc1ltNVNla2xJVmpCaFYzaHdaVzFXYTBsSFNqVkpTRkp2V2xOQ1oyTnRWbWhhUlZwTFZUQTVUMWxEUW1oaWJWRm5XVWhrZVdGWVVteFNhM0JVVkRBMVoweHNlSFZMYVRsalltMU9kbUp1VGpCSlNFSjVZakpPYkdNelRrNWlNMVoxWkVaT2QxcFhUV2RRVTBGdlpYbENkR0p1VWxSalIxWnFURU5DYTFsWVVtaE1RMEozWTIxV2VscFlTakphVlRsNVlWZGtjR0p0Um5OSlNEQndTVVF3SzBsSWRHTmlhVUZuWWtkV01FbEljMmRhUjBZd1dWWkNhR1JIWjNOSlIxSm9aRWRHUjJGWGVHeE1RMEpyV1ZoU2FGSkhiSGxKU0RCblVGTkNkR0p1VWxSalIxWnFXRWMxWTJKcFFXZGFSMFl3V1ZWYWNHSkhWV2RLYVZsbldrZEdNRmxWVW5CamFVRjJUSGxDYkdNeWVIQmlibEYwV2tkc2VsbFhTbk5hVXpGellWYzFiRWxITlhaTVdGWjFaRmhPYkZwRE1XeGxTRUo1V2xoT2VtRlhPWFZqTVhoMVNVTkJaMGxEV1cxSlNGSnZZMjA1TTBsSE5XeGtlVUpHWTI1S2RtTnBhR2RSYlVaclNVY3hkbVJYTlRCSlNFNTNXbGROTjBsSFRtaGliVFYyWkVOQ2VtTkhWbXBoVjFvMVNVZEtkbVJIWjJkYVIwWXdXVk5DYldGWGVHeEpRMmRyWlRKU2FHUkhSa2RoVjNoc1psTnJaMWxYTld0SlIxSndZMjFXYW1SSE9YbGxVMEZ2U2toMGExbFlVbWhTUjJ4NVpsTnNaMHRXZUhWSlEwRm9Xa2RHTUZsVlduQmlSMVZuU21sWlowbFhVbWhrUjBaRllWaEpaMHg1T0dkYVdFNXpZVmMxTUV4WFVuQmpNa1pwWWtkVmRHSkhiSFZhVTBKMVlua3hNV0p1Vm5wYVYxRjBXbGhvZDJOdFZucGpNbXgyWW01T1kySnBRV2RKUTBGdFNtbENNR0ZJU25aa2VVSjFXbGhqWjFKWVNubGlNMGx2U2pCS2FGcERRblJpTTFaMVpFTkNlbU5IVm1wUGVVSjFXbGRzTUdGSFZubEpSMUpvWkVkRloxcHRiSE5hVTBKMVlqTkpaMXBIYkhsYVYwNHdZak5LTlV4cFkzQllSelZqWW1sQloxcEhSakJaVlZwd1lrZFZaMHBwV1dkTFIxSm9aRWRHUjJGWGVHeEpSREJuV2xjMU1sWkhWblJqUjNob1pFZFdWR1JJU25CaWJXTnZXa2RHTUZsVlduQmlSMVZ3UzFaNGRVbERRbXRaV0ZKb1VrZHNlVWxEV1cxSlEyaHJXVmhTYUZKSGJIbEpSREJuV2xjMU1sWkhWblJqUjNob1pFZFdWR1JJU25CaWJXTnZXa2RHTUZsVlVuQmphV3R3V0VjMVkySnBRV2RaTWpsMVl6TlJaMlY1UW5kYVZ6VXhZa2hTY0dKWFJqQmFWa3BzV21wdloySlhPVEZpYmxKUllqSnNkV1JEZDJkYWJXeDFXVmQ0VEZwWWEzTkpSelZzWkRCU2FHUkhSV2RtVTBFNVNVaENlV0l5VG14ak0wNUxWVEE1VDFWSFJqQmhRMmczU1VoQ2FHUkhaMmRQYVVKcldWaFNhRlZIUmpCaFEzZG5Xa2RHTUZsVGQyZGpTRXBzWXpKV2VXUnRWbEJqYld4dVlWYzFhR0pEUWpsTFZuaDFXRWMwWjBsSVNteGtTRlo1WW1sQ04wbEhVbWhrUjBaSFlWZDRiRXhEUW10WldGSm9Va2RzZVV4RFFtdFpXRkpvVlVkR01HRkRkMmRpVnpreFltNVNVV0l5YkhWa1EzZG5XbTFzZFZsWGVFeGFXR3R6U1VjMWJHUXdVbWhrUjBWblpsWjRkV1pXZUhWWVJ6UjJTMmx3WTJKcGIyZFRWelV3V2xoS2RWbFhkMmRhYmxaMVdUTlNjR0l5Tkdka1J6aG5aRWRXZW1SRFFtMWlNMGxuV1ZjMWEwbEhWalJrU0Vwb1dUTlJaMkpIYkhWaGVVSjZZMGRXYW1ONVFtMWpiVGwwU1VoU2IxcFRRbmRqYlRreVlWZFNiRnBEUWt0Vk1EbFBTVWM1YVdGdFZtcGtRelZqWW1sdmRsaEhOV3BpTWpWNlpFTkNibHBZVWsxaFZ6VnlWVE5DYkZrelRXZFFVMEZ2V2tkR01GbFRhMmRRVkRSbldqSldNRlJZYkU1YVdGSm9TMGRTYUdSSFJYQlFlVFZ6WVZjMWNsVXpRbXhaTTA1allteDRkVXg1YjNGWVJ6UnhTVVZzZFdSSFZubGliVVp6U1VkYU1XSnRUakJoVnpsMVNVaFNka2xJUW5saU1rNXNZek5OWjFsVFFuTmhWelZ5U1VoT2QxcFhUV2RoVnpVd1lubENNV015Vm0xa1YzZG5XVEk1ZEdOSE9YVmFWelV3WTNsQ01XUkhiSE5oV0hCc1drTkNhV1ZUUWpCaFIxVm5XVWhLYkZsWFVrZFRiRTVRVkcxQloxbFhOV3RKUjBJelkyMXNNRnBWV2t0Vk1EbFBXVU0xWTJKcGIzWllSelZxWWpJMWVtUkRRbmRqYlRscVdsaE9lbFJIYkhWaE1VNTNXbGROWjFCVFFXOWlSelZ5VlROQ2JGbDVkMmRhUjBZd1dWTnJaMUJVTkdkbE1YaDFTVU5DYW1JeU5YcGtRMEkzU1VkNGNHSnRkRk5hVjFwNlRFTkNjMkZYTlhKV1J6aHpTVWQ0Y0dKdGRFeGFXR3MyU1VkMGJHVlZOV2hpVjFWblpsTkJPVWxIZUhWaE1VNTNXbGRPWTJKc2VIVkpRMEpxWWpJMWVtUkRRamRKUjFwd1ltMUdjMVZ0Vm0xTVEwSjNXbGMxTVdKSVVuQmlWMFl3V2xaS2JGcHBkMmRhYld4MVdWZDRURnBZYTJkbVUwRTVTVWhDZVdJeVRteGpNMDVMVlRBNVQxVkhSakJoUTJnM1NVaENhR1JIWjJkUGFVSnpZVmMxY2xWdFZtMWplWGRuV2tkR01GbFRRamxMVm5oMVNVTkNhbUl5Tlhwa1EwSTNTVWRhY0dKdFJuTlZiVlp0VDJsQ2VtSXpWbmxaTWxWblpsTkJPVWxJUW5saU1rNXNZek5PUzFVd09VOVZSMFl3WVVOb04wbElRbWhrUjJkblQybENjMkZYTlhKV1J6aHpTVWRTYUdSSFJXZG1VMnhqWW14NGRVbERRbmxhV0ZJeFkyMDBaMlY1UW0xaFZ6Vm9Za1pLYkZwcGQyZGpNamt4WTIxT2JFeERRbkphV0d4UFdWY3hiRXhEUW5kYVZ6VXhZa2hTY0dKWFJqQmFWa3BzV21sM1oxcHRiSFZaVjNoTVdsaHJaMlpXZUhWbVZuaDFXRWMxYW1JeU5YcGtRMEo2WVVkR2MySkhPVE5STWpsM1pWTkJPVWxEYUhCaWJrSXhaRU5yWjFCVU5HZFJXRXA1V1ZocmRXRllUa0pqYmtwb1pWTm9jR0p1UWpGa1EyeGpZbWxCWjFCNVFuQmlia0l4WkVNMWVtSkhiR3BhVTJkd1dFYzBaMGxFYjJka1NHeDNXbGM1YlVsSGJIVmpTRll3U1VRd09WQlRRVzVpTWtweFdsZE9NRXA1UVcxS2FVSndZbTVDTVdSRFFXaFFWREJuWW01V2MySkdlSFZKUTBGblNVUTRaMVF5U25GYVYwNHdURzFHZW1NeWJHNWlhV2czWmxOM1oyRlhOWGRrV0ZGd1dFYzBaMGxEUVdkUGFVSndZbTVDTVdSR2VIVllSelZxWWpJMWVtUkRRbmRqYlRscVdsaE9lbE5zVGxCVWJFSm9aRWRuWjFCVFFXOWxlVUozV1ZoU2IweERRbXRaV0ZKb1RFTkNkMk50Vm5wYVdFb3lXbFU1ZVdGWFpIQmliVVp6U1Vnd2NFbEVNQ3RKU0hSalltbEJaMkZYV1dkTFEwWjNXVmhTYjB0VFFqZFlSelJuU1VOQloyUkhhSGxpTTJOblltMVdNMGxGVm5samJUbDVTMFozYVZSdE9HZEtNbEpvWkVkR1VWbFlVbTlLZVVKNlkwZFdhbUZYV25CYVYxRm5XbTA1ZVVsSE1YWmtWelV3U1VoT2QxcFhUV2RpVnpreFltNVJaMk5IT1hCaWJsRjFXRU5KY0ZoSE5HZEpTREZqWW1sQloxa3lPWFZqTTFGblkwZEdNR0ZHVW5sWlYyeHpTVVF3WjJOSFJqQmhRelY2WTBkNGNHUkRaMjVNYVdOd1dFYzBaMGxJUW1oa1IyaFZZMjFHY0dKRE5YcGhSMnh0WkVObmNGaEhOR2RKUjA1MlltNU9NRWxIV25CaWJVWnpVekpXTlVsRU1HZGpSMFl3WVVaU2VWbFhiSE5NYmtKMlkwTm5jRmhITkdkSlIwNTJZbTVPTUVsSE5XeGtNRkpvWkVkRloxQlRRbmRqYlZaNldsaEtNbHBWT1hsaFYyUndZbTFHYzBsRU9HZGpNbWhvWWtkNGRtUXdUblpqU0d0dldrZEdNRmxUYTJkUGFVSnJXVmhTYUZoSE5XTmlhVUZuWWtkV01FbElRbXhpYmxaelpFZHNkRmxZVW14VmJWWnRTVVF3WjJKdFZqTlNSMFl3V1ZOQmRreDVRblZpTTFGblltMVdhbHBZVG5wWldFcHdZa2hyWjJOSFZuVmtWM2d3WVZjeGFHUkhWV2RsVjFZd1RFTkNhV1JZVVdka01teHpZa05DYVZwVE5IVk1iSGgxU1VOQ2JXSXpTV2RMUjA1MlltNU9NRWxIZEd4bFUwSjJXbWxDZDFsWVVtOVdTRXBvWVZkM2NFbElkR05pYVVGblNVTkNjRnBwUVc5alNFcHNZekpXZVdSdFZsQmpiV3h1WVZjMWFHSkRhMmRsTVhoMVNVTkJaMGxEUVdkWk1qbDFZek5SWjJOdFZucGtWM2d3U1VRd1oyTXlhR2hpUjNoMlpEQk9kbU5JYTI5alIxWjFaRmQ0TUdGWE1XaGtSMVpUV2xkYVltRXlWalZZVTJ4alltbEJaMGxEUVdkSlNFSnNZbTVXYzJSSGJIUlpXRkpzVlcxV2JWY3lkR3hsVmpCblVGTkNlVnBZVGpGaVNGSmpZbWxCWjBsRFFXZEpTRUpzWW01V2MyUkhiSFJaV0ZKc1ZXMVdiVWxFTUdkamJWWjZaRmQ0TUZoSE5HZEpRMEZuWmxaNGRVbERRV2RKUjFaell6SlZaMlV4ZUhWSlEwRm5TVU5CWjJOSFZuVmtWM2d3WVZjeGFHUkhWbE5hVjFsblVGTkNkMXBYTlRGaVNGSndZbGRHTUZwV1NteGFiSFJ5V2xoc1pGaEhOR2RKUTBGblpsWjRkVWxEUWpsWVJ6VmpZbWxCWjJOdFZqQmtXRXAxU1VoMFkySnBRV2RKUTBKdFlWYzFhR0pHU214YWFVRTJTVWhDYkdKdVZuTmtSMngwV1ZoU2JGVnRWbTFYTWxwd1ltMUdjMU15VmpWWVUzaGpZbWxCWjBsRFFuZGFWelV4WWtoU2NHSlhSakJhVmtwc1dtbDRZMkpwUVdkSlEwSnRZVmMxYUdKRmRHeGxVM2hqWW1sQlowbERRblZhV0dSRldWaFNhRmhITkdkSlNERmpZbTR4WTJKc2VIVk1lVGhuV1ZkNGNGbFlUbXhqZVVKdFlqTkpaMG95YkhSalJ6bDVaRU5CY1VsSFJucEpSMXB4WXpJNWRVOTVRbTFoYms1MlltazFNMk50YkRCYVUyZHdTbmxDZW1SSWJITmFWbmgxV1RJNWRXTXpVV2RrTTBwd1pFZFZaMUJUUWpOamJXd3dXbFZhUzFVd09VOVlSelZxWWpJMWVtUkRRbmxhVjBaclNVUXdaMk50Vm1oYVJWcExWVEE1VDFoSE5XTmliVlkwWTBjNWVXUkRRamRZUnpSblNVZEdhMXBGTVhaa1Z6VXdWVWM1Y0dKdVVYTkpTRXBzV1ZkU1IxTnNUbEJVYVhkbll6SldNRlV5T1RGamJVNXNURU5DTTJOdGJEQmFWVnBMVlRBNVQweERRWFpNZVVKNlpFZEdkVnBIUm5sYVEwSndZbTVTYkdOdFdtaFpNbFpqWW1sQloxSnJjRlJVTURWbVZGVldWVkZXT1VWUlZsSkNXREIwUmxkVGQyZE1lVGhuWTBjNWVtTXliR2xpU0d0blpGaE9iRnB1Vm5OUWVVSjBXVmhyWjFsdFZXZGpiVlowWWpOYWJGcERRbWxhVjFwMlkyMVZaMHA2UlhWTlEyUmpZbWxCWjJRelNuQmtSMVZ6U1VoS2JGbFhVV2RNZVRobldWZDRjRmxZVG14ak1YaDFabFo0ZFVsc01ITkpiVFZvWWxkV2VrbHFjR0pKYmtwc1kwZDRhRmt5VmxOU1UwbHpTVzFXZFdSc1VteGlXRUp6V1ZoU2JGVXpVbmxoVnpWdVNXbDNhV05IUmpCaFEwbHpTVzA1ZVdGWFpGRlpXRkp2U1dsM2FXSlhSakJaTW1oc1kzbEpjMGx0TVdoa1IwNXZVVmQ0YzBscGQybGlSMVoxV2pOU2IwbHBkMmxqYlZZeVdsaEtlbHBUU1hOSmJURm9aRWRPYjFOWE5XMWllVWx6U1cweGFHUkhUbTlKYVhkcFlUSldOVWxwZDJsa2JVWnpaRmRWYVV4RFNuZGpiVGxxV2xoT2VrbHBkMmxhVnpVeVNXbDNhV0pYUmpCWk1taFVaRWRHZVdSRFNYTkpiV3gxV2tkV05FbHBkMmxrVnpWcldsZGFjR0p0Vm10SmFYZHBVbGhLZVdJelNXbE1RMHA2WkZkS2VtUklTbkJpYldOcFRFTktNRnBZVGpCVGJrNTJZbXhDYUdSSGFIcEphWGRwWTBkR01HRkZSV2xNUTBwM1dWaFNiMUZwU1hOSmJFNHdZMjFzZFZwNVNYTkpia0pvWkVkb1FsRnRiREJqZVVselNXNU9kMkpIYkRCSmFYZHBZMGRHTUdGRlNrTmhXRko2U1dsM2FXTXlhSEJhYmxGcFRFTkthRkZ0YkRCSmFYZHBXV3RLY0dSRFNYTkphMXBMVlRBNVQxZ3dNVVpXUlVabVVrVkdWVkZXT1V4U1ZtdHBURU5LYUZwSFVrNWlNMVoxWkVaQ2RtRlhOVEJKYVhkcFdrZEdNRmxUU1hOSmJWSm9aRWRHVVZsWVVtOUphWGRwV2tkR01GbFZXbkJpUjFWcFRFTktkR0l6Vm5Wa1JrNTNXbGRPZWtscGQybGFNbFl3VkZjNU1XSnVVbFJqUjFacVkzbEpjMGx0TVRWVVYxWXdXVk5KYzBsdFZuVmpNMVo1V2xVeE5WUlhWakJaVTBselNXMXJhVXhEU20xaFZ6VnJVMWMxYTFwWVoybE1RMHBzWWtOSmMwbHRNWFprVnpVd1ZUTkNiRmw1U1hOSmJrSXhZekpuYVV4RFNuRmpNamwxVld0VmFVeERTbmxhVjBaclVtdHdWRlF3TkdsTVEwcHRZVmQ0YkZWSFJqQmhRMGx6U1cwNWQyUkhiSFppYmsxcFRFTktlVnBYTVd4aVYwcHNZMnhPZG1SWVNtcGFVMGx6U1c1Q2VXSXlUbXhqTTA1c1drWkNhR1JIWjJsTVEwcHRZM2xKYzBsdE1YcGFlVWx6U1cxU2FHUkhSa05oV0ZKNlNXbDNhVk5zVGxCVWFVbHpTVzVDYUdOdVRteEphWGRwV2xOSmMwbHNUalZpYmxKb1pVVldlV050T1hsSmFYZHBZbGRXZW1NeVJtNWFVMGx6U1c1T2JHUkdUblprV0VwcVdsTkpjMGx0TVhWa1JrNTNXbGROYVV4RFNuZGpiVGxxV2xoT2VsUlhPVEZpYmxKVVkwZFdha2xwZDJsYVIwWXdXVlZTY0dOcFNYTkpiVEYyWkZjMU1GVkhPWEJpYmxGcFRFTktiV0ZYTldoaVJYUnNaVk5KYzBsdVRqRlphMUpvWkVkRmFVeERTblJpYmxKUVdXMXZhVXhEU20xaFYzaHNZM2xKYzBsdVpIQmtSMmhIWVZkNGJGWkliSGRhV0UxcFRFTktiV0ZYZURCYVdFbHBURU5LY0dSSFZuUkphWGRwWVZoT1JXRllTbXhaTTFKMlkyNXJhVXhEU2pCYVdFNHdTV2wzYVdKdFJuUmFVMGx6U1cweGFHTkRTWE5KYlZKd1kydGFjR0pIVldsTVEwcDBZbTVTVVdKdVVXbE1RMHA1V2xoQ2MxbFhUbXhKYVhkcFdqSldNRlJIYkhWaE1VNTNXbGRPZWtscGQybGlSelZ5VlROQ2JGbDVTWE5KYmtKNVlqSk9iR016VGsxaFZ6VnlWVE5DYkZsNVNYTkpiVnB3WW0xR2MxVnRWbTFKYVhkcFl6STVNV050VG14SmFYZHBZVEpXTlZSdFJuUmFVMGx6U1c1Q2JHSnVWbk5rUjJ4MFdWaFNiRlZ0Vm0xSmFYZHBXakpXTUZWdFZtaGlSV3d3V2xjd2FVeERTbnBpTTFaNVdsTkpjMGx0V25CaWJWRnBURU5LYWxsWE5XdGhWMUpvWkVkVmFVeERTbk5oVnpWeVZrYzRhVXhEU2tKamJrcG9aVk5KYzBsdGJIcFJXRXA1V1ZocmFVeERTbmxhVjBaelUxaFNiR0pZVFdsTVEwcDZZMGQ0Y0ZreVZXbE1RMHBRV1cxd2JGa3pVV2xNUTBweVdsaHNla2xwZDJsak1qa3hZMjFPYkZKdGJITmFVMGx6U1c1a2VXRllVbXhTYTNCVVZEQTBhVXhEU25wWldGcHNVbTVLZG1KVFNYTkpiWEI2WWpJMVVWbFlVbTlXUnpsVVdsZDRiVWxwZDJsYU1sWXdWRmhzVGxwWVVtaEphWGRwV2tjNVZGbFlXbXhKYVhkcFkwaEtiR015Vm5sa2JWWlFZMjFzYm1GWE5XaGlRMGx6U1cwMWJHUXdVbWhrUjBWcFRFTktNV05IVW1oa1IxWnhZekk1ZFZWSFJqQmhSbEoyVlRKV2MxcHBTWE5KYms0eFdXdDBiR1ZUU1hOSmJWSm9aRWRHVkdSSVNuQmliV05wVEVOS2VtUklTbkJpYldSd1dtNXJhVXhEU21aaVYxWXdXVk5KYzBsdGNIcGlNalZPWWpOV2RXUkdRbWhrUjJkcFRFTktkMk50T1dwYVdFNTZVMnhPVUZSc1FtaGtSMmRwVEVOS2MyRlhOWEpWTTBKc1dUTk5hVXhEU25OaFZ6VnlWVzFXYldONVNYTkpiWGh3WW0xMFRGcFlhMmxNUTBwNllVZEdjMkpIT1ROUk1qbDNaVk5KYzBsdGJIVmpTRll3U1dsM2FXTXllSEJaTWxWcFRFTkthR016VG5CYU1qUnBURU5LZDFsWVVtOVdTRXBvWVZkM2FVeERTbmRpTTBGcFRFTktlVnBZVGpGaVNGRnBURU5LTTJOdGJEQmFVMGx6U1c1S2JGbFhVV2xZVTNkcFlsZEdkMk5IYkhWYU0wMXBUMmxKTjA5NmN6ZFBlbk0zVDNwek4wOTZkRUpSVlVaQ1RFWk9RbEZXVFhOVU1FWkNWSGw0UkZGVlJrUk1SV1JDVVZWamMxSlZSa0pTVkhSQ1VWVk9NRkZwZUVaUlZVWkdURWhzUTFGVlJqVlJhWGhFVVZWR1JFOHdSa0pSZWxaRFR6QkdRbEV3UlhOU1ZVWkNVbE40U2xGVlJrcE1SVGxDVVZVNGMxUlZSa0pVVTNoTVVWVkdURXhHVmtKUlZsVnpVMVZHUWxOVGVGQlJWVVpRVEVVeFFsRlZNSE5STUVaQ1VYbDRVbEZWUmxKTVJYUkNVVlZ6YzFWVlJrSlZVM2hHVVZWR1JrOHdSa0pSZWs1R1RFVnNRbEZWYTNOWk1FWkNXWGw0U0ZGVlJraE1SVGxDVVZVNGMxSXdSa0pTZVhoVVVWVkdWRXhGT1VKUlZUaHpVVEJHUWxGNWVFaFJWVVpJVEVWV1FsRlZWVGRSVlVaRVkydFJjMVJWUmtKVVUzaFFVVlZHVUV4Rk9VSlJWVGh6VWpCR1FsSjVlRVJSVlVaRVR6QkdRbEV6YUVOTVJYUkNVVlZ6YzFFd1JrSlJlblJDVVZWT1QwOHdSa0pSTUVWelUxVkdRbE5UZUU1UlZVWk9URVZPUWxGVlRYTlVNRVpDVkhsNFJGRlZSa1JNUms1Q1VWWk5jMUV3UmtKUmVYaElVVlZHU0V4Rk1VSlJWVEJ6VVRCR1FsRjVlRkJSVlVaUVRFVldRbEZWVlhObFZVcENVVmhzUTB4RlpFSlJWV056VTFWR1FsTlRlRVJSVlVaRVR6QkdRbEV5Y0VkTVJXUkNVVlZqYzFSVlJrSlVWSFJDVVZWT1ZVeEZiRUpSVld0eldUQkdRbGw1ZUVoUlZVWklURVU1UWxGVk9ITlNNRVpDVW5sNFZGRlZSbFJNUlRsQ1VWVTRjMUV3UmtKUmVYaElVVlZHU0V4RlZrSlJWVlUzVVZWR1JHTnJVWE5VVlVaQ1ZGTjRVRkZWUmxCTVJXUkNVVlZqYzFOVlJrSlRVM2hRVVZWR1VFeEZNVUpSVlRCelV6QkdRbE41ZUZaUlZVWldURVZzUWxGVmEzTlNNRVpDVW5sNFJGRlZSa1JNUm1SQ1VWWmpjMU13UmtKVGVYaE9VVlZHVGt4RmJFSlJWV3R6VWpCR1FsSjVlRXhSVlVaTVRFVXhRbEZWTUhOUk1FWkNVWGw0VkZGVlJsUk1SV1JDVVZWamMxVlZSa0pWVTNoSVVWVkdTRXhGT1VKUlZUaHpVakJHUWxKNWVFUlJWVVpFVHpCR1FsRXlOVXBNUlhSQ1VWVnpjMUV3UmtKUmVuUkNVVlZPVDA4d1JrSlJNRVZ6VTFWR1FsTlRlRTVSVlVaT1RFVk9RbEZWVFhOVU1FWkNWSGw0UkZGVlJrUk1SazVDVVZaTmMxRXdSa0pSZVhoSVVWVkdTRXhGTVVKUlZUQnpVVEJHUWxGNWVGQlJWVVpRVEVWV1FsRlZWWE5sVlVwQ1VWaHNRMHhGWkVKUlZXTnpVMVZHUWxOVGVFUlJWVVpFVHpCR1FsRXljRWRNUldSQ1VWVmpOMUZWUmtSVFJIUkNVVlZPUWt4RlZrSlJWVlZ6VkRCR1FsUjVlRkJSVlVaUVRFVk9RbEZWVFhOU01FWkNVbmw0UkZGVlJrUk1SVTVDVVZWTk4xRlZSa1JrUlVselVUQkdRbEY2ZEVKUlZVNUZUekJHUWxFd1JYTlpNRVpDV1hsNFNGRlZSa2hNUlRsQ1VWVTRjMUV3UmtKUmVuUkNVVlZPTmxGcGVFNVJWVVpPVEVWT1FsRlZUWE5VTUVaQ1ZIbDRSRkZWUmtSTVJrNUNVVlpOYzFFd1JrSlJlWGhJVVZWR1NFeEZNVUpSVlRCelVUQkdRbEY1ZUZCUlZVWlFURVZXUWxGVlZYTmxWVXBDVVZoc1EweEZaRUpSVldOelUxVkdRbE5VY3pkUGVuTTNUekJHUkdOclNURlNVM2hVVVZWR1ZFeEhiRU5SVlVad1VXbDRSRkZWUmtSTVJXUkNVVlZqYzFKVlJrSlNVM2hJVVZWR1NFeEZWa0pSVlZVM1VWVkdSR05yVFhOU1ZVWkNVbE40U2xGVlJrcE1SV1JDVVZWamMxTlZSa0pUVTNoS1VWVkdTa3hGYkVKUlZXdHpVakJHUWxKNWVFaFJWVVpJVEVWa1FsRlZZM05STUVaQ1VYbDRUbEZWUms1TVJWWkNVVlZWYzFJd1JrSlNlWGhJVVZWR1NFeEZaRUpSVldOelVUQkdRbEY1ZUU1UlZVWk9URVZPUWxGVlRUZFJWVVpFWlVWUk4xRlZSa1JSVTNoR1VWVkdSa3hGZEVKUlZYTnpVMVZHUWxOVGVFUlJWVVpFVEVWa1FsRlZZM05STUVaQ1VYbDRSbEZWUmtaTVJXeENVVlZyYzFJd1JrSlNlWGhLVVZWR1NreEZkRUpSVlhOelVUQkdRbEY1ZUVoUlZVWklURVZPUWxGVlRYTlNWVVpDVWxONFJGRlZSa1JNUldSQ1VWVmpjMUl3UmtKU2VYaEdVVlZHUmt4RlRrSlJWVTF6VWxWR1FsSlRlRVpSVlVaR1R6QkdRbEV6V2tWTVJXeENVVlZyYzFOVlJrSlRVM2hFVVZWR1JFeEZUa0pSVlUxelVUQkdRbEY1ZUVoUlZVWklURVZrUWxGVlkzTlJNRVpDVVhsNFJGRlZSa1JNUlU1Q1VWVk5jMUV3UmtKUmVuUkNVVlZPZVZGcGVFaFJWVVpJVHpCR1FsRXdaemRSVlVaRVVWTjRSbEZWUmtaTVJUbENVVlU0YzFOVlJrSlRVM2hFVVZWR1JFOHdSa0pSTWxGelVUQkdRbEY2ZEVKUlZVNUZUekJHUWxFd1JYTlpNRVpDV1hsNFNGRlZSa2hNUjJ4RFVWVkdjRkZwZUVSUlZVWkVUekJHUWxFeU5VUk1SVEZDVVZVd2MxRXdSa0pSZVhoUVVWVkdVRXhGVGtKUlZVMXpWVEJHUWxWNWVFUlJWVVpFVEVWa1FsRlZZM05VVlVaQ1ZGTjRSRkZWUmtSTVJUbENVVlU0YzFKVlJrSlNVM2cxVVd0R1FtVlZTWE5TTUVaQ1VubDRTbEZWUmtwUGVuTTNUM3B6TjFGVlRsVk9WVlZ6VlRCR1FsVjVlSEpSYTBaQ1lUQkpjMUV3UmtKUmVYaElVVlZHU0V4RlZrSlJWVlUzVVZWR1JHRnJUWE5TVlVaQ1VsTjRTbEZWUmtwTVJYUkNVVlZ6YzFFd1JrSlJlWGhRVVZWR1VFeEZUa0pSVlUxelVqQkdRbEo1ZUVSUlZVWkVURVZXUWxGVlZYTlVNRVpDVkhsNGJsRnJSa0phTUVselVUQkdRbEY1ZUVoUlZVWklURVZPUWxGVlRYTlJNRVpDVVhwMFFsRlZUakpTUTNoRVVWVkdSRTh3UmtKUk1GRTNVVlZHUkZGVGVHcFJWVVpxVEVWa1FsRlZZM05oTUVwQ1VWZDBRMHhGVGtKUlZVMDNVVlZHUkdORlRYTlVWVVpDVkZONFJGRlZSa1JNUlRsQ1VWVTRjMUV3UmtKUmVYaFVVVlZHVkV4RlRrSlJWVTF6VWpCR1FsSjVlRTVSVlVaT1RFVk9RbEZWVFhOVU1FWkNWSGw0UmxGVlJrWk1TR3hEVVZWR05WRnBlRWhSVlVaSVRFVnNRbEZWYXpkUGVuTTNUM3AwUWxFeFFURlNVM2hVVVZWR1ZFeEhaRU5SVlVadVVXbDRSRkZWUmtSTVJXeENVVlZyYzFKVlJrSlNWSFJDVVZWT2IxRjVlRVpSVlVaR1RFVnNRbEZWYTNOVU1FWkNWSGw0VGxGVlJrNU1SWFJDVVZWemMxWXdSa0pXZVhoS1VWVkdTa3hGYkVKUlZXdHpVVEJHUWxGNWVFNVJWVVpPVEVWT1FsRlZUWE5WVlVaQ1ZWTjRSRkZWUmtSTVJXeENVVlZyYzFOVlJrSlRVM2hLVVZWR1NreEZiRUpSVld0elVUQkdRbEY1ZUZwUlZVWmFURVZPUWxGVlRYTlRWVVpDVTFONFNsRlZSa3BNUlZaQ1VWVlZjMVF3UmtKVWVYaE1VVlZHVEV4RlRrSlJWVTF6VTFWR1FsTlRlRVJSVlVaRVRFVnNRbEZWYTNOUk1FWkNVWGw0UkZGVlJrUlBNRVpDVVhwV1NVeEZUa0pSVlUwM1VWVkdSRkpFZEVKUlZVNUNURWRPUWxGWFRYTlNNRVpDVW5sNGJsRnJSa0phTUVselVUQkdRbEY2ZEVKUlZVNXpVWGw0VGxGVlJrNU1SVTVDVVZWTmMxUXdSa0pVZVhoRVVWVkdSRXhHVGtKUlZrMXpVVEJHUWxGNWVFaFJWVVpJVEVVeFFsRlZNSE5STUVaQ1VYbDRVRkZWUmxCTVJWWkNVVlZWYzJWVlNrSlJXR3hEVEVWa1FsRlZZM05UVlVaQ1UxUnpOMDk2Y3pkUE1FWkVVMFJXUmt4R1RrSlJWazF6VFd0S1FsRlVTa05NUlU1Q1VWVk5jMUV3UmtKUmVYaEdVVlZHUmt4Rk1VSlJWVEJ6VWxWR1FsSlVkRUpSVlU1dlVrTjRSbEZWUmtaTVJXeENVVlZyYzFFd1JrSlJlWGhFVVZWR1JFeEZWa0pSVlZWelZEQkdRbFI2ZEVKUlZVNXhVV2w0UmxGVlJrWk1SV3hDVVZWcmMxUXdSa0pVZVhoRVVWVkdSRXhGZEVKUlZYTnpWVlZHUWxWVGVFWlJWVVpHVEVVNVFsRlZPSE5hTUVwQ1VWZGtRMHhGVGtKUlZVMXpVVEJHUWxGNWVFWlJWVVpHVEVVeFFsRlZNSE5STUVaQ1VYbDRSRkZWUmtSUE1FWkNVVEpvUmt4RlZrSlJWVlZ6VTFWR1FsTlRlRVJSVlVaRVRFVmtRbEZWWTNOVVZVWkNWRk40UkZGVlJrUk1SazVDVVZaTmMxRXdSa0pSZVhoU1VWVkdVa3hGVGtKUlZVMXpVMVZHUWxOVGVFUlJWVVpFVEVWT1FsRlZUWE5STUVaQ1VYbDRSRkZWUmtSTVJYUkNVVlZ6YzFFd1JrSlJlWGhFVVZWR1JFeEZWa0pSVlZWelVUQkdRbEY1ZUVSUlZVWkVURVZPUWxGVlRYTlJNRVpDVVhwMFFsRlZUalpTUTNoR1VWVkdSa3hGYkVKUlZXdHpVVEJHUWxGNWVFeFJWVVpNVEVaR1FsRldSWE5UVlVaQ1UxTjRSRkZWUmtSTVJVNUNVVlZOYzFZd1JrSldlWGhHVVZWR1JreEZUa0pSVlUxelVqQkdRbEo1ZUVSUlZVWkVURVZPUWxGVlRYTldNRVpDVm5sNFJGRlZSa1JNUld4Q1VWVnJjMUV3UmtKUmVuUkNVVlZOTlZKRGVFWlJWVVpHVEVWc1FsRlZhM05STUVaQ1VYbDRURkZWUmt4TVJYUkNVVlZ6YzFOVlJrSlRVM2hFVVZWR1JFeEZkRUpSVlhOelV6QkdRbE41ZUVaUlZVWkdURVU1UWxGVk9ITlRNRVpDVTNsNFJGRlZSa1JNUld4Q1VWVnJjMUV3UmtKUmVYaEVVVlZHUkV4RlRrSlJWVTF6VVRCR1FsRjZkRUpSVlU0eVVrTjRSbEZWUmtaTVJXeENVVlZyYzFFd1JrSlJlWGhNVVZWR1RFeEdaRUpSVm1OelUxVkdRbE5UZDNkUk1FWkNUVVZOYzFFd1JrSlJlWGhLVVZWR1NreEZUa0pSVlUxelVUQkdRbEY1ZUVSUlZVWkVURVZXUWxGVlZYTlVNRVpDVkhsNGJsRnJSa0phTUVselVUQkdRbEY1ZUVSUlZVWkVURVZXUWxGVlZYTlVWVVpDVkZONFJGRlZSa1JNUlU1Q1VWVk5OMUZWUmtSaVJXZHpVVEJHUWxGNmRFSlJWVTVGVHpCR1FsRXdSWE5aTUVaQ1dYbDRTRkZWUmtoTVJFcERVVlZGZVZGcGVFUlJWVVpFVHpCR1FsRjZaRVJNUlRGQ1VWVXdjMUV3UmtKUmVYaFFVVlZHVUV4RlRrSlJWVTF6VlRCR1FsVjVlRVJSVlVaRVRFVmtRbEZWWTNOVVZVWkNWRk40UkZGVlJrUk1SVGxDVVZVNGMxSlZSa0pTVTNnMVVXdEdRbVZWU1hOU01FWkNVbmw0U2xGVlJrcFBlbk0zVDNwek4xRlZUbUZPVlZWelZUQkdRbFY1ZUhKUmEwWkNZVEJKYzFJd1JrSlNlblJDVVZWTk5WRnBlRVpSVlVaR1RFVXhRbEZWTUhOVFZVWkNVMU40VkZGVlJsUk1SVTVDVVZWTmMyTXdiRUpSV0U1S1RFVk9RbEZWVFhOUk1FWkNVWHAwUWxGVlRUVlRhWGhFVVZWR1JFOHdSa0pSTUZFM1VWVkdSRkZUZUdwUlZVWnFURVZrUWxGVlkzTmhNRXBDVVZkMFEweEZUa0pSVlUwM1VWVkdSR05GVFhOVVZVWkNWRk40UkZGVlJrUk1SVGxDVVZVNGMxRXdSa0pSZVhoVVVWVkdWRXhGVGtKUlZVMXpVakJHUWxKNWVFNVJWVVpPVEVWT1FsRlZUWE5VTUVaQ1ZIbDRSbEZWUmtaTVNHeERVVlZHTlZGcGVFaFJWVVpJVEVWc1FsRlZhemRQZW5NM1QzcDBRbEV3WXpGU1UzaFVVVlZHVkV4SGRFTlJWVVp5VVdsNFJGRlZSa1JNUldSQ1VWVmpjMUpWUmtKU1ZIUkNVVlZPY1ZGNWVFWlJWVVpHVEVVNVFsRlZPSE5oVlVwQ1VWZHNRMHhGVGtKUlZVMXpVakJHUWxKNWVFUlJWVVpFVEVWc1FsRlZhM05hVlVaQ1dsTjRSRkZWUmtSTVJXUkNVVlZqYzFFd1JrSlJlWGhLVVZWR1NreEVRa05SVlVWM1VXbDRSRkZWUmtSTVJXUkNVVlZqYzFFd1JrSlJlWGhLVVZWR1NreEhiRU5SVlVad1VXbDRSbEZWUmtaTVJVNUNVVlZOTjFGVlJrUmlSV2R6VVRCR1FsRjZkRUpSVlU1RlR6QkdRbEV3UlhOWk1FWkNXWGw0U0ZGVlJraE1SM1JEVVZWR2NsRnBlRVJSVlVaRVR6QkdRbEV6UWtSTVJURkNVVlV3YzFFd1JrSlJlWGhRVVZWR1VFeEZUa0pSVlUxelZUQkdRbFY1ZUVSUlZVWkVURVZrUWxGVlkzTlVWVVpDVkZONFJGRlZSa1JNUlRsQ1VWVTRjMUpWUmtKU1UzZzFVV3RHUW1WVlNYTlNNRVpDVW5sNFNsRlZSa3BQZW5NM1QzcHpOMDk2Y3pkUGVuUkNVVEpKTVZKVWRFSlJWVTVDVHpCR1FsRXdSVGRSVlVaRVVWTjRTbEZWUms1UlUzaFVVVlZHVkV4RlpFSlJWV056WVZWT1FsRlhlRU5QTUVaQ1VsVkZOMUZWUmtSUlZIUkNVVlZPUWs4d1JrSlJNRVUzVHpCR1FsRXdSWE5UVlVaQ1ZGVk5jMkZWU2tKUlYyeERURVZrUWxGVlkzTlZNRVpDWTBWS1FreEhiRU5SVlVaMlVXbDRSRkZWUmtSUmVYaEtVVlZHUlV4RlZrSlJWbFUzVVZWR1JHSkZUWE5VVlVaQ1ZGVk5jMVZWUmtKVlUzaElVVlZHU0ZKRGVFcFJWVVp4VVdsNFJGRlZVbkpSZW5NM1VWVkdTR0pGVFhOVVZVWkNVMVZWYzFRd1JrSlRhWGhFVVZWb2NsRjZjemRSVlVaS1lrVk5jMVV3UmtKVWVYaEVVVlZHUkZGVGVGQlJWVVpRVEVoT1ExRlZSbEJTYVhoS1VWVkdTa3hGVGtKUlZVNUlURVpHUWxGVmQzTlJNRVpDV1RCM2MxVXdSa0phUTNoRVVWVkdVVXhGVGtKUlZrbHpVbFZHUWsxRlRrNU1SVEZDVVZSR1JFeEZaRUpSVnpGRlRFVk9RbEZVUmtWTVJWWkNVVlJhUlU4d1JrSlJlazVGVHpCR1FsRXdSa2RNUld4Q1VWVkdRa3hGT1VKUlZUaHpVVEJHUWxFd1kzTlVNRVpDVldsNFNGRlZXWGxTUkhNM1VWVkdRbEZUZDNKUk1FWklZbXRPU1V4Rk9VSlRSekZFVHpCR1FsRlZSVGRQTUVaQ1VWVkZOMUZWUmtoTk1GRnpUVVZTUWxGWGJFUlBNRVpDVVZWRmMxZFZSa0prUlVwS1RFWk9RbEZZVGtOUE1FWkNVWGs1UTB4R2JFSlJWVEZFVEVWMFFsRlZjM05TTUVaQ1VqQlJjMVV3UmtKVmVYaEVVVlZHUkV4RlRrSlJWVkZ6VVRCR1FtUnJTVGRSVlVaRVVWTjRXbEZWUms1U1UzaElVVlZHU0V4RlpFSlJWV1JIVEVaT1FsRldUWE5STUVaQ1VYbDRSRkZWUmtWTVJVNUNVVmhLUTA4d1JrSlJNRVZ6VjFWR1FsUlZZM05UTUVaQ1UzbDRTRkZWUmtoUmVYaFFVVlZHVUV4RlRrSlJWVTVFVEVWa1FsRldTWE5STUVaQ1YxVm5jMUl3UmtKWGFYaEVVVlZHYTA4d1JrSlJNRVZ6VjFWR1FsUlZhM05XVlVaQ1ZsTjRTRkZWUmtoVWFYaFVVVlZHVkV4RlRrSlJWVTVRVEVWMFFsRlVaRU5QZW5SQ1VWVk9Ra3hHYkVKUlZXeExURVYwUWxGVmMzTlRNRVpDVXpCemMxVXdSa0phUTNoR1VWVkdOVkZxZEVKUlZVNHlVV2w0YmxGclJrSlVVM2hLVVZWR1NsRjVlRXhSVlVaTFRFUkNSRkZWUlRCUk1VRnpVakJHUWs1VlRYTk5hMDVDVVZka1IxVkRlRkpSVlVadlVtbDRVbEZWUms5UE1FWkNVVEJSTjA4d1JrSlJNRkpGVEVaR1FsRlZSa0pNUld4Q1VWVnJjMUl3UmtKU01FVnpVMVZHUWxOVGVFUlJWVVpFV2pCSmMxVXdSa0pVUTNoRVVWVkdiRXhGVGtKUlYxbHpVbFZHUW1Fd1NrdE1SbFpDVVZkNFEweEZiRUpSVjJSRVUwTjRURkZWUm05UmVYaElVVlZHTTFFeFVYTlRWVVpDVTFONFJGRlZSa1JhTUVselZUQkdRbFJEZUVSUlZVWnNVMmw0VmxGVlJsWk1SV1JDVVZWa1RVeEZkRUpSVlhOelVUQkdRbEV3WjNOVVZVWkNZa1ZOYzFFd1JrSk1NRTAzVVZWR1JGSkVkRUpSVm05M1VrUjBRbEZWUmtKUE1FWkNVVlZGTjFGVlJrSlJWSFJDVVZWR1FrOHdSa0paVkZaRlQzcDBRbEZWVmtWTVJrNUNVVlU1UzB4RmJFSlJWa0UzVVZWR1JGSkRlRVJSV0VKRFVrUjBRbEZZVGtOUlZIUkNVVlZPUWs4d1JrSlJNRVUzVVZWR1JGRlVkRUpSVlU1Q1R6QkdRbEV3UlRkUlZVWkVVVlIwUWxGVlRrSlBlbk0zVVZWR1JGRlRlRXBSVlVaT1lWVkpjMWxWUmtKWlUzaElVVlZHU0V4R1RrSlJWMmhEVVZONGFGRlZSbTVSYVhoRVVWVkdSRkY1ZUV4UlZVWkZURVZXUWxGV1JrUk1SWFJDVVZaSmMxSlZSa0poTUVrM1VWVkdSR1JGVFhOVVZVWkNVM2w0VUZGVlJsQlNRM2hNVVZWR1VVeEZkRUpSVjJ4RFRFWkdRbEZYY0VOTVJXeENVVlJhUTB4RlZrSlJWVlpDVEVWMFFsRlZjM05YVlVaQ1YxVlZjMVJWUmtKaWEwbHpVVEJHUWs5VlNYTlRWVVpFVTFONFVGRlZSbEJTUTNoTVVWVkdVVXhGZEVKUlYyeERURVpHUWxGWGNFTk1SV3hDVVZSYVEweEZWa0pSVlZaQ1RFVjBRbEZWYzNOWFZVWkNWMVZOYzFSVlJrSmlhMGx6VVRCR1JXTnJUWE5TVlVaRVlUQlZOMUZWUmtSaFJWVnpWbFZHUWxSVGVFcFJWVVpLVkVONFRGRlZSa3RNU0d4RVVWVkZlVkV3WTNOVE1FWkNUVEJOYzJGVlNrSlJXRlpGVVhsNFRGRlZSakpTUTNoUVVWVkdUMDh3UmtKUk1GRTNUekJHUWxFd1VYTlVWVVpDVkZWVmMxVXdSa0pWZVhoSVVWVkdTRk5EZUV4UlZVWk1URVZPUWxGVlRrcE1SWFJDVVZVMGMxRXdSa0pYVTNoSVVWVkdZVXhGVGtKUlYzaERUekJHUWxFd1JYTlVWVVpDVkZWTmMxVXdSa0pWZVhoSVVWVkdTRk5wZUV4UlZVWk1URVZPUWxGVlRraE1SWFJDVVZVMGMxRXdSa0pYVTNoSVVWVkdZVXhGVGtKUlYzaERUM3AwUWxGVlRrSk1SVEZDVVZWc1JVeEdUa0pSVmsxelVUQkdRbEV5Y0VOTVJURkNVVlpaYzFJd1JrSmlWVXAwVVdsNFZGRlZSbFJNUlU1Q1VWVk9kVkZwZUU1UlZVWnhVWGw0UmxGVlJqVlJlblJDVVZWR1JreEdaRUpSVlRoelV6QkdRbFZFZEVKUlZVWnFUM3AwUWxGVlZqWlNRM2hVVVZWR1VHRlZTWE5WTUVaQ1ZYbDRSRkZWUmtSTVJVNUNVVlZSYzFFd1JrSldRM2hNVVZWR2NGRnBlRVpSVlVZMFVXbDRSbEZWUlRCUmFuUkNVVlZHUmxGVGVFcFJWVVpDVVZONFZGRlZSbFJNUlU1Q1VWVk9TRXhGZEVKUlZsazNVVlZHUW1KVlNUZFBNRVpDVVRKd1JVeEdUa0pSVlRsRlRFWk9RbEZXVFhOUk1FWkNVWGw0UkZGVlJrVk1SVTVDVVZaUmMxTXdSa0poVlVselVsVkdRbVZGU1hOU1ZVWkNUa1ZKTjFGVlJrSlNWVVZ6VTFWR1FsRlZSWE5WTUVaQ1ZYbDRSRkZWUmtSUmVYaE1VVlZHVjA4d1JrSlJWekZEVDNwMFFsRlZUbkZTUTNoT1VWVkdTbE5EZUZSUlZVWlVURVZPUWxGVlRuRlJhWGhPVVZWR1YweEZaRUpSVnpGRFlsVkpjMVV3UmtKVmVYaEVVVlZHUkdKclNYTlVWVVpDWVd0TmMxSlZSa0psVlUwM1VWVkdRbEpUZUZoUlZVWlFURVYwUWxGV1FUZFJWVVpDV1hwek4xRlZSa1psYTFGelZUQkdRbFF5YkVOTVJrNUNVVlpOYzFFd1JrSlJNbkJEVEVVeFFsRldXWE5TTUVaQ1lsVkpjMUV3UmtKTlZVbHpVbFZHUWs1clNUZFJWVVpFVFRCSmMxVlZSa0pVV0VaRFRFVnNRbEZWYTNOU01FWkNVakJ2YzFVd1JrSlZlWGhFVVZWR1JGSjVlRXhSVlVaWFRFVldRbEZYU1RkUlZVWkVVVk40VWxGVlJrNVNVM2hLVVZWR1NreEZaRUpSVldSSlRFWk9RbEZXVFhOUk1FWkNVVEJOYzFNd1JrSldhWGhHVVZWR2FVOTZkRUpSVlZaQ1RFWkdRbEZWYkVaTVJXeENVVlZyYzFNd1JrSlRNRkZ6VTFWR1FsbHBlRVpSVlVaMFVXcDBRbEZWUmtaTVIwWkNVVlU0YzFNd1JrSlZSSFJDVVZWR2FrOHdSa0pSTTBKRVQzcDBRbEZWVmtWTVJrNUNVVlU0YzFOVlJrSlZSSFJDVVZWT1JVeEZUa0pqYTBwRlQzcHpOMDk2Y3pkUE1HeEVUbFZLVGxKVGVIUlJhMFpDWWxWSmMxSXdSa0pTZVhodVVUQkdRazVWU1RkUlZVWkdVVlIwUWxGVlRrSlBNRVpDVVRCRk4xRlZSa1JSVkhNM1VWVkdSRkZUZUVwUlZVWk9VWGw0YUZGVlJtaE1SV1JDVVZWamMxVXdSa0poUlVwQ1RFZEdRbEZYWkVOTVJVNUNVVlZPUkV4RmJFSlJWVkZ6VWxWR1FsUXdUWE5WVlVaQ1ZVTjRSbEZWUm5CUmEwMXpWVlZHUW1GclNYTlNWVVpDVDBWSk4xRlZSa1JpUlZGelZGVkdRbE5WVFhOV1ZVWkNWbE40U0ZGVlJraFJlWGhvVVZWR2FFeEZUa0pSVlU1TFRFVnNRbEZWVVhOUk1FWkNUMVZKTjA4d1JrSlNWVVZ6VkZWR1FsTlZZM05XVlVaQ1ZsTjRURkZWUmt4aVJVbHpWVEJHUW1KclNYTlNWVVpDVDBWSk4xRlZSa1JPVlVweVVXbDRTbEZWUmtKUlUzaFdVVlZHVmt4RlpFSlJWV056VWxWR1FsbHFkRUpSVlU1Q1RFWkdRbEZWTVVaTVJURkNVVlV3YzFJd1JrSlNNRTF6VjFWR1FsZFRlRVJSVlVaRVZHbDRTbEZWUmtWTVJVNUNVVlJPUTA5NmRFSlJWVTVDVEVaR1FsRlZiRXhNUlRGQ1VWVXdjMUV3UmtKUk1GbHpWbFZHUWxWRGVFeFJWVVo2VVcxNFEweEdUa0pSVkVaRFRFVldRbEZZUmtSUE1FWkNVVEkxUkdJd1NYTlVWVVpDVVZWRmMxUlZSa0pVVTNoRVVWVkdSRkpwZUZaUlZVWlJURVZrUWxGWE9VTlJVM2hXVVZWR2QxRnFkRUpSVlU1RlR6QkdRbEV3V1RkUE1FWkNVbFZSYzFSVlJrSlVWV3R6VVRCR1FsRjVlRWhSVlVaSVUybDRWbEZWUmxaTVJVNUNVVlZPVEV4R1RrSlJWbWR6VVRCR1FtTlZTWE5XVlVaQ1VUQk5jMUpWUmtKU1JIUkNVVlZHUWt4R1pFSlJWa1pDVEVWV1FsRlZWWE5STUVaQ1VURkpjMVZWUmtKVFEzaE1VVlZHYmxGclJYTlZWVVpDWlVWSk4xRlZSa0pSVTNoSVVWVkdlVkZwZUVSUlZVWlhUekJHUWxFd1JYTlVWVVpDVkZaTmMxVXdSa0pWZVhoSVVWVkdTRTh3UmtKUlZWWlZURVZzUWxGVlJrSk1Sa1pDVVZaRmMxSlZSa0pTTUVWelZWVkdRbGxxZEVKUlZVWXhVV3ROYzFOVlJrSlJWVVZ6VlZWR1FsVlRlRVpSVlVaVFVWUjBRbEZWUmpKUmFYaElVVlZHYzFGcWN6ZFJWVVpFVVZONFRsRlZSa3BUZVhoRVVWVkdSRXhGZEVKUlZYTnpVVEJHUWxGNWVFUlJWVVpaVEVWV1FsRlhUVGRSVlVaRVYydHZjMU5WUmtKUlZVVnpWbFZHUWxaVGVFUlJWVVpFVTFONFJGRlZSa1ZNUlU1Q1VWWlpjMUl3UmtKYU1FcElURVpPUWxGWGFFTlBNRVpDVVRCUmMxSXdSa2RTUTNoT1VWVmtURTh3UmtKUk1HaFJURVZzUWxGVlJrSk1SbFpDVVZaVmMxRXdSa0pSTVVWelUxVkdRbGREZUVSUlZVWnVVV3RSYzFVd1JrSmhSVWszVVZWR1JGSkVkRUpSVlU1SFRFVk9RbUpyU2tWUGVuUkNVVmhHUTFGVGVFcFJWVVpPVWxONFRsRlZSazVNUldSQ1VWVmpjMVV3UmtKYWFuUkNVVlZXUWs4d1JrSlJNRVUzVVZWR1JGRlVkRUpSVlU1Q1QzcDBRbEZWVGtKTVJXeENVVlV4UkV4R1RrSlJWazF6VWpCR1FsSjVlRlJSVlVaaFVWTjRWRkZWUmxwTVJVNUNVVlZPUkV4R1JrSlJWVkZ6VWxWR1FsWXdUWE5VTUVaQ1YwTjRSbEZWUmpGUmFuUkNVVlZPTWxGNWVFNVJWVVpLVEVWT1FsRlZUa1ZNUmtaQ1VWVjNjMUpWUmtKYVZIUkNVVlZHUmt4R1ZrSlJWVEJ6VTFWR1FsTlVWa05NUlhSQ1VWVnZjMHN3U2tKUlYyeEVUa1ZKYzFWVlJrSmhhMDF6VkRCR1FsUnFkRUpSVlVaNFVrUnpOMUZWUmtaa1JWVnpXVlZHUWsxclNrUk1SVGxDVVZVNGMxTlZSa0pUVTNoR1VWVkdNRkY2ZEVKUlZVWkNURVV4UWxGV1JrUk1SMDVDVVZaSmMxVlZSa0pWVlVWeldUQkdRbFZxY3pkUlZVWkdVVk40VGxGVlJrNVJlWGhvVVZWR2FFeEZaRUpSVldOMlVYbDRjRkZyUmtKaFZVbHpVVEJHUWxGNlVrUk1Sa1pDVVZWUmMxRXdSa0prYTAwM1R6QkdRbEV3UlhOVVZVWkNVMU40UkZGVlJrUlRVM2hXVVZWR1FreEZUa0pSVjA1RlRFZEdRbEZYVVhOUk1FWkNWRU40UmxGVlJuUlJlblJDVVZWT2NWRjVlRkpSVlVaT1VsTjRTRkZWUmtoTVJXUkNVVlZqYzJWVlNrSlJWM1JEVkVONFVsRlZSbk5SYVhoV1VWVkdjRkV3UlhOVlZVWkNWVk40VEZGVlJreFNlWGhvVVZWR2FVeEhaRU5SVlVaMFVUQkZjMWxWUmtKaWEwMXpWbFZHUW1SVlVYTlNWVVpDWlVWWmMxRXdSa0pYYW5SQ1VWVk9Ra3hHVmtKUlZUQnpVMVZHUWxOVE9VTk1SWFJDVVZWdmMxRXdSa0pXVjJ4RVRFVmtRbEZXV1hOUk1FWkNWR3AwUWxGVlRrVlBlblJDVVZWT1JVeEZNVUpSVlRGRVRFWkdRbEZXUlhOU01FWkNVakJaYzFkVlJrSlJVM2hFVVZWR2JsRnJVWE5aVlVaQ1lVVkpjMUV3UmtKaGEwazNVVlZHUkZGVGVFNVJWVVpLWVd0SmMxTlZSa0pUYVhoRVVWWm9NVkY2Y3pkUlZVWmFaR3ROYzFSVlJrSlRWSFJDVVZWT1IxRlRlRXBSVlVaQ1VWTjRTbEZWUmtwTVJXUkNVVlZrZUZGcGVFcFJWVVpLVEVWT1FsRlZUa1JNUlhSQ1VWVjNjMUV3UmtKV01GbHpWVlZHUWxkRGVFUlJWVVpSVHpCR1FsRXdVWE5TTUVaSFVrTjRSRkZWWkVKTVJUbENVVlU1U0V4RlRrSlJWa0Z6VWxWR1FsWlVkRUpSVlU1VFRFWkdRbEZWYkVKTVJVNUNVVlZOYzFkVlJrSlhWVTF6VmpCR1FtRnJTWE5TVlVaQ1QwVkpOMUZWUmtST1ZVbHpWMVZHUWxSVGVFcFJWVVpLVVZONFdGRlZSa3RNUm1SQ1VWY3hRMUpEZUVSUlZVWkVURVZPUWxGVlRrWk1SVGxDVVZoS1EweERkRU5SVlVad1VrWm5jMVZWUmtKaGExRnpVbFZHUWxScWRFSlJWVTVGVHpCR1FsRXdXVGRQTUVaQ1VsVlJjMVJWUmtKVFZWVnpXVEJHUWxOcGVFWlJWVVoyVVdwMFFsRlZUbk5SYkZWelUxVkdRbEZWUlhOVk1FWkNWWGw0UkZGVlJrUk5WVWx6VTFWR1FsSkRlRVpSVlVaUVdYbDRVbEZWUmxGTVJVNUNVVlpSTjFGVlJrUlNSSE0zVVZWR01sRnVUa1JNUTNSRVVWaHNRMkZyU2xkTVIwWkNVVmRGYzFFd1JrSlJNRzl6VTFWR1FsSkRlRVJSVlVacFRFVnNRbEZZVmtOTVJWWkNaV3RLVDA4d1JrSlJWVVUzVHpCR1FsRlZSVGRSVlVZMVVXNWFSRXhJWkVWUlZVWndVa1IwUWxGVlJrSk1SbFpDVVZoU1JFMXJTWE5VTUVaQ1l6Qk5OMDh3UmtKUmVUbEVURVJvUTFGVlJuWlNSVTF6V2pCS1FsRlhaRU5NUlU1Q1VWVk5OMUZWUmtKU1ZWRnpWVlZHUWxGVlJYTlVNRVpDVkhsNFJsRlZSbEZSVTNoUVVWVkdSMDh3UmtKUlZtTjZVV2w0VWxGVlJrSlJVM2hLVVZWR1NreEZWa0pSVlhCQ1R6QkdRbEZXWjNOVU1FWkNVa040UkZGVlJuZFNWSFJDVVZWR1FreEdWa0pSVmtaR1RFWkdRbEZXU1hOalZVcENVVlpHUWt4R1JrSlJWa2szVVZWR1FsRlRlRlpSVlVaeVVXcEtRMHhGT1VKUlYzaERURWhHUTFGVlJuSlJhMFZ6VkRCR1FtSkZTVGRSVlVaQ1VWTjRWbEZWUlhsUmEwMXpWbFZHUWswd1NYTmpWVXBDVVZSS1ExRlRlRlpSVlVWNlVXcDBRbEZWUmtKTVJsWkNVVmhXUkZGNWVGSlJWVVl5VVhsNGVGRnJSa0prVlU1Q1RFWkdRbEZZV2tSUGVuUkNVVlZPUWt4R1ZrSlJWV3N6VVdsNFVsRlZSa3RNUlZaQ1VWZE5OMUZWUmtSWGFYaGFVVlZHVGs5RlNYTlVNRVpDVkhsNFNGRlZSa2hpYTBselZUQkdRbFY1ZUVSUlZVWkVWME40VWxGVlJrVk1SVTVDVVZod1EwOHdSa0pTVlVVd1VXbDRVbEZWUmtKUlUzaFdVVlZHVmt4RlRrSlJWVTVFVEVaR1FsRlZVWE5STUVaQ1ZtbDRTRkZWUmpGUmEwMXpWREJHUW1SclNUZFJWVVpFVWtONFVGRlZjRVZNUlRGQ1V6QnpOMUZWUmtKU1ZIUkNVVlZPVFV4R2JFSlJWVEZFVEVVeFFsRlZNSE5TTUVaQ1VubDRSbEZWUm0xUE1FWkNVVEJHU1V4R1JrSlJWVVpDVEVaV1FsRldWWE5STUVaQ1VUQk5jMVZWUmtKU1EzaEVVVlZHVjB4RlpFSlJXRlpEVWxONFRsRlZSakpSYW5SQ1VWVldRa3hHYkVKUlZURkVURVYwUWxGVmMzTlNNRVpDVWpKb1EweEdaRUpSVlVWelVUQkdRbHBXWTNOVU1FWkNXbWw0UmxGVlJqTlJhblJDVVZWR1JsUlRlRlpSVlVaQ1VWTjRhRkZWUm1oTVJWWkNVVlZqTjFGVlJrSmlSVWx6VlRCR1FtVkZTWE5TVlVaRVYwVk5jMVJWUmtWV2VYaEVVVlZPUzB4R1ZrSlJWVVpFVEVWc1FsRlZhemRSVlVaQ1VWTjRjRkZyUmtKVFUzaEVVVlZHUkZGVGVFcFJWVVpLVEVWT1FsRlZUa1JNUm1SQ1VWVjNjMUpWUmtKU1EzaEtVVlZHTVZGcVJrTk1SVEZDVVZVd2MxRXdSa0pSZWtwRFRFVnNRbEZXUVhOUk1FWkNWMVZaYzFOVlJrSlRVM2hFVVZWR1JGSjVlRXBSVlVaeFVXbDRSRkZWUlhwUmFuUkNVVlZHUWt4R1RrSlNSVVZ6VWxWR1JsZEZUWE5TTUVaSFZubDRSRkZWVmxGTVJsWkNVVlZHUzB4RmJFSlJWV3MzVVZWR1FsRlRlSEJSYTBaQ1UxVkZjMU5WUmtKVFUzaEVVVlZHUkZKNWVFcFJWVVpWVHpCR1FsRlZSWE5WTUVaSFVubDRSRkZWUm10TVJVNUNVMnRqTjA4d1JrSlJWVVZ6WXpCU1FsVlhNVU5VYVhoTVVWWktkVkZxZEVKUlZVWkNUM3AwUWxGVlJrSlBNRVpDVlZWbmMyRlZWa0pSVkZwRFR6QkdRbEZWUlhOYU1FcENVVmQ0UTFWVGVGQlJWVVp5VVdwMFFsRlZUWHBSYVhodVVXdEdRbFJWVFhOVVZVWkNWRk40U0ZGVlJraFNRM2hRVVZWR1VFeEZUa0pSVlU1R1RFVTVRbEZXU1hOUk1FWkNXakJLYjFGNWVFNVJWVVp2VVdsNFJsRlZSak5SYVhoR1VWVkdORkZwZUVSUlZVWnRUM3AwUWxGVlRrSk1SMlJEVVZWR1RtSXdTWE5WVlVaQ1ZIbDRTRkZWUmtoaWEwbHpWVEJHUWxWNWVFUlJWVVpFVFZWTmMxTlZSa0pSVTNoRVVWVkdWazFGVVhOVU1FWkNWbWw0UmxGVlJuUlJiVVZ6VkRCR1FtSnJTWE5STUVaQ1VrTjRSRkZWUmpaUmFuTTNVVlZHUkZGV1VYTlhWVVpDVVZWRmMxUlZSa0pVVTNoRVVWVkdSRlpUZUU1UlZVWkZURVZPUWxGVk5ITlNNRVpDWVZWS1dVeEdSa0pSVjNCRFR6QkdRbEV3VVRkUlZVWmhVbFIwUWxGVlJrSlBNRVpDVVZWRk4xRlZSa0pSVkhSQ1VWVkdRazh3UmtKWlZXODNVVlZHUkZKcWRFSlJWR3hFWXpCTk4xRlZSa0pSVkhSQ1VWVkdRazh3UmtKUlZVVTNVVlZHUWxGVWN6ZFJWVVpDVVZONGJsSkZSbTVTUjNCRFdWTjRXbEZWUmxwTVJVNUNVVlZOTTFGNWVFcFJWVVpGVEVWT1FsRldiM05UVlVaQ1l6QkpjMUpWUm05U1JYYzNVVlZHUWxGVWN6ZFJWVVpDVVZSMFFsRlZSa0pQTUVaQ1VWVkZjMVpWUm01U1JGWkRUMFZOYzFRd1JtOVNSRkpEVDNwMFFsRlhiRVZqYTAxelRtdEtRbEZYWkVaUmVYaHNVVlZHYkV4RlRrSlJWVTVGVEVVNVFsRlZVWE5TVlVaQ1ZsUnNSRXhGYkVKUlZsbHpVVEJHUWt3d1ZUZFJWVVpDVVZONFZsRlZSbEphTUZGelZWVkdRbFZwZUhaUmEwWkNWVlZGYzFWVlJrSlZhblJDVVZWR1FreEdWa0pSVjNSRFVYbDRUbEZWUm5OUmFYaDJVV3RHUW1Fd1NrSk1SVEZDVVZkNFEwOHdSa0pSVlVWelZsVkdRazFGU2tSTVJUbENVVlJHUTB4SE9VTlJWVVYzVVd0RmMxUXdSa0pOVlVrM1VWVkdRbEZUZUZaUlZVWjBVVEJOYzFrd1JrSmlhMDF6WWpCS1FsRlhNVVJSVTNocVVWVkdkVkY2ZEVKUlZVWkNURVpXUWxGWE1VVmpSVWx6VlZWR1FtSnJVWE5pTUVwQ1VWY3hSVkZUZUZKUlZVWjFVa1J6TjFGVlJrWlJVM2hXVVZWR1RtTlZTWE5XTUVaQ1ZubDRTRkZWUmtoTVJrNUNVVmRTUWt4R1pFSlJWMDF6VVRCR1FsRXdUWE5UTUVaQ1VrTjRSbEZWUmxKVFEzaFFVVlZHVTB4RlZrSlJWMnhEWkd0VmMxSXdSa0poYTBrM1VWVkdRbEZUZUd4UlZVNXpVVzVPUmt4Rk1VSlJWVEJ6VVRCR1FsRXdjM05UVlVaQ1ZVTjRSRkZWUmxwTVJsWkNVVlZPUkV4R1RrSlJWVkUzVVZWR1FsRlRlSEJSYTBaQ1dsVkZjMVV3UmtKVmVYaEVVVlZHUkZSRGVGQlJWVVpGVEVWT1FsRldVWE5UTUVaQ1pGVktNbEpUZUVoUlZVWXdVWHAwUWxGVlJrSk1SazVDVVZadk4xRlZSa0pSVkhSQ1VWVkdRa3hHVmtKUk1XTnpVMVZHUWxOVk9ITlRNRVpDVTJsM01sRnJSa0pMTUVwUlRFVmtRbEZUT1VOTVJ6RkRVVlZGZVZFeU1VWk1SVGxDVVZVNGMxRXdSa0pSTVZWelZGVkdRbUpyVVhOVlZVWkZWME40UkZGVlVuSlJhblJDVVZWR1FreEZPVUpSV0VKRFQzcDBRbEZWYkVKTVJsWkNVVlZzUkV4RmRFSlJWWE56VVRCR1FsRXdUWE5VTUVaQ1ZHbDRSRkZWUm1wV2FYaFNVVlZHYTB4RlRrSlJWVzl6VWxWR1FrNXJTVGRSVlVaQ1VsUjBRbEZWVFROUmFYaGFVVlZHVGxaNWVGUlJWVVpVVEVWa1FsRlZaRmxNUmtaQ1VWWkZjMUV3UmtKUk1VRnpVakJHUWxaRGVFUlJWVVpvVEVaV1FsRlZUVFZTUTNoSVVWVkdSVTh3UmtKUlZVVnpZVlZLUWxGV1RqVlNVM2hZVVZWR1dFeEZUa0pSVlU1SlRFVXhRbEZWVVhOU1ZVWkNWVEJOYzFRd1JrSldRM2hHVVZWR2NsRnVXa1pNUldSQ1VWZDRRMHhGVGtKUldFSkRUekJHUWxGVlJYTlZNRVpDV1dsNFJGRlZSbk5SYW5SQ1VWVk9RbU5WVlhOVlZVWkNVVlZGYzFWVlJrSlZVM2hFVVZWR1JGZFRlRTVSVlVaVlRFVTVRbEZWUm1GTVJrWkNVVlpGYzFJd1JrSlZVM2hFVVZWR1UweEZWa0pSVm1SQ1RFWkdRbEZXUlhOUk1FWkNVVE53Umt4Rk1VSlJXRUpEVEVSU1ExRlZSWEpSYlRsSFRFWk9RbEZUT1VOTVJXUkNVVlpKTjFGVlJrUlNRM2hRVVZWb1JVeEZNVUpUVlhOelUxVkdRbE5UZUZKUlZVWlFWME40VWxGVlJsRk1SVEZDVVZjNVEweEdSa0pSV0doRFRFVldRbEZYZEVSUE1FWkNVVE5LUkV4SVpFUlJWVVp5VVcxRmMxUlZSa0pVVTNoRVVWVkdSRkY1ZUVwUlZVWlJURVZPUWxGV2JHdE1Sa1pDVVZadmMxRXdSa0ppUlVsellUQk9RbEZZYkVSUE1FWkNVVmhDUkV4SFRrSlJWVEY1VWxONFNGRlZSa2hNUnpGRFVWVkdWVTh3UmtKUk1HaDRVbE40VmxGVlJrSlJVM2hTVVZWR1VreEZUa0pSVlU1NVVsTjRTRkZWUmtWTVJVNUNVVlpKYzFJd1JrSmFNRW8xVWxONFdGRlZSbGhNUlU1Q1VWVk9TVXhGTVVKUlZWRnpVbFZHUWxVd1RYTlVNRVpDVmtONFJsRlZSbkpSYmxwR1RFVmtRbEZYZUVOTVJVNUNVVlJPUTA4d1JrSlJNRkUzVVZWR1JGSnBlRkJSVlhCS1RFVXhRbE13UlRkUlZVWkNVbFIwUWxGVlRrMWtNRlZ6VlZWR1FsRlZSWE5aTUVaQ1dYbDRSRkZWUmtSalJVbHpWVlZHUWxKRGVFUlJWVVpyVEVWa1FsRlVTa05qVlVselZqQkdRbFo1ZUVSUlZVWkVVME40VGxGVlJrVk1SVlpDVVZaT1JFeEZPVUpSVmxGelVsVkdRbUV3U2tkTVJrWkNVVmQ0UTB4RlRrSlJXRkpFVHpCR1FsRXdVVGRSVlVaelVsYzVSRTk2ZEVKUlYyUkZaR3ROYzAxclVrSlJWMlJGVHpCR1FsRlZSVGRSVlVaMFVXazVSRTh3UmtKaWExWjZVWHAwUWxGVlJrSlBNRVpDVVZWRk4xRlZSa0pSVkhSQ1VWVkdRazk2ZEVKUldFWkdaR3ROYzFVd1JrSlVNbWhGVEVWc1FsRldRVGRSVlVaRVVrTjRSRkZZVWtaU1JIUkNVVmhrUmxGVWRFSlJWVTVDVHpCR1FsRXdSVGRQZW5SQ1VWVk9Ra3hGYkVKUlZUQjNVV2w0VkZGVlJsUk1SV1JDVVZWamMxVXdSa0pYYTBWelZUQkdRbGRUZUVSUlZVWkVUVlZKYzFOVlJrSlNRM2hHVVZWR1VGbDVlRkpSVlVaUlRFVldRbEZYT1VOUE1FWkNVVE5DUkV4Rk1VSlJWVEZWVEVVeFFsRlZNSE5TTUVaQ1VqQk5jMWRWUmtKWFUzaEVVVlZHUkZScGVFcFJWVVpGVEVWT1FsRlVUa05QTUVaQ1VUQkdURXhGVmtKUlZVWkNURVV4UWxGVk1ITlJNRVpDVVhwQ1JVeEdWa0pSVmtGelVqQkdRbUl3U25GU1EzaFNVVlZHZDFGcWRFSlJWVTVGVEVWT1FsTkZVVGRSVlVaTVVWUjBRbEZWVGtKUE1FWkNVVEJGTjFGVlJrUlJWSE0zVHpCR1FsRXdSWE5UVlVaQ1ZGZDBSVXhHVmtKUlZsVnpVakJHUWxKNWVGUlJWVVpwVVZONFZsRlZSbWhNUmtaQ1VWZDBSVTh3UmtKUlZVVnpWRlZHUWt3d1RtOVNVM2hLVVZWRmNsRjVlRlJSVlVWMlVUQkZjMU5WUmtKTE1FMDNVVlZHUWxGVGVFNVJWVVkyVVRKTmMxVlZSa0psVlUxelZUQkdRbVZyVGtKTVJrWkNVVmhzUkU4d1JrSlJWVVZ6VkZWR1Frd3dTblJTUTNoU1VWVkZjbEZwZUZSUlZVVjJVV3RGYzFWVlJrSkxNRWszVVZWR1FsRlRlRTVSVlVaNVVXdE5jMWt3UmtKalZVbHpWVEJHUW1OclNrSk1SMDVDVVZoR1EwOTZkRUpSVlU1MVVsTjRUbEZWUmtwalJWRnpWVlZHUWxWVGVFeFJWVVpNVGpCSmMxVXdSa0poYTBselVsVkdRazVGU1RkUlZVWkVUVlZKYzFWVlJrSlVWemxEVEVVeFFsRlZNSE5TTUVaQ1VucG9SVXhHVGtKUlZrMXpVVEJHUWxFeU5VWk1SV3hDVVZWUmMxRXdSa0psUlVrM1VWVkdSRkZYVFhOVFZVWkNVVlZGYzFWVlJrSlZVM2hJVVZWR1NGWkRlRTVSVlVaT1RFVnNRbEZWYkVKTVJURkNVVlV3YzFFd1JrSlJla0pGVEVaV1FsRlVWa05QZW5SQ1VWVk9Ra3hHUmtKUlZXdHpVVEJHUWxFeWNFVk1Sa1pDVVZWM2MxSlZSa0phVkhSQ1VWVkdSa3hHYkVKUlZUQnpVMVZHUWxOVVZrTk1SWFJDVVZWdmMyUXdWa0pSVlRRM1VWVkdRbVZWV1RkUlZVWkVUVEJqTjA4d1JrSlNWVkZ6VkZWR1FsUlhkRWRNUlRGQ1VWVXdjMUl3UmtKU01HZHpWVlZHUWxWVGVFeFJWVVpNWVVWWmMxVXdSa0paYVhoS1VWVkZlVkZ0YkVkTVIwNUNVVmROYzFOVlJrSlRWR3hHVEVkR1FsRlhSWE5STUVaQ1VYcGFSa3hHUmtKUlZWRnpVbFZHUWxZd1RYTlpNRVpDVjBONFJGRlZSalpTVkhNM1VWVkdSRkZUZUU1UlZVWktVbE40VGxGVlJrNU1SV3hDVVZWcmMxRXdSa0pSTTFKRlRFWkdRbEZYV1hOU1ZVWkNaVlZKTjFGVlJrUmthMGx6VmxWR1FsUlRlRXBSVlVaS1RsVkpjMU13UmtKVGFYaEVVVlZHVmt4SVpFWlJWVVpYVEVWT1FsRlZORGRSVlVaRVVrUnpOMUZWUmtaU1EzaE9VVlZHVG1GVlNYTldWVVpDVmxONFNGRlZSa2hSZVhob1VWVkdhRXhGVGtKUlZVNUxURVZzUWxGVlVYTlJNRVpDWVVWTk4wOHdSa0pSTUVWelZGVkdRbE5WWTNOV1ZVWkNVMmw0UmxGVlJtNVJhblJDVVZWR1FreEhkRVZSVlU1U1VWTjRWbEZWVWxOUE1FWkNVVlZGTjA4d1JrSlJWVVUzVVZWR1JGcERkekpTUlVaQ1lUQk5OMUZWUmtKUlUzaGFVVlZHTWxGdVpFTk1SVGxDVVZoV1EwOTZkRUpSVlU1dlVYbDRjRkV3UmtSU1ZVMXpXakJLUWxGWFpFTk1SVTVDVVZWTk4xRlZSa0pTVlZGelZsVkdRbEZWUlhOVU1FWkNWSGw0UmxGVlJsRlJVM2hRVVZWR1IwOHdSa0pSVm1ONlVXbDRWbEZWUmtKUlUzaEtVVlZHU2t4RlZrSlJWWEJDVEVWc1FsRldaemRSVlVaQ1lWVktlRkpUZUZaUlZVWkNVVk40YmxGclJrSmFNRWx6VWxWR1FsSjZkRUpSVlVaM1VYbDRWRkZWUmtWTVJVNUNVa2Q0UTA4d1JrSlJWVVZ6VjFWR1FsVlhOVVpNUmtaQ1VWWkpjMk13U2tKUlZrWkNURVpHUWxGV1NUZFJWVVpDVVZONFdsRlZSbkpSYWtwRFRFVTVRbEZYZUVOTVNFNURVVlZHY2xGclJYTlVNRVpDWWtWSk4xRlZSa0pSVTNoYVVWVkZlVkZxVmtOTVJrWkNVVlJPUTB4SVRrTlJWVVY1VVd0RmMxVlZSa0pOTUVrM1VWVkdRbEZUZUZwUlZVWjRVWHBhUTB4R1ZrSlJXRXBFVEVoT1ExRlZSbmhSTUVWelZsVkdRbU5yVFRkUlZVWkNVVk40V2xGVlJuQlNSVTF6VlZWR1FtRnJVWE5qTUVwQ1VWZHNSVkZUZUZKUlZVWnhVa1IwUWxGVlJrSk1SbXhDVVZSS1JXUlZUWE5VTUVaQ1RUQlJjMk13U2tKUlZFcEZVVk40VUZGVlJYcFNSSE0zVVZWR1JsRllVa1pNUmtaQ1VWVkdRa3hGYkVKUlZXdHpVakJHUWxJelRrWk1SVGxDVVZaQk4xRlZSa1pSVTNoYVVWVkdUbVJGVFhOVU1FWkNWSGw0U0ZGVlJraFNhWGhXVVZWR1ZreEZUa0pSVlU1RVRFWkdRbEZWVVhOUk1FWkNUVlZKTjFGVlJrUlJWVkZ6VlZWR1FsRlZSWE5XVlVaQ1ZsTjRSRkZWUmtSUmVYaFNVVlZHUlV4RlRrSlJWbGx6VWpCR1FtUlZTWE5UVlVaQ1pHdEpjMUV3Ums5YU1FMDNUekJHUWxWWGFFUk1SbXhDVVZWck0xRnBlRkpSVlVaTFRFVldRbEZYVFRkUlZVWkVWMnBvUlV4R1ZrSlJWVVpDVEVaV1FsRldWWE5STUVaQ1VYcDBRbEZWVGxWaFJWVnpWMVZHUWxGVlJYTlRWVVpDVTFONFJsRlZSbWhhTUUxelZEQkdSVlZxZEVKUlZWWlZZa1ZKYzFkVlJrSlJWVVZ6VlZWR1FsVlRlRVpSVlVaVVYybDRVbEZWV2xOUE1FWkNVakZSY2xKRGVGcFJWVVpDVVZONFVsRlZSbEpNUlZaQ1VWWktRa3hHUmtKVFJrMDNVVlZHU2xaRlRYTlhWVVpDVVZWRmMxa3dSa0paZVhoR1VWVkdTRk41ZUhaUmEwWkNZakJKYzFFd1JrSlJNMUpHVEVaR1FsRlZVWE5TVlVaQ1ZqSnNSa3hIVGtKUlZtYzNVVlZHUzA1VlNYTldNRVpDVWtONFJGRlZSbGRQTUVaQ1ZGVlJjMVV3UmxGU1EzaE9VVlpHVEU4d1JrSlJWVlUzVVZWR1JGUkVkRUpSVlU1Q1R6QkdRbEV3Um05U1EzaFdVVlZHUWxGVGVGWlJWVVpDVEVWT1FsRlhUbGhNUlRsQ1VWZFJjMU13UmtKTlJVcFpURVpPUWxGVlJYTlJNRVpDV1ZaamMxUXdSa0paYVhoRVVWVkZlRkZxY3pkUlZVWkdVVk4zTUZFd1JrSmpWVXB1VVhsNFRsRlZSazVNUlU1Q1VWVk9SRXhGYkVKUlZrRnpVVEJHUWxkVWJFTk1SVGxDVVZadmMxRXdSa0pqYTBselkxVk9RbEZVU2tSUE1FWkNVVmhTUkV4SFpFTlJWVVpPWkRCTmMxUlZSa0pVVTNoNFVXdEdRbGRxZEVKUlZVNUpWV2w0V2xGVlJrSlJVM2hXVVZWR1ZreEZUa0pSVlUwM1VWVkdSRlpIYUVaTVIwNUNVVlZHUWt4RmJFSlJWV3R6VWxWR1FsbFhaRVJNUlRsQ1VWVTRjMUV3UmtKUk0yUkVURVV4UWxGVlVYTlJNRVpGV21wMFFsRlZWbFZOVlZGeldUQkdRbEZWUlhOVlZVWkNWVk40UmxGVlJsUk5NRTF6VTFWR1FsRlRlRVJSVlVaV1RVVlJjMVF3UmtKV2FYaGFVVlZHZWxGcVNrUk1SVEZDVVZoU1EweEdaRUpTYkVrM1VWVkdTRlpHUVhOWk1FWkNVVlZGYzFWVlJrSlZVM2hHVVZWR1UxRlRlRkpSVldoVVR6QkdRbE5XVWtSTVIwNUNVVlZHUWt4SFRrSlJWMDF6VWxWR1FsSXdjM05pTUVwQ1VWYzVRMHhHWkVKUlZXd3dVbE40VWxGVlJrdE1SMDVDVVZka1EyUlZWWE5VVlVaQ1lVVkpjMUl3UmtKTlJVcFBURWRPUWxGVVJrTlBNRVpDVTJwV1EweEhSa0pSVlZGelVUQkdRbFpxZEVKUlZURkZUekJHUWxFd1dUZFJWVVpFVW1wMFFsRlRPVU5aVkhSQ1VWVkdRazh3UmtKUlZVVTNVVlZHUWxGVWRFSlJWVVpDVHpCR1Fsb3dUbTFQZW5SQ1VWVldSVXhGTVVKUlZXeEdURVV4UWxGVmIzTlNWVVpDVjFSMFFsRlZUbGRNUmtaQ1VWVXhURXhHVmtKUlZsVnpVakJHUWxJelFrVk1SV3hDVVZWcmMxRXdSa0pSTTBaRlRFWk9RbEZWZDNOUk1FWkNXbFJHUmt4RmJFSlJWMWx6VWxWR1FtTlZTWE5UVlVaQ1kydEpjMUpWUmtKTmEwbHpVMVZHUWswd1NYTlJNRVpDWW10Sk4xRlZSa1JSVTNoU1VWVkdUbUZWU1hOWlZVWkNXVk40U0ZGVlJraE1NRTF6WVZWS1FsRlhiRU5NUlU1Q1VWVk5NRkY1ZUZKUlZVWkZURVZPUWxGWVdrUlBNRVpDVVRCR1NreEZiRUpSVlVaQ1RFZEdRbEZWUlhOUk1FWkNZVlZLUlV4SFJrSlJWM0JEVEVWV1FsRlhaRVJrTUZGelZsVkdRbUZGVFRkUlZVWkVVa1IwUWxGVlRrZE1SVTVDWTBWU1JVOTZkRUpSV0U1RlVWTjRTbEZWUms1VWFYaFVVVlZHVkV4RlpFSlJWV056VlRCR1FsZHJSWE5WTUVaQ1YxTjRSRkZWUmtSaWExVnpVMVZHUWxKRWRFSlJWVVpDVEVaT1FsRldWa0pNUld4Q1VWVnJjMUV3UmtKUmVrcEdURVYwUWxGVmQzTlRWVVpDV1hwT1JreEZiRUpSVld0elVUQkdRbEY2U2taTVJYUkNVVlYzYzFFd1JrSldlbVJHVEVjeFExRlZSbGxNUlU1Q1VWaG9RMDh3UmtKUlZVVnpVVEJHUW1KRlNUZFBNRVpDVWxWRmMxTlZSa0pVVmtWelYxVkdRbGRUZUVoUlZVWklURVpPUWxGWFdrSk1SbXhDVVZkVmMxRXdSa0pSTURSelUxVkdRbEpEZUVaUlZVWldUekJHUWxGNlpFTk1SVEZDVVZWc1RFeEZNVUpSVlRCelVqQkdRbEo2YUVWTVJrNUNVVlpOYzFFd1JrSlJNalZHVEVWc1FsRlZVWE5STUVaQ1pFVkpOMDh3UmtKUk1FVnpWRlZHUWxOVGVFUlJWVVpFVTNsNFRsRlZSazFNUlZaQ1VWZEZOMUZWUmtSWFEzaFNVVlZHU2xSRGVFcFJWVVpLVEVWT1FsRlZUWGxTVTNoTVVWVkdUVXhGZEVKUlYxVjRVbWw0VkZGVlJuVlJhWGhHVVZWRk5GRnFkRUpSVlVaR1dsTjRUbEZWUmtKUlUzaEtVVlZHU2t4RlRrSlJWVTE1VWxONFRGRlZSazFNUldSQ1VWZEZjMUpWUmtKWmFuUkNVVlZHY0ZGcWN6ZFJWVVpFWVd0UmMxVlZSa0pUVkU1R1RFVnNRbEZWYTNOUk1FWkNVWHBLUmt4RmRFSlJWWGR6VVRCR1FsWjZaRVpNUnpGRFVWVkdXVXhGTVVKUlZ6bEVXV2w0VkZGVlJqUlJlWGhHVVZWR2RGSkVkRUpSVlVaR1dsTjRUbEZWUmtKUlUzaEtVVlZHU2t4RlRrSlJWVTE1VWxONFRGRlZSazFNUlU1Q1VWWmpNMUpUZUhSUmEwWkNWME40U2xGVlJuSlJlWGhHVVZWR2MxRjZkRUpSVlVaNlVYcHpOMUZWUmtSTk1GcFFURVZzUWxGVlJrSk1SVEZDVVZVd2MxSXdSa0pTZW1oRlRFWk9RbEZXVFhOUk1FWkNVVEkxUmt4RmJFSlJWVkZ6VVRCR1FtSkZTVGRSVlVaRVVrUnpOMUZWUmtaU1EzaFVVVlZHVUZONWVFNVJWVVpSVHpCR1FsRXdVWE5STUVaVlVrUjBRbEZXWkVKUE1FWkNVVEJGTjFGVlJrUlJWSFJDVVZWT1FrOTZjemRSVlVaRVVWTjRTbEZWUms1aE1GVnpZakJLUWxGWE9VTk1SV1JDVVZWamMxVXdSa0prYTBwQ1RFYzVRMUZWUmpGUmFYaEVVVlZHUkZONWVHaFJWVVpGVEVWV1FsRlhaRU5XYVhocVVWVkdiMUZwZUVaUlZVWjBVWHAwUWxGVlRUVlNRM2hPVVZWR1NsWlRlR2hSVlVab1RFVjBRbEZWYzNwU2FYaFVVVlZHTUZGcGVFWlJWVVp3VVhwMFFsRlZUWFpSYVhoWVVWVkdVR0ZWV1hOWk1FWkNXWGw0VEZGVlJreGhhMWx6VlRCR1FtSnJTWE5TTUVaRVUwUktSMHhIUmtKU1JXTnpXVlZHUmxGV1dYTlpNRVpIVVZONFZGRlZWbkJSYkZWeldWVkdSMkZyU1hOUk1FWkNWVVIwUWxGVlpFVk1SV1JDVTJ0UmMxUlZSa3hUZW5SQ1VWVk9TVXhHWkVKUlZUaDZVbWw0VkZGVlJsRlBNRVpDVVRCUk4xRlZSa1JTYVhoRVVWWlNSVTh3UmtKV01FVTNVVlZHUkZGVWRFSlJWVTVDVDNwek4xRlZSa1JSVTNoS1VWVkdUbUpWU1hOWlZVWkNXVk40U0ZGVlJraE1SazVDVVZkb1ExRlRlR2hSVlVadVVXbDRSRkZWUmtSVGFYaEtVVlZHUlU4d1JrSlJWVVUzVHpCR1FsRlZSWE5rVlVwQ1VWWldkRkpUZUZSUlZVWlVURVZPUWxGVlRuVlNVM2hLVVZWR1JVeEZUa0pSVnpWRFRFTjBSRkZWUmxaTVJtUkNVVmRzUTFKNWVGWlJWVVY2VVdwMFFsRlZSa0pNUlU1Q1VWaFNRMDh3UmtKU1ZVVTNVVlZHUkZGVWRFSlJWVTVDVDNwek4xRlZSa1JSVTNoS1VWVkdUbVZWU1hOYU1FcENVVmRrUTB4RlpFSlJWV056VlRCR1FtSnJTa0pNUjJSRFVWVkdkRkZwZUZKUlZVWTFVWHAwUWxGVlJrSk1SVEZDVVZoU1JGSkRlRkJSVlVaNlVYbDRWRkZWUmpCUk1FVnpWREJHUW1Nd1RUZFJWVVpDVVZONFRsRlZSVE5SYWs1RFRFVnNRbEZVV2tOTVJrNUNVVlJrUTFGVGVFcFJWVVV5VVdwMFFsRlZSa0pNUlRGQ1VWaGFRMk5WVlhOYU1FcENVVmhXUTB4R1RrSlJXRnBEVVZONGJsRnJSa0prVlVrM1VWVkdSR0ZGVlhOVVZVWkNWRmhDUmt4R1JrSlJWVFJ6VWpCR1FtTXdUWGRSYVhoUVVWVkdNRkY1ZUVSUlZVWk9UVlZKYzFWVlJrSlVhblJDVVZWR1FreEZNVUpSVjJSRFVYbDRVbEZWUm05UmFYaElVVlZHZWxFemJFTk1SVGxDVVZoU1JFeEZUa0pSVjJSRFpXdEpjMVZWUmtKaFJVazNVVlZHUWxGVGVFNVJWVVYzVVdwS1EweEZPVUpSVkVaRFRFVmtRbEZZVGtSU2FYaFFVVlZHTUZGNWVFUlJWVVYzVVd0VmMxUXdSa0pOVlVrM1VWVkdSbEZVVGtOTVJWWkNVVlZHUWt4R1JrSlJWa1Z6VTFWR1FsTlVTa05NUlRsQ1VWWnZOMUZWUmtKUlZIUkNVVlZHUWs4d1JrSlJWVVZ6VTFWR1JGWjVlRXBSVlVaS1RUQk5jMU13UmtKVGFYZDNVa1ZHUWs1RlVtNVJhWGhTVVZWRk1WSkRkelJSYTBaQ1pEQlplVkZwZUZCUlZVWTBVbWw0VUZGVlVsbFBNRVpDVWxWRmMxSXdSa0pSZWs1RFRFWkdRbEZWVVhOVFZVWkNXVk40UkZGVlJrUk5hMGx6VkRCR1FscEVkRUpSVlVaQ1R6QkdRbEZWUlRkUlZVWkNVVk40U2xGVlRsaE1SV3hDVVZWcmVsRjVlRXhSVlVaTFRFVk9RbEZXVlhOaE1GSkNVVlpaYzFFd1JrVlhSSFJDVVZWa1Fsb3dTWE5TVlVaQ1VWVkZjMVZWUmtKVlUzaE1VVlZHVEZGVGVGSlJWVVpTVEVWa1FsRlZaRzlSZVhod1VXdEdRbUZWU1hOUk1FWkNVVEprUkV4R1JrSlJWVkZ6VVRCR1FtRnJUWE5STUVaQ1ZXcDBRbEZWVGtKTmEwbHpVbFZHUWxGVlJYTlVNRVpDVkhsNFRGRlZSa3hSVTNoUVVWVkdVRXhGWkVKUlZXTjZVa040Y0ZGclJrSmhWVWx6VVRCR1FsRjZTa1ZNUlRsQ1VWVlJjMUV3UmtKaFJVMXpVVEJHUWxWRWN6ZFJWVVpHVVZONE5WRnJSa0pOUlZKdVVrTjRiRkZWUm14TVJVNUNVVlZOTjFGVlJrSlNWRVpJVEVWc1FsRlZSa0pNUld4Q1VWVnJjMUpWUmtKU2VtaERURVpHUWxGV1VUZFJWVVpDWWxWS1JVeEZiRUpSVlVaQ1RFVnNRbEZWYTNOU1ZVWkNVMnRGYzFOVlJrSmlhMGszVVZWR1FtVlZTbmhTVTNoS1VWVkdRbEZUZUc1UmEwWkNXakJKYzFKVlJrSmhSVXBDVHpCR1FsRlljRU5NUldSQ1VWVlJjMUV3UmtKbGExVTNVVlZHUWxGVGVFNVJWVVl6VVc1YVJFeEdWa0pSV0doRFRFYzVRMUZWUmxKalZVbHpXVEJHUWxWcWRFSlJWVVpDVEVVeFFsRlhPVVJqUlVselZWVkdRbU5GVFhOaU1FcENVVmM1UkZGVGVGSlJWVVozVVhwMFFsRlZSa0pNUlRGQ1VWUm9SR1JWVFhOVU1FWkNUMVZOYzJJd1NrSlJWR2hFVVZONFVGRlZSVFZSZW5NM1VWVkdSbEZUZUZSUlZVWlFUekJHUWxGVlZuZFNVM2hLVVZWR1FsRlRlRkpSVlVaU1RFVldRbEZXU2tKTVJrWkNVVlZaTjFGVlJrSlhWRXBEVEVWc1FsRlZSa0pNUlRsQ1VWVTRjMUpWUmtKVlJVVnpWREJHUWxkcWRFSlJWVVo0VVdwV1EweEZiRUpSVlVaQ1RFWkdRbEZXUlhOU1ZVWkNWV3RGYzFWVlJrSmphMGszVVZWR1Frc3dTVEpSYVhoS1VWVkdRbEZUZUZaUlZVWldURVZXUWxGV1drSk1SbFpDVVZNNVEwOHdSa0pSVkVwRVVYbDRTbEZWUmtKUlUzaFNVVlZHVWt4RlZrSlJWa3BDVEVaR1FsRlVUa1JQTUVaQ1VWaEdSV1JWVFhOVFZVWkNVVlZGYzFRd1JrSlVlWGhHVVZWR1VWRlVkRUpSVlVaNVVrTjRTRkZWUmxGUE1FWkNVVEJSYzFFd1JtdFNSSFJDVVZka1ExRlVkRUpSVlU1Q1R6QkdRbEV3UlRkUGVuUkNVVlZPUWt4RmJFSlJWVEUyVVdsNFdsRlZSbHBNUldSQ1VWVmpjMVV3UmtKYWEwVnpWMVZHUWxwVGVFUlJWVVpFVGpCTmMxTlZSa0pTUkhSQ1VWVkdRazk2ZEVKUlZVWkNURWhrUTFGVlJsWmlWVlZ6VlRCR1FsVjVlRVJSVlVaRVltdFZjMU5WUmtKU1EzaEVVVlZHZFZGcGVHNVNSVVpDVmxONFdsRlZSbkJSYW1oR1RFWk9RbEZVVGtOUE1FWkNVVlZGYzFFd1JrSmphMGszVVZWR1JsRlVkRUpSVlU1Q1R6QkdRbEV3UlRkUGVuUkNVVlZPUWt4RmJFSlJWVEIyVVdsNGJGRlZSbXhNUldSQ1VWVmpjMVV3UmtKaVJVcENURWRXUWxGWGRFTk1SVTVDVVZWT1JVeEZPVUpSVlZGelVsVkdRbFpVYkVSTVJXeENVVlpaYzFKVlJrSmlWVWszVVZWR1JHVnJUWE5VVlVaQ1ZWTjBSa3hHUmtKUlZrbHpVakJHUWtzd1RuRlJlWGhRVVZWRmRsRjVlRVJSVlVaU1lWVk5jMVZWUmtKVmFuUkNVVlZHUWt4Rk1VSlJWM1JEWkd0SmMxUlZSa0ppUlVselVqQkdRa3N3VGxkTVJUbENVVk01UkV4RlRrSlJWM1JEVmxONFRsRlZSbk5SYW5SQ1VWVkdRa3hGTVVKUlZ6RkVWR2w0VUZGVlJuVlJlWGhJVVZWRmNsRXdiM05VTUVaQ1REQk5jMUV3UmtKTlJVcHlVWGw0VUZGVlJYaFJhbk0zVVZWR1JsRlRkM2RSYTBaQ1N6Qk9TVXhIVmtKUlYxVnpVVEJHUWxGNmRFSlJWVVpHVFZWamMxTlZSa0pSVlVWelUxVkdRbE5UZUVaUlZVWklUa1ZqYzFWVlJrSldSSFJDVVZWR2RGRnBPVVpNUld4Q1VWVkdRa3hGYkVKUlZXdHpVbFZHUWxOclJUZFJWVVpDWW10SmMxSXdSa0pTUTNoRVVWVkZOVkpFZEVKUlZVWkNURVV4UWxGV1JtNVNRM2hTVVZWR1UweElSa05SVlVaU1VWTjRVbEZWUmxOUE1FWkNVVlZGYzFSVlJrSmhNRXBJVEVkT1FsRlhlRU5NU0VaRFVWVkdjbEZyUlhOWk1FWkNZa1ZKTjFGVlJrSlJVM2hPVVZWR2NsRXpRa05NUmtaQ1VWZDRSRXhJUmtOUlZVWnlVVEJGYzFWVlJrSmlSVTAzVHpCR1FsRXdSWE5OUlVwQ1VWUmFRMDlGVFhOYVZVWkNXbE40UkZGVlJrUlBNRVpDVVZWVmVGSjVlRXBSVlVaQ1VWTjRTbEZWUmtwTVJWWkNVVlZrZUZKcGVFNVJWVVpWVHpCR1FsRlhiRU5sUlZGelUxVkdRbEZWUlhOVFZVWkNVMU40UmxGVlJrdFJWSFJDVVZWR2NWRnBlRWhSVlVaRlRFVk9RbEZVVmtSUE1FWkNVVlZGYzFSVlJrSmhNRXB3VWtONFRsRlZSbk5SYVhoNFVXdEdRbFZWVVhOVlZVWkNWV3B6TjFGVlJrWlJVM2hVVVZWR1VFOHdSa0pSVlZaQ1RFVnNRbEZWUmtKTVJrWkNVVlpGYzFKVlJrSlZhMFZ6VlZWR1FsSnFkRUpSVlVaYVVYbDRTbEZWUmtKUlUzaE9VVlZHVGt4RlZrSlJWVFZDVEVVeFFsRldiemRSVlVaQ1lqQktSRXhGYkVKUlZVWkNURVU1UWxGVk9ITlNWVVpDVlVWRmMxUXdSa0pqUlVrM1VWVkdRazVyU2tSTVJXeENVVlZHUWt4SFRrSlJWMDF6VWxWR1FscEZSWE5aTUVaQ1RqQkpOMUZWUmtKT2EwNTNVV2w0U2xGVlJrSlJVM2hTVVZWR1VreEZWa0pSVmtwQ1R6QkdRbEZVWkVSTVJXUkNVVlpCTjFGVlJrUlNRM2hFVVZaQ1JVOTZkRUpSVms1Q1RFVnNRbEZWTVhKU1EzaFlVVlZHV0V4RlpFSlJWV056VlRCR1FscEZSWE5XTUVaQ1dYbDRSRkZWUmtSUmVYaE1VVlZHUlU4d1JrSlJWVVZ6VlRCR1FsWXpjRU5NUlhSQ1VWVnpjMUV3UmtKUk1FMXpWREJHUWxScGVFUlJWVVpxWkRCSmMxTXdSa0phUTNoS1VWVk5lbEZyUlhOVE1FWkNVM2w0UkZGVlJrUlJlWGhNVVZWR1QweEZWa0pTUkVwRFRFVmtRbEpVVGtOTVJrWkNVVlU1UlV4RmRFSlJWa0Z6VkZWR1FtRlZTWE5WVlVaQ1lXdEpjMU5WUmtKT2EwcENURVYwUWxGVmMzTlRNRVpDVTNsNFNsRlZSakpSZVhoSVVWVk9SbU5yU1hOVVZVWkNWRk40UkZGVlJrUmtWVWx6VkZWR1FsVkRlRVJSVlVacVRFVldRbEZYVVhOU1ZVWkNZVEJLUjB4RmRFSlJWM2hEVEVWT1FsSkZXWE5TTUVaR1VsVkZjMU13Umt0WmVuUkNVVlZHUWt4RlRrSlJXRUpEVDNwMFFsRlZNVUpNUld4Q1VWVXhUVXhIVmtKUlYxVnpVakJHUWxKNWVGUlJWVVp6VVd0RmMxcFZSa0poTUVselZWVkdRbU13VFRkUlZVWkNVVk40VGxGVlJuVlJla1pJVEVWc1FsRlhNVVJNUms1Q1VWYzFSRkZUZUVwUlZVWjBVWHAwUWxGVlJrSk1SVEZDVVZSa1EwNXJTWE5UVlVaQ1RtdEpjMVV3UmtKT01FcENURVZzUWxGVVdrTlBNRVpDVVZWRmMxUlZSa0prYTBwNFVsTjRibEZyUmtKa1ZVbHpWVEJHUW1SclNrSk1SMlJEVVZWR01WRnFjemRSVlVaRVRsVlJjMVJWUmtKVFUzaEVVVlZHUkdKRlkzTlRWVVpDVkVONFJsRlZSbGhQTUVaQ1VURlJjMVpWUmtKVVUzaEtVVlZHU2xwVGVFeFJWVVpMVEVWT1FsRldWWE5qVlZKQ1VWWlpjMUV3UmtKVWFuUkNVVlZPUlU5NmRFSlJWVTVGVEVVeFFsRlZNWFJTZVhoVVVWVkdWRXhGWkVKUlZXUnpVME40U2xGVlJrcE1SVTVDVVZWT2VsRnBlRXhSVlVaTlRFVk9RbEZXWTNOU01FWkNWME40UkZGVlJuTlJhblJDVVZWT1FrNUZXWE5TVlVaQ1VWVkZjMVV3UmtKVmVYaEVVVlZHUkUxVldYTlRNRVpDVm1wMFFsRlZUa0pNUlRGQ1VWVXhkbEY1ZUZKUlZVWlNURVZrUWxGVlpIcFNRM2hVVVZWR1ZFeEZUa0pSVlU1RVRFVmtRbEZXV1hOU1ZVWkNZV3RKTjFGVlJrUlJVM2hPVVZWR1RtRkZTWE5VTUVaQ1ZIbDRTRkZWUmtoU1EzaHVVV3RHUWxvd1NYTlNNRVpDVWpGcmMxWXdSa0pXZVhoRVVWVkdSR0ZyV1hOVFZVWkNVa040UkZGVlJtdE1SV1JDVVZoV1ExRlRlRXBSVlVZeVVrUjBRbEZWVmtKTVJURkNVVlZzZEZKRGVHcFJWVVpxVEVWa1FsRlZaSFJSYVhoUVVWVkdlVkZwZUVSUlZsRXdVa1J6TjFGVlJrSlJVM2h1VWtWR1ZrMVZUbXhNUms1Q1ZtcENSRTh3UmtKUlZVVTNUekJHUWxGVlJUZFJWVVpXVGxWUmMwMXJVa0pSVkZwRFR6QkdRbEZWUlhOV1ZVWkNZa1ZKZUZKNWVFaFJWVVp5VVdwek4xRlZSa1JOTUVselZsVkdRbE5VUWtkTVIyUkRVVlZHUzB4RlZrSlJXRTVEVHpCR1FsRXpRa05NUm14Q1VWVXhjbEZwZUU1UlZVWk9URVZrUWxGVlpFOU1SbVJDVVZaamMxRXdSa0pSZW14RFRFZE9RbEZYVFhOUk1FWkNVVE5vUmt4RlpFSlJWVkZ6VVRCR1FscHBlRVJSVlVWNFVXcDBRbEZWVGtKa01GVnpWVlZHUWxGVlJYTlpNRVpDV1hsNFJGRlZSa1JsUlZWelVqQkdRbEpEZUVSUlZVWnJURVZrUWxGWVRrTk9SV056VkZWR1FtUkZTVGRSVlVaRVVWaENSRXhHUmtKUlZVWkNURWRPUWxGWFRYTlNNRVpDVWpJNVJFeEZNVUpSVjNCRFR6QkdRbEV3VVhOVU1FWkxVa040VGxGVmRFeFBNRVpDVVRCb2QxRjVlRkpSVlVaQ1VWTjRhbEZWUm1wTVJXUkNVVlZrUWt4SFRrSlJWMDF6VVRCR1FsRXphRVpNUldSQ1VWVlJjMUV3UmtKTU1FazNVVlZHUkZKRWRFSlJWVTVIVHpCR1FtSnJTWGxTUkhSQ1VWVkdRazh3UmtKUlZVVTNVVlZHUWxGVWRFSlJWVVpDVDNwMFFsRllSa05PVlZGelZUQkdRbFI2ZEVKUlZVNU5ZMVZWYzFOVlJrSlJWVVZ6VlZWR1FsVlRlRVpSVlVaSVVubDRhbEZWUm1wTVJVNUNVVlZPZDFGcGVGSlJWVVpGVEVWT1FsSklRa05QTUVaQ1VsVjRkbEZwZUVwUlZVWkNVVk40YWxGVlJtcE1SVlpDVVZkU1FreEhUa0pTYTNNM1VWVkdTRlJJUWtOTVJXeENVVlZHUWt4R1JrSlJWa1Z6VWxWR1FsVnJSWE5WVlVaSlUzcDBRbEZWYkUxa1ZVMXpVMVZHUWxGVlJYTlVNRVpDVkhsNFJsRlZSbEZSVkhSQ1VWVndURXhGWkVKUlZrRTNVVlZHVGxKRGVFUlJWRTVEVWtSek4wOHdSa0pQUlVwQ1RFVnNRbEZWTVhKUmFYaE1VVlZHVEV4RlpFSlJWV1EwVVdsNFZsRlZSbXRQTUVaQ1VUQkZjMU5WUmtKVVdHeERURVZzUWxGVmEzTlNNRVpDVW5wV1JreEdUa0pSVjBrM1QzcHpOMGx1TUQxY2JpSXNJbWx0Y0c5eWRDQXFJR0Z6SUdacWMyOXVJR1p5YjIwZ0owQnNhWEYxYVdRdGJHRmljeTltWldSbGNtRjBaV1F0YW5OdmJpZGNibHh1THlvcVhHNHFJRUpoYzJsaklHMWxkR2h2WkhNZ1ptOXlJR0ZqWTJWemMybHVaeUIwYUdVZ1lYVmthWFFnY21WamIzSmtJR1JoZEdFdUlFNXZkR1VnZEdoaGRDQm1kVzVqZEdsdmJtRnNhWFI1SUdseklITndiR2wwSUhWd0lHeHBhMlVnZEdocGN5QjBieUJ0WVd0bElIUm9aWE5sWEc0cUlHWjFibU4wYVc5dWN5QmxZWE5wWlhJZ2RHOGdkVzVwZENCMFpYTjBMbHh1S2k5Y2JseHVMeW9xWEc0cUlGSmxkSEpwWlhabGN5QmhJSE5wYm1kc1pTQmhkV1JwZENCeVpXTnZjbVFnWlc1MGNua2dZbmtnYm1GdFpTQThZWFZrYVhRZ2JtRnRaVDR2UEhSaGNtZGxkRDR1WEc0cUwxeHVZMjl1YzNRZ1oyVjBJRDBnS0dSaGRHRXNJR2xrS1NBOVBpQjdYRzRnSUdOdmJuTjBJRnRoZFdScGRFNWhiV1VzSUhSaGNtZGxkRWxrWFNBOUlITndiR2wwU1dRb2FXUXBYRzRnSUhKbGRIVnliaUJrWVhSaFB5NWhkV1JwZEZKbFkyOXlaSE0vTGx0aGRXUnBkRTVoYldWZFB5NWJkR0Z5WjJWMFNXUmRJQ1ltSUhSdlUzUmhibVJoYkc5dVpTaGtZWFJoTENCaGRXUnBkRTVoYldVc0lIUmhjbWRsZEVsa0tWeHVmVnh1WEc1amIyNXpkQ0JzYVhOMElEMGdLR1JoZEdFc0lIc2daRzl0WVdsdUxDQW5ZWFZrYVhRZ2JtRnRaU2M2SUdGMVpHbDBUbUZ0WlNCOUtTQTlQaUI3WEc0Z0lHbG1JQ2hrWVhSaExtRjFaR2wwVW1WamIzSmtjeUE5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUZ0ZFhHNGdJSDFjYmx4dUlDQmpiMjV6ZENCa2IyMWhhVzVMWlhseklEMGdaRzl0WVdsdUlEMDlQU0IxYm1SbFptbHVaV1JjYmlBZ0lDQS9JRTlpYW1WamRDNXJaWGx6S0dSaGRHRXVZWFZrYVhSU1pXTnZjbVJ6SUh4OElIdDlLVnh1SUNBZ0lEb2dXMlJ2YldGcGJsMWNibHh1SUNCeVpYUjFjbTRnWkc5dFlXbHVTMlY1Y3k1eVpXUjFZMlVvS0dGall5d2daRzl0WVdsdVRtRnRaU2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR1J2YldGcGJsSmxZM01nUFNCa1lYUmhMbUYxWkdsMFVtVmpiM0prYzF0a2IyMWhhVzVPWVcxbFhTQjhmQ0I3ZlZ4dUlDQWdJR052Ym5OMElHRjFaR2wwVG1GdFpYTWdQU0JoZFdScGRFNWhiV1VnUFQwOUlIVnVaR1ZtYVc1bFpGeHVJQ0FnSUNBZ1B5QlBZbXBsWTNRdWEyVjVjeWhrYjIxaGFXNVNaV056S1Z4dUlDQWdJQ0FnT2lCYllYVmthWFJPWVcxbFhWeHVJQ0FnSUdadmNpQW9ZMjl1YzNRZ1lYVmthWFJPWVcxbElHOW1JR0YxWkdsMFRtRnRaWE1wSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR0YxWkdsMFVtVmpjeUE5SUdSdmJXRnBibEpsWTNOYllYVmthWFJPWVcxbFhTQjhmQ0I3ZlZ4dUlDQWdJQ0FnWm05eUlDaGpiMjV6ZENCMFlYSm5aWFJKWkNCdlppQlBZbXBsWTNRdWEyVjVjeWhoZFdScGRGSmxZM01wS1NCN1hHNGdJQ0FnSUNBZ0lHRmpZeTV3ZFhOb0tIUnZVM1JoYm1SaGJHOXVaU2hrWVhSaExDQmhkV1JwZEU1aGJXVXNJSFJoY21kbGRFbGtLU2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUdGalkxeHVJQ0I5TEZ4dUlDQmJYU2xjYmlBZ0lDQXVjMjl5ZENnb1lTd2dZaWtnUFQ0Z1lTNXBaQzVzYjJOaGJHVkRiMjF3WVhKbEtHSXVhV1FwS1Z4dWZWeHVYRzVqYjI1emRDQndaWEp6YVhOMElEMGdLR1JoZEdFc0lIc2daRzl0WVdsdUxDQmtiMjFoYVc1eklIMHBJRDArSUh0Y2JpQWdhV1lnS0NGa2IyMWhhVzV6SUNZbUlHUnZiV0ZwYmlrZ2UxeHVJQ0FnSUdSdmJXRnBibk1nUFNCYlpHOXRZV2x1WFZ4dUlDQjlYRzRnSUdsbUlDaGtiMjFoYVc1eklDWW1JR1J2YldGcGJuTXViR1Z1WjNSb0lENGdNQ2tnZTF4dUlDQWdJR1p2Y2lBb1pHOXRZV2x1SUc5bUlHUnZiV0ZwYm5NcElIdGNiaUFnSUNBZ0lHWnFjMjl1TG5keWFYUmxLSHNnWkdGMFlTd2djMkYyWlVaeWIyMGdPaUJnTG1GMVpHbDBVbVZqYjNKa2N5NGtlMlJ2YldGcGJuMWdJSDBwWEc0Z0lDQWdmVnh1SUNCOVhHNGdJR1ZzYzJVZ2UxeHVJQ0FnSUdacWMyOXVMbmR5YVhSbEtIc2daR0YwWVN3Z2MyRjJaVVp5YjIwZ09pQW5MbUYxWkdsMFVtVmpiM0prY3ljZ2ZTbGNiaUFnZlZ4dWZWeHVYRzVqYjI1emRDQjFjR1JoZEdVZ1BTQW9aR0YwWVN3Z1lYVmthWFJTWldOdmNtUXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2V5QnBaQ0I5SUQwZ1lYVmthWFJTWldOdmNtUmNiaUFnWTI5dWMzUWdXMkYxWkdsMFRtRnRaU3dnZEdGeVoyVjBTV1JkSUQwZ2MzQnNhWFJKWkNocFpDbGNiaUFnWTI5dWMzUWdXMlJ2YldGcGJsMGdQU0JoZFdScGRFNWhiV1V1YzNCc2FYUW9KeTBuS1Z4dVhHNGdJR2xtSUNnaFpHRjBZUzVoZFdScGRGSmxZMjl5WkhOYlpHOXRZV2x1WFNrZ2UxeHVJQ0FnSUdSaGRHRXVZWFZrYVhSU1pXTnZjbVJ6VzJSdmJXRnBibDBnUFNCN2ZWeHVJQ0I5WEc0Z0lHbG1JQ2doWkdGMFlTNWhkV1JwZEZKbFkyOXlaSE5iWkc5dFlXbHVYVnRoZFdScGRFNWhiV1ZkS1NCN1hHNGdJQ0FnWkdGMFlTNWhkV1JwZEZKbFkyOXlaSE5iWkc5dFlXbHVYVnRoZFdScGRFNWhiV1ZkSUQwZ2UzMWNiaUFnZlZ4dVhHNGdJR052Ym5OMElHRjFaR2wwVW1WalEyOXdlU0E5SUU5aWFtVmpkQzVoYzNOcFoyNG9lMzBzSUdGMVpHbDBVbVZqYjNKa0tWeHVJQ0JrWld4bGRHVWdZWFZrYVhSU1pXTkRiM0I1TG1sa1hHNGdJR1JsYkdWMFpTQmhkV1JwZEZKbFkwTnZjSGt1ZDJWcFoyaDBYRzRnSUdSbGJHVjBaU0JoZFdScGRGSmxZME52Y0hrdVlYVmthWFJPWVcxbFhHNGdJR1JoZEdFdVlYVmthWFJTWldOdmNtUnpXMlJ2YldGcGJsMWJZWFZrYVhST1lXMWxYVnQwWVhKblpYUkpaRjBnUFNCaGRXUnBkRkpsWTBOdmNIbGNibjFjYmx4dUx5OGdhR1ZzY0dWeUwyNXZiaTFsZUhCdmNuUmxaQ0JwZEdWdGMxeHVZMjl1YzNRZ2MzQnNhWFJKWkNBOUlDaHBaQ2tnUFQ0Z2UxeHVJQ0JwWmlBb2FXUWdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduVFhWemRDQndjbTkyYVdSbElHbGtJR2x1SUdOaGJHd2dkRzhnWjJWMElHRjFaR2wwSUhKbFkyOXlaSE11SnlsY2JpQWdmVnh1SUNCamIyNXpkQ0JiWVhWa2FYUk9ZVzFsTENCMFlYSm5aWFJKWkYwZ1BTQnBaQzV6Y0d4cGRDZ3ZYRnd2S0M0cktTOHBYRzRnSUdsbUlDaGhkV1JwZEU1aGJXVWdQVDA5SUhWdVpHVm1hVzVsWkNCOGZDQjBZWEpuWlhSSlpDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLR0JOWVd4bWIzSnRaV1FnWVhWa2FYUWdjbVZqYjNKa0lFbEVJQ2NrZTJsa2ZTY3VJRk5vYjNWc1pDQm9ZWFpsSUdadmNtMGdKenhoZFdScGRDQnVZVzFsUGk4OGRHRnlaMlYwSUVsRVBpY3VZQ2xjYmlBZ2ZWeHVJQ0J5WlhSMWNtNGdXMkYxWkdsMFRtRnRaU3dnZEdGeVoyVjBTV1JkWEc1OVhHNWNiaThxS2x4dUtpQlRhVzVqWlNCdmRYSWdaR0YwWVNCcGN5QmpiMjF3YkdWMFpTQmhjeUJwY3l3Z2RHaHBjeUJxZFhOMElHMWhhMlZ6SUdFZ1kyOXdlU0JtYjNJZ2MyRm1aWFI1SjNNZ2MyRnJaUzVjYmlvdlhHNWpiMjV6ZENCMGIxTjBZVzVrWVd4dmJtVWdQU0FvWkdGMFlTd2dZWFZrYVhST1lXMWxMQ0IwWVhKblpYUkpaQ2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQmJaRzl0WVdsdVhTQTlJR0YxWkdsMFRtRnRaUzV6Y0d4cGRDZ3ZMU2d1S3lrdktWeHVJQ0J5WlhSMWNtNGdUMkpxWldOMExtRnpjMmxuYmloN1hHNGdJQ0FnYVdRZ09pQmdKSHRoZFdScGRFNWhiV1Y5THlSN2RHRnlaMlYwU1dSOVlDeGNiaUFnSUNCa2IyMWhhVzVjYmlBZ2ZTeGNiaUFnWkdGMFlTNWhkV1JwZEZKbFkyOXlaSE5iWkc5dFlXbHVYVnRoZFdScGRFNWhiV1ZkVzNSaGNtZGxkRWxrWFNsY2JuMWNibHh1Wlhod2IzSjBJSHNnWjJWMExDQnNhWE4wTENCd1pYSnphWE4wTENCMWNHUmhkR1VnZlZ4dUlpd2lhVzF3YjNKMElIc2dSWFpoYkhWaGRHOXlJSDBnWm5KdmJTQW5RR3hwY1hWcFpDMXNZV0p6TDJOdmJtUnBkR2x2YmkxbGRtRnNKMXh1WEc1cGJYQnZjblFnS2lCaGN5QmhkV1JwZEZKbFkyOXlaSE1nWm5KdmJTQW5MaTlCZFdScGRGSmxZMjl5WkhNblhHNWNiaThxS2x4dUtpQlFkV0pzYVdNZ1FWQkpJR1p2Y2lCdFlXNWhaMmx1WnlCMGFHbHlaQzF3WVhKMGVTQmhZMk52ZFc1MElISmxZMjl5WkhNdUlGVnpaWE1nZEdobElHQkJZMk52ZFc1MGMyQWdiR2xpY21GeWVTd2dkMmhwWTJnZ1lXTjBkV0ZzYkhrZ2FXMXdiR1Z0Wlc1MGN5QjBhR1ZjYmlvZ1puVnVZM1JwYjI1ekxpQlVhR1VnYkdsaWNtRnllU0JwY3lCemNHeHBkQ0JzYVd0bElIUm9hWE1nZEc4Z2JXRnJaU0IwWlhOMGFXNW5JR1ZoYzJsbGNpNWNiaW92WEc1amIyNXpkQ0JCZFdScGRGSmxZMjl5WkhOQlVFa2dQU0JqYkdGemN5QjdYRzRnSUdOdmJuTjBjblZqZEc5eUtHOXlaeWtnZTF4dUlDQWdJSFJvYVhNdWIzSm5JRDBnYjNKblhHNGdJQ0FnZEdocGN5NWphR1ZqYTBOdmJtUnBkR2x2YmlBOUlFRjFaR2wwVW1WamIzSmtjMEZRU1M1amFHVmphME52Ym1ScGRHbHZibHh1WEc0Z0lDQWdkR2hwY3k1clpYa2dQU0FuYVdRblhHNGdJSDFjYmx4dUlDQm5aWFFvYVdRcElIc2djbVYwZFhKdUlHRjFaR2wwVW1WamIzSmtjeTVuWlhRb2RHaHBjeTV2Y21jdWFXNXVaWEpUZEdGMFpTd2dhV1FwSUgxY2JseHVJQ0JzYVhOMEtHOXdkR2x2Ym5NcElIc2djbVYwZFhKdUlHRjFaR2wwVW1WamIzSmtjeTVzYVhOMEtIUm9hWE11YjNKbkxtbHVibVZ5VTNSaGRHVXNJRzl3ZEdsdmJuTXBJSDFjYmx4dUlDQndaWEp6YVhOMEtHOXdkR2x2Ym5NcElIc2djbVYwZFhKdUlHRjFaR2wwVW1WamIzSmtjeTV3WlhKemFYTjBLSFJvYVhNdWIzSm5MbWx1Ym1WeVUzUmhkR1VzSUc5d2RHbHZibk1wSUgxY2JseHVJQ0IxY0dSaGRHVW9ZWFZrYVhSU1pXTnZjbVFwSUhzZ2NtVjBkWEp1SUdGMVpHbDBVbVZqYjNKa2N5NTFjR1JoZEdVb2RHaHBjeTV2Y21jdWFXNXVaWEpUZEdGMFpTd2dZWFZrYVhSU1pXTnZjbVFwSUgxY2JuMWNibHh1THlvcVhHNHFJRTlpYkdsbmFYUnZjbmtnSjJOb1pXTnJRMjl1WkdsMGFXOXVKeUJtZFc1amRHbHZiaUJ3Y205MmFXUmxaQ0JpZVNCMGFHVWdRVkJKSUdadmNpQndjbTlqWlhOemFXNW5JR2x1WTJ4MWMybHZiaUJ2Y2lCbGVHTnNkWE5wYjI0Z2IyWWdRV05qYjNWdWRDQjBZWEpuWlhSeklHbHVYRzRxSUdGdUlHRjFaR2wwTGlCWFpTQmtieUIwYUdseklIZGxhWEprSUNka1pXWnBibVZRY205d1pYSjBlU2NnZEdocGJtY2dZbVZqWVhWelpTQnBkQ0JsWm1abFkzUnBkbVZzZVNCbmFYWmxjeUIxY3lCaElDZHpkR0YwYVdNZ1kyOXVjM1FuWEc0cUwxeHVZMjl1YzNRZ1kyaGxZMnREYjI1a2FYUnBiMjRnUFNBb1kyOXVaR2wwYVc5dUxDQndjbTlrZFdOMFVtVmpLU0E5UGlCN1hHNGdJR052Ym5OMElIQmhjbUZ0WlhSbGNuTWdQU0JQWW1wbFkzUXVZWE56YVdkdUtGeHVJQ0FnSUh0Y2JpQWdJQ0FnSUZORlExOVVVa2xXU1VGTUlEb2dNU3hjYmlBZ0lDQWdJRUZNVjBGWlV5QWdJQ0FnSURvZ01TeGNiaUFnSUNBZ0lFNUZWa1ZTSUNBZ0lDQWdJRG9nTUN4Y2JpQWdJQ0FnSUU1UFRrVWdJQ0FnSUNBZ0lEb2dNQ3hjYmlBZ0lDQWdJRXhQVnlBZ0lDQWdJQ0FnSURvZ01TeGNiaUFnSUNBZ0lFMVBSRVZTUVZSRklDQWdJRG9nTWl4Y2JpQWdJQ0FnSUVoSlIwZ2dJQ0FnSUNBZ0lEb2dNeXhjYmlBZ0lDQWdJRVZZU1ZOVVJVNVVTVUZNSURvZ05GeHVJQ0FnSUgwc1hHNGdJQ0FnY0hKdlpIVmpkRkpsWXk1d1lYSmhiV1YwWlhKelhHNGdJQ2xjYmx4dUlDQmpiMjV6ZENCNlpYSnZVbVZ6SUQwZ1cxMWNiaUFnWTI5dWMzUWdaWFpoYkhWaGRHOXlJRDBnYm1WM0lFVjJZV3gxWVhSdmNpaDdJSEJoY21GdFpYUmxjbk1zSUhwbGNtOVNaWE1nZlNsY2JpQWdjbVYwZFhKdUlHVjJZV3gxWVhSdmNpNWxkbUZzVkhKMWRHZ29ZMjl1WkdsMGFXOXVLVnh1ZlZ4dVhHNVBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvUVhWa2FYUlNaV052Y21SelFWQkpMQ0FuWTJobFkydERiMjVrYVhScGIyNG5MQ0I3WEc0Z0lIWmhiSFZsSUNBZ0lDQWdJQ0E2SUdOb1pXTnJRMjl1WkdsMGFXOXVMRnh1SUNCM2NtbDBZV0pzWlNBZ0lDQWdPaUJtWVd4elpTeGNiaUFnWlc1MWJXVnlZV0pzWlNBZ0lEb2dkSEoxWlN4Y2JpQWdZMjl1Wm1sbmRYSmhZbXhsSURvZ1ptRnNjMlZjYm4wcFhHNWNibVY0Y0c5eWRDQjdJRUYxWkdsMFVtVmpiM0prYzBGUVNTQjlYRzRpTENKMllYSWdZWEp5WVhsTWFXdGxWRzlCY25KaGVTQTlJSEpsY1hWcGNtVW9YQ0l1TDJGeWNtRjVUR2xyWlZSdlFYSnlZWGt1YW5OY0lpazdYRzVjYm1aMWJtTjBhVzl1SUY5aGNuSmhlVmRwZEdodmRYUkliMnhsY3loaGNuSXBJSHRjYmlBZ2FXWWdLRUZ5Y21GNUxtbHpRWEp5WVhrb1lYSnlLU2tnY21WMGRYSnVJR0Z5Y21GNVRHbHJaVlJ2UVhKeVlYa29ZWEp5S1R0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWVhKeVlYbFhhWFJvYjNWMFNHOXNaWE03WEc1dGIyUjFiR1V1Wlhod2IzSjBjMXRjSW1SbFptRjFiSFJjSWwwZ1BTQnRiMlIxYkdVdVpYaHdiM0owY3l3Z2JXOWtkV3hsTG1WNGNHOXlkSE11WDE5bGMwMXZaSFZzWlNBOUlIUnlkV1U3SWl3aVpuVnVZM1JwYjI0Z1gybDBaWEpoWW14bFZHOUJjbkpoZVNocGRHVnlLU0I3WEc0Z0lHbG1JQ2gwZVhCbGIyWWdVM2x0WW05c0lDRTlQU0JjSW5WdVpHVm1hVzVsWkZ3aUlDWW1JRk41YldKdmJDNXBkR1Z5WVhSdmNpQnBiaUJQWW1wbFkzUW9hWFJsY2lrcElISmxkSFZ5YmlCQmNuSmhlUzVtY205dEtHbDBaWElwTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJRjlwZEdWeVlXSnNaVlJ2UVhKeVlYazdYRzV0YjJSMWJHVXVaWGh3YjNKMGMxdGNJbVJsWm1GMWJIUmNJbDBnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMbVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdJaXdpWm5WdVkzUnBiMjRnWDI1dmJrbDBaWEpoWW14bFUzQnlaV0ZrS0NrZ2UxeHVJQ0IwYUhKdmR5QnVaWGNnVkhsd1pVVnljbTl5S0Z3aVNXNTJZV3hwWkNCaGRIUmxiWEIwSUhSdklITndjbVZoWkNCdWIyNHRhWFJsY21GaWJHVWdhVzV6ZEdGdVkyVXVYRnh1U1c0Z2IzSmtaWElnZEc4Z1ltVWdhWFJsY21GaWJHVXNJRzV2YmkxaGNuSmhlU0J2WW1wbFkzUnpJRzExYzNRZ2FHRjJaU0JoSUZ0VGVXMWliMnd1YVhSbGNtRjBiM0pkS0NrZ2JXVjBhRzlrTGx3aUtUdGNibjFjYmx4dWJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCZmJtOXVTWFJsY21GaWJHVlRjSEpsWVdRN1hHNXRiMlIxYkdVdVpYaHdiM0owYzF0Y0ltUmxabUYxYkhSY0lsMGdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExtVjRjRzl5ZEhNdVgxOWxjMDF2WkhWc1pTQTlJSFJ5ZFdVN0lpd2lkbUZ5SUdGeWNtRjVWMmwwYUc5MWRFaHZiR1Z6SUQwZ2NtVnhkV2x5WlNoY0lpNHZZWEp5WVhsWGFYUm9iM1YwU0c5c1pYTXVhbk5jSWlrN1hHNWNiblpoY2lCcGRHVnlZV0pzWlZSdlFYSnlZWGtnUFNCeVpYRjFhWEpsS0Z3aUxpOXBkR1Z5WVdKc1pWUnZRWEp5WVhrdWFuTmNJaWs3WEc1Y2JuWmhjaUIxYm5OMWNIQnZjblJsWkVsMFpYSmhZbXhsVkc5QmNuSmhlU0E5SUhKbGNYVnBjbVVvWENJdUwzVnVjM1Z3Y0c5eWRHVmtTWFJsY21GaWJHVlViMEZ5Y21GNUxtcHpYQ0lwTzF4dVhHNTJZWElnYm05dVNYUmxjbUZpYkdWVGNISmxZV1FnUFNCeVpYRjFhWEpsS0Z3aUxpOXViMjVKZEdWeVlXSnNaVk53Y21WaFpDNXFjMXdpS1R0Y2JseHVablZ1WTNScGIyNGdYM1J2UTI5dWMzVnRZV0pzWlVGeWNtRjVLR0Z5Y2lrZ2UxeHVJQ0J5WlhSMWNtNGdZWEp5WVhsWGFYUm9iM1YwU0c5c1pYTW9ZWEp5S1NCOGZDQnBkR1Z5WVdKc1pWUnZRWEp5WVhrb1lYSnlLU0I4ZkNCMWJuTjFjSEJ2Y25SbFpFbDBaWEpoWW14bFZHOUJjbkpoZVNoaGNuSXBJSHg4SUc1dmJrbDBaWEpoWW14bFUzQnlaV0ZrS0NrN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnWDNSdlEyOXVjM1Z0WVdKc1pVRnljbUY1TzF4dWJXOWtkV3hsTG1WNGNHOXlkSE5iWENKa1pXWmhkV3gwWENKZElEMGdiVzlrZFd4bExtVjRjRzl5ZEhNc0lHMXZaSFZzWlM1bGVIQnZjblJ6TGw5ZlpYTk5iMlIxYkdVZ1BTQjBjblZsT3lJc0ltbHRjRzl5ZENBcUlHRnpJR1p6SUdaeWIyMGdKMlp6SjF4dVhHNWpiMjV6ZENCT2IyUmxJRDBnWTJ4aGMzTWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaGJibUZ0WlN3Z2NISnBiVTF1WjNKT1lXMWxMQ0J3YjNOemFXSnNaVTF1WjNKT1lXMWxjMTBzSUdsdGNHeHBaV1FnUFNCbVlXeHpaU2tnZTF4dUlDQWdJSFJvYVhNdWJtRnRaU0E5SUc1aGJXVmNiaUFnSUNCMGFHbHpMbWx0Y0d4cFpXUWdQU0JwYlhCc2FXVmtYRzRnSUNBZ2RHaHBjeTV3Y21sdFRXNW5jazVoYldVZ1BTQndjbWx0VFc1bmNrNWhiV1ZjYmlBZ0lDQjBhR2x6TG5CeWFXMU5ibWR5SUQwZ2RXNWtaV1pwYm1Wa1hHNGdJQ0FnZEdocGN5NXdiM056YVdKc1pVMXVaM0pPWVcxbGN5QTlJSEJ2YzNOcFlteGxUVzVuY2s1aGJXVnpJSHg4SUZ0ZFhHNGdJQ0FnYVdZZ0tIQnlhVzFOYm1keVRtRnRaU2tnZEdocGN5NXdiM056YVdKc1pVMXVaM0pPWVcxbGN5NTFibk5vYVdaMEtIQnlhVzFOYm1keVRtRnRaU2xjYmlBZ0lDQjBhR2x6TG5CdmMzTnBZbXhsVFc1bmNuTWdQU0JiWFZ4dUlDQWdJSFJvYVhNdVkyaHBiR1J5Wlc0Z1BTQmJYVnh1SUNCOVhHNWNiaUFnWjJWMFRtRnRaU2dwSUhzZ2NtVjBkWEp1SUhSb2FYTXVibUZ0WlNCOVhHNWNiaUFnWjJWMFVISnBiVTF1WjNJb0tTQjdJSEpsZEhWeWJpQjBhR2x6TG5CeWFXMU5ibWR5SUgxY2JseHVJQ0JuWlhSUWIzTnphV0pzWlUxdVozSnpLQ2tnZXlCeVpYUjFjbTRnZEdocGN5NXdiM056YVdKc1pVMXVaM0p6SUgxY2JseHVJQ0JuWlhSRGFHbHNaSEpsYmlncElIc2djbVYwZFhKdUlIUm9hWE11WTJocGJHUnlaVzRnZlZ4dVhHNGdJR2RsZEVSbGMyTmxibVJsYm5SektDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5vYVd4a2NtVnVMbkpsWkhWalpTZ29aR1Z6WXl3Z1kyaHBiR1FwSUQwK0lHUmxjMk11WTI5dVkyRjBLR05vYVd4a0xtZGxkRVJsYzJObGJtUmxiblJ6S0NrcExDQmJMaTR1ZEdocGN5NWphR2xzWkhKbGJsMHBYRzRnSUgxY2JseHVJQ0JuWlhSVWNtVmxUbTlrWlhNb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMmhwYkdSeVpXNHVjbVZrZFdObEtDaGtaWE5qTENCamFHbHNaQ2tnUFQ0Z1pHVnpZeTVqYjI1allYUW9ZMmhwYkdRdVoyVjBWSEpsWlU1dlpHVnpLQ2twTENCYmRHaHBjMTBwWEc0Z0lIMWNibjFjYmx4dVkyOXVjM1FnVDNKblUzUnlkV04wZFhKbElEMGdZMnhoYzNNZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lobWFXeGxUbUZ0WlN3Z2NtOXNaWE1wSUh0Y2JpQWdJQ0JqYjI1emRDQnViMlJsY3lBOUlFcFRUMDR1Y0dGeWMyVW9abk11Y21WaFpFWnBiR1ZUZVc1aktHWnBiR1ZPWVcxbEtTa3ViV0Z3S0hJZ1BUNGdibVYzSUU1dlpHVW9jaWtwWEc0Z0lDQWdkR2hwY3k1eWIyOTBjeUE5SUZ0ZFhHNWNiaUFnSUNCamIyNXpkQ0J3Y205alpYTnpUbTlrWlNBOUlDaHViMlJsS1NBOVBpQjdYRzRnSUNBZ0lDQnBaaUFvYm05a1pTNXdjbWx0VFc1bmNrNWhiV1VnUFQwOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUNBZ2JtOWtaUzV3Y21sdFRXNW5jaUE5SUc1MWJHd2dMeThnZDJocFkyZ2dhWE1nYm05MElIVnVaR1ZtYVc1bFpDd2dZblYwSUhCdmMybDBhWFpsYkhrZ2JuVnNiRnh1SUNBZ0lDQWdJQ0IwYUdsekxuSnZiM1J6TG5CMWMyZ29ibTlrWlNsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQndjbWx0VFc1bmNpQTlJRzV2WkdWekxtWnBibVFvYmlBOVBpQnVMbTVoYldVZ1BUMDlJRzV2WkdVdWNISnBiVTF1WjNKT1lXMWxLVnh1SUNBZ0lDQWdJQ0JwWmlBb2NISnBiVTF1WjNJZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1NXNTJZV3hwWkNCdmNtY2djM1J5ZFdOMGRYSmxMaUJTYjJ4bElDY2tlMjV2WkdVdWJtRnRaWDBuSUhKbFptVnlaVzVqWlhNZ1lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXJJR0J1YjI0dFpYaHBjM1JsYm5RZ2NISnBiV0Z5ZVNCdFlXNWhaMlZ5SUhKdmJHVWdKeVI3Ym05a1pTNXdjbWx0VFc1bmNrNWhiV1Y5Snk1Z0tWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYm05a1pTNXdjbWx0VFc1bmNpQTlJSEJ5YVcxTmJtZHlYRzRnSUNBZ0lDQWdJQzh2SUdOdmJuTnZiR1V1WlhKeWIzSW9ZRUZrWkdsdVp5QWtlMjV2WkdVdWJtRnRaWDBnWVhNZ1kyaHBiR1FnYjJZZ0pIdHdjbWx0VFc1bmNpNXVZVzFsZldBcElDOHZJRVJGUWxWSFhHNGdJQ0FnSUNBZ0lIQnlhVzFOYm1keUxtTm9hV3hrY21WdUxuQjFjMmdvYm05a1pTbGNibHh1SUNBZ0lDQWdJQ0J1YjJSbExuQnZjM05wWW14bFRXNW5jazVoYldWekxtWnZja1ZoWTJnb2JXNW5jazVoYldVZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzF1WjNJZ1BTQnViMlJsY3k1bWFXNWtLRzRnUFQ0Z2JpNXVZVzFsSUQwOVBTQnRibWR5VG1GdFpTbGNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2JXNW5jaUE5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWUVsdWRtRnNhV1FnYjNKbklITjBjblZqZEhWeVpTNGdVbTlzWlNBbkpIdHViMlJsTG01aGJXVjlKeUJ5WldabGNtVnVZMlZ6SUdCY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXJJR0J1YjI0dFpYaHBjM1JsYm5RZ2NHOXpjMmxpYkdVZ2JXRnVZV2RsY2lCeWIyeGxJQ2NrZTIxdVozSk9ZVzFsZlNjdVlDbGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQnViMlJsTG5CdmMzTnBZbXhsVFc1bmNuTXVjSFZ6YUNodGJtZHlLVnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCamIyNXpkQ0J5YjJ4bElEMGdjbTlzWlhNdVoyVjBLRzV2WkdVdWJtRnRaU3hjYmlBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lISmxjWFZwY21Wa0lDQTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdaWEp5VFhOblIyVnVJRG9nS0c1aGJXVXBJRDArSUdCRGIzVnNaQ0J1YjNRZ1ptbHVaQ0FrZTI1dlpHVXVhVzF3YkdsbFpDQS9JQ2RwYlhCc2FXVmtJQ2NnT2lBbkozMXliMnhsSUNja2UyNWhiV1Y5SnlCM2FHbHNaU0JpZFdsc1pHbHVaeUJ2Y21jZ2MzUnlkV04wZFhKbExtQmNiaUFnSUNBZ0lDQWdmU2xjYmlBZ0lDQWdJR1p2Y2lBb1kyOXVjM1FnZXlCdVlXMWxPaUJwYlhCc2FXVmtVbTlzWlU1aGJXVXNJRzF1WjNKUWNtOTBiMk52YkNCOUlHOW1JSEp2YkdVdWFXMXdiR2xsY3lCOGZDQmJYU2tnZTF4dUlDQWdJQ0FnSUNBdkx5QnBiWEJzYVdWa0lISnZiR1Z6SUdGeVpTQm9ZVzVrYkdWa0lHSjVJR2x1YzJWeWRHbHVaeUIwYUdVZ2FXMXdiR2xsWkNCeWIyeGxjeUJoY3lCdFlXNWhaMlZrSUdKNUlIUm9aU0J6ZFhCbGNpMXliMnhsTGlCWGFHVnVJSFJvWlNCdmNtY2dZMmhoY25RZ2FYTmNiaUFnSUNBZ0lDQWdMeThnWjJWdVpYSmhkR1ZrTENCMGFHVnpaU0IzYVd4c0lHTnZiR3hoY0hObElHbHVkRzhnWVNCemFXNW5iR1VnWlc1MGNua2diR2x6ZEdsdVp5QnRkV3gwYVhCc1pTQnliMnhsY3lCaGJtUWdkWE5wYm1jZ2RHaGxJSE4xY0dWeUlISnZiR1VnWVhNZ2RHaGxYRzRnSUNBZ0lDQWdJQzh2SUhScGRHeGxMbHh1WEc0Z0lDQWdJQ0FnSUM4dklGUlBSRTg2SUhSb2FYTWdhWE1nWVNCc2FYUjBiR1VnYldWemMzbGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FXMXdVbTlzWlNBOUlISnZiR1Z6TG1kbGRDaHBiWEJzYVdWa1VtOXNaVTVoYldVc1hHNGdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnhkV2x5WldRZ0lEb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z5Y2sxelowZGxiaUE2SUNodVlXMWxLU0E5UGlCZ1EyOTFiR1FnYm05MElHWnBibVFnYVcxd2JHbGxaQ0J5YjJ4bElDY2tlMjVoYldWOUp5QjNhR2xzWlNCaWRXbHNaR2x1WnlCdmNtY2djM1J5ZFdOMGRYSmxMbUJjYmlBZ0lDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQXZMeUJqYjI1emIyeGxMbVZ5Y205eUtHQlFjbTlqWlhOemFXNW5JR2x0Y0d4cFpXUWdjbTlzWlRvZ0pIdHBiWEJTYjJ4bExtNWhiV1Y5TGk0dVlDa2dMeThnUkVWQ1ZVZGNiaUFnSUNBZ0lDQWdhV1lnS0dsdGNGSnZiR1V1YVhOVWFYUjFiR0Z5S0NrZ0ppWWdJVzV2WkdWekxtWnBibVFvYmlBOVBpQnVMbTVoYldVZ1BUMDlJR2x0Y0ZKdmJHVXVibUZ0WlNrcElIc2dMeThnYjI1c2VTQjBhWFIxYkdGeUlISnZiR1Z6SUc1dmRDQmhiSEpsWVdSNUlHUmxabWx1WldRZ1lYSmxJR2x0Y0d4cFpXUWdhVzUwYnlCMGFHVWdiM0puSUhOMGNuVmpkSFZ5WlZ4dUlDQWdJQ0FnSUNBZ0lDOHZJR052Ym5OdmJHVXVaWEp5YjNJb1hDSkpKMjBnYVc0aFhDSXBJQzh2SUVSRlFsVkhYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1ZFOUVUem9nYVc0Z2RHaGxjbTk1TENCSklHSmxiR2xsZG1VZ2FXWWdkR2hsSUdOMWNuSmxiblFnYm05a1pTQm9ZWE1nYm04Z2JXRnVZV2RsY2l3Z2RHaGxiaUJwYlhCc2FXVmtJSEp2YkdVbmN5QmtiMjRuZENCbGFYUm9aWEl1WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdUM1JvWlhKcGQzTmxMQ0IwYUdVZ2NISnBiV0Z5ZVNCdFlXNWhaMlZ5SUdseklHVm1abVZqZEdsMlpXeDVJRzl1WlNkeklITmxiR1lzSUdsdUlIUm9aU0FuYzNWd1pYSW5JSEp2YkdVZ2IzSWdkR2hsSUhOaGJXVWdiV0Z1WVdkbGNpQmhjeUIwYUdWY2JpQWdJQ0FnSUNBZ0lDQXZMeUJ6ZFhCbGNpQnliMnhsTENCa1pYQmxibVJwYm1jZ2IyNGdkR2hsSUcxaGJtRm5aWElnY0hKdmRHOWpiMnd1WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdZMjl1YzI5c1pTNWxjbkp2Y2loY0lseGNibHhjYmtobGVUcGNYRzVjSWl3Z2NtOXNaU3dnYm05a1pTd2dYQ0pjWEc1Y1hHNWNJaWt2THlCRVJVSlZSMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzFoYm1GbmFXNW5VbTlzWlU1aGJXVWdQU0J0Ym1keVVISnZkRzlqYjJ3Z1BUMDlJQ2R6Wld4bUoxeHVJQ0FnSUNBZ0lDQWdJQ0FnUHlCeWIyeGxMbTVoYldWY2JpQWdJQ0FnSUNBZ0lDQWdJRG9nYlc1bmNsQnliM1J2WTI5c0lEMDlQU0FuYzJGdFpTZGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1B5QnViMlJsTG5CeWFXMU5ibWR5VG1GdFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBNklIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1ZXNXJiM2R1SUNodmNpQjFibVJsWm1sdVpXUS9LU0J0WVc1aFoyVnlJSEJ5YjNSdlkyOXNJQ2NrZTIxdVozSlFjbTkwYjJOdmJIMG5JR1p2ZFc1a0lIZG9hV3hsSUhCeWIyTmxjM05wYm1jZ2IzSm5JSE4wY25WamRIVnlaUzVnS1Z4dUlDQWdJQ0FnSUNBZ0lDOHZJRlJQUkU4NklITjFjSEJ2Y25RZ2IzQjBhVzl1WVd3Z2JXRnVZV2RsY25NdVhHNGdJQ0FnSUNBZ0lDQWdjSEp2WTJWemMwNXZaR1VvYm1WM0lFNXZaR1VvVzJsdGNHeHBaV1JTYjJ4bFRtRnRaU3dnYldGdVlXZHBibWRTYjJ4bFRtRnRaU3dnYm5Wc2JGMHNJSFJ5ZFdVcEtWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1ptOXlJQ2hqYjI1emRDQnViMlJsSUc5bUlHNXZaR1Z6S1NCN1hHNGdJQ0FnSUNCd2NtOWpaWE56VG05a1pTaHViMlJsS1Z4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5OMElHOXlaMUp2YkdWeklEMGdkR2hwY3k1blpYUk9iMlJsY3lncExtMWhjQ2h1SUQwK0lHNHVaMlYwVG1GdFpTZ3BLVnh1SUNBZ0lDOHZJR05vWldOcklHRnNiQ0J2Y21jZ2NtOXNaU0J1WVcxbGN5QnlaV1psY21WdVkyVWdaR1ZtYVc1bFpDQnliMnhsYzF4dUlDQWdJR052Ym5OMElIVnVaR1ZtYVc1bFpGSnZiR1Z6SUQwZ2IzSm5VbTlzWlhNdVptbHNkR1Z5S0NoeWIyeGxUbUZ0WlNrZ1BUNGdjbTlzWlhNdVoyVjBLSEp2YkdWT1lXMWxLU0E5UFQwZ2RXNWtaV1pwYm1Wa0tWeHVJQ0FnSUdsbUlDaDFibVJsWm1sdVpXUlNiMnhsY3k1c1pXNW5kR2dnUGlBd0tTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0owWnZkVzVrSUhWdVpHVm1hVzVsWkNCeWIyeGxJSEpsWm1WeVpXNWpaU2RjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXJJR0FrZTNWdVpHVm1hVzVsWkZKdmJHVnpMbXhsYm1kMGFDQStJREVnUHlBbmN5Y2dPaUFuSjMwNklDUjdkVzVrWldacGJtVmtVbTlzWlhNdWFtOXBiaWduTENBbktYMWdLVnh1SUNBZ0lIMWNiaUFnSUNBdkx5QmphR1ZqYXlCbWIzSWdaSFZ3YkdsallYUmxJRzl5WnlCeWIyeGxjMXh1SUNBZ0lHTnZibk4wSUdSMWNHVlNiMnhsY3lBOUlHOXlaMUp2YkdWekxtWnBiSFJsY2lnb2JtRnRaU3dnYVc1a1pYZ3BJRDArSUc5eVoxSnZiR1Z6TG1sdVpHVjRUMllvYm1GdFpTa2dJVDA5SUdsdVpHVjRLVnh1SUNBZ0lHbG1JQ2hrZFhCbFVtOXNaWE11YkdWdVozUm9JRDRnTUNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCR2IzVnVaQ0J1YjI0dGRXNXBjWFZsSUhKdmJHVWtlMlIxY0dWU2IyeGxjeTVzWlc1bmRHZ2dQaUF4SUQ4Z0ozTW5JRG9nSnlkOUlHQmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBcklHQnlaV1psY21WdVkyVnpJR2x1SUc5eVp5QnpkSEoxWTNSMWNtVTZJQ1I3WkhWd1pWSnZiR1Z6TG1wdmFXNG9KeXdnSnlsOVlDbGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm5aWFJTYjI5MGN5Z3BJSHNnY21WMGRYSnVJRnN1TGk1MGFHbHpMbkp2YjNSelhTQjlYRzVjYmlBZ1oyVjBUbTlrWlhNb0tTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVjbTl2ZEhNdWNtVmtkV05sS0NodWIyUmxjeXdnY205dmRDa2dQVDRnYm05a1pYTXVZMjl1WTJGMEtISnZiM1F1WjJWMFZISmxaVTV2WkdWektDa3BMQ0JiWFNsY2JpQWdmVnh1WEc0Z0lHZGxkRTV2WkdWQ2VWSnZiR1ZPWVcxbEtHNWhiV1VwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1blpYUk9iMlJsY3lncExtWnBibVFvYmlBOVBpQnVMbWRsZEU1aGJXVW9LU0E5UFQwZ2JtRnRaU2xjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnZXlCUGNtZFRkSEoxWTNSMWNtVWdmVnh1SWl3aVpuVnVZM1JwYjI0Z1gzUjVjR1Z2Wmlodlltb3BJSHRjYmlBZ1hDSkFZbUZpWld3dmFHVnNjR1Z5Y3lBdElIUjVjR1Z2Wmx3aU8xeHVYRzRnSUdsbUlDaDBlWEJsYjJZZ1UzbHRZbTlzSUQwOVBTQmNJbVoxYm1OMGFXOXVYQ0lnSmlZZ2RIbHdaVzltSUZONWJXSnZiQzVwZEdWeVlYUnZjaUE5UFQwZ1hDSnplVzFpYjJ4Y0lpa2dlMXh1SUNBZ0lHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gzUjVjR1Z2WmlBOUlHWjFibU4wYVc5dUlGOTBlWEJsYjJZb2IySnFLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkSGx3Wlc5bUlHOWlhanRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdiVzlrZFd4bExtVjRjRzl5ZEhOYlhDSmtaV1poZFd4MFhDSmRJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gzUjVjR1Z2WmlBOUlHWjFibU4wYVc5dUlGOTBlWEJsYjJZb2IySnFLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiMkpxSUNZbUlIUjVjR1Z2WmlCVGVXMWliMndnUFQwOUlGd2lablZ1WTNScGIyNWNJaUFtSmlCdlltb3VZMjl1YzNSeWRXTjBiM0lnUFQwOUlGTjViV0p2YkNBbUppQnZZbW9nSVQwOUlGTjViV0p2YkM1d2NtOTBiM1I1Y0dVZ1B5QmNJbk41YldKdmJGd2lJRG9nZEhsd1pXOW1JRzlpYWp0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnYlc5a2RXeGxMbVY0Y0c5eWRITmJYQ0prWldaaGRXeDBYQ0pkSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaUzVsZUhCdmNuUnpMbDlmWlhOTmIyUjFiR1VnUFNCMGNuVmxPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRjkwZVhCbGIyWW9iMkpxS1R0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmZEhsd1pXOW1PMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITmJYQ0prWldaaGRXeDBYQ0pkSUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaUzVsZUhCdmNuUnpMbDlmWlhOTmIyUjFiR1VnUFNCMGNuVmxPeUlzSWk4dklFcFRUMDVNYjI5d0lHbHpJR0VnZEhKcGRtbGhiQ0J5WlhkdmNtc2diMllnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJSaFltVnVaeTlLVTA5T0xVeHZiM0FnWTJNNVltWTRaRE5sWXpsa016WTJNVFl3WEc1Y2JteGxkQ0J1YjJSbGN5QTlJRnRkSUM4dklIVnpaV1FnWVhNZ2RHVnRjQ0IzYjNKcmNHRmtYRzVjYm1OdmJuTjBJRXBUVDA1TWIyOXdJRDBnWTJ4aGMzTWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHZZbW9zSUdsa1VISnZjR1Z5ZEhsT1lXMWxMQ0JqYUdsc1pISmxibEJ5YjNCbGNuUjVUbUZ0WlNrZ2UxeHVJQ0FnSUhSb2FYTXVhV1FnUFNCcFpGQnliM0JsY25SNVRtRnRaVnh1SUNBZ0lIUm9hWE11WTJocGJHUnlaVzRnUFNCamFHbHNaSEpsYmxCeWIzQmxjblI1VG1GdFpWeHVJQ0FnSUhSb2FYTXVZMjkxYm5RZ1BTQXdYRzRnSUNBZ2RHaHBjeTVqYjNWdWRFNXZaR1Z6S0c5aWFpbGNiaUFnSUNCMGFHbHpMblJ2ZEdGc0lEMGdkR2hwY3k1amIzVnVkQ0FySURCY2JpQWdmVnh1WEc0Z0lHbHpSVzF3ZEhrb2IySnFLU0I3WEc0Z0lDQWdabTl5SUNoMllYSWdjSEp2Y0dWeWRIa2dhVzRnYjJKcUtTQjdJQzh2SUdWemJHbHVkQzFrYVhOaFlteGxMV3hwYm1VZ1ozVmhjbVF0Wm05eUxXbHVYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSeWRXVmNiaUFnZlZ4dVhHNGdJR052ZFc1MFRtOWtaWE1vYjJKcUtTQjdYRzRnSUNBZ2RtRnlJSFJvWVhRZ1BTQjBhR2x6WEc0Z0lDQWdkR2hwY3k1amIzVnVkQ3NyWEc0Z0lDQWdjbVYwZFhKdUlDaG1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJR2xtSUNnaGIySnFJSHg4SUhSb1lYUXVhWE5GYlhCMGVTaHZZbW9wS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h2WW1wYmRHaGhkQzVqYUdsc1pISmxibDBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnZZbXBiZEdoaGRDNWphR2xzWkhKbGJsMHVabTl5UldGamFDaG1kVzVqZEdsdmJpaGphR2xzWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoaGRDNWpiM1Z1ZEU1dlpHVnpLR05vYVd4a0tWeHVJQ0FnSUNBZ0lDQWdJSDBwWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5S0NrcFhHNGdJSDFjYmx4dUlDQm5aVzVsY21GMFpVTnNiMjVsS0c5aWFpa2dlMXh1SUNBZ0lIWmhjaUIwWVhKblpYUWdQU0I3ZlZ4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnYVc0Z2IySnFLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FTQWhQVDBnZEdocGN5NWphR2xzWkhKbGJpa2dlMXh1SUNBZ0lDQWdJQ0IwWVhKblpYUmJhVjBnUFNCdlltcGJhVjFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhSaGNtZGxkRnh1SUNCOVhHNWNiaUFnWm1sdVpFNXZaR1ZDZVVsa0tHOWlhaXdnYVdRc0lHTmhiR3hpWVdOcktTQjdYRzRnSUNBZ2FXWWdLRzlpYWx0MGFHbHpMbWxrWFNBOVBUMGdhV1FnZkh3Z2IySnFMbWxrY3k1emIyMWxLQ2gwWlhOMFNXUXBJRDArSUhSbGMzUkpaQ0E5UFQwZ2FXUXBLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtTnZkVzUwSUQwZ2RHaHBjeTUwYjNSaGJDQXJJREJjYmlBZ0lDQWdJR05oYkd4aVlXTnJLRzUxYkd3c0lHOWlhaWxjYmlBZ0lDQjlYRzRnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVqYjNWdWRDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1OdmRXNTBJRDBnZEdocGN5NTBiM1JoYkNBcklEQmNiaUFnSUNBZ0lDQWdZMkZzYkdKaFkyc29ibVYzSUVWeWNtOXlLQ2QwYUdVZ2JtOWtaU0JrYjJWeklHNXZkQ0JsZUdsemRDY3BLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdkR2hwY3k1amIzVnVkQzB0WEc0Z0lDQWdJQ0JwWmlBb2IySnFXM1JvYVhNdVkyaHBiR1J5Wlc1ZEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCMGFHRjBJRDBnZEdocGMxeHVJQ0FnSUNBZ0lDQnZZbXBiZEdocGN5NWphR2xzWkhKbGJsMHVabTl5UldGamFDaG1kVzVqZEdsdmJpaHViMlJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2hoZEM1bWFXNWtUbTlrWlVKNVNXUW9ibTlrWlN3Z2FXUXNJR05oYkd4aVlXTnJLVnh1SUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUcxaGRHTm9RMjl1WkdsMGFXOXVjeWh2WW1vc0lHTnZibVJwZEdsdmJuTXBJSHRjYmlBZ0lDQjJZWElnWm14aFp5QTlJSFJ5ZFdWY2JpQWdJQ0JQWW1wbFkzUXVhMlY1Y3loamIyNWthWFJwYjI1ektTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUtHbDBaVzBwSUh0Y2JpQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyOXVaR2wwYVc5dWMxdHBkR1Z0WFNBOVBUMGdKM04wY21sdVp5Y2dmSHdnZEhsd1pXOW1JR052Ym1ScGRHbHZibk5iYVhSbGJWMGdQVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h2WW1wYmFYUmxiVjBnSVQwOUlHTnZibVJwZEdsdmJuTmJhWFJsYlYwcElIdGNiaUFnSUNBZ0lDQWdJQ0JtYkdGbklEMGdabUZzYzJWY2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWld4elpTQnBaaUFvWTI5dVpHbDBhVzl1YzF0cGRHVnRYU0JwYm5OMFlXNWpaVzltSUZKbFowVjRjQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9JV052Ym1ScGRHbHZibk5iYVhSbGJWMHVkR1Z6ZENodlltcGJhWFJsYlYwcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnWm14aFp5QTlJR1poYkhObFhHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sWEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdWc2MyVWdhV1lnS0hSNWNHVnZaaUJqYjI1a2FYUnBiMjV6VzJsMFpXMWRJRDA5UFNBbmIySnFaV04wSnlrZ2UxeHVJQ0FnSUNBZ0lDQlBZbXBsWTNRdWEyVjVjeWhqYjI1a2FYUnBiMjV6VzJsMFpXMWRLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVLSE4xWW1sMFpXMHBJSHRjYmlBZ0lDQWdJQ0FnSUNCemQybDBZMmdnS0hOMVltbDBaVzBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpZWE5sSUNjK0p6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0VvYjJKcVcybDBaVzFkSUQ0Z1kyOXVaR2wwYVc5dWMxdHBkR1Z0WFZ0emRXSnBkR1Z0WFNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1pteGhaeUE5SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ1kyRnpaU0FuUENjNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hLRzlpYWx0cGRHVnRYU0E4SUdOdmJtUnBkR2x2Ym5OYmFYUmxiVjFiYzNWaWFYUmxiVjBwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdac1lXY2dQU0JtWVd4elpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdOaGMyVWdKejQ5SnpvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRW9iMkpxVzJsMFpXMWRJRDQ5SUdOdmJtUnBkR2x2Ym5OYmFYUmxiVjFiYzNWaWFYUmxiVjBwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdac1lXY2dQU0JtWVd4elpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdOaGMyVWdKenc5SnpvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRW9iMkpxVzJsMFpXMWRJRHc5SUdOdmJtUnBkR2x2Ym5OYmFYUmxiVjFiYzNWaWFYUmxiVjBwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdac1lXY2dQU0JtWVd4elpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGclhHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUdOaGMyVWdKeUU5UFNjNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hLRzlpYWx0cGRHVnRYU0FoUFQwZ1kyOXVaR2wwYVc5dWMxdHBkR1Z0WFZ0emRXSnBkR1Z0WFNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1pteGhaeUE5SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXdGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVnh1SUNBZ0lDQWdJQ0JwWmlBb0lXWnNZV2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlZjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwWEc0Z0lDQWdhV1lnS0NGbWJHRm5LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdabUZzYzJWY2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlIUnlkV1ZjYmlBZ2ZWeHVYRzRnSUdacGJtUk9iMlJsY3lodlltb3NJR052Ym1ScGRHbHZibk1zSUdOaGJHeGlZV05yS1NCN1hHNGdJQ0FnZG1GeUlIUm9ZWFFnUFNCMGFHbHpYRzRnSUNBZ2RtRnlJR052Y0hrZ1BTQmJYU0F2THlCMGFITWdjMmhoYkd4dmR5QmpiM0I1SUc5bUlHNXZaR1Z6SUdGeWNtRjVYRzRnSUNBZ2NtVjBkWEp1SUNobWRXNWpkR2x2Ymlodlltb3NJR052Ym1ScGRHbHZibk1zSUdOaGJHeGlZV05yS1NCN1hHNGdJQ0FnSUNCcFppQW9kR2hoZEM1dFlYUmphRU52Ym1ScGRHbHZibk1vYjJKcUxDQmpiMjVrYVhScGIyNXpLU2tnZTF4dUlDQWdJQ0FnSUNCdWIyUmxjeTV3ZFhOb0tHOWlhaWxjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9ZWFF1WTI5MWJuUWdQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdGMExtTnZkVzUwSUQwZ2RHaGhkQzUwYjNSaGJDQXJJREJjYmlBZ0lDQWdJQ0FnSUNCamIzQjVJRDBnYm05a1pYTXVjMnhwWTJVb01DbGNiaUFnSUNBZ0lDQWdJQ0J1YjJSbGN5QTlJRnRkWEc0Z0lDQWdJQ0FnSUNBZ1kyRnNiR0poWTJzb2JuVnNiQ3dnWTI5d2VTbGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYUdGMExtTnZkVzUwTFMxY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaGhkQzVqYjNWdWRDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvWVhRdVkyOTFiblFnUFNCMGFHRjBMblJ2ZEdGc0lDc2dNRnh1SUNBZ0lDQWdJQ0FnSUdOdmNIa2dQU0J1YjJSbGN5NXpiR2xqWlNnd0tWeHVJQ0FnSUNBZ0lDQWdJRzV2WkdWeklEMGdXMTFjYmlBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXlodWRXeHNMQ0JqYjNCNUtWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSFJvWVhRdVkyOTFiblF0TFZ4dUlDQWdJQ0FnSUNCcFppQW9iMkpxVzNSb1lYUXVZMmhwYkdSeVpXNWRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2IySnFXM1JvWVhRdVkyaHBiR1J5Wlc1ZExtWnZja1ZoWTJnb1puVnVZM1JwYjI0b1kyaHBiR1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvWVhRdVptbHVaRTV2WkdWektHTm9hV3hrTENCamIyNWthWFJwYjI1ekxDQmpZV3hzWW1GamF5bGNiaUFnSUNBZ0lDQWdJQ0I5S1Z4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNodlltb3NJR052Ym1ScGRHbHZibk1zSUdOaGJHeGlZV05yS1NsY2JpQWdmVnh1WEc0Z0lHWnBibVJRWVhKbGJuUW9iMkpxTENCdWIyUmxMQ0JqWVd4c1ltRmpheXdnYm1WbFpFTnNaV0Z1VG05a1pTa2dlMXh1SUNBZ0lHTnZibk4wSUhSb1lYUWdQU0IwYUdselhHNGdJQ0FnZEdocGN5NW1hVzVrVG05a1pVSjVTV1FvYjJKcUxDQnViMlJsTG5CaGNtVnVkRjlwWkN3Z0tHVnljaXdnY0dGeVpXNTBLU0E5UGlCN1hHNGdJQ0FnSUNCcFppQW9aWEp5S1NCallXeHNZbUZqYXlodVpYY2dSWEp5YjNJb1lFTnZkV3hrSUc1dmRDQm1hVzVrSUhCaGNtVnVkQzRnSkh0bGNuSjlZQ2twWEc0Z0lDQWdJQ0JsYkhObElIdGNiaUFnSUNBZ0lDQWdhV1lnS0c1bFpXUkRiR1ZoYms1dlpHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXlodWRXeHNMQ0IwYUdGMExtZGxibVZ5WVhSbFEyeHZibVVvY0dGeVpXNTBLU2xjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXlodWRXeHNMQ0J3WVhKbGJuUXBYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVnh1SUNCOVhHNWNiaUFnWm1sdVpGTnBZbXhwYm1kektHOWlhaXdnYm05a1pTd2dZMkZzYkdKaFkyc3BJSHRjYmlBZ0lDQjJZWElnZEdoaGRDQTlJSFJvYVhOY2JpQWdJQ0IwYUdsekxtWnBibVJRWVhKbGJuUW9iMkpxTENCdWIyUmxMQ0JtZFc1amRHbHZiaWhsY25Jc0lIQmhjbVZ1ZENrZ2UxeHVJQ0FnSUNBZ2FXWWdLR1Z5Y2lrZ2UxeHVJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aHVaWGNnUlhKeWIzSW9KMmwwY3lCemFXSnNhVzVuSUc1dlpHVnpJR1J2SUc1dmRDQmxlR2x6ZENjcEtWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnphV0pzYVc1bmN5QTlJRnRkWEc0Z0lDQWdJQ0FnSUhCaGNtVnVkRnQwYUdGMExtTm9hV3hrY21WdVhTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUtHbDBaVzBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYVhSbGJWdDBhR0YwTG1sa1hTQWhQVDBnYm05a1pWdDBhR0YwTG1sa1hTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MybGliR2x1WjNNdWNIVnphQ2gwYUdGMExtZGxibVZ5WVhSbFEyeHZibVVvYVhSbGJTa3BYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aHVkV3hzTENCemFXSnNhVzVuY3lsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5TENCbVlXeHpaU2xjYmlBZ2ZWeHVYRzRnSUdacGJtUkJibU5sYzNSdmNuTW9iMkpxTENCdWIyUmxMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQWdJSFpoY2lCMGFHRjBJRDBnZEdocGMxeHVJQ0FnSUdsbUlDaHViMlJsVzNSb2FYTXVhV1JkSUQwOVBTQnZZbXBiZEdocGN5NXBaRjBwSUh0Y2JpQWdJQ0FnSUhaaGNpQmpiM0I1SUQwZ2JtOWtaWE11YzJ4cFkyVW9NQ2xjYmlBZ0lDQWdJRzV2WkdWeklEMGdXMTFjYmlBZ0lDQWdJR05oYkd4aVlXTnJLRzUxYkd3c0lHTnZjSGtwWEc0Z0lDQWdmVnh1SUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NW1hVzVrVUdGeVpXNTBLRzlpYWl3Z2JtOWtaU3dnWm5WdVkzUnBiMjRvWlhKeUxDQndZWEpsYm5RcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dWeWNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUdOaGJHeGlZV05yS0c1bGR5QkZjbkp2Y2lnbmFYUnpJR0Z1WTJWemRHOXlJRzV2WkdWeklHUnZJRzV2ZENCbGVHbHpkQ2NwS1Z4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lHNXZaR1Z6TG5CMWMyZ29jR0Z5Wlc1MEtWeHVJQ0FnSUNBZ0lDQWdJSFJvWVhRdVptbHVaRUZ1WTJWemRHOXljeWh2WW1vc0lIQmhjbVZ1ZEN3Z1kyRnNiR0poWTJzcFhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMHBYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQjdJRXBUVDA1TWIyOXdJSDFjYmlJc0lpOHFLbHh1S2lCQ1lYTnBZeUJ0WlhSb2IyUnpJR1p2Y2lCaFkyTmxjM05wYm1jZ2RHaGxJR0ZqWTI5MWJuUnpJR1JoZEdFdUlFNXZkR1VnZEdoaGRDQm1kVzVqZEdsdmJtRnNhWFI1SUdseklITndiR2wwSUhWd0lHeHBhMlVnZEdocGN5QjBieUJ0WVd0bElIUm9aWE5sSUdaMWJtTjBhVzl1YzF4dUtpQmxZWE5wWlhJZ2RHOGdkVzVwZENCMFpYTjBMbHh1S2k5Y2JseHVMeW9xWEc0cUlGSmxkSEpwWlhabGN5QmhJSE5wYm1kc1pTQmhZMk52ZFc1MElHVnVkSEo1SUdKNUlHNWhiV1V1WEc0cUwxeHVZMjl1YzNRZ1oyVjBJRDBnS0dSaGRHRXNJRzVoYldVcElEMCtJR1JoZEdFL0xuUm9hWEprVUdGeWRIbEJZMk52ZFc1MGN6OHVXMjVoYldWZElDWW1JSFJ2VTNSaGJtUmhiRzl1WlNoa1lYUmhMQ0J1WVcxbEtWeHVYRzVqYjI1emRDQnNhWE4wSUQwZ0tHUmhkR0VwSUQwK0lFOWlhbVZqZEM1clpYbHpLR1JoZEdFL0xuUm9hWEprVUdGeWRIbEJZMk52ZFc1MGN5QjhmQ0I3ZlNrdWMyOXlkQ2dwTG0xaGNDZ29hMlY1S1NBOVBpQjBiMU4wWVc1a1lXeHZibVVvWkdGMFlTd2dhMlY1S1NsY2JseHVMeThnYUdWc2NHVnlMMjV2YmkxbGVIQnZjblJsWkNCcGRHVnRjMXh1THlvcVhHNHFJRU55WldGMFpYTWdZU0J1WlhjdlkyOXdlU0J2WmlCMGFHVWdZV05qYjNWdWRDQmtZWFJoSUhkcGRHZ2dZVzRnWVdSa2FYUnBiMjVoYkNBbmJtRnRaU2NnWm1sbGJHUXVJRlJvWlNCdVlXMWxJSE5vYjNWc1pDQmlaU0IwYUdVZ2EyVjVJSFpoYkhWbElIZG9hV05vWEc0cUlIQnZhVzUwWldRZ2RHOGdkR2hsSUdGalkyOTFiblFnWkdGMFlTNWNiaW92WEc1amIyNXpkQ0IwYjFOMFlXNWtZV3h2Ym1VZ1BTQW9aR0YwWVN3Z2JtRnRaU2tnUFQ0Z1QySnFaV04wTG1GemMybG5iaWg3ZlN3Z1pHRjBZUzUwYUdseVpGQmhjblI1UVdOamIzVnVkSE5iYm1GdFpWMHNJSHNnYm1GdFpTQjlLVnh1WEc1bGVIQnZjblFnZXlCblpYUXNJR3hwYzNRZ2ZWeHVJaXdpYVcxd2IzSjBJSHNnUlhaaGJIVmhkRzl5SUgwZ1puSnZiU0FuUUd4cGNYVnBaQzFzWVdKekwyTnZibVJwZEdsdmJpMWxkbUZzSjF4dVhHNXBiWEJ2Y25RZ0tpQmhjeUJoWTJOdmRXNTBjeUJtY205dElDY3VMMEZqWTI5MWJuUnpKMXh1WEc0dktpcGNiaW9nVUhWaWJHbGpJRUZRU1NCbWIzSWdiV0Z1WVdkcGJtY2dkR2hwY21RdGNHRnlkSGtnWVdOamIzVnVkQ0J5WldOdmNtUnpMaUJWYzJWeklIUm9aU0JnUVdOamIzVnVkSE5nSUd4cFluSmhjbmtzSUhkb2FXTm9JR0ZqZEhWaGJHeDVJR2x0Y0d4bGJXVnVkSE1nZEdobFhHNHFJR1oxYm1OMGFXOXVjeTRnVkdobElHeHBZbkpoY25rZ2FYTWdjM0JzYVhRZ2JHbHJaU0IwYUdseklIUnZJRzFoYTJVZ2RHVnpkR2x1WnlCbFlYTnBaWEl1WEc0cUwxeHVZMjl1YzNRZ1FXTmpiM1Z1ZEhOQlVFa2dQU0JqYkdGemN5QjdYRzRnSUdOdmJuTjBjblZqZEc5eUtHOXlaeWtnZTF4dUlDQWdJSFJvYVhNdWIzSm5JRDBnYjNKblhHNGdJQ0FnZEdocGN5NWphR1ZqYTBOdmJtUnBkR2x2YmlBOUlFRmpZMjkxYm5SelFWQkpMbU5vWldOclEyOXVaR2wwYVc5dVhHNWNiaUFnSUNCMGFHbHpMbXRsZVNBOUlDZHVZVzFsSjF4dUlDQjlYRzVjYmlBZ1oyVjBLRzVoYldVcElIc2djbVYwZFhKdUlHRmpZMjkxYm5SekxtZGxkQ2gwYUdsekxtOXlaeTVwYm01bGNsTjBZWFJsTENCdVlXMWxLU0I5WEc1Y2JpQWdiR2x6ZENncElIc2djbVYwZFhKdUlHRmpZMjkxYm5SekxteHBjM1FvZEdocGN5NXZjbWN1YVc1dVpYSlRkR0YwWlNrZ2ZWeHVmVnh1WEc0dktpcGNiaW9nVDJKc2FXZHBkRzl5ZVNBblkyaGxZMnREYjI1a2FYUnBiMjRuSUdaMWJtTjBhVzl1SUhCeWIzWnBaR1ZrSUdKNUlIUm9aU0JCVUVrZ1ptOXlJSEJ5YjJObGMzTnBibWNnYVc1amJIVnphVzl1SUc5eUlHVjRZMngxYzJsdmJpQnZaaUJCWTJOdmRXNTBJSFJoY21kbGRITWdhVzVjYmlvZ1lXNGdZWFZrYVhRdUlGZGxJR1J2SUhSb2FYTWdkMlZwY21RZ0oyUmxabWx1WlZCeWIzQmxjblI1SnlCMGFHbHVaeUJpWldOaGRYTmxJR2wwSUdWbVptVmpkR2wyWld4NUlHZHBkbVZ6SUhWeklHRWdKM04wWVhScFl5QmpiMjV6ZENkY2Jpb3ZYRzVqYjI1emRDQmphR1ZqYTBOdmJtUnBkR2x2YmlBOUlDaGpiMjVrYVhScGIyNHNJR0ZqWTNRcElEMCtJSHRjYmlBZ1kyOXVjM1FnY0dGeVlXMWxkR1Z5Y3lBOUlFOWlhbVZqZEM1aGMzTnBaMjRvWEc0Z0lDQWdlMXh1SUNBZ0lDQWdVMFZEWDFSU1NWWkpRVXdnT2lBeExGeHVJQ0FnSUNBZ1FVeFhRVmxUSUNBZ0lDQWdPaUF4TEZ4dUlDQWdJQ0FnVGtWV1JWSWdJQ0FnSUNBZ09pQXdMRnh1SUNBZ0lDQWdUazlPUlNBZ0lDQWdJQ0FnT2lBd0xGeHVJQ0FnSUNBZ1RFOVhJQ0FnSUNBZ0lDQWdPaUF4TEZ4dUlDQWdJQ0FnVFU5RVJWSkJWRVVnSUNBZ09pQXlMRnh1SUNBZ0lDQWdTRWxIU0NBZ0lDQWdJQ0FnT2lBekxGeHVJQ0FnSUNBZ1JWaEpVMVJGVGxSSlFVd2dPaUEwWEc0Z0lDQWdmU3hjYmlBZ0lDQmhZMk4wTG5CaGNtRnRaWFJsY25OY2JpQWdLVnh1WEc0Z0lDOHZJRlJQUkU4NklHTnlaV0YwWlNCaElHaGhibVJzZVNCamIyNTJaWEp6YVc5dUlHTnNZWE56TDJ4cFlpQm1iM0lnZEdobElITmxibk5wZEdsMmFYUjVJR052WkdWek95QlRaVzV6YVhScGRtbDBlVU52WkdVL1hHNGdJR052Ym5OMElITmxibk5wZEdsMmFYUjVRMjlrWlNBOUlHRmpZM1F1YzJWdWMybDBhWFpwZEhrZ2ZId2dKMFZZU1ZOVVJVNVVTVUZNSjF4dVhHNGdJSE4zYVhSamFDQW9jMlZ1YzJsMGFYWnBkSGxEYjJSbEtTQjdYRzRnSUdOaGMyVWdKMDVQVGtVbk9seHVJQ0FnSUhCaGNtRnRaWFJsY25NdVUwVk9VMGxVU1ZaSlZGa2dQU0F3T3lCaWNtVmhhMXh1SUNCallYTmxJQ2RNVDFjbk9seHVJQ0FnSUhCaGNtRnRaWFJsY25NdVUwVk9VMGxVU1ZaSlZGa2dQU0F4T3lCaWNtVmhhMXh1SUNCallYTmxJQ2ROVDBSRlVrRlVSU2M2WEc0Z0lDQWdjR0Z5WVcxbGRHVnljeTVUUlU1VFNWUkpWa2xVV1NBOUlESTdJR0p5WldGclhHNGdJR05oYzJVZ0owaEpSMGduT2x4dUlDQWdJSEJoY21GdFpYUmxjbk11VTBWT1UwbFVTVlpKVkZrZ1BTQXpPeUJpY21WaGExeHVJQ0JqWVhObElDZEZXRWxUVkVWT1ZFbEJUQ2M2WEc0Z0lDQWdjR0Z5WVcxbGRHVnljeTVUUlU1VFNWUkpWa2xVV1NBOUlEUTdJR0p5WldGclhHNGdJR1JsWm1GMWJIUTZYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCVmJtdHViM2R1SUhObGJuTnBkR2wyYVhSNUlHTnZaR1U2SUNja2UzTmxibk5wZEdsMmFYUjVRMjlrWlgwbkxtQXBYRzRnSUgxY2JseHVJQ0F2THlCamIyNW1hV2QxY21VZ2RHaGxJRzV2YmkxbGVHbHpkR1Z1ZENCMFlXZHpJSFJ2SUNkNlpYSnZKeUJ2ZFhSY2JpQWdZMjl1YzNRZ2VtVnliMUpsY3lBOUlGc3ZRbFZUU1U1RlUxTjhUa1ZVVjA5U1MwbE9SeTlkWEc1Y2JpQWdZMjl1YzNRZ1pYWmhiSFZoZEc5eUlEMGdibVYzSUVWMllXeDFZWFJ2Y2loN0lIQmhjbUZ0WlhSbGNuTXNJSHBsY205U1pYTWdmU2xjYmlBZ2NtVjBkWEp1SUdWMllXeDFZWFJ2Y2k1bGRtRnNWSEoxZEdnb1kyOXVaR2wwYVc5dUtWeHVmVnh1WEc1UFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29RV05qYjNWdWRITkJVRWtzSUNkamFHVmphME52Ym1ScGRHbHZiaWNzSUh0Y2JpQWdkbUZzZFdVZ0lDQWdJQ0FnSURvZ1kyaGxZMnREYjI1a2FYUnBiMjRzWEc0Z0lIZHlhWFJoWW14bElDQWdJQ0E2SUdaaGJITmxMRnh1SUNCbGJuVnRaWEpoWW14bElDQWdPaUIwY25WbExGeHVJQ0JqYjI1bWFXZDFjbUZpYkdVZ09pQm1ZV3h6WlZ4dWZTbGNibHh1Wlhod2IzSjBJSHNnUVdOamIzVnVkSE5CVUVrZ2ZWeHVJaXdpWm5WdVkzUnBiMjRnWDJGemMyVnlkRlJvYVhOSmJtbDBhV0ZzYVhwbFpDaHpaV3htS1NCN1hHNGdJR2xtSUNoelpXeG1JRDA5UFNCMmIybGtJREFwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnVW1WbVpYSmxibU5sUlhKeWIzSW9YQ0owYUdseklHaGhjMjRuZENCaVpXVnVJR2x1YVhScFlXeHBjMlZrSUMwZ2MzVndaWElvS1NCb1lYTnVKM1FnWW1WbGJpQmpZV3hzWldSY0lpazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdjMlZzWmp0Y2JuMWNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JmWVhOelpYSjBWR2hwYzBsdWFYUnBZV3hwZW1Wa08xeHViVzlrZFd4bExtVjRjRzl5ZEhOYlhDSmtaV1poZFd4MFhDSmRJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE95SXNJbVoxYm1OMGFXOXVJRjl6WlhSUWNtOTBiM1I1Y0dWUFppaHZMQ0J3S1NCN1hHNGdJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYM05sZEZCeWIzUnZkSGx3WlU5bUlEMGdUMkpxWldOMExuTmxkRkJ5YjNSdmRIbHdaVTltSUh4OElHWjFibU4wYVc5dUlGOXpaWFJRY205MGIzUjVjR1ZQWmlodkxDQndLU0I3WEc0Z0lDQWdieTVmWDNCeWIzUnZYMThnUFNCd08xeHVJQ0FnSUhKbGRIVnliaUJ2TzF4dUlDQjlPMXh1WEc0Z0lHMXZaSFZzWlM1bGVIQnZjblJ6VzF3aVpHVm1ZWFZzZEZ3aVhTQTlJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVdVpYaHdiM0owY3k1ZlgyVnpUVzlrZFd4bElEMGdkSEoxWlR0Y2JpQWdjbVYwZFhKdUlGOXpaWFJRY205MGIzUjVjR1ZQWmlodkxDQndLVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZjMlYwVUhKdmRHOTBlWEJsVDJZN1hHNXRiMlIxYkdVdVpYaHdiM0owYzF0Y0ltUmxabUYxYkhSY0lsMGdQU0J0YjJSMWJHVXVaWGh3YjNKMGN5d2diVzlrZFd4bExtVjRjRzl5ZEhNdVgxOWxjMDF2WkhWc1pTQTlJSFJ5ZFdVN0lpd2lkbUZ5SUhObGRGQnliM1J2ZEhsd1pVOW1JRDBnY21WeGRXbHlaU2hjSWk0dmMyVjBVSEp2ZEc5MGVYQmxUMll1YW5OY0lpazdYRzVjYm1aMWJtTjBhVzl1SUY5cGJtaGxjbWwwY3loemRXSkRiR0Z6Y3l3Z2MzVndaWEpEYkdGemN5a2dlMXh1SUNCcFppQW9kSGx3Wlc5bUlITjFjR1Z5UTJ4aGMzTWdJVDA5SUZ3aVpuVnVZM1JwYjI1Y0lpQW1KaUJ6ZFhCbGNrTnNZWE56SUNFOVBTQnVkV3hzS1NCN1hHNGdJQ0FnZEdoeWIzY2dibVYzSUZSNWNHVkZjbkp2Y2loY0lsTjFjR1Z5SUdWNGNISmxjM05wYjI0Z2JYVnpkQ0JsYVhSb1pYSWdZbVVnYm5Wc2JDQnZjaUJoSUdaMWJtTjBhVzl1WENJcE8xeHVJQ0I5WEc1Y2JpQWdjM1ZpUTJ4aGMzTXVjSEp2ZEc5MGVYQmxJRDBnVDJKcVpXTjBMbU55WldGMFpTaHpkWEJsY2tOc1lYTnpJQ1ltSUhOMWNHVnlRMnhoYzNNdWNISnZkRzkwZVhCbExDQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSTZJSHRjYmlBZ0lDQWdJSFpoYkhWbE9pQnpkV0pEYkdGemN5eGNiaUFnSUNBZ0lIZHlhWFJoWW14bE9pQjBjblZsTEZ4dUlDQWdJQ0FnWTI5dVptbG5kWEpoWW14bE9pQjBjblZsWEc0Z0lDQWdmVnh1SUNCOUtUdGNiaUFnYVdZZ0tITjFjR1Z5UTJ4aGMzTXBJSE5sZEZCeWIzUnZkSGx3WlU5bUtITjFZa05zWVhOekxDQnpkWEJsY2tOc1lYTnpLVHRjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQmZhVzVvWlhKcGRITTdYRzV0YjJSMWJHVXVaWGh3YjNKMGMxdGNJbVJsWm1GMWJIUmNJbDBnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMbVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdJaXdpZG1GeUlGOTBlWEJsYjJZZ1BTQnlaWEYxYVhKbEtGd2lRR0poWW1Wc0wzSjFiblJwYldVdmFHVnNjR1Z5Y3k5MGVYQmxiMlpjSWlsYlhDSmtaV1poZFd4MFhDSmRPMXh1WEc1MllYSWdZWE56WlhKMFZHaHBjMGx1YVhScFlXeHBlbVZrSUQwZ2NtVnhkV2x5WlNoY0lpNHZZWE56WlhKMFZHaHBjMGx1YVhScFlXeHBlbVZrTG1welhDSXBPMXh1WEc1bWRXNWpkR2x2YmlCZmNHOXpjMmxpYkdWRGIyNXpkSEoxWTNSdmNsSmxkSFZ5YmloelpXeG1MQ0JqWVd4c0tTQjdYRzRnSUdsbUlDaGpZV3hzSUNZbUlDaGZkSGx3Wlc5bUtHTmhiR3dwSUQwOVBTQmNJbTlpYW1WamRGd2lJSHg4SUhSNWNHVnZaaUJqWVd4c0lEMDlQU0JjSW1aMWJtTjBhVzl1WENJcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdOaGJHdzdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZWE56WlhKMFZHaHBjMGx1YVhScFlXeHBlbVZrS0hObGJHWXBPMXh1ZlZ4dVhHNXRiMlIxYkdVdVpYaHdiM0owY3lBOUlGOXdiM056YVdKc1pVTnZibk4wY25WamRHOXlVbVYwZFhKdU8xeHViVzlrZFd4bExtVjRjRzl5ZEhOYlhDSmtaV1poZFd4MFhDSmRJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE95SXNJbVoxYm1OMGFXOXVJRjluWlhSUWNtOTBiM1I1Y0dWUFppaHZLU0I3WEc0Z0lHMXZaSFZzWlM1bGVIQnZjblJ6SUQwZ1gyZGxkRkJ5YjNSdmRIbHdaVTltSUQwZ1QySnFaV04wTG5ObGRGQnliM1J2ZEhsd1pVOW1JRDhnVDJKcVpXTjBMbWRsZEZCeWIzUnZkSGx3WlU5bUlEb2dablZ1WTNScGIyNGdYMmRsZEZCeWIzUnZkSGx3WlU5bUtHOHBJSHRjYmlBZ0lDQnlaWFIxY200Z2J5NWZYM0J5YjNSdlgxOGdmSHdnVDJKcVpXTjBMbWRsZEZCeWIzUnZkSGx3WlU5bUtHOHBPMXh1SUNCOU8xeHVJQ0J0YjJSMWJHVXVaWGh3YjNKMGMxdGNJbVJsWm1GMWJIUmNJbDBnUFNCdGIyUjFiR1V1Wlhod2IzSjBjeXdnYlc5a2RXeGxMbVY0Y0c5eWRITXVYMTlsYzAxdlpIVnNaU0E5SUhSeWRXVTdYRzRnSUhKbGRIVnliaUJmWjJWMFVISnZkRzkwZVhCbFQyWW9ieWs3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdYMmRsZEZCeWIzUnZkSGx3WlU5bU8xeHViVzlrZFd4bExtVjRjRzl5ZEhOYlhDSmtaV1poZFd4MFhDSmRJRDBnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxsOWZaWE5OYjJSMWJHVWdQU0IwY25WbE95SXNJbU52Ym5OMElGSnZiR1VnUFNCamJHRnpjeUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEpsWXlrZ2UxeHVJQ0FnSUU5aWFtVmpkQzVoYzNOcFoyNG9kR2hwY3l3Z2NtVmpLVnh1SUNCOVhHNWNiaUFnWjJWMFRtRnRaU2dwSUhzZ2NtVjBkWEp1SUhSb2FYTXVibUZ0WlNCOVhHNWNiaUFnYVhOVWFYUjFiR0Z5S0NrZ2V5QnlaWFIxY200Z0lTRjBhR2x6TG5ScGRIVnNZWElnZlZ4dVhHNGdJR2x6UkdWemFXZHVZWFJsWkNncElIc2djbVYwZFhKdUlDRWhkR2hwY3k1a1pYTnBaMjVoZEdWa0lIMWNibHh1SUNCcGMxRjFZV3hwWm1saFlteGxLQ2tnZXlCeVpYUjFjbTRnSVNGMGFHbHpMbkYxWVd4cFptbGhZbXhsSUgxY2JuMWNibHh1Wlhod2IzSjBJSHNnVW05c1pTQjlYRzRpTENKcGJYQnZjblFnZXlCU2IyeGxJSDBnWm5KdmJTQW5MaTlTYjJ4bEoxeHVYRzVqYjI1emRDQkJkSFJoWTJobFpGSnZiR1VnUFNCamJHRnpjeUJsZUhSbGJtUnpJRkp2YkdVZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2loaVlYTmxVbTlzWlN3Z2NtVmpMQ0J0WVc1aFoyVnlMQ0J6ZEdGbVprMWxiV0psY2lrZ2UxeHVJQ0FnSUhOMWNHVnlLR0poYzJWU2IyeGxLVnh1SUNBZ0lHbG1JQ2doWW1GelpWSnZiR1V1YVhOUmRXRnNhV1pwWVdKc1pTZ3BJQ1ltSUhKbFl5NXhkV0ZzYVdacFpYSWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCQmRIUmxiWEIwSUhSdklIRjFZV3hwWm5rZ2JtOXVMWEYxWVd4cFptbGhZbXhsSUhKdmJHVWdKeVI3WW1GelpWSnZiR1V1WjJWMFRtRnRaU2dwZlNjZ1lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNzZ1lHWnZjaUJ6ZEdGbVppQnRaVzFpWlhJZ0p5UjdjM1JoWm1aTlpXMWlaWEl1WjJWMFJXMWhhV3dvS1gwbkxtQXBYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1QySnFaV04wTG1GemMybG5iaWgwYUdsekxDQnlaV01wWEc0Z0lDQWdkR2hwY3k1dFlXNWhaMlZ5SUQwZ2JXRnVZV2RsY2x4dUlDQjlYRzVjYmlBZ1oyVjBUV0Z1WVdkbGNpZ3BJSHNnY21WMGRYSnVJSFJvYVhNdWJXRnVZV2RsY2lCOVhHNWNiaUFnWjJWMFVYVmhiR2xtYVdWeUtDa2dleUJ5WlhSMWNtNGdkR2hwY3k1eGRXRnNhV1pwWlhJZ1B5QjBhR2x6TG5GMVlXeHBabWxsY2lBNklHNTFiR3dnZlZ4dVhHNGdJR2RsZEZGMVlXeHBabWxsWkU1aGJXVW9LU0I3SUhKbGRIVnliaUJnSkh0MGFHbHpMbWRsZEZGMVlXeHBabWxsY2lncGZTQWtlM1JvYVhNdVoyVjBUbUZ0WlNncGZXQWdmVnh1WEc0Z0lHbHpRV04wYVc1bktDa2dleUJ5WlhSMWNtNGdJU0YwYUdsekxtRmpkR2x1WnlCOVhHNTlYRzVjYm1WNGNHOXlkQ0I3SUVGMGRHRmphR1ZrVW05c1pTQjlYRzRpTENKcGJYQnZjblFnZXlCRmRtRnNkV0YwYjNJZ2ZTQm1jbTl0SUNkQWJHbHhkV2xrTFd4aFluTXZZMjl1WkdsMGFXOXVMV1YyWVd3blhHNWNibWx0Y0c5eWRDQjdJRkp2YkdVZ2ZTQm1jbTl0SUNjdUwxSnZiR1VuWEc1Y2JtTnZibk4wSUZKdmJHVnpJRDBnWTJ4aGMzTWdlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHZjbWNzSUhKdmJHVnpSR0YwWVNrZ2UxeHVJQ0FnSUhSb2FYTXViM0puSUQwZ2IzSm5YRzVjYmlBZ0lDQjBhR2x6TG1sMFpXMXpJRDBnY205c1pYTkVZWFJoTG0xaGNDZ29jbVZqS1NBOVBpQnVaWGNnVW05c1pTaHlaV01wS1Z4dUlDQWdJSFJvYVhNdWJXRndJRDBnZEdocGN5NXBkR1Z0Y3k1eVpXUjFZMlVvS0dGall5d2djbTlzWlN3Z2FTa2dQVDRnZTF4dUlDQWdJQ0FnYVdZZ0tHRmpZMXR5YjJ4bExtZGxkRTVoYldVb0tWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1lGSnZiR1VnZDJsMGFDQnVZVzFsSUNja2UzSnZiR1V1Ym1GdFpYMG5JR0ZzY21WaFpIa2daWGhwYzNSeklHRjBJR1Z1ZEhKNUlDUjdhWDB1WUNsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUdGalkxdHliMnhsTG1kbGRFNWhiV1VvS1YwZ1BTQnliMnhsWEc0Z0lDQWdJQ0J5WlhSMWNtNGdZV05qWEc0Z0lDQWdmU3dnZTMwcFhHNWNiaUFnSUNCMGFHbHpMbU5vWldOclEyOXVaR2wwYVc5dUlEMGdZMmhsWTJ0RGIyNWthWFJwYjI1Y2JpQWdJQ0IwYUdsekxtdGxlU0E5SUNkdVlXMWxKMXh1SUNCOVhHNWNiaUFnTHk4Z1ZFOUVUem9nWkdWd2NtVmpZWFJsWkZ4dUlDQm5aWFJCYkd3b0tTQjdJSEpsZEhWeWJpQjBhR2x6TG1sMFpXMXpMbk5zYVdObEtDa2dmVnh1SUNCc2FYTjBLQ2tnZXlCeVpYUjFjbTRnZEdocGN5NXBkR1Z0Y3k1emJHbGpaU2dwSUgxY2JseHVJQ0JuWlhRb2JtRnRaU3dnYjNCMGN5a2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2NtVnhkV2x5WldRc0lHVnljazF6WjBkbGJpQjlJRDBnYjNCMGN5QjhmQ0I3ZlZ4dUlDQWdJR052Ym5OMElISmxjM1ZzZENBOUlIUm9hWE11YldGd1cyNWhiV1ZkWEc0Z0lDQWdhV1lnS0hKbGMzVnNkQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSEpsY1hWcGNtVmtLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9aWEp5VFhOblIyVnVQeTRvYm1GdFpTa2dmSHdnWUVScFpDQnViM1FnWm1sdVpDQnlaWEYxY21sbFpDQnliMnhsSUNja2UyNWhiV1Y5Snk1Z0tWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdjbVZ6ZFd4MFhHNGdJSDFjYmx4dUlDQm5aWFJUZEdGbVprbHVVbTlzWlNoeWIyeGxUbUZ0WlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtOXlaeTV6ZEdGbVppNXNhWE4wS0NrdVptbHNkR1Z5S0NoektTQTlQaUJ6TG5KdmJHVnpMbk52YldVb0tISXBJRDArSUhJdWJtRnRaU0E5UFQwZ2NtOXNaVTVoYldVcEtWeHVJQ0I5WEc1Y2JpQWdMeW9xWEc0Z0lDb2dVM2RoY0hNZ2IzVjBJSFJvWlNBbmMzVndaWElnY205c1pTY2dibUZ0WlNCbWIzSWdkR2hsSUdGamRIVmhiQ0J6ZFhCbGNpQnliMnhsSUc5aWFtVmpkQzVjYmlBZ0tpOWNiaUFnYUhsa2NtRjBaU2dwSUh0Y2JpQWdJQ0IwYUdsekxtbDBaVzF6TG1admNrVmhZMmdvS0hKdmJHVXNJR2twSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2h5YjJ4bExuTjFjR1Z5VW05c1pTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOMWNHVnlVbTlzWlNBOUlIUm9hWE11WjJWMEtISnZiR1V1YzNWd1pYSlNiMnhsS1Z4dUlDQWdJQ0FnSUNCcFppQW9jM1Z3WlhKU2IyeGxJRDA5UFNCMWJtUmxabWx1WldRcElIc2dkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHQkRiM1ZzWkNCdWIzUWdabWx1WkNCemRYQmxjaTF5YjJ4bElDY2tlM0p2YkdVdWMzVndaWEpTYjJ4bGZTY2dabTl5SUhKdmJHVWdKeVI3Y205c1pTNW5aWFJPWVcxbEtDbDlKeUFvWlc1MGNua2dKSHRwZlNrdVlDa2dmVnh1SUNBZ0lDQWdJQ0J5YjJ4bExuTjFjR1Z5VW05c1pTQTlJSE4xY0dWeVVtOXNaVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNTlYRzVjYmk4cUtseHVLaUJQWW14cFoybDBiM0o1SUNkamFHVmphME52Ym1ScGRHbHZiaWNnWm5WdVkzUnBiMjRnY0hKdmRtbGtaV1FnWW5rZ2RHaGxJRUZRU1NCbWIzSWdjSEp2WTJWemMybHVaeUJwYm1Oc2RYTnBiMjRnYjNJZ1pYaGpiSFZ6YVc5dUlHOW1JRkp2YkdWeklIUmhjbWRsZEhNZ2FXNWNiaW9nWVc0Z1lYVmthWFF1WEc0cUwxeHVZMjl1YzNRZ1kyaGxZMnREYjI1a2FYUnBiMjRnUFNBb1kyOXVaR2wwYVc5dUxDQnliMnhsS1NBOVBpQjdYRzRnSUdOdmJuTjBJSEJoY21GdFpYUmxjbk1nUFNCUFltcGxZM1F1WVhOemFXZHVLRnh1SUNBZ0lIdGNiaUFnSUNBZ0lGTkZRMTlVVWtsV1NVRk1JRG9nTVN4Y2JpQWdJQ0FnSUVGTVYwRlpVeUFnSUNBZ0lEb2dNU3hjYmlBZ0lDQWdJRTVGVmtWU0lDQWdJQ0FnSURvZ01GeHVJQ0FnSUgwc1hHNGdJQ0FnY205c1pTNXdZWEpoYldWMFpYSnpLVnh1WEc0Z0lDOHZJRlJQUkU4NklIUmxjM1FnYVdZZ2JHVmhkbWx1WnlCcGRDQW5kSEoxWlNjdkoyWmhiSE5sSnlCM2IzSnJjeTVjYmlBZ2NHRnlZVzFsZEdWeWN5NUVSVk5KUjA1QlZFVkVJRDBnY205c1pTNWtaWE5wWjI1aGRHVmtJRDhnTVNBNklEQmNiaUFnY0dGeVlXMWxkR1Z5Y3k1VFNVNUhWVXhCVWlBOUlISnZiR1V1YzJsdVozVnNZWElnUHlBeElEb2dNRnh1WEc0Z0lHTnZibk4wSUhwbGNtOVNaWE1nUFNCYlhWeHVYRzRnSUdOdmJuTjBJR1YyWVd4MVlYUnZjaUE5SUc1bGR5QkZkbUZzZFdGMGIzSW9leUJ3WVhKaGJXVjBaWEp6TENCNlpYSnZVbVZ6SUgwcFhHNGdJSEpsZEhWeWJpQmxkbUZzZFdGMGIzSXVaWFpoYkZSeWRYUm9LR052Ym1ScGRHbHZiaWxjYm4xY2JseHVaWGh3YjNKMElIc2dVbTlzWlhNZ2ZWeHVJaXdpWTI5dWMzUWdVM1JoWm1aTlpXMWlaWElnUFNCamJHRnpjeUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEpsWTI5eVpDa2dlMXh1SUNBZ0lFOWlhbVZqZEM1aGMzTnBaMjRvZEdocGN5d2djbVZqYjNKa0tWeHVYRzRnSUNBZ2RHaHBjeTVoZEhSaFkyaGxaRkp2YkdWelFubE9ZVzFsSUQwZ2UzMWNiaUFnSUNCMGFHbHpMbkpsY0c5eWRITkNlVkpsY0c5eWRGSnZiR1VnUFNCN2ZTQXZMeUJ5YjJ4bGN5QnJaWGxsWkNCMGJ5QnlaWEJ2Y25SeklISnZiR1VnYm1GdFpYTmNiaUFnZlZ4dVhHNGdJR2RsZEVWdFlXbHNLQ2tnZXlCeVpYUjFjbTRnZEdocGN5NWxiV0ZwYkNCOVhHNGdJSE5sZEVWdFlXbHNLSFlwSUhzZ2RHaHBjeTVsYldGcGJDQTlJSFlnZlZ4dVhHNGdJR2RsZEVaMWJHeE9ZVzFsS0NrZ2V5QnlaWFIxY200Z1lDUjdkR2hwY3k1blpYUkhhWFpsYms1aGJXVW9LWDBnSkh0MGFHbHpMbWRsZEVaaGJXbHNlVTVoYldVb0tYMWdJSDBnTHk4Z1ZFOUVUem9nYVRFNGJpNHVMbHh1WEc0Z0lHZGxkRVpoYldsc2VVNWhiV1VvS1NCN0lISmxkSFZ5YmlCMGFHbHpMbVpoYldsc2VVNWhiV1VnZlZ4dUlDQnpaWFJHWVcxcGJIbE9ZVzFsS0hZcElIc2dkR2hwY3k1bVlXMXBiSGxPWVcxbElEMGdkaUI5WEc1Y2JpQWdaMlYwUjJsMlpXNU9ZVzFsS0NrZ2V5QnlaWFIxY200Z2RHaHBjeTVuYVhabGJrNWhiV1VnZlZ4dUlDQnpaWFJIYVhabGJrNWhiV1VvZGlrZ2V5QjBhR2x6TG1kcGRtVnVUbUZ0WlNBOUlIWWdmVnh1WEc0Z0lHZGxkRk4wWVhKMFJHRjBaU2dwSUhzZ2NtVjBkWEp1SUhSb2FYTXVjM1JoY25SRVlYUmxJSDFjYmlBZ2MyVjBVM1JoY25SRVlYUmxLSFlwSUhzZ2RHaHBjeTV6ZEdGeWRFUmhkR1VnUFNCMklIMWNibHh1SUNCblpYUkZiWEJzYjNsdFpXNTBVM1JoZEhWektDa2dleUJ5WlhSMWNtNGdkR2hwY3k1bGJYQnNiM2x0Wlc1MFUzUmhkSFZ6SUgxY2JpQWdjMlYwUlcxd2JHOTViV1Z1ZEZOMFlYUjFjeWgyS1NCN0lIUm9hWE11Wlcxd2JHOTViV1Z1ZEZOMFlYUjFjeUE5SUhZZ2ZWeHVYRzRnSUdkbGRGSnZiR1ZPWVcxbGN5Z3BJSHNnY21WMGRYSnVJSFJvYVhNdWNtOXNaWE11YldGd0tDaHlLU0E5UGlCeUxtNWhiV1VwSUgxY2JseHVJQ0JvWVhOU2IyeGxLSEp2YkdWT1lXMWxLU0I3SUhKbGRIVnliaUFoSVhSb2FYTXVZWFIwWVdOb1pXUlNiMnhsYzBKNVRtRnRaVnR5YjJ4bFRtRnRaVjBnZlZ4dVhHNGdJR2RsZEVGMGRHRmphR1ZrVW05c1pYTW9LU0I3SUhKbGRIVnliaUIwYUdsekxuSnZiR1Z6TG5Oc2FXTmxLQ2tnZlZ4dVhHNGdJR2RsZEVGMGRHRmphR1ZrVW05c1pTaHliMnhsVG1GdFpTa2dleUJ5WlhSMWNtNGdkR2hwY3k1aGRIUmhZMmhsWkZKdmJHVnpRbmxPWVcxbFczSnZiR1ZPWVcxbFhTQjlYRzVjYmlBZ1oyVjBUV0Z1WVdkbGNuTW9LU0I3SUhKbGRIVnliaUIwYUdsekxuSnZiR1Z6TG0xaGNDZ29jaWtnUFQ0Z2NpNXRZVzVoWjJWeUtTQjlYRzVjYmlBZ1oyVjBVbVZ3YjNKMGMwSjVVbTlzWlU1aGJXVW9jbTlzWlU1aGJXVXBJSHNnY21WMGRYSnVJSFJvYVhNdWNtVndiM0owYzBKNVVtVndiM0owVW05c1pWdHliMnhsVG1GdFpWMGdmSHdnVzEwZ2ZWeHVJQ0JuWlhSU1pYQnZjblJ6S0NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJQWW1wbFkzUXVkbUZzZFdWektIUm9hWE11Y21Wd2IzSjBjMEo1VW1Wd2IzSjBVbTlzWlNrdWNtVmtkV05sS0NoaFkyTXNJSEpsY0hNcElEMCtJR0ZqWXk1amIyNWpZWFFvY21Wd2N5a3NJRnRkS1Z4dUlDQWdJQ0FnTG1acGJIUmxjaWh5WlhBZ1BUNGdjbVZ3TG1kbGRFVnRZV2xzS0NrZ0lUMDlJSFJvYVhNdVoyVjBSVzFoYVd3b0tTbGNiaUFnZlZ4dVhHNGdJR2RsZEZCaGNtRnRaWFJsY25Nb0tTQjdJSEpsZEhWeWJpQjBhR2x6TG5CaGNtRnRaWFJsY25NZ2ZWeHVmVnh1WEc1bGVIQnZjblFnZXlCVGRHRm1aazFsYldKbGNpQjlYRzRpTENKcGJYQnZjblFnS2lCaGN5Qm1jeUJtY205dElDZG1jeWRjYmx4dWFXMXdiM0owSUhzZ1JYWmhiSFZoZEc5eUlIMGdabkp2YlNBblFHeHBjWFZwWkMxc1lXSnpMMk52Ym1ScGRHbHZiaTFsZG1Gc0oxeHVYRzVwYlhCdmNuUWdleUJUZEdGbVprMWxiV0psY2lCOUlHWnliMjBnSnk0dlUzUmhabVpOWlcxaVpYSW5YRzVwYlhCdmNuUWdleUJCZEhSaFkyaGxaRkp2YkdVZ2ZTQm1jbTl0SUNjdUxpOXliMnhsY3lkY2JseHVZMjl1YzNRZ2NtOXNaVkpsSUQwZ2JtVjNJRkpsWjBWNGNDZ25Ya2hCVTE5YlFTMWFYMTByWDFKUFRFVWtKeWxjYm1OdmJuTjBJSE4wWVdabVVHRnlZVzFsZEdWeWN5QTlJRnNuVlZORlUxOURSVTVVVWtGTVNWcEZSRjlCVGxSSlZrbFNWVk1uTENBblZWTkZVMTlEUlU1VVVrRk1TVnBGUkY5R1NWSkZWMEZNVENkZFhHNWpiMjV6ZENCNlpYSnZVbVZ6SUQwZ2MzUmhabVpRWVhKaGJXVjBaWEp6TG0xaGNDaHdJRDArSUc1bGR5QlNaV2RGZUhBb2NDa3BYRzU2WlhKdlVtVnpMbkIxYzJnb2NtOXNaVkpsS1Z4dVhHNWpiMjV6ZENCVGRHRm1aaUE5SUdOc1lYTnpJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9abWxzWlU1aGJXVXBJSHRjYmlBZ0lDQjBhR2x6TG1acGJHVk9ZVzFsSUQwZ1ptbHNaVTVoYldWY2JpQWdJQ0JqYjI1emRDQmtZWFJoSUQwZ1NsTlBUaTV3WVhKelpTaG1jeTV5WldGa1JtbHNaVk41Ym1Nb1ptbHNaVTVoYldVcEtWeHVJQ0FnSUhSb2FYTXViV1Z0WW1WeWN5QTlJR1JoZEdFdWJXRndLQ2h5WldNcElEMCtJRzVsZHlCVGRHRm1aazFsYldKbGNpaHlaV01wS1Z4dUlDQWdJSFJvYVhNdWJXRndJRDBnZEdocGN5NXRaVzFpWlhKekxuSmxaSFZqWlNnb1lXTmpMQ0J0WlcxaVpYSXNJR2twSUQwK0lIdGNiaUFnSUNBZ0lHbG1JQ2hoWTJOYmJXVnRZbVZ5TG1kbGRFVnRZV2xzS0NsZElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCVGRHRm1aaUJ0WlcxaVpYSWdkMmwwYUNCbGJXRnBiQ0FuSkh0dFpXMWlaWEl1WjJWMFJXMWhhV3dvS1gwbklHRnNjbVZoWkhrZ1pYaHBjM1J6SUdGMElHVnVkSEo1SUNSN2FYMHVZQ2xjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR0ZqWTF0dFpXMWlaWEl1WjJWMFJXMWhhV3dvS1YwZ1BTQnRaVzFpWlhKY2JpQWdJQ0FnSUhKbGRIVnliaUJoWTJOY2JpQWdJQ0I5TENCN2ZTbGNibHh1SUNBZ0lIUm9hWE11WTJobFkydERiMjVrYVhScGIyNGdQU0JqYUdWamEwTnZibVJwZEdsdmJseHVYRzRnSUNBZ2RHaHBjeTVyWlhrZ1BTQW5aVzFoYVd3blhHNGdJSDFjYmx4dUlDQXZMeUJVVDBSUE9pQmtaWEJ5WVdOaGRHVmtYRzRnSUdkbGRFRnNiQ2dwSUhzZ2NtVjBkWEp1SUhSb2FYTXViV1Z0WW1WeWN5NXpiR2xqWlNncElIMWNiaUFnYkdsemRDZ3BJSHNnY21WMGRYSnVJSFJvYVhNdWJXVnRZbVZ5Y3k1emJHbGpaU2dwSUgxY2JseHVJQ0JuWlhRb1pXMWhhV3dwSUhzZ2NtVjBkWEp1SUhSb2FYTXViV0Z3VzJWdFlXbHNYU0I5WEc1Y2JpQWdaMlYwUW5sU2IyeGxUbUZ0WlNoeWIyeGxUbUZ0WlNrZ2V5QnlaWFIxY200Z2RHaHBjeTV0WlcxaVpYSnpMbVpwYkhSbGNpaHpJRDArSUhNdWFHRnpVbTlzWlNoeWIyeGxUbUZ0WlNrcElIMWNibHh1SUNCaFpHUkVZWFJoS0cxbGJXSmxja1JoZEdFcElIdGNiaUFnSUNCMGFHbHpMbTFsYldKbGNuTXVjSFZ6YUNodVpYY2dVM1JoWm1aTlpXMWlaWElvYldWdFltVnlSR0YwWVNrcFhHNGdJQ0FnZEdocGN5NW9lV1J5WVhSbEtIUm9hWE11YjNKbktWeHVJQ0I5WEc1Y2JpQWdjbVZ0YjNabEtHVnRZV2xzS1NCN1hHNGdJQ0FnWlcxaGFXd2dQU0JsYldGcGJDNTBiMHh2ZDJWeVEyRnpaU2dwWEc0Z0lDQWdZMjl1YzNRZ2JXRjBZMmhsY3lBOUlIUm9hWE11WjJWMFFXeHNLQ2t1Wm1sc2RHVnlLRzFsYldKbGNpQTlQaUJ0WlcxaVpYSXVaVzFoYVd3Z1BUMDlJR1Z0WVdsc0tWeHVYRzRnSUNBZ2FXWWdLRzFoZEdOb1pYTXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWUVOdmRXeGtJRzV2ZENCbWFXNWtJSE4wWVdabUlHMWxiV0psY2lCM2FYUm9JR1Z0WVdsc0lDUjdaVzFoYVd4OUxtQXBYRzRnSUNBZ2ZWeHVJQ0FnSUdWc2MyVWdhV1lnS0cxaGRHTm9aWE11YkdWdVozUm9JRDRnTVNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0dCVGRHRm1aaUJrWVhSaFltRnpaU0JqYjI1emFYTjBaVzVqZVNCbGNuSnZjaTRnUm05MWJtUWdiWFZzZEdsd2JHVWdaVzUwYVhKbGN5Qm1iM0lnSnlSN1pXMWhhV3g5Snk1Z0tWeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXViV1Z0WW1WeWN5QTlJSFJvYVhNdWJXVnRZbVZ5Y3k1bWFXeDBaWElvYldWdFltVnlJRDArSUcxbGJXSmxjaTVsYldGcGJDQWhQVDBnWlcxaGFXd3BYRzRnSUgxY2JseHVJQ0IzY21sMFpTZ3BJSHNnWm5NdWQzSnBkR1ZHYVd4bFUzbHVZeWgwYUdsekxtWnBiR1ZPWVcxbExDQjBhR2x6TG5SdlUzUnlhVzVuS0NrcElIMWNibHh1SUNBdktpcGNiaUFnSUNvZ1UzZGhjSE1nYjNWMElISmxabVZ5Wlc1alpYTWdkRzhnY205c1pYTWdZVzVrSUcxaGJtRm5aWEp6SUdKNUlHNWhiV1VnWVc1a0lHVnRZV2xzSUNoeVpYTndaV04wYVhabGJIa3BJSGRwZEdnZ2RHaGxJR0ZqZEhWaGJDQnliMnhsSUdGdVpDQnRZVzVoWjJWeVhHNGdJQ0FxSUc5aWFtVmpkSE11WEc0Z0lDQXFMMXh1SUNCb2VXUnlZWFJsS0c5eVp5a2dlMXh1SUNBZ0lIUm9hWE11YjNKbklEMGdiM0puWEc1Y2JpQWdJQ0IwYUdsekxtMWxiV0psY25NdVptOXlSV0ZqYUNnb2N5a2dQVDRnZTF4dUlDQWdJQ0FnY3k1eWIyeGxjeUE5SUhNdWNtOXNaWE11Y21Wa2RXTmxLQ2h5YjJ4bGN5d2djbVZqS1NBOVBpQjdJQzh2SUZsbGN5d2dZbTkwYUNCdFlYQnpJRUZPUkNCb1lYTWdjMmxrWlNCbFptWmxZM1J6TGlCVGRXTnJJR2wwSVZ4dUlDQWdJQ0FnSUNCcFppQW9jbVZqSUdsdWMzUmhibU5sYjJZZ1FYUjBZV05vWldSU2IyeGxLU0J5WlhSMWNtNGdjbVZqWEc0Z0lDQWdJQ0FnSUM4dklGWmxjbWxtZVNCeVpXTWdjbVZtWlhKbGJtTmxjeUJoSUdkdmIyUWdjbTlzWlM0Z1RtOTBaU3dnZDJVZ1kyaGxZMnNnZEdobElDZHZjbWRUZEhKMVkzUjFjbVVuSUdKbFkyRjFjMlVnZEdobGNtVWdiV0Y1SUdKbElHRWdjbTlzWlNCa1pXWnBibVZrWEc0Z0lDQWdJQ0FnSUM4dklHZHNiMkpoYkd4NUlIUm9ZWFFnYVhOdUozUWdhVzRnZFhObElHbHVJSFJvWlNCdmNtY3VYRzRnSUNBZ0lDQWdJR052Ym5OMElISnZiR1VnUFNCdmNtY3VaMlYwVW05c1pYTW9LUzVuWlhRb2NtVmpMbTVoYldVc1hHNGdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnhkV2x5WldRZ0lEb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z5Y2sxelowZGxiaUE2SUNodVlXMWxLU0E5UGlCZ1UzUmhabVlnYldWdFltVnlJQ2NrZTNNdVoyVjBSVzFoYVd3b0tYMG5JR05zWVdsdGN5QjFibXR1YjNkdUlISnZiR1VnSnlSN2JtRnRaWDBuTG1CY2JpQWdJQ0FnSUNBZ0lDQjlLVnh1WEc0Z0lDQWdJQ0FnSUhKdmJHVnpMbkIxYzJnb1kyOXVkbVZ5ZEZKdmJHVlViMEYwZEdGamFHVmtLSE1zSUhKbFl5d2djbTlzWlN3Z2RHaHBjeTV2Y21jcEtWeHVJQ0FnSUNBZ0lDQndjbTlqWlhOelNXMXdiR2xsWkZKdmJHVnpLSEp2YkdWekxDQnpMQ0J5WldNc0lISnZiR1VzSUhSb2FYTXViM0puS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY205c1pYTmNiaUFnSUNBZ0lIMHNJRnRkS1NBdkx5QlRkR0ZtWmsxbGJXSmxjaUJ5YjJ4bGN5QnlaV1IxWTJWY2JpQWdJQ0I5S1NBdkx5QlRkR0ZtWmsxbGJXSmxjaUJwZEdWeVlYUnBiMjVjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6WEc0Z0lIMWNibHh1SUNBdktpcGNiaUFnS2lCU1pYUjFjbTV6SUhSb1pTQktVMDlPSUhOMGNtbHVaeUJ2WmlCMGFHVWdaR1V0YUhsa2NtRjBaV1FnWkdGMFlTQnpkSEoxWTNSMWNtVXVYRzRnSUNvdlhHNGdJSFJ2VTNSeWFXNW5LQ2tnZTF4dUlDQWdJR052Ym5OMElHWnNZWFJLYzI5dUlEMGdkR2hwY3k1dFpXMWlaWEp6TG0xaGNDZ29jeWtnUFQ0Z2UxeHVJQ0FnSUNBZ1kyOXVjM1FnWkdGMFlTQTlJSHRjYmlBZ0lDQWdJQ0FnWlcxaGFXd2dJQ0FnSUNBZ0lDQWdJQ0E2SUhNdVoyVjBSVzFoYVd3b0tTeGNiaUFnSUNBZ0lDQWdabUZ0YVd4NVRtRnRaU0FnSUNBZ0lDQTZJSE11WjJWMFJtRnRhV3g1VG1GdFpTZ3BMRnh1SUNBZ0lDQWdJQ0JuYVhabGJrNWhiV1VnSUNBZ0lDQWdJRG9nY3k1blpYUkhhWFpsYms1aGJXVW9LU3hjYmlBZ0lDQWdJQ0FnYzNSaGNuUkVZWFJsSUNBZ0lDQWdJQ0E2SUhNdVoyVjBVM1JoY25SRVlYUmxLQ2tzWEc0Z0lDQWdJQ0FnSUhKdmJHVnpJQ0FnSUNBZ0lDQWdJQ0FnT2lCYlhTeGNiaUFnSUNBZ0lDQWdaVzF3Ykc5NWJXVnVkRk4wWVhSMWN5QTZJSE11WjJWMFJXMXdiRzk1YldWdWRGTjBZWFIxY3lncExGeHVJQ0FnSUNBZ0lDQndZWEpoYldWMFpYSnpJQ0FnSUNBZ0lEb2djeTVuWlhSUVlYSmhiV1YwWlhKektDbGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lITXVjbTlzWlhNdVptOXlSV0ZqYUNnb1lYUjBZV05vWldSU2IyeGxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhKdmJHVkVZWFJoSUQwZ2V5QnVZVzFsSURvZ1lYUjBZV05vWldSU2IyeGxMbWRsZEU1aGJXVW9LU0I5WEc0Z0lDQWdJQ0FnSUdsbUlDaGhkSFJoWTJobFpGSnZiR1V1WjJWMFRXRnVZV2RsY2lncEtTQjdJSEp2YkdWRVlYUmhMbTFoYm1GblpYSWdQU0JoZEhSaFkyaGxaRkp2YkdVdVoyVjBUV0Z1WVdkbGNpZ3BMbWRsZEVWdFlXbHNLQ2tnZlZ4dUlDQWdJQ0FnSUNCcFppQW9ZWFIwWVdOb1pXUlNiMnhsTG1kbGRGRjFZV3hwWm1sbGNpZ3BLU0I3SUhKdmJHVkVZWFJoTG5GMVlXeHBabWxsY2lBOUlHRjBkR0ZqYUdWa1VtOXNaUzVuWlhSUmRXRnNhV1pwWlhJb0tTQjlYRzRnSUNBZ0lDQWdJR2xtSUNoaGRIUmhZMmhsWkZKdmJHVXVhWE5CWTNScGJtY29LU2tnZXlCeWIyeGxSR0YwWVM1aFkzUnBibWNnUFNCaGRIUmhZMmhsWkZKdmJHVXVhWE5CWTNScGJtY29LU0I5WEc1Y2JpQWdJQ0FnSUNBZ1pHRjBZUzV5YjJ4bGN5NXdkWE5vS0hKdmJHVkVZWFJoS1Z4dUlDQWdJQ0FnZlNsY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUdSaGRHRmNiaUFnSUNCOUtWeHVYRzRnSUNBZ2NtVjBkWEp1SUVwVFQwNHVjM1J5YVc1bmFXWjVLR1pzWVhSS2MyOXVMQ0J1ZFd4c0xDQW5JQ0FuS1Z4dUlDQjlYRzU5WEc1Y2JtTnZibk4wSUdOdmJuWmxjblJTYjJ4bFZHOUJkSFJoWTJobFpDQTlJQ2h6TENCeVpXTXNJSEp2YkdVc0lHOXlaeWtnUFQ0Z2UxeHVJQ0JwWmlBb2NtOXNaUzVwYzFScGRIVnNZWElvS1NrZ2UxeHVJQ0FnSUM4dklHNXZkR2xqWlNCM1pTQmphR1ZqYXlBbmNtVmpKeXdnYm05MElDZHliMnhsSnpzZ2NtOXNaU0J0WVhrZ1ltVWdhVzF3YkdsbFpDNWNiaUFnSUNCamIyNXpkQ0J2Y21kT2IyUmxJRDBnYjNKbkxtOXlaMU4wY25WamRIVnlaUzVuWlhST2IyUmxRbmxTYjJ4bFRtRnRaU2h5WldNdWJtRnRaU2xjYmlBZ0lDQnBaaUFvYjNKblRtOWtaU0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1lGTjBZV1ptSUcxbGJXSmxjaUFuSkh0ekxtZGxkRVZ0WVdsc0tDbDlKeUJqYkdGcGJYTWdjbTlzWlNBbkpIdHlaV011Ym1GdFpYMG5JRzV2ZENCMWMyVmtJR2x1SUhSb2FYTWdiM0puTG1BcFhHNGdJQ0FnZlZ4dUlDQWdJQzh2SUZSUFJFODZJR05vWldOcklIUm9aU0J3Y21sdElHMWhibUZuWlhJZ1puSnZiU0IwYUdVZ2IzSm5JSE4wY25WamRIVnlaU0J3WlhKelpXTjBhWFpsWEc0Z0lDQWdMeThnYjNKblRtOWtaUzVuWlhSUWNtbHRUVzVuY2lncElDRTlQU0J1ZFd4c1hHNGdJSDFjYmx4dUlDQXZMeUJVVDBSUE9pQjBhR2x6SUdseklHOXViSGtnZG1Gc2FXUWdabTl5SUhScGRIVnNZWElnY205c1pYTXNJSGxsWVdnL0lHNWxjM1FnZEdocGN5QnBaaTR1TGx4dUlDQnNaWFFnY205c1pVMWhibUZuWlhJZ1BTQnVkV3hzWEc0Z0lHbG1JQ2h5WldNdWJXRnVZV2RsY2lrZ2UxeHVJQ0FnSUM4dklGUm9aVzRnY21Wd2JHRmpaU0J0WVc1aFoyVnlJRWxFSUhkcGRHZ2diV0Z1WVdkbGNpQnZZbXBsWTNRZ1lXNWtJR0ZrWkNCdmRYSnpaV3gyWlhNZ2RHOGdkR2hsYVhJZ2NtVndiM0owYzF4dUlDQWdJQzh2SUdOdmJuTnZiR1V1WlhKeWIzSW9ZR052Ym5abGNuUnBibWNnZDJsMGFDQnRZVzVoWjJWeU9pQWtlM0psWXk1dFlXNWhaMlZ5ZldBcElDOHZJRVJGUWxWSFhHNGdJQ0FnY205c1pVMWhibUZuWlhJZ1BTQnZjbWN1WjJWMFUzUmhabVlvS1M1blpYUW9jbVZqTG0xaGJtRm5aWElwWEc0Z0lDQWdhV1lnS0hKdmJHVk5ZVzVoWjJWeUlEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhnVG04Z2MzVmphQ0J0WVc1aFoyVnlJQ2NrZTNKbFl5NXRZVzVoWjJWeWZTY2dabTkxYm1RZ2QyaHBiR1VnYkc5aFpHbHVaeUJ6ZEdGbVppQnRaVzFpWlhJZ0p5UjdjeTVuWlhSRmJXRnBiQ2dwZlNjdVlDbGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QkJaR1FnYjNWeWMyVnNkbVZ6SUhSdklIUm9aU0J0WVc1aFoyVnlKM01nY21Wd2IzSjBjMXh1SUNBZ0lHbG1JQ2h5YjJ4bFRXRnVZV2RsY2k1eVpYQnZjblJ6UW5sU1pYQnZjblJTYjJ4bFczSnZiR1V1Ym1GdFpWMGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ2NtOXNaVTFoYm1GblpYSXVjbVZ3YjNKMGMwSjVVbVZ3YjNKMFVtOXNaVnR5YjJ4bExtNWhiV1ZkSUQwZ1cxMWNiaUFnSUNCOVhHNGdJQ0FnY205c1pVMWhibUZuWlhJdWNtVndiM0owYzBKNVVtVndiM0owVW05c1pWdHliMnhsTG01aGJXVmRMbkIxYzJnb2N5bGNiaUFnZlZ4dVhHNGdJR052Ym5OMElHRjBkR0ZqYUdWa1VtOXNaU0E5SUc1bGR5QkJkSFJoWTJobFpGSnZiR1VvY205c1pTd2djbVZqTENCeWIyeGxUV0Z1WVdkbGNpd2djeWxjYmlBZ2N5NWhkSFJoWTJobFpGSnZiR1Z6UW5sT1lXMWxXM0p2YkdVdWJtRnRaVjBnUFNCaGRIUmhZMmhsWkZKdmJHVmNiaUFnY21WMGRYSnVJR0YwZEdGamFHVmtVbTlzWlZ4dWZWeHVYRzVqYjI1emRDQndjbTlqWlhOelNXMXdiR2xsWkZKdmJHVnpJRDBnS0hKdmJHVnpMQ0J6TENCeVpXTXNJSEp2YkdVc0lHOXlaeWtnUFQ0Z2UxeHVJQ0JtYjNJZ0tHTnZibk4wSUhzZ2JtRnRaVG9nYVcxd2JHbGxaRkp2YkdWT1lXMWxMQ0J0Ym1keVVISnZkRzlqYjJ3Z2ZTQnZaaUJ5YjJ4bExtbHRjR3hwWlhNZ2ZId2dXMTBwSUh0Y2JpQWdJQ0JqYjI1emRDQnBiWEJzYVdWa1VtOXNaU0E5SUc5eVp5NW5aWFJTYjJ4bGN5Z3BMbWRsZENocGJYQnNhV1ZrVW05c1pVNWhiV1VzWEc0Z0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUhKbGNYVnBjbVZrSUNBNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUdWeWNrMXpaMGRsYmlBNklDaHVZVzFsS1NBOVBpQmdVM1JoWm1ZZ2JXVnRZbVZ5SUNja2UzTXVaMlYwUlcxaGFXd29LWDBuSUdOc1lXbHRjeUIxYm10dWIzZHVJSEp2YkdVZ0p5UjdibUZ0WlgwbklDaGllU0JwYlhCc2FXTmhkR2x2YmlrdVlGeHVJQ0FnSUNBZ2ZTbGNibHh1SUNBZ0lDOHZJR052Ym5OdmJHVXVaWEp5YjNJb1lGQnliMk5sYzNOcGJtY2djM1JoWm1ZZ2FXMXdiR2xsWkNCeWIyeGxPaUFrZTNNdVoyVjBSVzFoYVd3b0tYMHZKSHRwYlhCc2FXVmtVbTlzWlU1aGJXVjlZQ2tnTHk4Z1JFVkNWVWRjYmx4dUlDQWdJR052Ym5OMElHMWhibUZuWlhJZ1BTQnRibWR5VUhKdmRHOWpiMndnUFQwOUlDZHpaV3htSjF4dUlDQWdJQ0FnUHlCekxtZGxkRVZ0WVdsc0tDbGNiaUFnSUNBZ0lEb2diVzVuY2xCeWIzUnZZMjlzSUQwOVBTQW5jMkZ0WlNkY2JpQWdJQ0FnSUNBZ1B5QnlaV011YldGdVlXZGxjbHh1SUNBZ0lDQWdJQ0E2SUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhnVlc1cmIzZHVJQ2h2Y2lCMWJtUmxabWx1WldRL0tTQnRZVzVoWjJWeUlIQnliM1J2WTI5c0lDY2tlMjF1WjNKUWNtOTBiMk52YkgwbklHWnZkVzVrSUhkb2FXeGxJSEJ5YjJObGMzTnBibWNnYzNSaFptWXVZQ2xjYmlBZ0lDQmpiMjV6ZENCcGJYQnNhV1ZrVW1WaklEMGdleUJ1WVcxbElEb2dhVzF3YkdsbFpGSnZiR1ZPWVcxbExDQnRZVzVoWjJWeUlIMWNiaUFnSUNCeWIyeGxjeTV3ZFhOb0tHTnZiblpsY25SU2IyeGxWRzlCZEhSaFkyaGxaQ2h6TENCcGJYQnNhV1ZrVW1WakxDQnBiWEJzYVdWa1VtOXNaU3dnYjNKbktTbGNiaUFnSUNCd2NtOWpaWE56U1cxd2JHbGxaRkp2YkdWektISnZiR1Z6TENCekxDQnBiWEJzYVdWa1VtVmpMQ0JwYlhCc2FXVmtVbTlzWlN3Z2IzSm5LVnh1SUNCOVhHNTlYRzVjYmk4cUtseHVLaUJQWW14cFoybDBiM0o1SUNkamFHVmphME52Ym1ScGRHbHZiaWNnWm5WdVkzUnBiMjRnY0hKdmRtbGtaV1FnWW5rZ2RHaGxJRUZRU1NCbWIzSWdjSEp2WTJWemMybHVaeUJwYm1Oc2RYTnBiMjRnYjNJZ1pYaGpiSFZ6YVc5dUlHOW1JRk4wWVdabUlIUmhjbWRsZEhNZ2FXNWNiaW9nWVc0Z1lYVmthWFF1WEc0cUwxeHVZMjl1YzNRZ1kyaGxZMnREYjI1a2FYUnBiMjRnUFNBb1kyOXVaR2wwYVc5dUxDQnRaVzFpWlhJcElEMCtJSHRjYmlBZ1kyOXVjM1FnY0dGeVlXMWxkR1Z5Y3lBOUlFOWlhbVZqZEM1aGMzTnBaMjRvWEc0Z0lDQWdlMXh1SUNBZ0lDQWdVMFZEWDFSU1NWWkpRVXdnT2lBeExGeHVJQ0FnSUNBZ1FVeFhRVmxUSUNBZ0lDQWdPaUF4TEZ4dUlDQWdJQ0FnVGtWV1JWSWdJQ0FnSUNBZ09pQXdYRzRnSUNBZ2ZTeGNiaUFnSUNCdFpXMWlaWEl1Y0dGeVlXMWxkR1Z5Y3lsY2JseHVJQ0F2THlCVVQwUlBPaUIwWlhOMElHbG1JR3hsWVhacGJtY2dhWFFnSjNSeWRXVW5MeWRtWVd4elpTY2dkMjl5YTNNdVhHNGdJSEJoY21GdFpYUmxjbk11U1ZOZlJVMVFURTlaUlVVZ1BTQnRaVzFpWlhJdVoyVjBSVzF3Ykc5NWJXVnVkRk4wWVhSMWN5Z3BJRDA5UFNBblpXMXdiRzk1WldVbklEOGdNU0E2SURCY2JpQWdjR0Z5WVcxbGRHVnljeTVKVTE5RFQwNVVVa0ZEVkU5U0lEMGdiV1Z0WW1WeUxtZGxkRVZ0Y0d4dmVXMWxiblJUZEdGMGRYTW9LU0E5UFQwZ0oyTnZiblJ5WVdOMGIzSW5JRDhnTVNBNklEQmNibHh1SUNCdFpXMWlaWEl1WjJWMFVtOXNaVTVoYldWektDa3VabTl5UldGamFDaHliMnhsSUQwK0lIdGNiaUFnSUNCd1lYSmhiV1YwWlhKelcyQklRVk5mSkh0eWIyeGxMblJ2VlhCd1pYSkRZWE5sS0NrdWNtVndiR0ZqWlNndklDOW5MQ0FuWHljcGZWOVNUMHhGWUYwZ1BTQXhYRzRnSUgwcFhHNWNiaUFnWTI5dWMzUWdaWFpoYkhWaGRHOXlJRDBnYm1WM0lFVjJZV3gxWVhSdmNpaDdJSEJoY21GdFpYUmxjbk1zSUhwbGNtOVNaWE1nZlNsY2JpQWdjbVYwZFhKdUlHVjJZV3gxWVhSdmNpNWxkbUZzVkhKMWRHZ29ZMjl1WkdsMGFXOXVLVnh1ZlZ4dVhHNVRkR0ZtWmk1amFHVmphME52Ym1ScGRHbHZiaUE5SUdOb1pXTnJRMjl1WkdsMGFXOXVYRzVjYm1WNGNHOXlkQ0I3SUZOMFlXWm1JSDFjYmlJc0lpOHFLbHh1S2lCQ1lYTnBZeUJ0WlhSb2IyUnpJR1p2Y2lCaFkyTmxjM05wYm1jZ2RHaGxJSFpsYm1SdmNuTXZjSEp2WkhWamRDQmtZWFJoTGlCT2IzUmxJSFJvWVhRZ1puVnVZM1JwYjI1aGJHbDBlU0JwY3lCemNHeHBkQ0IxY0NCc2FXdGxJSFJvYVhNZ2RHOGdiV0ZyWlNCMGFHVnpaVnh1S2lCbWRXNWpkR2x2Ym5NZ1pXRnphV1Z5SUhSdklIVnVhWFFnZEdWemRDNWNiaW92WEc1Y2JpOHFLbHh1S2lCU1pYUnlhV1YyWlhNZ1lTQnphVzVuYkdVZ2RtVnVaRzl5TDNCeWIyUjFZM1FnWlc1MGNua2dZbmtnYm1GdFpTNWNiaW92WEc1amIyNXpkQ0JuWlhRZ1BTQW9aR0YwWVN3Z2JtRnRaU2tnUFQ0Z1pHRjBZVDh1ZG1WdVpHOXljejh1VzI1aGJXVmRJQ1ltSUhSdlUzUmhibVJoYkc5dVpTaGtZWFJoTENCdVlXMWxLVnh1WEc1amIyNXpkQ0JzYVhOMElEMGdLR1JoZEdFcElEMCtJRTlpYW1WamRDNXJaWGx6S0dSaGRHRS9MblpsYm1SdmNuTWdmSHdnZTMwcExuTnZjblFvS1M1dFlYQW9LR3RsZVNrZ1BUNGdkRzlUZEdGdVpHRnNiMjVsS0dSaGRHRXNJR3RsZVNrcFhHNWNiaTh2SUdobGJIQmxjaTl1YjI0dFpYaHdiM0owWldRZ2FYUmxiWE5jYmk4cUtseHVLaUJUYVc1alpTQnZkWElnWkdGMFlTQnBjeUJqYjIxd2JHVjBaU0JoY3lCcGN5d2dkR2hwY3lCcWRYTjBJRzFoYTJWeklHRWdZMjl3ZVNCbWIzSWdjMkZtWlhSNUozTWdjMkZyWlM1Y2Jpb3ZYRzVqYjI1emRDQjBiMU4wWVc1a1lXeHZibVVnUFNBb1pHRjBZU3dnYm1GdFpTa2dQVDRnVDJKcVpXTjBMbUZ6YzJsbmJpaDdJR2xrSURvZ2JtRnRaU0I5TENCa1lYUmhMblpsYm1SdmNuTmJibUZ0WlYwcFhHNWNibVY0Y0c5eWRDQjdJR2RsZEN3Z2JHbHpkQ0I5WEc0aUxDSnBiWEJ2Y25RZ2V5QkZkbUZzZFdGMGIzSWdmU0JtY205dElDZEFiR2x4ZFdsa0xXeGhZbk12WTI5dVpHbDBhVzl1TFdWMllXd25YRzVjYm1sdGNHOXlkQ0FxSUdGeklIWmxibVJ2Y25NZ1puSnZiU0FuTGk5V1pXNWtiM0p6SjF4dVhHNHZLaXBjYmlvZ1VIVmliR2xqSUVGUVNTQm1iM0lnYldGdVlXZHBibWNnZG1WdVpHOXlMM0J5YjJSMVkzUWdjbVZqYjNKa2N5NGdWWE5sY3lCMGFHVWdZRlpsYm1SdmNuTmdJR3hwWW5KaGNua3NJSGRvYVdOb0lHRmpkSFZoYkd4NUlHbHRjR3hsYldWdWRITWdkR2hsSUdaMWJtTjBhVzl1Y3k1Y2Jpb2dWR2hsSUd4cFluSmhjbmtnYVhNZ2MzQnNhWFFnYkdsclpTQjBhR2x6SUhSdklHMWhhMlVnZEdWemRHbHVaeUJsWVhOcFpYSXVYRzRxTDF4dVkyOXVjM1FnVm1WdVpHOXljMEZRU1NBOUlHTnNZWE56SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvYjNKbktTQjdYRzRnSUNBZ2RHaHBjeTV2Y21jZ1BTQnZjbWRjYmlBZ0lDQjBhR2x6TG1Ob1pXTnJRMjl1WkdsMGFXOXVJRDBnVm1WdVpHOXljMEZRU1M1amFHVmphME52Ym1ScGRHbHZibHh1WEc0Z0lDQWdkR2hwY3k1clpYa2dQU0FuVG1GdFpTZGNiaUFnZlZ4dVhHNGdJR2RsZENodVlXMWxLU0I3SUhKbGRIVnliaUIyWlc1a2IzSnpMbWRsZENoMGFHbHpMbTl5Wnk1cGJtNWxjbE4wWVhSbExDQnVZVzFsS1NCOVhHNWNiaUFnYkdsemRDZ3BJSHNnY21WMGRYSnVJSFpsYm1SdmNuTXViR2x6ZENoMGFHbHpMbTl5Wnk1cGJtNWxjbE4wWVhSbEtTQjlYRzU5WEc1Y2JpOHFLbHh1S2lCUFlteHBaMmwwYjNKNUlDZGphR1ZqYTBOdmJtUnBkR2x2YmljZ1puVnVZM1JwYjI0Z2NISnZkbWxrWldRZ1lua2dkR2hsSUVGUVNTQm1iM0lnY0hKdlkyVnpjMmx1WnlCcGJtTnNkWE5wYjI0Z2IzSWdaWGhqYkhWemFXOXVJRzltSUVGalkyOTFiblFnZEdGeVoyVjBjeUJwYmx4dUtpQmhiaUJoZFdScGRDNGdWMlVnWkc4Z2RHaHBjeUIzWldseVpDQW5aR1ZtYVc1bFVISnZjR1Z5ZEhrbklIUm9hVzVuSUdKbFkyRjFjMlVnYVhRZ1pXWm1aV04wYVhabGJIa2daMmwyWlhNZ2RYTWdZU0FuYzNSaGRHbGpJR052Ym5OMEoxeHVLaTljYm1OdmJuTjBJR05vWldOclEyOXVaR2wwYVc5dUlEMGdLR052Ym1ScGRHbHZiaXdnY0hKdlpIVmpkRkpsWXlrZ1BUNGdlMXh1SUNCamIyNXpkQ0J3WVhKaGJXVjBaWEp6SUQwZ1QySnFaV04wTG1GemMybG5iaWhjYmlBZ0lDQjdYRzRnSUNBZ0lDQlRSVU5mVkZKSlZrbEJUQ0E2SURFc1hHNGdJQ0FnSUNCQlRGZEJXVk1nSUNBZ0lDQTZJREVzWEc0Z0lDQWdJQ0JPUlZaRlVpQWdJQ0FnSUNBNklEQXNYRzRnSUNBZ0lDQk9UMDVGSUNBZ0lDQWdJQ0E2SURBc1hHNGdJQ0FnSUNCTVQxY2dJQ0FnSUNBZ0lDQTZJREVzWEc0Z0lDQWdJQ0JOVDBSRlVrRlVSU0FnSUNBNklESXNYRzRnSUNBZ0lDQklTVWRJSUNBZ0lDQWdJQ0E2SURNc1hHNGdJQ0FnSUNCRldFbFRWRVZPVkVsQlRDQTZJRFJjYmlBZ0lDQjlMRnh1SUNBZ0lIQnliMlIxWTNSU1pXTXVjR0Z5WVcxbGRHVnljMXh1SUNBcFhHNWNiaUFnTHk4Z1ZFOUVUem9nWTNKbFlYUmxJR0VnYUdGdVpHeDVJR052Ym5abGNuTnBiMjRnWTJ4aGMzTXZiR2xpSUdadmNpQjBhR1VnYzJWdWMybDBhWFpwZEhrZ1kyOWtaWE03SUZObGJuTnBkR2wyYVhSNVEyOWtaVDljYmlBZ1kyOXVjM1FnYzJWdWMybDBhWFpwZEhsRGIyUmxJRDBnY0hKdlpIVmpkRkpsWTFzblUyVnVjMmwwYVhacGRIa2dZWEJ3Y205MllXd25YU0I4ZkNBbmNYVmhjbUZ1ZEdsdVpXUWdiMjVzZVNkY2JseHVJQ0J6ZDJsMFkyZ2dLSE5sYm5OcGRHbDJhWFI1UTI5a1pTa2dlMXh1SUNCallYTmxJQ2QwYjNBZ2MyVmpjbVYwSUhWelpTYzZYRzRnSUNBZ2NHRnlZVzFsZEdWeWN5NVRSVTVUU1ZSSlZrbFVXU0E5SURBN0lHSnlaV0ZyWEc0Z0lHTmhjMlVnSjNObFkzSmxkQ0IxYzJVbk9seHVJQ0FnSUhCaGNtRnRaWFJsY25NdVUwVk9VMGxVU1ZaSlZGa2dQU0F4T3lCaWNtVmhhMXh1SUNCallYTmxJQ2R6Wlc1emFYUnBkbVVnZFhObEp6cGNiaUFnSUNCd1lYSmhiV1YwWlhKekxsTkZUbE5KVkVsV1NWUlpJRDBnTWpzZ1luSmxZV3RjYmlBZ1kyRnpaU0FuWjJWdVpYSmhiQ0IxYzJVbk9seHVJQ0FnSUhCaGNtRnRaWFJsY25NdVUwVk9VMGxVU1ZaSlZGa2dQU0F6T3lCaWNtVmhhMXh1SUNCallYTmxJQ2R4ZFdGeVlXNTBhVzVsWkNCdmJteDVKenBjYmlBZ0lDQndZWEpoYldWMFpYSnpMbE5GVGxOSlZFbFdTVlJaSUQwZ05Ec2dZbkpsWVd0Y2JpQWdaR1ZtWVhWc2REcGNiaUFnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWUZWdWEyNXZkMjRnYzJWdWMybDBhWFpwZEhrZ1lYQndjbTkyWVd3Z1kyOWtaVG9nSnlSN2MyVnVjMmwwYVhacGRIbERiMlJsZlNjdVlDbGNiaUFnZlZ4dVhHNGdJQzh2SUdOdmJtWnBaM1Z5WlNCMGFHVWdibTl1TFdWNGFYTjBaVzUwSUhSaFozTWdkRzhnSjNwbGNtOG5JRzkxZEZ4dUlDQXZMeUJqYjI1emRDQjZaWEp2VW1WeklEMGdXeTlDVlZOSlRrVlRVM3hPUlZSWFQxSkxTVTVITDExY2JpQWdZMjl1YzNRZ2VtVnliMUpsY3lBOUlGdGRYRzVjYmlBZ1kyOXVjM1FnWlhaaGJIVmhkRzl5SUQwZ2JtVjNJRVYyWVd4MVlYUnZjaWg3SUhCaGNtRnRaWFJsY25Nc0lIcGxjbTlTWlhNZ2ZTbGNiaUFnY21WMGRYSnVJR1YyWVd4MVlYUnZjaTVsZG1Gc1ZISjFkR2dvWTI5dVpHbDBhVzl1S1Z4dWZWeHVYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1ZtVnVaRzl5YzBGUVNTd2dKMk5vWldOclEyOXVaR2wwYVc5dUp5d2dlMXh1SUNCMllXeDFaU0FnSUNBZ0lDQWdPaUJqYUdWamEwTnZibVJwZEdsdmJpeGNiaUFnZDNKcGRHRmliR1VnSUNBZ0lEb2dabUZzYzJVc1hHNGdJR1Z1ZFcxbGNtRmliR1VnSUNBNklIUnlkV1VzWEc0Z0lHTnZibVpwWjNWeVlXSnNaU0E2SUdaaGJITmxYRzU5S1Z4dVhHNWxlSEJ2Y25RZ2V5QldaVzVrYjNKelFWQkpJSDFjYmlJc0lpOHFJRUJtYkc5M0lDb3ZYRzR2S2pvNlhHNWNiblI1Y0dVZ1JHOTBaVzUyVUdGeWMyVlBjSFJwYjI1eklEMGdlMXh1SUNCa1pXSjFaejg2SUdKdmIyeGxZVzVjYm4xY2JseHVMeThnYTJWNWN5QmhibVFnZG1Gc2RXVnpJR1p5YjIwZ2MzSmpYRzUwZVhCbElFUnZkR1Z1ZGxCaGNuTmxUM1YwY0hWMElEMGdleUJiYzNSeWFXNW5YVG9nYzNSeWFXNW5JSDFjYmx4dWRIbHdaU0JFYjNSbGJuWkRiMjVtYVdkUGNIUnBiMjV6SUQwZ2UxeHVJQ0J3WVhSb1B6b2djM1J5YVc1bkxDQXZMeUJ3WVhSb0lIUnZJQzVsYm5ZZ1ptbHNaVnh1SUNCbGJtTnZaR2x1Wno4NklITjBjbWx1Wnl3Z0x5OGdaVzVqYjJScGJtY2diMllnTG1WdWRpQm1hV3hsWEc0Z0lHUmxZblZuUHpvZ2MzUnlhVzVuSUM4dklIUjFjbTRnYjI0Z2JHOW5aMmx1WnlCbWIzSWdaR1ZpZFdkbmFXNW5JSEIxY25CdmMyVnpYRzU5WEc1Y2JuUjVjR1VnUkc5MFpXNTJRMjl1Wm1sblQzVjBjSFYwSUQwZ2UxeHVJQ0J3WVhKelpXUS9PaUJFYjNSbGJuWlFZWEp6WlU5MWRIQjFkQ3hjYmlBZ1pYSnliM0kvT2lCRmNuSnZjbHh1ZlZ4dVhHNHFMMXh1WEc1amIyNXpkQ0JtY3lBOUlISmxjWFZwY21Vb0oyWnpKeWxjYm1OdmJuTjBJSEJoZEdnZ1BTQnlaWEYxYVhKbEtDZHdZWFJvSnlsY2JseHVablZ1WTNScGIyNGdiRzluSUNodFpYTnpZV2RsSUM4cU9pQnpkSEpwYm1jZ0tpOHBJSHRjYmlBZ1kyOXVjMjlzWlM1c2IyY29ZRnRrYjNSbGJuWmRXMFJGUWxWSFhTQWtlMjFsYzNOaFoyVjlZQ2xjYm4xY2JseHVZMjl1YzNRZ1RrVlhURWxPUlNBOUlDZGNYRzRuWEc1amIyNXpkQ0JTUlY5SlRrbGZTMFZaWDFaQlRDQTlJQzllWEZ4ektpaGJYRngzTGkxZEt5bGNYSE1xUFZ4Y2N5b29MaW9wUDF4Y2N5b2tMMXh1WTI5dWMzUWdVa1ZmVGtWWFRFbE9SVk1nUFNBdlhGeGNYRzR2WjF4dVkyOXVjM1FnVGtWWFRFbE9SVk5mVFVGVVEwZ2dQU0F2WEZ4dWZGeGNjbnhjWEhKY1hHNHZYRzVjYmk4dklGQmhjbk5sY3lCemNtTWdhVzUwYnlCaGJpQlBZbXBsWTNSY2JtWjFibU4wYVc5dUlIQmhjbk5sSUNoemNtTWdMeW82SUhOMGNtbHVaeUI4SUVKMVptWmxjaUFxTHl3Z2IzQjBhVzl1Y3lBdktqb2dQMFJ2ZEdWdWRsQmhjbk5sVDNCMGFXOXVjeUFxTHlrZ0x5bzZJRVJ2ZEdWdWRsQmhjbk5sVDNWMGNIVjBJQ292SUh0Y2JpQWdZMjl1YzNRZ1pHVmlkV2NnUFNCQ2IyOXNaV0Z1S0c5d2RHbHZibk1nSmlZZ2IzQjBhVzl1Y3k1a1pXSjFaeWxjYmlBZ1kyOXVjM1FnYjJKcUlEMGdlMzFjYmx4dUlDQXZMeUJqYjI1MlpYSjBJRUoxWm1abGNuTWdZbVZtYjNKbElITndiR2wwZEdsdVp5QnBiblJ2SUd4cGJtVnpJR0Z1WkNCd2NtOWpaWE56YVc1blhHNGdJSE55WXk1MGIxTjBjbWx1WnlncExuTndiR2wwS0U1RlYweEpUa1ZUWDAxQlZFTklLUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2hzYVc1bExDQnBaSGdwSUh0Y2JpQWdJQ0F2THlCdFlYUmphR2x1WnlCY0lrdEZXU2NnWVc1a0lDZFdRVXduSUdsdUlDZExSVms5VmtGTUoxeHVJQ0FnSUdOdmJuTjBJR3RsZVZaaGJIVmxRWEp5SUQwZ2JHbHVaUzV0WVhSamFDaFNSVjlKVGtsZlMwVlpYMVpCVENsY2JpQWdJQ0F2THlCdFlYUmphR1ZrUDF4dUlDQWdJR2xtSUNoclpYbFdZV3gxWlVGeWNpQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0JyWlhsV1lXeDFaVUZ5Y2xzeFhWeHVJQ0FnSUNBZ0x5OGdaR1ZtWVhWc2RDQjFibVJsWm1sdVpXUWdiM0lnYldsemMybHVaeUIyWVd4MVpYTWdkRzhnWlcxd2RIa2djM1J5YVc1blhHNGdJQ0FnSUNCc1pYUWdkbUZzSUQwZ0tHdGxlVlpoYkhWbFFYSnlXekpkSUh4OElDY25LVnh1SUNBZ0lDQWdZMjl1YzNRZ1pXNWtJRDBnZG1Gc0xteGxibWQwYUNBdElERmNiaUFnSUNBZ0lHTnZibk4wSUdselJHOTFZbXhsVVhWdmRHVmtJRDBnZG1Gc1d6QmRJRDA5UFNBblhDSW5JQ1ltSUhaaGJGdGxibVJkSUQwOVBTQW5YQ0luWEc0Z0lDQWdJQ0JqYjI1emRDQnBjMU5wYm1kc1pWRjFiM1JsWkNBOUlIWmhiRnN3WFNBOVBUMGdYQ0luWENJZ0ppWWdkbUZzVzJWdVpGMGdQVDA5SUZ3aUoxd2lYRzVjYmlBZ0lDQWdJQzh2SUdsbUlITnBibWRzWlNCdmNpQmtiM1ZpYkdVZ2NYVnZkR1ZrTENCeVpXMXZkbVVnY1hWdmRHVnpYRzRnSUNBZ0lDQnBaaUFvYVhOVGFXNW5iR1ZSZFc5MFpXUWdmSHdnYVhORWIzVmliR1ZSZFc5MFpXUXBJSHRjYmlBZ0lDQWdJQ0FnZG1Gc0lEMGdkbUZzTG5OMVluTjBjbWx1WnlneExDQmxibVFwWEc1Y2JpQWdJQ0FnSUNBZ0x5OGdhV1lnWkc5MVlteGxJSEYxYjNSbFpDd2daWGh3WVc1a0lHNWxkMnhwYm1WelhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBSdmRXSnNaVkYxYjNSbFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGJDQTlJSFpoYkM1eVpYQnNZV05sS0ZKRlgwNUZWMHhKVGtWVExDQk9SVmRNU1U1RktWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJ5WlcxdmRtVWdjM1Z5Y205MWJtUnBibWNnZDJocGRHVnpjR0ZqWlZ4dUlDQWdJQ0FnSUNCMllXd2dQU0IyWVd3dWRISnBiU2dwWEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUc5aWFsdHJaWGxkSUQwZ2RtRnNYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGtaV0oxWnlrZ2UxeHVJQ0FnSUNBZ2JHOW5LR0JrYVdRZ2JtOTBJRzFoZEdOb0lHdGxlU0JoYm1RZ2RtRnNkV1VnZDJobGJpQndZWEp6YVc1bklHeHBibVVnSkh0cFpIZ2dLeUF4ZlRvZ0pIdHNhVzVsZldBcFhHNGdJQ0FnZlZ4dUlDQjlLVnh1WEc0Z0lISmxkSFZ5YmlCdlltcGNibjFjYmx4dUx5OGdVRzl3ZFd4aGRHVnpJSEJ5YjJObGMzTXVaVzUySUdaeWIyMGdMbVZ1ZGlCbWFXeGxYRzVtZFc1amRHbHZiaUJqYjI1bWFXY2dLRzl3ZEdsdmJuTWdMeW82SUQ5RWIzUmxiblpEYjI1bWFXZFBjSFJwYjI1eklDb3ZLU0F2S2pvZ1JHOTBaVzUyUTI5dVptbG5UM1YwY0hWMElDb3ZJSHRjYmlBZ2JHVjBJR1J2ZEdWdWRsQmhkR2dnUFNCd1lYUm9MbkpsYzI5c2RtVW9jSEp2WTJWemN5NWpkMlFvS1N3Z0p5NWxiblluS1Z4dUlDQnNaWFFnWlc1amIyUnBibWNnTHlvNklITjBjbWx1WnlBcUx5QTlJQ2QxZEdZNEoxeHVJQ0JzWlhRZ1pHVmlkV2NnUFNCbVlXeHpaVnh1WEc0Z0lHbG1JQ2h2Y0hScGIyNXpLU0I3WEc0Z0lDQWdhV1lnS0c5d2RHbHZibk11Y0dGMGFDQWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQmtiM1JsYm5aUVlYUm9JRDBnYjNCMGFXOXVjeTV3WVhSb1hHNGdJQ0FnZlZ4dUlDQWdJR2xtSUNodmNIUnBiMjV6TG1WdVkyOWthVzVuSUNFOUlHNTFiR3dwSUh0Y2JpQWdJQ0FnSUdWdVkyOWthVzVuSUQwZ2IzQjBhVzl1Y3k1bGJtTnZaR2x1WjF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvYjNCMGFXOXVjeTVrWldKMVp5QWhQU0J1ZFd4c0tTQjdYRzRnSUNBZ0lDQmtaV0oxWnlBOUlIUnlkV1ZjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0IwY25rZ2UxeHVJQ0FnSUM4dklITndaV05wWm5scGJtY2dZVzRnWlc1amIyUnBibWNnY21WMGRYSnVjeUJoSUhOMGNtbHVaeUJwYm5OMFpXRmtJRzltSUdFZ1luVm1abVZ5WEc0Z0lDQWdZMjl1YzNRZ2NHRnljMlZrSUQwZ2NHRnljMlVvWm5NdWNtVmhaRVpwYkdWVGVXNWpLR1J2ZEdWdWRsQmhkR2dzSUhzZ1pXNWpiMlJwYm1jZ2ZTa3NJSHNnWkdWaWRXY2dmU2xjYmx4dUlDQWdJRTlpYW1WamRDNXJaWGx6S0hCaGNuTmxaQ2t1Wm05eVJXRmphQ2htZFc1amRHbHZiaUFvYTJWNUtTQjdYRzRnSUNBZ0lDQnBaaUFvSVU5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNod2NtOWpaWE56TG1WdWRpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQndjbTlqWlhOekxtVnVkbHRyWlhsZElEMGdjR0Z5YzJWa1cydGxlVjFjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvWkdWaWRXY3BJSHRjYmlBZ0lDQWdJQ0FnYkc5bktHQmNJaVI3YTJWNWZWd2lJR2x6SUdGc2NtVmhaSGtnWkdWbWFXNWxaQ0JwYmlCY1hHQndjbTlqWlhOekxtVnVkbHhjWUNCaGJtUWdkMmxzYkNCdWIzUWdZbVVnYjNabGNuZHlhWFIwWlc1Z0tWeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcFhHNWNiaUFnSUNCeVpYUjFjbTRnZXlCd1lYSnpaV1FnZlZ4dUlDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIc2daWEp5YjNJNklHVWdmVnh1SUNCOVhHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpMbU52Ym1acFp5QTlJR052Ym1acFoxeHViVzlrZFd4bExtVjRjRzl5ZEhNdWNHRnljMlVnUFNCd1lYSnpaVnh1SWl3aWFXMXdiM0owSUdSdmRHVnVkaUJtY205dElDZGtiM1JsYm5ZblhHNXBiWEJ2Y25RZ0tpQmhjeUJtY3lCbWNtOXRJQ2RtY3lkY2JseHVZMjl1YzNRZ2JHOWhaRUpoYzJoVFpYUjBhVzVuY3lBOUlDaHpaWFIwYVc1bmMxQmhkR2dzSUM0dUxuSmxjWFZwY21Wa1VHRnlZVzF6S1NBOVBpQjdYRzRnSUdsbUlDZ2habk11WlhocGMzUnpVM2x1WXloelpYUjBhVzVuYzFCaGRHZ3BLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHQkVhV1FnYm05MElHWnBibVFnWlhod1pXTjBaV1FnYzJWMGRHbHVaM01nWm1sc1pUb2dKeVI3YzJWMGRHbHVaM05RWVhSb2ZTZGdLVnh1SUNCOUlDOHZJR1ZzYzJVZ1kyOXVkR2x1ZFdWY2JpQWdZMjl1YzNRZ1pXNTJVbVZ6ZFd4MElEMGdaRzkwWlc1MkxtTnZibVpwWnloN0lIQmhkR2dnT2lCelpYUjBhVzVuYzFCaGRHZ2dmU2xjYmlBZ2FXWWdLR1Z1ZGxKbGMzVnNkQzVsY25KdmNpa2dlMXh1SUNBZ0lIUm9jbTkzSUdWdWRsSmxjM1ZzZEM1bGNuSnZjbHh1SUNCOVhHNWNiaUFnWm05eUlDaGpiMjV6ZENCeVpYRlFZWEpoYlNCdlppQnlaWEYxYVhKbFpGQmhjbUZ0Y3lrZ2UxeHVJQ0FnSUdsbUlDaHdjbTlqWlhOekxtVnVkbHR5WlhGUVlYSmhiVjBnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtHQkVhV1FnYm05MElHWnBibVFnWlhod1pXTjBaV1FnSnlSN2NtVnhVR0Z5WVcxOUp5QjJZV3gxWlNCcGJpQnpaWFIwYVc1bmN5Qm1hV3hsT2lBa2UzTmxkSFJwYm1kelVHRjBhSDFnS1Z4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnZXlCc2IyRmtRbUZ6YUZObGRIUnBibWR6SUgxY2JpSXNJbWx0Y0c5eWRDQXFJR0Z6SUdacWMyOXVJR1p5YjIwZ0owQnNhWEYxYVdRdGJHRmljeTltWldSbGNtRjBaV1F0YW5OdmJpZGNibHh1YVcxd2IzSjBJSHNnYkc5aFpFSmhjMmhUWlhSMGFXNW5jeUI5SUdaeWIyMGdKeTR2WW1GemFDMWxiblluWEc1Y2JtTnZibk4wSUd4dllXUlBjbWRUZEdGMFpTQTlJQ2hrWVhSaFVHRjBhQ2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQnNhWEZUWlhSMGFXNW5jMUJoZEdnZ1BTQmdKSHR3Y205alpYTnpMbVZ1ZGk1SVQwMUZmUzh1YkdseEwzTmxkSFJwYm1kekxuTm9ZRnh1SUNCc2IyRmtRbUZ6YUZObGRIUnBibWR6S0d4cGNWTmxkSFJwYm1kelVHRjBhQ3dnSjB4SlVWOVFURUZaUjFKUFZVNUVKeWxjYmx4dUlDQXZMeUJtYVhKemRDd2dkMlVnYUdGdVpHeGxJSFJvWlNCdmNtbG5hVzVoYkNCaVlYTm9MV05sYm5SeWFXTWdZWEJ3Y205aFkyZ3NJR05sYm5SbGNtVmtJRzl1SUdsdVpHbDJhV1IxWVd3Z2MyVjBkR2x1WjNOY2JpQWdZMjl1YzNRZ2IzSm5VMlYwZEdsdVozTlFZWFJvSUQwZ1lDUjdaR0YwWVZCaGRHaDlMMjl5WjNNdmMyVjBkR2x1WjNNdWMyaGdYRzRnSUM4dklGUlBSRTg2SUhSb1pTQW5UMUpIWDBsRUp5QnBjeUJsZUhCbFkzUmxaQ0IwYnlCaVpTQnpaWFFnWm5KdmJTQjBhR1VnYjJ4a0lITjBlV3hsSUhObGRIUnBibWR6TG5Ob095QjNaU0J6YUc5MWJHUWdkR0ZyWlNCMGFHbHpJR2x1SUhSb1pTQmpiMjV6ZEhKMVkzUnZjbHh1SUNCc2IyRmtRbUZ6YUZObGRIUnBibWR6S0c5eVoxTmxkSFJwYm1kelVHRjBhQ3dnSjA5U1IxOUpSQ2NwWEc0Z0lDOHZJSFJvWlNBbmMyVjBkR2x1WjNNdWMyZ25JSFpoYkhWbGN5QmhjbVVnYm05M0lHRjJZV2xzWVd4bElHOXVJSEJ5YjJObGMzTXVaVzUyWEc1Y2JpQWdMeThnWVc1a0lHaGxjbVVuY3lCMGFHVWdjSEp2ZEc5MGVYQmxJRzVsZHlCaGNIQnliMkZqYURzZ2RHaGxJSEpsWVdRZ1puVnVZM1JwYjI0Z2FHRnVaR3hsY3lCMGFHVWdKMlY0YVhOMGN5Y2dZMmhsWTJ0Y2JpQWdjbVYwZFhKdUlHWnFjMjl1TG5KbFlXUW9ZQ1I3WkdGMFlWQmhkR2g5TDI5eVozTXZKSHR3Y205alpYTnpMbVZ1ZGk1UFVrZGZTVVI5TG1wemIyNWdLVnh1ZlZ4dVhHNWxlSEJ2Y25RZ2V5QnNiMkZrVDNKblUzUmhkR1VnZlZ4dUlpd2lhVzF3YjNKMElIc2dUM0puVTNSeWRXTjBkWEpsSUgwZ1puSnZiU0FuTGk5UGNtZFRkSEoxWTNSMWNtVW5YRzVwYlhCdmNuUWdleUJLVTA5T1RHOXZjQ0I5SUdaeWIyMGdKeTR2YkdsaUwwcFRUMDVNYjI5d0oxeHVYRzVwYlhCdmNuUWdleUJCWTJOdmRXNTBjMEZRU1NCOUlHWnliMjBnSnk0dUwyRmpZMjkxYm5SekoxeHVhVzF3YjNKMElIc2dRWFZrYVhSU1pXTnZjbVJ6UVZCSklIMGdabkp2YlNBbkxpNHZZWFZrYVhSU1pXTnZjbVJ6SjF4dWFXMXdiM0owSUhzZ1VtOXNaWE1nZlNCbWNtOXRJQ2N1TGk5eWIyeGxjeWRjYm1sdGNHOXlkQ0I3SUZOMFlXWm1JSDBnWm5KdmJTQW5MaTR2YzNSaFptWW5YRzVwYlhCdmNuUWdleUJXWlc1a2IzSnpRVkJKSUgwZ1puSnZiU0FuTGk0dmRtVnVaRzl5Y3lkY2JtbHRjRzl5ZENCN0lHeHZZV1JQY21kVGRHRjBaU0I5SUdaeWIyMGdKeTR1TDJ4cFlpOXZjbWN0YzNSaGRHVW5YRzVjYm1OdmJuTjBJRTl5WjJGdWFYcGhkR2x2YmlBOUlHTnNZWE56SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvWkdGMFlWQmhkR2dzSUhOMFlXWm1Tbk52YmxCaGRHZ3BJSHRjYmlBZ0lDQXZMeUJwYm01bGNsTjBZWFJsSUdSbFptbHVaWE02WEc0Z0lDQWdMeThnS2lCMGFHbHlaRkJoY25SNVFXTmpiM1Z1ZEhOY2JpQWdJQ0IwYUdsekxtbHVibVZ5VTNSaGRHVWdQU0JzYjJGa1QzSm5VM1JoZEdVb1pHRjBZVkJoZEdncFhHNWNiaUFnSUNBdkx5QlVUMFJQT2lCTmIzWmxJR0ZzYkNCMGFHbHpJSFJ2SUNkcGJtNWxjbE4wWVhSbEp5QW9abTl5SUhKdmJHVnpJR0Z1WkNCemRHRm1aaXdnWW5rZ2JHOWhaR2x1WnlCaGJHd2dkMmwwYUNCMGFHVWdabVZrWlhKaGRHVmtJR3B6YjI0Z2RYTmxaQ0JwYmx4dUlDQWdJQzh2SUNkc2IyRmtUM0puVTNSaGRHVW5LU0JoYm1RZ2FuVnpkQ0IxYzJVZ2RHaGxJR2RzYjJKaGJDQm9lV1J5WVhScGIyNHVYRzRnSUNBZ2RHaHBjeTVrWVhSaFVHRjBhQ0E5SUdSaGRHRlFZWFJvWEc0Z0lDQWdkR2hwY3k1eWIyeGxjeUE5SUc1bGR5QlNiMnhsY3loMGFHbHpMQ0IwYUdsekxtbHVibVZ5VTNSaGRHVXVjbTlzWlhNcFhHNGdJQ0FnZEdocGN5NXliMnhsY3k1b2VXUnlZWFJsS0NsY2JpQWdJQ0IwYUdsekxtOXlaMU4wY25WamRIVnlaU0E5SUc1bGR5QlBjbWRUZEhKMVkzUjFjbVVvWUNSN1pHRjBZVkJoZEdoOUwyOXlaM012YjNKblgzTjBjblZqZEhWeVpTNXFjMjl1WUN3Z2RHaHBjeTV5YjJ4bGN5bGNiaUFnSUNCMGFHbHpMbk4wWVdabUlEMGdibVYzSUZOMFlXWm1LSE4wWVdabVNuTnZibEJoZEdncFhHNGdJQ0FnZEdocGN5NXpkR0ZtWmk1b2VXUnlZWFJsS0hSb2FYTXBYRzVjYmlBZ0lDQXZMeUJvZVdSeVlYUmxLSFJvYVhNcFhHNWNiaUFnSUNCMGFHbHpMbUZqWTI5MWJuUnpJRDBnYm1WM0lFRmpZMjkxYm5SelFWQkpLSFJvYVhNcFhHNGdJQ0FnZEdocGN5NWhkV1JwZEZKbFkyOXlaSE1nUFNCdVpYY2dRWFZrYVhSU1pXTnZjbVJ6UVZCSktIUm9hWE1wWEc0Z0lDQWdkR2hwY3k1aGRXUnBkSE1nUFNCMGFHbHpMbWx1Ym1WeVUzUmhkR1V1WVhWa2FYUnpYRzRnSUNBZ2RHaHBjeTUyWlc1a2IzSnpJRDBnYm1WM0lGWmxibVJ2Y25OQlVFa29kR2hwY3lsY2JpQWdmVnh1WEc0Z0lDOHZJRlJQUkU4NklHUmxjSEpsWTJGMFpXUTdJR3AxYzNRZ2RYTmxJQ2R2Y21jdWNtOXNaWE1uWEc0Z0lHZGxkRkp2YkdWektDa2dleUJ5WlhSMWNtNGdkR2hwY3k1eWIyeGxjeUI5WEc1Y2JpQWdMeThnVkU5RVR6b2daR1Z3Y21WallYUmxaRHNnYW5WemRDQjFjMlVnSjI5eVp5NXpkR0ZtWmlkY2JpQWdaMlYwVTNSaFptWW9LU0I3SUhKbGRIVnliaUIwYUdsekxuTjBZV1ptSUgxY2JseHVJQ0JuWlhSVFpYUjBhVzVuS0d0bGVTa2dleUJ5WlhSMWNtNGdjSEp2WTJWemN5NWxiblpiYTJWNVhTQjlYRzVjYmlBZ2NtVnhkV2x5WlZObGRIUnBibWNvYTJWNUtTQjdYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxtZGxkRk5sZEhScGJtY29hMlY1S1Z4dUlDQWdJR2xtSUNoMllXeDFaU0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdJSFJvY205M0lHNWxkeUJGY25KdmNpaGdUbThnYzNWamFDQmpiMjF3WVc1NUlITmxkSFJwYm1jZ0p5UjdhMlY1ZlNjdVlDa2dmVnh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaVnh1SUNCOVhHNWNiaUFnYUdGelUzUmhabVpKYmxKdmJHVW9aVzFoYVd3c0lISnZiR1ZPWVcxbEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTXVaMlYwVTNSaFptWW9LUzVuWlhSQ2VWSnZiR1ZPWVcxbEtISnZiR1ZPWVcxbEtTNXpiMjFsS0hNZ1BUNGdjeTVuWlhSRmJXRnBiQ2dwSUQwOVBTQmxiV0ZwYkNsY2JpQWdmVnh1WEc0Z0lHZGxkRTFoYm1GbmFXNW5VbTlzWlhOQ2VVMWhibUZuWldSU2IyeGxUbUZ0WlNoeWIyeGxUbUZ0WlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtOXlaMU4wY25WamRIVnlaUzVuWlhST2IyUmxRbmxTYjJ4bFRtRnRaU2h5YjJ4bFRtRnRaU2t1WjJWMFVHOXpjMmxpYkdWTmJtZHljeWdwWEc0Z0lIMWNibHh1SUNCblpXNWxjbUYwWlU5eVowTm9ZWEowUkdGMFlTaHpkSGxzWlNBOUlDZGtaV0poYm1jdlQzSm5RMmhoY25RbktTQjdYRzRnSUNBZ0x5OGdTVzF3YkdWdFpXNTBZWFJwYjI0Z2JtOTBaWE02WEc0Z0lDQWdMeThnVkdobElHOTJaWEpoYkd3Z2MzUnlkV04wZFhKbElHbHpJR2RsYm1WeVlYUmxaQ0J3WlhJZ2RHaGxJQ2RuYjI5bmJHVXRZMmhoY25RbklITjBlV3hsSUdKNUlIQnliMk5sYzNOcGJtY2daV0ZqYUNCeWIyeGxJRzltSUdWaFkyZ2dkR2wwZFd4aGNpQnliMnhsSUc5bVhHNGdJQ0FnTHk4Z1pXRmphQ0J6ZEdGbVppQnRaVzFpWlhJdUlFRjBJSFJvWlNCdGIyMWxiblFzSUNkbmIyOW5iR1V0WTJoaGNuUW5JSE4wZVd4bElHbHpJRzF2Y21VZ2IyWWdZVzRnYVc1MFpYSnRaV1JwWVhSbElITjBaWEFnZEdoaGJpQmhJR1pwYm1Gc0lHWnZjbTFoZENCaGN5QnBkRnh1SUNBZ0lDOHZJR1J2WlhNZ2JtOTBJSE4xY0hCdmNuUWdkR2hsSUdaMWJHd2djbUZ1WjJVZ2IyWWdaR1Z6YVhKbFpDQm1aV0YwZFhKbGN5NGdWR2hsSUhKbGMzVnNkR2x1WnlCa1lYUmhJR1p2Y20xaGRDQnBjenBjYmlBZ0lDQXZMMXh1SUNBZ0lDOHZJQ0FnSUZzZ0p6eHBibVJwZG1sa2RXRnNJR1Z0WVdsc1BpOXliMnhsSnl3Z0p6eHRZVzVoWjJWeUlHVnRZV2xzUGk5eWIyeGxKeXdnSnp4eWIyeGxJSEYxWVd4cFptbGxjajRuSUYxY2JseHVJQ0FnSUdsbUlDaHpkSGxzWlNBOVBUMGdKMmR2YjJkc1pTMWphR0Z5ZENjcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhKbGMzVnNkQ0E5SUZ0ZFhHNGdJQ0FnSUNBdkx5QnNkV05yYVd4NUxDQjBhR1VnWjI5dloyeGxJRzl5WnlCamFHRnlkQ0JrYjJWemJpZDBJR05oY21VZ2QyaGxkR2hsY2lCM1pTQnpjR1ZqYVdaNUlIUm9aU0J1YjJSbGN5QnBiaUJ2Y21SbGNpQnZjaUJ1YjNRc0lITnZJR2wwSjNNZ1lTQnphVzF3YkdWY2JpQWdJQ0FnSUM4dklIUnlZVzV6Wm05eWJWeHVJQ0FnSUNBZ1QySnFaV04wTG5aaGJIVmxjeWgwYUdsekxtZGxkRk4wWVdabUtDa3VaMlYwUVd4c0tDa3BMbVp2Y2tWaFkyZ29jeUE5UGlCN1hHNGdJQ0FnSUNBZ0lITXVaMlYwUVhSMFlXTm9aV1JTYjJ4bGN5Z3BMbVp2Y2tWaFkyZ29jaUE5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hJdWFYTlVhWFIxYkdGeUtDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUcxNVMyVjVJRDBnWUNSN2N5NW5aWFJGYldGcGJDZ3BmUzhrZTNJdVoyVjBUbUZ0WlNncGZXQmNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzFoYm1GblpYSWdQU0J6TG1kbGRFRjBkR0ZqYUdWa1VtOXNaU2h5TG1kbGRFNWhiV1VvS1NrdVoyVjBUV0Z1WVdkbGNpZ3BYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzFoYm1GblpYSXBJSEpsYzNWc2RDNXdkWE5vS0Z0dGVVdGxlU3dnSnljc0lISXVaMlYwVVhWaGJHbG1hV1Z5S0NsZEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUcxdVozSkZiV0ZwYkNBOUlHMWhibUZuWlhJdVoyVjBSVzFoYVd3b0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVc1aFoybHVaMUp2YkdWeklEMGdkR2hwY3k1blpYUk5ZVzVoWjJsdVoxSnZiR1Z6UW5sTllXNWhaMlZrVW05c1pVNWhiV1VvY2k1blpYUk9ZVzFsS0NrcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzFoYm1GbmFXNW5VbTlzWlNBOUlHMWhibUZuYVc1blVtOXNaWE11Wm1sdVpDaHRibWR5VW05c1pTQTlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFHRnpVM1JoWm1aSmJsSnZiR1VvYlc1bmNrVnRZV2xzTENCdGJtZHlVbTlzWlM1blpYUk9ZVzFsS0NrcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnTHlvZ1lDUjdiVzVuY2tWdFlXbHNmUzhrZTNJdVoyVjBUbUZ0WlNncGZXQWdQVDA5SUcxNVMyVjVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdQeUJ5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnT2lCMGFHbHpMbWRsZEUxaGJtRm5hVzVuVW05c1pYTkNlVTFoYm1GblpXUlNiMnhsVG1GdFpTaHlMbWRsZEU1aGJXVW9LU2t1Wm1sdVpDaHRibWR5VW05c1pTQTlQbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWhoYzFOMFlXWm1TVzVTYjJ4bEtHMXVaM0pGYldGcGJDd2diVzVuY2xKdmJHVXVaMlYwVG1GdFpTZ3BLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnS1NBcUwxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzFoYm1GbmFXNW5VbTlzWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loZ1EyOTFiR1FnYm05MElHWnBibVFnYldGdVlXZGxjaUFrZTIxaGJtRm5hVzVuVW05c1pYTXViV0Z3S0hJZ1BUNGdZQ1I3Ylc1bmNrVnRZV2xzZlM4a2UzSXVibUZ0WlgxZ0tTNXFiMmx1S0NkOEp5bDlJR1p2Y2lBa2UyMTVTMlY1ZlM1Z0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJRzFoYm1GblpYSkxaWGtnUFNCZ0pIdHRibWR5UlcxaGFXeDlMeVI3YldGdVlXZHBibWRTYjJ4bExtZGxkRTVoYldVb0tYMWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZEM1d2RYTm9LRnR0ZVV0bGVTd2diV0Z1WVdkbGNrdGxlU3dnY2k1blpYUlJkV0ZzYVdacFpYSW9LVjBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtWeHVJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDOHZJR052Ym5OdmJHVXVaWEp5YjNJb2NtVnpkV3gwS1NBdkx5QkVSVUpWUjF4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnY21WemRXeDBYRzRnSUNBZ2ZWeHVJQ0FnSUdWc2MyVWdhV1lnS0hOMGVXeGxJRDA5UFNBblpHVmlZVzVuTDA5eVowTm9ZWEowSnlrZ2UxeHVJQ0FnSUNBZ0x5OGdRMjl1ZG1WeWRITWdZWEp5WVhrdFltRnpaV1F2ZEdGaWRXeGhjaUFuVzNOMFlXWm1MQ0J0WVc1aFoyVnlMQ0J4ZFdGc2FXWnBaWEpkSUhSdklHRWdTbE5QVGlCMGNtVmxMQ0JoYkd4dmQybHVaeUJtYjNJZ2RHaGxJSE5oYldVZ2MzUmhabVlnYldWdFltVnlYRzRnSUNBZ0lDQXZMeUIwYnlCaGNIQmxZWElnWVhRZ2JYVnNkR2x3YkdVZ2JtOWtaWE1nZFhOcGJtY2dZMjl1ZG1WeWMybHZiaUJoYkdkdmNtbDBhRzBnWm5KdmJTQmtaV0poYm1jZ1pHVnRiM002SUdoMGRIQnpPaTh2WTI5a1pYQmxiaTVwYnk5a1lXSmxibWN2Y0dWdUwyMVNXbkJNUzF4dUlDQWdJQ0FnWTI5dWMzUWdjMlZsWkVSaGRHRWdQU0IwYUdselhHNGdJQ0FnSUNBZ0lDNW5aVzVsY21GMFpVOXlaME5vWVhKMFJHRjBZU2duWjI5dloyeGxMV05vWVhKMEp5bGNiaUFnSUNBZ0lDQWdMbTFoY0NoeWIzY2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lHTnZibk4wSUZ0bGJXRnBiQ3dnY205c1pVNWhiV1ZkSUQwZ2NtOTNXekJkTG5Od2JHbDBLQzljWEM4dktWeHVJQ0FnSUNBZ0lDQWdJQzh2SUdsbUlIUm9aWEpsSjNNZ1lTQnhkV0ZzYVdacFpYSXNJSGRsSUdOeVpXRjBaU0IwYUdVZ0oyVm1abVZqZEdsMlpTY2djbTlzWlNCdVlXMWxJR2hsY21WY2JpQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCeGRXRnNhV1pwWlhJZ1BTQnliM2RiTWwxY2JpQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMGFYUnNaU0E5SUhGMVlXeHBabWxsY2x4dUlDQWdJQ0FnSUNBZ0lDQWdQeUJ5YjJ4bFRtRnRaUzV5WlhCc1lXTmxLQzllS0ZObGJtbHZjaUFwUHk4c0lHQWtNU1I3Y1hWaGJHbG1hV1Z5ZlNCZ0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnT2lCeWIyeGxUbUZ0WlZ4dUlDQWdJQ0FnSUNBZ0lHTnZibk4wSUhKdmJHVWdQU0IwYUdsekxuSnZiR1Z6TG1kbGRDaHliMnhsVG1GdFpTbGNibHh1SUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE4wWVdabVRXVnRZbVZ5SUQwZ2RHaHBjeTVuWlhSVGRHRm1aaWdwTG1kbGRDaGxiV0ZwYkNsY2JpQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCaFkzUnBibWNnUFNCemRHRm1aazFsYldKbGNpNW5aWFJCZEhSaFkyaGxaRkp2YkdVb2NtOXNaVTVoYldVcExtRmpkR2x1WjF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWkNBZ0lDQWdJQ0FnT2lCeWIzZGJNRjBzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaSE1nSUNBZ0lDQWdPaUJiY205M1d6QmRYU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhjbVZ1ZEY5cFpDQTZJSEp2ZDFzeFhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdFlXbHNJQ0FnSUNBNklHVnRZV2xzTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdibUZ0WlNBZ0lDQWdJRG9nYzNSaFptWk5aVzFpWlhJdVoyVjBSblZzYkU1aGJXVW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnBkR3hsY3lBZ0lDQTZJRnQwYVhSc1pWMHNYRzRnSUNBZ0lDQWdJQ0FnSUNCeWIyeGxjeUFnSUNBZ09pQmJjbTlzWlYwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGJtZGNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcFhHNGdJQ0FnSUNCMllYSWdaR0YwWVNBOUlIdDlYRzRnSUNBZ0lDQjJZWElnWTJocGJHUk9iMlJsY3lBOUlGdGRYRzVjYmlBZ0lDQWdJQzh2SUdKMWFXeGtJRzkxZENCMGFHVWdablZzYkNCMGNtVmxJSGRwZEdnZ1pXRmphQ0IwYVhSMVlXd2djbTlzWlNCaVpXbHVaeUJwZENkeklHOTNiaUIwYUdsdVoxeHVJQ0FnSUNBZ2MyVmxaRVJoZEdFdVptOXlSV0ZqYUNnb2FYUmxiU3dnYVc1a1pYZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZwZEdWdExuQmhjbVZ1ZEY5cFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUU5aWFtVmpkQzVoYzNOcFoyNG9aR0YwWVN3Z2FYUmxiU2xjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCMllYSWdhbk52Ym14dmIzQWdQU0J1WlhjZ1NsTlBUa3h2YjNBb1pHRjBZU3dnSjJsa0p5d2dKMk5vYVd4a2NtVnVKeWxjYmlBZ0lDQWdJQ0FnSUNCcWMyOXViRzl2Y0M1bWFXNWtUbTlrWlVKNVNXUW9aR0YwWVN3Z2FYUmxiUzV3WVhKbGJuUmZhV1FzSUdaMWJtTjBhVzl1S0dWeWNpd2dibTlrWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHVnljaWtnZEdoeWIzY2dibVYzSUVWeWNtOXlLR0JGY25KdmNpQm1hVzVrYVc1bklDY2tlMmwwWlcwdWNHRnlaVzUwWDJsa2ZTYzdJQ1I3WlhKeWZXQXBYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdST2IyUmxjeTV3ZFhOb0tHbDBaVzBwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodWIyUmxMbU5vYVd4a2NtVnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm05a1pTNWphR2xzWkhKbGJpNXdkWE5vS0dsMFpXMHBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm05a1pTNWphR2xzWkhKbGJpQTlJRnRwZEdWdFhWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmU2xjYmx4dUlDQWdJQ0FnWTI5dWMzUWdiV1Z5WjJWT2IyUmxjeUE5SUNoMFlYSm5aWFFzSUhOdmRYSmpaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQjBZWEpuWlhRdWRHbDBiR1Z6TG5CMWMyZ29MaTR1YzI5MWNtTmxMblJwZEd4bGN5bGNiaUFnSUNBZ0lDQWdkR0Z5WjJWMExtbGtjeTV3ZFhOb0tDNHVMbk52ZFhKalpTNXBaSE1wWEc0Z0lDQWdJQ0FnSUhSaGNtZGxkQzV5YjJ4bGN5NXdkWE5vS0M0dUxuTnZkWEpqWlM1eWIyeGxjeWxjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1kyOXNiR0Z3YzJVdmJXVnlaMlVnYm05a1pYTWdkMmhsY21VZ1lYQndjbTl3Y21saGRHVmNiaUFnSUNBZ0lHTm9hV3hrVG05a1pYTXVabTl5UldGamFDaHViMlJsSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FuTnZibXh2YjNBZ1BTQnVaWGNnU2xOUFRreHZiM0FvWkdGMFlTd2dKMmxrSnl3Z0oyTm9hV3hrY21WdUp5bGNiaUFnSUNBZ0lDQWdhbk52Ym14dmIzQXVabWx1WkZCaGNtVnVkQ2hrWVhSaExDQnViMlJsTENBb1pYSnlMQ0J3WVhKbGJuUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvWlhKeUtTQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb1lFTnZkV3hrSUc1dmRDQm1hVzVrSUhCaGNtVnVkQ0JtYjNJZ0p5UjdibTlrWlM1cFpIMG5PeUJwY3lCamFHRnlkQ0IyWVd4cFpEOWdLVnh1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLSEJoY21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdiV1Z5WjJVZ2MybGtaWGRoZVhOY2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb1kyOXVjM1FnY205c1pTQnZaaUJ1YjJSbExuSnZiR1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUM4cUlFOUxMQ0IzWVc1MFpXUWdkRzhnWkc4NlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE5wWW1Kc2FXNW5jMUp2YkdWT1lXMWxjMVJ2VFdWeVoyVWdQU0J5YjJ4bExtbHRjR3hwWlhNL0xtWnBiSFJsY2locGJYQlRjR1ZqSUQwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBiWEJUY0dWakxtMXVaM0pRY205MGIyTnZiQ0E5UFQwZ0ozTmhiV1VuSUNZbUlHNXZaR1V1YVdSekxtbHVaR1Y0VDJZb1lDUjdibTlrWlM1bGJXRnBiSDB2Skh0cGJYQlRjR1ZqTG0xbGNtZGxWMmwwYUgxZ0tTQStQU0F3SUNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdWJXRndLR2tnUFQ0Z2FTNXVZVzFsS1Z4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUVKMWRDQmxjMnhwYm5RZ1kyaHZhMlZ6TGk0dUlHOXVJSFJvWlNCeGRXVnpkR2x2YmlCdFlYSnJQeUJKZENkeklHNXZkQ0JqYkdWaGNpNGdTWFFnZEdGc2EzTWdZV0p2ZFhRZ1lXNGdkVzVrWldacGJtVmtJSEpoYm1kbExseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCVWNtbGxaQ0IxY0dSaGRHbHVaeUJsYzJ4cGJuUWdZVzVrSUdKaFltVnNJR052YlhCdmJtVnVkSE1nTWpBeU1TMHdNeTB5T0NCM2FYUm9JRzV2SUhOMVkyTmxjM011WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRlJQUkU4NklHeHZiMnNnYVc1MGJ5QjBhR2x6SUdGdVpDQnlaWEJ2Y25RZ1luVm5JR2xtSUc1dmRHaHBibWNnWm05MWJtUXVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhOcFltSnNhVzVuYzFKdmJHVk9ZVzFsYzFSdlRXVnlaMlVnUFNCeWIyeGxMbWx0Y0d4cFpYTWdKaVlnY205c1pTNXBiWEJzYVdWekxtWnBiSFJsY2locGJYQlRjR1ZqSUQwK1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXMXdVM0JsWXk1dGJtZHlVSEp2ZEc5amIyd2dQVDA5SUNkellXMWxKeUFtSmlCdWIyUmxMbWxrY3k1cGJtUmxlRTltS0dBa2UyNXZaR1V1WlcxaGFXeDlMeVI3YVcxd1UzQmxZeTV0WlhKblpWZHBkR2g5WUNrZ1BqMGdNQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1YldGd0tHa2dQVDRnYVM1dVlXMWxLVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOdmJuTjBJSFJ5YVcxU2IyeGxjeUE5SUNodUtTQTlQaUI3SUdOdmJuTjBJSHNnY205c1pYTXNJQzR1TG5KbGMzUWdmU0E5SUc0N0lISmxkSFZ5YmlCeVpYTjBPeUI5SUM4dklFUkZRbFZIWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnTHlvZ2FXWWdLSE5wWW1Kc2FXNW5jMUp2YkdWT1lXMWxjMVJ2VFdWeVoyVXBJSHN2THlCRVJVSlZSMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OdmJHVXVaWEp5YjNJb1lGTnBaR1VnYldWeVoybHVaeUIwYnlBa2UyNXZaR1V1ZEdsMGJHVnpXekJkZlZ4Y2JtQXNJSE5wWW1Kc2FXNW5jMUp2YkdWT1lXMWxjMVJ2VFdWeVoyVXBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdLaTljYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoamIyNXpkQ0J0WlhKblpVMWxUbUZ0WlNCdlppQnphV0ppYkdsdVozTlNiMnhsVG1GdFpYTlViMDFsY21kbElIeDhJRnRkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdZQ1I3Ym05a1pTNWxiV0ZwYkgwdkpIdHRaWEpuWlUxbFRtRnRaWDFnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyOXVjMjlzWlM1bGNuSnZjaWhnVEc5dmEybHVaeUJtYjNJZ0p5UjdhMlY1ZlNjZ2RHOGdiV1Z5WjJVZ2FXNDZJR0FzSUhCaGNtVnVkQzVqYUdsc1pISmxiaTV0WVhBb2RISnBiVkp2YkdWektTa3ZMeUJFUlVKVlIxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUcxbGNtZGxUV1ZPYjJSbElEMGdjR0Z5Wlc1MExtTm9hV3hrY21WdUxtWnBibVFvWXlBOVBpQmpMbWxrY3k1bWFXNWtLR2xrSUQwK0lHbGtJRDA5UFNCclpYa3BLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodFpYSm5aVTFsVG05a1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyOXVjMjlzWlM1bGNuSnZjaWduUm05MWJtUTZJQ2NzSUhSeWFXMVNiMnhsY3lodFpYSm5aVTFsVG05a1pTa3BJQzh2SUVSRlFsVkhYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J0WlhKblpVNXZaR1Z6S0c1dlpHVXNJRzFsY21kbFRXVk9iMlJsS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRnlaVzUwTG1Ob2FXeGtjbVZ1TG5Od2JHbGpaU2h3WVhKbGJuUXVZMmhwYkdSeVpXNHVabWx1WkVsdVpHVjRLQ2gwS1NBOVBpQjBJRDA5UFNCdFpYSm5aVTFsVG05a1pTa3NJREVwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRzFsY21kbElIVndYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibTlrWlM1bGJXRnBiQ0E5UFQwZ2NHRnlaVzUwTG1WdFlXbHNLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsMElHMWhlU0JpWlNCMGFHVWdZMkZ6WlNCMGFHRjBJSGRsSUdoaGRtVWdZU0J1YjJSbElIZHBkR2dnYlhWc2RHbHdiR1VnY205c1pYTWdZVzVrSUdFZ2MzVmlMWEp2YkdVZ2FHRnpJSEpsY0c5eWRITXVJRlJvWlNCemRXSXRibTlrWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCM2FXeHNJR0psSUhKbGJtUmxjbVZrSUdsdUlHOXlaR1Z5SUhSdklHTnNZWEpwWm5rZ2RHaGxJRzVoZEhWeVpTQnZaaUIwYUdVZ2NtVndiM0owY3l3Z1luVjBJSGRsSUdocFpHVWdkR2hsSUdWdFlXbHNJSGRvYVdOb0lHbHpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJR0Z3Y0dWaGNtVnVkQ0JwYmlCMGFHVWdjR0Z5Wlc1MElHNXZaR1V1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJRzV2WkdVdWFHbGtaVTVoYldVZ1BTQjBjblZsWEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1kyOXNiR0Z3YzJVZ2MzUmhabVlnYldWdFltVnlJSEp2YkdWeklIUnZJSE5oYldVZ2MzUmhabVlnYVc0Z2NHRnlaVzUwSUhKdmJHVWdhV1lnYjI1c2VTQmphR2xzWkNCdmNpQnpkV0l0Ym05a1pTQm9ZWE1nYm04Z1kyaHBiR1J5Wlc0dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdZWEpsYm5RdVkyaHBiR1J5Wlc0dWJHVnVaM1JvSUQwOVBTQXhJSHg4SUc1dlpHVXVZMmhwYkdSeVpXNGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHMWxjbWRsVG05a1pYTW9jR0Z5Wlc1MExDQnViMlJsS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JQ2R1YjJSbEp5QnBjeUJ2Ym14NUlHTm9hV3hrSUdOdmJHeGhjSE5wYm1jZ2FXNTBieUJ3WVhKeVpXNTBMQ0JxZFhOMElHTjFkQ0JwZENCdmRYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0dGeVpXNTBMbU5vYVd4a2NtVnVMbXhsYm1kMGFDQTlQVDBnTVNrZ2NHRnlaVzUwTG1Ob2FXeGtjbVZ1SUQwZ2JtOWtaUzVqYUdsc1pISmxibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ2V5QXZMeUJGYkhObExDQnFkWE4wSUdOMWRDQjBhR1VnWTJocGJHUWdiM1YwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYSmxiblF1WTJocGJHUnlaVzR1YzNCc2FXTmxLSEJoY21WdWRDNWphR2xzWkhKbGJpNW1hVzVrU1c1a1pYZ29LSFFwSUQwK0lIUWdQVDA5SUc1dlpHVXBMQ0F4S1Z4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTbGNiaUFnSUNBZ0lIMHBYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQmtZWFJoWEc0Z0lDQWdmVnh1SUNBZ0lHVnNjMlVnZEdoeWIzY2dibVYzSUVWeWNtOXlLR0JQY21jZ1kyaGhjblFnYzNSNWJHVWdKeVI3YzNSNWJHVjlKeUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtMbUFwWEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUhzZ1QzSm5ZVzVwZW1GMGFXOXVJSDFjYmlKZExDSnVZVzFsY3lJNld5SmZZMnhoYzNORFlXeHNRMmhsWTJzaUxDSmpiR0Z6YzBOaGJHeERhR1ZqYXlJc0lsOWpjbVZoZEdWRGJHRnpjeUlzSW1OeVpXRjBaVU5zWVhOeklpd2lkVzUzY21Gd1JYaHdiM0owY3lJc0ltTnlaV0YwWlVOdmJXMXZibXB6VFc5a2RXeGxJaXdpWVhKeVlYbE1hV3RsVkc5QmNuSmhlU0lzSW5WdWMzVndjRzl5ZEdWa1NYUmxjbUZpYkdWVWIwRnljbUY1SWl3aVgyTnlaV0YwWlVadmNrOW1TWFJsY21GMGIzSklaV3h3WlhJaUxDSmZkVzV6ZFhCd2IzSjBaV1JKZEdWeVlXSnNaVlJ2UVhKeVlYa2lMQ0pmWVhKeVlYbE1hV3RsVkc5QmNuSmhlU0lzSWw5amNtVmhkR1ZHYjNKUFprbDBaWEpoZEc5eVNHVnNjR1Z5SkRFaUxDSmZkVzV6ZFhCd2IzSjBaV1JKZEdWeVlXSnNaVlJ2UVhKeVlYa2tNU0lzSWw5aGNuSmhlVXhwYTJWVWIwRnljbUY1SkRFaUxDSm5aWFFpTENKa1lYUmhJaXdpYVdRaUxDSnpjR3hwZEVsa0lpd2lZWFZrYVhST1lXMWxJaXdpZEdGeVoyVjBTV1FpTENKaGRXUnBkRkpsWTI5eVpITWlMQ0owYjFOMFlXNWtZV3h2Ym1VaUxDSnNhWE4wSWl3aVpHOXRZV2x1SWl3aWRXNWtaV1pwYm1Wa0lpd2laRzl0WVdsdVMyVjVjeUlzSWs5aWFtVmpkQ0lzSW10bGVYTWlMQ0p5WldSMVkyVWlMQ0poWTJNaUxDSmtiMjFoYVc1T1lXMWxJaXdpWkc5dFlXbHVVbVZqY3lJc0ltRjFaR2wwVG1GdFpYTWlMQ0poZFdScGRGSmxZM01pTENKd2RYTm9JaXdpYzI5eWRDSXNJbUVpTENKaUlpd2liRzlqWVd4bFEyOXRjR0Z5WlNJc0luQmxjbk5wYzNRaUxDSmtiMjFoYVc1eklpd2liR1Z1WjNSb0lpd2labXB6YjI0aUxDSnpZWFpsUm5KdmJTSXNJblZ3WkdGMFpTSXNJbUYxWkdsMFVtVmpiM0prSWl3aWMzQnNhWFFpTENKaGRXUnBkRkpsWTBOdmNIa2lMQ0poYzNOcFoyNGlMQ0ozWldsbmFIUWlMQ0pGY25KdmNpSXNJa0YxWkdsMFVtVmpiM0prYzBGUVNTSXNJbTl5WnlJc0ltTm9aV05yUTI5dVpHbDBhVzl1SWl3aWEyVjVJaXdpYVc1dVpYSlRkR0YwWlNJc0ltOXdkR2x2Ym5NaUxDSmpiMjVrYVhScGIyNGlMQ0p3Y205a2RXTjBVbVZqSWl3aWNHRnlZVzFsZEdWeWN5SXNJbE5GUTE5VVVrbFdTVUZNSWl3aVFVeFhRVmxUSWl3aVRrVldSVklpTENKT1QwNUZJaXdpVEU5WElpd2lUVTlFUlZKQlZFVWlMQ0pJU1VkSUlpd2lSVmhKVTFSRlRsUkpRVXdpTENKNlpYSnZVbVZ6SWl3aVpYWmhiSFZoZEc5eUlpd2lSWFpoYkhWaGRHOXlJaXdpWlhaaGJGUnlkWFJvSWl3aVpHVm1hVzVsVUhKdmNHVnlkSGtpTENKMllXeDFaU0lzSW5keWFYUmhZbXhsSWl3aVpXNTFiV1Z5WVdKc1pTSXNJbU52Ym1acFozVnlZV0pzWlNJc0ltRnljbUY1VjJsMGFHOTFkRWh2YkdWeklpd2lhWFJsY21GaWJHVlViMEZ5Y21GNUlpd2libTl1U1hSbGNtRmliR1ZUY0hKbFlXUWlMQ0pPYjJSbElpd2libUZ0WlNJc0luQnlhVzFOYm1keVRtRnRaU0lzSW5CdmMzTnBZbXhsVFc1bmNrNWhiV1Z6SWl3aWFXMXdiR2xsWkNJc0luQnlhVzFOYm1keUlpd2lkVzV6YUdsbWRDSXNJbkJ2YzNOcFlteGxUVzVuY25NaUxDSmphR2xzWkhKbGJpSXNJbVJsYzJNaUxDSmphR2xzWkNJc0ltTnZibU5oZENJc0ltZGxkRVJsYzJObGJtUmxiblJ6SWl3aVoyVjBWSEpsWlU1dlpHVnpJaXdpVDNKblUzUnlkV04wZFhKbElpd2labWxzWlU1aGJXVWlMQ0p5YjJ4bGN5SXNJbTV2WkdWeklpd2lTbE5QVGlJc0luQmhjbk5sSWl3aVpuTWlMQ0p0WVhBaUxDSnlJaXdpY205dmRITWlMQ0p3Y205alpYTnpUbTlrWlNJc0ltNXZaR1VpTENKbWFXNWtJaXdpYmlJc0ltWnZja1ZoWTJnaUxDSnRibWR5VG1GdFpTSXNJbTF1WjNJaUxDSnliMnhsSWl3aWNtVnhkV2x5WldRaUxDSmxjbkpOYzJkSFpXNGlMQ0pwYlhCc2FXVnpJaXdpYVcxd2JHbGxaRkp2YkdWT1lXMWxJaXdpYlc1bmNsQnliM1J2WTI5c0lpd2lhVzF3VW05c1pTSXNJbWx6VkdsMGRXeGhjaUlzSW0xaGJtRm5hVzVuVW05c1pVNWhiV1VpTENKdmNtZFNiMnhsY3lJc0ltZGxkRTV2WkdWeklpd2laMlYwVG1GdFpTSXNJblZ1WkdWbWFXNWxaRkp2YkdWeklpd2labWxzZEdWeUlpd2ljbTlzWlU1aGJXVWlMQ0pxYjJsdUlpd2laSFZ3WlZKdmJHVnpJaXdpYVc1a1pYZ2lMQ0pwYm1SbGVFOW1JaXdpY205dmRDSXNJa3BUVDA1TWIyOXdJaXdpYjJKcUlpd2lhV1JRY205d1pYSjBlVTVoYldVaUxDSmphR2xzWkhKbGJsQnliM0JsY25SNVRtRnRaU0lzSW1OdmRXNTBJaXdpWTI5MWJuUk9iMlJsY3lJc0luUnZkR0ZzSWl3aWNISnZjR1Z5ZEhraUxDSjBhR0YwSWl3aWFYTkZiWEIwZVNJc0luUmhjbWRsZENJc0lta2lMQ0pqWVd4c1ltRmpheUlzSW1sa2N5SXNJbk52YldVaUxDSjBaWE4wU1dRaUxDSm1hVzVrVG05a1pVSjVTV1FpTENKamIyNWthWFJwYjI1eklpd2labXhoWnlJc0ltbDBaVzBpTENKU1pXZEZlSEFpTENKMFpYTjBJaXdpWDNSNWNHVnZaaUlzSW5OMVltbDBaVzBpTENKamIzQjVJaXdpYldGMFkyaERiMjVrYVhScGIyNXpJaXdpYzJ4cFkyVWlMQ0ptYVc1a1RtOWtaWE1pTENKdVpXVmtRMnhsWVc1T2IyUmxJaXdpY0dGeVpXNTBYMmxrSWl3aVpYSnlJaXdpY0dGeVpXNTBJaXdpWjJWdVpYSmhkR1ZEYkc5dVpTSXNJbVpwYm1SUVlYSmxiblFpTENKemFXSnNhVzVuY3lJc0ltWnBibVJCYm1ObGMzUnZjbk1pTENKMGFHbHlaRkJoY25SNVFXTmpiM1Z1ZEhNaUxDSkJZMk52ZFc1MGMwRlFTU0lzSW1GalkyOTFiblJ6SWl3aVlXTmpkQ0lzSW5ObGJuTnBkR2wyYVhSNVEyOWtaU0lzSW5ObGJuTnBkR2wyYVhSNUlpd2lVMFZPVTBsVVNWWkpWRmtpTENKeVpYRjFhWEpsSkNRd0lpd2lVbTlzWlNJc0luSmxZeUlzSW5ScGRIVnNZWElpTENKa1pYTnBaMjVoZEdWa0lpd2ljWFZoYkdsbWFXRmliR1VpTENKQmRIUmhZMmhsWkZKdmJHVWlMQ0ppWVhObFVtOXNaU0lzSW0xaGJtRm5aWElpTENKemRHRm1aazFsYldKbGNpSXNJbWx6VVhWaGJHbG1hV0ZpYkdVaUxDSnhkV0ZzYVdacFpYSWlMQ0puWlhSRmJXRnBiQ0lzSW1kbGRGRjFZV3hwWm1sbGNpSXNJbUZqZEdsdVp5SXNJbEp2YkdWeklpd2ljbTlzWlhORVlYUmhJaXdpYVhSbGJYTWlMQ0p2Y0hSeklpd2ljbVZ6ZFd4MElpd2ljM1JoWm1ZaUxDSnpJaXdpYzNWd1pYSlNiMnhsSWl3aVJFVlRTVWRPUVZSRlJDSXNJbE5KVGtkVlRFRlNJaXdpYzJsdVozVnNZWElpTENKVGRHRm1aazFsYldKbGNpSXNJbkpsWTI5eVpDSXNJbUYwZEdGamFHVmtVbTlzWlhOQ2VVNWhiV1VpTENKeVpYQnZjblJ6UW5sU1pYQnZjblJTYjJ4bElpd2laVzFoYVd3aUxDSjJJaXdpWjJWMFIybDJaVzVPWVcxbElpd2laMlYwUm1GdGFXeDVUbUZ0WlNJc0ltWmhiV2xzZVU1aGJXVWlMQ0puYVhabGJrNWhiV1VpTENKemRHRnlkRVJoZEdVaUxDSmxiWEJzYjNsdFpXNTBVM1JoZEhWeklpd2lkbUZzZFdWeklpd2ljbVZ3Y3lJc0luSmxjQ0lzSW5KdmJHVlNaU0lzSW5OMFlXWm1VR0Z5WVcxbGRHVnljeUlzSW5BaUxDSlRkR0ZtWmlJc0ltMWxiV0psY25NaUxDSnRaVzFpWlhJaUxDSm9ZWE5TYjJ4bElpd2liV1Z0WW1WeVJHRjBZU0lzSW1oNVpISmhkR1VpTENKMGIweHZkMlZ5UTJGelpTSXNJbTFoZEdOb1pYTWlMQ0puWlhSQmJHd2lMQ0owYjFOMGNtbHVaeUlzSW1kbGRGSnZiR1Z6SWl3aVkyOXVkbVZ5ZEZKdmJHVlViMEYwZEdGamFHVmtJaXdpY0hKdlkyVnpjMGx0Y0d4cFpXUlNiMnhsY3lJc0ltWnNZWFJLYzI5dUlpd2laMlYwVTNSaGNuUkVZWFJsSWl3aVoyVjBSVzF3Ykc5NWJXVnVkRk4wWVhSMWN5SXNJbWRsZEZCaGNtRnRaWFJsY25NaUxDSmhkSFJoWTJobFpGSnZiR1VpTENKeWIyeGxSR0YwWVNJc0ltZGxkRTFoYm1GblpYSWlMQ0pwYzBGamRHbHVaeUlzSW5OMGNtbHVaMmxtZVNJc0ltOXlaMDV2WkdVaUxDSnZjbWRUZEhKMVkzUjFjbVVpTENKblpYUk9iMlJsUW5sU2IyeGxUbUZ0WlNJc0luSnZiR1ZOWVc1aFoyVnlJaXdpWjJWMFUzUmhabVlpTENKcGJYQnNhV1ZrVW05c1pTSXNJbWx0Y0d4cFpXUlNaV01pTENKSlUxOUZUVkJNVDFsRlJTSXNJa2xUWDBOUFRsUlNRVU5VVDFJaUxDSm5aWFJTYjJ4bFRtRnRaWE1pTENKMGIxVndjR1Z5UTJGelpTSXNJbkpsY0d4aFkyVWlMQ0oyWlc1a2IzSnpJaXdpVm1WdVpHOXljMEZRU1NJc0lteHZZV1JDWVhOb1UyVjBkR2x1WjNNaUxDSnpaWFIwYVc1bmMxQmhkR2dpTENKbGJuWlNaWE4xYkhRaUxDSmtiM1JsYm5ZaUxDSmpiMjVtYVdjaUxDSndZWFJvSWl3aVpYSnliM0lpTENKeVpYRjFhWEpsWkZCaGNtRnRjeUlzSW5KbGNWQmhjbUZ0SWl3aWNISnZZMlZ6Y3lJc0ltVnVkaUlzSW14dllXUlBjbWRUZEdGMFpTSXNJbVJoZEdGUVlYUm9JaXdpYkdseFUyVjBkR2x1WjNOUVlYUm9JaXdpU0U5TlJTSXNJbTl5WjFObGRIUnBibWR6VUdGMGFDSXNJazlTUjE5SlJDSXNJazl5WjJGdWFYcGhkR2x2YmlJc0luTjBZV1ptU25OdmJsQmhkR2dpTENKaGRXUnBkSE1pTENKblpYUlRaWFIwYVc1bklpd2laMlYwUW5sU2IyeGxUbUZ0WlNJc0ltZGxkRkJ2YzNOcFlteGxUVzVuY25NaUxDSnpkSGxzWlNJc0ltZGxkRUYwZEdGamFHVmtVbTlzWlhNaUxDSnRlVXRsZVNJc0ltZGxkRUYwZEdGamFHVmtVbTlzWlNJc0ltMXVaM0pGYldGcGJDSXNJbTFoYm1GbmFXNW5VbTlzWlhNaUxDSm5aWFJOWVc1aFoybHVaMUp2YkdWelFubE5ZVzVoWjJWa1VtOXNaVTVoYldVaUxDSnRZVzVoWjJsdVoxSnZiR1VpTENKdGJtZHlVbTlzWlNJc0ltaGhjMU4wWVdabVNXNVNiMnhsSWl3aWJXRnVZV2RsY2t0bGVTSXNJbk5sWldSRVlYUmhJaXdpWjJWdVpYSmhkR1ZQY21kRGFHRnlkRVJoZEdFaUxDSnliM2NpTENKMGFYUnNaU0lzSW1kbGRFWjFiR3hPWVcxbElpd2lkR2wwYkdWeklpd2lZMmhwYkdST2IyUmxjeUlzSW1wemIyNXNiMjl3SWl3aWJXVnlaMlZPYjJSbGN5SXNJbk52ZFhKalpTSXNJbk5wWW1Kc2FXNW5jMUp2YkdWT1lXMWxjMVJ2VFdWeVoyVWlMQ0pwYlhCVGNHVmpJaXdpYldWeVoyVlhhWFJvSWl3aWJXVnlaMlZOWlU1aGJXVWlMQ0p0WlhKblpVMWxUbTlrWlNJc0ltTWlMQ0p6Y0d4cFkyVWlMQ0ptYVc1a1NXNWtaWGdpTENKMElpd2lhR2xrWlU1aGJXVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096dEJRVUZCTEZOQlFWTXNaVUZCWlN4RFFVRkRMRkZCUVZFc1JVRkJSU3hYUVVGWExFVkJRVVU3UVVGRGFFUXNSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3haUVVGWkxGZEJRVmNzUTBGQlF5eEZRVUZGTzBGQlF6RkRMRWxCUVVrc1RVRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5eHRRMEZCYlVNc1EwRkJReXhEUVVGRE8wRkJRemRFTEVkQlFVYzdRVUZEU0N4RFFVRkRPMEZCUTBRN1FVRkRRU3hqUVVGakxFZEJRVWNzWlVGQlpTeERRVUZETzBGQlEycERMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3g1UWtGQmVVSXNSMEZCUnl4SlFVRkpPenM3T3pzN1FVTlFOVVVzVTBGQlV5eHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFVkJRVVVzUzBGQlN5eEZRVUZGTzBGQlF6RkRMRVZCUVVVc1MwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEZWtNc1NVRkJTU3hKUVVGSkxGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRPVUlzU1VGQlNTeFZRVUZWTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVZVc1EwRkJReXhWUVVGVkxFbEJRVWtzUzBGQlN5eERRVUZETzBGQlF6TkVMRWxCUVVrc1ZVRkJWU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEYmtNc1NVRkJTU3hKUVVGSkxFOUJRVThzU1VGQlNTeFZRVUZWTEVWQlFVVXNWVUZCVlN4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRE1VUXNTVUZCU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFMUJRVTBzUlVGQlJTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8wRkJRemxFTEVkQlFVYzdRVUZEU0N4RFFVRkRPMEZCUTBRN1FVRkRRU3hUUVVGVExGbEJRVmtzUTBGQlF5eFhRVUZYTEVWQlFVVXNWVUZCVlN4RlFVRkZMRmRCUVZjc1JVRkJSVHRCUVVNMVJDeEZRVUZGTEVsQlFVa3NWVUZCVlN4RlFVRkZMR2xDUVVGcFFpeERRVUZETEZkQlFWY3NRMEZCUXl4VFFVRlRMRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRGRrVXNSVUZCUlN4SlFVRkpMRmRCUVZjc1JVRkJSU3hwUWtGQmFVSXNRMEZCUXl4WFFVRlhMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU03UVVGREwwUXNSVUZCUlN4UFFVRlBMRmRCUVZjc1EwRkJRenRCUVVOeVFpeERRVUZETzBGQlEwUTdRVUZEUVN4alFVRmpMRWRCUVVjc1dVRkJXU3hEUVVGRE8wRkJRemxDTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4NVFrRkJlVUlzUjBGQlJ5eEpRVUZKT3pzN096dEJRMnBDTlVVc1UwRkJVMEVzYVVKQlFXVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1YwRkJWeXhGUVVGRk8wRkJRMmhFTEVWQlFVVXNTVUZCU1N4RlFVRkZMRkZCUVZFc1dVRkJXU3hYUVVGWExFTkJRVU1zUlVGQlJUdEJRVU14UXl4SlFVRkpMRTFCUVUwc1NVRkJTU3hUUVVGVExFTkJRVU1zYlVOQlFXMURMRU5CUVVNc1EwRkJRenRCUVVNM1JDeEhRVUZITzBGQlEwZ3NRMEZCUXp0QlFVTkVPMEZCUTBFc1NVRkJTVU1zWjBKQlFXTXNSMEZCUjBRc2FVSkJRV1VzUTBGQlF6dEJRVU55UXp0QlFVTkJMRk5CUVZNc2FVSkJRV2xDTEVOQlFVTXNUVUZCVFN4RlFVRkZMRXRCUVVzc1JVRkJSVHRCUVVNeFF5eEZRVUZGTEV0QlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM3BETEVsQlFVa3NTVUZCU1N4VlFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMRWxCUVVrc1ZVRkJWU3hEUVVGRExGVkJRVlVzUjBGQlJ5eFZRVUZWTEVOQlFVTXNWVUZCVlN4SlFVRkpMRXRCUVVzc1EwRkJRenRCUVVNelJDeEpRVUZKTEZWQlFWVXNRMEZCUXl4WlFVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMjVETEVsQlFVa3NTVUZCU1N4UFFVRlBMRWxCUVVrc1ZVRkJWU3hGUVVGRkxGVkJRVlVzUTBGQlF5eFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUXpGRUxFbEJRVWtzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4TlFVRk5MRVZCUVVVc1ZVRkJWU3hEUVVGRExFZEJRVWNzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0QlFVTTVSQ3hIUVVGSE8wRkJRMGdzUTBGQlF6dEJRVU5FTzBGQlEwRXNVMEZCVTBVc1kwRkJXU3hEUVVGRExGZEJRVmNzUlVGQlJTeFZRVUZWTEVWQlFVVXNWMEZCVnl4RlFVRkZPMEZCUXpWRUxFVkJRVVVzU1VGQlNTeFZRVUZWTEVWQlFVVXNhVUpCUVdsQ0xFTkJRVU1zVjBGQlZ5eERRVUZETEZOQlFWTXNSVUZCUlN4VlFVRlZMRU5CUVVNc1EwRkJRenRCUVVOMlJTeEZRVUZGTEVsQlFVa3NWMEZCVnl4RlFVRkZMR2xDUVVGcFFpeERRVUZETEZkQlFWY3NSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJRenRCUVVNdlJDeEZRVUZGTEU5QlFVOHNWMEZCVnl4RFFVRkRPMEZCUTNKQ0xFTkJRVU03UVVGRFJEdEJRVU5CTEVsQlFVbERMR0ZCUVZjc1IwRkJSMFFzWTBGQldTeERRVUZETzBGQlF5OUNPMEZCUTBFc1UwRkJVeXhsUVVGbExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4TFFVRkxMRVZCUVVVN1FVRkRNVU1zUlVGQlJTeEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRiRUlzU1VGQlNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVU3UVVGRGNFTXNUVUZCVFN4TFFVRkxMRVZCUVVVc1MwRkJTenRCUVVOc1FpeE5RVUZOTEZWQlFWVXNSVUZCUlN4SlFVRkpPMEZCUTNSQ0xFMUJRVTBzV1VGQldTeEZRVUZGTEVsQlFVazdRVUZEZUVJc1RVRkJUU3hSUVVGUkxFVkJRVVVzU1VGQlNUdEJRVU53UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVOUUxFZEJRVWNzVFVGQlRUdEJRVU5VTEVsQlFVa3NSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dEJRVU55UWl4SFFVRkhPMEZCUTBnN1FVRkRRU3hGUVVGRkxFOUJRVThzUjBGQlJ5eERRVUZETzBGQlEySXNRMEZCUXp0QlFVTkVPMEZCUTBFc1NVRkJTU3hqUVVGakxFZEJRVWNzWlVGQlpTeERRVUZETzBGQlEzSkRPMEZCUTBFc1NVRkJTU3hMUVVGTExFTkJRVU03UVVGRFZqdEJRVU5CTEZOQlFWTXNNRUpCUVRCQ0xFTkJRVU1zUTBGQlF5eEZRVUZGTEdOQlFXTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zU1VGQlNTeFBRVUZQTEUxQlFVMHNTMEZCU3l4WFFVRlhMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1JVRkJSU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExESkNRVUV5UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWTBGQll5eEpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzVVVGQlVTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hUUVVGVExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeEpRVUZKTEZOQlFWTXNRMEZCUXl4MVNVRkJkVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMR2RDUVVGblFpeEhRVUZITEVsQlFVa3NSVUZCUlN4TlFVRk5MRWRCUVVjc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1NVRkJTU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1RVRkJUU3hGUVVGRkxFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVOeUswSTdRVUZEUVN4VFFVRlRMREpDUVVFeVFpeERRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOHNRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhMUVVGTExGRkJRVkVzUlVGQlJTeFBRVUZQTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4UlFVRlJMRWxCUVVrc1EwRkJReXhEUVVGRExGZEJRVmNzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRmRCUVZjc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4TFFVRkxMRWxCUVVrc1EwRkJReXhMUVVGTExFdEJRVXNzUlVGQlJTeFBRVUZQTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4WFFVRlhMRWxCUVVrc01FTkJRVEJETEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFOUJRVThzYVVKQlFXbENMRU5CUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEYUdFN1FVRkRRU3hUUVVGVExHbENRVUZwUWl4RFFVRkRMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUlVGQlJTeEpRVUZKTEVkQlFVY3NTVUZCU1N4SlFVRkpMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVWQlFVVXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eExRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEVWQlFVVTdRVUZEZGt3N1FVRkRRU3hKUVVGSkxFOUJRVThzUjBGQlJ5eEpRVUZKTEUxQlFVMHNRMEZCUXl4clEwRkJhME1zUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTnNSU3hKUVVGSkxGVkJRVlVzUjBGQlJ5d3dSMEZCTUVjc1EwRkJRenRCUVVNMVNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTU3hUUVVGVExFbEJRVWtzUzBGQlN5eG5Ra0ZCWjBJc1dVRkJXVHRCUVVOc1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNSVUZCUlN4VFFVRlRMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRVVU3UVVGREwwSXNTVUZCU1VRc1owSkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RFFVRkRMRU5CUVVNN1FVRkRjRU03UVVGRFFTeEpRVUZKTEdOQlFXTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1dVRkJXU3hGUVVGRkxFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETDBNN1FVRkRRU3hKUVVGSkxHTkJRV01zUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE5VTTdRVUZEUVN4SlFVRkpMRTFCUVUwc1EwRkJReXhOUVVGTkxFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUTJ4RExFbEJRVWtzU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFVkJRVVVzUTBGQlF6dEJRVU0xUXl4SlFVRkpMRWxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4RlFVRkZMRU5CUVVNN1FVRkRkRU1zUjBGQlJ6dEJRVU5JTzBGQlEwRXNSVUZCUlVVc1lVRkJWeXhEUVVGRExGTkJRVk1zUlVGQlJTeERRVUZETzBGQlF6RkNMRWxCUVVrc1IwRkJSeXhGUVVGRkxGZEJRVmM3UVVGRGNFSXNTVUZCU1N4TFFVRkxMRVZCUVVVc1UwRkJVeXhUUVVGVExFTkJRVU1zWTBGQll5eEZRVUZGTzBGQlF6bERMRTFCUVUwc1NVRkJTU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzWkNPMEZCUTBFc1RVRkJUU3hKUVVGSkxFOUJRVThzWTBGQll5eExRVUZMTEZGQlFWRXNSVUZCUlR0QlFVTTVReXhSUVVGUkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNjVU5CUVhGRExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRelZHTEU5QlFVODdRVUZEVUR0QlFVTkJMRTFCUVUwc1NVRkJTU3hWUVVGVkxFZEJRVWNzWTBGQll5eERRVUZETzBGQlEzUkRPMEZCUTBFN1FVRkRRU3hOUVVGTkxFbEJRVWtzVDBGQlR5eEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03UVVGRGFrUTdRVUZEUVN4TlFVRk5MRWxCUVVrc1UwRkJVeXhIUVVGSExEQkNRVUV3UWl4RFFVRkRMRTlCUVU4c1EwRkJRenRCUVVONlJDeFZRVUZWTEV0QlFVc3NRMEZCUXp0QlFVTm9RanRCUVVOQkxFMUJRVTBzU1VGQlNUdEJRVU5XTEZGQlFWRXNTVUZCU1N4TFFVRkxMRWRCUVVjc1UwRkJVeXhMUVVGTExFZEJRVWM3UVVGRGNrTXNWVUZCVlN4TlFVRk5MRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF6dEJRVU12UWl4VlFVRlZMRWxCUVVrc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm9ReXhWUVVGVkxFbEJRVWtzUjBGQlJ5eEhRVUZITEV0QlFVc3NRMEZCUXl4VlFVRlZMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRE5VTTdRVUZEUVN4VlFVRlZMRWxCUVVrc1IwRkJSeXhMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU5xUXp0QlFVTkJMRmxCUVZrc1IwRkJSeXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRja01zVjBGQlZ6dEJRVU5ZTzBGQlEwRXNWVUZCVlN4SlFVRkpMRWRCUVVjc1MwRkJTeXhUUVVGVExFVkJRVVU3UVVGRGFrTXNXVUZCV1N4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEZWQlFWVXNSVUZCUlN4RlFVRkZPMEZCUTJwRUxHTkJRV01zVDBGQlR5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRM0pETEdGQlFXRXNRMEZCUXl4RlFVRkZPMEZCUTJoQ0xHTkJRV01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjBRaXhoUVVGaExFMUJRVTA3UVVGRGJrSXNZMEZCWXl4TlFVRk5MRWxCUVVrc1MwRkJTeXhEUVVGRExIVkNRVUYxUWl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzTkVSQlFUUkVMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMjVKTEdGQlFXRTdRVUZEWWl4WFFVRlhPMEZCUTFnN1FVRkRRVHRCUVVOQk8wRkJRMEVzVlVGQlZTeFZRVUZWTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhKUVVGSkxFMUJRVTBzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEdkQ1FVRm5RaXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJTU3hUUVVGVExFTkJRVU03UVVGRFZqdEJRVU5CTEZGQlFWRXNTMEZCU3l4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eERRVUZETEV0QlFVc3NSMEZCUnl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzU1VGQlNTeEhRVUZITzBGQlF6VkVMRlZCUVZVc1NVRkJTU3hOUVVGTkxFTkJRVU03UVVGRGNrSTdRVUZEUVN4VlFVRlZMRXRCUVVzc1JVRkJSU3hEUVVGRE8wRkJRMnhDTEZOQlFWTTdRVUZEVkR0QlFVTkJMRTlCUVU4c1EwRkJReXhQUVVGUExFZEJRVWNzUlVGQlJUdEJRVU53UWl4UlFVRlJMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZWtJc1QwRkJUeXhUUVVGVE8wRkJRMmhDTEZGQlFWRXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEU5QlFVODdRVUZEVUR0QlFVTkJMRTFCUVUwc1NVRkJTU3hEUVVGRExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVVN1FVRkRla01zVVVGQlVTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMR2RGUVVGblJTeERRVUZETEUxQlFVMHNRMEZCUXl4alFVRmpMRVZCUVVVc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROVWtzVDBGQlR6dEJRVU5RTzBGQlEwRTdRVUZEUVN4TlFVRk5MRTlCUVU4c1VVRkJVU3hEUVVGRExIbENRVUY1UWl4RFFVRkRMRTFCUVUwc1EwRkJReXhWUVVGVkxFVkJRVVVzYTBKQlFXdENMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03UVVGRE1VWXNTMEZCU3p0QlFVTk1MRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFRqdEJRVU5CTEVWQlFVVXNUMEZCVHl4VFFVRlRMRU5CUVVNN1FVRkRia0lzUTBGQlF5eEZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRU5CUVVNN096dEJRMjVLV2l4VFFVRlRMR1ZCUVdVc1EwRkJReXhIUVVGSExFVkJRVVU3UVVGRE9VSXNSVUZCUlN4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNUMEZCVHl4SFFVRkhMRU5CUVVNN1FVRkRja01zUTBGQlF6dEJRVU5FTzBGQlEwRXNZMEZCWXl4SFFVRkhMR1ZCUVdVc1EwRkJRenRCUVVOcVF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNlVUpCUVhsQ0xFZEJRVWNzU1VGQlNUczdPenM3TzBGRFREVkZMRk5CUVZNc2NVSkJRWEZDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVOMlF5eEZRVUZGTEVsQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhKUVVGSkxFVkJRVVVzVFVGQlRTeERRVUZETEZGQlFWRXNTVUZCU1N4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQTzBGQlEycEdMRVZCUVVVc1NVRkJTU3hKUVVGSkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEyaENMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEyaENMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEycENMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVTBGQlV5eERRVUZETzBGQlEzSkNPMEZCUTBFc1JVRkJSU3hKUVVGSk8wRkJRMDRzU1VGQlNTeExRVUZMTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSU3hGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVWQlFVVXNSMEZCUnl4SlFVRkpMRVZCUVVVN1FVRkRlRVlzVFVGQlRTeEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU14UWp0QlFVTkJMRTFCUVUwc1NVRkJTU3hEUVVGRExFbEJRVWtzU1VGQlNTeERRVUZETEUxQlFVMHNTMEZCU3l4RFFVRkRMRVZCUVVVc1RVRkJUVHRCUVVONFF5eExRVUZMTzBGQlEwd3NSMEZCUnl4RFFVRkRMRTlCUVU4c1IwRkJSeXhGUVVGRk8wRkJRMmhDTEVsQlFVa3NSVUZCUlN4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOa0xFbEJRVWtzUlVGQlJTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTmlMRWRCUVVjc1UwRkJVenRCUVVOYUxFbEJRVWtzU1VGQlNUdEJRVU5TTEUxQlFVMHNTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETzBGQlEzUkVMRXRCUVVzc1UwRkJVenRCUVVOa0xFMUJRVTBzU1VGQlNTeEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZMRU5CUVVNN1FVRkRka0lzUzBGQlN6dEJRVU5NTEVkQlFVYzdRVUZEU0R0QlFVTkJMRVZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03UVVGRFpDeERRVUZETzBGQlEwUTdRVUZEUVN4alFVRmpMRWRCUVVjc2NVSkJRWEZDTEVOQlFVTTdRVUZEZGtNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxIbENRVUY1UWl4SFFVRkhMRWxCUVVrN096czdPenRCUXpWQ05VVXNVMEZCVXl4cFFrRkJhVUlzUTBGQlF5eEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZPMEZCUTNKRExFVkJRVVVzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRE8wRkJRM2hFTzBGQlEwRXNSVUZCUlN4TFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEpRVUZKTEVkQlFVY3NTVUZCU1N4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVkQlFVY3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOMlJDeEpRVUZKTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEY2tJc1IwRkJSenRCUVVOSU8wRkJRMEVzUlVGQlJTeFBRVUZQTEVsQlFVa3NRMEZCUXp0QlFVTmtMRU5CUVVNN1FVRkRSRHRCUVVOQkxHTkJRV01zUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRCUVVOdVF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNlVUpCUVhsQ0xFZEJRVWNzU1VGQlNUczdPenM3TzBGRFZEVkZMRk5CUVZNc01rSkJRVEpDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSVHRCUVVOb1JDeEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRMRVZCUVVVc1QwRkJUenRCUVVOcVFpeEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRMRXRCUVVzc1VVRkJVU3hGUVVGRkxFOUJRVThzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlEyaEZMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU42UkN4RlFVRkZMRWxCUVVrc1EwRkJReXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXp0QlFVTTVSQ3hGUVVGRkxFbEJRVWtzUTBGQlF5eExRVUZMTEV0QlFVc3NTVUZCU1N4RFFVRkRMRXRCUVVzc1MwRkJTeXhGUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMlJDeEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRmRCUVZjc1NVRkJTU3d3UTBGQk1FTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVDBGQlR5eG5Ra0ZCWjBJc1EwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZEYkVnc1EwRkJRenRCUVVORU8wRkJRMEVzWTBGQll5eEhRVUZITERKQ1FVRXlRaXhEUVVGRE8wRkJRemRETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4NVFrRkJlVUlzUjBGQlJ5eEpRVUZKT3pzN096czdRVU5hTlVVc1UwRkJVeXhuUWtGQlowSXNSMEZCUnp0QlFVTTFRaXhGUVVGRkxFMUJRVTBzU1VGQlNTeFRRVUZUTEVOQlFVTXNNa2xCUVRKSkxFTkJRVU1zUTBGQlF6dEJRVU51U3l4RFFVRkRPMEZCUTBRN1FVRkRRU3hqUVVGakxFZEJRVWNzWjBKQlFXZENMRU5CUVVNN1FVRkRiRU1zVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGTEhsQ1FVRjVRaXhIUVVGSExFbEJRVWs3T3pzN096dEJRMGMxUlN4VFFVRlRMR05CUVdNc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTzBGQlEyaERMRVZCUVVVc1QwRkJUeXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NiMEpCUVc5Q0xFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTXNRMEZCUXl4SlFVRkpMREJDUVVFd1FpeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1NVRkJTU3hsUVVGbExFVkJRVVVzUTBGQlF6dEJRVU40U0N4RFFVRkRPMEZCUTBRN1FVRkRRU3hqUVVGakxFZEJRVWNzWTBGQll5eERRVUZETzBGQlEyaERMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3g1UWtGQmVVSXNSMEZCUnl4SlFVRkpPenM3T3p0QlExWTFSU3hUUVVGVFF5eGxRVUZoTEVWQlFVVXNRMEZCUXl4RlFVRkZPMEZCUXpOQ0xFTkJRVU1zVDBGQlR5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRlZCUVZVc1NVRkJTU3hOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEdOQlFXTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhGUVVGRkxGTkJRVk1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4VFFVRlRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGJrY3NRMEZCUXp0QlFVTkVPMEZCUTBFc1UwRkJVME1zYzBKQlFXOUNMRU5CUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU14UXl4RFFVRkRMRTlCUVU4c1RVRkJUU3hIUVVGSExFVkJRVVVzVDBGQlR5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhOUVVGTkxFVkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU03UVVGRE4wVXNRMEZCUXp0QlFVTkVPMEZCUTBFc1NVRkJTU3hUUVVGVExFZEJRVWRCTEhOQ1FVRnZRaXhEUVVGRExGVkJRVlVzVFVGQlRTeEZRVUZGTzBGQlEzWkVMRk5CUVZNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU4wUWl4RlFVRkZMSGxDUVVGNVFpeERRVUZETzBGQlF6VkNPMEZCUTBFc1JVRkJSU3hKUVVGSkxFOUJRVThzVFVGQlRTeExRVUZMTEZWQlFWVXNTVUZCU1N4UFFVRlBMRTFCUVUwc1EwRkJReXhSUVVGUkxFdEJRVXNzVVVGQlVTeEZRVUZGTzBGQlF6TkZMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVkQlFVY3NVMEZCVXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhGUVVGRk8wRkJRM0pFTEUxQlFVMHNUMEZCVHl4UFFVRlBMRWRCUVVjc1EwRkJRenRCUVVONFFpeExRVUZMTEVOQlFVTTdRVUZEVGp0QlFVTkJMRWxCUVVrc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOcVJpeEhRVUZITEUxQlFVMDdRVUZEVkN4SlFVRkpMRTFCUVUwc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlR5eEhRVUZITEZOQlFWTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVOeVJDeE5RVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzU1VGQlNTeEhRVUZITEVOQlFVTXNWMEZCVnl4TFFVRkxMRTFCUVUwc1NVRkJTU3hIUVVGSExFdEJRVXNzVFVGQlRTeERRVUZETEZOQlFWTXNSMEZCUnl4UlFVRlJMRWRCUVVjc1QwRkJUeXhIUVVGSExFTkJRVU03UVVGRGJra3NTMEZCU3l4RFFVRkRPMEZCUTA0N1FVRkRRU3hKUVVGSkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGFrWXNSMEZCUnp0QlFVTklPMEZCUTBFc1JVRkJSU3hQUVVGUExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjBRaXhEUVVGRE8wRkJRMFE3UVVGRFFTeE5RVUZOTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVONlFpeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETzBGQlF6ZEZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMGc3UVVGRFFTeEpRVUZKTEU5QlFVOHNSMEZCUjBRc1pVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETzBGQlEzWkRPMEZCUTBFc1NVRkJTVVVzYTBKQlFXZENMRWRCUVVkRUxITkNRVUZ2UWl4RFFVRkRMRlZCUVZVc1RVRkJUU3hGUVVGRk8wRkJRemxFTEZOQlFWTXNhVUpCUVdsQ0xFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlR0QlFVTnlReXhGUVVGRkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVONFJEdEJRVU5CTEVWQlFVVXNTMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRka1FzU1VGQlNTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzSkNMRWRCUVVjN1FVRkRTRHRCUVVOQkxFVkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdRVUZEWkN4RFFVRkRPMEZCUTBRN1FVRkRRU3hOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEdsQ1FVRnBRaXhEUVVGRE8wRkJRMjVETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZETjBVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFNEdEJRVU5CUkN4bFFVRmhMRU5CUVVORkxHdENRVUZuUWl4RFFVRkRMRU5CUVVNN1FVRkRhRU03UVVGRFFTeEpRVUZKTEdsQ1FVRnBRaXhIUVVGSFJDeHpRa0ZCYjBJc1EwRkJReXhWUVVGVkxFMUJRVTBzUlVGQlJUdEJRVU12UkN4VFFVRlRMR3RDUVVGclFpeERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTnFReXhGUVVGRkxFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hQUVVGUFF5eHJRa0ZCWjBJc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4yUkN4RFFVRkRPMEZCUTBRN1FVRkRRU3hOUVVGTkxFTkJRVU1zVDBGQlR5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8wRkJRM0JETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZETjBVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRFNEdEJRVU5CUml4bFFVRmhMRU5CUVVNc2FVSkJRV2xDTEVOQlFVTXNRMEZCUXp0QlFVTnFRenRCUVVOQkxFbEJRVWtzWlVGQlpTeEhRVUZIUXl4elFrRkJiMElzUTBGQlF5eFZRVUZWTEUxQlFVMHNSVUZCUlR0QlFVTTNSQ3hUUVVGVExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1JVRkJSVHRCUVVOb1F5eEZRVUZGTEVsQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhKUVVGSkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1NVRkJTU3hKUVVGSkxFbEJRVWtzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4SlFVRkpMRVZCUVVVc1QwRkJUeXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUXpWSUxFTkJRVU03UVVGRFJEdEJRVU5CTEUxQlFVMHNRMEZCUXl4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdRVUZEYkVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCVlN4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVNM1JTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTklPMEZCUTBGRUxHVkJRV0VzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0QlFVTXZRanRCUVVOQkxFbEJRVWxITERSQ1FVRXdRaXhIUVVGSFJpeHpRa0ZCYjBJc1EwRkJReXhWUVVGVkxFMUJRVTBzUlVGQlJUdEJRVU40UlN4VFFVRlRMREpDUVVFeVFpeERRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkRhRVFzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTlCUVU4N1FVRkRha0lzUlVGQlJTeEpRVUZKTEU5QlFVOHNRMEZCUXl4TFFVRkxMRkZCUVZFc1JVRkJSU3hQUVVGUFF5eHJRa0ZCWjBJc1EwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZEYUVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzcEVMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzVVVGQlVTeEpRVUZKTEVOQlFVTXNRMEZCUXl4WFFVRlhMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCUXpsRUxFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NTMEZCU3l4SlFVRkpMRU5CUVVNc1MwRkJTeXhMUVVGTExFVkJRVVVzVDBGQlR5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1pFTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1YwRkJWeXhKUVVGSkxEQkRRVUV3UXl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeFBRVUZQUVN4clFrRkJaMElzUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRiRWdzUTBGQlF6dEJRVU5FTzBGQlEwRXNUVUZCVFN4RFFVRkRMRTlCUVU4c1IwRkJSeXd5UWtGQk1rSXNRMEZCUXp0QlFVTTNReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRemRGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTBnN1FVRkRRVVlzWlVGQllTeERRVUZEUnl3MFFrRkJNRUlzUTBGQlF5eERRVUZETzBGQlF6RkRPMEZCUTBFc1NVRkJTU3hwUWtGQmFVSXNSMEZCUjBZc2MwSkJRVzlDTEVOQlFVTXNWVUZCVlN4TlFVRk5MRVZCUVVVN1FVRkRMMFFzVTBGQlV5eHJRa0ZCYTBJc1IwRkJSenRCUVVNNVFpeEZRVUZGTEUxQlFVMHNTVUZCU1N4VFFVRlRMRU5CUVVNc2MwbEJRWE5KTEVOQlFVTXNRMEZCUXp0QlFVTTVTaXhEUVVGRE8wRkJRMFE3UVVGRFFTeE5RVUZOTEVOQlFVTXNUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETzBGQlEzQkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkROMFVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEU0R0QlFVTkJSQ3hsUVVGaExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRCUVVOcVF6dEJRVU5CTEVsQlFVa3NhVUpCUVdsQ0xFZEJRVWRETEhOQ1FVRnZRaXhEUVVGRExGVkJRVlVzVFVGQlRTeEZRVUZGTzBGQlF5OUVMRk5CUVZNc2EwSkJRV3RDTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTJwRExFVkJRVVVzVDBGQlR5eHBRa0ZCYVVJc1EwRkJReXhIUVVGSExFTkJRVU1zU1VGQlNTeGxRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVsRkxEUkNRVUV3UWl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxHbENRVUZwUWl4RlFVRkZMRU5CUVVNN1FVRkRiRWdzUTBGQlF6dEJRVU5FTzBGQlEwRXNUVUZCVFN4RFFVRkRMRTlCUVU4c1IwRkJSeXhyUWtGQmEwSXNRMEZCUXp0QlFVTndReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRemRGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTBnN1FVRkRRU3hKUVVGSkxHdENRVUZyUWl4SFFVRkhTQ3hsUVVGaExFTkJRVU1zYVVKQlFXbENMRU5CUVVNc1EwRkJRenRCUVVNeFJEdEJRVU5CTEZOQlFWTkpMRFJDUVVFd1FpeERRVUZETEVOQlFVTXNSVUZCUlN4alFVRmpMRVZCUVVVc1JVRkJSU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eFBRVUZQTEUxQlFVMHNTMEZCU3l4WFFVRlhMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSME1zTmtKQlFUSkNMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeGpRVUZqTEVsQlFVa3NRMEZCUXl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRExFMUJRVTBzUzBGQlN5eFJRVUZSTEVWQlFVVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NVMEZCVXl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxGTkJRVk1zUTBGQlF5eEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFMUJRVTBzUlVGQlJTeFBRVUZQTEVWQlFVVXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4TFFVRkxMRVZCUVVVc1MwRkJTeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVsQlFVa3NVMEZCVXl4RFFVRkRMSFZKUVVGMVNTeERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1owSkJRV2RDTEVkQlFVY3NTVUZCU1N4RlFVRkZMRTFCUVUwc1IwRkJSeXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hUUVVGVExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVWQlFVVXNSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJTeEpRVUZKTEVsQlFVa3NSMEZCUnl4RlFVRkZMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNUMEZCVHl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1JVRkJSU3hOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1NVRkJTU3hGUVVGRkxFbEJRVWtzUTBGQlF5eG5Ra0ZCWjBJc1NVRkJTU3hGUVVGRkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1RVRkJUU3hGUVVGRkxFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVNMUswSTdRVUZEUVN4VFFVRlRRU3cyUWtGQk1rSXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hGUVVGRkxFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNSVUZCUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eFJRVUZSTEVWQlFVVXNUMEZCVDBNc2JVSkJRV2xDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExGRkJRVkVzU1VGQlNTeERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVjBGQlZ5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFdEJRVXNzU1VGQlNTeERRVUZETEV0QlFVc3NTMEZCU3l4RlFVRkZMRTlCUVU4c1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExGZEJRVmNzU1VGQlNTd3dRMEZCTUVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNUMEZCVDBFc2JVSkJRV2xDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGFHRTdRVUZEUVN4VFFVRlRRU3h0UWtGQmFVSXNRMEZCUXl4SFFVRkhMRVZCUVVVc1IwRkJSeXhGUVVGRkxFVkJRVVVzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4SlFVRkpMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVU1zVFVGQlRTeEZRVUZGTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUzBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhQUVVGUExFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEzWk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlNTeFRRVUZUTEVkQlFVY3NhVU5CUVdsRExFTkJRVU03UVVGRGJFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWtzYVVKQlFXbENMRWRCUVVjc1UwRkJVeXhwUWtGQmFVSXNRMEZCUXl4SlFVRkpMRVZCUVVVN1FVRkRla1FzUlVGQlJTeEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRkRUk3UVVGRFFTeEZRVUZGTEVsQlFVa3NUMEZCVHl4RFFVRkRPMEZCUTJRN1FVRkRRU3hGUVVGRkxFOUJRVThzUTBGQlF5eFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhGUVVGRkxFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZET1VVN1FVRkRRU3hKUVVGSkxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0QlFVTjBRanRCUVVOQkxFbEJRVWtzU1VGQlNTeFRRVUZUTEVkQlFVZEdMRFJDUVVFd1FpeERRVUZETEU5QlFVOHNRMEZCUXp0QlFVTjJSQ3hSUVVGUkxFdEJRVXNzUTBGQlF6dEJRVU5rTzBGQlEwRXNTVUZCU1N4SlFVRkpPMEZCUTFJc1RVRkJUU3hMUVVGTExGTkJRVk1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTeXhIUVVGSExGTkJRVk1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRWRCUVVjN1FVRkRNVVFzVVVGQlVTeEpRVUZKTEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRE8wRkJRM0JETEZGQlFWRXNTVUZCU1N4TFFVRkxMRWRCUVVjc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEycERMRkZCUVZFc1NVRkJTU3hIUVVGSExFZEJRVWNzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXk5Q0xGRkJRVkVzU1VGQlNTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU55UXl4UlFVRlJMRWxCUVVrc1ZVRkJWU3hIUVVGSExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTTdRVUZEZWtNN1FVRkRRU3hSUVVGUkxFbEJRVWtzUzBGQlN5eExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTnFReXhWUVVGVkxFMUJRVTBzU1VGQlNTeExRVUZMTEVOQlFVTXNhVU5CUVdsRExFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NSVUZCUlN4blEwRkJaME1zUTBGQlF5eERRVUZETEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5zU1N4VFFVRlRPMEZCUTFRN1FVRkRRU3hSUVVGUkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTJwSExFOUJRVTg3UVVGRFVDeExRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN1FVRkRiRUlzVFVGQlRTeFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM1pDTEV0QlFVc3NVMEZCVXp0QlFVTmtMRTFCUVUwc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzBGQlEzQkNMRXRCUVVzN1FVRkRUQ3hIUVVGSE8wRkJRMGc3UVVGRFFTeEZRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMEZCUTJRc1EwRkJReXhEUVVGRE8wRkJRMFk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKTEdGQlFXRXNSMEZCUnl4VFFVRlRMR0ZCUVdFc1EwRkJReXhMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGTzBGQlEzcEVMRVZCUVVVc1NVRkJTU3hQUVVGUExFdEJRVXNzUzBGQlN5eFJRVUZSTEVsQlFVa3NSVUZCUlN4TFFVRkxMRmxCUVZrc1RVRkJUU3hEUVVGRExFbEJRVWtzVDBGQlR5eExRVUZMTEV0QlFVc3NVVUZCVVN4SlFVRkpMRVZCUVVVc1MwRkJTeXhaUVVGWkxFMUJRVTBzUTBGQlF5eEZRVUZGTzBGQlF6RklMRWxCUVVrc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eG5RMEZCWjBNc1EwRkJReXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTXZSaXhIUVVGSE8wRkJRMGc3UVVGRFFTeEZRVUZGTEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYmtNc1JVRkJSU3hKUVVGSkxGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMjVETzBGQlEwRXNSVUZCUlN4SlFVRkpMRk5CUVZNc1EwRkJReXhOUVVGTkxFZEJRVWNzVTBGQlV5eERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTXpReXhKUVVGSkxFOUJRVThzUzBGQlN5eERRVUZETzBGQlEycENMRWRCUVVjN1FVRkRTRHRCUVVOQkxFVkJRVVVzVDBGQlR5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hGUVVGRk8wRkJRemxDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wRkJRM1JDTEVkQlFVYzdRVUZEU0R0QlFVTkJMRVZCUVVVc1QwRkJUeXhUUVVGVExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4RlFVRkZPMEZCUXpsQ0xFbEJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMEZCUTNSQ0xFZEJRVWM3UVVGRFNEdEJRVU5CTEVWQlFVVXNTVUZCU1N4VFFVRlRMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVk1zUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZETTBNc1NVRkJTU3hQUVVGUExFdEJRVXNzUTBGQlF6dEJRVU5xUWl4SFFVRkhPMEZCUTBnN1FVRkRRU3hGUVVGRkxFOUJRVThzVTBGQlV5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRMMElzU1VGQlNTeEpRVUZKTEVsQlFVa3NSMEZCUnl4VFFVRlRMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03UVVGRGFrTXNTVUZCU1N4SlFVRkpMRWxCUVVrc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdRVUZEYWtNN1FVRkRRU3hKUVVGSkxFbEJRVWtzU1VGQlNTeExRVUZMTEVsQlFVa3NSVUZCUlR0QlFVTjJRaXhOUVVGTkxFOUJRVThzUzBGQlN5eERRVUZETzBGQlEyNUNMRXRCUVVzN1FVRkRUQ3hIUVVGSE8wRkJRMGc3UVVGRFFTeEZRVUZGTEU5QlFVOHNTVUZCU1N4RFFVRkRPMEZCUTJRc1EwRkJReXhEUVVGRE8wRkJRMFk3UVVGRFFTeFRRVUZUUnl3NFFrRkJORUlzUTBGQlF5eERRVUZETEVWQlFVVXNZMEZCWXl4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGRkxFZEJRVWNzVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVkRExDdENRVUUyUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzWTBGQll5eEpRVUZKTEVOQlFVTXNTVUZCU1N4UFFVRlBMRU5CUVVNc1EwRkJReXhOUVVGTkxFdEJRVXNzVVVGQlVTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hUUVVGVExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJReXhOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTEVsQlFVa3NSVUZCUlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RlFVRkZMRXRCUVVzc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeEpRVUZKTEZOQlFWTXNRMEZCUXl4MVNVRkJkVWtzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMR2RDUVVGblFpeEhRVUZITEVsQlFVa3NSVUZCUlN4TlFVRk5MRWRCUVVjc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1UwRkJVeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZMRk5CUVZNc1EwRkJReXhIUVVGSExFVkJRVVVzU1VGQlNTeEpRVUZKTEVkQlFVY3NSVUZCUlN4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRExFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFVkJRVVVzVTBGQlV5eERRVUZETEVOQlFVTXNSMEZCUnl4RlFVRkZMRVZCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJTeFRRVUZUTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1JVRkJSU3hEUVVGRExGRkJRVkVzUTBGQlF5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEZOQlFWTXNSVUZCUlN4SlFVRkpMRTFCUVUwc1JVRkJSU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVN1FVRkRhQzlDTzBGQlEwRXNVMEZCVTBFc0swSkJRVFpDTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFdEJRVXNzVVVGQlVTeEZRVUZGTEU5QlFVOURMSEZDUVVGdFFpeERRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhSUVVGUkxFbEJRVWtzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExGZEJRVmNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhMUVVGTExFbEJRVWtzUTBGQlF5eExRVUZMTEV0QlFVc3NSVUZCUlN4UFFVRlBMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhYUVVGWExFbEJRVWtzTUVOQlFUQkRMRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEU5QlFVOUJMSEZDUVVGdFFpeERRVUZETEVOQlFVTXNSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRM1JoTzBGQlEwRXNVMEZCVTBFc2NVSkJRVzFDTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hGUVVGRkxFbEJRVWtzUjBGQlJ5eEpRVUZKTEVsQlFVa3NTVUZCU1N4SFFVRkhMRWRCUVVjc1IwRkJSeXhEUVVGRExFMUJRVTBzUlVGQlJTeEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFdEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRWxCUVVrc1IwRkJSeXhKUVVGSkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1IwRkJSeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1QwRkJUeXhKUVVGSkxFTkJRVU1zUlVGQlJUdEJRVU42VEN4SlFVRkpMRzFDUVVGdFFpeEhRVUZITEdkRFFVRm5ReXhEUVVGRE8wRkJRek5FTEVGQkswSkJPMEZCUTBFc1NVRkJTU3hOUVVGTkxFZEJRVWNzVTBGQlV5eERRVUZETzBGQlEzWkNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZKTEZOQlFWTXNSMEZCUnl4VFFVRlRMRk5CUVZNc1EwRkJReXhSUVVGUkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzUkVMRVZCUVVVc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5xUWl4SlFVRkpMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBKQlFYTkNMRU5CUVVNc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJ4RkxFZEJRVWM3UVVGRFNEdEJRVU5CTEVWQlFVVXNTVUZCU1N4SlFVRkpMRWRCUVVjc1QwRkJUeXhKUVVGSkxFVkJRVVU3UVVGRE1VSXNUVUZCVFN4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUTBGQlF6dEJRVU16UXp0QlFVTkJMRVZCUVVVc1NVRkJTU3hoUVVGaExFZEJRVWNzYVVKQlFXbENMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGJFUTdRVUZEUVN4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zWVVGQllTeERRVUZETEVWQlFVVTdRVUZEYkVNc1NVRkJTU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEVkQlFVY3NRMEZCUXl4SlFVRkpMRkZCUVZFc1MwRkJTeXhoUVVGaExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4aFFVRmhMRVZCUVVVc1NVRkJTU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZET1Vnc1NVRkJTU3hOUVVGTkxFbEJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNwQ0xFZEJRVWM3UVVGRFNEdEJRVU5CTEVWQlFVVXNTVUZCU1N4UlFVRlJMRWRCUVVjc1dVRkJXU3hEUVVGRExHRkJRV0VzUTBGQlF5eERRVUZETzBGQlF6ZERMRVZCUVVVc1NVRkJTU3hKUVVGSkxFTkJRVU03UVVGRFdEdEJRVU5CTEVWQlFVVXNTVUZCU1R0QlFVTk9MRWxCUVVrc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRhRU1zUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMEZCUTJRc1NVRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeFhRVUZYTEVWQlFVVTdRVUZEYkVNc1RVRkJUU3hOUVVGTkxFbEJRVWtzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVThzUlVGQlJTeHZRa0ZCYjBJc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNwR0xFdEJRVXM3UVVGRFRDeEhRVUZITzBGQlEwZzdRVUZEUVN4RlFVRkZMRWxCUVVrc1kwRkJZeXhGUVVGRk8wRkJRM1JDTEVsQlFVa3NVMEZCVXl4RFFVRkRMRWxCUVVrc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF6dEJRVU01UWl4SFFVRkhPMEZCUTBnN1FVRkRRU3hGUVVGRkxFbEJRVWtzVTBGQlV5eEhRVUZIUml3NFFrRkJORUlzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wRkJRM3BGTEUxQlFVMHNTMEZCU3l4RFFVRkRPMEZCUTFvN1FVRkRRU3hGUVVGRkxFbEJRVWs3UVVGRFRpeEpRVUZKTEV0QlFVc3NVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTEVkQlFVY3NVMEZCVXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUjBGQlJ6dEJRVU40UkN4TlFVRk5MRWxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTTdRVUZEYUVNN1FVRkRRU3hOUVVGTkxFbEJRVWtzYVVKQlFXbENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdRVUZETDBNc1VVRkJVU3hQUVVGUExFVkJRVVVzVDBGQlR6dEJRVU40UWl4UlFVRlJMRWxCUVVrc1JVRkJSU3hKUVVGSk8wRkJRMnhDTEU5QlFVOHNRMEZCUXp0QlFVTlNMRlZCUVZVc1VVRkJVU3hIUVVGSExHbENRVUZwUWl4RFFVRkRMRkZCUVZFN1FVRkRMME1zVlVGQlZTeFBRVUZQTEVkQlFVY3NhVUpCUVdsQ0xFTkJRVU1zVDBGQlR6dEJRVU0zUXl4VlFVRlZMRlZCUVZVc1IwRkJSeXhwUWtGQmFVSXNRMEZCUXl4VlFVRlZPMEZCUTI1RUxGVkJRVlVzVVVGQlVTeEhRVUZITEdsQ1FVRnBRaXhEUVVGRExGRkJRVkVzUTBGQlF6dEJRVU5vUkR0QlFVTkJMRTFCUVUwc1NVRkJTU3hSUVVGUkxFVkJRVVU3UVVGRGNFSXNVVUZCVVN4SlFVRkpMRTlCUVU4c1IwRkJSeXhUUVVGVExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdRVUZETVVNc1VVRkJVU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPMEZCUTNaRExFOUJRVThzVFVGQlRUdEJRVU5pTzBGQlEwRXNVVUZCVVN4SlFVRkpMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGVFSXNVVUZCVVN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzBGQlEzUkRMRkZCUVZFc1NVRkJTU3hMUVVGTExFZEJRVWNzVjBGQlZ5eERRVUZETEU5QlFVOHNSVUZCUlR0QlFVTjZReXhWUVVGVkxHRkJRV0VzUlVGQlJTeEpRVUZKTzBGQlF6ZENMRk5CUVZNc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eFZRVUZWTEVsQlFVa3NSVUZCUlR0QlFVTnNReXhWUVVGVkxFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RlFVRkZMRWxCUVVrc1RVRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRMMFFzVTBGQlV5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1NVRkJTU3hGUVVGRk8wRkJReTlDTEZWQlFWVXNUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRek5DTEZOQlFWTXNRMEZCUXl4RFFVRkRPMEZCUTFnN1FVRkRRU3hSUVVGUkxFbEJRVWtzVlVGQlZTeEhRVUZIUVN3NFFrRkJORUlzUTBGQlF5eExRVUZMTEVOQlFVTTdRVUZETlVRc1dVRkJXU3hOUVVGTkxFTkJRVU03UVVGRGJrSTdRVUZEUVN4UlFVRlJMRWxCUVVrN1FVRkRXaXhWUVVGVkxFdEJRVXNzVlVGQlZTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1IwRkJSenRCUVVOcVJTeFpRVUZaTEVsQlFVa3NUMEZCVHl4SFFVRkhMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU03UVVGRGRrTXNXVUZCV1N4SlFVRkpMRTFCUVUwc1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR5eERRVUZETEUxQlFVMHNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVOeVJEdEJRVU5CTEZsQlFWa3NTVUZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNM1JEdEJRVU5CTEZsQlFWa3NUVUZCVFN4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF6dEJRVU4wUXl4WFFVRlhPMEZCUTFnc1UwRkJVeXhEUVVGRExFOUJRVThzUjBGQlJ5eEZRVUZGTzBGQlEzUkNMRlZCUVZVc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTTFRaXhUUVVGVExGTkJRVk03UVVGRGJFSXNWVUZCVlN4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03UVVGRGVrSXNVMEZCVXp0QlFVTlVMRTlCUVU4N1FVRkRVQ3hMUVVGTE8wRkJRMHdzUjBGQlJ5eERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZPMEZCUTJoQ0xFbEJRVWtzVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOeVFpeEhRVUZITEZOQlFWTTdRVUZEV2l4SlFVRkpMRk5CUVZNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF6dEJRVU5zUWl4SFFVRkhPMEZCUTBnN1FVRkRRU3hGUVVGRkxFbEJRVWtzVlVGQlZTeEhRVUZIUVN3NFFrRkJORUlzUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8wRkJRM3BGTEUxQlFVMHNUVUZCVFN4RFFVRkRPMEZCUTJJN1FVRkRRU3hGUVVGRkxFbEJRVWs3UVVGRFRpeEpRVUZKTEVsQlFVa3NTMEZCU3l4SFFVRkhMRk5CUVZNc1MwRkJTeXhIUVVGSE8wRkJRMnBETEUxQlFVMHNTVUZCU1N4UFFVRlBMRWRCUVVjc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF6dEJRVU5xUXp0QlFVTkJMRTFCUVUwc1NVRkJTU3huUWtGQlowSXNSMEZCUnl4bFFVRmxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFbEJRVWtzUTBGQlF6dEJRVU16UkN4VlFVRlZMRkZCUVZFc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4UlFVRlJPMEZCUXpsRExGVkJRVlVzVFVGQlRTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExFMUJRVTA3UVVGRE1VTXNWVUZCVlN4UFFVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNUMEZCVHp0QlFVTTFReXhWUVVGVkxHTkJRV01zUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhqUVVGak8wRkJRekZFTEZWQlFWVXNVVUZCVVN4SFFVRkhMR2RDUVVGblFpeERRVUZETEZGQlFWRXNRMEZCUXp0QlFVTXZRenRCUVVOQkxFMUJRVTBzU1VGQlNTeFhRVUZYTEVkQlFVY3NVMEZCVXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVTdRVUZEYkVVc1VVRkJVU3hQUVVGUExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNWVUZCVlN4VFFVRlRMRVZCUVVVN1FVRkRhRVFzVlVGQlZTeFBRVUZQTEZOQlFWTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhIUVVGSExFTkJRVU03UVVGRE5VTXNVMEZCVXl4RFFVRkRMRWxCUVVrc1ZVRkJWU3hEUVVGRExFVkJRVVU3UVVGRE0wSXNWVUZCVlN4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVOc1FpeFRRVUZUTEVOQlFVTXNTVUZCU1N4TFFVRkxMRU5CUVVNc2IwSkJRVzlDTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1JVRkJSU3hSUVVGUkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZET1VZc1QwRkJUeXhEUVVGRE8wRkJRMUk3UVVGRFFTeE5RVUZOTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJUdEJRVU51UXp0QlFVTkJMRkZCUVZFc1NVRkJTU3hUUVVGVExFZEJRVWNzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4VlFVRlZMRWRCUVVjc1JVRkJSVHRCUVVOd1JDeFZRVUZWTEU5QlFVOHNWMEZCVnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hQUVVGUExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYmtRc1UwRkJVeXhEUVVGRExFTkJRVU03UVVGRFdDeFJRVUZSTEZGQlFWRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVFVGQlRTeERRVUZETEd0Q1FVRnJRaXhEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTndSeXhQUVVGUExFMUJRVTBzU1VGQlNTeFBRVUZQTEVOQlFVTXNVVUZCVVN4RFFVRkRMRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJRMnBFTEZGQlFWRXNTMEZCU3l4SlFVRkpMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVVzV1VGQldTeEhRVUZITEUxQlFVMHNRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeEhRVUZITEZsQlFWa3NRMEZCUXl4TlFVRk5MRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3UVVGREwwWXNWVUZCVlN4SlFVRkpMRWRCUVVjc1IwRkJSeXhaUVVGWkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZEY2tNc1ZVRkJWU3hSUVVGUkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRTFCUVUwc1JVRkJSU3hQUVVGUExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETlVRc1UwRkJVenRCUVVOVUxFOUJRVThzVFVGQlRUdEJRVU5pTzBGQlEwRXNVVUZCVVN4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNSVUZCUlN4UFFVRlBMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRE1VVXNUMEZCVHp0QlFVTlFMRXRCUVVzc1EwRkJRenRCUVVOT08wRkJRMEVzU1VGQlNTeExRVUZMTEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFZEJRVWM3UVVGRE0wUXNUVUZCVFN4TFFVRkxMRVZCUVVVc1EwRkJRenRCUVVOa0xFdEJRVXM3UVVGRFRDeEhRVUZITEVOQlFVTXNUMEZCVHl4SFFVRkhMRVZCUVVVN1FVRkRhRUlzU1VGQlNTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM1JDTEVkQlFVY3NVMEZCVXp0QlFVTmFMRWxCUVVrc1ZVRkJWU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETzBGQlEyNUNMRWRCUVVjN1FVRkRTRHRCUVVOQkxFVkJRVVVzVDBGQlR5eEpRVUZKTEVOQlFVTTdRVUZEWkN4RFFVRkRMRU5CUVVNN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1N4VFFVRlRMRWRCUVVjc1UwRkJVeXhUUVVGVExFTkJRVU1zU1VGQlNTeEZRVUZGTEZGQlFWRXNSVUZCUlR0QlFVTnVSQ3hGUVVGRkxFbEJRVWtzVFVGQlRTeEhRVUZITEZsQlFWa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOc1F5eEZRVUZGTEUxQlFVMHNRMEZCUXl4VlFVRlZMRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJReTlDTEVOQlFVTXNRMEZCUXp0QlFVTkdPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVa3NWVUZCVlN4SFFVRkhMRk5CUVZNc1ZVRkJWU3hEUVVGRExFdEJRVXNzUlVGQlJUdEJRVU0xUXl4RlFVRkZMRWxCUVVrc1NVRkJTU3hIUVVGSExFdEJRVXNzUTBGQlF5eEpRVUZKTzBGQlEzWkNMRTFCUVUwc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTzBGQlF5OUNMRTFCUVUwc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTzBGQlF5OUNMRTFCUVUwc1kwRkJZeXhIUVVGSExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTTdRVUZETlVNN1FVRkRRU3hGUVVGRkxFbEJRVWtzVVVGQlVTeExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTTVRaXhKUVVGSkxFbEJRVWtzVFVGQlRTeEhRVUZITEZOQlFWTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOcVF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4TlFVRk5MRWxCUVVrc1RVRkJUU3hEUVVGRExGVkJRVlVzUTBGQlF6dEJRVU16UXp0QlFVTkJMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU51UWl4TlFVRk5MRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU1zYzBWQlFYTkZMRU5CUVVNc1EwRkJRenRCUVVNNVJpeExRVUZMTzBGQlEwd3NSMEZCUnp0QlFVTklPMEZCUTBFc1JVRkJSU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEV0QlFVc3NVMEZCVXl4SlFVRkpMR05CUVdNc1NVRkJTU3hoUVVGaExFTkJRVU1zVVVGQlVTeEZRVUZGTEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUTI1SE8wRkJRMEVzUlVGQlJTeEpRVUZKTEUxQlFVMHNTVUZCU1N4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVNelFpeEpRVUZKTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2QwVkJRWGRGTEVOQlFVTXNRMEZCUXp0QlFVTTVSaXhIUVVGSE8wRkJRMGc3UVVGRFFTeEZRVUZGTEVsQlFVa3NWVUZCVlN4SFFVRkhMR0ZCUVdFc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU4yUXp0QlFVTkJMRVZCUVVVc1NVRkJTU3hWUVVGVkxFVkJRVVU3UVVGRGJFSXNTVUZCU1N4SlFVRkpMRlZCUVZVc1IwRkJSMEVzT0VKQlFUUkNMRU5CUVVNc1ZVRkJWU3hEUVVGRE8wRkJRemRFTEZGQlFWRXNUVUZCVFN4RFFVRkRPMEZCUTJZN1FVRkRRU3hKUVVGSkxFbEJRVWs3UVVGRFVpeE5RVUZOTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUjBGQlJ6dEJRVU0zUkN4UlFVRlJMRWxCUVVrc1QwRkJUeXhIUVVGSExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdRVUZEYmtNN1FVRkRRU3hSUVVGUkxFbEJRVWtzYTBKQlFXdENMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdRVUZEYkVRc1ZVRkJWU3hQUVVGUExFVkJRVVVzVDBGQlR6dEJRVU14UWl4VlFVRlZMRWxCUVVrc1JVRkJSU3hKUVVGSk8wRkJRM0JDTEZWQlFWVXNaMEpCUVdkQ0xFVkJRVVVzU1VGQlNUdEJRVU5vUXl4VFFVRlRMRU5CUVVNN1FVRkRWaXhaUVVGWkxGRkJRVkVzUjBGQlJ5eHJRa0ZCYTBJc1EwRkJReXhSUVVGUk8wRkJRMnhFTEZsQlFWa3NUMEZCVHl4SFFVRkhMR3RDUVVGclFpeERRVUZETEU5QlFVODdRVUZEYUVRc1dVRkJXU3hSUVVGUkxFZEJRVWNzYTBKQlFXdENMRU5CUVVNc1VVRkJVVHRCUVVOc1JDeFpRVUZaTEZWQlFWVXNSMEZCUnl4clFrRkJhMElzUTBGQlF5eFZRVUZWTzBGQlEzUkVMRmxCUVZrc1VVRkJVU3hIUVVGSExHdENRVUZyUWl4RFFVRkRMRkZCUVZFN1FVRkRiRVFzV1VGQldTeFBRVUZQTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU1zVDBGQlR5eERRVUZETzBGQlEycEVPMEZCUTBFc1VVRkJVU3hKUVVGSkxFZEJRVWNzVDBGQlR5eERRVUZETzBGQlEzWkNMRkZCUVZFc1NVRkJTU3hQUVVGUExFZEJRVWNzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUXpORExGRkJRVkVzVlVGQlZTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOd1F6dEJRVU5CTEZGQlFWRXNTVUZCU1N4UlFVRlJMRVZCUVVVN1FVRkRkRUlzVlVGQlZTeFZRVUZWTEVOQlFVTTdRVUZEY2tJc1dVRkJXU3hKUVVGSkxFVkJRVVVzVDBGQlR6dEJRVU42UWl4WlFVRlpMRkZCUVZFc1JVRkJSU3hSUVVGUk8wRkJRemxDTEZsQlFWa3NVVUZCVVN4RlFVRkZMRkZCUVZFN1FVRkRPVUlzV1VGQldTeGpRVUZqTEVWQlFVVXNiMEpCUVc5Q0xFTkJRVU1zVVVGQlVTeEZRVUZGTEdOQlFXTXNRMEZCUXp0QlFVTXhSU3hYUVVGWExFTkJRVU1zUTBGQlF6dEJRVU5pTEZOQlFWTXNUVUZCVFR0QlFVTm1PMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVlVzVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4SlFVRkpMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dEJRVU53UkR0QlFVTkJMRlZCUVZVc1MwRkJTeXhKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETEVWQlFVVXNZVUZCWVN4SFFVRkhMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVXNSMEZCUnl4SFFVRkhMR0ZCUVdFc1EwRkJReXhOUVVGTkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVWQlFVVTdRVUZEY2tjc1dVRkJXU3hKUVVGSkxFMUJRVTBzUjBGQlJ5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkROVU1zV1VGQldTeFZRVUZWTEVOQlFVTTdRVUZEZGtJc1kwRkJZeXhKUVVGSkxFVkJRVVVzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTnVReXhqUVVGakxGRkJRVkVzUlVGQlJTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZMRVZCUVVVc1EwRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMEZCUTJwRkxHTkJRV01zVVVGQlVTeEZRVUZGTEZGQlFWRTdRVUZEYUVNc1kwRkJZeXhqUVVGakxFVkJRVVVzYjBKQlFXOUNMRU5CUVVNc1JVRkJSU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEZRVUZGTEdOQlFXTXNRMEZCUXp0QlFVTXpSeXhoUVVGaExFTkJRVU1zUTBGQlF6dEJRVU5tTEZkQlFWYzdRVUZEV0N4VFFVRlRPMEZCUTFRc1QwRkJUenRCUVVOUUxFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NSVUZCUlR0QlFVTnNRaXhOUVVGTkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRlRUlzUzBGQlN5eFRRVUZUTzBGQlEyUXNUVUZCVFN4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03UVVGRGNrSXNTMEZCU3p0QlFVTk1MRWRCUVVjN1FVRkRTRHRCUVVOQkxFVkJRVVVzU1VGQlNTeE5RVUZOTEVWQlFVVTdRVUZEWkN4SlFVRkpMRWxCUVVrc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNTVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU4wUkN4SlFVRkpMRWxCUVVrc1lVRkJZU3hIUVVGSExHbENRVUZwUWl4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wRkJRM0JFTEVsQlFVa3NZVUZCWVN4RFFVRkRMR0ZCUVdFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dEJRVU0zUXl4SFFVRkhPMEZCUTBnc1EwRkJReXhEUVVGRE8wRkJRMFk3UVVGRFFTeEpRVUZKTEZOQlFWTXNSMEZCUnl4VFFVRlRMRk5CUVZNc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRGVrTXNSVUZCUlN4UFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFbEJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzBGQlEzWkVMRU5CUVVNc1EwRkJRenRCUVVOR08wRkJRMEVzU1VGQlNTeFpRVUZaTEVkQlFVY3NVMEZCVXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hGUVVGRk8wRkJReTlETEVWQlFVVXNTVUZCU1N4TlFVRk5MRWRCUVVjc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlF5OUNPMEZCUTBFc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyWXNTVUZCU1N4SlFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFdEJRVXNzVTBGQlV5eEZRVUZGTzBGQlEyeERMRTFCUVUwc1NVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVJc1MwRkJTenRCUVVOTU8wRkJRMEVzU1VGQlNTeEpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNTMEZCU3l4VFFVRlRMRVZCUVVVN1FVRkRka1FzVFVGQlRTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRzFDUVVGdFFpeERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUXpORExFdEJRVXM3UVVGRFREdEJRVU5CTEVsQlFVa3NUVUZCVFN4SFFVRkhMRk5CUVZNc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU0zUWl4SFFVRkhPMEZCUTBnN1FVRkRRU3hGUVVGRkxFOUJRVThzVFVGQlRTeERRVUZETzBGQlEyaENMRU5CUVVNc1EwRkJRenRCUVVOR08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVrc2IwSkJRVzlDTEVkQlFVY3NVMEZCVXl4dlFrRkJiMElzUTBGQlF5eGhRVUZoTEVWQlFVVXNZMEZCWXl4RlFVRkZPMEZCUTNoR0xFVkJRVVVzU1VGQlNTeGhRVUZoTEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUTI1RExFbEJRVWtzVDBGQlR5eGpRVUZqTEV0QlFVc3NVMEZCVXl4SFFVRkhMR0ZCUVdFc1IwRkJSeXhGUVVGRkxFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRMRTFCUVUwc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlF6dEJRVU14Unl4SFFVRkhMRTFCUVUwN1FVRkRWQ3hKUVVGSkxFOUJRVThzVTBGQlV5eERRVUZETzBGQlEzSkNMRWRCUVVjN1FVRkRTQ3hEUVVGRExFTkJRVU03UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTU3hoUVVGaExFZEJRVWNzVTBGQlV5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVRkZPMEZCUTJwRUxFVkJRVVVzU1VGQlNTeFZRVUZWTEVOQlFVTTdRVUZEYWtJN1FVRkRRU3hGUVVGRkxFOUJRVThzUTBGQlF5eFZRVUZWTEVkQlFVY3NVMEZCVXl4RFFVRkRMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzU1VGQlNTeFZRVUZWTEV0QlFVc3NTMEZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEZWQlFWVXNRMEZCUXp0QlFVTXpSeXhEUVVGRExFTkJRVU03UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJTU3huUWtGQlowSXNSMEZCUnl4VFFVRlRMR2RDUVVGblFpeERRVUZETEV0QlFVc3NSVUZCUlR0QlFVTjRSQ3hGUVVGRkxFbEJRVWtzVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBPMEZCUXpkQ0xFMUJRVTBzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpPMEZCUTNaQ0xFMUJRVTBzWjBKQlFXZENMRWRCUVVjc1MwRkJTeXhEUVVGRExHZENRVUZuUWl4RFFVRkRPMEZCUTJoRUxFVkJRVVVzU1VGQlNTeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFN1FVRkRha01zVFVGQlRTeFJRVUZSTEVkQlFVY3NUMEZCVHl4RFFVRkRMRkZCUVZFN1FVRkRha01zVFVGQlRTeFBRVUZQTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJRenRCUVVOb1F5eEZRVUZGTEZGQlFWRXNTVUZCU1N4UFFVRlBPMEZCUTNKQ0xFdEJRVXNzVlVGQlZTeERRVUZETEVWQlFVVTdRVUZEYkVJc1NVRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU5hTEVkQlFVY3NRMEZCUXl4SlFVRkpMRXRCUVVzc1EwRkJReXhwUkVGQmFVUXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROMGdzUlVGQlJTeERRVUZETEZGQlFWRXNTVUZCU1N4RFFVRkRMRTlCUVU4N1FVRkRka0lzUzBGQlN5eFZRVUZWTEVOQlFVTXNSVUZCUlR0QlFVTnNRaXhKUVVGSkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlExb3NSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhEUVVGRExHdEVRVUZyUkN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOdVJTeEZRVUZGTEZGQlFWRXNTMEZCU3l4UlFVRlJMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMlJDeEZRVUZGTEU5QlFVOHNTMEZCU3l4UFFVRlBMRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNUMEZCVHl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOd1JEdEJRVU5CTEVWQlFVVXNTVUZCU1N4blFrRkJaMElzUjBGQlJ5eGxRVUZsTEVOQlFVTTdRVUZEZWtNc1NVRkJTU3hKUVVGSkxFVkJRVVVzVVVGQlVUdEJRVU5zUWl4SlFVRkpMRWxCUVVrc1JVRkJSU3hKUVVGSk8wRkJRMlFzU1VGQlNTeG5Ra0ZCWjBJc1JVRkJSU3huUWtGQlowSTdRVUZEZEVNc1IwRkJSeXhEUVVGRE8wRkJRMG9zVFVGQlRTeFZRVUZWTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zWTBGQll6dEJRVU5zUkN4TlFVRk5MRkZCUVZFc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4UlFVRlJPMEZCUXpGRExFMUJRVTBzVDBGQlR5eEhRVUZITEdkQ1FVRm5RaXhEUVVGRExFOUJRVThzUTBGQlF6dEJRVU42UXp0QlFVTkJMRVZCUVVVc1QwRkJUenRCUVVOVUxFbEJRVWtzVVVGQlVTeEZRVUZGTEZGQlFWRTdRVUZEZEVJc1NVRkJTU3hQUVVGUExFVkJRVVVzVDBGQlR6dEJRVU53UWl4SlFVRkpMRkZCUVZFc1JVRkJSU3hSUVVGUk8wRkJRM1JDTEVsQlFVa3NWVUZCVlN4RlFVRkZMRlZCUVZVN1FVRkRNVUlzU1VGQlNTeFJRVUZSTEVWQlFVVXNVVUZCVVR0QlFVTjBRaXhKUVVGSkxFOUJRVThzUlVGQlJTeFBRVUZQTzBGQlEzQkNMRWRCUVVjc1EwRkJRenRCUVVOS0xFTkJRVU1zUTBGQlF6dEJRVU5HTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSkxGbEJRVmtzUjBGQlJ5eFRRVUZUTEZsQlFWa3NRMEZCUXl4SlFVRkpMRVZCUVVVN1FVRkRMME1zUlVGQlJTeEpRVUZKTEZkQlFWY3NRMEZCUXp0QlFVTnNRanRCUVVOQkxFVkJRVVVzVDBGQlR5eERRVUZETEZkQlFWY3NSMEZCUnl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExFMUJRVTBzU1VGQlNTeEpRVUZKTEZkQlFWY3NTMEZCU3l4TFFVRkxMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNVMEZCVXl4RFFVRkRPMEZCUXpkSExFTkJRVU1zUTBGQlF6dEJRVU5HTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSkxHVkJRV1VzUjBGQlJ5eFRRVUZUTEdWQlFXVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hGUVVGRk8wRkJRemxFTEVWQlFVVXNTVUZCU1N4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExGRkJRVkU3UVVGRGFrTXNUVUZCVFN4TlFVRk5MRWRCUVVjc1QwRkJUeXhEUVVGRExFMUJRVTA3UVVGRE4wSXNUVUZCVFN4UFFVRlBMRWRCUVVjc1QwRkJUeXhEUVVGRExFOUJRVThzUTBGQlF6dEJRVU5vUXp0QlFVTkJMRVZCUVVVc1NVRkJTU3hwUWtGQmFVSXNSMEZCUnl4bFFVRmxMRU5CUVVNN1FVRkRNVU1zU1VGQlNTeEpRVUZKTEVWQlFVVXNVVUZCVVR0QlFVTnNRaXhKUVVGSkxFbEJRVWtzUlVGQlJTeEpRVUZKTzBGQlEyUXNSMEZCUnl4RFFVRkRPMEZCUTBvc1RVRkJUU3hSUVVGUkxFZEJRVWNzYVVKQlFXbENMRU5CUVVNc1VVRkJVVHRCUVVNelF5eE5RVUZOTEdOQlFXTXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF5eGpRVUZqTzBGQlEzWkVMRTFCUVUwc1VVRkJVU3hIUVVGSExHbENRVUZwUWl4RFFVRkRMRkZCUVZFc1EwRkJRenRCUVVNMVF6dEJRVU5CTEVWQlFVVXNTVUZCU1N4cFFrRkJhVUlzUjBGQlJ5eGxRVUZsTEVOQlFVTTdRVUZETVVNc1NVRkJTU3hKUVVGSkxFVkJRVVVzVFVGQlRUdEJRVU5vUWl4SlFVRkpMRWxCUVVrc1JVRkJSU3hKUVVGSk8wRkJRMlFzUjBGQlJ5eERRVUZETzBGQlEwb3NUVUZCVFN4TlFVRk5MRWRCUVVjc2FVSkJRV2xDTEVOQlFVTXNVVUZCVVN4RFFVRkRPMEZCUXpGRE8wRkJRMEVzUlVGQlJTeFBRVUZQTzBGQlExUXNTVUZCU1N4UlFVRlJMRVZCUVVVc1VVRkJVVHRCUVVOMFFpeEpRVUZKTEUxQlFVMHNSVUZCUlN4TlFVRk5PMEZCUTJ4Q0xFbEJRVWtzVDBGQlR5eEZRVUZGTEU5QlFVODdRVUZEY0VJc1NVRkJTU3hqUVVGakxFVkJRVVVzWTBGQll6dEJRVU5zUXl4SlFVRkpMRkZCUVZFc1JVRkJSU3hSUVVGUk8wRkJRM1JDTEVkQlFVY3NRMEZCUXp0QlFVTktMRU5CUVVNc1EwRkJRenRCUVVOR08wRkJRMEVzU1VGQlNTeFhRVUZYTEVkQlFVY3NVMEZCVXl4WFFVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRk8wRkJRemxETEVWQlFVVXNUMEZCVHl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NVVUZCVVN4SlFVRkpMRXRCUVVzc1MwRkJTeXhKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4RlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEycEpMRU5CUVVNc1EwRkJRenRCUVVOR08wRkJRMEVzU1VGQlNTeGxRVUZsTEVkQlFVY3NVMEZCVXl4bFFVRmxMRU5CUVVNc1MwRkJTeXhGUVVGRk8wRkJRM1JFTEVWQlFVVXNTVUZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWs3UVVGRGRrSXNUVUZCVFN4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWs3UVVGRGRrSXNUVUZCVFN4blFrRkJaMElzUjBGQlJ5eExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU03UVVGRGFFUTdRVUZEUVN4RlFVRkZMRWxCUVVrc1EwRkJReXhKUVVGSkxFVkJRVVU3UVVGRFlpeEpRVUZKTEUxQlFVMHNTVUZCU1N4TFFVRkxMRU5CUVVNc2NVUkJRWEZFTEVOQlFVTXNRMEZCUXp0QlFVTXpSU3hIUVVGSE8wRkJRMGc3UVVGRFFTeEZRVUZGTEVsQlFVa3NVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEYkVNc1JVRkJSU3hUUVVGVExFTkJRVU1zUzBGQlN5eEZRVUZGTEVOQlFVTTdRVUZEY0VJc1JVRkJSU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eFRRVUZUTEVOQlFVTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRha01zUlVGQlJTeEpRVUZKTEU5QlFVOHNSMEZCUnl4blFrRkJaMElzUjBGQlJ5eFhRVUZYTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRelZFTEVWQlFVVXNTVUZCU1N4alFVRmpMRWRCUVVjc1QwRkJUeXhEUVVGRE8wRkJReTlDTzBGQlEwRXNSVUZCUlN4SlFVRkpMRlZCUVZVc1IwRkJSMEVzT0VKQlFUUkNMRU5CUVVNc1UwRkJVeXhEUVVGRE8wRkJRekZFTEUxQlFVMHNUVUZCVFN4RFFVRkRPMEZCUTJJN1FVRkRRU3hGUVVGRkxFbEJRVWs3UVVGRFRpeEpRVUZKTEV0QlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF5eE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUjBGQlJ6dEJRVU16UkN4TlFVRk5MRWxCUVVrc1IwRkJSeXhIUVVGSExFMUJRVTBzUTBGQlF5eExRVUZMTEVOQlFVTTdRVUZETjBJN1FVRkRRU3hOUVVGTkxFbEJRVWtzWjBKQlFXZENMRVZCUVVVN1FVRkROVUlzVVVGQlVTeEpRVUZKTEUxQlFVMHNSMEZCUnl4WFFVRlhMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZEVRc1VVRkJVU3hqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRPMEZCUTNKRExGRkJRVkVzWTBGQll5eEhRVUZITEUxQlFVMHNRMEZCUXp0QlFVTm9ReXhQUVVGUExFMUJRVTA3UVVGRFlpeFJRVUZSTEdOQlFXTXNSMEZCUnl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE4wTXNUMEZCVHp0QlFVTlFMRXRCUVVzN1FVRkRUQ3hIUVVGSExFTkJRVU1zVDBGQlR5eEhRVUZITEVWQlFVVTdRVUZEYUVJc1NVRkJTU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNSQ0xFZEJRVWNzVTBGQlV6dEJRVU5hTEVsQlFVa3NWVUZCVlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wRkJRMjVDTEVkQlFVYzdRVUZEU0R0QlFVTkJMRVZCUVVVc1QwRkJUenRCUVVOVUxFbEJRVWtzVVVGQlVTeEZRVUZGTEdOQlFXTXNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkRkRU1zU1VGQlNTeGpRVUZqTEVWQlFVVXNZMEZCWXp0QlFVTnNReXhKUVVGSkxGRkJRVkVzUlVGQlJTeFJRVUZSTzBGQlEzUkNMRWxCUVVrc1QwRkJUeXhGUVVGRkxFOUJRVTg3UVVGRGNFSXNSMEZCUnl4RFFVRkRPMEZCUTBvc1EwRkJReXhEUVVGRE8wRkJRMFk3UVVGRFFUdEJRVU5CTEVsQlFVa3NTMEZCU3l4SFFVRkhMRlZCUVZVc1EwRkJRenRCUVVOMlFpeEpRVUZKTEVsQlFVa3NSMEZCUnl4VFFVRlRMRU5CUVVNN096czdPenM3UVVNemNFSnlRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJRMEVzU1VGQlRVY3NSMEZCUnl4SFFVRkhMRk5CUVU1QkxFZEJRVTBzUTBGQlEwTXNTVUZCUkN4RlFVRlBReXhGUVVGUUxFVkJRV003UVVGQlFUczdRVUZCUVN4cFFrRkRUVU1zVDBGQlR5eERRVUZEUkN4RlFVRkVMRU5CUkdJN1FVRkJRVHRCUVVGQkxFMUJRMnBDUlN4VFFVUnBRanRCUVVGQkxFMUJRMDVETEZGQlJFMDdPMEZCUlhoQ0xGTkJRVThzUTBGQlFVb3NTVUZCU1N4VFFVRktMRWxCUVVGQkxFbEJRVWtzVjBGQlNpeHJRMEZCUVVFc1NVRkJTU3hEUVVGRlN5eFpRVUZPTEcxSFFVRnhRa1lzVTBGQmNrSXNhVVpCUVd0RFF5eFJRVUZzUXl4TlFVRXJRMFVzV1VGQldTeERRVUZEVGl4SlFVRkVMRVZCUVU5SExGTkJRVkFzUlVGQmEwSkRMRkZCUVd4Q0xFTkJRV3hGTzBGQlEwUXNRMEZJUkRzN1FVRkxRU3hKUVVGTlJ5eEpRVUZKTEVkQlFVY3NVMEZCVUVFc1NVRkJUeXhEUVVGRFVDeEpRVUZFTEZGQlFTdERPMEZCUVVFc1RVRkJkRU5STEUxQlFYTkRMRkZCUVhSRFFTeE5RVUZ6UXp0QlFVRkJMRTFCUVdoQ1RDeFRRVUZuUWl4UlFVRTVRaXhaUVVFNFFqczdRVUZETVVRc1RVRkJTVWdzU1VGQlNTeERRVUZEU3l4WlFVRk1MRXRCUVhOQ1NTeFRRVUV4UWl4RlFVRnhRenRCUVVOdVF5eFhRVUZQTEVWQlFWQTdRVUZEUkRzN1FVRkZSQ3hOUVVGTlF5eFZRVUZWTEVkQlFVZEdMRTFCUVUwc1MwRkJTME1zVTBGQldDeEhRVU5tUlN4TlFVRk5MRU5CUVVORExFbEJRVkFzUTBGQldWb3NTVUZCU1N4RFFVRkRTeXhaUVVGTUxFbEJRWEZDTEVWQlFXcERMRU5CUkdVc1IwRkZaaXhEUVVGRFJ5eE5RVUZFTEVOQlJrbzdRVUZKUVN4VFFVRlBSU3hWUVVGVkxFTkJRVU5ITEUxQlFWZ3NRMEZCYTBJc1ZVRkJRME1zUjBGQlJDeEZRVUZOUXl4VlFVRk9MRVZCUVhGQ08wRkJRelZETEZGQlFVMURMRlZCUVZVc1IwRkJSMmhDTEVsQlFVa3NRMEZCUTBzc1dVRkJUQ3hEUVVGclFsVXNWVUZCYkVJc1MwRkJhVU1zUlVGQmNFUTdRVUZEUVN4UlFVRk5SU3hWUVVGVkxFZEJRVWRrTEZOQlFWTXNTMEZCUzAwc1UwRkJaQ3hIUVVObVJTeE5RVUZOTEVOQlFVTkRMRWxCUVZBc1EwRkJXVWtzVlVGQldpeERRVVJsTEVkQlJXWXNRMEZCUTJJc1UwRkJSQ3hEUVVaS096dEJRVVkwUXl4cFJFRkxjRUpqTEZWQlRHOUNPMEZCUVVFN08wRkJRVUU3UVVGTE5VTXNNRVJCUVc5RE8wRkJRVUVzV1VGQmVrSmtMRlZCUVhsQ08wRkJRMnhETEZsQlFVMWxMRk5CUVZNc1IwRkJSMFlzVlVGQlZTeERRVUZEWWl4VlFVRkVMRU5CUVZZc1NVRkJlVUlzUlVGQk0wTTdPMEZCUTBFc2QwTkJRWFZDVVN4TlFVRk5MRU5CUVVORExFbEJRVkFzUTBGQldVMHNVMEZCV2l4RFFVRjJRaXhyUTBGQkswTTdRVUZCTVVNc1kwRkJUV1FzVVVGQlVTeHRRa0ZCWkR0QlFVTklWU3hWUVVGQlFTeEhRVUZITEVOQlFVTkxMRWxCUVVvc1EwRkJVMklzV1VGQldTeERRVUZEVGl4SlFVRkVMRVZCUVU5SExGVkJRVkFzUlVGQmEwSkRMRkZCUVd4Q0xFTkJRWEpDTzBGQlEwUTdRVUZEUmp0QlFWWXlRenRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFWYzFReXhYUVVGUFZTeEhRVUZRTzBGQlEwUXNSMEZhVFN4RlFXRlFMRVZCWWs4c1JVRmpTazBzU1VGa1NTeERRV05ETEZWQlFVTkRMRU5CUVVRc1JVRkJTVU1zUTBGQlNqdEJRVUZCTEZkQlFWVkVMRU5CUVVNc1EwRkJRM0JDTEVWQlFVWXNRMEZCUzNOQ0xHRkJRVXdzUTBGQmJVSkVMRU5CUVVNc1EwRkJRM0pDTEVWQlFYSkNMRU5CUVZZN1FVRkJRU3hIUVdSRUxFTkJRVkE3UVVGbFJDeERRWGhDUkRzN1FVRXdRa0VzU1VGQlRYVkNMRTlCUVU4c1IwRkJSeXhUUVVGV1FTeFBRVUZWTEVOQlFVTjRRaXhKUVVGRUxGTkJRU3RDTzBGQlFVRXNUVUZCZEVKUkxFMUJRWE5DTEZOQlFYUkNRU3hOUVVGelFqdEJRVUZCTEUxQlFXUnBRaXhQUVVGakxGTkJRV1JCTEU5QlFXTTdPMEZCUXpkRExFMUJRVWtzUTBGQlEwRXNUMEZCUkN4SlFVRlpha0lzVFVGQmFFSXNSVUZCZDBJN1FVRkRkRUpwUWl4SlFVRkJRU3hQUVVGUExFZEJRVWNzUTBGQlEycENMRTFCUVVRc1EwRkJWanRCUVVORU96dEJRVU5FTEUxQlFVbHBRaXhQUVVGUExFbEJRVWxCTEU5QlFVOHNRMEZCUTBNc1RVRkJVaXhIUVVGcFFpeERRVUZvUXl4RlFVRnRRenRCUVVGQkxHdEVRVU5zUWtRc1QwRkVhMEk3UVVGQlFUczdRVUZCUVR0QlFVTnFReXcyUkVGQmQwSTdRVUZCYmtKcVFpeFJRVUZCUVN4TlFVRnRRanRCUVVOMFFtMUNMRkZCUVVGQkxFdEJRVUVzUTBGQldUdEJRVUZGTTBJc1ZVRkJRVUVzU1VGQlNTeEZRVUZLUVN4SlFVRkdPMEZCUVZFMFFpeFZRVUZCUVN4UlFVRlJMREJDUVVGdlFuQkNMRTFCUVhCQ08wRkJRV2hDTEZOQlFWbzdRVUZEUkR0QlFVaG5RenRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlNXeERMRWRCU2tRc1RVRkxTenRCUVVOSWJVSXNTVUZCUVVFc1MwRkJRU3hEUVVGWk8wRkJRVVV6UWl4TlFVRkJRU3hKUVVGSkxFVkJRVXBCTEVsQlFVWTdRVUZCVVRSQ0xFMUJRVUZCTEZGQlFWRXNSVUZCUnp0QlFVRnVRaXhMUVVGYU8wRkJRMFE3UVVGRFJpeERRVnBFT3p0QlFXTkJMRWxCUVUxRExFMUJRVTBzUjBGQlJ5eFRRVUZVUVN4TlFVRlRMRU5CUVVNM1FpeEpRVUZFTEVWQlFVODRRaXhYUVVGUUxFVkJRWFZDTzBGQlFVRXNUVUZETlVJM1FpeEZRVVEwUWl4SFFVTnlRalpDTEZkQlJIRkNMRU5CUXpWQ04wSXNSVUZFTkVJN08wRkJRVUVzYTBKQlJVNURMRTlCUVU4c1EwRkJRMFFzUlVGQlJDeERRVVpFTzBGQlFVRTdRVUZCUVN4TlFVVTNRa1VzVTBGR05rSTdRVUZCUVN4TlFVVnNRa01zVVVGR2EwSTdPMEZCUVVFc2VVSkJSMjVDUkN4VFFVRlRMRU5CUVVNMFFpeExRVUZXTEVOQlFXZENMRWRCUVdoQ0xFTkJTRzFDTzBGQlFVRTdRVUZCUVN4TlFVYzNRblpDTEUxQlNEWkNPenRCUVV0d1F5eE5RVUZKTEVOQlFVTlNMRWxCUVVrc1EwRkJRMHNzV1VGQlRDeERRVUZyUWtjc1RVRkJiRUlzUTBGQlRDeEZRVUZuUXp0QlFVTTVRbElzU1VGQlFVRXNTVUZCU1N4RFFVRkRTeXhaUVVGTUxFTkJRV3RDUnl4TlFVRnNRaXhKUVVFMFFpeEZRVUUxUWp0QlFVTkVPenRCUVVORUxFMUJRVWtzUTBGQlExSXNTVUZCU1N4RFFVRkRTeXhaUVVGTUxFTkJRV3RDUnl4TlFVRnNRaXhGUVVFd1Frd3NVMEZCTVVJc1EwRkJUQ3hGUVVFeVF6dEJRVU42UTBnc1NVRkJRVUVzU1VGQlNTeERRVUZEU3l4WlFVRk1MRU5CUVd0Q1J5eE5RVUZzUWl4RlFVRXdRa3dzVTBGQk1VSXNTVUZCZFVNc1JVRkJka003UVVGRFJEczdRVUZGUkN4TlFVRk5Oa0lzV1VGQldTeEhRVUZIY2tJc1RVRkJUU3hEUVVGRGMwSXNUVUZCVUN4RFFVRmpMRVZCUVdRc1JVRkJhMEpJTEZkQlFXeENMRU5CUVhKQ08wRkJRMEVzVTBGQlQwVXNXVUZCV1N4RFFVRkRMMElzUlVGQmNFSTdRVUZEUVN4VFFVRlBLMElzV1VGQldTeERRVUZEUlN4TlFVRndRanRCUVVOQkxGTkJRVTlHTEZsQlFWa3NRMEZCUXpkQ0xGTkJRWEJDTzBGQlEwRklMRVZCUVVGQkxFbEJRVWtzUTBGQlEwc3NXVUZCVEN4RFFVRnJRa2NzVFVGQmJFSXNSVUZCTUVKTUxGTkJRVEZDTEVWQlFYRkRReXhSUVVGeVF5eEpRVUZwUkRSQ0xGbEJRV3BFTzBGQlEwUXNRMEZxUWtRN096dEJRVzlDUVN4SlFVRk5PVUlzVDBGQlR5eEhRVUZITEZOQlFWWkJMRTlCUVZVc1EwRkJRMFFzUlVGQlJDeEZRVUZSTzBGQlEzUkNMRTFCUVVsQkxFVkJRVVVzUzBGQlMxRXNVMEZCV0N4RlFVRnpRanRCUVVOd1FpeFZRVUZOTEVsQlFVa3dRaXhMUVVGS0xFTkJRVlVzSzBOQlFWWXNRMEZCVGp0QlFVTkVPenRCUVVoeFFpeHJRa0ZKVVd4RExFVkJRVVVzUTBGQlF6aENMRXRCUVVnc1EwRkJVeXhSUVVGVUxFTkJTbEk3UVVGQlFUdEJRVUZCTEUxQlNXWTFRaXhUUVVwbE8wRkJRVUVzVFVGSlNrTXNVVUZLU1RzN1FVRkxkRUlzVFVGQlNVUXNVMEZCVXl4TFFVRkxUU3hUUVVGa0xFbEJRVEpDVEN4UlFVRlJMRXRCUVV0TExGTkJRVFZETEVWQlFYVkVPMEZCUTNKRUxGVkJRVTBzU1VGQlNUQkNMRXRCUVVvc2MwTkJRWGREYkVNc1JVRkJlRU1zY1VSQlFVNDdRVUZEUkRzN1FVRkRSQ3hUUVVGUExFTkJRVU5GTEZOQlFVUXNSVUZCV1VNc1VVRkJXaXhEUVVGUU8wRkJRMFFzUTBGVVJEdEJRVmRCTzBGQlEwRTdRVUZEUVRzN08wRkJRMEVzU1VGQlRVVXNXVUZCV1N4SFFVRkhMRk5CUVdaQkxGbEJRV1VzUTBGQlEwNHNTVUZCUkN4RlFVRlBSeXhUUVVGUUxFVkJRV3RDUXl4UlFVRnNRaXhGUVVFclFqdEJRVUZCTERCQ1FVTnFRMFFzVTBGQlV5eERRVUZETkVJc1MwRkJWaXhEUVVGblFpeFBRVUZvUWl4RFFVUnBRenRCUVVGQk8wRkJRVUVzVFVGRE0wTjJRaXhOUVVReVF6czdRVUZGYkVRc1UwRkJUMGNzVFVGQlRTeERRVUZEYzBJc1RVRkJVQ3hEUVVGak8wRkJRMjVDYUVNc1NVRkJRVUVzUlVGQlJTeFpRVUZOUlN4VFFVRk9MR05CUVcxQ1F5eFJRVUZ1UWl4RFFVUnBRanRCUVVWdVFra3NTVUZCUVVFc1RVRkJUU3hGUVVGT1FUdEJRVVp0UWl4SFFVRmtMRVZCU1ZCU0xFbEJRVWtzUTBGQlEwc3NXVUZCVEN4RFFVRnJRa2NzVFVGQmJFSXNSVUZCTUVKTUxGTkJRVEZDTEVWQlFYRkRReXhSUVVGeVF5eERRVXBQTEVOQlFWQTdRVUZMUkN4RFFWQkVPenRCUTNKR1FUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hKUVVGTlowTXNaVUZCWlR0QlFVTnVRaXd5UWtGQldVTXNSMEZCV2l4RlFVRnBRanRCUVVGQk96dEJRVU5tTEZOQlFVdEJMRWRCUVV3c1IwRkJWMEVzUjBGQldEdEJRVU5CTEZOQlFVdERMR05CUVV3c1IwRkJjMEpHTEdWQlFXVXNRMEZCUTBVc1kwRkJkRU03UVVGRlFTeFRRVUZMUXl4SFFVRk1MRWRCUVZjc1NVRkJXRHRCUVVORU96dEJRVTVyUWp0QlFVRkJPMEZCUVVFc1YwRlJia0lzWlVGQlNYUkRMRVZCUVVvc1JVRkJVVHRCUVVGRkxHRkJRVTlKTEVkQlFVRXNRMEZCYVVJc1MwRkJTMmRETEVkQlFVd3NRMEZCVTBjc1ZVRkJNVUlzUlVGQmMwTjJReXhGUVVGMFF5eERRVUZRTzBGQlFXdEVPMEZCVW5wRE8wRkJRVUU3UVVGQlFTeFhRVlZ1UWl4blFrRkJTM2RETEU5QlFVd3NSVUZCWXp0QlFVRkZMR0ZCUVU5d1F5eEpRVUZCTEVOQlFXdENMRXRCUVV0blF5eEhRVUZNTEVOQlFWTkhMRlZCUVROQ0xFVkJRWFZEUXl4UFFVRjJReXhEUVVGUU8wRkJRWGRFTzBGQlZuSkVPMEZCUVVFN1FVRkJRU3hYUVZsdVFpeHRRa0ZCVVVFc1QwRkJVaXhGUVVGcFFqdEJRVUZGTEdGQlFVOXdReXhQUVVGQkxFTkJRWEZDTEV0QlFVdG5ReXhIUVVGTUxFTkJRVk5ITEZWQlFUbENMRVZCUVRCRFF5eFBRVUV4UXl4RFFVRlFPMEZCUVRKRU8wRkJXak5FTzBGQlFVRTdRVUZCUVN4WFFXTnVRaXhyUWtGQlQxZ3NWMEZCVUN4RlFVRnZRanRCUVVGRkxHRkJRVTk2UWl4TlFVRkJMRU5CUVc5Q0xFdEJRVXRuUXl4SFFVRk1MRU5CUVZOSExGVkJRVGRDTEVWQlFYbERWaXhYUVVGNlF5eERRVUZRTzBGQlFUaEVPMEZCWkdwRk96dEJRVUZCTzBGQlFVRXNSMEZCY2tJN1FVRnBRa0U3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenRCUVVOQkxFbEJRVTFSTEdOQlFXTXNSMEZCUnl4VFFVRnFRa0VzWTBGQmFVSXNRMEZCUTBrc1UwRkJSQ3hGUVVGWlF5eFZRVUZhTEVWQlFUSkNPMEZCUTJoRUxFMUJRVTFETEZWQlFWVXNSMEZCUjJwRExFMUJRVTBzUTBGQlEzTkNMRTFCUVZBc1EwRkRha0k3UVVGRFJWa3NTVUZCUVVFc1YwRkJWeXhGUVVGSExFTkJSR2hDTzBGQlJVVkRMRWxCUVVGQkxFMUJRVTBzUlVGQlVTeERRVVpvUWp0QlFVZEZReXhKUVVGQlFTeExRVUZMTEVWQlFWTXNRMEZJYUVJN1FVRkpSVU1zU1VGQlFVRXNTVUZCU1N4RlFVRlZMRU5CU21oQ08wRkJTMFZETEVsQlFVRkJMRWRCUVVjc1JVRkJWeXhEUVV4b1FqdEJRVTFGUXl4SlFVRkJRU3hSUVVGUkxFVkJRVTBzUTBGT2FFSTdRVUZQUlVNc1NVRkJRVUVzU1VGQlNTeEZRVUZWTEVOQlVHaENPMEZCVVVWRExFbEJRVUZCTEZkQlFWY3NSVUZCUnp0QlFWSm9RaXhIUVVScFFpeEZRVmRxUWxRc1ZVRkJWU3hEUVVGRFF5eFZRVmhOTEVOQlFXNUNPMEZCWTBFc1RVRkJUVk1zVDBGQlR5eEhRVUZITEVWQlFXaENPMEZCUTBFc1RVRkJUVU1zVTBGQlV5eEhRVUZITEVsQlFVbERMRk5CUVVvc1EwRkJZenRCUVVGRldDeEpRVUZCUVN4VlFVRlZMRVZCUVZaQkxGVkJRVVk3UVVGQlkxTXNTVUZCUVVFc1QwRkJUeXhGUVVGUVFUdEJRVUZrTEVkQlFXUXNRMEZCYkVJN1FVRkRRU3hUUVVGUFF5eFRRVUZUTEVOQlFVTkZMRk5CUVZZc1EwRkJiMEprTEZOQlFYQkNMRU5CUVZBN1FVRkRSQ3hEUVd4Q1JEczdRVUZ2UWtFdlFpeE5RVUZOTEVOQlFVTTRReXhqUVVGUUxFTkJRWE5DY2tJc1pVRkJkRUlzUlVGQmRVTXNaMEpCUVhaRExFVkJRWGxFTzBGQlEzWkVjMElzUlVGQlFVRXNTMEZCU3l4RlFVRlZjRUlzWTBGRWQwTTdRVUZGZGtSeFFpeEZRVUZCUVN4UlFVRlJMRVZCUVU4c1MwRkdkME03UVVGSGRrUkRMRVZCUVVGQkxGVkJRVlVzUlVGQlN5eEpRVWgzUXp0QlFVbDJSRU1zUlVGQlFVRXNXVUZCV1N4RlFVRkhPMEZCU25kRExFTkJRWHBFT3pzN1FVTXZRMEVzVTBGQlV5eHJRa0ZCYTBJc1EwRkJReXhIUVVGSExFVkJRVVU3UVVGRGFrTXNSVUZCUlN4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNUMEZCVHl4blFrRkJaMElzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTjJSQ3hEUVVGRE8wRkJRMFE3UVVGRFFTeGpRVUZqTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03UVVGRGNFTXNUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUMEZCVHl4RlFVRkZMSGxDUVVGNVFpeEhRVUZITEVsQlFVazdPenM3T3p0QlExQTFSU3hUUVVGVExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1JVRkJSVHRCUVVOb1F5eEZRVUZGTEVsQlFVa3NUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhKUVVGSkxFMUJRVTBzUTBGQlF5eFJRVUZSTEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFOUJRVThzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOb1J5eERRVUZETzBGQlEwUTdRVUZEUVN4alFVRmpMRWRCUVVjc1owSkJRV2RDTEVOQlFVTTdRVUZEYkVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxIbENRVUY1UWl4SFFVRkhMRWxCUVVrN096czdPenRCUTB3MVJTeFRRVUZUTEd0Q1FVRnJRaXhIUVVGSE8wRkJRemxDTEVWQlFVVXNUVUZCVFN4SlFVRkpMRk5CUVZNc1EwRkJReXh6U1VGQmMwa3NRMEZCUXl4RFFVRkRPMEZCUXpsS0xFTkJRVU03UVVGRFJEdEJRVU5CTEdOQlFXTXNSMEZCUnl4clFrRkJhMElzUTBGQlF6dEJRVU53UXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc2VVSkJRWGxDTEVkQlFVY3NTVUZCU1RzN096czdPMEZEUnpWRkxGTkJRVk1zYTBKQlFXdENMRU5CUVVNc1IwRkJSeXhGUVVGRk8wRkJRMnBETEVWQlFVVXNUMEZCVDBNc2JVSkJRV2xDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVsRExHbENRVUZsTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc01FSkJRVEJDTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVsRExHMUNRVUZwUWl4RlFVRkZMRU5CUVVNN1FVRkRiRWdzUTBGQlF6dEJRVU5FTzBGQlEwRXNZMEZCWXl4SFFVRkhMR3RDUVVGclFpeERRVUZETzBGQlEzQkRMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3g1UWtGQmVVSXNSMEZCUnl4SlFVRkpPenM3T3pzN096czdPenRCUTFnMVJTeEpRVUZOUXl4SlFVRkpPMEZCUTFJc2MwSkJRWE5GTzBGQlFVRTdRVUZCUVN4UlFVRjZSRU1zU1VGQmVVUTdRVUZCUVN4UlFVRnVSRU1zV1VGQmJVUTdRVUZCUVN4UlFVRnlRME1zYVVKQlFYRkRPenRCUVVGQkxGRkJRV3BDUXl4UFFVRnBRaXgxUlVGQlVDeExRVUZQT3p0QlFVRkJPenRCUVVOd1JTeFRRVUZMU0N4SlFVRk1MRWRCUVZsQkxFbEJRVm83UVVGRFFTeFRRVUZMUnl4UFFVRk1MRWRCUVdWQkxFOUJRV1k3UVVGRFFTeFRRVUZMUml4WlFVRk1MRWRCUVc5Q1FTeFpRVUZ3UWp0QlFVTkJMRk5CUVV0SExGRkJRVXdzUjBGQlowSTNSQ3hUUVVGb1FqdEJRVU5CTEZOQlFVc3lSQ3hwUWtGQlRDeEhRVUY1UWtFc2FVSkJRV2xDTEVsQlFVa3NSVUZCT1VNN1FVRkRRU3hSUVVGSlJDeFpRVUZLTEVWQlFXdENMRXRCUVV0RExHbENRVUZNTEVOQlFYVkNSeXhQUVVGMlFpeERRVUVyUWtvc1dVRkJMMEk3UVVGRGJFSXNVMEZCUzBzc1lVRkJUQ3hIUVVGeFFpeEZRVUZ5UWp0QlFVTkJMRk5CUVV0RExGRkJRVXdzUjBGQlowSXNSVUZCYUVJN1FVRkRSRHM3UVVGV1R6dEJRVUZCTzBGQlFVRXNWMEZaVWl4dFFrRkJWVHRCUVVGRkxHRkJRVThzUzBGQlMxQXNTVUZCV2p0QlFVRnJRanRCUVZwMFFqdEJRVUZCTzBGQlFVRXNWMEZqVWl4MVFrRkJZenRCUVVGRkxHRkJRVThzUzBGQlMwa3NVVUZCV2p0QlFVRnpRanRCUVdRNVFqdEJRVUZCTzBGQlFVRXNWMEZuUWxJc05FSkJRVzFDTzBGQlFVVXNZVUZCVHl4TFFVRkxSU3hoUVVGYU8wRkJRVEpDTzBGQmFFSjRRenRCUVVGQk8wRkJRVUVzVjBGclFsSXNkVUpCUVdNN1FVRkJSU3hoUVVGUExFdEJRVXRETEZGQlFWbzdRVUZCYzBJN1FVRnNRamxDTzBGQlFVRTdRVUZCUVN4WFFXOUNVaXd3UWtGQmFVSTdRVUZEWml4aFFVRlBMRXRCUVV0QkxGRkJRVXdzUTBGQll6VkVMRTFCUVdRc1EwRkJjVUlzVlVGQlF6WkVMRWxCUVVRc1JVRkJUME1zUzBGQlVEdEJRVUZCTEdWQlFXbENSQ3hKUVVGSkxFTkJRVU5GTEUxQlFVd3NRMEZCV1VRc1MwRkJTeXhEUVVGRFJTeGpRVUZPTEVWQlFWb3NRMEZCYWtJN1FVRkJRU3hQUVVGeVFpeDFRa0ZCSzBVc1MwRkJTMG9zVVVGQmNFWXNSVUZCVUR0QlFVTkVPMEZCZEVKUE8wRkJRVUU3UVVGQlFTeFhRWGRDVWl4M1FrRkJaVHRCUVVOaUxHRkJRVThzUzBGQlMwRXNVVUZCVEN4RFFVRmpOVVFzVFVGQlpDeERRVUZ4UWl4VlFVRkROa1FzU1VGQlJDeEZRVUZQUXl4TFFVRlFPMEZCUVVFc1pVRkJhVUpFTEVsQlFVa3NRMEZCUTBVc1RVRkJUQ3hEUVVGWlJDeExRVUZMTEVOQlFVTkhMRmxCUVU0c1JVRkJXaXhEUVVGcVFqdEJRVUZCTEU5QlFYSkNMRVZCUVhsRkxFTkJRVU1zU1VGQlJDeERRVUY2UlN4RFFVRlFPMEZCUTBRN1FVRXhRazg3TzBGQlFVRTdRVUZCUVN4SFFVRldPenRCUVRaQ1FTeEpRVUZOUXl4WlFVRlpPMEZCUTJoQ0xIZENRVUZaUXl4UlFVRmFMRVZCUVhOQ1F5eExRVUYwUWl4RlFVRTJRanRCUVVGQk96dEJRVUZCT3p0QlFVTXpRaXhSUVVGTlF5eExRVUZMTEVkQlFVZERMRWxCUVVrc1EwRkJRME1zUzBGQlRDeERRVUZYUXl4WlFVRkJMRU5CUVdkQ1RDeFJRVUZvUWl4RFFVRllMRVZCUVhORFRTeEhRVUYwUXl4RFFVRXdReXhWUVVGQlF5eERRVUZETzBGQlFVRXNZVUZCU1N4SlFVRkpkRUlzU1VGQlNpeERRVUZUYzBJc1EwRkJWQ3hEUVVGS08wRkJRVUVzUzBGQk0wTXNRMEZCWkR0QlFVTkJMRk5CUVV0RExFdEJRVXdzUjBGQllTeEZRVUZpT3p0QlFVVkJMRkZCUVUxRExGZEJRVmNzUjBGQlJ5eFRRVUZrUVN4WFFVRmpMRU5CUVVORExFbEJRVVFzUlVGQlZUdEJRVU0xUWl4VlFVRkpRU3hKUVVGSkxFTkJRVU4yUWl4WlFVRk1MRXRCUVhOQ0xFbEJRVEZDTEVWQlFXZERPMEZCUXpsQ2RVSXNVVUZCUVVFc1NVRkJTU3hEUVVGRGNFSXNVVUZCVEN4SFFVRm5RaXhKUVVGb1FpeERRVVE0UWpzN1FVRkZPVUlzVVVGQlFTeExRVUZKTEVOQlFVTnJRaXhMUVVGTUxFTkJRVmR5UlN4SlFVRllMRU5CUVdkQ2RVVXNTVUZCYUVJN1FVRkRSQ3hQUVVoRUxFMUJTVXM3UVVGRFNDeFpRVUZOY0VJc1VVRkJVU3hIUVVGSFdTeExRVUZMTEVOQlFVTlRMRWxCUVU0c1EwRkJWeXhWUVVGQlF5eERRVUZETzBGQlFVRXNhVUpCUVVsQkxFTkJRVU1zUTBGQlF6RkNMRWxCUVVZc1MwRkJWM2RDTEVsQlFVa3NRMEZCUTNaQ0xGbEJRWEJDTzBGQlFVRXNVMEZCV2l4RFFVRnFRanM3UVVGRFFTeFpRVUZKUnl4UlFVRlJMRXRCUVVzM1JDeFRRVUZxUWl4RlFVRTBRanRCUVVNeFFpeG5Ra0ZCVFN4SlFVRkpNRUlzUzBGQlNpeERRVUZWTEhWRFFVRm5RM1ZFTEVsQlFVa3NRMEZCUTNoQ0xFbEJRWEpETEd0RlFVTjNRM2RDTEVsQlFVa3NRMEZCUTNaQ0xGbEJSRGRETEU5QlFWWXNRMEZCVGp0QlFVVkVPenRCUVVWRWRVSXNVVUZCUVVFc1NVRkJTU3hEUVVGRGNFSXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSXNRMEZRUnpzN1FVRlRTRUVzVVVGQlFVRXNVVUZCVVN4RFFVRkRSeXhSUVVGVUxFTkJRV3RDZEVRc1NVRkJiRUlzUTBGQmRVSjFSU3hKUVVGMlFqdEJRVVZCUVN4UlFVRkJRU3hKUVVGSkxFTkJRVU4wUWl4cFFrRkJUQ3hEUVVGMVFubENMRTlCUVhaQ0xFTkJRU3RDTEZWQlFVRkRMRkZCUVZFc1JVRkJTVHRCUVVONlF5eGpRVUZOUXl4SlFVRkpMRWRCUVVkaUxFdEJRVXNzUTBGQlExTXNTVUZCVGl4RFFVRlhMRlZCUVVGRExFTkJRVU03UVVGQlFTeHRRa0ZCU1VFc1EwRkJReXhEUVVGRE1VSXNTVUZCUml4TFFVRlhORUlzVVVGQlpqdEJRVUZCTEZkQlFWb3NRMEZCWWpzN1FVRkRRU3hqUVVGSlF5eEpRVUZKTEV0QlFVdDBSaXhUUVVGaUxFVkJRWGRDTzBGQlEzUkNMR3RDUVVGTkxFbEJRVWt3UWl4TFFVRktMRU5CUVZVc2RVTkJRV2REZFVRc1NVRkJTU3hEUVVGRGVFSXNTVUZCY2tNc2JVVkJRM2xETkVJc1VVRkVla01zVDBGQlZpeERRVUZPTzBGQlJVUTdPMEZCUlVSS0xGVkJRVUZCTEVsQlFVa3NRMEZCUTJ4Q0xHRkJRVXdzUTBGQmJVSnlSQ3hKUVVGdVFpeERRVUYzUWpSRkxFbEJRWGhDTzBGQlEwUXNVMEZTUkR0QlFWTkVPenRCUVVWRUxGVkJRVTFETEVsQlFVa3NSMEZCUjJZc1MwRkJTeXhEUVVGRGJFWXNSMEZCVGl4RFFVRlZNa1lzU1VGQlNTeERRVUZEZUVJc1NVRkJaaXhGUVVOWU8wRkJRMFVyUWl4UlFVRkJRU3hSUVVGUkxFVkJRVWtzU1VGRVpEdEJRVVZGUXl4UlFVRkJRU3hUUVVGVExFVkJRVWNzYlVKQlFVTm9ReXhKUVVGRU8wRkJRVUVzTUVOQlFUUkNkMElzU1VGQlNTeERRVUZEY2tJc1QwRkJUQ3hIUVVGbExGVkJRV1lzUjBGQk5FSXNSVUZCZUVRc2JVSkJRVzFGU0N4SlFVRnVSVHRCUVVGQk8wRkJSbVFzVDBGRVZ5eERRVUZpT3p0QlFUTkNORUlzYlVSQlowTXdRamhDTEVsQlFVa3NRMEZCUTBjc1QwRkJUQ3hKUVVGblFpeEZRV2hETVVNN1FVRkJRVHM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVN4alFXZERWRU1zWlVGb1ExTXNaVUZuUTJac1F5eEpRV2hEWlR0QlFVRkJMR05CWjBOUmJVTXNXVUZvUTFJc1pVRm5RMUZCTEZsQmFFTlNPMEZCYVVNeFFqdEJRVU5CTzBGQlEwRTdRVUZGUVR0QlFVTkJMR05CUVUxRExFOUJRVThzUjBGQlIzSkNMRXRCUVVzc1EwRkJRMnhHTEVkQlFVNHNRMEZCVlhGSExHVkJRVllzUlVGRFpEdEJRVU5GU0N4WlFVRkJRU3hSUVVGUkxFVkJRVWtzU1VGRVpEdEJRVVZGUXl4WlFVRkJRU3hUUVVGVExFVkJRVWNzYlVKQlFVTm9ReXhKUVVGRU8wRkJRVUVzTkVSQlFUQkRRU3hKUVVFeFF6dEJRVUZCTzBGQlJtUXNWMEZFWXl4RFFVRm9RaXhEUVhSRE1FSTdPMEZCTkVNeFFpeGpRVUZKYjBNc1QwRkJUeXhEUVVGRFF5eFRRVUZTTEUxQlFYVkNMRU5CUVVOeVFpeExRVUZMTEVOQlFVTlRMRWxCUVU0c1EwRkJWeXhWUVVGQlF5eERRVUZETzBGQlFVRXNiVUpCUVVsQkxFTkJRVU1zUTBGQlF6RkNMRWxCUVVZc1MwRkJWMjlETEU5QlFVOHNRMEZCUTNCRExFbEJRWFpDTzBGQlFVRXNWMEZCV2l4RFFVRTFRaXhGUVVGelJUdEJRVUZGTzBGQlEzUkZPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5Ra0ZCVFhORExHZENRVUZuUWl4SFFVRkhTQ3haUVVGWkxFdEJRVXNzVFVGQmFrSXNSMEZEY2tKTUxFbEJRVWtzUTBGQlF6bENMRWxCUkdkQ0xFZEJSWEpDYlVNc1dVRkJXU3hMUVVGTExFMUJRV3BDTEVkQlEwVllMRWxCUVVrc1EwRkJRM1pDTEZsQlJGQTdRVUZCUVR0QlFVRkJMR05CUlZFc1NVRkJTV2hETEV0QlFVb3NiMFJCUVhORWEwVXNXVUZCZEVRc05rTkJSbElzUTBGR1NpeERRVTV2UlRzN1FVRlpjRVZhTEZsQlFVRkJMRmRCUVZjc1EwRkJReXhKUVVGSmVFSXNTVUZCU2l4RFFVRlRMRU5CUVVOdFF5eGxRVUZFTEVWQlFXdENTU3huUWtGQmJFSXNSVUZCYjBNc1NVRkJjRU1zUTBGQlZDeEZRVUZ2UkN4SlFVRndSQ3hEUVVGRUxFTkJRVmc3UVVGRFJEdEJRWHBFZVVJN08wRkJaME0xUWl3MFJFRkJNRVU3UVVGQlFUdEJRVEJDZWtVN1FVRXhSREpDTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRXlSRGRDTEV0Qk0wUkVPenRCUVVveVFpeHJSRUZwUlZKMFFpeExRV3BGVVR0QlFVRkJPenRCUVVGQk8wRkJhVVV6UWl3MlJFRkJNRUk3UVVGQlFTeFpRVUZtVVN4SlFVRmxPMEZCUTNoQ1JDeFJRVUZCUVN4WFFVRlhMRU5CUVVORExFbEJRVVFzUTBGQldEdEJRVU5FTzBGQmJrVXdRanRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFYRkZNMElzVVVGQlRXVXNVVUZCVVN4SFFVRkhMRXRCUVV0RExGRkJRVXdzUjBGQlowSndRaXhIUVVGb1FpeERRVUZ2UWl4VlFVRkJUU3hEUVVGRE8wRkJRVUVzWVVGQlNVRXNRMEZCUXl4RFFVRkRaU3hQUVVGR0xFVkJRVW83UVVGQlFTeExRVUZ5UWl4RFFVRnFRaXhEUVhKRk1rSTdPMEZCZFVVelFpeFJRVUZOUXl4alFVRmpMRWRCUVVkSUxGRkJRVkVzUTBGQlEwa3NUVUZCVkN4RFFVRm5RaXhWUVVGRFF5eFJRVUZFTzBGQlFVRXNZVUZCWXpkQ0xFdEJRVXNzUTBGQlEyeEdMRWRCUVU0c1EwRkJWU3RITEZGQlFWWXNUVUZCZDBKeVJ5eFRRVUYwUXp0QlFVRkJMRXRCUVdoQ0xFTkJRWFpDT3p0QlFVTkJMRkZCUVVsdFJ5eGpRVUZqTEVOQlFVTnNSaXhOUVVGbUxFZEJRWGRDTEVOQlFUVkNMRVZCUVN0Q08wRkJRemRDTEZsQlFVMHNTVUZCU1ZNc1MwRkJTaXhEUVVGVkxEWkRRVU5MZVVVc1kwRkJZeXhEUVVGRGJFWXNUVUZCWml4SFFVRjNRaXhEUVVGNFFpeEhRVUUwUWl4SFFVRTFRaXhIUVVGclF5eEZRVVIyUXl4bFFVTTRRMnRHTEdOQlFXTXNRMEZCUTBjc1NVRkJaaXhEUVVGdlFpeEpRVUZ3UWl4RFFVUTVReXhEUVVGV0xFTkJRVTQ3UVVGRlJDeExRVE5GTUVJN096dEJRVFpGTTBJc1VVRkJUVU1zVTBGQlV5eEhRVUZIVUN4UlFVRlJMRU5CUVVOSkxFMUJRVlFzUTBGQlowSXNWVUZCUXpORExFbEJRVVFzUlVGQlR5dERMRXRCUVZBN1FVRkJRU3hoUVVGcFFsSXNVVUZCVVN4RFFVRkRVeXhQUVVGVUxFTkJRV2xDYUVRc1NVRkJha0lzVFVGQk1rSXJReXhMUVVFMVF6dEJRVUZCTEV0QlFXaENMRU5CUVd4Q096dEJRVU5CTEZGQlFVbEVMRk5CUVZNc1EwRkJRM1JHTEUxQlFWWXNSMEZCYlVJc1EwRkJka0lzUlVGQk1FSTdRVUZEZUVJc1dVRkJUU3hKUVVGSlV5eExRVUZLTEVOQlFWVXNLMEpCUVhkQ05rVXNVMEZCVXl4RFFVRkRkRVlzVFVGQlZpeEhRVUZ0UWl4RFFVRnVRaXhIUVVGMVFpeEhRVUYyUWl4SFFVRTJRaXhGUVVGeVJDeG5SRUZEYTBOelJpeFRRVUZUTEVOQlFVTkVMRWxCUVZZc1EwRkJaU3hKUVVGbUxFTkJSR3hETEVOQlFWWXNRMEZCVGp0QlFVVkVPMEZCUTBZN08wRkJia1psTzBGQlFVRTdRVUZCUVN4WFFYRkdhRUlzYjBKQlFWYzdRVUZCUlN4clEwRkJWeXhMUVVGTGRrSXNTMEZCYUVJN1FVRkJkMEk3UVVGeVJuSkNPMEZCUVVFN1FVRkJRU3hYUVhWR2FFSXNiMEpCUVZjN1FVRkRWQ3hoUVVGUExFdEJRVXRCTEV0QlFVd3NRMEZCVnpORkxFMUJRVmdzUTBGQmEwSXNWVUZCUTNGRkxFdEJRVVFzUlVGQlVXbERMRWxCUVZJN1FVRkJRU3hsUVVGcFFtcERMRXRCUVVzc1EwRkJRMDRzVFVGQlRpeERRVUZoZFVNc1NVRkJTU3hEUVVGRGNrTXNXVUZCVEN4RlFVRmlMRU5CUVdwQ08wRkJRVUVzVDBGQmJFSXNSVUZCYzBVc1JVRkJkRVVzUTBGQlVEdEJRVU5FTzBGQmVrWmxPMEZCUVVFN1FVRkJRU3hYUVRKR2FFSXNNa0pCUVd0Q1dpeEpRVUZzUWl4RlFVRjNRanRCUVVOMFFpeGhRVUZQTEV0QlFVdDNReXhSUVVGTUxFZEJRV2RDWml4SlFVRm9RaXhEUVVGeFFpeFZRVUZCUXl4RFFVRkRPMEZCUVVFc1pVRkJTVUVzUTBGQlF5eERRVUZEWlN4UFFVRkdMRTlCUVdkQ2VrTXNTVUZCY0VJN1FVRkJRU3hQUVVGMFFpeERRVUZRTzBGQlEwUTdRVUUzUm1VN08wRkJRVUU3UVVGQlFTeEhRVUZzUWpzN08wRkRMMEpCTEZOQlFWTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1JVRkJSVHRCUVVOMFFpeEZRVUZGTEhsQ1FVRjVRaXhEUVVGRE8wRkJRelZDTzBGQlEwRXNSVUZCUlN4SlFVRkpMRTlCUVU4c1RVRkJUU3hMUVVGTExGVkJRVlVzU1VGQlNTeFBRVUZQTEUxQlFVMHNRMEZCUXl4UlFVRlJMRXRCUVVzc1VVRkJVU3hGUVVGRk8wRkJRek5GTEVsQlFVa3NZMEZCWXl4SFFVRkhMRTlCUVU4c1IwRkJSeXhUUVVGVExFOUJRVThzUTBGQlF5eEhRVUZITEVWQlFVVTdRVUZEY2tRc1RVRkJUU3hQUVVGUExFOUJRVThzUjBGQlJ5eERRVUZETzBGQlEzaENMRXRCUVVzc1EwRkJRenRCUVVOT08wRkJRMEVzU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNlVUpCUVhsQ0xFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEycEdMRWRCUVVjc1RVRkJUVHRCUVVOVUxFbEJRVWtzWTBGQll5eEhRVUZITEU5QlFVOHNSMEZCUnl4VFFVRlRMRTlCUVU4c1EwRkJReXhIUVVGSExFVkJRVVU3UVVGRGNrUXNUVUZCVFN4UFFVRlBMRWRCUVVjc1NVRkJTU3hQUVVGUExFMUJRVTBzUzBGQlN5eFZRVUZWTEVsQlFVa3NSMEZCUnl4RFFVRkRMRmRCUVZjc1MwRkJTeXhOUVVGTkxFbEJRVWtzUjBGQlJ5eExRVUZMTEUxQlFVMHNRMEZCUXl4VFFVRlRMRWRCUVVjc1VVRkJVU3hIUVVGSExFOUJRVThzUjBGQlJ5eERRVUZETzBGQlEyNUpMRXRCUVVzc1EwRkJRenRCUVVOT08wRkJRMEVzU1VGQlNTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNlVUpCUVhsQ0xFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEycEdMRWRCUVVjN1FVRkRTRHRCUVVOQkxFVkJRVVVzVDBGQlR5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRkRUlzUTBGQlF6dEJRVU5FTzBGQlEwRXNZMEZCWXl4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVONlFpeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNlVUpCUVhsQ0xFZEJRVWNzU1VGQlNUczdPenM3UVVOeVFqVkZPMEZCUlVFc1NVRkJTV2RDTEV0QlFVc3NSMEZCUnl4RlFVRmFPenRCUVVWQkxFbEJRVTFyUXl4UlFVRlJPMEZCUTFvc2IwSkJRVmxETEVkQlFWb3NSVUZCYVVKRExHTkJRV3BDTEVWQlFXbERReXh2UWtGQmFrTXNSVUZCZFVRN1FVRkJRVHM3UVVGRGNrUXNVMEZCUzNSSUxFVkJRVXdzUjBGQlZYRklMR05CUVZZN1FVRkRRU3hUUVVGTE4wTXNVVUZCVEN4SFFVRm5RamhETEc5Q1FVRm9RanRCUVVOQkxGTkJRVXRETEV0QlFVd3NSMEZCWVN4RFFVRmlPMEZCUTBFc1UwRkJTME1zVlVGQlRDeERRVUZuUWtvc1IwRkJhRUk3UVVGRFFTeFRRVUZMU3l4TFFVRk1MRWRCUVdFc1MwRkJTMFlzUzBGQlRDeEhRVUZoTEVOQlFURkNPMEZCUTBRN08wRkJVRmM3UVVGQlFUdEJRVUZCTEZkQlUxb3NhVUpCUVZGSUxFZEJRVklzUlVGQllUdEJRVU5ZTEZkQlFVc3NTVUZCU1Uwc1VVRkJWQ3hKUVVGeFFrNHNSMEZCY2tJc1JVRkJNRUk3UVVGQlJUdEJRVU14UWl4bFFVRlBMRXRCUVZBN1FVRkRSRHM3UVVGRFJDeGhRVUZQTEVsQlFWQTdRVUZEUkR0QlFXUlhPMEZCUVVFN1FVRkJRU3hYUVdkQ1dpeHZRa0ZCVjBFc1IwRkJXQ3hGUVVGblFqdEJRVU5rTEZWQlFVbFBMRWxCUVVrc1IwRkJSeXhKUVVGWU8wRkJRMEVzVjBGQlMwb3NTMEZCVER0QlFVTkJMR0ZCUVZFc1dVRkJWenRCUVVOcVFpeFpRVUZKTEVOQlFVTklMRWRCUVVRc1NVRkJVVThzU1VGQlNTeERRVUZEUXl4UFFVRk1MRU5CUVdGU0xFZEJRV0lzUTBGQldpeEZRVUVyUWp0QlFVTTNRaXhwUWtGQlR5eExRVUZRTzBGQlEwUXNVMEZHUkN4TlFVZExPMEZCUTBnc1kwRkJTVUVzUjBGQlJ5eERRVUZEVHl4SlFVRkpMRU5CUVVOdVJDeFJRVUZPTEVOQlFWQXNSVUZCZDBJN1FVRkRkRUkwUXl4WlFVRkJRU3hIUVVGSExFTkJRVU5QTEVsQlFVa3NRMEZCUTI1RUxGRkJRVTRzUTBGQlNDeERRVUZ0UW05Q0xFOUJRVzVDTEVOQlFUSkNMRlZCUVZOc1FpeExRVUZVTEVWQlFXZENPMEZCUTNwRGFVUXNZMEZCUVVFc1NVRkJTU3hEUVVGRFNDeFZRVUZNTEVOQlFXZENPVU1zUzBGQmFFSTdRVUZEUkN4aFFVWkVPMEZCUjBRN1FVRkRSanRCUVVOR0xFOUJXRThzUlVGQlVqdEJRVmxFTzBGQkwwSlhPMEZCUVVFN1FVRkJRU3hYUVdsRFdpeDFRa0ZCWXpCRExFZEJRV1FzUlVGQmJVSTdRVUZEYWtJc1ZVRkJTVk1zVFVGQlRTeEhRVUZITEVWQlFXSTdPMEZCUTBFc1YwRkJTeXhKUVVGSlF5eERRVUZVTEVsQlFXTldMRWRCUVdRc1JVRkJiVUk3UVVGRGFrSXNXVUZCU1ZVc1EwRkJReXhMUVVGTExFdEJRVXQwUkN4UlFVRm1MRVZCUVhsQ08wRkJRM1pDY1VRc1ZVRkJRVUVzVFVGQlRTeERRVUZEUXl4RFFVRkVMRU5CUVU0c1IwRkJXVllzUjBGQlJ5eERRVUZEVlN4RFFVRkVMRU5CUVdZN1FVRkRSRHRCUVVOR096dEJRVU5FTEdGQlFVOUVMRTFCUVZBN1FVRkRSRHRCUVhwRFZ6dEJRVUZCTzBGQlFVRXNWMEV5UTFvc2MwSkJRV0ZVTEVkQlFXSXNSVUZCYTBKd1NDeEZRVUZzUWl4RlFVRnpRaXRJTEZGQlFYUkNMRVZCUVdkRE8wRkJRemxDTEZWQlFVbFlMRWRCUVVjc1EwRkJReXhMUVVGTGNFZ3NSVUZCVGl4RFFVRklMRXRCUVdsQ1FTeEZRVUZxUWl4SlFVRjFRbTlJTEVkQlFVY3NRMEZCUTFrc1IwRkJTaXhEUVVGUlF5eEpRVUZTTEVOQlFXRXNWVUZCUTBNc1RVRkJSRHRCUVVGQkxHVkJRVmxCTEUxQlFVMHNTMEZCUzJ4SkxFVkJRWFpDTzBGQlFVRXNUMEZCWWl4RFFVRXpRaXhGUVVGdlJUdEJRVU5zUlN4aFFVRkxkVWdzUzBGQlRDeEhRVUZoTEV0QlFVdEZMRXRCUVV3c1IwRkJZU3hEUVVFeFFqdEJRVU5CVFN4UlFVRkJRU3hSUVVGUkxFTkJRVU1zU1VGQlJDeEZRVUZQV0N4SFFVRlFMRU5CUVZJN1FVRkRSQ3hQUVVoRUxFMUJTVXM3UVVGRFNDeFpRVUZKTEV0QlFVdEhMRXRCUVV3c1MwRkJaU3hEUVVGdVFpeEZRVUZ6UWp0QlFVTndRaXhsUVVGTFFTeExRVUZNTEVkQlFXRXNTMEZCUzBVc1MwRkJUQ3hIUVVGaExFTkJRVEZDTzBGQlEwRk5MRlZCUVVGQkxGRkJRVkVzUTBGQlF5eEpRVUZKTjBZc1MwRkJTaXhEUVVGVkxIbENRVUZXTEVOQlFVUXNRMEZCVWp0QlFVTkVPenRCUVVORUxHRkJRVXR4Uml4TFFVRk1PenRCUVVOQkxGbEJRVWxJTEVkQlFVY3NRMEZCUXl4TFFVRkxOVU1zVVVGQlRpeERRVUZRTEVWQlFYZENPMEZCUTNSQ0xHTkJRVWx0UkN4SlFVRkpMRWRCUVVjc1NVRkJXRHRCUVVOQlVDeFZRVUZCUVN4SFFVRkhMRU5CUVVNc1MwRkJTelZETEZGQlFVNHNRMEZCU0N4RFFVRnRRbTlDTEU5QlFXNUNMRU5CUVRKQ0xGVkJRVk5JTEVsQlFWUXNSVUZCWlR0QlFVTjRRMnRETEZsQlFVRkJMRWxCUVVrc1EwRkJRMUVzV1VGQlRDeERRVUZyUWpGRExFbEJRV3hDTEVWQlFYZENla1lzUlVGQmVFSXNSVUZCTkVJclNDeFJRVUUxUWp0QlFVTkVMRmRCUmtRN1FVRkhSRHRCUVVOR08wRkJRMFk3UVVFM1JGYzdRVUZCUVR0QlFVRkJMRmRCSzBSYUxIbENRVUZuUWxnc1IwRkJhRUlzUlVGQmNVSm5RaXhWUVVGeVFpeEZRVUZwUXp0QlFVTXZRaXhWUVVGSlF5eEpRVUZKTEVkQlFVY3NTVUZCV0R0QlFVTkJNMGdzVFVGQlFVRXNUVUZCVFN4RFFVRkRReXhKUVVGUUxFTkJRVmw1U0N4VlFVRmFMRVZCUVhkQ2VFTXNUMEZCZUVJc1EwRkJaME1zVlVGQlV6QkRMRWxCUVZRc1JVRkJaVHRCUVVNM1F5eFpRVUZKTEU5QlFVOUdMRlZCUVZVc1EwRkJRMFVzU1VGQlJDeERRVUZxUWl4TFFVRTBRaXhSUVVFMVFpeEpRVUYzUXl4UFFVRlBSaXhWUVVGVkxFTkJRVU5GTEVsQlFVUXNRMEZCYWtJc1MwRkJORUlzVVVGQmVFVXNSVUZCYTBZN1FVRkRhRVlzWTBGQlNXeENMRWRCUVVjc1EwRkJRMnRDTEVsQlFVUXNRMEZCU0N4TFFVRmpSaXhWUVVGVkxFTkJRVU5GTEVsQlFVUXNRMEZCTlVJc1JVRkJiME03UVVGRGJFTkVMRmxCUVVGQkxFbEJRVWtzUjBGQlJ5eExRVUZRTzBGQlEwRXNiVUpCUVU4c1MwRkJVRHRCUVVORU8wRkJRMFlzVTBGTVJDeE5RVTFMTEVsQlFVbEVMRlZCUVZVc1EwRkJRMFVzU1VGQlJDeERRVUZXTEZsQlFUUkNReXhOUVVGb1F5eEZRVUYzUXp0QlFVTXpReXhqUVVGSkxFTkJRVU5JTEZWQlFWVXNRMEZCUTBVc1NVRkJSQ3hEUVVGV0xFTkJRV2xDUlN4SlFVRnFRaXhEUVVGelFuQkNMRWRCUVVjc1EwRkJRMnRDTEVsQlFVUXNRMEZCZWtJc1EwRkJUQ3hGUVVGMVF6dEJRVU55UTBRc1dVRkJRVUVzU1VGQlNTeEhRVUZITEV0QlFWQTdRVUZEUVN4dFFrRkJUeXhMUVVGUU8wRkJRMFE3UVVGRFJpeFRRVXhKTEUxQlRVRXNTVUZCU1Vrc1ZVRkJUMHdzVlVGQlZTeERRVUZEUlN4SlFVRkVMRU5CUVdwQ0xFMUJRVFJDTEZGQlFXaERMRVZCUVRCRE8wRkJRemRETlVnc1ZVRkJRVUVzVFVGQlRTeERRVUZEUXl4SlFVRlFMRU5CUVZsNVNDeFZRVUZWTEVOQlFVTkZMRWxCUVVRc1EwRkJkRUlzUlVGQk9FSXhReXhQUVVFNVFpeERRVUZ6UXl4VlFVRlRPRU1zVDBGQlZDeEZRVUZyUWp0QlFVTjBSQ3h2UWtGQlVVRXNUMEZCVWp0QlFVTkJMRzFDUVVGTExFZEJRVXc3UVVGQlZUdEJRVU5TTEhOQ1FVRkpMRVZCUVVWMFFpeEhRVUZITEVOQlFVTnJRaXhKUVVGRUxFTkJRVWdzUjBGQldVWXNWVUZCVlN4RFFVRkRSU3hKUVVGRUxFTkJRVllzUTBGQmFVSkpMRTlCUVdwQ0xFTkJRV1FzUTBGQlNpeEZRVUU0UXp0QlFVTTFRMHdzYjBKQlFVRkJMRWxCUVVrc1IwRkJSeXhMUVVGUU8wRkJRMEVzTWtKQlFVOHNTMEZCVUR0QlFVTkVPenRCUVVORU8wRkJRMFE3TzBGQlEwUXNiVUpCUVVzc1IwRkJURHRCUVVGVk8wRkJRMUlzYzBKQlFVa3NSVUZCUldwQ0xFZEJRVWNzUTBGQlEydENMRWxCUVVRc1EwRkJTQ3hIUVVGWlJpeFZRVUZWTEVOQlFVTkZMRWxCUVVRc1EwRkJWaXhEUVVGcFFra3NUMEZCYWtJc1EwRkJaQ3hEUVVGS0xFVkJRVGhETzBGQlF6VkRUQ3h2UWtGQlFVRXNTVUZCU1N4SFFVRkhMRXRCUVZBN1FVRkRRU3d5UWtGQlR5eExRVUZRTzBGQlEwUTdPMEZCUTBRN1FVRkRSRHM3UVVGRFJDeHRRa0ZCU3l4SlFVRk1PMEZCUVZjN1FVRkRWQ3h6UWtGQlNTeEZRVUZGYWtJc1IwRkJSeXhEUVVGRGEwSXNTVUZCUkN4RFFVRklMRWxCUVdGR0xGVkJRVlVzUTBGQlEwVXNTVUZCUkN4RFFVRldMRU5CUVdsQ1NTeFBRVUZxUWl4RFFVRm1MRU5CUVVvc1JVRkJLME03UVVGRE4wTk1MRzlDUVVGQlFTeEpRVUZKTEVkQlFVY3NTMEZCVUR0QlFVTkJMREpDUVVGUExFdEJRVkE3UVVGRFJEczdRVUZEUkR0QlFVTkVPenRCUVVORUxHMUNRVUZMTEVsQlFVdzdRVUZCVnp0QlFVTlVMSE5DUVVGSkxFVkJRVVZxUWl4SFFVRkhMRU5CUVVOclFpeEpRVUZFTEVOQlFVZ3NTVUZCWVVZc1ZVRkJWU3hEUVVGRFJTeEpRVUZFTEVOQlFWWXNRMEZCYVVKSkxFOUJRV3BDTEVOQlFXWXNRMEZCU2l4RlFVRXJRenRCUVVNM1Ewd3NiMEpCUVVGQkxFbEJRVWtzUjBGQlJ5eExRVUZRTzBGQlEwRXNNa0pCUVU4c1MwRkJVRHRCUVVORU96dEJRVU5FTzBGQlEwUTdPMEZCUTBRc2JVSkJRVXNzUzBGQlREdEJRVUZaTzBGQlExWXNjMEpCUVVrc1JVRkJSV3BDTEVkQlFVY3NRMEZCUTJ0Q0xFbEJRVVFzUTBGQlNDeExRVUZqUml4VlFVRlZMRU5CUVVORkxFbEJRVVFzUTBGQlZpeERRVUZwUWtrc1QwRkJha0lzUTBGQmFFSXNRMEZCU2l4RlFVRm5SRHRCUVVNNVEwd3NiMEpCUVVGQkxFbEJRVWtzUjBGQlJ5eExRVUZRTzBGQlEwRXNNa0pCUVU4c1MwRkJVRHRCUVVORU96dEJRVU5FTzBGQlEwUTdRVUZ1UTBRN1FVRnhRMFFzVjBGMFEwUTdPMEZCZFVOQkxHTkJRVWtzUTBGQlEwRXNTVUZCVEN4RlFVRlhPMEZCUTFRc2JVSkJRVThzUzBGQlVEdEJRVU5FTzBGQlEwWTdRVUZEUml4UFFYcEVSRHM3UVVFd1JFRXNWVUZCU1N4RFFVRkRRU3hKUVVGTUxFVkJRVmM3UVVGRFZDeGxRVUZQTEV0QlFWQTdRVUZEUkRzN1FVRkRSQ3hoUVVGUExFbEJRVkE3UVVGRFJEdEJRUzlJVnp0QlFVRkJPMEZCUVVFc1YwRnBTVm9zYlVKQlFWVnFRaXhIUVVGV0xFVkJRV1ZuUWl4VlFVRm1MRVZCUVRKQ1RDeFJRVUV6UWl4RlFVRnhRenRCUVVOdVF5eFZRVUZKU2l4SlFVRkpMRWRCUVVjc1NVRkJXRHRCUVVOQkxGVkJRVWxuUWl4SlFVRkpMRWRCUVVjc1JVRkJXQ3hEUVVadFF6czdRVUZIYmtNc1lVRkJVU3hWUVVGVGRrSXNSMEZCVkN4RlFVRmpaMElzVlVGQlpDeEZRVUV3UWt3c1VVRkJNVUlzUlVGQmIwTTdRVUZETVVNc1dVRkJTVW9zU1VGQlNTeERRVUZEYVVJc1pVRkJUQ3hEUVVGeFFuaENMRWRCUVhKQ0xFVkJRVEJDWjBJc1ZVRkJNVUlzUTBGQlNpeEZRVUV5UXp0QlFVTjZRMjVFTEZWQlFVRkJMRXRCUVVzc1EwRkJReTlFTEVsQlFVNHNRMEZCVjJ0SExFZEJRVmc3TzBGQlEwRXNZMEZCU1U4c1NVRkJTU3hEUVVGRFNpeExRVUZNTEV0QlFXVXNRMEZCYmtJc1JVRkJjMEk3UVVGRGNFSkpMRmxCUVVGQkxFbEJRVWtzUTBGQlEwb3NTMEZCVEN4SFFVRmhTU3hKUVVGSkxFTkJRVU5HTEV0QlFVd3NSMEZCWVN4RFFVRXhRanRCUVVOQmEwSXNXVUZCUVVFc1NVRkJTU3hIUVVGSE1VUXNTMEZCU3l4RFFVRkRORVFzUzBGQlRpeERRVUZaTEVOQlFWb3NRMEZCVUR0QlFVTkJOVVFzV1VGQlFVRXNTMEZCU3l4SFFVRkhMRVZCUVZJN1FVRkRRVGhETEZsQlFVRkJMRkZCUVZFc1EwRkJReXhKUVVGRUxFVkJRVTlaTEVsQlFWQXNRMEZCVWp0QlFVTkVPenRCUVVORWFFSXNWVUZCUVVFc1NVRkJTU3hEUVVGRFNpeExRVUZNTzBGQlEwUXNVMEZVUkN4TlFWVkxPMEZCUTBnc1kwRkJTVWtzU1VGQlNTeERRVUZEU2l4TFFVRk1MRXRCUVdVc1EwRkJia0lzUlVGQmMwSTdRVUZEY0VKSkxGbEJRVUZCTEVsQlFVa3NRMEZCUTBvc1MwRkJUQ3hIUVVGaFNTeEpRVUZKTEVOQlFVTkdMRXRCUVV3c1IwRkJZU3hEUVVFeFFqdEJRVU5CYTBJc1dVRkJRVUVzU1VGQlNTeEhRVUZITVVRc1MwRkJTeXhEUVVGRE5FUXNTMEZCVGl4RFFVRlpMRU5CUVZvc1EwRkJVRHRCUVVOQk5VUXNXVUZCUVVFc1MwRkJTeXhIUVVGSExFVkJRVkk3UVVGRFFUaERMRmxCUVVGQkxGRkJRVkVzUTBGQlF5eEpRVUZFTEVWQlFVOVpMRWxCUVZBc1EwRkJVanRCUVVORU96dEJRVU5FYUVJc1ZVRkJRVUVzU1VGQlNTeERRVUZEU2l4TFFVRk1PenRCUVVOQkxHTkJRVWxJTEVkQlFVY3NRMEZCUTA4c1NVRkJTU3hEUVVGRGJrUXNVVUZCVGl4RFFVRlFMRVZCUVhkQ08wRkJRM1JDTkVNc1dVRkJRVUVzUjBGQlJ5eERRVUZEVHl4SlFVRkpMRU5CUVVOdVJDeFJRVUZPTEVOQlFVZ3NRMEZCYlVKdlFpeFBRVUZ1UWl4RFFVRXlRaXhWUVVGVGJFSXNTMEZCVkN4RlFVRm5RanRCUVVONlEybEVMR05CUVVGQkxFbEJRVWtzUTBGQlEyMUNMRk5CUVV3c1EwRkJaWEJGTEV0QlFXWXNSVUZCYzBJd1JDeFZRVUYwUWl4RlFVRnJRMHdzVVVGQmJFTTdRVUZEUkN4aFFVWkVPMEZCUjBRN1FVRkRSanRCUVVOR0xFOUJla0pQTEVOQmVVSk9XQ3hIUVhwQ1RTeEZRWGxDUkdkQ0xGVkJla0pETEVWQmVVSlhUQ3hSUVhwQ1dDeERRVUZTTzBGQk1FSkVPMEZCT1VwWE8wRkJRVUU3UVVGQlFTeFhRV2RMV2l4dlFrRkJWMWdzUjBGQldDeEZRVUZuUWpOQ0xFbEJRV2hDTEVWQlFYTkNjME1zVVVGQmRFSXNSVUZCWjBOblFpeGhRVUZvUXl4RlFVRXJRenRCUVVNM1F5eFZRVUZOY0VJc1NVRkJTU3hIUVVGSExFbEJRV0k3UVVGRFFTeFhRVUZMVVN4WlFVRk1MRU5CUVd0Q1ppeEhRVUZzUWl4RlFVRjFRak5DTEVsQlFVa3NRMEZCUTNWRUxGTkJRVFZDTEVWQlFYVkRMRlZCUVVORExFZEJRVVFzUlVGQlRVTXNUVUZCVGl4RlFVRnBRanRCUVVOMFJDeFpRVUZKUkN4SFFVRktMRVZCUVZOc1FpeFJRVUZSTEVOQlFVTXNTVUZCU1RkR0xFdEJRVW9zYTBOQlFXOURLMGNzUjBGQmNFTXNSVUZCUkN4RFFVRlNMRU5CUVZRc1MwRkRTenRCUVVOSUxHTkJRVWxHTEdGQlFVb3NSVUZCYlVJN1FVRkRha0pvUWl4WlFVRkJRU3hSUVVGUkxFTkJRVU1zU1VGQlJDeEZRVUZQU2l4SlFVRkpMRU5CUVVOM1FpeGhRVUZNTEVOQlFXMUNSQ3hOUVVGdVFpeERRVUZRTEVOQlFWSTdRVUZEUkN4WFFVWkVMRTFCUjBzN1FVRkRTRzVDTEZsQlFVRkJMRkZCUVZFc1EwRkJReXhKUVVGRUxFVkJRVTl0UWl4TlFVRlFMRU5CUVZJN1FVRkRSRHRCUVVOR08wRkJRMFlzVDBGV1JEdEJRVmRFTzBGQk4wdFhPMEZCUVVFN1FVRkJRU3hYUVN0TFdpeHpRa0ZCWVRsQ0xFZEJRV0lzUlVGQmEwSXpRaXhKUVVGc1FpeEZRVUYzUW5ORExGRkJRWGhDTEVWQlFXdERPMEZCUTJoRExGVkJRVWxLTEVsQlFVa3NSMEZCUnl4SlFVRllPMEZCUTBFc1YwRkJTM2xDTEZWQlFVd3NRMEZCWjBKb1F5eEhRVUZvUWl4RlFVRnhRak5DTEVsQlFYSkNMRVZCUVRKQ0xGVkJRVk4zUkN4SFFVRlVMRVZCUVdORExFMUJRV1FzUlVGQmMwSTdRVUZETDBNc1dVRkJTVVFzUjBGQlNpeEZRVUZUTzBGQlExQnNRaXhWUVVGQlFTeFJRVUZSTEVOQlFVTXNTVUZCU1RkR0xFdEJRVW9zUTBGQlZTeG5RMEZCVml4RFFVRkVMRU5CUVZJN1FVRkRSQ3hUUVVaRUxFMUJSMHM3UVVGRFNDeGpRVUZKYlVnc1VVRkJVU3hIUVVGSExFVkJRV1k3UVVGRFFVZ3NWVUZCUVVFc1RVRkJUU3hEUVVGRGRrSXNTVUZCU1N4RFFVRkRia1FzVVVGQlRpeERRVUZPTEVOQlFYTkNiMElzVDBGQmRFSXNRMEZCT0VJc1ZVRkJVekJETEVsQlFWUXNSVUZCWlR0QlFVTXpReXhuUWtGQlNVRXNTVUZCU1N4RFFVRkRXQ3hKUVVGSkxFTkJRVU16U0N4RlFVRk9MRU5CUVVvc1MwRkJhMEo1Uml4SlFVRkpMRU5CUVVOclF5eEpRVUZKTEVOQlFVTXpTQ3hGUVVGT0xFTkJRVEZDTEVWQlFYRkRPMEZCUTI1RGNVb3NZMEZCUVVFc1VVRkJVU3hEUVVGRGJra3NTVUZCVkN4RFFVRmplVWNzU1VGQlNTeERRVUZEZDBJc1lVRkJUQ3hEUVVGdFFtSXNTVUZCYmtJc1EwRkJaRHRCUVVORU8wRkJRMFlzVjBGS1JEdEJRVXRCVUN4VlFVRkJRU3hSUVVGUkxFTkJRVU1zU1VGQlJDeEZRVUZQYzBJc1VVRkJVQ3hEUVVGU08wRkJRMFE3UVVGRFJpeFBRV0pFTEVWQllVY3NTMEZpU0R0QlFXTkVPMEZCTDB4WE8wRkJRVUU3UVVGQlFTeFhRV2xOV2l4MVFrRkJZMnBETEVkQlFXUXNSVUZCYlVJelFpeEpRVUZ1UWl4RlFVRjVRbk5ETEZGQlFYcENMRVZCUVcxRE8wRkJRMnBETEZWQlFVbEtMRWxCUVVrc1IwRkJSeXhKUVVGWU96dEJRVU5CTEZWQlFVbHNReXhKUVVGSkxFTkJRVU1zUzBGQlMzcEdMRVZCUVU0c1EwRkJTaXhMUVVGclFtOUlMRWRCUVVjc1EwRkJReXhMUVVGTGNFZ3NSVUZCVGl4RFFVRjZRaXhGUVVGdlF6dEJRVU5zUXl4WlFVRkpNa2tzU1VGQlNTeEhRVUZITVVRc1MwRkJTeXhEUVVGRE5FUXNTMEZCVGl4RFFVRlpMRU5CUVZvc1EwRkJXRHRCUVVOQk5VUXNVVUZCUVVFc1MwRkJTeXhIUVVGSExFVkJRVkk3UVVGRFFUaERMRkZCUVVGQkxGRkJRVkVzUTBGQlF5eEpRVUZFTEVWQlFVOVpMRWxCUVZBc1EwRkJVanRCUVVORUxFOUJTa1FzVFVGTFN6dEJRVU5JTEdGQlFVdFRMRlZCUVV3c1EwRkJaMEpvUXl4SFFVRm9RaXhGUVVGeFFqTkNMRWxCUVhKQ0xFVkJRVEpDTEZWQlFWTjNSQ3hIUVVGVUxFVkJRV05ETEUxQlFXUXNSVUZCYzBJN1FVRkRMME1zWTBGQlNVUXNSMEZCU2l4RlFVRlRPMEZCUTFCc1FpeFpRVUZCUVN4UlFVRlJMRU5CUVVNc1NVRkJTVGRHTEV0QlFVb3NRMEZCVlN4cFEwRkJWaXhEUVVGRUxFTkJRVkk3UVVGRFJDeFhRVVpFTEUxQlIwczdRVUZEU0N0RExGbEJRVUZCTEV0QlFVc3NRMEZCUXk5RUxFbEJRVTRzUTBGQlYyZEpMRTFCUVZnN1FVRkRRWFpDTEZsQlFVRkJMRWxCUVVrc1EwRkJRekpDTEdGQlFVd3NRMEZCYlVKc1F5eEhRVUZ1UWl4RlFVRjNRamhDTEUxQlFYaENMRVZCUVdkRGJrSXNVVUZCYUVNN1FVRkRSRHRCUVVOR0xGTkJVa1E3UVVGVFJEdEJRVU5HTzBGQmJrNVhPenRCUVVGQk8wRkJRVUVzUjBGQlpEczdRVU5LUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRk5ha2tzUzBGQlJ5eEhRVUZITEZOQlFVNUJMRWRCUVUwc1EwRkJRME1zU1VGQlJDeEZRVUZQYTBVc1NVRkJVRHRCUVVGQk96dEJRVUZCTEZOQlFXZENMRU5CUVVGc1JTeEpRVUZKTEZOQlFVb3NTVUZCUVVFc1NVRkJTU3hYUVVGS0xIRkRRVUZCUVN4SlFVRkpMRU5CUVVWM1NpeHJRa0ZCVGl4blJrRkJNa0owUml4SlFVRXpRaXhOUVVGdlF6VkVMR05CUVZrc1EwRkJRMDRzU1VGQlJDeEZRVUZQYTBVc1NVRkJVQ3hEUVVGb1JUdEJRVUZCTEVOQlFWbzdPMEZCUlVFc1NVRkJUVE5FTEUxQlFVa3NSMEZCUnl4VFFVRlFRU3hKUVVGUExFTkJRVU5RTEVsQlFVUTdRVUZCUVN4VFFVRlZWeXhOUVVGTkxFTkJRVU5ETEVsQlFWQXNRMEZCV1N4RFFVRkJXaXhKUVVGSkxGTkJRVW9zU1VGQlFVRXNTVUZCU1N4WFFVRktMRmxCUVVGQkxFbEJRVWtzUTBGQlJYZEtMR3RDUVVGT0xFdEJRVFJDTEVWQlFYaERMRVZCUVRSRGNFa3NTVUZCTlVNc1IwRkJiVVJyUlN4SFFVRnVSQ3hEUVVGMVJDeFZRVUZETDBNc1IwRkJSRHRCUVVGQkxGZEJRVk5xUXl4alFVRlpMRU5CUVVOT0xFbEJRVVFzUlVGQlQzVkRMRWRCUVZBc1EwRkJja0k3UVVGQlFTeEhRVUYyUkN4RFFVRldPMEZCUVVFc1EwRkJZanM3UVVGSFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN08wRkJRMEVzU1VGQlRXcERMR05CUVZrc1IwRkJSeXhUUVVGbVFTeFpRVUZsTEVOQlFVTk9MRWxCUVVRc1JVRkJUMnRGTEVsQlFWQTdRVUZCUVN4VFFVRm5RblpFTEUxQlFVMHNRMEZCUTNOQ0xFMUJRVkFzUTBGQll5eEZRVUZrTEVWQlFXdENha01zU1VGQlNTeERRVUZEZDBvc2EwSkJRVXdzUTBGQmQwSjBSaXhKUVVGNFFpeERRVUZzUWl4RlFVRnBSRHRCUVVGRlFTeEpRVUZCUVN4SlFVRkpMRVZCUVVwQk8wRkJRVVlzUjBGQmFrUXNRMEZCYUVJN1FVRkJRU3hEUVVGeVFqczdRVU5pUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRFFTeEpRVUZOZFVZc1YwRkJWenRCUVVObUxIVkNRVUZaY0Vnc1IwRkJXaXhGUVVGcFFqdEJRVUZCT3p0QlFVTm1MRk5CUVV0QkxFZEJRVXdzUjBGQlYwRXNSMEZCV0R0QlFVTkJMRk5CUVV0RExHTkJRVXdzUjBGQmMwSnRTQ3hYUVVGWExFTkJRVU51U0N4alFVRnNRenRCUVVWQkxGTkJRVXRETEVkQlFVd3NSMEZCVnl4TlFVRllPMEZCUTBRN08wRkJUbU03UVVGQlFUdEJRVUZCTEZkQlVXWXNZVUZCU1RKQ0xFbEJRVW9zUlVGQlZUdEJRVUZGTEdGQlFVOTNSaXhMUVVGQkxFTkJRV0VzUzBGQlMzSklMRWRCUVV3c1EwRkJVMGNzVlVGQmRFSXNSVUZCYTBNd1FpeEpRVUZzUXl4RFFVRlFPMEZCUVdkRU8wRkJVamRETzBGQlFVRTdRVUZCUVN4WFFWVm1MR2RDUVVGUE8wRkJRVVVzWVVGQlQzZEdMRTFCUVVFc1EwRkJZeXhMUVVGTGNrZ3NSMEZCVEN4RFFVRlRSeXhWUVVGMlFpeERRVUZRTzBGQlFUSkRPMEZCVm5KRE96dEJRVUZCTzBGQlFVRXNSMEZCYWtJN1FVRmhRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPMEZCUTBFc1NVRkJUVVlzWjBKQlFXTXNSMEZCUnl4VFFVRnFRa0VzWTBGQmFVSXNRMEZCUTBrc1UwRkJSQ3hGUVVGWmFVZ3NTVUZCV2l4RlFVRnhRanRCUVVNeFF5eE5RVUZOTDBjc1ZVRkJWU3hIUVVGSGFrTXNUVUZCVFN4RFFVRkRjMElzVFVGQlVDeERRVU5xUWp0QlFVTkZXU3hKUVVGQlFTeFhRVUZYTEVWQlFVY3NRMEZFYUVJN1FVRkZSVU1zU1VGQlFVRXNUVUZCVFN4RlFVRlJMRU5CUm1oQ08wRkJSMFZETEVsQlFVRkJMRXRCUVVzc1JVRkJVeXhEUVVob1FqdEJRVWxGUXl4SlFVRkJRU3hKUVVGSkxFVkJRVlVzUTBGS2FFSTdRVUZMUlVNc1NVRkJRVUVzUjBGQlJ5eEZRVUZYTEVOQlRHaENPMEZCVFVWRExFbEJRVUZCTEZGQlFWRXNSVUZCVFN4RFFVNW9RanRCUVU5RlF5eEpRVUZCUVN4SlFVRkpMRVZCUVZVc1EwRlFhRUk3UVVGUlJVTXNTVUZCUVVFc1YwRkJWeXhGUVVGSE8wRkJVbWhDTEVkQlJHbENMRVZCVjJwQ2RVY3NTVUZCU1N4RFFVRkRMMGNzVlVGWVdTeERRVUZ1UWl4RFFVUXdRenM3UVVGblFqRkRMRTFCUVUxblNDeGxRVUZsTEVkQlFVZEVMRWxCUVVrc1EwRkJRMFVzVjBGQlRDeEpRVUZ2UWl4aFFVRTFRenM3UVVGRlFTeFZRVUZSUkN4bFFVRlNPMEZCUTBFc1UwRkJTeXhOUVVGTU8wRkJRMFZvU0N4TlFVRkJRU3hWUVVGVkxFTkJRVU5yU0N4WFFVRllMRWRCUVhsQ0xFTkJRWHBDTzBGQlFUUkNPenRCUVVNNVFpeFRRVUZMTEV0QlFVdzdRVUZEUld4SUxFMUJRVUZCTEZWQlFWVXNRMEZCUTJ0SUxGZEJRVmdzUjBGQmVVSXNRMEZCZWtJN1FVRkJORUk3TzBGQlF6bENMRk5CUVVzc1ZVRkJURHRCUVVORmJFZ3NUVUZCUVVFc1ZVRkJWU3hEUVVGRGEwZ3NWMEZCV0N4SFFVRjVRaXhEUVVGNlFqdEJRVUUwUWpzN1FVRkRPVUlzVTBGQlN5eE5RVUZNTzBGQlEwVnNTQ3hOUVVGQlFTeFZRVUZWTEVOQlFVTnJTQ3hYUVVGWUxFZEJRWGxDTEVOQlFYcENPMEZCUVRSQ096dEJRVU01UWl4VFFVRkxMR0ZCUVV3N1FVRkRSV3hJTEUxQlFVRkJMRlZCUVZVc1EwRkJRMnRJTEZkQlFWZ3NSMEZCZVVJc1EwRkJla0k3UVVGQk5FSTdPMEZCUXpsQ08wRkJRMFVzV1VGQlRTeEpRVUZKTTBnc1MwRkJTaXh6UTBGQmQwTjVTQ3hsUVVGNFF5eFJRVUZPTzBGQldrWXNSMEZzUWpCRE96czdRVUZyUXpGRExFMUJRVTEyUnl4UFFVRlBMRWRCUVVjc1EwRkJReXh4UWtGQlJDeERRVUZvUWp0QlFVVkJMRTFCUVUxRExGTkJRVk1zUjBGQlJ5eEpRVUZKUXl4VFFVRktMRU5CUVdNN1FVRkJSVmdzU1VGQlFVRXNWVUZCVlN4RlFVRldRU3hWUVVGR08wRkJRV05UTEVsQlFVRkJMRTlCUVU4c1JVRkJVRUU3UVVGQlpDeEhRVUZrTEVOQlFXeENPMEZCUTBFc1UwRkJUME1zVTBGQlV5eERRVUZEUlN4VFFVRldMRU5CUVc5Q1pDeFRRVUZ3UWl4RFFVRlFPMEZCUTBRc1EwRjBRMFE3TzBGQmQwTkJMMElzVFVGQlRTeERRVUZET0VNc1kwRkJVQ3hEUVVGelFtZEhMRmRCUVhSQ0xFVkJRVzFETEdkQ1FVRnVReXhGUVVGeFJEdEJRVU51UkM5R0xFVkJRVUZCTEV0QlFVc3NSVUZCVlhCQ0xHZENRVVJ2UXp0QlFVVnVSSEZDTEVWQlFVRkJMRkZCUVZFc1JVRkJUeXhMUVVadlF6dEJRVWR1UkVNc1JVRkJRVUVzVlVGQlZTeEZRVUZMTEVsQlNHOURPMEZCU1c1RVF5eEZRVUZCUVN4WlFVRlpMRVZCUVVjN1FVRktiME1zUTBGQmNrUTdPenRCUTJwRlFTeFRRVUZUTEhOQ1FVRnpRaXhEUVVGRExFbEJRVWtzUlVGQlJUdEJRVU4wUXl4RlFVRkZMRWxCUVVrc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEzWkNMRWxCUVVrc1RVRkJUU3hKUVVGSkxHTkJRV01zUTBGQlF5d3lSRUZCTWtRc1EwRkJReXhEUVVGRE8wRkJRekZHTEVkQlFVYzdRVUZEU0R0QlFVTkJMRVZCUVVVc1QwRkJUeXhKUVVGSkxFTkJRVU03UVVGRFpDeERRVUZETzBGQlEwUTdRVUZEUVN4alFVRmpMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdRVUZEZUVNc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1QwRkJUeXhGUVVGRkxIbENRVUY1UWl4SFFVRkhMRWxCUVVrN096czdPenRCUTFRMVJTeFRRVUZUTEdWQlFXVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRk8wRkJReTlDTEVWQlFVVXNZMEZCWXl4SFFVRkhMR1ZCUVdVc1IwRkJSeXhOUVVGTkxFTkJRVU1zWTBGQll5eEpRVUZKTEZOQlFWTXNaVUZCWlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVU3UVVGRE4wWXNTVUZCU1N4RFFVRkRMRU5CUVVNc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU53UWl4SlFVRkpMRTlCUVU4c1EwRkJReXhEUVVGRE8wRkJRMklzUjBGQlJ5eERRVUZETzBGQlEwbzdRVUZEUVN4RlFVRkZMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3g1UWtGQmVVSXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRMMFVzUlVGQlJTeFBRVUZQTEdWQlFXVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGREwwSXNRMEZCUXp0QlFVTkVPMEZCUTBFc1kwRkJZeXhIUVVGSExHVkJRV1VzUTBGQlF6dEJRVU5xUXl4TlFVRk5MRU5CUVVNc1QwRkJUeXhEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc2VVSkJRWGxDTEVkQlFVY3NTVUZCU1RzN096czdPMEZEVkRWRkxGTkJRVk1zVTBGQlV5eERRVUZETEZGQlFWRXNSVUZCUlN4VlFVRlZMRVZCUVVVN1FVRkRla01zUlVGQlJTeEpRVUZKTEU5QlFVOHNWVUZCVlN4TFFVRkxMRlZCUVZVc1NVRkJTU3hWUVVGVkxFdEJRVXNzU1VGQlNTeEZRVUZGTzBGQlF5OUVMRWxCUVVrc1RVRkJUU3hKUVVGSkxGTkJRVk1zUTBGQlF5eHZSRUZCYjBRc1EwRkJReXhEUVVGRE8wRkJRemxGTEVkQlFVYzdRVUZEU0R0QlFVTkJMRVZCUVVVc1VVRkJVU3hEUVVGRExGTkJRVk1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRlZCUVZVc1NVRkJTU3hWUVVGVkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlEzcEZMRWxCUVVrc1YwRkJWeXhGUVVGRk8wRkJRMnBDTEUxQlFVMHNTMEZCU3l4RlFVRkZMRkZCUVZFN1FVRkRja0lzVFVGQlRTeFJRVUZSTEVWQlFVVXNTVUZCU1R0QlFVTndRaXhOUVVGTkxGbEJRVmtzUlVGQlJTeEpRVUZKTzBGQlEzaENMRXRCUVVzN1FVRkRUQ3hIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5NTEVWQlFVVXNTVUZCU1N4VlFVRlZMRVZCUVVVc1kwRkJZeXhEUVVGRExGRkJRVkVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0QlFVTjJSQ3hEUVVGRE8wRkJRMFE3UVVGRFFTeGpRVUZqTEVkQlFVY3NVMEZCVXl4RFFVRkRPMEZCUXpOQ0xFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeDVRa0ZCZVVJc1IwRkJSeXhKUVVGSk96czdPenM3UVVOc1FqVkZMRWxCUVVrc1QwRkJUeXhIUVVGSGEwY3NWMEZCZDBNc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dEJRVU5zUlR0QlFVTnJSVHRCUVVOc1JUdEJRVU5CTEZOQlFWTXNNRUpCUVRCQ0xFTkJRVU1zU1VGQlNTeEZRVUZGTEVsQlFVa3NSVUZCUlR0QlFVTm9SQ3hGUVVGRkxFbEJRVWtzU1VGQlNTeExRVUZMTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhSUVVGUkxFbEJRVWtzVDBGQlR5eEpRVUZKTEV0QlFVc3NWVUZCVlN4RFFVRkRMRVZCUVVVN1FVRkRNVVVzU1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXp0QlFVTm9RaXhIUVVGSE8wRkJRMGc3UVVGRFFTeEZRVUZGTEU5QlFVOHNjVUpCUVhGQ0xFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEY2tNc1EwRkJRenRCUVVORU8wRkJRMEVzWTBGQll5eEhRVUZITERCQ1FVRXdRaXhEUVVGRE8wRkJRelZETEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNSVUZCUlN4NVFrRkJlVUlzUjBGQlJ5eEpRVUZKT3pzN096czdRVU5pTlVVc1UwRkJVeXhsUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlF6VkNMRVZCUVVVc1kwRkJZeXhIUVVGSExHVkJRV1VzUjBGQlJ5eE5RVUZOTEVOQlFVTXNZMEZCWXl4SFFVRkhMRTFCUVUwc1EwRkJReXhqUVVGakxFZEJRVWNzVTBGQlV5eGxRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTJwSUxFbEJRVWtzVDBGQlR5eERRVUZETEVOQlFVTXNVMEZCVXl4SlFVRkpMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYmtRc1IwRkJSeXhEUVVGRE8wRkJRMG9zUlVGQlJTeE5RVUZOTEVOQlFVTXNUMEZCVHl4RFFVRkRMRk5CUVZNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVWQlFVVXNlVUpCUVhsQ0xFZEJRVWNzU1VGQlNTeERRVUZETzBGQlF5OUZMRVZCUVVVc1QwRkJUeXhsUVVGbExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETlVJc1EwRkJRenRCUVVORU8wRkJRMEVzWTBGQll5eEhRVUZITEdWQlFXVXNRMEZCUXp0QlFVTnFReXhOUVVGTkxFTkJRVU1zVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhQUVVGUExFVkJRVVVzZVVKQlFYbENMRWRCUVVjc1NVRkJTVHM3T3pzN1NVTlVkRVZETEVsQlFVazdRVUZEVWl4blFrRkJXVU1zUjBGQldpeEZRVUZwUWp0QlFVRkJPenRCUVVObWRFb3NTVUZCUVVFc1RVRkJUU3hEUVVGRGMwSXNUVUZCVUN4RFFVRmpMRWxCUVdRc1JVRkJiMEpuU1N4SFFVRndRanRCUVVORU96dEJRVWhQTzBGQlFVRTdRVUZCUVN4WFFVdFNMRzFDUVVGVk8wRkJRVVVzWVVGQlR5eExRVUZMTDBZc1NVRkJXanRCUVVGclFqdEJRVXgwUWp0QlFVRkJPMEZCUVVFc1YwRlBVaXh4UWtGQldUdEJRVUZGTEdGQlFVOHNRMEZCUXl4RFFVRkRMRXRCUVV0blJ5eFBRVUZrTzBGQlFYVkNPMEZCVURkQ08wRkJRVUU3UVVGQlFTeFhRVk5TTEhkQ1FVRmxPMEZCUVVVc1lVRkJUeXhEUVVGRExFTkJRVU1zUzBGQlMwTXNWVUZCWkR0QlFVRXdRanRCUVZSdVF6dEJRVUZCTzBGQlFVRXNWMEZYVWl4NVFrRkJaMEk3UVVGQlJTeGhRVUZQTEVOQlFVTXNRMEZCUXl4TFFVRkxReXhYUVVGa08wRkJRVEpDTzBGQldISkRPenRCUVVGQk8wRkJRVUVzUjBGQlZqczdPenM3TzBGRFJVRXNTVUZCVFVNc1dVRkJXVHRCUVVGQk96dEJRVUZCT3p0QlFVTm9RaXgzUWtGQldVTXNVVUZCV2l4RlFVRnpRa3dzUjBGQmRFSXNSVUZCTWtKTkxFOUJRVE5DTEVWQlFXOURReXhYUVVGd1F5eEZRVUZwUkR0QlFVRkJPenRCUVVGQk96dEJRVU12UXl3NFFrRkJUVVlzVVVGQlRqczdRVUZEUVN4UlFVRkpMRU5CUVVOQkxGRkJRVkVzUTBGQlEwY3NZVUZCVkN4RlFVRkVMRWxCUVRaQ1VpeEhRVUZITEVOQlFVTlRMRk5CUVVvc1MwRkJhMEpxU3l4VFFVRnVSQ3hGUVVFNFJEdEJRVU0xUkN4WlFVRk5MRWxCUVVrd1FpeExRVUZLTEVOQlFWVXNiVVJCUVRSRGJVa3NVVUZCVVN4RFFVRkRNMFFzVDBGQlZDeEZRVUUxUXl4elEwRkRkVUkyUkN4WFFVRlhMRU5CUVVOSExGRkJRVm9zUlVGRWRrSXNUMEZCVml4RFFVRk9PMEZCUlVRN08wRkJSVVJvU3l4SlFVRkJRU3hOUVVGTkxFTkJRVU56UWl4TlFVRlFMR2REUVVGdlFtZEpMRWRCUVhCQ08wRkJRMEVzVlVGQlMwMHNUMEZCVEN4SFFVRmxRU3hQUVVGbU8wRkJVaXRETzBGQlUyaEVPenRCUVZabE8wRkJRVUU3UVVGQlFTeFhRVmxvUWl4elFrRkJZVHRCUVVGRkxHRkJRVThzUzBGQlMwRXNUMEZCV2p0QlFVRnhRanRCUVZwd1FqdEJRVUZCTzBGQlFVRXNWMEZqYUVJc2QwSkJRV1U3UVVGQlJTeGhRVUZQTEV0QlFVdEhMRk5CUVV3c1IwRkJhVUlzUzBGQlMwRXNVMEZCZEVJc1IwRkJhME1zU1VGQmVrTTdRVUZCSzBNN1FVRmthRVE3UVVGQlFUdEJRVUZCTEZkQlowSm9RaXcwUWtGQmJVSTdRVUZCUlN4MVFrRkJWU3hMUVVGTFJTeFpRVUZNTEVWQlFWWXNZMEZCYVVNc1MwRkJTMnBGTEU5QlFVd3NSVUZCYWtNN1FVRkJiVVE3UVVGb1FuaEVPMEZCUVVFN1FVRkJRU3hYUVd0Q2FFSXNiMEpCUVZjN1FVRkJSU3hoUVVGUExFTkJRVU1zUTBGQlF5eExRVUZMYTBVc1RVRkJaRHRCUVVGelFqdEJRV3hDYmtJN08wRkJRVUU3UVVGQlFTeEZRVUZwUW1Jc1NVRkJha0lzUTBGQmJFSTdPMGxEUlUxakxFdEJRVXM3UVVGRFZDeHBRa0ZCV1hwSkxFZEJRVm9zUlVGQmFVSXdTU3hUUVVGcVFpeEZRVUUwUWp0QlFVRkJPenRCUVVNeFFpeFRRVUZMTVVrc1IwRkJUQ3hIUVVGWFFTeEhRVUZZTzBGQlJVRXNVMEZCU3pKSkxFdEJRVXdzUjBGQllVUXNVMEZCVXl4RFFVRkRla1lzUjBGQlZpeERRVUZqTEZWQlFVTXlSU3hIUVVGRU8wRkJRVUVzWVVGQlV5eEpRVUZKUkN4SlFVRktMRU5CUVZORExFZEJRVlFzUTBGQlZEdEJRVUZCTEV0QlFXUXNRMEZCWWp0QlFVTkJMRk5CUVVzelJTeEhRVUZNTEVkQlFWY3NTMEZCU3pCR0xFdEJRVXdzUTBGQlYyNUxMRTFCUVZnc1EwRkJhMElzVlVGQlEwTXNSMEZCUkN4RlFVRk5hMFlzU1VGQlRpeEZRVUZaSzBJc1EwRkJXaXhGUVVGclFqdEJRVU0zUXl4VlFVRkpha2dzUjBGQlJ5eERRVUZEYTBZc1NVRkJTU3hEUVVGRFZ5eFBRVUZNTEVWQlFVUXNRMEZCU0N4TFFVRjNRbXhITEZOQlFUVkNMRVZCUVhWRE8wRkJRM0pETEdOQlFVMHNTVUZCU1RCQ0xFdEJRVW9zTWtKQlFUWkNOa1FzU1VGQlNTeERRVUZET1VJc1NVRkJiRU1zZFVOQlFXMUZOa1FzUTBGQmJrVXNUMEZCVGp0QlFVTkVPenRCUVVORWFrZ3NUVUZCUVVFc1IwRkJSeXhEUVVGRGEwWXNTVUZCU1N4RFFVRkRWeXhQUVVGTUxFVkJRVVFzUTBGQlNDeEhRVUZ6UWxnc1NVRkJkRUk3UVVGRFFTeGhRVUZQYkVZc1IwRkJVRHRCUVVORUxFdEJUbFVzUlVGTlVpeEZRVTVSTEVOQlFWZzdRVUZSUVN4VFFVRkxkMElzWTBGQlRDeEhRVUZ6UWtFc1owSkJRWFJDTzBGQlEwRXNVMEZCUzBNc1IwRkJUQ3hIUVVGWExFMUJRVmc3UVVGRFJDeEhRV1pST3pzN1FVRkJRVHRCUVVGQk8wRkJRVUVzVjBGclFsUXNhMEpCUVZNN1FVRkJSU3hoUVVGUExFdEJRVXQ1U1N4TFFVRk1MRU5CUVZkc1F5eExRVUZZTEVWQlFWQTdRVUZCTWtJN1FVRnNRamRDTzBGQlFVRTdRVUZCUVN4WFFXMUNWQ3huUWtGQlR6dEJRVUZGTEdGQlFVOHNTMEZCUzJ0RExFdEJRVXdzUTBGQlYyeERMRXRCUVZnc1JVRkJVRHRCUVVFeVFqdEJRVzVDTTBJN1FVRkJRVHRCUVVGQkxGZEJjVUpVTEdGQlFVazFSU3hKUVVGS0xFVkJRVlVyUnl4SlFVRldMRVZCUVdkQ08wRkJRVUVzYVVKQlEydENRU3hKUVVGSkxFbEJRVWtzUlVGRU1VSTdRVUZCUVN4VlFVTk9hRVlzVVVGRVRTeFJRVU5PUVN4UlFVUk5PMEZCUVVFc1ZVRkRTVU1zVTBGRVNpeFJRVU5KUVN4VFFVUktPenRCUVVWa0xGVkJRVTFuUml4TlFVRk5MRWRCUVVjc1MwRkJTelZHTEVkQlFVd3NRMEZCVTNCQ0xFbEJRVlFzUTBGQlpqczdRVUZEUVN4VlFVRkpaMGdzVFVGQlRTeExRVUZMZWtzc1UwRkJXQ3hKUVVGM1FuZEdMRkZCUVRWQ0xFVkJRWE5ETzBGQlEzQkRMR05CUVUwc1NVRkJTVGxFTEV0QlFVb3NRMEZCVlN4RFFVRkJLMFFzVTBGQlV5eFRRVUZVTEVsQlFVRkJMRk5CUVZNc1YwRkJWQ3haUVVGQlFTeFRRVUZUTEVOQlFVZG9ReXhKUVVGSUxFTkJRVlFzTWtOQlFXOUVRU3hKUVVGd1JDeFBRVUZXTEVOQlFVNDdRVUZEUkRzN1FVRkRSQ3hoUVVGUFowZ3NUVUZCVUR0QlFVTkVPMEZCTlVKUk8wRkJRVUU3UVVGQlFTeFhRVGhDVkN4M1FrRkJaWEJGTEZGQlFXWXNSVUZCZVVJN1FVRkRka0lzWVVGQlR5eExRVUZMZWtVc1IwRkJUQ3hEUVVGVE9Fa3NTMEZCVkN4RFFVRmxOVXNzU1VGQlppeEhRVUZ6UW5OSExFMUJRWFJDTEVOQlFUWkNMRlZCUVVOMVJTeERRVUZFTzBGQlFVRXNaVUZCVDBFc1EwRkJReXhEUVVGRGJrY3NTMEZCUml4RFFVRlJhVVFzU1VGQlVpeERRVUZoTEZWQlFVTXpReXhEUVVGRU8wRkJRVUVzYVVKQlFVOUJMRU5CUVVNc1EwRkJRM0pDTEVsQlFVWXNTMEZCVnpSRExGRkJRV3hDTzBGQlFVRXNVMEZCWWl4RFFVRlFPMEZCUVVFc1QwRkJOMElzUTBGQlVEdEJRVU5FTzBGQlJVUTdRVUZEUmp0QlFVTkJPenRCUVhCRFZ6dEJRVUZCTzBGQlFVRXNWMEZ4UTFRc2JVSkJRVlU3UVVGQlFUczdRVUZEVWl4WFFVRkxhMFVzUzBGQlRDeERRVUZYYmtZc1QwRkJXQ3hEUVVGdFFpeFZRVUZEUnl4SlFVRkVMRVZCUVU4clFpeERRVUZRTEVWQlFXRTdRVUZET1VJc1dVRkJTUzlDTEVsQlFVa3NRMEZCUTNGR0xGTkJRVXdzUzBGQmJVSTFTeXhUUVVGMlFpeEZRVUZyUXp0QlFVTm9ReXhqUVVGTk5Fc3NVMEZCVXl4SFFVRkhMRXRCUVVrc1EwRkJRM1JNTEVkQlFVd3NRMEZCVTJsSExFbEJRVWtzUTBGQlEzRkdMRk5CUVdRc1EwRkJiRUk3TzBGQlEwRXNZMEZCU1VFc1UwRkJVeXhMUVVGTE5Vc3NVMEZCYkVJc1JVRkJOa0k3UVVGQlJTeHJRa0ZCVFN4SlFVRkpNRUlzUzBGQlNpeHpRMEZCZDBNMlJDeEpRVUZKTEVOQlFVTnhSaXhUUVVFM1F5eDVRa0ZCY1VWeVJpeEpRVUZKTEVOQlFVTlhMRTlCUVV3c1JVRkJja1VzYzBKQlFTdEdiMElzUTBGQkwwWXNVVUZCVGp0QlFVRTJSenM3UVVGRE5Va3ZRaXhWUVVGQlFTeEpRVUZKTEVOQlFVTnhSaXhUUVVGTUxFZEJRV2xDUVN4VFFVRnFRanRCUVVORU8wRkJRMFlzVDBGT1JEdEJRVkZCTEdGQlFVOHNTVUZCVUR0QlFVTkVPMEZCTDBOUk96dEJRVUZCTzBGQlFVRXNSMEZCV0R0QlFXdEVRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPMEZCUTBFc1NVRkJUUzlKTEdkQ1FVRmpMRWRCUVVjc1UwRkJha0pCTEdOQlFXbENMRU5CUVVOSkxGTkJRVVFzUlVGQldYTkVMRWxCUVZvc1JVRkJjVUk3UVVGRE1VTXNUVUZCVFhCRUxGVkJRVlVzUjBGQlIycERMRTFCUVUwc1EwRkJRM05DTEUxQlFWQXNRMEZEYWtJN1FVRkRSVmtzU1VGQlFVRXNWMEZCVnl4RlFVRkhMRU5CUkdoQ08wRkJSVVZETEVsQlFVRkJMRTFCUVUwc1JVRkJVU3hEUVVab1FqdEJRVWRGUXl4SlFVRkJRU3hMUVVGTExFVkJRVk03UVVGSWFFSXNSMEZFYVVJc1JVRk5ha0pwUkN4SlFVRkpMRU5CUVVOd1JDeFZRVTVaTEVOQlFXNUNMRU5CUkRCRE96dEJRVlV4UTBFc1JVRkJRVUVzVlVGQlZTeERRVUZETUVrc1ZVRkJXQ3hIUVVGM1FuUkdMRWxCUVVrc1EwRkJRMjFGTEZWQlFVd3NSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNRMEZCT1VNN1FVRkRRWFpJTEVWQlFVRkJMRlZCUVZVc1EwRkJRekpKTEZGQlFWZ3NSMEZCYzBKMlJpeEpRVUZKTEVOQlFVTjNSaXhSUVVGTUxFZEJRV2RDTEVOQlFXaENMRWRCUVc5Q0xFTkJRVEZETzBGQlJVRXNUVUZCVFc1SkxFOUJRVThzUjBGQlJ5eEZRVUZvUWp0QlFVVkJMRTFCUVUxRExGTkJRVk1zUjBGQlJ5eEpRVUZKUXl4VFFVRktMRU5CUVdNN1FVRkJSVmdzU1VGQlFVRXNWVUZCVlN4RlFVRldRU3hWUVVGR08wRkJRV05UTEVsQlFVRkJMRTlCUVU4c1JVRkJVRUU3UVVGQlpDeEhRVUZrTEVOQlFXeENPMEZCUTBFc1UwRkJUME1zVTBGQlV5eERRVUZEUlN4VFFVRldMRU5CUVc5Q1pDeFRRVUZ3UWl4RFFVRlFPMEZCUTBRc1EwRnFRa1E3TzBsRE1VUk5LMGtzVjBGQlZ6dEJRVU5tTEhWQ1FVRlpReXhOUVVGYUxFVkJRVzlDTzBGQlFVRTdPMEZCUTJ4Q0wwc3NTVUZCUVVFc1RVRkJUU3hEUVVGRGMwSXNUVUZCVUN4RFFVRmpMRWxCUVdRc1JVRkJiMEo1U2l4TlFVRndRanRCUVVWQkxGTkJRVXRETEcxQ1FVRk1MRWRCUVRKQ0xFVkJRVE5DTzBGQlEwRXNVMEZCUzBNc2JVSkJRVXdzUjBGQk1rSXNSVUZCTTBJc1EwRkthMEk3UVVGTGJrSTdPMEZCVG1NN1FVRkJRVHRCUVVGQkxGZEJVV1lzYjBKQlFWYzdRVUZCUlN4aFFVRlBMRXRCUVV0RExFdEJRVm83UVVGQmJVSTdRVUZTYWtJN1FVRkJRVHRCUVVGQkxGZEJVMllzYTBKQlFWTkRMRU5CUVZRc1JVRkJXVHRCUVVGRkxGZEJRVXRFTEV0QlFVd3NSMEZCWVVNc1EwRkJZanRCUVVGblFqdEJRVlJtTzBGQlFVRTdRVUZCUVN4WFFWZG1MSFZDUVVGak8wRkJRVVVzZFVKQlFWVXNTMEZCUzBNc1dVRkJUQ3hGUVVGV0xHTkJRV2xETEV0QlFVdERMR0ZCUVV3c1JVRkJha003UVVGQmVVUXNTMEZZTVVRN08wRkJRVUU3UVVGQlFUdEJRVUZCTEZkQllXWXNlVUpCUVdkQ08wRkJRVVVzWVVGQlR5eExRVUZMUXl4VlFVRmFPMEZCUVhkQ08wRkJZak5DTzBGQlFVRTdRVUZCUVN4WFFXTm1MSFZDUVVGalNDeERRVUZrTEVWQlFXbENPMEZCUVVVc1YwRkJTMGNzVlVGQlRDeEhRVUZyUWtnc1EwRkJiRUk3UVVGQmNVSTdRVUZrZWtJN1FVRkJRVHRCUVVGQkxGZEJaMEptTEhkQ1FVRmxPMEZCUVVVc1lVRkJUeXhMUVVGTFNTeFRRVUZhTzBGQlFYVkNPMEZCYUVKNlFqdEJRVUZCTzBGQlFVRXNWMEZwUW1Zc2MwSkJRV0ZLTEVOQlFXSXNSVUZCWjBJN1FVRkJSU3hYUVVGTFNTeFRRVUZNTEVkQlFXbENTaXhEUVVGcVFqdEJRVUZ2UWp0QlFXcENka0k3UVVGQlFUdEJRVUZCTEZkQmJVSm1MSGRDUVVGbE8wRkJRVVVzWVVGQlR5eExRVUZMU3l4VFFVRmFPMEZCUVhWQ08wRkJia0o2UWp0QlFVRkJPMEZCUVVFc1YwRnZRbVlzYzBKQlFXRk1MRU5CUVdJc1JVRkJaMEk3UVVGQlJTeFhRVUZMU3l4VFFVRk1MRWRCUVdsQ1RDeERRVUZxUWp0QlFVRnZRanRCUVhCQ2RrSTdRVUZCUVR0QlFVRkJMRmRCYzBKbUxDdENRVUZ6UWp0QlFVRkZMR0ZCUVU4c1MwRkJTMDBzWjBKQlFWbzdRVUZCT0VJN1FVRjBRblpETzBGQlFVRTdRVUZCUVN4WFFYVkNaaXcyUWtGQmIwSk9MRU5CUVhCQ0xFVkJRWFZDTzBGQlFVVXNWMEZCUzAwc1owSkJRVXdzUjBGQmQwSk9MRU5CUVhoQ08wRkJRVEpDTzBGQmRrSnlRenRCUVVGQk8wRkJRVUVzVjBGNVFtWXNkMEpCUVdVN1FVRkJSU3hoUVVGUExFdEJRVXMzUnl4TFFVRk1MRU5CUVZkTExFZEJRVmdzUTBGQlpTeFZRVUZEUXl4RFFVRkVPMEZCUVVFc1pVRkJUMEVzUTBGQlF5eERRVUZEY2tJc1NVRkJWRHRCUVVGQkxFOUJRV1lzUTBGQlVEdEJRVUZ6UXp0QlFYcENlRU03UVVGQlFUdEJRVUZCTEZkQk1rSm1MR2xDUVVGUk5FTXNVVUZCVWl4RlFVRnJRanRCUVVGRkxHRkJRVThzUTBGQlF5eERRVUZETEV0QlFVczJSU3h0UWtGQlRDeERRVUY1UWpkRkxGRkJRWHBDTEVOQlFWUTdRVUZCTmtNN1FVRXpRbXhFTzBGQlFVRTdRVUZCUVN4WFFUWkNaaXcwUWtGQmJVSTdRVUZCUlN4aFFVRlBMRXRCUVVzM1FpeExRVUZNTEVOQlFWYzJSQ3hMUVVGWUxFVkJRVkE3UVVGQk1rSTdRVUUzUW1wRE8wRkJRVUU3UVVGQlFTeFhRU3RDWml4NVFrRkJaMEpvUXl4UlFVRm9RaXhGUVVFd1FqdEJRVUZGTEdGQlFVOHNTMEZCU3paRkxHMUNRVUZNTEVOQlFYbENOMFVzVVVGQmVrSXNRMEZCVUR0QlFVRXlRenRCUVM5Q2VFUTdRVUZCUVR0QlFVRkJMRmRCYVVObUxIVkNRVUZqTzBGQlFVVXNZVUZCVHl4TFFVRkxOMElzUzBGQlRDeERRVUZYU3l4SFFVRllMRU5CUVdVc1ZVRkJRME1zUTBGQlJEdEJRVUZCTEdWQlFVOUJMRU5CUVVNc1EwRkJRMmRHTEU5QlFWUTdRVUZCUVN4UFFVRm1MRU5CUVZBN1FVRkJlVU03UVVGcVF6RkRPMEZCUVVFN1FVRkJRU3hYUVcxRFppdzRRa0ZCY1VKNlJDeFJRVUZ5UWl4RlFVRXJRanRCUVVGRkxHRkJRVThzUzBGQlN6aEZMRzFDUVVGTUxFTkJRWGxDT1VVc1VVRkJla0lzUzBGQmMwTXNSVUZCTjBNN1FVRkJhVVE3UVVGdVEyNUZPMEZCUVVFN1FVRkJRU3hYUVc5RFppeHpRa0ZCWVR0QlFVRkJPenRCUVVOWUxHRkJRVTl1Unl4TlFVRk5MRU5CUVVNd1RDeE5RVUZRTEVOQlFXTXNTMEZCUzFRc2JVSkJRVzVDTEVWQlFYZERMMHNzVFVGQmVFTXNRMEZCSzBNc1ZVRkJRME1zUjBGQlJDeEZRVUZOZDB3c1NVRkJUanRCUVVGQkxHVkJRV1Y0VEN4SFFVRkhMRU5CUVVNNFJDeE5RVUZLTEVOQlFWY3dTQ3hKUVVGWUxFTkJRV1k3UVVGQlFTeFBRVUV2UXl4RlFVRm5SaXhGUVVGb1JpeEZRVU5LZWtZc1RVRkVTU3hEUVVOSExGVkJRVUV3Uml4SFFVRkhPMEZCUVVFc1pVRkJTVUVzUjBGQlJ5eERRVUZETlVJc1VVRkJTaXhQUVVGdFFpeExRVUZKTEVOQlFVTkJMRkZCUVV3c1JVRkJka0k3UVVGQlFTeFBRVVJPTEVOQlFWQTdRVUZGUkR0QlFYWkRZenRCUVVGQk8wRkJRVUVzVjBGNVEyWXNlVUpCUVdkQ08wRkJRVVVzWVVGQlR5eExRVUZMTDBnc1ZVRkJXanRCUVVGM1FqdEJRWHBETTBJN08wRkJRVUU3UVVGQlFTeEhRVUZxUWpzN096czdPenRCUTA5QkxFbEJRVTAwU2l4TlFVRk5MRWRCUVVjc1NVRkJTV2hGTEUxQlFVb3NRMEZCVnl4dlFrRkJXQ3hEUVVGbU8wRkJRMEVzU1VGQlRXbEZMR1ZCUVdVc1IwRkJSeXhEUVVGRExEUkNRVUZFTEVWQlFTdENMREpDUVVFdlFpeERRVUY0UWp0QlFVTkJMRWxCUVUxd1NpeFBRVUZQTEVkQlFVZHZTaXhsUVVGbExFTkJRVU51U0N4SFFVRm9RaXhEUVVGdlFpeFZRVUZCYjBnc1EwRkJRenRCUVVGQkxGTkJRVWtzU1VGQlNXeEZMRTFCUVVvc1EwRkJWMnRGTEVOQlFWZ3NRMEZCU2p0QlFVRkJMRU5CUVhKQ0xFTkJRV2hDTzBGQlEwRnlTaXhQUVVGUExFTkJRVU5zUXl4SlFVRlNMRU5CUVdGeFRDeE5RVUZpT3p0QlFVVkJMRWxCUVUxSExFdEJRVXM3UVVGRFZDeHBRa0ZCV1ROSUxGRkJRVm9zUlVGQmMwSTdRVUZCUVRzN1FVRkRjRUlzVTBGQlMwRXNVVUZCVEN4SFFVRm5Ra0VzVVVGQmFFSTdRVUZEUVN4UlFVRk5hRVlzU1VGQlNTeEhRVUZIYlVZc1NVRkJTU3hEUVVGRFF5eExRVUZNTEVOQlFWZERMRmxCUVVFc1EwRkJaMEpNTEZGQlFXaENMRU5CUVZnc1EwRkJZanRCUVVOQkxGTkJRVXMwU0N4UFFVRk1MRWRCUVdVMVRTeEpRVUZKTEVOQlFVTnpSaXhIUVVGTUxFTkJRVk1zVlVGQlF6SkZMRWRCUVVRN1FVRkJRU3hoUVVGVExFbEJRVWwzUWl4WFFVRktMRU5CUVdkQ2VFSXNSMEZCYUVJc1EwRkJWRHRCUVVGQkxFdEJRVlFzUTBGQlpqdEJRVU5CTEZOQlFVc3pSU3hIUVVGTUxFZEJRVmNzUzBGQlMzTklMRTlCUVV3c1EwRkJZUzlNTEUxQlFXSXNRMEZCYjBJc1ZVRkJRME1zUjBGQlJDeEZRVUZOSzB3c1RVRkJUaXhGUVVGak9VVXNRMEZCWkN4RlFVRnZRanRCUVVOcVJDeFZRVUZKYWtnc1IwRkJSeXhEUVVGREswd3NUVUZCVFN4RFFVRkRiRU1zVVVGQlVDeEZRVUZFTEVOQlFVZ3NTMEZCTWtKc1N5eFRRVUV2UWl4RlFVRXdRenRCUVVONFF5eGpRVUZOTEVsQlFVa3dRaXhMUVVGS0xHOURRVUZ6UXpCTExFMUJRVTBzUTBGQlEyeERMRkZCUVZBc1JVRkJkRU1zZFVOQlFXOUdOVU1zUTBGQmNFWXNUMEZCVGp0QlFVTkVPenRCUVVORWFrZ3NUVUZCUVVFc1IwRkJSeXhEUVVGREswd3NUVUZCVFN4RFFVRkRiRU1zVVVGQlVDeEZRVUZFTEVOQlFVZ3NSMEZCZVVKclF5eE5RVUY2UWp0QlFVTkJMR0ZCUVU4dlRDeEhRVUZRTzBGQlEwUXNTMEZPVlN4RlFVMVNMRVZCVGxFc1EwRkJXRHRCUVZGQkxGTkJRVXQzUWl4alFVRk1MRWRCUVhOQ1FTeG5Ra0ZCZEVJN1FVRkZRU3hUUVVGTFF5eEhRVUZNTEVkQlFWY3NUMEZCV0R0QlFVTkVMRWRCYUVKUk96czdRVUZCUVR0QlFVRkJPMEZCUVVFc1YwRnRRbFFzYTBKQlFWTTdRVUZCUlN4aFFVRlBMRXRCUVV0eFN5eFBRVUZNTEVOQlFXRTVSQ3hMUVVGaUxFVkJRVkE3UVVGQk5rSTdRVUZ1UWk5Q08wRkJRVUU3UVVGQlFTeFhRVzlDVkN4blFrRkJUenRCUVVGRkxHRkJRVThzUzBGQlN6aEVMRTlCUVV3c1EwRkJZVGxFTEV0QlFXSXNSVUZCVUR0QlFVRTJRanRCUVhCQ04wSTdRVUZCUVR0QlFVRkJMRmRCYzBKVUxHRkJRVWtyUXl4TFFVRktMRVZCUVZjN1FVRkJSU3hoUVVGUExFdEJRVXQyUnl4SFFVRk1MRU5CUVZOMVJ5eExRVUZVTEVOQlFWQTdRVUZCZDBJN1FVRjBRalZDTzBGQlFVRTdRVUZCUVN4WFFYZENWQ3gxUWtGQll5OUZMRkZCUVdRc1JVRkJkMEk3UVVGQlJTeGhRVUZQTEV0QlFVczRSaXhQUVVGTUxFTkJRV0V2Uml4TlFVRmlMRU5CUVc5Q0xGVkJRVUYxUlN4RFFVRkRPMEZCUVVFc1pVRkJTVUVzUTBGQlF5eERRVUZETUVJc1QwRkJSaXhEUVVGVmFFY3NVVUZCVml4RFFVRktPMEZCUVVFc1QwRkJja0lzUTBGQlVEdEJRVUZ6UkR0QlFYaENka1U3UVVGQlFUdEJRVUZCTEZkQk1FSlVMR2xDUVVGUmFVY3NWVUZCVWl4RlFVRnZRanRCUVVOc1FpeFhRVUZMU0N4UFFVRk1MRU5CUVdGNlRDeEpRVUZpTEVOQlFXdENMRWxCUVVselN5eFhRVUZLTEVOQlFXZENjMElzVlVGQmFFSXNRMEZCYkVJN1FVRkRRU3hYUVVGTFF5eFBRVUZNTEVOQlFXRXNTMEZCU3pOTExFZEJRV3hDTzBGQlEwUTdRVUUzUWxFN1FVRkJRVHRCUVVGQkxGZEJLMEpVTEdkQ1FVRlBkMG9zUzBGQlVDeEZRVUZqTzBGQlExcEJMRTFCUVVGQkxFdEJRVXNzUjBGQlIwRXNTMEZCU3l4RFFVRkRiMElzVjBGQlRpeEZRVUZTTzBGQlEwRXNWVUZCVFVNc1QwRkJUeXhIUVVGSExFdEJRVXRETEUxQlFVd3NSMEZCWTNSSExFMUJRV1FzUTBGQmNVSXNWVUZCUVdkSExFMUJRVTA3UVVGQlFTeGxRVUZKUVN4TlFVRk5MRU5CUVVOb1FpeExRVUZRTEV0QlFXbENRU3hMUVVGeVFqdEJRVUZCTEU5QlFUTkNMRU5CUVdoQ096dEJRVVZCTEZWQlFVbHhRaXhQUVVGUExFTkJRVU40VEN4TlFVRlNMRXRCUVcxQ0xFTkJRWFpDTEVWQlFUQkNPMEZCUTNoQ0xHTkJRVTBzU1VGQlNWTXNTMEZCU2l4clJFRkJiMFF3U2l4TFFVRndSQ3hQUVVGT08wRkJRMFFzVDBGR1JDeE5RVWRMTEVsQlFVbHhRaXhQUVVGUExFTkJRVU40VEN4TlFVRlNMRWRCUVdsQ0xFTkJRWEpDTEVWQlFYZENPMEZCUXpOQ0xHTkJRVTBzU1VGQlNWTXNTMEZCU2l4NVJVRkJNa1V3U2l4TFFVRXpSU3hSUVVGT08wRkJRMFE3TzBGQlJVUXNWMEZCUzJVc1QwRkJUQ3hIUVVGbExFdEJRVXRCTEU5QlFVd3NRMEZCWVM5R0xFMUJRV0lzUTBGQmIwSXNWVUZCUVdkSExFMUJRVTA3UVVGQlFTeGxRVUZKUVN4TlFVRk5MRU5CUVVOb1FpeExRVUZRTEV0QlFXbENRU3hMUVVGeVFqdEJRVUZCTEU5QlFURkNMRU5CUVdZN1FVRkRSRHRCUVRORFVUdEJRVUZCTzBGQlFVRXNWMEUyUTFRc2FVSkJRVkU3UVVGQlJYaEhMRTFCUVVGQkxHRkJRVUVzUTBGQmFVSXNTMEZCUzB3c1VVRkJkRUlzUlVGQlowTXNTMEZCUzI5SkxGRkJRVXdzUlVGQmFFTTdRVUZCYTBRN1FVRkZOVVE3UVVGRFJqdEJRVU5CTzBGQlEwRTdPMEZCYkVSWE8wRkJRVUU3UVVGQlFTeFhRVzFFVkN4cFFrRkJVUzlMTEVkQlFWSXNSVUZCWVR0QlFVRkJPenRCUVVOWUxGZEJRVXRCTEVkQlFVd3NSMEZCVjBFc1IwRkJXRHRCUVVWQkxGZEJRVXQxU3l4UFFVRk1MRU5CUVdFdlJ5eFBRVUZpTEVOQlFYRkNMRlZCUVVOMVJpeERRVUZFTEVWQlFVODdRVUZETVVKQkxGRkJRVUZCTEVOQlFVTXNRMEZCUTI1SExFdEJRVVlzUjBGQlZXMUhMRU5CUVVNc1EwRkJRMjVITEV0QlFVWXNRMEZCVVhCRkxFMUJRVklzUTBGQlpTeFZRVUZEYjBVc1MwRkJSQ3hGUVVGUlowWXNSMEZCVWl4RlFVRm5RanRCUVVGRk8wRkJRM3BETEdOQlFVbEJMRWRCUVVjc1dVRkJXVWtzV1VGQmJrSXNSVUZCYVVNc1QwRkJUMG9zUjBGQlVDeERRVVJOTzBGQlIzWkRPenRCUVVOQkxHTkJRVTFxUlN4SlFVRkpMRWRCUVVjelJDeEhRVUZITEVOQlFVTm5UQ3hSUVVGS0xFZEJRV1YwVGl4SFFVRm1MRU5CUVcxQ2Ewc3NSMEZCUnl4RFFVRkRMMFlzU1VGQmRrSXNSVUZEV0R0QlFVTkZLMElzV1VGQlFVRXNVVUZCVVN4RlFVRkpMRWxCUkdRN1FVRkZSVU1zV1VGQlFVRXNVMEZCVXl4RlFVRkhMRzFDUVVGRGFFTXNTVUZCUkR0QlFVRkJMRFpEUVVFeVFtdElMRU5CUVVNc1EwRkJRMVFzVVVGQlJpeEZRVUV6UWl4dlEwRkJhVVY2Unl4SlFVRnFSVHRCUVVGQk8wRkJSbVFzVjBGRVZ5eERRVUZpTzBGQlRVRmxMRlZCUVVGQkxFdEJRVXNzUTBGQlF6bEVMRWxCUVU0c1EwRkJWMjFOTEhGQ1FVRnhRaXhEUVVGRGJFTXNRMEZCUkN4RlFVRkpia0lzUjBGQlNpeEZRVUZUYWtVc1NVRkJWQ3hGUVVGbExFdEJRVWtzUTBGQlF6TkVMRWRCUVhCQ0xFTkJRV2hETzBGQlEwRnJUQ3hWUVVGQlFTeHRRa0ZCYlVJc1EwRkJRM1JKTEV0QlFVUXNSVUZCVVcxSExFTkJRVklzUlVGQlYyNUNMRWRCUVZnc1JVRkJaMEpxUlN4SlFVRm9RaXhGUVVGelFpeExRVUZKTEVOQlFVTXpSQ3hIUVVFelFpeERRVUZ1UWp0QlFVTkJMR2xDUVVGUE5FTXNTMEZCVUR0QlFVTkVMRk5CWWxNc1JVRmhVQ3hGUVdKUExFTkJRVllzUTBGRU1FSTdRVUZsTTBJc1QwRm1SQ3hGUVVoWE96dEJRVzlDV0N4aFFVRlBMRWxCUVZBN1FVRkRSRHRCUVVWRU8wRkJRMFk3UVVGRFFUczdRVUUxUlZjN1FVRkJRVHRCUVVGQkxGZEJOa1ZVTEc5Q1FVRlhPMEZCUTFRc1ZVRkJUWFZKTEZGQlFWRXNSMEZCUnl4TFFVRkxXaXhQUVVGTUxFTkJRV0YwU0N4SFFVRmlMRU5CUVdsQ0xGVkJRVU00Uml4RFFVRkVMRVZCUVU4N1FVRkRka01zV1VGQlRYQk1MRWxCUVVrc1IwRkJSenRCUVVOWU5rd3NWVUZCUVVFc1MwRkJTeXhGUVVGalZDeERRVUZETEVOQlFVTlVMRkZCUVVZc1JVRkVVanRCUVVWWWMwSXNWVUZCUVVFc1ZVRkJWU3hGUVVGVFlpeERRVUZETEVOQlFVTlpMR0ZCUVVZc1JVRkdVanRCUVVkWVJTeFZRVUZCUVN4VFFVRlRMRVZCUVZWa0xFTkJRVU1zUTBGQlExY3NXVUZCUml4RlFVaFNPMEZCU1ZoSkxGVkJRVUZCTEZOQlFWTXNSVUZCVldZc1EwRkJReXhEUVVGRGNVTXNXVUZCUml4RlFVcFNPMEZCUzFoNFNTeFZRVUZCUVN4TFFVRkxMRVZCUVdNc1JVRk1VanRCUVUxWWJVZ3NWVUZCUVVFc1owSkJRV2RDTEVWQlFVZG9RaXhEUVVGRExFTkJRVU56UXl4dFFrRkJSaXhGUVU1U08wRkJUMWc1U3l4VlFVRkJRU3hWUVVGVkxFVkJRVk4zU1N4RFFVRkRMRU5CUVVOMVF5eGhRVUZHTzBGQlVGSXNVMEZCWWp0QlFWTkJka01zVVVGQlFVRXNRMEZCUXl4RFFVRkRia2NzUzBGQlJpeERRVUZSV1N4UFFVRlNMRU5CUVdkQ0xGVkJRVU1yU0N4WlFVRkVMRVZCUVd0Q08wRkJRMmhETEdOQlFVMURMRkZCUVZFc1IwRkJSenRCUVVGRk0wb3NXVUZCUVVFc1NVRkJTU3hGUVVGSE1Fb3NXVUZCV1N4RFFVRkRha2dzVDBGQllqdEJRVUZVTEZkQlFXcENPenRCUVVOQkxHTkJRVWxwU0N4WlFVRlpMRU5CUVVORkxGVkJRV0lzUlVGQlNpeEZRVUVyUWp0QlFVRkZSQ3haUVVGQlFTeFJRVUZSTEVOQlFVTjBSQ3hQUVVGVUxFZEJRVzFDY1VRc1dVRkJXU3hEUVVGRFJTeFZRVUZpTEVkQlFUQkNia1FzVVVGQk1VSXNSVUZCYmtJN1FVRkJlVVE3TzBGQlF6RkdMR05CUVVscFJDeFpRVUZaTEVOQlFVTm9SQ3haUVVGaUxFVkJRVW9zUlVGQmFVTTdRVUZCUldsRUxGbEJRVUZCTEZGQlFWRXNRMEZCUTI1RUxGTkJRVlFzUjBGQmNVSnJSQ3haUVVGWkxFTkJRVU5vUkN4WlFVRmlMRVZCUVhKQ08wRkJRV3RFT3p0QlFVTnlSaXhqUVVGSlowUXNXVUZCV1N4RFFVRkRSeXhSUVVGaUxFVkJRVW9zUlVGQk5rSTdRVUZCUlVZc1dVRkJRVUVzVVVGQlVTeERRVUZEYUVRc1RVRkJWQ3hIUVVGclFpdERMRmxCUVZrc1EwRkJRMGNzVVVGQllpeEZRVUZzUWp0QlFVRXlRenM3UVVGRk1VVXZUaXhWUVVGQlFTeEpRVUZKTEVOQlFVTnBSaXhMUVVGTUxFTkJRVmM1UkN4SlFVRllMRU5CUVdkQ01FMHNVVUZCYUVJN1FVRkRSQ3hUUVZCRU8wRkJVMEVzWlVGQlR6ZE9MRWxCUVZBN1FVRkRSQ3hQUVhCQ1owSXNRMEZCYWtJN1FVRnpRa0VzWVVGQlQyMUdMRWxCUVVrc1EwRkJRelpKTEZOQlFVd3NRMEZCWlZJc1VVRkJaaXhGUVVGNVFpeEpRVUY2UWl4RlFVRXJRaXhKUVVFdlFpeERRVUZRTzBGQlEwUTdRVUZ5UjFFN08wRkJRVUU3UVVGQlFTeEhRVUZZT3p0QlFYZEhRU3hKUVVGTlJpeHhRa0ZCY1VJc1IwRkJSeXhUUVVGNFFrRXNjVUpCUVhkQ0xFTkJRVU5zUXl4RFFVRkVMRVZCUVVsdVFpeEhRVUZLTEVWQlFWTnFSU3hKUVVGVUxFVkJRV1V6UkN4SFFVRm1MRVZCUVhWQ08wRkJRMjVFTEUxQlFVa3lSQ3hKUVVGSkxFTkJRVU5QTEZOQlFVd3NSVUZCU2l4RlFVRnpRanRCUVVOd1FqdEJRVU5CTEZGQlFVMHdTQ3hQUVVGUExFZEJRVWMxVEN4SFFVRkhMRU5CUVVNMlRDeFpRVUZLTEVOQlFXbENReXhwUWtGQmFrSXNRMEZCYlVOc1JTeEhRVUZITEVOQlFVTXZSaXhKUVVGMlF5eERRVUZvUWpzN1FVRkRRU3hSUVVGSkswb3NUMEZCVHl4TFFVRkxlRTRzVTBGQmFFSXNSVUZCTWtJN1FVRkRla0lzV1VGQlRTeEpRVUZKTUVJc1MwRkJTaXg1UWtGQk1rSnBTaXhEUVVGRExFTkJRVU5VTEZGQlFVWXNSVUZCTTBJc05FSkJRWGxFVml4SFFVRkhMRU5CUVVNdlJpeEpRVUUzUkN3MlFrRkJUanRCUVVORUxFdEJURzFDTzBGQlQzQkNPenRCUVVORUxFZEJWR3RFT3pzN1FVRlpia1FzVFVGQlNXdExMRmRCUVZjc1IwRkJSeXhKUVVGc1FqczdRVUZEUVN4TlFVRkpia1VzUjBGQlJ5eERRVUZEVFN4UFFVRlNMRVZCUVdsQ08wRkJRMlk3UVVGRFFUdEJRVU5CTmtRc1NVRkJRVUVzVjBGQlZ5eEhRVUZITDB3c1IwRkJSeXhEUVVGRFowMHNVVUZCU2l4SFFVRmxkRThzUjBGQlppeERRVUZ0UW10TExFZEJRVWNzUTBGQlEwMHNUMEZCZGtJc1EwRkJaRHM3UVVGRFFTeFJRVUZKTmtRc1YwRkJWeXhMUVVGTE0wNHNVMEZCY0VJc1JVRkJLMEk3UVVGRE4wSXNXVUZCVFN4SlFVRkpNRUlzUzBGQlNpdzBRa0ZCT0VJNFNDeEhRVUZITEVOQlFVTk5MRTlCUVd4RExHbEVRVUZuUm1Fc1EwRkJReXhEUVVGRFZDeFJRVUZHTEVWQlFXaEdMRkZCUVU0N1FVRkRSQ3hMUVU1ak96czdRVUZUWml4UlFVRkplVVFzVjBGQlZ5eERRVUZEZUVNc2JVSkJRVm9zUTBGQlowTTFSaXhKUVVGSkxFTkJRVU01UWl4SlFVRnlReXhOUVVFclEzcEVMRk5CUVc1RUxFVkJRVGhFTzBGQlF6VkVNazRzVFVGQlFVRXNWMEZCVnl4RFFVRkRlRU1zYlVKQlFWb3NRMEZCWjBNMVJpeEpRVUZKTEVOQlFVTTVRaXhKUVVGeVF5eEpRVUUyUXl4RlFVRTNRenRCUVVORU96dEJRVU5FYTBzc1NVRkJRVUVzVjBGQlZ5eERRVUZEZUVNc2JVSkJRVm9zUTBGQlowTTFSaXhKUVVGSkxFTkJRVU01UWl4SlFVRnlReXhGUVVFeVF5OURMRWxCUVRORExFTkJRV2RFYVVzc1EwRkJhRVE3UVVGRFJEczdRVUZGUkN4TlFVRk5kME1zV1VGQldTeEhRVUZITEVsQlFVbDJSQ3haUVVGS0xFTkJRV2xDY2tVc1NVRkJha0lzUlVGQmRVSnBSU3hIUVVGMlFpeEZRVUUwUW0xRkxGZEJRVFZDTEVWQlFYbERhRVFzUTBGQmVrTXNRMEZCY2tJN1FVRkRRVUVzUlVGQlFVRXNRMEZCUXl4RFFVRkRUeXh0UWtGQlJpeERRVUZ6UWpOR0xFbEJRVWtzUTBGQlF6bENMRWxCUVROQ0xFbEJRVzFETUVvc1dVRkJia003UVVGRFFTeFRRVUZQUVN4WlFVRlFPMEZCUTBRc1EwRXZRa1E3TzBGQmFVTkJMRWxCUVUxTUxHMUNRVUZ0UWl4SFFVRkhMRk5CUVhSQ1FTeHRRa0ZCYzBJc1EwRkJRM1JKTEV0QlFVUXNSVUZCVVcxSExFTkJRVklzUlVGQlYyNUNMRWRCUVZnc1JVRkJaMEpxUlN4SlFVRm9RaXhGUVVGelFqTkVMRWRCUVhSQ0xFVkJRVGhDTzBGQlFVRXNLME5CUTBZeVJDeEpRVUZKTEVOQlFVTkhMRTlCUVV3c1NVRkJaMElzUlVGRVpEdEJRVUZCT3p0QlFVRkJPMEZCUTNoRUxIZEVRVUV3UlR0QlFVRkJPMEZCUVVFc1ZVRkJka1JETEdWQlFYVkVMR1ZCUVRkRWJFTXNTVUZCTmtRN1FVRkJRU3hWUVVGMFEyMURMRmxCUVhORExHVkJRWFJEUVN4WlFVRnpRenRCUVVONFJTeFZRVUZOYVVrc1YwRkJWeXhIUVVGSGFrMHNSMEZCUnl4RFFVRkRaMHdzVVVGQlNpeEhRVUZsZEU0c1IwRkJaaXhEUVVGdFFuRkhMR1ZCUVc1Q0xFVkJRMnhDTzBGQlEwVklMRkZCUVVGQkxGRkJRVkVzUlVGQlNTeEpRVVJrTzBGQlJVVkRMRkZCUVVGQkxGTkJRVk1zUlVGQlJ5eHRRa0ZCUTJoRExFbEJRVVE3UVVGQlFTeDVRMEZCTWtKclNDeERRVUZETEVOQlFVTlVMRkZCUVVZc1JVRkJNMElzYjBOQlFXbEZla2NzU1VGQmFrVTdRVUZCUVR0QlFVWmtMRTlCUkd0Q0xFTkJRWEJDTEVOQlJIZEZPenRCUVZONFJTeFZRVUZOY1Vjc1QwRkJUeXhIUVVGSGJFVXNXVUZCV1N4TFFVRkxMRTFCUVdwQ0xFZEJRMW9yUlN4RFFVRkRMRU5CUVVOVUxGRkJRVVlzUlVGRVdTeEhRVVZhZEVVc1dVRkJXU3hMUVVGTExFMUJRV3BDTEVkQlEwVTBSQ3hIUVVGSExFTkJRVU5OTEU5QlJFNDdRVUZCUVR0QlFVRkJMRkZCUlZFc1NVRkJTWEJKTEV0QlFVb3NiMFJCUVhORWEwVXNXVUZCZEVRc2NVTkJSbElzUTBGR1NqdEJRVXRCTEZWQlFVMXJTU3hWUVVGVkxFZEJRVWM3UVVGQlJYSkxMRkZCUVVGQkxFbEJRVWtzUlVGQlIydERMR1ZCUVZRN1FVRkJNRUp0UlN4UlFVRkJRU3hQUVVGUExFVkJRVkJCTzBGQlFURkNMRTlCUVc1Q08wRkJRMEYwUml4TlFVRkJRU3hMUVVGTExFTkJRVU01UkN4SlFVRk9MRU5CUVZkdFRTeHhRa0ZCY1VJc1EwRkJRMnhETEVOQlFVUXNSVUZCU1cxRUxGVkJRVW9zUlVGQlowSkVMRmRCUVdoQ0xFVkJRVFpDYWswc1IwRkJOMElzUTBGQmFFTTdRVUZEUVd0TUxFMUJRVUZCTEcxQ1FVRnRRaXhEUVVGRGRFa3NTMEZCUkN4RlFVRlJiVWNzUTBGQlVpeEZRVUZYYlVRc1ZVRkJXQ3hGUVVGMVFrUXNWMEZCZGtJc1JVRkJiME5xVFN4SFFVRndReXhEUVVGdVFqdEJRVU5FTzBGQmJFSjFSRHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQmJVSjZSQ3hEUVc1Q1JEdEJRWEZDUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlEwRXNTVUZCVFVNc1owSkJRV01zUjBGQlJ5eFRRVUZxUWtFc1kwRkJhVUlzUTBGQlEwa3NVMEZCUkN4RlFVRlpiVXNzVFVGQldpeEZRVUYxUWp0QlFVTTFReXhOUVVGTmFrc3NWVUZCVlN4SFFVRkhha01zVFVGQlRTeERRVUZEYzBJc1RVRkJVQ3hEUVVOcVFqdEJRVU5GV1N4SlFVRkJRU3hYUVVGWExFVkJRVWNzUTBGRWFFSTdRVUZGUlVNc1NVRkJRVUVzVFVGQlRTeEZRVUZSTEVOQlJtaENPMEZCUjBWRExFbEJRVUZCTEV0QlFVc3NSVUZCVXp0QlFVaG9RaXhIUVVScFFpeEZRVTFxUWpoS0xFMUJRVTBzUTBGQlEycExMRlZCVGxVc1EwRkJia0lzUTBGRU5FTTdPMEZCVlRWRFFTeEZRVUZCUVN4VlFVRlZMRU5CUVVNMFRDeFhRVUZZTEVkQlFYbENNMElzVFVGQlRTeERRVUZEWVN4dFFrRkJVQ3hQUVVGcFF5eFZRVUZxUXl4SFFVRTRReXhEUVVFNVF5eEhRVUZyUkN4RFFVRXpSVHRCUVVOQk9Vc3NSVUZCUVVFc1ZVRkJWU3hEUVVGRE5rd3NZVUZCV0N4SFFVRXlRalZDTEUxQlFVMHNRMEZCUTJFc2JVSkJRVkFzVDBGQmFVTXNXVUZCYWtNc1IwRkJaMFFzUTBGQmFFUXNSMEZCYjBRc1EwRkJMMFU3UVVGRlFXSXNSVUZCUVVFc1RVRkJUU3hEUVVGRE5rSXNXVUZCVUN4SFFVRnpRamRKTEU5QlFYUkNMRU5CUVRoQ0xGVkJRVUZITEVsQlFVa3NSVUZCU1R0QlFVTndRM0JFTEVsQlFVRkJMRlZCUVZVc1pVRkJVVzlFTEVsQlFVa3NRMEZCUXpKSkxGZEJRVXdzUjBGQmJVSkRMRTlCUVc1Q0xFTkJRVEpDTEVsQlFUTkNMRVZCUVdsRExFZEJRV3BETEVOQlFWSXNWMEZCVml4SFFVRnJSU3hEUVVGc1JUdEJRVU5FTEVkQlJrUTdRVUZKUVN4TlFVRk5kRXdzVTBGQlV5eEhRVUZITEVsQlFVbERMRk5CUVVvc1EwRkJZenRCUVVGRldDeEpRVUZCUVN4VlFVRlZMRVZCUVZaQkxGVkJRVVk3UVVGQlkxTXNTVUZCUVVFc1QwRkJUeXhGUVVGUVFUdEJRVUZrTEVkQlFXUXNRMEZCYkVJN1FVRkRRU3hUUVVGUFF5eFRRVUZUTEVOQlFVTkZMRk5CUVZZc1EwRkJiMEprTEZOQlFYQkNMRU5CUVZBN1FVRkRSQ3hEUVc1Q1JEczdRVUZ4UWtGcFN5eExRVUZMTEVOQlFVTnlTeXhqUVVGT0xFZEJRWFZDUVN4blFrRkJka0k3TzBGRGJrMUJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVUxMlF5eExRVUZITEVkQlFVY3NVMEZCVGtFc1IwRkJUU3hEUVVGRFF5eEpRVUZFTEVWQlFVOXJSU3hKUVVGUU8wRkJRVUU3TzBGQlFVRXNVMEZCWjBJc1EwRkJRV3hGTEVsQlFVa3NVMEZCU2l4SlFVRkJRU3hKUVVGSkxGZEJRVW9zTmtKQlFVRkJMRWxCUVVrc1EwRkJSVFpQTEU5QlFVNHNaMFZCUVdkQ00wc3NTVUZCYUVJc1RVRkJlVUkxUkN4alFVRlpMRU5CUVVOT0xFbEJRVVFzUlVGQlQydEZMRWxCUVZBc1EwRkJja1E3UVVGQlFTeERRVUZhT3p0QlFVVkJMRWxCUVUwelJDeE5RVUZKTEVkQlFVY3NVMEZCVUVFc1NVRkJUeXhEUVVGRFVDeEpRVUZFTzBGQlFVRXNVMEZCVlZjc1RVRkJUU3hEUVVGRFF5eEpRVUZRTEVOQlFWa3NRMEZCUVZvc1NVRkJTU3hUUVVGS0xFbEJRVUZCTEVsQlFVa3NWMEZCU2l4WlFVRkJRU3hKUVVGSkxFTkJRVVUyVHl4UFFVRk9MRXRCUVdsQ0xFVkJRVGRDTEVWQlFXbERlazRzU1VGQmFrTXNSMEZCZDBOclJTeEhRVUY0UXl4RFFVRTBReXhWUVVGREwwTXNSMEZCUkR0QlFVRkJMRmRCUVZOcVF5eGpRVUZaTEVOQlFVTk9MRWxCUVVRc1JVRkJUM1ZETEVkQlFWQXNRMEZCY2tJN1FVRkJRU3hIUVVFMVF5eERRVUZXTzBGQlFVRXNRMEZCWWpzN1FVRkhRVHRCUVVOQk8wRkJRMEU3T3p0QlFVTkJMRWxCUVUxcVF5eGpRVUZaTEVkQlFVY3NVMEZCWmtFc1dVRkJaU3hEUVVGRFRpeEpRVUZFTEVWQlFVOXJSU3hKUVVGUU8wRkJRVUVzVTBGQlowSjJSQ3hOUVVGTkxFTkJRVU56UWl4TlFVRlFMRU5CUVdNN1FVRkJSV2hETEVsQlFVRkJMRVZCUVVVc1JVRkJSMmxGTzBGQlFWQXNSMEZCWkN4RlFVRTJRbXhGTEVsQlFVa3NRMEZCUXpaUExFOUJRVXdzUTBGQllUTkxMRWxCUVdJc1EwRkJOMElzUTBGQmFFSTdRVUZCUVN4RFFVRnlRanM3UVVOYVFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hKUVVGTk5Fc3NWVUZCVlR0QlFVTmtMSE5DUVVGWmVrMHNSMEZCV2l4RlFVRnBRanRCUVVGQk96dEJRVU5tTEZOQlFVdEJMRWRCUVV3c1IwRkJWMEVzUjBGQldEdEJRVU5CTEZOQlFVdERMR05CUVV3c1IwRkJjMEozVFN4VlFVRlZMRU5CUVVONFRTeGpRVUZxUXp0QlFVVkJMRk5CUVV0RExFZEJRVXdzUjBGQlZ5eE5RVUZZTzBGQlEwUTdPMEZCVG1FN1FVRkJRVHRCUVVGQkxGZEJVV1FzWVVGQlNUSkNMRWxCUVVvc1JVRkJWVHRCUVVGRkxHRkJRVTh5U3l4TFFVRkJMRU5CUVZrc1MwRkJTM2hOTEVkQlFVd3NRMEZCVTBjc1ZVRkJja0lzUlVGQmFVTXdRaXhKUVVGcVF5eERRVUZRTzBGQlFTdERPMEZCVWpkRE8wRkJRVUU3UVVGQlFTeFhRVlZrTEdkQ1FVRlBPMEZCUVVVc1lVRkJUekpMTEUxQlFVRXNRMEZCWVN4TFFVRkxlRTBzUjBGQlRDeERRVUZUUnl4VlFVRjBRaXhEUVVGUU8wRkJRVEJETzBGQlZuSkRPenRCUVVGQk8wRkJRVUVzUjBGQmFFSTdRVUZoUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlEwRXNTVUZCVFVZc1owSkJRV01zUjBGQlJ5eFRRVUZxUWtFc1kwRkJhVUlzUTBGQlEwa3NVMEZCUkN4RlFVRlpReXhWUVVGYUxFVkJRVEpDTzBGQlEyaEVMRTFCUVUxRExGVkJRVlVzUjBGQlIycERMRTFCUVUwc1EwRkJRM05DTEUxQlFWQXNRMEZEYWtJN1FVRkRSVmtzU1VGQlFVRXNWMEZCVnl4RlFVRkhMRU5CUkdoQ08wRkJSVVZETEVsQlFVRkJMRTFCUVUwc1JVRkJVU3hEUVVab1FqdEJRVWRGUXl4SlFVRkJRU3hMUVVGTExFVkJRVk1zUTBGSWFFSTdRVUZKUlVNc1NVRkJRVUVzU1VGQlNTeEZRVUZWTEVOQlNtaENPMEZCUzBWRExFbEJRVUZCTEVkQlFVY3NSVUZCVnl4RFFVeG9RanRCUVUxRlF5eEpRVUZCUVN4UlFVRlJMRVZCUVUwc1EwRk9hRUk3UVVGUFJVTXNTVUZCUVVFc1NVRkJTU3hGUVVGVkxFTkJVR2hDTzBGQlVVVkRMRWxCUVVGQkxGZEJRVmNzUlVGQlJ6dEJRVkpvUWl4SFFVUnBRaXhGUVZkcVFsUXNWVUZCVlN4RFFVRkRReXhWUVZoTkxFTkJRVzVDTEVOQlJHZEVPenRCUVdkQ2FFUXNUVUZCVFdkSUxHVkJRV1VzUjBGQlIycElMRlZCUVZVc1EwRkJReXh6UWtGQlJDeERRVUZXTEVsQlFYTkRMR3RDUVVFNVJEczdRVUZGUVN4VlFVRlJhVWdzWlVGQlVqdEJRVU5CTEZOQlFVc3NaMEpCUVV3N1FVRkRSV2hJTEUxQlFVRkJMRlZCUVZVc1EwRkJRMnRJTEZkQlFWZ3NSMEZCZVVJc1EwRkJla0k3UVVGQk5FSTdPMEZCUXpsQ0xGTkJRVXNzV1VGQlREdEJRVU5GYkVnc1RVRkJRVUVzVlVGQlZTeERRVUZEYTBnc1YwRkJXQ3hIUVVGNVFpeERRVUY2UWp0QlFVRTBRanM3UVVGRE9VSXNVMEZCU3l4bFFVRk1PMEZCUTBWc1NDeE5RVUZCUVN4VlFVRlZMRU5CUVVOclNDeFhRVUZZTEVkQlFYbENMRU5CUVhwQ08wRkJRVFJDT3p0QlFVTTVRaXhUUVVGTExHRkJRVXc3UVVGRFJXeElMRTFCUVVGQkxGVkJRVlVzUTBGQlEydElMRmRCUVZnc1IwRkJlVUlzUTBGQmVrSTdRVUZCTkVJN08wRkJRemxDTEZOQlFVc3NhMEpCUVV3N1FVRkRSV3hJTEUxQlFVRkJMRlZCUVZVc1EwRkJRMnRJTEZkQlFWZ3NSMEZCZVVJc1EwRkJla0k3UVVGQk5FSTdPMEZCUXpsQ08wRkJRMFVzV1VGQlRTeEpRVUZKTTBnc1MwRkJTaXdyUTBGQmFVUjVTQ3hsUVVGcVJDeFJRVUZPTzBGQldrWXNSMEZzUW1kRU8wRkJhME5vUkRzN08wRkJRMEVzVFVGQlRYWkhMRTlCUVU4c1IwRkJSeXhGUVVGb1FqdEJRVVZCTEUxQlFVMURMRk5CUVZNc1IwRkJSeXhKUVVGSlF5eFRRVUZLTEVOQlFXTTdRVUZCUlZnc1NVRkJRVUVzVlVGQlZTeEZRVUZXUVN4VlFVRkdPMEZCUVdOVExFbEJRVUZCTEU5QlFVOHNSVUZCVUVFN1FVRkJaQ3hIUVVGa0xFTkJRV3hDTzBGQlEwRXNVMEZCVDBNc1UwRkJVeXhEUVVGRFJTeFRRVUZXTEVOQlFXOUNaQ3hUUVVGd1FpeERRVUZRTzBGQlEwUXNRMEYyUTBRN08wRkJlVU5CTDBJc1RVRkJUU3hEUVVGRE9FTXNZMEZCVUN4RFFVRnpRbkZNTEZWQlFYUkNMRVZCUVd0RExHZENRVUZzUXl4RlFVRnZSRHRCUVVOc1JIQk1MRVZCUVVGQkxFdEJRVXNzUlVGQlZYQkNMR2RDUVVSdFF6dEJRVVZzUkhGQ0xFVkJRVUZCTEZGQlFWRXNSVUZCVHl4TFFVWnRRenRCUVVkc1JFTXNSVUZCUVVFc1ZVRkJWU3hGUVVGTExFbEJTRzFETzBGQlNXeEVReXhGUVVGQlFTeFpRVUZaTEVWQlFVYzdRVUZLYlVNc1EwRkJjRVE3TzBGRGJFVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRGQwSTdRVUZEU1R0QlFVTTFRanRCUVVOQkxGTkJRVk1zUjBGQlJ5eEZRVUZGTEU5QlFVOHNaMEpCUVdkQ08wRkJRM0pETEVWQlFVVXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExHZENRVUZuUWl4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRExFVkJRVU03UVVGRE0wTXNRMEZCUXp0QlFVTkVPMEZCUTBFc1RVRkJUU3hQUVVGUExFZEJRVWNzUzBGQlNUdEJRVU53UWl4TlFVRk5MR05CUVdNc1IwRkJSeXhuUTBGQkswSTdRVUZEZEVRc1RVRkJUU3hYUVVGWExFZEJRVWNzVDBGQlRUdEJRVU14UWl4TlFVRk5MR05CUVdNc1IwRkJSeXhoUVVGWk8wRkJRMjVETzBGQlEwRTdRVUZEUVN4VFFVRlRMRXRCUVVzc1JVRkJSU3hIUVVGSExIbENRVUY1UWl4UFFVRlBMSE5FUVVGelJEdEJRVU42Unl4RlFVRkZMRTFCUVUwc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF5eFBRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJRenRCUVVOcVJDeEZRVUZGTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVVN1FVRkRhRUk3UVVGRFFUdEJRVU5CTEVWQlFVVXNSMEZCUnl4RFFVRkRMRkZCUVZFc1JVRkJSU3hEUVVGRExFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJWU3hKUVVGSkxFVkJRVVVzUjBGQlJ5eEZRVUZGTzBGQlEzQkZPMEZCUTBFc1NVRkJTU3hOUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMR05CUVdNc1JVRkJRenRCUVVOc1JEdEJRVU5CTEVsQlFVa3NTVUZCU1N4WFFVRlhMRWxCUVVrc1NVRkJTU3hGUVVGRk8wRkJRemRDTEUxQlFVMHNUVUZCVFN4SFFVRkhMRWRCUVVjc1YwRkJWeXhEUVVGRExFTkJRVU1zUlVGQlF6dEJRVU5vUXp0QlFVTkJMRTFCUVUwc1NVRkJTU3hIUVVGSExFbEJRVWtzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRVZCUVVVc1JVRkJRenRCUVVOMFF5eE5RVUZOTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFZEJRVWNzUlVGQlF6dEJRVU5vUXl4TlFVRk5MRTFCUVUwc1kwRkJZeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVsQlFVYzdRVUZETDBRc1RVRkJUU3hOUVVGTkxHTkJRV01zUjBGQlJ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1IwRkJSeXhKUVVGSkxFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4SlFVRkhPMEZCUXk5RU8wRkJRMEU3UVVGRFFTeE5RVUZOTEVsQlFVa3NZMEZCWXl4SlFVRkpMR05CUVdNc1JVRkJSVHRCUVVNMVF5eFJRVUZSTEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVTTdRVUZEYmtNN1FVRkRRVHRCUVVOQkxGRkJRVkVzU1VGQlNTeGpRVUZqTEVWQlFVVTdRVUZETlVJc1ZVRkJWU3hIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVc1QwRkJUeXhGUVVGRE8wRkJRMnBFTEZOQlFWTTdRVUZEVkN4UFFVRlBMRTFCUVUwN1FVRkRZanRCUVVOQkxGRkJRVkVzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SlFVRkpMRWRCUVVVN1FVRkRlRUlzVDBGQlR6dEJRVU5RTzBGQlEwRXNUVUZCVFN4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlJ6dEJRVU53UWl4TFFVRkxMRTFCUVUwc1NVRkJTU3hMUVVGTExFVkJRVVU3UVVGRGRFSXNUVUZCVFN4SFFVRkhMRU5CUVVNc1EwRkJReXc0UTBGQk9FTXNSVUZCUlN4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RlFVRkRPMEZCUXpsRkxFdEJRVXM3UVVGRFRDeEhRVUZITEVWQlFVTTdRVUZEU2p0QlFVTkJMRVZCUVVVc1QwRkJUeXhIUVVGSE8wRkJRMW9zUTBGQlF6dEJRVU5FTzBGQlEwRTdRVUZEUVN4VFFVRlRMRTFCUVUwc1JVRkJSU3hQUVVGUExIZEVRVUYzUkR0QlFVTm9SaXhGUVVGRkxFbEJRVWtzVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUlVGQlJTeEZRVUZGTEUxQlFVMHNSVUZCUXp0QlFVTjBSQ3hGUVVGRkxFbEJRVWtzVVVGQlVTeHBRa0ZCYVVJc1QwRkJUVHRCUVVOeVF5eEZRVUZGTEVsQlFVa3NTMEZCU3l4SFFVRkhMRTFCUVVzN1FVRkRia0k3UVVGRFFTeEZRVUZGTEVsQlFVa3NUMEZCVHl4RlFVRkZPMEZCUTJZc1NVRkJTU3hKUVVGSkxFOUJRVThzUTBGQlF5eEpRVUZKTEVsQlFVa3NTVUZCU1N4RlFVRkZPMEZCUXpsQ0xFMUJRVTBzVlVGQlZTeEhRVUZITEU5QlFVOHNRMEZCUXl4TFFVRkpPMEZCUXk5Q0xFdEJRVXM3UVVGRFRDeEpRVUZKTEVsQlFVa3NUMEZCVHl4RFFVRkRMRkZCUVZFc1NVRkJTU3hKUVVGSkxFVkJRVVU3UVVGRGJFTXNUVUZCVFN4UlFVRlJMRWRCUVVjc1QwRkJUeXhEUVVGRExGTkJRVkU3UVVGRGFrTXNTMEZCU3p0QlFVTk1MRWxCUVVrc1NVRkJTU3hQUVVGUExFTkJRVU1zUzBGQlN5eEpRVUZKTEVsQlFVa3NSVUZCUlR0QlFVTXZRaXhOUVVGTkxFdEJRVXNzUjBGQlJ5eExRVUZKTzBGQlEyeENMRXRCUVVzN1FVRkRUQ3hIUVVGSE8wRkJRMGc3UVVGRFFTeEZRVUZGTEVsQlFVazdRVUZEVGp0QlFVTkJMRWxCUVVrc1RVRkJUU3hOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZEZDBJc1YwRkJSU3hEUVVGRExGbEJRVmtzUTBGQlF5eFZRVUZWTEVWQlFVVXNSVUZCUlN4UlFVRlJMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVVzUzBGQlN5eEZRVUZGTEVWQlFVTTdRVUZET1VVN1FVRkRRU3hKUVVGSkxFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVlVzUjBGQlJ5eEZRVUZGTzBGQlF5OURMRTFCUVUwc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTI1RkxGRkJRVkVzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eEZRVUZETzBGQlEzUkRMRTlCUVU4c1RVRkJUU3hKUVVGSkxFdEJRVXNzUlVGQlJUdEJRVU40UWl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNiVVZCUVcxRkxFTkJRVU1zUlVGQlF6dEJRVU42Uml4UFFVRlBPMEZCUTFBc1MwRkJTeXhGUVVGRE8wRkJRMDQ3UVVGRFFTeEpRVUZKTEU5QlFVOHNSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkRja0lzUjBGQlJ5eERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZPMEZCUTJRc1NVRkJTU3hQUVVGUExFVkJRVVVzUzBGQlN5eEZRVUZGTEVOQlFVTXNSVUZCUlR0QlFVTjJRaXhIUVVGSE8wRkJRMGdzUTBGQlF6dEJRVU5FTzBGQlEwRXNXVUZCY1VJc1IwRkJSeXhQUVVGTk8wRkJRemxDTEZkQlFXOUNMRWRCUVVjN096czdPenM3UVVNM1IzWkNMRWxCUVUwd1NpeG5Ra0ZCWjBJc1IwRkJSeXhUUVVGdVFrRXNaMEpCUVcxQ0xFTkJRVU5ETEZsQlFVUXNSVUZCY1VNN1FVRkROVVFzVFVGQlNTeERRVUZETTBvc1ZVRkJRU3hEUVVGak1rb3NXVUZCWkN4RFFVRk1MRVZCUVd0RE8wRkJRMmhETEZWQlFVMHNTVUZCU1RkTkxFdEJRVW9zYVVSQlFXMUVOazBzV1VGQmJrUXNUMEZCVGp0QlFVTkVMRWRCU0RKRU96czdRVUZKTlVRc1RVRkJUVU1zVTBGQlV5eEhRVUZIUXl4SlFVRk5MRU5CUVVORExFMUJRVkFzUTBGQll6dEJRVUZGUXl4SlFVRkJRU3hKUVVGSkxFVkJRVWRLTzBGQlFWUXNSMEZCWkN4RFFVRnNRanM3UVVGRFFTeE5RVUZKUXl4VFFVRlRMRU5CUVVOSkxFdEJRV1FzUlVGQmNVSTdRVUZEYmtJc1ZVRkJUVW9zVTBGQlV5eERRVUZEU1N4TFFVRm9RanRCUVVORU96dEJRVkF5UkN4dlEwRkJia0pETEdOQlFXMUNPMEZCUVc1Q1FTeEpRVUZCUVN4alFVRnRRanRCUVVGQk96dEJRVk0xUkN4eFEwRkJkVUpCTEdOQlFYWkNMSEZEUVVGMVF6dEJRVUZzUXl4UlFVRk5ReXhSUVVGUkxITkNRVUZrT3p0QlFVTklMRkZCUVVsRExFOUJRVThzUTBGQlEwTXNSMEZCVWl4RFFVRlpSaXhSUVVGYUxFMUJRVEJDT1U4c1UwRkJPVUlzUlVGQmVVTTdRVUZEZGtNc1dVRkJUU3hKUVVGSk1FSXNTMEZCU2l4clEwRkJiME52VGl4UlFVRndReXgxUTBGQmVVVlFMRmxCUVhwRkxFVkJRVTQ3UVVGRFJEdEJRVU5HTzBGQlEwWXNRMEZrUkRzN1FVTkRRU3hKUVVGTlZTeFpRVUZaTEVkQlFVY3NVMEZCWmtFc1dVRkJaU3hEUVVGRFF5eFJRVUZFTEVWQlFXTTdRVUZEYWtNc1RVRkJUVU1zWlVGQlpTeGhRVUZOU2l4UFFVRlBMRU5CUVVORExFZEJRVklzUTBGQldVa3NTVUZCYkVJc2MwSkJRWEpDTzBGQlEwRmtMRVZCUVVGQkxHZENRVUZuUWl4RFFVRkRZU3hsUVVGRUxFVkJRV3RDTEdkQ1FVRnNRaXhEUVVGb1FpeERRVVpwUXpzN1FVRkxha01zVFVGQlRVVXNaVUZCWlN4aFFVRk5TQ3hSUVVGT0xITkNRVUZ5UWl4RFFVeHBRenM3UVVGUGFrTmFMRVZCUVVGQkxHZENRVUZuUWl4RFFVRkRaU3hsUVVGRUxFVkJRV3RDTEZGQlFXeENMRU5CUVdoQ0xFTkJVR2xETzBGQlZXcERPenRCUVVOQkxGTkJRVTl1VHl4SlFVRkJMRmRCUVdOblR5eFJRVUZrTEcxQ1FVRXJRa2dzVDBGQlR5eERRVUZEUXl4SFFVRlNMRU5CUVZsTkxFMUJRVE5ETEZkQlFWQTdRVUZEUkN4RFFWcEVPenM3T3pzN096dEJRMDFCTEVsQlFVMURMRmxCUVZrN1FVRkRhRUlzZDBKQlFWbE1MRkZCUVZvc1JVRkJjMEpOTEdGQlFYUkNMRVZCUVhGRE8wRkJRVUU3TzBGQlEyNURPMEZCUTBFN1FVRkRRU3hUUVVGTGVrNHNWVUZCVEN4SFFVRnJRbXRPTEZsQlFWa3NRMEZCUTBNc1VVRkJSQ3hEUVVFNVFpeERRVWh0UXp0QlFVMXVRenM3UVVGRFFTeFRRVUZMUVN4UlFVRk1MRWRCUVdkQ1FTeFJRVUZvUWp0QlFVTkJMRk5CUVVzeFN5eExRVUZNTEVkQlFXRXNTVUZCU1RaR0xFdEJRVW9zUTBGQlZTeEpRVUZXTEVWQlFXZENMRXRCUVV0MFNTeFZRVUZNTEVOQlFXZENlVU1zUzBGQmFFTXNRMEZCWWp0QlFVTkJMRk5CUVV0QkxFdEJRVXdzUTBGQlZ5dElMRTlCUVZnN1FVRkRRU3hUUVVGTGEwSXNXVUZCVEN4SFFVRnZRaXhKUVVGSmJrb3NXVUZCU2l4WFFVRnZRalJMTEZGQlFYQkNMQ3RDUVVGM1JDeExRVUZMTVVzc1MwRkJOMFFzUTBGQmNFSTdRVUZEUVN4VFFVRkxhMGNzUzBGQlRDeEhRVUZoTEVsQlFVbDNRaXhMUVVGS0xFTkJRVlZ6UkN4aFFVRldMRU5CUVdJN1FVRkRRU3hUUVVGTE9VVXNTMEZCVEN4RFFVRlhOa0lzVDBGQldDeERRVUZ0UWl4SlFVRnVRaXhGUVZwdFF6czdRVUZuUW01RExGTkJRVXQwUkN4UlFVRk1MRWRCUVdkQ0xFbEJRVWxFTEZkQlFVb3NRMEZCWjBJc1NVRkJhRUlzUTBGQmFFSTdRVUZEUVN4VFFVRkxjRW9zV1VGQlRDeEhRVUZ2UWl4SlFVRkpLMElzWlVGQlNpeERRVUZ2UWl4SlFVRndRaXhEUVVGd1FqdEJRVU5CTEZOQlFVczRUaXhOUVVGTUxFZEJRV01zUzBGQlN6Rk9MRlZCUVV3c1EwRkJaMEl3VGl4TlFVRTVRanRCUVVOQkxGTkJRVXR5UWl4UFFVRk1MRWRCUVdVc1NVRkJTVU1zVlVGQlNpeERRVUZsTEVsQlFXWXNRMEZCWmp0QlFVTkVMRWRCY2tKbE96czdRVUZCUVR0QlFVRkJPMEZCUVVFc1YwRjNRbWhDTEc5Q1FVRlhPMEZCUVVVc1lVRkJUeXhMUVVGTE4wb3NTMEZCV2p0QlFVRnRRaXhMUVhoQ2FFSTdPMEZCUVVFN1FVRkJRVHRCUVVGQkxGZEJNa0pvUWl4dlFrRkJWenRCUVVGRkxHRkJRVThzUzBGQlMydEhMRXRCUVZvN1FVRkJiVUk3UVVFelFtaENPMEZCUVVFN1FVRkJRU3hYUVRaQ2FFSXNiMEpCUVZjMVNTeEhRVUZZTEVWQlFXZENPMEZCUVVVc1lVRkJUMmxPTEU5QlFVOHNRMEZCUTBNc1IwRkJVaXhEUVVGWmJFNHNSMEZCV2l4RFFVRlFPMEZCUVhsQ08wRkJOMEl6UWp0QlFVRkJPMEZCUVVFc1YwRXJRbWhDTEhkQ1FVRmxRU3hIUVVGbUxFVkJRVzlDTzBGQlEyeENMRlZCUVUxdFFpeExRVUZMTEVkQlFVY3NTMEZCUzNsTkxGVkJRVXdzUTBGQlowSTFUaXhIUVVGb1FpeERRVUZrT3p0QlFVTkJMRlZCUVVsdFFpeExRVUZMTEV0QlFVdHFSQ3hUUVVGa0xFVkJRWGxDTzBGQlFVVXNZMEZCVFN4SlFVRkpNRUlzUzBGQlNpeHZRMEZCYzBOSkxFZEJRWFJETEZGQlFVNDdRVUZCYzBRN08wRkJRMnBHTEdGQlFVOXRRaXhMUVVGUU8wRkJRMFE3UVVGdVEyVTdRVUZCUVR0QlFVRkJMRmRCY1VOb1FpeDNRa0ZCWlcxSkxFdEJRV1lzUlVGQmMwSXZSU3hSUVVGMFFpeEZRVUZuUXp0QlFVTTVRaXhoUVVGUExFdEJRVXQxU0N4UlFVRk1MRWRCUVdkQ0swSXNZVUZCYUVJc1EwRkJPRUowU2l4UlFVRTVRaXhGUVVGM1EyOUNMRWxCUVhoRExFTkJRVFpETEZWQlFVRnJSQ3hEUVVGRE8wRkJRVUVzWlVGQlNVRXNRMEZCUXl4RFFVRkRWQ3hSUVVGR0xFOUJRV2xDYTBJc1MwRkJja0k3UVVGQlFTeFBRVUU1UXl4RFFVRlFPMEZCUTBRN1FVRjJRMlU3UVVGQlFUdEJRVUZCTEZkQmVVTm9RaXd5UTBGQmEwTXZSU3hSUVVGc1F5eEZRVUUwUXp0QlFVTXhReXhoUVVGUExFdEJRVXR2U0N4WlFVRk1MRU5CUVd0Q1F5eHBRa0ZCYkVJc1EwRkJiME55U0N4UlFVRndReXhGUVVFNFEzVktMR2RDUVVFNVF5eEZRVUZRTzBGQlEwUTdRVUV6UTJVN1FVRkJRVHRCUVVGQkxGZEJOa05vUWl4blEwRkJaMFE3UVVGQlFUczdRVUZCUVN4VlFVRXpRa01zUzBGQk1rSXNkVVZCUVc1Q0xHbENRVUZ0UWpzN1FVRkRPVU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUlVFc1ZVRkJTVUVzUzBGQlN5eExRVUZMTEdOQlFXUXNSVUZCT0VJN1FVRkROVUlzV1VGQlRYQkdMRTFCUVUwc1IwRkJSeXhGUVVGbUxFTkJSRFJDTzBGQlJ6VkNPenRCUVVOQmRrc3NVVUZCUVVFc1RVRkJUU3hEUVVGRE1Fd3NUVUZCVUN4RFFVRmpMRXRCUVV0blF5eFJRVUZNTEVkQlFXZENiRUlzVFVGQmFFSXNSVUZCWkN4RlFVRjNRM1JJTEU5QlFYaERMRU5CUVdkRUxGVkJRVUYxUml4RFFVRkRMRVZCUVVrN1FVRkRia1JCTEZWQlFVRkJMRU5CUVVNc1EwRkJRMjFHTEdkQ1FVRkdMRWRCUVhGQ01Vc3NUMEZCY2tJc1EwRkJOa0lzVlVGQlFVNHNRMEZCUXl4RlFVRkpPMEZCUTJoRExHZENRVUZKUVN4RFFVRkRMRU5CUVVOblFpeFRRVUZHTEVWQlFVb3NSVUZCYlVJN1FVRkRha0lzYTBKQlFVMXBTeXhMUVVGTExHRkJRVTF3Uml4RFFVRkRMRU5CUVVOVUxGRkJRVVlzUlVGQlRpeGpRVUZ6UW5CR0xFTkJRVU1zUTBGQlEyOUNMRTlCUVVZc1JVRkJkRUlzUTBGQldEdEJRVU5CTEd0Q1FVRk5ORVFzVDBGQlR5eEhRVUZIWVN4RFFVRkRMRU5CUVVOeFJpeGxRVUZHTEVOQlFXdENiRXdzUTBGQlF5eERRVUZEYjBJc1QwRkJSaXhGUVVGc1FpeEZRVUVyUW0xSUxGVkJRUzlDTEVWQlFXaENPMEZCUTBFc2EwSkJRVWtzUTBGQlEzWkVMRTlCUVV3c1JVRkJZMWNzVFVGQlRTeERRVUZETDBvc1NVRkJVQ3hEUVVGWkxFTkJRVU54VUN4TFFVRkVMRVZCUVZFc1JVRkJVaXhGUVVGWmFrd3NRMEZCUXl4RFFVRkRjVVlzV1VGQlJpeEZRVUZhTEVOQlFWb3NSVUZCWkN4TFFVTkxPMEZCUTBnc2IwSkJRVTA0Uml4VFFVRlRMRWRCUVVkdVJ5eFBRVUZQTEVOQlFVTkpMRkZCUVZJc1JVRkJiRUk3TzBGQlEwRXNiMEpCUVUxblJ5eGhRVUZoTEVkQlFVY3NTMEZCU1N4RFFVRkRReXhwUTBGQlRDeERRVUYxUTNKTUxFTkJRVU1zUTBGQlEyOUNMRTlCUVVZc1JVRkJka01zUTBGQmRFSTdPMEZCUTBFc2IwSkJRVTFyU3l4WlFVRlpMRWRCUVVkR0xHRkJRV0VzUTBGQlEyaE1MRWxCUVdRc1EwRkJiVUlzVlVGQlFXMU1MRkZCUVZFN1FVRkJRU3g1UWtGRE9VTXNTMEZCU1N4RFFVRkRReXhqUVVGTUxFTkJRVzlDVEN4VFFVRndRaXhGUVVFclFra3NVVUZCVVN4RFFVRkRia3NzVDBGQlZDeEZRVUV2UWl4RFFVUTRRenRCUVVGQkxHbENRVUV6UWl4RFFVRnlRanRCUVVkQk8wRkJRMlE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUTJNc2IwSkJRVWtzUTBGQlEydExMRmxCUVV3c1JVRkJiVUk3UVVGRGFrSXNkMEpCUVUwc1NVRkJTVEZQTEV0QlFVb3NhME5CUVc5RGQwOHNZVUZCWVN4RFFVRkRja3dzUjBGQlpDeERRVUZyUWl4VlFVRkJReXhEUVVGRE8wRkJRVUVzY1VOQlFVOXRUQ3hUUVVGUUxHTkJRVzlDYmt3c1EwRkJReXhEUVVGRGNrSXNTVUZCZEVJN1FVRkJRU3h0UWtGQmJrSXNSVUZCYVVRMlF5eEpRVUZxUkN4RFFVRnpSQ3hIUVVGMFJDeERRVUZ3UXl4clFrRkJjMGQ1U2l4TFFVRjBSeXhQUVVGT08wRkJRMFE3TzBGQlEwUXNiMEpCUVUxUkxGVkJRVlVzWVVGQlRVNHNVMEZCVGl4alFVRnRRa2NzV1VGQldTeERRVUZEYkVzc1QwRkJZaXhGUVVGdVFpeERRVUZvUWp0QlFVTkJkVVVzWjBKQlFVRkJMRTFCUVUwc1EwRkJReTlLTEVsQlFWQXNRMEZCV1N4RFFVRkRjVkFzUzBGQlJDeEZRVUZSVVN4VlFVRlNMRVZCUVc5Q2Vrd3NRMEZCUXl4RFFVRkRjVVlzV1VGQlJpeEZRVUZ3UWl4RFFVRmFPMEZCUTBRN1FVRkRSanRCUVVOR0xGZEJka0pFTzBGQmQwSkVMRk5CZWtKRUxFVkJTalJDT3p0QlFXZEROVUlzWlVGQlQwMHNUVUZCVUR0QlFVTkVMRTlCYWtORUxFMUJhME5MTEVsQlFVbHZSaXhMUVVGTExFdEJRVXNzYVVKQlFXUXNSVUZCYVVNN1FVRkRjRU03UVVGRFFUdEJRVU5CTEZsQlFVMVhMRkZCUVZFc1IwRkJSeXhMUVVOa1F5eHZRa0ZFWXl4RFFVTlBMR05CUkZBc1JVRkZaRFZNTEVkQlJtTXNRMEZGVml4VlFVRkJOa3dzUjBGQlJ5eEZRVUZKTzBGQlFVRXNOa0pCUTJkQ1FTeEhRVUZITEVOQlFVTXNRMEZCUkN4RFFVRklMRU5CUVU5d1VDeExRVUZRTEVOQlFXRXNTVUZCWWl4RFFVUm9RanRCUVVGQk8wRkJRVUVzWTBGRFNEaEtMRXRCUkVjN1FVRkJRU3hqUVVOSkwwVXNVVUZFU2pzN08wRkJSMVlzWTBGQlRUUkVMRk5CUVZNc1IwRkJSM2xITEVkQlFVY3NRMEZCUXl4RFFVRkVMRU5CUVhKQ08wRkJRMEVzWTBGQlRVTXNTMEZCU3l4SFFVRkhNVWNzVTBGQlV5eEhRVU51UWpWRUxGRkJRVkVzUTBGQlF6aElMRTlCUVZRc1EwRkJhVUlzWVVGQmFrSXNZMEZCY1VOc1JTeFRRVUZ5UXl4UFFVUnRRaXhIUVVWdVFqVkVMRkZCUmtvN08wRkJSMEVzWTBGQlRXUXNTVUZCU1N4SFFVRkhMRXRCUVVrc1EwRkJRMllzUzBGQlRDeERRVUZYYkVZc1IwRkJXQ3hEUVVGbEswY3NVVUZCWml4RFFVRmlPenRCUVVWQkxHTkJRVTB3UkN4WFFVRlhMRWRCUVVjc1MwRkJTU3hEUVVGRE5rUXNVVUZCVEN4SFFVRm5RblJQTEVkQlFXaENMRU5CUVc5Q09Fd3NTMEZCY0VJc1EwRkJjRUk3TzBGQlEwRXNZMEZCVFdoQ0xFMUJRVTBzUjBGQlIwd3NWMEZCVnl4RFFVRkRhVWNzWlVGQldpeERRVUUwUWpOS0xGRkJRVFZDTEVWQlFYTkRLMFFzVFVGQmNrUTdRVUZEUVN4cFFrRkJUenRCUVVOTU5Vc3NXVUZCUVVFc1JVRkJSU3hGUVVGVmExSXNSMEZCUnl4RFFVRkRMRU5CUVVRc1EwRkVWanRCUVVWTWJFb3NXVUZCUVVFc1IwRkJSeXhGUVVGVExFTkJRVU5yU2l4SFFVRkhMRU5CUVVNc1EwRkJSQ3hEUVVGS0xFTkJSbEE3UVVGSFRHeEpMRmxCUVVGQkxGTkJRVk1zUlVGQlIydEpMRWRCUVVjc1EwRkJReXhEUVVGRUxFTkJTRlk3UVVGSlRIUkdMRmxCUVVGQkxFdEJRVXNzUlVGQlQwRXNTMEZLVUR0QlFVdE1NMGdzV1VGQlFVRXNTVUZCU1N4RlFVRlJjMGNzVjBGQlZ5eERRVUZETmtjc1YwRkJXaXhGUVV4UU8wRkJUVXhETEZsQlFVRkJMRTFCUVUwc1JVRkJUU3hEUVVGRFJpeExRVUZFTEVOQlRsQTdRVUZQVEc1TkxGbEJRVUZCTEV0QlFVc3NSVUZCVHl4RFFVRkRaU3hKUVVGRUxFTkJVRkE3UVVGUlREWkZMRmxCUVVGQkxFMUJRVTBzUlVGQlRrRTdRVUZTU3l4WFFVRlFPMEZCVlVRc1UwRjJRbU1zUTBGQmFrSTdRVUYzUWtFc1dVRkJTVGRMTEVsQlFVa3NSMEZCUnl4RlFVRllPMEZCUTBFc1dVRkJTWFZTTEZWQlFWVXNSMEZCUnl4RlFVRnFRaXhEUVRWQ2IwTTdPMEZCSzBKd1EwNHNVVUZCUVVFc1VVRkJVU3hEUVVGRGNFd3NUMEZCVkN4RFFVRnBRaXhWUVVGRE1FTXNTVUZCUkN4RlFVRlBkRUlzUzBGQlVDeEZRVUZwUWp0QlFVTm9ReXhqUVVGSkxFTkJRVU56UWl4SlFVRkpMRU5CUVVOVkxGTkJRVllzUlVGQmNVSTdRVUZEYmtKMFNTeFpRVUZCUVN4TlFVRk5MRU5CUVVOelFpeE5RVUZRTEVOQlFXTnFReXhKUVVGa0xFVkJRVzlDZFVrc1NVRkJjRUk3UVVGRFJDeFhRVVpFTEUxQlIwczdRVUZEU0N4blFrRkJTV2xLTEZGQlFWRXNSMEZCUnl4SlFVRkpjRXNzVVVGQlNpeERRVUZoY0Vnc1NVRkJZaXhGUVVGdFFpeEpRVUZ1UWl4RlFVRjVRaXhWUVVGNlFpeERRVUZtTzBGQlEwRjNVaXhaUVVGQlFTeFJRVUZSTEVOQlFVTndTaXhaUVVGVUxFTkJRWE5DY0Vrc1NVRkJkRUlzUlVGQk5FSjFTU3hKUVVGSkxFTkJRVU5WTEZOQlFXcERMRVZCUVRSRExGVkJRVk5ETEVkQlFWUXNSVUZCWTNoRUxFbEJRV1FzUlVGQmIwSTdRVUZET1VRc2EwSkJRVWwzUkN4SFFVRktMRVZCUVZNc1RVRkJUU3hKUVVGSkwwY3NTMEZCU2l3d1FrRkJORUp2Unl4SlFVRkpMRU5CUVVOVkxGTkJRV3BETEdkQ1FVRm5SRU1zUjBGQmFFUXNSVUZCVGl4RFFVRlVMRXRCUTBzN1FVRkRTSEZKTEdkQ1FVRkJRU3hWUVVGVkxFTkJRVU53VVN4SlFVRllMRU5CUVdkQ2IwZ3NTVUZCYUVJN08wRkJRMEVzYjBKQlFVazNReXhKUVVGSkxFTkJRVU5xUWl4UlFVRlVMRVZCUVcxQ08wRkJRMnBDYVVJc2EwSkJRVUZCTEVsQlFVa3NRMEZCUTJwQ0xGRkJRVXdzUTBGQlkzUkVMRWxCUVdRc1EwRkJiVUp2U0N4SlFVRnVRanRCUVVORUxHbENRVVpFTEUxQlIwczdRVUZEU0RkRExHdENRVUZCUVN4SlFVRkpMRU5CUVVOcVFpeFJRVUZNTEVkQlFXZENMRU5CUVVNNFJDeEpRVUZFTEVOQlFXaENPMEZCUTBRN1FVRkRSanRCUVVOR0xHRkJXRVE3UVVGWlJEdEJRVU5HTEZOQmJrSkVPenRCUVhGQ1FTeFpRVUZOYTBvc1ZVRkJWU3hIUVVGSExGTkJRV0pCTEZWQlFXRXNRMEZCUXpOS0xFMUJRVVFzUlVGQlV6UktMRTFCUVZRc1JVRkJiMEk3UVVGQlFUczdRVUZEY2tNc05FSkJRVUUxU2l4TlFVRk5MRU5CUVVOM1NpeE5RVUZRTEVWQlFXTnVVU3hKUVVGa0xEUkRRVUZ6UW5WUkxFMUJRVTBzUTBGQlEwb3NUVUZCTjBJN08wRkJRMEVzZVVKQlFVRjRTaXhOUVVGTkxFTkJRVU5ITEVkQlFWQXNSVUZCVnpsSExFbEJRVmdzZVVOQlFXMUNkVkVzVFVGQlRTeERRVUZEZWtvc1IwRkJNVUk3TzBGQlEwRXNNa0pCUVVGSUxFMUJRVTBzUTBGQlF6ZERMRXRCUVZBc1JVRkJZVGxFTEVsQlFXSXNNa05CUVhGQ2RWRXNUVUZCVFN4RFFVRkRlazBzUzBGQk5VSTdRVUZEUkN4VFFVcEVMRU5CY0VSdlF6czdPMEZCTWtSd1EzTk5MRkZCUVVGQkxGVkJRVlVzUTBGQlF6Rk1MRTlCUVZnc1EwRkJiVUlzVlVGQlFVZ3NTVUZCU1N4RlFVRkpPMEZCUTNwQ0xHTkJRVTA0VEN4UlFVRlJMRWRCUVVjc1NVRkJTWEJMTEZGQlFVb3NRMEZCWVhCSUxFbEJRV0lzUlVGQmJVSXNTVUZCYmtJc1JVRkJlVUlzVlVGQmVrSXNRMEZCYWtJN1FVRkRRWGRTTEZWQlFVRkJMRkZCUVZFc1EwRkJRMjVKTEZWQlFWUXNRMEZCYjBKeVNpeEpRVUZ3UWl4RlFVRXdRakJHTEVsQlFURkNMRVZCUVdkRExGVkJRVU4zUkN4SFFVRkVMRVZCUVUxRExFMUJRVTRzUlVGQmFVSTdRVUZETDBNc1owSkJRVWxFTEVkQlFVb3NSVUZCVXl4TlFVRk5MRWxCUVVrdlJ5eExRVUZLTEhORFFVRjNRM1ZFTEVsQlFVa3NRMEZCUTNwR0xFVkJRVGRETEhkQ1FVRk9PenRCUVVWVUxHZENRVUZKYTBvc1RVRkJTaXhGUVVGWk8wRkJRMVk3UVVGRVZTd3lSRUZGVTNwRUxFbEJRVWtzUTBGQlExUXNTMEZHWkR0QlFVRkJPenRCUVVGQk8wRkJSVllzYjBWQlFTdENPMEZCUVVFc2MwSkJRWEJDWlN4SlFVRnZRanM3UVVGRE4wSTdRVUZEWkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVVZqTEhOQ1FVRk5Na3dzZVVKQlFYbENMRWRCUVVjelRDeEpRVUZKTEVOQlFVTkhMRTlCUVV3c1NVRkJaMEpJTEVsQlFVa3NRMEZCUTBjc1QwRkJUQ3hEUVVGaFZTeE5RVUZpTEVOQlFXOUNMRlZCUVVFclN5eFBRVUZQTzBGQlFVRXNNa0pCUXpORlFTeFBRVUZQTEVOQlFVTjJUQ3haUVVGU0xFdEJRWGxDTEUxQlFYcENMRWxCUVcxRFdDeEpRVUZKTEVOQlFVTjFReXhIUVVGTUxFTkJRVk5tTEU5QlFWUXNWMEZCYjBKNFFpeEpRVUZKTEVOQlFVTnRSeXhMUVVGNlFpeGpRVUZyUXl0R0xFOUJRVThzUTBGQlEwTXNVMEZCTVVNc1RVRkJNRVFzUTBGRWJFSTdRVUZCUVN4dFFrRkJNMElzUlVGRkwwTjJUU3hIUVVZclF5eERRVVV6UXl4VlFVRkJlVU1zUTBGQlF6dEJRVUZCTERKQ1FVRkpRU3hEUVVGRExFTkJRVU0zUkN4SlFVRk9PMEZCUVVFc2JVSkJSakJETEVOQlFXeEVMRU5CVmpaQ096dEJRV2RDTjBJN1FVRkRaRHRCUVVOQk96dEJRV3hDTWtNc1owVkJiVUpJZVU0c2VVSkJRWGxDTEVsQlFVa3NSVUZ1UWpGQ08wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJMREJDUVcxQ2JFSkhMRmRCYmtKclFqdEJRVzlDTTBJc01FSkJRVTEyVUN4SFFVRkhMR0ZCUVUxdFJDeEpRVUZKTEVOQlFVTnRSeXhMUVVGWUxHTkJRVzlDYVVjc1YwRkJjRUlzUTBGQlZDeERRWEJDTWtJN08wRkJjMEl6UWl3d1FrRkJUVU1zVjBGQlZ5eEhRVUZITlVrc1RVRkJUU3hEUVVGRE1VVXNVVUZCVUN4RFFVRm5RbXRDTEVsQlFXaENMRU5CUVhGQ0xGVkJRVUZ4VFN4RFFVRkRPMEZCUVVFc0swSkJRVWxCTEVOQlFVTXNRMEZCUXk5S0xFZEJRVVlzUTBGQlRYUkRMRWxCUVU0c1EwRkJWeXhWUVVGQk1VWXNSVUZCUlR0QlFVRkJMR2xEUVVGSlFTeEZRVUZGTEV0QlFVdHpReXhIUVVGWU8wRkJRVUVzZVVKQlFXSXNRMEZCU2p0QlFVRkJMSFZDUVVGMFFpeERRVUZ3UWpzN1FVRkRRU3d3UWtGQlNYZFFMRmRCUVVvc1JVRkJhVUk3UVVGRFpqdEJRVU5CVGl4M1FrRkJRVUVzVlVGQlZTeERRVUZETDB3c1NVRkJSQ3hGUVVGUGNVMHNWMEZCVUN4RFFVRldPMEZCUTBFMVNTeDNRa0ZCUVVFc1RVRkJUU3hEUVVGRE1VVXNVVUZCVUN4RFFVRm5RbmRPTEUxQlFXaENMRU5CUVhWQ09Va3NUVUZCVFN4RFFVRkRNVVVzVVVGQlVDeERRVUZuUW5sT0xGTkJRV2hDTEVOQlFUQkNMRlZCUVVORExFTkJRVVE3UVVGQlFTeHBRMEZCVDBFc1EwRkJReXhMUVVGTFNpeFhRVUZpTzBGQlFVRXNlVUpCUVRGQ0xFTkJRWFpDTEVWQlFUUkZMRU5CUVRWRk8wRkJRMFE3UVVFelFqQkNPenRCUVcxQ04wSXNNa1ZCUVRKRU8wRkJRVUU3UVVGVE1VUTdRVUUxUWpSQ08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUUyUWpsQ0xHbENRUzlDVXpzN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFXdERWaXhyUWtGQlNYSk5MRWxCUVVrc1EwRkJRMjFITEV0QlFVd3NTMEZCWlRGRExFMUJRVTBzUTBGQlF6QkRMRXRCUVRGQ0xFVkJRV2xETzBGQlF5OUNPMEZCUTBFN1FVRkRRVHRCUVVOQmJrY3NaMEpCUVVGQkxFbEJRVWtzUTBGQlF6Qk5MRkZCUVV3c1IwRkJaMElzU1VGQmFFSXNRMEZLSzBJN08wRkJUeTlDTEc5Q1FVRkpha29zVFVGQlRTeERRVUZETVVVc1VVRkJVQ3hEUVVGblFpOURMRTFCUVdoQ0xFdEJRVEpDTEVOQlFUTkNMRWxCUVdkRFowVXNTVUZCU1N4RFFVRkRha0lzVVVGQlRDeExRVUZyUW1oRkxGTkJRWFJFTEVWQlFXbEZPMEZCUXk5RVoxSXNhMEpCUVVGQkxGVkJRVlVzUTBGQlEzUkpMRTFCUVVRc1JVRkJVM3BFTEVsQlFWUXNRMEZCVml4RFFVUXJSRHM3UVVGSEwwUXNjMEpCUVVsNVJDeE5RVUZOTEVOQlFVTXhSU3hSUVVGUUxFTkJRV2RDTDBNc1RVRkJhRUlzUzBGQk1rSXNRMEZCTDBJc1JVRkJhME41U0N4TlFVRk5MRU5CUVVNeFJTeFJRVUZRTEVkQlFXdENhVUlzU1VGQlNTeERRVUZEYWtJc1VVRkJka0lzUTBGQmJFTXNTMEZEU3p0QlFVRkZPMEZCUTB3d1JTeHZRa0ZCUVVFc1RVRkJUU3hEUVVGRE1VVXNVVUZCVUN4RFFVRm5RbmRPTEUxQlFXaENMRU5CUVhWQ09Va3NUVUZCVFN4RFFVRkRNVVVzVVVGQlVDeERRVUZuUW5sT0xGTkJRV2hDTEVOQlFUQkNMRlZCUVVORExFTkJRVVE3UVVGQlFTdzJRa0ZCVDBFc1EwRkJReXhMUVVGTGVrMHNTVUZCWWp0QlFVRkJMSEZDUVVFeFFpeERRVUYyUWl4RlFVRnhSU3hEUVVGeVJUdEJRVU5FTzBGQlEwWTdRVUZEUmp0QlFVTkdPMEZCUTBZc1YwRjBSRVE3UVVGMVJFUXNVMEY2UkVRN1FVRXlSRUVzWlVGQlR6RkdMRWxCUVZBN1FVRkRSQ3hQUVhaSVNTeE5RWGRJUVN4TlFVRk5MRWxCUVVsdFF5eExRVUZLTERSQ1FVRTRRbTFQTEV0QlFUbENMSGxDUVVGT08wRkJRMDQ3UVVGb1RtVTdPMEZCUVVFN1FVRkJRU3hIUVVGc1FqczdPenNpZlE9PVxuIiwiaW1wb3J0IHsgT3JnYW5pemF0aW9uIH0gZnJvbSAnQGxpcXVpZC1sYWJzL29yZ3MtbW9kZWwnXG5cbmNvbnN0IG5hbWVTb3J0ZXIgPSAobmFtZSkgPT4gKGEsIGIpID0+IGFbbmFtZV0udG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGJbbmFtZV0udG9Mb3dlckNhc2UoKSlcblxuY29uc3QgZ2VuRG9jID0gKGRhdGFQYXRoLCBzdGFmZlBhdGgpID0+IHtcbiAgY29uc3Qgb3JnID0gbmV3IE9yZ2FuaXphdGlvbihkYXRhUGF0aCwgc3RhZmZQYXRoKVxuXG4gIGNvbnN0IGNvbXBhbnlSb2xlcyA9IG9yZy5vcmdTdHJ1Y3R1cmUuZ2V0Tm9kZXMoKS5yZWR1Y2UoKGFjYywgbm9kZSkgPT4ge1xuICAgIGlmICghbm9kZS5pbXBsaWVkKSB7XG4gICAgICBhY2MucHVzaChub2RlLm5hbWUpXG4gICAgfVxuICAgIC8qIGVsc2UgeyAvLyBERUJVR1xuICAgICAgY29uc29sZS5lcnJvcihgc2tpcHBpbmcgcm9sZSAke25vZGUubmFtZX1gKVxuICAgIH0gKi9cbiAgICByZXR1cm4gYWNjXG4gIH0sIFtdKVxuICBjb21wYW55Um9sZXMuc29ydCgoYSwgYikgPT4gYS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi50b0xvd2VyQ2FzZSgpKSlcbiAgLy8gY29uc29sZS5lcnJvcihjb21wYW55Um9sZXMpIC8vIERFQlVHXG5cbiAgY29uc3QgZ2V0Um9sZSA9IChyb2xlTmFtZSkgPT5cbiAgICBvcmcucm9sZXMuZ2V0KHJvbGVOYW1lLCB7XG4gICAgICByZXF1aXJlZCAgOiB0cnVlLFxuICAgICAgZXJyTXNnR2VuIDogKG5hbWUpID0+IGBSb2xlICcke25hbWV9JyBkZWZpbmVkIGluIG9yZ2FuaXphdGlvbiBzdHJ1Y3R1cmUgaXMgbm90IGRlZmluZWQuYFxuICAgIH0pXG5cbiAgY29uc3QgcHJvY2Vzc0ltcGxpZWRSb2xlcyA9IChyb2xlLCBkdXRpZXMpID0+IHtcbiAgICBmb3IgKGNvbnN0IHsgbmFtZTogaW1wTmFtZSB9IG9mIHJvbGUuaW1wbGllcyB8fCBbXSkge1xuICAgICAgY29uc3QgaW1wUm9sZSA9IGdldFJvbGUoaW1wTmFtZSlcbiAgICAgIGR1dGllcyA9IGR1dGllcy5jb25jYXQoaW1wUm9sZS5kdXRpZXMgfHwgW10pXG5cbiAgICAgIGR1dGllcyA9IHByb2Nlc3NJbXBsaWVkUm9sZXMoaW1wUm9sZSwgZHV0aWVzKVxuICAgIH1cblxuICAgIHJldHVybiBkdXRpZXNcbiAgfVxuXG4gIGNvbnN0IHNiID0gW11cblxuICAvLyBOb3RlOiB3ZSBleHBlY3QgZWFjaCBsaW5lIHRvIGJlIHRlcm1pbmF0ZWQgd2l0aCBhICdcXG4nIHdoZW4gb3V0cHV0LCBzbyB0aGUgZW5kaW5nICdcXG4nIGhhcyB0aGUgZWZmZWN0IG9mIGFkZGluZyBhblxuICAvLyBlbXB0eSBsaW5lLlxuICBzYi5wdXNoKCcjIENvbXBhbnkgSm9icyBSZWZlcmVuY2VcXG4nKVxuXG4gIHNiLnB1c2goJyMjIFB1cnBvc2UgYW5kIHNjb3BlXFxuJylcbiAgc2IucHVzaCgnSGVyZSB3ZSBmaW5kIGFsbCBDb21wYW55IGpvYiBkZXNjcmlwdGlvbnMuXFxuJylcblxuICBzYi5wdXNoKCcjIyBKb2IgZGVzY3JpcHRpb25zXFxuJylcbiAgZm9yIChjb25zdCByb2xlTmFtZSBvZiBjb21wYW55Um9sZXMpIHtcbiAgICBjb25zdCByb2xlID0gZ2V0Um9sZShyb2xlTmFtZSlcblxuICAgIHNiLnB1c2goYCMjIyAke3JvbGUubmFtZX1cXG5gKVxuICAgIHNiLnB1c2goYCR7cm9sZS5kZXNjcmlwdGlvbn1cXG5gKVxuXG4gICAgbGV0IGR1dGllcyA9IHJvbGUuZHV0aWVzIHx8IFtdXG4gICAgZHV0aWVzID0gcHJvY2Vzc0ltcGxpZWRSb2xlcyhyb2xlLCBkdXRpZXMpXG5cbiAgICBpZiAoZHV0aWVzKSB7XG4gICAgICBjb25zdCBvcmlnQ291bnQgPSBkdXRpZXMubGVuZ3RoXG4gICAgICBkdXRpZXMuc2xpY2UoKS5yZXZlcnNlKCkuZm9yRWFjaCgoZHV0eSwgckkpID0+IHtcbiAgICAgICAgY29uc3QgZXhwZWN0SSA9IG9yaWdDb3VudCAtIHJJIC0gMVxuICAgICAgICBjb25zdCBmb3VuZEkgPSBkdXRpZXMuZmluZEluZGV4KHRkID0+IHRkLmRlc2NyaXB0aW9uID09PSBkdXR5LmRlc2NyaXB0aW9uKVxuICAgICAgICBpZiAoZXhwZWN0SSAhPT0gZm91bmRJKSB7XG4gICAgICAgICAgZHV0aWVzLnNwbGljZShleHBlY3RJLCAxKVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBzYi5wdXNoKCdEdXRpZXM6JylcbiAgICAgIGZvciAoY29uc3QgZHV0eSBvZiBkdXRpZXMgfHwgW10pIHtcbiAgICAgICAgc2IucHVzaChgKiAke2R1dHkuZGVzY3JpcHRpb259YClcbiAgICAgIH1cbiAgICAgIHNiLnB1c2goJycpXG4gICAgfVxuXG4gICAgY29uc3Qgc3RhZmZJblJvbGUgPSBvcmcucm9sZXMuZ2V0U3RhZmZJblJvbGUocm9sZS5uYW1lKS5zb3J0KG5hbWVTb3J0ZXIoJ2ZhbWlseU5hbWUnKSlcblxuICAgIGNvbnN0IGhhc01lbWJlcnMgPSBzdGFmZkluUm9sZSAmJiBzdGFmZkluUm9sZS5sZW5ndGggPiAwXG5cbiAgICBpZiAocm9sZS5zaW5ndWxhcikge1xuICAgICAgY29uc3Qgc3RhZmYgPSBzdGFmZkluUm9sZVswXVxuICAgICAgLy8gVE9ETzogY2hlY2sgdGhhdCB3ZSBkb24ndCBoYXZlIG11bHRpcGxlcy5cbiAgICAgIGhhc01lbWJlcnNcbiAgICAgICAgPyBzYi5wdXNoKGAke3N0YWZmLmZhbWlseU5hbWV9LCAke3N0YWZmLmdpdmVuTmFtZX0gXyR7c3RhZmYuZW1haWx9XyBpcyB0aGUgY3VycmVudCAke3JvbGUubmFtZX1cXG5gKVxuICAgICAgICA6IHNiLnB1c2goJ18qVGhpcyBwb3NpdGlvbiBpcyBjdXJyZW50bHkgdmFjYW50LipfXFxuJylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBzYi5wdXNoKCcjIyMjIE1lbWJlcnNcXG4nKVxuXG4gICAgICBpZiAoaGFzTWVtYmVycykge1xuICAgICAgICBmb3IgKGNvbnN0IHN0YWZmIG9mIHN0YWZmSW5Sb2xlKSB7XG4gICAgICAgICAgc2IucHVzaChgKiAke3N0YWZmLmZhbWlseU5hbWV9LCAke3N0YWZmLmdpdmVuTmFtZX0gXyR7c3RhZmYuZW1haWx9X2ApXG4gICAgICAgIH1cbiAgICAgICAgc2IucHVzaCgnJylcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzYi5wdXNoKCdfKk5PTkUqX1xcbicpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2IucHVzaCgnIyMgRGVzaWduYXRpb25zXFxuJylcblxuICBjb25zdCBkZXNpZ25hdGlvbnNSZWR1Y2VyID0gKGRlc2lnbmF0aW9ucywgcm9sZSkgPT4ge1xuICAgIGlmIChyb2xlLmRlc2lnbmF0ZWQpIHtcbiAgICAgIGRlc2lnbmF0aW9ucy5wdXNoKHJvbGUpXG4gICAgfVxuICAgIHJldHVybiBkZXNpZ25hdGlvbnNcbiAgfVxuXG4gIGZvciAoY29uc3Qgcm9sZSBvZiBvcmcucm9sZXMubGlzdCgpLnJlZHVjZShkZXNpZ25hdGlvbnNSZWR1Y2VyLCBbXSkuc29ydChuYW1lU29ydGVyKCduYW1lJykpKSB7XG4gICAgc2IucHVzaChgIyMjICR7cm9sZS5uYW1lfVxcbmApXG4gICAgc2IucHVzaChgJHtyb2xlLmRlc2NyaXB0aW9ufVxcbmApXG5cbiAgICBzYi5wdXNoKCcjIyMjIE1lbWJlcnNcXG4nKVxuXG4gICAgY29uc3Qgc3RhZmZJblJvbGUgPSBvcmcucm9sZXMuZ2V0U3RhZmZJblJvbGUocm9sZS5uYW1lKS5zb3J0KG5hbWVTb3J0ZXIoJ2ZhbWlseU5hbWUnKSlcblxuICAgIGlmIChzdGFmZkluUm9sZSAmJiBzdGFmZkluUm9sZS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN0YWZmIG9mIHN0YWZmSW5Sb2xlKSB7XG4gICAgICAgIHNiLnB1c2goYCogJHtzdGFmZi5mYW1pbHlOYW1lfSwgJHtzdGFmZi5naXZlbk5hbWV9IGFzICR7c3RhZmYucm9sZXNbMF0ubmFtZX0gXyR7c3RhZmYuZW1haWx9X2ApXG4gICAgICB9XG4gICAgICBzYi5wdXNoKCcnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNiLnB1c2goJ18qTk9ORSpfXFxuJylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2Jcbn1cblxuZXhwb3J0IHsgZ2VuRG9jIH1cbiIsImltcG9ydCB7IGdlbkRvYyB9IGZyb20gJy4vZ2VuLWRvYydcblxuLy8gVE9ETzogdGhlIHVzZSBvZiBhbiAnaW5kZXgnIGZpbGUgaXMgYSBsaXR0bGUgbWlzbGVhZGluZyBpbiB0aGlzIGNhc2UuIFdlIHdhbnQgdG8gYnVpbGQgYSB0b29sLCBub3QgYSAnYnVuZGxlJy4gV2Ugd291bGQgbGlrZSB0byB1cGRhdGUgdGhlIGNhdGFseXN0LXNjcmlwdHMgKHdoaWNoIG5lZWQgdG8gYmUgcmV3b3JrZWQpIHRvIGJlIGEgYml0IG1vcmUgZmxleGlibGUuXG5cbmZvciAoY29uc3QgbGluZSBvZiBnZW5Eb2MoLi4ucHJvY2Vzcy5hcmd2LnNsaWNlKDIpKSkge1xuICBjb25zb2xlLmxvZyhsaW5lKVxufVxuIl0sIm5hbWVzIjpbIm5hbWVTb3J0ZXIiLCJuYW1lIiwiYSIsImIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUNvbXBhcmUiLCJnZW5Eb2MiLCJkYXRhUGF0aCIsInN0YWZmUGF0aCIsIm9yZyIsIk9yZ2FuaXphdGlvbiIsImNvbXBhbnlSb2xlcyIsIm9yZ1N0cnVjdHVyZSIsImdldE5vZGVzIiwicmVkdWNlIiwiYWNjIiwibm9kZSIsImltcGxpZWQiLCJwdXNoIiwic29ydCIsImdldFJvbGUiLCJyb2xlTmFtZSIsInJvbGVzIiwiZ2V0IiwicmVxdWlyZWQiLCJlcnJNc2dHZW4iLCJwcm9jZXNzSW1wbGllZFJvbGVzIiwicm9sZSIsImR1dGllcyIsImltcGxpZXMiLCJpbXBOYW1lIiwiaW1wUm9sZSIsImNvbmNhdCIsInNiIiwiZGVzY3JpcHRpb24iLCJvcmlnQ291bnQiLCJsZW5ndGgiLCJzbGljZSIsInJldmVyc2UiLCJmb3JFYWNoIiwiZHV0eSIsInJJIiwiZXhwZWN0SSIsImZvdW5kSSIsImZpbmRJbmRleCIsInRkIiwic3BsaWNlIiwic3RhZmZJblJvbGUiLCJnZXRTdGFmZkluUm9sZSIsImhhc01lbWJlcnMiLCJzaW5ndWxhciIsInN0YWZmIiwiZmFtaWx5TmFtZSIsImdpdmVuTmFtZSIsImVtYWlsIiwiZGVzaWduYXRpb25zUmVkdWNlciIsImRlc2lnbmF0aW9ucyIsImRlc2lnbmF0ZWQiLCJsaXN0IiwicHJvY2VzcyIsImFyZ3YiLCJsaW5lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBUyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3JDLEVBQUUsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ3hEO0FBQ0EsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2RCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckIsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFDRDtBQUNBLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQztBQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUseUJBQXlCLEdBQUcsSUFBSTs7Ozs7O0FDVDVFLFNBQVMsa0JBQWtCLENBQUMsR0FBRyxFQUFFO0FBQ2pDLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUNEO0FBQ0EsY0FBYyxHQUFHLGtCQUFrQixDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsR0FBRyxJQUFJOzs7Ozs7QUNQNUUsU0FBUyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUU7QUFDaEMsRUFBRSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksSUFBSSxFQUFFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1SCxDQUFDO0FBQ0Q7QUFDQSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLHlCQUF5QixHQUFHLElBQUk7Ozs7OztBQ0g1RSxTQUFTLDJCQUEyQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUU7QUFDaEQsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU87QUFDakIsRUFBRSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxPQUFPLGdCQUFnQixDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoRSxFQUFFLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekQsRUFBRSxJQUFJLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7QUFDOUQsRUFBRSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkQsRUFBRSxJQUFJLENBQUMsS0FBSyxXQUFXLElBQUksMENBQTBDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xILENBQUM7QUFDRDtBQUNBLGNBQWMsR0FBRywyQkFBMkIsQ0FBQztBQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUseUJBQXlCLEdBQUcsSUFBSTs7Ozs7O0FDWjVFLFNBQVMsa0JBQWtCLEdBQUc7QUFDOUIsRUFBRSxNQUFNLElBQUksU0FBUyxDQUFDLHNJQUFzSSxDQUFDLENBQUM7QUFDOUosQ0FBQztBQUNEO0FBQ0EsY0FBYyxHQUFHLGtCQUFrQixDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsR0FBRyxJQUFJOzs7Ozs7QUNHNUUsU0FBUyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUU7QUFDakMsRUFBRSxPQUFPLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQ2xILENBQUM7QUFDRDtBQUNBLGNBQWMsR0FBRyxrQkFBa0IsQ0FBQztBQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUseUJBQXlCLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQ2I1RSxXQUFTLGVBQVQsQ0FBeUIsUUFBekIsRUFBbUMsV0FBbkMsRUFBZ0Q7QUFDOUMsUUFBSSxFQUFFLFFBQVEsWUFBWSxXQUF0QixDQUFKLEVBQXdDO0FBQ3RDLFlBQU0sSUFBSSxTQUFKLENBQWMsbUNBQWQsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsRUFBQSxNQUFBLENBQUEsT0FBQSxHQUFpQixlQUFqQjtBQUNBLEVBQUEsTUFBTSxDQUFDLE9BQVAsQ0FBZSxTQUFmLElBQTRCLE1BQU0sQ0FBQyxPQUFuQyxFQUE0QyxNQUFBLENBQUEsT0FBQSxDQUFBLFVBQUEsR0FBNEIsSUFBeEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQ7QUFBQSxTQUFVLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsQ0FBQ0QsSUFBRCxDQUFELENBQVFHLFdBQVIsR0FBc0JDLGFBQXRCLENBQW9DRixDQUFDLENBQUNGLElBQUQsQ0FBRCxDQUFRRyxXQUFSLEVBQXBDLENBQVY7QUFBQSxHQUFWO0FBQUEsQ0FBbkI7O0FBRUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsUUFBRCxFQUFXQyxTQUFYLEVBQXlCO0FBQ3RDLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxZQUFKLENBQWlCSCxRQUFqQixFQUEyQkMsU0FBM0IsQ0FBWjtBQUVBLE1BQU1HLFlBQVksR0FBR0YsR0FBRyxDQUFDRyxZQUFKLENBQWlCQyxRQUFqQixHQUE0QkMsTUFBNUIsQ0FBbUMsVUFBQ0MsR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDckUsUUFBSSxDQUFDQSxJQUFJLENBQUNDLE9BQVYsRUFBbUI7QUFDakJGLE1BQUFBLEdBQUcsQ0FBQ0csSUFBSixDQUFTRixJQUFJLENBQUNmLElBQWQ7QUFDRDtBQUNEO0FBQ0o7QUFDQTs7O0FBQ0ksV0FBT2MsR0FBUDtBQUNELEdBUm9CLEVBUWxCLEVBUmtCLENBQXJCO0FBU0FKLEVBQUFBLFlBQVksQ0FBQ1EsSUFBYixDQUFrQixVQUFDakIsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxDQUFDRSxXQUFGLEdBQWdCQyxhQUFoQixDQUE4QkYsQ0FBQyxDQUFDQyxXQUFGLEVBQTlCLENBQVY7QUFBQSxHQUFsQixFQVpzQzs7QUFldEMsTUFBTWdCLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLFFBQUQ7QUFBQSxXQUNkWixHQUFHLENBQUNhLEtBQUosQ0FBVUMsR0FBVixDQUFjRixRQUFkLEVBQXdCO0FBQ3RCRyxNQUFBQSxRQUFRLEVBQUksSUFEVTtBQUV0QkMsTUFBQUEsU0FBUyxFQUFHLG1CQUFDeEIsSUFBRDtBQUFBLCtCQUFtQkEsSUFBbkI7QUFBQTtBQUZVLEtBQXhCLENBRGM7QUFBQSxHQUFoQjs7QUFNQSxNQUFNeUIsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxJQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFBQSxpREFDWkQsSUFBSSxDQUFDRSxPQUFMLElBQWdCLEVBREo7QUFBQTs7QUFBQTtBQUM1QywwREFBb0Q7QUFBQSxZQUFqQ0MsT0FBaUMsZUFBdkM3QixJQUF1QztBQUNsRCxZQUFNOEIsT0FBTyxHQUFHWCxPQUFPLENBQUNVLE9BQUQsQ0FBdkI7QUFDQUYsUUFBQUEsTUFBTSxHQUFHQSxNQUFNLENBQUNJLE1BQVAsQ0FBY0QsT0FBTyxDQUFDSCxNQUFSLElBQWtCLEVBQWhDLENBQVQ7QUFFQUEsUUFBQUEsTUFBTSxHQUFHRixtQkFBbUIsQ0FBQ0ssT0FBRCxFQUFVSCxNQUFWLENBQTVCO0FBQ0Q7QUFOMkM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRNUMsV0FBT0EsTUFBUDtBQUNELEdBVEQ7O0FBV0EsTUFBTUssRUFBRSxHQUFHLEVBQVgsQ0FoQ3NDO0FBbUN0Qzs7QUFDQUEsRUFBQUEsRUFBRSxDQUFDZixJQUFILENBQVEsNEJBQVI7QUFFQWUsRUFBQUEsRUFBRSxDQUFDZixJQUFILENBQVEsd0JBQVI7QUFDQWUsRUFBQUEsRUFBRSxDQUFDZixJQUFILENBQVEsOENBQVI7QUFFQWUsRUFBQUEsRUFBRSxDQUFDZixJQUFILENBQVEsdUJBQVI7O0FBekNzQyxnREEwQ2ZQLFlBMUNlO0FBQUE7O0FBQUE7QUFBQTtBQUFBLFVBMEMzQlUsUUExQzJCO0FBMkNwQyxVQUFNTSxJQUFJLEdBQUdQLE9BQU8sQ0FBQ0MsUUFBRCxDQUFwQjtBQUVBWSxNQUFBQSxFQUFFLENBQUNmLElBQUgsZUFBZVMsSUFBSSxDQUFDMUIsSUFBcEI7QUFDQWdDLE1BQUFBLEVBQUUsQ0FBQ2YsSUFBSCxXQUFXUyxJQUFJLENBQUNPLFdBQWhCO0FBRUEsVUFBSU4sTUFBTSxHQUFHRCxJQUFJLENBQUNDLE1BQUwsSUFBZSxFQUE1QjtBQUNBQSxNQUFBQSxNQUFNLEdBQUdGLG1CQUFtQixDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBNUI7O0FBRUEsVUFBSUEsTUFBSixFQUFZO0FBQ1YsWUFBTU8sU0FBUyxHQUFHUCxNQUFNLENBQUNRLE1BQXpCO0FBQ0FSLFFBQUFBLE1BQU0sQ0FBQ1MsS0FBUCxHQUFlQyxPQUFmLEdBQXlCQyxPQUF6QixDQUFpQyxVQUFDQyxJQUFELEVBQU9DLEVBQVAsRUFBYztBQUM3QyxjQUFNQyxPQUFPLEdBQUdQLFNBQVMsR0FBR00sRUFBWixHQUFpQixDQUFqQztBQUNBLGNBQU1FLE1BQU0sR0FBR2YsTUFBTSxDQUFDZ0IsU0FBUCxDQUFpQixVQUFBQyxFQUFFO0FBQUEsbUJBQUlBLEVBQUUsQ0FBQ1gsV0FBSCxLQUFtQk0sSUFBSSxDQUFDTixXQUE1QjtBQUFBLFdBQW5CLENBQWY7O0FBQ0EsY0FBSVEsT0FBTyxLQUFLQyxNQUFoQixFQUF3QjtBQUN0QmYsWUFBQUEsTUFBTSxDQUFDa0IsTUFBUCxDQUFjSixPQUFkLEVBQXVCLENBQXZCO0FBQ0Q7QUFDRixTQU5EO0FBUUFULFFBQUFBLEVBQUUsQ0FBQ2YsSUFBSCxDQUFRLFNBQVI7O0FBVlUsc0RBV1NVLE1BQU0sSUFBSSxFQVhuQjtBQUFBOztBQUFBO0FBV1YsaUVBQWlDO0FBQUEsZ0JBQXRCWSxJQUFzQjtBQUMvQlAsWUFBQUEsRUFBRSxDQUFDZixJQUFILGFBQWFzQixJQUFJLENBQUNOLFdBQWxCO0FBQ0Q7QUFiUztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWNWRCxRQUFBQSxFQUFFLENBQUNmLElBQUgsQ0FBUSxFQUFSO0FBQ0Q7O0FBRUQsVUFBTTZCLFdBQVcsR0FBR3RDLEdBQUcsQ0FBQ2EsS0FBSixDQUFVMEIsY0FBVixDQUF5QnJCLElBQUksQ0FBQzFCLElBQTlCLEVBQW9Da0IsSUFBcEMsQ0FBeUNuQixVQUFVLENBQUMsWUFBRCxDQUFuRCxDQUFwQjtBQUVBLFVBQU1pRCxVQUFVLEdBQUdGLFdBQVcsSUFBSUEsV0FBVyxDQUFDWCxNQUFaLEdBQXFCLENBQXZEOztBQUVBLFVBQUlULElBQUksQ0FBQ3VCLFFBQVQsRUFBbUI7QUFDakIsWUFBTUMsS0FBSyxHQUFHSixXQUFXLENBQUMsQ0FBRCxDQUF6QixDQURpQjs7QUFHakJFLFFBQUFBLFVBQVUsR0FDTmhCLEVBQUUsQ0FBQ2YsSUFBSCxXQUFXaUMsS0FBSyxDQUFDQyxVQUFqQixlQUFnQ0QsS0FBSyxDQUFDRSxTQUF0QyxlQUFvREYsS0FBSyxDQUFDRyxLQUExRCw4QkFBbUYzQixJQUFJLENBQUMxQixJQUF4RixRQURNLEdBRU5nQyxFQUFFLENBQUNmLElBQUgsQ0FBUSwwQ0FBUixDQUZKO0FBR0QsT0FORCxNQU9LO0FBQ0hlLFFBQUFBLEVBQUUsQ0FBQ2YsSUFBSCxDQUFRLGdCQUFSOztBQUVBLFlBQUkrQixVQUFKLEVBQWdCO0FBQUEsd0RBQ01GLFdBRE47QUFBQTs7QUFBQTtBQUNkLG1FQUFpQztBQUFBLGtCQUF0QkksTUFBc0I7QUFDL0JsQixjQUFBQSxFQUFFLENBQUNmLElBQUgsYUFBYWlDLE1BQUssQ0FBQ0MsVUFBbkIsZUFBa0NELE1BQUssQ0FBQ0UsU0FBeEMsZUFBc0RGLE1BQUssQ0FBQ0csS0FBNUQ7QUFDRDtBQUhhO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWRyQixVQUFBQSxFQUFFLENBQUNmLElBQUgsQ0FBUSxFQUFSO0FBQ0QsU0FMRCxNQU1LO0FBQ0hlLFVBQUFBLEVBQUUsQ0FBQ2YsSUFBSCxDQUFRLFlBQVI7QUFDRDtBQUNGO0FBM0ZtQzs7QUEwQ3RDLDJEQUFxQztBQUFBO0FBa0RwQztBQTVGcUM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE4RnRDZSxFQUFBQSxFQUFFLENBQUNmLElBQUgsQ0FBUSxtQkFBUjs7QUFFQSxNQUFNcUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxZQUFELEVBQWU3QixJQUFmLEVBQXdCO0FBQ2xELFFBQUlBLElBQUksQ0FBQzhCLFVBQVQsRUFBcUI7QUFDbkJELE1BQUFBLFlBQVksQ0FBQ3RDLElBQWIsQ0FBa0JTLElBQWxCO0FBQ0Q7O0FBQ0QsV0FBTzZCLFlBQVA7QUFDRCxHQUxEOztBQWhHc0MsZ0RBdUduQi9DLEdBQUcsQ0FBQ2EsS0FBSixDQUFVb0MsSUFBVixHQUFpQjVDLE1BQWpCLENBQXdCeUMsbUJBQXhCLEVBQTZDLEVBQTdDLEVBQWlEcEMsSUFBakQsQ0FBc0RuQixVQUFVLENBQUMsTUFBRCxDQUFoRSxDQXZHbUI7QUFBQTs7QUFBQTtBQXVHdEMsMkRBQThGO0FBQUEsVUFBbkYyQixJQUFtRjtBQUM1Rk0sTUFBQUEsRUFBRSxDQUFDZixJQUFILGVBQWVTLElBQUksQ0FBQzFCLElBQXBCO0FBQ0FnQyxNQUFBQSxFQUFFLENBQUNmLElBQUgsV0FBV1MsSUFBSSxDQUFDTyxXQUFoQjtBQUVBRCxNQUFBQSxFQUFFLENBQUNmLElBQUgsQ0FBUSxnQkFBUjtBQUVBLFVBQU02QixXQUFXLEdBQUd0QyxHQUFHLENBQUNhLEtBQUosQ0FBVTBCLGNBQVYsQ0FBeUJyQixJQUFJLENBQUMxQixJQUE5QixFQUFvQ2tCLElBQXBDLENBQXlDbkIsVUFBVSxDQUFDLFlBQUQsQ0FBbkQsQ0FBcEI7O0FBRUEsVUFBSStDLFdBQVcsSUFBSUEsV0FBVyxDQUFDWCxNQUFaLEdBQXFCLENBQXhDLEVBQTJDO0FBQUEsc0RBQ3JCVyxXQURxQjtBQUFBOztBQUFBO0FBQ3pDLGlFQUFpQztBQUFBLGdCQUF0QkksS0FBc0I7QUFDL0JsQixZQUFBQSxFQUFFLENBQUNmLElBQUgsYUFBYWlDLEtBQUssQ0FBQ0MsVUFBbkIsZUFBa0NELEtBQUssQ0FBQ0UsU0FBeEMsaUJBQXdERixLQUFLLENBQUM3QixLQUFOLENBQVksQ0FBWixFQUFlckIsSUFBdkUsZUFBZ0ZrRCxLQUFLLENBQUNHLEtBQXRGO0FBQ0Q7QUFId0M7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJekNyQixRQUFBQSxFQUFFLENBQUNmLElBQUgsQ0FBUSxFQUFSO0FBQ0QsT0FMRCxNQU1LO0FBQ0hlLFFBQUFBLEVBQUUsQ0FBQ2YsSUFBSCxDQUFRLFlBQVI7QUFDRDtBQUNGO0FBeEhxQztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTBIdEMsU0FBT2UsRUFBUDtBQUNELENBM0hEOzs7Ozs7Ozs2Q0NBbUIzQixNQUFNLE1BQU4sNEJBQVVxRCxPQUFPLENBQUNDLElBQVIsQ0FBYXZCLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBVjs7OztBQUFuQixzREFBcUQ7QUFBQSxRQUExQ3dCLElBQTBDO0FBQ25EQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNEOzs7OzsifQ==
