import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "open", "title", "mask", "close", "center", "footerType", "footerItem", "onClose", "onOk"];
import { Button } from "cherry-ui-react";
import { IconClose } from "../icons";
import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./style/index.less";
var Modal = function Modal(props) {
  var children = props.children,
    open = props.open,
    title = props.title,
    mask = props.mask,
    close = props.close,
    center = props.center,
    footerType = props.footerType,
    footerItem = props.footerItem,
    onClose = props.onClose,
    onOk = props.onOk,
    restProps = _objectWithoutProperties(props, _excluded);
  // const [masked,setMasked] = useState(false);

  var onCancel = function onCancel() {
    if (typeof onClose == 'function') {
      onClose();
    }
  };
  var onYes = function onYes() {
    if (typeof onOk == 'function') {
      onOk();
    }
  };
  useEffect(function () {
    //禁止滚动
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  // footer按钮类型
  var buttonArea = {
    default: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "footer-item",
      onClick: onCancel
    }, /*#__PURE__*/React.createElement(Button, null, "\u53D6\u6D88")), /*#__PURE__*/React.createElement("span", {
      className: "footer-item",
      onClick: onYes
    }, /*#__PURE__*/React.createElement(Button, null, "\u786E\u5B9A"))),
    simple: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "footer-item",
      onClick: onYes
    }, /*#__PURE__*/React.createElement(Button, null, "\u77E5\u9053\u4E86")))
  };
  return open ? /*#__PURE__*/React.createElement("div", _extends({
    className: "cherry-modal"
  }, restProps), mask && /*#__PURE__*/React.createElement(CSSTransition, {
    classNames: "cherry-modal-mask",
    in: open,
    timeout: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-mask"
  })), /*#__PURE__*/React.createElement(CSSTransition, {
    classNames: "cherry-modal-content",
    in: open,
    timeout: 300
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('modal-content', center ? '' : 'modal-content-default')
  }, /*#__PURE__*/React.createElement("header", {
    className: "modal-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-title"
  }, title), close && /*#__PURE__*/React.createElement("div", {
    className: "modal-close",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement(IconClose, null))), /*#__PURE__*/React.createElement("div", {
    className: "modal-body"
  }, children), /*#__PURE__*/React.createElement("footer", {
    className: "modal-footer"
  }, footerItem ? footerItem.map(function (item, index) {
    return /*#__PURE__*/React.createElement("span", {
      className: "footer-item",
      key: index
    }, item);
  }) : footerType && buttonArea[footerType])))) : null;
};
Modal.defaultProps = {
  open: false,
  title: '',
  mask: true,
  close: true,
  center: false,
  footerType: "default"
};
export default Modal;