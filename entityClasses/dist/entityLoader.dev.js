"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = entityLoader;

var _util = _interopRequireDefault(require("../models/util.js"));

var _PAClass = _interopRequireDefault(require("./PAClass.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var log_lines;

function entityLoader(cid, pas, nameMap) {
  var find_id_in_map = function find_id_in_map(v, map) {
    if (v in map) {
      return map[v];
    } else {
      console.log("Error: ".concat(v, " not in nameMap"));
      return "";
    }
  };

  var ent; // let card;

  var ents = []; // loop-1: create each with it's _id

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = pas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var pa = _step.value;

      if (!pa.card) {
        pa.card = {
          Name: _util["default"].getDescrValue(pa.descr, "NAME"),
          Descr: _objectSpread({}, pa.descr)
        };
      }

      ent = new _PAClass["default"](cid, pa);
      ents.push(ent);
      nameMap[pa[DPACKEY]] = ent._id;
    } // loop-2: set rels:

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  for (var _i = 0, _ents = ents; _i < _ents.length; _i++) {
    ent = _ents[_i];

    for (var key in ent.rels) {
      var v = ent.rels[key];

      if (_typeof(v) == _typeof("")) {
        // a single
        if (v.length < 28) {
          // generated _id.length > 28: it is DPACKEY
          ent.rels[key] = find_id_in_map(v, nameMap);
        }
      } else if (_typeof(v) == _typeof([])) {
        var ar = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = v[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var e = _step2.value;
            ar.push(find_id_in_map(e, nameMap));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
              _iterator2["return"]();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        ent.rels[key] = ar.slice();
      }
    }
  } // loop-3: save in db


  for (var _i2 = 0, _ents2 = ents; _i2 < _ents2.length; _i2++) {
    ent = _ents2[_i2];
    ent.save_db();
  }
} // end of function entityLoader()