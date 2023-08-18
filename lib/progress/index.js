import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import "./style/index.less";
export var Progress = function Progress(props) {
  var percent = props.percent,
    max = props.max,
    _props$inner = props.inner,
    inner = _props$inner === void 0 ? false : _props$inner,
    circle = props.circle,
    style = props.style,
    _props$theme = props.theme,
    theme = _props$theme === void 0 ? 'primary' : _props$theme;
  var canvas = useRef(null);
  var value = useMemo(function () {
    var res = percent >= max ? max : percent;
    return res + '%';
  }, [percent, max]);
  var colorMap = {
    primary: '#d07b8b',
    success: '#67c23a',
    warning: '#e6a23c',
    danger: '#f56c6c',
    link: '#d63384'
  };

  // 圆形进度条
  useEffect(function () {
    var _canvas$current;
    var ctx = (_canvas$current = canvas.current) === null || _canvas$current === void 0 ? void 0 : _canvas$current.getContext('2d');
    var ratio = window.devicePixelRatio || 1;
    var w = 150;
    var h = 150;
    if (canvas.current && ctx) {
      canvas.current.width = w * ratio; // 实际渲染像素
      canvas.current.height = h * ratio; // 实际渲染像素
      canvas.current.style.width = "".concat(w, "px"); // 控制显示大小
      canvas.current.style.height = "".concat(h, "px"); // 控制显示大小
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgba(44, 104, 255, 0.06)';
      ctx.arc(w / 2, h / 2, 50, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = colorMap[theme];

      // (Math.PI / 180) * 360
      ctx.arc(w / 2, h / 2, 50, 0, (percent >= max ? max : percent / 100) * Math.PI * 2, false);
      ctx.stroke();

      // const measureText = ctx?.measureText(`${percentage}%`)
      ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
      ctx.font = '20px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = colorMap[theme];
      ctx === null || ctx === void 0 ? void 0 : ctx.fillText(value, w / 2, h / 2 + 10);
    }
  }, [percent]);
  var classes = classNames('progress', _defineProperty({}, "cherry-components-".concat(theme), theme));
  return !circle ? /*#__PURE__*/React.createElement("div", {
    className: "cherry-progress",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes,
    style: {
      width: value
    }
  }, inner && value)), /*#__PURE__*/React.createElement("span", null, !inner && value)) : /*#__PURE__*/React.createElement("canvas", {
    ref: canvas
  });
};
export default Progress;