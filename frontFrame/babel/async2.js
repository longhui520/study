"use strict";

require("core-js/modules/es6.regexp.match");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function timeout(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

function asyncPrint(_x, _x2) {
  return _asyncPrint.apply(this, arguments);
}

function _asyncPrint() {
  _asyncPrint = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(value, ms) {
    var vv;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return timeout(ms);

          case 2:
            vv = _context.sent;
            console.log(vv);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _asyncPrint.apply(this, arguments);
}

asyncPrint('hello world', 50);

function getTitle(_x3) {
  return _getTitle.apply(this, arguments);
}

function _getTitle() {
  _getTitle = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(url) {
    var response, html;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(url);

          case 2:
            response = _context2.sent;
            _context2.next = 5;
            return response.text();

          case 5:
            html = _context2.sent;
            console.log(html);
            console.log(1);
            return _context2.abrupt("return", html.match(/<title>([\s\S]+)<\/title>/i)[1]);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTitle.apply(this, arguments);
}

getTitle('https://tc39.github.io/ecma262/').then(console.log);
