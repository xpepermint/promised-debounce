"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.createDebouncer = createDebouncer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* Creates a debounced function.
*/

function createDebouncer() {
  var timer = null;

  return function (_ref) {
    var handler = _ref.handler,
        _ref$time = _ref.time,
        time = _ref$time === undefined ? 0 : _ref$time;

    var resolve;
    var promise = new _promise2.default(function (r) {
      return resolve = r;
    }).then(function () {
      return handler.call ? handler() : handler;
    });

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      resolve();
    }, time);

    return promise;
  };
}