"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

require("./modal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Modal = function Modal(_ref) {
  var handleClose = _ref.handleClose,
      show = _ref.show,
      title = _ref.title,
      body = _ref.body;
  var showHideClassName = show ? "modal display-block" : "modal display-none";
  return /*#__PURE__*/_react.default.createElement("div", _defineProperty({
    className: "modal"
  }, "className", showHideClassName), /*#__PURE__*/_react.default.createElement("section", {
    className: "modal__main"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/_react.default.createElement("h3", null, title), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close",
    onClick: handleClose
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__body"
  }, /*#__PURE__*/_react.default.createElement("p", null, body)), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handleClose
  }, "Close"))));
};

exports.Modal = Modal;
