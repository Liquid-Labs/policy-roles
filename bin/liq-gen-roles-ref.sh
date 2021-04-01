#!/usr/bin/env bash

cat <<'EOF' | node - "$@"
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs__default = require('fs');
var fs__default__default = _interopDefault(fs__default);
var path = _interopDefault(require('path'));

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray = _arrayLikeToArray;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

var unsupportedIterableToArray = _unsupportedIterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray$1 = createCommonjsModule(function (module) {
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

unwrapExports(arrayLikeToArray$1);

var arrayWithoutHoles$1 = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray$1(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles$1);

var iterableToArray$1 = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray$1);

var unsupportedIterableToArray$1 = createCommonjsModule(function (module) {
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

unwrapExports(unsupportedIterableToArray$1);

var nonIterableSpread$1 = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread$1);

var toConsumableArray$1 = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles$1(arr) || iterableToArray$1(arr) || unsupportedIterableToArray$1(arr) || nonIterableSpread$1();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray$1 = unwrapExports(toConsumableArray$1);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
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

unwrapExports(iterableToArrayLimit);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray$1(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _slicedToArray = unwrapExports(slicedToArray);

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _classCallCheck = unwrapExports(classCallCheck);

var createClass = createCommonjsModule(function (module) {
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

var _createClass = unwrapExports(createClass);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      }, _toConsumableArray$1(this.children));
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

      var _iterator = _createForOfIteratorHelper(role.implies || []),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = _step.value,
              impliedRoleName = _step$value.name,
              mngrProtocol = _step$value.mngrProtocol;
          // implied roles are handled by inserting the implied roles as managed by the super-role. When the org chart is
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

    var _iterator2 = _createForOfIteratorHelper(nodes),
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
      return _toConsumableArray$1(this.roots);
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

var _typeof_1 = createCommonjsModule(function (module) {
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

var _typeof = unwrapExports(_typeof_1);

// JSONLoop is a trivial rework of https://github.com/dabeng/JSON-Loop cc9bf8d3ec9d366160
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
        } else if (_typeof(conditions[item]) === 'object') {
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

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1$1(o, minLen); }

function _arrayLikeToArray$1$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

      var _iterator = _createForOfIteratorHelper$1(results),
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

/**
* Basic methods for accessing the accounts data.
*/

/**
* Retrieves a single account entry by name.
*/
var get = function get(data, name) {
  var _data$thirdPartyAccou;

  return (data === null || data === void 0 ? void 0 : (_data$thirdPartyAccou = data.thirdPartyAccounts) === null || _data$thirdPartyAccou === void 0 ? void 0 : _data$thirdPartyAccou[name]) && toStandalone(data, name);
};

var list = function list(data) {
  return Object.keys((data === null || data === void 0 ? void 0 : data.thirdPartyAccounts) || {}).sort().map(function (key) {
    return toStandalone(data, key);
  });
}; // helper/non-exported items

/**
* Creates a new/copy of the account data with an additional 'name' field. The name should be the key value which
* pointed to the account data.
*/


var toStandalone = function toStandalone(data, name) {
  return Object.assign({}, data.thirdPartyAccounts[name], {
    name: name
  });
};

var AccountsAPI = /*#__PURE__*/function () {
  function AccountsAPI(org) {
    _classCallCheck(this, AccountsAPI);

    this.org = org;
    this.checkCondition = AccountsAPI.checkCondition;
    this.key = 'name';
  }

  _createClass(AccountsAPI, [{
    key: "get",
    value: function get$1(name) {
      return get(this.org.innerState, name);
    }
  }, {
    key: "list",
    value: function list$1() {
      return list(this.org.innerState);
    }
  }]);

  return AccountsAPI;
}();
/**
* Obligitory 'checkCondition' function provided by the API for processing inclusion or exclusion of Account targets in
* an audit. We do this weird 'defineProperty' thing because it effectively gives us a 'static const'
*/


var checkCondition = function checkCondition(condition, acct) {
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
  value: checkCondition,
  writable: false,
  enumerable: true,
  configurable: false
});

var assertThisInitialized = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _assertThisInitialized = unwrapExports(assertThisInitialized);

var setPrototypeOf = createCommonjsModule(function (module) {
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

unwrapExports(setPrototypeOf);

var inherits = createCommonjsModule(function (module) {
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

var _inherits = unwrapExports(inherits);

var possibleConstructorReturn = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];



function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _possibleConstructorReturn = unwrapExports(possibleConstructorReturn);

var getPrototypeOf = createCommonjsModule(function (module) {
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

var _getPrototypeOf = unwrapExports(getPrototypeOf);

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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    this.checkCondition = checkCondition$1;
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


var checkCondition$1 = function checkCondition(condition, role) {
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

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
    this.checkCondition = checkCondition$2;
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
      console.log('Staff: ', memberData);
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
  var _iterator = _createForOfIteratorHelper$2(role.implies || []),
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


var checkCondition$2 = function checkCondition(condition, member) {
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

Staff.checkCondition = checkCondition$2;

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof_1$1 = createCommonjsModule$1(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _arrayLikeToArray$3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var arrayLikeToArray$1$1 = _arrayLikeToArray$3;

function _arrayWithoutHoles$1(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray$1$1(arr);
}

var arrayWithoutHoles$1$1 = _arrayWithoutHoles$1;

function _iterableToArray$1(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

var iterableToArray$1$1 = _iterableToArray$1;

function _unsupportedIterableToArray$3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray$1$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray$1$1(o, minLen);
}

var unsupportedIterableToArray$1$1 = _unsupportedIterableToArray$3;

function _nonIterableSpread$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var nonIterableSpread$1$1 = _nonIterableSpread$1;

function _toConsumableArray$1$1(arr) {
  return arrayWithoutHoles$1$1(arr) || iterableToArray$1$1(arr) || unsupportedIterableToArray$1$1(arr) || nonIterableSpread$1$1();
}

var toConsumableArray$1$1 = _toConsumableArray$1$1;

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1$1$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1$1$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1$1$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1$1$1(o, minLen); }

function _arrayLikeToArray$1$1$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

  var matches = toConsumableArray$1$1(path.matchAll(replaceRE));

  matches.reverse(); // The reverse allows us to use the start and end indexes without messing up the string.

  var _iterator = _createForOfIteratorHelper$3(matches),
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

  return path;
};

function _createForOfIteratorHelper$1$1(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2$1(o, minLen); }

function _arrayLikeToArray$2$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var FJSON_META_DATA_KEY = 'com.liquid-labs.federated-json';
/**
* Reads a JSON file and processes for federated mount points to construct a composite JSON object from one or more
* files.
*/


var readFJSON = function readFJSON(filePath, options) {
  var _ref = options || {},
      rememberSource = _ref.rememberSource;

  var processedPath = envTemplateString(filePath);

  if (!fs__default.existsSync(processedPath)) {
    var msg = "No such file: '".concat(filePath, "'") + (filePath !== processedPath ? " ('".concat(processedPath, "')") : '');
    throw new Error(msg);
  }

  var dataBits = fs__default.readFileSync(processedPath);
  var data = JSON.parse(dataBits);

  if (rememberSource) {
    setSource(data, filePath);
  }

  var _iterator = _createForOfIteratorHelper$1$1(getMountSpecs(data) || []),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var mntSpec = _step.value;

      var _processMountSpec = processMountSpec(mntSpec, data),
          dataFile = _processMountSpec.dataFile,
          mountPoint = _processMountSpec.mountPoint,
          finalKey = _processMountSpec.finalKey;

      var subData = readFJSON(dataFile);
      mountPoint[finalKey] = subData;
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
        finalRef.splice.apply(finalRef, [0, finalRef.length].concat(toConsumableArray$1$1(realItems)));
      } else if (_typeof_1$1(finalRef) === 'object') {
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
* Internal function to test for and extract mount specs from the provided JSON object.
*/


var getMountSpecs = function getMountSpecs(data) {
  var _getMyMeta;

  return (_getMyMeta = getMyMeta(data)) === null || _getMyMeta === void 0 ? void 0 : _getMyMeta.mountSpecs;
};
/**
* Internal function to process a mount spec into useful components utilized by the `readFJSON` and `writeFJSON`.
*/


var processMountSpec = function processMountSpec(mntSpec, data) {
  var dataPath = mntSpec.dataPath,
      dataFile = mntSpec.dataFile;
  dataFile = envTemplateString(dataFile);

  var _processJSONPath = processJSONPath(dataPath, data),
      mountPoint = _processJSONPath.penultimateRef,
      finalKey = _processJSONPath.finalKey;

  return {
    dataFile: dataFile,
    mountPoint: mountPoint,
    finalKey: finalKey
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

  var _processJSONPath2 = processJSONPath(linkRefs, data),
      finalRef = _processJSONPath2.finalRef,
      penultimateRef = _processJSONPath2.penultimateRef,
      finalKey = _processJSONPath2.finalKey;

  var _processJSONPath3 = processJSONPath(linkTo, data),
      source = _processJSONPath3.finalRef;

  return {
    finalRef: finalRef,
    source: source,
    keyName: keyName,
    penultimateRef: penultimateRef,
    finalKey: finalKey
  };
};

var processJSONPath = function processJSONPath(path, data) {
  var pathTrail = path.split('/');
  var finalKey = pathTrail.pop();

  if (finalKey === undefined) {
    throw new Error('Path must specify at least one key.');
  }

  var penultimateRef = data; // not necessarily penultimate yet, but will be...

  var _iterator4 = _createForOfIteratorHelper$1$1(pathTrail),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var key = _step4.value;
      penultimateRef = penultimateRef[key];
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return {
    finalRef: penultimateRef[finalKey],
    penultimateRef: penultimateRef,
    finalKey: finalKey
  };
}; // aliases for 'import * as fjson; fjson.write()' style
var read = readFJSON;

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




function log (message /*: string */) {
  console.log(`[dotenv][DEBUG] ${message}`);
}

const NEWLINE = '\n';
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
const RE_NEWLINES = /\\n/g;
const NEWLINES_MATCH = /\n|\r|\r\n/;

// Parses src into an Object
function parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {
  const debug = Boolean(options && options.debug);
  const obj = {};

  // convert Buffers before splitting into lines and processing
  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    const keyValueArr = line.match(RE_INI_KEY_VAL);
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1];
      // default undefined or missing values to empty string
      let val = (keyValueArr[2] || '');
      const end = val.length - 1;
      const isDoubleQuoted = val[0] === '"' && val[end] === '"';
      const isSingleQuoted = val[0] === "'" && val[end] === "'";

      // if single or double quoted, remove quotes
      if (isSingleQuoted || isDoubleQuoted) {
        val = val.substring(1, end);

        // if double quoted, expand newlines
        if (isDoubleQuoted) {
          val = val.replace(RE_NEWLINES, NEWLINE);
        }
      } else {
        // remove surrounding whitespace
        val = val.trim();
      }

      obj[key] = val;
    } else if (debug) {
      log(`did not match key and value when parsing line ${idx + 1}: ${line}`);
    }
  });

  return obj
}

// Populates process.env from .env file
function config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {
  let dotenvPath = path.resolve(process.cwd(), '.env');
  let encoding /*: string */ = 'utf8';
  let debug = false;

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
    const parsed = parse(fs__default__default.readFileSync(dotenvPath, { encoding }), { debug });

    Object.keys(parsed).forEach(function (key) {
      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {
        process.env[key] = parsed[key];
      } else if (debug) {
        log(`"${key}" is already defined in \`process.env\` and will not be overwritten`);
      }
    });

    return { parsed }
  } catch (e) {
    return { error: e }
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

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Organization = /*#__PURE__*/function () {
  function Organization(dataPath, staffJsonPath) {
    _classCallCheck(this, Organization);

    // innerState defines:
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

      var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'debang/OrgChart';

      // Implementation notes:
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

                var managingRoles = _this.getManagingRolesByManagedRoleName(r.getName()); // DEBUG

                /* if (r.getName() === 'Chairman of the Board') {
                  console.error("Hey!\n----------------\n")
                  console.error(managingRoles)
                } */


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

          return {
            id: row[0],
            ids: [row[0]],
            parent_id: row[1],
            email: email,
            name: staffMember.getFullName(),
            titles: [title],
            roles: [role]
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

          (_target$titles = target.titles).push.apply(_target$titles, _toConsumableArray$1(source.titles));

          (_target$ids = target.ids).push.apply(_target$ids, _toConsumableArray$1(source.ids));

          (_target$roles = target.roles).push.apply(_target$roles, _toConsumableArray$1(source.roles));
        }; // collapse/merge nodes where appropriate


        childNodes.forEach(function (node) {
          var jsonloop = new JSONLoop(data, 'id', 'children');
          jsonloop.findParent(data, node, function (err, parent) {
            if (err) throw new Error("Could not find parent for '".concat(node.id, "'; is chart valid?"));

            if (parent) {
              // merge sideways
              var _iterator = _createForOfIteratorHelper$4(node.roles),
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

                  var _iterator2 = _createForOfIteratorHelper$4(sibblingsRoleNamesToMerge || []),
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

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    var _iterator = _createForOfIteratorHelper$5(role.implies || []),
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

  var _iterator2 = _createForOfIteratorHelper$5(companyRoles),
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

        var _iterator4 = _createForOfIteratorHelper$5(duties || []),
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
          var _iterator5 = _createForOfIteratorHelper$5(staffInRole),
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

  var _iterator3 = _createForOfIteratorHelper$5(org.roles.list().reduce(designationsReducer, []).sort(nameSorter('name'))),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var role = _step3.value;
      sb.push("### ".concat(role.name, "\n"));
      sb.push("".concat(role.description, "\n"));
      sb.push('#### Members\n');
      var staffInRole = org.roles.getStaffInRole(role.name).sort(nameSorter('familyName'));

      if (staffInRole && staffInRole.length > 0) {
        var _iterator6 = _createForOfIteratorHelper$5(staffInRole),
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

function _createForOfIteratorHelper$6(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _iterator = _createForOfIteratorHelper$6(genDoc.apply(void 0, toConsumableArray(process.argv.slice(2)))),
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
//# sourceMappingURL=gen-roles-ref.js.map
EOF
