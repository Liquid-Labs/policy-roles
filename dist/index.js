'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

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

var createClass = _createClass;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var tsv = createCommonjsModule(function (module) {
(function(){

    var br = "\n";

    function extend (o) {
        Array.prototype.slice.call(arguments, 1).forEach(function(source){
            if (!source) return
            for (var keys = Object.keys(source), i = 0; i < keys.length; i++) {
                var key = keys[i];
                o[key] = source[key];
            }
        });
        return o
    }

    function unquote (str) {
        var match;
        return (match = str.match(/(['"]?)(.*)\1/)) && match[2] || str
    }

    function comments (line) {
        return !/#@/.test(line[0])
    }

    function getValues (line, sep) {
        return line.split(sep).map(function(value){
            var value = unquote(value), num = +value;
            return num === parseInt(value, 10) ? num : value
        })
    }

    function Parser (sep, options) {
        var opt = extend({
            header: true
        }, options);

        this.sep = sep;
        this.header = opt.header;
    }

    Parser.prototype.stringify = function (data) {
        var sep    = this.sep
          , head   = !!this.header
          , keys   = (typeof data[0] === 'object') && Object.keys(data[0])
          , header = keys && keys.join(sep)
          , output = head ? (header + br) : '';

        if (!data || !keys) return ''
            
        return output + data.map(function(obj){
            var values = keys.reduce(function(p, key){
                p.push(obj[key]);
                return p
            }, []);
            return values.join(sep)
        }).join(br)
    };

    Parser.prototype.parse = function (tsv) {
        var sep   = this.sep
          , lines = tsv.split(/[\n\r]/).filter(comments)
          , head  = !!this.header
          , keys  = head ? getValues(lines.shift(), sep) : {};

        if (lines.length < 1) return []

        return lines.reduce(function(output, line){
            var item = head ? {} : [];
            output.push(getValues(line, sep).reduce(function(item, val, i){
                item[keys[i] || i] = val;
                return item
            }, item));
            return output
        }, [])
    };

    // Export TSV parser as main, but also expose `.TSV`, `.CSV` and `.Parser`.
    var TSV = new Parser("\t");

    extend(TSV, {
        TSV    : TSV
      , CSV    : new Parser(",")
      , Parser : Parser
    });

    if ( module.exports){
        module.exports = TSV;
    } else {
        this.TSV = TSV;
    }

}).call(commonjsGlobal);
});

var _temp, _data;
var rolesFile = "./policy/roles.tsv";
var Roles = (_temp =
/*#__PURE__*/
function () {
  function Roles() {
    var file = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : rolesFile;

    classCallCheck(this, Roles);

    _data.set(this, {
      writable: true,
      value: void 0
    });

    var contents = fs.readFileSync(file, 'utf8');
    var lines = contents.split("\n");
    var filteredLines = lines.filter(function (line) {
      return !line.match(/^\s*$/);
    });
    this.data = tsv.parse(filteredLines.join("\n"));
  }

  createClass(Roles, [{
    key: "length",
    get: function get() {
      return this.data.length;
    }
  }]);

  return Roles;
}(), _data = new WeakMap(), _temp);

exports.Roles = Roles;
//# sourceMappingURL=index.js.map
