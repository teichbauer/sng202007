"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _entityLoader = _interopRequireDefault(require("./entityClasses/entityLoader.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LDManager =
/*#__PURE__*/
function () {
  function LDManager(cid, nameMap) {
    _classCallCheck(this, LDManager);

    this.cid = cid;
    this.nameMap = nameMap;
  }

  _createClass(LDManager, [{
    key: "load_ents",
    value: function load_ents(ents) {
      (0, _entityLoader["default"])(this.cid, ents, this.nameMap);
    }
  }]);

  return LDManager;
}();

exports["default"] = LDManager;