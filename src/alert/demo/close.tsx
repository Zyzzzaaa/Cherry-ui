/**
 * title: 关闭按钮
 * description: 可以通过`closeable`属性来设置是否使用关闭按钮，还可以设置`onClose`来自定义点击关闭按钮触发的事件。
 */ 
 import React from "react";
 import { Alert } from "cherry-ui-react-ui";
 
 export default () => {
     return (
         <div>
             <Alert title="默认提示" closeable={true}>这是一条默认关闭警告框提示。</Alert>
             <Alert title="默认提示" closeable={true} onClose={()=>{alert('关闭')}}>这是一条关闭按钮自定义事件的提示。</Alert>
         </div>
     )
 }