(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.binding = require('../lib/index').default;

},{"../lib/index":2}],2:[function(require,module,exports){
'use strict';

var _nameSpaceToValue = require('./nameSpaceToValue');

var _nameSpaceToValue2 = _interopRequireDefault(_nameSpaceToValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function globalBinder() {
  var firstArgument = arguments.length <= 0 ? undefined : arguments[0];
  if (typeof firstArgument === 'string' && firstArgument.indexOf('.') > 0) {
    return _nameSpaceToValue2.default.apply(undefined, arguments);
  }
}

module.exports = globalBinder;
},{"./nameSpaceToValue":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function binder(nameSpace, value, mountTo) {
    var result = {};
    var parts = nameSpace.split('.');
    if (parts.length == 1) {
        result[parts[0]] = value;
    } else if (parts.length > 1) {
        var remainingParts = parts.slice(1, parts.length).join('.');
        result[parts[0]] = binder(remainingParts, value);
    }

    if (mountTo) {
        mountTo[parts[0]] = result[parts[0]];
    }

    return result;
}

exports.default = binder;
},{}]},{},[1]);
